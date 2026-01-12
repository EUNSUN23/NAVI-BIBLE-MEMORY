import VerseSelect from '@features/verseSelect';
import ExamConfigModal from '@features/examConfig';
import Loader from '@/shared/ui/Loader';
import { Suspense } from 'react';

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
          <VerseSelect />
        </Suspense>
      </div>
      <ExamConfigModal />
    </>
  );
}
