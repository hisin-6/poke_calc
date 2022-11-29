(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "5Qfn": function (n, t, e) {
      "use strict";
      var r = e("b/k1"),
        i = e("aJGj");
      t.iif = function (n, t, e) {
        return (
          void 0 === t && (t = i.EMPTY),
          void 0 === e && (e = i.EMPTY),
          r.defer(function () {
            return n() ? t : e;
          })
        );
      };
    },
  }
]);