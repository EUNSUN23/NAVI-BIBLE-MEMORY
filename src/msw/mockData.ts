import { SeriesDataList } from '@features/verseSelect/types/seriesData.type';

export const SERIES_DATA: SeriesDataList = [
  {
    series_code: '%101',
    series_name: '5확신',
    category: '그리스도와의 새출발',
    sub_series_opt: 'N',
    ord: 2,
    parent_series: null,
  },
  {
    series_code: '%110',
    series_name: '8동행',
    category: '그리스도와의 동행',
    sub_series_opt: 'N',
    ord: 3,
    parent_series: null,
  },
  {
    series_code: '2%',
    series_name: '60구절',
    category: '60구절 전체',
    sub_series_opt: 'Y',
    ord: 4,
    parent_series: null,
  },
  {
    series_code: '3%',
    series_name: 'DEP 242구절',
    category: '242 전체',
    sub_series_opt: 'Y',
    ord: 10,
    parent_series: null,
  },
  {
    series_code: '4%',
    series_name: '180 구절',
    category: '180 전체',
    sub_series_opt: 'Y',
    ord: 19,
    parent_series: null,
  },
];

export const SERIES_DATA_NO_SUB = {
  series_code: '%101',
  series_name: '5확신',
  category: '그리스도와의 새출발',
  sub_series_opt: 'N',
  ord: 2,
  parent_series: null,
};

export const SERIES_DATA_HAS_SUB = {
  series_code: '2%',
  series_name: '60구절',
  category: '60구절 전체',
  sub_series_opt: 'Y',
  ord: 4,
  parent_series: null,
};

export const SERIES_DATA_SUB = [
  {
    series_code: '210',
    category: '60구절',
    series_name: 'A. 새로운 삶',
    sub_series_opt: 'N',
    ord: 5,
    parent_series: '2%',
  },
  {
    series_code: '220',
    category: '60구절',
    series_name: 'B. 그리스도를 전파함',
    sub_series_opt: 'N',
    ord: 6,
    parent_series: '2%',
  },
  {
    series_code: '230',
    category: '60구절',
    series_name: 'C. 하나님을 의뢰함',
    sub_series_opt: 'N',
    ord: 7,
    parent_series: '2%',
  },
  {
    series_code: '240',
    category: '60구절',
    series_name: 'D. 그리스도 제자의 자격',
    sub_series_opt: 'N',
    ord: 8,
    parent_series: '2%',
  },
  {
    series_code: '250',
    category: '60구절',
    series_name: 'E. 그리스도를 닮아감',
    sub_series_opt: 'N',
    ord: 9,
    parent_series: '2%',
  },
];

export const VERSE_SUMMARY_DATA = [
  {
    idx: 697,
    card_num: 1,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '구원의 확신',
    chapter: 5,
    verse1: 11,
    verse2: 12,
    bible_code: {
      bible_name: '요한일서',
    },
  },
  {
    idx: 698,
    card_num: 2,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '기도응답의 확신',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    bible_code: {
      bible_name: '요한복음',
    },
  },
  {
    idx: 699,
    card_num: 3,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '승리의 확신',
    chapter: 10,
    verse1: 13,
    verse2: 0,
    bible_code: {
      bible_name: '고린도전서',
    },
  },
  {
    idx: 700,
    card_num: 4,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '사죄의 확신',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    bible_code: {
      bible_name: '요한일서',
    },
  },
  {
    idx: 701,
    card_num: 5,
    series_code: '%101',
    category: '그리스도와의 새출발',
    theme: '인도의 확신',
    chapter: 3,
    verse1: 5,
    verse2: 6,
    bible_code: {
      bible_name: '잠언',
    },
  },
];

