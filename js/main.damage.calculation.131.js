(window.webpackJsonp = window.webpackJsonp || []).push([
  [131],
  {
    yFcd: function (n, t, e) {
      "use strict";
      var r = e("Q1FS");
      t.scalar = function (n) {
        var t = new r.Observable(function (t) {
          t.next(n), t.complete();
        });
        return (t._isScalar = !0), (t.value = n), t;
      };
    },  
  }
]);