export const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export const ROUTES = {
  HOME: '/',
  MYPAGE: {
    ROOT: '/mypage',
    BID_HISTORY: '/mypage/bid-history',
  },
  AUCTIONS: {
    ROOT: '/auctions',
    DETAIL: (id: number) => `/auctions/${id}`,
    REGISTER: '/auctions/register',
    EDIT: (id: number) => `/auctions/${id}`,
    WIN: (id: number) => `/auctions/${id}`,
  },
  SIGN_IN: '/sign-in',
  PROFILE: {
    ROOT: (userId: string) => `/profile/${userId}`,
  },
  CHAT: {
    ROOT: '/chat',
    DETAIL: (chatId: string) => `/chat/${chatId}`,
  },
};