export const VERSE_DETAIL_DATA_KOR = [
  {
    idx: 36,
    card_num: 7,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '하나님의 뜻을 알게 됨',
    chapter: 33,
    verse1: 3,
    verse2: 0,
    verse_kor:
      '너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 비밀한 일을 네게 보이리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 364,
    card_num: 11,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '담대함을 주심',
    chapter: 4,
    verse1: 31,
    verse2: 0,
    verse_kor:
      ' 빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 504,
    card_num: 1,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '쉬지 말고 기도할 것',
    chapter: 5,
    verse1: 17,
    verse2: 0,
    verse_kor: ' 쉬지 말고 기도하라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 505,
    card_num: 2,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '기도를 힘쓸 것',
    chapter: 4,
    verse1: 2,
    verse2: 0,
    verse_kor: ' 기도를 항상 힘쓰고 기도에 감사함으로 깨어 있으라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
  {
    idx: 506,
    card_num: 3,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '깨어 기도할 것',
    chapter: 4,
    verse1: 7,
    verse2: 0,
    verse_kor:
      ' 만물의 마지막이 가까웠으니 그러므로 너희는 정신을 차리고 근신하여 기도하라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '베드로전서',
      short_name: '벧전',
    },
  },
  {
    idx: 508,
    card_num: 5,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '응답의 약속',
    chapter: 14,
    verse1: 13,
    verse2: 14,
    verse_kor:
      ' 너희가 내 이름으로 무엇을 구하든지 내가 시행하리니 이는 아버지로 하여금 아들을 인하여 영광을 얻으시게 하려 함이라 내 이름으로 무엇이든지 내게 구하면 내가 시행하리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 511,
    card_num: 8,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '지혜를 주심',
    chapter: 1,
    verse1: 5,
    verse2: 0,
    verse_kor:
      ' 너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 518,
    card_num: 19,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '합심하여 기도할 것',
    chapter: 18,
    verse1: 19,
    verse2: 0,
    verse_kor:
      ' 진실로 다시 너희에게 이르노니 너희 중에 두 사람이 땅에서 합심하여 무엇이든지 구하면 하늘에 계신 내 아버지께서 저희를 위하여 이루게 하시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 520,
    card_num: 21,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '전심으로 부르짖을 것',
    chapter: 29,
    verse1: 12,
    verse2: 13,
    verse_kor:
      ' 너희는 내게 부르짖으며 와서 내게 기도하면 내가 너희를 들을 것이요 너희가 전심으로 나를 찾고 찾으면 나를 만나리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 526,
    card_num: 27,
    category: 'IV. 기도 4. 기도의 본',
    theme: '곤경 중의 기도',
    chapter: 16,
    verse1: 25,
    verse2: 0,
    verse_kor:
      ' 밤중쯤 되어 바울과 실라가 기도하고 하나님을 찬미하매 죄수들이 듣더라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 528,
    card_num: 29,
    category: 'IV. 기도 5. 기도의 손',
    theme: '중보',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_kor:
      ' 그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정한 중에 고요하고 평안한 생활을 하려 함이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 529,
    card_num: 30,
    category: 'IV. 기도 5. 기도의 손',
    theme: '감사',
    chapter: 5,
    verse1: 18,
    verse2: 0,
    verse_kor:
      ' 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 539,
    card_num: 26,
    category: 'IV. 기도 4. 기도의 본',
    theme: '간절한 기도',
    chapter: 5,
    verse1: 17,
    verse2: 18,
    verse_kor:
      ' 엘리야는 우리와 성정이 같은 사람이로되 저가 비 오지 않기를 간절히 기도한즉 삼 년 육 개월 동안 땅에 비가 아니오고 다시 기도한즉 하늘이 비를 주고 땅이 열매를 내었느니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 542,
    card_num: 25,
    category: 'IV. 기도 4. 기도의 본',
    theme: '밤을 새워 한 기도',
    chapter: 6,
    verse1: 12,
    verse2: 0,
    verse_kor:
      ' 이 때에 예수께서 기도하시러 산으로 가사 밤이 맟도록 하나님께 기도하시고',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 552,
    card_num: 28,
    category: 'IV. 기도 5. 기도의 손',
    theme: '찬양',
    chapter: 29,
    verse1: 11,
    verse2: 13,
    verse_kor:
      ' 여호와여 광대하심과 권능과 영광과 이김과 위엄이 다 주께 속하였사오니 천지에 있는 것이 다 주의 것이로소이다 여호와여 주권도 주께 속하였사오니 주는 높으사 만유의 머리심이니이다 부와 귀가 주께로 말미암고 또 주는 만유의 주재가 되사 손에 권세와 능력이 있사오니 모든 자를 크게 하심과 강하게 하심이 주의 손에 있나이다 우리 하나님이여 이제 우리가 주께 감사하오며 주의 영화로운 이름을 찬양하나이다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '역대상',
      short_name: '대상',
    },
  },
  {
    idx: 632,
    card_num: 24,
    category: 'IV. 기도 4. 기도의 본',
    theme: '우선순위를 둔 기도',
    chapter: 5,
    verse1: 15,
    verse2: 16,
    verse_kor:
      ' 예수의 소문이 더욱 퍼지매 허다한 무리가 말씀도 듣고 자기 병도 나음을 얻고자 하여 모여 오되 예수는 물러가사 한적한 곳에서 기도하시니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 796,
    card_num: 14,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '믿음으로 기도할 것',
    chapter: 21,
    verse1: 22,
    verse2: 0,
    verse_kor:
      ' 너희가 기도할 때에 무엇이든지 믿고 구하는 것은 다 받으리라 하시니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 797,
    card_num: 23,
    category: 'IV. 기도 4. 기도의 본',
    theme: '모험적인 기도',
    chapter: 6,
    verse1: 10,
    verse2: 0,
    verse_kor:
      ' 다니엘이 이 조서에 어인이 찍힌 것을 알고도 자기 집에 돌아가서는 그 방의 예루살렘으로 향하여 열린 창에서 전에 행하던 대로 하루 세 번씩 무릎을 꿇고 기도하며 그 하나님께 감사하였더라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '다니엘',
      short_name: '단',
    },
  },
  {
    idx: 798,
    card_num: 15,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '성령을 의뢰함으로 기도할 것',
    chapter: 6,
    verse1: 18,
    verse2: 0,
    verse_kor:
      ' 모든 기도와 간구로 하되 무시로 성령 안에서 기도하고 이를 위하여 깨어 구하기를 항상 힘쓰며 여러 성도를 위하여 구하고',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 799,
    card_num: 13,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '예수님의 이름으로 기도할 것',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    verse_kor:
      ' 지금까지는 너희가 내 이름으로 아무 것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 800,
    card_num: 10,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '환난에서 건져주심',
    chapter: 50,
    verse1: 15,
    verse2: 0,
    verse_kor:
      ' 환난 날에 나를 부르라 내가 너를 건지리니 네가 나를 영화롭게 하리로다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 834,
    card_num: 4,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '모든 사람을 위하여 기도할 것',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_kor:
      ' 그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정한 중에 고요하고 평안한 생활을 하려 함이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 835,
    card_num: 6,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '넘치는 응답',
    chapter: 3,
    verse1: 20,
    verse2: 0,
    verse_kor:
      ' 우리 가운데서 역사하시는 능력대로 우리의 온갖 구하는 것이나 생각하는 것에 더 넘치도록 능히 하실 이에게',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 836,
    card_num: 16,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '하나님의 뜻대로 기도할 것',
    chapter: 5,
    verse1: 14,
    verse2: 15,
    verse_kor:
      ' 그를 향하여 우리의 가진 바 담대한 것이 이것이니 그의 뜻대로 무엇을 구하면 들으심이라 우리가 무엇이든지 구하는 바를 들으시는 줄을 안즉 우리가 그에게 구한 그것을 얻은 줄을 또한 아느니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 837,
    card_num: 17,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '죄를 자백하고 버릴 것',
    chapter: 66,
    verse1: 18,
    verse2: 0,
    verse_kor: ' 내가 내 마음에 죄악을 품으면 주께서 듣지 아니하시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 838,
    card_num: 18,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '순종할 것',
    chapter: 3,
    verse1: 22,
    verse2: 0,
    verse_kor:
      ' 무엇이든지 구하는 바를 그에게 받나니 이는 우리가 그의 계명들을 지키고 그 앞에서 기뻐하시는 것을 행함이라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 839,
    card_num: 20,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '적극적으로 기도할 것',
    chapter: 7,
    verse1: 7,
    verse2: 8,
    verse_kor:
      ' 구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 문을 두드리라 그러면 너희에게 열릴 것이니 구하는 이마다 얻을 것이요 찾는 이가 찾을 것이요 두드리는 이에게 열릴 것이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 840,
    card_num: 22,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '약속을 주장하며 기도할 것',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_kor:
      ' 만일 내게로 돌아와서 내 계명을 지켜 행하면 너희 쫓긴 자가 하늘 끝에 있을지라도 내가 거기서부터 모아 내 이름을 두려고 택한 곳에 돌아오게 하리라 하신 말씀을 이제 청컨대 기억하옵소서',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '느헤미야',
      short_name: '느',
    },
  },
  {
    idx: 841,
    card_num: 31,
    category: 'IV. 기도 5. 기도의 손',
    theme: '자백',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_kor:
      ' 만일 우리가 우리 죄를 자백하면 저는 미쁘시고 의로우사 우리 죄를 사하시며 모든 불의에서 우리를 깨끗케 하실 것이요',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 842,
    card_num: 32,
    category: 'IV. 기도 5. 기도의 손',
    theme: '간구',
    chapter: 4,
    verse1: 6,
    verse2: 7,
    verse_kor:
      ' 아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '빌립보서',
      short_name: '빌',
    },
  },
  {
    idx: 858,
    card_num: 9,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '두려움에서 건져 주심',
    chapter: 34,
    verse1: 4,
    verse2: 0,
    verse_kor:
      ' 내가 여호와께 구하매 내게 응답하시고 내 모든 두려움에서 나를 건지셨도다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 859,
    card_num: 12,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '전도의 기회를 주심',
    chapter: 4,
    verse1: 3,
    verse2: 0,
    verse_kor:
      ' 또한 우리를 위하여 기도하되 하나님이 전도할 문을 우리에게 열어주사 그리스도의 비밀을 말하게 하시기를 구하라 내가 이것을 인하여 매임을 당하였노라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
];

