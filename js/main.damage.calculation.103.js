(window.webpackJsonp = window.webpackJsonp || []).push([
  [103],
  {
    m12A: function (n, t, e) {
      "use strict";
      var r = e("Q1FS"),
        i = e("zB/H"),
        o = e("Z5tI");
      t.fromPromise = function (n, t) {
        return new r.Observable(
          t
            ? function (e) {
                var r = new i.Subscription();
                return (
                  r.add(
                    t.schedule(function () {
                      return n.then(
                        function (n) {
                          r.add(
                            t.schedule(function () {
                              e.next(n),
                                r.add(
                                  t.schedule(function () {
                                    return e.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (n) {
                          r.add(
                            t.schedule(function () {
                              return e.error(n);
                            })
                          );
                        }
                      );
                    })
                  ),
                  r
                );
              }
            : o.subscribeToPromise(n)
        );
      };
    },  
  }
]);