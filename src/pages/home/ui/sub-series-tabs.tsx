import { SeriesTab } from './series-tab';
import { useEffect, useRef } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { subSeriesApi } from '@entities/series';

type SubSeriesTabsProps = {
  parentSeriesCode: string;
};

export function SubSeriesTabs({ parentSeriesCode }: SubSeriesTabsProps) {
  const tabpanelRef = useRef<HTMLDivElement>(null);
  const { data } = useSuspenseQuery(subSeriesApi.list(parentSeriesCode));

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
