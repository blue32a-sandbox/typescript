/* コンパニオンオブジェクトパターン */
import { Rectangle } from "./rectangle";

(() => {
  const rec: Rectangle = Rectangle.from(10, 30);
  console.log(rec.height); // 10
  console.log(rec.width); // 30
})();
