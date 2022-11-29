(window.webpackJsonp = window.webpackJsonp || []).push([
  [108],
  {
    ozli: function (n, t, e) {
      "use strict";
      var r = e("zfKp");
      t.subscribeToObservable = function (n) {
        return function (t) {
          var e = n[r.observable]();
          if ("function" != typeof e.subscribe)
            throw new TypeError(
              "Provided object does not correctly implement Symbol.observable"
            );
          return e.subscribe(t);
        };
      };
    },  
  }
]);