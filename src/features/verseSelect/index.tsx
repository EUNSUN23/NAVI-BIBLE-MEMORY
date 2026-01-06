import SeriesTab from '@features/verseSelect/components/seriesTab';
import { useEffect } from 'react';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useSeries } from '@features/verseSelect/api/getSeries';

function VerseSelect() {
  const { data } = useSeries();
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

export default VerseSelect;
