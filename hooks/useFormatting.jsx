export function useFormatDate(data) {
  const date = new Date(data);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  return formattedDate;
}

export const useFormatPrice = (data, currency = "KRW") => {
  if (typeof data !== "number") return "가격 정보 없음";
  return data.toLocaleString("ko-KR", {
    style: "decimal",
    currency: currency,
  });
};

export const useFormatUpDate = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diff = (now - past) / 1000;

  if (diff < 60) {
    return "1분전";
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)}분 전`; // 1시간 미만
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}시간 전`; // 24시간 미만
  } else if (diff < 30 * 86400) {
    return `${Math.floor(diff / 86400)}일 전`; // 30일 미만
  } else {
    return past.toISOString().split("T")[0]; // YYYY-MM-DD 형식 (한 달 이상 지난 경우)
  }
};
