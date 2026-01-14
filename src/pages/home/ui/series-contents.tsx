import { VerseSelector } from './verse-select';
import { SubSeriesTabs } from './sub-series-tabs';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';

export type SeriesContentsProps = {
  hasSubSeries: boolean;
  seriesCode: string;
  testId: string;
};

export function SeriesContents({
  hasSubSeries,
  seriesCode,
  testId,
}: SeriesContentsProps) {
  return (
    <div
      role='tabpanel'
      id={testId}
      data-testid={testId}
      className='scroll-mb-[50px] scroll-mt-[100px]'
    >
      <ComposedBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorMessage
            error={error}
            resetErrorBoundary={resetErrorBoundary}
            className='mt-3 pl-4'
          />
        )}
        suspenseFallback={<Loader />}
      >
        {hasSubSeries ? (
          <SubSeriesTabs parentSeriesCode={seriesCode} />
        ) : (
          <VerseSelector seriesCode={seriesCode} />
        )}
      </ComposedBoundary>
    </div>
  );
}
