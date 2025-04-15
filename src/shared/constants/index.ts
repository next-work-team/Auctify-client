export const ROUTES = {
  HOME: '/',
  MYPAGE: {
    ROOT: '/my',
    BID_HISTORY: '/my/bid-history',
  },
  AUCTIONS: {
    ROOT: '/auctions',
    DETAIL: (id: string) => `/auctions/${id}`,
    REGISTER: '/auctions/register',
    EDIT: (id: string) => `/auctions/${id}`,
    WIN: (id: string) => `/auctions/${id}`,
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
