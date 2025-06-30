import { useExamConfigStore } from '@store/exam/examConfigStore';
import { useShallow } from 'zustand/react/shallow';

function VerseCountInput() {
  const verseCount = useExamConfigStore(useShallow(state => state.verseCount));
  const setVerseCount = useExamConfigStore(
    useShallow(state => state.setVerseCount),
  );

  return (
    <div className='text-left text-[22px] mobile:text-base/4'>
      <label
        htmlFor='verseCount'
        className='block font-semibold text-secondary'
      >
        구절 수
      </label>
      {
        <div className='mt-2 flex items-center justify-center space-x-2'>
          <input
            type='number'
            inputMode='numeric'
            id='verseCount'
            className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
            value={verseCount}
            aria-valuenow={verseCount}
            onChange={e => {
              setVerseCount(Number(e.target.value));
            }}
          />
          <span>개</span>
        </div>
      }
    </div>
  );
}

export default VerseCountInput;
