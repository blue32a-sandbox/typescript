/* オブジェクト型のreadonlyプロパティ (readonly property) */
(() => {
  let obj: {
    readonly foo: number;
  };
  obj = { foo: 1 };
  console.log(obj);

  // Cannot assign to 'foo' because it is a read-only property.
  // obj.foo = 2;

  // readonlyは再帰的ではない
  let obj2: {
    readonly foo: {
      bar: number;
    };
  };
  obj2 = {
    foo: {
      bar: 1,
    },
  };
  console.log(obj2);

  // Cannot assign to 'foo' because it is a read-only property.
  // obj2.foo = { bar: 2 };

  obj2.foo.bar = 2;
  console.log(obj2);
})();
