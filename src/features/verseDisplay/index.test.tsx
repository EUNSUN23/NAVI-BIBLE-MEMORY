import { describe } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render } from '@utils/test/render';
import VerseDisplay from '@features/verseDisplay/index';
import { VERSE_DETAIL_DATA_KOR } from '@/msw/mockData';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { screen, within } from '@testing-library/react';
import { createShortVerseAddress, createVerseAddress } from '@utils/common';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { createVerseCardTestId } from '@features/verseDisplay/utils/createVerseCardTestId';
import { mockVerseSelectStore } from '@utils/test/mockZustandStore';

const setup = () => {
  const user = userEvent.setup();
  const verseList = VERSE_DETAIL_DATA_KOR.map(data => ({
    ...data,
    contents: data.verse_kor.trim(),
  })).sort((a, b) =>
    a.series_code.ord === b.series_code.ord
      ? a.card_num - b.card_num
      : a.series_code.ord - b.series_code.ord,
  );
  render(<VerseDisplay />);
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
    verseIds: VERSE_DETAIL_DATA_KOR.map(data => data.idx),
    hasAnyId: () => true,
  });
  mockAnimationsApi();
});

describe('VerseDisplay Test', () => {
  test('if each verse slide has theme, address, and contents', async () => {
    const { verseList, LOADER_TESTID } = setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_TESTID));

    verseList.forEach(verse => {
      const testVerseCard = screen.getByTestId(createVerseCardTestId(verse));
      expect(
        within(testVerseCard).queryByText(verse.theme),
      ).toBeInTheDocument();
      expect(
        within(testVerseCard).queryByText(createVerseAddress(verse)),
      ).toBeInTheDocument();
      expect(
        within(testVerseCard).queryByText(verse.contents),
      ).toBeInTheDocument();
    });
  });

  test('if the correct slide comes in when its bullet is clicked', async () => {
    const { user, LOADER_TESTID, verseList } = setup();
    const verseData = verseList[1];

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_TESTID));

    const bulletButton = screen.getByRole('button', {
      name: createShortVerseAddress(verseData),
    });

    await user.click(bulletButton);

    const verseSlide = screen.getByTestId(createVerseCardTestId(verseData));

    expect(
      within(verseSlide).queryByText(createVerseAddress(verseData)),
    ).toBeInTheDocument();
  });

  test('if the first slide comes in when nav-to-first button is clicked', async () => {
    const { user, LOADER_TESTID, verseList, TO_FIRST } = setup();
    const secondVerseData = verseList[1];
    const firstVerseData = verseList[0];

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_TESTID));

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(secondVerseData),
      }),
    );
    expect(
      screen.getByTestId(createVerseCardTestId(secondVerseData)),
    ).toBeInTheDocument();

    const navToFirstButton = screen
      .getByText(TO_FIRST)
      .closest('[role="button"]')!;

    await user.click(navToFirstButton);

    expect(
      screen.getByTestId(createVerseCardTestId(firstVerseData)),
    ).toBeInTheDocument();
  });

  test('if the last slide comes in when nav-to-last button is clicked', async () => {
    const { user, LOADER_TESTID, verseList, TO_LAST } = setup();
    const secondVerseData = verseList[2];
    const lastVerseData = verseList[verseList.length - 1];

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_TESTID));

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(secondVerseData),
      }),
    );
    expect(
      screen.getByTestId(createVerseCardTestId(secondVerseData)),
    ).toBeInTheDocument();

    const navToLastButton = screen
      .getByText(TO_LAST)
      .closest('[role="button"]')!;
    await user.click(navToLastButton);

    expect(
      screen.getByTestId(createVerseCardTestId(lastVerseData)),
    ).toBeInTheDocument();
  });
});
