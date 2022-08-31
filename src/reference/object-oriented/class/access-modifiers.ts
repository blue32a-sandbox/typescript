/* アクセス修飾子 (access modifier) */
(() => {
  (() => {
    // public
    class Animal {
      public name: string;

      public constructor(theName: string) {
        this.name = theName;
      }

      public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
    }
    const gorilla = new Animal("ゴリラ");
    gorilla.move(10); // "ゴリラ moved 10m."
    gorilla.name = "ゴリラゴリラ";
    gorilla.move(20); // "ゴリラゴリラ moved 20m."
  })();
  (() => {
    // protected
    class Animal {
      public name: string;

      public constructor(theName: string) {
        this.name = theName;
      }

      protected move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }

      public hoge(distanceInMeters: number) {
        this.move(distanceInMeters);
      }
    }
    const gorilla = new Animal("ゴリラ");
    // Property 'move' is protected and only accessible within class 'Animal'
    // and its subclasses.
    // gorilla.move(10);
    gorilla.hoge(10); // "ゴリラ moved 10m."

    class Gorilla extends Animal {
      // move(distanceInMeters: number) {
      //   super.move(distanceInMeters * 10);
      // }

      public moveFaster(distanceInMeters: number) {
        this.move(distanceInMeters * 10);
      }
    }
    const gorilla2 = new Gorilla("速いゴリラ");
    // gorilla2.move(10); // "速いゴリラ moved 100m."
    gorilla2.moveFaster(10); // "速いゴリラ moved 100m."
  })();
  (() => {
    // private
    class Animal {
      public name: string;
      public constructor(theName: string) {
        this.name = theName;
      }

      // `public`から`private`に変更
      private move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
      }

      public hoge(distanceInMeters: number) {
        this.move(distanceInMeters);
      }
    }
    const gorilla = new Animal("ゴリラ");
    // Property 'move' is private and only accessible within class 'Animal'.
    // gorilla.move(10);
    gorilla.hoge(10); // "ゴリラ moved 10m."

    // Class 'Gorilla' incorrectly extends base class 'Animal'.
    // Property 'move' is private in type 'Animal' but not in type 'Gorilla'.
    class Gorilla extends Animal {
      // move(distanceInMeters: number) {
      //   // Property 'move' is private and only accessible within class 'Animal'.
      //   super.move(distanceInMeters * 10);
      // }

      public moveFaster(distanceInMeters: number) {
        // Property 'move' is private and only accessible within class 'Animal'.
        // this.move(distanceInMeters * 10);
      }
    }
  })();
})();
