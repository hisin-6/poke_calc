(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    "90cg": function (n, t, e) {
      "use strict";
      t.isPromise = function (n) {
        return (
          !!n && "function" != typeof n.subscribe && "function" == typeof n.then
        );
      };
    },  
  }
]);