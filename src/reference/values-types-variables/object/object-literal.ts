/* オブジェクトリテラル (object literal) */
(() => {
  const object = {};
  console.log(object);

  const person = { name: "Bob", age: 25 };
  console.log(person);

  // JSON：JavaScript Object Notation
  console.log(JSON.parse('{ "name": "Bob", "age": 25 }'));
})();
