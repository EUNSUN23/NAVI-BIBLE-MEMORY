import { CardHideOptionData } from '../api/cardHideOption.types';

export type CardHideOptionState = {
  cardHideOption: CardHideOptionData;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOptionData) => void;
};

export type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;
