/* import、export、require */
import "./import-export-require/module"; // "モジュールの評価"
import "./import-export-require/module";
import { value } from "./import-export-require/module";

import increment from "./import-export-require/increment";
import { increment as inc } from "./import-export-require/util";

(() => {
  console.log(value); // 1

  console.log(increment(3)); // 4
  console.log(inc(3)); // 4
})();
