import { Dispatch, SetStateAction } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { AUCTION_STATUS_FILTER_OPTIONS } from '../../../pages/auctions-list/constants/filters';
import { Filter } from '../../../pages/auctions-list/types';

function AuctionStatusFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="status">
      <AccordionTrigger>경매 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {AUCTION_STATUS_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.auctionStatus.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  auctionStatus: checked
                    ? [...prevFilter.auctionStatus, option.value]
                    : prevFilter.auctionStatus.filter(
                        (statusItem) => statusItem !== option.value,
                      ),
                }));
              }}
            />
            <Label htmlFor={option.value} className="text-sm font-normal">
              {option.label}
            </Label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

export default AuctionStatusFilter;
