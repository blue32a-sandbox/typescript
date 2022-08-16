/* プロトタイプベース */
(() => {
  // プロトタイプベースとは
  const button = {
    name: "ボタン",
  };
  const dangeroseButton = Object.create(button);
  dangeroseButton.name = "絶対に押すなよ？";
  console.log(button.name); // "ボタン"
  console.log(dangeroseButton.name); // "絶対に押すなよ？"

  // 継承
  const counter = {
    count: 0,
    countUp() {
      this.count++;
    },
  };
  const resettableCounter = Object.create(counter);
  resettableCounter.reset = function () {
    this.count = 0;
  }
  console.log(resettableCounter.count); // 0
  resettableCounter.countUp();
  resettableCounter.countUp();
  console.log(resettableCounter.count); // 2
  resettableCounter.reset();
  console.log(resettableCounter.count); // 0
})();
