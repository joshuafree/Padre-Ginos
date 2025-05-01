const intl = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
