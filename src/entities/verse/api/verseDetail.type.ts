import { ArrayElement } from '@shared/types/arrayElement.type';
import { ApiResultType } from '@shared/types/apiResult.type';
import { getVersesDetail } from './getVersesDetail';

export type VerseDetailDataList = ApiResultType<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
