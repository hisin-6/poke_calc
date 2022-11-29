(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    "7RJT": function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("ds6q"),
        o = e("Mxlh");
      t.BehaviorSubject = (function (n) {
        function t(t) {
          var e = n.call(this) || this;
          return (e._value = t), e;
        }
        return (
          r(t, n),
          Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype._subscribe = function (t) {
            var e = n.prototype._subscribe.call(this, t);
            return e && !e.closed && t.next(this._value), e;
          }),
          (t.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new o.ObjectUnsubscribedError();
            return this._value;
          }),
          (t.prototype.next = function (t) {
            n.prototype.next.call(this, (this._value = t));
          }),
          t
        );
      })(i.Subject);
    },  
  }
]);