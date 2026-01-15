import { createClient } from '@supabase/supabase-js';
import {
  SUPABASE_ANON_KEY,
  SUPABASE_URL,
} from '@shared/config/supabase/supabase-config';
import { Database } from '@shared/config/supabase/database.types';

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
