import { Route, Routes } from 'react-router-dom';
import { RootPage } from '@pages/root/ui/root-page';
import { lazy } from 'react';
import { routes } from '@/shared/constants/routes';

const HomePage = lazy(() =>
  import('@pages/home/ui/home-page').then(module => ({
    default: module.HomePage,
  })),
);
const DrillingPage = lazy(() =>
  import('@pages/drilling/ui/drilling-page').then(module => ({
    default: module.DrillingPage,
  })),
);
const ExamPage = lazy(() =>
  import('@pages/exam/ui/exam-page').then(module => ({
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
