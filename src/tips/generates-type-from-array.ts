/* 配列から型を生成する */
(() => {
  const currencies = ["CNY", "EUR", "GBP", "JPY", "KRW", "USD"] as const;

  type Currency = typeof currencies[number];
  // type Currency = "CNY" | "EUR" | "GBP" | "JPY" | "KRW" | "USD"

  const cny: Currency = "CNY";
  const eur: Currency = "EUR";
  const gbp: Currency = "GBP";
  const jpy: Currency = "JPY";
  const krw: Currency = "KRW";
  const usd: Currency = "USD";
  console.log(cny, eur, gbp, jpy, krw, usd);

  // Type '"AUD"' is not assignable to type '"CNY" | "EUR" | "GBP" | "JPY" | "KRW" | "USD"'.
  // const aud: Currency = "AUD";
})();
