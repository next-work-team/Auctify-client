// 유저 프로필 정보를 API로부터 받아오는 비동기 함수
const fetchUserProfileApi = async (
  apiUrl: string, // API의 base URL
  userId: string, // 요청할 유저의 ID
): Promise<{
  nickname: string;
  bio: string;
  birthdate: string;
  image: string | null;
  temperature: number | null;
}> => {
  // 해당 유저 ID에 대한 정보를 요청함
  const res = await fetch(`${apiUrl}/api/user/${userId}`);

  // 응답 상태가 실패일 경우 에러를 던져서 catch 블록에서 처리하게 함
  if (!res.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다');
  }

  // 응답을 JSON 형태로 파싱
  const data = await res.json();

  // 응답 데이터를 클라이언트에서 사용할 수 있게 변환하여 반환
  return {
    nickname: data.data.nickName, // 서버 응답의 nickName → nickname으로 이름 바꿔서 사용
    bio: data.data.bio ?? '소개 없음', // bio가 null/undefined면 기본값으로 대체
    birthdate: data.data.birthdate, // 그대로 사용
    image: data.data.profileImage, // 프로필 이미지 URL
    temperature: data.data.mannerTemperature, // 유저의 매너 온도
  };
};

export default fetchUserProfileApi;
