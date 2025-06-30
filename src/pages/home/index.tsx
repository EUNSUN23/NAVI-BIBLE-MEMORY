import VerseSelect from '@features/verseSelect';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useShallow } from 'zustand/react/shallow';
import ExamConfigModal from 'src/features/examConfig';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useExamConfigModalStore } from '@store/exam/examConfigModalStore';
import Nav from '@/shared/ui/Nav';
import ALERT_MESSAGE from '@/constants/alertMessage';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';
import { MouseEvent, useTransition } from 'react';
import { useExamConfigStore } from '@store/exam/examConfigStore';

function Home() {
  const [_, startTransition] = useTransition();
  const setInitialExamVerseCount = useExamConfigStore(
    state => state.setVerseCount,
  );
  const setExamConfigModalOpen = useExamConfigModalStore(
    state => state.setIsOpen,
  );

  const hasSelectedVerse = useVerseSelectStore(
    useShallow(state => state.hasAnyId),
  );
  const selectedVerseCount = useVerseSelectStore(
    state => state.verseIds.length,
  );

  const handleDrillingLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!hasSelectedVerse()) {
      e.preventDefault();
      alert(ALERT_MESSAGE.VERSE_NOT_SELECTED);
    }
  };

  const handleExamLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!hasSelectedVerse()) {
      alert(ALERT_MESSAGE.VERSE_NOT_SELECTED);
      return;
    }
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
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>홈으로</span>
          </Nav.Link>
          <Nav.Link to='/drilling' onClick={handleDrillingLinkClick}>
            암송하기
          </Nav.Link>
          <Nav.Link to='/exam' onClick={handleExamLinkClick}>
            시험보기
          </Nav.Link>
        </Nav.Container>
      </Nav>
      <div className='mx-2 my-14 flex flex-col items-center justify-center'>
        <h1 className='flex items-center text-5xl font-semibold mobile:text-3xl'>
          {PAGE_HEADING_TEXTS.HOME}
        </h1>
        <VerseSelect />
      </div>
      <ExamConfigModal />
    </>
  );
}

export default Home;
