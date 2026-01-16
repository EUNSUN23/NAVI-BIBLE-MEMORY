import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

function entryChunkDebugPlugin(): PluginOption {
  return {
    name: 'chunk-debug',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        const moduleIds = Object.keys(chunk.modules ?? {});
        const moduleCount = moduleIds.length;

        const topModules = moduleIds
          .map(id => {
            const m = chunk.modules[id];
            const renderedLen =
              typeof m.renderedLength === 'number' ? m.renderedLength : 0;
            return {
              id,
              renderedLen,
              removed: m.removedExports.length,
              remain: m.renderedExports.length,
            };
          })
          .sort((a, b) => b.renderedLen - a.renderedLen)
          .slice(0, 10);

        console.log(`\n[chunk] ${chunk.fileName}`);
        console.log(`- modules: ${moduleCount}`);
        console.log(
          `- imports: ${chunk.imports?.length ?? 0}, dynamicImports: ${chunk.dynamicImports?.length ?? 0}`,
        );
        console.log(`- exports: ${(chunk.exports ?? []).join(', ')}`);

        console.log(`- top modules (renderedLength):`);
        for (const m of topModules) {
          console.log(
            `  ${m.renderedLen.toString().padStart(6, ' ')}  ${m.id}  removed:${m.removed}  used:${m.remain}`,
          );
        }

        return null;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: ['./tsconfig.app.json'] }),
    entryChunkDebugPlugin(),
    visualizer({
      filename: './dist/report.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('supabase')) return 'supabase';
          if (id.includes('@headlessui/react')) return 'headlessui-react';
        },
      },
    },
  },
});
