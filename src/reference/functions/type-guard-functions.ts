/* 型ガード関数 (type guard function) */
(() => {
  class Animal {}
  class Duck extends Animal {
    public quacks(): string {
      return "quack! quack!";
    }
  }

  function foo(animal: Animal) {
    // Property 'quacks' does not exist on type 'Animal'.
    // animal.quacks();

    if (isDuck(animal)) {
      console.log(animal.quacks());
    } else {
      console.log("is not duck");
    }
  }

  function isDuck(animal: Animal): animal is Duck {
    return animal instanceof Duck;
  }

  foo(new Animal()); // "is not duck"
  foo(new Duck()); // "quack! quack!"

  // あくまでもその型であるとTypeScriptに解釈させるだけなので、
  // JavaScriptとして正しいということは断言できない
  function isUndefined(value: unknown): value is undefined {
    return typeof value === "number";
  }
  console.log(isUndefined(undefined)); // false
  console.log(isUndefined(1)); // true
})();
