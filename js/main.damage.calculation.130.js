(window.webpackJsonp = window.webpackJsonp || []).push([
  [130],
  {
    xKqS: function (n, t, e) {
      "use strict";
      var r = e("aJGj"),
        i = e("I65S"),
        o = e("vLqr");
      (t.NotificationKind = (function (n) {
        return (n.NEXT = "N"), (n.ERROR = "E"), (n.COMPLETE = "C"), n;
      })(t.NotificationKind || {})),
        (t.Notification = (function () {
          function n(n, t, e) {
            (this.kind = n),
              (this.value = t),
              (this.error = e),
              (this.hasValue = "N" === n);
          }
          return (
            (n.prototype.observe = function (n) {
              switch (this.kind) {
                case "N":
                  return n.next && n.next(this.value);
                case "E":
                  return n.error && n.error(this.error);
                case "C":
                  return n.complete && n.complete();
              }
            }),
            (n.prototype.do = function (n, t, e) {
              switch (this.kind) {
                case "N":
                  return n && n(this.value);
                case "E":
                  return t && t(this.error);
                case "C":
                  return e && e();
              }
            }),
            (n.prototype.accept = function (n, t, e) {
              return n && "function" == typeof n.next
                ? this.observe(n)
                : this.do(n, t, e);
            }),
            (n.prototype.toObservable = function () {
              switch (this.kind) {
                case "N":
                  return i.of(this.value);
                case "E":
                  return o.throwError(this.error);
                case "C":
                  return r.empty();
              }
              throw new Error("unexpected notification kind value");
            }),
            (n.createNext = function (t) {
              return void 0 !== t
                ? new n("N", t)
                : n.undefinedValueNotification;
            }),
            (n.createError = function (t) {
              return new n("E", void 0, t);
            }),
            (n.createComplete = function () {
              return n.completeNotification;
            }),
            (n.completeNotification = new n("C")),
            (n.undefinedValueNotification = new n("N", void 0)),
            n
          );
        })());
    },  
  }
]);