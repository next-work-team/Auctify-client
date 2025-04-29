import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { CATEGORY_FILTER_OPTIONS } from '../constants/filters';
import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

export default function CategoryFilter() {
  const { filters, setFilter } = useAuctionFilterStore();

  return (
    <AccordionItem value="category">
      <AccordionTrigger>카테고리</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CATEGORY_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filters.categories.includes(option.value)}
              onCheckedChange={(checked) => {
                const updatedCategories = checked
                  ? [...filters.categories, option.value]
                  : filters.categories.filter((v) => v !== option.value);
                setFilter('categories', updatedCategories);
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
