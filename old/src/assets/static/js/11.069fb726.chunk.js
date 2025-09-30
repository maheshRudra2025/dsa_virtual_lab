(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[11], {
        656: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(195)
              , r = a.n(n)
              , c = a(196)
              , s = a(23)
              , i = a(56)
              , o = a(2)
              , u = a(197)
              , l = a.n(u)
              , d = a(0)
              , j = a(278)
              , b = a.n(j)
              , p = a(652)
              , h = a(645)
              , O = a(62)
              , f = a(136)
              , m = Object(f.a)((function(e) {
                return {
                    root: {
                        width: "100%",
                        flex: 1,
                        borderRadius: "1rem"
                    },
                    markdownContainer: {
                        color: e.palette.text.primary
                    }
                }
            }
            ))
              , v = a(6)
              , x = ["node", "inline", "className", "children"]
              , g = {
                code: function(e) {
                    e.node;
                    var t = e.inline
                      , a = e.className
                      , n = e.children
                      , r = Object(o.a)(e, x)
                      , c = /language-(\w+)/.exec(a || "");
                    return !t && c ? Object(v.jsx)(p.a, Object(i.a)({
                        style: h.a,
                        language: c[1],
                        PreTag: "div",
                        children: String(n).replace(/\n$/, "")
                    }, r)) : Object(v.jsx)("code", Object(i.a)(Object(i.a)({
                        className: a
                    }, r), {}, {
                        children: n
                    }))
                }
            };
            t.default = function(e) {
                var t = e.param
                  , a = m()
                  , n = Object(d.useState)("")
                  , i = Object(s.a)(n, 2)
                  , o = i[0]
                  , u = i[1]
                  , j = Object(d.useState)(!0)
                  , p = Object(s.a)(j, 2)
                  , h = p[0]
                  , f = p[1];
                Object(d.useEffect)((function() {
                    x(t)
                }
                ), [t]);
                var x = function() {
                    var e = Object(c.a)(r.a.mark((function e(t) {
                        var a, n;
                        return r.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return f(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    l.a.get("/theory/".concat(t, ".md"));
                                case 4:
                                    a = e.sent,
                                    n = a.data,
                                    u(n),
                                    f(!1),
                                    e.next = 14;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(1),
                                    f(!1),
                                    alert("Error fetching theory");
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 10]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(v.jsx)("div", {
                    className: a.root,
                    children: "" === o || h ? Object(v.jsx)(O.a, {}) : Object(v.jsx)(b.a, {
                        className: a.markdownContainer,
                        components: g,
                        children: o
                    })
                })
            }
        }
    }]);
    