(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    QY7M: function (n, t, e) {
      var r = e("mrSG").__extends;
      t.AnimationFrameScheduler = (function (n) {
        function t() {
          return (null !== n && n.apply(this, arguments)) || this;
        }
        return (
          r(t, n),
          (t.prototype.flush = function (n) {
            (this.active = !0), (this.scheduled = void 0);
            var t,
              e = this.actions,
              r = -1,
              i = e.length;
            n = n || e.shift();
            do {
              if ((t = n.execute(n.state, n.delay))) break;
            } while (++r < i && (n = e.shift()));
            if (((this.active = !1), t)) {
              for (; ++r < i && (n = e.shift()); ) n.unsubscribe();
              throw t;
            }
          }),
          t
        );
      })(e("NTcF").AsyncScheduler);
    },  
  }
]);