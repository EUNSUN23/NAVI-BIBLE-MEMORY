import { VerseSummaryData } from '@features/verseSelect/types/verseSummaryData.type';

export const createVerseOptionId = (verseSummaryData: VerseSummaryData) => {
  const { series_code, card_num } = verseSummaryData;

  return `${series_code}-${card_num}`;
};
