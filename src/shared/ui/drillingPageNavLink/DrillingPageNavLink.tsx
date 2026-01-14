import Nav from '@shared/ui/Nav';
import { MouseEvent } from 'react';
import { useVerseSelectStore } from '@/features/verse-select';
import { useShallow } from 'zustand/react/shallow';
import { routes } from '@shared/constants/routes';

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
    <Nav.Link to={routes.drilling.path} onClick={handleOnClickLink}>
      {routes.drilling.label}
    </Nav.Link>
  );
}
