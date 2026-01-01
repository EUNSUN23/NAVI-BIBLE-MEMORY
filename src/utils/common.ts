import { VerseSummaryData } from '@features/verseSelect/types/verseSummaryData.type';
import { VerseDetailData } from '@features/verseDisplay/types/verseDetail.type';

type VerseDetailLikeData<T> =
  T extends Pick<
    VerseDetailData,
    'bible_code' | 'chapter' | 'verse1' | 'verse2'
  >
    ? T
    : never;

export const createVerseAddress = (
  data: VerseSummaryData | VerseDetailData,
) => {
  const {
    bible_code: { bible_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

export const createShortVerseAddress = <T>(data: VerseDetailLikeData<T>) => {
  const {
    bible_code: { short_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${short_name}${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};
