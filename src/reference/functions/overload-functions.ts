/* オーバーロード関数 (overload function) */
(() => {
  (() => {
    // オーバーロード関数の文法
    function hello(person: string): void;
    function hello(persons: string[]): void;
    function hello(person: string | string[]): void {
      if (typeof person === "string") {
        console.log(`Hello ${person}`);
      } else {
        console.log(`Hello ${person.join(",")}`);
      }
    }

    hello("Jon"); // "Hello Jon"
    hello(["Jon", "Bob"]); // "Hello Jon,Bob"
  })();
  (() => {
    // アロー関数とオーバーロード
    type Hello = {
      (person: string): void;
      (persons: string[]): void;
    };
    const hello: Hello = (person: string | string[]): void => {
      if (typeof person === "string") {
        console.log(`Hello ${person}`);
      } else {
        console.log(`Hello ${person.join(",")}`);
      }
    }
    hello("Jon"); // "Hello Jon"
    hello(["Jon", "Bob"]); // "Hello Jon,Bob"
  })();
  (() => {
    // 関数シグネチャは詳しい順に書く
    function func(param: any): any; // 詳しくない関数。採用される
    function func(param: 1 | 2): 1 | 2; // 詳しい関数。採用されない
    function func(param: any): any {
      return param;
    }
    const result = func(1); // return any
    console.log(result); // 1
  })();
})();
