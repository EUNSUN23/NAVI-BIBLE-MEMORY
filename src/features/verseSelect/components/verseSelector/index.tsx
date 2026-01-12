import { ChangeEvent, useEffect, useRef } from 'react';
import { useVerseSelectStore, verseApi } from '@/entities/verse';
import VerseOption from '@features/verseSelect/components/verseOption';
import { useSuspenseQuery } from '@tanstack/react-query';

type VerseSelectorProps = {
  seriesCode: string;
};

function VerseSelector({ seriesCode }: VerseSelectorProps) {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, []);

  const resetSelected = useVerseSelectStore(state => state.reset);
  const addSelected = useVerseSelectStore(state => state.add);

  const { data } = useSuspenseQuery(verseApi.summaryList(seriesCode));

  const handleChangeAllCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) resetSelected();
    else addSelected(data.map(v => v.idx));
  };

  const allCheckboxId = `${data[0].series_code}-all`;

  return (
    <ul
      ref={containerRef}
      role='list'
      className='m-2 max-h-[200px] divide-y divide-greyBlue/50 overflow-y-auto'
    >
      <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:space-x-1 mobile:py-1.5'>
        <div className='flex basis-[40px] justify-center'>
          <input
            type='checkbox'
            id={allCheckboxId}
            data-testid={allCheckboxId}
            className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
            onChange={handleChangeAllCheckbox}
          />
        </div>
        <label
          htmlFor={allCheckboxId}
          className='w-[500px] text-xl font-semibold text-greyBlue mobile:w-[330px] mobile:text-base'
        >
          전체
        </label>
      </li>
      {data.map(item => (
        <VerseOption key={`${item.series_code}-${item.card_num}`} data={item} />
      ))}
    </ul>
  );
}

export default VerseSelector;
