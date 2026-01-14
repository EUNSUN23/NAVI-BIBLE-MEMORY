import Nav from '@shared/ui/Nav';
import { routes } from '@shared/constants/routes';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useLocation } from 'react-router-dom';
import ExamPageNavLink from '@shared/ui/examPageNavLink';
import DrillingPageNavLink from '@shared/ui/drillingPageNavLink';

export function Header() {
  const { pathname } = useLocation();

  let navElement = null;

  switch (pathname) {
    case routes.home.path:
      navElement = (
        <>
          <DrillingPageNavLink />
          <ExamPageNavLink />
        </>
      );
      break;
    case routes.drilling.path:
      navElement = <ExamPageNavLink />;
      break;
    case routes.exam.path:
      navElement = <DrillingPageNavLink />;
  }

  return (
    <Nav>
      <Nav.Container>
        <Nav.Link to={routes.home.path}>
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
