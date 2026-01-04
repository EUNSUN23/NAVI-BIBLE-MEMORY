import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootComponent from '@/RootComponent';
import Loader from '@/shared/ui/Loader';
import { HomePage } from '@pages/home';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { render } from '@utils/test/render';
import { DrillingPage } from '@pages/drilling';
import { ExamPage } from '@pages/exam';

const renderRoute = (initialEntry = '/') => {
  const router = createMemoryRouter(
    [
      {
        element: <RootComponent />,
        HydrateFallback: Loader,
        children: [
          {
            path: '/',
            element: <HomePage />,
            loader: getSeries,
          },
          {
            path: '/drilling',
            element: <DrillingPage />,
          },
          {
            path: '/exam',
            element: <ExamPage />,
          },
        ],
      },
    ],
    { initialEntries: [initialEntry] },
  );
  render(<RouterProvider router={router} />);

  return router;
};

export default renderRoute;
