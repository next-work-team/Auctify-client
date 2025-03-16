'use client';
import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { Search } from 'lucide-react';

import { Input as ShadInput } from '@/shared/ui/input';

interface IdInputProps {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
  validation?: RegisterOptions;
  required?: boolean;
}

export function InputComponent({
  name,
  type,
  placeholder,
  validation,
  required,
}: IdInputProps) {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="w-full flex items-center">
      {type === 'search' && (
        <Search className="text-gray-400 mr-2 absolute ml-1" />
      )}
      <ShadInput
        type={type}
        placeholder={placeholder}
        required={required}
        {...register(name, { ...validation, required })} // 이름을 중복해서 전달하지 않고 register로 처리
        className={`w-full h-10 px-4 placeholder-gray-400 border border-gray-300 focus:!ring-0 focus:!outline-none ${type === 'search' ? 'pl-8' : ''}`}
      />

      {isSubmitted && errors[name] && (
        <div className="text-red-500 text-[10px] mt-1">{errorMessage}</div>
      )}
    </div>
  );
}
