import { CommonCombobox } from 'src/shared/ui/common-combobox';
import { Field } from '@headlessui/react';
import { ComposedBoundary } from '@/lib/error/composed-boundary';
import ErrorMessage from '@/lib/error/error-message';
import Loader from '@shared/ui/loader';
import CardHideOptionCombobox from './card-hide-option-combobox';

type CardHideOptionSelectProps = {
  className?: string;
};

export function CardHideOptionSelect({
  className = '',
}: CardHideOptionSelectProps) {
  return (
    <Field className={className}>
      <CommonCombobox.Label>숨김</CommonCombobox.Label>
      <ComposedBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorMessage error={error} resetErrorBoundary={resetErrorBoundary} />
        )}
        suspenseFallback={<Loader id='cardHideOptionSelect-loader' />}
      >
        <CardHideOptionCombobox />
      </ComposedBoundary>
    </Field>
  );
}
