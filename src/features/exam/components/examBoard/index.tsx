import ExamCard from 'src/features/exam/components/examCard';

import { SORT_METHODS } from '@features/exam/constants/sortMethods';
import { ExamVerseDataList } from '@features/exam/types/examVerseData.types';
import { useExamConfigStore } from '@store/exam/examConfigStore';

type ExamBoardProps = {
  data: ExamVerseDataList;
};

const { NORMAL: SORT_NORMAL } = SORT_METHODS;

function ExamBoard({ data }: ExamBoardProps) {
  const exposeOption = useExamConfigStore(state => state.exposeOption);
  const sortMethod = useExamConfigStore(state => state.sortMethod);

  let items: ExamVerseDataList = data;
  if (sortMethod.code === SORT_NORMAL.code) {
    items = items.sort((a, b) => a.series_code.ord - b.series_code.ord);
  }

  return (
    <div className='mb-2 mt-16 grid max-h-[calc(100vh-260px)] w-full grid-cols-2 place-content-start place-items-center overflow-auto mobile:mt-8 mobile:max-h-[calc(100vh-100px)] mobile:grid-cols-1'>
      {items.map(data => (
        <ExamCard
          key={`exam-${data.idx}`}
          data={data}
          exposeOption={exposeOption}
        />
      ))}
    </div>
  );
}

export default ExamBoard;
