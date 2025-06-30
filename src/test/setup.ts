import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from '@/msw/node';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
