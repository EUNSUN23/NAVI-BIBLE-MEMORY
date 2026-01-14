import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { Field } from '@headlessui/react';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
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
