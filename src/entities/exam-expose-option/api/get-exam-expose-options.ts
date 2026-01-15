import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabase-response-handler';

export const getExamExposeOptions = async () => {
  const res = await supabase.from('exam_expose_option').select();

  return supabaseResponseHandler(res);
};
