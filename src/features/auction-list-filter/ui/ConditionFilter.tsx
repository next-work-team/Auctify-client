import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { CONDITION_FILTER_OPTIONS } from '../constants';
import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

function ConditionFilter() {
  const { filters, setFilter } = useAuctionFilterStore();

  return (
    <AccordionItem value="condition">
      <AccordionTrigger>상품 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CONDITION_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filters.condition.includes(option.value)}
              onCheckedChange={(checked) => {
                const updatedConditions = checked
                  ? [...filters.condition, option.value]
                  : filters.condition.filter((v) => v !== option.value);
                setFilter('condition', updatedConditions);
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

export default ConditionFilter;
