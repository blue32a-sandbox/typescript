/* 列挙型(enum)の問題点と代替手段 */
(() => {
  // 数値列挙型には型安全上の問題がある
  enum ZeroOrOne {
    Zero = 0,
    One = 1,
  }
  const zeroOrOne: ZeroOrOne = 9;
  console.log(zeroOrOne); // 9

  console.log(ZeroOrOne[0]); // "Zero"
  console.log(ZeroOrOne[9]); // undefined

  // 文字列列挙型だけ公称型になる
  enum StringEnum {
    Foo = "foo",
  }
  const foo1: StringEnum = StringEnum.Foo;

  // Type '"foo"' is not assignable to type 'StringEnum'.
  // const foo2: StringEnum = "foo";
})();
