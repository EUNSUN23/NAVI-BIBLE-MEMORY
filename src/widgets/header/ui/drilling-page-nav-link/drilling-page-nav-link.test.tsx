import { screen } from '@testing-library/react';
import { routes } from '@shared/config/routes';
import { MemoryRouter } from 'react-router-dom';
import { ExamConfigModal } from '@features/exam-config/ui/exam-config-modal';
import mockAlert from '@shared/lib/test/mocks/mock-alert';
import { userEvent } from '@testing-library/user-event';
import { DrillingPageNavLink } from './drilling-page-nav-link';
import { customRender } from '@shared/lib/test/render';

const setup = () => {
  const user = userEvent.setup();
  customRender(
    <MemoryRouter initialEntries={['/']}>
      <DrillingPageNavLink />
      <ExamConfigModal />
    </MemoryRouter>,
  );
  return { user, SELECT_VERSE_ALERT: '암송 구절을 선택해주세요. 😊' };
};

describe('DrillingPageNavLink Test', () => {
  test('an alert pops up, if user clicks the link when none of verses are selected', async () => {
    mockAlert();
    const { user, SELECT_VERSE_ALERT } = setup();
    const testNav = await screen.findByRole('link', {
      name: routes.drilling.label,
    });

    await user.click(testNav);

    expect(window.alert).toHaveBeenCalledWith(SELECT_VERSE_ALERT);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});
