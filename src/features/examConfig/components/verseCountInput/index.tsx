import { useExamConfigStore } from '@store/exam/examConfigStore';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useEffect } from 'react';

function VerseCountInput() {
  const initialVerseCount = useVerseSelectStore(state => state.verseIds.length);
  const verseCount = useExamConfigStore(state => state.verseCount);
  const setVerseCount = useExamConfigStore(state => state.setVerseCount);

  useEffect(() => {
    setVerseCount(initialVerseCount);
  }, [setVerseCount, initialVerseCount]);

  return (
    <div className='text-left text-[22px] mobile:text-base/4'>
      <label
        htmlFor='verseCount'
        className='block font-semibold text-secondary'
      >
        구절 수
      </label>
      <div className='mt-2 flex items-center justify-center space-x-2'>
        <input
          type='number'
          inputMode='numeric'
          id='verseCount'
          className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
          value={verseCount}
          onChange={e => setVerseCount(Number(e.target.value))}
        />
        <span>개</span>
      </div>
    </div>
  );
}

export default VerseCountInput;
