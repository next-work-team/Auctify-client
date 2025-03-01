import KakaoLoginButton from './KakaoLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

export default function SigninPage() {
  return (
    <>
      <h1 className="text-center text-head-01 text-grayscale-font mb-4">
        AUCTIFY에 오신 것을 환영해요!
      </h1>
      <p className="text-center text-head-16 text-grayscale-b0">
        빠르고 간편하게 경매를 등록하고 입찰하기
      </p>
      <p className="text-center text-head-16 text-grayscale-b0">
        AUCTIFY에서 경험해보세요
      </p>
      <GoogleLoginButton />
      <KakaoLoginButton />
    </>
  );
}
