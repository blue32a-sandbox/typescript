/* 型アサーション「as」(type assertion) */
(() => {
  (() => {
    // 型アサーションの書き方
    const value: string | number = "this is a string";
    let strLength: number;
    strLength =  (value as string).length;
    console.log(strLength);
    strLength = (<string>value).length;
    console.log(strLength);
  })();

  (() => {
    // コンパイルエラーになる型アサーション
    const num = 123;

    // Conversion of type 'number' to type 'string' may be a mistake because
    // neither type sufficiently overlaps with the other. If this was intentional,
    // convert the expression to 'unknown' first.
    // const str: string = num as string;

    const str: string = num as unknown as string; // OK
    console.log(str);
  })();
})();
