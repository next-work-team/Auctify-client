'use client';
import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'; // FormProvider 추가
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

import { InputComponent } from '@/shared/ui/Input/InputComponent';
import { Separator } from '@/shared/ui/separator';
import { Button } from '@/shared/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card';
import { Label } from '@/shared/ui/Label';

import KakaoLoginButton from './KakaoLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

interface FormData {
  email: string;
  password: string;
}

export default function SigninPage() {
  const methods = useForm<FormData>(); // FormData를 제네릭으로 전달
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // 폼 제출 시 처리할 로직
  };

  return (
    <>
      <h1 className="text-center text-head-01 text-grayscale-font mb-4">
        AUCTIFY에 오신 것을 환영해요!
      </h1>
      <p className="text-center text-head-16 text-grayscale-b0">
        빠르고 간편하게 경매를 등록하고 입찰하기
      </p>
      <p className="text-center text-head-16 text-grayscale-b0">
        AUCTIFY에서 경험해보세요
      </p>
      <div className="flex min-h-screen items-center justify-center  px-4 py-12">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-blue-700">
              로그인
            </CardTitle>
            <CardDescription className="text-center">
              계정에 로그인하여 서비스를 이용하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* FormProvider로 감싸기 */}
            <FormProvider {...methods}>
              <form
                className="space-y-4"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <InputComponent
                    name="email" // name 속성을 전달
                    type="email"
                    placeholder="name@example.com"
                    validation={{ required: '이메일은 필수입니다.' }}
                  />
                  {methods.formState.errors.email && (
                    <span className="text-red-500 text-sm">
                      {methods.formState.errors.email.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">비밀번호</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      비밀번호 찾기
                    </Link>
                  </div>
                  <InputComponent
                    name="password" // name 속성을 전달
                    type="password"
                    validation={{ required: '비밀번호는 필수입니다.' }}
                  />
                  {methods.formState.errors.password && (
                    <span className="text-red-500 text-sm">
                      {methods.formState.errors.password.message}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  로그인
                </Button>
              </form>
            </FormProvider>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">
                  또는
                </span>
              </div>
            </div>

            <div className="grid gap-2">
              <KakaoLoginButton />
              <GoogleLoginButton />
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Mail className="mr-2 h-4 w-4" />
                이메일로 회원가입
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              계정이 없으신가요?{' '}
              <Link
                href="/signup"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                회원가입 <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
