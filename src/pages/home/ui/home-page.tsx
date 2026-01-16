import { VerseSelectList } from './verse-select-list';
import Loader from '@shared/ui/loader';
import { lazy, Suspense } from 'react';

const ExamConfigModal = lazy(() =>
  import('@features/exam-config/ui/exam-config-modal').then(module => ({
    default: module.ExamConfigModal,
  })),
);

export function HomePage() {
  return (
    <>
      <div className='mx-2 my-14 flex flex-col items-center justify-center'>
        <h1 className='flex items-center text-5xl font-semibold mobile:text-3xl'>
          NAVI 성경 암송
        </h1>
        <Suspense
          fallback={
            <div className='flex h-[350px] flex-col justify-center'>
              <Loader size='lg' />
            </div>
          }
        >
          <VerseSelectList />
        </Suspense>
      </div>
      <Suspense fallback={<div className='size-[100px]'>loading..</div>}>
        <ExamConfigModal />
      </Suspense>
    </>
  );
}
