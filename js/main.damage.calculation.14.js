(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    "5CXe": function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t,
          r,
          i = e("uKus"),
          o = e("+JDR"),
          l = e("YFCf"),
          u = e("xGtE").ITEM_LIST,
          a = e("bSNN"),
          s = [0],
          c = [
            [
              "key",
              "_note",
              "id",
              "natureId",
              "lv",
              "dynamax",
              "dynamaxLv",
              "ST",
              "EV",
              "IV",
              "abilityId",
              "abilityActivated",
              "itemId",
              "itemActivated",
              "RANK",
              "alimentId",
              "TYPE_ID",
              "currentHP",
              "CONDITION_FLAG",
            ],
          ],
          f = [
            {
              ST: ["HP", "ATK", "DEF", "SAT", "SDF", "SPD"],
              EV: ["eHP", "eATK", "eDEF", "eSAT", "eSDF", "eSPD"],
              IV: ["iHP", "iATK", "iDEF", "iSAT", "iSDF", "iSPD"],
              RANK: [
                "rATK",
                "rDEF",
                "rSAT",
                "rSDF",
                "rSPD",
                "rACR",
                "rEVS",
                "rCHR",
              ],
              TYPE_ID: null,
              TYPE: null,
              CONDITION_FLAG: null,
            },
          ],
          d = [
            [
              "name",
              "nature",
              "ability",
              "item",
              "types",
              "aliment",
              "conditions",
            ],
          ],
          p = [
            [
              "てだすけ",
              "きあいだめ",
              "さきどり",
              "じゅうでん",
              "そうでん",
              "はがねのせいしん",
              "フラワーギフト",
              "ハロウィン",
              "もりののろい",
              "みずびたし",
              "リフレクター",
              "ひかりのかべ",
              "フレンドガード",
              "みずあそび",
              "どろあそび",
              "はねやすめ",
              "みやぶる",
              "ミラクルアイ",
              "うちおとす",
              "でんじふゆう",
              "おまじない",
              "まもる",
              "ねをはる",
              "アクアリング",
              "拘束",
              "天候ダメージなし",
            ],
          ],
          h = ["", "まひ", "ねむり", "こおり", "やけど", "どく", "もうどく"],
          g = {
            CAP: ["HP", "ATK", "DEF", "SAT", "SDF", "SPD"],
            SM: ["hp", "at", "df", "sa", "sd", "sp"],
            S: ["H", "A", "B", "C", "D", "S"],
            EN: ["HP", "Attack", "Defence", "Sp. Atk", "Sp. Def", "Speed"],
            JP: ["ＨＰ", "攻撃", "防御", "特攻", "特防", "素速"],
          },
          v = ["*", "~", "x"],
          m = new l(),
          y = function (n, t) {
            if (
              ((this.version = t >= 0 ? t : 0),
              (this.k = y.getConstants(t)),
              (this.expanded = {}),
              this.k.Entries.forEach(function (n) {
                n in this.k.SubEntries
                  ? this.k.SubEntries[n]
                    ? this.k.SubEntries[n].forEach(function (n) {
                        this.expanded[n] = !1;
                      }, this)
                    : "CONDITION_FLAG" === n
                    ? (this.expanded.conditionFlags = !1)
                    : "TYPE_ID" === n && (this.expanded.typeIds = !1)
                  : (this.expanded[n] = !1);
              }, this),
              this.k.SolvingEntries.forEach(function (n) {
                "TYPE" === n
                  ? (this.expanded.types = !1)
                  : "CONDITION" === n
                  ? (this.expanded.conditions = !1)
                  : (this.expanded[n] = !1);
              }, this),
              "string" == typeof n || "number" == typeof n)
            )
              this.setPokemon(n);
            else {
              if ("object" != typeof n) {
                if (void 0 === n) return;
                throw "Inappropriate argument to identify a Pokemon.";
              }
              this.set(n);
            }
          };
        return (
          (y.prototype.hasError = function () {
            return Object.keys(this.errors).length > 0;
          }),
          (y.prototype.getStatusByCalculating = function () {
            return {
              HP: this.calculateStatus("HP"),
              ATK: this.calculateStatus("ATK"),
              DEF: this.calculateStatus("DEF"),
              SAT: this.calculateStatus("SAT"),
              SDF: this.calculateStatus("SDF"),
              SPD: this.calculateStatus("SPD"),
            };
          }),
          (y.prototype.calculateStatus = function (n, t) {
            const e = Object.assign(
              {
                bs: this["b" + n],
                iv: this["i" + n],
                ev: this["e" + n],
                nc: "HP" == n ? 1 : this["n" + n],
                lv: this.lv,
              },
              t
            );
            if ("HP" == n) {
              if (1 === e.bs) return 1;
              var r = Math.floor(
                (Math.floor(2 * e.bs + e.iv + e.ev / 4) * e.lv) / 100 +
                  e.lv +
                  10
              );
              return (
                ("ダイマックス" !== this.dynamax &&
                  "キョダイマックス" !== this.dynamax) ||
                  (r = Math.floor((r * (5 * this.dynamaxLv + 150)) / 100)),
                r
              );
            }
            return Math.floor(
              Math.floor(
                (Math.floor(2 * e.bs + e.iv + e.ev / 4) * e.lv) / 100 + 5
              ) * e.nc
            );
          }),
          (y.prototype.totalEffortValue = function () {
            var n = this;
            return this.k.SubEntries.EV.reduce(function (t, e) {
              return t + (n[e] || 0);
            }, 0);
          }),
          (y.prototype.guessEffortValue = function (n) {
            if ("number" == typeof this[n])
              for (let t = 0; t < 255; t += 4)
                if (this.calculateStatus(n, { ev: t }) === this[n]) return t;
          }),
          (y.prototype.isValidEffortValue = function (n) {
            return (
              "number" == typeof this[n] && this[n] === this.calculateStatus(n)
            );
          }),
          (y.prototype.is = function (n) {
            return this.name === n;
          }),
          (y.prototype.setWithoutNote = function (n, t, e) {
            return this.set(n, t, e, !0);
          }),
          (y.prototype.set = function (n, t, e, r) {
            if ((e >= 0 || (e = this.version), e === this.version))
              var i = this.k;
            else i = y.getConstants(e);
            var o = this;
            if (
              (i.Entries.forEach(function (l) {
                if ("CONDITION_FLAG" === l)
                  n.conditionFlags instanceof Array &&
                    n.conditionFlags.length === i.Conditions.length &&
                    (o.conditionFlags = t
                      ? n.conditionFlags.slice(0)
                      : n.conditionFlags.map(function (n) {
                          return y.clean(n, "CONDITION_FLAG", e);
                        }));
                else if ("TYPE_ID" === l)
                  n.typeIds instanceof Array &&
                    (o.typeIds = t
                      ? n.typeIds.slice(0)
                      : n.typeIds
                          .map(function (n) {
                            return y.clean(n, "TYPE_ID", e);
                          })
                          .filter(function (n) {
                            return void 0 !== n;
                          }));
                else if (i.SubEntries[l])
                  i.SubEntries[l].forEach(function (r) {
                    void 0 !== n[r] &&
                      (o[r] = t ? n[r] : y.clean(n[r], [r, l], e));
                  });
                else if ("_note" === l) {
                  if (!r) {
                    var u = n._note || n.note;
                    void 0 !== u && (o._note = t ? u : y.clean(u, l, e));
                  }
                } else
                  void 0 !== n[l] && (o[l] = t ? n[l] : y.clean(n[l], l, e));
              }),
              "object" != typeof o.moves && (o.moves = {}),
              n.moves instanceof Array)
            )
              n.moves.forEach(function (n) {
                void 0 !== n.key
                  ? (o.moves[n.key] = new a(n))
                  : console.error("move.key is missing", n);
              });
            else if ("object" == typeof n.moves)
              for (var l in n.moves) o.moves[l] = new a(n.moves[l]);
            if (t)
              i.SolvingEntries.forEach(function (t) {
                o[t] = n[t];
              });
            else {
              var u = o.setSolving(i.SolvingEntries, n, e);
              this.errors = u.errors;
            }
            return "encoded" in o && delete o.encoded, o;
          }),
          (y.prototype.expand = function () {
            var n = this,
              t = function (t, e, r) {
                void 0 === r && (r = !n[t]),
                  void 0 !== e
                    ? r
                      ? ((n[t] = e), (n.expanded[t] = !0))
                      : n[t] === e && (n.expanded[t] = !0)
                    : console.log("Pokemon#expand.setValue", t, e);
              };
            if (
              (n.id > 0 &&
                m.typeIds(n.id) &&
                t(
                  "typeIds",
                  m.typeIds(n.id),
                  !(n.typeIds instanceof Array) || 0 === n.typeIds.length
                ),
              n.id > 0 && t("name", m.name(n.id)),
              n.natureId > 0 && t("nature", m.natureName(n.natureId)),
              n.abilityId >= 0 &&
                t(
                  "ability",
                  m.ability(n.abilityId),
                  "" !== n.ability && !n.ability
                ),
              n.itemId >= 0 && t("item", u[n.itemId], "" !== n.item && !n.item),
              n.alimentId >= 0 &&
                t("aliment", h[n.alimentId], "" !== n.aliment && !n.aliment),
              n.typeIds instanceof Array &&
                t("types", m.typeName(n.typeIds), !(n.types instanceof Array)),
              n.id > 0)
            ) {
              var e = m.baseStatusArray(n.id);
              g.CAP.forEach(function (r, i) {
                t("b" + r, e[i], !(n["b" + r] > 0));
              });
            }
            if (n.natureId > 0) {
              var r = m.natureCoefficientArray(n.natureId);
              g.CAP.forEach(function (e, i) {
                t("n" + e, r[i], !(n["n" + e] > 0));
              });
            }
            if (n.id > 0 && n.natureId > 0) {
              var i = n.lv > 0;
              if (
                (g.CAP.forEach(function (t, e) {
                  n["e" + t] >= 0 || (i = !1), n["i" + t] >= 0 || (i = !1);
                }),
                i)
              ) {
                var o = n.getStatusByCalculating();
                g.CAP.forEach(function (e, r) {
                  t(e, o[e], !(n[e] > 0));
                });
              }
            }
            if (
              (n.HP > 0 && t("currentHP", n.HP, !(n.currentHP > 0)),
              n.conditionFlags instanceof Array &&
                n.conditionFlags.length === n.k.Conditions.length &&
                "object" != typeof n.conditions)
            ) {
              var l = {};
              n.k.Conditions.forEach(function (t, e) {
                l[t] = n.conditionFlags[e];
              }),
                t("conditions", l);
            }
            if (void 0 !== n.moves) for (var a in n.moves) n.moves[a].expand();
            return n;
          }),
          (y.prototype.setSolving = function (n, t, e) {
            e >= 0 || (e = this.version);
            var r = { changed: {}, errors: {} };
            switch (n) {
              case "name":
                if (!t) break;
                var l = t;
                if ("string" == typeof l) {
                  var a = m.searchId(l);
                  a
                    ? ((this.id = a),
                      (this.name = m.name(this.id)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.not_specified"));
                } else {
                  if ("number" != typeof l)
                    throw "Inappropriate argument to identify a pokemon.";
                  m.name(l)
                    ? ((this.id = l),
                      (this.name = m.name(l)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.not_found"));
                }
                break;
              case "nature":
                if (!t) break;
                var s = t;
                if ("string" == typeof s) {
                  var c = m.searchNatureIdListByPartialMatch(s);
                  if (1 !== c.length && s !== m.natureName(c[0]))
                    throw (r.errors[n] = new o("pokemon.nature.not_specified"));
                  (this.natureId = c[0]),
                    (this.nature = m.natureName(this.natureId)),
                    (r.changed[n] = !0);
                } else {
                  if ("number" != typeof s)
                    throw "Inappropriate argument to identify an ability.";
                  m.natureName(s)
                    ? ((this.natureId = s),
                      (this.nature = m.natureName(s)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.nature.not_found"));
                }
                break;
              case "ability":
                if (0 === t || "" === t) {
                  (this.abilityId = 0),
                    (this.ability = ""),
                    (r.changed[n] = !0);
                  break;
                }
                if (!t) break;
                var f = t;
                if ("string" == typeof f) {
                  var d = f.replace(/\(.+\)/, ""),
                    p = m.searchAbilityId(d);
                  p > 0 && d === m.ability(p)
                    ? ((this.abilityId = p),
                      (this.ability = f),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.ability.not_specified"));
                } else {
                  if ("number" != typeof f)
                    throw "Inappropriate argument to identify an ability.";
                  m.ability(f)
                    ? ((this.abilityId = f),
                      (this.ability = m.ability(f)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.ability.not_found"));
                }
                break;
              case "item":
                if (0 === t || "" === t) {
                  (this.itemId = 0), (this.item = ""), (r.changed[n] = !0);
                  break;
                }
                if (!t) break;
                var g = t;
                if ("string" == typeof g)
                  (_ = i.index(u, g)) > 0
                    ? ((this.itemId = _), (this.item = g), (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.item.not_found"));
                else {
                  if ("number" != typeof g)
                    throw "Inappropriate argument to identify an item.";
                  u[g]
                    ? ((this.itemId = g),
                      (this.item = u[g]),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.item.not_found"));
                }
                break;
              case "types":
                if (!(t instanceof Array && t.length > 0)) break;
                var v = [];
                t.forEach(function (t, e) {
                  if (
                    (t ||
                      0 === t ||
                      (r.errors[n] = new o("pokemon.type.illegal")),
                    "string" == typeof t)
                  ) {
                    var i = m.typeNameToId(t);
                    i >= 0
                      ? v.push(i)
                      : (r.errors[n] = new o("pokemon.type.not_specified"));
                  } else {
                    if ("number" != typeof t)
                      throw "Inappropriate argument to identify a type.";
                    m.typeName(t)
                      ? v.push(t)
                      : (r.errors[n] = new o("pokemon.type.not_specified"));
                  }
                }),
                  (this.typeIds = v),
                  (this.types = m.typeName(v)),
                  (r.changed[n] = !0);
                break;
              case "aliment":
                if (0 === t || "" === t) {
                  (this.alimentId = 0),
                    (this.aliment = ""),
                    (r.changed[n] = !0);
                  break;
                }
                if (!t) break;
                var b = t;
                if ("string" == typeof b) {
                  var _;
                  (_ = i.index(h, b)) >= 0
                    ? ((this.alimentId = _),
                      (this.aliment = b),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.aliment.not_found"));
                } else {
                  if ("number" != typeof b)
                    throw "Inappropriate argument to identify a status aliment.";
                  h[b]
                    ? ((this.alimentId = b),
                      (this.aliment = h[b]),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new o("pokemon.aliment.not_found"));
                }
                break;
              case "conditions":
                if (!t || "object" != typeof t) break;
                var w = t;
                (this.conditionFlags = this.k.Conditions.map(function (n, t) {
                  return n in w && y.clean(w[n], "CONDITION_FLAG", e);
                })),
                  (r.changed[n] = !0);
                break;
              default:
                if (n instanceof Array) {
                  var C = t,
                    x = this;
                  n.forEach(function (n) {
                    if (void 0 !== C[n]) {
                      var t = x.setSolving(n, C[n], e);
                      void 0 !== t.changed[n] &&
                        (r.changed[n] = r.changed[n] && t.changed[n]),
                        void 0 !== t.errors[n] && (r.errors[n] = t.errors[n]);
                    }
                  });
                  break;
                }
                throw "No entry to solve.";
            }
            return (
              Object.keys(r.changed).length > 0 &&
                "encoded" in this &&
                delete this.encoded,
              r
            );
          }),
          (y.prototype.copy = function (n, t) {
            return new y().set(this, n, t).expand();
          }),
          (y.prototype.equals = function (n) {
            var t = null,
              e = this,
              r = function (n) {
                return (
                  e.version === n.version &&
                  e.id === n.id &&
                  e.natureId === n.natureId &&
                  (t = t || e.encode()) === n.encode()
                );
              };
            if (n instanceof y) return r(n);
            if (n instanceof Array)
              return n.forEach(function (n) {
                return r(n);
              });
            var i = {};
            for (var o in n) i[o] = r(n[o]);
            return i;
          }),
          (y.prototype.encodeWithoutNote = function (n, t) {
            return this.encode(n, t, !0);
          }),
          (y.prototype.encode = function (n, t, e) {
            if (
              ((t = t || v),
              n >= 0 || (n = this.version),
              n === this.version && t === v && !e && this.encoded)
            )
              return this.encoded;
            if (n === this.version) var r = this.k;
            else r = y.getConstants(n);
            var o,
              l = this,
              u = r.Entries.map(function (n) {
                if ("CONDITION_FLAG" === n) {
                  var o,
                    u = [];
                  return (
                    l.conditionFlags.forEach(function (n, t) {
                      t % 32 == 0 && (u.push(0), (o = u.length - 1)),
                        n && (u[o] |= 1 << t % 32);
                    }),
                    "0" ===
                    (a = u
                      .map(function (n) {
                        return n.toString(32);
                      })
                      .join(t[2]))
                      ? ""
                      : a
                  );
                }
                if ("TYPE_ID" === n)
                  return l.typeIds instanceof Array && !l.expanded.typeIds
                    ? l.typeIds
                        .map(function (n) {
                          return n.toString(32);
                        })
                        .join(t[2])
                    : "";
                if (n in r.SubEntries) {
                  var a = r.SubEntries[n].map(function (n) {
                    return void 0 === l[n] || l.expanded[n]
                      ? ""
                      : l[n].toString(32);
                  });
                  return i.trim(a, "").join(t[2]);
                }
                return "_note" === n
                  ? !e && l._note
                    ? l.getEncodedNote()
                    : ""
                  : "dynamax" === n
                  ? "ダイマックス" === l.dynamax
                    ? "1"
                    : "キョダイマックス" === l.dynamax
                    ? "2"
                    : "0"
                  : void 0 === l[n] || l.expanded[n]
                  ? ""
                  : "number" == typeof l[n]
                  ? l[n].toString(32)
                  : l[n]
                  ? "1"
                  : "0";
              });
            if (l.moves && "object" == typeof l.moves) {
              var a = [];
              for (var s in l.moves)
                a.push(s + t[1] + l.moves[s].encode(-1, t[2]));
              o = a.join(t[0]);
            } else o = "";
            var c = [n.toString(32), i.trim(u, "").join(t[1])]
              .concat(o)
              .join(t[0]);
            return n !== this.version || t !== v || e || (l.encoded = c), c;
          }),
          (y.prototype.getNote = function () {
            return i.encode(this._note);
          }),
          (y.prototype.setNote = function (n) {
            return this.set({ _note: i.decode(n) });
          }),
          (y.prototype.getEncodedNote = function () {
            return Base64.encodeURI(this._note);
          }),
          (y.prototype.setDecodedNote = function (n) {
            return this.set({ _note: Base64.decode(n) });
          }),
          (y.decode = function (n, t) {
            var e = n.split((t = t || v)[0]),
              r = parseInt(e[0], 32),
              i = e[1].split(t[1]),
              o = e.slice(2),
              l = y.getConstants(r),
              u = {};
            l.Entries.forEach(function (n, e) {
              if ((void 0 === i[e] && (i[e] = ""), "CONDITION_FLAG" === n)) {
                var r = i[e].split(t[2]).map(function (n) {
                  return n ? parseInt(n, 32) : 0;
                });
                u.conditionFlags = l.Conditions.map(function (n, t) {
                  return 0 != (r[Math.floor(t / 32)] & (1 << t % 32));
                });
              } else if ("TYPE_ID" === n) {
                if (i[e]) {
                  var o = i[e].split(t[2]);
                  o.length > 0 &&
                    (u.typeIds = o.map(function (n) {
                      return parseInt(n, 32);
                    }));
                }
              } else {
                if (n in l.SubEntries) {
                  var a = i[e].split(t[2]);
                  return l.SubEntries[n].forEach(function (n, t) {
                    a.length > t && "" !== a[t] && (u[n] = parseInt(a[t], 32));
                  });
                }
                if ("_note" === n) i[e] && (u._note = Base64.decode(i[e]));
                else {
                  if ("dynamax" === n)
                    return "1" === i[e]
                      ? "ダイマックス"
                      : "2" === i[e]
                      ? "キョダイマックス"
                      : "";
                  "" !== i[e] && (u[n] = parseInt(i[e], 32));
                }
              }
            }),
              (u.moves = {}),
              o.forEach(function (n) {
                var e = n.indexOf(t[1]),
                  r = parseInt(n.slice(0, e), 32).toString(),
                  i = n.slice(e + t[1].length);
                u.moves[r] = a.decode(i, t[2]);
              });
            var s = new y();
            return s.set(u, !1, r), t === v && (s.encoded = n), s;
          }),
          (y.getJSON = function (n, t, e) {
            var r;
            if (n instanceof y) r = n;
            else if ("object" == typeof n) r = new y(n, e);
            else {
              if ("string" != typeof n) throw new o("pokemon.json.invalid");
              r = y.decode(n);
            }
            return r.getJSON(t, e);
          }),
          (y.prototype.getJSON = function (n) {
            var t = this.getMinimalObject();
            return n ? JSON.stringify(t, null, "\t") : JSON.stringify(t);
          }),
          (y.prototype.getMinimalObject = function () {
            var n = this.k,
              t = this,
              e = { version: this.version };
            if (
              (n.Entries.forEach(function (r) {
                "CONDITION_FLAG" === r
                  ? t.conditionFlags instanceof Array &&
                    (e.conditionFlags = t.conditionFlags)
                  : "TYPE_ID" === r
                  ? t.typeIds instanceof Array && (e.typeIds = t.typeIds)
                  : r in n.SubEntries
                  ? n.SubEntries[r].map(function (n) {
                      void 0 !== t[n] && (e[n] = t[n]);
                    })
                  : void 0 !== t[r] && (e[r] = t[r]);
              }),
              t.moves && "object" == typeof t.moves)
            ) {
              var r = {};
              for (var i in t.moves) r[i] = t.moves[i].getMinimalObject();
              e.moves = r;
            }
            return e;
          }),
          (y.clean =
            ((t = function (n, t, e) {
              return y.cleaner[t][s[e]](n);
            }),
            function (n, e, r) {
              if (e instanceof Array) {
                for (var i = 0; i < e.length; i++)
                  if (e[i] in y.cleaner) return t(n, e[i], r);
              } else if (e in y.cleaner) return t(n, e, r);
              throw "Failed to clean up a parameter.";
            })),
          (y.cleaner = {
            key: [
              function (n) {
                if (n) return parseInt(n, 10);
              },
            ],
            _note: [
              function (n) {
                if (i.takeUtf8StringInByte(n, 255).length === n.length)
                  return n;
                throw new o("pokemon.note.too_long", { max: 255 });
              },
            ],
            id: [
              function (n) {
                if (n) {
                  if (((n = parseInt(n, 10)), m.name(n))) return n;
                  throw new o("pokemon.id.inappropreate");
                }
              },
            ],
            natureId: [
              function (n) {
                if (n) {
                  if (((n = parseInt(n, 10)), m.natureName(n))) return n;
                  throw new o("pokemon.nature_no.inappropreate");
                }
              },
            ],
            lv: [
              function (n) {
                if ("0" !== n && n) {
                  if ((n = parseInt(n, 10)) > 0 && n <= 100) return n;
                  throw new o("pokemon.lv.inappropreate");
                }
              },
            ],
            dynamax: [
              function (n) {
                if (!n) return "";
                if ("ダイマックス" === n || "キョダイマックス" === n) return n;
                throw new o("pokemon.dynamax.inappropreate");
              },
            ],
            dynamaxLv: [
              function (n) {
                if (0 !== n && !n) return 0;
                if ((n = parseInt(n, 10)) >= 0 && n <= 10) return n;
                throw new o("pokemon.dynamaxLv.inappropreate");
              },
            ],
            ST: [
              function (n) {
                if ("0" !== n && n) {
                  if ((n = parseInt(n, 10)) > 0) return n;
                  throw new o("pokemon.status.inappropreate");
                }
              },
            ],
            EV: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n <= 252) return n;
                  throw new o("pokemon.ev.inappropreate");
                }
              },
            ],
            IV: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n < 32) return n;
                  throw new o("pokemon.iv.inappropreate");
                }
              },
            ],
            abilityId: [
              function (n) {
                if (0 === n || n) {
                  if (0 === (n = parseInt(n, 10)) || m.ability(n)) return n;
                  throw new o("pokemon.ability_no.inappropreate");
                }
              },
            ],
            abilityActivated: [
              function (n) {
                return !1 !== n && "false" !== n && "0" != n && (!!n || void 0);
              },
            ],
            itemId: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n < u.length) return n;
                  throw new o("pokemon.item_no.inappropreate");
                }
              },
            ],
            itemActivated: [
              function (n) {
                return !1 !== n && "false" !== n && "0" != n && (!!n || void 0);
              },
            ],
            RANK: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= -6 && n <= 6) return n;
                  throw new o("pokemon.rank.inappropreate");
                }
              },
            ],
            rCHR: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= -1 && n <= 4) return n;
                  throw new o("pokemon.critical_rank.inappropreate");
                }
              },
            ],
            TYPE_ID: [
              function (n) {
                if (0 === n || "0" === n || n) {
                  if (((n = parseInt(n, 10)), m.typeName(n))) return n;
                  throw new o("pokemon.type_no.inappropreate");
                }
              },
            ],
            alimentId: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n < h.length) return n;
                  throw new o("pokemon.aliment.inappropreate");
                }
              },
            ],
            currentHP: [
              function (n) {
                if ("0" != n && n) {
                  if ((n = parseInt(n, 10)) > 0) return n;
                  throw new o("pokemon.current_hp.inappropreate");
                }
              },
            ],
            CONDITION_FLAG: [
              function (n) {
                return !1 !== n && "false" !== n && "0" != n && (!!n || void 0);
              },
            ],
          }),
          (y.getConstants =
            ((r = function (n, t) {
              for (; !n[t] && t > 0; ) t--;
              return n[t];
            }),
            function (n) {
              void 0 === n && (n = 0);
              var t = {};
              return (
                (t.Version = n),
                (t.CleanerVersion = s[n]),
                (t.Entries = r(c, n)),
                (t.SubEntries = r(f, n)),
                (t.SolvingEntries = r(d, n)),
                (t.Conditions = r(p, n)),
                t
              );
            })),
          y
        );
      })();
    },
  }
]);