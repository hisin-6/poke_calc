(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    FiyT: function (n, t, e) {
      var r = e("mrSG").__extends;
      t.SubjectSubscription = (function (n) {
        function t(t, e) {
          var r = n.call(this) || this;
          return (r.subject = t), (r.subscriber = e), (r.closed = !1), r;
        }
        return (
          r(t, n),
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var n = this.subject,
                t = n.observers;
              if (
                ((this.subject = null),
                t && 0 !== t.length && !n.isStopped && !n.closed)
              ) {
                var e = t.indexOf(this.subscriber);
                -1 !== e && t.splice(e, 1);
              }
            }
          }),
          t
        );
      })(e("zB/H").Subscription);
    },  
  }
]);