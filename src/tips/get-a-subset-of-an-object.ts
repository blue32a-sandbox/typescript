/* オブジェクトのサブセットを得る */
import omit from "lodash.omit";
import pick from "lodash.pick";

(() => {
  // 方法1: 即時関数・分割代入・shorthand property nameの合わせ技
  const profile = {
    name: "suin",
    twitter: "suin",
    github: "suin",
    country: "JP",
    prefecture: "東京都",
    city: "千代田区",
    address: "丸の内2-4-1",
    building: "丸ビル",
    zipcode: "100-6390",
  };
  const sns = (({ twitter, github }) => ({ twitter, github }))(profile);
  console.log(sns); // { twitter: 'suin', github: 'suin' }

  // 除きたいプロパティのほうが少ない場合
  const address = (({ name, twitter, github, ...rest }) => rest)(profile);
  console.log(address);
  // {
  //   country: 'JP',
  //   prefecture: '東京都',
  //   city: '千代田区',
  //   address: '丸の内2-4-1',
  //   building: '丸ビル',
  //   zipcode: '100-6390'
  // }
})();
(() => {
  // 方法2: lodash.pick / lodash.omit
  const profile = {
    name: "suin",
    twitter: "suin",
    github: "suin",
    country: "JP",
    prefecture: "東京都",
    city: "千代田区",
    address: "丸の内2-4-1",
    building: "丸ビル",
    zipcode: "100-6390",
  };
  const sns = pick(profile, ["twitter", "github"]);
  console.log(sns); // { twitter: 'suin', github: 'suin' }

  const address = omit(profile, ["name", "twitter", "github"]);
  console.log(address);
  // {
  //   country: 'JP',
  //   prefecture: '東京都',
  //   city: '千代田区',
  //   address: '丸の内2-4-1',
  //   building: '丸ビル',
  //   zipcode: '100-6390'
  // }
})();
