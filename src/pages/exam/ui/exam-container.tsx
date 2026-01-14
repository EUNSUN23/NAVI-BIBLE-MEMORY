import { useBibleVersionStore } from 'src/features/bible-version-select';
import { verseApi } from '@/entities/verse';
import { useVerseSelectStore } from '@/features/verse-select';
import { useShallow } from 'zustand/react/shallow';
import { ExamTimer } from './exam-timer';
import { ExamRangeInfo } from './exam-range-info';
import { useExamConfigStore } from '@features/exam-config';
import reArrangeInRandomOrder from '@/shared/utils/reArrangeInRandomOrder';
import { ExamBoard } from './exam-board';
import { useSuspenseQuery } from '@tanstack/react-query';

function ExamContainer() {
  const { time, verseCount } = useExamConfigStore(
    useShallow(state => ({
      time: state.time,
      verseCount: state.verseCount,
    })),
  );

  const bibleVersion = useBibleVersionStore(state => state.bibleVersion);
  const verseIds = useVerseSelectStore(useShallow(state => state.verseIds));

  const { data } = useSuspenseQuery(
    verseApi.detailList(verseIds, bibleVersion),
  );

  const examVerses = reArrangeInRandomOrder(data, verseCount);

  return (
    <div className='mt-5 flex w-full flex-col items-center justify-center mobile:mt-2'>
      <div className='grid w-full grid-cols-2 place-content-around place-items-center rounded-xl bg-sky-50 px-5 py-6 mobile:grid-cols-1'>
        <ExamRangeInfo data={examVerses} />
        <ExamTimer time={time} />
      </div>
      <ExamBoard data={examVerses} />
    </div>
  );
}

export default ExamContainer;
