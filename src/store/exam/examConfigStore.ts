import { CardSortMethod } from '@features/exam/types/cardSortMethods.types';
import { ExamExposeOption } from '@features/exam/types/examExposeOptions.types';
import { SORT_METHODS } from '@features/exam/constants/sortMethods';
import { EXPOSE_OPTIONS } from '@features/exam/constants/exposeOptions';
import { create } from 'zustand/index';

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

type ExamConfigStore = ExamConfigState & ExamConfigAction;

const initialState: ExamConfigState = {
  time: 30,
  sortMethod: SORT_METHODS.NORMAL,
  exposeOption: EXPOSE_OPTIONS.ADDR,
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
