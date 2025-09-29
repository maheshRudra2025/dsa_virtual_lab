(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[12], {
        654: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(23)
              , r = t(650)
              , i = t(643)
              , c = t(0)
              , o = t(12)
              , s = t(44)
              , d = t(62)
              , l = t(11)
              , b = t(136)
              , m = Object(b.a)((function(e) {
                var a, t;
                return {
                    root: Object(l.a)({
                        marginTop: "3rem",
                        marginLeft: "5rem",
                        marginRight: "5rem"
                    }, e.breakpoints.down("1000"), {
                        marginLeft: "2rem",
                        marginRight: "2rem",
                        marginTop: "2rem"
                    }),
                    container: {
                        width: "100%",
                        boxShadow: "0 5px 8px rgb(0 0 0 / 20%)",
                        borderRadius: "1rem",
                        minHeight: "75vh",
                        background: "white",
                        marginTop: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        padding: "1rem"
                    },
                    tabs: (a = {
                        background: "transparent",
                        borderRadius: "1.5rem",
                        boxShadow: "0 5px 8px rgba(0, 0, 0, 0.1)"
                    },
                    Object(l.a)(a, e.breakpoints.down("1000"), {
                        borderRadius: "1rem"
                    }),
                    Object(l.a)(a, e.breakpoints.down("880"), {
                        borderRadius: "0.8rem"
                    }),
                    a),
                    tabIndicator: {
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent",
                        "& > span": {
                            width: "70%",
                            backgroundColor: e.palette.secondary.main
                        }
                    },
                    newWraper: {
                        flexDirection: "row",
                        gap: "1rem"
                    },
                    selectedTab: (t = {
                        borderRadius: "1.5rem",
                        background: "white",
                        boxShadow: "0 5px 8px rgb(0 0 0 / 10%)",
                        transition: "all 0.5s ease-in"
                    },
                    Object(l.a)(t, e.breakpoints.down("1000"), {
                        borderRadius: "1rem"
                    }),
                    Object(l.a)(t, e.breakpoints.down("880"), {
                        borderRadius: "0.8rem"
                    }),
                    t)
                }
            }
            ))
              , p = t(6)
              , u = Object(c.lazy)((function() {
                return t.e(7).then(t.bind(null, 655))
            }
            ))
              , j = Object(c.lazy)((function() {
                return Promise.all([t.e(0), t.e(3), t.e(11)]).then(t.bind(null, 656))
            }
            ))
              , h = Object(c.lazy)((function() {
                return Promise.all([t.e(0), t.e(6), t.e(10)]).then(t.bind(null, 657))
            }
            ));
            a.default = function() {
                var e = Object(o.g)()
                  , a = Object(o.h)()
                  , t = m()
                  , l = Object(c.useState)()
                  , b = Object(n.a)(l, 2)
                  , x = b[0]
                  , O = b[1]
                  , f = function() {
                    var e = document.documentElement.clientWidth;
                    O(e)
                };
                Object(c.useEffect)((function() {
                    return f(),
                    window.addEventListener("resize", (function(e) {
                        f()
                    }
                    )),
                    function() {
                        window.removeEventListener("resize", (function(e) {
                            return console.log(e)
                        }
                        ))
                    }
                }
                ), []);
                var g = [{
                    name: "Theory",
                    pathname: "".concat(a.url, "/theory")
                }, {
                    name: "Code",
                    pathname: "".concat(a.url, "/code")
                }, {
                    name: "Visualisation",
                    pathname: "".concat(a.url, "/visualisation")
                }];
                return Object(p.jsxs)("div", {
                    className: t.root,
                    children: [Object(p.jsx)(r.a, {
                        className: t.tabs,
                        variant: x > 880 ? "fullWidth" : "scrollable",
                        value: e.pathname,
                        classes: {
                            indicator: t.tabIndicator
                        },
                        TabIndicatorProps: {
                            children: Object(p.jsx)("span", {})
                        },
                        scrollButtons: "on",
                        textColor: "secondary",
                        children: g.map((function(e) {
                            return Object(p.jsx)(i.a, {
                                label: e.name,
                                value: e.pathname,
                                component: s.b,
                                to: e.pathname,
                                classes: {
                                    wrapper: t.newWraper,
                                    selected: t.selectedTab
                                }
                            }, e.name)
                        }
                        ))
                    }), Object(p.jsx)("div", {
                        className: t.container,
                        children: Object(p.jsx)(c.Suspense, {
                            fallback: Object(p.jsx)(d.a, {}),
                            children: Object(p.jsxs)(o.c, {
                                children: [Object(p.jsx)(o.a, {
                                    exact: !0,
                                    path: a.url,
                                    children: Object(p.jsx)(j, {
                                        param: a.params.id
                                    })
                                }), Object(p.jsx)(o.a, {
                                    exact: !0,
                                    path: g[0].pathname,
                                    children: Object(p.jsx)(j, {
                                        param: a.params.id
                                    })
                                }), Object(p.jsx)(o.a, {
                                    exact: !0,
                                    path: g[1].pathname,
                                    children: Object(p.jsx)(h, {
                                        param: a.params.id
                                    })
                                }), Object(p.jsx)(o.a, {
                                    exact: !0,
                                    path: g[2].pathname,
                                    children: Object(p.jsx)(u, {
                                        param: a.params.id
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        }
    }]);
    