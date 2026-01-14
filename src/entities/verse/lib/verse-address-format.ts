import type { VerseDetailData, VerseSummaryData } from '@entities/verse';

type VerseDetailLikeData<T> =
  T extends Pick<VerseDetailData, 'bible' | 'chapter' | 'verse1' | 'verse2'>
    ? T
    : never;

export const createVerseAddress = (
  data: VerseSummaryData | VerseDetailData,
) => {
  const {
    bible: { name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

export const createShortVerseAddress = <T>(data: VerseDetailLikeData<T>) => {
  const {
    bible: { short_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${short_name}${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};
