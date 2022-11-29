(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    LBXl: function (n, t, e) {
      "use strict";
      function r(n) {
        return (
          Error.call(this),
          (this.message = n
            ? n.length +
              " errors occurred during unsubscription:\n" +
              n
                .map(function (n, t) {
                  return t + 1 + ") " + n.toString();
                })
                .join("\n  ")
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = n),
          this
        );
      }
      (r.prototype = Object.create(Error.prototype)),
        (t.UnsubscriptionError = r);
    },  
  }
]);