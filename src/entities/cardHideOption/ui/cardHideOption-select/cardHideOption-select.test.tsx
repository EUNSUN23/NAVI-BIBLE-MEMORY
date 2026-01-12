import { expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { CardHideOptionSelect } from './cardHideOption-select';
import { screen, waitFor, within } from '@testing-library/react';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { CARD_HIDE_OPTIONS } from '@msw/mockData';
import { render } from '@utils/test/render';

describe('CardHideOptionSelect Test', () => {
  test('renders card hide option combobox after data loading finishes', async () => {
    const user = userEvent.setup();
    render(<CardHideOptionSelect />);

    await waitForElementToBeRemovedIfExist(
      screen.getByTestId('cardHideOptionSelect-loader'),
    );

    expect(screen.getByRole('combobox', { name: '숨김' })).toBeInTheDocument();

    const comboboxButton = await screen.findByRole('button', {
      expanded: false,
    });

    await user.click(comboboxButton);

    const listbox = await screen.findByRole('listbox');

    await waitFor(() => {
      CARD_HIDE_OPTIONS.forEach(v => {
        expect(
          within(listbox).getByRole('option', { name: v.name }),
        ).toBeInTheDocument();
      });
    });
  });
});
