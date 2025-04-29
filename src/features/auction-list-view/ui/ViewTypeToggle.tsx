'use client';

import { Grid, List } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger } from '@/shared/ui';

import { useViewTypeStore, ViewType } from '../store/useViewTypeStore';

export default function GirdListToggle() {
  const { viewType, setViewType } = useViewTypeStore();

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
