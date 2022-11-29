(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "0z0v": function (n, t, e) {
      "use strict";
      function r() {
        return (
          Error.call(this),
          (this.message = "no elements in sequence"),
          (this.name = "EmptyError"),
          this
        );
      }
      (r.prototype = Object.create(Error.prototype)), (t.EmptyError = r);
    },
  }
]);