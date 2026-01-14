import { ApiResultType } from '@/shared/types/apiResult.type';
import { getCardHideOptions } from './get-card-hide-options';
import { ArrayElement } from '@/shared/types/arrayElement.type';

export type CardHideOptionDataList = ApiResultType<typeof getCardHideOptions>;
export type CardHideOptionData = ArrayElement<CardHideOptionDataList>;
