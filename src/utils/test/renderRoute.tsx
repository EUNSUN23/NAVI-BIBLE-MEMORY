import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@utils/test/render';
import { routes } from '@/shared/constants/routes';
import { RootPage } from '@pages/root/ui/root-page';
import { HomePage } from '@pages/home/ui/home-page';
import { DrillingPage } from '@pages/drilling/ui/drilling-page';
import { ExamPage } from '@pages/exam/ui/exam-page';

const renderRoute = (initialEntry: string = routes.home.path) => {
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path={routes.home.path} element={<RootPage />}>
          <Route index element={<HomePage />} />
          <Route path={routes.drilling.path} element={<DrillingPage />} />
          <Route path={routes.exam.path} element={<ExamPage />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
};

export default renderRoute;
