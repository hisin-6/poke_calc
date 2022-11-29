(window.webpackJsonp = window.webpackJsonp || []).push([
  [106],
  {
    n3uD: function (n, t, e) {
      "use strict";
      var r = !1;
      t.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(n) {
          if (n) {
            var t = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                t.stack
            );
          } else
            r &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          r = n;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        },
      };
    },  
  }
]);