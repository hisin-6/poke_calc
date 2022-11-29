(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    //W7E
    "+W7E": function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("mbIT"),
        o = e("pshJ"),
        l = e("q3Kh");
      t.fromEventPattern = function n(t, e, u) {
        return u
          ? n(t, e).pipe(
              l.map(function (n) {
                return i.isArray(n) ? u.apply(void 0, n) : u(n);
              })
            )
          : new r.Observable(function (n) {
              var r,
                i = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                  return n.next(1 === t.length ? t[0] : t);
                };
              try {
                r = t(i);
              } catch (l) {
                return void n.error(l);
              }
              if (o.isFunction(e))
                return function () {
                  return e(i, r);
                };
            });
      };
    },
  }
]);