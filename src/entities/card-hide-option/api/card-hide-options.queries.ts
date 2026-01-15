import { queryOptions } from '@tanstack/react-query';
import { getCardHideOptions } from './get-card-hide-options';

export const cardHideOptionQueries = {
  all: () => ['cardHideOption'],
  lists: () => [...cardHideOptionQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [...cardHideOptionQueries.lists()],
      queryFn: getCardHideOptions,
    }),
};
