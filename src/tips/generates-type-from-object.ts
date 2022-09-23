/* オブジェクトから型を生成する */
(() => {
  // typeof
  const account = {
    name: "yyts",
    password: "asdi30qkd",
    age: 32,
    plan: "Standard",
  };
  type Account = typeof account;
  // type Account = {
  //   name: string;
  //   password: string;
  //   age: number;
  //   plan: string;
  // }
  const account2: Account = {
    name: "yamada",
    password: "ok38cllec",
    age: 29,
    plan: "Unkonwn",
  };
})();
(() => {
  // プロパティを定数値で取得したい場合
  const account = {
    name: "yyts",
    password: "asdi30qkd",
    age: 32,
    plan: "Standard",
  } as const;
  type Account = typeof account;
  // type Account = {
  //   readonly name: "yyts";
  //   readonly password: "asdi30qkd";
  //   readonly age: 32;
  //   readonly plan: "Standard";
  // }
  const account2: Account = {
    name: "yyts",
    password: "asdi30qkd",
    age: 32,
    plan: "Standard",
  };
})();
(() => {
  // 特定のプロパティだけを定数値で取得したい場合
  const account = {
    name: "yyts",
    password: "asdi30qkd",
    age: 32,
    plan: "Standard" as "Free" | "Standard" | "Preminum",
  };
  type Account = typeof account;
  // type Account = {
  //   name: string;
  //   password: string;
  //   age: number;
  //   plan: "Standard" | "Free" | "Preminum";
  // }
  const account2: Account = {
    name: "yamada",
    password: "ok38cllec",
    age: 29,
    plan: "Free",
  };
})();
