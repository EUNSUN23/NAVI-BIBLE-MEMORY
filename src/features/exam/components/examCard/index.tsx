import { createVerseAddress } from '@utils/common';
import AddressInput from '@features/exam/components/examCard/AddressInput';
import ThemeInput from '@features/exam/components/examCard/ThemeInput';
import ContentsInput from '@features/exam/components/examCard/ContentsInput';
import { ExamExposeOption } from '@features/exam/types/examExposeOption.type';
import { ExamVerseData } from '@features/exam/types/examVerseData.type';

type ExamCardProps = {
  data: ExamVerseData;
  exposeOption: ExamExposeOption;
};

function ExamCard({ data, exposeOption }: ExamCardProps) {
  const { theme, contents, idx } = data;
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
