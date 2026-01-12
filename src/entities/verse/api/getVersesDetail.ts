import supabase from '@/supabase';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';
import { BibleVersion } from '@/entities/bibleVersion/@x/verse';
import { Verse } from '../model/models';

export const getVersesDetail = async (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
) => {
  const res = await supabase
    .from('verse_contents')
    .select(
      `card_info:verse_card_id(
        idx,
        card_num, 
        series:series_code(ord, name:series_name),
        category,
        theme
      ),
      bible:bible_code(
        name:bible_name,
        short_name
      ),
      chapter,
      verse1,
      verse2,
      contents`,
    )
    .in('verse_card_id', [...verseIds])
    .eq('bible_version_code', bibleVersion.code);
  return supabaseResponseHandler(res, data =>
    data.map(v => ({ ...v, contents: v.contents.trim() })),
  );
};
