import BibleVersionSelect from '@features/bibleVersionSelect';
import CardHideOptionSelect from '@features/cardHideOptionSelect';
import VerseDisplay from '@features/verseDisplay';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] w-full items-center justify-around mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect className='flex min-w-[30%] flex-col items-start' />
        <CardHideOptionSelect className='flex min-w-[30%] flex-col items-start' />
      </div>
      <VerseDisplay />
    </div>
  );
}

export default Drilling;
