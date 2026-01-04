import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { MouseEvent, useEffect, useTransition } from 'react';
import Nav from '@/shared/ui/Nav';
import BibleVersionSelect from '@features/bibleVersionSelect';
import CardHideOptionSelect from '@features/cardHideOptionSelect';
import VerseDisplay from '@features/verseDisplay';
import { useExamConfigStore } from '@store/exam/examConfigStore';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';
import ExamConfigModal from '@features/examConfig';
import { useNavigate } from 'react-router-dom';

export function DrillingPage() {
  const navigate = useNavigate();
  const [_, startTransition] = useTransition();
  const setInitialExamVerseCount = useExamConfigStore(
    state => state.setVerseCount,
  );
  const setExamConfigModalOpen = useExamConfigModalStore(
    state => state.setIsOpen,
  );
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);
  const selectedVerseCount = useVerseSelectStore(
    state => state.verseIds.length,
  );

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate('/', { replace: true });
  }, [hasSelectedVerse, navigate]);

  const handleExamLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setInitialExamVerseCount(selectedVerseCount);
    startTransition(() => {
      setExamConfigModalOpen(true);
    });
  };

  return (
    <>
      <Nav>
        <Nav.Container>
          <Nav.Link to='/'>
            <FaHome
              aria-hidden={true}
              className='size-[32px] mobile:size-[27px]'
            />
            <span className='sr-only'>홈으로</span>
          </Nav.Link>
          <Nav.Link to='/exam' onClick={handleExamLinkClick}>
            시험보기
          </Nav.Link>
        </Nav.Container>
      </Nav>
      <h1 className='sr-only'>암송하기</h1>
      {hasSelectedVerse() && (
        <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-12 px-2 py-8 mobile:-space-y-3 mobile:py-0'>
          <div className='flex h-[100px] w-full items-center justify-start space-x-10'>
            <BibleVersionSelect className='flex w-[200px] flex-col items-start mobile:w-[120px]' />
            <CardHideOptionSelect className='flex w-[200px] flex-col items-start mobile:w-[120px]' />
          </div>
          <VerseDisplay />
        </div>
      )}
      <ExamConfigModal />
    </>
  );
}
