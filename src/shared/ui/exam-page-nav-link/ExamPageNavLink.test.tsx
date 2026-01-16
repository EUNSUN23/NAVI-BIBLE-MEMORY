import { mockVerseSelectStore } from '@shared/lib/test/mocks/mock-zustand-store';
import { VERSE_SUMMARY_DATA } from '@shared/lib/msw/mock-data';
import { screen } from '@testing-library/react';
import { routes } from '@shared/config/routes';
import { render } from '@shared/lib/test/render';
import { MemoryRouter } from 'react-router-dom';
import { ExamConfigModal } from '@features/exam-config/ui/exam-config-modal';
import mockAlert from '@shared/lib/test/mocks/mock-alert';
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

    const dialogHeader = await screen.findByRole('heading', {
      level: 3,
      name: '시험설정',
    });

    expect(dialogHeader).toBeInTheDocument();
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
