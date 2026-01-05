import Nav from '@/shared/ui/Nav';
import { MouseEvent } from 'react';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useShallow } from 'zustand/react/shallow';
import { routePaths } from '@/shared/constants/routePaths';

export function DrillingPageNavLink() {
  const hasSelectedVerse = useVerseSelectStore(
    useShallow(state => state.hasAnyId),
  );

  const handleOnClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!hasSelectedVerse()) {
      e.preventDefault();
      alert('암송 구절을 선택해주세요. 😊');
    }
  };

  return (
    <Nav.Link to={routePaths.drilling} onClick={handleOnClickLink}>
      암송하기
    </Nav.Link>
  );
}
