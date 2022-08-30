/* コンストラクタ (constructor) */
(() => {
  class Person {
    constructor(name: string) {
      console.log(name);
    }
  }
  new Person("Alice");
})();
