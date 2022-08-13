/* ボックス化 (boxing) */
(() => {
  // プリミティブからオブジェクトへの変換（ボックス化）
  const abc = "abc";
  const abcObj = new String(abc);
  console.log(abcObj.length);
  console.log(abcObj.toUpperCase());

  // 自動ボックス化
  const abc2 = "abc";
  console.log(abc2.length);
  console.log(abc2.toUpperCase());

  // ラッパーオブジェクト
  const bool = Boolean(true);
  const num = Number(100);
  const str = String("abc");
  const sym = Symbol("foo");
  const big = BigInt("100");

  // ラッパーオブジェクトとTypeScriptの型
  const bool2: Boolean = false;
  const num2: Number = 0;
  const str2: String = "";
  const sym2: Symbol = Symbol();
  const big2: BigInt = 10n;

  // ラッパーオブジェクト型はプリミティブ型に代入できない
  const n1: Number = 0;
  // Type 'Number' is not assignable to type 'number'.
  // 'number' is a primitive, but 'Number' is a wrapper object. Prefer using 'number' when possible.
  // const n2: number = n1;

  // ラッパーオブジェクト型は演算子が使えない
  const n3: Number = 1;
  // The left-hand side of an arithmetic operation must be of type 'any',
  // 'number', 'bigint' or an enum type.
  // n3 * 2;

  // そのインターフェースを満たしたオブジェクトであれば、プリミティブ型の値以外も代入できる
  const boolLike = {
    valueOf(): boolean {
      return true;
    }
  }
  const bool3: Boolean = boolLike;
  console.log(bool3);

})();
