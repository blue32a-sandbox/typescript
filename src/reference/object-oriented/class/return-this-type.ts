/* メソッド戻り値のthis型とメソッドチェーン */
(() => {
  class Operator {
    protected value: number;

    public constructor(value: number) {
      this.value = value;
    }

    public val(): number {
      return this.value;
    }

    public sum(value: number): this {
      this.value += value;
      return this;
    }

    public subtract(value: number): this {
      this.value -= value;
      return this;
    }

    public multiply(value: number): this {
      this.value *= value;
      return this;
    }

    public divide(value: number): this {
      this.value /= value;
      return this;
    }
  }
  class NewOperator extends Operator {
    public constructor(value: number) {
      super(value);
    }
    public power(value: number): this {
      this.value **= value;
      return this;
    }
  }

  const op: Operator = new Operator(0);
  op.sum(5).subtract(3).multiply(6).divide(3);
  console.log(op.val()); // 4

  const nop: NewOperator = new NewOperator(2);
  nop.power(3).multiply(2).power(3);
  console.log(nop.val()); // 4096
})();
