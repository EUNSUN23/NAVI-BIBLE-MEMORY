import renderRoute from '@/test/utils/renderRoute';
import { screen, within } from '@testing-library/react';
import {
  BIBLE_VERSIONS,
  CARD_HIDE_OPTIONS,
  VERSE_DETAIL_DATA_GAE,
  VERSE_DETAIL_DATA_KOR,
} from '@/msw/mockData';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import waitForElementToBeRemovedIfExist from '@/test/utils/waitForElementToBeRemovedIfExist';
import { userEvent } from '@testing-library/user-event';
import { describe } from 'vitest';
import { createShortVerseAddress, createVerseAddress } from '@utils/common';
import { StoreSelectorMock } from '@/types/common.types';
import { VerseSelectStore } from '@store/verseSelectStore';
import { createVerseCardTestId } from '@features/verseDisplay/utils/createVerseCardTestId';

const setup = async () => {
  const user = userEvent.setup();

  renderRoute('/drilling');

  await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

  const waitForBibleVersionLoaderRemoved = waitForElementToBeRemovedIfExist(
    screen.queryByTestId('bibleVersionSelect-loader'),
  );
  const waitForCardHideOptionLoaderRemoved = waitForElementToBeRemovedIfExist(
    screen.queryByTestId('cardHideOptionSelect-loader'),
  );
  const waitForVerseDisplayLoaderRemoved = waitForElementToBeRemovedIfExist(
    screen.queryByTestId('verseDisplay-loader'),
  );
  await Promise.all([
    waitForBibleVersionLoaderRemoved,
    waitForCardHideOptionLoaderRemoved,
    waitForVerseDisplayLoaderRemoved,
  ]);

  return {
    user,
    BV_OPTION: '성경버전',
    HIDE_OPTION: '숨김',
    NAV_TO_HOME: '홈으로',
    NAV_TO_EXAM: '시험보기',
    verses_kor: VERSE_DETAIL_DATA_KOR.map(verse => ({
      ...verse,
      contents: verse.verse_kor.trim(),
    })),
    verse_gae: VERSE_DETAIL_DATA_GAE.map(verse => ({
      ...verse,
      contents: verse.verse_gae.trim(),
    })),
  };
};

beforeAll(() => {
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
  vi.mock('@store/exam/examConfigModalStore', async () => {
    return await vi.importActual('@store/exam/examConfigModalStore');
  });
  mockAnimationsApi();
});

describe('DrillingPage Test - rendering', () => {
  test('render home and exam links, bible version and card hide options, verse cards', async () => {
    const { NAV_TO_HOME, NAV_TO_EXAM, BV_OPTION, HIDE_OPTION, verses_kor } =
      await setup();

    expect(screen.queryByRole('link', { name: NAV_TO_HOME })).not.toBeNull();
    expect(screen.queryByRole('link', { name: NAV_TO_EXAM })).not.toBeNull();

    expect(
      screen.queryByRole('combobox', {
        name: BV_OPTION,
      }),
    ).not.toBeNull();
    expect(
      screen.queryByRole('combobox', {
        name: HIDE_OPTION,
      }),
    ).not.toBeNull();

    verses_kor.forEach(verse => {
      expect(screen.queryByTestId(createVerseCardTestId(verse))).not.toBeNull();
    });
  });
});

describe('DrillingPage Test - card hide option and verse card integration test', () => {
  const COVERED_CLASSNAME = 'text-covered';
  const CARD_HIDE_OPTION_BUTTON = '숨김 옵션 선택';

  test('when user selects address hide option, hiding style applies to verse address', async () => {
    const { user, verses_kor } = await setup();
    const testVerseData = verses_kor[0];

    const verseCard = screen.getByTestId(createVerseCardTestId(testVerseData));
    const cardHideComboboxButton = screen.getByRole('button', {
      name: CARD_HIDE_OPTION_BUTTON,
    });

    await user.click(cardHideComboboxButton);

    const listbox = screen.getByRole('listbox');
    screen.debug(listbox);
    const hideAddressOption = within(listbox).getByRole('option', {
      name: CARD_HIDE_OPTIONS[1].name,
    });

    await user.click(hideAddressOption);

    expect(
      within(verseCard).getByText(createVerseAddress(testVerseData)).classList,
    ).toContain(COVERED_CLASSNAME);
  });

  test('when user selects theme hide option, hiding style applies to verse theme', async () => {
    const { user, verses_kor } = await setup();
    const testVerseData = verses_kor[0];

    screen.debug();

    const verseCard = screen.getByTestId(createVerseCardTestId(testVerseData));
    const cardHideComboboxButton = screen.getByRole('button', {
      name: CARD_HIDE_OPTION_BUTTON,
    });

    await user.click(cardHideComboboxButton);

    const hideThemeOption = within(screen.getByRole('listbox')).getByRole(
      'option',
      { name: CARD_HIDE_OPTIONS[2].name },
    );

    await user.click(hideThemeOption);

    expect(
      within(verseCard).getByText(testVerseData.theme).classList,
    ).toContain(COVERED_CLASSNAME);
  });

  test('when user selects contents hide option, hiding style applies to verse contents', async () => {
    const { user, verses_kor } = await setup();
    const testVerseData = verses_kor[0];

    const verseCard = screen.getByTestId(createVerseCardTestId(testVerseData));
    const cardHideComboboxButton = screen.getByRole('button', {
      name: CARD_HIDE_OPTION_BUTTON,
    });

    await user.click(cardHideComboboxButton);

    const hideContentsOption = within(screen.getByRole('listbox')).getByRole(
      'option',
      { name: CARD_HIDE_OPTIONS[3].name },
    );

    await user.click(hideContentsOption);

    expect(
      within(verseCard).getByText(testVerseData.contents).classList,
    ).toContain(COVERED_CLASSNAME);
  });
});

describe('DrillingPage Test - bible version option and verse card integration test', () => {
  const BV_OPTION_BUTTON = '성경버전 선택';

  test('when user selects bible version option, verse contents change to corresponding version', async () => {
    const { user, verses_kor, verse_gae } = await setup();
    const testVerseKorData = verses_kor[0];
    const testVerseGaeData = verse_gae[0];

    expect(testVerseGaeData.contents).not.eq(testVerseKorData.contents);

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(testVerseKorData),
      }),
    );

    expect(
      within(
        screen.getByTestId(createVerseCardTestId(testVerseKorData)),
      ).getByText(testVerseKorData.contents),
    ).not.toBeNull();

    const bibleVersionComboboxButton = screen.getByRole('button', {
      name: BV_OPTION_BUTTON,
    });

    await user.click(bibleVersionComboboxButton);

    const bibleGaeOption = within(screen.getByRole('listbox')).getByRole(
      'option',
      { name: BIBLE_VERSIONS[1].name },
    );

    await user.click(bibleGaeOption);

    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('verseDisplay-loader'),
    );

    expect(
      within(
        screen.getByTestId(createVerseCardTestId(testVerseGaeData)),
      ).getByText(testVerseGaeData.contents),
    ).not.toBeNull();
  });
});
