import { mockVerseSelectStore } from '@utils/test/mockZustandStore';
import { VERSE_SUMMARY_DATA } from '@msw/mockData';
import { screen, waitFor } from '@testing-library/react';
import { routes } from '@/shared/constants/routes';
import { render } from '@utils/test/render';
import { MemoryRouter } from 'react-router-dom';
import ExamConfigModal from '@features/examConfig';
import mockAlert from '@utils/test/mocks/mockAlert';
import { userEvent } from '@testing-library/user-event';
import { ExamPageNavLink } from './ExamPageNavLink';

const setup = () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/']}>
      <ExamPageNavLink />
      <ExamConfigModal />
    </MemoryRouter>,
  );
  return { user, SELECT_VERSE_ALERT: '암송 구절을 선택해주세요. 😊' };
};

describe('ExamPageNavLink Test', () => {
  test('"시험설정" dialog pops up, if user clicks the link when any of verses are selected', async () => {
    mockVerseSelectStore({
      verseIds: VERSE_SUMMARY_DATA.map(v => v.idx),
    });
    const { user } = setup();

    const testNav = await screen.findByRole('link', {
      name: routes.exam.label,
    });

    await user.click(testNav);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: '시험설정',
        }),
      ).toBeInTheDocument();
    });
  });

  test('an alert pops up, if user clicks "시험보기" link when none of verses are selected', async () => {
    mockAlert();
    const { user, SELECT_VERSE_ALERT } = setup();
    const testNav = await screen.findByRole('link', {
      name: routes.exam.label,
    });

    await user.click(testNav);

    expect(window.alert).toHaveBeenCalledWith(SELECT_VERSE_ALERT);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
