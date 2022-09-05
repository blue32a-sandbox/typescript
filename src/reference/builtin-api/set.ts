/* Set<T> */
(() => {
  const fruits = new Set<string>(["apple", "orange", "banana", "apple"]);
  console.log(fruits); // Set(3) { 'apple', 'orange', 'banana' }

  // Argument of type 'number' is not assignable to parameter of type 'string'.
  // fruits.add(1);

  function doSomething(strings: Set<string>) {
    console.log(strings);
  }

  doSomething(fruits);

  fruits.add("lemon");
  fruits.add("lemon");
  console.log(fruits); // Set(4) { 'apple', 'orange', 'banana', 'lemon' }

  fruits.delete("orange");
  console.log(fruits); // Set(3) { 'apple', 'banana', 'lemon' }

  console.log(fruits.has("apple")); // true
  console.log(fruits.has("orange")); // false

  console.log(fruits.size); // 3

  for (const fruit of fruits) {
    console.log(fruit);
    // "apple"
    // "banana"
    // "lemon"
  }

  console.log([...fruits]); // [ 'apple', 'banana', 'lemon' ]

  console.log(JSON.stringify(fruits)); // {}
  console.log(JSON.stringify([...fruits])); // ["apple","banana","lemon"]

  fruits.clear();
  console.log(fruits); // Set(0) {}
})();
