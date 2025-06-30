import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getCardSortMethods } from '@features/examConfig/api/getCardSortMethods';

export type CardSortMethodList = ApiResultType<typeof getCardSortMethods>;
export type CardSortMethod = ArrayElement<CardSortMethodList>;
