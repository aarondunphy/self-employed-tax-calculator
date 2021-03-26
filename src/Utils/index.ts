export const numberFormat = (number: number) => {
  return new Intl.NumberFormat("en-EN").format(number);
};
