(window.webpackJsonp = window.webpackJsonp || []).push([
  [128],
  {
    xGtE: function (n, t, e) {
      n.exports = (function () {
        "use strict";
        var n = e("+JDR"),
          t = {},
          r = {},
          i = [
            ["タイプ強化系アイテム", "強化対象の技", "威力*1.2", 1, 0],
            ["ジュエル系アイテム", "強化対象の技", "威力*1.3", 1, 0],
            ["いのちのたま", "", "ダメージ*1.3", 0, 0],
            [
              "こころのしずく",
              "",
              "ラティオス・ラティアスの竜・超技威力*1.2",
              0,
              1,
            ],
            ["こだわりハチマキ", "", "攻撃*1.5", 0, 0],
            ["こだわりメガネ", "", "特攻*1.5", 0, 0],
            ["こんごうだま", "", "ディアルガのみ鋼/竜威力*1.2", 0, 1],
            ["しらたま", "", "パルキアのみ水/竜威力*1.2", 0, 1],
            ["しんかいのキバ", "", "パールルのみ特攻*2", 0, 1],
            ["するどいツメ", "", "急所ランク+1", 0, 0],
            ["たつじんのおび", "", "こうかはばつぐんの時ダメージ*1.2", 0, 0],
            ["ちからのハチマキ", "", "物理威力*1.1", 0, 0],
            ["でんきだま", "", "ピカチュウのみ威力*2", 0, 1],
            ["ながねぎ", "", "カモネギのみ急所ランク+2", 0, 1],
            ["はっきんだま", "", "ギラティナ(オリジン)のみ霊/竜威力*1.2", 0, 1],
            ["ピントレンズ", "", "急所ランク+1", 0, 0],
            ["ふといホネ", "", "カラカラ・ガラガラのみ攻撃*2", 0, 1],
            ["メトロノーム", "", "*1.0", 0, 0],
            ["メトロノーム(2回目)", "", "*1.2", 0, 0],
            ["メトロノーム(3回目)", "", "*1.4", 0, 0],
            ["メトロノーム(4回目)", "", "*1.6", 0, 0],
            ["メトロノーム(5回目)", "", "*1.8", 0, 0],
            ["メトロノーム(6回目以降)", "", "*2", 0, 0],
            ["ものしりメガネ", "", "特殊威力*1.1", 0, 0],
            ["ラッキーパンチ", "", "ラッキーのみ急所ランク+2", 0, 1],
          ];
        (t.getData = (function () {
          for (var t = {}, e = 0; e < i.length; e++) t[i[e][0]] = e;
          return function (e) {
            if (e in t) return i[t[e]];
            throw new n(e + "に特殊な効果はありません。");
          };
        })()),
          (t.getList = (function () {
            for (var n = [], t = 0; t < i.length; t++) n.push(i[t][0]);
            return function () {
              return n;
            };
          })());
        var o = [
          ["タイプ半減系きのみ", "半減対象の技", "ダメージ*0.5", 1, 0],
          ["オボンのみ", "", "HP半分以下でHP/4だけ回復", 0, 0],
          ["きあいのタスキ", "", "HP満タンのとき、一撃で倒されない", 0, 0],
          ["くろいてっきゅう", "", "地面が無効化できない", 0, 0],
          ["しんかいのウロコ", "", "パールルのみ特防*2", 0, 1],
          ["しんかのきせき", "最終進化ではない", "防御/特防*1.5", 1, 0],
          ["たべのこし", "", "毎ターンHP/16だけ回復", 0, 0],
          ["とつげきチョッキ", "", "特防*1.5", 0, 0],
          ["メタルパウダー", "", "メタモンのみ防御*2", 0, 1],
        ];
        return (
          (r.getData = (function () {
            for (var t = {}, e = 0; e < o.length; e++) t[o[e][0]] = e;
            return function (e) {
              if (e in t) return o[t[e]];
              throw new n(e + "に特殊な効果はありません。");
            };
          })()),
          (r.getList = (function () {
            for (var n = [], t = 0; t < o.length; t++) n.push(o[t][0]);
            return function () {
              return n;
            };
          })()),
          {
            ITEM_LIST: [
              "",
              "タイプ強化系アイテム",
              "ジュエル系アイテム",
              "タイプ半減系きのみ",
              "いのちのたま",
              "こころのしずく",
              "こだわりハチマキ",
              "こだわりメガネ",
              "こんごうだま",
              "しらたま",
              "しんかいのキバ",
              "するどいツメ",
              "たつじんのおび",
              "ちからのハチマキ",
              "でんきだま",
              "ながねぎ",
              "はっきんだま",
              "ピントレンズ",
              "ふといホネ",
              "メトロノーム",
              "メトロノーム(2回目)",
              "メトロノーム(3回目)",
              "メトロノーム(4回目)",
              "メトロノーム(5回目)",
              "メトロノーム(6回目以降)",
              "ものしりメガネ",
              "ラッキーパンチ",
              "オボンのみ",
              "きあいのタスキ",
              "くろいてっきゅう",
              "しんかいのウロコ",
              "しんかのきせき",
              "たべのこし",
              "とつげきチョッキ",
              "メタルパウダー",
            ],
            SpecialAttackItem: t,
            SpecialDefenceItem: r,
          }
        );
      })();
    },  
  }
]);