const fetchTemperature = async (apiUrl: string): Promise<number> => {
  const res = await fetch(`${apiUrl}/my`);
  const data = await res.json();
  return data.data.temperature;
};

export default fetchTemperature;
