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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';
import { Switch } from '@/shared/ui/switch';

export default function PriceSettingForm() {
  const { control, watch, getValues } = useFormContext();

  return (
    <TabsContent value="pricing" className="space-y-6 mt-6">
      <div className="space-y-4">
        <FormField
          control={control}
          name="startingPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>시작 가격 (원)</FormLabel>
              <FormControl>
                <Input type="number" min={1000} {...field} />
              </FormControl>
              <FormDescription>
                경매 시작 가격을 설정하세요. 최소 1,000원 이상이어야 합니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="enableBuyNow"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">즉시 구매 가격 설정</FormLabel>
                <FormDescription>
                  구매자가 경매 없이 바로 구매할 수 있는 가격을 설정합니다.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  type="button"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {watch('enableBuyNow') && (
          <FormField
            control={control}
            name="buyNowPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>즉시 구매 가격 (원)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={getValues('startingPrice')}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  즉시 구매 가격은 시작 가격보다 높아야 합니다.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>경매 기간</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="경매 기간 선택" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1일</SelectItem>
                  <SelectItem value="3">3일</SelectItem>
                  <SelectItem value="5">5일</SelectItem>
                  <SelectItem value="7">7일</SelectItem>
                  <SelectItem value="10">10일</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                경매가 진행될 기간을 선택하세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </TabsContent>
  );
}
