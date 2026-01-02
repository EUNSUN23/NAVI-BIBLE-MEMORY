import { SeriesCode } from '@/types/data.types';
import supabase from 'src/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

export const getVersesSummary = async (seriesCode: SeriesCode) => {
  const res = await supabase
    .from('verse')
    .select(
      'idx,card_num,series_code,category,theme,chapter,verse1,verse2,bible:bible_code(name:bible_name)',
    )
    .eq('series_code', seriesCode)
    .order('card_num', { ascending: true });

  return supabaseResponseHandler(res);
};

export const VERSES_SUMMARY_QUERY_KEY = 'verseSummaryData';

export const useVersesSummary = (seriesCode: SeriesCode) => {
  return useSuspenseQuery({
    queryKey: [VERSES_SUMMARY_QUERY_KEY, seriesCode],
    queryFn: () => getVersesSummary(seriesCode),
  });
};
