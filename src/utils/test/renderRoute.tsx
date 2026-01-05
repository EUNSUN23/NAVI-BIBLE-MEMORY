import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootComponent from '@/RootComponent';
import Loader from '@/shared/ui/Loader';
import { HomePage } from '@pages/home';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { render } from '@utils/test/render';
import { DrillingPage } from '@pages/drilling';
import { ExamPage } from '@pages/exam';
import { routePaths } from '@/shared/constants/routePaths';

const renderRoute = (initialEntry: string = routePaths.home) => {
  const router = createMemoryRouter(
    [
      {
        element: <RootComponent />,
        HydrateFallback: Loader,
        children: [
          {
            path: routePaths.home,
            element: <HomePage />,
            loader: getSeries,
          },
          {
            path: routePaths.drilling,
            element: <DrillingPage />,
          },
          {
            path: routePaths.exam,
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
