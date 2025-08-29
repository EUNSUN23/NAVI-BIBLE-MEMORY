import { describe, expect, test } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import Timer from '@features/exam/components/timer/index';
import { act, screen } from '@testing-library/react';
import { render } from '@/test/utils/render';

const setup = () => {
  const user = userEvent.setup();

  render(<Timer time={30} />);

  return {
    user,
    INIT_TIME: 30,
    TIMELIMIT_LABEL: '남은 시간',
    PAUSE_LABEL: '일시정지',
    RESUME_LABEL: '다시시작',
  };
};

beforeAll(() => {
  vi.mock('@/store/exam/examStatusStore', async () => {
    return await vi.importActual('@/store/exam/examStatusStore');
  });

  vi.spyOn(window, 'confirm');
});

describe('Timer Behavior Test', () => {
  beforeEach(() => {
    console.log('beforeEach');
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.resetAllMocks();
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

  test('pauses time countdown when pause button is clicked', () => {
    const { TIMELIMIT_LABEL, PAUSE_LABEL, RESUME_LABEL, user } = setup();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`29분 59초`);

    act(() => {
      void user.click(screen.getByRole('button', { name: PAUSE_LABEL }));
    });

    expect(
      screen.getByRole('button', { name: RESUME_LABEL }),
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(
      screen.getByRole('status', { name: TIMELIMIT_LABEL }),
    ).toHaveTextContent(`29분 59초`);
  });

  // test('resumes countdown from the paused time when resume button is clicked', () => {
  //   // TODO: Simulate resume and check time continues decreasing from paused value
  // });
  //
  // test('shows a popup when time reaches zero', () => {
  //   // TODO: Fast-forward to 0 and check that a popup or alert is shown
  // });
});
