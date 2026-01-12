import type { ExamExposeOption } from '@/entities/examExposeOption';

export type ExamConfigState = {
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
