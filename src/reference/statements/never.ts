/* never型 */
(() => {
  // Type 'number' is not assignable to type 'never'.
  // const foo: never = 1;

  const any: any = 1;
  // Type 'any' is not assignable to type 'never'.
  // const foo: never = any;

  const nev: never = 1 as never;
  console.log(nev); // 1

  // 何にでも代入できる
  const a: string = nev; // OK
  const b: string[] = nev; // OK
  console.log(a, b); // 1 1

  // 値が無いとは
  function throwError(): never {
    throw new Error();
  }
  function forever(): never {
    while (true) {} // 無限ループ
  }
  type NumberString = number & string; // 作り得ない値はnever型

  // void型とnever型の違い
  const ok: void = undefined; // OK
  // Type 'undefined' is not assignable to type 'never'.
  // const ng: never = undefined; // NG

  // 戻り値がneverの関数が最後まで到達できてしまう場合はエラーになる
  // A function returning 'never' cannot have a reachable end point.
  // function func(): never {}

  (() => {
    // neverを使った網羅性チェック
    type Extension = "js" | "ts" | "json";
    function printLang(ext: Extension): void {
      switch (ext) {
        case "js":
          console.log("JavaScript");
          break;
        case "ts":
          console.log("TypeScript");
          break;
        // case "json":
        //   console.log("JSON");
        //   break;
        default:
          // 網羅されていない場合はここでコンパイルエラー
          // Type 'string' is not assignable to type 'never'.
          // const exhaustivenessCheck: never = ext;
          break;
      }
    }
    printLang("js"); // "JavaScript"
    printLang("ts"); // "TypeScript"
  })();
  (() => {
    // 例外による網羅性チェック
    class ExhaustiveError extends Error {
      constructor(value: never, message = `Unsupported type: ${value}`) {
        super(message);
      }
    }
    type Extension = "js" | "ts" | "json";
    function printLang(ext: Extension): void {
      switch (ext) {
        case "js":
          console.log("JavaScript");
          break;
        case "ts":
          console.log("TypeScript");
          break;
        // case "json":
        //   console.log("JSON");
        //   break;
        default:
          // 網羅されていない場合はここでコンパイルエラー
          // Argument of type 'string' is not assignable to parameter of type 'never'.
          // throw new ExhaustiveError(ext);
      }
    }
    printLang("js"); // "JavaScript"
    printLang("ts"); // "TypeScript"
  })();
})();
