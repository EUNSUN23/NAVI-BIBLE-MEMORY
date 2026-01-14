import { ExamCard } from './exam-card';
import { useExamConfigStore } from '@features/exam-config';
import SubmitButton from './exam-submit-button';
import { type VerseDetailDataList } from '@entities/verse';

type ExamBoardProps = {
  data: VerseDetailDataList;
};

export function ExamBoard({ data }: ExamBoardProps) {
  const exposeOption = useExamConfigStore(state => state.exposeOption);

  return (
    <section
      aria-label='시험 보드'
      className='flex w-full flex-col items-center'
    >
      <SubmitButton />
      <ul className='mb-2 mt-16 grid min-h-[calc(100vh-260px)] w-full grid-cols-2 place-content-start place-items-center overflow-auto mobile:mt-8 mobile:max-h-[calc(100vh-100px)] mobile:grid-cols-1'>
        {data.map(verse => (
          <li key={`exam-${verse.card_info.idx}`}>
            <ExamCard data={verse} exposeOption={exposeOption} />
          </li>
        ))}
      </ul>
    </section>
  );
}
