import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from '@headlessui/react';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { HTMLAttributes } from 'react';
import cn from '@/shared/styles/cn';

export type CommonComboboxItem = {
  id: string;
  value: string;
  name: string;
};

export type CommonComboboxProps = {
  items: CommonComboboxItem[];
  onChangeCombobox: (item: CommonComboboxItem) => void;
  selectedItem: CommonComboboxItem;
  buttonLabel: string;
};

export function CommonCombobox({
  items,
  onChangeCombobox,
  selectedItem,
  buttonLabel,
}: CommonComboboxProps) {
  const handleChangeCombobox = (item: CommonComboboxItem) =>
    onChangeCombobox(item);

  return (
    <Combobox as='div' value={selectedItem} onChange={handleChangeCombobox}>
      <div className='relative mt-2'>
        <ComboboxInput
          className='block w-full rounded-md bg-white px-3 py-1.5 text-xl font-medium text-secondary outline outline-1 -outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:border-[#6b7280] focus:outline-1 focus:-outline-offset-2 focus:outline-gray-300 focus:ring-0 mobile:text-sm'
          displayValue={(item: CommonComboboxItem) => item.name}
          readOnly={true}
        />
        <ComboboxButton className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
          <span className='sr-only'>{buttonLabel}</span>
          <FaChevronDown
            className='size-5 text-gray-400 mobile:size-3'
            aria-hidden='true'
          />
        </ComboboxButton>

        <ComboboxOptions className='absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white text-xl shadow-lg ring-1 ring-black/5 focus:outline-none mobile:text-sm'>
          {items.map(item => (
            <ComboboxOption
              key={`option-${item.id}`}
              value={item}
              className='group relative cursor-default select-none py-2 pl-10 pr-3 text-secondary data-[focus]:bg-secondary data-[focus]:text-white data-[focus]:outline-none mobile:pl-6'
            >
              <span className='block truncate group-data-[selected]:font-semibold'>
                {item.name}
              </span>

              <span className='absolute inset-y-0 left-0 hidden items-center pl-2.5 text-secondary group-data-[selected]:flex group-data-[focus]:text-white mobile:pl-1.5'>
                <FaCheck className='size-4 mobile:size-3' aria-hidden='true' />
              </span>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}

function CommonComboboxLabel({ ...props }: HTMLAttributes<HTMLLabelElement>) {
  return (
    <Label
      className={cn(
        'block text-[22px] font-semibold text-secondary mobile:text-base/4',
        props.className,
      )}
    >
      {props.children}
    </Label>
  );
}

CommonCombobox.Label = CommonComboboxLabel;
