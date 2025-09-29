(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[1], {
        62: function(e, t, n) {
            "use strict";
            var a = n(99)
              , c = n(6);
            t.a = function() {
                return Object(c.jsx)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%"
                    },
                    children: Object(c.jsx)(a.a, {})
                })
            }
        },
        87: function(e, t, n) {},
        98: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0)
              , c = n.n(a)
              , r = n(10)
              , i = n.n(r)
              , o = (n(87),
            n(62))
              , s = n(56)
              , l = n(23)
              , b = n(139)
              , j = n(140)
              , d = n(138)
              , u = n(137)
              , m = n(147)
              , p = n(142)
              , h = n(69)
              , O = n.n(h)
              , x = n(141)
              , f = n(149)
              , g = n(143)
              , v = n(144)
              , k = n(145)
              , y = n(11)
              , w = n(136)
              , C = Object(w.a)((function(e) {
                var t;
                return {
                    navbarRoot: {
                        background: e.palette.background.default,
                        color: e.palette.primary.main,
                        height: "10vh",
                        flexDirection: "row"
                    },
                    toolbar: Object(y.a)({
                        width: "100%",
                        paddingLeft: "5rem",
                        paddingRight: "5rem"
                    }, e.breakpoints.down("1000"), {
                        paddingLeft: "2rem",
                        paddingRight: "2rem"
                    }),
                    menuButton: Object(y.a)({
                        display: "none"
                    }, e.breakpoints.down("1000"), {
                        display: "block"
                    }),
                    drawer: Object(y.a)({
                        display: "none"
                    }, e.breakpoints.down("1000"), {
                        display: "unset"
                    }),
                    list: {
                        width: 240
                    },
                    navItemsContainer: (t = {
                        display: "flex",
                        gap: "1.8rem"
                    },
                    Object(y.a)(t, e.breakpoints.down("1270"), {
                        gap: "0.5rem"
                    }),
                    Object(y.a)(t, e.breakpoints.down("1000"), {
                        display: "none"
                    }),
                    t),
                    navItem: Object(y.a)({
                        fontSize: "1rem"
                    }, e.breakpoints.down("1270"), {
                        fontSize: "0.8rem"
                    }),
                    listItem: {
                        color: e.palette.primary.main
                    }
                }
            }
            ))
              , I = n(12)
              , N = n(6);
            function F(e) {
                var t = e.children
                  , n = Object(u.a)({
                    disableHysteresis: !0,
                    threshold: 0
                });
                return c.a.cloneElement(t, {
                    elevation: n ? 4 : 0
                })
            }
            var L = function(e) {
                var t = Object(I.f)()
                  , n = C()
                  , r = Object(a.useState)(!1)
                  , i = Object(l.a)(r, 2)
                  , o = i[0]
                  , u = i[1]
                  , h = ["Introduction", "List of experiments", "Feedback"]
                  , y = function(e) {
                    var n = e.toLowerCase().replace(/\s/g, "_");
                    t.push("/".concat(n))
                };
                return Object(N.jsxs)(c.a.Fragment, {
                    children: [Object(N.jsx)(d.a, {}), Object(N.jsx)(F, Object(s.a)(Object(s.a)({}, e), {}, {
                        children: Object(N.jsx)(b.a, {
                            position: "sticky",
                            classes: {
                                root: n.navbarRoot
                            },
                            children: Object(N.jsxs)(j.a, {
                                className: n.toolbar,
                                disableGutters: !0,
                                children: [Object(N.jsxs)(m.a, {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    children: [Object(N.jsx)("img", {
                                        alt: "logo",
                                        src: "/logo-dsa-adobe-svg.svg",
                                        onClick: function() {
                                            return y("")
                                        },
                                        style: {
                                            cursor: "pointer",
                                            height: "auto",
                                            maxHeight: "8vh",
                                            transform: "translateY(-3px)"
                                        }
                                    }), Object(N.jsx)(m.a, {
                                        className: n.navItemsContainer,
                                        children: h.map((function(e) {
                                            return Object(N.jsx)(x.a, {
                                                onClick: function() {
                                                    return y(e)
                                                },
                                                color: "primary",
                                                className: n.navItem,
                                                children: e
                                            }, e)
                                        }
                                        ))
                                    })]
                                }), Object(N.jsx)(p.a, {
                                    color: "inherit",
                                    "aria-label": "open drawer",
                                    edge: "start",
                                    onClick: function() {
                                        return u(!0)
                                    },
                                    className: n.menuButton,
                                    children: Object(N.jsx)(O.a, {})
                                })]
                            })
                        })
                    })), Object(N.jsx)(f.a, {
                        className: n.drawer,
                        open: o,
                        onClose: function() {
                            return u(!1)
                        },
                        children: Object(N.jsx)(g.a, {
                            className: n.list,
                            children: h.map((function(e) {
                                return Object(N.jsx)(v.a, {
                                    button: !0,
                                    onClick: function() {
                                        return y(e)
                                    },
                                    className: n.listItem,
                                    children: Object(N.jsx)(k.a, {
                                        primary: e
                                    })
                                }, e)
                            }
                            ))
                        })
                    })]
                })
            }
              , S = n(146)
              , z = Object(w.a)((function(e) {
                return {
                    root: Object(y.a)({
                        marginTop: "3rem",
                        marginLeft: "5rem",
                        marginRight: "5rem"
                    }, e.breakpoints.down("1000"), {
                        marginLeft: "2rem",
                        marginRight: "2rem",
                        marginTop: "2rem"
                    }),
                    feedbackInput: Object(y.a)({
                        width: "50%"
                    }, e.breakpoints.down("800"), {
                        width: "100%"
                    }),
                    submitButton: {
                        marginTop: "2rem",
                        display: "block"
                    }
                }
            }
            ))
              , B = function() {
                var e = z();
                return Object(N.jsxs)("div", {
                    className: e.root,
                    children: [Object(N.jsx)(S.a, {
                        className: e.feedbackInput,
                        multiline: !0,
                        rows: 20,
                        variant: "outlined",
                        label: "Your Feedback"
                    }), Object(N.jsx)(x.a, {
                        className: e.submitButton,
                        variant: "contained",
                        color: "primary",
                        children: "Submit"
                    })]
                })
            }
              , R = Object(a.lazy)((function() {
                return n.e(5).then(n.bind(null, 649))
            }
            ))
              , T = Object(a.lazy)((function() {
                return n.e(13).then(n.bind(null, 653))
            }
            ))
              , P = Object(a.lazy)((function() {
                return n.e(8).then(n.bind(null, 651))
            }
            ))
              , _ = Object(a.lazy)((function() {
                return Promise.all([n.e(9), n.e(12)]).then(n.bind(null, 654))
            }
            ));
            var D = function() {
                return Object(N.jsxs)(N.Fragment, {
                    children: [Object(N.jsx)(L, {}), Object(N.jsx)("main", {
                        children: Object(N.jsx)(a.Suspense, {
                            fallback: Object(N.jsx)(o.a, {}),
                            children: Object(N.jsxs)(I.c, {
                                children: [Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/",
                                    component: R
                                }), Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/introduction",
                                    component: R
                                }), Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/objective",
                                    component: T
                                }), Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/list_of_experiments",
                                    component: P
                                }), Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/experiments",
                                    component: P
                                }), Object(N.jsx)(I.a, {
                                    path: "/experiments/:id",
                                    component: _
                                }), Object(N.jsx)(I.a, {
                                    exact: !0,
                                    path: "/feedback",
                                    component: B
                                })]
                            })
                        })
                    })]
                })
            }
              , E = function(e) {
                e && e instanceof Function && n.e(14).then(n.bind(null, 644)).then((function(t) {
                    var n = t.getCLS
                      , a = t.getFID
                      , c = t.getFCP
                      , r = t.getLCP
                      , i = t.getTTFB;
                    n(e),
                    a(e),
                    c(e),
                    r(e),
                    i(e)
                }
                ))
            }
              , H = n(44);
            i.a.render(Object(N.jsx)(c.a.StrictMode, {
                children: Object(N.jsx)(H.a, {
                    children: Object(N.jsx)(D, {})
                })
            }), document.getElementById("root")),
            E(console.log)
        }
    }, [[98, 2, 4]]]);
    




