import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabase-response-handler';

export const getBibleVersions = async () => {
  const res = await supabase.from('bible_version').select();
  return supabaseResponseHandler(res);
};
