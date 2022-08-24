/* 制御フロー分析と型ガードによる型の絞り込み */
(() => {
  (() => {
    // ユニオン型と曖昧さ
    function showMonth(month: string | number) {
      // Property 'padStart' does not exist on type 'string | number'.
      // Property 'padStart' does not exist on type 'number'.
      // console.log(month.padStart(2, "0"));
    }
  })();

  (() => {
    // 制御フロー分析
    function showMonth(month: string | number) {
      // string型であることを条件判定を追加することでエラーを解消することができる
      // 型ガードと呼ぶ
      if (typeof month === "string") {
        console.log(month.padStart(2, "0"));
      }
    }
    showMonth("7"); // "07"
  })();

  (() => {
    // もう少し複雑な例
    function showMonth(month: string | number) {
      if (typeof month === "string") {
        console.log(month.padStart(2, "0"));
        return; // 早期リターンすることで
      }
      // ここはnumber型のみと判断され
      console.log(month.toFixed()); // エラーが解消される
    }
    showMonth("7"); // "07"
    showMonth(7); // 7
  })();
})();
