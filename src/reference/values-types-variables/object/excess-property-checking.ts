/* 余剰プロパティチェック (excess property checking) */
(() => {
  let onlyX: { x: number };
  onlyX = { x: 1 }; //ok
  console.log(onlyX); // { x: 1 }

  // Type '{ x: number; y: number; }' is not assignable to type '{ x: number; }'.
  // Object literal may only specify known properties, and 'y' does not exist in type '{ x: number; }'.
  // onlyX = { x: 1, y: 2 };

  // 余剰プロパティチェックはオブジェクトリテラルだけを検査する
  const xy: { x: number; y: number } = { x: 1, y: 2 };
  onlyX = xy; // ok
  console.log(onlyX); // { x: 1, y: 2 }
})();
