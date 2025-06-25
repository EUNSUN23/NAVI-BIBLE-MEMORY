import { expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import CardHideOptionSelect from '@features/cardHideOptionSelect/index';
import { screen, waitFor, within } from '@testing-library/react';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { CARD_HIDE_OPTIONS } from '@/mock/mockData';
import { render } from '@/lib/test/testUtils/render';

describe('CardHideOptionSelect Test', () => {
  beforeAll(() => {
    vi.mock('@/store/drilling/cardHideOptionStore', async () => {
      return await vi.importActual('@/store/drilling/cardHideOptionStore');
    });
  });

  test('renders card hide option combobox after data loading finishes', async () => {
    const user = userEvent.setup();
    render(<CardHideOptionSelect />);

    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('cardHideOptionSelect-loader'),
    );

    expect(screen.queryByRole('combobox', { name: '숨김' })).not.toBeNull();

    await user.click(screen.getByRole('button', { expanded: false }));

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
