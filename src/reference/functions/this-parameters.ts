/* this引数 (this parameter) */
(() => {
  class Male {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public toString(): string {
      return `Monsieur ${this.name}`;
    }
  }

  class Female {
    private name: string;

    public constructor(name: string) {
      this.name = name;
    }

    public toString(this: Female): string {
      return `Madame ${this.name}`;
    }
  }

  const male: Male = new Male("Frédéric");
  const female: Female = new Female("Frédérique");
  console.log(male.toString());
  console.log(female.toString());

  const maleToStr: () => string = male.toString;
  const femaleToStr: (this: Female) => string = female.toString;

  // TypeError: Cannot read properties of undefined (reading 'name')
  // console.log(maleToStr());

  // The 'this' context of type 'void' is not assignable to method's 'this' of type 'Female'.
  // console.log(femaleToStr());
})();
