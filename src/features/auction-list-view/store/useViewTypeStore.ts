import { create } from 'zustand';

export type ViewType = 'grid' | 'list';

interface ViewTypeStore {
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
}

export const useViewTypeStore = create<ViewTypeStore>((set) => ({
  viewType: 'grid',
  setViewType: (type) => set({ viewType: type }),
}));
