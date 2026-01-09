import SeriesTab from '@features/verseSelect/components/seriesTab';
import { useSubSeries } from '@features/verseSelect/api/getSubSeries';
import { useEffect, useRef } from 'react';

type SubSeriesTabsProps = {
  parentSeriesCode: string;
};

function SubSeriesTabs({ parentSeriesCode }: SubSeriesTabsProps) {
  const tabpanelRef = useRef<HTMLDivElement>(null);
  const { data } = useSubSeries(parentSeriesCode);

  useEffect(() => {
    tabpanelRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, []);

  return (
    <div
      ref={tabpanelRef}
      role='tablist'
      aria-multiselectable
      className={'mt-2.5 flex flex-col items-center space-y-3'}
    >
      {data.map(item => (
        <SeriesTab key={item.series_code} data={item} />
      ))}
    </div>
  );
}

export default SubSeriesTabs;
