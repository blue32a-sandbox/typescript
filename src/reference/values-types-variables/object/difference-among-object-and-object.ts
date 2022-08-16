/* object、Object、{}の違い */
(() => {
  let a: object = {}; // OK
  let b: Object = {}; // OK
  let c: {} = {}; // OK

  // object型はオブジェクト型の値だけが代入できる型
  let aa: object;
  aa = { x: 1 }; // OK
  aa = [1, 2, 3]; // OK
  aa = /a-z/; // OK
  // aa = 1; // NG
  // aa = true; // NG
  // aa = "striNG"; // NG

  // Object型はインターフェース
  let bb: Object;
  bb = {}; // OK
  bb = 1; // OK
  bb = true; // OK
  bb = "string"; // OK
  // bb = null; // NG
  // bb = undefined; // NG

  // {}型は、プロパティを持たないオブジェクトを表す型
  let cc: {};
  cc = {}; // OK
  cc = 1; // OK
  cc = true; // OK
  cc = "string"; // OK
  // cc = null; // NG
  // cc = undefined; // NG
})();
