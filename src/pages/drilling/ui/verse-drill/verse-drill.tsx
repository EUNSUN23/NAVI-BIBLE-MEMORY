import { ComposedBoundary } from '@/lib/error/composed-boundary';
import ErrorMessage from '@/lib/error/error-message';
import Loader from '@shared/ui/loader';
import VerseCardSwiper from './verse-card-swiper';

export function VerseDrill() {
  return (
    <ComposedBoundary
      fallbackRender={({ resetErrorBoundary, error }) => (
        <ErrorMessage
          className='my-8 h-[400px] rounded-3xl bg-neutral-100 px-9 py-6 align-middle mobile:h-[200px]'
          resetErrorBoundary={resetErrorBoundary}
          error={error}
        />
      )}
      suspenseFallback={
        <Loader size='lg' className='my-[120px]' id='verseDisplay-loader' />
      }
    >
      <VerseCardSwiper />
    </ComposedBoundary>
  );
}
