export interface User {
  userId: string;
  nickname: string;
  profileImage: string;
}

export interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  setUserState: (user: User) => void; // 유저 정보 업데이트
  resetAuthState: () => void; // 인증 상태 초기화 (로그아웃)
}
