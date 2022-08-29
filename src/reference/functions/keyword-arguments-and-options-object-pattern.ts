/* キーワード引数とOptions Objectパターン */
(() => {
  (() => {
    // Options Objectパターン
    type Options = {
      x: number;
      y: number;
      z: number;
    };
    function func({ x, y, z }: Options) {
      console.log(x, y, z);
    }
    func({ x: 1, y: 2, z: 3 }); // 1 2 3
  })();
  (() => {
    // 引数の値が何を指すのか分かりやすい
    // function findProducts(isSale: boolean, withDetails: boolean, freeShipping: boolean) {}
    // findProducts(true, true, true);

    type Options = {
      isSale: boolean;
      withDetails: boolean;
      freeShipping: boolean;
    };
    function findProducts({ isSale, withDetails, freeShipping }: Options) {}
    findProducts({ isSale: true, withDetails: true, freeShipping: true });
  })();
  (() => {
    // 引数追加時に古いコードを壊さない
    type Options = {
      country: string;
      city: string;
      ageMin: number;
      ageMax: number;
      order: string;
      sort: string;
    };
    function findUsers({ country, city, ageMin, ageMax, order, sort }: Options) {}
    findUsers({
      country: "JP",
      city: "Tokyo",
      ageMin: 10,
      ageMax: 20,
      order: "id",
      sort: "asc",
    });
  })();
  (() => {
    // 引数名を変更する方法
    // function func({ hoge }: { hoge: number }) {
    //   console.log(hoge);
    // }
    function func({ hoge: fuga }: { hoge: number }) {
      console.log(fuga);
    }
    func({ hoge: 123 }); // 123
  })();
  (() => {
    // Option Object自体をオプショナルにする方法
    type Options = {
      x?: number;
      y?: number;
      z?: number;
    };
    function func({ x = 0, y = 0, z = 0 }: Options = {}) {
      console.log(x, y, z);
    }
    func(); // 0 0 0
  })();
})();
