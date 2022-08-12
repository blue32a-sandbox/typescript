/* undefinedとnullの違い */
(() => {
  // nullは自然発生しない
  let value;
  console.log(value); // undefined

  const arr: number[] = [];
  console.log(arr[0]); // undefined

  function func() {}
  console.log(func()); // undefined

  // undefinedは変数
  // let null; // error
  let undefined;

  // typeof演算子
  console.log(typeof undefined); // "undefined"
  console.log(typeof null); // "object"

  // JSON
  console.log(JSON.stringify({ foo: undefined })); // {}
  console.log(JSON.stringify({ foo: null })); // {"foo":null}
})();
