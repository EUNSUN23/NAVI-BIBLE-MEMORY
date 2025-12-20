import { beforeEach, describe, test } from 'vitest';
import { EXAM_VERSES_KOR_ALL_ASC } from '@/msw/mockData';
import { StoreSelectorMock } from '@/types/common.types';
import { ExamConfigStore } from '@store/exam/examConfigStore';
import { userEvent } from '@testing-library/user-event';
import renderRoute from '@utils/test/renderRoute';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { screen, waitFor, within } from '@testing-library/react';
import { ExamVerseData } from '@features/exam/types/examVerseData.type';
import { createVerseAddress } from '@utils/common';
import { mockVerseSelectStore } from '@utils/test/mockZustandStore';

const setup = () => {
  const user = userEvent.setup();

  renderRoute('/exam');

  return {
    user,
    versesAllByAsc: EXAM_VERSES_KOR_ALL_ASC.map(verse => ({
      ...verse,
      contents: verse.verse_kor,
    })).sort((a, b) =>
      a.series_code.ord === b.series_code.ord
        ? a.card_num - b.card_num
        : a.series_code.ord - b.series_code.ord,
    ),
    LOADER_ID: 'loader',
    HOME_LINK_LABEL: '홈으로',
    DRILLING_LINK_LABEL: '암송하기',
    RANGE_SECTION_LABEL: '시험 범위 정보',
    VERSE_RANGE: {
      LABEL: '범위',
      TEXT: 'DEP 242구절',
    },
    VERSE_COUNT: {
      LABEL: '구절 수',
      TEXT: '32',
    },
    TIMELIMIT_SECTION_LABEL: '제한시간 정보',
    TIME_LIMIT: {
      LABEL: '남은 시간',
      TEXT: '30분 00초',
    },
    EXAM_BOARD_SECTION: '시험 보드',
    EXAM_CARD_ADDR: '장절',
    EXAM_CARD_THEME: '제목',
    EXAM_CARD_CONTENTS: '내용',
    createExamCardTestId: (verse: ExamVerseData) => {
      return `exam-verse-${verse.idx}`;
    },
  };
};

beforeEach(() => {
  vi.mock('@/store/bibleVersionStore', async () => {
    return await vi.importActual('@/store/bibleVersionStore');
  });

  vi.mock('@/store/exam/examConfigStore', async () => {
    const actual = await vi.importActual<
      typeof import('@store/exam/examConfigStore')
    >('@store/exam/examConfigStore');
    return {
      useExamConfigStore: vi
        .fn()
        .mockImplementation((selector: StoreSelectorMock<ExamConfigStore>) =>
          selector({
            ...actual.useExamConfigStore.getState(),
            verseCount: EXAM_VERSES_KOR_ALL_ASC.length,
          }),
        ),
    };
  });

  mockVerseSelectStore({
    hasAnyId: () => true,
    verseIds: EXAM_VERSES_KOR_ALL_ASC.map(verse => verse.idx),
  });

  vi.mock('@/store/exam/examStatusStore', async () => {
    return await vi.importActual('@/store/exam/examStatusStore');
  });
});

describe('ExamPage Rendering Test', () => {
  test('render links for home and drilling page', async () => {
    const { LOADER_ID, HOME_LINK_LABEL, DRILLING_LINK_LABEL } = setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_ID));

    expect(
      screen.getByRole('link', { name: HOME_LINK_LABEL }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: DRILLING_LINK_LABEL }),
    ).toBeInTheDocument();
  });

  test('render verse range and verse count info', async () => {
    const { LOADER_ID, RANGE_SECTION_LABEL, VERSE_RANGE, VERSE_COUNT } =
      setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_ID));

    const rangeInfoSection = screen.getByRole('region', {
      name: RANGE_SECTION_LABEL,
    });

    expect(
      within(rangeInfoSection).getByText(VERSE_RANGE.TEXT),
    ).toBeInTheDocument();
    expect(
      within(rangeInfoSection).getByText(VERSE_COUNT.TEXT),
    ).toBeInTheDocument();
  });

  test('render time limit info', async () => {
    const { LOADER_ID, TIMELIMIT_SECTION_LABEL, TIME_LIMIT } = setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_ID));

    const timeLimitSection = screen.getByRole('region', {
      name: TIMELIMIT_SECTION_LABEL,
    });

    await waitFor(() => {
      expect(
        within(timeLimitSection).getByRole('status', {
          name: TIME_LIMIT.LABEL,
        }),
      ).toHaveTextContent(TIME_LIMIT.TEXT);
    });
  });

  test('render exam verse cards', async () => {
    const {
      LOADER_ID,
      EXAM_BOARD_SECTION,
      EXAM_CARD_THEME,
      EXAM_CARD_CONTENTS,
      versesAllByAsc,
      createExamCardTestId,
    } = setup();

    await waitForElementToBeRemovedIfExist(screen.queryByTestId(LOADER_ID));

    const examCardSection = screen.getByRole('region', {
      name: EXAM_BOARD_SECTION,
    });

    versesAllByAsc.forEach(verse => {
      const examCard = within(examCardSection).getByTestId(
        createExamCardTestId(verse),
      );
      expect(
        within(examCard).getByText(createVerseAddress(verse)),
      ).toBeInTheDocument();
      expect(
        within(examCard).getByRole('textbox', { name: EXAM_CARD_THEME }),
      ).toBeInTheDocument();
      expect(
        within(examCard).getByRole('textbox', { name: EXAM_CARD_CONTENTS }),
      ).toBeInTheDocument();
    });
  });
});
