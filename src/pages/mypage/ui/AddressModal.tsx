// 'use client';
// import React from 'react';

// import { Button } from '@/shared/ui/Button';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from '@/shared/ui/dialog';
// import { InputComponent } from '@/shared/ui/Input/InputComponent';
// import { Label } from '@/shared/ui/Label';

// type Props = {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   newAddress: {
//     addr: string;
//     addrDetail: string;
//     zipCode: string;
//   };
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onAdd: () => void;
// };

// export function AddressModal({
//   open,
//   onOpenChange,
//   newAddress,
//   onChange,
//   onAdd,
// }: Props) {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <DialogTitle>새 배송지 추가</DialogTitle>
//           <DialogDescription>
//             새로운 배송지 정보를 입력해주세요.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           {[
//             { id: 'addr', label: '주소', placeholder: '예: 서울시' },
//             { id: 'addrDetail', label: '상세주소', placeholder: '예: 101동' },
//             { id: 'zipCode', label: '우편번호', placeholder: '예: 11111' },
//           ].map(({ id, label, placeholder }) => (
//             <div key={id} className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor={id} className="text-right">
//                 {label}
//               </Label>
//               <InputComponent
//                 id={id}
//                 name={id}
//                 value={newAddress[id as keyof typeof newAddress]}
//                 onChange={onChange}
//                 placeholder={placeholder}
//                 className="col-span-3"
//               />
//             </div>
//           ))}
//         </div>
//         <DialogFooter>
//           <Button variant="outline" onClick={() => onOpenChange(false)}>
//             취소
//           </Button>
//           <Button onClick={onAdd}>추가하기</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
