import supabase from '@shared/api/supabase-client';
import { supabaseResponseHandler } from '@shared/api/supabase-response-handler';

export const getBibleVersions = async () => {
  const res = await supabase.from('bible_version').select();
  return supabaseResponseHandler(res);
};
