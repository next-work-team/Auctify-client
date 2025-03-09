import { Grid, List } from 'lucide-react';
import React from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';

export default function GirdListToggle() {
  return (
    <Tabs
      value={'grid'}
      // onValueChange={setViewType}
      className="hidden sm:block"
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
