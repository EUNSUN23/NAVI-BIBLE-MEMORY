import { create } from 'zustand/index';
import { EXAM_EXPOSE_OPTIONS } from '@shared/lib/msw/mock-data';
import { ExamConfigState, ExamConfigStore } from './models';

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
