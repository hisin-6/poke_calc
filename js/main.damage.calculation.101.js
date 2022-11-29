(window.webpackJsonp = window.webpackJsonp || []).push([
  [101],
  {
    iFGG: function (n, t, e) {
      "use strict";
      var r = 1,
        i = {};
      t.Immediate = {
        setImmediate: function (n) {
          var t = r++;
          return (
            (i[t] = n),
            Promise.resolve().then(function () {
              return (function (n) {
                var t = i[n];
                t && t();
              })(t);
            }),
            t
          );
        },
        clearImmediate: function (n) {
          delete i[n];
        },
      };
    },  
  }
]);