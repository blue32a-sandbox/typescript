/* 抽象クラス (abstract class) */
(() => {
  abstract class Food {
    constructor(protected name: string, protected calorie: number) {}
    showDebug() {
      console.log(`name = ${this.name}`);
      console.log(`calorie = ${this.calorie}kcal`);
    }
    abstract keepRefrigerated(): boolean;
  }

  // Non-abstract class 'Meat' does not implement inherited abstract
  // member 'keepRefrigerated' from class 'Food'.
  // class Meat extends Food {}

  class Meat extends Food {
    keepRefrigerated(): boolean {
        return true;
    }
  }
  const beef = new Meat("beef", 298);
  console.log(beef.keepRefrigerated()); // true
  beef.showDebug();
})();
