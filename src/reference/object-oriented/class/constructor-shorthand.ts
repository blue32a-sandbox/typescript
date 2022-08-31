/* constructor shorthand */
(() => {
  // ２つのクラスは同一の機能を持つ
  class ConstructorInAccessModifier {
    // プロパティ宣言の省略
    constructor(
      arg0: number,
      public arg1: number,
      protected arg2: number,
      private arg3: number
    ) {
      console.log({ arg0, arg1, arg2, arg3 });
    }
  }
  class ConstructorOutAccessModifier {
    public arg1: number;
    protected arg2: number;
    private arg3: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
      this.arg1 = arg1;
      this.arg2 = arg2;
      this.arg3 = arg3;
      console.log({ arg0, arg1, arg2, arg3 });
    }
  }
  const InAccess = new ConstructorInAccessModifier(1, 2, 3, 4);

  // Property 'arg0' does not exist on type 'ConstructorInAccessModifier'.
  // console.log(InAccess.arg0);

  console.log(InAccess.arg1); // 2

  // Property 'arg2' is protected and only accessible within
  // class 'ConstructorInAccessModifier' and its subclasses.
  // console.log(InAccess.arg2);

  // Property 'arg3' is private and only accessible within
  // class 'ConstructorInAccessModifier'.
  // console.log(InAccess.arg3);

  const outAccess = new ConstructorOutAccessModifier(1, 2, 3, 4);

  // Property 'arg0' does not exist on type 'ConstructorOutAccessModifier'.
  // console.log(outAccess.arg0);

  console.log(outAccess.arg1); // 2

  // Property 'arg2' is protected and only accessible within
  // class 'ConstructorOutAccessModifier' and its subclasses.
  // console.log(outAccess.arg2);

  // Property 'arg3' is private and only accessible within
  // class 'ConstructorOutAccessModifier'.
  // console.log(outAccess.arg3);
})();
