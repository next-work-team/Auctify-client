export const ROUTES = {
  HOME: '/',
  MYPAGE: {
    ROOT: '/my',
    BID_HISTORY: '/my/bid-history',
  },
  AUCTIONS: {
    ROOT: '/auctions',
    DETAIL: (id: number) => `/auctions/${id}`,
    REGISTER: '/auctions/register',
    EDIT: (id: number) => `/auctions/${id}`,
    WIN: (id: number) => `/auctions/${id}`,
  },
  SIGN_IN: 'sign-in',
  PROFILE: {
    ROOT: (userId: string) => `/profile/${userId}`,
  },
  CHAT: {
    ROOT: '/chat',
    DETAIL: (chatId: string) => `/chat/${chatId}`,
  },
};
