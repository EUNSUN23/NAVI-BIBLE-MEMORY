import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import RootComponent from '@/RootComponent';
import Loader from '@/shared/ui/Loader';
import { HomePage } from '@pages/home';
import { getSeries } from '@features/verseSelect/api/getSeries';
import { render } from '@utils/test/render';
import { DrillingPage } from '@pages/drilling';
import { ExamPage } from '@pages/exam';
import { routes } from '@/shared/constants/routes';

const renderRoute = (initialEntry: string = routes.home.path) => {
  const router = createMemoryRouter(
    [
      {
        element: <RootComponent />,
        HydrateFallback: Loader,
        children: [
          {
            path: routes.home.path,
            element: <HomePage />,
            loader: getSeries,
          },
          {
            path: routes.drilling.path,
            element: <DrillingPage />,
          },
          {
            path: routes.exam.path,
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
