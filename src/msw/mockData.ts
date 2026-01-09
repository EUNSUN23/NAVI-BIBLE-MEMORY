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
  series_code: '3%',
  series_name: 'DEP 242구절',
  category: '242 전체',
  sub_series_opt: 'Y',
  ord: 10,
  parent_series: null,
};

export const SERIES_DATA_SUB = [
  {
    series_code: '310',
    category: 'DEP 242구절',
    series_name: '1. 구원의 확신',
    sub_series_opt: 'N',
    ord: 10,
    parent_series: '3%',
  },
  {
    series_code: '320',
    category: 'DEP 242구절',
    series_name: '2. Quiet Time',
    sub_series_opt: 'N',
    ord: 11,
    parent_series: '3%',
  },
  {
    series_code: '330',
    category: 'DEP 242구절',
    series_name: '3. 말씀',
    sub_series_opt: 'N',
    ord: 12,
    parent_series: '3%',
  },
  {
    series_code: '340',
    category: 'DEP 242구절',
    series_name: '4. 기도',
    sub_series_opt: 'N',
    ord: 13,
    parent_series: '3%',
  },
  {
    series_code: '350',
    category: 'DEP 242구절',
    series_name: '5. 교제',
    sub_series_opt: 'N',
    ord: 14,
    parent_series: '3%',
  },
  {
    series_code: '360',
    category: 'DEP 242구절',
    series_name: '6. 증거',
    sub_series_opt: 'N',
    ord: 15,
    parent_series: '3%',
  },
  {
    series_code: '370',
    category: 'DEP 242구절',
    series_name: '7. 그리스도의 주재권',
    sub_series_opt: 'N',
    ord: 16,
    parent_series: '3%',
  },
  {
    series_code: '380',
    category: 'DEP 242구절',
    series_name: '8. 세계비전',
    sub_series_opt: 'N',
    ord: 17,
    parent_series: '3%',
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
    bible: {
      name: '요한일서',
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
    bible: {
      name: '요한복음',
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
    bible: {
      name: '고린도전서',
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
    bible: {
      name: '요한일서',
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
    bible: {
      name: '잠언',
    },
  },
];

export const VERSE_DETAIL_DATA_KOR = [
  {
    card_info: {
      idx: 36,
      card_num: 7,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '하나님의 뜻을 알게 됨',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 33,
    verse1: 3,
    verse2: 0,
    contents:
      '너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 비밀한 일을 네게 보이리라',
    bible: {
      name: '예레미야',
      short_name: '렘',
    },
  },
  {
    card_info: {
      idx: 364,
      card_num: 11,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '담대함을 주심',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 31,
    verse2: 0,
    contents:
      ' 빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라',
    bible: {
      name: '사도행전',
      short_name: '행',
    },
  },
  {
    card_info: {
      idx: 504,
      card_num: 1,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '쉬지 말고 기도할 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 5,
    verse1: 17,
    verse2: 0,
    contents: ' 쉬지 말고 기도하라',
    bible: {
      name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    card_info: {
      idx: 505,
      card_num: 2,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '기도를 힘쓸 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 2,
    verse2: 0,
    contents: ' 기도를 항상 힘쓰고 기도에 감사함으로 깨어 있으라',
    bible: {
      name: '골로새서',
      short_name: '골',
    },
  },
  {
    card_info: {
      idx: 506,
      card_num: 3,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '깨어 기도할 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 7,
    verse2: 0,
    contents:
      ' 만물의 마지막이 가까웠으니 그러므로 너희는 정신을 차리고 근신하여 기도하라',
    bible: {
      name: '베드로전서',
      short_name: '벧전',
    },
  },
  {
    card_info: {
      idx: 508,
      card_num: 5,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '응답의 약속',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 14,
    verse1: 13,
    verse2: 14,
    contents:
      ' 너희가 내 이름으로 무엇을 구하든지 내가 시행하리니 이는 아버지로 하여금 아들을 인하여 영광을 얻으시게 하려 함이라 내 이름으로 무엇이든지 내게 구하면 내가 시행하리라',
    bible: {
      name: '요한복음',
      short_name: '요',
    },
  },
];

export const VERSE_DETAIL_DATA_GAE = [
  {
    card_info: {
      idx: 36,
      card_num: 7,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '하나님의 뜻을 알게 됨',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 33,
    verse1: 3,
    verse2: 0,
    contents:
      '너는 내게 부르짖으라 내가 네게 응답하겠고 네가 알지 못하는 크고 은밀한 일을 네게 보이리라 ',
    bible: {
      name: '예레미야',
      short_name: '렘',
    },
  },
  {
    card_info: {
      idx: 364,
      card_num: 11,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '담대함을 주심',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 31,
    verse2: 0,
    contents:
      '빌기를 다하매 모인 곳이 진동하더니 무리가 다 성령이 충만하여 담대히 하나님의 말씀을 전하니라 ',
    bible: {
      name: '사도행전',
      short_name: '행',
    },
  },
  {
    card_info: {
      idx: 504,
      card_num: 1,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '쉬지 말고 기도할 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 5,
    verse1: 17,
    verse2: 0,
    contents: '쉬지 말고 기도하라 ',
    bible: {
      name: '데살로니가전서',
      short_name: '살전',
    },
  },
  {
    card_info: {
      idx: 505,
      card_num: 2,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '기도를 힘쓸 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 2,
    verse2: 0,
    contents: '기도를 계속하고 기도에 감사함으로 깨어 있으라 ',
    bible: {
      name: '골로새서',
      short_name: '골',
    },
  },
  {
    card_info: {
      idx: 506,
      card_num: 3,
      category: 'IV. 기도 1. 기도의 명령',
      theme: '깨어 기도할 것',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 4,
    verse1: 7,
    verse2: 0,
    contents:
      '만물의 마지막이 가까이 왔으니 그러므로 너희는 정신을 차리고 근신하여 기도하라 ',
    bible: {
      name: '베드로전서',
      short_name: '벧전',
    },
  },
  {
    card_info: {
      idx: 508,
      card_num: 5,
      category: 'IV. 기도 2. 기도의 약속과 축복',
      theme: '응답의 약속',
      series: {
        ord: 13,
        name: 'DEP 242구절',
      },
    },
    chapter: 14,
    verse1: 13,
    verse2: 14,
    contents:
      '너희가 내 이름으로 무엇을 구하든지 내가 행하리니 이는 아버지로 하여금 아들로 말미암아 영광을 받으시게 하려 함이라 내 이름으로 무엇이든지 내게 구하면 내가 행하리라 ',
    bible: {
      name: '요한복음',
      short_name: '요',
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
