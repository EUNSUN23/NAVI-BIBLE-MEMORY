import { Tables } from '@/types/database.types';

export type SeriesCode = Tables<'series'>['series_code'];

export type Verse = Tables<'verse'>;
export type VerseId = Verse['idx'];

export type BibleVersion = Tables<'bible_version'>;
