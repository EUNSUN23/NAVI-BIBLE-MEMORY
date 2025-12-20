import type * as ZustandExportedTypes from 'zustand';
import { useVerseSelectStore, VerseSelectStore } from '@store/verseSelectStore';
import {
  ExamConfigStore,
  useExamConfigStore,
} from '@store/exam/examConfigStore';

const mockStore = <T extends Record<string, any>>(
  hook: ZustandExportedTypes.UseBoundStore<ZustandExportedTypes.StoreApi<T>>,
  state: Partial<T>,
) => {
  const initStore = hook.getState();
  hook.setState({ ...initStore, ...state });
};

export const mockVerseSelectStore = (state: Partial<VerseSelectStore>) => {
  mockStore(useVerseSelectStore, state);
};

export const mockExamConfigStore = (state: Partial<ExamConfigStore>) => {
  mockStore(useExamConfigStore, state);
};
