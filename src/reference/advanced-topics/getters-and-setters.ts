/* セッターとゲッター (set, get) */
(() => {
  class Human {
    private _name: string;

    public constructor(name: string) {
      this._name = name;
    }

    get name(): string {
      return this._name;
    }

    set name(name: string) {
      this._name = name;
    }
  }

  const human = new Human("");

  // メソッドと違い()は不要
  // human.name("田中太郎");
  human.name = "田中太郎";

  // メソッドと違い()は不要
  // human.name();
  console.log(human.name); // "田中太郎"
})();
