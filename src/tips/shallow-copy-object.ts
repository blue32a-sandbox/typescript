/* オブジェクトを浅くコピーする */
(() => {
  type MealsPerDay = {
    breakfast: string;
    lunch: string;
    dinner: string;
  };

  function willBeMetabo(meals: MealsPerDay): boolean {
    return true;
  }

  function isMeal(meal: string): boolean {
    return true;
  }

  function isMeals(meals: MealsPerDay): void {
    // 上書きしてしまった！
    meals.breakfast = "a beef steak";
    meals.lunch = "a bucket of ice cream";
    meals.dinner = "3 pizzas";

    if (!isMeal(meals.breakfast)) {
      throw new Error("BREAKFAST IS NOT A MEAL!");
    }
    if (!isMeal(meals.lunch)) {
      throw new Error("LUNCH IS NOT A MEAL!!!");
    }
    if (!isMeal(meals.dinner)) {
      throw new Error("DINNER IS NOT A MEAL!!!");
    }
  }

  function shallowCopy(obj: MealsPerDay): MealsPerDay {
    return { ...obj };
  }

  function shouldBeCareful(meals: MealsPerDay): boolean {
    try {
      const scapegoat: MealsPerDay = shallowCopy(meals);
      console.log(meals);
      console.log(scapegoat);

      isMeals(scapegoat); // ここで上書きされているが、

      console.log(meals);
      console.log(scapegoat);

      // ここは上書きから守られる
      return willBeMetabo(meals);
    } catch (err: unknown) {
      console.error(err);
      throw err;
    }
  }

  const meals: MealsPerDay = {
    breakfast: "a vegetable salad",
    lunch: "a cod's meuniere",
    dinner: "a half bottle of wine (white)",
  };

  console.log(shouldBeCareful(meals));
})();
(() => {
  /* Map<K, V>のコピー */
  const map1 = new Map([
    [".js", "JS"],
    [".ts", "TS"],
  ]);
  const map2 = map1;
  console.log(map2); // Map(2) { '.js' => 'JS', '.ts' => 'TS' }
  console.log(map1 === map2); // true

  const map3 = new Map(map1); // コピー
  console.log(map3); // Map(2) { '.js' => 'JS', '.ts' => 'TS' }
  console.log(map1 === map3); // false

  map1.set(".txt", "TXT");
  console.log(map2); // Map(3) { '.js' => 'JS', '.ts' => 'TS', '.txt' => 'TXT' }
  console.log(map3); // Map(2) { '.js' => 'JS', '.ts' => 'TS' }
})();
(() => {
  /* Set<T>のコピー */
  const set1 = new Set([1, 2, 3]);
  const set2 = set1;
  console.log(set2); // Set(3) { 1, 2, 3 }
  console.log(set1 === set2); // true

  const set3 = new Set(set1); // コピー
  console.log(set3); // Set(3) { 1, 2, 3 }
  console.log(set1 === set3); // false

  set1.add(4);
  console.log(set2); // Set(4) { 1, 2, 3, 4 }
  console.log(set3); // Set(3) { 1, 2, 3 }
})();
(() => {
  const arr1 = [1, 2, 3];
  const arr2 = arr1;
  console.log(arr2); // [ 1, 2, 3 ]
  console.log(arr1 === arr2); // true

  const arr3 = [...arr1]; // コピー
  console.log(arr3); // [ 1, 2, 3 ]
  console.log(arr1 === arr3); // false

  arr1.push(4);
  console.log(arr2); // [ 1, 2, 3, 4 ]
  console.log(arr3); // [ 1, 2, 3 ]
})();
