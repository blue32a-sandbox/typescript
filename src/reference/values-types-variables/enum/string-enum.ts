/* 文字列列挙型 (string enum) */
(() => {
  enum Dicrection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  };
  console.log(Dicrection.Up); // "UP"
  console.log(Dicrection.Left); // "LEFT"
})();
