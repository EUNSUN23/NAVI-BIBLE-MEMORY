import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { Field } from '@headlessui/react';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
import BibleVersionCombobox from '@features/bibleVersionSelect/components/bibleVersionCombobox';

type BibleVersionSelectProps = {
  className?: string;
};

function BibleVersionSelect({ className = '' }: BibleVersionSelectProps) {
  return (
    <Field className={className}>
      <CommonCombobox.Label>성경버전</CommonCombobox.Label>
      <ComposedBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorMessage error={error} resetErrorBoundary={resetErrorBoundary} />
        )}
        suspenseFallback={<Loader id='bibleVersionSelect-loader' />}
      >
        <BibleVersionCombobox />
      </ComposedBoundary>
    </Field>
  );
}

export default BibleVersionSelect;
