(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    Lsv5: function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t,
          r,
          i,
          o,
          l,
          u = e("uKus");
        return (
          (function () {
            var n,
              e = ["HP", "ATK", "DEF", "SAT", "SDF", "SPD"];
            function a(n) {
              1 === n.length && (n = n[0]);
              var t = { length: e.length };
              if (void 0 !== n) for (var r = 0; r < t.length; r++) t[r] = n[r];
              return t;
            }
            function s() {
              return function (n) {
                if (void 0 === n || "ALL" === n) {
                  for (var t = [], r = 0; r < e.length; r++) t[r] = this.get(r);
                  return t;
                }
                return (
                  "string" == typeof n && (n = u.index(e, n)),
                  "object" == typeof this[n]
                    ? 1 === this[n].length
                      ? this[n][0]
                      : void 0
                    : this[n]
                );
              };
            }
            function c() {
              return function (n, t) {
                if ("ALL" === n) {
                  "object" != typeof t &&
                    (t = Array.prototype.slice.call(arguments, 1));
                  for (var r = 0; r < this.length; r++) this[r] = t[r];
                } else
                  "string" == typeof n && (n = u.index(e, n)), (this[n] = t);
              };
            }
            function f() {
              return function (n) {
                if (void 0 === n || "ALL" === n) {
                  for (var t = [], r = 0; r < e.length; r++)
                    t[r] = arguments.callee.call(this, r);
                  return t;
                }
                return (
                  "string" == typeof n && (n = u.index(e, n)),
                  "number" === this[n] ? [this[n]] : this[n].slice()
                );
              };
            }
            function d(n) {
              var t = [];
              switch (n) {
                case "IV":
                  for (var r = 0; r <= 31; r++) t[r] = r;
              }
              return function (n, r) {
                if (void 0 === n || "ALL" === n) {
                  void 0 === r
                    ? (r = [])
                    : "object" != typeof r[0] &&
                      (r = Array.prototype.slice.call(arguments, 1));
                  for (var i = 0; i < this.length; i++)
                    arguments.callee.call(this, i, r[i]);
                } else
                  void 0 === r && (r = t),
                    "string" == typeof n && (n = u.index(e, n)),
                    (this[n] = r.slice());
              };
            }
            function p(n) {
              var t, e;
              return (
                "ST" === n
                  ? (t = function (n) {
                      return n === parseInt(n) && n > 0;
                    })
                  : "BS" === n
                  ? (t = function (n) {
                      return n === parseInt(n) && n > 0 && n <= 255;
                    })
                  : "IV" === n
                  ? (t = function (n) {
                      return n === parseInt(n) && n >= 0 && n <= 31;
                    })
                  : "EV" === n
                  ? ((t = function (n) {
                      return n === parseInt(n) && n >= 0 && n <= 255;
                    }),
                    (e = function (n) {
                      return n <= 510;
                    }))
                  : "NC" === n
                  ? (t = function (n) {
                      return 1 === n || 1.1 === n || 0.9 === n;
                    })
                  : "IVRange" === n &&
                    (t = function (n) {
                      if (0 === n.length) return !0;
                      if (!(n[0] === parseInt(n[0]) && n[0] >= 0)) return !1;
                      if (
                        !(
                          n[n.length - 1] === parseInt(n[n.length - 1]) &&
                          n[n.length - 1] <= 31
                        )
                      )
                        return !1;
                      for (var t = 1; t < n.length; t++)
                        if (n[t] !== parseInt(n[t]) || n[t] <= n[t - 1])
                          return !1;
                      return !0;
                    }),
                function (n) {
                  if (void 0 === n) {
                    for (var r = 0, i = 0; i < this.length; i++) {
                      var o = this[i];
                      if (void 0 !== o) {
                        if (!t(o)) return !1;
                        r += o;
                      }
                    }
                    return "function" != typeof e || e(r);
                  }
                  return t(this[n]);
                }
              );
            }
            function h() {
              return function () {
                for (var n = 0; n < e.length; n++)
                  if (void 0 === this[n]) return !1;
                return !0;
              };
            }
            function g(n) {
              switch (n) {
                case "ST":
                  return function () {
                    return new t(this.get());
                  };
                case "BS":
                  return function () {
                    return new r(this.get());
                  };
                case "IV":
                  return function () {
                    for (var n = new i(), t = 0; t < e.length; t++)
                      this.isRange(t)
                        ? n.set(t, this.getRange(t))
                        : n.set(t, this.get(t));
                    return n;
                  };
                case "EV":
                  return function () {
                    return new o(this.get());
                  };
                case "NC":
                  return function () {
                    return new l(this.get());
                  };
              }
            }
            void 0 !==
              (n =
                "object" == typeof arguments[0]
                  ? arguments[0]
                  : Array.prototype.slice.call(arguments, 0)) &&
              (void 0 === t &&
                u.index(n, "ST") >= 0 &&
                ((t = function () {
                  if ((Object.assign(this, a(arguments)), !this.validate()))
                    throw "ステータスが正しく指定されていません!";
                }).prototype = {
                  validate: p("ST"),
                  get: s(),
                  set: c(),
                  copy: g("ST"),
                  isDefined: h(),
                }),
              void 0 === r &&
                u.index(n, "BS") >= 0 &&
                ((r = function () {
                  if ((Object.assign(this, a(arguments)), !this.validate()))
                    throw "種族値が正しく指定されていません!";
                }).prototype = {
                  validate: p("BS"),
                  get: s(),
                  set: c(),
                  copy: g("BS"),
                  isDefined: h(),
                }),
              void 0 === i &&
                u.index(n, "IV") >= 0 &&
                ((i = function () {
                  if (
                    (Object.assign(this, a(arguments)),
                    !this.validate() && !this.validateRange())
                  )
                    throw "個体値が正しく指定されていません!";
                }).prototype = {
                  validate: p("IV"),
                  get: s(),
                  set: c(),
                  validateRange: p("IVRange"),
                  getRange: f(),
                  setRange: d("IV"),
                  isRange: function (n) {
                    return "object" == typeof this[n];
                  },
                  copy: g("IV"),
                  isDefined: h(),
                }),
              void 0 === o &&
                u.index(n, "EV") >= 0 &&
                ((o = function () {
                  if ((Object.assign(this, a(arguments)), !this.validate()))
                    throw "努力値が正しく指定されていません!";
                }).prototype = {
                  validate: p("EV"),
                  get: s(),
                  set: c(),
                  copy: g("EV"),
                  isDefined: h(),
                }),
              void 0 === l &&
                u.index(n, "NC") >= 0 &&
                ((l = function () {
                  if ((Object.assign(this, a(arguments)), !this.validate()))
                    throw "性格補正値が正しく指定されていません!";
                }).prototype = {
                  validate: p("NC"),
                  get: s(),
                  set: c(),
                  copy: g("NC"),
                  isDefined: h(),
                }));
          })("ST", "BS", "IV", "EV", "NC"),
          {
            Status: t,
            BaseStatus: r,
            IndividualValues: i,
            EffortValues: o,
            NatureCoefficients: l,
          }
        );
      })();
    },  
  }
]);