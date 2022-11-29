(window.webpackJsonp = window.webpackJsonp || []).push([
  [132],
  {
    yLV6: function (n, t, e) {
      var r;
      !(function (i, o, l, u) {
        "use strict";
        var a,
          s = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = o.createElement("div"),
          f = Math.round,
          d = Math.abs,
          p = Date.now;
        function h(n, t, e) {
          return setTimeout(w(n, e), t);
        }
        function g(n, t, e) {
          return !!Array.isArray(n) && (v(n, e[t], e), !0);
        }
        function v(n, t, e) {
          var r;
          if (n)
            if (n.forEach) n.forEach(t, e);
            else if (void 0 !== n.length)
              for (r = 0; r < n.length; ) t.call(e, n[r], r, n), r++;
            else for (r in n) n.hasOwnProperty(r) && t.call(e, n[r], r, n);
        }
        function m(n, t, e) {
          var r = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
          return function () {
            var t = new Error("get-stack-trace"),
              e =
                t && t.stack
                  ? t.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              o = i.console && (i.console.warn || i.console.log);
            return o && o.call(i.console, r, e), n.apply(this, arguments);
          };
        }
        a =
          "function" != typeof Object.assign
            ? function (n) {
                if (null == n)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var t = Object(n), e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  if (null != r)
                    for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
                }
                return t;
              }
            : Object.assign;
        var y = m(
            function (n, t, e) {
              for (var r = Object.keys(t), i = 0; i < r.length; )
                (!e || (e && void 0 === n[r[i]])) && (n[r[i]] = t[r[i]]), i++;
              return n;
            },
            "extend",
            "Use `assign`."
          ),
          b = m(
            function (n, t) {
              return y(n, t, !0);
            },
            "merge",
            "Use `assign`."
          );
        function _(n, t, e) {
          var r,
            i = t.prototype;
          ((r = n.prototype = Object.create(i)).constructor = n),
            (r._super = i),
            e && a(r, e);
        }
        function w(n, t) {
          return function () {
            return n.apply(t, arguments);
          };
        }
        function C(n, t) {
          return "function" == typeof n ? n.apply((t && t[0]) || void 0, t) : n;
        }
        function x(n, t) {
          return void 0 === n ? t : n;
        }
        function S(n, t, e) {
          v(P(t), function (t) {
            n.addEventListener(t, e, !1);
          });
        }
        function k(n, t, e) {
          v(P(t), function (t) {
            n.removeEventListener(t, e, !1);
          });
        }
        function E(n, t) {
          for (; n; ) {
            if (n == t) return !0;
            n = n.parentNode;
          }
          return !1;
        }
        function O(n, t) {
          return n.indexOf(t) > -1;
        }
        function P(n) {
          return n.trim().split(/\s+/g);
        }
        function A(n, t, e) {
          if (n.indexOf && !e) return n.indexOf(t);
          for (var r = 0; r < n.length; ) {
            if ((e && n[r][e] == t) || (!e && n[r] === t)) return r;
            r++;
          }
          return -1;
        }
        function I(n) {
          return Array.prototype.slice.call(n, 0);
        }
        function T(n, t, e) {
          for (var r = [], i = [], o = 0; o < n.length; ) {
            var l = t ? n[o][t] : n[o];
            A(i, l) < 0 && r.push(n[o]), (i[o] = l), o++;
          }
          return (
            e &&
              (r = t
                ? r.sort(function (n, e) {
                    return n[t] > e[t];
                  })
                : r.sort()),
            r
          );
        }
        function D(n, t) {
          for (
            var e, r, i = t[0].toUpperCase() + t.slice(1), o = 0;
            o < s.length;

          ) {
            if ((r = (e = s[o]) ? e + i : t) in n) return r;
            o++;
          }
        }
        var M = 1;
        function j(n) {
          var t = n.ownerDocument || n;
          return t.defaultView || t.parentWindow || i;
        }
        var N = "ontouchstart" in i,
          R = void 0 !== D(i, "PointerEvent"),
          F =
            N &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          V = ["x", "y"],
          L = ["clientX", "clientY"];
        function H(n, t) {
          var e = this;
          (this.manager = n),
            (this.callback = t),
            (this.element = n.element),
            (this.target = n.options.inputTarget),
            (this.domHandler = function (t) {
              C(n.options.enable, [n]) && e.handler(t);
            }),
            this.init();
        }
        function U(n, t, e) {
          var r = e.pointers.length,
            i = e.changedPointers.length,
            o = 1 & t && r - i == 0,
            l = 12 & t && r - i == 0;
          (e.isFirst = !!o),
            (e.isFinal = !!l),
            o && (n.session = {}),
            (e.eventType = t),
            (function (n, t) {
              var e = n.session,
                r = t.pointers,
                i = r.length;
              e.firstInput || (e.firstInput = B(t)),
                i > 1 && !e.firstMultiple
                  ? (e.firstMultiple = B(t))
                  : 1 === i && (e.firstMultiple = !1);
              var o = e.firstInput,
                l = e.firstMultiple,
                u = l ? l.center : o.center,
                a = (t.center = z(r));
              (t.timeStamp = p()),
                (t.deltaTime = t.timeStamp - o.timeStamp),
                (t.angle = q(u, a)),
                (t.distance = G(u, a)),
                (function (n, t) {
                  var e = t.center,
                    r = n.offsetDelta || {},
                    i = n.prevDelta || {},
                    o = n.prevInput || {};
                  (1 !== t.eventType && 4 !== o.eventType) ||
                    ((i = n.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
                    (r = n.offsetDelta = { x: e.x, y: e.y })),
                    (t.deltaX = i.x + (e.x - r.x)),
                    (t.deltaY = i.y + (e.y - r.y));
                })(e, t),
                (t.offsetDirection = K(t.deltaX, t.deltaY));
              var s,
                c,
                f = W(t.deltaTime, t.deltaX, t.deltaY);
              (t.overallVelocityX = f.x),
                (t.overallVelocityY = f.y),
                (t.overallVelocity = d(f.x) > d(f.y) ? f.x : f.y),
                (t.scale = l
                  ? ((s = l.pointers),
                    G((c = r)[0], c[1], L) / G(s[0], s[1], L))
                  : 1),
                (t.rotation = l
                  ? (function (n, t) {
                      return q(t[1], t[0], L) + q(n[1], n[0], L);
                    })(l.pointers, r)
                  : 0),
                (t.maxPointers = e.prevInput
                  ? t.pointers.length > e.prevInput.maxPointers
                    ? t.pointers.length
                    : e.prevInput.maxPointers
                  : t.pointers.length),
                (function (n, t) {
                  var e,
                    r,
                    i,
                    o,
                    l = n.lastInterval || t,
                    u = t.timeStamp - l.timeStamp;
                  if (8 != t.eventType && (u > 25 || void 0 === l.velocity)) {
                    var a = t.deltaX - l.deltaX,
                      s = t.deltaY - l.deltaY,
                      c = W(u, a, s);
                    (r = c.x),
                      (i = c.y),
                      (e = d(c.x) > d(c.y) ? c.x : c.y),
                      (o = K(a, s)),
                      (n.lastInterval = t);
                  } else
                    (e = l.velocity),
                      (r = l.velocityX),
                      (i = l.velocityY),
                      (o = l.direction);
                  (t.velocity = e),
                    (t.velocityX = r),
                    (t.velocityY = i),
                    (t.direction = o);
                })(e, t);
              var h = n.element;
              E(t.srcEvent.target, h) && (h = t.srcEvent.target),
                (t.target = h);
            })(n, e),
            n.emit("hammer.input", e),
            n.recognize(e),
            (n.session.prevInput = e);
        }
        function B(n) {
          for (var t = [], e = 0; e < n.pointers.length; )
            (t[e] = {
              clientX: f(n.pointers[e].clientX),
              clientY: f(n.pointers[e].clientY),
            }),
              e++;
          return {
            timeStamp: p(),
            pointers: t,
            center: z(t),
            deltaX: n.deltaX,
            deltaY: n.deltaY,
          };
        }
        function z(n) {
          var t = n.length;
          if (1 === t) return { x: f(n[0].clientX), y: f(n[0].clientY) };
          for (var e = 0, r = 0, i = 0; i < t; )
            (e += n[i].clientX), (r += n[i].clientY), i++;
          return { x: f(e / t), y: f(r / t) };
        }
        function W(n, t, e) {
          return { x: t / n || 0, y: e / n || 0 };
        }
        function K(n, t) {
          return n === t ? 1 : d(n) >= d(t) ? (n < 0 ? 2 : 4) : t < 0 ? 8 : 16;
        }
        function G(n, t, e) {
          e || (e = V);
          var r = t[e[0]] - n[e[0]],
            i = t[e[1]] - n[e[1]];
          return Math.sqrt(r * r + i * i);
        }
        function q(n, t, e) {
          return (
            e || (e = V),
            (180 * Math.atan2(t[e[1]] - n[e[1]], t[e[0]] - n[e[0]])) / Math.PI
          );
        }
        H.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && S(this.element, this.evEl, this.domHandler),
              this.evTarget && S(this.target, this.evTarget, this.domHandler),
              this.evWin && S(j(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && k(this.element, this.evEl, this.domHandler),
              this.evTarget && k(this.target, this.evTarget, this.domHandler),
              this.evWin && k(j(this.element), this.evWin, this.domHandler);
          },
        };
        var Y = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function $() {
          (this.evEl = "mousedown"),
            (this.evWin = "mousemove mouseup"),
            (this.pressed = !1),
            H.apply(this, arguments);
        }
        _($, H, {
          handler: function (n) {
            var t = Y[n.type];
            1 & t && 0 === n.button && (this.pressed = !0),
              2 & t && 1 !== n.which && (t = 4),
              this.pressed &&
                (4 & t && (this.pressed = !1),
                this.callback(this.manager, t, {
                  pointers: [n],
                  changedPointers: [n],
                  pointerType: "mouse",
                  srcEvent: n,
                }));
          },
        });
        var Z = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8,
          },
          Q = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          J = "pointerdown",
          X = "pointermove pointerup pointercancel";
        function nn() {
          (this.evEl = J),
            (this.evWin = X),
            H.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        i.MSPointerEvent &&
          !i.PointerEvent &&
          ((J = "MSPointerDown"),
          (X = "MSPointerMove MSPointerUp MSPointerCancel")),
          _(nn, H, {
            handler: function (n) {
              var t = this.store,
                e = !1,
                r = n.type.toLowerCase().replace("ms", ""),
                i = Z[r],
                o = Q[n.pointerType] || n.pointerType,
                l = "touch" == o,
                u = A(t, n.pointerId, "pointerId");
              1 & i && (0 === n.button || l)
                ? u < 0 && (t.push(n), (u = t.length - 1))
                : 12 & i && (e = !0),
                u < 0 ||
                  ((t[u] = n),
                  this.callback(this.manager, i, {
                    pointers: t,
                    changedPointers: [n],
                    pointerType: o,
                    srcEvent: n,
                  }),
                  e && t.splice(u, 1));
            },
          });
        var tn = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function en() {
          (this.evTarget = "touchstart"),
            (this.evWin = "touchstart touchmove touchend touchcancel"),
            (this.started = !1),
            H.apply(this, arguments);
        }
        function rn(n, t) {
          var e = I(n.touches),
            r = I(n.changedTouches);
          return 12 & t && (e = T(e.concat(r), "identifier", !0)), [e, r];
        }
        _(en, H, {
          handler: function (n) {
            var t = tn[n.type];
            if ((1 === t && (this.started = !0), this.started)) {
              var e = rn.call(this, n, t);
              12 & t && e[0].length - e[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                  pointers: e[0],
                  changedPointers: e[1],
                  pointerType: "touch",
                  srcEvent: n,
                });
            }
          },
        });
        var on = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function ln() {
          (this.evTarget = "touchstart touchmove touchend touchcancel"),
            (this.targetIds = {}),
            H.apply(this, arguments);
        }
        function un(n, t) {
          var e = I(n.touches),
            r = this.targetIds;
          if (3 & t && 1 === e.length) return (r[e[0].identifier] = !0), [e, e];
          var i,
            o,
            l = I(n.changedTouches),
            u = [],
            a = this.target;
          if (
            ((o = e.filter(function (n) {
              return E(n.target, a);
            })),
            1 === t)
          )
            for (i = 0; i < o.length; ) (r[o[i].identifier] = !0), i++;
          for (i = 0; i < l.length; )
            r[l[i].identifier] && u.push(l[i]),
              12 & t && delete r[l[i].identifier],
              i++;
          return u.length ? [T(o.concat(u), "identifier", !0), u] : void 0;
        }
        function an() {
          H.apply(this, arguments);
          var n = w(this.handler, this);
          (this.touch = new ln(this.manager, n)),
            (this.mouse = new $(this.manager, n)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function sn(n, t) {
          1 & n
            ? ((this.primaryTouch = t.changedPointers[0].identifier),
              cn.call(this, t))
            : 12 & n && cn.call(this, t);
        }
        function cn(n) {
          var t = n.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var e = { x: t.clientX, y: t.clientY };
            this.lastTouches.push(e);
            var r = this.lastTouches;
            setTimeout(function () {
              var n = r.indexOf(e);
              n > -1 && r.splice(n, 1);
            }, 2500);
          }
        }
        function fn(n) {
          for (
            var t = n.srcEvent.clientX, e = n.srcEvent.clientY, r = 0;
            r < this.lastTouches.length;
            r++
          ) {
            var i = this.lastTouches[r],
              o = Math.abs(t - i.x),
              l = Math.abs(e - i.y);
            if (o <= 25 && l <= 25) return !0;
          }
          return !1;
        }
        _(ln, H, {
          handler: function (n) {
            var t = on[n.type],
              e = un.call(this, n, t);
            e &&
              this.callback(this.manager, t, {
                pointers: e[0],
                changedPointers: e[1],
                pointerType: "touch",
                srcEvent: n,
              });
          },
        }),
          _(an, H, {
            handler: function (n, t, e) {
              var r = "mouse" == e.pointerType;
              if (
                !(
                  r &&
                  e.sourceCapabilities &&
                  e.sourceCapabilities.firesTouchEvents
                )
              ) {
                if ("touch" == e.pointerType) sn.call(this, t, e);
                else if (r && fn.call(this, e)) return;
                this.callback(n, t, e);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            },
          });
        var dn = D(c.style, "touchAction"),
          pn = void 0 !== dn,
          hn = (function () {
            if (!pn) return !1;
            var n = {},
              t = i.CSS && i.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (e) {
                n[e] = !t || i.CSS.supports("touch-action", e);
              }),
              n
            );
          })();
        function gn(n, t) {
          (this.manager = n), this.set(t);
        }
        function vn(n) {
          (this.options = a({}, this.defaults, n || {})),
            (this.id = M++),
            (this.manager = null),
            (this.options.enable = x(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function mn(n) {
          return 16 & n
            ? "cancel"
            : 8 & n
            ? "end"
            : 4 & n
            ? "move"
            : 2 & n
            ? "start"
            : "";
        }
        function yn(n) {
          return 16 == n
            ? "down"
            : 8 == n
            ? "up"
            : 2 == n
            ? "left"
            : 4 == n
            ? "right"
            : "";
        }
        function bn(n, t) {
          var e = t.manager;
          return e ? e.get(n) : n;
        }
        function _n() {
          vn.apply(this, arguments);
        }
        function wn() {
          _n.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function Cn() {
          _n.apply(this, arguments);
        }
        function xn() {
          vn.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Sn() {
          _n.apply(this, arguments);
        }
        function kn() {
          _n.apply(this, arguments);
        }
        function En() {
          vn.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function On(n, t) {
          return (
            ((t = t || {}).recognizers = x(t.recognizers, On.defaults.preset)),
            new Pn(n, t)
          );
        }
        function Pn(n, t) {
          var e;
          (this.options = a({}, On.defaults, t || {})),
            (this.options.inputTarget = this.options.inputTarget || n),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = n),
            (this.input = new ((e = this).options.inputClass ||
              (R ? nn : F ? ln : N ? an : $))(e, U)),
            (this.touchAction = new gn(this, this.options.touchAction)),
            An(this, !0),
            v(
              this.options.recognizers,
              function (n) {
                var t = this.add(new n[0](n[1]));
                n[2] && t.recognizeWith(n[2]), n[3] && t.requireFailure(n[3]);
              },
              this
            );
        }
        function An(n, t) {
          var e,
            r = n.element;
          r.style &&
            (v(n.options.cssProps, function (i, o) {
              (e = D(r.style, o)),
                t
                  ? ((n.oldCssProps[e] = r.style[e]), (r.style[e] = i))
                  : (r.style[e] = n.oldCssProps[e] || "");
            }),
            t || (n.oldCssProps = {}));
        }
        (gn.prototype = {
          set: function (n) {
            "compute" == n && (n = this.compute()),
              pn &&
                this.manager.element.style &&
                hn[n] &&
                (this.manager.element.style[dn] = n),
              (this.actions = n.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var n = [];
            return (
              v(this.manager.recognizers, function (t) {
                C(t.options.enable, [t]) && (n = n.concat(t.getTouchAction()));
              }),
              (function (n) {
                if (O(n, "none")) return "none";
                var t = O(n, "pan-x"),
                  e = O(n, "pan-y");
                return t && e
                  ? "none"
                  : t || e
                  ? t
                    ? "pan-x"
                    : "pan-y"
                  : O(n, "manipulation")
                  ? "manipulation"
                  : "auto";
              })(n.join(" "))
            );
          },
          preventDefaults: function (n) {
            var t = n.srcEvent,
              e = n.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var r = this.actions,
                i = O(r, "none") && !hn.none,
                o = O(r, "pan-y") && !hn["pan-y"],
                l = O(r, "pan-x") && !hn["pan-x"];
              if (
                i &&
                1 === n.pointers.length &&
                n.distance < 2 &&
                n.deltaTime < 250
              )
                return;
              if (!l || !o)
                return i || (o && 6 & e) || (l && 24 & e)
                  ? this.preventSrc(t)
                  : void 0;
            }
          },
          preventSrc: function (n) {
            (this.manager.session.prevented = !0), n.preventDefault();
          },
        }),
          (vn.prototype = {
            defaults: {},
            set: function (n) {
              return (
                a(this.options, n),
                this.manager && this.manager.touchAction.update(),
                this
              );
            },
            recognizeWith: function (n) {
              if (g(n, "recognizeWith", this)) return this;
              var t = this.simultaneous;
              return (
                t[(n = bn(n, this)).id] ||
                  ((t[n.id] = n), n.recognizeWith(this)),
                this
              );
            },
            dropRecognizeWith: function (n) {
              return g(n, "dropRecognizeWith", this)
                ? this
                : ((n = bn(n, this)), delete this.simultaneous[n.id], this);
            },
            requireFailure: function (n) {
              if (g(n, "requireFailure", this)) return this;
              var t = this.requireFail;
              return (
                -1 === A(t, (n = bn(n, this))) &&
                  (t.push(n), n.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (n) {
              if (g(n, "dropRequireFailure", this)) return this;
              n = bn(n, this);
              var t = A(this.requireFail, n);
              return t > -1 && this.requireFail.splice(t, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (n) {
              return !!this.simultaneous[n.id];
            },
            emit: function (n) {
              var t = this,
                e = this.state;
              function r(e) {
                t.manager.emit(e, n);
              }
              e < 8 && r(t.options.event + mn(e)),
                r(t.options.event),
                n.additionalEvent && r(n.additionalEvent),
                e >= 8 && r(t.options.event + mn(e));
            },
            tryEmit: function (n) {
              if (this.canEmit()) return this.emit(n);
              this.state = 32;
            },
            canEmit: function () {
              for (var n = 0; n < this.requireFail.length; ) {
                if (!(33 & this.requireFail[n].state)) return !1;
                n++;
              }
              return !0;
            },
            recognize: function (n) {
              var t = a({}, n);
              if (!C(this.options.enable, [this, t]))
                return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1),
                (this.state = this.process(t)),
                30 & this.state && this.tryEmit(t);
            },
            process: function (n) {},
            getTouchAction: function () {},
            reset: function () {},
          }),
          _(_n, vn, {
            defaults: { pointers: 1 },
            attrTest: function (n) {
              var t = this.options.pointers;
              return 0 === t || n.pointers.length === t;
            },
            process: function (n) {
              var t = this.state,
                e = n.eventType,
                r = 6 & t,
                i = this.attrTest(n);
              return r && (8 & e || !i)
                ? 16 | t
                : r || i
                ? 4 & e
                  ? 8 | t
                  : 2 & t
                  ? 4 | t
                  : 2
                : 32;
            },
          }),
          _(wn, _n, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: 30,
            },
            getTouchAction: function () {
              var n = this.options.direction,
                t = [];
              return 6 & n && t.push("pan-y"), 24 & n && t.push("pan-x"), t;
            },
            directionTest: function (n) {
              var t = this.options,
                e = !0,
                r = n.distance,
                i = n.direction,
                o = n.deltaX,
                l = n.deltaY;
              return (
                i & t.direction ||
                  (6 & t.direction
                    ? ((i = 0 === o ? 1 : o < 0 ? 2 : 4),
                      (e = o != this.pX),
                      (r = Math.abs(n.deltaX)))
                    : ((i = 0 === l ? 1 : l < 0 ? 8 : 16),
                      (e = l != this.pY),
                      (r = Math.abs(n.deltaY)))),
                (n.direction = i),
                e && r > t.threshold && i & t.direction
              );
            },
            attrTest: function (n) {
              return (
                _n.prototype.attrTest.call(this, n) &&
                (2 & this.state || (!(2 & this.state) && this.directionTest(n)))
              );
            },
            emit: function (n) {
              (this.pX = n.deltaX), (this.pY = n.deltaY);
              var t = yn(n.direction);
              t && (n.additionalEvent = this.options.event + t),
                this._super.emit.call(this, n);
            },
          }),
          _(Cn, _n, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (n) {
              return (
                this._super.attrTest.call(this, n) &&
                (Math.abs(n.scale - 1) > this.options.threshold ||
                  2 & this.state)
              );
            },
            emit: function (n) {
              1 !== n.scale &&
                (n.additionalEvent =
                  this.options.event + (n.scale < 1 ? "in" : "out")),
                this._super.emit.call(this, n);
            },
          }),
          _(xn, vn, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (n) {
              var t = this.options,
                e = n.pointers.length === t.pointers,
                r = n.distance < t.threshold,
                i = n.deltaTime > t.time;
              if (((this._input = n), !r || !e || (12 & n.eventType && !i)))
                this.reset();
              else if (1 & n.eventType)
                this.reset(),
                  (this._timer = h(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    t.time,
                    this
                  ));
              else if (4 & n.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (n) {
              8 === this.state &&
                (n && 4 & n.eventType
                  ? this.manager.emit(this.options.event + "up", n)
                  : ((this._input.timeStamp = p()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          _(Sn, _n, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (n) {
              return (
                this._super.attrTest.call(this, n) &&
                (Math.abs(n.rotation) > this.options.threshold ||
                  2 & this.state)
              );
            },
          }),
          _(kn, _n, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: 30,
              pointers: 1,
            },
            getTouchAction: function () {
              return wn.prototype.getTouchAction.call(this);
            },
            attrTest: function (n) {
              var t,
                e = this.options.direction;
              return (
                30 & e
                  ? (t = n.overallVelocity)
                  : 6 & e
                  ? (t = n.overallVelocityX)
                  : 24 & e && (t = n.overallVelocityY),
                this._super.attrTest.call(this, n) &&
                  e & n.offsetDirection &&
                  n.distance > this.options.threshold &&
                  n.maxPointers == this.options.pointers &&
                  d(t) > this.options.velocity &&
                  4 & n.eventType
              );
            },
            emit: function (n) {
              var t = yn(n.offsetDirection);
              t && this.manager.emit(this.options.event + t, n),
                this.manager.emit(this.options.event, n);
            },
          }),
          _(En, vn, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return ["manipulation"];
            },
            process: function (n) {
              var t = this.options,
                e = n.pointers.length === t.pointers,
                r = n.distance < t.threshold,
                i = n.deltaTime < t.time;
              if ((this.reset(), 1 & n.eventType && 0 === this.count))
                return this.failTimeout();
              if (r && i && e) {
                if (4 != n.eventType) return this.failTimeout();
                var o = !this.pTime || n.timeStamp - this.pTime < t.interval,
                  l =
                    !this.pCenter || G(this.pCenter, n.center) < t.posThreshold;
                if (
                  ((this.pTime = n.timeStamp),
                  (this.pCenter = n.center),
                  l && o ? (this.count += 1) : (this.count = 1),
                  (this._input = n),
                  0 == this.count % t.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = h(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        t.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = h(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (On.VERSION = "2.0.7"),
          (On.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Sn, { enable: !1 }],
              [Cn, { enable: !1 }, ["rotate"]],
              [kn, { direction: 6 }],
              [wn, { direction: 6 }, ["swipe"]],
              [En],
              [En, { event: "doubletap", taps: 2 }, ["tap"]],
              [xn],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          }),
          (Pn.prototype = {
            set: function (n) {
              return (
                a(this.options, n),
                n.touchAction && this.touchAction.update(),
                n.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = n.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (n) {
              this.session.stopped = n ? 2 : 1;
            },
            recognize: function (n) {
              var t = this.session;
              if (!t.stopped) {
                var e;
                this.touchAction.preventDefaults(n);
                var r = this.recognizers,
                  i = t.curRecognizer;
                (!i || (i && 8 & i.state)) && (i = t.curRecognizer = null);
                for (var o = 0; o < r.length; )
                  (e = r[o]),
                    2 === t.stopped || (i && e != i && !e.canRecognizeWith(i))
                      ? e.reset()
                      : e.recognize(n),
                    !i && 14 & e.state && (i = t.curRecognizer = e),
                    o++;
              }
            },
            get: function (n) {
              if (n instanceof vn) return n;
              for (var t = this.recognizers, e = 0; e < t.length; e++)
                if (t[e].options.event == n) return t[e];
              return null;
            },
            add: function (n) {
              if (g(n, "add", this)) return this;
              var t = this.get(n.options.event);
              return (
                t && this.remove(t),
                this.recognizers.push(n),
                (n.manager = this),
                this.touchAction.update(),
                n
              );
            },
            remove: function (n) {
              if (g(n, "remove", this)) return this;
              if ((n = this.get(n))) {
                var t = this.recognizers,
                  e = A(t, n);
                -1 !== e && (t.splice(e, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (n, t) {
              if (void 0 !== n && void 0 !== t) {
                var e = this.handlers;
                return (
                  v(P(n), function (n) {
                    (e[n] = e[n] || []), e[n].push(t);
                  }),
                  this
                );
              }
            },
            off: function (n, t) {
              if (void 0 !== n) {
                var e = this.handlers;
                return (
                  v(P(n), function (n) {
                    t ? e[n] && e[n].splice(A(e[n], t), 1) : delete e[n];
                  }),
                  this
                );
              }
            },
            emit: function (n, t) {
              this.options.domEvents &&
                (function (n, t) {
                  var e = o.createEvent("Event");
                  e.initEvent(n, !0, !0),
                    (e.gesture = t),
                    t.target.dispatchEvent(e);
                })(n, t);
              var e = this.handlers[n] && this.handlers[n].slice();
              if (e && e.length) {
                (t.type = n),
                  (t.preventDefault = function () {
                    t.srcEvent.preventDefault();
                  });
                for (var r = 0; r < e.length; ) e[r](t), r++;
              }
            },
            destroy: function () {
              this.element && An(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          a(On, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Pn,
            Input: H,
            TouchAction: gn,
            TouchInput: ln,
            MouseInput: $,
            PointerEventInput: nn,
            TouchMouseInput: an,
            SingleTouchInput: en,
            Recognizer: vn,
            AttrRecognizer: _n,
            Tap: En,
            Pan: wn,
            Swipe: kn,
            Pinch: Cn,
            Rotate: Sn,
            Press: xn,
            on: S,
            off: k,
            each: v,
            merge: b,
            extend: y,
            assign: a,
            inherit: _,
            bindFn: w,
            prefixed: D,
          }),
          ((void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer =
            On),
          void 0 ===
            (r = function () {
              return On;
            }.call(t, e, t, n)) || (n.exports = r);
      })(window, document);
    },  
  }
]);