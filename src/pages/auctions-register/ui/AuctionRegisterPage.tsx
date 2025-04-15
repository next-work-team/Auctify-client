import AuctionRegisterForm from './AuctionRegisterForm';
import AuctionRegisterGuide from './AuctionRegisterGuide';
import AuctionRegisterHeader from './AuctionRegisterHeader';

export function AuctionRegisterPage() {
  return (
    <div className="container py-6 md:py-10">
      <AuctionRegisterHeader />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
        <div>
          <AuctionRegisterForm />
        </div>

        <div className="hidden lg:block">
          <AuctionRegisterGuide />
        </div>
      </div>
    </div>
  );
}
