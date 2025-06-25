import { useNavigate } from 'react-router-dom';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useEffect } from 'react';
import Nav from '@/shared/ui/Nav';
import PAGE_HEADING_TEXTS from '@/constants/pageHeadingTexts';
import LINK_TEXTS from '@/constants/linkTexts';
import BibleVersionSelect from '@features/bibleVersionSelect';
import CardHideOptionSelect from '@features/cardHideOptionSelect';
import VerseDisplay from '@features/verseDisplay';

function DrillingPage() {
  const navigate = useNavigate();
  const hasSelectedVerse = useVerseSelectStore(state => state.hasAnyId);

  useEffect(() => {
    if (!hasSelectedVerse()) void navigate('/', { replace: true });
  }, [hasSelectedVerse, navigate]);

  return (
    <>
      <Nav>
        <Nav.Container>
          <Nav.Link to='/'>
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>{LINK_TEXTS.HOME}</span>
          </Nav.Link>
          <Nav.Link to='/exam'>{LINK_TEXTS.EXAM}</Nav.Link>
        </Nav.Container>
      </Nav>
      <h1 className='sr-only'>{PAGE_HEADING_TEXTS.DRILLING}</h1>
      {hasSelectedVerse() && (
        <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
          <div className='flex h-[100px] w-full items-center justify-around mobile:w-full mobile:space-x-3'>
            <BibleVersionSelect className='flex min-w-[30%] flex-col items-start' />
            <CardHideOptionSelect className='flex min-w-[30%] flex-col items-start' />
          </div>
          <VerseDisplay />
        </div>
      )}
    </>
  );
}

export default DrillingPage;
