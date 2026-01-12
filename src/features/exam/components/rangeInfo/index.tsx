import { Textfit } from 'react-textfit';
import { type VerseDetailDataList } from '@/entities/verse';

type RangeInfoProps = {
  data: VerseDetailDataList;
};

function RangeInfo({ data }: RangeInfoProps) {
  const init: string[] = [];
  const seriesNames = data
    .reduce((acc, curr) => {
      const currSeries = curr.card_info.series.name;
      return acc.includes(currSeries) ? acc : [...acc, currSeries];
    }, init)
    .join(', ');

  const total = data.length;

  return (
    <section aria-label='시험 범위 정보'>
      <ul className='flex w-full flex-col items-start'>
        <li className='grid w-full grid-cols-4 place-content-between place-items-center'>
          <div
            id='verse-range-title'
            className='col-span-1 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'
          >
            범위
          </div>
          <Textfit
            aria-labelledby='verse-range-title'
            min={14}
            max={24}
            mode={'multi'}
            className='col-span-3 ml-2 h-[25px] w-full font-medium leading-tight text-secondary mobile:h-[30px]'
          >
            {seriesNames}
          </Textfit>
        </li>
        <li className='grid w-full grid-cols-4 place-content-between place-items-center'>
          <div
            id='verse-count-title'
            className='col-span-1 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'
          >
            구절 수
          </div>
          <div
            aria-labelledby='verse-count-title'
            className='col-span-3 ml-2 mr-auto text-left text-2xl font-medium text-secondary mobile:text-base'
          >
            {`${total}`}
          </div>
        </li>
      </ul>
    </section>
  );
}

export default RangeInfo;
