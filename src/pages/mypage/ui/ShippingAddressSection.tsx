// 'use client';

// import { useState } from 'react';
// import { MapPin, Plus, Edit, Trash2, Check } from 'lucide-react';

// import { Button } from '@/shared/ui/Button';
// import { Input } from '@/shared/ui/input';
// import { Label } from '@/shared/ui/Label';
// import { Checkbox } from '@/shared/ui/Checkbox';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/shared/ui/Card';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/shared/ui/dialog';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/shared/ui/alert-dialog';

// interface AddressType {
//   id: string;
//   name: string;
//   recipient: string;
//   postalCode: string;
//   address1: string;
//   address2: string;
//   phone: string;
//   isDefault: boolean;
// }

// export function ShippingAddressSection() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-blue-700">배송지 관리</h2>
//         <div className="flex items-center gap-2">
//           <MapPin className="h-5 w-5 text-blue-700" />
//           <span className="text-sm text-muted-foreground">
//             총 {addresses.length}개의 배송지
//           </span>
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-blue-600 hover:bg-blue-700">
//               <Plus className="mr-2 h-4 w-4" /> 새 배송지 추가
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[500px]">
//             <DialogHeader>
//               <DialogTitle>새 배송지 추가</DialogTitle>
//               <DialogDescription>
//                 새로운 배송지 정보를 입력해주세요.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="name" className="text-right">
//                   배송지명
//                 </Label>
//                 <Input
//                   id="name"
//                   value={newAddress.name}
//                   onChange={(e) =>
//                     setNewAddress({ ...newAddress, name: e.target.value })
//                   }
//                   className="col-span-3"
//                   placeholder="예: 집, 회사"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="recipient" className="text-right">
//                   수령인
//                 </Label>
//                 <Input
//                   id="recipient"
//                   value={newAddress.recipient}
//                   onChange={(e) =>
//                     setNewAddress({ ...newAddress, recipient: e.target.value })
//                   }
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="postalCode" className="text-right">
//                   우편번호
//                 </Label>
//                 <div className="col-span-3 flex gap-2">
//                   <Input
//                     id="postalCode"
//                     value={newAddress.postalCode}
//                     onChange={(e) =>
//                       setNewAddress({
//                         ...newAddress,
//                         postalCode: e.target.value,
//                       })
//                     }
//                     className="flex-1"
//                   />
//                   <Button variant="outline" type="button">
//                     검색
//                   </Button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="address2" className="text-right">
//                   상세주소
//                 </Label>
//                 <Input
//                   id="address2"
//                   value={newAddress.address2}
//                   onChange={(e) =>
//                     setNewAddress({ ...newAddress, address2: e.target.value })
//                   }
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="phone" className="text-right">
//                   연락처
//                 </Label>
//                 <Input
//                   id="phone"
//                   value={newAddress.phone}
//                   onChange={(e) =>
//                     setNewAddress({ ...newAddress, phone: e.target.value })
//                   }
//                   className="col-span-3"
//                   placeholder="010-0000-0000"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <div className="col-span-4 flex items-center space-x-2">
//                   <Checkbox
//                     id="isDefault"
//                     checked={newAddress.isDefault}
//                     onCheckedChange={(checked) =>
//                       setNewAddress({
//                         ...newAddress,
//                         isDefault: checked as boolean,
//                       })
//                     }
//                   />
//                   <label
//                     htmlFor="isDefault"
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     기본 배송지로 설정
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button
//                 variant="outline"
//                 onClick={() => setIsAddDialogOpen(false)}
//               >
//                 취소
//               </Button>
//               <Button onClick={handleAddAddress}>저장</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {addresses.length === 0 ? (
//         <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
//           <MapPin className="mb-4 h-12 w-12 text-muted-foreground" />
//           <h3 className="text-lg font-medium">등록된 배송지가 없습니다</h3>
//           <p className="mt-2 text-sm text-muted-foreground">
//             새로운 배송지를 추가해보세요!
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           {addresses.map((address) => (
//             <Card
//               key={address.id}
//               className={address.isDefault ? 'border-blue-500' : ''}
//             >
//               <CardHeader className="pb-2">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <CardTitle className="text-lg">{address.name}</CardTitle>
//                     {address.isDefault && (
//                       <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
//                         기본 배송지
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex gap-1">
//                     <Dialog
//                       open={
//                         isEditDialogOpen && editingAddress?.id === address.id
//                       }
//                       onOpenChange={(open) => {
//                         setIsEditDialogOpen(open);
//                         if (!open) setEditingAddress(null);
//                       }}
//                     >
//                       <DialogTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="h-8 w-8"
//                           onClick={() => setEditingAddress(address)}
//                         >
//                           <Edit className="h-4 w-4" />
//                           <span className="sr-only">Edit</span>
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="sm:max-w-[500px]">
//                         <DialogHeader>
//                           <DialogTitle>배송지 수정</DialogTitle>
//                           <DialogDescription>
//                             배송지 정보를 수정해주세요.
//                           </DialogDescription>
//                         </DialogHeader>
//                         {editingAddress && (
//                           <div className="grid gap-4 py-4">
//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <Label htmlFor="edit-name" className="text-right">
//                                 배송지명
//                               </Label>
//                               <Input
//                                 id="edit-name"
//                                 value={editingAddress.name}
//                                 onChange={(e) =>
//                                   setEditingAddress({
//                                     ...editingAddress,
//                                     name: e.target.value,
//                                   })
//                                 }
//                                 className="col-span-3"
//                               />
//                             </div>
//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <Label
//                                 htmlFor="edit-recipient"
//                                 className="text-right"
//                               >
//                                 수령인
//                               </Label>
//                               <Input
//                                 id="edit-recipient"
//                                 value={editingAddress.recipient}
//                                 onChange={(e) =>
//                                   setEditingAddress({
//                                     ...editingAddress,
//                                     recipient: e.target.value,
//                                   })
//                                 }
//                                 className="col-span-3"
//                               />
//                             </div>
//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <Label
//                                 htmlFor="edit-postalCode"
//                                 className="text-right"
//                               >
//                                 우편번호
//                               </Label>
//                               <div className="col-span-3 flex gap-2">
//                                 <Input
//                                   id="edit-postalCode"
//                                   value={editingAddress.postalCode}
//                                   onChange={(e) =>
//                                     setEditingAddress({
//                                       ...editingAddress,
//                                       postalCode: e.target.value,
//                                     })
//                                   }
//                                   className="flex-1"
//                                 />
//                                 <Button variant="outline" type="button">
//                                   검색
//                                 </Button>
//                               </div>
//                             </div>

//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <Label
//                                 htmlFor="edit-address2"
//                                 className="text-right"
//                               >
//                                 상세주소
//                               </Label>
//                               <Input
//                                 id="edit-address2"
//                                 value={editingAddress.address2}
//                                 onChange={(e) =>
//                                   setEditingAddress({
//                                     ...editingAddress,
//                                     address2: e.target.value,
//                                   })
//                                 }
//                                 className="col-span-3"
//                               />
//                             </div>
//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <Label
//                                 htmlFor="edit-phone"
//                                 className="text-right"
//                               >
//                                 연락처
//                               </Label>
//                               <Input
//                                 id="edit-phone"
//                                 value={editingAddress.phone}
//                                 onChange={(e) =>
//                                   setEditingAddress({
//                                     ...editingAddress,
//                                     phone: e.target.value,
//                                   })
//                                 }
//                                 className="col-span-3"
//                               />
//                             </div>
//                             <div className="grid grid-cols-4 items-center gap-4">
//                               <div className="col-span-4 flex items-center space-x-2">
//                                 <Checkbox
//                                   id="edit-isDefault"
//                                   checked={editingAddress.isDefault}
//                                   onCheckedChange={(checked) =>
//                                     setEditingAddress({
//                                       ...editingAddress,
//                                       isDefault: checked as boolean,
//                                     })
//                                   }
//                                   disabled={editingAddress.isDefault}
//                                 />
//                                 <label
//                                   htmlFor="edit-isDefault"
//                                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                 >
//                                   기본 배송지로 설정
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                         <DialogFooter>
//                           <Button
//                             variant="outline"
//                             onClick={() => {
//                               setIsEditDialogOpen(false);
//                               setEditingAddress(null);
//                             }}
//                           >
//                             취소
//                           </Button>
//                           <Button onClick={handleEditAddress}>저장</Button>
//                         </DialogFooter>
//                       </DialogContent>
//                     </Dialog>

//                     <AlertDialog>
//                       <AlertDialogTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="h-8 w-8 text-red-500 hover:text-red-700"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                           <span className="sr-only">Delete</span>
//                         </Button>
//                       </AlertDialogTrigger>
//                       <AlertDialogContent>
//                         <AlertDialogHeader>
//                           <AlertDialogTitle>배송지 삭제</AlertDialogTitle>
//                           <AlertDialogDescription>
//                             정말로 이 배송지를 삭제하시겠습니까?
//                           </AlertDialogDescription>
//                         </AlertDialogHeader>
//                         <AlertDialogFooter>
//                           <AlertDialogCancel>취소</AlertDialogCancel>
//                           <AlertDialogAction
//                             className="bg-red-500 hover:bg-red-600"
//                             onClick={() => handleDeleteAddress(address.id)}
//                           >
//                             삭제
//                           </AlertDialogAction>
//                         </AlertDialogFooter>
//                       </AlertDialogContent>
//                     </AlertDialog>
//                   </div>
//                 </div>
//                 <CardDescription>
//                   {address.recipient} · {address.phone}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="pb-2">
//                 <p className="text-sm">
//                   ({address.postalCode}) {address.address1}, {address.address2}
//                 </p>
//               </CardContent>
//               {!address.isDefault && (
//                 <CardFooter>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="w-full"
//                     onClick={() => handleSetDefault(address.id)}
//                   >
//                     <Check className="mr-2 h-4 w-4" />
//                     기본 배송지로 설정
//                   </Button>
//                 </CardFooter>
//               )}
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
