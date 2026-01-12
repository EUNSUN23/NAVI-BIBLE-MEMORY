import { Tables } from '@/types/database.types';

export type Verse = Tables<'verse'>;
export type VerseId = Verse['idx'];
