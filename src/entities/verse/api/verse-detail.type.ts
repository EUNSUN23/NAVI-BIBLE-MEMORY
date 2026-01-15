import { ArrayElement } from '@shared/lib/array-element.type';
import { ApiResultType } from '@shared/api/api-result.type';
import { getVersesDetail } from './get-verses-detail';

export type VerseDetailDataList = ApiResultType<typeof getVersesDetail>;
export type VerseDetailData = ArrayElement<VerseDetailDataList>;
