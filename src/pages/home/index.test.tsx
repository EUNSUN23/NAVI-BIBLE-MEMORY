import { screen, waitFor, within } from '@testing-library/react';
import {
  SERIES_DATA,
  SERIES_DATA_NO_SUB,
  VERSE_SUMMARY_DATA,
} from '@/msw/mockData';
import { userEvent } from '@testing-library/user-event';
import renderRoute from '@utils/test/renderRoute';
import mockAlert from '@utils/test/mocks/mockAlert';
import mockScrollIntoView from '@utils/test/mocks/mockScrollIntoView';
import waitForElementToBeRemovedIfExist from '@utils/test/waitForElementToBeRemovedIfExist';
import { createSeriesTabPanelId } from '@features/verseSelect/utils/createSeriesTabPanelId';
import { createVerseOptionId } from '@features/verseSelect/utils/createVerseOptionId';

const setup = () => {
  const user = userEvent.setup();
  renderRoute();

  return {
    HOME_LINK: '홈으로',
    DRILLING_LINK: '암송하기',
    EXAM_LINK: '시험보기',
    HOME_HEADING: 'NAVI 성경 암송',
    user,
  };
};

describe('HomePage Test', () => {
  beforeAll(() => {
    mockScrollIntoView();
  });

  beforeEach(() => {
    mockAlert();
  });

  test('renders "홈으로","암송하기","시험보기" links and series tabs', async () => {
    const { HOME_LINK, DRILLING_LINK, EXAM_LINK } = setup();
    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));

    expect(screen.getByRole('link', { name: HOME_LINK })).not.toBeNull();
    expect(screen.getByRole('link', { name: DRILLING_LINK })).not.toBeNull();
    expect(screen.getByRole('link', { name: EXAM_LINK })).not.toBeNull();

    SERIES_DATA.forEach(data => {
      expect(
        screen.getByRole('tab', {
          name: data.series_name,
          expanded: false,
        }),
      ).not.toBeNull();
    });
  });

  test('when clicks "drilling" link without selecting verses, alert pops up', async () => {
    const { user, DRILLING_LINK, HOME_HEADING } = setup();

    const testNav = await screen.findByRole('link', {
      name: DRILLING_LINK,
    });

    await user.click(testNav);
    expect(window.alert).toHaveBeenCalledWith('암송 구절을 선택해주세요. 😊');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: HOME_HEADING,
      }),
    ).not.toBeNull();
  });

  test('when clicks "exam" link without selecting verses, alert pops up and stop navigating', async () => {
    const { user, EXAM_LINK, HOME_HEADING } = setup();

    const testNav = await screen.findByRole('link', {
      name: EXAM_LINK,
    });

    await user.click(testNav);
    expect(window.alert).toHaveBeenCalledWith('암송 구절을 선택해주세요. 😊');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: HOME_HEADING,
      }),
    ).not.toBeNull();
  });

  test('when clicks "exam" link after selecting verses, "시험설정" dialog pops up', async () => {
    const { user, EXAM_LINK } = setup();

    const testTab = await screen.findByRole('tab', {
      name: SERIES_DATA_NO_SUB.series_name,
    });

    const testTabPanel = await screen.findByTestId(
      createSeriesTabPanelId(SERIES_DATA_NO_SUB.series_code),
    );

    expect(testTab.ariaExpanded).toBe('false');
    expect(testTabPanel.hidden).toBe(true);

    await user.click(testTab);

    expect(testTab.ariaExpanded).toBe('true');
    expect(testTabPanel.hidden).toBe(false);

    const testOption = await within(testTabPanel).findByTestId(
      createVerseOptionId(VERSE_SUMMARY_DATA[0]),
    );
    expect(testOption.ariaChecked).toBe('false');

    await user.click(testOption);

    expect(testOption.ariaChecked).toBe('true');

    const testNav = await screen.findByRole('link', {
      name: EXAM_LINK,
    });

    await user.click(testNav);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          level: 3,
          name: '시험설정',
        }),
      ).not.toBeNull();
    });
  });
});
