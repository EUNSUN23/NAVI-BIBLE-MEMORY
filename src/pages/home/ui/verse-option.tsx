import {
  createVerseAddress,
  useVerseSelectStore,
  type VerseSummaryData,
} from '@/entities/verse';
import { useShallow } from 'zustand/react/shallow';
import { ChangeEvent } from 'react';
import { createVerseOptionId } from '../lib/createVerseOptionId';

type VerseOptionProps = {
  data: VerseSummaryData;
};

export function VerseOption({ data }: VerseOptionProps) {
  const { idx, theme } = data;

  const isSelected = useVerseSelectStore(useShallow(state => state.hasId(idx)));

  const addSelected = useVerseSelectStore(state => state.add);
  const removeSelected = useVerseSelectStore(state => state.remove);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) removeSelected(idx);
    else addSelected(idx);
  };

  const checkboxId = createVerseOptionId(data);

  return (
    <li className='flex items-center space-x-4 pb-1.5 pt-3 mobile:space-x-1 mobile:py-1.5'>
      <div className='flex basis-[40px] justify-center'>
        <input
          type='checkbox'
          id={checkboxId}
          data-testid={checkboxId}
          className='size-5 checked:ring-0 focus-within:ring-0 mobile:size-4'
          checked={isSelected}
          aria-checked={isSelected}
          onChange={handleChangeCheckbox}
        />
      </div>
      <label
        htmlFor={checkboxId}
        className='flex w-[500px] items-center justify-between space-x-4 overflow-auto text-xl font-medium mobile:w-[330px] mobile:text-base'
      >
        <div className='w-[200px] font-semibold mobile:w-[140px]'>{theme}</div>
        <div className='mr-2 w-[240px] pr-2 text-right mobile:w-[200px]'>
          {createVerseAddress(data)}
        </div>
      </label>
    </li>
  );
}
