/* Promise / async / await */
(() => {
  (() => {
    // コールバック地獄
    type Callback<T> = (result: T) => void;

    function request1(callback: Callback<number>) {
      setTimeout(() => {
        callback(1);
      }, 1000);
    }

    function request2(result1: number, callback: Callback<number>) {
      setTimeout(() => {
        callback(result1 + 1);
      }, 1000);
    }

    function request3(result2: number, callback: Callback<number>) {
      setTimeout(() => {
        callback(result2 + 2);
      }, 1000);
    }

    request1((result1) => {
      console.log(1, result1); // 1 1
      request2(result1, (result2) => {
        console.log(1, result2); // 1 2
        request3(result2, (result3) => {
          console.log(1, result3); // 1 4
        });
      });
    });
  })();
  (() => {
    // Promiseとジェネリクス
    function request1(): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 1000);
      });
    }

    function request2(result1: number): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result1 + 1);
        }, 1000);
      });
    }

    function request3(result2: number): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result2 + 2);
        }, 1000);
      });
    }

    request1()
      .then((result1) => {
        console.log(2, result1); // 2 1
        return request2(result1);
      })
      .then((result2) => {
        console.log(2, result2); // 2 2
        return request3(result2);
      })
      .then((result3) => {
        console.log(2, result3); // 2 4
      })
  })();
  (() => {
    function request1(): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(1);
        }, 1000);
      });
    }

    function request2(result1: number): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result1 + 1);
        }, 1000);
      });
    }

    function request3(result2: number): Promise<number> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result2 + 2);
        }, 1000);
      });
    }

    async function main() {
      const result1 = await request1();
      console.log(3, result1);
      const result2 = await request2(result1);
      console.log(3, result2);
      const result3 = await request3(result2);
      console.log(3, result3);
    }

    main();
  })();
})();
