(window.webpackJsonp = window.webpackJsonp || []).push([
  [87],
  {
    bSNN: function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t,
          r = e("uKus"),
          i = e("+JDR"),
          o = e("YFCf"),
          l = e("w4gP"),
          u = [0],
          a = [
            [
              "id",
              "activated",
              "category",
              "typeId",
              "POW",
              "ACR",
              "targetId",
              "dynamax",
            ],
          ],
          s = [["name", "type", "target"]],
          c = [["data"]],
          f = new o(),
          d = function (n, t) {
            if (
              ((this.version = t >= 0 ? t : 0),
              (this.k = d.getConstants(t)),
              (this.expanded = {}),
              []
                .concat(this.k.Entries)
                .concat(this.k.SolvingEntries)
                .concat(this.k.AdditionalEntries)
                .forEach(function (n) {
                  this.expanded[n] = !1;
                }, this),
              "string" == typeof n)
            )
              this.set({ name: n });
            else if ("number" == typeof n) this.set({ id: n });
            else {
              if ("object" != typeof n) {
                if (void 0 === n) return;
                throw "Inappropriate argument to identify a move";
              }
              this.set(n);
            }
          };
        return (
          (d.prototype.hasError = function () {
            return Object.keys(this.errors).length > 0;
          }),
          (d.prototype.is = function (n) {
            return this.dynamax ? this.dynamax === n : this.name === n;
          }),
          (d.prototype.set = function (n, t, e) {
            if ((e >= 0 || (e = this.version), e === this.version))
              var r = this.k;
            else r = d.getConstants(e);
            var i = this;
            r.Entries.forEach(function (r) {
              void 0 !== n[r] && (i[r] = t ? n[r] : d.clean(n[r], r, e));
            });
            var o = i.setSolving(r.SolvingEntries, n, e);
            return (
              (this.errors = o.errors), "encoded" in i && delete i.encoded, i
            );
          }),
          (d.prototype.expand = function () {
            var n = this,
              t = function (t, e, r) {
                void 0 === r && (r = !n[t]),
                  void 0 !== e
                    ? r
                      ? ((n[t] = e), (n.expanded[t] = !0))
                      : n[t] === e && (n.expanded[t] = !0)
                    : console.log("Move#expand.setValue", t, e);
              };
            if (n.id) {
              var e = f.attackMoveData(n.id);
              t("name", f.move(n.id)),
                n.dynamax
                  ? (t("data", null),
                    t("typeId", e[0], "number" != typeof n.typeId),
                    t("category", e[1], "number" != typeof n.category),
                    t(
                      "POW",
                      l.getDynamaxMovePower(n.dynamax, n.id, e[2], n.typeId),
                      "number" != typeof n.POW
                    ),
                    t("ACR", 0, "number" != typeof n.ACR),
                    t("rCHR", 0, "number" != typeof n.rCHR),
                    t("targetId", 0, !0))
                  : (t("data", e, !n.data || 0 === n.data.length),
                    t("typeId", e[0], "number" != typeof n.typeId),
                    t("category", e[1], "number" != typeof n.category),
                    t("POW", e[2], "number" != typeof n.POW),
                    t("ACR", e[3], "number" != typeof n.ACR),
                    t("rCHR", e[9] > 3 ? 3 : e[9], "number" != typeof n.rCHR),
                    t("targetId", e[7], !0));
            }
            return (
              n.typeId >= 0 && t("type", f.typeNameList()[n.typeId]),
              n.targetId >= 0 && t("target", f.getTargetCode(n.targetId)),
              n
            );
          }),
          (d.prototype.setSolving = function (n, t, e) {
            e >= 0 || (e = this.version);
            var r = { changed: {}, errors: {} };
            switch (n) {
              case "name":
                if (!t) break;
                if ("string" == typeof (d = t))
                  (l = f.searchMoveId(d))
                    ? ((this.id = l),
                      (this.name = f.move(this.id)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new i("move.not_specified"));
                else {
                  if ("number" != typeof d)
                    throw "Inappropriate argument to identify a move.";
                  f.move(d)
                    ? ((this.id = d),
                      (this.name = f.move(d)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new i("move.not_found"));
                }
                break;
              case "type":
                if (!t) break;
                var o = t;
                if ("string" == typeof o) {
                  var l;
                  (l = f.typeNameToId(o)) >= 0
                    ? ((this.typeId = l), (this.type = o), (r.changed[n] = !0))
                    : (r.errors[n] = new i("move.type.not_specified"));
                } else {
                  if ("number" != typeof o)
                    throw "Inappropriate argument to identify a type.";
                  f.typeName(o)
                    ? ((this.typeId = o),
                      (this.type = f.typeId(o)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new i("move.type.not_specified"));
                }
                break;
              case "target":
                if (!t) break;
                var u = t;
                if ("string" == typeof u) {
                  for (var a, s = 0; (a = f.getTargetCode(s)); ) {
                    if (a === u) {
                      (this.target = u),
                        (this.targetId = s),
                        (r.changed[n] = !0);
                      break;
                    }
                    s++;
                  }
                  a || (r.errors[n] = new i("move.target.not_specified"));
                } else {
                  if ("number" != typeof u)
                    throw "Inappropriate argument to identify a target.";
                  f.getTargetCode(u)
                    ? ((this.targetId = u),
                      (this.target = f.getTargetCode(u)),
                      (r.changed[n] = !0))
                    : (r.errors[n] = new i("move.target.not_specified"));
                }
                break;
              default:
                if (n instanceof Array) {
                  var c = t,
                    d = this;
                  n.forEach(function (n) {
                    if (void 0 !== c[n]) {
                      var t = d.setSolving(n, c[n], e);
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
          (d.prototype.copy = function (n) {
            return new d().set(this, n);
          }),
          (d.prototype.equals = function (n) {
            var t = null,
              e = this,
              r = function (n) {
                return (
                  e.version === n.version &&
                  e.id === n.id &&
                  (t = t || e.encode()) === n.encode()
                );
              };
            if (n instanceof Array)
              return n.forEach(function (n) {
                return r(n);
              });
            if ("object" == typeof n) {
              var i = {};
              for (var o in n) i[o] = r(n[o]);
              return i;
            }
            return r(n);
          }),
          (d.prototype.isMultiTarget = function () {
            return (
              "自分以外" === this.target ||
              "敵全体" === this.target ||
              "全体" === this.target
            );
          }),
          (d.prototype.encode = function (n, t) {
            if (
              ((t = t || "~"),
              n >= 0 || (n = this.version),
              n === this.version && "~" === t && this.encoded)
            )
              return this.encoded;
            if (n === this.version) var e = this.k;
            else e = d.getConstants(n);
            var i = this,
              o = e.Entries.map(function (n) {
                return void 0 === i[n] || i.expanded[n]
                  ? ""
                  : "number" == typeof i[n]
                  ? i[n].toString(32)
                  : i[n]
                  ? "1"
                  : "0";
              }),
              l = n.toString(32) + t + r.trim(o, "").join(t);
            return n === this.version && "~" === t && (i.encoded = l), l;
          }),
          (d.decode = function (n, t) {
            var e = n.indexOf((t = t || "~")),
              r = parseInt(n.slice(0, e), 32),
              i = n.slice(e + t.length).split(t),
              o = d.getConstants(r),
              l = {};
            o.Entries.forEach(function (n, t) {
              i.length > t && "" !== i[t] && (l[n] = parseInt(i[t], 32));
            });
            var u = new d();
            return u.set(l, !1, r), "~" === t && (u.encoded = n), u;
          }),
          (d.prototype.getJSON = function (n) {
            var t = this.getMinimalObject();
            return n ? JSON.stringify(t, null, "  ") : JSON.stringify(t);
          }),
          (d.prototype.getMinimalObject = function () {
            var n = this,
              t = { version: this.version };
            return (
              this.k.Entries.forEach(function (e) {
                void 0 !== n[e] && (t[e] = n[e]);
              }),
              t
            );
          }),
          (d.clean = function (n, t, e) {
            return d.cleaner[t][u[e]](n);
          }),
          (d.cleaner = {
            id: [
              function (n) {
                if ("0" != n && n) {
                  if (((n = parseInt(n, 10)), f.move(n))) return n;
                  throw new i("move.id.inappropreate");
                }
              },
            ],
            activated: [
              function (n) {
                return !1 !== n && "false" !== n && "0" != n && (!!n || void 0);
              },
            ],
            category: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n <= 2) return n;
                  throw new i("move.category.inappropreate");
                }
              },
            ],
            typeId: [
              function (n) {
                if (0 === n || n) {
                  if (((n = parseInt(n, 10)), f.typeName(n))) return n;
                  throw new i("move.type_no.inappropreate");
                }
              },
            ],
            POW: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0) return n;
                  throw new i("move.power.inappropreate");
                }
              },
            ],
            ACR: [
              function (n) {
                if (0 === n || n) {
                  if ((n = parseInt(n, 10)) >= 0 && n <= 100) return n;
                  throw new i("move.accuracy.inappropreate");
                }
              },
            ],
            targetId: [
              function (n) {
                if (n) {
                  if (((n = parseInt(n, 10)), f.getTargetCode(n))) return n;
                  throw new i("move.target_no.inappropreate");
                }
              },
            ],
            dynamax: [
              function (n) {
                if (!n) return "";
                if (l.getDynamaxAttackInfo(n)) return n;
                throw new i("move.dynamax.inappropreate");
              },
            ],
          }),
          (d.getConstants =
            ((t = function (n, t) {
              for (; !n[t] && t > 0; ) t--;
              return n[t];
            }),
            function (n) {
              void 0 === n && (n = 0);
              var e = {};
              return (
                (e.Version = n),
                (e.Entries = t(a, n)),
                (e.SolvingEntries = t(s, n)),
                (e.AdditionalEntries = t(c, n)),
                e
              );
            })),
          d
        );
      })();
    },  
  }
]);