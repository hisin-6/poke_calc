(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    ObVC: function (n, t, e) {
      n.exports = (function () {
        "use strict";
        var n = e("+JDR"),
          t = {},
          r = [
            ["ＤＤラリアット", "", "対象のランク変化を無視", 0, 0],
            ["Ｇのちから", "", "じゅうりょく状態で威力*1.5", 0, 0],
            ["アイスボール", "まるくなる", "威力*2", 0, 0],
            ["アクロバット", "持ち物なし", "威力*2", 1, 0],
            ["イカサマ", "", '相手の"こうげき"で攻撃', 0, 0],
            ["ウェザーボール", "", "天候に応じタイプ変化/威力*2", 0, 0],
            ["うっぷんばらし", "ランクが下がった直後", "威力*2", 1, 0],
            ["うずしお", "対象が水中", "威力*2", 0, 0],
            ["エラがみ", "先行", "威力*2", 1, 0],
            ["おいうち", "対象が交代時", "威力*2", 1, 0],
            ["かぜおこし", "対象が空中", "威力*2", 0, 0],
            ["かたきうち", "前ターンに味方が倒された", "威力*2", 1, 0],
            ["からげんき", "自分がどく/やけど/まひ", "威力*2", 0, 1],
            ["かわらわり", "", "壁を破壊する", 0, 0],
            ["きつけ", "対象がまひ", "威力*2", 0, 1],
            ["きょじゅうざん", "", "ダイマックスに対しダメージ*2", 0, 0],
            ["きょじゅうだん", "", "ダイマックスに対しダメージ*2", 0, 0],
            ["くさのちかい", "みずのちかいと合体", "威力150", 0, 0],
            ["ころがる", "まるくなる", "威力*2", 0, 0],
            ["サイコショック", "", "物理攻撃", 0, 0],
            ["サイコファング", "", "壁を破壊する", 0, 0],
            ["サイコブレイク", "", "物理攻撃", 0, 0],
            ["サウザンアロー", "", "対象をうちおとす", 0, 0],
            ["シェルアームズ", "", "その方が有効なら物理攻撃", 0, 0],
            ["しおみず", "対象のHPが半分以下", "威力*2", 0, 1],
            ["じしん", "対象が地中", "威力*2", 0, 0],
            ["じだんだ", "前のターンに技が失敗", "威力*2", 1, 0],
            ["しっぺがえし", "後攻", "威力*2", 1, 0],
            ["じばく", "対象が2体以下", "ダブル補正なし", 0, 0],
            ["しんぴのつるぎ", "", "物理攻撃", 0, 0],
            ["せいなるつるぎ", "", "対象のランク変化を無視", 0, 0],
            ["ソーラービーム", "", "悪天候でダメージ*0.5", 0, 0],
            ["だいばくはつ", "対象が2体以下", "ダブル補正なし", 0, 0],
            ["ダイマックスほう", "", "ダイマックスに対しダメージ*2", 0, 0],
            ["たたりめ", "対象が状態異常", "威力*2", 0, 1],
            ["たつまき", "対象が空中", "威力*2", 0, 0],
            ["ダメおし", "対象がダメージを受けた後", "威力*2", 1, 0],
            ["でんげきくちばし", "先行", "威力*2", 1, 0],
            ["ドラゴンダイブ", "対象がちいさくなる", "威力*2", 0, 0],
            ["なしくずし", "", "対象のランク変化を無視", 0, 0],
            ["なみのり", "対象が水中", "威力*2", 0, 0],
            ["のしかかり", "対象がちいさくなる", "威力*2", 0, 0],
            ["ハードローラー", "対象がちいさくなる", "威力*2", 0, 0],
            ["はたきおとす", "対象がアイテム所持", "威力*1.5?", 1, 0],
            ["ヒートスタンプ", "対象がちいさくなる", "威力*2", 0, 0],
            ["ふみつけ", "対象がちいさくなる", "威力*2", 0, 0],
            ["フライングプレス", "対象がちいさくなる", "威力*2", 0, 0],
            ["フリーズドライ", "", "みずタイプに効果抜群", 0, 0],
            ["ベノムショック", "対象がどく", "威力*2", 0, 1],
            ["ヘビーボンバー", "対象がちいさくなる", "威力*2", 0, 0],
            ["ボディプレス", "", "防御でダメージ計算", 0, 0],
            ["ほのおのちかい", "くさのちかいと合体", "威力150", 0, 0],
            ["マグニチュード", "対象が地中", "威力*2", 0, 0],
            ["ミストバースト", "", "ミストフィールド時威力*1.5", 0, 0],
            ["みずのちかい", "ほのおのちかいと合体", "威力150", 0, 0],
            ["めざましビンタ", "対象がねむり", "威力*2", 0, 1],
            ["ゆきなだれ", "反撃時", "威力*2", 1, 0],
            ["ライジングボルト", "", "エレキフィールド時威力*2", 0, 0],
            ["リベンジ", "反撃時", "威力*2", 1, 0],
            ["りんしょう", "仲間がりんしょうを使った", "威力*2", 0, 0],
          ];
        return (
          (t.getData = (function () {
            for (var t = {}, e = 0; e < r.length; e++) t[r[e][0]] = e;
            return function (e) {
              if (e in t) return r[t[e]];
              throw new n(e + "に特殊な効果はありません。");
            };
          })()),
          (t.getList = (function () {
            for (var n = [], t = 0; t < r.length; t++) n.push(r[t][0]);
            return function () {
              return n;
            };
          })()),
          { SpecialMove: t }
        );
      })();
    },  
  }
]);