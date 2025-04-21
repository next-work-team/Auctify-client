'use client';
import React, { useEffect, useState } from 'react';
import { User, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/shared/ui/Card';
import { Label } from '@/shared/ui/Label';

export function UserPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const params = useParams();
  const userId = params?.userId as string | undefined;
  // const [profile, setProfile] = useState<{
  //   nickname: string;
  //   bio: string;
  //   birthdate: string;
  //   image: string | null;
  //   temperature: number | null;
  // }>({
  //   nickname: '테스트유저',
  //   bio: '안녕하세요! 저는 테스트 유저입니다.',
  //   birthdate: '1995-08-15',
  //   image: null,
  //   temperature: 36.5,
  // });
  const [profile, setProfile] = useState<{
    nickname: string;
    bio: string;
    birthdate: string;
    image: string | null;
    temperature: number | null;
  } | null>(null);

  useEffect(() => {
    if (!userId) return;
    const fetchProfile = async () => {
      try {
        const res = await fetch(`${apiUrl}/user/${userId}`);
        const data = await res.json();
        setProfile({
          nickname: data.data.nickName,
          bio: data.data.bio ?? '소개 없음',
          birthdate: data.data.birthdate,
          image: data.data.profileImage,
          temperature: data.data.mannerTemperature,
        });
      } catch (err) {
        console.error('프로필 불러오기 실패:', err);
      }
    };

    fetchProfile();
  }, [userId]);

  if (!profile) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        프로필 불러오는 중...
      </div>
    );
  }
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
            {profile.temperature !== null ? (
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground">
                  사용자 온도
                </span>
                <div className="text-2xl font-semibold">
                  {profile.temperature.toFixed(1)}°C
                </div>
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                온도 불러오는 중...
              </span>
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
          <ProfileInfo
            label="닉네임"
            icon={<User className="h-4 w-4" />}
            value={profile.nickname}
          />
          <ProfileInfo
            label="출생일"
            icon={<Calendar className="h-4 w-4" />}
            value={profile.birthdate}
          />
          <ProfileInfo label="소개" value={profile.bio} />
        </CardContent>
      </Card>
    </div>
  );
}

function ProfileInfo({
  label,
  icon,
  value,
}: {
  label: string;
  icon?: React.ReactNode;
  value: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        {icon}
        {label}
      </Label>
      <div className="rounded-md border border-input px-3 py-2">{value}</div>
    </div>
  );
}
