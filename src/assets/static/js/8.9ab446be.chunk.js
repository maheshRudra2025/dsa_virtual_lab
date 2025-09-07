(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[8], {
        257: function(e) {
            e.exports = JSON.parse('[{"name":"Sorting Algorithms","subSection":[{"name":"Bubble Sort","route":"bblsort"},{"name":"Selection Sort","route":"selsort"},{"name":"Insertion Sort","route":"inssort"},{"name":"Merge Sort","route":"mrgsort"},{"name":"Quick Sort","route":"qcksort"}]},{"name":"Linked List","subSection":[{"name":"Singly Linked List","route":"sll"},{"name":"Doubly Linked List","route":"dll"},{"name":"Array based Singly Linked List ","route":"all"}]},{"name":"Stack and Queue","subSection":[{"name":"Stack","route":"stk"},{"name":"Queue","route":"que"},{"name":"Deque (Double Ended Queue)","route":"deq"}]},{"name":"Tree","subSection":[{"name":"Binary Search Tree(Array Based)","route":"bstarr"},{"name":"Binary Search Tree(Linked List Based)","route":"bstll"},{"name":"AVL(Adelson-Velsky and Landis) Tree","route":"avl"},{"name":"B-Tree","route":"btree"}]},{"name":"Graph","subSection":[{"name":"BFS(Breadth First Search)","route":"bfs"},{"name":"DFS(Depth First Search)","route":"dfs"},{"name":"Topological Sort","route":"topo"},{"name":"Kruskal\'s Algorithm","route":"kruskals"},{"name":"Prim\'s Algorithm","route":"prims"}]},{"name":"Array","subSection":[{"name":"One Dimentional Array","route":"oda"},{"name":"Two Dimentional Array","route":"tda"}]}]')
        },
        651: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(11)
              , i = n(136)
              , o = Object(i.a)((function(e) {
                var t;
                return {
                    root: Object(r.a)({
                        marginTop: "3rem",
                        marginLeft: "5rem",
                        marginRight: "5rem"
                    }, e.breakpoints.down("1000"), {
                        marginLeft: "2rem",
                        marginRight: "2rem",
                        marginTop: "2rem"
                    }),
                    listRoot: {
                        width: "100%",
                        backgroundColor: e.palette.background.paper,
                        boxShadow: "0 5px 8px rgb(0 0 0 / 10%)",
                        borderRadius: "1rem",
                        color: e.palette.primary.dark
                    },
                    Heading: (t = {},
                    Object(r.a)(t, e.breakpoints.down("900"), {
                        fontSize: [45]
                    }),
                    Object(r.a)(t, e.breakpoints.down("550"), {
                        fontSize: [35]
                    }),
                    Object(r.a)(t, e.breakpoints.down("375"), {
                        fontSize: [30]
                    }),
                    Object(r.a)(t, e.breakpoints.down("330"), {
                        fontSize: [20]
                    }),
                    Object(r.a)(t, e.breakpoints.down("240"), {
                        fontSize: [15]
                    }),
                    t)
                }
            }
            ))
              , a = n(257)
              , s = n(52)
              , c = n(143)
              , u = n(23)
              , l = n(144)
              , d = n(145)
              , m = n(1)
              , b = n(2)
              , p = n(0)
              , h = n(3)
              , f = (n(5),
            n(151))
              , g = n(4)
              , j = n(22)
              , O = n(20)
              , x = n(18)
              , v = n(8)
              , y = p.forwardRef((function(e, t) {
                var n = e.children
                  , r = e.classes
                  , i = e.className
                  , o = e.collapsedHeight
                  , a = void 0 === o ? "0px" : o
                  , s = e.component
                  , c = void 0 === s ? "div" : s
                  , l = e.disableStrictModeCompat
                  , d = void 0 !== l && l
                  , g = e.in
                  , y = e.onEnter
                  , S = e.onEntered
                  , E = e.onEntering
                  , k = e.onExit
                  , L = e.onExited
                  , w = e.onExiting
                  , A = e.style
                  , D = e.timeout
                  , R = void 0 === D ? j.b.standard : D
                  , T = e.TransitionComponent
                  , N = void 0 === T ? f.a : T
                  , H = Object(b.a)(e, ["children", "classes", "className", "collapsedHeight", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"])
                  , B = Object(x.a)()
                  , C = p.useRef()
                  , M = p.useRef(null)
                  , z = p.useRef()
                  , F = "number" === typeof a ? "".concat(a, "px") : a;
                p.useEffect((function() {
                    return function() {
                        clearTimeout(C.current)
                    }
                }
                ), []);
                var q = B.unstable_strictMode && !d
                  , Q = p.useRef(null)
                  , I = Object(v.a)(t, q ? Q : void 0)
                  , J = function(e) {
                    return function(t, n) {
                        if (e) {
                            var r = q ? [Q.current, t] : [t, n]
                              , i = Object(u.a)(r, 2)
                              , o = i[0]
                              , a = i[1];
                            void 0 === a ? e(o) : e(o, a)
                        }
                    }
                }
                  , P = J((function(e, t) {
                    e.style.height = F,
                    y && y(e, t)
                }
                ))
                  , V = J((function(e, t) {
                    var n = M.current ? M.current.clientHeight : 0
                      , r = Object(O.a)({
                        style: A,
                        timeout: R
                    }, {
                        mode: "enter"
                    }).duration;
                    if ("auto" === R) {
                        var i = B.transitions.getAutoHeightDuration(n);
                        e.style.transitionDuration = "".concat(i, "ms"),
                        z.current = i
                    } else
                        e.style.transitionDuration = "string" === typeof r ? r : "".concat(r, "ms");
                    e.style.height = "".concat(n, "px"),
                    E && E(e, t)
                }
                ))
                  , G = J((function(e, t) {
                    e.style.height = "auto",
                    S && S(e, t)
                }
                ))
                  , K = J((function(e) {
                    var t = M.current ? M.current.clientHeight : 0;
                    e.style.height = "".concat(t, "px"),
                    k && k(e)
                }
                ))
                  , _ = J(L)
                  , U = J((function(e) {
                    var t = M.current ? M.current.clientHeight : 0
                      , n = Object(O.a)({
                        style: A,
                        timeout: R
                    }, {
                        mode: "exit"
                    }).duration;
                    if ("auto" === R) {
                        var r = B.transitions.getAutoHeightDuration(t);
                        e.style.transitionDuration = "".concat(r, "ms"),
                        z.current = r
                    } else
                        e.style.transitionDuration = "string" === typeof n ? n : "".concat(n, "ms");
                    e.style.height = F,
                    w && w(e)
                }
                ));
                return p.createElement(N, Object(m.a)({
                    in: g,
                    onEnter: P,
                    onEntered: G,
                    onEntering: V,
                    onExit: K,
                    onExited: _,
                    onExiting: U,
                    addEndListener: function(e, t) {
                        var n = q ? e : t;
                        "auto" === R && (C.current = setTimeout(n, z.current || 0))
                    },
                    nodeRef: q ? Q : void 0,
                    timeout: "auto" === R ? null : R
                }, H), (function(e, t) {
                    return p.createElement(c, Object(m.a)({
                        className: Object(h.a)(r.container, i, {
                            entered: r.entered,
                            exited: !g && "0px" === F && r.hidden
                        }[e]),
                        style: Object(m.a)({
                            minHeight: F
                        }, A),
                        ref: I
                    }, t), p.createElement("div", {
                        className: r.wrapper,
                        ref: M
                    }, p.createElement("div", {
                        className: r.wrapperInner
                    }, n)))
                }
                ))
            }
            ));
            y.muiSupportAuto = !0;
            var S = Object(g.a)((function(e) {
                return {
                    container: {
                        height: 0,
                        overflow: "hidden",
                        transition: e.transitions.create("height")
                    },
                    entered: {
                        height: "auto",
                        overflow: "visible"
                    },
                    hidden: {
                        visibility: "hidden"
                    },
                    wrapper: {
                        display: "flex"
                    },
                    wrapperInner: {
                        width: "100%"
                    }
                }
            }
            ), {
                name: "MuiCollapse"
            })(y)
              , E = n(45)
              , k = Object(E.a)(p.createElement("path", {
                d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
            }), "ExpandLess")
              , L = Object(E.a)(p.createElement("path", {
                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
            }), "ExpandMore")
              , w = n(12)
              , A = Object(i.a)((function(e) {
                return {
                    nested: {
                        paddingLeft: e.spacing(4)
                    },
                    listRoot: {
                        color: e.palette.primary.main
                    }
                }
            }
            ))
              , D = n(6)
              , R = function(e) {
                var t = e.name
                  , n = e.subsection
                  , r = Object(w.f)()
                  , i = A()
                  , o = Object(p.useState)(!1)
                  , a = Object(u.a)(o, 2)
                  , s = a[0]
                  , m = a[1];
                return Object(D.jsxs)(D.Fragment, {
                    children: [Object(D.jsxs)(l.a, {
                        button: !0,
                        onClick: function() {
                            m(!s)
                        },
                        children: [Object(D.jsx)(d.a, {
                            primary: t
                        }), s ? Object(D.jsx)(k, {}) : Object(D.jsx)(L, {})]
                    }), Object(D.jsx)(S, {
                        in: s,
                        timeout: "auto",
                        unmountOnExit: !0,
                        children: Object(D.jsx)(c.a, {
                            className: i.listRoot,
                            component: "div",
                            disablePadding: !0,
                            children: n.map((function(e, t) {
                                return Object(D.jsx)(l.a, {
                                    button: !0,
                                    className: i.nested,
                                    onClick: function() {
                                        return t = e.route,
                                        void r.push("/experiments/".concat(t, "/theory"));
                                        var t
                                    },
                                    children: Object(D.jsx)(d.a, {
                                        primary: e.name
                                    })
                                }, t)
                            }
                            ))
                        })
                    })]
                })
            };
            t.default = function() {
                var e = o();
                return Object(D.jsxs)("div", {
                    className: e.root,
                    children: [Object(D.jsx)(s.a, {
                        className: e.Heading,
                        align: "center",
                        gutterBottom: !0,
                        color: "primary",
                        variant: "h3",
                        children: "List Of Experiments"
                    }), Object(D.jsx)(c.a, {
                        className: e.listRoot,
                        children: a.map((function(e, t) {
                            var n = e.name
                              , r = e.subSection;
                            return Object(D.jsx)(R, {
                                name: n,
                                subsection: r
                            }, t)
                        }
                        ))
                    })]
                })
            }
        }
    }]);
    