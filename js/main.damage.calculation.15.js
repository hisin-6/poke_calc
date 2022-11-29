(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    "5Dxv": function (n, t) {
      n.exports = (function (n) {
        "use strict";
        var t = function (n, t, e, r) {
          return this.set(n, t, e, r), this;
        };
        return (
          (t.prototype.set = function (n, t, e, r) {
            (this.damage = (n = n || []).slice(0, 16)),
              (this.criticalDamage = n.slice(16, 32)),
              (this.CHR = t),
              (this.descriptions = e),
              (this.parameters = r);
          }),
          (t.prototype.isValid = function () {
            return this.damage.length > 0;
          }),
          (t.prototype.max = function (n) {
            return n
              ? this.criticalDamage[this.criticalDamage.length - 1]
              : this.damage[this.damage.length - 1];
          }),
          (t.prototype.min = function (n) {
            return n ? this.criticalDamage[0] : this.damage[0];
          }),
          (t.prototype.range = function (n) {
            return n ? this.criticalDamage.slice(0) : this.damage.slice(0);
          }),
          (t.prototype.percentMax = function (n, t) {
            return (100 * this.max(t)) / n;
          }),
          (t.prototype.percentMin = function (n, t) {
            return (100 * this.min(t)) / n;
          }),
          (t.prototype.rangeString = function (n, t) {
            return (
              "string" == typeof n
                ? ((t = n), (n = !1))
                : void 0 === t && (t = "〜"),
              this.min(n).toString() + t + this.max(n).toString()
            );
          }),
          (t.prototype.percentMaxString = function (n, t, e) {
            return (
              void 0 === t
                ? (t = 1)
                : "boolean" == typeof t && ((e = t), (t = 1)),
              this.percentMax(n, e).toFixed(t) + "%"
            );
          }),
          (t.prototype.percentMinString = function (n, t, e) {
            return (
              void 0 === t
                ? (t = 1)
                : "boolean" == typeof t && ((e = t), (t = 1)),
              this.percentMin(n, e).toFixed(t) + "%"
            );
          }),
          (t.prototype.percentRangeString = function (n, t, e, r) {
            return (
              "string" == typeof t && ((r = t), (e = !1), (t = 1)),
              "string" == typeof e
                ? ((r = e), (e = !1))
                : void 0 === r && (r = "〜"),
              this.percentMinString(n, t, e) +
                r +
                this.percentMaxString(n, t, e)
            );
          }),
          t
        );
      })();
    },
  }
]);