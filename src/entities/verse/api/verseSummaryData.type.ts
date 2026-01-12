import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getVersesSummary } from './getVersesSummary';

export type VerseSummaryDataList = ApiResultType<typeof getVersesSummary>;
export type VerseSummaryData = ArrayElement<VerseSummaryDataList>;
