import { CardHideOptionData } from '@/entities/cardHideOption';

export type CardHideOptionState = {
  cardHideOption: CardHideOptionData;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOptionData) => void;
};

export type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;
