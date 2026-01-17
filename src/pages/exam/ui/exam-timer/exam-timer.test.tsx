import { afterEach, describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { ExamTimer } from './exam-timer';
import { act, screen } from '@testing-library/react';
import { customRender } from '@shared/lib/test/render';

const setup = () => {
  customRender(<ExamTimer time={30} />);

  return {
    INIT_TIME: 30,
    TIMELIMIT_LABEL: '남은 시간',
    TOGGLE_TIMER_BTN_ID: 'timerToggleButton',
    PAUSE_LABEL: '일시정지',
    RESUME_LABEL: '재시작',
  };
};

beforeAll(() => {
  vi.spyOn(window, 'confirm');
});

describe('Timer Behavior Test', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  test('displays the time in "mm minutes ss seconds" format on render', () => {
    const { TIMELIMIT_LABEL, INIT_TIME } = setup();
    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`${INIT_TIME}분 00초`);
  });

  test('decreases the time by one second every second', () => {
    const { TIMELIMIT_LABEL, INIT_TIME } = setup();

    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`${INIT_TIME}분 00초`);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`29분 59초`);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`29분 58초`);
  });
});

describe('Timer Pause Button Test', () => {
  test('button label switches from "pause" to "resume" and vice versa when the button is clicked', async () => {
    const user = userEvent.setup();
    const { PAUSE_LABEL, RESUME_LABEL, TOGGLE_TIMER_BTN_ID } = setup();

    const timerToggleButton = screen.getByTestId(TOGGLE_TIMER_BTN_ID);
    expect(timerToggleButton).toHaveTextContent(PAUSE_LABEL);

    await user.click(timerToggleButton);

    expect(timerToggleButton).toHaveTextContent(RESUME_LABEL);

    await user.click(timerToggleButton);

    expect(timerToggleButton).toHaveTextContent(PAUSE_LABEL);
  });
});

test('timer stops countdown when the pause button is clicked', async () => {
  const user = userEvent.setup();
  const { PAUSE_LABEL, RESUME_LABEL, TIMELIMIT_LABEL } = setup();

  await user.click(
    screen.getByRole('button', {
      name: PAUSE_LABEL,
    }),
  );

  expect(
    screen.getByRole('button', {
      name: RESUME_LABEL,
    }),
  ).toBeInTheDocument();

  vi.useFakeTimers();
  act(() => {
    vi.advanceTimersByTime(2000);
  });

  expect(
    screen.getByRole('status', { name: TIMELIMIT_LABEL }),
  ).toHaveTextContent(`30분 00초`);

  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});
