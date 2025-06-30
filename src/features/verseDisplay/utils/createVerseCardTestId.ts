import { VerseDetailData } from '@features/verseDisplay/types/verseDetail.type';

export const createVerseCardTestId = <T extends Pick<VerseDetailData, 'idx'>>(
  data: T,
) => {
  return `verse-card-${data.idx}`;
};
