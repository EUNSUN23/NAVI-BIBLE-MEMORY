import { useVerseSelectStore } from '@/features/verse-select';
import { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamContainer from './exam-container';
import Loader from '@shared/ui/loader';
import { routes } from '@shared/config/routes';
import { useExamStatusStore } from '../model/examStatusStore';

export function ExamPage() {
  const setIsFinished = useExamStatusStore(state => state.setIsFinished);
  useEffect(() => {
    return () => setIsFinished(false);
  }, [setIsFinished]);

  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);
  useEffect(() => {
    if (!hasSelectedVerse()) void navigate(routes.home.path, { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <>
      <h1 className='sr-only'>시험보기</h1>
      <Suspense fallback={<Loader size='lg' className='my-[100px]' />}>
        <ExamContainer />
      </Suspense>
    </>
  );
}