export const VERSE_DETAIL_DATA_GAE = [
  {
    idx: 36,
    card_num: 7,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '하나님의 뜻을 알게 됨',
    chapter: 33,
    verse1: 3,
    verse2: 0,
    verse_gae:
      '너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일을 네게 보이리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 364,
    card_num: 11,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '담대함을 주심',
    chapter: 4,
    verse1: 31,
    verse2: 0,
    verse_gae:
      '빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 504,
    card_num: 1,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '쉬지 말고 기도할 것',
    chapter: 5,
    verse1: 17,
    verse2: 0,
    verse_gae: '쉬지 말고 기도하라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 505,
    card_num: 2,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '기도를 힘쓸 것',
    chapter: 4,
    verse1: 2,
    verse2: 0,
    verse_gae: '기도를 계속하고 기도에 감사함으로 깨어 있으라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
  {
    idx: 506,
    card_num: 3,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '깨어 기도할 것',
    chapter: 4,
    verse1: 7,
    verse2: 0,
    verse_gae:
      '만물의 마지막이 가까이 왔으니 그러므로 너희는 정신을 차리고 근신하여 기도하라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '베드로전서',
      short_name: '벧전',
    },
  },
  {
    idx: 508,
    card_num: 5,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '응답의 약속',
    chapter: 14,
    verse1: 13,
    verse2: 14,
    verse_gae:
      '너희가 내 이름으로 무엇을 구하든지 내가 행하리니 이는 아버지로 하여금 아들로 말미암아 영광을 받으시게 하려 함이라 내 이름으로 무엇이든지 내게 구하면 내가 행하리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 511,
    card_num: 8,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '지혜를 주심',
    chapter: 1,
    verse1: 5,
    verse2: 0,
    verse_gae:
      '너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 518,
    card_num: 19,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '합심하여 기도할 것',
    chapter: 18,
    verse1: 19,
    verse2: 0,
    verse_gae:
      '진실로 다시 너희에게 이르노니 너희 중의 두 사람이 땅에서 합심하여 무엇이든지 구하면 하늘에 계신 내 아버지께서 그들을 위하여 이루게 하시리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 520,
    card_num: 21,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '전심으로 부르짖을 것',
    chapter: 29,
    verse1: 12,
    verse2: 13,
    verse_gae:
      '너희가 내게 부르짖으며 내게 와서 기도하면 내가 너희들의 기도를 들을 것이요 너희가 온 마음으로 나를 구하면 나를 찾을 것이요 나를 만나리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 526,
    card_num: 27,
    category: 'IV. 기도 4. 기도의 본',
    theme: '곤경 중의 기도',
    chapter: 16,
    verse1: 25,
    verse2: 0,
    verse_gae:
      '한밤중에 바울과 실라가 기도하고 하나님을 찬송하매 죄수들이 듣더라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 528,
    card_num: 29,
    category: 'IV. 기도 5. 기도의 손',
    theme: '중보',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_gae:
      '그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정함으로 고요하고 평안한 생활을 하려 함이라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 529,
    card_num: 30,
    category: 'IV. 기도 5. 기도의 손',
    theme: '감사',
    chapter: 5,
    verse1: 18,
    verse2: 0,
    verse_gae:
      '범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 539,
    card_num: 26,
    category: 'IV. 기도 4. 기도의 본',
    theme: '간절한 기도',
    chapter: 5,
    verse1: 17,
    verse2: 18,
    verse_gae:
      '엘리야는 우리와 성정이 같은 사람이로되 그가 비가 오지 않기를 간절히 기도한즉 삼 년 육 개월 동안 땅에 비가 오지 아니하고 다시 기도하니 하늘이 비를 주고 땅이 열매를 맺었느니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 542,
    card_num: 25,
    category: 'IV. 기도 4. 기도의 본',
    theme: '밤을 새워 한 기도',
    chapter: 6,
    verse1: 12,
    verse2: 0,
    verse_gae:
      '이 때에 예수께서 기도하시러 산으로 가사 밤이 새도록 하나님께 기도하시고 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 552,
    card_num: 28,
    category: 'IV. 기도 5. 기도의 손',
    theme: '찬양',
    chapter: 29,
    verse1: 11,
    verse2: 13,
    verse_gae:
      '여호와여 위대하심과 권능과 영광과 승리와 위엄이 다 주께 속하였사오니 천지에 있는 것이 다 주의 것이로소이다 여호와여 주권도 주께 속하였사오니 주는 높으사 만물의 머리이심이니이다 부와 귀가 주께로 말미암고 또 주는 만물의 주재가 되사 손에 권세와 능력이 있사오니 모든 사람을 크게 하심과 강하게 하심이 주의 손에 있나이다 우리 하나님이여 이제 우리가 주께 감사하오며 주의 영화로운 이름을 찬양하나이다 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '역대상',
      short_name: '대상',
    },
  },
  {
    idx: 632,
    card_num: 24,
    category: 'IV. 기도 4. 기도의 본',
    theme: '우선순위를 둔 기도',
    chapter: 5,
    verse1: 15,
    verse2: 16,
    verse_gae:
      '예수의 소문이 더욱 퍼지매 수많은 무리가 말씀도 듣고 자기 병도 고침을 받고자 하여 모여 오되 예수는 물러가사 한적한 곳에서 기도하시니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 796,
    card_num: 14,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '믿음으로 기도할 것',
    chapter: 21,
    verse1: 22,
    verse2: 0,
    verse_gae:
      '너희가 기도할 때에 무엇이든지 믿고 구하는 것은 다 받으리라 하시니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 797,
    card_num: 23,
    category: 'IV. 기도 4. 기도의 본',
    theme: '모험적인 기도',
    chapter: 6,
    verse1: 10,
    verse2: 0,
    verse_gae:
      '다니엘이 이 조서에 왕의 도장이 찍힌 것을 알고도 자기 집에 돌아가서는 윗방에 올라가 예루살렘으로 향한 창문을 열고 전에 하던 대로 하루 세 번씩 무릎을 꿇고 기도하며 그의 하나님께 감사하였더라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '다니엘',
      short_name: '단',
    },
  },
  {
    idx: 798,
    card_num: 15,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '성령을 의뢰함으로 기도할 것',
    chapter: 6,
    verse1: 18,
    verse2: 0,
    verse_gae:
      '모든 기도와 간구를 하되 항상 성령 안에서 기도하고 이를 위하여 깨어 구하기를 항상 힘쓰며 여러 성도를 위하여 구하라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 799,
    card_num: 13,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '예수님의 이름으로 기도할 것',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    verse_gae:
      '지금까지는 너희가 내 이름으로 아무 것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 800,
    card_num: 10,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '환난에서 건져주심',
    chapter: 50,
    verse1: 15,
    verse2: 0,
    verse_gae:
      '환난 날에 나를 부르라 내가 너를 건지리니 네가 나를 영화롭게 하리로다 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 834,
    card_num: 4,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '모든 사람을 위하여 기도할 것',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_gae:
      '그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정함으로 고요하고 평안한 생활을 하려 함이라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 835,
    card_num: 6,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '넘치는 응답',
    chapter: 3,
    verse1: 20,
    verse2: 0,
    verse_gae:
      '우리 가운데서 역사하시는 능력대로 우리가 구하거나 생각하는 모든 것에 더 넘치도록 능히 하실 이에게 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 836,
    card_num: 16,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '하나님의 뜻대로 기도할 것',
    chapter: 5,
    verse1: 14,
    verse2: 15,
    verse_gae:
      '그를 향하여 우리가 가진 바 담대함이 이것이니 그의 뜻대로 무엇을 구하면 들으심이라 우리가 무엇이든지 구하는 바를 들으시는 줄을 안즉 우리가 그에게 구한 그것을 얻은 줄을 또한 아느니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 837,
    card_num: 17,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '죄를 자백하고 버릴 것',
    chapter: 66,
    verse1: 18,
    verse2: 0,
    verse_gae: '내가 나의 마음에 죄악을 품었더라면 주께서 듣지 아니하시리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 838,
    card_num: 18,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '순종할 것',
    chapter: 3,
    verse1: 22,
    verse2: 0,
    verse_gae:
      '무엇이든지 구하는 바를 그에게서 받나니 이는 우리가 그의 계명을 지키고 그 앞에서 기뻐하시는 것을 행함이라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 839,
    card_num: 20,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '적극적으로 기도할 것',
    chapter: 7,
    verse1: 7,
    verse2: 8,
    verse_gae:
      '구하라 그리하면 너희에게 주실 것이요 찾으라 그리하면 찾아낼 것이요 문을 두드리라 그리하면 너희에게 열릴 것이니 구하는 이마다 받을 것이요 찾는 이는 찾아낼 것이요 두드리는 이에게는 열릴 것이니라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 840,
    card_num: 22,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '약속을 주장하며 기도할 것',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_gae:
      '만일 내게로 돌아와 내 계명을 지켜 행하면 너희 쫓긴 자가 하늘 끝에 있을지라도 내가 거기서부터 그들을 모아 내 이름을 두려고 택한 곳에 돌아오게 하리라 하신 말씀을 이제 청하건대 기억하옵소서 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '느헤미야',
      short_name: '느',
    },
  },
  {
    idx: 841,
    card_num: 31,
    category: 'IV. 기도 5. 기도의 손',
    theme: '자백',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_gae:
      '만일 우리가 우리 죄를 자백하면 그는 미쁘시고 의로우사 우리 죄를 사하시며 우리를 모든 불의에서 깨끗하게 하실 것이요 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 842,
    card_num: 32,
    category: 'IV. 기도 5. 기도의 손',
    theme: '간구',
    chapter: 4,
    verse1: 6,
    verse2: 7,
    verse_gae:
      '아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '빌립보서',
      short_name: '빌',
    },
  },
  {
    idx: 858,
    card_num: 9,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '두려움에서 건져 주심',
    chapter: 34,
    verse1: 4,
    verse2: 0,
    verse_gae:
      '내가 여호와께 간구하매 내게 응답하시고 내 모든 두려움에서 나를 건지셨도다 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 859,
    card_num: 12,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '전도의 기회를 주심',
    chapter: 4,
    verse1: 3,
    verse2: 0,
    verse_gae:
      '또한 우리를 위하여 기도하되 하나님이 전도할 문을 우리에게 열어 주사 그리스도의 비밀을 말하게 하시기를 구하라 내가 이 일 때문에 매임을 당하였노라 ',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
];

