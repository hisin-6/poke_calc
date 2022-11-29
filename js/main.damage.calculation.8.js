(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "1Z+e": function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("FWf1");
      t.defaultIfEmpty = function (n) {
        return (
          void 0 === n && (n = null),
          function (t) {
            return t.lift(new o(n));
          }
        );
      };
      var o = (function () {
          function n(n) {
            this.defaultValue = n;
          }
          return (
            (n.prototype.call = function (n, t) {
              return t.subscribe(new l(n, this.defaultValue));
            }),
            n
          );
        })(),
        l = (function (n) {
          function t(t, e) {
            var r = n.call(this, t) || this;
            return (r.defaultValue = e), (r.isEmpty = !0), r;
          }
          return (
            r(t, n),
            (t.prototype._next = function (n) {
              (this.isEmpty = !1), this.destination.next(n);
            }),
            (t.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            t
          );
        })(i.Subscriber);
    },
  }
]);