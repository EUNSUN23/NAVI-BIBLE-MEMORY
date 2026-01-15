import { Tables } from '@shared/config/supabase/database.types';

export type Verse = Tables<'verse'>;
export type VerseId = Verse['idx'];
