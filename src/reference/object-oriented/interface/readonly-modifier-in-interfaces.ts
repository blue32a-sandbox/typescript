/* インターフェースのreadonly修飾子 */
(() => {
  interface SomeInterface {
    readonly field: number;
  }
  const some: SomeInterface = {
    field: 1,
  };
  console.log(some.field);

  // Cannot assign to 'field' because it is a read-only property.
  // some.field = 2;
})();
