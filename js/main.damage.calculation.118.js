(window.webpackJsonp = window.webpackJsonp || []).push([
  [118],
  {
    rhxD: function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("mbIT"),
        o = e("zzsZ"),
        l = e("Y4kR"),
        u = e("cSoz");
      t.race = function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        if (1 === n.length) {
          if (!i.isArray(n[0])) return n[0];
          n = n[0];
        }
        return o.fromArray(n, void 0).lift(new a());
      };
      var a = (function () {
        function n() {}
        return (
          (n.prototype.call = function (n, t) {
            return t.subscribe(new s(n));
          }),
          n
        );
      })();
      t.RaceOperator = a;
      var s = (function (n) {
        function t(t) {
          var e = n.call(this, t) || this;
          return (
            (e.hasFirst = !1), (e.observables = []), (e.subscriptions = []), e
          );
        }
        return (
          r(t, n),
          (t.prototype._next = function (n) {
            this.observables.push(n);
          }),
          (t.prototype._complete = function () {
            var n = this.observables,
              t = n.length;
            if (0 === t) this.destination.complete();
            else {
              for (var e = 0; e < t && !this.hasFirst; e++) {
                var r = n[e],
                  i = u.subscribeToResult(this, r, r, e);
                this.subscriptions && this.subscriptions.push(i), this.add(i);
              }
              this.observables = null;
            }
          }),
          (t.prototype.notifyNext = function (n, t, e, r, i) {
            if (!this.hasFirst) {
              this.hasFirst = !0;
              for (var o = 0; o < this.subscriptions.length; o++)
                if (o !== e) {
                  var l = this.subscriptions[o];
                  l.unsubscribe(), this.remove(l);
                }
              this.subscriptions = null;
            }
            this.destination.next(t);
          }),
          t
        );
      })(l.OuterSubscriber);
      t.RaceSubscriber = s;
    },  
  }
]);