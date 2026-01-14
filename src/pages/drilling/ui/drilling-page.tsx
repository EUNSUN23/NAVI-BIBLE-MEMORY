import { useVerseSelectStore } from '@/entities/verse';
import { useEffect } from 'react';
import { BibleVersionSelect } from '@/entities/bibleVersion';
import { CardHideOptionSelect } from '@/entities/cardHideOption';
import { VerseDrill } from './verse-drill';
import { ExamConfigModal } from '@features/exam-config';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/shared/constants/routes';

export function DrillingPage() {
  const navigate = useNavigate();

  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate(routes.home.path, { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <>
      <h1 className='sr-only'>암송하기</h1>
      {hasSelectedVerse() && (
        <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-12 px-2 py-8 mobile:-space-y-3 mobile:py-0'>
          <div className='flex h-[100px] w-full items-center justify-start space-x-10'>
            <BibleVersionSelect className='flex w-[200px] flex-col items-start mobile:w-[120px]' />
            <CardHideOptionSelect className='flex w-[200px] flex-col items-start mobile:w-[120px]' />
          </div>
          <VerseDrill />
        </div>
      )}
      <ExamConfigModal />
    </>
  );
}
