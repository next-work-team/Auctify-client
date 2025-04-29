'use client';

import { Input } from '@/shared/ui/input';

import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

export default function SearchInput() {
  const { filters, setFilter } = useAuctionFilterStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter('keyword', event.target.value);
  };

  return (
    <div className="relative w-full sm:max-w-xs">
      <Input
        placeholder="경매 검색..."
        className="w-full"
        value={filters.keyword}
        onChange={handleChange}
      />
    </div>
  );
}
