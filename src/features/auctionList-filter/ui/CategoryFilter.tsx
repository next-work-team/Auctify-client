import React, { Dispatch, SetStateAction } from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/ui/Accordion';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Label } from '@/shared/ui/Label';

import { CATEGORY_FILTER_OPTIONS } from '../../../pages/auctions-list/constants/filters';
import { Filter } from '../../../pages/auctions-list/types';

export default function CategoryFilter({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}) {
  return (
    <AccordionItem value="category">
      <AccordionTrigger>카테고리</AccordionTrigger>
      <AccordionContent className="space-y-2">
        {CATEGORY_FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={filter.categories.includes(option.value)}
              onCheckedChange={(checked) => {
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  categories: checked
                    ? [...prevFilter.categories, option.value]
                    : prevFilter.categories.filter(
                        (category) => category !== option.value,
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
