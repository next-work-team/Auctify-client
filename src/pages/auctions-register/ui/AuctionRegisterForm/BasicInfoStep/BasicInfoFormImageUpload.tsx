import { ImagePlusIcon, Trash2Icon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui';
import { Label } from '@/shared/ui/Label';
import { Input } from '@/shared/ui/input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';

export default function BasicInfoFormImageUpload() {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="images"
      render={() => (
        <FormItem>
          <FormLabel>상품 이미지</FormLabel>
          <FormControl>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImagesUploadPreview />
              <ImagesUploadInput />
            </div>
          </FormControl>
          <FormDescription>
            최대 8장의 이미지를 업로드할 수 있습니다. 첫 번째 이미지가 대표
            이미지로 사용됩니다.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function ImagesUploadPreview() {
  const { watch, setValue, getValues } = useFormContext();
  const images = watch('images');

  const removeImage = (index: number) => {
    const images = getValues('images');
    const newImages = [...images];

    // URL.revokeObjectURL을 사용하여 메모리 누수 방지
    if (newImages[index]?.url) {
      URL.revokeObjectURL(newImages[index].url);
    }

    newImages.splice(index, 1);
    setValue('images', newImages, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return images?.map((image: string, index: number) => (
    <div
      key={index}
      className="relative aspect-square rounded-md overflow-hidden border"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image || '/placeholder.svg'}
        alt={`상품 이미지 ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <Button
        type="button"
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={() => {
          removeImage(index);
        }}
      >
        <Trash2Icon className="h-4 w-4" />
      </Button>
    </div>
  ));
}

function ImagesUploadInput() {
  const { setValue, getValues, setError } = useFormContext();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const images = getValues('images');

    if (!files || files.length === 0) {
      console.log('파일 선택이 취소되었습니다.');
      return;
    }

    if (images.length + files.length > 8) {
      setError('images', {
        type: 'manual',
        message: '최대 8장의 이미지만 업로드할 수 있습니다.',
      });
      return;
    }

    // 실제 구현에서는 서버에 이미지를 업로드하고 URL을 받아옵니다
    // 여기서는 임시로 로컬 URL을 생성합니다
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file),
    );

    setValue('images', [...images, ...newImages], {
      shouldValidate: true,
      shouldDirty: true,
    });

    // 같은 파일 추가 가능
    e.target.value = '';
  };

  return (
    <div className="aspect-square rounded-md border border-dashed flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors">
      <Label
        htmlFor="image-upload"
        className="cursor-pointer w-full h-full flex flex-col items-center justify-center"
      >
        <ImagePlusIcon className="h-8 w-8 text-muted-foreground mb-2" />
        <span className="text-sm text-muted-foreground">이미지 추가</span>
        <Input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            handleImageUpload(e);
          }}
        />
      </Label>
    </div>
  );
}
