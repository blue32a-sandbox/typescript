/* クラスはオブジェクト */
(() => {
  class MyClass {}

  // TypeScriptでは型安全のために動的な拡張はできない
  // Property 'key' does not exist on type 'typeof MyClass'.
  // MyClass.key = "value";
})();
