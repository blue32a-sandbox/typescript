/* 型の再利用 */
(() => {
  // 型の再利用のメタファー
  const obj = { a: 1, b: 2, c: 3 };
  const keys1 = ["a", "b", "c"];
  const keys2 = Object.keys(obj); // keys1より保守性が高い
  console.log(keys1, keys2);

  type Obj = { a: string; b: string; c: string };
  type Keys = keyof Obj; // "a" | "b" | "c"
  const a: Keys = "a";
  const b: Keys = "b";
  const c: Keys = "c";

  // Type '"d"' is not assignable to type 'keyof Obj'
  // const d: Keys = "d";

  console.log(a, b, c);
})();
