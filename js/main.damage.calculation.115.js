(window.webpackJsonp = window.webpackJsonp || []).push([
  [115],
  {
    q3Kh: function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("FWf1");
      t.map = function (n, t) {
        return function (e) {
          if ("function" != typeof n)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return e.lift(new o(n, t));
        };
      };
      var o = (function () {
        function n(n, t) {
          (this.project = n), (this.thisArg = t);
        }
        return (
          (n.prototype.call = function (n, t) {
            return t.subscribe(new l(n, this.project, this.thisArg));
          }),
          n
        );
      })();
      t.MapOperator = o;
      var l = (function (n) {
        function t(t, e, r) {
          var i = n.call(this, t) || this;
          return (i.project = e), (i.count = 0), (i.thisArg = r || i), i;
        }
        return (
          r(t, n),
          (t.prototype._next = function (n) {
            var t;
            try {
              t = this.project.call(this.thisArg, n, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(i.Subscriber);
    },  
  }
]);