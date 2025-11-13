export function formatKwh(value: number) {
  return `${value} kWh`;
}

export function formatCurrencyPhp(value: number) {
  return `₱${value.toLocaleString('en-PH')}`;
}
