'use client';

import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { User, Calendar } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/shared/ui/Card';
import { Label } from '@/shared/ui/Label';
import { useAuthStore } from '@/app/store/useAuthStore';

import fetchTemperature from '../apis/fetchTemperatureApi';

interface Props {
  profile: {
    nickname: string;
    bio: string;
    birthdate: string;
    image: string | null;
  };
}

export function ProfileView({ profile }: Props) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!;
  const { user } = useAuthStore();

  const {
    data: temperature,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['userTemperature', user?.userId], // 의존성
    queryFn: () => fetchTemperature(apiUrl),
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="md:col-span-1">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-32 w-32 overflow-hidden rounded-full bg-blue-100">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              ) : (
                <User className="h-full w-full p-6 text-blue-500" />
              )}
            </div>
            <h3 className="text-xl font-medium">{profile.nickname}</h3>
            {isLoading ? (
              <span className="text-sm text-muted-foreground">
                온도 불러오는 중...
              </span>
            ) : isError || temperature === null ? (
              <span className="text-sm text-red-500">온도 정보 없음</span>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground">
                  사용자 온도
                </span>
                <div className="text-2xl font-semibold">
                  {temperature?.toFixed(1)}°C
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>개인 정보</CardTitle>
          <CardDescription>프로필 정보를 확인할 수 있습니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <User className="h-4 w-4" />
              닉네임
            </Label>
            <div className="rounded-md border border-input px-3 py-2">
              {profile.nickname}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              출생일
            </Label>
            <div className="rounded-md border border-input px-3 py-2">
              {profile.birthdate}
            </div>
          </div>

          <div className="space-y-2">
            <Label>소개</Label>
            <div className="rounded-md border border-input px-3 py-2">
              {profile.bio}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
