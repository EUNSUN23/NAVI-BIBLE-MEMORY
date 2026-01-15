import { ApiResultType } from '@shared/types/api-result.type';
import { ArrayElement } from '@shared/types/array-element.type';
import { getVersesSummary } from './get-verses-summary';

export type VerseSummaryDataList = ApiResultType<typeof getVersesSummary>;
export type VerseSummaryData = ArrayElement<VerseSummaryDataList>;
