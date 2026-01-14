import { screen, within } from '@testing-library/react';
import {
  BIBLE_VERSIONS,
  CARD_HIDE_OPTIONS,
  VERSE_DETAIL_DATA_GAE,
  VERSE_DETAIL_DATA_KOR,
} from '@msw/mockData';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { userEvent } from '@testing-library/user-event';
import { describe } from 'vitest';
import { createVerseCardTestId } from '@entities/verse/lib/create-verse-card-test-id';
import { mockVerseSelectStore } from '@utils/test/mockZustandStore';
import { orderVerseDetails } from 'src/entities/verse';
import { DrillingPage } from './drilling-page';
import { render } from '@utils/test/render';
import { createShortVerseAddress, createVerseAddress } from '@entities/verse';

const setup = async () => {
  const user = userEvent.setup();

  render(<DrillingPage />);

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
    verses_kor: orderVerseDetails(
      VERSE_DETAIL_DATA_KOR.map(verse => ({
        ...verse,
        contents: verse.contents.trim(),
      })),
    ),
    verse_gae: orderVerseDetails(
      VERSE_DETAIL_DATA_GAE.map(verse => ({
        ...verse,
        contents: verse.contents.trim(),
      })),
    ),
  };
};

beforeEach(() => {
  mockVerseSelectStore({
    verseIds: VERSE_DETAIL_DATA_KOR.map(data => data.card_info.idx),
    hasAnyId: () => true,
  });
  mockAnimationsApi();
  vi.mock('react-router-dom', async () => {
    const original = await vi.importActual('react-router-dom');
    return {
      ...original,
      useNavigate: () => vi.fn(),
    };
  });
});

describe('DrillingPage Test - rendering', () => {
  test('if it renders bible version and card hide options', async () => {
    const { BV_OPTION, HIDE_OPTION } = await setup();

    expect(
      screen.getByRole('combobox', {
        name: BV_OPTION,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', {
        name: HIDE_OPTION,
      }),
    ).toBeInTheDocument();
  });

  test('if it renders verse cards', async () => {
    const { verses_kor } = await setup();
    verses_kor.forEach(verse => {
      expect(
        screen.getByTestId(createVerseCardTestId(verse.card_info.idx)),
      ).toBeInTheDocument();
    });
  });
});

describe('DrillingPage Test - card hide option and verse card integration test', () => {
  const COVERED_CLASSNAME = 'text-covered';
  const CARD_HIDE_OPTION_BUTTON = '숨김 옵션 선택';

  test('when user selects address hide option, hiding style applies to verse address', async () => {
    const { user, verses_kor } = await setup();
    const testVerseData = verses_kor[0];

    const verseCard = screen.getByTestId(
      createVerseCardTestId(testVerseData.card_info.idx),
    );
    const cardHideComboboxButton = screen.getByRole('button', {
      name: CARD_HIDE_OPTION_BUTTON,
    });

    await user.click(cardHideComboboxButton);

    const listbox = screen.getByRole('listbox');
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

    const verseCard = screen.getByTestId(
      createVerseCardTestId(testVerseData.card_info.idx),
    );
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
      within(verseCard).getByText(testVerseData.card_info.theme).classList,
    ).toContain(COVERED_CLASSNAME);
  });

  test('when user selects contents hide option, hiding style applies to verse contents', async () => {
    const { user, verses_kor } = await setup();
    const testVerseData = verses_kor[0];

    const verseCard = screen.getByTestId(
      createVerseCardTestId(testVerseData.card_info.idx),
    );
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
    const testVerseKorData = verses_kor[1];
    const testVerseGaeData = verse_gae[1];

    expect(testVerseGaeData.contents).not.eq(testVerseKorData.contents);

    await user.click(
      screen.getByRole('button', {
        name: createShortVerseAddress(testVerseKorData),
      }),
    );

    expect(
      within(
        screen.getByTestId(
          createVerseCardTestId(testVerseKorData.card_info.idx),
        ),
      ).getByText(testVerseKorData.contents),
    ).toBeInTheDocument();

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
        screen.getByTestId(
          createVerseCardTestId(testVerseGaeData.card_info.idx),
        ),
      ).getByText(testVerseGaeData.contents),
    ).toBeInTheDocument();
  });
});
