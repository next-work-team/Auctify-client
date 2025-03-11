'use client';
import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

import { Input as ShadInput } from '@/shared/ui/input';
interface IdInputProps {
  name: string;
  type: string;
  placeholder?: string;
  validation?: RegisterOptions;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, type, placeholder, validation }: IdInputProps) {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="w-full">
      <ShadInput
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full h-10 px-4 placeholder-gray-400 border border-gray-300 focus:!ring-0 focus:!outline-none"
      />
      {isSubmitted && errors[name] && (
        <div className="text-red-500 text-[10px] mt-1">{errorMessage}</div>
      )}
    </div>
  );
}
