(this.webpackJsonpvisualisation = this.webpackJsonpvisualisation || []).push([[7], {
        258: function(t) {
            t.exports = JSON.parse('{"bfs":"/algorithms/BFS.html","dfs":"/algorithms/DFS.html","bblsort":"/algorithms/ComparisonSort.html","selsort":"/algorithms/ComparisonSort.html","inssort":"/algorithms/ComparisonSort.html","mrgsort":"/algorithms/ComparisonSort.html","qcksort":"/algorithms/ComparisonSort.html","oda":"/algorithms/StackArray.html","tda":"/algorithms/StackArray.html","sll":"/algorithms/StackLL.html","dll":"/algorithms/StackLL.html","all":"/algorithms/StackLL.html","stk":"/algorithms/StackArray.html","que":"/algorithms/QueueArray.html","deq":"/algorithms/QueueArray.html","bstarr":"/algorithms/BST.html","bstll":"/algorithms/BST.html","avl":"/algorithms/AVLtree.html","btree":"/algorithms/BTree.html","topo":"/algorithms/TopoSortDFS.html","kruskals":"/algorithms/Kruskal.html","prims":"/algorithms/Prim.html"}')
        },
        655: function(t, r, a) {
            "use strict";
            a.r(r);
            var l = a(136)
              , s = Object(l.a)((function(t) {
                return {
                    root: {
                        width: "100%",
                        flex: 1,
                        borderRadius: "1rem"
                    },
                    iframe: {
                        width: "100%",
                        height: 650,
                        border: "none"
                    }
                }
            }
            ))
              , o = a(258)
              , m = a(6);
            r.default = function(t) {
                var r = t.param
                  , a = s();
                return Object(m.jsx)("div", {
                    className: a.root,
                    children: Object(m.jsx)("iframe", {
                        title: r,
                        className: a.iframe,
                        src: o[r]
                    })
                })
            }
        }
    }]);
    