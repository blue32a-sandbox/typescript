/* シンボル型 (symbol type) */
(() => {
  const s1: Symbol = Symbol("foo");
  const s2: Symbol = Symbol("foo");
  console.log(s1 === s1); // true
  console.log(s1 === s2); // false
})();
