type FormatDate = (date: Date) => string;
export const formatDate: FormatDate = (ms) => {
  const date = new Date(ms);
  return date.toLocaleString("ja", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

// 日付の差を計算し、何日空いているか返す
export const getDayDiff = (a: Date, b: Date) => {
  const timeDiff = a.getTime() - b.getTime(); // ミリ秒

  return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // ミリ秒 * 秒 * 分 * 時;
};
