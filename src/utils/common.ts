import { VerseDetailData } from '@features/verseDisplay/type';

type GetVerseAddressParameter<T> =
  T extends Pick<
    VerseDetailData,
    'bible_code' | 'chapter' | 'verse1' | 'verse2'
  >
    ? T
    : never;

export const getVerseAddress = <T>(data: GetVerseAddressParameter<T>) => {
  const {
    bible_code: { bible_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

export const getShortVerseAddress = <T>(data: GetVerseAddressParameter<T>) => {
  const {
    bible_code: { short_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${short_name}${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};
