import { useFormContext } from 'react-hook-form';

import { TabsContent } from '@/shared/ui';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';
import { Textarea } from '@/shared/ui/textarea';

import BasicInfoFormImageUpload from './BasicInfoFormImageUpload';

export default function BasicInfoStep() {
  const { control, trigger } = useFormContext();

  return (
    <TabsContent value="basic" className="space-y-6 mt-6">
      <div className="space-y-4">
        <FormField
          control={control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>제목</FormLabel>
                <FormControl>
                  <Input
                    placeholder="상품을 잘 나타내는 제목을 입력하세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>상세 설명</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="상품의 특징, 사용감, 구매 시기 등 상세한 정보를 제공하세요."
                  className="min-h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>카테고리</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    console.log(value);
                  }}
                  onOpenChange={(isOpen) => {
                    if (!isOpen) {
                      trigger('category'); // 드롭다운이 닫힐 때 유효성 검사 실행
                    }
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리 선택" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="electronics">전자제품</SelectItem>
                    <SelectItem value="fashion">패션</SelectItem>
                    <SelectItem value="collectibles">수집품</SelectItem>
                    <SelectItem value="art">예술/미술</SelectItem>
                    <SelectItem value="jewelry">쥬얼리</SelectItem>
                    <SelectItem value="home">홈/리빙</SelectItem>
                    <SelectItem value="sports">스포츠/레저</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="condition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>상품 상태</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    trigger('condition');
                  }}
                  onOpenChange={(isOpen) => {
                    if (!isOpen) {
                      trigger('condition'); // 드롭다운이 닫힐 때 유효성 검사 실행
                    }
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="상태 선택" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="new">새 상품</SelectItem>
                    <SelectItem value="like-new">거의 새 상품</SelectItem>
                    <SelectItem value="used-good">중고 - 상태 좋음</SelectItem>
                    <SelectItem value="used-fair">중고 - 상태 보통</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <BasicInfoFormImageUpload />
      </div>
    </TabsContent>
  );
}
