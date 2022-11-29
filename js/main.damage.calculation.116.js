(window.webpackJsonp = window.webpackJsonp || []).push([
  [116],
  {
    q7YW: function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("mbIT"),
        o = e("pshJ"),
        l = e("q3Kh");
      t.fromEvent = function n(t, e, u, a) {
        return (
          o.isFunction(u) && ((a = u), (u = void 0)),
          a
            ? n(t, e, u).pipe(
                l.map(function (n) {
                  return i.isArray(n) ? a.apply(void 0, n) : a(n);
                })
              )
            : new r.Observable(function (n) {
                !(function n(t, e, r, i, o) {
                  var l;
                  if (
                    (function (n) {
                      return (
                        n &&
                        "function" == typeof n.addEventListener &&
                        "function" == typeof n.removeEventListener
                      );
                    })(t)
                  ) {
                    var u = t;
                    t.addEventListener(e, r, o),
                      (l = function () {
                        return u.removeEventListener(e, r, o);
                      });
                  } else if (
                    (function (n) {
                      return (
                        n &&
                        "function" == typeof n.on &&
                        "function" == typeof n.off
                      );
                    })(t)
                  ) {
                    var a = t;
                    t.on(e, r),
                      (l = function () {
                        return a.off(e, r);
                      });
                  } else if (
                    (function (n) {
                      return (
                        n &&
                        "function" == typeof n.addListener &&
                        "function" == typeof n.removeListener
                      );
                    })(t)
                  ) {
                    var s = t;
                    t.addListener(e, r),
                      (l = function () {
                        return s.removeListener(e, r);
                      });
                  } else {
                    if (!t || !t.length)
                      throw new TypeError("Invalid event target");
                    for (var c = 0, f = t.length; c < f; c++)
                      n(t[c], e, r, i, o);
                  }
                  i.add(l);
                })(
                  t,
                  e,
                  function (t) {
                    n.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  n,
                  u
                );
              })
        );
      };
    },  
  }
]);