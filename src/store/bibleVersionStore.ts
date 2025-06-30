import { create } from 'zustand';
import { BIBLE_VERSIONS } from '@/msw/mockData';
import { BibleVersion } from '@/types/data.types';

type BibleVersionState = {
  bibleVersion: BibleVersion;
};

type BibleVersionAction = {
  setBibleVersion: (bibleVersion: BibleVersion) => void;
};

type BibleVersionStore = BibleVersionState & BibleVersionAction;

const [BV_KOR] = BIBLE_VERSIONS;

const initialState: BibleVersionState = {
  bibleVersion: BV_KOR,
};

export const useBibleVersionStore = create<BibleVersionStore>()(set => ({
  ...initialState,
  setBibleVersion: bibleVersion => set({ bibleVersion }),
}));
