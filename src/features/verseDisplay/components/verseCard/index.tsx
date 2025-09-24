import { createVerseAddress } from '@utils/common';
import { useCardHideOptionStore } from '@store/drilling/cardHideOptionStore';
import { ClassValue } from 'clsx';
import cn from '@/shared/styles/cn';
import { CARD_HIDE_OPTIONS } from '@/msw/mockData';
import { VerseDetailData } from '@features/verseDisplay/types/verseDetail.type';
import { createVerseCardTestId } from '@features/verseDisplay/utils/createVerseCardTestId';

const [_, HIDE_ADDR, HIDE_THEME, HIDE_CONTENTS] = CARD_HIDE_OPTIONS;

type CardProps = {
  data: VerseDetailData;
};

const cardTextClass = (isHidden: boolean, ...inputs: ClassValue[]) => {
  return cn(inputs, isHidden && 'text-covered');
};

function VerseCard({ data }: CardProps) {
  const { theme, category, contents } = data;
  const { code } = useCardHideOptionStore(state => state.cardHideOption);
  const address = createVerseAddress(data);
  return (
    <div
      className='my-4 flex h-fit flex-col items-start justify-around space-y-8 rounded-xl border border-[#bebebe] px-9 py-6 text-left shadow-lg mobile:space-y-4 mobile:px-5 mobile:py-4'
      data-testid={createVerseCardTestId(data)}
    >
      <div
        className={cardTextClass(
          code === HIDE_THEME.code,
          'text-[27px] font-semibold mobile:text-[17px]',
        )}
      >
        {theme}
      </div>
      <div>
        <div
          className={cardTextClass(
            code === HIDE_ADDR.code,
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
              code === HIDE_CONTENTS.code,
              'max-h-[180px] mobile:max-h-[130px]',
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

export default VerseCard;
