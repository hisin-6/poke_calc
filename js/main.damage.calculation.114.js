(window.webpackJsonp = window.webpackJsonp || []).push([
  [114],
  {
    ptTZ: function (n, t, e) {
      var r = e("mrSG").__extends,
        i = e("2tF/");
      t.VirtualTimeScheduler = (function (n) {
        function t(t, e) {
          void 0 === t && (t = o),
            void 0 === e && (e = Number.POSITIVE_INFINITY);
          var r =
            n.call(this, t, function () {
              return r.frame;
            }) || this;
          return (r.maxFrames = e), (r.frame = 0), (r.index = -1), r;
        }
        return (
          r(t, n),
          (t.prototype.flush = function () {
            for (
              var n, t, e = this.actions, r = this.maxFrames;
              (t = e[0]) &&
              t.delay <= r &&
              (e.shift(),
              (this.frame = t.delay),
              !(n = t.execute(t.state, t.delay)));

            );
            if (n) {
              for (; (t = e.shift()); ) t.unsubscribe();
              throw n;
            }
          }),
          (t.frameTimeFactor = 10),
          t
        );
      })(e("NTcF").AsyncScheduler);
      var o = (function (n) {
        function t(t, e, r) {
          void 0 === r && (r = t.index += 1);
          var i = n.call(this, t, e) || this;
          return (
            (i.scheduler = t),
            (i.work = e),
            (i.index = r),
            (i.active = !0),
            (i.index = t.index = r),
            i
          );
        }
        return (
          r(t, n),
          (t.prototype.schedule = function (e, r) {
            if ((void 0 === r && (r = 0), !this.id))
              return n.prototype.schedule.call(this, e, r);
            this.active = !1;
            var i = new t(this.scheduler, this.work);
            return this.add(i), i.schedule(e, r);
          }),
          (t.prototype.requestAsyncId = function (n, e, r) {
            void 0 === r && (r = 0), (this.delay = n.frame + r);
            var i = n.actions;
            return i.push(this), i.sort(t.sortActions), !0;
          }),
          (t.prototype.recycleAsyncId = function (n, t, e) {
            void 0 === e && (e = 0);
          }),
          (t.prototype._execute = function (t, e) {
            if (!0 === this.active)
              return n.prototype._execute.call(this, t, e);
          }),
          (t.sortActions = function (n, t) {
            return n.delay === t.delay
              ? n.index === t.index
                ? 0
                : n.index > t.index
                ? 1
                : -1
              : n.delay > t.delay
              ? 1
              : -1;
          }),
          t
        );
      })(i.AsyncAction);
      t.VirtualAction = o;
    },      
  }
]);