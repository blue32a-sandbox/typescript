/* if-else文 */
(() => {
  let value = 0;
  if (value === 0) {
    console.log("valueは0です。");
  } else if (value === 1) {
    console.log("valueは1です。");
  } else {
    console.log("valueは0でも1でもありません。");
  }

  // if-elseは式ではないので、こんな書き方はできない
  // const result = if (value === 0) "OK" else "NG";

  // 式で条件分岐を使いたい場合は三項演算子(ternary operator)を使う
  const result = value === 0 ? "OK" : "NG";
  console.log(result);
})();
