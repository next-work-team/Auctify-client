import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { AUCTION_STATUS_FILTER_OPTIONS } from '../constants';
import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

function AuctionStatusFilter() {
  const { filters, setFilter } = useAuctionFilterStore();

  return (
    <AccordionItem value="status">
      <AccordionTrigger>경매 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {AUCTION_STATUS_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filters.status.includes(option.value)}
              onCheckedChange={(checked) => {
                const updatedStatus = checked
                  ? [...filters.status, option.value]
                  : filters.status.filter((v) => v !== option.value);
                setFilter('status', updatedStatus);
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
