import ExamCard from 'src/features/exam/components/examCard';
import { ExamVerseDataList } from '@features/exam/types/examVerseData.type';
import { useExamConfigStore } from '@store/exam/examConfigStore';
import SubmitButton from '@features/exam/components/submitButton';

type ExamBoardProps = {
  data: ExamVerseDataList;
};

function ExamBoard({ data }: ExamBoardProps) {
  const exposeOption = useExamConfigStore(state => state.exposeOption);

  return (
    <section
      aria-label='시험 보드'
      className='flex w-full flex-col items-center'
    >
      <SubmitButton />
      <ul className='mb-2 mt-16 grid min-h-[calc(100vh-260px)] w-full grid-cols-2 place-content-start place-items-center overflow-auto mobile:mt-8 mobile:max-h-[calc(100vh-100px)] mobile:grid-cols-1'>
        {data.map(verse => (
          <li key={`exam-${verse.idx}`}>
            <ExamCard data={verse} exposeOption={exposeOption} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExamBoard;
