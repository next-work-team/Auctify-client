import { Grid, List } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';

import { ViewType } from '../models/types';

export default function GirdListToggle({
  viewType,
  setViewType,
}: {
  viewType: ViewType;
  setViewType: Dispatch<SetStateAction<ViewType>>;
}) {
  return (
    <Tabs
      value={viewType}
      onValueChange={(value) => setViewType(value as ViewType)}
    >
      <TabsList>
        <TabsTrigger value="grid" className="px-3">
          <Grid className="h-4 w-4" />
        </TabsTrigger>
        <TabsTrigger value="list" className="px-3">
          <List className="h-4 w-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
