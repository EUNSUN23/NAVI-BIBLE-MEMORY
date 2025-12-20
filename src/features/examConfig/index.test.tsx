import { beforeEach, describe, expect, test } from 'vitest';
import { EXAM_EXPOSE_OPTIONS, VERSE_SUMMARY_DATA } from '@/msw/mockData';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import mockAlert from '@utils/test/mocks/mockAlert';
import renderRoute from '@utils/test/renderRoute';
import {
  mockExamConfigStore,
  mockVerseSelectStore,
} from '@utils/test/mockZustandStore';

beforeEach(() => {
  mockVerseSelectStore({
    hasAnyId: () => true,
    verseIds: VERSE_SUMMARY_DATA.map(verse => verse.idx),
  });

  mockExamConfigStore({
    verseCount: VERSE_SUMMARY_DATA.length,
  });

  mockAnimationsApi();
  mockAlert();
});

const setup = async () => {
  const user = userEvent.setup();
  renderRoute('/');
  await waitForElementToBeRemovedIfExist(screen.getAllByTestId('loader'));
  await user.click(screen.getByRole('link', { name: '시험보기' }));
  return {
    user,
    TIME_LIMIT: { LABEL: '제한시간', DEFAULT: 30 },
    EXPOSE: {
      LABEL: '표시',
      DEFAULT: EXAM_EXPOSE_OPTIONS[0].name,
      BUTTON_LABEL: '시험 노출 옵션 선택',
    },
    VERSE_COUNT: {
      LABEL: '구절 수',
      DEFAULT: VERSE_SUMMARY_DATA.length,
    },
    INVALID_CONFIG_MESSAGE: '시험설정 입력을 완료해주세요.',
    CONFIRM_BUTTON_LABEL: '확인',
    LOADER_ID: 'loader',
  };
};

describe('ExamConfig Test', () => {
  test('if it has time, expose, verse count and sort options inputs', async () => {
    const { TIME_LIMIT, EXPOSE, VERSE_COUNT, LOADER_ID } = await setup();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await waitForElementToBeRemovedIfExist(screen.getAllByTestId(LOADER_ID));

    expect(
      screen.getByRole('spinbutton', {
        name: TIME_LIMIT.LABEL,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('combobox', { name: EXPOSE.LABEL }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('spinbutton', {
        name: VERSE_COUNT.LABEL,
      }),
    ).toBeInTheDocument();
  });

  test(
    'if it navigates to exam page ' +
      'when form is properly filled and click confirm button',
    async () => {
      const {
        TIME_LIMIT,
        EXPOSE,
        VERSE_COUNT,
        user,
        CONFIRM_BUTTON_LABEL,
        LOADER_ID,
      } = await setup();
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      await waitForElementToBeRemovedIfExist(
        screen.queryAllByTestId(LOADER_ID),
      );

      const timeLimitInput = screen.getByRole('spinbutton', {
        name: TIME_LIMIT.LABEL,
      });
      await user.clear(timeLimitInput);
      await user.type(timeLimitInput, '20');
      expect(timeLimitInput).toHaveValue(20);

      const exposeCombobox = screen.getByRole('combobox', {
        name: EXPOSE.LABEL,
      });
      await user.click(
        screen.getByRole('button', {
          expanded: false,
          name: EXPOSE.BUTTON_LABEL,
        }),
      );
      await user.click(
        within(screen.getByRole('listbox')).getByRole('option', {
          name: EXAM_EXPOSE_OPTIONS[1].name,
        }),
      );
      expect(exposeCombobox).toHaveValue(EXAM_EXPOSE_OPTIONS[1].name);

      const verseCountInput = screen.getByRole('spinbutton', {
        name: VERSE_COUNT.LABEL,
      });
      await user.clear(verseCountInput);
      await user.type(verseCountInput, VERSE_COUNT.DEFAULT.toString());
      expect(verseCountInput).toHaveValue(VERSE_COUNT.DEFAULT);

      await user.click(
        screen.getByRole('button', { name: CONFIRM_BUTTON_LABEL }),
      );

      await waitForElementToBeRemovedIfExist(
        screen.queryAllByTestId(LOADER_ID),
      );

      expect(
        screen.getByRole('heading', { level: 1, name: '시험보기' }),
      ).toBeInTheDocument();
    },
  );
});
