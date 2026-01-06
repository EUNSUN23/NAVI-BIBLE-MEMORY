import supabase from 'src/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';
import { useSuspenseQuery } from '@tanstack/react-query';

export const getSeries = async () => {
  const res = await supabase
    .from('series')
    .select('series_code,series_name,category,sub_series_opt,ord,parent_series')
    .is('parent_series', null)
    .order('ord', { ascending: true });

  return supabaseResponseHandler(res);
};

const SERIES_QUERY_KEY = 'series';

export const useSeries = () => {
  return useSuspenseQuery({
    queryKey: [SERIES_QUERY_KEY],
    queryFn: getSeries,
  });
};
