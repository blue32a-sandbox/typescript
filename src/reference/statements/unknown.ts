/* unknown型 */
(() => {
  // unknown型にはどのような値も代入できる
  let value: unknown;
  value = 1; // OK
  value = "string"; // OK
  value = { name: "オブジェクト" }; // OK

  // unknown型は型安全なany型
  (() => {
    // any型はどのような型の変数にも代入できる
    const value: any = 10;
    const int: number = value;
    const bool: boolean = value;
    const str: string = value;
    const obj: object = value;
  })();
  (() => {
    // unknown型の値は具体的な型へ代入できない
    const value: unknown = 10;
    // Type 'unknown' is not assignable to type 'number'.
    // const int: number = value;
    // Type 'unknown' is not assignable to type 'boolean'.
    // const bool: boolean = value;
    // Type 'unknown' is not assignable to type 'string'.
    // const str: string = value;
    // Type 'unknown' is not assignable to type 'object'.
    // const obj: object = value;
    const any: any = value; // OK
    const unknown: unknown = value; // OK
  })();
  (() => {
    // プロパティへのアクセス、メソッドの呼び出しもできない
    const value: unknown = 10;
    // Object is of type 'unknown'.
    // value.toFixed();

    const obj: unknown = { name: "オブジェクト" };
    // Object is of type 'unknown'.
    // obj.name;
  })();

  (() => {
    // unknownと型の絞り込み
    const value: unknown = "hello";
    if (typeof value === "string") {
      // このブロックではstring型として扱える
      console.log(value.toUpperCase());
    }

    // 型ガード関数
    function isObject(value: unknown): value is object {
      return typeof value === "object" && value !== null;
    }
    const obj: unknown = { a: 1, b: 2 };
    if (isObject(obj)) {
      console.log(Object.keys(obj)); // [ 'a', 'b' ]
    }
  })();

  (() => {
    // unknown型を配列型に絞り込む
    function isNumberArray(value: unknown): value is number[] {
      // 配列型のチェック
      if (!Array.isArray(value)) {
        return false;
      }
      // 配列要素のチェック
      return value.every((e) => typeof e === "number");
    }
    const arr: unknown = [1, 2, 3];
    if (isNumberArray(arr)) {
      arr.map((v) => v.toFixed());
      console.log(arr); // [ 1, 2, 3 ]
    }
  })();

  (() => {
    // unknown型をオブジェクト型に絞り込む
    type Email = {
      from: string;
      to: string;
      title: string;
      subject: string;
    };
    function isEmail(value: unknown): value is Email {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      // 型アサーションでvalueをEmail型に近づける
      const email = value as Record<keyof Email, unknown>;
      if (typeof email.from !== "string") {
        return false;
      }
      if (typeof email.to !== "string") {
        return false;
      }
      if (typeof email.title !== "string") {
        return false;
      }
      return typeof email.subject === "string";
    }
    const obj: unknown = {
      from: "from@mail.example.com",
      to: "to@mail.example.com",
      title: "title",
      subject: "subject"
    }
    if (isEmail(obj)) {
      console.log(obj.from);
      console.log(obj.to);
      console.log(obj.title);
      console.log(obj.subject);
    }
  })();

  (() => {
    // unknownの用途
    // any型の値をより安全にする
    const data: unknown = JSON.parse('{ "a": 1 }');
    console.log(data); // { a: 1 }

    // 型アサーションの制約を回避する
    const str = "a";
    // const num = str as number;
    const num = str as unknown as number;
    console.log(num); // "a"
  })();
})();
