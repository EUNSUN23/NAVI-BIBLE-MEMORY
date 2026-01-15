import { ApiResultType } from '@shared/api/api-result.type';
import { getCardHideOptions } from './get-card-hide-options';
import { ArrayElement } from '@shared/lib/array-element.type';

export type CardHideOptionDataList = ApiResultType<typeof getCardHideOptions>;
export type CardHideOptionData = ArrayElement<CardHideOptionDataList>;
