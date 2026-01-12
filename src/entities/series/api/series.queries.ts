import { getSeries } from './getSeries';
import { queryOptions } from '@tanstack/react-query';

export const seriesQueries = {
  all: () => ['series'],
  lists: () => [...seriesQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...seriesQueries.lists()],
      queryFn: getSeries,
    }),
};
