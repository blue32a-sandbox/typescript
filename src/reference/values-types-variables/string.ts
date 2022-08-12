/* 文字列型 (string type) */
(() => {
  console.log("Hello");
  console.log('Hello');
  console.log(`Hello`);
  console.log('He said "madam, I\'m Adam."');
  console.log("He said \"madam, I'm Adam.\"");
  console.log("hoge\nfuga");
  console.log('hoge\nfuga');

  // テンプレートリテラル
  const count = 10;
  console.log(`現在、${count}名が見ています。`);
  console.log(`税込み${Math.floor(100 * 1.1)}円`);

  // 文字列の型注釈
  const message: string = "Hello";

  // 文字列結合
  console.log("hello" + "world");
})();
