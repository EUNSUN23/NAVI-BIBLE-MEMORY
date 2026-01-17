import { useEffect, useRef, useState } from 'react';
import { useExamStatusStore } from '../../model/examStatusStore';
import { useShallow } from 'zustand/react/shallow';

type ExamTimerProps = {
  time: number;
};

export function ExamTimer({ time }: ExamTimerProps) {
  const isFinished = useExamStatusStore(state => state.isFinished);
  const setIsFinished = useExamStatusStore(
    useShallow(state => state.setIsFinished),
  );
  const [isPaused, setIsPaused] = useState(false);
  const [leftSeconds, setLeftSeconds] = useState(() => time * 60);

  const intervalRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (!isFinished && !isPaused && intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setLeftSeconds(prev => prev - 1);
      }, 1000);
    }

    if ((leftSeconds === 0 || isPaused) && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      if (leftSeconds === 0) {
        if (confirm('시험이 종료되었습니다. 수고하셨습니다. 😊')) {
          setIsFinished(true);
        }
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isFinished, isPaused, leftSeconds, setIsFinished]);

  const min = Number((leftSeconds / 60).toFixed(2));
  const minValue = Math.floor(min);
  const secValue = Number(((min - minValue) * 60).toFixed());
  const minString = minValue.toString().padStart(2, '0');
  const secString = secValue.toString().padStart(2, '0');

  const handleOnClickButton = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <section
      aria-label='제한시간 정보'
      className='grid w-full grid-cols-4 place-items-center'
    >
      <div className='col-span-2 grid w-full grid-cols-4 place-content-between place-items-center'>
        <div
          id='timelimit-label'
          className='col-span-2 min-w-[100px] text-[28px] font-semibold leading-loose mobile:min-w-[70px] mobile:text-[18px]'
        >
          남은 시간
        </div>
        <div className='col-span-2 ml-2 mr-auto'>
          <div
            role='status'
            aria-live='polite'
            aria-labelledby='timelimit-label'
            className='flex w-[120px] items-center justify-center space-x-1 text-center text-2xl font-medium text-secondary mobile:w-[72px] mobile:text-base'
          >
            {minString}분 {secString}초
          </div>
        </div>
      </div>
      <button
        data-testid='timerToggleButton'
        className='col-span-2 mr-auto rounded-3xl bg-secondary px-4 py-2 text-xl font-medium text-white mobile:px-3 mobile:py-1 mobile:text-base'
        onClick={handleOnClickButton}
      >
        {isPaused ? '재시작' : '일시정지'}
      </button>
    </section>
  );
}
