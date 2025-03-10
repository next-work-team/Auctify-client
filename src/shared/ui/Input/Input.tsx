'use client';
import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

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
      <input
        className="w-full h-10 px-4 text-black text-[15px] border-none outline-none rounded-md placeholder-gray-400"
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {isSubmitted && errors[name] && (
        <div className="text-red-500 text-[10px] mt-1">{errorMessage}</div>
      )}
    </div>
  );
}
