export function formatCurrency(amount: string | number): string {
  const formattedAmount: string =
    typeof amount === "string" ? amount : amount.toString();

  const parts: string[] = formattedAmount.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export function removeComma(amount: string) {
  return amount.replace(/,/g, "");
}
