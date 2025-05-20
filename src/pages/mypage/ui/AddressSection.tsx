'use client';

import type React from 'react';
import { useState } from 'react';
import { MapPin, Plus, Edit, Trash2 } from 'lucide-react';
import { useForm, FormProvider } from 'react-hook-form'; // react-hook-form import 추가

import { Button } from '@/shared/ui/Button';
import { Card, CardContent } from '@/shared/ui/Card';
import { Label } from '@/shared/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { AddressModal } from '@/pages/mypage/ui/AddressModal';

type Address = {
  addressId: string;
  addr: string;
  addrDetail: string;
  zipCode: string;
  defaultAddress: boolean;
};

export function AddressSection() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newAddress, setNewAddress] = useState<{
    addr: string;
    addrDetail: string;
    zipCode: string;
  }>({
    addr: '',
    addrDetail: '',
    zipCode: '',
  });

  const methods = useForm({
    defaultValues: {
      addr: '',
      addrDetail: '',
      zipCode: '',
    },
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAddress = () => {
    const newId = Math.random().toString(36).substring(2, 9);
    const isDefault = addresses.length === 0;
    setAddresses((prev) => [
      ...prev,
      { ...newAddress, addressId: newId, defaultAddress: isDefault },
    ]);
    setNewAddress({ addr: '', addrDetail: '', zipCode: '' });
    setIsAddDialogOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-700">배송 주소 관리</h2>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setIsAddDialogOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />새 주소 추가
          </Button>
        </div>

        <AddressModal
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          newAddress={newAddress}
          onChange={handleAddressChange}
          onAdd={handleAddAddress}
        />

        {addresses.length === 0 ? (
          <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <MapPin className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="text-lg font-medium">등록된 배송지가 없습니다</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              새로운 배송지를 추가해보세요!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <RadioGroup
              defaultValue={addresses.find((a) => a.defaultAddress)?.addressId}
            >
              {addresses.map((address) => (
                <Card
                  key={address.addressId}
                  className={address.defaultAddress ? 'border-blue-300' : ''}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <RadioGroupItem
                          value={address.addressId}
                          id={`address-${address.addressId}`}
                          checked={address.defaultAddress}
                          onClick={() =>
                            setAddresses((prev) =>
                              prev.map((a) => ({
                                ...a,
                                defaultAddress:
                                  a.addressId === address.addressId,
                              })),
                            )
                          }
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <Label
                              htmlFor={`address-${address.addressId}`}
                              className="text-base font-medium"
                            >
                              배송지
                            </Label>
                            {address.defaultAddress && (
                              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                                기본 배송지
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            ({address.zipCode}) {address.addr},{' '}
                            {address.addrDetail}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => {
                            // 주소 수정 로직
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:text-red-700"
                          onClick={() => {
                            setAddresses((prev) =>
                              prev.filter(
                                (a) => a.addressId !== address.addressId,
                              ),
                            );
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>
          </div>
        )}
      </div>
    </FormProvider>
  );
}
