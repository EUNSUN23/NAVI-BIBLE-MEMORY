import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';
import { SeriesCode } from '../model/models';

export const getSubSeries = async (series_code: SeriesCode) => {
  const res = await supabase
    .from('series')
    .select(
      'series_code,category:series_name,series_name:category,sub_series_opt,ord,parent_series',
    )
    .eq('parent_series', series_code)
    .order('ord', { ascending: true });

  return supabaseResponseHandler(res);
};
