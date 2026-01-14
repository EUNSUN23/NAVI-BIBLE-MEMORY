import { SeriesTab } from './series-tab';
import { useEffect } from 'react';
import { useVerseSelectStore } from '@/entities/verse';
import { useSuspenseQuery } from '@tanstack/react-query';
import { seriesApi } from '@/entities/series';

export function VerseSelectList() {
  const { data } = useSuspenseQuery(seriesApi.list());
  const resetVerseSelect = useVerseSelectStore(state => state.reset);

  useEffect(() => {
    resetVerseSelect();
  }, [resetVerseSelect]);

  return (
    <div
      role='tabList'
      aria-multiselectable
      className='my-16 w-[600px] space-y-4 mobile:w-[300px]'
    >
      {data.map(item => (
        <SeriesTab key={item.series_code} data={item} />
      ))}
    </div>
  );
}
