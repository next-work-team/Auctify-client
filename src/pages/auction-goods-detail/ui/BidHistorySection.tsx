import { Card, CardContent } from '@/shared/ui';

export default function BidHistorySection({
  bidHistory,
}: {
  bidHistory: { user: string; amount: number; time: string }[];
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">입찰 기록</h3>
        <div className="space-y-3">
          {bidHistory.map((bid, index) => (
            <div key={index} className="flex justify-between text-sm">
              <div className="font-medium">{bid.user}</div>
              <div className="flex gap-4">
                <span>₩{bid.amount.toLocaleString()}</span>
                <span className="text-muted-foreground">{bid.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
