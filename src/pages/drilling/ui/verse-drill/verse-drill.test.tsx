import { describe } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render } from '@shared/lib/test/render';
import { VerseDrill } from './verse-drill';
import { VERSE_DETAIL_DATA_KOR } from '@shared/lib/msw/mock-data';
import waitForElementToBeRemovedIfExist from '@shared/lib/test/wait-for-element-to-be-removed-If-exist';
import { screen, within } from '@testing-library/react';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import {
  createShortVerseAddress,
  createVerseAddress,
  createVerseCardTestId,
  orderVerseDetails,
} from '@entities/verse';
import { mockVerseSelectStore } from '@shared/lib/test/mocks/mock-zustand-store';

const setup = () => {
  const user = userEvent.setup();
  const verseList = orderVerseDetails(
    VERSE_DETAIL_DATA_KOR.map(data => ({
      ...data,
      contents: data.contents.trim(),
    })),
  );
  render(<VerseDrill />);
  return {
    user,
    verseList,
    PAGE_RANGE: 4,
    TO_FIRST: '처음으로',
    TO_LAST: '끝으로',
    LOADER_TESTID: 'verseDisplay-loader',
  };
};

beforeEach(() => {
  mockVerseSelectStore({
    verseIds: VERSE_DETAIL_DATA_KOR.map(data => data.card_info.idx),
    hasAnyId: () => true,
  });
  mockAnimationsApi();
});

describe('VerseDisplay Test', () => {
  test('if each verse slide has theme, address, and contents', async () => {
    const { verseList, LOADER_TESTID } = setup();

    await waitForElementToBeRemovedIfExist(screen.getByTestId(LOADER_TESTID));

    verseList.forEach(verse => {
      const testVerseCard = screen.getByTestId(
        createVerseCardTestId(verse.card_info.idx),
      );
      expect(
        within(testVerseCard).getByText(verse.card_info.theme),
      ).toBeInTheDocument();
      expect(
        within(testVerseCard).getByText(createVerseAddress(verse)),
      ).toBeInTheDocument();
      expect(
        within(testVerseCard).getByText(verse.contents),
      ).toBeInTheDocument();
    });
  });

  test('if the correct slide comes in when its bullet is clicked', async () => {
    const { user, LOADER_TESTID, verseList } = setup();
    const verseData = verseList[1];

    await waitForElementToBeRemovedIfExist(screen.getByTestId(LOADER_TESTID));

    const bulletButton = screen.getByRole('button', {
      name: createShortVerseAddress(verseData),
    });

    await user.click(bulletButton);

    const verseSlide = screen.getByTestId(
      createVerseCardTestId(verseData.card_info.idx),
    );

    expect(
      within(verseSlide).getByText(createVerseAddress(verseData)),
    ).toBeInTheDocument();
  });

  test('if the first slide comes in when nav-to-first button is clicked', async () => {
    const { user, LOADER_TESTID, verseList, TO_FIRST } = setup();
    const secondVerseData = verseList[1];
    const firstVerseData = verseList[0];

    await waitForElementToBeRemovedIfExist(screen.getByTestId(LOADER_TESTID));

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(secondVerseData),
      }),
    );
    expect(
      screen.getByTestId(createVerseCardTestId(secondVerseData.card_info.idx)),
    ).toBeInTheDocument();

    const navToFirstButton = screen
      .getByText(TO_FIRST)
      .closest('[role="button"]')!;

    await user.click(navToFirstButton);

    expect(
      screen.getByTestId(createVerseCardTestId(firstVerseData.card_info.idx)),
    ).toBeInTheDocument();
  });

  test('if the last slide comes in when nav-to-last button is clicked', async () => {
    const { user, LOADER_TESTID, verseList, TO_LAST } = setup();
    const secondVerseData = verseList[2];
    const lastVerseData = verseList[verseList.length - 1];

    await waitForElementToBeRemovedIfExist(screen.getByTestId(LOADER_TESTID));

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(secondVerseData),
      }),
    );
    expect(
      screen.getByTestId(createVerseCardTestId(secondVerseData.card_info.idx)),
    ).toBeInTheDocument();

    const navToLastButton = screen
      .getByText(TO_LAST)
      .closest('[role="button"]')!;
    await user.click(navToLastButton);

    expect(
      screen.getByTestId(createVerseCardTestId(lastVerseData.card_info.idx)),
    ).toBeInTheDocument();
  });
});
