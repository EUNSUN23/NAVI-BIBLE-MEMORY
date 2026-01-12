import { queryOptions } from '@tanstack/react-query';
import { getCardHideOptions } from './getCardHideOptions';

export const cardHideOptionQueries = {
  all: () => ['cardHideOption'],
  lists: () => [...cardHideOptionQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [cardHideOptionQueries.lists()],
      queryFn: getCardHideOptions,
    }),
};
