import { VerseId } from '@/entities/verse/model/models';

export type VerseSelectState = {
  verseIds: VerseId[];
};

type VerseSelectAction = {
  remove: (verseId: VerseId) => void;
  add: (verseId: VerseId | VerseId[]) => void;
  hasId: (verseId: VerseId) => boolean;
  reset: () => void;
  hasAnyId: () => boolean;
};

export type VerseSelectStore = VerseSelectState & VerseSelectAction;
