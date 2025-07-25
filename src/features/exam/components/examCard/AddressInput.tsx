import { useState } from 'react';
import { useExamStatusStore } from '@store/exam/examStatusStore';
import getExamResultHTML from '@/lib/getExamResultHTML';
import parse from 'html-react-parser';
import { ExamExposeOption } from '@features/exam/types/examExposeOption.type';
import { EXAM_EXPOSE_OPTIONS } from '@/msw/mockData';

type AddressInputProps = {
  exposeOption: ExamExposeOption;
  address: string;
  verseId: number;
};

const [EXPOSE_ADDR, EXPOSE_ADDR_THEME] = EXAM_EXPOSE_OPTIONS;

function AddressInput({ exposeOption, address, verseId }: AddressInputProps) {
  const isFinished = useExamStatusStore(state => state.isFinished);
  const [value, setValue] = useState('');

  const { code } = exposeOption;
  return (
    <div className='w-full pl-2'>
      {code === EXPOSE_ADDR.code || code === EXPOSE_ADDR_THEME.code ? (
        <div className='text-xl font-medium leading-loose'>{address}</div>
      ) : isFinished ? (
        <div className='w-full rounded-xl bg-[#f7f7f7] text-xl font-medium leading-loose text-secondary mobile:text-lg'>
          {parse(getExamResultHTML(value, address))}
        </div>
      ) : (
        <div className='w-full'>
          <label htmlFor={`address-${verseId}`} className='sr-only'>
            장절
          </label>
          <input
            id={`address-${verseId}`}
            type='text'
            value={value}
            placeholder='장절'
            className='block rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-base'
            onChange={e => setValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default AddressInput;
