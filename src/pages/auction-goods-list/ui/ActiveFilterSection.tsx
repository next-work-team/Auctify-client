import React, { Dispatch, SetStateAction } from 'react';

import { Button } from '@/shared/ui';

import { Filter } from '../models/types';
import {
  AUCTION_STATUS_FILTER_OPTIONS_MAP,
  CATEGORY_FILTER_OPTIONS_MAP,
  CONDITION_FILTER_OPTIONS_MAP,
} from '../config/constants';

import { defaultFilter } from './AuctionGoodsListPage';

export default function ActiveFilterSection({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  // filter -> []
  const activeFilters = [
    ...filter.categories.map(
      (value) => `${CATEGORY_FILTER_OPTIONS_MAP[value]}`,
    ),
    ...filter.condition.map(
      (value) => `${CONDITION_FILTER_OPTIONS_MAP[value]}`,
    ),
    ...filter.auctionStatus.map(
      (value) => `${AUCTION_STATUS_FILTER_OPTIONS_MAP[value]}`,
    ),
    `가격 범위: ${filter.priceRange.min.toLocaleString()} ~ ${filter.priceRange.max === null ? '제한 없음' : filter.priceRange.max.toLocaleString()}`,
  ];

  console.log(activeFilters);

  return (
    <div className="bg-muted/40 p-3 rounded-lg">
      <div className="flex flex-wrap gap-2">
        {activeFilters.map((activeFilter) => (
          <div
            key={activeFilter}
            className="bg-background text-sm px-3 py-1 rounded-full flex items-center"
          >
            {activeFilter}
            <button className="ml-1 text-muted-foreground hover:text-foreground">
              ×
            </button>
          </div>
        ))}

        <Button
          variant="link"
          size="sm"
          className="text-xs h-auto p-0"
          onClick={() => {
            setFilter(defaultFilter);
          }}
        >
          필터 초기화
        </Button>
      </div>
    </div>
  );
}
