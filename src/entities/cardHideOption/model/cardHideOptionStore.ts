import { create } from 'zustand/index';
import { CARD_HIDE_OPTIONS } from '@msw/mockData';
import { CardHideOptionState, CardHideOptionStore } from '../model/models';
import { CardHideOptionData } from '../api/cardHideOption.types';

const [HIDE_NONE] = CARD_HIDE_OPTIONS;
const initialState: CardHideOptionState = {
  cardHideOption: HIDE_NONE,
};

export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOptionData) =>
    set({ cardHideOption }),
}));
