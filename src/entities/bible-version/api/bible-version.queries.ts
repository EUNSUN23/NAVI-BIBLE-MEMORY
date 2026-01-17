import { queryOptions } from '@tanstack/react-query';
import { getBibleVersions } from './get-bible-versions';

export const bibleVersionQueries = {
  all: () => ['bible-version'],
  lists: () => [...bibleVersionQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...bibleVersionQueries.lists()],
      queryFn: getBibleVersions,
    }),
};
