import Nav from '@/shared/ui/Nav';
import { routePaths } from '@/shared/constants/routePaths';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useLocation } from 'react-router-dom';
import { ExamPageNavLink } from '@/shared/ui/ExamPageNavLink';
import { DrillingPageNavLink } from '@/shared/ui/DrillingPageNavLink';

export function Header() {
  const { pathname } = useLocation();

  let navElement = null;

  switch (pathname) {
    case routePaths.home:
      navElement = (
        <>
          <DrillingPageNavLink />
          <ExamPageNavLink />
        </>
      );
      break;
    case routePaths.drilling:
      navElement = <ExamPageNavLink />;
      break;
    case routePaths.exam:
      navElement = <DrillingPageNavLink />;
  }

  return (
    <Nav>
      <Nav.Container>
        <Nav.Link to={routePaths.home}>
          <FaHome
            aria-hidden={true}
            className='size-[32px] mobile:size-[27px]'
          />
          <span className='sr-only'>홈으로</span>
        </Nav.Link>
        {navElement}
      </Nav.Container>
    </Nav>
  );
}
