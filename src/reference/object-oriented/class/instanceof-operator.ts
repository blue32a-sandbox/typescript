/* instanceof演算子 */
(() => {
  class Parent {}
  class Child extends Parent {}

  const parnet = new Parent();
  const child = new Child();

  console.log(parnet instanceof Parent); // true
  console.log(parnet instanceof Child); // false

  console.log(child instanceof Parent); // true
  console.log(child instanceof Child); // true
})();
