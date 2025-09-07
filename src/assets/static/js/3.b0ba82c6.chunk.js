/*! For license information please see 3.b0ba82c6.chunk.js.LICENSE.txt */
(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[3], Array(152).concat([function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return e < -2
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(158);
        e.exports = function(e, n, t, i) {
            var o = i ? i - 1 : 1 / 0
              , u = 0;
            return function(i) {
                if (r(i))
                    return e.enter(t),
                    l(i);
                return n(i)
            }
            ;
            function l(i) {
                return r(i) && u++ < o ? (e.consume(i),
                l) : (e.exit(t),
                n(i))
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, i, o = n.children || [], u = o.length, l = [], a = -1;
            for (; ++a < u; )
                (t = r(e, o[a], n)) && (a && "break" === o[a - 1].type && (t.value && (t.value = t.value.replace(/^\s+/, "")),
                (i = t.children && t.children[0]) && i.value && (i.value = i.value.replace(/^\s+/, ""))),
                l = l.concat(t));
            return l
        }
        ;
        var r = t(220)
    }
    , , , function(e, n, t) {
        "use strict";
        e.exports = function(e, n, t) {
            var r;
            null !== t && void 0 !== t || "object" === typeof n && !Array.isArray(n) || (t = n,
            n = {});
            r = Object.assign({
                type: String(e)
            }, n),
            Array.isArray(t) ? r.children = t : null !== t && void 0 !== t && (r.value = String(t));
            return r
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return -2 === e || -1 === e || 32 === e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(302);
        e.exports = function(e, n, t, i) {
            var o, u = e.length, l = 0;
            if (n = n < 0 ? -n > u ? 0 : u + n : n > u ? u : n,
            t = t > 0 ? t : 0,
            i.length < 1e4)
                (o = Array.from(i)).unshift(n, t),
                r.apply(e, o);
            else
                for (t && r.apply(e, [n, t]); l < i.length; )
                    (o = i.slice(l, l + 1e4)).unshift(n, 0),
                    r.apply(e, o),
                    l += 1e4,
                    n += 1e4
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return e < 0 || 32 === e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(168);
        e.exports = function(e) {
            return function(n) {
                return e.test(r(n))
            }
        }
    }
    , , function(e, n, t) {
        "use strict";
        var r = t(166);
        e.exports = function(e) {
            return r({}, e)
        }
    }
    , , , function(e, n, t) {
        "use strict";
        var r = Object.assign;
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t = []
              , i = -1
              , o = e.length;
            n && t.push(r("text", "\n"));
            for (; ++i < o; )
                i && t.push(r("text", "\n")),
                t.push(e[i]);
            n && e.length > 0 && t.push(r("text", "\n"));
            return t
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        var r = String.fromCharCode;
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(153)
          , o = {
            tokenize: function(e, n, t) {
                return i(e, (function(e) {
                    return null === e || r(e) ? n(e) : t(e)
                }
                ), "linePrefix")
            },
            partial: !0
        };
        e.exports = o
    }
    , function(e, n, t) {
        "use strict";
        var r = t(209);
        e.exports = function(e, n) {
            var t = e[e.length - 1];
            return t && t[1].type === n ? r(t[2].sliceStream(t[1])) : 0
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/[\dA-Za-z]/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = {};
        function i(e, n, t) {
            var o, u, l, a, c, s = "";
            for ("string" !== typeof n && (t = n,
            n = i.defaultChars),
            "undefined" === typeof t && (t = !0),
            c = function(e) {
                var n, t, i = r[e];
                if (i)
                    return i;
                for (i = r[e] = [],
                n = 0; n < 128; n++)
                    t = String.fromCharCode(n),
                    /^[0-9a-z]$/i.test(t) ? i.push(t) : i.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
                for (n = 0; n < e.length; n++)
                    i[e.charCodeAt(n)] = e[n];
                return i
            }(n),
            o = 0,
            u = e.length; o < u; o++)
                if (l = e.charCodeAt(o),
                t && 37 === l && o + 2 < u && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3)))
                    s += e.slice(o, o + 3),
                    o += 2;
                else if (l < 128)
                    s += c[l];
                else if (l >= 55296 && l <= 57343) {
                    if (l >= 55296 && l <= 56319 && o + 1 < u && (a = e.charCodeAt(o + 1)) >= 56320 && a <= 57343) {
                        s += encodeURIComponent(e[o] + e[o + 1]),
                        o++;
                        continue
                    }
                    s += "%EF%BF%BD"
                } else
                    s += encodeURIComponent(e[o]);
            return s
        }
        i.defaultChars = ";/?:@&=+$,-_.!~*'()#",
        i.componentChars = "-_.!~*'()",
        e.exports = i
    }
    , , , , , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return null === e || void 0 === e ? [] : "length"in e ? e : [e]
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(159);
        e.exports = function(e, n) {
            return e.length ? (r(e, e.length, 0, n),
            e) : n
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n, t) {
            for (var r, i = [], o = -1; ++o < e.length; )
                (r = e[o].resolveAll) && i.indexOf(r) < 0 && (n = r(n, t),
                i.push(r));
            return n
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/[A-Za-z]/);
        e.exports = r
    }
    , , function(e, n, t) {
        "use strict";
        var r = t(160)
          , i = t(179)
          , o = t(159)
          , u = t(177)
          , l = t(180)
          , a = t(163)
          , c = t(214)
          , s = t(215)
          , f = t(217)
          , p = t(216)
          , d = {
            name: "labelEnd",
            tokenize: function(e, n, t) {
                var r, i, o = this, l = o.events.length;
                for (; l--; )
                    if (("labelImage" === o.events[l][1].type || "labelLink" === o.events[l][1].type) && !o.events[l][1]._balanced) {
                        r = o.events[l][1];
                        break
                    }
                return function(n) {
                    if (!r)
                        return t(n);
                    return r._inactive ? c(n) : (i = o.parser.defined.indexOf(u(o.sliceSerialize({
                        start: r.end,
                        end: o.now()
                    }))) > -1,
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(n),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    a)
                }
                ;
                function a(t) {
                    return 40 === t ? e.attempt(h, n, i ? n : c)(t) : 91 === t ? e.attempt(m, n, i ? e.attempt(g, n, c) : c)(t) : i ? n(t) : c(t)
                }
                function c(e) {
                    return r._balanced = !0,
                    t(e)
                }
            },
            resolveTo: function(e, n) {
                var t, r, u, c, s, f, p, d = e.length, h = 0;
                for (; d--; )
                    if (c = e[d][1],
                    s) {
                        if ("link" === c.type || "labelLink" === c.type && c._inactive)
                            break;
                        "enter" === e[d][0] && "labelLink" === c.type && (c._inactive = !0)
                    } else if (f) {
                        if ("enter" === e[d][0] && ("labelImage" === c.type || "labelLink" === c.type) && !c._balanced && (s = d,
                        "labelLink" !== c.type)) {
                            h = 2;
                            break
                        }
                    } else
                        "labelEnd" === c.type && (f = d);
                return t = {
                    type: "labelLink" === e[s][1].type ? "link" : "image",
                    start: a(e[s][1].start),
                    end: a(e[e.length - 1][1].end)
                },
                r = {
                    type: "label",
                    start: a(e[s][1].start),
                    end: a(e[f][1].end)
                },
                u = {
                    type: "labelText",
                    start: a(e[s + h + 2][1].end),
                    end: a(e[f - 2][1].start)
                },
                p = i(p = [["enter", t, n], ["enter", r, n]], e.slice(s + 1, s + h + 3)),
                p = i(p, [["enter", u, n]]),
                p = i(p, l(n.parser.constructs.insideSpan.null, e.slice(s + h + 4, f - 3), n)),
                p = i(p, [["exit", u, n], e[f - 2], e[f - 1], ["exit", r, n]]),
                p = i(p, e.slice(f + 1)),
                p = i(p, [["exit", t, n]]),
                o(e, s, e.length, p),
                e
            },
            resolveAll: function(e) {
                var n, t = -1;
                for (; ++t < e.length; )
                    (n = e[t][1])._used || "labelImage" !== n.type && "labelLink" !== n.type && "labelEnd" !== n.type || (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                    n.type = "data",
                    t++);
                return e
            }
        }
          , h = {
            tokenize: function(e, n, t) {
                return function(n) {
                    return e.enter("resource"),
                    e.enter("resourceMarker"),
                    e.consume(n),
                    e.exit("resourceMarker"),
                    p(e, i)
                }
                ;
                function i(n) {
                    return 41 === n ? l(n) : c(e, o, t, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 3)(n)
                }
                function o(n) {
                    return r(n) ? p(e, u)(n) : l(n)
                }
                function u(n) {
                    return 34 === n || 39 === n || 40 === n ? f(e, p(e, l), t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(n) : l(n)
                }
                function l(r) {
                    return 41 === r ? (e.enter("resourceMarker"),
                    e.consume(r),
                    e.exit("resourceMarker"),
                    e.exit("resource"),
                    n) : t(r)
                }
            }
        }
          , m = {
            tokenize: function(e, n, t) {
                var r = this;
                return function(n) {
                    return s.call(r, e, i, t, "reference", "referenceMarker", "referenceString")(n)
                }
                ;
                function i(e) {
                    return r.parser.defined.indexOf(u(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) < 0 ? t(e) : n(e)
                }
            }
        }
          , g = {
            tokenize: function(e, n, t) {
                return function(n) {
                    return e.enter("reference"),
                    e.enter("referenceMarker"),
                    e.consume(n),
                    e.exit("referenceMarker"),
                    r
                }
                ;
                function r(r) {
                    return 93 === r ? (e.enter("referenceMarker"),
                    e.consume(r),
                    e.exit("referenceMarker"),
                    e.exit("reference"),
                    n) : t(r)
                }
            }
        };
        e.exports = d
    }
    , function(e, n, t) {
        "use strict";
        e.exports = l;
        var r = t(341)
          , i = r.CONTINUE
          , o = r.SKIP
          , u = r.EXIT;
        function l(e, n, t, i) {
            "function" === typeof n && "function" !== typeof t && (i = t,
            t = n,
            n = null),
            r(e, n, (function(e, n) {
                var r = n[n.length - 1]
                  , i = r ? r.children.indexOf(e) : null;
                return t(e, i, r)
            }
            ), i)
        }
        l.CONTINUE = i,
        l.SKIP = o,
        l.EXIT = u
    }
    , , , , , , , , , , , , , , , , , , , , , , function(e, n, t) {
        "use strict";
        e.exports = t(279)
    }
    , function(e, n, t) {
        "use strict";
        var r = {}.hasOwnProperty;
        function i(e) {
            return e && "object" === typeof e || (e = {}),
            u(e.line) + ":" + u(e.column)
        }
        function o(e) {
            return e && "object" === typeof e || (e = {}),
            i(e.start) + "-" + i(e.end)
        }
        function u(e) {
            return e && "number" === typeof e ? e : 1
        }
        e.exports = function(e) {
            if (!e || "object" !== typeof e)
                return "";
            if (r.call(e, "position") || r.call(e, "type"))
                return o(e.position);
            if (r.call(e, "start") || r.call(e, "end"))
                return o(e);
            if (r.call(e, "line") || r.call(e, "column"))
                return i(e);
            return ""
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = {}.hasOwnProperty;
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            for (var n = -1, t = 0; ++n < e.length; )
                t += "string" === typeof e[n] ? e[n].length : 1;
            return t
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(166)
          , i = t(159)
          , o = t(163);
        function u(e, n) {
            for (var t, r, o, u, l, a, c = e[n][1], s = e[n][2], f = n - 1, p = [], d = c._tokenizer || s.parser[c.contentType](c.start), h = d.events, m = [], g = {}; c; ) {
                for (; e[++f][1] !== c; )
                    ;
                p.push(f),
                c._tokenizer || (t = s.sliceStream(c),
                c.next || t.push(null),
                r && d.defineSkip(c.start),
                c.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = !0),
                d.write(t),
                c.isInFirstContentOfListItem && (d._gfmTasklistFirstContentOfListItem = void 0)),
                r = c,
                c = c.next
            }
            for (c = r,
            o = h.length; o--; )
                "enter" === h[o][0] ? u = !0 : u && h[o][1].type === h[o - 1][1].type && h[o][1].start.line !== h[o][1].end.line && (v(h.slice(o + 1, l)),
                c._tokenizer = c.next = void 0,
                c = c.previous,
                l = o + 1);
            for (d.events = c._tokenizer = c.next = void 0,
            v(h.slice(0, l)),
            o = -1,
            a = 0; ++o < m.length; )
                g[a + m[o][0]] = a + m[o][1],
                a += m[o][1] - m[o][0] - 1;
            return g;
            function v(n) {
                var t = p.pop();
                m.unshift([t, t + n.length - 1]),
                i(e, t, 2, n)
            }
        }
        e.exports = function(e) {
            for (var n, t, l, a, c, s, f, p = {}, d = -1; ++d < e.length; ) {
                for (; d in p; )
                    d = p[d];
                if (n = e[d],
                d && "chunkFlow" === n[1].type && "listItemPrefix" === e[d - 1][1].type && ((l = 0) < (s = n[1]._tokenizer.events).length && "lineEndingBlank" === s[l][1].type && (l += 2),
                l < s.length && "content" === s[l][1].type))
                    for (; ++l < s.length && "content" !== s[l][1].type; )
                        "chunkText" === s[l][1].type && (s[l][1].isInFirstContentOfListItem = !0,
                        l++);
                if ("enter" === n[0])
                    n[1].contentType && (r(p, u(e, d)),
                    d = p[d],
                    f = !0);
                else if (n[1]._container || n[1]._movePreviousLineEndings) {
                    for (l = d,
                    t = void 0; l-- && ("lineEnding" === (a = e[l])[1].type || "lineEndingBlank" === a[1].type); )
                        "enter" === a[0] && (t && (e[t][1].type = "lineEndingBlank"),
                        a[1].type = "lineEnding",
                        t = l);
                    t && (n[1].end = o(e[t][1].start),
                    (c = e.slice(t, d)).unshift(n),
                    i(e, t, d - t + 1, c))
                }
            }
            return !f
        }
    }
    , function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(166)
          , i = t(163)
          , o = a("text")
          , u = a("string")
          , l = {
            resolveAll: c()
        };
        function a(e) {
            return {
                tokenize: function(n) {
                    var t = this
                      , r = this.parser.constructs[e]
                      , i = n.attempt(r, o, u);
                    return o;
                    function o(e) {
                        return a(e) ? i(e) : u(e)
                    }
                    function u(e) {
                        if (null !== e)
                            return n.enter("data"),
                            n.consume(e),
                            l;
                        n.consume(e)
                    }
                    function l(e) {
                        return a(e) ? (n.exit("data"),
                        i(e)) : (n.consume(e),
                        l)
                    }
                    function a(e) {
                        var n = r[e]
                          , i = -1;
                        if (null === e)
                            return !0;
                        if (n)
                            for (; ++i < n.length; )
                                if (!n[i].previous || n[i].previous.call(t, t.previous))
                                    return !0
                    }
                },
                resolveAll: c("text" === e ? s : void 0)
            }
        }
        function c(e) {
            return function(n, t) {
                var r, i = -1;
                for (; ++i <= n.length; )
                    void 0 === r ? n[i] && "data" === n[i][1].type && (r = i,
                    i++) : n[i] && "data" === n[i][1].type || (i !== r + 2 && (n[r][1].end = n[i - 1][1].end,
                    n.splice(r + 2, i - r - 2),
                    i = r + 2),
                    r = void 0);
                return e ? e(n, t) : n
            }
        }
        function s(e, n) {
            for (var t, o, u, l, a, c, s, f, p = -1; ++p <= e.length; )
                if ((p === e.length || "lineEnding" === e[p][1].type) && "data" === e[p - 1][1].type) {
                    for (o = e[p - 1][1],
                    l = (t = n.sliceStream(o)).length,
                    a = -1,
                    c = 0,
                    s = void 0; l--; )
                        if ("string" === typeof (u = t[l])) {
                            for (a = u.length; 32 === u.charCodeAt(a - 1); )
                                c++,
                                a--;
                            if (a)
                                break;
                            a = -1
                        } else if (-2 === u)
                            s = !0,
                            c++;
                        else if (-1 !== u) {
                            l++;
                            break
                        }
                    c && (f = {
                        type: p === e.length || s || c < 2 ? "lineSuffix" : "hardBreakTrailing",
                        start: {
                            line: o.end.line,
                            column: o.end.column - c,
                            offset: o.end.offset - c,
                            _index: o.start._index + l,
                            _bufferIndex: l ? a : o.start._bufferIndex + a
                        },
                        end: i(o.end)
                    },
                    o.end = i(f.start),
                    o.start.offset === o.end.offset ? r(o, f) : (e.splice(p, 0, ["enter", f, n], ["exit", f, n]),
                    p += 2)),
                    p++
                }
            return e
        }
        n.resolver = l,
        n.string = u,
        n.text = o
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return e < 32 || 127 === e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/\d/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(212)
          , i = t(160)
          , o = t(152);
        e.exports = function(e, n, t, u, l, a, c, s, f) {
            var p = f || 1 / 0
              , d = 0;
            return function(n) {
                if (60 === n)
                    return e.enter(u),
                    e.enter(l),
                    e.enter(a),
                    e.consume(n),
                    e.exit(a),
                    h;
                if (r(n) || 41 === n)
                    return t(n);
                return e.enter(u),
                e.enter(c),
                e.enter(s),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                v(n)
            }
            ;
            function h(t) {
                return 62 === t ? (e.enter(a),
                e.consume(t),
                e.exit(a),
                e.exit(l),
                e.exit(u),
                n) : (e.enter(s),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                m(t))
            }
            function m(n) {
                return 62 === n ? (e.exit("chunkString"),
                e.exit(s),
                h(n)) : null === n || 60 === n || o(n) ? t(n) : (e.consume(n),
                92 === n ? g : m)
            }
            function g(n) {
                return 60 === n || 62 === n || 92 === n ? (e.consume(n),
                m) : m(n)
            }
            function v(o) {
                return 40 === o ? ++d > p ? t(o) : (e.consume(o),
                v) : 41 === o ? d-- ? (e.consume(o),
                v) : (e.exit("chunkString"),
                e.exit(s),
                e.exit(c),
                e.exit(u),
                n(o)) : null === o || i(o) ? d ? t(o) : (e.exit("chunkString"),
                e.exit(s),
                e.exit(c),
                e.exit(u),
                n(o)) : r(o) ? t(o) : (e.consume(o),
                92 === o ? x : v)
            }
            function x(n) {
                return 40 === n || 41 === n || 92 === n ? (e.consume(n),
                v) : v(n)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(158);
        e.exports = function(e, n, t, o, u, l) {
            var a, c = this, s = 0;
            return function(n) {
                return e.enter(o),
                e.enter(u),
                e.consume(n),
                e.exit(u),
                e.enter(l),
                f
            }
            ;
            function f(i) {
                return null === i || 91 === i || 93 === i && !a || 94 === i && !s && "_hiddenFootnoteSupport"in c.parser.constructs || s > 999 ? t(i) : 93 === i ? (e.exit(l),
                e.enter(u),
                e.consume(i),
                e.exit(u),
                e.exit(o),
                n) : r(i) ? (e.enter("lineEnding"),
                e.consume(i),
                e.exit("lineEnding"),
                f) : (e.enter("chunkString", {
                    contentType: "string"
                }),
                p(i))
            }
            function p(n) {
                return null === n || 91 === n || 93 === n || r(n) || s++ > 999 ? (e.exit("chunkString"),
                f(n)) : (e.consume(n),
                a = a || !i(n),
                92 === n ? d : p)
            }
            function d(n) {
                return 91 === n || 92 === n || 93 === n ? (e.consume(n),
                s++,
                p) : p(n)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(158)
          , o = t(153);
        e.exports = function(e, n) {
            var t;
            return function u(l) {
                if (r(l))
                    return e.enter("lineEnding"),
                    e.consume(l),
                    e.exit("lineEnding"),
                    t = !0,
                    u;
                if (i(l))
                    return o(e, u, t ? "linePrefix" : "lineSuffix")(l);
                return n(l)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(153);
        e.exports = function(e, n, t, o, u, l) {
            var a;
            return function(n) {
                return e.enter(o),
                e.enter(u),
                e.consume(n),
                e.exit(u),
                a = 40 === n ? 41 : n,
                c
            }
            ;
            function c(t) {
                return t === a ? (e.enter(u),
                e.consume(t),
                e.exit(u),
                e.exit(o),
                n) : (e.enter(l),
                s(t))
            }
            function s(n) {
                return n === a ? (e.exit(l),
                c(a)) : null === n ? t(n) : r(n) ? (e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                i(e, s, "linePrefix")) : (e.enter("chunkString", {
                    contentType: "string"
                }),
                f(n))
            }
            function f(n) {
                return n === a || null === n || r(n) ? (e.exit("chunkString"),
                s(n)) : (e.consume(n),
                92 === n ? p : f)
            }
            function p(n) {
                return n === a || 92 === n ? (e.consume(n),
                f) : f(n)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(158)
          , o = t(153)
          , u = {
            name: "thematicBreak",
            tokenize: function(e, n, t) {
                var u, l = 0;
                return function(n) {
                    return e.enter("thematicBreak"),
                    u = n,
                    a(n)
                }
                ;
                function a(s) {
                    return s === u ? (e.enter("thematicBreakSequence"),
                    c(s)) : i(s) ? o(e, a, "whitespace")(s) : l < 3 || null !== s && !r(s) ? t(s) : (e.exit("thematicBreak"),
                    n(s))
                }
                function c(n) {
                    return n === u ? (e.consume(n),
                    l++,
                    c) : (e.exit("thematicBreakSequence"),
                    a(n))
                }
            }
        };
        e.exports = u
    }
    , function(e, n, t) {
        "use strict";
        var r = u("start")
          , i = u("end");
        function o(e) {
            return {
                start: r(e),
                end: i(e)
            }
        }
        function u(e) {
            return n.displayName = e,
            n;
            function n(n) {
                var t = n && n.position && n.position[e] || {};
                return {
                    line: t.line || null,
                    column: t.column || null,
                    offset: isNaN(t.offset) ? null : t.offset
                }
            }
        }
        e.exports = o,
        o.start = r,
        o.end = i
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n, t) {
            var r, i = n && n.type;
            if (!i)
                throw new Error("Expected node, got `" + n + "`");
            r = o.call(e.handlers, i) ? e.handlers[i] : e.passThrough && e.passThrough.indexOf(i) > -1 ? l : e.unknownHandler;
            return ("function" === typeof r ? r : u)(e, n, t)
        }
        ;
        var r = t(157)
          , i = t(154)
          , o = {}.hasOwnProperty;
        function u(e, n) {
            return function(e) {
                var n = e.data || {};
                if (o.call(n, "hName") || o.call(n, "hProperties") || o.call(n, "hChildren"))
                    return !1;
                return "value"in e
            }(n) ? e.augment(n, r("text", n.value)) : e(n, "div", i(e, n))
        }
        function l(e, n) {
            var t;
            return n.children ? ((t = Object.assign({}, n)).children = i(e, n),
            t) : n
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "hr")
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, o, u = {}, l = n.ordered ? "ol" : "ul", a = -1;
            "number" === typeof n.start && 1 !== n.start && (u.start = n.start);
            t = i(e, n),
            o = t.length;
            for (; ++a < o; )
                if (t[a].properties.className && -1 !== t[a].properties.className.indexOf("task-list-item")) {
                    u.className = ["contains-task-list"];
                    break
                }
            return e(n, l, u, r(t, !0))
        }
        ;
        var r = t(167)
          , i = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t = e.footnoteOrder
              , i = String(n.identifier);
            -1 === t.indexOf(i) && t.push(i);
            return e(n.position, "sup", {
                id: "fnref-" + i
            }, [e(n, "a", {
                href: "#fn-" + i,
                className: ["footnote-ref"]
            }, [r("text", n.label || i)])])
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, o, u, l = n.referenceType, a = "]";
            "collapsed" === l ? a += "[]" : "full" === l && (a += "[" + (n.label || n.identifier) + "]");
            if ("imageReference" === n.type)
                return r("text", "![" + n.alt + a);
            t = i(e, n),
            (o = t[0]) && "text" === o.type ? o.value = "[" + o.value : t.unshift(r("text", "["));
            (u = t[t.length - 1]) && "text" === u.type ? u.value += a : t.push(r("text", a));
            return t
        }
        ;
        var r = t(157)
          , i = t(154)
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, n, t) {
        "use strict";
        var r = t(0)
          , i = t(206)
          , o = t(285)
          , u = t(292)
          , l = t(338)
          , a = t(5)
          , c = t(225)
          , s = t(369)
          , f = t(374)
          , p = t(375).hastChildrenToReact;
        e.exports = m;
        var d = {}.hasOwnProperty
          , h = {
            renderers: {
                to: "components",
                id: "change-renderers-to-components"
            },
            astPlugins: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            allowDangerousHtml: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            escapeHtml: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            source: {
                to: "children",
                id: "change-source-to-children"
            },
            allowNode: {
                to: "allowElement",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            allowedTypes: {
                to: "allowedElements",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            disallowedTypes: {
                to: "disallowedElements",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            includeNodeIndex: {
                to: "includeElementIndex",
                id: "change-includenodeindex-to-includeelementindex"
            }
        };
        function m(e) {
            for (var n in h)
                if (d.call(h, n) && d.call(e, n)) {
                    var t = h[n];
                    console.warn("[react-markdown] Warning: please ".concat(t.to ? "use `".concat(t.to, "` instead of") : "remove", " `").concat(n, "` (see <").concat("https://github.com/remarkjs/react-markdown/blob/main/changelog.md", "#").concat(t.id, "> for more info)")),
                    delete h[n]
                }
            var a, f = o().use(u).use(e.remarkPlugins || e.plugins || []).use(l, {
                allowDangerousHtml: !0
            }).use(e.rehypePlugins || []).use(s, e);
            "string" === typeof e.children ? a = i(e.children) : (void 0 !== e.children && null !== e.children && console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(e.children, "`)")),
            a = i());
            var m = f.runSync(f.parse(a), a);
            if ("root" !== m.type)
                throw new TypeError("Expected a `root` node");
            var g = r.createElement(r.Fragment, {}, p({
                options: e,
                schema: c,
                listDepth: 0
            }, m));
            return e.className && (g = r.createElement("div", {
                className: e.className
            }, g)),
            g
        }
        m.defaultProps = {
            transformLinkUri: f
        },
        m.propTypes = {
            children: a.string,
            className: a.string,
            allowElement: a.func,
            allowedElements: a.arrayOf(a.string),
            disallowedElements: a.arrayOf(a.string),
            unwrapDisallowed: a.bool,
            remarkPlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])),
            rehypePlugins: a.arrayOf(a.oneOfType([a.object, a.func, a.arrayOf(a.oneOfType([a.object, a.func]))])),
            sourcePos: a.bool,
            rawSourcePos: a.bool,
            skipHtml: a.bool,
            includeElementIndex: a.bool,
            transformLinkUri: a.oneOfType([a.func, a.bool]),
            linkTarget: a.oneOfType([a.func, a.string]),
            transformImageUri: a.func,
            components: a.object
        },
        m.uriTransformer = f
    }
    , function(e, n, t) {
        "use strict";
        var r = t(280)
          , i = t(281);
        e.exports = i,
        i.prototype.message = function(e, n, t) {
            var i = new r(e,n,t);
            this.path && (i.name = this.path + ":" + i.name,
            i.file = this.path);
            return i.fatal = !1,
            this.messages.push(i),
            i
        }
        ,
        i.prototype.info = function() {
            var e = this.message.apply(this, arguments);
            return e.fatal = null,
            e
        }
        ,
        i.prototype.fail = function() {
            var e = this.message.apply(this, arguments);
            throw e.fatal = !0,
            e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(207);
        function i() {}
        e.exports = u,
        i.prototype = Error.prototype,
        u.prototype = new i;
        var o = u.prototype;
        function u(e, n, t) {
            var i, o, u;
            "string" === typeof n && (t = n,
            n = null),
            i = function(e) {
                var n, t = [null, null];
                "string" === typeof e && (-1 === (n = e.indexOf(":")) ? t[1] = e : (t[0] = e.slice(0, n),
                t[1] = e.slice(n + 1)));
                return t
            }(t),
            o = r(n) || "1:1",
            u = {
                start: {
                    line: null,
                    column: null
                },
                end: {
                    line: null,
                    column: null
                }
            },
            n && n.position && (n = n.position),
            n && (n.start ? (u = n,
            n = n.start) : u.start = n),
            e.stack && (this.stack = e.stack,
            e = e.message),
            this.message = e,
            this.name = o,
            this.reason = e,
            this.line = n ? n.line : null,
            this.column = n ? n.column : null,
            this.location = u,
            this.source = i[0],
            this.ruleId = i[1]
        }
        o.file = "",
        o.name = "",
        o.reason = "",
        o.message = "",
        o.stack = "",
        o.fatal = null,
        o.column = null,
        o.line = null
    }
    , function(e, n, t) {
        "use strict";
        var r = t(282)
          , i = t(283)
          , o = t(284);
        e.exports = a;
        var u = {}.hasOwnProperty
          , l = ["history", "path", "basename", "stem", "extname", "dirname"];
        function a(e) {
            var n, t;
            if (e) {
                if ("string" === typeof e || o(e))
                    e = {
                        contents: e
                    };
                else if ("message"in e && "messages"in e)
                    return e
            } else
                e = {};
            if (!(this instanceof a))
                return new a(e);
            for (this.data = {},
            this.messages = [],
            this.history = [],
            this.cwd = i.cwd(),
            t = -1; ++t < l.length; )
                n = l[t],
                u.call(e, n) && (this[n] = e[n]);
            for (n in e)
                l.indexOf(n) < 0 && (this[n] = e[n])
        }
        function c(e, n) {
            if (e && e.indexOf(r.sep) > -1)
                throw new Error("`" + n + "` cannot be a path: did not expect `" + r.sep + "`")
        }
        function s(e, n) {
            if (!e)
                throw new Error("`" + n + "` cannot be empty")
        }
        function f(e, n) {
            if (!e)
                throw new Error("Setting `" + n + "` requires `path` to be set too")
        }
        a.prototype.toString = function(e) {
            return (this.contents || "").toString(e)
        }
        ,
        Object.defineProperty(a.prototype, "path", {
            get: function() {
                return this.history[this.history.length - 1]
            },
            set: function(e) {
                s(e, "path"),
                this.path !== e && this.history.push(e)
            }
        }),
        Object.defineProperty(a.prototype, "dirname", {
            get: function() {
                return "string" === typeof this.path ? r.dirname(this.path) : void 0
            },
            set: function(e) {
                f(this.path, "dirname"),
                this.path = r.join(e || "", this.basename)
            }
        }),
        Object.defineProperty(a.prototype, "basename", {
            get: function() {
                return "string" === typeof this.path ? r.basename(this.path) : void 0
            },
            set: function(e) {
                s(e, "basename"),
                c(e, "basename"),
                this.path = r.join(this.dirname || "", e)
            }
        }),
        Object.defineProperty(a.prototype, "extname", {
            get: function() {
                return "string" === typeof this.path ? r.extname(this.path) : void 0
            },
            set: function(e) {
                if (c(e, "extname"),
                f(this.path, "extname"),
                e) {
                    if (46 !== e.charCodeAt(0))
                        throw new Error("`extname` must start with `.`");
                    if (e.indexOf(".", 1) > -1)
                        throw new Error("`extname` cannot contain multiple dots")
                }
                this.path = r.join(this.dirname, this.stem + (e || ""))
            }
        }),
        Object.defineProperty(a.prototype, "stem", {
            get: function() {
                return "string" === typeof this.path ? r.basename(this.path, this.extname) : void 0
            },
            set: function(e) {
                s(e, "stem"),
                c(e, "stem"),
                this.path = r.join(this.dirname || "", e + (this.extname || ""))
            }
        })
    }
    , function(e, n, t) {
        "use strict";
        function r(e) {
            var n, t;
            return i(e),
            n = 47 === e.charCodeAt(0),
            (t = function(e, n) {
                var t, r, i = "", o = 0, u = -1, l = 0, a = -1;
                for (; ++a <= e.length; ) {
                    if (a < e.length)
                        t = e.charCodeAt(a);
                    else {
                        if (47 === t)
                            break;
                        t = 47
                    }
                    if (47 === t) {
                        if (u === a - 1 || 1 === l)
                            ;
                        else if (u !== a - 1 && 2 === l) {
                            if (i.length < 2 || 2 !== o || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                if (i.length > 2) {
                                    if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                        r < 0 ? (i = "",
                                        o = 0) : o = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"),
                                        u = a,
                                        l = 0;
                                        continue
                                    }
                                } else if (i.length) {
                                    i = "",
                                    o = 0,
                                    u = a,
                                    l = 0;
                                    continue
                                }
                            n && (i = i.length ? i + "/.." : "..",
                            o = 2)
                        } else
                            i.length ? i += "/" + e.slice(u + 1, a) : i = e.slice(u + 1, a),
                            o = a - u - 1;
                        u = a,
                        l = 0
                    } else
                        46 === t && l > -1 ? l++ : l = -1
                }
                return i
            }(e, !n)).length || n || (t = "."),
            t.length && 47 === e.charCodeAt(e.length - 1) && (t += "/"),
            n ? "/" + t : t
        }
        function i(e) {
            if ("string" !== typeof e)
                throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
        }
        n.basename = function(e, n) {
            var t, r, o, u, l = 0, a = -1;
            if (void 0 !== n && "string" !== typeof n)
                throw new TypeError('"ext" argument must be a string');
            if (i(e),
            t = e.length,
            void 0 === n || !n.length || n.length > e.length) {
                for (; t--; )
                    if (47 === e.charCodeAt(t)) {
                        if (o) {
                            l = t + 1;
                            break
                        }
                    } else
                        a < 0 && (o = !0,
                        a = t + 1);
                return a < 0 ? "" : e.slice(l, a)
            }
            if (n === e)
                return "";
            r = -1,
            u = n.length - 1;
            for (; t--; )
                if (47 === e.charCodeAt(t)) {
                    if (o) {
                        l = t + 1;
                        break
                    }
                } else
                    r < 0 && (o = !0,
                    r = t + 1),
                    u > -1 && (e.charCodeAt(t) === n.charCodeAt(u--) ? u < 0 && (a = t) : (u = -1,
                    a = r));
            l === a ? a = r : a < 0 && (a = e.length);
            return e.slice(l, a)
        }
        ,
        n.dirname = function(e) {
            var n, t, r;
            if (i(e),
            !e.length)
                return ".";
            n = -1,
            r = e.length;
            for (; --r; )
                if (47 === e.charCodeAt(r)) {
                    if (t) {
                        n = r;
                        break
                    }
                } else
                    t || (t = !0);
            return n < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n)
        }
        ,
        n.extname = function(e) {
            var n, t, r, o = -1, u = 0, l = -1, a = 0;
            i(e),
            r = e.length;
            for (; r--; )
                if (47 !== (t = e.charCodeAt(r)))
                    l < 0 && (n = !0,
                    l = r + 1),
                    46 === t ? o < 0 ? o = r : 1 !== a && (a = 1) : o > -1 && (a = -1);
                else if (n) {
                    u = r + 1;
                    break
                }
            if (o < 0 || l < 0 || 0 === a || 1 === a && o === l - 1 && o === u + 1)
                return "";
            return e.slice(o, l)
        }
        ,
        n.join = function() {
            var e, n = -1;
            for (; ++n < arguments.length; )
                i(arguments[n]),
                arguments[n] && (e = void 0 === e ? arguments[n] : e + "/" + arguments[n]);
            return void 0 === e ? "." : r(e)
        }
        ,
        n.sep = "/"
    }
    , function(e, n, t) {
        "use strict";
        n.cwd = function() {
            return "/"
        }
    }
    , function(e, n) {
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(286)
          , i = t(287)
          , o = t(288)
          , u = t(289)
          , l = t(290)
          , a = t(206);
        e.exports = function e() {
            var n, t = [], i = l(), x = {}, y = -1;
            return k.data = function(e, t) {
                if ("string" === typeof e)
                    return 2 === arguments.length ? (m("data", n),
                    x[e] = t,
                    k) : s.call(x, e) && x[e] || null;
                if (e)
                    return m("data", n),
                    x = e,
                    k;
                return x
            }
            ,
            k.freeze = b,
            k.attachers = t,
            k.use = function(e) {
                var r;
                if (m("use", n),
                null === e || void 0 === e)
                    ;
                else if ("function" === typeof e)
                    s.apply(null, arguments);
                else {
                    if ("object" !== typeof e)
                        throw new Error("Expected usable value, not `" + e + "`");
                    "length"in e ? a(e) : i(e)
                }
                r && (x.settings = o(x.settings || {}, r));
                return k;
                function i(e) {
                    a(e.plugins),
                    e.settings && (r = o(r || {}, e.settings))
                }
                function l(e) {
                    if ("function" === typeof e)
                        s(e);
                    else {
                        if ("object" !== typeof e)
                            throw new Error("Expected usable value, not `" + e + "`");
                        "length"in e ? s.apply(null, e) : i(e)
                    }
                }
                function a(e) {
                    var n = -1;
                    if (null === e || void 0 === e)
                        ;
                    else {
                        if ("object" !== typeof e || !("length"in e))
                            throw new Error("Expected a list of plugins, not `" + e + "`");
                        for (; ++n < e.length; )
                            l(e[n])
                    }
                }
                function s(e, n) {
                    var r = w(e);
                    r ? (u(r[1]) && u(n) && (n = o(!0, r[1], n)),
                    r[1] = n) : t.push(c.call(arguments))
                }
            }
            ,
            k.parse = function(e) {
                var n, t = a(e);
                if (b(),
                d("parse", n = k.Parser),
                p(n, "parse"))
                    return new n(String(t),t).parse();
                return n(String(t), t)
            }
            ,
            k.stringify = function(e, n) {
                var t, r = a(n);
                if (b(),
                h("stringify", t = k.Compiler),
                g(e),
                p(t, "compile"))
                    return new t(e,r).compile();
                return t(e, r)
            }
            ,
            k.run = S,
            k.runSync = function(e, n) {
                var t, i;
                return S(e, n, o),
                v("runSync", "run", i),
                t;
                function o(e, n) {
                    i = !0,
                    t = n,
                    r(e)
                }
            }
            ,
            k.process = E,
            k.processSync = function(e) {
                var n, t;
                return b(),
                d("processSync", k.Parser),
                h("processSync", k.Compiler),
                E(n = a(e), i),
                v("processSync", "process", t),
                n;
                function i(e) {
                    t = !0,
                    r(e)
                }
            }
            ,
            k;
            function k() {
                for (var n = e(), r = -1; ++r < t.length; )
                    n.use.apply(null, t[r]);
                return n.data(o(!0, {}, x)),
                n
            }
            function b() {
                var e, r;
                if (n)
                    return k;
                for (; ++y < t.length; )
                    !1 !== (e = t[y])[1] && (!0 === e[1] && (e[1] = void 0),
                    "function" === typeof (r = e[0].apply(k, e.slice(1))) && i.use(r));
                return n = !0,
                y = 1 / 0,
                k
            }
            function w(e) {
                for (var n = -1; ++n < t.length; )
                    if (t[n][0] === e)
                        return t[n]
            }
            function S(e, n, t) {
                if (g(e),
                b(),
                t || "function" !== typeof n || (t = n,
                n = null),
                !t)
                    return new Promise(r);
                function r(r, o) {
                    i.run(e, a(n), (function(n, i, u) {
                        i = i || e,
                        n ? o(n) : r ? r(i) : t(null, i, u)
                    }
                    ))
                }
                r(null, t)
            }
            function E(e, n) {
                if (b(),
                d("process", k.Parser),
                h("process", k.Compiler),
                !n)
                    return new Promise(t);
                function t(t, r) {
                    var i = a(e);
                    f.run(k, {
                        file: i
                    }, (function(e) {
                        e ? r(e) : t ? t(i) : n(null, i)
                    }
                    ))
                }
                t(null, n)
            }
        }().freeze();
        var c = [].slice
          , s = {}.hasOwnProperty
          , f = l().use((function(e, n) {
            n.tree = e.parse(n.file)
        }
        )).use((function(e, n, t) {
            e.run(n.tree, n.file, (function(e, r, i) {
                e ? t(e) : (n.tree = r,
                n.file = i,
                t())
            }
            ))
        }
        )).use((function(e, n) {
            var t = e.stringify(n.tree, n.file);
            void 0 === t || null === t || ("string" === typeof t || i(t) ? ("value"in n.file && (n.file.value = t),
            n.file.contents = t) : n.file.result = t)
        }
        ));
        function p(e, n) {
            return "function" === typeof e && e.prototype && (function(e) {
                var n;
                for (n in e)
                    return !0;
                return !1
            }(e.prototype) || n in e.prototype)
        }
        function d(e, n) {
            if ("function" !== typeof n)
                throw new Error("Cannot `" + e + "` without `Parser`")
        }
        function h(e, n) {
            if ("function" !== typeof n)
                throw new Error("Cannot `" + e + "` without `Compiler`")
        }
        function m(e, n) {
            if (n)
                throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")
        }
        function g(e) {
            if (!e || "string" !== typeof e.type)
                throw new Error("Expected node, got `" + e + "`")
        }
        function v(e, n, t) {
            if (!t)
                throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            if (e)
                throw e
        }
    }
    , function(e, n) {
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = Object.prototype.hasOwnProperty
          , i = Object.prototype.toString
          , o = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , l = function(e) {
            return "function" === typeof Array.isArray ? Array.isArray(e) : "[object Array]" === i.call(e)
        }
          , a = function(e) {
            if (!e || "[object Object]" !== i.call(e))
                return !1;
            var n, t = r.call(e, "constructor"), o = e.constructor && e.constructor.prototype && r.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !t && !o)
                return !1;
            for (n in e)
                ;
            return "undefined" === typeof n || r.call(e, n)
        }
          , c = function(e, n) {
            o && "__proto__" === n.name ? o(e, n.name, {
                enumerable: !0,
                configurable: !0,
                value: n.newValue,
                writable: !0
            }) : e[n.name] = n.newValue
        }
          , s = function(e, n) {
            if ("__proto__" === n) {
                if (!r.call(e, n))
                    return;
                if (u)
                    return u(e, n).value
            }
            return e[n]
        };
        e.exports = function e() {
            var n, t, r, i, o, u, f = arguments[0], p = 1, d = arguments.length, h = !1;
            for ("boolean" === typeof f && (h = f,
            f = arguments[1] || {},
            p = 2),
            (null == f || "object" !== typeof f && "function" !== typeof f) && (f = {}); p < d; ++p)
                if (null != (n = arguments[p]))
                    for (t in n)
                        r = s(f, t),
                        f !== (i = s(n, t)) && (h && i && (a(i) || (o = l(i))) ? (o ? (o = !1,
                        u = r && l(r) ? r : []) : u = r && a(r) ? r : {},
                        c(f, {
                            name: t,
                            newValue: e(h, u, i)
                        })) : "undefined" !== typeof i && c(f, {
                            name: t,
                            newValue: i
                        }));
            return f
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            var n = Object.getPrototypeOf(e);
            return null === n || n === Object.prototype
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(291);
        e.exports = o,
        o.wrap = r;
        var i = [].slice;
        function o() {
            var e = []
              , n = {
                run: function() {
                    var n = -1
                      , t = i.call(arguments, 0, -1)
                      , o = arguments[arguments.length - 1];
                    if ("function" !== typeof o)
                        throw new Error("Expected function as last argument, not " + o);
                    function u(l) {
                        var a = e[++n]
                          , c = i.call(arguments, 0)
                          , s = c.slice(1)
                          , f = t.length
                          , p = -1;
                        if (l)
                            o(l);
                        else {
                            for (; ++p < f; )
                                null !== s[p] && void 0 !== s[p] || (s[p] = t[p]);
                            t = s,
                            a ? r(a, u).apply(null, t) : o.apply(null, [null].concat(t))
                        }
                    }
                    u.apply(null, [null].concat(t))
                },
                use: function(t) {
                    if ("function" !== typeof t)
                        throw new Error("Expected `fn` to be a function, not " + t);
                    return e.push(t),
                    n
                }
            };
            return n
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = [].slice;
        e.exports = function(e, n) {
            var t;
            return function() {
                var n, u = r.call(arguments, 0), l = e.length > u.length;
                l && u.push(i);
                try {
                    n = e.apply(null, u)
                } catch (a) {
                    if (l && t)
                        throw a;
                    return i(a)
                }
                l || (n && "function" === typeof n.then ? n.then(o, i) : n instanceof Error ? i(n) : o(n))
            }
            ;
            function i() {
                t || (t = !0,
                n.apply(null, arguments))
            }
            function o(e) {
                i(null, e)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            var n = this;
            this.Parser = function(t) {
                return r(t, Object.assign({}, n.data("settings"), e, {
                    extensions: n.data("micromarkExtensions") || [],
                    mdastExtensions: n.data("fromMarkdownExtensions") || []
                }))
            }
        }
        ;
        var r = t(293)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = t(294)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n, t) {
            "string" !== typeof n && (t = n,
            n = void 0);
            return function(e) {
                var n = e || {}
                  , t = function(e, n) {
                    var t = -1;
                    for (; ++t < n.length; )
                        d(e, n[t]);
                    return e
                }({
                    transforms: [],
                    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                    enter: {
                        autolink: v(pe),
                        autolinkProtocol: _,
                        autolinkEmail: _,
                        atxHeading: v(ae),
                        blockQuote: v(re),
                        characterEscape: _,
                        characterReference: _,
                        codeFenced: v(ie),
                        codeFencedFenceInfo: x,
                        codeFencedFenceMeta: x,
                        codeIndented: v(ie, x),
                        codeText: v(oe, x),
                        codeTextData: _,
                        data: _,
                        codeFlowValue: _,
                        definition: v(ue),
                        definitionDestinationString: x,
                        definitionLabelString: x,
                        definitionTitleString: x,
                        emphasis: v(le),
                        hardBreakEscape: v(ce),
                        hardBreakTrailing: v(ce),
                        htmlFlow: v(se, x),
                        htmlFlowData: _,
                        htmlText: v(se, x),
                        htmlTextData: _,
                        image: v(fe),
                        label: x,
                        link: v(pe),
                        listItem: v(he),
                        listItemValue: E,
                        listOrdered: v(de, S),
                        listUnordered: v(de),
                        paragraph: v(me),
                        reference: J,
                        referenceString: x,
                        resourceDestinationString: x,
                        resourceTitleString: x,
                        setextHeading: v(ae),
                        strong: v(ge),
                        thematicBreak: v(xe)
                    },
                    exit: {
                        atxHeading: k(),
                        atxHeadingSequence: z,
                        autolink: k(),
                        autolinkEmail: te,
                        autolinkProtocol: ne,
                        blockQuote: k(),
                        characterEscapeValue: R,
                        characterReferenceMarkerHexadecimal: G,
                        characterReferenceMarkerNumeric: G,
                        characterReferenceValue: ee,
                        codeFenced: k(T),
                        codeFencedFence: A,
                        codeFencedFenceInfo: F,
                        codeFencedFenceMeta: C,
                        codeFlowValue: R,
                        codeIndented: k(O),
                        codeText: k(q),
                        codeTextData: R,
                        data: R,
                        definition: k(),
                        definitionDestinationString: I,
                        definitionLabelString: P,
                        definitionTitleString: D,
                        emphasis: k(),
                        hardBreakEscape: k(j),
                        hardBreakTrailing: k(j),
                        htmlFlow: k(N),
                        htmlFlowData: R,
                        htmlText: k(U),
                        htmlTextData: R,
                        image: k(W),
                        label: X,
                        labelText: Q,
                        lineEnding: H,
                        link: k(V),
                        listItem: k(),
                        listOrdered: k(),
                        listUnordered: k(),
                        paragraph: k(),
                        referenceString: Z,
                        resourceDestinationString: K,
                        resourceTitleString: Y,
                        resource: $,
                        setextHeading: k(B),
                        setextHeadingLineSequence: L,
                        setextHeadingText: M,
                        strong: k(),
                        thematicBreak: k()
                    }
                }, n.mdastExtensions || [])
                  , a = {};
                return c;
                function c(e) {
                    for (var n, r = {
                        type: "root",
                        children: []
                    }, u = [], l = [], a = -1, c = {
                        stack: [r],
                        tokenStack: u,
                        config: t,
                        enter: y,
                        exit: b,
                        buffer: x,
                        resume: w,
                        setData: h,
                        getData: m
                    }; ++a < e.length; )
                        "listOrdered" !== e[a][1].type && "listUnordered" !== e[a][1].type || ("enter" === e[a][0] ? l.push(a) : a = s(e, l.pop(a), a));
                    for (a = -1; ++a < e.length; )
                        n = t[e[a][0]],
                        o.call(n, e[a][1].type) && n[e[a][1].type].call(i({
                            sliceSerialize: e[a][2].sliceSerialize
                        }, c), e[a][1]);
                    if (u.length)
                        throw new Error("Cannot close document, a token (`" + u[u.length - 1].type + "`, " + p({
                            start: u[u.length - 1].start,
                            end: u[u.length - 1].end
                        }) + ") is still open");
                    for (r.position = {
                        start: g(e.length ? e[0][1].start : {
                            line: 1,
                            column: 1,
                            offset: 0
                        }),
                        end: g(e.length ? e[e.length - 2][1].end : {
                            line: 1,
                            column: 1,
                            offset: 0
                        })
                    },
                    a = -1; ++a < t.transforms.length; )
                        r = t.transforms[a](r) || r;
                    return r
                }
                function s(e, n, t) {
                    for (var r, i, o, u, l, a, c, s = n - 1, f = -1, p = !1; ++s <= t; )
                        if ("listUnordered" === (l = e[s])[1].type || "listOrdered" === l[1].type || "blockQuote" === l[1].type ? ("enter" === l[0] ? f++ : f--,
                        c = void 0) : "lineEndingBlank" === l[1].type ? "enter" === l[0] && (!r || c || f || a || (a = s),
                        c = void 0) : "linePrefix" === l[1].type || "listItemValue" === l[1].type || "listItemMarker" === l[1].type || "listItemPrefix" === l[1].type || "listItemPrefixWhitespace" === l[1].type || (c = void 0),
                        !f && "enter" === l[0] && "listItemPrefix" === l[1].type || -1 === f && "exit" === l[0] && ("listUnordered" === l[1].type || "listOrdered" === l[1].type)) {
                            if (r) {
                                for (i = s,
                                o = void 0; i--; )
                                    if ("lineEnding" === (u = e[i])[1].type || "lineEndingBlank" === u[1].type) {
                                        if ("exit" === u[0])
                                            continue;
                                        o && (e[o][1].type = "lineEndingBlank",
                                        p = !0),
                                        u[1].type = "lineEnding",
                                        o = i
                                    } else if ("linePrefix" !== u[1].type && "blockQuotePrefix" !== u[1].type && "blockQuotePrefixWhitespace" !== u[1].type && "blockQuoteMarker" !== u[1].type && "listItemIndent" !== u[1].type)
                                        break;
                                a && (!o || a < o) && (r._spread = !0),
                                r.end = g(o ? e[o][1].start : l[1].end),
                                e.splice(o || s, 0, ["exit", r, l[2]]),
                                s++,
                                t++
                            }
                            "listItemPrefix" === l[1].type && (r = {
                                type: "listItem",
                                _spread: !1,
                                start: g(l[1].start)
                            },
                            e.splice(s, 0, ["enter", r, l[2]]),
                            s++,
                            t++,
                            a = void 0,
                            c = !0)
                        }
                    return e[n][1]._spread = p,
                    t
                }
                function h(e, n) {
                    a[e] = n
                }
                function m(e) {
                    return a[e]
                }
                function g(e) {
                    return {
                        line: e.line,
                        column: e.column,
                        offset: e.offset
                    }
                }
                function v(e, n) {
                    return t;
                    function t(t) {
                        y.call(this, e(t), t),
                        n && n.call(this, t)
                    }
                }
                function x() {
                    this.stack.push({
                        type: "fragment",
                        children: []
                    })
                }
                function y(e, n) {
                    return this.stack[this.stack.length - 1].children.push(e),
                    this.stack.push(e),
                    this.tokenStack.push(n),
                    e.position = {
                        start: g(n.start)
                    },
                    e
                }
                function k(e) {
                    return n;
                    function n(n) {
                        e && e.call(this, n),
                        b.call(this, n)
                    }
                }
                function b(e) {
                    var n = this.stack.pop()
                      , t = this.tokenStack.pop();
                    if (!t)
                        throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): it\u2019s not open");
                    if (t.type !== e.type)
                        throw new Error("Cannot close `" + e.type + "` (" + p({
                            start: e.start,
                            end: e.end
                        }) + "): a different token (`" + t.type + "`, " + p({
                            start: t.start,
                            end: t.end
                        }) + ") is open");
                    return n.position.end = g(e.end),
                    n
                }
                function w() {
                    return r(this.stack.pop())
                }
                function S() {
                    h("expectingFirstListItemValue", !0)
                }
                function E(e) {
                    m("expectingFirstListItemValue") && (this.stack[this.stack.length - 2].start = parseInt(this.sliceSerialize(e), 10),
                    h("expectingFirstListItemValue"))
                }
                function F() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].lang = e
                }
                function C() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].meta = e
                }
                function A() {
                    m("flowCodeInside") || (this.buffer(),
                    h("flowCodeInside", !0))
                }
                function T() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                    h("flowCodeInside")
                }
                function O() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }
                function P(e) {
                    var n = this.resume();
                    this.stack[this.stack.length - 1].label = n,
                    this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase()
                }
                function D() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                }
                function I() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                }
                function z(e) {
                    this.stack[this.stack.length - 1].depth || (this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).length)
                }
                function M() {
                    h("setextHeadingSlurpLineEnding", !0)
                }
                function L(e) {
                    this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                }
                function B() {
                    h("setextHeadingSlurpLineEnding")
                }
                function _(e) {
                    var n = this.stack[this.stack.length - 1].children
                      , t = n[n.length - 1];
                    t && "text" === t.type || ((t = ve()).position = {
                        start: g(e.start)
                    },
                    this.stack[this.stack.length - 1].children.push(t)),
                    this.stack.push(t)
                }
                function R(e) {
                    var n = this.stack.pop();
                    n.value += this.sliceSerialize(e),
                    n.position.end = g(e.end)
                }
                function H(e) {
                    var n = this.stack[this.stack.length - 1];
                    if (m("atHardBreak"))
                        return n.children[n.children.length - 1].position.end = g(e.end),
                        void h("atHardBreak");
                    !m("setextHeadingSlurpLineEnding") && t.canContainEols.indexOf(n.type) > -1 && (_.call(this, e),
                    R.call(this, e))
                }
                function j() {
                    h("atHardBreak", !0)
                }
                function N() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }
                function U() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }
                function q() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].value = e
                }
                function V() {
                    var e = this.stack[this.stack.length - 1];
                    m("inReference") ? (e.type += "Reference",
                    e.referenceType = m("referenceType") || "shortcut",
                    delete e.url,
                    delete e.title) : (delete e.identifier,
                    delete e.label,
                    delete e.referenceType),
                    h("referenceType")
                }
                function W() {
                    var e = this.stack[this.stack.length - 1];
                    m("inReference") ? (e.type += "Reference",
                    e.referenceType = m("referenceType") || "shortcut",
                    delete e.url,
                    delete e.title) : (delete e.identifier,
                    delete e.label,
                    delete e.referenceType),
                    h("referenceType")
                }
                function Q(e) {
                    this.stack[this.stack.length - 2].identifier = u(this.sliceSerialize(e)).toLowerCase()
                }
                function X() {
                    var e = this.stack[this.stack.length - 1]
                      , n = this.resume();
                    this.stack[this.stack.length - 1].label = n,
                    h("inReference", !0),
                    "link" === this.stack[this.stack.length - 1].type ? this.stack[this.stack.length - 1].children = e.children : this.stack[this.stack.length - 1].alt = n
                }
                function K() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].url = e
                }
                function Y() {
                    var e = this.resume();
                    this.stack[this.stack.length - 1].title = e
                }
                function $() {
                    h("inReference")
                }
                function J() {
                    h("referenceType", "collapsed")
                }
                function Z(e) {
                    var n = this.resume();
                    this.stack[this.stack.length - 1].label = n,
                    this.stack[this.stack.length - 1].identifier = u(this.sliceSerialize(e)).toLowerCase(),
                    h("referenceType", "full")
                }
                function G(e) {
                    h("characterReferenceType", e.type)
                }
                function ee(e) {
                    var n, t, r = this.sliceSerialize(e), i = m("characterReferenceType");
                    i ? (n = l(r, "characterReferenceMarkerNumeric" === i ? 10 : 16),
                    h("characterReferenceType")) : n = f(r),
                    (t = this.stack.pop()).value += n,
                    t.position.end = g(e.end)
                }
                function ne(e) {
                    R.call(this, e),
                    this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                }
                function te(e) {
                    R.call(this, e),
                    this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                }
                function re() {
                    return {
                        type: "blockquote",
                        children: []
                    }
                }
                function ie() {
                    return {
                        type: "code",
                        lang: null,
                        meta: null,
                        value: ""
                    }
                }
                function oe() {
                    return {
                        type: "inlineCode",
                        value: ""
                    }
                }
                function ue() {
                    return {
                        type: "definition",
                        identifier: "",
                        label: null,
                        title: null,
                        url: ""
                    }
                }
                function le() {
                    return {
                        type: "emphasis",
                        children: []
                    }
                }
                function ae() {
                    return {
                        type: "heading",
                        depth: void 0,
                        children: []
                    }
                }
                function ce() {
                    return {
                        type: "break"
                    }
                }
                function se() {
                    return {
                        type: "html",
                        value: ""
                    }
                }
                function fe() {
                    return {
                        type: "image",
                        title: null,
                        url: "",
                        alt: null
                    }
                }
                function pe() {
                    return {
                        type: "link",
                        title: null,
                        url: "",
                        children: []
                    }
                }
                function de(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }
                function he(e) {
                    return {
                        type: "listItem",
                        spread: e._spread,
                        checked: null,
                        children: []
                    }
                }
                function me() {
                    return {
                        type: "paragraph",
                        children: []
                    }
                }
                function ge() {
                    return {
                        type: "strong",
                        children: []
                    }
                }
                function ve() {
                    return {
                        type: "text",
                        value: ""
                    }
                }
                function xe() {
                    return {
                        type: "thematicBreak"
                    }
                }
            }(t)(s(a(t).document().write(c()(e, n, !0))))
        }
        ;
        var r = t(295)
          , i = t(166)
          , o = t(208)
          , u = t(177)
          , l = t(296)
          , a = t(297)
          , c = t(336)
          , s = t(337)
          , f = t(182)
          , p = t(207);
        function d(e, n) {
            var t, r;
            for (t in n)
                r = o.call(e, t) ? e[t] : e[t] = {},
                "canContainEols" === t || "transforms" === t ? e[t] = [].concat(r, n[t]) : Object.assign(r, n[t])
        }
    }
    , function(e, n, t) {
        "use strict";
        function r(e) {
            return e && (e.value || e.alt || e.title || "children"in e && i(e.children) || "length"in e && i(e)) || ""
        }
        function i(e) {
            for (var n = [], t = -1; ++t < e.length; )
                n[t] = r(e[t]);
            return n.join("")
        }
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(168);
        e.exports = function(e, n) {
            var t = parseInt(e, n);
            return t < 9 || 11 === t || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || 65535 === (65535 & t) || 65534 === (65535 & t) || t > 1114111 ? "\ufffd" : r(t)
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(298)
          , i = t(299)
          , o = t(300)
          , u = t(211)
          , l = t(303)
          , a = t(304)
          , c = t(178)
          , s = t(307);
        e.exports = function(e) {
            var n = {
                defined: [],
                constructs: l([s].concat(c((e || {}).extensions))),
                content: t(r),
                document: t(i),
                flow: t(o),
                string: t(u.string),
                text: t(u.text)
            };
            return n;
            function t(e) {
                return function(t) {
                    return a(n, e, t)
                }
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(152)
          , i = t(153)
          , o = function(e) {
            var n, t = e.attempt(this.parser.constructs.contentInitial, (function(n) {
                if (null === n)
                    return void e.consume(n);
                return e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                i(e, t, "linePrefix")
            }
            ), (function(n) {
                return e.enter("paragraph"),
                o(n)
            }
            ));
            return t;
            function o(t) {
                var r = e.enter("chunkText", {
                    contentType: "text",
                    previous: n
                });
                return n && (n.next = r),
                n = r,
                u(t)
            }
            function u(n) {
                return null === n ? (e.exit("chunkText"),
                e.exit("paragraph"),
                void e.consume(n)) : r(n) ? (e.consume(n),
                e.exit("chunkText"),
                o) : (e.consume(n),
                u)
            }
        };
        n.tokenize = o
    }
    , function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(152)
          , i = t(153)
          , o = t(169)
          , u = function(e) {
            var n, t, i, u = this, c = [], s = 0, f = {
                tokenize: function(e, r) {
                    var i = 0;
                    return n = {},
                    s;
                    function s(r) {
                        return i < c.length ? (u.containerState = c[i][1],
                        e.attempt(c[i][0].continuation, f, p)(r)) : t.currentConstruct && t.currentConstruct.concrete ? (n.flowContinue = !0,
                        m(r)) : (u.interrupt = t.currentConstruct && t.currentConstruct.interruptible,
                        u.containerState = {},
                        e.attempt(l, h, m)(r))
                    }
                    function f(e) {
                        return i++,
                        u.containerState._closeFlow ? h(e) : s(e)
                    }
                    function p(n) {
                        return t.currentConstruct && t.currentConstruct.lazy ? (u.containerState = {},
                        e.attempt(l, h, e.attempt(a, h, e.check(o, h, d)))(n)) : h(n)
                    }
                    function d(e) {
                        return i = c.length,
                        n.lazy = !0,
                        n.flowContinue = !0,
                        m(e)
                    }
                    function h(e) {
                        return n.flowEnd = !0,
                        m(e)
                    }
                    function m(e) {
                        return n.continued = i,
                        u.interrupt = u.containerState = void 0,
                        r(e)
                    }
                },
                partial: !0
            };
            return p;
            function p(n) {
                return s < c.length ? (u.containerState = c[s][1],
                e.attempt(c[s][0].continuation, d, h)(n)) : h(n)
            }
            function d(e) {
                return s++,
                p(e)
            }
            function h(r) {
                return n && n.flowContinue ? g(r) : (u.interrupt = t && t.currentConstruct && t.currentConstruct.interruptible,
                u.containerState = {},
                e.attempt(l, m, g)(r))
            }
            function m(e) {
                return c.push([u.currentConstruct, u.containerState]),
                u.containerState = void 0,
                h(e)
            }
            function g(n) {
                return null === n ? (k(0, !0),
                void e.consume(n)) : (t = t || u.parser.flow(u.now()),
                e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: i,
                    _tokenizer: t
                }),
                v(n))
            }
            function v(n) {
                return null === n ? (y(e.exit("chunkFlow")),
                g(n)) : r(n) ? (e.consume(n),
                y(e.exit("chunkFlow")),
                e.check(f, x)) : (e.consume(n),
                v)
            }
            function x(e) {
                return k(n.continued, n && n.flowEnd),
                s = 0,
                p(e)
            }
            function y(e) {
                i && (i.next = e),
                i = e,
                t.lazy = n && n.lazy,
                t.defineSkip(e.start),
                t.write(u.sliceStream(e))
            }
            function k(n, r) {
                var o = c.length;
                for (t && r && (t.write([null]),
                i = t = void 0); o-- > n; )
                    u.containerState = c[o][1],
                    c[o][0].exit.call(u, e);
                c.length = n
            }
        }
          , l = {
            tokenize: function(e, n, t) {
                return i(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }
        }
          , a = {
            tokenize: function(e, n, t) {
                return i(e, e.lazy(this.parser.constructs.flow, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
            }
        };
        n.tokenize = u
    }
    , function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(301)
          , i = t(153)
          , o = t(169)
          , u = function(e) {
            var n = this
              , t = e.attempt(o, (function(r) {
                if (null === r)
                    return void e.consume(r);
                return e.enter("lineEndingBlank"),
                e.consume(r),
                e.exit("lineEndingBlank"),
                n.currentConstruct = void 0,
                t
            }
            ), e.attempt(this.parser.constructs.flowInitial, u, i(e, e.attempt(this.parser.constructs.flow, u, e.attempt(r, u)), "linePrefix")));
            return t;
            function u(r) {
                if (null !== r)
                    return e.enter("lineEnding"),
                    e.consume(r),
                    e.exit("lineEnding"),
                    n.currentConstruct = void 0,
                    t;
                e.consume(r)
            }
        };
        n.tokenize = u
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(170)
          , o = t(210)
          , u = t(153)
          , l = {
            tokenize: function(e, n) {
                var t;
                return function(n) {
                    return e.enter("content"),
                    t = e.enter("chunkContent", {
                        contentType: "content"
                    }),
                    i(n)
                }
                ;
                function i(n) {
                    return null === n ? o(n) : r(n) ? e.check(a, u, o)(n) : (e.consume(n),
                    i)
                }
                function o(t) {
                    return e.exit("chunkContent"),
                    e.exit("content"),
                    n(t)
                }
                function u(n) {
                    return e.consume(n),
                    e.exit("chunkContent"),
                    t = t.next = e.enter("chunkContent", {
                        contentType: "content",
                        previous: t
                    }),
                    i
                }
            },
            resolve: function(e) {
                return o(e),
                e
            },
            interruptible: !0,
            lazy: !0
        }
          , a = {
            tokenize: function(e, n, t) {
                var o = this;
                return function(n) {
                    return e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    u(e, l, "linePrefix")
                }
                ;
                function l(u) {
                    return null === u || r(u) ? t(u) : o.parser.constructs.disable.null.indexOf("codeIndented") > -1 || i(o.events, "linePrefix") < 4 ? e.interrupt(o.parser.constructs.flow, t, n)(u) : n(u)
                }
            },
            partial: !0
        };
        e.exports = l
    }
    , function(e, n, t) {
        "use strict";
        var r = [].splice;
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(208)
          , i = t(159)
          , o = t(178);
        function u(e, n) {
            var t, i, u, a;
            for (t in n)
                for (a in i = r.call(e, t) ? e[t] : e[t] = {},
                u = n[t])
                    i[a] = l(o(u[a]), r.call(i, a) ? i[a] : [])
        }
        function l(e, n) {
            for (var t = -1, r = []; ++t < e.length; )
                ("after" === e[t].add ? n : r).push(e[t]);
            return i(n, 0, 0, r),
            n
        }
        e.exports = function(e) {
            for (var n = {}, t = -1; ++t < e.length; )
                u(n, e[t]);
            return n
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(166)
          , i = t(152)
          , o = t(179)
          , u = t(159)
          , l = t(178)
          , a = t(180)
          , c = t(305)
          , s = t(163)
          , f = t(306);
        e.exports = function(e, n, t) {
            var p = t ? s(t) : {
                line: 1,
                column: 1,
                offset: 0
            }
              , d = {}
              , h = []
              , m = []
              , g = []
              , v = {
                consume: function(e) {
                    i(e) ? (p.line++,
                    p.column = 1,
                    p.offset += -3 === e ? 2 : 1,
                    A()) : -1 !== e && (p.column++,
                    p.offset++);
                    p._bufferIndex < 0 ? p._index++ : (p._bufferIndex++,
                    p._bufferIndex === m[p._index].length && (p._bufferIndex = -1,
                    p._index++));
                    x.previous = e
                },
                enter: function(e, n) {
                    var t = n || {};
                    return t.type = e,
                    t.start = b(),
                    x.events.push(["enter", t, x]),
                    g.push(t),
                    t
                },
                exit: function(e) {
                    var n = g.pop();
                    return n.end = b(),
                    x.events.push(["exit", n, x]),
                    n
                },
                attempt: F((function(e, n) {
                    C(e, n.from)
                }
                )),
                check: F(E),
                interrupt: F(E, {
                    interrupt: !0
                }),
                lazy: F(E, {
                    lazy: !0
                })
            }
              , x = {
                previous: null,
                events: [],
                parser: e,
                sliceStream: k,
                sliceSerialize: function(e) {
                    return c(k(e))
                },
                now: b,
                defineSkip: function(e) {
                    d[e.line] = e.column,
                    A()
                },
                write: function(e) {
                    if (m = o(m, e),
                    w(),
                    null !== m[m.length - 1])
                        return [];
                    return C(n, 0),
                    x.events = a(h, x.events, x),
                    x.events
                }
            }
              , y = n.tokenize.call(x, v);
            return n.resolveAll && h.push(n),
            p._index = 0,
            p._bufferIndex = -1,
            x;
            function k(e) {
                return f(m, e)
            }
            function b() {
                return s(p)
            }
            function w() {
                for (var e, n; p._index < m.length; )
                    if ("string" === typeof (n = m[p._index]))
                        for (e = p._index,
                        p._bufferIndex < 0 && (p._bufferIndex = 0); p._index === e && p._bufferIndex < n.length; )
                            S(n.charCodeAt(p._bufferIndex));
                    else
                        S(n)
            }
            function S(e) {
                y = y(e)
            }
            function E(e, n) {
                n.restore()
            }
            function F(e, n) {
                return function(t, i, o) {
                    var u, a, c, s;
                    return t.tokenize || "length"in t ? f(l(t)) : function(e) {
                        if (e in t || null in t)
                            return f(t.null ? l(t[e]).concat(l(t.null)) : t[e])(e);
                        return o(e)
                    }
                    ;
                    function f(e) {
                        return u = e,
                        d(e[a = 0])
                    }
                    function d(e) {
                        return function(t) {
                            s = function() {
                                var e = b()
                                  , n = x.previous
                                  , t = x.currentConstruct
                                  , r = x.events.length
                                  , i = Array.from(g);
                                return {
                                    restore: o,
                                    from: r
                                };
                                function o() {
                                    p = e,
                                    x.previous = n,
                                    x.currentConstruct = t,
                                    x.events.length = r,
                                    g = i,
                                    A()
                                }
                            }(),
                            c = e,
                            e.partial || (x.currentConstruct = e);
                            if (e.name && x.parser.constructs.disable.null.indexOf(e.name) > -1)
                                return m();
                            return e.tokenize.call(n ? r({}, x, n) : x, v, h, m)(t)
                        }
                    }
                    function h(n) {
                        return e(c, s),
                        i
                    }
                    function m(e) {
                        return s.restore(),
                        ++a < u.length ? d(u[a]) : o
                    }
                }
            }
            function C(e, n) {
                e.resolveAll && h.indexOf(e) < 0 && h.push(e),
                e.resolve && u(x.events, n, x.events.length - n, e.resolve(x.events.slice(n), x)),
                e.resolveTo && (x.events = e.resolveTo(x.events, x))
            }
            function A() {
                p.line in d && p.column < 2 && (p.column = d[p.line],
                p.offset += d[p.line] - 1)
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(168);
        e.exports = function(e) {
            for (var n, t, i, o = -1, u = []; ++o < e.length; ) {
                if ("string" === typeof (n = e[o]))
                    t = n;
                else if (-5 === n)
                    t = "\r";
                else if (-4 === n)
                    t = "\n";
                else if (-3 === n)
                    t = "\r\n";
                else if (-2 === n)
                    t = "\t";
                else if (-1 === n) {
                    if (i)
                        continue;
                    t = " "
                } else
                    t = r(n);
                i = -2 === n,
                u.push(t)
            }
            return u.join("")
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, r = n.start._index, i = n.start._bufferIndex, o = n.end._index, u = n.end._bufferIndex;
            return r === o ? t = [e[r].slice(i, u)] : (t = e.slice(r, o),
            i > -1 && (t[0] = t[0].slice(i)),
            u > 0 && t.push(e[o].slice(0, u))),
            t
        }
    }
    , function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(211)
          , i = t(308)
          , o = t(314)
          , u = t(316)
          , l = t(317)
          , a = t(319)
          , c = t(321)
          , s = t(322)
          , f = t(323)
          , p = t(324)
          , d = t(325)
          , h = t(326)
          , m = t(327)
          , g = t(330)
          , v = t(183)
          , x = t(331)
          , y = t(332)
          , k = t(333)
          , b = t(334)
          , w = t(335)
          , S = t(218)
          , E = {
            42: b,
            43: b,
            45: b,
            48: b,
            49: b,
            50: b,
            51: b,
            52: b,
            53: b,
            54: b,
            55: b,
            56: b,
            57: b,
            62: u
        }
          , F = {
            91: p
        }
          , C = {
            "-2": s,
            "-1": s,
            32: s
        }
          , A = {
            35: h,
            42: S,
            45: [w, S],
            60: m,
            61: w,
            95: S,
            96: c,
            126: c
        }
          , T = {
            38: a,
            92: l
        }
          , O = {
            "-5": k,
            "-4": k,
            "-3": k,
            33: x,
            38: a,
            42: i,
            60: [o, g],
            91: y,
            92: [d, l],
            93: v,
            95: i,
            96: f
        }
          , P = {
            null: [i, r.resolver]
        };
        n.contentInitial = F,
        n.disable = {
            null: []
        },
        n.document = E,
        n.flow = A,
        n.flowInitial = C,
        n.insideSpan = P,
        n.string = T,
        n.text = O
    }
    , function(e, n, t) {
        "use strict";
        var r = t(179)
          , i = t(159)
          , o = t(309)
          , u = t(313)
          , l = t(180)
          , a = t(163)
          , c = {
            name: "attention",
            tokenize: function(e, n) {
                var t, r = o(this.previous);
                return function(n) {
                    return e.enter("attentionSequence"),
                    t = n,
                    i(n)
                }
                ;
                function i(u) {
                    var l, a, c, s;
                    return u === t ? (e.consume(u),
                    i) : (l = e.exit("attentionSequence"),
                    c = !(a = o(u)) || 2 === a && r,
                    s = !r || 2 === r && a,
                    l._open = 42 === t ? c : c && (r || !s),
                    l._close = 42 === t ? s : s && (a || !c),
                    n(u))
                }
            },
            resolveAll: function(e, n) {
                var t, o, c, s, f, p, d, h, m = -1;
                for (; ++m < e.length; )
                    if ("enter" === e[m][0] && "attentionSequence" === e[m][1].type && e[m][1]._close)
                        for (t = m; t--; )
                            if ("exit" === e[t][0] && "attentionSequence" === e[t][1].type && e[t][1]._open && n.sliceSerialize(e[t][1]).charCodeAt(0) === n.sliceSerialize(e[m][1]).charCodeAt(0)) {
                                if ((e[t][1]._close || e[m][1]._open) && (e[m][1].end.offset - e[m][1].start.offset) % 3 && !((e[t][1].end.offset - e[t][1].start.offset + e[m][1].end.offset - e[m][1].start.offset) % 3))
                                    continue;
                                p = e[t][1].end.offset - e[t][1].start.offset > 1 && e[m][1].end.offset - e[m][1].start.offset > 1 ? 2 : 1,
                                s = {
                                    type: p > 1 ? "strongSequence" : "emphasisSequence",
                                    start: u(a(e[t][1].end), -p),
                                    end: a(e[t][1].end)
                                },
                                f = {
                                    type: p > 1 ? "strongSequence" : "emphasisSequence",
                                    start: a(e[m][1].start),
                                    end: u(a(e[m][1].start), p)
                                },
                                c = {
                                    type: p > 1 ? "strongText" : "emphasisText",
                                    start: a(e[t][1].end),
                                    end: a(e[m][1].start)
                                },
                                o = {
                                    type: p > 1 ? "strong" : "emphasis",
                                    start: a(s.start),
                                    end: a(f.end)
                                },
                                e[t][1].end = a(s.start),
                                e[m][1].start = a(f.end),
                                d = [],
                                e[t][1].end.offset - e[t][1].start.offset && (d = r(d, [["enter", e[t][1], n], ["exit", e[t][1], n]])),
                                d = r(d, [["enter", o, n], ["enter", s, n], ["exit", s, n], ["enter", c, n]]),
                                d = r(d, l(n.parser.constructs.insideSpan.null, e.slice(t + 1, m), n)),
                                d = r(d, [["exit", c, n], ["enter", f, n], ["exit", f, n], ["exit", o, n]]),
                                e[m][1].end.offset - e[m][1].start.offset ? (h = 2,
                                d = r(d, [["enter", e[m][1], n], ["exit", e[m][1], n]])) : h = 0,
                                i(e, t - 1, m - t + 3, d),
                                m = t + d.length - h - 2;
                                break
                            }
                m = -1;
                for (; ++m < e.length; )
                    "attentionSequence" === e[m][1].type && (e[m][1].type = "data");
                return e
            }
        };
        e.exports = c
    }
    , function(e, n, t) {
        "use strict";
        var r = t(160)
          , i = t(310)
          , o = t(312);
        e.exports = function(e) {
            return null === e || r(e) || o(e) ? 1 : i(e) ? 2 : void 0
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(311)
          , i = t(161)(r);
        e.exports = i
    }
    , function(e, n, t) {
        "use strict";
        e.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/\s/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e.column += n,
            e.offset += n,
            e._bufferIndex += n,
            e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(181)
          , i = t(171)
          , o = t(315)
          , u = t(212)
          , l = {
            name: "autolink",
            tokenize: function(e, n, t) {
                var l = 1;
                return function(n) {
                    return e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(n),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    a
                }
                ;
                function a(n) {
                    return r(n) ? (e.consume(n),
                    c) : o(n) ? p(n) : t(n)
                }
                function c(e) {
                    return 43 === e || 45 === e || 46 === e || i(e) ? s(e) : p(e)
                }
                function s(n) {
                    return 58 === n ? (e.consume(n),
                    f) : (43 === n || 45 === n || 46 === n || i(n)) && l++ < 32 ? (e.consume(n),
                    s) : p(n)
                }
                function f(n) {
                    return 62 === n ? (e.exit("autolinkProtocol"),
                    g(n)) : 32 === n || 60 === n || u(n) ? t(n) : (e.consume(n),
                    f)
                }
                function p(n) {
                    return 64 === n ? (e.consume(n),
                    l = 0,
                    d) : o(n) ? (e.consume(n),
                    p) : t(n)
                }
                function d(e) {
                    return i(e) ? h(e) : t(e)
                }
                function h(n) {
                    return 46 === n ? (e.consume(n),
                    l = 0,
                    d) : 62 === n ? (e.exit("autolinkProtocol").type = "autolinkEmail",
                    g(n)) : m(n)
                }
                function m(n) {
                    return (45 === n || i(n)) && l++ < 63 ? (e.consume(n),
                    45 === n ? m : h) : t(n)
                }
                function g(t) {
                    return e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.exit("autolink"),
                    n
                }
            }
        };
        e.exports = l
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/[#-'*+\--9=?A-Z^-~]/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(158)
          , i = t(153)
          , o = {
            name: "blockQuote",
            tokenize: function(e, n, t) {
                var i = this;
                return function(n) {
                    if (62 === n)
                        return i.containerState.open || (e.enter("blockQuote", {
                            _container: !0
                        }),
                        i.containerState.open = !0),
                        e.enter("blockQuotePrefix"),
                        e.enter("blockQuoteMarker"),
                        e.consume(n),
                        e.exit("blockQuoteMarker"),
                        o;
                    return t(n)
                }
                ;
                function o(t) {
                    return r(t) ? (e.enter("blockQuotePrefixWhitespace"),
                    e.consume(t),
                    e.exit("blockQuotePrefixWhitespace"),
                    e.exit("blockQuotePrefix"),
                    n) : (e.exit("blockQuotePrefix"),
                    n(t))
                }
            },
            continuation: {
                tokenize: function(e, n, t) {
                    return i(e, e.attempt(o, n, t), "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                }
            },
            exit: function(e) {
                e.exit("blockQuote")
            }
        };
        e.exports = o
    }
    , function(e, n, t) {
        "use strict";
        var r = t(318)
          , i = {
            name: "characterEscape",
            tokenize: function(e, n, t) {
                return function(n) {
                    return e.enter("characterEscape"),
                    e.enter("escapeMarker"),
                    e.consume(n),
                    e.exit("escapeMarker"),
                    i
                }
                ;
                function i(i) {
                    return r(i) ? (e.enter("characterEscapeValue"),
                    e.consume(i),
                    e.exit("characterEscapeValue"),
                    e.exit("characterEscape"),
                    n) : t(i)
                }
            }
        };
        e.exports = i
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/[!-/:-@[-`{-~]/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(182)
          , i = t(171)
          , o = t(213)
          , u = t(320);
        function l(e) {
            return e && "object" === typeof e && "default"in e ? e : {
                default: e
            }
        }
        var a = l(r)
          , c = {
            name: "characterReference",
            tokenize: function(e, n, t) {
                var r, l, c = this, s = 0;
                return function(n) {
                    return e.enter("characterReference"),
                    e.enter("characterReferenceMarker"),
                    e.consume(n),
                    e.exit("characterReferenceMarker"),
                    f
                }
                ;
                function f(n) {
                    return 35 === n ? (e.enter("characterReferenceMarkerNumeric"),
                    e.consume(n),
                    e.exit("characterReferenceMarkerNumeric"),
                    p) : (e.enter("characterReferenceValue"),
                    r = 31,
                    l = i,
                    d(n))
                }
                function p(n) {
                    return 88 === n || 120 === n ? (e.enter("characterReferenceMarkerHexadecimal"),
                    e.consume(n),
                    e.exit("characterReferenceMarkerHexadecimal"),
                    e.enter("characterReferenceValue"),
                    r = 6,
                    l = u,
                    d) : (e.enter("characterReferenceValue"),
                    r = 7,
                    l = o,
                    d(n))
                }
                function d(o) {
                    var u;
                    return 59 === o && s ? (u = e.exit("characterReferenceValue"),
                    l !== i || a.default(c.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"),
                    e.consume(o),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    n) : t(o)) : l(o) && s++ < r ? (e.consume(o),
                    d) : t(o)
                }
            }
        };
        e.exports = c
    }
    , function(e, n, t) {
        "use strict";
        var r = t(161)(/[\dA-Fa-f]/);
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(160)
          , o = t(170)
          , u = t(153)
          , l = {
            name: "codeFenced",
            tokenize: function(e, n, t) {
                var l, a = this, c = {
                    tokenize: function(e, n, t) {
                        var i = 0;
                        return u(e, o, "linePrefix", this.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4);
                        function o(n) {
                            return e.enter("codeFencedFence"),
                            e.enter("codeFencedFenceSequence"),
                            a(n)
                        }
                        function a(n) {
                            return n === l ? (e.consume(n),
                            i++,
                            a) : i < f ? t(n) : (e.exit("codeFencedFenceSequence"),
                            u(e, c, "whitespace")(n))
                        }
                        function c(i) {
                            return null === i || r(i) ? (e.exit("codeFencedFence"),
                            n(i)) : t(i)
                        }
                    },
                    partial: !0
                }, s = o(this.events, "linePrefix"), f = 0;
                return function(n) {
                    return e.enter("codeFenced"),
                    e.enter("codeFencedFence"),
                    e.enter("codeFencedFenceSequence"),
                    l = n,
                    p(n)
                }
                ;
                function p(n) {
                    return n === l ? (e.consume(n),
                    f++,
                    p) : (e.exit("codeFencedFenceSequence"),
                    f < 3 ? t(n) : u(e, d, "whitespace")(n))
                }
                function d(n) {
                    return null === n || r(n) ? v(n) : (e.enter("codeFencedFenceInfo"),
                    e.enter("chunkString", {
                        contentType: "string"
                    }),
                    h(n))
                }
                function h(n) {
                    return null === n || i(n) ? (e.exit("chunkString"),
                    e.exit("codeFencedFenceInfo"),
                    u(e, m, "whitespace")(n)) : 96 === n && n === l ? t(n) : (e.consume(n),
                    h)
                }
                function m(n) {
                    return null === n || r(n) ? v(n) : (e.enter("codeFencedFenceMeta"),
                    e.enter("chunkString", {
                        contentType: "string"
                    }),
                    g(n))
                }
                function g(n) {
                    return null === n || r(n) ? (e.exit("chunkString"),
                    e.exit("codeFencedFenceMeta"),
                    v(n)) : 96 === n && n === l ? t(n) : (e.consume(n),
                    g)
                }
                function v(t) {
                    return e.exit("codeFencedFence"),
                    a.interrupt ? n(t) : x(t)
                }
                function x(n) {
                    return null === n ? k(n) : r(n) ? (e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    e.attempt(c, k, s ? u(e, x, "linePrefix", s + 1) : x)) : (e.enter("codeFlowValue"),
                    y(n))
                }
                function y(n) {
                    return null === n || r(n) ? (e.exit("codeFlowValue"),
                    x(n)) : (e.consume(n),
                    y)
                }
                function k(t) {
                    return e.exit("codeFenced"),
                    n(t)
                }
            },
            concrete: !0
        };
        e.exports = l
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(159)
          , o = t(170)
          , u = t(153)
          , l = {
            name: "codeIndented",
            tokenize: function(e, n, t) {
                return e.attempt(a, i, t);
                function i(t) {
                    return null === t ? n(t) : r(t) ? e.attempt(a, i, n)(t) : (e.enter("codeFlowValue"),
                    o(t))
                }
                function o(n) {
                    return null === n || r(n) ? (e.exit("codeFlowValue"),
                    i(n)) : (e.consume(n),
                    o)
                }
            },
            resolve: function(e, n) {
                var t = {
                    type: "codeIndented",
                    start: e[0][1].start,
                    end: e[e.length - 1][1].end
                };
                return i(e, 0, 0, [["enter", t, n]]),
                i(e, e.length, 0, [["exit", t, n]]),
                e
            }
        }
          , a = {
            tokenize: function(e, n, t) {
                var i = this;
                return u(e, (function l(a) {
                    if (r(a))
                        return e.enter("lineEnding"),
                        e.consume(a),
                        e.exit("lineEnding"),
                        u(e, l, "linePrefix", 5);
                    return o(i.events, "linePrefix") < 4 ? t(a) : n(a)
                }
                ), "linePrefix", 5)
            },
            partial: !0
        };
        e.exports = l
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = {
            name: "codeText",
            tokenize: function(e, n, t) {
                var i, o, u = 0;
                return function(n) {
                    return e.enter("codeText"),
                    e.enter("codeTextSequence"),
                    l(n)
                }
                ;
                function l(n) {
                    return 96 === n ? (e.consume(n),
                    u++,
                    l) : (e.exit("codeTextSequence"),
                    a(n))
                }
                function a(n) {
                    return null === n ? t(n) : 96 === n ? (o = e.enter("codeTextSequence"),
                    i = 0,
                    s(n)) : 32 === n ? (e.enter("space"),
                    e.consume(n),
                    e.exit("space"),
                    a) : r(n) ? (e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    a) : (e.enter("codeTextData"),
                    c(n))
                }
                function c(n) {
                    return null === n || 32 === n || 96 === n || r(n) ? (e.exit("codeTextData"),
                    a(n)) : (e.consume(n),
                    c)
                }
                function s(t) {
                    return 96 === t ? (e.consume(t),
                    i++,
                    s) : i === u ? (e.exit("codeTextSequence"),
                    e.exit("codeText"),
                    n(t)) : (o.type = "codeTextData",
                    c(t))
                }
            },
            resolve: function(e) {
                var n, t, r = e.length - 4, i = 3;
                if (("lineEnding" === e[i][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type))
                    for (n = i; ++n < r; )
                        if ("codeTextData" === e[n][1].type) {
                            e[r][1].type = e[i][1].type = "codeTextPadding",
                            i += 2,
                            r -= 2;
                            break
                        }
                n = i - 1,
                r++;
                for (; ++n <= r; )
                    void 0 === t ? n !== r && "lineEnding" !== e[n][1].type && (t = n) : n !== r && "lineEnding" !== e[n][1].type || (e[t][1].type = "codeTextData",
                    n !== t + 2 && (e[t][1].end = e[n - 1][1].end,
                    e.splice(t + 2, n - t - 2),
                    r -= n - t - 2,
                    n = t + 2),
                    t = void 0);
                return e
            },
            previous: function(e) {
                return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
            }
        };
        e.exports = i
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(160)
          , o = t(177)
          , u = t(214)
          , l = t(215)
          , a = t(153)
          , c = t(216)
          , s = t(217)
          , f = {
            name: "definition",
            tokenize: function(e, n, t) {
                var i, s = this;
                return function(n) {
                    return e.enter("definition"),
                    l.call(s, e, f, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n)
                }
                ;
                function f(n) {
                    return i = o(s.sliceSerialize(s.events[s.events.length - 1][1]).slice(1, -1)),
                    58 === n ? (e.enter("definitionMarker"),
                    e.consume(n),
                    e.exit("definitionMarker"),
                    c(e, u(e, e.attempt(p, a(e, d, "whitespace"), a(e, d, "whitespace")), t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : t(n)
                }
                function d(o) {
                    return null === o || r(o) ? (e.exit("definition"),
                    s.parser.defined.indexOf(i) < 0 && s.parser.defined.push(i),
                    n(o)) : t(o)
                }
            }
        }
          , p = {
            tokenize: function(e, n, t) {
                return function(n) {
                    return i(n) ? c(e, o)(n) : t(n)
                }
                ;
                function o(n) {
                    return 34 === n || 39 === n || 40 === n ? s(e, a(e, u, "whitespace"), t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(n) : t(n)
                }
                function u(e) {
                    return null === e || r(e) ? n(e) : t(e)
                }
            },
            partial: !0
        };
        e.exports = f
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = {
            name: "hardBreakEscape",
            tokenize: function(e, n, t) {
                return function(n) {
                    return e.enter("hardBreakEscape"),
                    e.enter("escapeMarker"),
                    e.consume(n),
                    i
                }
                ;
                function i(i) {
                    return r(i) ? (e.exit("escapeMarker"),
                    e.exit("hardBreakEscape"),
                    n(i)) : t(i)
                }
            }
        };
        e.exports = i
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(160)
          , o = t(158)
          , u = t(159)
          , l = t(153)
          , a = {
            name: "headingAtx",
            tokenize: function(e, n, t) {
                var u = this
                  , a = 0;
                return function(n) {
                    return e.enter("atxHeading"),
                    e.enter("atxHeadingSequence"),
                    c(n)
                }
                ;
                function c(r) {
                    return 35 === r && a++ < 6 ? (e.consume(r),
                    c) : null === r || i(r) ? (e.exit("atxHeadingSequence"),
                    u.interrupt ? n(r) : s(r)) : t(r)
                }
                function s(t) {
                    return 35 === t ? (e.enter("atxHeadingSequence"),
                    f(t)) : null === t || r(t) ? (e.exit("atxHeading"),
                    n(t)) : o(t) ? l(e, s, "whitespace")(t) : (e.enter("atxHeadingText"),
                    p(t))
                }
                function f(n) {
                    return 35 === n ? (e.consume(n),
                    f) : (e.exit("atxHeadingSequence"),
                    s(n))
                }
                function p(n) {
                    return null === n || 35 === n || i(n) ? (e.exit("atxHeadingText"),
                    s(n)) : (e.consume(n),
                    p)
                }
            },
            resolve: function(e, n) {
                var t, r, i = e.length - 2, o = 3;
                "whitespace" === e[o][1].type && (o += 2);
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
                "atxHeadingSequence" === e[i][1].type && (o === i - 1 || i - 4 > o && "whitespace" === e[i - 2][1].type) && (i -= o + 1 === i ? 2 : 4);
                i > o && (t = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end
                },
                r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text"
                },
                u(e, o, i - o + 1, [["enter", t, n], ["enter", r, n], ["exit", r, n], ["exit", t, n]]));
                return e
            }
        };
        e.exports = a
    }
    , function(e, n, t) {
        "use strict";
        var r = t(181)
          , i = t(171)
          , o = t(152)
          , u = t(160)
          , l = t(158)
          , a = t(168)
          , c = t(328)
          , s = t(329)
          , f = t(169)
          , p = {
            name: "htmlFlow",
            tokenize: function(e, n, t) {
                var f, p, h, m, g, v = this;
                return function(n) {
                    return e.enter("htmlFlow"),
                    e.enter("htmlFlowData"),
                    e.consume(n),
                    x
                }
                ;
                function x(i) {
                    return 33 === i ? (e.consume(i),
                    y) : 47 === i ? (e.consume(i),
                    w) : 63 === i ? (e.consume(i),
                    f = 3,
                    v.interrupt ? n : U) : r(i) ? (e.consume(i),
                    h = a(i),
                    p = !0,
                    S) : t(i)
                }
                function y(i) {
                    return 45 === i ? (e.consume(i),
                    f = 2,
                    k) : 91 === i ? (e.consume(i),
                    f = 5,
                    h = "CDATA[",
                    m = 0,
                    b) : r(i) ? (e.consume(i),
                    f = 4,
                    v.interrupt ? n : U) : t(i)
                }
                function k(r) {
                    return 45 === r ? (e.consume(r),
                    v.interrupt ? n : U) : t(r)
                }
                function b(r) {
                    return r === h.charCodeAt(m++) ? (e.consume(r),
                    m === h.length ? v.interrupt ? n : L : b) : t(r)
                }
                function w(n) {
                    return r(n) ? (e.consume(n),
                    h = a(n),
                    S) : t(n)
                }
                function S(r) {
                    return null === r || 47 === r || 62 === r || u(r) ? 47 !== r && p && s.indexOf(h.toLowerCase()) > -1 ? (f = 1,
                    v.interrupt ? n(r) : L(r)) : c.indexOf(h.toLowerCase()) > -1 ? (f = 6,
                    47 === r ? (e.consume(r),
                    E) : v.interrupt ? n(r) : L(r)) : (f = 7,
                    v.interrupt ? t(r) : p ? C(r) : F(r)) : 45 === r || i(r) ? (e.consume(r),
                    h += a(r),
                    S) : t(r)
                }
                function E(r) {
                    return 62 === r ? (e.consume(r),
                    v.interrupt ? n : L) : t(r)
                }
                function F(n) {
                    return l(n) ? (e.consume(n),
                    F) : z(n)
                }
                function C(n) {
                    return 47 === n ? (e.consume(n),
                    z) : 58 === n || 95 === n || r(n) ? (e.consume(n),
                    A) : l(n) ? (e.consume(n),
                    C) : z(n)
                }
                function A(n) {
                    return 45 === n || 46 === n || 58 === n || 95 === n || i(n) ? (e.consume(n),
                    A) : T(n)
                }
                function T(n) {
                    return 61 === n ? (e.consume(n),
                    O) : l(n) ? (e.consume(n),
                    T) : C(n)
                }
                function O(n) {
                    return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n),
                    g = n,
                    P) : l(n) ? (e.consume(n),
                    O) : (g = void 0,
                    D(n))
                }
                function P(n) {
                    return n === g ? (e.consume(n),
                    I) : null === n || o(n) ? t(n) : (e.consume(n),
                    P)
                }
                function D(n) {
                    return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || u(n) ? T(n) : (e.consume(n),
                    D)
                }
                function I(e) {
                    return 47 === e || 62 === e || l(e) ? C(e) : t(e)
                }
                function z(n) {
                    return 62 === n ? (e.consume(n),
                    M) : t(n)
                }
                function M(n) {
                    return l(n) ? (e.consume(n),
                    M) : null === n || o(n) ? L(n) : t(n)
                }
                function L(n) {
                    return 45 === n && 2 === f ? (e.consume(n),
                    R) : 60 === n && 1 === f ? (e.consume(n),
                    H) : 62 === n && 4 === f ? (e.consume(n),
                    q) : 63 === n && 3 === f ? (e.consume(n),
                    U) : 93 === n && 5 === f ? (e.consume(n),
                    N) : !o(n) || 6 !== f && 7 !== f ? null === n || o(n) ? B(n) : (e.consume(n),
                    L) : e.check(d, q, B)(n)
                }
                function B(n) {
                    return e.exit("htmlFlowData"),
                    _(n)
                }
                function _(n) {
                    return null === n ? V(n) : o(n) ? (e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    _) : (e.enter("htmlFlowData"),
                    L(n))
                }
                function R(n) {
                    return 45 === n ? (e.consume(n),
                    U) : L(n)
                }
                function H(n) {
                    return 47 === n ? (e.consume(n),
                    h = "",
                    j) : L(n)
                }
                function j(n) {
                    return 62 === n && s.indexOf(h.toLowerCase()) > -1 ? (e.consume(n),
                    q) : r(n) && h.length < 8 ? (e.consume(n),
                    h += a(n),
                    j) : L(n)
                }
                function N(n) {
                    return 93 === n ? (e.consume(n),
                    U) : L(n)
                }
                function U(n) {
                    return 62 === n ? (e.consume(n),
                    q) : L(n)
                }
                function q(n) {
                    return null === n || o(n) ? (e.exit("htmlFlowData"),
                    V(n)) : (e.consume(n),
                    q)
                }
                function V(t) {
                    return e.exit("htmlFlow"),
                    n(t)
                }
            },
            resolveTo: function(e) {
                var n = e.length;
                for (; n-- && ("enter" !== e[n][0] || "htmlFlow" !== e[n][1].type); )
                    ;
                n > 1 && "linePrefix" === e[n - 2][1].type && (e[n][1].start = e[n - 2][1].start,
                e[n + 1][1].start = e[n - 2][1].start,
                e.splice(n - 2, 2));
                return e
            },
            concrete: !0
        }
          , d = {
            tokenize: function(e, n, t) {
                return function(r) {
                    return e.exit("htmlFlowData"),
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    e.attempt(f, n, t)
                }
            },
            partial: !0
        };
        e.exports = p
    }
    , function(e, n, t) {
        "use strict";
        e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
    }
    , function(e, n, t) {
        "use strict";
        e.exports = ["pre", "script", "style", "textarea"]
    }
    , function(e, n, t) {
        "use strict";
        var r = t(181)
          , i = t(171)
          , o = t(152)
          , u = t(160)
          , l = t(158)
          , a = t(153)
          , c = {
            name: "htmlText",
            tokenize: function(e, n, t) {
                var c, s, f, p, d = this;
                return function(n) {
                    return e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(n),
                    h
                }
                ;
                function h(n) {
                    return 33 === n ? (e.consume(n),
                    m) : 47 === n ? (e.consume(n),
                    T) : 63 === n ? (e.consume(n),
                    C) : r(n) ? (e.consume(n),
                    D) : t(n)
                }
                function m(n) {
                    return 45 === n ? (e.consume(n),
                    g) : 91 === n ? (e.consume(n),
                    s = "CDATA[",
                    f = 0,
                    b) : r(n) ? (e.consume(n),
                    F) : t(n)
                }
                function g(n) {
                    return 45 === n ? (e.consume(n),
                    v) : t(n)
                }
                function v(n) {
                    return null === n || 62 === n ? t(n) : 45 === n ? (e.consume(n),
                    x) : y(n)
                }
                function x(e) {
                    return null === e || 62 === e ? t(e) : y(e)
                }
                function y(n) {
                    return null === n ? t(n) : 45 === n ? (e.consume(n),
                    k) : o(n) ? (p = y,
                    H(n)) : (e.consume(n),
                    y)
                }
                function k(n) {
                    return 45 === n ? (e.consume(n),
                    N) : y(n)
                }
                function b(n) {
                    return n === s.charCodeAt(f++) ? (e.consume(n),
                    f === s.length ? w : b) : t(n)
                }
                function w(n) {
                    return null === n ? t(n) : 93 === n ? (e.consume(n),
                    S) : o(n) ? (p = w,
                    H(n)) : (e.consume(n),
                    w)
                }
                function S(n) {
                    return 93 === n ? (e.consume(n),
                    E) : w(n)
                }
                function E(n) {
                    return 62 === n ? N(n) : 93 === n ? (e.consume(n),
                    E) : w(n)
                }
                function F(n) {
                    return null === n || 62 === n ? N(n) : o(n) ? (p = F,
                    H(n)) : (e.consume(n),
                    F)
                }
                function C(n) {
                    return null === n ? t(n) : 63 === n ? (e.consume(n),
                    A) : o(n) ? (p = C,
                    H(n)) : (e.consume(n),
                    C)
                }
                function A(e) {
                    return 62 === e ? N(e) : C(e)
                }
                function T(n) {
                    return r(n) ? (e.consume(n),
                    O) : t(n)
                }
                function O(n) {
                    return 45 === n || i(n) ? (e.consume(n),
                    O) : P(n)
                }
                function P(n) {
                    return o(n) ? (p = P,
                    H(n)) : l(n) ? (e.consume(n),
                    P) : N(n)
                }
                function D(n) {
                    return 45 === n || i(n) ? (e.consume(n),
                    D) : 47 === n || 62 === n || u(n) ? I(n) : t(n)
                }
                function I(n) {
                    return 47 === n ? (e.consume(n),
                    N) : 58 === n || 95 === n || r(n) ? (e.consume(n),
                    z) : o(n) ? (p = I,
                    H(n)) : l(n) ? (e.consume(n),
                    I) : N(n)
                }
                function z(n) {
                    return 45 === n || 46 === n || 58 === n || 95 === n || i(n) ? (e.consume(n),
                    z) : M(n)
                }
                function M(n) {
                    return 61 === n ? (e.consume(n),
                    L) : o(n) ? (p = M,
                    H(n)) : l(n) ? (e.consume(n),
                    M) : I(n)
                }
                function L(n) {
                    return null === n || 60 === n || 61 === n || 62 === n || 96 === n ? t(n) : 34 === n || 39 === n ? (e.consume(n),
                    c = n,
                    B) : o(n) ? (p = L,
                    H(n)) : l(n) ? (e.consume(n),
                    L) : (e.consume(n),
                    c = void 0,
                    R)
                }
                function B(n) {
                    return n === c ? (e.consume(n),
                    _) : null === n ? t(n) : o(n) ? (p = B,
                    H(n)) : (e.consume(n),
                    B)
                }
                function _(e) {
                    return 62 === e || 47 === e || u(e) ? I(e) : t(e)
                }
                function R(n) {
                    return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 96 === n ? t(n) : 62 === n || u(n) ? I(n) : (e.consume(n),
                    R)
                }
                function H(n) {
                    return e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    a(e, j, "linePrefix", d.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)
                }
                function j(n) {
                    return e.enter("htmlTextData"),
                    p(n)
                }
                function N(r) {
                    return 62 === r ? (e.consume(r),
                    e.exit("htmlTextData"),
                    e.exit("htmlText"),
                    n) : t(r)
                }
            }
        };
        e.exports = c
    }
    , function(e, n, t) {
        "use strict";
        var r = {
            name: "labelStartImage",
            tokenize: function(e, n, t) {
                var r = this;
                return function(n) {
                    return e.enter("labelImage"),
                    e.enter("labelImageMarker"),
                    e.consume(n),
                    e.exit("labelImageMarker"),
                    i
                }
                ;
                function i(n) {
                    return 91 === n ? (e.enter("labelMarker"),
                    e.consume(n),
                    e.exit("labelMarker"),
                    e.exit("labelImage"),
                    o) : t(n)
                }
                function o(e) {
                    return 94 === e && "_hiddenFootnoteSupport"in r.parser.constructs ? t(e) : n(e)
                }
            },
            resolveAll: t(183).resolveAll
        };
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = {
            name: "labelStartLink",
            tokenize: function(e, n, t) {
                var r = this;
                return function(n) {
                    return e.enter("labelLink"),
                    e.enter("labelMarker"),
                    e.consume(n),
                    e.exit("labelMarker"),
                    e.exit("labelLink"),
                    i
                }
                ;
                function i(e) {
                    return 94 === e && "_hiddenFootnoteSupport"in r.parser.constructs ? t(e) : n(e)
                }
            },
            resolveAll: t(183).resolveAll
        };
        e.exports = r
    }
    , function(e, n, t) {
        "use strict";
        var r = t(153)
          , i = {
            name: "lineEnding",
            tokenize: function(e, n) {
                return function(t) {
                    return e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    r(e, n, "linePrefix")
                }
            }
        };
        e.exports = i
    }
    , function(e, n, t) {
        "use strict";
        var r = t(213)
          , i = t(158)
          , o = t(170)
          , u = t(209)
          , l = t(153)
          , a = t(169)
          , c = t(218)
          , s = {
            name: "list",
            tokenize: function(e, n, t) {
                var l = this
                  , s = o(l.events, "linePrefix")
                  , p = 0;
                return function(n) {
                    var i = l.containerState.type || (42 === n || 43 === n || 45 === n ? "listUnordered" : "listOrdered");
                    if ("listUnordered" === i ? !l.containerState.marker || n === l.containerState.marker : r(n)) {
                        if (l.containerState.type || (l.containerState.type = i,
                        e.enter(i, {
                            _container: !0
                        })),
                        "listUnordered" === i)
                            return e.enter("listItemPrefix"),
                            42 === n || 45 === n ? e.check(c, t, h)(n) : h(n);
                        if (!l.interrupt || 49 === n)
                            return e.enter("listItemPrefix"),
                            e.enter("listItemValue"),
                            d(n)
                    }
                    return t(n)
                }
                ;
                function d(n) {
                    return r(n) && ++p < 10 ? (e.consume(n),
                    d) : (!l.interrupt || p < 2) && (l.containerState.marker ? n === l.containerState.marker : 41 === n || 46 === n) ? (e.exit("listItemValue"),
                    h(n)) : t(n)
                }
                function h(n) {
                    return e.enter("listItemMarker"),
                    e.consume(n),
                    e.exit("listItemMarker"),
                    l.containerState.marker = l.containerState.marker || n,
                    e.check(a, l.interrupt ? t : m, e.attempt(f, v, g))
                }
                function m(e) {
                    return l.containerState.initialBlankLine = !0,
                    s++,
                    v(e)
                }
                function g(n) {
                    return i(n) ? (e.enter("listItemPrefixWhitespace"),
                    e.consume(n),
                    e.exit("listItemPrefixWhitespace"),
                    v) : t(n)
                }
                function v(t) {
                    return l.containerState.size = s + u(l.sliceStream(e.exit("listItemPrefix"))),
                    n(t)
                }
            },
            continuation: {
                tokenize: function(e, n, t) {
                    var r = this;
                    return r.containerState._closeFlow = void 0,
                    e.check(a, (function(t) {
                        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine,
                        l(e, n, "listItemIndent", r.containerState.size + 1)(t)
                    }
                    ), (function(t) {
                        if (r.containerState.furtherBlankLines || !i(t))
                            return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0,
                            o(t);
                        return r.containerState.furtherBlankLines = r.containerState.initialBlankLine = void 0,
                        e.attempt(p, n, o)(t)
                    }
                    ));
                    function o(i) {
                        return r.containerState._closeFlow = !0,
                        r.interrupt = void 0,
                        l(e, e.attempt(s, n, t), "linePrefix", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 4)(i)
                    }
                }
            },
            exit: function(e) {
                e.exit(this.containerState.type)
            }
        }
          , f = {
            tokenize: function(e, n, t) {
                var r = this;
                return l(e, (function(e) {
                    return i(e) || !o(r.events, "listItemPrefixWhitespace") ? t(e) : n(e)
                }
                ), "listItemPrefixWhitespace", r.parser.constructs.disable.null.indexOf("codeIndented") > -1 ? void 0 : 5)
            },
            partial: !0
        }
          , p = {
            tokenize: function(e, n, t) {
                var r = this;
                return l(e, (function(e) {
                    return o(r.events, "listItemIndent") === r.containerState.size ? n(e) : t(e)
                }
                ), "listItemIndent", r.containerState.size + 1)
            },
            partial: !0
        };
        e.exports = s
    }
    , function(e, n, t) {
        "use strict";
        var r = t(152)
          , i = t(163)
          , o = t(153)
          , u = {
            name: "setextUnderline",
            tokenize: function(e, n, t) {
                var i, u, l = this, a = l.events.length;
                for (; a--; )
                    if ("lineEnding" !== l.events[a][1].type && "linePrefix" !== l.events[a][1].type && "content" !== l.events[a][1].type) {
                        u = "paragraph" === l.events[a][1].type;
                        break
                    }
                return function(n) {
                    if (!l.lazy && (l.interrupt || u))
                        return e.enter("setextHeadingLine"),
                        e.enter("setextHeadingLineSequence"),
                        i = n,
                        c(n);
                    return t(n)
                }
                ;
                function c(n) {
                    return n === i ? (e.consume(n),
                    c) : (e.exit("setextHeadingLineSequence"),
                    o(e, s, "lineSuffix")(n))
                }
                function s(i) {
                    return null === i || r(i) ? (e.exit("setextHeadingLine"),
                    n(i)) : t(i)
                }
            },
            resolveTo: function(e, n) {
                var t, r, o, u, l = e.length;
                for (; l--; )
                    if ("enter" === e[l][0]) {
                        if ("content" === e[l][1].type) {
                            t = l;
                            break
                        }
                        "paragraph" === e[l][1].type && (r = l)
                    } else
                        "content" === e[l][1].type && e.splice(l, 1),
                        o || "definition" !== e[l][1].type || (o = l);
                u = {
                    type: "setextHeading",
                    start: i(e[r][1].start),
                    end: i(e[e.length - 1][1].end)
                },
                e[r][1].type = "setextHeadingText",
                o ? (e.splice(r, 0, ["enter", u, n]),
                e.splice(o + 1, 0, ["exit", e[t][1], n]),
                e[t][1].end = i(e[o][1].end)) : e[t][1] = u;
                return e.push(["exit", u, n]),
                e
            }
        };
        e.exports = u
    }
    , function(e, n, t) {
        "use strict";
        var r = /[\0\t\n\r]/g;
        e.exports = function() {
            var e, n = !0, t = 1, i = "";
            return function(o, u, l) {
                var a, c, s, f, p, d = [];
                o = i + o.toString(u),
                s = 0,
                i = "",
                n && (65279 === o.charCodeAt(0) && s++,
                n = void 0);
                for (; s < o.length; ) {
                    if (r.lastIndex = s,
                    a = r.exec(o),
                    f = a ? a.index : o.length,
                    p = o.charCodeAt(f),
                    !a) {
                        i = o.slice(s);
                        break
                    }
                    if (10 === p && s === f && e)
                        d.push(-3),
                        e = void 0;
                    else if (e && (d.push(-5),
                    e = void 0),
                    s < f && (d.push(o.slice(s, f)),
                    t += f - s),
                    0 === p)
                        d.push(65533),
                        t++;
                    else if (9 === p)
                        for (c = 4 * Math.ceil(t / 4),
                        d.push(-2); t++ < c; )
                            d.push(-1);
                    else
                        10 === p ? (d.push(-4),
                        t = 1) : (e = !0,
                        t = 1);
                    s = f + 1
                }
                l && (e && d.push(-5),
                i && d.push(i),
                d.push(null));
                return d
            }
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(210);
        e.exports = function(e) {
            for (; !r(e); )
                ;
            return e
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(339);
        e.exports = function(e, n) {
            e && !e.process && (n = e,
            e = null);
            return e ? function(e, n) {
                return t;
                function t(t, i, o) {
                    function u(e) {
                        o(e)
                    }
                    e.run(r(t, n), i, u)
                }
            }(e, n) : function(e) {
                return n;
                function n(n) {
                    return r(n, e)
                }
            }(n)
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = t(340)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t = function(e, n) {
                var t = n || {};
                void 0 === t.allowDangerousHTML || p || (p = !0,
                console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));
                var r = t.allowDangerousHtml || t.allowDangerousHTML
                  , a = {};
                return d.dangerous = r,
                d.definition = l(e),
                d.footnoteById = a,
                d.footnoteOrder = [],
                d.augment = c,
                d.handlers = Object.assign({}, s, t.handlers),
                d.unknownHandler = t.unknownHandler,
                d.passThrough = t.passThrough,
                i(e, "footnoteDefinition", h),
                d;
                function c(e, n) {
                    var t, r;
                    return e && e.data && ((t = e.data).hName && ("element" !== n.type && (n = {
                        type: "element",
                        tagName: "",
                        properties: {},
                        children: []
                    }),
                    n.tagName = t.hName),
                    "element" === n.type && t.hProperties && (n.properties = Object.assign({}, n.properties, t.hProperties)),
                    n.children && t.hChildren && (n.children = t.hChildren)),
                    r = e && e.position ? e : {
                        position: e
                    },
                    u(r) || (n.position = {
                        start: o.start(r),
                        end: o.end(r)
                    }),
                    n
                }
                function d(e, n, t, r) {
                    return void 0 !== r && null !== r || "object" !== typeof t || !("length"in t) || (r = t,
                    t = {}),
                    c(e, {
                        type: "element",
                        tagName: n,
                        properties: t || {},
                        children: r || []
                    })
                }
                function h(e) {
                    var n = String(e.identifier).toUpperCase();
                    f.call(a, n) || (a[n] = e)
                }
            }(e, n)
              , d = a(t, e)
              , h = c(t);
            h && (d.children = d.children.concat(r("text", "\n"), h));
            return d
        }
        ;
        var r = t(157)
          , i = t(184)
          , o = t(219)
          , u = t(344)
          , l = t(345)
          , a = t(220)
          , c = t(346)
          , s = t(347)
          , f = {}.hasOwnProperty
          , p = !1
    }
    , function(e, n, t) {
        "use strict";
        e.exports = a;
        var r = t(342)
          , i = t(343)
          , o = !0
          , u = "skip"
          , l = !1;
        function a(e, n, t, a) {
            var c, s;
            "function" === typeof n && "function" !== typeof t && (a = t,
            t = n,
            n = null),
            s = r(n),
            c = a ? -1 : 1,
            function e(r, f, p) {
                var d, h = "object" === typeof r && null !== r ? r : {};
                "string" === typeof h.type && (d = "string" === typeof h.tagName ? h.tagName : "string" === typeof h.name ? h.name : void 0,
                m.displayName = "node (" + i(h.type + (d ? "<" + d + ">" : "")) + ")");
                return m;
                function m() {
                    var i, d, h = p.concat(r), m = [];
                    if ((!n || s(r, f, p[p.length - 1] || null)) && (m = function(e) {
                        if (null !== e && "object" === typeof e && "length"in e)
                            return e;
                        if ("number" === typeof e)
                            return [o, e];
                        return [e]
                    }(t(r, p)))[0] === l)
                        return m;
                    if (r.children && m[0] !== u)
                        for (d = (a ? r.children.length : -1) + c; d > -1 && d < r.children.length; ) {
                            if ((i = e(r.children[d], d, h)())[0] === l)
                                return i;
                            d = "number" === typeof i[1] ? i[1] : d + c
                        }
                    return m
                }
            }(e, null, [])()
        }
        a.CONTINUE = true,
        a.SKIP = u,
        a.EXIT = l
    }
    , function(e, n, t) {
        "use strict";
        function r(e) {
            if (null == e)
                return i;
            if ("string" === typeof e)
                return function(e) {
                    return n;
                    function n(n) {
                        return Boolean(n && n.type === e)
                    }
                }(e);
            if ("object" === typeof e)
                return "length"in e ? function(e) {
                    var n = []
                      , t = -1;
                    for (; ++t < e.length; )
                        n[t] = r(e[t]);
                    return i;
                    function i() {
                        for (var e = -1; ++e < n.length; )
                            if (n[e].apply(this, arguments))
                                return !0;
                        return !1
                    }
                }(e) : function(e) {
                    return n;
                    function n(n) {
                        var t;
                        for (t in e)
                            if (n[t] !== e[t])
                                return !1;
                        return !0
                    }
                }(e);
            if ("function" === typeof e)
                return e;
            throw new Error("Expected function, string, or object as test")
        }
        function i() {
            return !0
        }
        e.exports = r
    }
    , function(e, n) {
        e.exports = function(e) {
            return e
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(184);
        e.exports = function(e, n) {
            return function(e) {
                return n;
                function n(n) {
                    var t = n && o(n);
                    return t && i.call(e, t) ? e[t] : null
                }
            }(function(e) {
                var n = {};
                if (!e || !e.type)
                    throw new Error("mdast-util-definitions expected node");
                return r(e, "definition", t),
                n;
                function t(e) {
                    var t = o(e.identifier);
                    i.call(n, t) || (n[t] = e)
                }
            }(e))
        }
        ;
        var i = {}.hasOwnProperty;
        function o(e) {
            return e.toUpperCase()
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e) {
            var n, t, u, l, a = e.footnoteById, c = e.footnoteOrder, s = c.length, f = -1, p = [];
            for (; ++f < s; )
                (n = a[c[f].toUpperCase()]) && (u = n.children.concat(),
                l = u[u.length - 1],
                t = {
                    type: "link",
                    url: "#fnref-" + n.identifier,
                    data: {
                        hProperties: {
                            className: ["footnote-backref"]
                        }
                    },
                    children: [{
                        type: "text",
                        value: "\u21a9"
                    }]
                },
                l && "paragraph" === l.type || (l = {
                    type: "paragraph",
                    children: []
                },
                u.push(l)),
                l.children.push(t),
                p.push({
                    type: "listItem",
                    data: {
                        hProperties: {
                            id: "fn-" + n.identifier
                        }
                    },
                    children: u,
                    position: n.position
                }));
            if (0 === p.length)
                return null;
            return e(null, "div", {
                className: ["footnotes"]
            }, o([r(e), i(e, {
                type: "list",
                ordered: !0,
                children: p
            })], !0))
        }
        ;
        var r = t(221)
          , i = t(222)
          , o = t(167)
    }
    , function(e, n, t) {
        "use strict";
        function r() {
            return null
        }
        e.exports = {
            blockquote: t(348),
            break: t(349),
            code: t(350),
            delete: t(351),
            emphasis: t(352),
            footnoteReference: t(223),
            footnote: t(353),
            heading: t(354),
            html: t(355),
            imageReference: t(356),
            image: t(357),
            inlineCode: t(358),
            linkReference: t(359),
            link: t(360),
            listItem: t(361),
            list: t(222),
            paragraph: t(362),
            root: t(363),
            strong: t(364),
            table: t(365),
            text: t(366),
            thematicBreak: t(221),
            toml: r,
            yaml: r,
            definition: r,
            footnoteDefinition: r
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "blockquote", r(i(e, n), !0))
        }
        ;
        var r = t(167)
          , i = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return [e(n, "br"), r("text", "\n")]
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, i = n.value ? n.value + "\n" : "", o = n.lang && n.lang.match(/^[^ \t]+(?=[ \t]|$)/), u = {};
            o && (u.className = ["language-" + o]);
            t = e(n, "code", u, [r("text", i)]),
            n.meta && (t.data = {
                meta: n.meta
            });
            return e(n.position, "pre", [t])
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "del", r(e, n))
        }
        ;
        var r = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "em", r(e, n))
        }
        ;
        var r = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t = e.footnoteById
              , i = e.footnoteOrder
              , o = 1;
            for (; o in t; )
                o++;
            return o = String(o),
            i.push(o),
            t[o] = {
                type: "footnoteDefinition",
                identifier: o,
                children: [{
                    type: "paragraph",
                    children: n.children
                }],
                position: n.position
            },
            r(e, {
                type: "footnoteReference",
                identifier: o,
                position: n.position
            })
        }
        ;
        var r = t(223)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "h" + n.depth, r(e, n))
        }
        ;
        var r = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e.dangerous ? e.augment(n, r("raw", n.value)) : null
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, o = e.definition(n.identifier);
            if (!o)
                return i(e, n);
            t = {
                src: r(o.url || ""),
                alt: n.alt
            },
            null !== o.title && void 0 !== o.title && (t.title = o.title);
            return e(n, "img", t)
        }
        ;
        var r = t(172)
          , i = t(224)
    }
    , function(e, n, t) {
        "use strict";
        var r = t(172);
        e.exports = function(e, n) {
            var t = {
                src: r(n.url),
                alt: n.alt
            };
            null !== n.title && void 0 !== n.title && (t.title = n.title);
            return e(n, "img", t)
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t = n.value.replace(/\r?\n|\r/g, " ");
            return e(n, "code", [r("text", t)])
        }
        ;
        var r = t(157)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, u = e.definition(n.identifier);
            if (!u)
                return i(e, n);
            t = {
                href: r(u.url || "")
            },
            null !== u.title && void 0 !== u.title && (t.title = u.title);
            return e(n, "a", t, o(e, n))
        }
        ;
        var r = t(172)
          , i = t(224)
          , o = t(154)
    }
    , function(e, n, t) {
        "use strict";
        var r = t(172)
          , i = t(154);
        e.exports = function(e, n) {
            var t = {
                href: r(n.url)
            };
            null !== n.title && void 0 !== n.title && (t.title = n.title);
            return e(n, "a", t, i(e, n))
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n, t) {
            var u, l, a, c = i(e, n), s = c[0], f = t ? function(e) {
                var n = e.spread
                  , t = e.children
                  , r = t.length
                  , i = -1;
                for (; !n && ++i < r; )
                    n = o(t[i]);
                return n
            }(t) : o(n), p = {}, d = [];
            "boolean" === typeof n.checked && (s && "p" === s.tagName || (s = e(null, "p", []),
            c.unshift(s)),
            s.children.length > 0 && s.children.unshift(r("text", " ")),
            s.children.unshift(e(null, "input", {
                type: "checkbox",
                checked: n.checked,
                disabled: !0
            })),
            p.className = ["task-list-item"]);
            u = c.length,
            l = -1;
            for (; ++l < u; )
                a = c[l],
                (f || 0 !== l || "p" !== a.tagName) && d.push(r("text", "\n")),
                "p" !== a.tagName || f ? d.push(a) : d = d.concat(a.children);
            u && (f || "p" !== a.tagName) && d.push(r("text", "\n"));
            return e(n, "li", p, d)
        }
        ;
        var r = t(157)
          , i = t(154);
        function o(e) {
            var n = e.spread;
            return void 0 === n || null === n ? e.children.length > 1 : n
        }
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "p", r(e, n))
        }
        ;
        var r = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e.augment(n, r("root", i(o(e, n))))
        }
        ;
        var r = t(157)
          , i = t(167)
          , o = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e(n, "strong", r(e, n))
        }
        ;
        var r = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            var t, u, l, a, c, s = n.children, f = s.length, p = n.align || [], d = p.length, h = [];
            for (; f--; ) {
                for (u = s[f].children,
                a = 0 === f ? "th" : "td",
                t = d || u.length,
                l = []; t--; )
                    c = u[t],
                    l[t] = e(c, a, {
                        align: p[t]
                    }, c ? o(e, c) : []);
                h[f] = e(s[f], "tr", i(l, !0))
            }
            return e(n, "table", i([e(h[0].position, "thead", i([h[0]], !0))].concat(h[1] ? e({
                start: r.start(h[1]),
                end: r.end(h[h.length - 1])
            }, "tbody", i(h.slice(1), !0)) : []), !0))
        }
        ;
        var r = t(219)
          , i = t(167)
          , o = t(154)
    }
    , function(e, n, t) {
        "use strict";
        e.exports = function(e, n) {
            return e.augment(n, r("text", String(n.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
        }
        ;
        var r = t(157)
    }
    , , , function(e, n, t) {
        var r = t(236)
          , i = t(184);
        e.exports = function(e) {
            if (e.allowedElements && e.disallowedElements)
                throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
            if (e.allowedElements || e.disallowedElements || e.allowElement)
                return function(e) {
                    i(e, "element", n)
                }
                ;
            function n(n, t, i) {
                var o, u = n, l = i;
                if (e.allowedElements ? o = !e.allowedElements.includes(u.tagName) : e.disallowedElements && (o = e.disallowedElements.includes(u.tagName)),
                !o && e.allowElement && "number" === typeof t && (o = !e.allowElement(u, t, l)),
                o && "number" === typeof t) {
                    var a;
                    if (e.unwrapDisallowed && u.children)
                        (a = l.children).splice.apply(a, [t, 1].concat(r(u.children)));
                    else
                        l.children.splice(t, 1);
                    return t
                }
            }
        }
    }
    , , , , , function(e, n) {
        var t = ["http", "https", "mailto", "tel"];
        e.exports = function(e) {
            var n = (e || "").trim()
              , r = n.charAt(0);
            if ("#" === r || "/" === r)
                return n;
            var i = n.indexOf(":");
            if (-1 === i)
                return n;
            var o = -1;
            for (; ++o < t.length; ) {
                var u = t[o];
                if (i === u.length && n.slice(0, u.length).toLowerCase() === u)
                    return n
            }
            if (-1 !== (o = n.indexOf("?")) && i > o)
                return n;
            if (-1 !== (o = n.indexOf("#")) && i > o)
                return n;
            return "javascript:void(0)"
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(0)
          , i = t(53)
          , o = t(376)
          , u = t(238)
          , l = t(378)
          , a = t(239)
          , c = t(240)
          , s = t(379);
        n.hastToReact = h,
        n.hastChildrenToReact = d;
        var f = {}.hasOwnProperty
          , p = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
        function d(e, n) {
            for (var t, r = [], i = -1; ++i < n.children.length; )
                "element" === (t = n.children[i]).type ? r.push(h(e, t, i, n)) : "text" === t.type ? "element" === n.type && p.has(n.tagName) && "\n" === t.value || r.push(t.value) : "raw" !== t.type || e.options.skipHtml || r.push(t.value);
            return r
        }
        function h(e, n, t, u) {
            var l, a = e.options, c = e.schema, s = n.tagName, p = {}, h = c;
            if ("html" === c.space && "svg" === s && (h = o,
            e.schema = h),
            n.properties)
                for (l in n.properties)
                    f.call(n.properties, l) && g(p, l, n.properties[l], e);
            "ol" !== s && "ul" !== s || e.listDepth++;
            var v = d(e, n);
            "ol" !== s && "ul" !== s || e.listDepth--,
            e.schema = c;
            var x, y = n.position || {
                start: {
                    line: null,
                    column: null,
                    offset: null
                },
                end: {
                    line: null,
                    column: null,
                    offset: null
                }
            }, k = a.components && f.call(a.components, s) ? a.components[s] : s, b = "string" === typeof k || k === r.Fragment;
            if (!i.isValidElementType(k))
                throw new TypeError("Component for name `".concat(s, "` not defined or is not renderable"));
            if (p.key = [s, y.start.line, y.start.column, t].join("-"),
            "a" === s && a.linkTarget && (p.target = "function" === typeof a.linkTarget ? a.linkTarget(p.href, n.children, p.title) : a.linkTarget),
            "a" === s && a.transformLinkUri && (p.href = a.transformLinkUri(p.href, n.children, p.title)),
            b || "code" !== s || "element" !== u.type || "pre" === u.tagName || (p.inline = !0),
            b || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (p.level = parseInt(s.charAt(1), 10)),
            "img" === s && a.transformImageUri && (p.src = a.transformImageUri(p.src, p.alt, p.title)),
            !b && "li" === s && "element" === u.type) {
                var w = function(e) {
                    var n = -1;
                    for (; ++n < e.children.length; ) {
                        var t = e.children[n];
                        if ("element" === t.type && "input" === t.tagName)
                            return t
                    }
                    return null
                }(n);
                p.checked = w && w.properties ? Boolean(w.properties.checked) : null,
                p.index = m(u, n),
                p.ordered = "ol" === u.tagName
            }
            return b || "ol" !== s && "ul" !== s || (p.ordered = "ol" === s,
            p.depth = e.listDepth),
            "td" !== s && "th" !== s || (p.align && (p.style || (p.style = {}),
            p.style.textAlign = p.align,
            delete p.align),
            b || (p.isHeader = "th" === s)),
            b || "tr" !== s || "element" !== u.type || (p.isHeader = Boolean("thead" === u.tagName)),
            a.sourcePos && (p["data-sourcepos"] = [(x = y).start.line, ":", x.start.column, "-", x.end.line, ":", x.end.column].map((function(e) {
                return String(e)
            }
            )).join("")),
            !b && a.rawSourcePos && (p.sourcePosition = n.position),
            !b && a.includeElementIndex && (p.index = m(u, n),
            p.siblingCount = m(u)),
            b || (p.node = n),
            v.length > 0 ? r.createElement(k, p, v) : r.createElement(k, p)
        }
        function m(e, n) {
            for (var t = -1, r = 0; ++t < e.children.length && e.children[t] !== n; )
                "element" === e.children[t].type && r++;
            return r
        }
        function g(e, n, t, r) {
            var i = u(r.schema, n)
              , o = t;
            null !== o && void 0 !== o && o === o && (o && "object" === typeof o && "length"in o && (o = (i.commaSeparated ? c : a).stringify(o)),
            "style" === i.property && "string" === typeof o && (o = function(e) {
                var n = {};
                try {
                    s(e, t)
                } catch (r) {}
                return n;
                function t(e, t) {
                    var r = "-ms-" === e.slice(0, 4) ? "ms-".concat(e.slice(4)) : e;
                    n[r.replace(/-([a-z])/g, v)] = t
                }
            }(o)),
            i.space && i.property ? e[f.call(l, i.property) ? l[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o))
        }
        function v(e, n) {
            return n.toUpperCase()
        }
    }
    , function(e, n, t) {
        "use strict";
        var r = t(226)
          , i = t(228)
          , o = t(231)
          , u = t(232)
          , l = t(235)
          , a = t(377);
        e.exports = r([o, i, u, l, a])
    }
    , function(e, n, t) {
        "use strict";
        var r = t(173)
          , i = t(164)
          , o = t(234)
          , u = r.boolean
          , l = r.number
          , a = r.spaceSeparated
          , c = r.commaSeparated
          , s = r.commaOrSpaceSeparated;
        e.exports = i({
            space: "svg",
            attributes: {
                accentHeight: "accent-height",
                alignmentBaseline: "alignment-baseline",
                arabicForm: "arabic-form",
                baselineShift: "baseline-shift",
                capHeight: "cap-height",
                className: "class",
                clipPath: "clip-path",
                clipRule: "clip-rule",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                crossOrigin: "crossorigin",
                dataType: "datatype",
                dominantBaseline: "dominant-baseline",
                enableBackground: "enable-background",
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                hrefLang: "hreflang",
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                horizOriginY: "horiz-origin-y",
                imageRendering: "image-rendering",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                navDown: "nav-down",
                navDownLeft: "nav-down-left",
                navDownRight: "nav-down-right",
                navLeft: "nav-left",
                navNext: "nav-next",
                navPrev: "nav-prev",
                navRight: "nav-right",
                navUp: "nav-up",
                navUpLeft: "nav-up-left",
                navUpRight: "nav-up-right",
                onAbort: "onabort",
                onActivate: "onactivate",
                onAfterPrint: "onafterprint",
                onBeforePrint: "onbeforeprint",
                onBegin: "onbegin",
                onCancel: "oncancel",
                onCanPlay: "oncanplay",
                onCanPlayThrough: "oncanplaythrough",
                onChange: "onchange",
                onClick: "onclick",
                onClose: "onclose",
                onCopy: "oncopy",
                onCueChange: "oncuechange",
                onCut: "oncut",
                onDblClick: "ondblclick",
                onDrag: "ondrag",
                onDragEnd: "ondragend",
                onDragEnter: "ondragenter",
                onDragExit: "ondragexit",
                onDragLeave: "ondragleave",
                onDragOver: "ondragover",
                onDragStart: "ondragstart",
                onDrop: "ondrop",
                onDurationChange: "ondurationchange",
                onEmptied: "onemptied",
                onEnd: "onend",
                onEnded: "onended",
                onError: "onerror",
                onFocus: "onfocus",
                onFocusIn: "onfocusin",
                onFocusOut: "onfocusout",
                onHashChange: "onhashchange",
                onInput: "oninput",
                onInvalid: "oninvalid",
                onKeyDown: "onkeydown",
                onKeyPress: "onkeypress",
                onKeyUp: "onkeyup",
                onLoad: "onload",
                onLoadedData: "onloadeddata",
                onLoadedMetadata: "onloadedmetadata",
                onLoadStart: "onloadstart",
                onMessage: "onmessage",
                onMouseDown: "onmousedown",
                onMouseEnter: "onmouseenter",
                onMouseLeave: "onmouseleave",
                onMouseMove: "onmousemove",
                onMouseOut: "onmouseout",
                onMouseOver: "onmouseover",
                onMouseUp: "onmouseup",
                onMouseWheel: "onmousewheel",
                onOffline: "onoffline",
                onOnline: "ononline",
                onPageHide: "onpagehide",
                onPageShow: "onpageshow",
                onPaste: "onpaste",
                onPause: "onpause",
                onPlay: "onplay",
                onPlaying: "onplaying",
                onPopState: "onpopstate",
                onProgress: "onprogress",
                onRateChange: "onratechange",
                onRepeat: "onrepeat",
                onReset: "onreset",
                onResize: "onresize",
                onScroll: "onscroll",
                onSeeked: "onseeked",
                onSeeking: "onseeking",
                onSelect: "onselect",
                onShow: "onshow",
                onStalled: "onstalled",
                onStorage: "onstorage",
                onSubmit: "onsubmit",
                onSuspend: "onsuspend",
                onTimeUpdate: "ontimeupdate",
                onToggle: "ontoggle",
                onUnload: "onunload",
                onVolumeChange: "onvolumechange",
                onWaiting: "onwaiting",
                onZoom: "onzoom",
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pointerEvents: "pointer-events",
                referrerPolicy: "referrerpolicy",
                renderingIntent: "rendering-intent",
                shapeRendering: "shape-rendering",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                strokeDashArray: "stroke-dasharray",
                strokeDashOffset: "stroke-dashoffset",
                strokeLineCap: "stroke-linecap",
                strokeLineJoin: "stroke-linejoin",
                strokeMiterLimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                tabIndex: "tabindex",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                typeOf: "typeof",
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                vectorEffect: "vector-effect",
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                xHeight: "x-height",
                playbackOrder: "playbackorder",
                timelineBegin: "timelinebegin"
            },
            transform: o,
            properties: {
                about: s,
                accentHeight: l,
                accumulate: null,
                additive: null,
                alignmentBaseline: null,
                alphabetic: l,
                amplitude: l,
                arabicForm: null,
                ascent: l,
                attributeName: null,
                attributeType: null,
                azimuth: l,
                bandwidth: null,
                baselineShift: null,
                baseFrequency: null,
                baseProfile: null,
                bbox: null,
                begin: null,
                bias: l,
                by: null,
                calcMode: null,
                capHeight: l,
                className: a,
                clip: null,
                clipPath: null,
                clipPathUnits: null,
                clipRule: null,
                color: null,
                colorInterpolation: null,
                colorInterpolationFilters: null,
                colorProfile: null,
                colorRendering: null,
                content: null,
                contentScriptType: null,
                contentStyleType: null,
                crossOrigin: null,
                cursor: null,
                cx: null,
                cy: null,
                d: null,
                dataType: null,
                defaultAction: null,
                descent: l,
                diffuseConstant: l,
                direction: null,
                display: null,
                dur: null,
                divisor: l,
                dominantBaseline: null,
                download: u,
                dx: null,
                dy: null,
                edgeMode: null,
                editable: null,
                elevation: l,
                enableBackground: null,
                end: null,
                event: null,
                exponent: l,
                externalResourcesRequired: null,
                fill: null,
                fillOpacity: l,
                fillRule: null,
                filter: null,
                filterRes: null,
                filterUnits: null,
                floodColor: null,
                floodOpacity: null,
                focusable: null,
                focusHighlight: null,
                fontFamily: null,
                fontSize: null,
                fontSizeAdjust: null,
                fontStretch: null,
                fontStyle: null,
                fontVariant: null,
                fontWeight: null,
                format: null,
                fr: null,
                from: null,
                fx: null,
                fy: null,
                g1: c,
                g2: c,
                glyphName: c,
                glyphOrientationHorizontal: null,
                glyphOrientationVertical: null,
                glyphRef: null,
                gradientTransform: null,
                gradientUnits: null,
                handler: null,
                hanging: l,
                hatchContentUnits: null,
                hatchUnits: null,
                height: null,
                href: null,
                hrefLang: null,
                horizAdvX: l,
                horizOriginX: l,
                horizOriginY: l,
                id: null,
                ideographic: l,
                imageRendering: null,
                initialVisibility: null,
                in: null,
                in2: null,
                intercept: l,
                k: l,
                k1: l,
                k2: l,
                k3: l,
                k4: l,
                kernelMatrix: s,
                kernelUnitLength: null,
                keyPoints: null,
                keySplines: null,
                keyTimes: null,
                kerning: null,
                lang: null,
                lengthAdjust: null,
                letterSpacing: null,
                lightingColor: null,
                limitingConeAngle: l,
                local: null,
                markerEnd: null,
                markerMid: null,
                markerStart: null,
                markerHeight: null,
                markerUnits: null,
                markerWidth: null,
                mask: null,
                maskContentUnits: null,
                maskUnits: null,
                mathematical: null,
                max: null,
                media: null,
                mediaCharacterEncoding: null,
                mediaContentEncodings: null,
                mediaSize: l,
                mediaTime: null,
                method: null,
                min: null,
                mode: null,
                name: null,
                navDown: null,
                navDownLeft: null,
                navDownRight: null,
                navLeft: null,
                navNext: null,
                navPrev: null,
                navRight: null,
                navUp: null,
                navUpLeft: null,
                navUpRight: null,
                numOctaves: null,
                observer: null,
                offset: null,
                onAbort: null,
                onActivate: null,
                onAfterPrint: null,
                onBeforePrint: null,
                onBegin: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnd: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFocusIn: null,
                onFocusOut: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadStart: null,
                onMessage: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onMouseWheel: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRepeat: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onShow: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onZoom: null,
                opacity: null,
                operator: null,
                order: null,
                orient: null,
                orientation: null,
                origin: null,
                overflow: null,
                overlay: null,
                overlinePosition: l,
                overlineThickness: l,
                paintOrder: null,
                panose1: null,
                path: null,
                pathLength: l,
                patternContentUnits: null,
                patternTransform: null,
                patternUnits: null,
                phase: null,
                ping: a,
                pitch: null,
                playbackOrder: null,
                pointerEvents: null,
                points: null,
                pointsAtX: l,
                pointsAtY: l,
                pointsAtZ: l,
                preserveAlpha: null,
                preserveAspectRatio: null,
                primitiveUnits: null,
                propagate: null,
                property: s,
                r: null,
                radius: null,
                referrerPolicy: null,
                refX: null,
                refY: null,
                rel: s,
                rev: s,
                renderingIntent: null,
                repeatCount: null,
                repeatDur: null,
                requiredExtensions: s,
                requiredFeatures: s,
                requiredFonts: s,
                requiredFormats: s,
                resource: null,
                restart: null,
                result: null,
                rotate: null,
                rx: null,
                ry: null,
                scale: null,
                seed: null,
                shapeRendering: null,
                side: null,
                slope: null,
                snapshotTime: null,
                specularConstant: l,
                specularExponent: l,
                spreadMethod: null,
                spacing: null,
                startOffset: null,
                stdDeviation: null,
                stemh: null,
                stemv: null,
                stitchTiles: null,
                stopColor: null,
                stopOpacity: null,
                strikethroughPosition: l,
                strikethroughThickness: l,
                string: null,
                stroke: null,
                strokeDashArray: s,
                strokeDashOffset: null,
                strokeLineCap: null,
                strokeLineJoin: null,
                strokeMiterLimit: l,
                strokeOpacity: l,
                strokeWidth: null,
                style: null,
                surfaceScale: l,
                syncBehavior: null,
                syncBehaviorDefault: null,
                syncMaster: null,
                syncTolerance: null,
                syncToleranceDefault: null,
                systemLanguage: s,
                tabIndex: l,
                tableValues: null,
                target: null,
                targetX: l,
                targetY: l,
                textAnchor: null,
                textDecoration: null,
                textRendering: null,
                textLength: null,
                timelineBegin: null,
                title: null,
                transformBehavior: null,
                type: null,
                typeOf: s,
                to: null,
                transform: null,
                u1: null,
                u2: null,
                underlinePosition: l,
                underlineThickness: l,
                unicode: null,
                unicodeBidi: null,
                unicodeRange: null,
                unitsPerEm: l,
                values: null,
                vAlphabetic: l,
                vMathematical: l,
                vectorEffect: null,
                vHanging: l,
                vIdeographic: l,
                version: null,
                vertAdvY: l,
                vertOriginX: l,
                vertOriginY: l,
                viewBox: null,
                viewTarget: null,
                visibility: null,
                width: null,
                widths: null,
                wordSpacing: null,
                writingMode: null,
                x: null,
                x1: null,
                x2: null,
                xChannelSelector: null,
                xHeight: l,
                y: null,
                y1: null,
                y2: null,
                yChannelSelector: null,
                z: null,
                zoomAndPan: null
            }
        })
    }
    , function(e) {
        e.exports = JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')
    }
    , function(e, n, t) {
        var r = t(380);
        e.exports = function(e, n) {
            var t, i = null;
            if (!e || "string" !== typeof e)
                return i;
            for (var o, u, l = r(e), a = "function" === typeof n, c = 0, s = l.length; c < s; c++)
                o = (t = l[c]).property,
                u = t.value,
                a ? n(o, u, t) : u && (i || (i = {}),
                i[o] = u);
            return i
        }
    }
    , function(e, n) {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g
          , r = /\n/g
          , i = /^\s*/
          , o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/
          , u = /^:\s*/
          , l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/
          , a = /^[;\s]*/
          , c = /^\s+|\s+$/g
          , s = "";
        function f(e) {
            return e ? e.replace(c, s) : s
        }
        e.exports = function(e, n) {
            if ("string" !== typeof e)
                throw new TypeError("First argument must be a string");
            if (!e)
                return [];
            n = n || {};
            var c = 1
              , p = 1;
            function d(e) {
                var n = e.match(r);
                n && (c += n.length);
                var t = e.lastIndexOf("\n");
                p = ~t ? e.length - t : p + e.length
            }
            function h() {
                var e = {
                    line: c,
                    column: p
                };
                return function(n) {
                    return n.position = new m(e),
                    y(),
                    n
                }
            }
            function m(e) {
                this.start = e,
                this.end = {
                    line: c,
                    column: p
                },
                this.source = n.source
            }
            m.prototype.content = e;
            var g = [];
            function v(t) {
                var r = new Error(n.source + ":" + c + ":" + p + ": " + t);
                if (r.reason = t,
                r.filename = n.source,
                r.line = c,
                r.column = p,
                r.source = e,
                !n.silent)
                    throw r;
                g.push(r)
            }
            function x(n) {
                var t = n.exec(e);
                if (t) {
                    var r = t[0];
                    return d(r),
                    e = e.slice(r.length),
                    t
                }
            }
            function y() {
                x(i)
            }
            function k(e) {
                var n;
                for (e = e || []; n = b(); )
                    !1 !== n && e.push(n);
                return e
            }
            function b() {
                var n = h();
                if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                    for (var t = 2; s != e.charAt(t) && ("*" != e.charAt(t) || "/" != e.charAt(t + 1)); )
                        ++t;
                    if (t += 2,
                    s === e.charAt(t - 1))
                        return v("End of comment missing");
                    var r = e.slice(2, t - 2);
                    return p += 2,
                    d(r),
                    e = e.slice(t),
                    p += 2,
                    n({
                        type: "comment",
                        comment: r
                    })
                }
            }
            function w() {
                var e = h()
                  , n = x(o);
                if (n) {
                    if (b(),
                    !x(u))
                        return v("property missing ':'");
                    var r = x(l)
                      , i = e({
                        type: "declaration",
                        property: f(n[0].replace(t, s)),
                        value: r ? f(r[0].replace(t, s)) : s
                    });
                    return x(a),
                    i
                }
            }
            return y(),
            function() {
                var e, n = [];
                for (k(n); e = w(); )
                    !1 !== e && (n.push(e),
                    k(n));
                return n
            }()
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, n, t) {
        "use strict";
        n.a = {
            'code[class*="language-"]': {
                color: "#f8f8f2",
                background: "none",
                fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none"
            },
            'pre[class*="language-"]': {
                color: "#f8f8f2",
                background: "#2b2b2b",
                fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                textAlign: "left",
                whiteSpace: "pre",
                wordSpacing: "normal",
                wordBreak: "normal",
                wordWrap: "normal",
                lineHeight: "1.5",
                MozTabSize: "4",
                OTabSize: "4",
                tabSize: "4",
                WebkitHyphens: "none",
                MozHyphens: "none",
                msHyphens: "none",
                hyphens: "none",
                padding: "1em",
                margin: "0.5em 0",
                overflow: "auto",
                borderRadius: "0.3em"
            },
            ':not(pre) > code[class*="language-"]': {
                background: "#2b2b2b",
                padding: "0.1em",
                borderRadius: "0.3em",
                whiteSpace: "normal"
            },
            comment: {
                color: "#d4d0ab"
            },
            prolog: {
                color: "#d4d0ab"
            },
            doctype: {
                color: "#d4d0ab"
            },
            cdata: {
                color: "#d4d0ab"
            },
            punctuation: {
                color: "#fefefe"
            },
            property: {
                color: "#ffa07a"
            },
            tag: {
                color: "#ffa07a"
            },
            constant: {
                color: "#ffa07a"
            },
            symbol: {
                color: "#ffa07a"
            },
            deleted: {
                color: "#ffa07a"
            },
            boolean: {
                color: "#00e0e0"
            },
            number: {
                color: "#00e0e0"
            },
            selector: {
                color: "#abe338"
            },
            "attr-name": {
                color: "#abe338"
            },
            string: {
                color: "#abe338"
            },
            char: {
                color: "#abe338"
            },
            builtin: {
                color: "#abe338"
            },
            inserted: {
                color: "#abe338"
            },
            operator: {
                color: "#00e0e0"
            },
            entity: {
                color: "#00e0e0",
                cursor: "help"
            },
            url: {
                color: "#00e0e0"
            },
            ".language-css .token.string": {
                color: "#00e0e0"
            },
            ".style .token.string": {
                color: "#00e0e0"
            },
            variable: {
                color: "#00e0e0"
            },
            atrule: {
                color: "#ffd700"
            },
            "attr-value": {
                color: "#ffd700"
            },
            function: {
                color: "#ffd700"
            },
            keyword: {
                color: "#00e0e0"
            },
            regex: {
                color: "#ffd700"
            },
            important: {
                color: "#ffd700",
                fontWeight: "bold"
            },
            bold: {
                fontWeight: "bold"
            },
            italic: {
                fontStyle: "italic"
            }
        }
    }
    ])]);
    