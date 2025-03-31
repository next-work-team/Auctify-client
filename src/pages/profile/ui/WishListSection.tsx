import { ExternalLink, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, CardContent, CardFooter } from '@/shared/ui/Card';
import { Separator } from '@/shared/ui/separator';
import { Button } from '@/shared/ui/Button';

interface WishlistType {
  id: string;
  title: string;
  price: string;
  endDate: string;
  image: string;
  status: 'active' | 'ended' | 'sold';
}

export function WishListSection() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [wishlistItems, setWishlistItems] = useState<WishlistType[]>([]);

  // const wishlistItems: WishlistType[] = [
  //   {
  //     id: '1',
  //     title: '아이패드 프로 11인치',
  //     price: '650,000원',
  //     endDate: '2025년 11월 11일',
  //     image: '',
  //     status: 'active',
  //   },
  //   {
  //     id: '2',
  //     title: '아이패드 프로 11인치',
  //     price: '650,000원',
  //     endDate: '2025년 11월 11일',
  //     image: '',
  //     status: 'active',
  //   },
  //   {
  //     id: '3',
  //     title: '아이패드 프로 11인치',
  //     price: '650,000원',
  //     endDate: '2025년 11월 11일',
  //     image: '',
  //     status: 'active',
  //   },
  //   {
  //     id: '4',
  //     title: '아이패드 프로 11인치',
  //     price: '650,000원',
  //     endDate: '2025년 11월 11일',
  //     image: '',
  //     status: 'active',
  //   },
  //   {
  //     id: '5',
  //     title: '아이패드 프로 11인치',
  //     price: '650,000원',
  //     endDate: '2025년 11월 11일',
  //     image: '',
  //     status: 'active',
  //   },
  // ];

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user/myLikeGoods`);
        setWishlistItems(response.data);
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };
    fetchWishList();
  }, [apiUrl]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            진행중
          </span>
        );
      case 'ended':
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
            종료됨
          </span>
        );
      case 'sold':
        return (
          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
            판매완료
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">찜목록</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          총 {wishlistItems.length}개 상품
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h3 className="text-lg font-medium">찜한 상품이 없습니다</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            관심있는 상품을 찜해보세요!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={item.image || ''}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute right-2 top-2">
                  {getStatusBadge(item.status)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="line-clamp-1 font-medium">{item.title}</h3>
                <p className="mt-1 text-lg font-bold text-blue-700">
                  {item.price}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  마감: {item.endDate}
                </p>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-between p-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  보기
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
