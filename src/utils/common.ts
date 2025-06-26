import { VerseDetailData } from '@features/verseDisplay/type';

type GetVerseAddressParameter = Pick<
  VerseDetailData,
  'bible_code' | 'chapter' | 'verse1' | 'verse2'
>;

export const getVerseAddress = (data: GetVerseAddressParameter) => {
  const {
    bible_code: { bible_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${bible_name} ${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};

export const getShortVerseAddress = (data: GetVerseAddressParameter) => {
  const {
    bible_code: { short_name },
    chapter,
    verse1,
    verse2,
  } = data;
  return `${short_name}${chapter}:${verse2 ? verse1 + '-' + verse2 : verse1}`;
};
