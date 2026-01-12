import { Tables } from '@/types/database.types';

export type Verse = Tables<'verse'>;
export type VerseId = Verse['idx'];

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
