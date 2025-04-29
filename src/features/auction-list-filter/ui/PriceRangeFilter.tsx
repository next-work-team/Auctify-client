import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Label } from '@/shared/ui/Label';
import { Input } from '@/shared/ui/input';
import { Slider } from '@/shared/ui/Slider';

import { useAuctionFilterStore } from '../store/useAuctionFilterStore';

function PriceRangeFilter() {
  const { filters, setFilter } = useAuctionFilterStore();

  const handleSliderChange = (value: number[]) => {
    setFilter('priceRange', { min: value[0], max: value[1] });
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setFilter('priceRange', {
      ...filters.priceRange,
      min: newMin,
    });
  };
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const newMax = input ? Number(input) : null;

    setFilter('priceRange', {
      ...filters.priceRange,
      max: newMax,
    });
  };

  return (
    <AccordionItem value="priceRange">
      <AccordionTrigger>가격 범위</AccordionTrigger>
      <AccordionContent className="py-4 space-y-4">
        {filters.priceRange.min !== null && filters.priceRange.max !== null && (
          <Slider
            max={filters.priceRange.max}
            step={10000}
            value={[filters.priceRange.min, filters.priceRange.max]}
            onValueChange={handleSliderChange}
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
              value={filters.priceRange.min}
              onChange={handleMinChange}
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
              value={filters.priceRange.max ?? ''}
              onChange={handleMaxChange}
              className="h-8"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default PriceRangeFilter;
