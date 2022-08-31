/* クラスのreadonly修飾子 */
(() => {
  class Octopus {
    readonly name: string;
    readonly legs = 8;
    constructor() {
      this.name = "たこちゃん";
    }
    setName(newName: string): void {
      // Cannot assign to 'name' because it is a read-only property.
      // this.name = newName;
    }
  }
  const octopus = new Octopus();

  // Cannot assign to 'legs' because it is a read-only property.
  // octopus.legs = 10;

  console.log(octopus.name, octopus.legs); // "たこちゃん" 8
})();
