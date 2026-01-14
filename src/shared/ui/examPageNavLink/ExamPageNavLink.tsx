import Nav from '@shared/ui/Nav';
import { MouseEvent, useTransition } from 'react';
import { useExamConfigStore } from '@features/exam-config';
import { useExamConfigModalStore } from '@features/exam-config/model/exam-config-modal-store';
import { useVerseSelectStore } from '@/features/verse-select';
import { useShallow } from 'zustand/react/shallow';
import { routes } from '@shared/constants/routes';

export function ExamPageNavLink() {
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

  const handleOnClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!hasSelectedVerse()) {
      alert('암송 구절을 선택해주세요. 😊');
      return;
    }
    setInitialExamVerseCount(selectedVerseCount);
    startTransition(() => {
      setExamConfigModalOpen(true);
    });
  };

  return (
    <Nav.Link to={routes.exam.path} onClick={handleOnClickLink}>
      시험보기
    </Nav.Link>
  );
}
