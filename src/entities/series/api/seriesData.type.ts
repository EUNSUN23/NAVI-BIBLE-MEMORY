import { ApiResultType } from '@/shared/types/apiResult.type';
import { ArrayElement } from '@/shared/types/arrayElement.type';
import { getSeries } from './getSeries';

export type SeriesDataList = ApiResultType<typeof getSeries>;
export type SeriesData = ArrayElement<SeriesDataList>;
