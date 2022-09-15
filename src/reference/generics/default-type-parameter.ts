/* デフォルト型引数 */
(() => {
  (() => {
    type MyErrorEvent<T> = {
      error: T;
      type: string;
    };

    class NetworkError extends Error {
      constructor(e?: string) {
        super(e);
        this.name = new.target.name;
      }
    }

    const errorEvent: MyErrorEvent<Error> = {
      error: new Error("エラーです"),
      type: "syntax",
    };
    console.log(errorEvent);

    const networkErrorEvent: MyErrorEvent<NetworkError> = {
      error: new NetworkError("ネットワークエラーです"),
      type: "network",
    };
    console.log(networkErrorEvent);
    console.log(networkErrorEvent.error.name); // "NetworkError"
  })();

  (() => {
    // 型引数の制約と併用する
    type MyErrorEvent<T extends Error = SyntaxError> = {
      error: T;
      type: string;
    }
    const syntaxError: MyErrorEvent = {
      error: new SyntaxError("構文エラーです"),
      type: "syntax",
    };
    console.log(syntaxError);

    // デフォルト型引数が制約を満たしている必要がある
    // Type 'bigint' does not satisfy the constraint 'string | number'.
    // interface Serializable<T extends string | number = bigint> {
    //   value: T;
    //   toString(): string;
    // }
  })();

  (() => {
    // デフォルト型引数をジェネリクスで指定する
    class Aubergine<A, B = A, C = B> {
      private readonly a: A;
      private readonly b: B;
      private readonly c: C;

      public constructor(a: A, b: B, c: C) {
        this.a = a;
        this.b = b;
        this.c = c;
      }

      public toString(): string {
        return `${this.a}, ${this.b}, ${this.c}`;
      }
    }

    const hoge: Aubergine<string> = new Aubergine("a", "b", "c");
    console.log(hoge.toString()); // "a, b, c"

    const fuga: Aubergine<string, number> = new Aubergine("a", 1, 2);
    console.log(fuga.toString()); // "a, 1, 2"
  })();
})();
