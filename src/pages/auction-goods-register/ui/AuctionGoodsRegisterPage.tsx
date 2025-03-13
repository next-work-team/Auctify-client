import AuctionGoodsRegisterHeader from './AuctionGoodsRegisterHeader';
import AuctionGoodsRegisterForm from './AuctionGoodsRegisterForm';
import AuctionGoodsRegisterGuide from './AuctionGoodsRegisterGuide';

export function AuctionGoodsRegisterPage() {
  return (
    <div className="container py-6 md:py-10">
      <AuctionGoodsRegisterHeader />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        <div>
          <AuctionGoodsRegisterForm />
        </div>

        <div className="hidden lg:block">
          <AuctionGoodsRegisterGuide />
        </div>
      </div>
    </div>
  );
}
