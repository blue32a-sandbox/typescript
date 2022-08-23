/* 例外処理 (exception) */
(() => {
  try {
    throw new Error("something wrong");
  } catch (e: any) { // useUnknownInCatchVariablesを有効にするとunknown型になる
    console.error(e.message); // "something wrong"
  }

  // catchの分岐
  try {
    throw new Error("something wrong");
  } catch (e) {
    if (e instanceof TypeError) {
      console.error(`Type Error:${e.message}`);
    } else if (e instanceof Error) {
      console.error(`Error:${e.message}`);
    } else {
      console.error(`Other Error:${e}`);
    }
  }

  // try-catchはブロックスコープ
  function getData() {
    try {
      const data = "data";
      console.log(data);
    } catch (e: unknown) {
      return;
    }
    // Cannot find name 'data'.
    // console.log(data);
  }
  getData();

  // finallyブロック
  try {
    console.log("try");
    throw new Error();
  } catch (e) {
    console.error("catch");
  } finally {
    console.log("finally");
  }
})();
