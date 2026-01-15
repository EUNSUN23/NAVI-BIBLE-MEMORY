import { create } from 'zustand';
import { BIBLE_VERSIONS } from '@msw/mock-data';
import { BibleVersion } from 'src/entities/bible-version';

type BibleVersionState = {
  bibleVersion: BibleVersion;
};

type BibleVersionAction = {
  setBibleVersion: (bibleVersion: BibleVersion) => void;
};

type Store = BibleVersionState & BibleVersionAction;

const [BV_KOR] = BIBLE_VERSIONS;

const initialState: BibleVersionState = {
  bibleVersion: BV_KOR,
};

export const useBibleVersionStore = create<Store>()(set => ({
  ...initialState,
  setBibleVersion: bibleVersion => set({ bibleVersion }),
}));
