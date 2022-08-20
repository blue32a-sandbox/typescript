/* 数値列挙型 (numeric enum) */
(() => {
  enum Position {
    Top, // 0
    Right, // 1
    Bottom, // 2
    Left, // 3
  };
  console.log(Position.Top); // 0

  enum Position2 {
    Top = 1, // 1
    Right, // 2
    Bottom, // 3
    Left, // 4
  };
  console.log(Position2.Top); // 1
  console.log(Position2.Right); // 2
})();
