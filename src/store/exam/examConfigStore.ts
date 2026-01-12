import { type ExamExposeOption } from '@/entities/examExposeOption';
import { create } from 'zustand/index';
import { EXAM_EXPOSE_OPTIONS } from '@/msw/mockData';

type ExamConfigState = {
  time: number;
  exposeOption: ExamExposeOption;
  verseCount: number;
};

type ExamConfigAction = {
  setTime: (time: number) => void;
  setExposeOption: (exposeOption: ExamExposeOption) => void;
  setVerseCount: (verseCount: number) => void;
  reset: () => void;
  isConfigValid: () => boolean;
};

export type ExamConfigStore = ExamConfigState & ExamConfigAction;

const initialState: ExamConfigState = {
  time: 30,
  exposeOption: EXAM_EXPOSE_OPTIONS[0],
  verseCount: 0,
};

export const useExamConfigStore = create<ExamConfigStore>()((set, get) => ({
  ...initialState,
  setTime: time => set(state => ({ ...state, time })),
  setExposeOption: exposeOption => set(state => ({ ...state, exposeOption })),
  setVerseCount: verseCount => set(state => ({ ...state, verseCount })),
  reset: () => set(initialState),
  isConfigValid: () => get().time > 0 && get().verseCount > 0,
}));
