import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';
import { SeriesCode } from '@/entities/series/@x/verse';

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
