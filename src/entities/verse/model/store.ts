import { create } from 'zustand';
import { VerseSelectState, VerseSelectStore } from '../model/models';

const initialState: VerseSelectState = {
  verseIds: [],
};

export const useVerseSelectStore = create<VerseSelectStore>()((set, get) => ({
  ...initialState,
  remove: verseId =>
    set(state => ({
      verseIds: state.verseIds.filter(_verseId => _verseId !== verseId),
    })),
  add: verseId =>
    set(state => {
      return Array.isArray(verseId)
        ? { verseIds: [...state.verseIds, ...verseId] }
        : { verseIds: [...state.verseIds, verseId] };
    }),
  hasId: verseId => get().verseIds.some(_verseId => _verseId === verseId),
  reset: () => set(initialState),
  hasAnyId: () => get().verseIds.length > 0,
}));
