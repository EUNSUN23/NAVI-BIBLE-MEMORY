import supabase from '@shared/api/supabase-client';
import { supabaseResponseHandler } from '@shared/api/supabase-response-handler';

export const getCardHideOptions = async () => {
  const res = await supabase.from('card_hide_option').select();

  return supabaseResponseHandler(res);
};
