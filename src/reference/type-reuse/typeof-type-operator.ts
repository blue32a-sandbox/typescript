/* typeof型演算子 */
(() => {
  const point = { x: 135, y: 35 };

  // typeof"型"演算子
  type Point = typeof point;

  const p: Point = { x: 30, y: 105 };
  console.log(p);

  // こちらはtypeof演算子
  console.log(typeof 42);
})();
