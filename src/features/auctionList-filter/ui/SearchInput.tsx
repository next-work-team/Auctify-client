import { Dispatch, SetStateAction } from 'react';

import { Input } from '@/shared/ui/input';

export default function SearchInput({
  searchInputValue,
  setSearchInputValue,
}: {
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Input
        placeholder="경매 검색..."
        className="w-full"
        value={searchInputValue}
        onChange={(event) => setSearchInputValue(event.target.value)}
      />
    </div>
  );
}
