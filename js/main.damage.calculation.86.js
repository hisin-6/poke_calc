(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    b8zK: function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t = e("uKus"),
          r = e("6Q89"),
          i = e("9NG2"),
          o = e("QQk/"),
          l = function (n, t, e, r) {
            (this.baseParameters = n),
              (this.actionSelectors = t),
              (this.potentialMoveTargetPairs = e),
              (this.mode = r || []);
          },
          u = l;
        (u.prototype.initialize = function () {
          var n = this.baseParameters;
          (this.stateList = []),
            (this.stateCodeList = []),
            (this.parameters = {}),
            (this.damages = {}),
            (this.distributions = {}),
            (this.proportions = {}),
            (this.attackerList = []),
            (this.defenderList = []),
            (this.actorList = []),
            (this.maxHP = {}),
            this.potentialMoveTargetPairs.forEach(function (n) {
              (this.damages[s(n)] = {}),
                (this.distributions[n.defender] = []),
                (this.proportions[n.defender] = []),
                t.index(this.attackerList, n.attacker) < 0 &&
                  this.attackerList.push(n.attacker),
                t.index(this.defenderList, n.defender) < 0 &&
                  this.defenderList.push(n.defender),
                t.index(this.actorList, n.attacker) < 0 &&
                  this.actorList.push(n.attacker),
                t.index(this.actorList, n.defender) < 0 &&
                  this.actorList.push(n.defender);
            }, this),
            this.defenderList.forEach(function (t) {
              this.maxHP[t] = n[t].HP;
            }, this);
          var e = [];
          if (
            (this.defenderList.forEach(function (t) {
              this.getDamageCriteria(n, t).forEach(function (r) {
                r.condition(n[t].HP - n[t].currentHP) && e.push(r.stateKey);
              }, this);
            }, this),
            t.index(this.mode, "ideal") >= 0)
          ) {
            this.attackerList.forEach(function (t) {
              Object.keys(n[t].moves).forEach(function (r, i) {
                var o = n[t].moves[r];
                o.ACR < 100 &&
                  e.push(u.makeStateKey(t, "{" + i + "}moves.ACR", 100)),
                  o.rCHR >= 0 &&
                    e.push(u.makeStateKey(t, "{" + i + "}moves.rCHR", -1));
              });
            }, this),
              (this.baseState = ""),
              this.setParameters("", n);
            var r = this.getUpdatedStateCode("", e, []);
            this.setParametersForNewState(r), (this.baseState = r);
          } else
            (this.baseState = this.getUpdatedStateCode("", e, [])),
              this.setParameters(this.baseState, n);
          return (
            this.stateCodeList.push(this.baseState),
            (this.currentTurn = 0),
            this.defenderList.forEach(function (e) {
              var r = t.getArrayWithZero(this.maxHP[e] + 1);
              (r[this.maxHP[e] - n[e].currentHP] = 1),
                this.setDistributions(e, this.baseState, r),
                this.setProportion(e, this.baseState, 1);
            }, this),
            this
          );
        }),
          (u.prototype.calculate = function (n) {
            for (; this.next() <= n; ) {
              r.nextTurn(this.actionSelectors);
              var e = {},
                i = {};
              t.index(this.mode, "beforeAdditionalDamage") < 0
                ? this.defenderList.forEach(function (n) {
                    (e[n] = this.distributions[n][this.currentTurn - 1]),
                      (i[n] = this.proportions[n][this.currentTurn - 1]);
                  }, this)
                : (this.defenderList.forEach(function (n) {
                    for (var t in ((e[n] = {}),
                    (i[n] = {}),
                    this.distributions[n][this.currentTurn - 1]))
                      (e[n][t] =
                        this.distributions[n][this.currentTurn - 1][t].slice(
                          0
                        )),
                        (i[n][t] =
                          this.proportions[n][this.currentTurn - 1][t]);
                  }, this),
                  n > 1 && this.applyAllProportionalDamages(e, i));
              var o = this.calculateDamageDistributions(e, i);
              (e = o.distributions),
                (i = o.proportions),
                t.index(this.mode, "beforeAdditionalDamage") < 0 &&
                  this.applyAllProportionalDamages(e, i),
                this.defenderList.forEach(function (n) {
                  (this.distributions[n][this.currentTurn] = e[n]),
                    (this.proportions[n][this.currentTurn] = i[n]);
                }, this);
            }
            this.prev();
            var l = {};
            return (
              this.defenderList.forEach(function (e) {
                l[e] = [[]];
                for (var r = 1; r <= n; r++)
                  l[e].push(t.getArrayWithZero(this.maxHP[e] + 1)),
                    this.stateCodeList.forEach(function (n) {
                      var t = this.getDistributions(e, n, r);
                      t &&
                        t.forEach(function (n, t) {
                          l[e][r][t] += n;
                        });
                    }, this);
              }, this),
              l
            );
          }),
          (u.prototype.calculateDamageDistributions = function (n, e) {
            var o = {};
            this.defenderList.forEach(function (n) {
              o[n] = [];
            }, this),
              this.stateCodeList.forEach(function (l) {
                l = a(l);
                var s = this.getParameters(l),
                  c = r.select(this.actionSelectors, s),
                  f = [],
                  d = [],
                  p = {};
                for (var h in c)
                  c[h].action >= 0 &&
                    (f.push(h), d.push(c[h].action), (p[h] = c[h].targets));
                var g = i.getMoveOrderProbabilities(s, f, d, []),
                  v = {};
                this.defenderList.forEach(function (t) {
                  var r = e[t][l];
                  r &&
                    r > 0 &&
                    ((v[t] = []),
                    g.forEach(function () {
                      var e = {};
                      (e[l] = n[t][l]), v[t].push(e);
                    }, this));
                }, this);
                var m = [];
                g.forEach(function (n, e) {
                  m.push(n.probability),
                    n.order.forEach(function (n) {
                      p[n].forEach(function (r) {
                        if (r in v) {
                          var i = c[n].action,
                            o = { attacker: n, defender: r },
                            l = v[r][e],
                            a = [];
                          Object.keys(l).forEach(function (e) {
                            var r,
                              s,
                              c,
                              f,
                              d = this.getParameters(e),
                              p = d[n],
                              h = p.moves[i],
                              g = h.ACR / 100 || 1,
                              v = h.data ? h.data[8] : 0;
                            if (82 === v) {
                              (s = [{}])[0][e] = l[e];
                              for (var m = 1; m <= 5; m++)
                                (c = Object.keys(s[m - 1]).map(function (n) {
                                  return this.updateForMoveDamage(
                                    s[m - 1],
                                    o,
                                    n,
                                    i
                                  );
                                }, this)),
                                  s.push(u.mixDistributionsOverStates(c, 1));
                              r =
                                "スキルリンク" === p.ability
                                  ? s[5]
                                  : u.mixDistributionsOverStates(s.slice(2), [
                                      1 / 3,
                                      1 / 3,
                                      1 / 6,
                                      1 / 6,
                                    ]);
                            } else if (51 === v && h.is("すいりゅうれんだ")) {
                              for ((s = [{}])[0][e] = l[e], m = 1; m <= 3; m++)
                                (c = Object.keys(s[m - 1]).map(function (n) {
                                  return this.updateForMoveDamage(
                                    s[m - 1],
                                    o,
                                    n,
                                    i
                                  );
                                }, this)),
                                  s.push(u.mixDistributionsOverStates(c, 1));
                              r = s[3];
                            } else if (34 === v) {
                              (s = [{}])[0][e] = l[e];
                              var y =
                                h.is("ドラゴンアロー") &&
                                "シングルバトル" !== d.environment.battleRule
                                  ? 1
                                  : 2;
                              for (m = 1; m <= y; m++)
                                (c = Object.keys(s[m - 1]).map(function (n) {
                                  return this.updateForMoveDamage(
                                    s[m - 1],
                                    o,
                                    n,
                                    i
                                  );
                                }, this)),
                                  s.push(u.mixDistributionsOverStates(c, 1));
                              r = s[y];
                            } else
                              "おやこあい" === p.ability
                                ? ((r = this.updateForMoveDamage(l, o, e, i)),
                                  ("シングルバトル" !==
                                    d.environment.battleRule &&
                                    h.isMultiTarget()) ||
                                    h.is("だいばくはつ") ||
                                    h.is("じばく") ||
                                    (h.data && h.data[26]) ||
                                    ((c = Object.keys(r).map(function (t) {
                                      var e = this.alterStateCode(
                                        t,
                                        n,
                                        "おやこあい",
                                        !0
                                      );
                                      return (
                                        this.setParametersForNewState(e, t),
                                        this.updateForMoveDamage(r, o, t, i, e)
                                      );
                                    }, this)),
                                    (r = u.mixDistributionsOverStates(c, 1))))
                                : (r = this.updateForMoveDamage(l, o, e, i));
                            if (
                              ("ジュエル系アイテム" === p.item &&
                                p.itemActivated &&
                                ((f = {}),
                                Object.keys(r).forEach(function (e) {
                                  var i = this.alterStateCode(e, n, "item", "");
                                  i in f
                                    ? (f[i] = u.mixDistributions(
                                        [f[i], r[e]],
                                        1
                                      ))
                                    : ((f[i] = r[e]),
                                      t.index(this.stateCodeList, i) < 0 &&
                                        (this.registerStateCode(i),
                                        this.setParametersForNewState(i, e)));
                                }, this),
                                (r = f)),
                              g < 1 &&
                                (r = u.mixDistributionsOverStates(
                                  [r, l],
                                  [g, 1 - g]
                                )),
                              p.item &&
                                0 === p.item.indexOf("メトロノーム") &&
                                "メトロノーム(6回目以降)" !== p.item)
                            ) {
                              f = {};
                              var b = [
                                "メトロノーム",
                                "メトロノーム(2回目)",
                                "メトロノーム(3回目)",
                                "メトロノーム(4回目)",
                                "メトロノーム(5回目)",
                                "メトロノーム(6回目以降)",
                              ];
                              Object.keys(r).forEach(function (e) {
                                var i = b[t.index(b, p.item) + 1],
                                  o = this.alterStateCode(e, n, "item", i);
                                o in f
                                  ? (f[o] = u.mixDistributions([f[o], r[e]], 1))
                                  : ((f[o] = r[e]),
                                    t.index(this.stateCodeList, o) < 0 &&
                                      (this.registerStateCode(o),
                                      this.setParametersForNewState(o, e)));
                              }, this),
                                (r = f);
                            }
                            a.push(r);
                          }, this),
                            (v[r][e] = u.mixDistributionsOverStates(a, 1));
                        }
                      }, this);
                    }, this);
                }, this),
                  Object.keys(v).forEach(function (n) {
                    o[n].push(u.mixDistributionsOverStates(v[n], m));
                  }, this);
              }, this);
            var l = {},
              s = {};
            return (
              this.defenderList.forEach(function (n) {
                (l[n] = u.mixDistributionsOverStates(o[n], 1)),
                  (s[n] = {}),
                  Object.keys(l[n]).forEach(function (e) {
                    var r = t.sum(l[n][e]);
                    r > 0 ? (s[n][e] = r) : delete l[n][e];
                  });
              }, this),
              { distributions: l, proportions: s }
            );
          }),
          (u.prototype.applyAllProportionalDamages = function (n, e) {
            this.applyProportionalDamage(
              function (n, e) {
                var r = n[e].types;
                return (
                  !n[e].conditions["天候ダメージなし"] &&
                  "すなあらし" === f(n) &&
                  t.index(r, "いわ") < 0 &&
                  t.index(r, "じめん") < 0 &&
                  t.index(r, "はがね") < 0
                );
              },
              n,
              e,
              1 / 16
            ),
              this.applyProportionalDamage(
                function (n, e) {
                  var r = n[e].types;
                  return (
                    !n[e].conditions["天候ダメージなし"] &&
                    "あられ" === f(n) &&
                    t.index(r, "こおり") < 0
                  );
                },
                n,
                e,
                1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return (
                    "グラスフィールド" === n.environment.terrain &&
                    i.isOnGround(n, t)
                  );
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  var e = f(n);
                  return (
                    "あめうけざら" === n[t].ability &&
                    ("あめ" === e || "つよいあめ" === e)
                  );
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  var e = f(n);
                  return (
                    "かんそうはだ" === n[t].ability &&
                    ("あめ" === e || "つよいあめ" === e)
                  );
                },
                n,
                e,
                -1 / 8
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  var e = f(n);
                  return (
                    "サンパワー" === n[t].ability &&
                    ("はれ" === e || "つよいはれ" === e)
                  );
                },
                n,
                e,
                1 / 8
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  var e = f(n);
                  return (
                    "かんそうはだ" === n[t].ability &&
                    ("はれ" === e || "つよいはれ" === e)
                  );
                },
                n,
                e,
                1 / 8
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return "アイスボディ" === n[t].ability && "あられ" === f(n);
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  var e = n[t];
                  return (
                    "ポイズンヒール" === e.ability &&
                    ("どく" === e.aliment || "もうどく" === e.aliment)
                  );
                },
                n,
                e,
                -1 / 8
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return n[t].conditions["ねをはる"];
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return n[t].conditions["アクアリング"];
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return "たべのこし" === n[t].item;
                },
                n,
                e,
                -1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return (
                    "どく" === n[t].aliment && "ポイズンヒール" !== n[t].ability
                  );
                },
                n,
                e,
                1 / 8
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return (
                    "やけど" === n[t].aliment && "たいねつ" !== n[t].ability
                  );
                },
                n,
                e,
                1 / 16
              ),
              this.applyProportionalDamage(
                function (n, t) {
                  return (
                    "やけど" === n[t].aliment && "たいねつ" === n[t].ability
                  );
                },
                n,
                e,
                1 / 32
              );
          }),
          (u.prototype.setDamagesCalculating = function (n, t, e) {
            var r,
              l = this.getParameters(n),
              u = new i(l),
              a = l[t.attacker].moves[e].data;
            if (a && 82 === a[8]) {
              var s = u.calculate(t.attacker, t.defender, e);
              r = new o(s);
            } else (s = u.calculate(t.attacker, t.defender, e)), (r = new o(s));
            this.setDamages(t, n, e, r);
          }),
          (u.prototype.updateForMoveDamage = function (n, e, r, i, o) {
            var l = e.defender,
              a = {},
              s = this.getParameters((o = o || r)),
              c = this.getDamages(e, o, i);
            c ||
              (this.setDamagesCalculating(o, e, i),
              (c = this.getDamages(e, o, i)));
            var f = r;
            "タイプ半減系きのみ" === s[l].item &&
              s[l].itemActivated &&
              (f = this.alterStateCode(f, l, "item", ""));
            var d,
              p,
              h = u.update(n[r], c);
            return (
              (a[f] = h),
              f !== r &&
                t.index(this.stateCodeList, f) < 0 &&
                (this.registerStateCode(f),
                this.setParametersForNewState(f, r)),
              this.examineState(r, l, "HP", "満タンではない") ||
                ("きあいのタスキ" === this.getParameters(r)[l].item &&
                  ((d = []),
                  (p = !1),
                  Object.keys(a).forEach(function (n) {
                    var e = {},
                      r = a[n];
                    if (r[this.maxHP[l]] > 0) {
                      p = !0;
                      var i = this.alterStateCode(n, l, "item", ""),
                        o = t.getArrayWithZero(this.maxHP[l] + 1);
                      (o[this.maxHP[l] - 1] = r[this.maxHP[l]]),
                        (r[this.maxHP[l]] = 0),
                        (e[n] = r),
                        (e[i] = o),
                        i !== n &&
                          t.index(this.stateCodeList, i) < 0 &&
                          (this.registerStateCode(i),
                          this.setParametersForNewState(i, n));
                    } else e[n] = r;
                    d.push(e);
                  }, this),
                  p && (a = u.mixDistributionsOverStates(d, 1)))),
              (a = this.sortOverHPBasedStates(a, l)),
              (a = this.updateForHPActivatedEffects(a, l))
            );
          }),
          (u.prototype.applyProportionalDamage = function (n, e, r, o) {
            var l = {};
            this.defenderList.forEach(function (n) {
              l[n] = [];
            }, this),
              this.stateCodeList.forEach(function (t) {
                var a = this.getParameters(t);
                i.getMoveOrderArray(a, this.defenderList).forEach(function (i) {
                  var a = c(i),
                    s = {};
                  this.defenderList.forEach(function (n) {
                    if (r[n][t] && r[n][t] > 0) {
                      s[n] = [];
                      for (var i = 0; i < a.length; i++) {
                        var o = {};
                        (o[t] = e[n][t]), s[n].push(o);
                      }
                    }
                  }),
                    a.forEach(function (t, e) {
                      t.forEach(function (t) {
                        if (t in s) {
                          var r = !1;
                          Object.keys(s[t][e]).forEach(function (i) {
                            n(this.getParameters(i), t) &&
                              ((r = !0),
                              (s[t][e][i] = u.update(
                                s[t][e][i],
                                (this.maxHP[t] * o) | 0
                              )));
                          }, this),
                            r &&
                              ((s[t][e] = this.sortOverHPBasedStates(
                                s[t][e],
                                t
                              )),
                              (s[t][e] = this.updateForHPActivatedEffects(
                                s[t][e],
                                t
                              )));
                        }
                      }, this);
                    }, this),
                    Object.keys(s).forEach(function (n) {
                      l[n].push(
                        s[n].length > 1
                          ? u.mixDistributionsOverStates(s[n])
                          : s[n][0]
                      );
                    }, this);
                }, this);
              }, this),
              this.defenderList.forEach(function (n) {
                (e[n] = u.mixDistributionsOverStates(l[n], 1)),
                  (r[n] = {}),
                  Object.keys(e[n]).forEach(function (i) {
                    var o = t.sum(e[n][i]);
                    o > 0 ? (r[n][i] = o) : delete e[n][i];
                  });
              }, this);
          }),
          (u.prototype.next = function () {
            return ++this.currentTurn;
          }),
          (u.prototype.prev = function () {
            return --this.currentTurn;
          }),
          (u.prototype.setParametersForNewState = function (n, t) {
            return (
              this.getParameters(n) ||
                this.setParameters(n, this.getParametersForNewState(n, t)),
              this
            );
          }),
          (u.prototype.getParametersForNewState = function (n, e) {
            if (this.getParameters(n)) return this.getParameters(n);
            var r = this.baseParameters,
              i = this.getParameters((e = e || this.baseState)),
              o = {},
              l = function (n, t, e) {
                n in o || (o[n] = {}), (o[n][t] = e);
              },
              u = this.stateList.map(function (t, r) {
                return [
                  t,
                  parseInt(n.charAt(r) || "0", 10) -
                    parseInt(e.charAt(r) || "0", 10),
                ];
              });
            return (
              u.sort(function (n, t) {
                return n[1] - t[1];
              }),
              u.forEach(function (n, t) {
                var e = n[0],
                  u = n[1];
                if (0 !== u) {
                  var a = e.indexOf(":");
                  if (a >= 0) {
                    var s,
                      c = e.slice(0, a),
                      f = e.slice(a + 1),
                      d = "",
                      p = f.indexOf("=");
                    if (
                      (p >= 0 && ((d = f.slice(p + 1)), (f = f.slice(0, p))),
                      "HP" === f)
                    )
                      switch (d) {
                        case "1/3以下":
                          (s = Math.floor(i[c].HP / 3)),
                            u > 0 && i[c].currentHP > s
                              ? l(c, "currentHP", s)
                              : u < 0 &&
                                i[c].currentHP <= s &&
                                l(c, "currentHP", s + 1);
                          break;
                        case "半分以下":
                          (s = i[c].HP >> 1),
                            u > 0 && i[c].currentHP > s
                              ? l(c, "currentHP", s)
                              : u < 0 &&
                                i[c].currentHP <= s &&
                                l(c, "currentHP", s + 1);
                          break;
                        case "満タンではない":
                          u > 0 && i[c].currentHP === i[c].HP
                            ? l(c, "currentHP", i[c].HP - 1)
                            : u < 0 &&
                              i[c].currentHP < i[c].HP &&
                              l(c, "currentHP", i[c].HP);
                      }
                    else
                      f in r[c]
                        ? l(c, f, u > 0 ? d : r[c][f])
                        : "{" === f.charAt(0)
                        ? (function (n, t, e) {
                            switch ((n in o || (o[n] = {}), t.charAt(0))) {
                              case "{":
                                var r = t.indexOf("}"),
                                  i = t.indexOf("."),
                                  l = t.slice(1, r),
                                  u = t.slice(r + 1, i),
                                  a = t.slice(i + 1);
                                u in o[n] || (o[n][u] = {}),
                                  l in o[n][u] || (o[n][u][l] = {}),
                                  (o[n][u][l][a] = e);
                            }
                          })(c, f, u > 0 ? d : r[c][f])
                        : (function (n, t, e, r) {
                            n in o || (o[n] = {}),
                              t in o[n] || (o[n][t] = {}),
                              (o[n][t][e] = r);
                          })(c, "conditions", f, u > 0);
                  }
                }
              }),
              t.fillUpWith(o, i),
              o
            );
          }),
          (u.prototype.getDamageCriteria = function (n, e) {
            for (
              var r = n[e].HP, i = !1, o = 0;
              o < this.attackerList.length;
              o++
            ) {
              const t = n[this.attackerList[o]].moves;
              if (
                (Object.keys(t).forEach(function (n, e) {
                  t[n].is("しおみず") && (i = !0);
                }),
                i)
              )
                break;
            }
            var l = [
                "マルチスケイル" === n[e].ability ||
                  "きあいのタスキ" === n[e].item,
                i || "よわき" === n[e].ability || "オボンのみ" === n[e].item,
                t.index(
                  ["しんりょく", "もうか", "げきりゅう", "むしのしらせ"],
                  n[e].ability
                ) >= 0,
              ],
              u = [
                e + ":HP=満タンではない",
                e + ":HP=半分以下",
                e + ":HP=1/3以下",
              ],
              a = [1, r - (r >> 1), r - Math.floor(r / 3)],
              s = [];
            return (
              l.forEach(function (n, t) {
                if (n) {
                  var e = a[t];
                  s.push({
                    stateKey: u[t],
                    condition: function (n) {
                      return n >= e;
                    },
                  });
                }
              }),
              s
            );
          }),
          (u.prototype.updateForHPActivatedEffects = function (n, e) {
            var r = Object.assign({}, n);
            return (
              Object.keys(n).forEach(function (n) {
                var i,
                  o = n;
                if (
                  this.examineState(o, e, "HP", "半分以下") &&
                  this.examineState(o, e, "item", "オボンのみ")
                ) {
                  (i = this.alterStateCode(o, e, "item", "")),
                    this.setParametersForNewState(i, o);
                  var l = {};
                  (l[i] = u.update(r[o], -Math.floor(this.maxHP[e] / 4))),
                    (l = this.sortOverHPBasedStates(l, e)),
                    delete r[o],
                    Object.keys(l).forEach(function (n) {
                      n in r
                        ? (r[n] = u.mixDistributions([r[n], l[n]], 1))
                        : ((r[n] = l[n]),
                          t.index(this.stateCodeList, n) < 0 &&
                            this.registerStateCode(n));
                    }, this);
                }
              }, this),
              r
            );
          }),
          (u.prototype.sortOverHPBasedStates = function (n, e) {
            var r = {};
            return (
              Object.keys(n).forEach(function (i) {
                var o = n[i],
                  l = this.getParameters(i),
                  u = this.getDamageCriteria(l, e);
                u.length > 0
                  ? o.forEach(function (n, o) {
                      var l = [],
                        a = [];
                      u.forEach(function (n) {
                        n.condition(o)
                          ? l.push(n.stateKey)
                          : a.push(n.stateKey);
                      });
                      var s = this.getUpdatedStateCode(i, l, a);
                      s in r ||
                        (t.index(this.stateCodeList, s) < 0 &&
                          (this.registerStateCode(s),
                          this.setParametersForNewState(s, i)),
                        (r[s] = t.getArrayWithZero(this.maxHP[e] + 1))),
                        (r[s][o] += n);
                    }, this)
                  : (r[i] = o.slice(0));
              }, this),
              r
            );
          }),
          (u.update = function (n, t, e, r) {
            var i,
              l,
              u,
              a,
              s = n,
              c = [];
            if (((r = r || 1), 0 === e)) {
              if (1 === r) return n.slice(0);
              for (i = 0; i < s.length; i++) c.push(s[i] * r);
              return c;
            }
            "number" == typeof t && (t = new o([t]));
            var f = s.length - 1,
              d = t.getDamages(),
              p = t.getDistribution(),
              h = e || 1,
              g = 1 - h;
            if (d[0] > 0) {
              for (u = Math.min(f, d[0]), i = 0; i < u; i++) c[i] = s[i] * g;
              for (u = Math.min(f, d[d.length - 1]); i < u; i++) {
                for (a = 0, l = 0; l < d.length && i >= d[l]; l++)
                  a += s[i - d[l]] * p[l];
                c[i] = a * h + s[i] * g;
              }
              for (u = f; i < u; i++) {
                for (a = 0, l = 0; l < d.length; l++) a += s[i - d[l]] * p[l];
                c[i] = a * h + s[i] * g;
              }
              for (
                c[f] = s[f],
                  u = Math.max(0, f - d[0]),
                  i = Math.max(0, f - d[d.length - 1]);
                i < u;
                i++
              ) {
                for (a = 0, l = d.length - 1; l >= 0 && i + d[l] >= f; l--)
                  a += s[i] * p[l];
                c[f] += a * h;
              }
              for (u = f; i < u; i++) c[f] += s[i] * h;
            } else {
              for (
                c[f] = s[f],
                  u = Math.max(0, f - 1 + d[d.length - 1]),
                  i = f - 1;
                i > u;
                i--
              )
                c[i] = s[i] * g;
              for (u = Math.min(0, f - 1 + d[0]); i > u; i--) {
                for (a = 0, l = d.length - 1; l >= 0 && i - d[l] < f; l--)
                  a += s[i - d[l]] * p[l];
                c[i] = a * h + s[i] * g;
              }
              for (u = 0; i > u; i--) {
                for (a = 0, l = 0; l < d.length; l++) a += s[i - d[l]] * p[l];
                c[i] = a * h + s[i] * g;
              }
              for (
                c[0] = s[0],
                  u = Math.min(f, -d[d.length - 1]),
                  i = Math.min(f, -d[0]);
                i > u;
                i--
              ) {
                for (a = 0, l = d.length - 1; l >= 0 && i + d[l] < 0; l--)
                  a += s[i] * p[l];
                c[0] += a * h;
              }
              for (u = 0; i > u; i--) c[0] += s[i] * h;
            }
            if (1 !== r) for (i = 0; i < c.length; i++) c[i] = c[i] * r;
            return c;
          }),
          (u.mixDistributions = function (n, e, r) {
            if (!1 !== r && 1 === n.length) return n[0];
            if (null == e)
              (e = []),
                n.forEach(function () {
                  e.push(1 / n.length);
                });
            else if ("number" == typeof e) {
              var i = [];
              n.forEach(function () {
                i.push(e);
              }),
                (e = i);
            }
            var o = t.getArrayWithZero(n[0].length);
            return (
              n.forEach(function (n, t) {
                n.forEach(function (n, r) {
                  o[r] += n * e[t];
                });
              }),
              o
            );
          }),
          (u.mixDistributionsOverStates = function (n, t, e) {
            if (!1 !== e && 1 === n.length) return n[0];
            if (null == t)
              (t = []),
                n.forEach(function () {
                  t.push(1 / n.length);
                });
            else if ("number" == typeof t) {
              var r = [];
              n.forEach(function () {
                r.push(t);
              }),
                (t = r);
            }
            var i = {};
            return (
              n.forEach(function (n, e) {
                Object.keys(n).forEach(function (r) {
                  r in i
                    ? n[r].forEach(function (n, o) {
                        i[r][o] += n * t[e];
                      })
                    : ((i[r] = []),
                      n[r].forEach(function (n) {
                        i[r].push(n * t[e]);
                      }));
                });
              }),
              i
            );
          }),
          (u.prototype.setDamages = function (n, t, e, r) {
            var i = s(n),
              o = a(t);
            i in this.damages || (this.damages[i] = {}),
              o in this.damages[i] || (this.damages[i][o] = {}),
              (this.damages[i][o][e] = r);
          }),
          (u.prototype.getDamages = function (n, t, e) {
            var r = s(n),
              i = a(t);
            if (i in this.damages[r] && e in this.damages[r][i])
              return this.damages[r][i][e];
          }),
          (u.prototype.setParameters = function (n, t) {
            this.parameters[a(n)] = t;
          }),
          (u.prototype.getParameters = function (n) {
            return this.parameters[a(n)];
          }),
          (u.prototype.setDistributions = function (n, t, e, r) {
            n in this.distributions || (this.distributions[n] = []),
              (r = void 0 === r ? this.currentTurn : r);
            for (; this.distributions[n].length - 1 < r; )
              this.distributions[n].push({});
            this.distributions[n][r][a(t)] = e;
          }),
          (u.prototype.getDistributions = function (n, t, e) {
            return this.distributions[n][
              (e = void 0 === e ? this.currentTurn : e)
            ][a(t)];
          }),
          (u.prototype.setProportion = function (n, t, e, r) {
            n in this.proportions || (this.proportions[n] = []),
              (r = void 0 === r ? this.currentTurn : r);
            for (; this.proportions[n].length - 1 < r; )
              this.proportions[n].push({});
            this.proportions[n][r][a(t)] = e;
          }),
          (u.prototype.getProportion = function (n, t, e) {
            return this.proportions[n][
              (e = void 0 === e ? this.currentTurn : e)
            ][a(t)];
          }),
          (u.makeStateKey = function (n, t, e) {
            return (
              void 0 !== t && ((n += ":" + t), void 0 !== e && (n += "=" + e)),
              n
            );
          }),
          (u.prototype.isStateOn = function (n, e, r, i) {
            e = u.makeStateKey(e, r, i);
            var o = t.index(this.stateList, e);
            return !(o < 0 || n.length - 1 < o || "1" !== n.charAt(o));
          }),
          (u.prototype.examineState = function (n, t, e, r) {
            if (void 0 === e && void 0 === r) {
              var i = t.indexOf(":");
              i >= 0 &&
                ((e = t.slice(i + 1)),
                (t = t.slice(0, i)),
                (i = e.indexOf("=")) >= 0 &&
                  ((r = e.slice(i + 1)), (e = e.slice(0, i))));
            }
            return "HP" === e
              ? this.isStateOn(n, t, e, r)
              : this.getStateValue(n, t, e) == r;
          }),
          (u.prototype.getStateValue = function (n, t, e) {
            var r = this.getParameters(n);
            r ||
              ((r = this.getParametersForNewState(n)),
              this.setParameters(n, r));
            var i = r[t];
            return "HP" === e
              ? null
              : e in i
              ? i[e]
              : e in i.conditions && i.conditions[e];
          }),
          (u.prototype.registerStateCode = function (n) {
            t.index(this.stateCodeList, n) < 0 && this.stateCodeList.push(n);
          }),
          (u.prototype.alterStateCode = function (n, t, e, r) {
            var i = this.getStateValue(n, t, e);
            if (i == r) return n;
            var o = this.getStateValue(this.baseState, t, e),
              l = void 0,
              a = void 0;
            return (
              o == r
                ? (a = u.makeStateKey(t, e, i))
                : (o != i && (a = u.makeStateKey(t, e, i)),
                  (l = u.makeStateKey(t, e, r))),
              this.getUpdatedStateCode(n, l, a)
            );
          }),
          (u.prototype.getUpdatedStateCode = function (n, t, e) {
            return this.getFlaggedStateCode(
              this.getUnflaggedStateCode(n, e),
              t
            );
          }),
          (u.prototype.getFlaggedStateCode = function (n, e) {
            return void 0 === e
              ? n
              : ("string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  var r = t.index(this.stateList, e);
                  for (
                    r < 0 &&
                    ((r = this.stateList.length), this.stateList.push(e));
                    n.length - 1 < r;

                  )
                    n += "0";
                  n =
                    n.length - 1 > r
                      ? n.slice(0, r) + "1" + n.slice(r + 1)
                      : n.slice(0, r) + "1";
                }, this),
                n);
          }),
          (u.prototype.getUnflaggedStateCode = function (n, e) {
            return void 0 === e
              ? n
              : ("string" == typeof e && (e = [e]),
                e.forEach(function (e) {
                  var r = t.index(this.stateList, e);
                  r < 0 &&
                    ((r = this.stateList.length), this.stateList.push(e)),
                    n.length - 1 > r
                      ? (n = n.slice(0, r) + "0" + n.slice(r + 1))
                      : n.length - 1 === r && (n = a(n.slice(0, r)));
                }, this),
                n);
          });
        var a = function (n) {
            return n.slice(0, t.lastIndex(n, "1") + 1);
          },
          s = function (n) {
            return n.attacker + "->" + n.defender;
          },
          c = function (n, t) {
            if (1 === n.length) return [[n[0]]];
            if (n.length <= (t = t || 0)) return [];
            var e = n.slice(0),
              r = e.splice(t, 1);
            return c(e, 0)
              .map(function (n) {
                return [r[0]].concat(n);
              })
              .concat(c(n, t + 1));
          },
          f = function (n) {
            if (n.environment.weather) {
              for (
                var t = (function (n) {
                    return [].concat(
                      n.arrangement.ally.on.map(function (t) {
                        return n[t];
                      }),
                      n.arrangement.foe.on.map(function (t) {
                        return n[t];
                      })
                    );
                  })(n),
                  e = 0;
                e < t.length;
                e++
              )
                if (i.cancelsWeather(t[e])) return "";
              return n.environment.weather;
            }
            return "";
          };
        return l;
      })();
    },  
  }
]);