import supabase from '@shared/api/supabase-client';
import { supabaseResponseHandler } from '@shared/api/supabase-response-handler';
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
