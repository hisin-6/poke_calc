(window.webpackJsonp = window.webpackJsonp || []).push([
  [78],
  {
    "Xwq/": function (n, t, e) {
      "use strict";
      var r = e("FWf1"),
        i = e("p//D"),
        o = e("GiSu");
      t.toSubscriber = function (n, t, e) {
        if (n) {
          if (n instanceof r.Subscriber) return n;
          if (n[i.rxSubscriber]) return n[i.rxSubscriber]();
        }
        return n || t || e
          ? new r.Subscriber(n, t, e)
          : new r.Subscriber(o.empty);
      };
    },  
  }
]);