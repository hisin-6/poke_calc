(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "6qA3": function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("OAkW"),
        o = e("Z5tI"),
        l = e("poJ0"),
        u = e("ozli"),
        a = e("yRPT"),
        s = e("90cg"),
        c = e("GMZp"),
        f = e("VKeD"),
        d = e("zfKp");
      t.subscribeTo = function (n) {
        if (n instanceof r.Observable)
          return function (t) {
            return n._isScalar
              ? (t.next(n.value), void t.complete())
              : n.subscribe(t);
          };
        if (n && "function" == typeof n[d.observable])
          return u.subscribeToObservable(n);
        if (a.isArrayLike(n)) return i.subscribeToArray(n);
        if (s.isPromise(n)) return o.subscribeToPromise(n);
        if (n && "function" == typeof n[f.iterator])
          return l.subscribeToIterable(n);
        var t = c.isObject(n) ? "an invalid object" : "'" + n + "'";
        throw new TypeError(
          "You provided " +
            t +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
        );
      };
    },
  }
]);