import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { server } from '@/msw/node';

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  server.close();
});

afterEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  server.resetHandlers();
});

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver
vi.stubGlobal('ResizeObserver', ResizeObserverMock);
