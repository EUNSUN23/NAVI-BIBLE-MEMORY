import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootComponent from './RootComponent';
import RouteErrorElement from '@/lib/error/RouteErrorElement';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { routePaths } from '@/shared/constants/routePaths';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <RootComponent />,
    errorElement: <RouteErrorElement />,
    children: [
      {
        path: routePaths.home,
        loader: getSeries,
        lazy: async () => {
          const { HomePage } = await import('@pages/home');
          return { Component: HomePage };
        },
      },
      {
        path: routePaths.drilling,
        lazy: async () => {
          const { DrillingPage } = await import('@pages/drilling');
          return { Component: DrillingPage };
        },
      },
      {
        path: routePaths.exam,
        lazy: async () => {
          const { ExamPage } = await import('@pages/exam');
          return { Component: ExamPage };
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
