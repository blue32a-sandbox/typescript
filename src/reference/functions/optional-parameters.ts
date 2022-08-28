/* オプション引数 (optional parameter) */
(() => {
  function hello(person?: string/* string | undefined */) {
    console.log(person);
  }
  hello(); // undefined
  hello("alice"); // "alice"

  (() => {
    // デフォルト値を代入する Null合体代入演算子
    function hello(person?: string) {
      // Object is possibly 'undefined'.
      // return "Hello " + person.toUpperCase();

      person ??= "anonymous";
      return "Hello " + person.toUpperCase();
    }
    console.log(hello()); // "Hello ANONYMOUS"
    console.log(hello("alice")); // "Hello ALICE"
  })();

  (() => {
    // デフォルト値を代入する デフォルト引数
    function hello(person: string = "anonymous") {
      return "Hello " + person.toUpperCase();
    }
    console.log(hello()); // "Hello ANONYMOUS"
    console.log(hello("alice")); // "Hello ALICE"
  })();

  (() => {
    // T | undefinedとの違い
    function hello(person: string | undefined) {}

    // Expected 1 arguments, but got 0.
    // hello();

    // undefinedを渡す必要がある
    hello(undefined);
  })();

  (() => {
    // オプション引数の後に普通の引数は書けない
    // A required parameter cannot follow an optional parameter.
    // function func(foo?: string, bar: string) {}
  })();
})();
