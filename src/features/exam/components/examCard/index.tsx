import { createVerseAddress } from '@utils/common';
import AddressInput from '@features/exam/components/examCard/AddressInput';
import ThemeInput from '@features/exam/components/examCard/ThemeInput';
import ContentsInput from '@features/exam/components/examCard/ContentsInput';
import { type ExamExposeOption } from '@/entities/examExposeOption';
import { type VerseDetailData } from '@/entities/verse';

type ExamCardProps = {
  data: VerseDetailData;
  exposeOption: ExamExposeOption;
};

function ExamCard({ data, exposeOption }: ExamCardProps) {
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

export default ExamCard;
