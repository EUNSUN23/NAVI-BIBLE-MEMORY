import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@utils/test/render';
import { routes } from '@/shared/constants/routes';
import RootComponent from '@/RootComponent';
import { HomePage } from '@pages/home';
import { DrillingPage } from '@pages/drilling';
import { ExamPage } from '@pages/exam';

const renderRoute = (initialEntry: string = routes.home.path) => {
  render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route path={routes.home.path} element={<RootComponent />}>
          <Route index element={<HomePage />} />
          <Route path={routes.drilling.path} element={<DrillingPage />} />
          <Route path={routes.exam.path} element={<ExamPage />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
};

export default renderRoute;