export const BIBLE_VERSIONS = [
  { code: 'BV_001', name: '개역한글판' },
  { code: 'BV_002', name: '개역개정판' },
] as const;

export const CARD_HIDE_OPTIONS = [
  { code: 'HIDE_001', name: '없음' },
  { code: 'HIDE_002', name: '장절' },
  { code: 'HIDE_003', name: '제목' },
  { code: 'HIDE_004', name: '내용' },
] as const;

export const EXAM_EXPOSE_OPTIONS = [
  { code: 'EXPOSE_001', name: '장절' },
  { code: 'EXPOSE_002', name: '제목' },
  { code: 'EXPOSE_003', name: '장절,제목' },
] as const;

export const CARD_SORT_METHODS = [
  { code: 'SORT_001', name: '기본 순' },
  { code: 'SORT_002', name: '랜덤' },
] as const;

export const EXAM_VERSES_KOR_ALL_ASC = [
  {
    idx: 36,
    card_num: 7,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '하나님의 뜻을 알게 됨',
    chapter: 33,
    verse1: 3,
    verse2: 0,
    verse_kor:
      '너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 비밀한 일을 네게 보이리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 364,
    card_num: 11,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '담대함을 주심',
    chapter: 4,
    verse1: 31,
    verse2: 0,
    verse_kor:
      ' 빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 504,
    card_num: 1,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '쉬지 말고 기도할 것',
    chapter: 5,
    verse1: 17,
    verse2: 0,
    verse_kor: ' 쉬지 말고 기도하라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 505,
    card_num: 2,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '기도를 힘쓸 것',
    chapter: 4,
    verse1: 2,
    verse2: 0,
    verse_kor: ' 기도를 항상 힘쓰고 기도에 감사함으로 깨어 있으라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
  {
    idx: 506,
    card_num: 3,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '깨어 기도할 것',
    chapter: 4,
    verse1: 7,
    verse2: 0,
    verse_kor:
      ' 만물의 마지막이 가까웠으니 그러므로 너희는 정신을 차리고 근신하여 기도하라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '베드로전서',
      short_name: '벧전',
    },
  },
  {
    idx: 508,
    card_num: 5,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '응답의 약속',
    chapter: 14,
    verse1: 13,
    verse2: 14,
    verse_kor:
      ' 너희가 내 이름으로 무엇을 구하든지 내가 시행하리니 이는 아버지로 하여금 아들을 인하여 영광을 얻으시게 하려 함이라 내 이름으로 무엇이든지 내게 구하면 내가 시행하리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 511,
    card_num: 8,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '지혜를 주심',
    chapter: 1,
    verse1: 5,
    verse2: 0,
    verse_kor:
      ' 너희 중에 누구든지 지혜가 부족하거든 모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하라 그리하면 주시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 518,
    card_num: 19,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '합심하여 기도할 것',
    chapter: 18,
    verse1: 19,
    verse2: 0,
    verse_kor:
      ' 진실로 다시 너희에게 이르노니 너희 중에 두 사람이 땅에서 합심하여 무엇이든지 구하면 하늘에 계신 내 아버지께서 저희를 위하여 이루게 하시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 520,
    card_num: 21,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '전심으로 부르짖을 것',
    chapter: 29,
    verse1: 12,
    verse2: 13,
    verse_kor:
      ' 너희는 내게 부르짖으며 와서 내게 기도하면 내가 너희를 들을 것이요 너희가 전심으로 나를 찾고 찾으면 나를 만나리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '예레미야',
      short_name: '렘',
    },
  },
  {
    idx: 526,
    card_num: 27,
    category: 'IV. 기도 4. 기도의 본',
    theme: '곤경 중의 기도',
    chapter: 16,
    verse1: 25,
    verse2: 0,
    verse_kor:
      ' 밤중쯤 되어 바울과 실라가 기도하고 하나님을 찬미하매 죄수들이 듣더라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '사도행전',
      short_name: '행',
    },
  },
  {
    idx: 528,
    card_num: 29,
    category: 'IV. 기도 5. 기도의 손',
    theme: '중보',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_kor:
      ' 그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정한 중에 고요하고 평안한 생활을 하려 함이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 529,
    card_num: 30,
    category: 'IV. 기도 5. 기도의 손',
    theme: '감사',
    chapter: 5,
    verse1: 18,
    verse2: 0,
    verse_kor:
      ' 범사에 감사하라 이는 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    idx: 539,
    card_num: 26,
    category: 'IV. 기도 4. 기도의 본',
    theme: '간절한 기도',
    chapter: 5,
    verse1: 17,
    verse2: 18,
    verse_kor:
      ' 엘리야는 우리와 성정이 같은 사람이로되 저가 비 오지 않기를 간절히 기도한즉 삼 년 육 개월 동안 땅에 비가 아니오고 다시 기도한즉 하늘이 비를 주고 땅이 열매를 내었느니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '야고보서',
      short_name: '약',
    },
  },
  {
    idx: 542,
    card_num: 25,
    category: 'IV. 기도 4. 기도의 본',
    theme: '밤을 새워 한 기도',
    chapter: 6,
    verse1: 12,
    verse2: 0,
    verse_kor:
      ' 이 때에 예수께서 기도하시러 산으로 가사 밤이 맟도록 하나님께 기도하시고',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 552,
    card_num: 28,
    category: 'IV. 기도 5. 기도의 손',
    theme: '찬양',
    chapter: 29,
    verse1: 11,
    verse2: 13,
    verse_kor:
      ' 여호와여 광대하심과 권능과 영광과 이김과 위엄이 다 주께 속하였사오니 천지에 있는 것이 다 주의 것이로소이다 여호와여 주권도 주께 속하였사오니 주는 높으사 만유의 머리심이니이다 부와 귀가 주께로 말미암고 또 주는 만유의 주재가 되사 손에 권세와 능력이 있사오니 모든 자를 크게 하심과 강하게 하심이 주의 손에 있나이다 우리 하나님이여 이제 우리가 주께 감사하오며 주의 영화로운 이름을 찬양하나이다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '역대상',
      short_name: '대상',
    },
  },
  {
    idx: 632,
    card_num: 24,
    category: 'IV. 기도 4. 기도의 본',
    theme: '우선순위를 둔 기도',
    chapter: 5,
    verse1: 15,
    verse2: 16,
    verse_kor:
      ' 예수의 소문이 더욱 퍼지매 허다한 무리가 말씀도 듣고 자기 병도 나음을 얻고자 하여 모여 오되 예수는 물러가사 한적한 곳에서 기도하시니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '누가복음',
      short_name: '눅',
    },
  },
  {
    idx: 796,
    card_num: 14,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '믿음으로 기도할 것',
    chapter: 21,
    verse1: 22,
    verse2: 0,
    verse_kor:
      ' 너희가 기도할 때에 무엇이든지 믿고 구하는 것은 다 받으리라 하시니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 797,
    card_num: 23,
    category: 'IV. 기도 4. 기도의 본',
    theme: '모험적인 기도',
    chapter: 6,
    verse1: 10,
    verse2: 0,
    verse_kor:
      ' 다니엘이 이 조서에 어인이 찍힌 것을 알고도 자기 집에 돌아가서는 그 방의 예루살렘으로 향하여 열린 창에서 전에 행하던 대로 하루 세 번씩 무릎을 꿇고 기도하며 그 하나님께 감사하였더라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '다니엘',
      short_name: '단',
    },
  },
  {
    idx: 798,
    card_num: 15,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '성령을 의뢰함으로 기도할 것',
    chapter: 6,
    verse1: 18,
    verse2: 0,
    verse_kor:
      ' 모든 기도와 간구로 하되 무시로 성령 안에서 기도하고 이를 위하여 깨어 구하기를 항상 힘쓰며 여러 성도를 위하여 구하고',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 799,
    card_num: 13,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '예수님의 이름으로 기도할 것',
    chapter: 16,
    verse1: 24,
    verse2: 0,
    verse_kor:
      ' 지금까지는 너희가 내 이름으로 아무 것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한복음',
      short_name: '요',
    },
  },
  {
    idx: 800,
    card_num: 10,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '환난에서 건져주심',
    chapter: 50,
    verse1: 15,
    verse2: 0,
    verse_kor:
      ' 환난 날에 나를 부르라 내가 너를 건지리니 네가 나를 영화롭게 하리로다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 834,
    card_num: 4,
    category: 'IV. 기도 1. 기도의 명령',
    theme: '모든 사람을 위하여 기도할 것',
    chapter: 2,
    verse1: 1,
    verse2: 2,
    verse_kor:
      ' 그러므로 내가 첫째로 권하노니 모든 사람을 위하여 간구와 기도와 도고와 감사를 하되 임금들과 높은 지위에 있는 모든 사람을 위하여 하라 이는 우리가 모든 경건과 단정한 중에 고요하고 평안한 생활을 하려 함이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '디모데전서',
      short_name: '딤전',
    },
  },
  {
    idx: 835,
    card_num: 6,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '넘치는 응답',
    chapter: 3,
    verse1: 20,
    verse2: 0,
    verse_kor:
      ' 우리 가운데서 역사하시는 능력대로 우리의 온갖 구하는 것이나 생각하는 것에 더 넘치도록 능히 하실 이에게',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '에베소서',
      short_name: '엡',
    },
  },
  {
    idx: 836,
    card_num: 16,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '하나님의 뜻대로 기도할 것',
    chapter: 5,
    verse1: 14,
    verse2: 15,
    verse_kor:
      ' 그를 향하여 우리의 가진 바 담대한 것이 이것이니 그의 뜻대로 무엇을 구하면 들으심이라 우리가 무엇이든지 구하는 바를 들으시는 줄을 안즉 우리가 그에게 구한 그것을 얻은 줄을 또한 아느니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 837,
    card_num: 17,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '죄를 자백하고 버릴 것',
    chapter: 66,
    verse1: 18,
    verse2: 0,
    verse_kor: ' 내가 내 마음에 죄악을 품으면 주께서 듣지 아니하시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 838,
    card_num: 18,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '순종할 것',
    chapter: 3,
    verse1: 22,
    verse2: 0,
    verse_kor:
      ' 무엇이든지 구하는 바를 그에게 받나니 이는 우리가 그의 계명들을 지키고 그 앞에서 기뻐하시는 것을 행함이라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 839,
    card_num: 20,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '적극적으로 기도할 것',
    chapter: 7,
    verse1: 7,
    verse2: 8,
    verse_kor:
      ' 구하라 그러면 너희에게 주실 것이요 찾으라 그러면 찾을 것이요 문을 두드리라 그러면 너희에게 열릴 것이니 구하는 이마다 얻을 것이요 찾는 이가 찾을 것이요 두드리는 이에게 열릴 것이니라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '마태복음',
      short_name: '마',
    },
  },
  {
    idx: 840,
    card_num: 22,
    category: 'IV. 기도 3. 응답받는 기도의 조건',
    theme: '약속을 주장하며 기도할 것',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_kor:
      ' 만일 내게로 돌아와서 내 계명을 지켜 행하면 너희 쫓긴 자가 하늘 끝에 있을지라도 내가 거기서부터 모아 내 이름을 두려고 택한 곳에 돌아오게 하리라 하신 말씀을 이제 청컨대 기억하옵소서',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '느헤미야',
      short_name: '느',
    },
  },
  {
    idx: 841,
    card_num: 31,
    category: 'IV. 기도 5. 기도의 손',
    theme: '자백',
    chapter: 1,
    verse1: 9,
    verse2: 0,
    verse_kor:
      ' 만일 우리가 우리 죄를 자백하면 저는 미쁘시고 의로우사 우리 죄를 사하시며 모든 불의에서 우리를 깨끗케 하실 것이요',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '요한일서',
      short_name: '요일',
    },
  },
  {
    idx: 842,
    card_num: 32,
    category: 'IV. 기도 5. 기도의 손',
    theme: '간구',
    chapter: 4,
    verse1: 6,
    verse2: 7,
    verse_kor:
      ' 아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '빌립보서',
      short_name: '빌',
    },
  },
  {
    idx: 858,
    card_num: 9,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '두려움에서 건져 주심',
    chapter: 34,
    verse1: 4,
    verse2: 0,
    verse_kor:
      ' 내가 여호와께 구하매 내게 응답하시고 내 모든 두려움에서 나를 건지셨도다',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '시편',
      short_name: '시',
    },
  },
  {
    idx: 859,
    card_num: 12,
    category: 'IV. 기도 2. 기도의 약속과 축복',
    theme: '전도의 기회를 주심',
    chapter: 4,
    verse1: 3,
    verse2: 0,
    verse_kor:
      ' 또한 우리를 위하여 기도하되 하나님이 전도할 문을 우리에게 열어주사 그리스도의 비밀을 말하게 하시기를 구하라 내가 이것을 인하여 매임을 당하였노라',
    series_code: {
      ord: 13,
      series_name: 'DEP 242구절',
    },
    bible_code: {
      bible_name: '골로새서',
      short_name: '골',
    },
  },
];
