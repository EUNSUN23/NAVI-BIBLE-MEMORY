import { queryOptions } from '@tanstack/react-query';
import { getSubSeries } from './getSubSeries';

export const subSeriesQueries = {
  all: () => ['sub-series'],
  lists: () => [...subSeriesQueries.all(), 'list'],
  list: (seriesCode: string) =>
    queryOptions({
      queryKey: [...subSeriesQueries.lists(), seriesCode],
      queryFn: () => getSubSeries(seriesCode),
    }),
};
