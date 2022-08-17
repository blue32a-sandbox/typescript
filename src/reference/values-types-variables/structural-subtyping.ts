/* 構造的部分型 (structural subtyping) */
(() => {
  // 構造的部分型は、その型の見た目(シグネチャ)が等しければ置換可能である。
  (() => {
    class InputSource {
      public fetch(): string {
        throw new Error("Please implement InputSource and override this method");
      }
    }

    class File extends InputSource {
      public readonly destination: string;

      public constructor(destination: string) {
        super();
        this.destination = destination;
      }

      public fetch(): string {
        return "File data";
      }
    }

    class Request extends InputSource {
      public readonly destination: string;

      public constructor(destination: string) {
        super();
        this.destination = destination;
      }

      public fetch(): string {
        return "Request data";
      }
    }

    const source1: InputSource = new File("/data/~~~.txt");
    const source2: InputSource = new Request("https://~~~~");

    const data1: string = source1.fetch();
    const data2: string = source2.fetch();
    console.log(data1, data2);

    // 異なるサブクラスに変更
    const source3: Request = new File("/data/~~~.txt");
    const source4: File = new Request("https://~~~~");

    const data3: string = source3.fetch();
    const data4: string = source4.fetch();
    console.log(data3, data4);
  })();

  (() => {
    // スーパークラスが異なっていても可換
    class File {
      public destination: string;

      public constructor(destination: string) {
        this.destination = destination;
      }

      public fetch(): string {
        return "File data";
      }
    }

    class Request {
      public destination: string;

      public constructor(destination: string) {
        this.destination = destination;
      }

      public fetch(): string {
        return "Request data";
      }
    }

    const source3: Request = new File("/data/~~~.txt");
    const source4: File = new Request("https://~~~~");

    const data3: string = source3.fetch();
    const data4: string = source4.fetch();
    console.log(data3, data4);
  })();
})();
