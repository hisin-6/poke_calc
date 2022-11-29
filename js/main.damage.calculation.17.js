(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    "6Q89": function (n, t, e) {
      n.exports = (function (n) {
        "use strict";
        var t,
          r = e("+JDR"),
          i = function (n, t) {
            (this.attacker = n), this.reset(t);
          };
        return (
          (i.prototype.feedAction =
            ((t = function (n) {
              return function () {
                return n;
              };
            }),
            function (n, e, r) {
              "string" == typeof n && (n = t(n)),
                e instanceof Array && (e = t(e)),
                r || (r = t(!0)),
                this.routine.push({ condition: r, action: n, targets: e });
            })),
          (i.prototype.reset = function (n) {
            (this.routine = n || []), this.goToTurn(0);
          }),
          (i.prototype.start = function (n) {
            this.goToTurn(1);
          }),
          (i.prototype.nextTurn = function () {
            this.goToTurn(this.turn + 1);
          }),
          (i.prototype.goToTurn = function (n) {
            (this.turn = n), (this.selected = !1);
          }),
          (i.prototype.select = function (n) {
            for (var t = 0; t < this.routine.length; t++) {
              var e = this.routine[t];
              if (e.condition(n, this.attacker, this.turn, e.action, e.target))
                return (
                  (this.action = e.action(
                    n,
                    this.attacker,
                    this.turn,
                    e.action,
                    e.target
                  )),
                  (this.targets = e.targets(
                    n,
                    this.attacker,
                    this.turn,
                    e.action,
                    e.target
                  )),
                  (this.parameters = n),
                  (this.selected = !0),
                  {
                    turn: this.turn,
                    action: this.action,
                    targets: this.targets,
                    parameters: n,
                  }
                );
            }
            throw new r("行動が選択できませんでした。");
          }),
          ["feedAction", "reset", "start", "nextTurn", "goToTurn"].forEach(
            function (n) {
              i[n] = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                Object.keys(t).forEach(function (r) {
                  i.prototype[n].apply(t[r], e);
                });
              };
            }
          ),
          ["select"].forEach(function (n) {
            i[n] = function (t) {
              var e,
                r = Array.prototype.slice.call(arguments, 1);
              if (t instanceof Array) {
                e = [];
                for (var o = 0; o < t.length; o++)
                  e[o] = i.prototype[n].apply(t[o], r);
              } else
                for (var l in ((e = {}), t))
                  e[l] = i.prototype[n].apply(t[l], r);
              return e;
            };
          }),
          i
        );
      })();
    },
  }
]);