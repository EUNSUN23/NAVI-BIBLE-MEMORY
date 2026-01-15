import { ApiResultType } from '@shared/types/api-result.type';
import { getCardHideOptions } from './get-card-hide-options';
import { ArrayElement } from '@shared/types/array-element.type';

export type CardHideOptionDataList = ApiResultType<typeof getCardHideOptions>;
export type CardHideOptionData = ArrayElement<CardHideOptionDataList>;
