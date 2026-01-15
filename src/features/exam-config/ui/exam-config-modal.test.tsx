import { beforeEach, describe, expect, test } from 'vitest';
import { EXAM_EXPOSE_OPTIONS, VERSE_SUMMARY_DATA } from '@msw/mock-data';
import { screen, within } from '@testing-library/react';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import mockAlert from '@utils/test/mocks/mock-alert';
import {
  mockExamConfigModalStore,
  mockExamConfigStore,
  mockVerseSelectStore,
} from '@utils/test/mock-zustand-store';
import { ExamConfigModal } from './exam-config-modal';
import { render } from '@utils/test/render';
import { userEvent } from '@testing-library/user-event';
import { routes } from '@shared/config/routes';

const setup = {
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

const navigateFn = vi.fn();

beforeEach(() => {
  mockVerseSelectStore({
    hasAnyId: () => true,
    verseIds: VERSE_SUMMARY_DATA.map(verse => verse.idx),
  });
  mockExamConfigStore({
    verseCount: VERSE_SUMMARY_DATA.length,
  });
  mockExamConfigModalStore({
    isOpen: true,
  });
  mockAnimationsApi();
  mockAlert();
  render(<ExamConfigModal />);
});

describe('ExamConfig Test', () => {
  beforeEach(() => {
    vi.mock('react-router-dom', async () => {
      const original = await vi.importActual('react-router-dom');
      return {
        ...original,
        useNavigate: () => navigateFn,
      };
    });
  });
  test('if it has time, expose, verse count and sort options inputs', async () => {
    const { TIME_LIMIT, EXPOSE, VERSE_COUNT } = setup;

    const exposeOptions = await screen.findByRole('combobox', {
      name: EXPOSE.LABEL,
    });
    expect(exposeOptions).toBeInTheDocument();

    expect(
      screen.getByRole('spinbutton', {
        name: TIME_LIMIT.LABEL,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('spinbutton', {
        name: VERSE_COUNT.LABEL,
      }),
    ).toBeInTheDocument();
  });

  describe('ExamConfig Confirm Test', () => {
    test(
      'if it navigates to exam page ' +
        'when form is properly filled and click confirm button',
      async () => {
        const user = userEvent.setup();
        const { TIME_LIMIT, EXPOSE, VERSE_COUNT, CONFIRM_BUTTON_LABEL } = setup;

        const exposeCombobox = await screen.findByRole('combobox', {
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

        const timeLimitInput = screen.getByRole('spinbutton', {
          name: TIME_LIMIT.LABEL,
        });
        await user.clear(timeLimitInput);
        await user.type(timeLimitInput, '20');
        expect(timeLimitInput).toHaveValue(20);

        const verseCountInput = screen.getByRole('spinbutton', {
          name: VERSE_COUNT.LABEL,
        });
        await user.clear(verseCountInput);
        await user.type(verseCountInput, VERSE_COUNT.DEFAULT.toString());
        expect(verseCountInput).toHaveValue(VERSE_COUNT.DEFAULT);

        await user.click(
          screen.getByRole('button', { name: CONFIRM_BUTTON_LABEL }),
        );

        expect(navigateFn).toHaveBeenCalledWith(routes.exam.path);
      },
    );
  });
});
