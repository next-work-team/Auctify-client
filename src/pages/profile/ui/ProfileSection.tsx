'use client';

import React from 'react';
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit } from 'lucide-react';

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
  const [isEditing, setIsEditing] = useState(false);
  const [preImage, setPrevImage] = useState(false);
  const [saveImage, setSaveImage] = useState(false);
  const [profile, setProfile] = useState({
    name: '김민수',
    email: '@google.com',
    phone: '010-1234-5678',
    address: '서울시~',
    bio: '옷, 시계 팝니다~',
    joinDate: '2025년 3월 17일',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile changes logic would go here
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">프로필</h2>
        <Button
          variant="outline"
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2"
        >
          <Edit className="h-4 w-4" />
          {isEditing ? '취소' : '프로필 수정'}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-blue-100">
                  <User className="h-full w-full p-6 text-blue-500" />
                </div>
                {isEditing && (
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full"
                  >
                    변경
                  </Button>
                )}
              </div>
              <h3 className="text-xl font-medium">{profile.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                가입일: {profile.joinDate}
              </div>
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
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> 닉네임
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {profile.name}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {/* 수정가능?? */}
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> 이메일
                </Label>
                <div className="rounded-md border border-input px-3 py-2 text-muted-foreground">
                  {profile.email}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> 전화번호
                </Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {profile.phone}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> 주소
                </Label>
                {isEditing ? (
                  <Input
                    id="address"
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {profile.address}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio" className="flex items-center gap-2">
                  소개
                </Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    rows={4}
                  />
                ) : (
                  <div className="rounded-md border border-input px-3 py-2">
                    {profile.bio}
                  </div>
                )}
              </div>

              {isEditing && (
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
