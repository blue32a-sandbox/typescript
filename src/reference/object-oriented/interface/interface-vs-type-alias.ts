/* interfaceとtypeの違い */
(() => {
  (() => {
    // インターフェイスの継承
    interface Animal {
      name: string;
      break(): string;
    }
    type Creature = {
      dna: string;
    }
    interface Dog extends Animal, Creature {
      dogType: string;
    }
    const dog: Dog = {
      name: "REX",
      break() {
        return "bbb";
      },
      dna: "aaaaa",
      dogType: "bulldog",
    };
    console.log(dog);
  })();
  (() => {
    // 型エイリアスで継承と似たようなことを実現する
    type Animal = {
      name: string;
    };
    type Creature = {
      dna: string;
    };
    type Dog = Animal &
      Creature & {
        dogType: string;
      };
    const dog: Dog = {
      name: "REX",
      dna: "aaaaa",
      dogType: "bulldog",
    };
    console.log(dog);
  })();

  (() => {
    // インターフェースのプロパティのオーバーライド
    interface Animal {
      name: any;
      price: {
        yen: number;
      };
      legCount: number;
    }
    interface Dog extends Animal {
      name: string;
      price: {
        yen: number;
        dollar: number;
      };
      // オーバーライドするためには元の型に代入できるものでなければならない
      // legCount: string;
    }
    const dog: Dog = {
      name: "REX",
      price: {
        yen: 10000,
        dollar: 100,
      },
      legCount: 4,
    };
    console.log(dog);
  })();
  (() => {
    // 型エイリアスの場合は上書きにはならず、フィールドの型の交差型が計算される
    type Animal = {
      name: string;
      price: {
        yen: number;
        dollar: number;
      };
    };
    type Dog = Animal & {
      //  交差型が作れない場合はコンパイルエラーではなくnever型になる
      // name: number;
      price: {
        yen: number;
        euro: number;
      };
    };
    const dog: Dog = {
      name: "bulldog",
      price: {
        yen: 10000,
        dollar: 100,
        euro: 100,
      },
    };
    console.log(dog);
  })();
  (() => {
    // 型エイリアスは同名のものを複数定義できない
    type SameNameTypeWillError = {
      message: string;
    };
    // Duplicate identifier 'SameNameTypeWillError'.
    // type SameNameTypeWillError = {
    //   detail: string;
    // };
  })();
  (() => {
    // 同名のインターフェースを定義できる
    interface SameNameInterfaceIsAllowed {
      myField: string;
      sameNameSameTypeIsAllowed: number;
      sameNameDifferentTypeIsNotAllowed: string;
    }
    interface SameNameInterfaceIsAllowed {
      newField: string;
      sameNameSameTypeIsAllowed: number;
    }

    // 同名のフィールドだが、型の定義が違っている場合はコンパイルエラー
    interface SameNameInterfaceIsAllowed {
      // Subsequent property declarations must have the same type.
      // Property 'sameNameDifferentTypeIsNotAllowed' must be of type 'string',
      // but here has type 'number'.
      // sameNameDifferentTypeIsNotAllowed: number;
    }

    const same: SameNameInterfaceIsAllowed = {
      myField: "hoge",
      newField: "fuga",
      sameNameSameTypeIsAllowed: 1,
      sameNameDifferentTypeIsNotAllowed: "bar",
    };
    console.log(same);
  })();
  (() => {
    // Mapped Type
    type SystemSupportLanguage = "en" | "fr" | "it" | "es";
    type Butterfly = {
      [key in SystemSupportLanguage]: string;
    };
    const bar: Butterfly = {
      en: "English",
      fr: "French",
      it: "Italian",
      es: "Spanish",
    };
    console.log(bar);
  })();
  (() => {
    // インターフェースでMapped Typeを使うとエラー
    type SystemSupportLanguage = "en" | "fr" | "it" | "es";
    interface Butterflly {
      // A mapped type may not declare properties or methods.
      // [key in SystemSupportLanguage]: string;
    }
  })();

  // インターフェースと型エイリアスの使い分け
  // TODO
})();
