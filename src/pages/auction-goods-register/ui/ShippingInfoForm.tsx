import { useFormContext } from 'react-hook-form';

import { TabsContent } from '@/shared/ui';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';

export default function ShippingInfoForm() {
  const { control } = useFormContext();

  return (
    <TabsContent value="shipping" className="space-y-6 mt-6">
      <div className="space-y-4">
        <FormField
          control={control}
          name="shippingMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>배송 방법</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="parcel" />
                    </FormControl>
                    <FormLabel className="font-normal">택배</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="direct" />
                    </FormControl>
                    <FormLabel className="font-normal">직거래</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="both" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      택배 및 직거래
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="shippingFee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>배송비 (원)</FormLabel>
              <FormControl>
                <Input type="number" min={0} {...field} />
              </FormControl>
              <FormDescription>
                배송비를 입력하세요. 무료 배송인 경우 0을 입력하세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="returnPolicy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>반품 정책</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="반품 정책 선택" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no-returns">반품 불가</SelectItem>
                  <SelectItem value="7days">
                    7일 이내 반품 가능 (구매자 부담)
                  </SelectItem>
                  <SelectItem value="7days-seller">
                    7일 이내 반품 가능 (판매자 부담)
                  </SelectItem>
                  <SelectItem value="14days">
                    14일 이내 반품 가능 (구매자 부담)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>상품의 반품 정책을 선택하세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </TabsContent>
  );
}
