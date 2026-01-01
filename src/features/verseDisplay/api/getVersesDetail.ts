import { BibleVersion, Verse } from '@/types/data.types';
import supabase from 'src/supabase';
import { useSuspenseQuery } from '@tanstack/react-query';
import { supabaseResponseHandler } from '@/lib/api/supabaseResponseHandler';

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
        series_code(ord, series_name),
        category,
        theme
      ),
      bible_code(
        bible_name,
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

export const VERSES_DETAIL_QUERY_KEY = 'verseDetails';

export const useVersesDetail = (
  verseIds: Verse['idx'][],
  bibleVersion: BibleVersion,
) => {
  return useSuspenseQuery({
    queryKey: [VERSES_DETAIL_QUERY_KEY, verseIds, bibleVersion],
    queryFn: () => getVersesDetail(verseIds, bibleVersion),
  });
};
