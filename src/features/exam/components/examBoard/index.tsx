import ExamCard from 'src/features/exam/components/examCard';
import { ExamVerseDataList } from '@features/exam/types/examVerseData';
import { useExamConfigStore } from '@store/exam/examConfigStore';
import { CARD_SORT_METHODS } from '@/mock/mockData';

type ExamBoardProps = {
  data: ExamVerseDataList;
};

const [SORT_NORMAL] = CARD_SORT_METHODS;

function ExamBoard({ data }: ExamBoardProps) {
  const exposeOption = useExamConfigStore(state => state.exposeOption);
  const sortMethod = useExamConfigStore(state => state.sortMethod);

  let items: ExamVerseDataList = data;
  if (sortMethod.code === SORT_NORMAL.code) {
    items = items.sort((a, b) => a.series_code.ord - b.series_code.ord);
  }

  return (
    <section aria-label='시험 보드' className='w-full'>
      <ul className='mb-2 mt-16 grid max-h-[calc(100vh-260px)] w-full grid-cols-2 place-content-start place-items-center overflow-auto mobile:mt-8 mobile:max-h-[calc(100vh-100px)] mobile:grid-cols-1'>
        {items.map(data => (
          <li key={`exam-${data.idx}`}>
            <ExamCard data={data} exposeOption={exposeOption} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExamBoard;
