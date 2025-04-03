'use client';

import React, { useRef, useState, ChangeEvent, useEffect } from 'react';
import { User, Calendar, Edit } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { FormProvider, useForm } from 'react-hook-form';

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
interface FormValues {
  nickname: string;
  bio: string;
  birthdate: string;
}

export function ProfileSection() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const {
    mypageData: { editProfile, nickName, bio, birthdate, profileImageStr },
    clickEditProfile,
    setProfileData,
  } = useMypagUpdateStore();
  const [preview, setPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    criteriaMode: 'all',
  });

  //프로필 가져오기
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user`);
        const data = response.data;
        setProfileData({
          profileImageStr: data.profileImageUrl,
          nickName: data.nickname,
          bio: data.bio,
          birthdate: data.birthdate,
        });
      } catch (error) {
        console.error('프로필 정보를 불러오지 못했습니다:', error);
      }
    };

    fetchProfileData();
  }, [apiUrl, setProfileData]);

  //프로필 저장
  const handleSaveProfile = async () => {
    try {
      //현재 상태 데이터 가져오기
      const { mypageData } = useMypagUpdateStore.getState();
      //서버로 보낼 데이터
      const payload = {
        profileImageStr: mypageData.profileImageStr,
        nickName: mypageData.nickName,
        bio: mypageData.bio,
        birthdate: mypageData.birthdate,
      };

      await axios.put(`${apiUrl}/user/`, payload);
      clickEditProfile();
      console.log('프로필 수정 성공');
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          profileImageStr: reader.result as string, // 프로필 이미지 업데이트
        });
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBirthdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // 숫자만 남김
    if (value.length > 8) value = value.slice(0, 8); // 8자리 제한

    if (value.length >= 4 && value.length < 6) {
      value = value.slice(0, 4) + '-' + value.slice(4);
    } else if (value.length >= 6) {
      value =
        value.slice(0, 4) + '-' + value.slice(4, 6) + '-' + value.slice(6);
    }

    setProfileData({ birthdate: value }); // 스토어 상태 업데이트
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">프로필</h2>
        <Button
          variant="outline"
          onClick={clickEditProfile}
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
                  {preview || profileImageStr ? (
                    <Image
                      src={preview || profileImageStr || ''}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                      width={128}
                      height={128}
                    />
                  ) : (
                    <User className="h-full w-full p-6 text-blue-500" />
                  )}
                </div>
                {editProfile && (
                  <FormProvider {...methods}>
                    <button
                      onClick={handleButtonClick}
                      className="absolute bottom-0 right-0 flex items-center justify-center p-[10px] h-8 bg-black text-white rounded-full cursor-pointer"
                    >
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      변경
                    </button>
                  </FormProvider>
                )}
              </div>
              <h3 className="text-xl font-medium">{nickName}</h3>
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
            <form className="space-y-4">
              {editProfile ? (
                <>
                  <div className="space-y-2">
                    <Label
                      htmlFor="nickName"
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" /> 닉네임
                    </Label>
                    <Input id="nickName" name="nickName" />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="birthdate"
                      className="flex items-center gap-2"
                    >
                      <Calendar className="h-4 w-4" /> 출생일
                    </Label>
                    <Input
                      id="birthdate"
                      name="birthdate"
                      onChange={handleBirthdateChange}
                      placeholder="YYYY-MM-DD"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="flex items-center gap-2">
                      소개
                    </Label>
                    <Textarea id="bio" name="bio" rows={4} />
                  </div>

                  <Button onClick={handleSaveProfile} className="w-full">
                    저장하기
                  </Button>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <User className="h-4 w-4" /> 닉네임
                    </Label>
                    <div className="rounded-md border border-input px-3 py-2">
                      {nickName}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> 출생일
                    </Label>
                    <div className="rounded-md border border-input px-3 py-2">
                      {birthdate}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">소개</Label>
                    <div className="rounded-md border border-input px-3 py-2">
                      {bio}
                    </div>
                  </div>
                </>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
