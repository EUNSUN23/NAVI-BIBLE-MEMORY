import { CardHideOptionData } from 'src/entities/card-hide-option';

export type CardHideOptionState = {
  cardHideOption: CardHideOptionData;
};

type CardHideOptionAction = {
  setCardHideOption: (cardHideOption: CardHideOptionData) => void;
};

export type CardHideOptionStore = CardHideOptionState & CardHideOptionAction;
