(window.webpackJsonp = window.webpackJsonp || []).push([
  [120],
  {
    sXtI: function (n, t, e) {
      e("D9Op"),
        e("7C78"),
        (function (n) {
          "use strict";
          var t = e("Y4iA"),
            r = e("Lsv5").NatureCoefficients,
            i = [
              "",
              "がんばりや",
              "さみしがり",
              "ゆうかん",
              "いじっぱり",
              "やんちゃ",
              "ずぶとい",
              "すなお",
              "のんき",
              "わんぱく",
              "のうてんき",
              "おくびょう",
              "せっかち",
              "まじめ",
              "ようき",
              "むじゃき",
              "ひかえめ",
              "おっとり",
              "れいせい",
              "てれや",
              "うっかりや",
              "おだやか",
              "おとなしい",
              "なまいき",
              "しんちょう",
              "きまぐれ",
            ],
            o = [
              [1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1],
              [1.1, 0.9, 1, 1, 1],
              [1.1, 1, 1, 1, 0.9],
              [1.1, 1, 0.9, 1, 1],
              [1.1, 1, 1, 0.9, 1],
              [0.9, 1.1, 1, 1, 1],
              [1, 1, 1, 1, 1],
              [1, 1.1, 1, 1, 0.9],
              [1, 1.1, 0.9, 1, 1],
              [1, 1.1, 1, 0.9, 1],
              [0.9, 1, 1, 1, 1.1],
              [1, 0.9, 1, 1, 1.1],
              [1, 1, 1, 1, 1],
              [1, 1, 0.9, 1, 1.1],
              [1, 1, 1, 0.9, 1.1],
              [0.9, 1, 1.1, 1, 1],
              [1, 0.9, 1.1, 1, 1],
              [1, 1, 1.1, 1, 0.9],
              [1, 1, 1, 1, 1],
              [1, 1, 1.1, 0.9, 1],
              [0.9, 1, 1, 1.1, 1],
              [1, 0.9, 1, 1.1, 1],
              [1, 1, 1, 1.1, 0.9],
              [1, 1, 0.9, 1.1, 1],
              [1, 1, 1, 1, 1],
            ],
            l = [
              0, 4, 20, 11, 21, 17, 22, 1, 25, 2, 24, 7, 6, 12, 19, 23, 10, 8,
              16, 13, 15, 5, 3, 14, 18, 9,
            ];
          (t.prototype.numNatures = i.length - 1),
            (t.prototype.natureName = function (n) {
              if ("number" == typeof n) return i[n];
              if ("object" == typeof n) {
                for (var t = [], e = 0; e < n.length; e++) t.push(i[n[e]]);
                return t;
              }
            }),
            (t.prototype.natureNameSortedBy50 = function (n) {
              return this.natureName(sort50[n]);
            }),
            (t.prototype.searchNatureId = function (n) {
              for (var t = 0, e = this.numNatures; e > 0; e--)
                if (n === i[e]) {
                  t = e;
                  break;
                }
              return t;
            }),
            (t.prototype.searchNatureIdListByPartialMatch = function (n) {
              for (
                var t = [],
                  e = [],
                  r = n.romaToHiragana().toHiraganaCase().toZenkakuCase(),
                  o = 1;
                o <= this.numNatures;
                o++
              )
                switch (i[l[o]].indexOf(r)) {
                  case -1:
                    break;
                  case 0:
                    t.push(l[o]);
                    break;
                  default:
                    e.push(l[o]);
                }
              return 0 === t.length && (t = e), t;
            }),
            (t.prototype.natureCoefficients = function (n) {
              return new r([1].concat(o[n]));
            }),
            (t.prototype.natureCoefficientArray = function (n) {
              return [1].concat(o[n]);
            });
        })();
    },  
  }
]);