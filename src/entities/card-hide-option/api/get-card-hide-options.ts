import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabase-response-handler';

export const getCardHideOptions = async () => {
  const res = await supabase.from('card_hide_option').select();

  return supabaseResponseHandler(res);
};
