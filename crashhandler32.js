function() {
    /*

SPF
(c) 2007-2020 M.2

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

*/
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function aa(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof n && n];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var p = aa(this);
    function r(a, b) {
        if (b)
            a: {
                var c = p;
                a = a.split(".");
                for (var e = 0; e < a.length - 1; e++) {
                    var d = a[e];
                    if (!(d in c))
                        break a;
                    c = c[d]
                }
                a = a[a.length - 1];
                e = c[a];
                b = b(e);
                b != e && null != b && l(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    r("Symbol", function(a) {
        function b(d) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c("jscomp_symbol_" + (d || "") + "_" + e++,d)
        }
        function c(d, f) {
            this.h = d;
            l(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.h
        }
        ;
        var e = 0;
        return b
    });
    r("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var e = p[b[c]];
            "function" === typeof e && "function" != typeof e.prototype[a] && l(e.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ca(ba(this))
                }
            })
        }
        return a
    });
    function ca(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    function da(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , e = !1
          , d = {
            next: function() {
                if (!e && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                e = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        d[Symbol.iterator] = function() {
            return d
        }
        ;
        return d
    }
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return da(this, function(b) {
                return b
            })
        }
    });
    /*

 Copyright The Node.js authors.
*/
    function u(a, b, c) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function() {
            var d = e.slice();
            d.push.apply(d, arguments);
            return a.apply(b, d)
        }
    }
    function ea(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments, 1);
            try {
                return a.apply(null, c)
            } catch (e) {
                return e
            }
        }
    }
    var v = window.performance && window.performance.timing && window.performance.now ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    }
    : function() {
        return (new Date).getTime()
    }
    ;
    function w(a, b) {
        if (a.forEach)
            a.forEach(b, void 0);
        else
            for (var c = 0, e = a.length; c < e; c++)
                c in a && b.call(void 0, a[c], c, a)
    }
    function x(a, b) {
        if (a.some)
            return a.some(b, void 0);
        for (var c = 0, e = a.length; c < e; c++)
            if (c in a && b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function y(a) {
        return "[object Array]" == Object.prototype.toString.call(a) ? a : [a]
    }
    ;function z(a, b) {
        return A[a] = b
    }
    var A = window._spf_state || {};
    window._spf_state = A;
    var C = {};
    "config"in A || z("config", C);
    C = A.config;
    function D(a) {
        var b = E();
        a in b && delete b[a]
    }
    function fa() {
        var a = E();
        for (b in a)
            F(a[b]) || delete a[b];
        a = E();
        var b = parseInt(C["cache-max"], 10);
        b = isNaN(b) ? Infinity : b;
        b = Object.keys(a).length - b;
        if (!(0 >= b))
            for (var c = 0; c < b; c++) {
                var e = Infinity, d;
                for (d in a)
                    if (a[d].count < e) {
                        var f = d;
                        e = a[d].count
                    }
                delete a[f]
            }
    }
    function F(a) {
        if (!(a && "data"in a))
            return !1;
        var b = a.life;
        b = isNaN(b) ? Infinity : b;
        a = a.time;
        return v() - a < b
    }
    function G(a) {
        var b = parseInt(A["cache-counter"], 10) || 0;
        b++;
        z("cache-counter", b);
        a.count = b
    }
    function E() {
        return "cache-storage"in A ? A["cache-storage"] : z("cache-storage", {})
    }
    ;function H(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    var I = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    }
    ;
    function J(a, b) {
        a = a.split(b);
        var c = 1 == a.length;
        return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)]
    }
    ;function K(a) {
        a.data && "[object String]" == Object.prototype.toString.call(a.data) && 0 == a.data.lastIndexOf("spf:", 0) && L(a.data.substring(4))
    }
    function L(a) {
        var b = M[a];
        b && (delete M[a],
        b())
    }
    function N(a) {
        window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a)
    }
    function O(a) {
        window.removeEventListener ? window.removeEventListener("message", a, !1) : window.detachEvent && window.detachEvent("onmessage", a)
    }
    var P = function() {
        function a() {
            b = !1
        }
        if (!window.postMessage)
            return !1;
        var b = !0;
        N(a);
        window.postMessage("", "*");
        O(a);
        return b
    }()
      , M = {};
    "async-defers"in A || z("async-defers", M);
    M = A["async-defers"];
    P && ("async-listener"in A && O(A["async-listener"]),
    N(K),
    z("async-listener", K));
    var Q = {};
    "ps-s"in A || z("ps-s", Q);
    Q = A["ps-s"];
    function R(a) {
        var b = document.createElement("a");
        b.href = a;
        b.href = b.href;
        a = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: b.hostname,
            port: b.port,
            pathname: b.pathname,
            search: b.search,
            hash: b.hash,
            username: b.username,
            password: b.password
        };
        a.origin = a.protocol + "//" + a.host;
        a.pathname && "/" == a.pathname[0] || (a.pathname = "/" + a.pathname);
        return a
    }
    function S(a) {
        a = R(a);
        return J(a.href, "#")[0]
    }
    ;var T = {}
      , U = {}
      , ha = {};
    "rsrc-s"in A || z("rsrc-s", T);
    T = A["rsrc-s"];
    "rsrc-n"in A || z("rsrc-n", U);
    U = A["rsrc-n"];
    "rsrc-u"in A || z("rsrc-u", ha);
    ha = A["rsrc-u"];
    var ia = {};
    "js-d"in A || z("js-d", ia);
    ia = A["js-d"];
    var ja = {};
    "js-u"in A || z("js-u", ja);
    ja = A["js-u"];
    function ka(a, b, c) {
        if (b) {
            b = [];
            var e = 0;
            c && (a += "\r\n");
            var d = a.indexOf("[\r\n", e);
            for (-1 < d && (e = d + 3); -1 < (d = a.indexOf(",\r\n", e)); ) {
                var f = I(a.substring(e, d));
                e = d + 3;
                f && b.push(JSON.parse(f))
            }
            d = a.indexOf("]\r\n", e);
            -1 < d && (f = I(a.substring(e, d)),
            e = d + 3,
            f && b.push(JSON.parse(f)));
            f = "";
            a.length > e && (f = a.substring(e),
            c && H(f, "\r\n") && (f = f.substring(0, f.length - 2)));
            b = V(b);
            return {
                m: b,
                g: f
            }
        }
        a = JSON.parse(a);
        b = V(y(a));
        return {
            m: b,
            g: ""
        }
    }
    function V(a) {
        w(y(a), function(b) {
            if (b) {
                b.head && (b.head = W(b.head));
                if (b.body)
                    for (var c in b.body)
                        b.body[c] = W(b.body[c]);
                b.foot && (b.foot = W(b.foot))
            }
        });
        return a
    }
    function W(a) {
        var b = new la;
        if (!a)
            return b;
        if ("[object String]" != Object.prototype.toString.call(a))
            return a.scripts && w(a.scripts, function(c) {
                b.scripts.push({
                    url: c.url || "",
                    text: c.text || "",
                    name: c.name || "",
                    async: c.async || !1
                })
            }),
            a.styles && w(a.styles, function(c) {
                b.styles.push({
                    url: c.url || "",
                    text: c.text || "",
                    name: c.name || ""
                })
            }),
            a.links && w(a.links, function(c) {
                "spf-preconnect" == c.rel && b.links.push({
                    url: c.url || "",
                    rel: c.rel || ""
                })
            }),
            b.html = a.html || "",
            b;
        a = a.replace(ma, function(c, e, d, f) {
            if ("script" == e) {
                e = (e = d.match(X)) ? e[1] : "";
                var h = d.match(na);
                h = h ? h[1] : "";
                var k = oa.test(d);
                d = pa.exec(d);
                return (d = !d || -1 != d[1].indexOf("/javascript") || -1 != d[1].indexOf("/x-javascript") || -1 != d[1].indexOf("/ecmascript")) ? (b.scripts.push({
                    url: h,
                    text: f,
                    name: e,
                    async: k
                }),
                "") : c
            }
            return "style" == e && (e = (e = d.match(X)) ? e[1] : "",
            d = pa.exec(d),
            d = !d || -1 != d[1].indexOf("text/css")) ? (b.styles.push({
                url: "",
                text: f,
                name: e
            }),
            "") : c
        });
        a = a.replace(qa, function(c, e) {
            var d = e.match(ra);
            d = d ? d[1] : "";
            return "stylesheet" == d ? (d = (d = e.match(X)) ? d[1] : "",
            e = (e = e.match(sa)) ? e[1] : "",
            b.styles.push({
                url: e,
                text: "",
                name: d
            }),
            "") : "spf-preconnect" == d ? (e = (e = e.match(sa)) ? e[1] : "",
            b.links.push({
                url: e,
                rel: d
            }),
            "") : c
        });
        b.html = a;
        return b
    }
    function la() {
        this.html = "";
        this.scripts = [];
        this.styles = [];
        this.links = []
    }
    (function() {
        var a = document.createElement("div");
        return "transition"in a.style ? !0 : x(["webkit", "Moz", "Ms", "O", "Khtml"], function(b) {
            return b + "Transition"in a.style
        })
    }
    )();
    var qa = /\x3clink([\s\S]*?)\x3e/ig
      , ma = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig
      , oa = /(?:\s|^)async(?:\s|=|$)/i
      , sa = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i
      , X = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i
      , ra = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i
      , na = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i
      , pa = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;
    /*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
    function ta(a, b, c, e) {
        var d = e || {}, f = !1, h = 0, k, g = new XMLHttpRequest;
        g.open(a, b, !0);
        g.timing = {};
        var m = g.abort;
        g.abort = function() {
            clearTimeout(k);
            g.onreadystatechange = null;
            m.call(g)
        }
        ;
        g.onreadystatechange = function() {
            var q = g.timing;
            if (2 == g.readyState) {
                q.responseStart = q.responseStart || v();
                if ("json" == g.responseType)
                    f = !1;
                else if (C["assume-all-json-requests-chunked"] || -1 < (g.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked"))
                    f = !0;
                else {
                    q = g.getResponseHeader("X-Firefox-Spdy");
                    var B = window.chrome && chrome.loadTimes && chrome.loadTimes();
                    B = B && B.wasFetchedViaSpdy;
                    f = !(!q && !B)
                }
                d.u && d.u(g)
            } else
                3 == g.readyState ? f && d.l && (q = g.responseText.substring(h),
                h = g.responseText.length,
                d.l(g, q)) : 4 == g.readyState && (q.responseEnd = q.responseEnd || v(),
                window.performance && window.performance.getEntriesByName && (g.resourceTiming = window.performance.getEntriesByName(b).pop()),
                f && d.l && g.responseText.length > h && (q = g.responseText.substring(h),
                h = g.responseText.length,
                d.l(g, q)),
                clearTimeout(k),
                d.s && d.s(g))
        }
        ;
        "responseType"in g && "json" == d.responseType && (g.responseType = "json");
        d.withCredentials && (g.withCredentials = d.withCredentials);
        e = "FormData"in window && c instanceof FormData;
        a = "POST" == a && !e;
        if (d.headers)
            for (var t in d.headers)
                g.setRequestHeader(t, d.headers[t]),
                "content-type" == t.toLowerCase() && (a = !1);
        a && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        0 < d.C && (k = setTimeout(function() {
            g.abort();
            d.A && d.A(g)
        }, d.C));
        g.timing.fetchStart = v();
        g.send(c);
        return g
    }
    ;function ua(a, b, c, e, d) {
        var f = !1;
        c.responseStart = c.responseEnd = v();
        b.type && 0 == b.type.lastIndexOf("navigate", 0) && (c.navigationStart = c.startTime,
        C["cache-unified"] || (D(e),
        f = !0));
        b.j && "multipart" == d.type && w(d.parts, function(h) {
            h.timing || (h.timing = {});
            h.timing.spfCached = !!c.spfCached;
            h.timing.spfPrefetched = !!c.spfPrefetched;
            b.j(a, h)
        });
        va(a, b, c, d, f)
    }
    function wa(a, b, c) {
        a = c.getResponseHeader("X-SPF-Response-Type") || "";
        b.o = -1 != a.toLowerCase().indexOf("multipart")
    }
    function xa(a, b, c, e, d, f, h) {
        if (e.o) {
            f = e.g + f;
            try {
                var k = ka(f, !0, h)
            } catch (g) {
                d.abort();
                b.i && b.i(a, g, d);
                return
            }
            b.j && w(k.m, function(g) {
                g.timing || (g.timing = {});
                g.timing.spfCached = !!c.spfCached;
                g.timing.spfPrefetched = !!c.spfPrefetched;
                b.j(a, g)
            });
            e.h = e.h.concat(k.m);
            e.g = k.g
        }
    }
    function ya(a, b, c, e, d) {
        if (d.timing)
            for (var f in d.timing)
                c[f] = d.timing[f];
        if (d.resourceTiming)
            if ("load" == b.type)
                for (var h in d.resourceTiming)
                    c[h] = d.resourceTiming[h];
            else if (window.performance && window.performance.timing && (f = window.performance.timing.navigationStart,
            f + d.resourceTiming.startTime >= c.startTime))
                for (var k in d.resourceTiming)
                    h = d.resourceTiming[k],
                    void 0 !== h && (H(k, "Start") || H(k, "End") || "startTime" == k) && (c[k] = f + Math.round(h));
        "load" != b.type && (c.navigationStart = c.startTime);
        e.h.length && (e.g = I(e.g),
        e.g && xa(a, b, c, e, d, "", !0));
        if ("json" == d.responseType) {
            if (!d.response) {
                b.i && b.i(a, Error("JSON response parsing failed"), d);
                return
            }
            var g = V(y(d.response))
        } else
            try {
                g = ka(d.responseText).m
            } catch (t) {
                b.i && b.i(a, t, d);
                return
            }
        if (b.j && 1 < g.length)
            for (e = e.h.length; e < g.length; e++)
                d = g[e],
                d.timing || (d.timing = {}),
                d.timing.spfCached = !!c.spfCached,
                d.timing.spfPrefetched = !!c.spfPrefetched,
                b.j(a, d);
        if (1 < g.length) {
            var m;
            w(g, function(t) {
                t.cacheType && (m = t.cacheType)
            });
            g = {
                parts: g,
                type: "multipart"
            };
            m && (g.cacheType = m)
        } else
            g = 1 == g.length ? g[0] : {};
        va(a, b, c, g, !0)
    }
    function va(a, b, c, e, d) {
        if (d && "POST" != b.method && (d = za(a, b.current, e.cacheType, b.type, !0))) {
            e.cacheKey = d;
            var f = {
                response: e,
                type: b.type || ""
            }
              , h = parseInt(C["cache-lifetime"], 10)
              , k = parseInt(C["cache-max"], 10);
            0 >= h || 0 >= k || (k = E(),
            f = {
                data: f,
                life: h,
                time: v(),
                count: 0
            },
            G(f),
            k[d] = f,
            setTimeout(fa, 1E3))
        }
        e.timing = c;
        b.v && b.v(a, e)
    }
    function za(a, b, c, e, d) {
        a = S(a);
        var f;
        C["cache-unified"] ? f = a : "navigate-back" == e || "navigate-forward" == e ? f = "history " + a : "navigate" == e ? f = (d ? "history " : "prefetch ") + a : "prefetch" == e && (f = d ? "prefetch " + a : "");
        b && "url" == c ? f += " previous " + b : b && "path" == c && (f += " previous " + R(b).pathname);
        return f || ""
    }
    function Aa(a, b) {
        var c = [];
        b && (c.push(a + " previous " + b),
        c.push(a + " previous " + R(b).pathname));
        c.push(a);
        var e = null;
        x(c, function(d) {
            a: {
                var f = E();
                if (d in f) {
                    f = f[d];
                    if (F(f)) {
                        G(f);
                        f = f.data;
                        break a
                    }
                    D(d)
                }
                f = void 0
            }
            f && (e = {
                key: d,
                response: f.response,
                type: f.type
            });
            return !!f
        });
        return e
    }
    function Ba() {
        this.o = !1;
        this.g = "";
        this.h = []
    }
    ;function Y(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments);
            c[0] = a;
            c = ea.apply(null, c)
        }
        return !1 !== c
    }
    ;function Ca(a, b, c, e) {
        Y((a || {}).onError, {
            url: b,
            err: c,
            xhr: e
        })
    }
    function Da(a, b, c) {
        Y((a || {}).onPartProcess, {
            url: b,
            part: c
        }) && Y((a || {}).onPartDone, {
            url: b,
            part: c
        })
    }
    function Ea(a, b, c) {
        var e;
        (e = "multipart" == c.type) || (e = Y((a || {}).onProcess, {
            url: b,
            response: c
        }));
        e && Y((a || {}).onDone, {
            url: b,
            response: c
        })
    }
    var Fa = {
        request: function(a, b) {
            b = b || {};
            b = {
                method: b.method,
                headers: b.experimental_headers,
                j: u(Da, null, b),
                i: u(Ca, null, b),
                v: u(Ea, null, b),
                D: b.postData,
                type: "",
                current: window.location.href,
                B: window.location.href
            };
            b.method = ((b.method || "GET") + "").toUpperCase();
            b.type = b.type || "request";
            var c = a
              , e = C["url-identifier"] || "";
            if (e) {
                e = e.replace("__type__", b.type || "");
                var d = J(c, "#")
                  , f = J(d[0], "?");
                c = f[0];
                var h = f[1];
                f = f[2];
                var k = d[1];
                d = d[2];
                if (0 == e.lastIndexOf("?", 0))
                    h && (e = e.replace("?", "&")),
                    f += e;
                else {
                    if (0 == e.lastIndexOf(".", 0))
                        if (H(c, "/"))
                            e = "index" + e;
                        else {
                            var g = c.lastIndexOf(".");
                            -1 < g && (c = c.substring(0, g))
                        }
                    else
                        H(c, "/") && 0 == e.lastIndexOf("/", 0) && (e = e.substring(1));
                    c += e
                }
                c = c + h + f + k + d
            }
            e = S(c);
            c = {};
            c.spfUrl = e;
            c.startTime = v();
            c.fetchStart = c.startTime;
            h = za(a, b.current, null, b.type, !1);
            h = Aa(h, b.current);
            c.spfPrefetched = !!h && "prefetch" == h.type;
            c.spfCached = !!h;
            if (h) {
                a = u(ua, null, a, b, c, h.key, h.response);
                b = window._spf_state = window._spf_state || {};
                var m = parseInt(b.uid, 10) || 0;
                m++;
                b = b.uid = m;
                M[b] = a;
                P ? window.postMessage("spf:" + b, "*") : window.setTimeout(u(L, null, b), 0);
                a = null
            } else {
                h = {};
                if (f = C["request-headers"])
                    for (m in f)
                        k = f[m],
                        h[m] = null == k ? "" : String(k);
                if (b.headers)
                    for (m in b.headers)
                        k = b.headers[m],
                        h[m] = null == k ? "" : String(k);
                null != b.B && (h["X-SPF-Referer"] = b.B);
                null != b.current && (h["X-SPF-Previous"] = b.current);
                if (m = C["advanced-header-identifier"])
                    h["X-SPF-Request"] = m.replace("__type__", b.type),
                    h.Accept = "application/json";
                m = new Ba;
                f = u(ya, null, a, b, c, m);
                a = {
                    headers: h,
                    C: C["request-timeout"],
                    u: u(wa, null, a, m),
                    l: u(xa, null, a, b, c, m),
                    s: f,
                    A: f
                };
                b.withCredentials && (a.withCredentials = b.withCredentials);
                C["advanced-response-type-json"] && (a.responseType = "json");
                a = "POST" == b.method ? ta("POST", e, b.D, a) : ta("GET", e, null, a)
            }
            return a
        }
    }
      , n = this;
    n.spf = n.spf || {};
    var Ga = n.spf, Z;
    for (Z in Fa)
        Ga[Z] = Fa[Z];
}
).call(this);
