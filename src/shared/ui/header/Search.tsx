'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { Input } from '../Input/Input';

export function Search() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div>
        <div>
          <Input name="search" type="text" placeholder="검색어 입력" />
        </div>
      </div>
    </FormProvider>
  );
}
