(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[5], {
        253: function(e, t, a) {
            "use strict";
            var r = a(72)
              , n = a(73);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var o = n(a(0))
              , c = (0,
            r(a(74)).default)(o.createElement("path", {
                d: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
            }), "Build");
            t.default = c
        },
        254: function(e, t, a) {
            "use strict";
            var r = a(72)
              , n = a(73);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var o = n(a(0))
              , c = (0,
            r(a(74)).default)(o.createElement("path", {
                d: "M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
            }), "LaptopMac");
            t.default = c
        },
        255: function(e, t, a) {
            "use strict";
            var r = a(72)
              , n = a(73);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var o = n(a(0))
              , c = (0,
            r(a(74)).default)(o.createElement("path", {
                d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
            }), "List");
            t.default = c
        },
        256: function(e, t, a) {
            "use strict";
            var r = a(72)
              , n = a(73);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = void 0;
            var o = n(a(0))
              , c = (0,
            r(a(74)).default)(o.createElement("path", {
                d: "M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
            }), "Repeat");
            t.default = c
        },
        649: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a(23)
              , n = a(11)
              , o = a(136)
              , c = Object(o.a)((function(e) {
                return {
                    root: Object(n.a)({
                        marginTop: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginLeft: "5rem",
                        marginRight: "5rem"
                    }, e.breakpoints.down("1000"), {
                        marginLeft: "2rem",
                        marginRight: "2rem",
                        marginTop: "2rem"
                    }),
                    paper: {
                        padding: "6px 16px"
                    },
                    secondaryTail: {
                        backgroundColor: e.palette.secondary.main
                    }
                }
            }
            ))
              , i = a(1)
              , l = a(2)
              , s = a(0)
              , d = (a(5),
            a(3))
              , u = a(7)
              , m = a(4);
            var j = s.createContext({})
              , h = s.forwardRef((function(e, t) {
                var a = e.align
                  , r = void 0 === a ? "left" : a
                  , n = e.classes
                  , o = e.className
                  , c = Object(l.a)(e, ["align", "classes", "className"]);
                return s.createElement(j.Provider, {
                    value: {
                        align: r
                    }
                }, s.createElement("ul", Object(i.a)({
                    className: Object(d.a)(n.root, n["align".concat(Object(u.a)(r))], o),
                    ref: t
                }, c)))
            }
            ))
              , b = Object(m.a)((function() {
                return {
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        padding: "6px 16px",
                        flexGrow: 1
                    },
                    alignLeft: {},
                    alignRight: {},
                    alignAlternate: {}
                }
            }
            ), {
                name: "MuiTimeline"
            })(h)
              , p = a(30);
            var f = s.createContext({})
              , v = s.forwardRef((function(e, t) {
                var a = e.classes
                  , r = e.className
                  , n = Object(l.a)(e, ["classes", "className"])
                  , o = s.useContext(j).align
                  , c = void 0 === o ? "left" : o
                  , m = !1;
                return s.Children.forEach(e.children, (function(e) {
                    Object(p.a)(e, ["TimelineOppositeContent"]) && (m = !0)
                }
                )),
                s.createElement(f.Provider, {
                    value: {
                        classes: {
                            content: a.content,
                            oppositeContent: a.oppositeContent
                        }
                    }
                }, s.createElement("li", Object(i.a)({
                    className: Object(d.a)(a.root, a["align".concat(Object(u.a)(c))], r, !m && a.missingOppositeContent),
                    ref: t
                }, n)))
            }
            ))
              , x = Object(m.a)((function() {
                return {
                    root: {
                        listStyle: "none",
                        display: "flex",
                        position: "relative",
                        minHeight: 70
                    },
                    alignLeft: {},
                    alignRight: {
                        flexDirection: "row-reverse"
                    },
                    alignAlternate: {
                        "&:nth-child(even)": {
                            flexDirection: "row-reverse",
                            "& $content": {
                                textAlign: "right"
                            },
                            "& $oppositeContent": {
                                textAlign: "left"
                            }
                        }
                    },
                    missingOppositeContent: {
                        "&:before": {
                            content: '""',
                            flex: 1,
                            padding: "6px 16px"
                        }
                    },
                    content: {},
                    oppositeContent: {}
                }
            }
            ), {
                name: "MuiTimelineItem"
            })(v)
              , O = s.forwardRef((function(e, t) {
                var a = e.classes
                  , r = e.className
                  , n = Object(l.a)(e, ["classes", "className"]);
                return s.createElement("div", Object(i.a)({
                    className: Object(d.a)(a.root, r),
                    ref: t
                }, n))
            }
            ))
              , g = Object(m.a)((function() {
                return {
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 0,
                        alignItems: "center"
                    }
                }
            }
            ), {
                name: "MuiTimelineSeparator"
            })(O)
              , y = s.forwardRef((function(e, t) {
                var a = e.classes
                  , r = e.className
                  , n = Object(l.a)(e, ["classes", "className"]);
                return s.createElement("span", Object(i.a)({
                    className: Object(d.a)(a.root, r),
                    ref: t
                }, n))
            }
            ))
              , w = Object(m.a)((function(e) {
                return {
                    root: {
                        width: 2,
                        backgroundColor: e.palette.grey[400],
                        flexGrow: 1
                    }
                }
            }
            ), {
                name: "MuiTimelineConnector"
            })(y)
              , C = s.forwardRef((function(e, t) {
                var a = e.classes
                  , r = e.className
                  , n = Object(l.a)(e, ["classes", "className"])
                  , o = s.useContext(j).align
                  , c = void 0 === o ? "left" : o
                  , m = s.useContext(f).classes
                  , h = void 0 === m ? {} : m;
                return s.createElement("div", Object(i.a)({
                    className: Object(d.a)(a.root, h.content, a["align".concat(Object(u.a)(c))], r),
                    ref: t
                }, n))
            }
            ))
              , N = Object(m.a)((function() {
                return {
                    root: {
                        flex: 1,
                        padding: "6px 16px"
                    },
                    alignRight: {
                        textAlign: "right"
                    }
                }
            }
            ), {
                name: "MuiTimelineContent"
            })(C)
              , E = s.forwardRef((function(e, t) {
                var a = e.classes
                  , r = e.className
                  , n = e.color
                  , o = void 0 === n ? "grey" : n
                  , c = e.variant
                  , m = void 0 === c ? "default" : c
                  , j = Object(l.a)(e, ["classes", "className", "color", "variant"]);
                return s.createElement("span", Object(i.a)({
                    className: Object(d.a)(a.root, r, "inherit" !== o && a["".concat(m).concat(Object(u.a)(o))]),
                    ref: t
                }, j))
            }
            ))
              , M = Object(m.a)((function(e) {
                return {
                    root: {
                        display: "flex",
                        alignSelf: "baseline",
                        borderStyle: "solid",
                        borderWidth: 2,
                        padding: 4,
                        borderRadius: "50%",
                        boxShadow: e.shadows[2],
                        marginTop: 8,
                        marginBottom: 8
                    },
                    defaultGrey: {
                        borderColor: "transparent",
                        color: e.palette.grey[50],
                        backgroundColor: e.palette.grey[400]
                    },
                    outlinedGrey: {
                        boxShadow: "none",
                        color: e.palette.grey.contrastText,
                        borderColor: e.palette.grey[400],
                        backgroundColor: "transparent"
                    },
                    defaultPrimary: {
                        borderColor: "transparent",
                        color: e.palette.primary.contrastText,
                        backgroundColor: e.palette.primary.main
                    },
                    outlinedPrimary: {
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        borderColor: e.palette.primary.main
                    },
                    defaultSecondary: {
                        borderColor: "transparent",
                        color: e.palette.secondary.contrastText,
                        backgroundColor: e.palette.secondary.main
                    },
                    outlinedSecondary: {
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        borderColor: e.palette.secondary.main
                    }
                }
            }
            ), {
                name: "MuiTimelineDot"
            })(E)
              , T = a(254)
              , z = a.n(T)
              , S = a(256)
              , L = a.n(S)
              , k = a(101)
              , H = a(52)
              , R = a(143)
              , A = a(144)
              , P = a(253)
              , D = a.n(P)
              , _ = a(255)
              , B = a.n(_)
              , V = a(6);
            t.default = function() {
                var e = c()
                  , t = Object(s.useState)()
                  , a = Object(r.a)(t, 2)
                  , n = a[0]
                  , o = a[1]
                  , i = function() {
                    var e = document.documentElement.clientWidth;
                    o(e)
                };
                return Object(s.useEffect)((function() {
                    return i(),
                    window.addEventListener("resize", (function(e) {
                        i()
                    }
                    )),
                    function() {
                        window.removeEventListener("resize", (function(e) {
                            return console.log(e)
                        }
                        ))
                    }
                }
                ), []),
                Object(V.jsx)("div", {
                    className: e.root,
                    children: Object(V.jsxs)(b, {
                        style: n > 880 ? {
                            width: "100%"
                        } : {
                            width: "200%",
                            transform: "translateX(-25%)",
                            padding: 0
                        },
                        align: n > 800 ? "alternate" : "left",
                        children: [Object(V.jsxs)(x, {
                            children: [Object(V.jsxs)(g, {
                                children: [Object(V.jsx)(M, {
                                    color: "primary",
                                    children: Object(V.jsx)(D.a, {})
                                }), Object(V.jsx)(w, {})]
                            }), Object(V.jsx)(N, {
                                children: Object(V.jsxs)(k.a, {
                                    elevation: 3,
                                    className: e.paper,
                                    children: [Object(V.jsx)(H.a, {
                                        color: "primary",
                                        gutterBottom: !0,
                                        variant: "h6",
                                        component: "h1",
                                        children: "What is a Virtual Lab?"
                                    }), Object(V.jsx)(H.a, {
                                        children: "In the most general sense, virtual lab aims to provide the facilities online that is provided by a physical lab, i.e., it provides a simulated learning environment that allow to complete laboratory experiments online. It helps in understanding the concepts and experiments without the use of scarce costly equipments. Another view of the virtual laboratory is as a tool for distance learning and/or experimentation that allows to share knowledge, data, voice, video, tools, etc."
                                    })]
                                })
                            })]
                        }), Object(V.jsxs)(x, {
                            children: [Object(V.jsxs)(g, {
                                children: [Object(V.jsx)(M, {
                                    color: "secondary",
                                    children: Object(V.jsx)(z.a, {})
                                }), Object(V.jsx)(w, {})]
                            }), Object(V.jsx)(N, {
                                children: Object(V.jsxs)(k.a, {
                                    elevation: 3,
                                    className: e.paper,
                                    children: [Object(V.jsx)(H.a, {
                                        color: "secondary",
                                        gutterBottom: !0,
                                        variant: "h6",
                                        component: "h1",
                                        children: "Virtual Lab for Data Structures and Algorithms"
                                    }), Object(V.jsx)(H.a, {
                                        children: "Here, the second view of the virtual lab is adopted for the Data Structures and Algorithms as it fits best for this course to share the knowledge using theory, algorithm, and demonstration. The students may understand and experiment with the codes locally at their computing device."
                                    })]
                                })
                            })]
                        }), Object(V.jsxs)(x, {
                            children: [Object(V.jsxs)(g, {
                                children: [Object(V.jsx)(M, {
                                    color: "primary",
                                    children: Object(V.jsx)(B.a, {})
                                }), Object(V.jsx)(w, {
                                    className: e.secondaryTail
                                })]
                            }), Object(V.jsx)(N, {
                                children: Object(V.jsxs)(k.a, {
                                    elevation: 3,
                                    className: e.paper,
                                    children: [Object(V.jsx)(H.a, {
                                        color: "primary",
                                        gutterBottom: !0,
                                        variant: "h6",
                                        component: "h1",
                                        children: "Salient Features"
                                    }), Object(V.jsxs)(R.a, {
                                        style: {
                                            fontSize: "1rem"
                                        },
                                        children: [Object(V.jsx)(A.a, {
                                            children: "Anywhere anytime laboratory"
                                        }), Object(V.jsx)(A.a, {
                                            children: "Free to use"
                                        }), Object(V.jsx)(A.a, {
                                            children: "Accessibility through PC/laptop/tablet/smartphone"
                                        }), Object(V.jsx)(A.a, {
                                            children: "Facilitates Learning at self-pace"
                                        })]
                                    })]
                                })
                            })]
                        }), Object(V.jsxs)(x, {
                            children: [Object(V.jsx)(g, {
                                children: Object(V.jsx)(M, {
                                    color: "secondary",
                                    children: Object(V.jsx)(L.a, {})
                                })
                            }), Object(V.jsx)(N, {
                                children: Object(V.jsxs)(k.a, {
                                    elevation: 3,
                                    className: e.paper,
                                    children: [Object(V.jsx)(H.a, {
                                        color: "secondary",
                                        gutterBottom: !0,
                                        variant: "h6",
                                        component: "h1",
                                        children: "Explore"
                                    }), Object(V.jsx)(H.a, {
                                        children: "Go to List Of Experiments for more"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        }
    }]);
    