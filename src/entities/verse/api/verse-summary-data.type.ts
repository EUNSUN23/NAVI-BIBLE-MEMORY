import { ApiResultType } from '@shared/api/api-result.type';
import { ArrayElement } from '@shared/lib/array-element.type';
import { getVersesSummary } from './get-verses-summary';

export type VerseSummaryDataList = ApiResultType<typeof getVersesSummary>;
export type VerseSummaryData = ArrayElement<VerseSummaryDataList>;
