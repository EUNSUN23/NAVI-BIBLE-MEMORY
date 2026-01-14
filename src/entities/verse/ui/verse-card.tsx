import { ClassValue } from 'clsx';
import cn from '@/shared/styles/cn';
import { CARD_HIDE_OPTIONS } from '@msw/mockData';
import { type VerseDetailData } from '../api/verseDetail.type';
import { createVerseCardTestId } from '../lib/create-verse-card-test-id';
import { createVerseAddress } from '../lib/verse-address-format';

const [_, HIDE_ADDR, HIDE_THEME, HIDE_CONTENTS] = CARD_HIDE_OPTIONS;

type VerseCardProps = {
  hideOption: string;
  data: VerseDetailData;
};

const cardTextClass = (isHidden: boolean, ...inputs: ClassValue[]) => {
  return cn(inputs, isHidden && 'text-covered');
};

export function VerseCard({ hideOption, data }: VerseCardProps) {
  const {
    card_info: { theme, category },
    contents,
  } = data;

  const address = createVerseAddress(data);
  return (
    <div
      className='flex h-fit flex-col items-start justify-around space-y-8 rounded-xl border border-[#bebebe] px-9 py-6 text-left shadow-lg mobile:space-y-4 mobile:px-5 mobile:py-4'
      data-testid={createVerseCardTestId(data.card_info.idx)}
    >
      <div
        className={cardTextClass(
          hideOption === HIDE_THEME.code,
          'text-[27px] font-semibold mobile:text-[17px]',
        )}
      >
        {theme}
      </div>
      <div>
        <div
          className={cardTextClass(
            hideOption === HIDE_ADDR.code,
            'mb-1 text-[26px] font-medium mobile:text-base',
          )}
        >
          {address}
        </div>
        <div
          className={
            'flex size-fit items-center overflow-auto text-wrap text-2xl leading-relaxed mobile:text-base'
          }
        >
          <div
            className={cardTextClass(
              hideOption === HIDE_CONTENTS.code,
              'max-h-[170px] mobile:max-h-[130px]',
            )}
          >
            {contents}
          </div>
        </div>
      </div>
      <div className='text-xl font-semibold mobile:text-[14px]'>{category}</div>
    </div>
  );
}
