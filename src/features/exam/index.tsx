import { useBibleVersionStore } from '@/entities/bibleVersion';
import { useVerseSelectStore, verseApi } from '@/entities/verse';
import { useShallow } from 'zustand/react/shallow';
import Timer from '@features/exam/components/timer';
import RangeInfo from '@features/exam/components/rangeInfo';
import { useExamStatusStore } from '@store/exam/examStatusStore';
import { useEffect } from 'react';
import { useExamConfigStore } from '@features/exam-config';
import reArrangeInRandomOrder from '@/shared/utils/reArrangeInRandomOrder';
import ExamBoard from '@features/exam/components/examBoard';
import { useSuspenseQuery } from '@tanstack/react-query';

function Exam() {
  const setIsFinished = useExamStatusStore(state => state.setIsFinished);

  useEffect(() => {
    return () => setIsFinished(false);
  }, [setIsFinished]);

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
        <RangeInfo data={examVerses} />
        <Timer time={time} />
      </div>
      <ExamBoard data={examVerses} />
    </div>
  );
}

export default Exam;
