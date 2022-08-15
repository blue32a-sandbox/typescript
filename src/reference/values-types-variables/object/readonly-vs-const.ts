/* readonlyとconstの違い */
(() => {
  // constは変数への代入を禁止にするもの
  const x = { y: 1 };
  console.log(x);

  // Cannot assign to 'x' because it is a constant.
  // x = { y: 2 };

  x.y = 2; // プロパティへの代入は許可
  console.log(x);

  // readonlyはプロパティへの代入を禁止にするもの
  let obj: { readonly x: number } = { x: 1 };
  console.log(obj);

  // Cannot assign to 'x' because it is a read-only property.
  // obj.x = 2;

  obj = { x: 2 };
  console.log(obj);

  // constとreadonlyの違い
  const obj2: { readonly x: number } = { x: 1 };
  console.log(obj2);

  // Cannot assign to 'obj2' because it is a constant.
  // obj2 = { x: 2 };

  // Cannot assign to 'x' because it is a read-only property.
  // obj2.x = 2;
})();
