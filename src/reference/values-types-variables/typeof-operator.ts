/* typeof演算子 (typeof operator) */
(() => {
  console.log(typeof true); // "boolean"
  console.log(typeof 0); // "number"
  console.log(typeof "Hello World"); // "string"
  console.log(typeof undefined); // "undefined"
  console.log(typeof null); // "object"
  console.log(typeof Symbol()); // "symbol"
  console.log(typeof 1n); // "bigint"
  console.log(typeof [1, 2, 3]); // "object"
  console.log(typeof { a: 1, b: 2 }); // "object"
  console.log(typeof (() => {})); // "function"

  // TypeScriptでtypeofを使うとifやswicthでその型として使うことができる
  const n: unknown = "hello";
  if (typeof n === "string") {
    console.log(n.toUpperCase()); // "HELLO"
  }

  // nullを判別する
  function isObject(value: any) {
    // return typeof value === "object";
    return value !== null && typeof value === "object";
  }
  console.log(isObject(undefined)); // false
  console.log(isObject({ a: 1, b: 2 })); // true
  console.log(isObject([1, 2, 3])); // true
  console.log(isObject(null)); // false

  // 配列を判別する
  const arr = [1, 2, 3];
  console.log(typeof arr); // "object"
  console.log(Array.isArray(arr)); // true
})();
