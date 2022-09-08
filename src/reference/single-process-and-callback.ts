/* シングルプロセス・シングルスレッドとコールバック */
import * as fs from "fs";
(() => {
  (() => {
    // ノンブロッキング
    console.log("first");

    setTimeout(() => {
      console.log("second"); // 0ミリ秒でも"third"の後になる
    }, 0);

    console.log("third");
  })();
  (() => {
    // ブロッキング
    console.log("start");

    const data = fs.readFileSync('./README.md');
    console.log(data);

    console.log("end");
  })();
  (() => {
    // ノンブロッキング
    console.log("start");

    fs.readFile('./README.md', (err, data) => {
      if (err) throw err;
      console.log(data); // "end"の後になる
    });

    console.log("end");
  })();
})();
