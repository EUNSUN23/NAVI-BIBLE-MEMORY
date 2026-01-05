import { useVerseSelectStore } from '@store/verseSelectStore';
import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Exam from '@features/exam';
import Loader from '@/shared/ui/Loader';
import { routePaths } from '@/shared/constants/routePaths';

export function ExamPage() {
  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate(routePaths.home, { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <>
      <h1 className='sr-only'>시험보기</h1>
      <Suspense fallback={<Loader size='lg' className='my-[100px]' />}>
        <Exam />
      </Suspense>
    </>
  );
}
