import { Dispatch, SetStateAction } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Label } from '@/shared/ui/Label';
import { Input } from '@/shared/ui/input';
import { Slider } from '@/shared/ui/Slider';

import { Filter } from '../../../pages/auctions-list/types';

function PriceRangeFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="priceRange">
      <AccordionTrigger>가격 범위</AccordionTrigger>
      <AccordionContent className="py-4 space-y-4">
        {filter.priceRange.min !== null && filter.priceRange.max !== null && (
          <Slider
            max={filter.priceRange.max}
            step={10000}
            value={[filter.priceRange.min, filter.priceRange.max]}
            onValueChange={(value) =>
              setFilter((prevFilter) => ({
                ...prevFilter,
                priceRange: { min: value[0], max: value[1] },
              }))
            }
          />
        )}

        <div className="flex items-center justify-between">
          <div className="w-[45%]">
            <Label htmlFor="min-price" className="text-xs">
              최소
            </Label>
            <Input
              id="min-price"
              type="number"
              value={filter.priceRange.min}
              onChange={(e) =>
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  priceRange: {
                    ...prevFilter.priceRange,
                    min: Number(e.target.value),
                  },
                }))
              }
              className="h-8"
            />
          </div>
          <span className="text-muted-foreground">-</span>
          <div className="w-[45%]">
            <Label htmlFor="max-price" className="text-xs">
              최대
            </Label>
            <Input
              id="max-price"
              type="number"
              value={filter.priceRange.max ?? ''}
              onChange={(e) =>
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  priceRange: {
                    ...prevFilter.priceRange,
                    max: e.target.value ? Number(e.target.value) : null,
                  },
                }))
              }
              className="h-8"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default PriceRangeFilter;
