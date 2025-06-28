import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootComponent from '@/RootComponent';
import Loader from '@/shared/ui/Loader';
import Home from '@pages/home';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { render } from '@/lib/test/testUtils/render';
import DrillingPage from '@pages/drilling';
import Exam from '@pages/exam';

const renderRoute = (initialEntry = '/') => {
  const router = createMemoryRouter(
    [
      {
        element: <RootComponent />,
        HydrateFallback: Loader,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: getSeries,
          },
          {
            path: '/drilling',
            element: <DrillingPage />,
          },
          {
            path: '/exam',
            element: <Exam />,
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
