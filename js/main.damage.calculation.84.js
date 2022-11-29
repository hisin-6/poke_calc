(window.webpackJsonp = window.webpackJsonp || []).push([
  [84],
  {
    aJGj: function (n, t, e) {
      "use strict";
      var r = e("Q1FS");
      function i(n) {
        return new r.Observable(function (t) {
          return n.schedule(function () {
            return t.complete();
          });
        });
      }
      (t.EMPTY = new r.Observable(function (n) {
        return n.complete();
      })),
        (t.empty = function (n) {
          return n ? i(n) : t.EMPTY;
        }),
        (t.emptyScheduled = i);
    },  
  }
]);