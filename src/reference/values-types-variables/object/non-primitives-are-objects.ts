/* プリミティブ以外はすべてオブジェクト */
(() => {
  // プリミティブ型は値が同じであれば、同一のものと判定できる
  const value1 = 123;
  const value2 = 123;
  console.log(value1 == value2); // true

  // オブジェクト型はプロパティの値が同じであっても、
  // インスタンスが異なると同一のものとは判定されない
  const object1 = { value: 123 };
  const object2 = { value: 123 };
  console.log(object1 == object2); // false
})();
