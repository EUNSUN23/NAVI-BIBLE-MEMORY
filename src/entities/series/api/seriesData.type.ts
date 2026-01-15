import { ApiResultType } from '@shared/api/api-result.type';
import { ArrayElement } from '@shared/lib/array-element.type';
import { getSeries } from './getSeries';

export type SeriesDataList = ApiResultType<typeof getSeries>;
export type SeriesData = ArrayElement<SeriesDataList>;
