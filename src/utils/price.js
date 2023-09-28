export const numberToFormattedPriceString = (number) => {
  const formattedString = new Intl.NumberFormat().format(number);
  return formattedString + "원";
};

export const priceStringToNumber = (string) => {
  let fileteredString = string.replace(/,/g, "");
  return parseInt(fileteredString, 10);
};
