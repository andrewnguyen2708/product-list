type configType = {
  value: number;
  currency: string;
};

function formatCurrentcy({ value, currency }: configType) {
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return currencyFormat.format(value);
}

export { formatCurrentcy };
