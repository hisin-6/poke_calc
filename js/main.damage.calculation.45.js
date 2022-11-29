(window.webpackJsonp = window.webpackJsonp || []).push([
  [45],
  {
    I65S: function (n, t, e) {
      "use strict";
      var r = e("nzqU"),
        i = e("zzsZ"),
        o = e("aJGj"),
        l = e("yFcd");
      t.of = function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        var e = n[n.length - 1];
        switch ((r.isScheduler(e) ? n.pop() : (e = void 0), n.length)) {
          case 0:
            return o.empty(e);
          case 1:
            return e ? i.fromArray(n, e) : l.scalar(n[0]);
          default:
            return i.fromArray(n, e);
        }
      };
    },  
  }
]);