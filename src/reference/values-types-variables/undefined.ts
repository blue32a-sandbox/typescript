/* undefined型 */
(() => {
  let name;
  console.log(name);

  function func() {}
  console.log(func());

  const arr: number[] = [];
  console.log(arr[1]);

  // undefinedの型注釈
  const x: undefined = undefined;
  console.log(x);
})();
