import { create } from 'zustand/index';
import { CARD_HIDE_OPTIONS } from '@/msw/mockData';
import { ApiResultType } from '@/shared/types/apiResult.type';
import { getCardHideOptions } from '@/entities/cardHideOption/api/getCardHideOptions';
import { ArrayElement } from '@/shared/types/arrayElement.type';

type CardHideOptionTypes = ApiResultType<typeof getCardHideOptions>;
type CardHideOption = ArrayElement<CardHideOptionTypes>;

type CardHideOptionState = {
  cardHideOption: CardHideOption;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOption) => void;
};

type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;

const [HIDE_NONE] = CARD_HIDE_OPTIONS;
const initialState: CardHideOptionState = {
  cardHideOption: HIDE_NONE,
};

export const useCardHideOptionStore = create<CardHideOptionStore>()(set => ({
  ...initialState,
  setCardHideOption: (cardHideOption: CardHideOption) =>
    set({ cardHideOption }),
}));
