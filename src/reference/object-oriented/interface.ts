/* インターフェース (interface) */
(() => {
  (() => {
    // インターフェースを定義する
    interface SomeInterface {
      field: string;
      method1(): void;
      method2(arg: string): void;
    }
    class SomeClass implements SomeInterface {
      field: string = "some";
      method1(): void {
        console.log("method1");
      }
      method2(arg: string): void {
          console.log(arg);
      }
    }
    const some = new SomeClass();
    console.log(some.field); // "some"
    some.method1(); // "method1"
    some.method2("hoge"); // "hoge"
  })();
  (() => {
    // インターフェースと構造的部分型
    interface Person {
      name: string;
      age: number;
    }
    const taro: Person = {
      name: "太郎",
      age: 12,
    };
    console.log(taro); // { name: '太郎', age: 12 }
  })();
})();
