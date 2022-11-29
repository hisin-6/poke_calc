(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
  //JDR 
    "+JDR": function (n, t) {
      n.exports = (function () {
        "use strict";
        var n = function (t, e) {
          if (this === window) throw "Message must be an instance.";
          if (t instanceof n) {
            if (void 0 !== e) throw "Illegal arguments";
            (this._message = t._message), (this.data = t.data);
          } else {
            if ("string" != typeof t) throw "No message available.";
            (this._message = t), (this.data = e);
          }
        };
        return (
          (n.defaultLocale = "en"),
          (n.prototype.message = function () {
            return n.get(this._message, this.data);
          }),
          (n.get = function (t, e) {
            if ("i18n" in n) {
              var r = n.i18n,
                i = n.locale,
                o = n.defaultLocale;
              i && i in r && t in r[i]
                ? (t = r[i][t])
                : o in r && t in r[o] && (t = r[o][t]);
            }
            if ("object" == typeof e && !(e instanceof Array))
              for (var l in e)
                ("string" != typeof e[l] && "number" != typeof e[l]) ||
                  (t = t.replace(
                    new RegExp("__" + l + "__", "g"),
                    String(e[l])
                  ));
            return t;
          }),
          n
        );
      })();
    },
  }
]);