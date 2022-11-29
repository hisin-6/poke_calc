(window.webpackJsonp = window.webpackJsonp || []).push([
  [67],
  {
    "QQk/": function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t = e("5Dxv"),
          r = function (n, e) {
            if (n instanceof t) {
              var r,
                i = void 0 === e ? n.CHR : e,
                o = n.range().concat(n.range(!0));
              for (
                this.damages = [],
                  this.distribution = [],
                  r = (1 - i) / 16,
                  l = 0;
                l < 16;
                l++
              )
                0 === l || o[l] !== o[l - 1]
                  ? (this.damages.push(o[l]), this.distribution.push(r))
                  : (this.distribution[this.distribution.length - 1] += r);
              for (r = i / 16, l = 16; l < 32; l++)
                o[l] !== o[l - 1]
                  ? (this.damages.push(o[l]), this.distribution.push(r))
                  : (this.distribution[this.distribution.length - 1] += r);
            } else if (((this.damages = n), void 0 === e)) {
              this.distribution = [];
              for (var l = 0; l < n.length; l++)
                this.distribution.push(1 / n.length);
            } else this.distribution = e;
          };
        return (
          (r.prototype.getDamages = function () {
            return this.damages.slice(0);
          }),
          (r.prototype.getDistribution = function () {
            return this.distribution.slice(0);
          }),
          r
        );
      })();
    },  
  }
]);