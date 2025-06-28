import { describe, test } from 'vitest';
import {
  CARD_SORT_METHODS,
  EXAM_EXPOSE_OPTIONS,
  VERSE_SUMMARY_DATA,
} from '@/mock/mockData';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import mockAlert from '@/lib/test/testUtils/mocks/mockAlert';
import { VerseSelectStore } from '@store/verseSelectStore';
import renderRoute from '@/lib/test/testUtils/renderRoute';

type StoreSelector<T> = <U>(state: T extends U ? U : never) => U[keyof U];

beforeAll(() => {
  vi.mock('@/store/verseSelectStore', async () => {
    const actual = await vi.importActual<
      typeof import('@store/verseSelectStore')
    >('@/store/verseSelectStore');

    return {
      useVerseSelectStore: vi
        .fn()
        .mockImplementation((selector: StoreSelector<VerseSelectStore>) =>
          selector({
            ...actual.useVerseSelectStore.getState(),
            hasAnyId: () => true,
            verseIds: VERSE_SUMMARY_DATA.map(verse => verse.idx),
          }),
        ),
    };
  });

  vi.mock('@/store/exam/examConfigModalStore', async () => {
    return await vi.importActual<
      typeof import('@store/exam/examConfigModalStore')
    >('@store/exam/examConfigModalStore');
  });

  vi.mock('@/store/exam/examConfigStore', async () => {
    return await vi.importActual<typeof import('@store/exam/examConfigStore')>(
      '@store/exam/examConfigStore',
    );
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
    EXPOSE: { LABEL: '표시', DEFAULT: EXAM_EXPOSE_OPTIONS[0].name },
    SORT: { LABEL: '순서', DEFAULT: CARD_SORT_METHODS[0].name },
    VERSE_COUNT: { LABEL: '구절 수', DEFAULT: VERSE_SUMMARY_DATA.length },
    INVALID_CONFIG_MESSAGE: '시험설정 입력을 완료해주세요.',
    CONFIRM_BUTTON_LABEL: '확인',
    LOADER_ID: 'loader',
  };
};

describe('ExamConfig Rendering Test', () => {
  test('render inputs for time, expose, verse count, sort options', async () => {
    const { TIME_LIMIT, EXPOSE, SORT, VERSE_COUNT, LOADER_ID } = await setup();

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await waitForElementToBeRemovedIfExist(screen.getAllByTestId(LOADER_ID));

    expect(
      screen.getByRole('spinbutton', {
        name: TIME_LIMIT.LABEL,
        value: { now: TIME_LIMIT.DEFAULT },
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('combobox', { name: EXPOSE.LABEL }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('spinbutton', {
        name: VERSE_COUNT.LABEL,
        value: { now: VERSE_COUNT.DEFAULT },
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('combobox', { name: SORT.LABEL }),
    ).toBeInTheDocument();
  });
});

describe('ExamConfig Integration Test', () => {
  test('when the user clicks confirm button with falsy time limit, alert pops up', async () => {
    const {
      user,
      TIME_LIMIT,
      INVALID_CONFIG_MESSAGE,
      CONFIRM_BUTTON_LABEL,
      LOADER_ID,
    } = await setup();

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await waitForElementToBeRemovedIfExist(screen.queryAllByTestId(LOADER_ID));

    const timeLimitInput = await screen.findByRole('spinbutton', {
      name: TIME_LIMIT.LABEL,
    });

    act(() => {
      void user.clear(timeLimitInput);
      expect(timeLimitInput).toHaveValue(0);
    });

    await user.click(
      screen.getByRole('button', { name: CONFIRM_BUTTON_LABEL }),
    );

    expect(window.alert).toHaveBeenCalledWith(INVALID_CONFIG_MESSAGE);
  });

  test(
    'when the user clicks confirm button with proper configurations, ' +
      'it navigates to exam page',
    async () => {
      const { user, CONFIRM_BUTTON_LABEL, LOADER_ID } = await setup();

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      await waitForElementToBeRemovedIfExist(
        screen.queryAllByTestId(LOADER_ID),
      );

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
