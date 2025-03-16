export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthStore {
  isLogin: boolean; // 로그인 상태
  user: User | null;

  login: (userData: User) => void;
  logout: () => void;
}
