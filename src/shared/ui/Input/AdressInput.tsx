'use client';

import React from 'react';

import { Input } from '@/shared/ui/input';

interface AddressInputProps {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function AdressInput({
  id,
  name,
  value,
  placeholder,
  onChange,
  className,
}: AddressInputProps) {
  return (
    <Input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}
