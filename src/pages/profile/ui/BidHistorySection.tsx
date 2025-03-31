'use client';

import { useState } from 'react';
import { Gavel, ExternalLink } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/Tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

interface BidItemTypes {
  id: string;
  title: string;
  bidAmount: string;
  date: string;
  status: 'winning' | 'outbid' | 'won' | 'lost';
  auctionId: string;
}

export function BidHistorySection() {
  const [filter, setFilter] = useState<string>('all');
  // const [bidHistory, setBidHistory] = useState<BidItemTypes[]>([]);
  const bidHistory: BidItemTypes[] = [
    {
      id: '1',
      title: '빈티지 카메라',
      bidAmount: '150,000원',
      date: '2023년 12월 10일',
      status: 'winning',
      auctionId: 'a1',
    },
    {
      id: '2',
      title: '아이패드 프로 11인치',
      bidAmount: '650,000원',
      date: '2023년 12월 8일',
      status: 'outbid',
      auctionId: 'a2',
    },
    {
      id: '3',
      title: '빈티지 레코드 플레이어',
      bidAmount: '200,000원',
      date: '2023년 12월 1일',
      status: 'won',
      auctionId: 'a3',
    },
    {
      id: '4',
      title: '기계식 키보드',
      bidAmount: '120,000원',
      date: '2023년 11월 25일',
      status: 'lost',
      auctionId: 'a4',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'winning':
        return (
          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            최고 입찰
          </span>
        );
      case 'outbid':
        return (
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
            상회 입찰
          </span>
        );
      case 'won':
        return (
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
            낙찰
          </span>
        );
      case 'lost':
        return (
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
            낙찰 실패
          </span>
        );
      default:
        return null;
    }
  };

  const filteredBids =
    filter === 'all'
      ? bidHistory
      : bidHistory.filter((bid) => bid.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-700">입찰/낙찰 내역</h2>
        <div className="flex items-center gap-2">
          <Gavel className="h-5 w-5 text-blue-700" />
          <span className="text-sm text-muted-foreground">
            총 {bidHistory.length}건의 입찰 내역
          </span>
        </div>
      </div>

      <Tabs defaultValue="bids" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bids">입찰 내역</TabsTrigger>
          <TabsTrigger value="wins">낙찰 내역</TabsTrigger>
        </TabsList>

        <TabsContent value="bids" className="mt-4">
          <div className="mb-4 flex justify-end">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="상태 필터" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="winning">최고 입찰</SelectItem>
                <SelectItem value="outbid">상회 입찰</SelectItem>
                <SelectItem value="won">낙찰</SelectItem>
                <SelectItem value="lost">낙찰 실패</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">상품명</TableHead>
                  <TableHead>입찰가</TableHead>
                  <TableHead>입찰일</TableHead>
                  <div className="flex items-center justify-center">
                    <TableHead className="flex items-center">상태</TableHead>
                  </div>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBids.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      입찰 내역이 없습니다.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBids.map((bid) => (
                    <TableRow key={bid.id}>
                      <TableCell className="font-medium">{bid.title}</TableCell>
                      <TableCell>{bid.bidAmount}</TableCell>
                      <TableCell>{bid.date}</TableCell>
                      <TableCell className="flex items-center justify-center">
                        {getStatusBadge(bid.status)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="wins" className="mt-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">상품명</TableHead>
                  <TableHead>낙찰가</TableHead>
                  <TableHead>낙찰일</TableHead>
                  <div className="flex items-center justify-center">
                    <TableHead className="flex items-center">상태</TableHead>
                  </div>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bidHistory.filter((bid) => bid.status === 'won').length ===
                0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      낙찰 내역이 없습니다.
                    </TableCell>
                  </TableRow>
                ) : (
                  bidHistory
                    .filter((bid) => bid.status === 'won')
                    .map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell className="font-medium">
                          {bid.title}
                        </TableCell>
                        <TableCell>{bid.bidAmount}</TableCell>
                        <TableCell>{bid.date}</TableCell>
                        <TableCell>{getStatusBadge(bid.status)}</TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
