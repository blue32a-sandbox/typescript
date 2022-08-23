/* switch文 */
(() => {
  const extension: string = "ts";
  switch (extension) {
    case "js":
      console.log("JavaScript");
      break;
    case "ts":
      console.log("TypeScript");
      break;
    default:
      console.log("不明な言語");
      break;
  }

  // 連続したcase
  const food: string = "🍙";
  switch (food) {
    case "🍎":
    case "🍓":
    case "🍉":
      console.log("くだもの");
      break;
    case "🍙":
    case "🍜":
    case "🍞":
      console.log("炭水化物");
      break;
    case "🥕":
    case "🧅":
    case "🥬":
      console.log("野菜");
      break;
    default:
      console.log("未知の食べ物");
      break;
  }

  // switchは厳密等価演算
  console.log(null == undefined); // true
  console.log(null === undefined); // false

  function test(n: unknown): void {
    switch (n) {
      case null:
        console.log("THIS IS null");
        return;
      case undefined:
        console.log("THIS IS undefined");
        return;
      default:
        console.log("THIS IS THE OTHER");
        break;
    }
  }
  test(null); // "THIS IS null"
  test(undefined); // "THIS IS undefined"
})();
