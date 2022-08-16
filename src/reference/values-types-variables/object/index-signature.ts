/* インデックス型 (index signature) */
(() => {
  let obj: {
    [K: string]: number;
  };
  obj = { a: 1, b: 2 }; //ok
  obj.c = 4; // ok
  obj["d"] = 5; // ok
  console.log(obj); // { a: 1, b: 2, c: 4, d: 5 }

  const e: number | undefined = obj.e;
  console.log(e); // undefined
})();
