(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    Ljqs: function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("Q1FS"),
        o = e("mbIT"),
        l = e("aJGj"),
        u = e("cSoz"),
        a = e("Y4kR"),
        s = e("q3Kh");
      t.forkJoin = function n() {
        for (var t, e = [], r = 0; r < arguments.length; r++)
          e[r] = arguments[r];
        return (
          "function" == typeof e[e.length - 1] && (t = e.pop()),
          1 === e.length && o.isArray(e[0]) && (e = e[0]),
          0 === e.length
            ? l.EMPTY
            : t
            ? n(e).pipe(
                s.map(function (n) {
                  return t.apply(void 0, n);
                })
              )
            : new i.Observable(function (n) {
                return new c(n, e);
              })
        );
      };
      var c = (function (n) {
        function t(t, e) {
          var r = n.call(this, t) || this;
          (r.sources = e), (r.completed = 0), (r.haveValues = 0);
          var i = e.length;
          r.values = new Array(i);
          for (var o = 0; o < i; o++) {
            var l = u.subscribeToResult(r, e[o], null, o);
            l && r.add(l);
          }
          return r;
        }
        return (
          r(t, n),
          (t.prototype.notifyNext = function (n, t, e, r, i) {
            (this.values[e] = t),
              i._hasValue || ((i._hasValue = !0), this.haveValues++);
          }),
          (t.prototype.notifyComplete = function (n) {
            var t = this.destination,
              e = this.haveValues,
              r = this.values,
              i = r.length;
            n._hasValue
              ? (this.completed++,
                this.completed === i && (e === i && t.next(r), t.complete()))
              : t.complete();
          }),
          t
        );
      })(a.OuterSubscriber);
    }, 
  }
]);