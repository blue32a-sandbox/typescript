/* any型 */
(() => {
  let value: any;
  value = 1;
  console.log(value); // 1
  value = "string";
  console.log(value); // "string"
  value = { name: "オブジェクト" };
  console.log(value); // { name: 'オブジェクト' }

  const str: any = 123;
  // str.toLowerCase(); // str.toLowerCase is not a function

  // 暗黙のany
  // function hello(name) { // Parameter 'name' implicitly has an 'any' type.
  //   console.log(`Hello, ${name.toUpperCase()}`); // name.toUpperCase is not a function
  // }
  // hello(1);
})();
