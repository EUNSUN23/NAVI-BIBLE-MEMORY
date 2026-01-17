import { beforeEach, describe, test } from 'vitest';
import { VERSE_DETAIL_DATA_KOR } from '@shared/lib/msw/mock-data';
import { userEvent } from '@testing-library/user-event';
import waitForElementToBeRemovedIfExist from '@shared/lib/test/wait-for-element-to-be-removed-If-exist';
import { screen, waitFor, within } from '@testing-library/react';
import {
  mockExamConfigStore,
  mockVerseSelectStore,
} from '@shared/lib/test/mocks/mock-zustand-store';
import { routes } from '@shared/config/routes';
import { ExamPage } from './exam-page';
import { createVerseAddress } from '@entities/verse';
import { customRender } from '@shared/lib/test/render';

const navigateFn = vi.fn();
const setup = () => {
  const user = userEvent.setup();
  customRender(<ExamPage />);
  return {
    user,
    versesAllByAsc: VERSE_DETAIL_DATA_KOR.map(verse => ({
      ...verse,
      contents: verse.contents.trim(),
    })),
    LOADER_ID: 'loader',
    HOME_LINK_LABEL: routes.home.label,
    DRILLING_LINK_LABEL: routes.drilling.label,
    RANGE_SECTION_LABEL: '시험 범위 정보',
    VERSE_RANGE: {
      LABEL: '범위',
      TEXT: 'DEP 242구절',
    },
    VERSE_COUNT: {
      LABEL: '구절 수',
      TEXT: '6',
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
    createExamCardTestId: (verseId: number) => {
      return `exam-verse-${verseId}`;
    },
  };
};

beforeEach(() => {
  mockExamConfigStore({ verseCount: 6 });
  mockVerseSelectStore({
    hasAnyId: () => true,
    verseIds: VERSE_DETAIL_DATA_KOR.map(verse => verse.card_info.idx),
  });
  beforeEach(() => {
    vi.mock('react-router-dom', async () => {
      const original = await vi.importActual('react-router-dom');
      return {
        ...original,
        useNavigate: () => navigateFn,
      };
    });
  });
});

describe('ExamPage Rendering Test', () => {
  test('render verse range and verse count info', async () => {
    const { LOADER_ID, RANGE_SECTION_LABEL, VERSE_RANGE, VERSE_COUNT } =
      setup();

    await waitForElementToBeRemovedIfExist(screen.getByTestId(LOADER_ID));

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
        createExamCardTestId(verse.card_info.idx),
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
