import { describe } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { render } from '@/test/utils/render';
import VerseDisplay from '@features/verseDisplay/index';
import { VERSE_DETAIL_DATA_KOR } from '@/msw/mockData';
import waitForElementToBeRemovedIfExist from '@/test/utils/waitForElementToBeRemovedIfExist';
import { screen, within } from '@testing-library/react';
import { createShortVerseAddress, createVerseAddress } from '@utils/common';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { StoreSelectorMock } from '@/types/common.types';
import { VerseSelectStore } from '@store/verseSelectStore';
import { createVerseCardTestId } from '@features/verseDisplay/utils/createVerseCardTestId';

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
    BREAK: '더 보기',
    ACTIVE_CLASS: 'swiper-custom-pagination-bullet-active',
    DISABLED_CLASS: 'swiper-custom-nav-disabled',
    LOADER_TESTID: 'verseDisplay-loader',
  };
};

describe('VerseDisplay Test', () => {
  beforeAll(() => {
    vi.mock('@/store/bibleVersionStore', async () => {
      return await vi.importActual('@/store/bibleVersionStore');
    });
    vi.mock('@store/verseSelectStore', async () => {
      const verseSelectStore = await vi.importActual('@store/verseSelectStore');

      return {
        ...verseSelectStore,
        useVerseSelectStore: vi
          .fn()
          .mockImplementation((selector: StoreSelectorMock<VerseSelectStore>) =>
            selector({
              verseIds: VERSE_DETAIL_DATA_KOR.map(data => data.idx),
              hasAnyId: () => true,
            }),
          ),
      };
    });
    mockAnimationsApi();
  });

  describe('rendering test', () => {
    test('render nav-to-first, nav-to-last and break buttons', async () => {
      const { TO_FIRST, TO_LAST, BREAK, LOADER_TESTID } = setup();

      await waitForElementToBeRemovedIfExist(
        screen.queryByTestId(LOADER_TESTID),
      );

      expect(
        screen.getByText(TO_FIRST).closest('[role="button"]'),
      ).not.toBeNull();
      expect(
        screen.getByText(TO_LAST).closest('[role="button"]'),
      ).not.toBeNull();
      expect(screen.getByText(BREAK).closest('[role="button"]')).not.toBeNull();
    });

    test('render pagination buttons as much as page range, which present shortened verse addresses ', async () => {
      const { verseList, PAGE_RANGE, LOADER_TESTID } = setup();

      await waitForElementToBeRemovedIfExist(
        screen.queryByTestId(LOADER_TESTID),
      );

      Array.from({ length: PAGE_RANGE }, (_, i) => i).forEach(pageIndex => {
        expect(
          screen
            .getByText(createShortVerseAddress(verseList[pageIndex]))
            .closest('[role="button"]'),
        ).not.toBeNull();
      });
    });

    test('render verse cards containing theme, address, contents', async () => {
      const { verseList, LOADER_TESTID } = setup();

      await waitForElementToBeRemovedIfExist(
        screen.queryByTestId(LOADER_TESTID),
      );

      verseList.forEach(verse => {
        const testVerseCard = screen.getByTestId(createVerseCardTestId(verse));
        expect(within(testVerseCard).queryByText(verse.theme)).not.toBeNull();
        expect(
          within(testVerseCard).queryByText(createVerseAddress(verse)),
        ).not.toBeNull();
        expect(
          within(testVerseCard).queryByText(verse.contents),
        ).not.toBeNull();
      });
    });
  });

  describe('pagination-slide interaction test', () => {
    test(
      'when user clicks page button named by verse address,' +
        ' the corresponding verse slide comes in',
      async () => {
        const { user, LOADER_TESTID, verseList } = setup();
        const testVerseData = verseList[1];

        await waitForElementToBeRemovedIfExist(
          screen.queryByTestId(LOADER_TESTID),
        );

        const testPageButton = screen.getByRole('button', {
          name: createShortVerseAddress(testVerseData),
        });

        await user.click(testPageButton);

        const testVerseSlide = screen.getByTestId(
          createVerseCardTestId(testVerseData),
        );

        expect(
          within(testVerseSlide).queryByText(createVerseAddress(testVerseData)),
        ).not.toBeNull();
      },
    );
  });

  test(
    'when user clicks nav-to-first button, the first verse slide comes in ' +
      'and the first page button becomes active',
    async () => {
      const { user, LOADER_TESTID, verseList, TO_FIRST, ACTIVE_CLASS } =
        setup();
      const testVerseData = verseList[1];
      const firstVerseData = verseList[0];

      await waitForElementToBeRemovedIfExist(
        screen.queryByTestId(LOADER_TESTID),
      );

      const testPageButton = screen.getByRole('button', {
        name: createShortVerseAddress(testVerseData),
      });

      await user.click(testPageButton);

      expect(
        screen.getByTestId(createVerseCardTestId(testVerseData)),
      ).not.toBeNull();

      const navToFirstButton = screen
        .getByText(TO_FIRST)
        .closest('[role="button"]')!;

      await user.click(navToFirstButton);

      expect(
        screen.getByTestId(createVerseCardTestId(firstVerseData)),
      ).not.toBeNull();
      expect(
        screen.getByRole('button', {
          name: createShortVerseAddress(firstVerseData),
        }).classList,
      ).toContain(ACTIVE_CLASS);
    },
  );

  test(
    'when user clicks nav-to-last button, the last verse slide comes in' +
      ' and the last page button becomes active',
    async () => {
      const { user, LOADER_TESTID, verseList, TO_LAST, ACTIVE_CLASS } = setup();
      const testVerseData = verseList[2];
      const lastVerseData = verseList[verseList.length - 1];

      await waitForElementToBeRemovedIfExist(
        screen.queryByTestId(LOADER_TESTID),
      );

      await user.click(
        screen.getByRole('button', {
          name: createShortVerseAddress(testVerseData),
        }),
      );

      expect(
        screen.getByTestId(createVerseCardTestId(testVerseData)),
      ).not.toBeNull();

      await user.click(screen.getByText(TO_LAST).closest('[role="button"]')!);

      expect(
        screen.getByTestId(createVerseCardTestId(lastVerseData)),
      ).not.toBeNull();
      expect(
        screen.getByRole('button', {
          name: createShortVerseAddress(lastVerseData),
        }).classList,
      ).toContain(ACTIVE_CLASS);
    },
  );
});
