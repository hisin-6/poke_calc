(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
  {
    "b/k1": function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("gTqA"),
        o = e("aJGj");
      t.defer = function (n) {
        return new r.Observable(function (t) {
          var e;
          try {
            e = n();
          } catch (r) {
            return void t.error(r);
          }
          return (e ? i.from(e) : o.empty()).subscribe(t);
        });
      };
    },  
  }
]);