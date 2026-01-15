import { CommonCombobox } from 'src/shared/ui/common-combobox';
import { Field } from '@headlessui/react';
import { ComposedBoundary } from '@shared/lib/error/composed-boundary';
import ErrorMessage from '@shared/lib/error/error-message';
import Loader from '@shared/ui/loader';
import BibleVersionCombobox from './bible-version-select-combobox';

type BibleVersionSelectProps = {
  className?: string;
};

export function BibleVersionSelect({
  className = '',
}: BibleVersionSelectProps) {
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
