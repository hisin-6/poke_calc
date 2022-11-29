(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    MjHj: function (n, t, e) {
      "use strict";
      var r = e("Q1FS");
      t.isObservable = function (n) {
        return (
          !!n &&
          (n instanceof r.Observable ||
            ("function" == typeof n.lift && "function" == typeof n.subscribe))
        );
      };
    }, 
  }
]);