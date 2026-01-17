import { Route, Routes } from 'react-router-dom';
import { RootPage } from '@pages/root';
import { lazy } from 'react';
import { routes } from '@shared/config/routes';

const HomePage = lazy(() =>
  import('@pages/home').then(module => ({
    default: module.HomePage,
  })),
);
const DrillingPage = lazy(() =>
  import('@pages/drilling').then(module => ({
    default: module.DrillingPage,
  })),
);
const ExamPage = lazy(() =>
  import('@pages/exam').then(module => ({
    default: module.ExamPage,
  })),
);

export function App() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<RootPage />}>
        <Route index element={<HomePage />} />
        <Route path={routes.drilling.path} element={<DrillingPage />} />
        <Route path={routes.exam.path} element={<ExamPage />} />
      </Route>
    </Routes>
  );
}
