/* 配列の共変性 (covariance) */
(() => {
  (() => {
    // 共変とは
    interface Animal {
      isAnimal: boolean;
    }
    interface Dog extends Animal {
      isDog: boolean;
    }
    let pochi: Dog = { isAnimal: true, isDog: true };
    let animal: Animal = pochi; // 代入OK

    animal = { isAnimal: true };

    // Cannot find name 'poch'. Did you mean 'pochi'?
    // poch = animal;
  })();

  (() => {
    // 配列は共変が許される
    interface Animal {
      isAnimal: boolean;
    }
    interface Dog extends Animal {
      isDog: boolean;
    }
    let pochi: Dog = { isAnimal: true, isDog: true };
    const dogs: Dog[] = [pochi];
    const animals: Animal[] = dogs; // 代入OK
  })();

  (() => {
    // 共変の問題
    interface Animal {
      isAnimal: boolean;
    }
    interface Dog extends Animal {
      wanwan(): string;
    }
    let pochi: Dog = {
      isAnimal: true,
      wanwan() {
        return "wanwan";
      }
    };
    const dogs: Dog[] = [pochi];
    const animals: Animal[] = dogs; // 代入OK
    animals[0] = { isAnimal: true };
    const mayBePochi: Dog | undefined = dogs[0];

    // mayBePochi?.wanwan is not a function
    // mayBePochi?.wanwan();
  })();
})();
