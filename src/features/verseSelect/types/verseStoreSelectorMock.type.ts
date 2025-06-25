import { VerseSelectStore } from '@store/verseSelectStore';

export type VerseStoreSelectorMock = <T>(
  state: VerseSelectStore extends T ? T : never,
) => T[keyof T];
