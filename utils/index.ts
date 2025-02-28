export const generateBadgeColor = (stockStatus: string) => {
  if (stockStatus === "Available") return "#40a06a";
  return "#E59C57";
};
