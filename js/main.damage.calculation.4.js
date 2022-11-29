(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "+Zhm": function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("ds6q"),
        o = e("xHZb"),
        l = e("zB/H"),
        u = e("AFwO"),
        a = e("Mxlh"),
        s = e("FiyT");
      t.ReplaySubject = (function (n) {
        function t(t, e, r) {
          void 0 === t && (t = Number.POSITIVE_INFINITY),
            void 0 === e && (e = Number.POSITIVE_INFINITY);
          var i = n.call(this) || this;
          return (
            (i.scheduler = r),
            (i._events = []),
            (i._infiniteTimeWindow = !1),
            (i._bufferSize = t < 1 ? 1 : t),
            (i._windowTime = e < 1 ? 1 : e),
            e === Number.POSITIVE_INFINITY
              ? ((i._infiniteTimeWindow = !0),
                (i.next = i.nextInfiniteTimeWindow))
              : (i.next = i.nextTimeWindow),
            i
          );
        }
        return (
          r(t, n),
          (t.prototype.nextInfiniteTimeWindow = function (t) {
            var e = this._events;
            e.push(t),
              e.length > this._bufferSize && e.shift(),
              n.prototype.next.call(this, t);
          }),
          (t.prototype.nextTimeWindow = function (t) {
            this._events.push(new c(this._getNow(), t)),
              this._trimBufferThenGetEvents(),
              n.prototype.next.call(this, t);
          }),
          (t.prototype._subscribe = function (n) {
            var t,
              e = this._infiniteTimeWindow,
              r = e ? this._events : this._trimBufferThenGetEvents(),
              i = this.scheduler,
              o = r.length;
            if (this.closed) throw new a.ObjectUnsubscribedError();
            if (
              (this.isStopped || this.hasError
                ? (t = l.Subscription.EMPTY)
                : (this.observers.push(n),
                  (t = new s.SubjectSubscription(this, n))),
              i && n.add((n = new u.ObserveOnSubscriber(n, i))),
              e)
            )
              for (var c = 0; c < o && !n.closed; c++) n.next(r[c]);
            else for (c = 0; c < o && !n.closed; c++) n.next(r[c].value);
            return (
              this.hasError
                ? n.error(this.thrownError)
                : this.isStopped && n.complete(),
              t
            );
          }),
          (t.prototype._getNow = function () {
            return (this.scheduler || o.queue).now();
          }),
          (t.prototype._trimBufferThenGetEvents = function () {
            for (
              var n = this._getNow(),
                t = this._bufferSize,
                e = this._windowTime,
                r = this._events,
                i = r.length,
                o = 0;
              o < i && !(n - r[o].time < e);

            )
              o++;
            return (
              i > t && (o = Math.max(o, i - t)), o > 0 && r.splice(0, o), r
            );
          }),
          t
        );
      })(i.Subject);
      var c = (function () {
        return function (n, t) {
          (this.time = n), (this.value = t);
        };
      })();
    },
  }
]);