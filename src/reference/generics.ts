/* ジェネリクス (generics) */
(() => {
  (() => {
    // 重複した3つの関数
    function chooseRandomlyString(v1: string, v2: string): string {
      return Math.random() <= 0.5 ? v1 : v2;
    }
    function chooseRandomlyNumber(v1: number, v2: number): number {
      return Math.random() <= 0.5 ? v1 : v2;
    }
    function chooseRandomlyURL(v1: URL, v2: URL): URL {
      return Math.random() <= 0.5 ? v1 : v2;
    }
    console.log(chooseRandomlyString("勝ち", "負け"));
    console.log(chooseRandomlyNumber(1, 2));
    console.log(chooseRandomlyURL(
      new URL("https://example.com/hoge"),
      new URL("https://example.com/fuga")));
  })();
  (() => {
    // ジェネリクスを使用
    function chooseRandomly<T>(v1: T, v2: T): T  {
      return Math.random() <= 0.5 ? v1 : v2;
    }
    console.log(chooseRandomly<string>("勝ち", "負け"));
    console.log(chooseRandomly<number>(1, 2));
    console.log(chooseRandomly<URL>(
      new URL("https://example.com/hoge"),
      new URL("https://example.com/fuga")));
  })();
})();
