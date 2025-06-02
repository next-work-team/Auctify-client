'use client';
import React from 'react';

import { Button } from '@/shared/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';
import { Label } from '@/shared/ui/Label';
import { Input } from '@/shared/ui/input';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  newAddress: {
    addr: string;
    addrDetail: string;
    zipCode: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};
declare global {
  interface Window {
    daum: {
      Postcode: new (options: {
        oncomplete: (data: DaumPostcodeData) => void;
      }) => {
        open: () => void;
      };
    };
  }
}

type DaumPostcodeData = {
  address: string;
  zonecode: string;
  addressType: string;
  apartment: string;
  bname: string;
  buildingName: string;
  roadAddress: string;
  jibunAddress: string;
};

export function AddressModal({
  open,
  onOpenChange,
  newAddress,
  onChange,
  onAdd,
}: Props) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const openDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data: DaumPostcodeData) {
        onChange({
          target: {
            name: 'addr',
            value: data.address,
          },
        } as React.ChangeEvent<HTMLInputElement>);

        onChange({
          target: {
            name: 'zipCode',
            value: data.zonecode,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      },
    }).open();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>새 배송지 추가</DialogTitle>
          <DialogDescription>
            새로운 배송지 정보를 입력해주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addr" className="text-right">
            주소
          </Label>
          <div className="col-span-3 flex gap-2">
            <Input
              id="addr"
              name="addr"
              value={newAddress.addr}
              onClick={openDaumPostcode}
              readOnly
            />
            <Button type="button" onClick={openDaumPostcode}>
              검색
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="addrDetail" className="text-right">
            상세주소
          </Label>
          <Input
            id="addrDetail"
            name="addrDetail"
            value={newAddress.addrDetail}
            onChange={onChange}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="zipCode" className="text-right">
            우편번호
          </Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={newAddress.zipCode}
            readOnly
            className="col-span-3"
          />
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            취소
          </Button>
          <Button onClick={onAdd}>추가하기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
