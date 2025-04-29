'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';

import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

export default function SortDropdown() {
  const { filters, setFilter } = useAuctionFilterStore();

  return (
    <Select
      defaultValue="ending-soon"
      value={filters.sort}
      onValueChange={(value) => setFilter('sort', value as typeof filters.sort)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ending-soon">종료 임박순</SelectItem>
        <SelectItem value="newest">최신순</SelectItem>
        <SelectItem value="price-low">가격 낮은순</SelectItem>
        <SelectItem value="price-high">가격 높은순</SelectItem>
        <SelectItem value="popular">인기순</SelectItem>
      </SelectContent>
    </Select>
  );
}
