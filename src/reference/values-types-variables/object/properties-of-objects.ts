/* オブジェクトのプロパティ */
(() => {
  const product = {
    name: "ミネラルウォーター",
    price: 100,
    getTaxIncludedPrice: function () {
      return Math.floor(this.price * 1.1);
    },
    shomikigen: new Date("2022-01-20"),
  };
  console.log(product.name);
  console.log(product.price);
  console.log(product.getTaxIncludedPrice());
  console.log(product.shomikigen);

  const object = {
    printHello1: function () {
      console.log("Hello");
    },
    printHello2() {
      console.log("Hello");
    },
  };
  object.printHello1();
  object.printHello2();
})();
