/* オブジェクトの分割代入 (destructuring assignment) */
(() => {
  const item = { price: 100 };
  const { price } = item;
  console.log(price); // 100

  (() => {
    // 複数のプロパティを取り出す
    const obj = { a: 1, b: 2 };
    const { a, b } = obj;
    console.log(a); // 1
    console.log(b); // 2
  })();

  (() => {
    // 代入する変数名の指定
    const color = { r: 0, g: 122, b: 204, a: 1 };
    const { r: red, g: green,  b: blue, a: alpha } = color;
    console.log(red); // 0
    console.log(green); // 122
    console.log(blue); // 204
    console.log(alpha); // 1
  })();

  (() => {
    // 入れ子構造の分割代入
    const continent = {
      name: "北アメリカ",
      us: {
        name: "アメリカ合衆国",
        capitalCity: "ワシントンD.C.",
      },
    };
    const {
      us: { name, capitalCity },
    } = continent;
    console.log(name); // "アメリカ合衆国"
    console.log(capitalCity); // "ワシントンD.C."

    // 入れ子構造の分割代入と変数名の指定
    const {
      name: continentName,
      us: { name: countryName }
    } = continent;
    console.log(continentName); // "北アメリカ"
    console.log(countryName); // "アメリカ合衆国"
  })();

  (() => {
    // 分割代入のデフォルト値
    const color = { r: undefined, g: 122, b: 204, a: null };
    const { r = 0, g = 0, b = 0, a = 0 } = color;
    console.log(r, g, b, a); // 0 122 204 null
  })();

  (() => {
    // デフォルト値と変数名の指定
    const color = { r: undefined, g: 122, b: 204 };
    const { r: red = 0 } = color;
    console.log(red); // 0
  })();
})();
