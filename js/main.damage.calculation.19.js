(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    "6eB1": function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("nzqU"),
        o = e("QtHX"),
        l = e("zzsZ");
      t.merge = function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        var e = Number.POSITIVE_INFINITY,
          u = null,
          a = n[n.length - 1];
        return (
          i.isScheduler(a)
            ? ((u = n.pop()),
              n.length > 1 &&
                "number" == typeof n[n.length - 1] &&
                (e = n.pop()))
            : "number" == typeof a && (e = n.pop()),
          null === u && 1 === n.length && n[0] instanceof r.Observable
            ? n[0]
            : o.mergeAll(e)(l.fromArray(n, u))
        );
      };
    },
  }
]);