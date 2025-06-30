import { CardSortMethod } from '@features/exam/types/cardSortMethod.type';
import { ExamExposeOption } from '@features/exam/types/examExposeOption.type';
import { create } from 'zustand/index';
import { CARD_SORT_METHODS, EXAM_EXPOSE_OPTIONS } from '@/msw/mockData';

type ExamConfigState = {
  time: number;
  sortMethod: CardSortMethod;
  exposeOption: ExamExposeOption;
  verseCount: number;
};

type ExamConfigAction = {
  setTime: (time: number) => void;
  setSortMethod: (sortMethod: CardSortMethod) => void;
  setExposeOption: (exposeOption: ExamExposeOption) => void;
  setVerseCount: (verseCount: number) => void;
  reset: () => void;
  isConfigValid: () => boolean;
};

export type ExamConfigStore = ExamConfigState & ExamConfigAction;

const initialState: ExamConfigState = {
  time: 30,
  sortMethod: CARD_SORT_METHODS[0],
  exposeOption: EXAM_EXPOSE_OPTIONS[0],
  verseCount: 0,
};

export const useExamConfigStore = create<ExamConfigStore>()((set, get) => ({
  ...initialState,
  setTime: time => set(state => ({ ...state, time })),
  setExposeOption: exposeOption => set(state => ({ ...state, exposeOption })),
  setSortMethod: sortMethod => set(state => ({ ...state, sortMethod })),
  setVerseCount: verseCount => set(state => ({ ...state, verseCount })),
  reset: () => set(initialState),
  isConfigValid: () => get().time > 0 && get().verseCount > 0,
}));
