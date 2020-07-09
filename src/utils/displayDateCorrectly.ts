export const displayDateCorrectly = (date: string): string => {
  const d = new Date(Date.parse(date));
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const month = d.getMonth() < 10 ? `0${d.getMonth()}` : d.getMonth();
  return `${day}.${month}`;
};
