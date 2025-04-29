export const CATEGORY_FILTER_OPTIONS = [
  { label: '전자제품', value: 'electronics' },
  { label: '패션', value: 'fashion' },
  { label: '수집품', value: 'collectibles' },
  { label: '예술/미술', value: 'art' },
  { label: '쥬얼리', value: 'jewelry' },
  { label: '홈/리빙', value: 'home' },
  { label: '스포츠/레저', value: 'sports' },
] as const;

export const CATEGORY_FILTER_OPTIONS_MAP = {
  electronics: '전자제품',
  fashion: '패션',
  collectibles: '수집품',
  art: '예술/미술',
  jewelry: '쥬얼리',
  home: '홈/리빙',
  sports: '스포츠/레저',
};
export type CategoryKey = keyof typeof CATEGORY_FILTER_OPTIONS_MAP;

export const CONDITION_FILTER_OPTIONS = [
  { label: '새 상품', value: 'new' },
  { label: '거의 새 상품', value: 'like-new' },
  { label: '중고 - 상태 좋음', value: 'used-good' },
  { label: '중고 - 상태 보통', value: 'used-fair' },
] as const;

export const CONDITION_FILTER_OPTIONS_MAP = {
  new: '새 상품',
  'like-new': '거의 새 상품',
  'used-good': '중고 - 상태 좋음',
  'used-fair': '중고 - 상태 보통',
};

export const AUCTION_STATUS_FILTER_OPTIONS = [
  { label: '종료 임박 (24시간 이내)', value: 'ending-soon' },
  { label: '최근 등록 (24시간 이내)', value: 'newly-listed' },
  { label: '인기 경매 (10건 이상 입찰)', value: 'hot-items' },
  { label: '즉시 구매 가능', value: 'buy-now' },
] as const;

export const AUCTION_STATUS_FILTER_OPTIONS_MAP = {
  'ending-soon': '종료 임박 (24시간 이내)',
  'newly-listed': '최근 등록 (24시간 이내)',
  'hot-items': '인기 경매 (10건 이상 입찰)',
  'buy-now': '즉시 구매 가능',
};
