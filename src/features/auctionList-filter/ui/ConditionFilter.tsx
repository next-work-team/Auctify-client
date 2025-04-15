import { Dispatch, SetStateAction } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { CONDITION_FILTER_OPTIONS } from '../../../pages/auctions-list/constants/filters';
import { Filter } from '../../../pages/auctions-list/types';

function ConditionFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="condition">
      <AccordionTrigger>상품 상태</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CONDITION_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.condition.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  condition: checked
                    ? [...prevFilter.condition, option.value]
                    : prevFilter.condition.filter(
                        (conditionItem) => conditionItem !== option.value,
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

export default ConditionFilter;
