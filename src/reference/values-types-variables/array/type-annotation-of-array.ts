/* 配列の型注釈 (type annotation) */
(() => {
  // Type[]
  let array: number[];
  array = [1, 2, 3];
  console.log(array);

  // Array<T>
  let array2: Array<number>;
  array2 = [1, 2, 3];
  console.log(array2);
})();
