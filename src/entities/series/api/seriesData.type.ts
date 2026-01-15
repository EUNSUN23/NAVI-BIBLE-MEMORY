import { ApiResultType } from '@shared/types/api-result.type';
import { ArrayElement } from '@shared/types/array-element.type';
import { getSeries } from './getSeries';

export type SeriesDataList = ApiResultType<typeof getSeries>;
export type SeriesData = ArrayElement<SeriesDataList>;
