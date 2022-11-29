(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
  {
    Z5tI: function (n, t, e) {
      "use strict";
      var r = e("MkmW");
      t.subscribeToPromise = function (n) {
        return function (t) {
          return (
            n
              .then(
                function (n) {
                  t.closed || (t.next(n), t.complete());
                },
                function (n) {
                  return t.error(n);
                }
              )
              .then(null, r.hostReportError),
            t
          );
        };
      };
    },  
  }
]);