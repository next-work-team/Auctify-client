import { create } from 'zustand';

import { ProfileState } from './profileStoreTypes';

export const useMypagUpdateStore = create<ProfileState>((set) => ({
  mypageData: {
    editProfile: false,
    nickName: '',
    bio: '',
    address: '',
    birthdate: '',
    profileImageStr: '/icons/User.svg',
  },
  clickEditProfile: () =>
    set((state) => ({
      mypageData: {
        ...state.mypageData,
        editProfile: !state.mypageData.editProfile,
      },
    })),
  setProfileData: (newState) =>
    set((state) => ({
      mypageData: { ...state.mypageData, ...newState },
    })),
}));
