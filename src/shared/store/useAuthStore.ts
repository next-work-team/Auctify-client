import { create } from 'zustand';

import { AuthStore } from '@/shared/store/authStoreTypes';

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUserState: (user) => set({ user, isAuthenticated: true }),

  resetAuthState: () => set({ user: null, isAuthenticated: false }),
}));
