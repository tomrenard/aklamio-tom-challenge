export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  };

  const formatter = Intl.NumberFormat("de-DE", options);

  return formatter.format(amount);
}
