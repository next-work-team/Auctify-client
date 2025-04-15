export async function getAuctionList() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auction/search`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch auction goods list');
  }

  const data = await response.json();

  return data;
}
