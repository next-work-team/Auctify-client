import { create } from 'zustand';

import { AuthStore, User } from '@/shared/store/authStoreTypes';

export function useAuthStore() {
  return create<AuthStore>((set) => ({
    isLogin: false, // 로그인 상태
    user: null, // 사용자 정보

    // 로그인 함수
    login: (userData: User) => set({ isLogin: true, user: userData }),

    // 로그아웃 함수
    logout: () => set({ isLogin: false, user: null }),
  }));
}
