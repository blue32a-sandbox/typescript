/* 型推論と動的型付けの違い */
(() => {
  let x = 1;
  // x = "hello"; // Type 'string' is not assignable to type 'number'.
  // console.log(x.substring(1, 3)); // Property 'substring' does not exist on type 'number'.

  /* JavaScript */
  // let x = 1; // xはnumber型となる
  // x = "hello"; //x はstring型となる
  // console.log(x.substring(1, 3));
})();
