/* 静的フィールド (static field) */
(() => {
  class SomeClass {
    static field: number = 123;
    private static hoge: string = "hoge";
    static readonly fuga: string = "fuga";
  }
  console.log(SomeClass.field); // 123
  SomeClass.field = 321;
  console.log(SomeClass.field); // 321

  // Property 'hoge' is private and only accessible within class 'SomeClass'.
  // SomeClass.hoge;

  console.log(SomeClass.fuga); // "fuga"

  // Cannot assign to 'fuga' because it is a read-only property.
  // SomeClass.fuga = "foo";
})();
