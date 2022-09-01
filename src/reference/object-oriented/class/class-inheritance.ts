/* クラスの継承 (inheritance) */
(() => {
  class Parent {
    public readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name: string) {
      super(name);
    }
  }
  const child = new Child("Alice");
  console.log(child.name); // "Alice"
})();
