import supabase from '@shared/api/supabase-client';
import { supabaseResponseHandler } from '@shared/api/supabase-response-handler';

export const getExamExposeOptions = async () => {
  const res = await supabase.from('exam_expose_option').select();

  return supabaseResponseHandler(res);
};
