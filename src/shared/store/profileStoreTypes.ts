export interface ProfileState {
  mypageData: {
    editProfile: boolean;
    nickName: string;
    bio: string;
    birthdate: string;
    profileImageStr: string | null;
    address: string;
  };
  clickEditProfile: () => void;
  setProfileData: (data: Partial<ProfileState['mypageData']>) => void;
}
