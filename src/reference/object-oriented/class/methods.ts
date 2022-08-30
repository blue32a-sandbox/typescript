/* メソッド (method) */
(() => {
  class Greeter {
    greet(name: string): string {
      return `Hello, ${name}!`;
    }
  }

  const greeter = new Greeter;
  console.log(greeter.greet("Jon")); // "Hello, Jon!"
})();
