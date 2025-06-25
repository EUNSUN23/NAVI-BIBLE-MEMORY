import renderRoute from '@/lib/test/testUtils/renderRoute';
import { screen } from '@testing-library/react';
import { VERSE_DETAIL_DATA_KOR } from '@/mock/mockData';
import { mockAnimationsApi } from 'jsdom-testing-mocks';
import { createVerseCardTestId } from '@utils/componentUtils/verseCard';
import waitForElementToBeRemovedIfExist from '@/lib/test/testUtils/waitForElementToBeRemovedIfExist';
import { VerseSelectStore } from '@store/verseSelectStore';
import { VerseId } from '@features/verseSelect/types/verseSummaryData.types';

type SelectorMock = (
  state: VerseSelectStore,
) => VerseSelectStore extends infer V ? V : never;

describe('DrillingPage Test', () => {
  beforeAll(() => {
    vi.mock('@store/verseSelectStore', async () => {
      const verseSelectStore = await vi.importActual('@store/verseSelectStore');
      return {
        ...verseSelectStore,
        useVerseSelectStore: vi
          .fn()
          .mockImplementation((selector: SelectorMock) =>
            selector({
              verseIds: VERSE_DETAIL_DATA_KOR.map(data => data.idx),
              remove: (_: VerseId) => {},
              add: (_: VerseId | VerseId[]) => {},
              hasId: (_: VerseId) => true,
              reset: () => {},
              hasAnyId: () => true,
            }),
          ),
      };
    });
    vi.mock('@store/exam/examConfigModalStore', async () => {
      return await vi.importActual('@store/exam/examConfigModalStore');
    });
    mockAnimationsApi();
    renderRoute('/drilling');
  });

  afterAll(() => {
    vi.resetModules();
    vi.restoreAllMocks();
  });

  test('renders "홈으로" and "시험보기" links, "성경버전" and "숨김" options, and card slide', async () => {
    await waitForElementToBeRemovedIfExist(screen.queryByTestId('loader'));
    expect(
      screen.queryByRole('heading', { level: 1, name: '암송하기' }),
    ).not.toBeNull();
    expect(screen.queryByRole('link', { name: '홈으로' })).not.toBeNull();
    expect(screen.queryByRole('link', { name: '시험보기' })).not.toBeNull();

    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('bibleVersionSelect-loader'),
    );
    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('cardHideOptionSelect-loader'),
    );
    await waitForElementToBeRemovedIfExist(
      screen.queryByTestId('verseDisplay-loader'),
    );

    expect(
      screen.queryByRole('combobox', {
        name: '성경버전',
      }),
    ).not.toBeNull();
    expect(
      screen.queryByRole('combobox', {
        name: '숨김',
      }),
    ).not.toBeNull();

    expect(
      screen.queryByRole('button', { name: '처음 구절로' }),
    ).not.toBeNull();
    expect(
      screen.queryByRole('button', { name: '다음 구절로' }),
    ).not.toBeNull();
    expect(
      screen.queryByRole('button', { name: '이전 구절로' }),
    ).not.toBeNull();
    expect(screen.queryByRole('button', { name: '끝 구절로' })).not.toBeNull();

    VERSE_DETAIL_DATA_KOR.forEach(data => {
      expect(screen.queryByTestId(createVerseCardTestId(data))).not.toBeNull();
    });
  });
});
