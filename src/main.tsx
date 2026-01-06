import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootComponent from './RootComponent';
import RouteErrorElement from '@/lib/error/RouteErrorElement';
import { routes } from '@/shared/constants/routes';
import { HomePage } from '@pages/home';

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
        path: routes.home.path,
        Component: HomePage,
      },
      {
        path: routes.drilling.path,
        lazy: async () => {
          const { DrillingPage } = await import('@pages/drilling');
          return { Component: DrillingPage };
        },
      },
      {
        path: routes.exam.path,
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
