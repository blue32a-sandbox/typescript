/* switchと変数スコープ */
(() => {
  // switchごとに変数スコープが作られる
  switch (
    true // 変数スコープその1
  ) {
    default:
      console.log(1);
      switch (
        true // 変数スコープその2
      ) {
        default:
          console.log(2);
      }
  }

  (() => {
    // caseの変数スコープはない
    let x = 1;
    switch (x) {
      case 1:
        // Cannot redeclare block-scoped variable 'sameName'.
        // const sameName = "A";
        break;
      case 2:
        // Cannot redeclare block-scoped variable 'sameName'.
        // const sameName = "B";
        break;
    }
  })();

  (() => {
    // caseに変数スコープを作る方法
    let x = 1;
    switch (x) {
      case 1:{
        const sameName = "A";
        console.log(sameName);
        break;
      }
      case 2: {
        const sameName = "B";
        console.log(sameName);
        break;
      }
    }
  })();
})();
