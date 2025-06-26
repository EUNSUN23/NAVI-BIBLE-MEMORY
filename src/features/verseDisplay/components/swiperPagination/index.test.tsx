import { VERSE_DETAIL_DATA_KOR } from '@/mock/mockData';
import SwiperPagination from '@features/verseDisplay/components/swiperPagination/index';
import { render, screen } from '@testing-library/react';
import { getShortVerseAddress } from '@utils/common';
import { userEvent } from '@testing-library/user-event';

const setup = () => {
  const user = userEvent.setup();
  const verses = VERSE_DETAIL_DATA_KOR.map(data => ({
    ...data,
    contents: data.verse_kor,
  }));

  render(<SwiperPagination verses={verses} activeIndex={0} />);

  return {
    user,
    verses,
    PAGE_RANGE: 4,
    TO_FIRST: '처음으로',
    TO_LAST: '끝으로',
    ACTIVE_CLASS: 'swiper-custom-pagination-bullet-active',
    DISABLED_CLASS: 'swiper-custom-nav-disabled',
  };
};

describe('SwiperPagination Test', () => {
  beforeAll(() => {
    vi.mock('swiper/react', () => {
      return {
        useSwiper: () => ({ slideTo: (_: number) => {} }),
      };
    });
  });

  test('when user clicks pagination button, active style applies to the button', async () => {
    const { verses, user, ACTIVE_CLASS } = setup();

    const testPageButton = screen.getByRole('button', {
      name: getShortVerseAddress(verses[1]),
    });

    expect(testPageButton.classList).not.toContain(ACTIVE_CLASS);

    await user.click(testPageButton);

    expect(testPageButton.classList).toContain(ACTIVE_CLASS);
  });

  test('when user is on the first page, disabled style applies to nav-to-first button', () => {
    const { TO_FIRST, verses, ACTIVE_CLASS, DISABLED_CLASS } = setup();

    expect(
      screen.getByRole('button', { name: getShortVerseAddress(verses[0]) })
        .classList,
    ).toContain(ACTIVE_CLASS);

    const navToFirstButton = screen
      .getByText(TO_FIRST)
      .closest('[role="button"]')!;

    expect(navToFirstButton.classList).toContain(DISABLED_CLASS);
  });

  test('when user is on the last page, disable style applies to nav-to-last button', async () => {
    const { TO_LAST, user, verses, ACTIVE_CLASS, DISABLED_CLASS } = setup();

    const navToLastButton = screen
      .getByText(TO_LAST)
      .closest('[role="button"]')!;

    await user.click(navToLastButton);

    expect(
      screen.getByRole('button', {
        name: getShortVerseAddress(verses[verses.length - 1]),
      }).classList,
    ).toContain(ACTIVE_CLASS);

    expect(navToLastButton.classList).toContain(DISABLED_CLASS);
  });
});
