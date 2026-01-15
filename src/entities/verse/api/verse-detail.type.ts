import { ArrayElement } from '@shared/types/array-element.type';
import { ApiResultType } from '@shared/types/api-result.type';
import { getVersesDetail } from './get-verses-detail';

export type VerseDetailDataList = ApiResultType<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
