import { lazy } from 'react';

export { type ExamConfigStore } from './model/models';
const ExamConfigModal = lazy(() =>
  import('./ui/exam-config-modal').then(module => ({
    default: module.ExamConfigModal,
  })),
);

export { ExamConfigModal };
export { useExamConfigStore } from './model/exam-config-store';
