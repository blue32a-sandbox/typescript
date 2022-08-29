/* アサーション関数 (assertion functions) */
(() => {
  class Animal {}
  class Duck extends Animal {
    public quacks(): string {
      return "quack! quack!";
    }
  }

  function isDuck(animal: Animal): asserts animal is Duck {
    if (animal instanceof Duck) {
      return;
    }
    throw new Error("YOU ARE A FROG!!!");
  }
  function foo(animal: Animal) {
    // Property 'quacks' does not exist on type 'Animal'.
    // animal.quacks();

    isDuck(animal);
    console.log(animal.quacks());
  }

  foo(new Duck()); // "quack! quack!"
  foo(new Animal()); // Error: YOU ARE A FROG!!!
})();
