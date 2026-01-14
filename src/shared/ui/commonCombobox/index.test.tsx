import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { render } from '@utils/test/render';
import { cleanup, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  CommonCombobox,
  CommonComboboxItem,
} from '@shared/ui/commonCombobox/index';
import { Field } from '@headlessui/react';
import { BIBLE_VERSIONS } from '@/msw/mockData';

const label = '성경버전';
const items: CommonComboboxItem[] = BIBLE_VERSIONS.map(({ name, code }) => ({
  name,
  value: code,
  id: code,
}));
const selectedItem: CommonComboboxItem = items[0];
const handleChangeCombobox = vi.fn<(item: CommonComboboxItem) => void>();

describe('CommonCombobox Test', () => {
  beforeEach(() => {
    render(
      <Field>
        <CommonCombobox.Label>{label}</CommonCombobox.Label>
        <CommonCombobox
          items={items}
          selectedItem={selectedItem}
          onChangeCombobox={handleChangeCombobox}
          buttonLabel='성경버전 선택'
        />
      </Field>,
    );
  });
  afterEach(() => cleanup());

  test('Combobox renders', async () => {
    await waitFor(() => {
      expect(screen.getByRole('combobox', { name: label })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { expanded: false }),
      ).toBeInTheDocument();
      expect(screen.getByDisplayValue(selectedItem.name)).toBeInTheDocument();
    });
  });

  test('Combobox button toggles associated listbox', async () => {
    const user = userEvent.setup();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    expect(comboboxButton.ariaExpanded).toBe('true');
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await user.click(comboboxButton);

    expect(comboboxButton.ariaExpanded).toBe('false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('Associated listbox renders a list of options', async () => {
    const user = userEvent.setup();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      items.forEach(v => {
        expect(
          within(listbox).getByRole('option', { name: v.name }),
        ).toBeInTheDocument();
      });
    });
  });
});
