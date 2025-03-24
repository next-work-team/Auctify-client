'use client';

import React, { useState } from 'react';
import { User, Calendar, Edit } from 'lucide-react';
import Image from 'next/image';

import { useMypagUpdateStore } from '@/shared/store/profileStore';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { Label } from '@/shared/ui/Label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card';

export function ProfileSection() {
  const { mypageData, clickEditProfile, setProfileData } =
    useMypagUpdateStore();
  const { editProfile, nickName, bio, profileImageStr, birthdate } = mypageData;

  // 임시 데이터 상태 관리
  const [tempProfile, setTempProfile] = useState({
    nickName,
    bio,
    profileImageStr,
    birthdate,
  });

  // 입력값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTempProfile((prev) => ({ ...prev, [name]: value }));
  };

  // 프로필 수정 완료
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData(tempProfile); // 한 번만 업데이트
    clickEditProfile();
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfile((prev) => ({
          ...prev,
          profileImageStr: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 수정 버튼 클릭 시 상태 변경 (취소 시 원래 값 복원)
  const handleEditClick = () => {
    if (editProfile) {
      setTempProfile({ nickName, bio, profileImageStr, birthdate }); // 취소 시 원래 값으로 복원
    }
    clickEditProfile();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">프로필</h2>
        <Button
          variant="outline"
          onClick={handleEditClick}
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          {editProfile ? '취소' : '프로필 수정'}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-blue-100">
                  {tempProfile.profileImageStr ? (
                    <Image
                      src={tempProfile.profileImageStr}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-full w-full p-6 text-blue-500" />
                  )}
                </div>
                {editProfile && (
                  <label className="absolute bottom-0 right-0 flex items-center justify-center p-[10px] h-8 bg-black text-white rounded-full cursor-pointer">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    변경
                  </label>
                )}
              </div>
              <h3 className="text-xl font-medium">{tempProfile.nickName}</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>개인 정보</CardTitle>
            <CardDescription>
              프로필 정보를 확인하고 수정할 수 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nickName" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> 닉네임
                </Label>
                {editProfile ? (
                  <Input
                    id="nickName"
                    name="nickName"
                    value={tempProfile.nickName}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {tempProfile.nickName}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthdate" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> 출생일
                </Label>
                {editProfile ? (
                  <Input
                    id="birthdate"
                    name="birthdate"
                    value={tempProfile.birthdate}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {tempProfile.birthdate}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="flex items-center gap-2">
                  소개
                </Label>
                {editProfile ? (
                  <Textarea
                    id="bio"
                    name="bio"
                    value={tempProfile.bio}
                    onChange={handleChange}
                    rows={4}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {tempProfile.bio}
                  </div>
                )}
              </div>

              {editProfile && (
                <Button type="submit" className="w-full">
                  저장하기
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
