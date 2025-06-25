import { userEvent } from '@testing-library/user-event';
import BibleVersionSelect from '@features/bibleVersionSelect/index';
import { render } from '@/lib/test/testUtils/render';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { screen, waitFor, within } from '@testing-library/react';
import { expect } from 'vitest';
import { BIBLE_VERSIONS } from '@/mock/mockData';

describe('BibleVersionSelect test', () => {
  beforeAll(() => {
    vi.mock('@/store/bibleVersionStore', async () => {
      return await vi.importActual('@/store/bibleVersionStore');
    });
  });

  test('renders bible version combobox after data loading finishes', async () => {
    const user = userEvent.setup();
    render(<BibleVersionSelect />);

    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('bibleVersionSelect-loader'),
    );

    const combobox = screen.getByRole('combobox', { name: '성경버전' });

    await user.click(combobox);

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      BIBLE_VERSIONS.forEach(v => {
        expect(
          within(listbox).queryByRole('option', { name: v.name }),
        ).not.toBeNull();
      });
    });
  });
});
