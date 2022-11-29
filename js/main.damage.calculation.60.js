(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    Mxlh: function (n, t, e) {
      "use strict";
      function r() {
        return (
          Error.call(this),
          (this.message = "object unsubscribed"),
          (this.name = "ObjectUnsubscribedError"),
          this
        );
      }
      (r.prototype = Object.create(Error.prototype)),
        (t.ObjectUnsubscribedError = r);
    },  
  }
]);