/* ジェネレーター (generator) */
(() => {
  function* generatorFunction1() {
    yield 1;
    yield 2;
  }
  const iterator1 = generatorFunction1();
  console.log(iterator1.next()); // { value: 1, done: false }
  console.log(iterator1.next()); // { value: 2, done: false }
  console.log(iterator1.next()); // { value: undefined, done: true }

  const generatorFunction2 = function* () {
    yield 'a';
    yield 'b';
  };
  const iterator2 = generatorFunction2();
  console.log(iterator2.next()); // { value: 'a', done: false }
  console.log(iterator2.next()); // { value: 'b', done: false }
  console.log(iterator2.next()); // { value: undefined, done: true }

  class GeneratorSample {
    public *generatorFunction3() {
      yield 'A';
      yield 'B';
    }
  }
  const generatorSample = new GeneratorSample();
  const iterator3 = generatorSample.generatorFunction3();
  console.log(iterator3.next()); // { value: 'A', done: false }
  console.log(iterator3.next()); // { value: 'B', done: false }
  console.log(iterator3.next()); // { value: undefined, done: true }
})();
