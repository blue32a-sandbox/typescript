/* 関数は値 */
(() => {
  (() => {
    // 関数を変数に代入することができる
    function hello() {
      return "Hello World";
    }
    const helloWorld = hello;
    console.log(hello()); // "Hello World"
    console.log(helloWorld()); // "Hello World"
  })();

  (() => {
    // 関数のスコープ
    function main() {
      function hello() {
        console.log("hello");
      }
      hello();
    }
    main(); // "hello"

    // Cannot find name 'hello'.
    // hello();
  })();
})();
