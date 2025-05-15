import { useQuery } from '@tanstack/react-query';

import { getChatList } from '../apis/getChatList';

export const useChatList = () => {
  return useQuery({
    queryKey: ['chatList'],
    queryFn: getChatList,
    select: (data) => data.data,
  });
};
