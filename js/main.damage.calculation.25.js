(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    "9NG2": function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t = e("uKus"),
          r = e("YFCf"),
          i = e("5Dxv"),
          o = e("5CXe"),
          l = new r(),
          u = function (n, t) {
            (this.parameters = n),
              (this.descriptions = t || u.getInitialDescriptions());
          };
        (u.prototype.calculate = function (n, e, r, o) {
          o = o || {};
          var d = this.getOrganizedParameters(n, e, r),
            h = this.descriptions,
            g = d.attacker,
            v = d.defender,
            m = d.environment,
            S = d.move,
            O = S.type,
            P = u.getWeather(d);
          if (S.is("ウェザーボール"))
            switch (P) {
              case "はれ":
              case "つよいはれ":
                (O = "ほのお"),
                  h.type.push({
                    trigger: "ウェザーボール",
                    description: "はれ状態でほのおタイプに変化",
                  });
                break;
              case "あめ":
              case "つよいあめ":
                (O = "みず"),
                  h.type.push({
                    trigger: "ウェザーボール",
                    description: "あめ状態でみずタイプに変化",
                  });
                break;
              case "すなあらし":
                (O = "いわ"),
                  h.type.push({
                    trigger: "ウェザーボール",
                    description: "すなあらし状態でいわタイプに変化",
                  });
                break;
              case "あられ":
                (O = "こおり"),
                  h.type.push({
                    trigger: "ウェザーボール",
                    description: "あられ状態でこおりタイプに変化",
                  });
            }
          if ("ノーマル" === O)
            switch (g.ability) {
              case "フェアリースキン":
                (O = "フェアリー"),
                  h.type.push({
                    trigger: "フェアリースキン",
                    description: "ノーマル技がフェアリータイプに変化",
                  });
                break;
              case "スカイスキン":
                (O = "ひこう"),
                  h.type.push({
                    trigger: "スカイスキン",
                    description: "ノーマル技がひこうタイプに変化",
                  });
                break;
              case "フリーズスキン":
                (O = "こおり"),
                  h.type.push({
                    trigger: "フリーズスキン",
                    description: "ノーマル技がこおりタイプに変化",
                  });
                break;
              case "エレキスキン":
                (O = "でんき"),
                  h.type.push({
                    trigger: "エレキスキン",
                    description: "ノーマル技がでんきタイプに変化",
                  });
            }
          else
            "ノーマルスキン" === g.ability &&
              ((O = "ノーマル"),
              h.type.push({
                trigger: "ノーマルスキン",
                description: "技がノーマルタイプに変化",
              }));
          "うるおいボイス" !== g.ability ||
            (S.data && !Boolean(S.data[31])) ||
            ((O = "みず"),
            h.type.push({
              trigger: "うるおいボイス",
              description: "音技がみずタイプに変化",
            })),
            "でんき" !== O && g.conditions["そうでん"]
              ? ((O = "でんき"),
                h.type.push({
                  trigger: "そうでん",
                  description: "技がでんきタイプに変化",
                }))
              : "ノーマル" === O &&
                m.conditions["プラズマシャワー"] &&
                ((O = "でんき"),
                h.type.push({
                  trigger: "プラズマシャワー",
                  description: "ノーマル技がでんきタイプに変化",
                }));
          var A = g.types.slice(0),
            I = v.types.slice(0);
          g.conditions["みずびたし"] &&
            ((A = ["みず"]),
            h.type.push({
              trigger: "みずびたし",
              description: "みずタイプになる",
            })),
            v.conditions["みずびたし"] &&
              ((I = ["みず"]),
              h.type.push({
                trigger: "みずびたし",
                description: "みずタイプになる",
              })),
            g.conditions["ハロウィン"]
              ? (A.push("ゴースト"),
                h.type.push({
                  trigger: "ハロウィン",
                  description: "ゴーストタイプを追加",
                }))
              : g.conditions["もりののろい"] &&
                (A.push("くさ"),
                h.type.push({
                  trigger: "もりののろい",
                  description: "くさタイプを追加",
                })),
            v.conditions["ハロウィン"]
              ? (I.push("ゴースト"),
                h.type.push({
                  trigger: "ハロウィン",
                  description: "ゴーストタイプを追加",
                }))
              : v.conditions["もりののろい"] &&
                (I.push("くさ"),
                h.type.push({
                  trigger: "もりののろい",
                  description: "くさタイプを追加",
                })),
            ("へんげんじざい" !== g.ability && "リベロ" !== g.ability) ||
              ((A = S.is("フライングプレス") ? [O, "ひこう"] : [O]),
              h.type.push({
                trigger: g.ability,
                description: "直後に出す技のタイプになる",
              }));
          var T,
            D = I.reduce(c(d, O, h.type), 0);
          S.is("フライングプレス") &&
            ((D = I.reduce(c(d, "ひこう", h.type), D)),
            h.type.push({
              trigger: "フライングプレス",
              description: "かくとうタイプかつひこうタイプ",
            })),
            t.index(A, O) >= 0 ||
            (S.is("フライングプレス") && t.index(A, "ひこう"))
              ? "てきおうりょく" === g.ability
                ? ((T = 2),
                  h.damage.push({
                    trigger: "てきおうりょく",
                    description: "タイプ一致ダメージ2倍",
                  }))
                : ((T = 1.5),
                  h.damage.push({
                    trigger: "タイプ一致",
                    description: "ダメージ1.5倍",
                  }))
              : (T = 1),
            (d.meta = E(
              {
                move: {
                  type: O,
                  category: S.category,
                  withContact: !S.data || Boolean(S.data[5]),
                },
                effectiveness: D <= -9 ? 0 : D >= 0 ? 1 << D : 1 / (1 << -D),
                stab: T,
                weather: P,
                attacker: { types: A },
                defender: { types: I },
              },
              o
            ));
          var M,
            j,
            N,
            R,
            F,
            V,
            L = S.POW;
          if (0 === L && !v.dynamax)
            if (S.is("けたぐり") || S.is("くさむすび"))
              L =
                (H = l.weight(v.id)) >= 200
                  ? 120
                  : H >= 100
                  ? 100
                  : H >= 50
                  ? 80
                  : H >= 25
                  ? 60
                  : H >= 10
                  ? 40
                  : 20;
            else if (S.is("ヒートスタンプ") || S.is("ヘビーボンバー")) {
              var H,
                U = l.weight(g.id);
              L =
                U >= 5 * (H = l.weight(v.id))
                  ? 120
                  : U >= 4 * H
                  ? 100
                  : U >= 3 * H
                  ? 80
                  : U >= 2 * H
                  ? 60
                  : 40;
            }
          S.is("シェルアームズ") &&
            u.boostStatus(g.ATK, g.rATK) / u.boostStatus(v.DEF, v.rDEF) >
              u.boostStatus(g.SAT, g.rSAT) / u.boostStatus(v.SDF, v.rSDF) &&
            ((d.meta.move = E(
              d.meta.move,
              { category: 1, withContact: !0 },
              o.move || {}
            )),
            h.ATK.push({
              trigger: "シェルアームズ",
              description:
                "その方がより多くダメージが与えられる時、物理攻撃になる",
            }));
          var B,
            z,
            W,
            K,
            G,
            q = m.conditions["ワンダールーム"];
          if (1 === d.meta.move.category)
            S.is("イカサマ")
              ? ((M = v.ATK),
                (N = v.rATK),
                (F = "攻撃"),
                h.ATK.push({
                  trigger: "イカサマ",
                  description: "対象の攻撃と攻撃ランクでダメージ計算",
                }))
              : S.is("ボディプレス")
              ? ((M = g.DEF),
                q
                  ? ((N = g.rSDF),
                    h.DEF.push({
                      trigger: "ワンダールーム",
                      description: "ボディプレスでは特防ランクを使う",
                    }))
                  : (N = g.rDEF),
                (F = "防御"),
                h.ATK.push({
                  trigger: "ボディプレス",
                  description: "対象の防御と防御ランクでダメージ計算",
                }))
              : ((M = g.ATK), (N = g.rATK), (F = "攻撃")),
              q
                ? ((j = v.SDF),
                  (R = v.rDEF),
                  (V = "特防"),
                  h.DEF.push({
                    trigger: "ワンダールーム",
                    description: "防御と特防を入れ替える",
                  }))
                : ((j = v.DEF), (R = v.rDEF), (V = "防御"));
          else {
            (M = g.SAT), (N = g.rSAT), (F = "特攻");
            var Y =
              S.is("サイコショック") ||
              S.is("サイコブレイク") ||
              S.is("しんぴのつるぎ");
            Y || q
              ? Y && q
                ? ((j = v.SDF),
                  (R = v.rDEF),
                  (V = "特防"),
                  h.DEF.push({
                    trigger: S.name,
                    description: "対象の防御と防御ランクでダメージ計算",
                  }),
                  h.DEF.push({
                    trigger: "ワンダールーム",
                    description: "防御と特防を入れ替える",
                  }))
                : Y
                ? ((j = v.DEF),
                  (R = v.rDEF),
                  (V = "防御"),
                  h.DEF.push({
                    trigger: S.name,
                    description: "対象の防御と防御ランクでダメージ計算",
                  }))
                : ((j = v.DEF),
                  (R = v.rSDF),
                  (V = "防御"),
                  h.DEF.push({
                    trigger: "ワンダールーム",
                    description: "防御と特防を入れ替える",
                  }))
              : ((j = v.SDF), (R = v.rSDF), (V = "特防"));
          }
          if (!S.dynamax && S.name in y) {
            var $ = y[S.name];
            $.condition(d) &&
              ((L = $.modify(L)),
              h.POW.push({ trigger: S.name, description: $.description }));
          }
          (z = K = M),
            (W = G = j),
            "てんねん" === v.ability &&
              N &&
              ((N = 0),
              h.ATK.push({
                trigger: "てんねん",
                description: F + "ランクを無視してダメージ計算",
              })),
            "てんねん" === g.ability &&
              R &&
              ((R = 0),
              h.DEF.push({
                trigger: "てんねん",
                description: V + "ランクを無視してダメージ計算",
              })),
            (S.is("せいなるつるぎ") ||
              S.is("なしくずし") ||
              S.is("ＤＤラリアット")) &&
              R &&
              ((R = 0),
              h.DEF.push({
                trigger: S.name,
                description: V + "ランクを無視してダメージ計算",
              })),
            N &&
              ((z = u.boostStatus(z, N)),
              (K = N > 0 ? u.boostStatus(K, N) : K),
              h.ATK.push({
                trigger: F + "ランク補正",
                description:
                  F +
                  (N > 0
                    ? (N + 2).toString() + "/2倍"
                    : "2/" + (2 - N).toString() + "倍 (急所時1倍)"),
              })),
            R &&
              ((W = u.boostStatus(W, R)),
              (G = R < 0 ? u.boostStatus(G, R) : G),
              h.DEF.push({
                trigger: V + "ランク補正",
                description:
                  V +
                  (R > 0
                    ? (R + 2).toString() + "/2倍 (急所時1倍)"
                    : "2/" + (2 - R).toString() + "倍"),
              })),
            "はりきり" === g.ability &&
              1 === d.meta.move.category &&
              ((z = a(z, 6144)),
              (K = a(K, 6144)),
              h.ATK.push({
                trigger: "はりきり",
                description: F + "攻撃1.5倍",
              })),
            "すなあらし" === m.weather &&
              t.index(I, "いわ") >= 0 &&
              2 === d.meta.move.category &&
              ((W = a(W, 6144)),
              (G = a(G, 6144)),
              h.DEF.push({
                trigger: "いわタイプ",
                description: "天候がすなあらしのとき、特防1.5倍",
              }));
          var Z,
            Q = b.reduce(s(d, h.POW), 4096),
            J = _.reduce(s(d, h.ATK), 4096),
            X = w.reduce(s(d, h.DEF), 4096);
          if (
            ((B = a(L, Q)),
            (z = a(z, J)),
            (W = a(W, X)),
            (K = a(K, J)),
            (G = a(G, X)),
            (d.meta = E(
              {
                move: { POW: B },
                attacker: { ATK: z, ATK_CH: K },
                defender: { DEF: W, DEF_CH: G },
              },
              d.meta
            )),
            0 === d.meta.move.POW)
          )
            return (
              h.POW.push({
                trigger: S.name,
                description: "威力が取得できませんでした",
              }),
              new i([], f(d), h, d)
            );
          if (v.conditions["まもる"])
            if (S.dynamax || (S.data && !Boolean(S.data[6])))
              h.damage.push({
                trigger: S.name,
                description: "「まもる」を貫通する",
              });
            else {
              if ("ふかしのこぶし" !== g.ability || !d.meta.move.withContact) {
                Z = [];
                for (var nn = 0; nn < 32; nn++) Z[nn] = 0;
                return (
                  h.damage.push({
                    trigger: "まもる",
                    description: "攻撃を無効化する",
                  }),
                  new i(Z, f(d), h, d)
                );
              }
              h.damage.push({
                trigger: g.ability,
                description: "「まもる」を貫通する",
              });
            }
          if (D <= -9) {
            for (Z = [], nn = 0; nn < 32; nn++) Z[nn] = 0;
            return new i(Z, f(d), h, d);
          }
          var tn = Math.floor(
              Math.floor((Math.floor((2 * g.lv) / 5 + 2) * B * z) / W) / 50 + 2
            ),
            en = Math.floor(
              Math.floor((Math.floor((2 * g.lv) / 5 + 2) * B * K) / G) / 50 + 2
            ),
            rn = d.arrangement.attacker.on.length,
            on = d.arrangement.defender.on.length;
          if (
            ("ダブルバトル" === m.battleRule &&
              S.isMultiTarget() &&
              on >= 2 &&
              ((!S.is("じばく") && !S.is("だいばくはつ")) ||
                !(S.activated || rn + on <= 2)) &&
              ((tn = a(tn, 3072)),
              (en = a(en, 3072)),
              h.damage.push({
                trigger: "複数対象攻撃",
                description: "ダメージ0.75倍 (乱数化前)",
              })),
            P)
          ) {
            if (
              ("つよいあめ" === P && "ほのお" === O) ||
              ("つよいはれ" === P && "みず" === O)
            ) {
              for (Z = [], nn = 0; nn < 32; nn++) Z[nn] = 0;
              return (
                h.damage.push({
                  trigger: "天候による無効化(" + P + ")",
                  description: O + "タイプの技のダメージ無効化",
                }),
                new i(Z, f(d), h, d)
              );
            }
            (("あめ" === P || "つよいあめ" === P) && "みず" === O) ||
            (("はれ" === P || "つよいはれ" === P) && "ほのお" === O)
              ? ((tn = a(tn, 6144)),
                (en = a(en, 6144)),
                h.damage.push({
                  trigger: "天候補正↑(" + P + ")",
                  description: O + "タイプの技のダメージ1.5倍 (乱数化前)",
                }))
              : ("あめ" === P && "ほのお" === O) ||
                ("はれ" === P && "みず" === O)
              ? ((tn = a(tn, 2048)),
                (en = a(en, 2048)),
                h.damage.push({
                  trigger: "天候補正↓(" + P + ")",
                  description: O + "タイプの技のダメージ0.5倍 (乱数化前)",
                }))
              : "らんきりゅう" === P &&
                t.index(I, "ひこう") >= 0 &&
                x[k["ひこう"]][k[O]] > 0 &&
                ((tn = a(tn, 2048)),
                (en = a(en, 2048)),
                h.damage.push({
                  trigger: "天候補正↓(" + P + ")",
                  description: "ひこうタイプの弱点ダメージ0.5倍 (乱数化前)",
                }));
          } else
            d.environment.weather &&
              h.others.push(
                "ノーてんき" === d.attacker.ability ||
                  "ノーてんき" === d.defender.ability
                  ? {
                      trigger: "ノーてんき",
                      description: "天候の影響を受けない",
                    }
                  : {
                      trigger: "エアロック",
                      description: "天候の影響を受けない",
                    }
              );
          if (
            "サイコフィールド" === d.environment.terrain &&
            S.data &&
            S.data[10] > 0
          ) {
            for (Z = [], nn = 0; nn < 32; nn++) Z[nn] = 0;
            return (
              h.damage.push({
                trigger: "サイコフィールドによる無効化",
                description: O + "優先度+1以上の技のダメージ無効化",
              }),
              new i(Z, f(d), h, d)
            );
          }
          for (
            g.conditions["おやこあい"] &&
              ((tn = a(tn, 1024)),
              (en = a(en, 1024)),
              h.damage.push({
                trigger: "おやこあい(二撃目)",
                description: "ダメージ0.25倍 (乱数化前)",
              })),
              en += en >> 1,
              Z = [],
              nn = 0;
            nn < 16;
            nn++
          )
            Z.push(Math.floor((tn * (85 + nn)) / 100));
          for (nn = 0; nn < 16; nn++)
            Z.push(Math.floor((en * (85 + nn)) / 100));
          var ln = 4096;
          if (2 === T) ln = 8192;
          else if (1.5 === T)
            for (nn = 0; nn < 32; nn++) Z[nn] = a(Z[nn], 6144);
          if (D > 0) for (nn = 0; nn < 32; nn++) Z[nn] <<= D;
          else if (D < 0) for (nn = 0; nn < 32; nn++) Z[nn] >>= -D;
          if (
            "やけど" === g.aliment &&
            1 === d.meta.move.category &&
            "こんじょう" !== g.ability &&
            !S.is("からげんき")
          )
            for (nn = 0; nn < 32; nn++) Z[nn] >>= 1;
          for (nn = 0; nn < 32; nn++) Z[nn] < 1 && (Z[nn] = 1);
          var un = C.reduce(s(p(d, { CH: !1 }), h.damage), ln),
            an = C.reduce(s(p(d, { CH: !0 }), h.damage), ln);
          for (nn = 0; nn < 16; ) (Z[nn] = a(Z[nn], un)), nn++;
          for (; nn < 32; ) (Z[nn] = a(Z[nn], an)), nn++;
          if (
            S.dynamax &&
            v.conditions["まもる"] &&
            "キョダイイチゲキ" !== S.dynamax &&
            "キョダイレンゲキ" !== S.dynamax
          ) {
            for (nn = 0; nn < 32; nn++) Z[nn] = a(Z[nn], 1024);
            h.damage.push({
              trigger: "まもる",
              description: "ダイマックス技のダメージ0.25倍",
            });
          }
          return new i(Z, f(d), h, d);
        }),
          (u.getInitialDescriptions = function () {
            return {
              POW: [],
              ATK: [],
              DEF: [],
              damage: [],
              type: [],
              others: [],
            };
          }),
          (u.prototype.getOrganizedParameters = function (n, t, e) {
            var r = this.parameters.arrangement,
              i = {};
            (i.attacker =
              r.ally.on.indexOf(n) >= 0 || r.ally.off.indexOf(n) > 0
                ? r.ally
                : r.foe),
              (i.defender =
                r.ally.on.indexOf(t) >= 0 || r.ally.off.indexOf(t) > 0
                  ? r.ally
                  : r.foe);
            var o = {};
            return (
              i.attacker.on.forEach(function (n) {
                o[n] = this.parameters[n];
              }, this),
              i.defender.on.forEach(function (n) {
                o[n] = this.parameters[n];
              }, this),
              i.attacker.off.forEach(function (n) {
                o[n] = this.parameters[n];
              }, this),
              i.defender.off.forEach(function (n) {
                o[n] = this.parameters[n];
              }, this),
              {
                attacker: this.parameters[n],
                defender: this.parameters[t],
                environment: this.parameters.environment,
                arrangement: i,
                move: this.parameters[n].moves[e],
                key: { attacker: n, defender: t, move: e },
                entities: o,
              }
            );
          }),
          (u.prototype.getMoveOrderProbabilities = function (n, t, e) {
            u.getMoveOrderProbabilities(this.parameters, n, t, e);
          }),
          (u.getMoveOrderProbabilities = function (n, t, e, r) {
            var i = u.getMoveOrderArray(n, t, e, r),
              o = [{ probability: 1, order: [] }];
            return (
              i.forEach(function (n) {
                if (1 === n.length)
                  o.forEach(function (t) {
                    t.order.push(n[0]);
                  });
                else {
                  var t = m(n),
                    e = [];
                  t.forEach(function (n) {
                    o.forEach(function (r) {
                      e.push({
                        probability: r.probability / t.length,
                        order: [].concat(r.order, n),
                      });
                    });
                  }),
                    (o = e);
                }
              }),
              o
            );
          }),
          (u.getMoveOrderArray = function (n, e, r, i) {
            if (1 === e.length) return [[e[0]]];
            i = i || [];
            var o = {};
            e.forEach(function (e, l) {
              var a = n[e],
                s = r[l] ? a.moves[r[l]] : null,
                c = [];
              if (s && s.data) {
                var f = s.data[10];
                "いたずらごころ" === a.ability && 0 === s.data[1]
                  ? f++
                  : "はやてのつばさ" !== a.ability ||
                    ("ひこう" !== s.type && !s.is("フライングプレス")) ||
                    f++,
                  c.push(f);
              } else c.push(0);
              t.index(i, e) >= 0
                ? c.push(1)
                : c.push(
                    "こうこうのしっぽ" === a.item ||
                      "まんぷくのおこう" === a.item
                      ? -2
                      : "あとだし" === a.ability
                      ? -1
                      : 0
                  );
              var d = a.SPD;
              (d = u.boostStatus(d, a.rSPD)),
                "まひ" === a.aliment && (d = Math.floor(d / 4)),
                c[1] < 0 && (d = -d),
                c.push(d),
                (o[e] = c);
            });
            var l = e.slice(0);
            l.sort(function (n, t) {
              for (var e = 0; e < o[n].length; e++)
                if (o[n][e] !== o[t][e]) return o[t][e] - o[n][e];
              return 0;
            });
            for (var a = [[l[0]]], s = 1; s < l.length; s++)
              o[l[s]].toString() === o[l[s - 1]].toString()
                ? a[a.length - 1].push(l[s])
                : a.push([l[s]]);
            return a;
          });
        var a = function (n, t) {
            var e = n * t;
            return ((4095 & e) ^ 2048 ? e + 2048 : e) >> 12;
          },
          s = function (n, t) {
            return function (e, r) {
              return (
                ("conditions" === r.category
                  ? n[r.holder].conditions[r.trigger]
                  : "move" === r.holder && "name" === r.category
                  ? n[r.holder].is(r.trigger)
                  : n[r.holder][r.category] === r.trigger) &&
                  (null === r.condition || r.condition(n)) &&
                  ((e = (e * r.modifier + 2048) >> 12),
                  t.push({
                    trigger: r.trigger,
                    description:
                      n.annotations && n.annotations.CH
                        ? r.description + " [急所]"
                        : r.description,
                  })),
                e
              );
            };
          },
          c = function (n, t, e) {
            var r = n.attacker,
              i = n.defender,
              o = n.environment,
              l = n.move;
            return (
              (t = void 0 === t ? l.type : t),
              function (n, u) {
                if (n <= -9) return -9;
                if (l.is("フリーズドライ") && "みず" === u && "こおり" === t)
                  return (
                    e.push({
                      trigger: "フリーズドライ",
                      description: "みずタイプに効果抜群",
                    }),
                    n + 1
                  );
                if (
                  i.conditions["みやぶる"] &&
                  "ゴースト" === u &&
                  ("ノーマル" === t || "かくとう" === t)
                )
                  return (
                    e.push({
                      trigger: "みやぶる",
                      description:
                        "ゴーストタイプへのノーマル、かくとう技の有効化",
                    }),
                    n
                  );
                if (
                  "きもったま" === r.ability &&
                  "ゴースト" === u &&
                  ("ノーマル" === t || "かくとう" === t)
                )
                  return (
                    e.push({
                      trigger: "きもったま",
                      description:
                        "ゴーストタイプへのノーマル、かくとう技の有効化",
                    }),
                    n
                  );
                if (
                  i.conditions["ミラクルアイ"] &&
                  "あく" === u &&
                  "エスパー" === t
                )
                  return (
                    e.push({
                      trigger: "ミラクルアイ",
                      description: "あくタイプへのエスパー技の有効化",
                    }),
                    n
                  );
                if ("かんそうはだ" === i.ability && "みず" === t)
                  return (
                    e.push({
                      trigger: "かんそうはだ",
                      description: "みずタイプの技の無効化(吸収)",
                    }),
                    -9
                  );
                if (
                  "じめん" === t &&
                  ("ひこう" === u ||
                    "ふゆう" === i.ability ||
                    i.conditions["でんじふゆう"])
                ) {
                  if (o.conditions["じゅうりょく"])
                    return (
                      e.push({
                        trigger: "じゅうりょく",
                        description: "空中の敵へのじめん技の有効化",
                      }),
                      n
                    );
                  if (l.is("サウザンアロー"))
                    return (
                      e.push({
                        trigger: "サウザンアロー",
                        description: "空中の敵へのじめん技の有効化",
                      }),
                      n
                    );
                  if ("くろいてっきゅう" === i.item)
                    return (
                      e.push({
                        trigger: "くろいてっきゅう",
                        description: "空中の敵へのじめん技の有効化",
                      }),
                      n
                    );
                  if (i.conditions["うちおとす"])
                    return (
                      e.push({
                        trigger: "うちおとす",
                        description: "空中の敵へのじめん技の有効化",
                      }),
                      n
                    );
                  if (i.conditions["ねをはる"])
                    return (
                      e.push({
                        trigger: "ねをはる",
                        description: "空中の敵へのじめん技の有効化",
                      }),
                      n
                    );
                  if (i.conditions["でんじふゆう"])
                    return (
                      e.push({
                        trigger: "でんじふゆう",
                        description: "じめんタイプの技の無効化",
                      }),
                      -9
                    );
                  if ("ふゆう" === i.ability)
                    return (
                      e.push({
                        trigger: "ふゆう",
                        description: "じめんタイプの技の無効化",
                      }),
                      -9
                    );
                }
                return n + x[k[u]][k[t]];
              }
            );
          };
        (u.boostStatus = function (n, t) {
          return t >= 0 ? (n * (t + 2)) >> 1 : Math.floor((2 * n) / (2 - t));
        }),
          (u.getActors = function (n) {
            return [].concat(
              n.arrangement.attacker.on.map(function (t) {
                return n.entities[t];
              }),
              n.arrangement.defender.on.map(function (t) {
                return n.entities[t];
              })
            );
          }),
          (u.getWeather = function (n, t) {
            if (n.environment.weather) {
              t = t || u.getActors(n);
              for (var e = 0; e < t.length; e++)
                if (u.cancelsWeather(t[e])) return "";
              return n.environment.weather;
            }
            return "";
          }),
          (u.cancelsWeather = function (n) {
            return "ノーてんき" === n.ability || "エアロック" === n.ability;
          });
        var f = function (n) {
            switch (d(n)) {
              case 0:
                return 1 / 24;
              case 1:
                return 1 / 8;
              case 2:
                return 0.5;
              case 3:
                return 1;
              default:
                return 0;
            }
          },
          d = function (n) {
            var t = n.attacker,
              e = n.defender,
              r = n.move,
              i = n.move.rCHR;
            return i < 0 ||
              e.conditions["おまじない"] ||
              "カブトアーマー" === e.ability ||
              "シェルアーマー" === e.ability
              ? -1
              : i >= 3
              ? 3
              : (0 === i && r.data && (i = r.data[9]),
                "きょううん" === t.ability && (i += 1),
                ("ピントレンズ" !== t.item && "するどいツメ" !== t.item) ||
                  (i += 1),
                o.prototype.is.call(t, "ラッキー") &&
                  "ラッキーパンチ" === t.item &&
                  (i += 2),
                (o.prototype.is.call(t, "カモネギ") ||
                  o.prototype.is.call(t, "カモネギ(ガラル)") ||
                  o.prototype.is.call(t, "ネギガナイト")) &&
                  "ながねぎ" === t.item &&
                  (i += 2),
                t.conditions["きあいだめ"] && (i += 2),
                "サンのみ" === t.item && itemActivated && (i += 2),
                i >= 3 ? 3 : i);
          };
        u.isOnGround = function (n, e, r) {
          var i = n[e],
            o = n.environment;
          return (
            (-1 === t.index((r ? n.meta[e] : n[e]).types, "ひこう") &&
              "ふゆう" !== i.ability &&
              !i.conditions["でんじふゆう"]) ||
            "くろいてっきゅう" === i.item ||
            o.conditions["じゅうりょく"] ||
            i.conditions["うちおとす"] ||
            i.conditions["ねをはる"]
          );
        };
        var p = function (n, t) {
            return Object.assign({ annotations: t }, n);
          },
          h = function (n) {
            return n.move.activated;
          },
          g = function (n) {
            return 2 * n;
          },
          v = function (n) {
            return function (t) {
              return n;
            };
          },
          m = function (n, t) {
            if (1 === n.length) return [[n[0]]];
            if (n.length <= (t = t || 0)) return [];
            var e = n.slice(0),
              r = e.splice(t, 1);
            return m(e, 0)
              .map(function (n) {
                return [r[0]].concat(n);
              })
              .concat(m(n, t + 1));
          },
          y = {
            しっぺがえし: {
              modify: g,
              condition: function (n) {
                return (
                  n.move.activated ||
                  n.defender.moveOrder < n.attacker.moveOrder
                );
              },
              description: "対象より後に行動した場合、威力2倍",
            },
            エラがみ: {
              modify: g,
              condition: function (n) {
                return (
                  n.move.activated ||
                  n.defender.moveOrder > n.attacker.moveOrder
                );
              },
              description: "対象より先に行動した場合、威力2倍",
            },
            でんげきくちばし: {
              modify: g,
              condition: function (n) {
                return (
                  n.move.activated ||
                  n.defender.moveOrder > n.attacker.moveOrder
                );
              },
              description: "対象より先に行動した場合、威力2倍",
            },
            ゆきなだれ: {
              modify: g,
              condition: h,
              description: "対象から攻撃されている場合、威力2倍",
            },
            たたりめ: {
              modify: g,
              condition: function (n) {
                return !!h(n) || Boolean(n.defender.aliment);
              },
              description: "対象が状態異常のとき、威力2倍",
            },
            ダメおし: {
              modify: g,
              condition: h,
              description:
                "対象がそのターンにダメージを受けている場合、威力2倍",
            },
            アクロバット: {
              modify: g,
              condition: h,
              description: "アイテムを持っていない場合、威力2倍",
            },
            りんしょう: {
              modify: g,
              condition: h,
              description: "仲間が既にりんしょうを使っている場合、威力2倍",
            },
            めざましビンタ: {
              modify: g,
              condition: function (n) {
                return !!h(n) || "ねむり" === n.defender.aliment;
              },
              description: "対象が眠っている場合、威力2倍",
            },
            きつけ: {
              modify: g,
              condition: function (n) {
                return !!h(n) || "まひ" === n.defender.aliment;
              },
              description: "相手が麻痺している場合、威力2倍",
            },
            ウェザーボール: {
              modify: g,
              condition: function (n) {
                return Boolean(u.getWeather(n));
              },
              description: "天候がある場合、威力2倍",
            },
            かぜおこし: {
              modify: g,
              condition: h,
              description: "相手が上空にいるとき、威力2倍",
            },
            たつまき: {
              modify: g,
              condition: h,
              description: "相手が上空にいるとき、威力2倍",
            },
            おいうち: {
              modify: g,
              condition: h,
              description: "対象が交代する場合、威力2倍",
            },
            ころがる: {
              modify: g,
              condition: h,
              description: "まるくなるを使っている場合、威力2倍",
            },
            アイスボール: {
              modify: g,
              condition: h,
              description: "まるくなるを使っている場合、威力2倍",
            },
            みずのちかい: {
              modify: v(150),
              condition: h,
              description: "仲間がほのおのちかいを使っている場合、威力150",
            },
            くさのちかい: {
              modify: v(150),
              condition: h,
              description: "仲間がみずのちかいを使っている場合、威力150",
            },
            ほのおのちかい: {
              modify: v(150),
              condition: h,
              description: "仲間がくさのちかいを使っている場合、威力150",
            },
            うっぷんばらし: {
              modify: g,
              condition: h,
              description: "そのターンにランクが下がっている場合、威力2倍",
            },
          },
          b = [
            {
              trigger: "テクニシャン",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return n.move.POW <= 60;
              },
              description: "技の威力が60以下のとき、威力1.5倍",
            },
            {
              trigger: "ねつぼうそう",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  2 === n.meta.move.category &&
                  (n.attacker.abilityActivated ||
                    "やけど" === n.attacker.aliment)
                );
              },
              description: "やけど状態のとき、特殊技の威力1.5倍",
            },
            {
              trigger: "アナライズ",
              category: "ability",
              holder: "attacker",
              modifier: 5325,
              condition: function (n) {
                return (
                  (n.attacker.abilityActivated ||
                    n.defender.moveOrder < n.attacker.moveOrder) &&
                  !n.move.is("みらいよち") &&
                  !n.move.is("はめつのねがい")
                );
              },
              description: "後攻のとき、威力1.3倍",
            },
            {
              trigger: "すてみ",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated ||
                  (n.move.data && n.move.data[15] < 0) ||
                  n.move.is("とびげり") ||
                  n.move.is("とびひざげり")
                );
              },
              description: "反動のある技の威力1.2倍",
            },
            {
              trigger: "てつのこぶし",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated ||
                  (n.move.data && n.move.data[28])
                );
              },
              description: "拳技の威力1.2倍",
            },
            {
              trigger: "がんじょうあご",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated ||
                  (n.move.data && n.move.data[29])
                );
              },
              description: "牙技の威力1.5倍",
            },
            {
              trigger: "メガランチャー",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated ||
                  (n.move.data && n.move.data[30])
                );
              },
              description: "波動技の威力1.5倍",
            },
            {
              trigger: "かたいツメ",
              category: "ability",
              holder: "attacker",
              modifier: 5325,
              condition: function (n) {
                return n.attacker.abilityActivated || n.meta.move.withContact;
              },
              description: "接触技の威力1.3倍",
            },
            {
              trigger: "フェアリーオーラ",
              category: "conditions",
              holder: "environment",
              modifier: 5448,
              condition: function (n) {
                return (
                  !n.environment.conditions["オーラブレイク"] &&
                  "フェアリー" === n.meta.move.type
                );
              },
              description: "フェアリータイプの技の威力1.33倍",
            },
            {
              trigger: "フェアリーオーラ",
              category: "conditions",
              holder: "environment",
              modifier: 3072,
              condition: function (n) {
                return (
                  n.environment.conditions["オーラブレイク"] &&
                  "フェアリー" === n.meta.move.type
                );
              },
              description: "フェアリータイプの技の威力0.75倍(オーラブレイク)",
            },
            {
              trigger: "ダークオーラ",
              category: "conditions",
              holder: "environment",
              modifier: 5448,
              condition: function (n) {
                return (
                  !n.environment.conditions["オーラブレイク"] &&
                  "あく" === n.meta.move.type
                );
              },
              description: "あくタイプの技の威力1.33倍",
            },
            {
              trigger: "ダークオーラ",
              category: "conditions",
              holder: "environment",
              modifier: 3072,
              condition: function (n) {
                return (
                  n.environment.conditions["オーラブレイク"] &&
                  "あく" === n.meta.move.type
                );
              },
              description: "あくタイプの技の威力0.75倍(オーラブレイク)",
            },
            {
              trigger: "グラスフィールド",
              category: "terrain",
              holder: "environment",
              modifier: 5325,
              condition: function (n) {
                return (
                  "くさ" === n.meta.move.type && u.isOnGround(n, "attacker", !0)
                );
              },
              description: "地面にいるポケモンのくさタイプの技の威力1.3倍",
            },
            {
              trigger: "グラスフィールド",
              category: "terrain",
              holder: "environment",
              modifier: 2048,
              condition: function (n) {
                var t = n.move;
                return (
                  (t.is("じしん") ||
                    t.is("じならし") ||
                    t.is("マグニチュード")) &&
                  u.isOnGround(n, "defender", !0)
                );
              },
              description:
                "地面にいるとき、じしん、じならし、マグニチュードの威力0.5倍",
            },
            {
              trigger: "エレキフィールド",
              category: "terrain",
              holder: "environment",
              modifier: 5325,
              condition: function (n) {
                return (
                  "でんき" === n.meta.move.type &&
                  u.isOnGround(n, "attacker", !0)
                );
              },
              description: "地面にいるポケモンのでんきタイプの技の威力1.3倍",
            },
            {
              trigger: "ミストフィールド",
              category: "terrain",
              holder: "environment",
              modifier: 2048,
              condition: function (n) {
                return (
                  "ドラゴン" === n.meta.move.type &&
                  (u.isOnGround(n, "defender", !0) ||
                    n.move.is("サウザンアロー"))
                );
              },
              description: "地面にいるとき、ドラゴンタイプの技の威力0.5倍",
            },
            {
              trigger: "サイコフィールド",
              category: "terrain",
              holder: "environment",
              modifier: 5325,
              condition: function (n) {
                return (
                  "エスパー" === n.meta.move.type &&
                  u.isOnGround(n, "attacker", !0)
                );
              },
              description: "地面にいるポケモンのエスパータイプの技の威力1.3倍",
            },
            {
              trigger: "どくぼうそう",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  (n.attacker.abilityActivated ||
                    "どく" === n.attacker.aliment ||
                    "もうどく" === n.attacker.aliment)
                );
              },
              description: "どく状態のとき、物理技の威力1.5倍",
            },
            {
              trigger: "とうそうしん(同性)",
              category: "ability",
              holder: "attacker",
              modifier: 5120,
              condition: function (n) {
                return n.attacker.abilityActivated;
              },
              description: "同性に対する技の威力1.25倍",
            },
            {
              trigger: "とうそうしん(異性)",
              category: "ability",
              holder: "attacker",
              modifier: 3072,
              condition: function (n) {
                return n.attacker.abilityActivated;
              },
              description: "異性に対する技の威力0.75倍",
            },
            {
              trigger: "すなのちから",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                var t = n.meta.move.type;
                return (
                  "すなあらし" === u.getWeather(n) &&
                  ("いわ" === t || "じめん" === t || "はがね" === t)
                );
              },
              description:
                "天候がすなあらしのとき、いわ、じめん、はがねタイプの技の威力1.5倍",
            },
            {
              trigger: "たいねつ",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return "ほのお" === n.meta.move.type;
              },
              description: "ほのおタイプの技の威力0.5倍",
            },
            {
              trigger: "かんそうはだ",
              category: "ability",
              holder: "defender",
              modifier: 5120,
              condition: function (n) {
                return "ほのお" === n.meta.move.type;
              },
              description: "ほのおタイプの技の威力1.25倍",
            },
            {
              trigger: "パンクロック",
              category: "ability",
              holder: "attacker",
              modifier: 5325,
              condition: function (n) {
                return n.move.data && n.move.data[31] > 0;
              },
              description: "音技のとき、威力1.3倍",
            },
            {
              trigger: "ちからずく",
              category: "ability",
              holder: "attacker",
              modifier: 5325,
              condition: function (n) {
                var t = n.move.data;
                return (
                  n.attacker.abilityActivated ||
                  (Boolean(t) &&
                    ((t[12] > 0 && t[12] <= 6) ||
                      n.move.is("トライアタック") ||
                      t[14] > 0 ||
                      (6 == t[11] && t[20] < 0) ||
                      (7 == t[11] && t[20] > 0)))
                );
              },
              description: "追加効果がある技の効果がなくなり、威力1.3倍",
            },
            {
              trigger: "ノーマルスキン",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  "ノーマル" !== n.move.type && "ノーマル" === n.meta.move.type
                );
              },
              description: "ノーマルタイプに変化した技の威力1.2倍",
            },
            {
              trigger: "フェアリースキン",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  "ノーマル" === n.move.type &&
                  "フェアリー" === n.meta.move.type
                );
              },
              description:
                "ノーマルタイプの技がフェアリータイプになり、威力1.2倍",
            },
            {
              trigger: "スカイスキン",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  "ノーマル" === n.move.type && "ひこう" === n.meta.move.type
                );
              },
              description: "ノーマルタイプの技がひこうタイプになり、威力1.2倍",
            },
            {
              trigger: "フリーズスキン",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  "ノーマル" === n.move.type && "こおり" === n.meta.move.type
                );
              },
              description: "ノーマルタイプの技がこおりタイプになり、威力1.2倍",
            },
            {
              trigger: "エレキスキン",
              category: "ability",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return (
                  "ノーマル" === n.move.type && "でんき" === n.meta.move.type
                );
              },
              description: "ノーマルタイプに変化した技の威力1.2倍",
            },
            {
              trigger: "タイプ強化系アイテム",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return n.attacker.itemActivated;
              },
              description: "対応するタイプの技の威力1.2倍",
            },
            {
              trigger: "ちからのハチマキ",
              category: "item",
              holder: "attacker",
              modifier: 4505,
              condition: function (n) {
                return 1 === n.meta.move.category;
              },
              description: "物理技の威力1.1倍",
            },
            {
              trigger: "しらたま",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                var t = n.meta.move.type;
                return (
                  (!n.attacker.name || n.attacker.is("パルキア")) &&
                  ("みず" === t || "ドラゴン" === t)
                );
              },
              description:
                "パルキアが持ったとき、ドラゴン及びみずタイプの技の威力1.2倍",
            },
            {
              trigger: "ものしりメガネ",
              category: "item",
              holder: "attacker",
              modifier: 4505,
              condition: function (n) {
                return 2 === n.meta.move.category;
              },
              description: "特殊技の威力1.1倍",
            },
            {
              trigger: "はっきんだま",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                var t = n.meta.move.type;
                return (
                  (!n.attacker.name || n.attacker.is("ギラティナ(オリジン)")) &&
                  ("ドラゴン" === t || "ゴースト" === t)
                );
              },
              description:
                "ギラティナ(オリジン)が持ったとき、ドラゴン及びゴーストタイプの技の威力1.2倍",
            },
            {
              trigger: "あやしいおこう",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return "エスパー" === n.meta.move.type;
              },
              description: "エスパータイプの技の威力1.2倍",
            },
            {
              trigger: "こんごうだま",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                var t = n.meta.move.type;
                return (
                  (!n.attacker.name || n.attacker.is("ディアルガ")) &&
                  ("はがね" === t || "ドラゴン" === t)
                );
              },
              description:
                "ディアルガが持ったとき、ドラゴン及びゴーストタイプの技の威力1.2倍",
            },
            {
              trigger: "こころのしずく",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                var t = n.meta.move.type;
                return (
                  (!n.attacker.name ||
                    n.attacker.is("ラティオス") ||
                    n.attacker.is("ラティアス")) &&
                  ("エスパー" === t || "ドラゴン" === t)
                );
              },
              description:
                "ラティオス・ラティアスが持ったとき、ドラゴン及びエスパータイプの技の威力1.2倍",
            },
            {
              trigger: "ジュエル系アイテム",
              category: "item",
              holder: "attacker",
              modifier: 5325,
              condition: function (n) {
                return n.attacker.itemActivated;
              },
              description: "対応するタイプの技の威力1.3倍",
            },
            {
              trigger: "からげんき",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                if (h(n)) return !0;
                var t = n.attacker.aliment;
                return (
                  "どく" === t ||
                  "もうどく" === t ||
                  "やけど" === t ||
                  "まひ" === t
                );
              },
              description: "どく、やけど、まひ状態のとき、威力2倍",
            },
            {
              trigger: "しおみず",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return !!h(n) || 2 * n.defender.currentHP <= n.defender.HP;
              },
              description: "HPが半分以下になったとき、威力2倍",
            },
            {
              trigger: "ベノムショック",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return (
                  !!h(n) ||
                  "どく" === n.defender.aliment ||
                  "もうどく" === n.defender.aliment
                );
              },
              description: "相手がどく状態のとき、威力2倍",
            },
            {
              trigger: "かたきうち",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return n.move.activated;
              },
              description:
                "前のターンに味方が瀕死状態になっていた場合、威力2倍",
            },
            {
              trigger: "クロスサンダー",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return n.move.activated;
              },
              description: "クロスフレイムが使われたターンに使うと、威力2倍",
            },
            {
              trigger: "クロスフレイム",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return n.move.activated;
              },
              description: "クロスサンダーが使われたターンに使うと、威力2倍",
            },
            {
              trigger: "さきどり",
              category: "conditions",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return n.move.activated;
              },
              description: "相手が出す技を先に繰り出し、威力1.5倍",
            },
            {
              trigger: "ソーラービーム",
              category: "name",
              holder: "move",
              modifier: 2048,
              condition: function (n) {
                return (
                  Boolean(u.getWeather(n)) &&
                  "はれ" !== u.getWeather(n) &&
                  "つよいはれ" !== u.getWeather(n)
                );
              },
              description: "悪天候のとき、威力0.5倍",
            },
            {
              trigger: "はたきおとす",
              category: "name",
              holder: "move",
              modifier: 6144,
              condition: h,
              description: "相手がアイテムを持っているとき、威力1.5倍?",
            },
            {
              trigger: "Ｇのちから",
              category: "name",
              holder: "move",
              modifier: 6144,
              condition: function (n) {
                return n.environment.conditions["じゅうりょく"];
              },
              description: "「じゅうりょく」状態のとき、威力1.5倍",
            },
            {
              trigger: "じだんだ",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return n.move.activated;
              },
              description: "前のターンに技が失敗していた場合、威力2倍",
            },
            {
              trigger: "ミストバースト",
              category: "name",
              holder: "move",
              modifier: 6144,
              condition: function (n) {
                return (
                  "ミストフィールド" === n.environment.terrain &&
                  u.isOnGround(n, "attacker", !0)
                );
              },
              description: "自分がミストフィールド上いるとき、威力1.5倍",
            },
            {
              trigger: "ライジングボルト",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return (
                  "エレキフィールド" === n.environment.terrain &&
                  u.isOnGround(n, "defender", !0)
                );
              },
              description: "相手がエレキフィールド上にいるとき、威力2倍",
            },
            {
              trigger: "じゅうでん",
              category: "conditions",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return "でんき" === n.meta.move.type;
              },
              description: "電気タイプの技の威力2倍",
            },
            {
              trigger: "てだすけ",
              category: "conditions",
              holder: "attacker",
              modifier: 6144,
              condition: null,
              description: "威力1.5倍",
            },
            {
              trigger: "みずあそび",
              category: "conditions",
              holder: "defender",
              modifier: 1352,
              condition: function (n) {
                return "ほのお" === n.meta.move.type;
              },
              description: "ほのおタイプの技の威力0.33倍",
            },
            {
              trigger: "どろあそび",
              category: "conditions",
              holder: "defender",
              modifier: 1352,
              condition: function (n) {
                return "でんき" === n.meta.move.type;
              },
              description: "でんきタイプの技の威力0.33倍",
            },
          ],
          _ = [
            {
              trigger: "あついしぼう",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return (
                  "こおり" === n.meta.move.type || "ほのお" === n.meta.move.type
                );
              },
              description: "技のタイプがほのお又はこおりのとき、攻撃/特攻0.5倍",
            },
            {
              trigger: "げきりゅう",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                var t = n.attacker;
                return (
                  "みず" === n.meta.move.type &&
                  (t.abilityActivated || t.currentHP <= Math.floor(t.HP / 3))
                );
              },
              description:
                "技のタイプがみずで、HPが1/3以下のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "こんじょう",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  (n.attacker.abilityActivated || Boolean(n.attacker.aliment))
                );
              },
              description: "状態異常のとき、攻撃1.5倍",
            },
            {
              trigger: "むしのしらせ",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                var t = n.attacker;
                return (
                  "むし" === n.meta.move.type &&
                  (t.abilityActivated || t.currentHP <= Math.floor(t.HP / 3))
                );
              },
              description:
                "技のタイプがむしで、HPが1/3以下のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "しんりょく",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                var t = n.attacker;
                return (
                  "くさ" === n.meta.move.type &&
                  (t.abilityActivated || t.currentHP <= Math.floor(t.HP / 3))
                );
              },
              description:
                "技のタイプがくさで、HPが1/3以下のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "プラス",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated && 2 === n.meta.move.category
                );
              },
              description: "仲間の特性がマイナスのとき、特攻1.5倍",
            },
            {
              trigger: "マイナス",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated && 2 === n.meta.move.category
                );
              },
              description: "仲間の特性がプラスのとき、特攻1.5倍",
            },
            {
              trigger: "もうか",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                var t = n.attacker;
                return (
                  "ほのお" === n.meta.move.type &&
                  (t.abilityActivated || t.currentHP <= Math.floor(t.HP / 3))
                );
              },
              description:
                "技のタイプがほのおで、HPが1/3以下のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "よわき",
              category: "ability",
              holder: "attacker",
              modifier: 2048,
              condition: function (n) {
                var t = n.attacker;
                return t.abilityActivated || t.currentHP <= t.HP >> 1;
              },
              description: "HPが半分以下のとき、攻撃/特攻0.5倍",
            },
            {
              trigger: "ヨガパワー",
              category: "ability",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return 1 === n.meta.move.category;
              },
              description: "攻撃2倍",
            },
            {
              trigger: "ちからもち",
              category: "ability",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return 1 === n.meta.move.category;
              },
              description: "攻撃2倍",
            },
            {
              trigger: "すいほう",
              category: "ability",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return "みず" === n.meta.move.type;
              },
              description: "みずタイプの技のとき、攻撃・特攻2倍",
            },
            {
              trigger: "すいほう",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return "ほのお" === n.meta.move.type;
              },
              description: "ほのおタイプの技のとき、相手の攻撃・特攻0.5倍",
            },
            {
              trigger: "サンパワー",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  2 === n.meta.move.category &&
                  ("はれ" === u.getWeather(n) ||
                    "つよいはれ" === u.getWeather(n))
                );
              },
              description: "天候がはれのとき、特攻1.5倍",
            },
            {
              trigger: "もらいび",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  n.attacker.abilityActivated && "ほのお" === n.meta.move.type
                );
              },
              description:
                "技のタイプがほのおで、ほのおタイプの技を受けている場合、攻撃/特攻1.5倍",
            },
            {
              trigger: "スロースタート",
              category: "ability",
              holder: "attacker",
              modifier: 2048,
              condition: function (n) {
                return (
                  1 === n.meta.move.category && n.attacker.abilityActivated
                );
              },
              description: "場に出てから5ターンの間、攻撃0.5倍",
            },
            {
              trigger: "はがねつかい",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return "はがね" === n.meta.move.type;
              },
              description: "はがねタイプの技のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "トランジスタ",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return "でんき" === n.meta.move.type;
              },
              description: "でんきタイプの技のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "りゅうのあぎと",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return "ドラゴン" === n.meta.move.type;
              },
              description: "ドラゴンタイプの技のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "はがねのせいしん",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return "はがね" === n.meta.move.type;
              },
              description: "はがねタイプの技のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "はがねのせいしん",
              category: "conditions",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return "はがね" === n.meta.move.type;
              },
              description: "はがねタイプの技のとき、攻撃/特攻1.5倍",
            },
            {
              trigger: "ごりむちゅう",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return 1 === n.meta.move.category;
              },
              description: "攻撃1.5倍",
            },
            {
              trigger: "フラワーギフト",
              category: "conditions",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  ("はれ" === u.getWeather(n) ||
                    "つよいはれ" === u.getWeather(n))
                );
              },
              description: "天候がはれのとき、攻撃1.5倍",
            },
            {
              trigger: "ふといホネ",
              category: "item",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                var t = n.attacker.name;
                return (
                  1 === n.meta.move.category &&
                  (!t ||
                    "ガラガラ" === t ||
                    "ガラガラ(アローラ)" === t ||
                    "カラカラ" === t)
                );
              },
              description: "カラカラ及びガラガラの攻撃2倍",
            },
            {
              trigger: "しんかいのキバ",
              category: "item",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return (
                  2 === n.meta.move.category &&
                  (!n.attacker.name || n.attacker.is("パールル"))
                );
              },
              description: "パールルの特攻2倍",
            },
            {
              trigger: "でんきだま",
              category: "item",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return !n.attacker.name || n.attacker.is("ピカチュウ");
              },
              description: "ピカチュウの攻撃/特攻2倍",
            },
            {
              trigger: "こだわりハチマキ",
              category: "item",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return 1 === n.meta.move.category && !n.move.dynamax;
              },
              description: "攻撃1.5倍",
            },
            {
              trigger: "こだわりメガネ",
              category: "item",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return 2 === n.meta.move.category && !n.move.dynamax;
              },
              description: "特攻1.5倍",
            },
          ],
          w = [
            {
              trigger: "ふしぎなうろこ",
              category: "ability",
              holder: "defender",
              modifier: 6144,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  (n.defender.abilityActivated || Boolean(n.defender.aliment))
                );
              },
              description: "状態異常のとき、防御1.5倍",
            },
            {
              trigger: "くさのけがわ",
              category: "ability",
              holder: "defender",
              modifier: 6144,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  "グラスフィールド" === n.environment.terrain
                );
              },
              description: "グラスフィールドのとき、防御1.5倍?",
            },
            {
              trigger: "ファーコート",
              category: "ability",
              holder: "defender",
              modifier: 8192,
              condition: function (n) {
                return 1 === n.meta.move.category;
              },
              description: "防御2倍",
            },
            {
              trigger: "フラワーギフト",
              category: "conditions",
              holder: "defender",
              modifier: 6144,
              condition: function (n) {
                return (
                  2 === n.meta.move.category &&
                  ("はれ" === u.getWeather(n) ||
                    "つよいはれ" === u.getWeather(n))
                );
              },
              description: "天候がはれのとき、特防1.5倍",
            },
            {
              trigger: "とつげきチョッキ",
              category: "item",
              holder: "defender",
              modifier: 6144,
              condition: function (n) {
                return 2 === n.meta.move.category;
              },
              description: "特防1.5倍?",
            },
            {
              trigger: "しんかいのウロコ",
              category: "item",
              holder: "defender",
              modifier: 8192,
              condition: function (n) {
                return (
                  2 === n.meta.move.category &&
                  (!n.defender.name || n.defender.is("パールル"))
                );
              },
              description: "パールルの特防2倍",
            },
            {
              trigger: "メタルパウダー",
              category: "item",
              holder: "defender",
              modifier: 8192,
              condition: function (n) {
                return (
                  1 === n.meta.move.category &&
                  (!n.defender.name || n.defender.is("メタモン"))
                );
              },
              description: "メタモンの防御2倍",
            },
            {
              trigger: "しんかのきせき",
              category: "item",
              holder: "defender",
              modifier: 6144,
              condition: function (n) {
                return n.defender.itemActivated;
              },
              description: "進化前のポケモンの防御/特防1.5倍",
            },
          ],
          C = [
            {
              trigger: "リフレクター",
              category: "conditions",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                if (n.arrangement.defender.on.length > 1) return !1;
                var t = n.move;
                return (
                  1 === t.category &&
                  !n.annotations.CH &&
                  !t.is("かわらわり") &&
                  !t.is("サイコファング") &&
                  "すりぬけ" !== n.attacker.ability
                );
              },
              description: "急所に命中しなかったとき、物理ダメージ0.5倍",
            },
            {
              trigger: "リフレクター",
              category: "conditions",
              holder: "defender",
              modifier: 2703,
              condition: function (n) {
                if (1 === n.arrangement.defender.on.length) return !1;
                var t = n.move;
                return (
                  1 === t.category &&
                  !n.annotations.CH &&
                  !t.is("かわらわり") &&
                  !t.is("サイコファング") &&
                  "すりぬけ" !== n.attacker.ability
                );
              },
              description: "急所に命中しなかったとき、物理ダメージ0.66倍",
            },
            {
              trigger: "ひかりのかべ",
              category: "conditions",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                if (n.arrangement.defender.on.length > 1) return !1;
                var t = n.move;
                return (
                  2 === t.category &&
                  !n.annotations.CH &&
                  !t.is("かわらわり") &&
                  !t.is("サイコファング") &&
                  "すりぬけ" !== n.attacker.ability
                );
              },
              description: "急所に命中しなかったとき、特殊ダメージ0.5倍",
            },
            {
              trigger: "ひかりのかべ",
              category: "conditions",
              holder: "defender",
              modifier: 2703,
              condition: function (n) {
                if (1 === n.arrangement.defender.on.length) return !1;
                var t = n.move;
                return (
                  2 === t.category &&
                  !n.annotations.CH &&
                  !t.is("かわらわり") &&
                  !t.is("サイコファング") &&
                  "すりぬけ" !== n.attacker.ability
                );
              },
              description: "急所に命中しなかったとき、特殊ダメージ0.66倍",
            },
            {
              trigger: "マルチスケイル",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return (
                  n.defender.abilityActivated ||
                  n.defender.currentHP === n.defender.HP
                );
              },
              description: "HPが最大のとき、ダメージ0.5倍",
            },
            {
              trigger: "いろめがね",
              category: "ability",
              holder: "attacker",
              modifier: 8192,
              condition: function (n) {
                return n.meta.effectiveness < 1;
              },
              description: "効果が今ひとつのとき、ダメージ2倍",
            },
            {
              trigger: "フレンドガード",
              category: "conditions",
              holder: "defender",
              modifier: 3072,
              condition: null,
              description: "ダメージ0.75倍",
            },
            {
              trigger: "スナイパー",
              category: "ability",
              holder: "attacker",
              modifier: 6144,
              condition: function (n) {
                return n.annotations.CH;
              },
              description: "急所ダメージが更に1.5倍",
            },
            {
              trigger: "ハードロック",
              category: "ability",
              holder: "defender",
              modifier: 3072,
              condition: function (n) {
                return n.meta.effectiveness > 1;
              },
              description: "効果が抜群のとき、ダメージ0.75倍",
            },
            {
              trigger: "フィルター",
              category: "ability",
              holder: "defender",
              modifier: 3072,
              condition: function (n) {
                return n.meta.effectiveness > 1;
              },
              description: "効果が抜群のとき、ダメージ0.75倍",
            },
            {
              trigger: "もふもふ",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return n.meta.move.withContact;
              },
              description: "直接攻撃技のとき、ダメージ0.5倍",
            },
            {
              trigger: "もふもふ",
              category: "ability",
              holder: "defender",
              modifier: 8192,
              condition: function (n) {
                return "ほのお" === n.meta.move.type;
              },
              description: "ほのおタイプの技のとき、ダメージ2倍",
            },
            {
              trigger: "こおりのりんぷん",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return 2 === n.meta.move.category;
              },
              description: "特殊技のとき、ダメージ0.5倍",
            },
            {
              trigger: "パンクロック",
              category: "ability",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return n.move.data && n.move.data[31] > 0;
              },
              description: "音技のとき、ダメージ0.5倍",
            },
            {
              trigger: "メトロノーム(2回目)",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: null,
              description: "ダメージ1.2倍",
            },
            {
              trigger: "メトロノーム(3回目)",
              category: "item",
              holder: "attacker",
              modifier: 5734,
              condition: null,
              description: "ダメージ1.4倍",
            },
            {
              trigger: "メトロノーム(4回目)",
              category: "item",
              holder: "attacker",
              modifier: 6553,
              condition: null,
              description: "ダメージ1.6倍",
            },
            {
              trigger: "メトロノーム(5回目)",
              category: "item",
              holder: "attacker",
              modifier: 7372,
              condition: null,
              description: "ダメージ1.8倍",
            },
            {
              trigger: "メトロノーム(6回目以降)",
              category: "item",
              holder: "attacker",
              modifier: 8192,
              condition: null,
              description: "ダメージ2倍",
            },
            {
              trigger: "たつじんのおび",
              category: "item",
              holder: "attacker",
              modifier: 4915,
              condition: function (n) {
                return n.meta.effectiveness > 1;
              },
              description: "効果が抜群のとき、ダメージ1.2倍",
            },
            {
              trigger: "いのちのたま",
              category: "item",
              holder: "attacker",
              modifier: 5324,
              condition: null,
              description: "ダメージ1.3倍",
            },
            {
              trigger: "タイプ半減系きのみ",
              category: "item",
              holder: "defender",
              modifier: 2048,
              condition: function (n) {
                return (
                  n.defender.itemActivated &&
                  ("ノーマル" === n.meta.move.type || n.meta.effectiveness > 1)
                );
              },
              description: "ダメージ0.5倍",
            },
            {
              trigger: "きょじゅうざん",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return Boolean(n.defender.dynamax);
              },
              description: "対象が「ダイマックス」状態のとき、ダメージ2倍",
            },
            {
              trigger: "きょじゅうだん",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return Boolean(n.defender.dynamax);
              },
              description: "対象が「ダイマックス」状態のとき、ダメージ2倍",
            },
            {
              trigger: "ダイマックスほう",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: function (n) {
                return Boolean(n.defender.dynamax);
              },
              description: "対象が「ダイマックス」状態のとき、ダメージ2倍",
            },
            {
              trigger: "ふみつけ",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "じしん",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description: "対象が地中にいるとき、ダメージ2倍",
            },
            {
              trigger: "マグニチュード",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description: "対象が地中にいるとき、ダメージ2倍",
            },
            {
              trigger: "なみのり",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description: "対象が水中にいるとき、ダメージ2倍",
            },
            {
              trigger: "うずしお",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description: "対象が水中にいるとき、ダメージ2倍",
            },
            {
              trigger: "ハードローラー",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "フライングプレス",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "のしかかり",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "ドラゴンダイブ",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "ヒートスタンプ",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
            {
              trigger: "ヘビーボンバー",
              category: "name",
              holder: "move",
              modifier: 8192,
              condition: h,
              description:
                "対象が「ちいさくなる」を使っているとき、ダメージ2倍",
            },
          ],
          x = [
            [0, 1, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0],
            [0, -1, 0, 0, -9, 1, -1, 0, 0, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0],
            [0, -1, 0, -1, 1, 0, -1, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, -1, 0],
            [0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 1, 1, -9, 0, 1, 0, 0, 0, 0],
            [-1, 1, -1, -1, 1, 0, 0, 0, 1, -1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, 1, 0, -1, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0],
            [-9, -9, 0, -1, 0, 0, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [
              -1, 1, -1, -9, 1, -1, -1, 0, -1, 1, 0, -1, 0, -1, -1, -1, 0, -1,
              0,
            ],
            [0, 0, 0, 0, 1, 1, -1, 0, -1, -1, 1, -1, 0, 0, -1, 0, 0, -1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 1, 1, 0, -1, 0, 0, 0, 0],
            [0, 0, 1, 1, -1, 0, 1, 0, 0, 1, -1, -1, -1, 0, 1, 0, 0, 0, 0],
            [0, 0, -1, 0, 1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
            [0, -1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, -9, 0, 0, -1, 1, 0],
            [0, -1, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, -9, -1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
          S = [
            "ノーマル",
            "かくとう",
            "ひこう",
            "どく",
            "じめん",
            "いわ",
            "むし",
            "ゴースト",
            "はがね",
            "ほのお",
            "みず",
            "くさ",
            "でんき",
            "エスパー",
            "こおり",
            "ドラゴン",
            "あく",
            "フェアリー",
            "無属性",
          ],
          k = {};
        !(function () {
          for (var n = 0; n < S.length; n++) k[S[n]] = n;
        })();
        var E = function (n, t) {
          if (arguments.length > 2)
            return E.apply(
              null,
              [E(n, t)].concat(Array.prototype.slice.call(arguments, 2))
            );
          if (!t || "object" != typeof t || t instanceof Array) return t;
          var e = {};
          return (
            !n ||
              "object" != typeof n ||
              n instanceof Array ||
              Object.keys(n).forEach(function (t) {
                e[t] = n[t];
              }),
            Object.keys(t).forEach(function (n) {
              e[n] = E(e[n], t[n]);
            }),
            e
          );
        };
        return u;
      })();
    },  
  }
]);