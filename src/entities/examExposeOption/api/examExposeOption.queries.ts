import { queryOptions } from '@tanstack/react-query';
import { getExamExposeOptions } from './getExamExposeOptions';

export const examExposeOptionQueries = {
  all: () => ['examExposeOption'],
  lists: () => [...examExposeOptionQueries.all(), 'list'],
  list: () =>
    queryOptions({
      queryKey: [examExposeOptionQueries.lists()],
      queryFn: getExamExposeOptions,
    }),
};
