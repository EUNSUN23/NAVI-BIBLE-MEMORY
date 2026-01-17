import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// eslint-disable-next-line react-refresh/only-export-components
const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 10,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const _customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Provider, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { _customRender as customRender };
