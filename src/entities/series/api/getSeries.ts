import supabase from '@shared/api/supabase-client';
import { supabaseResponseHandler } from '@shared/api/supabase-response-handler';

export const getSeries = async () => {
  const res = await supabase
    .from('series')
    .select('series_code,series_name,category,sub_series_opt,ord,parent_series')
    .is('parent_series', null)
    .order('ord', { ascending: true });

  return supabaseResponseHandler(res);
};
