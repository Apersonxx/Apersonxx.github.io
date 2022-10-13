// window.oncontextmenu = function () {
//     return false
// };
// window.onkeydown = window.onkeyup = window.onkeypress = function () {
//     window.event.returnValue = false;
//     return false
// };
// function endebug(b, a) {
//     if (!b) {
//         !function (c) {
//             function f(q) {
//                 function j() {
//                     return x
//                 }
//
//                 function h() {
//                     window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized ? y("on") : (w = "off", console.log(s), console.clear(), y(w))
//                 }
//
//                 function y(i) {
//                     x !== i && (x = i, "function" == typeof v.onchange && v.onchange(i))
//                 }
//
//                 function g() {
//                     k || (k = !0, window.removeEventListener("resize", h), clearInterval(p))
//                 }
//
//                 "function" == typeof q && (q = {onchange: q});
//                 var m = (q = q || {}).delay || 500, v = {};
//                 v.onchange = q.onchange;
//                 var w, s = new Image;
//                 s.__defineGetter__("id", function () {
//                     w = "on"
//                 });
//                 var x = "unknown";
//                 v.getStatus = j;
//                 var p = setInterval(h, m);
//                 window.addEventListener("resize", h);
//                 var k;
//                 return v.free = g, v
//             }
//
//             var d = d || {};
//             d.create = f, "function" == typeof define ? (define.amd || define.cmd) && define(function () {
//                 return d
//             }) : "undefined" != typeof module && module.exports ? module.exports = d : window.jdetects = d
//         }(), jdetects.create(function (d) {
//             var c = 0;
//             var f = setInterval(function () {
//                 if ("on" == d) {
//                     setTimeout(function () {
//                         if (c == 0) {
//                             c = 1;
//                             setTimeout(a)
//                         }
//                     }, 200)
//                 }
//             }, 100)
//         })
//     }
// }
//
// endebug(false, function () {
//     window.location = "about:blank"
// });