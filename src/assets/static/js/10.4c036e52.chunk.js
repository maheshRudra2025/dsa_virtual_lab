(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[10], {
        657: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(195)
              , c = t.n(n)
              , r = t(196)
              , i = t(23)
              , o = t(650)
              , s = t(643)
              , l = t(646)
              , b = t(658)
              , u = t(101)
              , j = t(0)
              , d = t(652)
              , h = t(11)
              , p = t(136)
              , v = Object(p.a)((function(e) {
                return {
                    root: {
                        width: "100%",
                        flex: 1,
                        borderRadius: "1rem"
                    },
                    tabThemeContainer: Object(h.a)({
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "2rem"
                    }, e.breakpoints.down("800"), {
                        flexDirection: "column",
                        gap: "1rem"
                    }),
                    codeContainer: {
                        maxWidth: 800,
                        marginTop: "2rem",
                        minHeight: "65vh"
                    },
                    notFound: {
                        margin: "auto",
                        textAlign: "center",
                        lineHeight: "40vw"
                    }
                }
            }
            ))
              , m = t(647)
              , O = t(648)
              , g = t(197)
              , x = t.n(g)
              , f = t(6)
              , C = ["c", "cpp", "py"];
            a.default = function(e) {
                var a = e.param
                  , t = v()
                  , n = Object(j.useState)(1)
                  , h = Object(i.a)(n, 2)
                  , p = h[0]
                  , g = h[1]
                  , y = Object(j.useState)(!1)
                  , w = Object(i.a)(y, 2)
                  , k = w[0]
                  , S = w[1]
                  , N = Object(j.useState)({
                    codeString: "",
                    available: !1
                })
                  , T = Object(i.a)(N, 2)
                  , D = T[0]
                  , F = T[1];
                Object(j.useEffect)((function() {
                    H(a, p)
                }
                ), [a, p]);
                var H = function() {
                    var e = Object(r.a)(c.a.mark((function e(a, t) {
                        var n, r;
                        return c.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    x.a.get("/codes/".concat(a, "/").concat(a, ".").concat(C[t]));
                                case 3:
                                    n = e.sent,
                                    r = n.data,
                                    F({
                                        codeString: r,
                                        available: !0
                                    }),
                                    e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e.catch(0),
                                    console.error(e.t0),
                                    F({
                                        codeString: "",
                                        available: !1
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )));
                    return function(a, t) {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(f.jsxs)("div", {
                    className: t.root,
                    children: [Object(f.jsxs)("div", {
                        className: t.tabThemeContainer,
                        children: [Object(f.jsxs)(o.a, {
                            value: p,
                            onChange: function(e, a) {
                                g(a)
                            },
                            indicatorColor: "primary",
                            textColor: "primary",
                            variant: "scrollable",
                            children: [Object(f.jsx)(s.a, {
                                label: "C"
                            }), Object(f.jsx)(s.a, {
                                label: "C++"
                            }), Object(f.jsx)(s.a, {
                                label: "Python"
                            })]
                        }), Object(f.jsx)("div", {
                            className: t.toggleSwitch,
                            children: Object(f.jsx)(l.a, {
                                control: Object(f.jsx)(b.a, {
                                    checked: k,
                                    onChange: function(e) {
                                        return S(e.target.checked)
                                    },
                                    color: "primary"
                                }),
                                label: "Toggle Dark Theme"
                            })
                        })]
                    }), Object(f.jsx)(u.a, {
                        elevation: 2,
                        className: t.codeContainer,
                        children: D.available ? Object(f.jsx)(d.a, {
                            style: k ? m.a : O.a,
                            language: C[p],
                            children: D.codeString
                        }) : Object(f.jsx)("h2", {
                            className: t.notFound,
                            children: "Not available yet"
                        })
                    })]
                })
            }
        }
    }]);
    