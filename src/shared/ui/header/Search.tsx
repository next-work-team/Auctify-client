'use client';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import { InputComponent } from '../Input/InputComponent';

export function Search() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div>
        <div>
          <InputComponent
            name="search"
            type="search"
            placeholder="검색어 입력"
          />
        </div>
      </div>
    </FormProvider>
  );
}
