import {
  VerseDetailData,
  VerseDetailDataList,
} from '@/entities/verse/api/verseDetail.type';
import orderVerseDetails from '@features/verseDisplay/utils/orderVerseDetails/index';

const createDummyCard = (
  seriesOrd: number,
  cardNum: number,
): VerseDetailData => {
  return {
    card_info: {
      idx: 1,
      series: {
        ord: seriesOrd,
        name: '',
      },
      card_num: cardNum,
      category: '',
      theme: '',
    },
    chapter: 1,
    verse1: 1,
    verse2: 1,
    bible: {
      name: '',
      short_name: '',
    },
    contents: '',
  };
};

const DATA_LENGTH = 5;

describe('orderVerseDetail test', () => {
  it('arranges cards in ascending order by series_ord, if series_ord are different', () => {
    const DIFF_SERIES_CARDS: VerseDetailDataList = Array.from(
      { length: DATA_LENGTH },
      (_, i) => createDummyCard(DATA_LENGTH - i, 1),
    );

    const result = orderVerseDetails(DIFF_SERIES_CARDS);
    let lastSeriesOrd = result[0].card_info.series.ord;
    for (let i = 1; i < result.length - 1; i++) {
      const currentSeriesOrd = result[i].card_info.series.ord;
      expect(currentSeriesOrd).toBeGreaterThan(lastSeriesOrd);
      lastSeriesOrd = currentSeriesOrd;
    }
  });

  it('arranges cards in ascending order by card_num, if series_ords are same', () => {
    const SAME_SERIES_CARDS: VerseDetailDataList = Array.from(
      { length: DATA_LENGTH },
      (_, i) => createDummyCard(1, DATA_LENGTH - i),
    );

    const result = orderVerseDetails(SAME_SERIES_CARDS);
    let lastCardNum = result[0].card_info.card_num;
    for (let i = 1; i < result.length - 1; i++) {
      const currentCardNum = result[i].card_info.card_num;
      expect(currentCardNum).toBeGreaterThan(lastCardNum);
      lastCardNum = currentCardNum;
    }
  });
});
