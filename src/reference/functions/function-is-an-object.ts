/* 関数はオブジェクト */
(() => {
  function hello() {
    return "Hello World";
  }
  hello.prop = 123;
  console.log(hello());
})();
