(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    "O+eH": function (n, t, e) {
      var r = e("mrSG").__extends;
      t.AnimationFrameAction = (function (n) {
        function t(t, e) {
          var r = n.call(this, t, e) || this;
          return (r.scheduler = t), (r.work = e), r;
        }
        return (
          r(t, n),
          (t.prototype.requestAsyncId = function (t, e, r) {
            return (
              void 0 === r && (r = 0),
              null !== r && r > 0
                ? n.prototype.requestAsyncId.call(this, t, e, r)
                : (t.actions.push(this),
                  t.scheduled ||
                    (t.scheduled = requestAnimationFrame(function () {
                      return t.flush(null);
                    })))
            );
          }),
          (t.prototype.recycleAsyncId = function (t, e, r) {
            if (
              (void 0 === r && (r = 0),
              (null !== r && r > 0) || (null === r && this.delay > 0))
            )
              return n.prototype.recycleAsyncId.call(this, t, e, r);
            0 === t.actions.length &&
              (cancelAnimationFrame(e), (t.scheduled = void 0));
          }),
          t
        );
      })(e("2tF/").AsyncAction);
    },  
  }
]);