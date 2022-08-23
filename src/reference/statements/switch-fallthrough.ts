/* switchのフォールスルー問題 */
(() => {
  let s = "A";
  switch (s) {
    case "A": // breakが無い分岐
      console.log(1);
    case "B": // この分岐にも処理が続く
      console.log(2);
  }
})();
