(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    "4mvG": function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("FWf1");
      t.refCount = function () {
        return function (n) {
          return n.lift(new o(n));
        };
      };
      var o = (function () {
          function n(n) {
            this.connectable = n;
          }
          return (
            (n.prototype.call = function (n, t) {
              var e = this.connectable;
              e._refCount++;
              var r = new l(n, e),
                i = t.subscribe(r);
              return r.closed || (r.connection = e.connect()), i;
            }),
            n
          );
        })(),
        l = (function (n) {
          function t(t, e) {
            var r = n.call(this, t) || this;
            return (r.connectable = e), r;
          }
          return (
            r(t, n),
            (t.prototype._unsubscribe = function () {
              var n = this.connectable;
              if (n) {
                this.connectable = null;
                var t = n._refCount;
                if (t <= 0) this.connection = null;
                else if (((n._refCount = t - 1), t > 1)) this.connection = null;
                else {
                  var e = this.connection,
                    r = n._connection;
                  (this.connection = null),
                    !r || (e && r !== e) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            t
          );
        })(i.Subscriber);
    },  
  }
]);