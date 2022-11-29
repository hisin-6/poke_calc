(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    XoMe: function (n, t, e) {
      "use strict";
      var r = e("0z0v"),
        i = e("4ik+"),
        o = e("Dxa7"),
        l = e("1Z+e"),
        u = e("W96K"),
        a = e("yoF8");
      t.first = function (n, t) {
        var e = arguments.length >= 2;
        return function (s) {
          return s.pipe(
            n
              ? i.filter(function (t, e) {
                  return n(t, e, s);
                })
              : a.identity,
            o.take(1),
            e
              ? l.defaultIfEmpty(t)
              : u.throwIfEmpty(function () {
                  return new r.EmptyError();
                })
          );
        };
      };
    },  
  }
]);