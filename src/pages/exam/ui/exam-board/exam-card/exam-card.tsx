import AddressInput from './address-input';
import ThemeInput from './theme-input';
import ContentsInput from './contents-input';
import { type ExamExposeOption } from 'src/entities/exam-expose-option';
import { createVerseAddress, type VerseDetailData } from '@entities/verse';

type ExamCardProps = {
  data: VerseDetailData;
  exposeOption: ExamExposeOption;
};

export function ExamCard({ data, exposeOption }: ExamCardProps) {
  const {
    card_info: { theme, idx },
    contents,
  } = data;
  return (
    <div data-testid={`exam-verse-${idx}`} className='mb-4 flex flex-col'>
      <AddressInput
        address={createVerseAddress(data)}
        exposeOption={exposeOption}
        verseId={idx}
      />
      <ThemeInput theme={theme} exposeOption={exposeOption} verseId={idx} />
      <ContentsInput contents={contents} verseId={idx} />
    </div>
  );
}
