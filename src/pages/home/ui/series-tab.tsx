import { lazy, Suspense, useState } from 'react';
import { FaCaretUp } from '@react-icons/all-files/fa/FaCaretUp';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';
import cn from '@shared/styles/cn';
import { cva } from 'class-variance-authority';
import { SeriesData } from '@entities/series/api/seriesData.type';
import { createSeriesTabPanelId } from '../lib/createSeriesTabPanelId';
import Loader from '@shared/ui/Loader';

const tabVariants = cva(
  'w-full rounded-2xl px-7 py-2.5 text-center mobile:px-4 flex items-center justify-between space-x-1',
  {
    variants: {
      size: {
        md: 'text-[28px] mobile:text-lg',
        sm: 'text-[24px] mobile:text-base',
      },
      color: {
        default: 'bg-yellow-400 text-black',
        light: 'bg-yellow-300/70 text-neutral-600/90',
      },
    },
  },
);

const caretVariants = cva('flex size-10 items-center justify-center', {
  variants: {
    size: {
      md: 'text-[35px] mobile:text-2xl',
      sm: 'text-[30px] mobile:text-xl',
    },
  },
});

const SeriesContents = lazy(() =>
  import('../ui/series-contents').then(module => ({
    default: module.SeriesContents,
  })),
);

type SeriesTabProps = {
  data: SeriesData;
};

export function SeriesTab({ data }: SeriesTabProps) {
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);

  const { parent_series, series_code, sub_series_opt } = data;
  const isRootSeries = parent_series === null;
  const tabPanelId = createSeriesTabPanelId(series_code);
  const hasSubSeries = sub_series_opt === 'Y';

  const handleClickSeriesTab = () => setIsTabOpen(prev => !prev);

  return (
    <div className='w-full'>
      <button
        role='tab'
        aria-controls={tabPanelId}
        aria-expanded={isTabOpen}
        className={cn(
          isRootSeries
            ? tabVariants({ size: 'md', color: 'default' })
            : tabVariants({ size: 'sm', color: 'light' }),
        )}
        onClick={handleClickSeriesTab}
      >
        <span className='min-w-[200px] text-left font-semibold'>
          {data.series_name}
        </span>
        <span
          className={cn(
            isRootSeries
              ? caretVariants({ size: 'md' })
              : caretVariants({ size: 'sm' }),
          )}
        >
          {isTabOpen ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </button>
      {isTabOpen && (
        <Suspense fallback={<Loader />}>
          <SeriesContents
            testId={tabPanelId}
            hasSubSeries={hasSubSeries}
            seriesCode={series_code}
          />
        </Suspense>
      )}
    </div>
  );
}
