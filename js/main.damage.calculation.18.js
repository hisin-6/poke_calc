(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    "6aLS": function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("Y4kR"),
        o = e("Vi6O"),
        l = e("cSoz"),
        u = e("q3Kh"),
        a = e("gTqA");
      t.switchMap = function n(t, e) {
        return "function" == typeof e
          ? function (r) {
              return r.pipe(
                n(function (n, r) {
                  return a.from(t(n, r)).pipe(
                    u.map(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (n) {
              return n.lift(new s(t));
            };
      };
      var s = (function () {
          function n(n) {
            this.project = n;
          }
          return (
            (n.prototype.call = function (n, t) {
              return t.subscribe(new c(n, this.project));
            }),
            n
          );
        })(),
        c = (function (n) {
          function t(t, e) {
            var r = n.call(this, t) || this;
            return (r.project = e), (r.index = 0), r;
          }
          return (
            r(t, n),
            (t.prototype._next = function (n) {
              var t,
                e = this.index++;
              try {
                t = this.project(n, e);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(t, n, e);
            }),
            (t.prototype._innerSub = function (n, t, e) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var i = new o.InnerSubscriber(this, void 0, void 0);
              this.destination.add(i),
                (this.innerSubscription = l.subscribeToResult(
                  this,
                  n,
                  t,
                  e,
                  i
                ));
            }),
            (t.prototype._complete = function () {
              var t = this.innerSubscription;
              (t && !t.closed) || n.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (t.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (t.prototype.notifyComplete = function (t) {
              this.destination.remove(t),
                (this.innerSubscription = null),
                this.isStopped && n.prototype._complete.call(this);
            }),
            (t.prototype.notifyNext = function (n, t, e, r, i) {
              this.destination.next(t);
            }),
            t
          );
        })(i.OuterSubscriber);
    },  
  }
]);