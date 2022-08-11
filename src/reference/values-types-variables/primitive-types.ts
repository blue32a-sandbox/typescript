/* プリミティブ型 (primitive types) */
(() => {
  // プリミティブ型の種類
  const boo: boolean = true;
  const num: number = 42;
  const str: string = "Hello World";
  const und = undefined;
  const nul = null;
  const sym = Symbol('symbol');
  const bigi = 9007199254740991n;

  // プリミティブ型はオブジェクトに自動変換され、オブジェクトのように扱える
  // オートボクシング(autoboxing)
  console.log("name".length); // 4

  // null と undefined にはプロパティがない
  // null.toString(); // Object is possibly 'null'.
})();
