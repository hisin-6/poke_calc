(window.webpackJsonp = window.webpackJsonp || []).push([
  [99],
  {
    ffpz: function (n, t, e) {
      "use strict";
      t.Scheduler = (function () {
        function n(t, e) {
          void 0 === e && (e = n.now),
            (this.SchedulerAction = t),
            (this.now = e);
        }
        return (
          (n.prototype.schedule = function (n, t, e) {
            return (
              void 0 === t && (t = 0),
              new this.SchedulerAction(this, n).schedule(e, t)
            );
          }),
          (n.now = function () {
            return Date.now();
          }),
          n
        );
      })();
    },  
  }
]);