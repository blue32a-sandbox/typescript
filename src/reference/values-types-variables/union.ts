/* ユニオン型 (union type) */
(() => {
  let numberOrUndefined: number | undefined;
  numberOrUndefined = 1;
  console.log(numberOrUndefined); // 1
  numberOrUndefined = undefined;
  console.log(numberOrUndefined); // undefined

  type ErrorCode =
    | 400
    | 401
    | 402
    | 403
    | 404
    | 405;
  let errorCode: ErrorCode = 400;
  console.log(errorCode); // 400

  // 配列要素にユニオン型を使う際の書き方
  type List = (string | number)[];
  let list: List = ["hoge", 1];
  console.log(list); // [ 'hoge', 1 ]

  // ユニオン型と絞り込み
  function getUserId(): string | null {
    return "00001";
  }
  const maybeUserId: string | null = getUserId();
  // const userId: string = maybeUserId;
  let userId: string;
  if (typeof maybeUserId === "string") {
    userId = maybeUserId;
    console.log(userId); // "00001"
  }
})();
