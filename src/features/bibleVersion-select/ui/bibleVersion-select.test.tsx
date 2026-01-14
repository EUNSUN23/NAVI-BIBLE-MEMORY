import { userEvent } from '@testing-library/user-event';
import { BibleVersionSelect } from './bibleVersion-select';
import { render } from '@utils/test/render';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { screen, waitFor, within } from '@testing-library/react';
import { expect } from 'vitest';
import { BIBLE_VERSIONS } from '@msw/mockData';

describe('BibleVersionSelect test', () => {
  test('renders bible version combobox after data loading finishes', async () => {
    const user = userEvent.setup();
    render(<BibleVersionSelect />);

    await waitForElementToBeRemovedIfExist(
      screen.getByTestId('bibleVersionSelect-loader'),
    );

    expect(
      screen.getByRole('combobox', { name: '성경버전' }),
    ).toBeInTheDocument();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      BIBLE_VERSIONS.forEach(v => {
        expect(
          within(listbox).getByRole('option', { name: v.name }),
        ).toBeInTheDocument();
      });
    });
  });
});
