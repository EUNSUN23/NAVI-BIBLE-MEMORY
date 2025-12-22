import { expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import CardHideOptionSelect from '@features/cardHideOptionSelect/index';
import { screen, waitFor, within } from '@testing-library/react';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { CARD_HIDE_OPTIONS } from '@/msw/mockData';
import { render } from '@utils/test/render';

describe('CardHideOptionSelect Test', () => {
  test('renders card hide option combobox after data loading finishes', async () => {
    const user = userEvent.setup();
    render(<CardHideOptionSelect />);

    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('cardHideOptionSelect-loader'),
    );

    expect(screen.queryByRole('combobox', { name: '숨김' })).not.toBeNull();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      CARD_HIDE_OPTIONS.forEach(v => {
        expect(
          within(listbox).queryByRole('option', { name: v.name }),
        ).not.toBeNull();
      });
    });
  });
});
