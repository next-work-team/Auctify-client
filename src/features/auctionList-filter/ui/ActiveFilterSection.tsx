'use client';

import { Button } from '@/shared/ui';

import {
  AUCTION_STATUS_FILTER_OPTIONS_MAP,
  CATEGORY_FILTER_OPTIONS_MAP,
  CONDITION_FILTER_OPTIONS_MAP,
} from '../constants/filters';
import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

export default function ActiveFilterSection() {
  const { filters, resetFilter, setFilter } = useAuctionFilterStore();

  // active 필터 항목 구성
  const activeFilters = [
    ...filters.categories.map((value) => ({
      key: 'categories' as const,
      value,
      label: CATEGORY_FILTER_OPTIONS_MAP[value],
    })),
    ...filters.condition.map((value) => ({
      key: 'condition' as const,
      value,
      label: CONDITION_FILTER_OPTIONS_MAP[value],
    })),
    ...filters.status.map((value) => ({
      key: 'status' as const,
      value,
      label: AUCTION_STATUS_FILTER_OPTIONS_MAP[value],
    })),
    ...(filters.priceRange.min !== 0 || filters.priceRange.max !== null
      ? [
          {
            key: 'priceRange' as const,
            value: 'priceRange',
            label: `가격 범위: ${filters.priceRange.min.toLocaleString()} ~ ${filters.priceRange.max === null ? '제한 없음' : filters.priceRange.max.toLocaleString()}`,
          },
        ]
      : []),
  ];

  return (
    <div className="bg-muted/40 p-3 rounded-lg">
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <div
              key={`${filter.key}-${filter.value}`}
              className="bg-background text-sm px-3 py-1 rounded-full flex items-center"
            >
              {filter.label}
              <button
                className="ml-1 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  if (filter.key === 'priceRange') {
                    setFilter('priceRange', { min: 0, max: null });
                  } else {
                    setFilter(
                      filter.key,
                      filters[filter.key].filter(
                        (item) => item !== filter.value,
                      ),
                    );
                  }
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <Button
          variant="link"
          size="sm"
          className="text-xs h-auto p-0"
          onClick={resetFilter}
        >
          필터 초기화
        </Button>
      </div>
    </div>
  );
}
