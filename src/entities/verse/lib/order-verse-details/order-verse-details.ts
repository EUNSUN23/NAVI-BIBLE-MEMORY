import { type VerseDetailDataList } from '../../api/verse-detail.type';

export const orderVerseDetails = (data: VerseDetailDataList) => {
  return data.sort((a, b) => {
    return a.card_info.series.ord === b.card_info.series.ord
      ? a.card_info.card_num - b.card_info.card_num
      : a.card_info.series.ord - b.card_info.series.ord;
  });
};
