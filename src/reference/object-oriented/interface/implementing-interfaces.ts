/* インターフェースを実装する */
(() => {
  interface Human {
    name: string;
    think(): void;
  }
  interface Programmer {
    writeCode(): void;
  }
  class Developer implements Human, Programmer {
    name: string = "Bob";
    think(): void {
      console.log("example");
    }
    writeCode(): void {
      console.log("typing");
    }
  }
  const bob = new Developer();
  console.log(bob.name); // "Bob"
  bob.think(); // "example"
  bob.writeCode(); // "typing"
})();
