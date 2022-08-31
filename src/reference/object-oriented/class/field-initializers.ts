/* フィールドの初期化子 (initializer) */
(() => {
  class Point {
    x: number = 0;
    y: number = 0;
  }
  const point = new Point();
  console.log(point.x, point.y); // 0 0

  // 初期化子と型推論
  class Hoge {
    x = 0; // number型
  }
  const hoge = new Hoge();
  hoge.x; // Hoge.x: number
})();
