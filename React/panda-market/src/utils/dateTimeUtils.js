export const getFormattedDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}. ${month}. ${day}`;

  return formattedDate;
};

export const getPassedTime = (dateString) => {
  const updatedTime = new Date(dateString);
  const now = new Date();
  const diffTime = now - updatedTime;
  const passedTime = Math.floor(diffTime / (1000 * 60 * 60));

  return passedTime;
};
