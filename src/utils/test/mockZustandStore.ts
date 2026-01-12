import type * as ZustandExportedTypes from 'zustand';
import { useVerseSelectStore, VerseSelectStore } from '@/entities/verse';
import {
  ExamConfigStore,
  useExamConfigStore,
} from '@store/exam/examConfigStore';
import {
  ExamConfigModalStore,
  useExamConfigModalStore,
} from '@store/exam/examConfigModalStore';

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

export const mockExamConfigModalStore = (
  state: Partial<ExamConfigModalStore>,
) => {
  mockStore(useExamConfigModalStore, state);
};
