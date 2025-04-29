import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { persistentStorage } from '@/shared/lib/persistentStorage';

export type AuctionFilter = {
  categories: string[];
  priceRange: { min: number; max: number | null };
  condition: string[];
  status: string[];
  keyword: string;
  sort: 'ending-soon' | 'newest' | 'price-low' | 'price-high' | 'popular';
};

type FilterStoreState = {
  filters: AuctionFilter;
};

type FilterStoreActions = {
  setFilter: <K extends keyof AuctionFilter>(
    key: K,
    value: AuctionFilter[K],
  ) => void;
  resetFilter: () => void;
};

type FilterStore = FilterStoreState & FilterStoreActions;

export const defaultFilter: AuctionFilter = {
  categories: [],
  priceRange: { min: 0, max: null },
  condition: [],
  status: [],
  keyword: '',
  sort: 'ending-soon',
};

export const useAuctionFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filters: defaultFilter,
      setFilter: (key, value) =>
        set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),
      resetFilter: () =>
        set(() => ({
          filters: defaultFilter,
        })),
    }),
    {
      name: 'auction-filters',
      storage: createJSONStorage(() => persistentStorage),
      partialize: (state) => ({
        filters: state.filters, // filters만 저장
      }),
    },
  ),
);
