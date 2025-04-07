'use client';

import React, { useRef, useState, ChangeEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { User, Calendar } from 'lucide-react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Label } from '@/shared/ui/Label';
import { InputComponent } from '@/shared/ui/Input/InputComponent';

interface Props {
  profile: {
    nickname: string;
    bio: string;
    birthdate: string;
    image: string | null;
  };
  onSave: (data: Props['profile']) => void;
  onCancel: () => void;
}

export function ProfileEditForm({ profile, onSave, onCancel }: Props) {
  const methods = useForm({
    defaultValues: profile,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(profile.image);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = methods.handleSubmit((data) => {
    onSave({ ...data, image: preview });
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        <Card className="md:col-span-1">
          <CardContent className="pt-6 flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="relative h-32 w-32 overflow-hidden rounded-full bg-blue-100">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Preview"
                    className="object-cover"
                    fill
                  />
                ) : (
                  <User className="h-full w-full p-6 text-blue-500" />
                )}
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 h-8 bg-black text-white rounded-full px-2 text-sm"
              >
                변경
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>개인 정보 수정</CardTitle>
            <CardDescription>변경할 정보를 입력하세요.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nickname" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                닉네임
              </Label>
              <InputComponent
                name="nickname"
                type="text"
                placeholder="닉네임을 입력하세요"
                required
                validation={{ maxLength: 20 }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                출생일
              </Label>
              <InputComponent name="birthdate" type="date" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="flex items-center gap-2">
                소개
              </Label>
              <InputComponent
                name="bio"
                type="textarea"
                placeholder="자기소개를 입력해주세요"
              />
            </div>

            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={onCancel}>
                취소
              </Button>
              <Button type="submit">저장하기</Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
