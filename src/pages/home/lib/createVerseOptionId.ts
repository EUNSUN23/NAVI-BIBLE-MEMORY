import { type VerseSummaryData } from '@entities/verse';

export const createVerseOptionId = (verseSummaryData: VerseSummaryData) => {
  const { series_code, card_num } = verseSummaryData;

  return `${series_code}-${card_num}`;
};
