/* 三項演算子 (ternary operator) */
(() => {
  const age = 20;
  const drink = age >= 20 ? "ビール" : "ジュース";
  console.log(drink); // "ビール"

  // ネスト
  function getExtension() {
    return "ts";
  }
  const extension = getExtension();
  const language =
    extension === "js"
      ? "JavaScript"
      : extension === "ts"
        ? "TypeScript"
        : extension === "java"
          ? "Java"
          : "不明";
  console.log(language);
})();
