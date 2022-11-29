(window.webpackJsonp = window.webpackJsonp || []).push([
  [95],
  {
    eJ3O: function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("1pIY"),
        o = e("p0+S"),
        l = e("nzqU");
      function u(n) {
        var t = n.index,
          e = n.period,
          r = n.subscriber;
        if ((r.next(t), !r.closed)) {
          if (-1 === e) return r.complete();
          (n.index = t + 1), this.schedule(n, e);
        }
      }
      t.timer = function (n, t, e) {
        void 0 === n && (n = 0);
        var a = -1;
        return (
          o.isNumeric(t)
            ? (a = Number(t) < 1 ? 1 : Number(t))
            : l.isScheduler(t) && (e = t),
          l.isScheduler(e) || (e = i.async),
          new r.Observable(function (t) {
            var r = o.isNumeric(n) ? n : +n - e.now();
            return e.schedule(u, r, { index: 0, period: a, subscriber: t });
          })
        );
      };
    }, 
  }
]);