/* 静的メソッド (static method) */
(() => {
  class SomeClass {
    static doSomething() {
      console.log("do something");
    }

    private static hoge() {
      console.log("hoge");
    }

    public static fuga() {
      SomeClass.hoge();
    }
  }

  SomeClass.doSomething(); // "do something"

  // Property 'hoge' is private and only accessible within class 'SomeClass'.
  // SomeClass.hoge();

  SomeClass.fuga(); // "hoge"
})();
