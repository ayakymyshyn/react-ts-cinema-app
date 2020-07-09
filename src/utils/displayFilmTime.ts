export const displayFilmTime = (date: string): string => {
  const d = new Date(Date.parse(date));
  const hour = d.getHours();
  const minutes = d.getMinutes();
  return `${hour}:${minutes}`;
};
