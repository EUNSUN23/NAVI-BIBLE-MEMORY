import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@shared/config/routes';
import { RootPage } from '@pages/root';
import { HomePage } from '@pages/home';
import { DrillingPage } from '@pages/drilling';
import { ExamPage } from '@pages/exam';
import { customRender } from '@shared/lib/test/render';

const renderRoute = (initialEntry: string = routes.home.path) => {
  customRender(
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
