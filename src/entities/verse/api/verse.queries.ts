import { queryOptions } from '@tanstack/react-query';
import { type VerseId } from '../model/models';
import { type BibleVersion } from '@entities/bible-version/@x/verse';
import { getVersesSummary } from './getVersesSummary';
import { getVersesDetail } from './getVersesDetail';

export const verseQueries = {
  all: () => ['verses'],
  summaryLists: () => [...verseQueries.all(), 'summaryList'],
  summaryList: (seriesCode: string) =>
    queryOptions({
      queryKey: [...verseQueries.summaryLists(), seriesCode],
      queryFn: () => getVersesSummary(seriesCode),
    }),
  detailLists: () => [...verseQueries.all(), 'detailList'],
  detailList: (verseIds: VerseId[], bibleVersion: BibleVersion) =>
    queryOptions({
      queryKey: [...verseQueries.detailLists(), verseIds, bibleVersion],
      queryFn: () => getVersesDetail(verseIds, bibleVersion),
    }),
};
