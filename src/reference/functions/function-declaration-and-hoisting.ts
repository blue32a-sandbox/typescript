/* 関数宣言と巻き上げ (hoisting) */
(() => {
  (() => {
    // 関数宣言には巻き上げがある
    hello();

    function hello() {
      console.log("Hello World");
    }
  })();

  (() => {
    // 関数式には巻き上げがない
    // Variable 'hello' is used before being assigned.
    // hello();

    const hello = function() {
      console.log("Hello World");
    }
  })();
})();
