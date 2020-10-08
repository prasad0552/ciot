parcelRequire = function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire, o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[n][1][r] || r
            };
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) {
            return u(p.resolve(e))
        }
    }

    u.isParcelRequire = !0, u.Module = function (e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
        e[r] = [function (e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "vCxL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.__extends = e, exports.__rest = n, exports.__decorate = o, exports.__param = a, exports.__metadata = u, exports.__awaiter = i, exports.__generator = c, exports.__exportStar = f, exports.__values = l, exports.__read = s, exports.__spread = p, exports.__await = y, exports.__asyncGenerator = _, exports.__asyncDelegator = h, exports.__asyncValues = b, exports.__makeTemplateObject = v, exports.__importStar = d, exports.__importDefault = w;
        var t = function (e, r) {
            return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
            })(e, r)
        };

        function e(e, r) {
            function n() {
                this.constructor = e
            }

            t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
        }

        var r = exports.__assign = function () {
            return exports.__assign = r = Object.assign || function (t) {
                for (var e, r = 1, n = arguments.length; r < n; r++) for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }, r.apply(this, arguments)
        };

        function n(t, e) {
            var r = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]])
            }
            return r
        }

        function o(t, e, r, n) {
            var o, a = arguments.length, u = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, r, n); else for (var i = t.length - 1; i >= 0; i--) (o = t[i]) && (u = (a < 3 ? o(u) : a > 3 ? o(e, r, u) : o(e, r)) || u);
            return a > 3 && u && Object.defineProperty(e, r, u), u
        }

        function a(t, e) {
            return function (r, n) {
                e(r, n, t)
            }
        }

        function u(t, e) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
        }

        function i(t, e, r, n) {
            return new (r || (r = Promise))(function (o, a) {
                function u(t) {
                    try {
                        c(n.next(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function i(t) {
                    try {
                        c(n.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function c(t) {
                    t.done ? o(t.value) : new r(function (e) {
                        e(t.value)
                    }).then(u, i)
                }

                c((n = n.apply(t, e || [])).next())
            })
        }

        function c(t, e) {
            var r, n, o, a, u = {
                label: 0, sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                }, trys: [], ops: []
            };
            return a = {next: i(0), throw: i(1), return: i(2)}, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }), a;

            function i(a) {
                return function (i) {
                    return function (a) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; u;) try {
                            if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                            switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                case 0:
                                case 1:
                                    o = a;
                                    break;
                                case 4:
                                    return u.label++, {value: a[1], done: !1};
                                case 5:
                                    u.label++, n = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = u.ops.pop(), u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                        u.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && u.label < o[1]) {
                                        u.label = o[1], o = a;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2], u.ops.push(a);
                                        break
                                    }
                                    o[2] && u.ops.pop(), u.trys.pop();
                                    continue
                            }
                            a = e.call(t, u)
                        } catch (t) {
                            a = [6, t], n = 0
                        } finally {
                            r = o = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {value: a[0] ? a[1] : void 0, done: !0}
                    }([a, i])
                }
            }
        }

        function f(t, e) {
            for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
        }

        function l(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator], r = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t}
                }
            }
        }

        function s(t, e) {
            var r = "function" == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n, o, a = r.call(t), u = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = a.next()).done;) u.push(n.value)
            } catch (t) {
                o = {error: t}
            } finally {
                try {
                    n && !n.done && (r = a.return) && r.call(a)
                } finally {
                    if (o) throw o.error
                }
            }
            return u
        }

        function p() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
            return t
        }

        function y(t) {
            return this instanceof y ? (this.v = t, this) : new y(t)
        }

        function _(t, e, r) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, o = r.apply(t, e || []), a = [];
            return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function () {
                return this
            }, n;

            function u(t) {
                o[t] && (n[t] = function (e) {
                    return new Promise(function (r, n) {
                        a.push([t, e, r, n]) > 1 || i(t, e)
                    })
                })
            }

            function i(t, e) {
                try {
                    (r = o[t](e)).value instanceof y ? Promise.resolve(r.value.v).then(c, f) : l(a[0][2], r)
                } catch (t) {
                    l(a[0][3], t)
                }
                var r
            }

            function c(t) {
                i("next", t)
            }

            function f(t) {
                i("throw", t)
            }

            function l(t, e) {
                t(e), a.shift(), a.length && i(a[0][0], a[0][1])
            }
        }

        function h(t) {
            var e, r;
            return e = {}, n("next"), n("throw", function (t) {
                throw t
            }), n("return"), e[Symbol.iterator] = function () {
                return this
            }, e;

            function n(n, o) {
                e[n] = t[n] ? function (e) {
                    return (r = !r) ? {value: y(t[n](e)), done: "return" === n} : o ? o(e) : e
                } : o
            }
        }

        function b(t) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, r = t[Symbol.asyncIterator];
            return r ? r.call(t) : (t = "function" == typeof l ? l(t) : t[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function () {
                return this
            }, e);

            function n(r) {
                e[r] = t[r] && function (e) {
                    return new Promise(function (n, o) {
                        (function (t, e, r, n) {
                            Promise.resolve(n).then(function (e) {
                                t({value: e, done: r})
                            }, e)
                        })(n, o, (e = t[r](e)).done, e.value)
                    })
                }
            }
        }

        function v(t, e) {
            return Object.defineProperty ? Object.defineProperty(t, "raw", {value: e}) : t.raw = e, t
        }

        function d(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }

        function w(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {}], "pT13": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var d = exports.name = "d3", s = exports.version = "5.7.0", t = exports.description = "Data-Driven Documents", e = exports.keywords = ["dom", "visualization", "svg", "animation", "canvas"], i = exports.homepage = "https://d3js.org", o = exports.license = "BSD-3-Clause", r = exports.author = {name: "Mike Bostock", url: "https://bost.ocks.org/mike"}, p = exports.main = "dist/d3.node.js", a = exports.unpkg = "dist/d3.min.js", n = exports.jsdelivr = "dist/d3.min.js", m = "index.js";
        exports.module = m;
        var c = exports.repository = {type: "git", url: "https://github.com/d3/d3.git"}, l = exports.scripts = {
            pretest: "rimraf dist && mkdir dist && json2module package.json > dist/package.js && node rollup.node",
            test: "tape 'test/**/*-test.js'",
            prepublishOnly: "yarn test && rollup -c",
            postpublish: 'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js'
        }, g = exports.devDependencies = {json2module: "0.0", rimraf: "2", rollup: "0.64", "rollup-plugin-ascii": "0.0", "rollup-plugin-node-resolve": "3", "rollup-plugin-terser": "1", tape: "4"}, u = exports.dependencies = {
            "d3-array": "1",
            "d3-axis": "1",
            "d3-brush": "1",
            "d3-chord": "1",
            "d3-collection": "1",
            "d3-color": "1",
            "d3-contour": "1",
            "d3-dispatch": "1",
            "d3-drag": "1",
            "d3-dsv": "1",
            "d3-ease": "1",
            "d3-fetch": "1",
            "d3-force": "1",
            "d3-format": "1",
            "d3-geo": "1",
            "d3-hierarchy": "1",
            "d3-interpolate": "1",
            "d3-path": "1",
            "d3-polygon": "1",
            "d3-quadtree": "1",
            "d3-random": "1",
            "d3-scale": "2",
            "d3-scale-chromatic": "1",
            "d3-selection": "1",
            "d3-shape": "1",
            "d3-time": "1",
            "d3-time-format": "2",
            "d3-timer": "1",
            "d3-transition": "1",
            "d3-voronoi": "1",
            "d3-zoom": "1"
        };
    }, {}], "yJgn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        };
    }, {}], "CQHQ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return 1 === e.length && (e = r(e)), {
                left: function (n, t, r, u) {
                    for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
                        var l = r + u >>> 1;
                        e(n[l], t) < 0 ? r = l + 1 : u = l
                    }
                    return r
                }, right: function (n, t, r, u) {
                    for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
                        var l = r + u >>> 1;
                        e(n[l], t) > 0 ? u = l : r = l + 1
                    }
                    return r
                }
            }
        };
        var e = require("./ascending"), n = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(e) {
            return function (t, r) {
                return (0, n.default)(e(t), r)
            }
        }
    }, {"./ascending": "yJgn"}], "+YrT": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.bisectLeft = exports.bisectRight = void 0;
        var e = require("./ascending"), t = i(e), r = require("./bisector"), s = i(r);

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = (0, s.default)(t.default), u = exports.bisectRight = o.right, c = exports.bisectLeft = o.left;
        exports.default = u;
    }, {"./ascending": "yJgn", "./bisector": "CQHQ"}], "DkXH": [function (require, module, exports) {
        "use strict";

        function e(e, r) {
            return [e, r]
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t) {
            null == t && (t = e);
            for (var n = 0, u = r.length - 1, o = r[0], l = new Array(u < 0 ? 0 : u); n < u;) l[n] = t(o, o = r[++n]);
            return l
        }, exports.pair = e;
    }, {}], "LKVk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t, n) {
            var u, a, l, o, i = r.length, s = t.length, f = new Array(i * s);
            for (null == n && (n = e.pair), u = l = 0; u < i; ++u) for (o = r[u], a = 0; a < s; ++a, ++l) f[l] = n(o, t[a]);
            return f
        };
        var e = require("./pairs");
    }, {"./pairs": "DkXH"}], "fBAz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        };
    }, {}], "X/WL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return null === e ? NaN : +e
        };
    }, {}], "Nh5Q": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var u, f, l = e.length, n = 0, a = -1, i = 0, o = 0;
            if (null == t) for (; ++a < l;) isNaN(u = (0, r.default)(e[a])) || (o += (f = u - i) * (u - (i += f / ++n))); else for (; ++a < l;) isNaN(u = (0, r.default)(t(e[a], a, e))) || (o += (f = u - i) * (u - (i += f / ++n)));
            if (n > 1) return o / (n - 1)
        };
        var e = require("./number"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./number": "X/WL"}], "WEAa": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var u = (0, r.default)(e, t);
            return u ? Math.sqrt(u) : u
        };
        var e = require("./variance"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./variance": "Nh5Q"}], "UaWb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, l) {
            var r, u, f, n = e.length, t = -1;
            if (null == l) {
                for (; ++t < n;) if (null != (r = e[t]) && r >= r) for (u = f = r; ++t < n;) null != (r = e[t]) && (u > r && (u = r), f < r && (f = r))
            } else for (; ++t < n;) if (null != (r = l(e[t], t, e)) && r >= r) for (u = f = r; ++t < n;) null != (r = l(e[t], t, e)) && (u > r && (u = r), f < r && (f = r));
            return [u, f]
        };
    }, {}], "RkzJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = Array.prototype, r = exports.slice = e.slice, t = exports.map = e.map;
    }, {}], "aCvo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return function () {
                return e
            }
        };
    }, {}], "NNW9": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return e
        };
    }, {}], "wcAU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, r) {
            e = +e, t = +t, r = (n = arguments.length) < 2 ? (t = e, e = 0, 1) : n < 3 ? 1 : +r;
            for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n;) o[a] = e + a * r;
            return o
        };
    }, {}], "E/uz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, r, a) {
            var o, M, h, i, n = -1;
            if (a = +a, (t = +t) === (r = +r) && a > 0) return [t];
            if ((o = r < t) && (M = t, t = r, r = M), 0 === (i = e(t, r, a)) || !isFinite(i)) return [];
            if (i > 0) for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array(M = Math.ceil(r - t + 1)); ++n < M;) h[n] = (t + n) * i; else for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array(M = Math.ceil(t - r + 1)); ++n < M;) h[n] = (t - n) / i;
            return o && h.reverse(), h
        }, exports.tickIncrement = e, exports.tickStep = o;
        var t = Math.sqrt(50), r = Math.sqrt(10), a = Math.sqrt(2);

        function e(e, o, M) {
            var h = (o - e) / Math.max(0, M), i = Math.floor(Math.log(h) / Math.LN10), n = h / Math.pow(10, i);
            return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1)
        }

        function o(e, o, M) {
            var h = Math.abs(o - e) / Math.max(0, M), i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)), n = h / i;
            return n >= t ? i *= 10 : n >= r ? i *= 5 : n >= a && (i *= 2), o < e ? -i : i
        }
    }, {}], "J0XR": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return Math.ceil(Math.log(e.length) / Math.LN2) + 1
        };
    }, {}], "3d5T": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var r = o.default, u = f.default, a = h.default;

            function i(e) {
                var n, f, i = e.length, o = new Array(i);
                for (n = 0; n < i; ++n) o[n] = r(e[n], n, e);
                var l = u(o), d = l[0], h = l[1], y = a(o, d, h);
                Array.isArray(y) || (y = (0, c.tickStep)(d, h, y), y = (0, s.default)(Math.ceil(d / y) * y, h, y));
                for (var p = y.length; y[0] <= d;) y.shift(), --p;
                for (; y[p - 1] > h;) y.pop(), --p;
                var q, v = new Array(p + 1);
                for (n = 0; n <= p; ++n) (q = v[n] = []).x0 = n > 0 ? y[n - 1] : d, q.x1 = n < p ? y[n] : h;
                for (n = 0; n < i; ++n) d <= (f = o[n]) && f <= h && v[(0, t.default)(y, f, 0, p)].push(e[n]);
                return v
            }

            return i.value = function (e) {
                return arguments.length ? (r = "function" == typeof e ? e : (0, n.default)(e), i) : r
            }, i.domain = function (e) {
                return arguments.length ? (u = "function" == typeof e ? e : (0, n.default)([e[0], e[1]]), i) : u
            }, i.thresholds = function (r) {
                return arguments.length ? (a = "function" == typeof r ? r : Array.isArray(r) ? (0, n.default)(e.slice.call(r)) : (0, n.default)(r), i) : a
            }, i
        };
        var e = require("./array"), r = require("./bisect"), t = y(r), u = require("./constant"), n = y(u), a = require("./extent"), f = y(a), i = require("./identity"), o = y(i), l = require("./range"), s = y(l), c = require("./ticks"), d = require("./threshold/sturges"), h = y(d);

        function y(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./array": "RkzJ", "./bisect": "+YrT", "./constant": "aCvo", "./extent": "UaWb", "./identity": "NNW9", "./range": "wcAU", "./ticks": "E/uz", "./threshold/sturges": "J0XR"}], "xM5B": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, u) {
            if (null == u && (u = r.default), n = e.length) {
                if ((t = +t) <= 0 || n < 2) return +u(e[0], 0, e);
                if (t >= 1) return +u(e[n - 1], n - 1, e);
                var n, f = (n - 1) * t, l = Math.floor(f), o = +u(e[l], l, e);
                return o + (+u(e[l + 1], l + 1, e) - o) * (f - l)
            }
        };
        var e = require("./number"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./number": "X/WL"}], "nJJ4": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, u, l) {
            return r = e.map.call(r, a.default).sort(t.default), Math.ceil((l - u) / (2 * ((0, n.default)(r, .75) - (0, n.default)(r, .25)) * Math.pow(r.length, -1 / 3)))
        };
        var e = require("../array"), r = require("../ascending"), t = i(r), u = require("../number"), a = i(u), l = require("../quantile"), n = i(l);

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../array": "RkzJ", "../ascending": "yJgn", "../number": "X/WL", "../quantile": "xM5B"}], "Rqev": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r, u) {
            return Math.ceil((u - r) / (3.5 * (0, t.default)(e) * Math.pow(e.length, -1 / 3)))
        };
        var e = require("../deviation"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../deviation": "WEAa"}], "9Oug": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, l) {
            var r, u, f = e.length, n = -1;
            if (null == l) {
                for (; ++n < f;) if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) null != (r = e[n]) && r > u && (u = r)
            } else for (; ++n < f;) if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) null != (r = l(e[n], n, e)) && r > u && (u = r);
            return u
        };
    }, {}], "Y/y5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var u, f = e.length, l = f, n = -1, a = 0;
            if (null == t) for (; ++n < f;) isNaN(u = (0, r.default)(e[n])) ? --l : a += u; else for (; ++n < f;) isNaN(u = (0, r.default)(t(e[n], n, e))) ? --l : a += u;
            if (l) return a / l
        };
        var e = require("./number"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./number": "X/WL"}], "CxwF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var l, n = e.length, s = -1, f = [];
            if (null == r) for (; ++s < n;) isNaN(l = (0, t.default)(e[s])) || f.push(l); else for (; ++s < n;) isNaN(l = (0, t.default)(r(e[s], s, e))) || f.push(l);
            return (0, a.default)(f.sort(u.default), .5)
        };
        var e = require("./ascending"), u = n(e), r = require("./number"), t = n(r), l = require("./quantile"), a = n(l);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./ascending": "yJgn", "./number": "X/WL", "./quantile": "xM5B"}], "Getd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var r, t, n, o = e.length, f = -1, l = 0; ++f < o;) l += e[f].length;
            for (t = new Array(l); --o >= 0;) for (r = (n = e[o]).length; --r >= 0;) t[--l] = n[r];
            return t
        };
    }, {}], "kP8m": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, l) {
            var r, u, f = e.length, n = -1;
            if (null == l) {
                for (; ++n < f;) if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) null != (r = e[n]) && u > r && (u = r)
            } else for (; ++n < f;) if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) null != (r = l(e[n], n, e)) && u > r && (u = r);
            return u
        };
    }, {}], "RhiG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            for (var t = r.length, n = new Array(t); t--;) n[t] = e[r[t]];
            return n
        };
    }, {}], "swlo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if (u = e.length) {
                var u, n, l = 0, o = 0, d = e[o];
                for (null == t && (t = r.default); ++l < u;) (t(n = e[l], d) < 0 || 0 !== t(d, d)) && (d = n, o = l);
                return 0 === t(d, d) ? o : void 0
            }
        };
        var e = require("./ascending"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./ascending": "yJgn"}], "Xskt": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, r) {
            for (var l, n, u = (null == r ? e.length : r) - (t = null == t ? 0 : +t); u;) n = Math.random() * u-- | 0, l = e[u + t], e[u + t] = e[n + t], e[n + t] = l;
            return e
        };
    }, {}], "u/fm": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var t, l = e.length, o = -1, u = 0;
            if (null == r) for (; ++o < l;) (t = +e[o]) && (u += t); else for (; ++o < l;) (t = +r(e[o], o, e)) && (u += t);
            return u
        };
    }, {}], "DmNI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            if (!(o = e.length)) return [];
            for (var t = -1, u = (0, r.default)(e, n), f = new Array(u); ++t < u;) for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) i[a] = e[a][t];
            return f
        };
        var e = require("./min"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e) {
            return e.length
        }
    }, {"./min": "kP8m"}], "75ci": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return (0, t.default)(arguments)
        };
        var e = require("./transpose"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./transpose": "DmNI"}], "K0bd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./bisect");
        Object.defineProperty(exports, "bisect", {
            enumerable: !0, get: function () {
                return _(e).default
            }
        }), Object.defineProperty(exports, "bisectRight", {
            enumerable: !0, get: function () {
                return e.bisectRight
            }
        }), Object.defineProperty(exports, "bisectLeft", {
            enumerable: !0, get: function () {
                return e.bisectLeft
            }
        });
        var r = require("./ascending");
        Object.defineProperty(exports, "ascending", {
            enumerable: !0, get: function () {
                return _(r).default
            }
        });
        var t = require("./bisector");
        Object.defineProperty(exports, "bisector", {
            enumerable: !0, get: function () {
                return _(t).default
            }
        });
        var n = require("./cross");
        Object.defineProperty(exports, "cross", {
            enumerable: !0, get: function () {
                return _(n).default
            }
        });
        var u = require("./descending");
        Object.defineProperty(exports, "descending", {
            enumerable: !0, get: function () {
                return _(u).default
            }
        });
        var i = require("./deviation");
        Object.defineProperty(exports, "deviation", {
            enumerable: !0, get: function () {
                return _(i).default
            }
        });
        var o = require("./extent");
        Object.defineProperty(exports, "extent", {
            enumerable: !0, get: function () {
                return _(o).default
            }
        });
        var a = require("./histogram");
        Object.defineProperty(exports, "histogram", {
            enumerable: !0, get: function () {
                return _(a).default
            }
        });
        var f = require("./threshold/freedmanDiaconis");
        Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
            enumerable: !0, get: function () {
                return _(f).default
            }
        });
        var c = require("./threshold/scott");
        Object.defineProperty(exports, "thresholdScott", {
            enumerable: !0, get: function () {
                return _(c).default
            }
        });
        var d = require("./threshold/sturges");
        Object.defineProperty(exports, "thresholdSturges", {
            enumerable: !0, get: function () {
                return _(d).default
            }
        });
        var s = require("./max");
        Object.defineProperty(exports, "max", {
            enumerable: !0, get: function () {
                return _(s).default
            }
        });
        var p = require("./mean");
        Object.defineProperty(exports, "mean", {
            enumerable: !0, get: function () {
                return _(p).default
            }
        });
        var l = require("./median");
        Object.defineProperty(exports, "median", {
            enumerable: !0, get: function () {
                return _(l).default
            }
        });
        var b = require("./merge");
        Object.defineProperty(exports, "merge", {
            enumerable: !0, get: function () {
                return _(b).default
            }
        });
        var m = require("./min");
        Object.defineProperty(exports, "min", {
            enumerable: !0, get: function () {
                return _(m).default
            }
        });
        var g = require("./pairs");
        Object.defineProperty(exports, "pairs", {
            enumerable: !0, get: function () {
                return _(g).default
            }
        });
        var x = require("./permute");
        Object.defineProperty(exports, "permute", {
            enumerable: !0, get: function () {
                return _(x).default
            }
        });
        var j = require("./quantile");
        Object.defineProperty(exports, "quantile", {
            enumerable: !0, get: function () {
                return _(j).default
            }
        });
        var v = require("./range");
        Object.defineProperty(exports, "range", {
            enumerable: !0, get: function () {
                return _(v).default
            }
        });
        var y = require("./scan");
        Object.defineProperty(exports, "scan", {
            enumerable: !0, get: function () {
                return _(y).default
            }
        });
        var O = require("./shuffle");
        Object.defineProperty(exports, "shuffle", {
            enumerable: !0, get: function () {
                return _(O).default
            }
        });
        var P = require("./sum");
        Object.defineProperty(exports, "sum", {
            enumerable: !0, get: function () {
                return _(P).default
            }
        });
        var q = require("./ticks");
        Object.defineProperty(exports, "ticks", {
            enumerable: !0, get: function () {
                return _(q).default
            }
        }), Object.defineProperty(exports, "tickIncrement", {
            enumerable: !0, get: function () {
                return q.tickIncrement
            }
        }), Object.defineProperty(exports, "tickStep", {
            enumerable: !0, get: function () {
                return q.tickStep
            }
        });
        var h = require("./transpose");
        Object.defineProperty(exports, "transpose", {
            enumerable: !0, get: function () {
                return _(h).default
            }
        });
        var k = require("./variance");
        Object.defineProperty(exports, "variance", {
            enumerable: !0, get: function () {
                return _(k).default
            }
        });
        var S = require("./zip");

        function _(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "zip", {
            enumerable: !0, get: function () {
                return _(S).default
            }
        });
    }, {
        "./bisect": "+YrT",
        "./ascending": "yJgn",
        "./bisector": "CQHQ",
        "./cross": "LKVk",
        "./descending": "fBAz",
        "./deviation": "WEAa",
        "./extent": "UaWb",
        "./histogram": "3d5T",
        "./threshold/freedmanDiaconis": "nJJ4",
        "./threshold/scott": "Rqev",
        "./threshold/sturges": "J0XR",
        "./max": "9Oug",
        "./mean": "Y/y5",
        "./median": "CxwF",
        "./merge": "Getd",
        "./min": "kP8m",
        "./pairs": "DkXH",
        "./permute": "RhiG",
        "./quantile": "xM5B",
        "./range": "wcAU",
        "./scan": "swlo",
        "./shuffle": "Xskt",
        "./sum": "u/fm",
        "./ticks": "E/uz",
        "./transpose": "DmNI",
        "./variance": "Nh5Q",
        "./zip": "75ci"
    }], "KXlw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = exports.slice = Array.prototype.slice;
    }, {}], "76c1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.axisTop = h, exports.axisRight = x, exports.axisBottom = g, exports.axisLeft = k;
        var t = require("./array"), n = require("./identity"), r = e(n);

        function e(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var i = 1, a = 2, u = 3, o = 4, l = 1e-6;

        function c(t) {
            return "translate(" + (t + .5) + ",0)"
        }

        function s(t) {
            return "translate(0," + (t + .5) + ")"
        }

        function f(t) {
            return function (n) {
                return +t(n)
            }
        }

        function d(t) {
            var n = Math.max(0, t.bandwidth() - 1) / 2;
            return t.round() && (n = Math.round(n)), function (r) {
                return +t(r) + n
            }
        }

        function m() {
            return !this.__axis
        }

        function p(n, e) {
            var p = [], h = null, x = null, g = 6, k = 6, y = 3, _ = n === i || n === o ? -1 : 1, M = n === o || n === a ? "x" : "y", v = n === i || n === u ? c : s;

            function F(t) {
                var c = null == h ? e.ticks ? e.ticks.apply(e, p) : e.domain() : h, s = null == x ? e.tickFormat ? e.tickFormat.apply(e, p) : r.default : x, F = Math.max(g, 0) + y, V = e.range(), b = +V[0] + .5, z = +V[V.length - 1] + .5, A = (e.bandwidth ? d : f)(e.copy()), H = t.selection ? t.selection() : t, C = H.selectAll(".domain").data([null]), S = H.selectAll(".tick").data(c, e).order(), q = S.exit(), w = S.enter().append("g").attr("class", "tick"), O = S.select("line"),
                    P = S.select("text");
                C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), O = O.merge(w.append("line").attr("stroke", "currentColor").attr(M + "2", _ * g)), P = P.merge(w.append("text").attr("fill", "currentColor").attr(M, _ * F).attr("dy", n === i ? "0em" : n === u ? "0.71em" : "0.32em")), t !== H && (C = C.transition(t), S = S.transition(t), O = O.transition(t), P = P.transition(t), q = q.transition(t).attr("opacity", l).attr("transform", function (t) {
                    return isFinite(t = A(t)) ? v(t) : this.getAttribute("transform")
                }), w.attr("opacity", l).attr("transform", function (t) {
                    var n = this.parentNode.__axis;
                    return v(n && isFinite(n = n(t)) ? n : A(t))
                })), q.remove(), C.attr("d", n === o || n == a ? k ? "M" + _ * k + "," + b + "H0.5V" + z + "H" + _ * k : "M0.5," + b + "V" + z : k ? "M" + b + "," + _ * k + "V0.5H" + z + "V" + _ * k : "M" + b + ",0.5H" + z), S.attr("opacity", 1).attr("transform", function (t) {
                    return v(A(t))
                }), O.attr(M + "2", _ * g), P.attr(M, _ * F).text(s), H.filter(m).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", n === a ? "start" : n === o ? "end" : "middle"), H.each(function () {
                    this.__axis = A
                })
            }

            return F.scale = function (t) {
                return arguments.length ? (e = t, F) : e
            }, F.ticks = function () {
                return p = t.slice.call(arguments), F
            }, F.tickArguments = function (n) {
                return arguments.length ? (p = null == n ? [] : t.slice.call(n), F) : p.slice()
            }, F.tickValues = function (n) {
                return arguments.length ? (h = null == n ? null : t.slice.call(n), F) : h && h.slice()
            }, F.tickFormat = function (t) {
                return arguments.length ? (x = t, F) : x
            }, F.tickSize = function (t) {
                return arguments.length ? (g = k = +t, F) : g
            }, F.tickSizeInner = function (t) {
                return arguments.length ? (g = +t, F) : g
            }, F.tickSizeOuter = function (t) {
                return arguments.length ? (k = +t, F) : k
            }, F.tickPadding = function (t) {
                return arguments.length ? (y = +t, F) : y
            }, F
        }

        function h(t) {
            return p(i, t)
        }

        function x(t) {
            return p(a, t)
        }

        function g(t) {
            return p(u, t)
        }

        function k(t) {
            return p(o, t)
        }
    }, {"./array": "KXlw", "./identity": "NNW9"}], "mp0m": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./axis");
        Object.defineProperty(exports, "axisTop", {
            enumerable: !0, get: function () {
                return e.axisTop
            }
        }), Object.defineProperty(exports, "axisRight", {
            enumerable: !0, get: function () {
                return e.axisRight
            }
        }), Object.defineProperty(exports, "axisBottom", {
            enumerable: !0, get: function () {
                return e.axisBottom
            }
        }), Object.defineProperty(exports, "axisLeft", {
            enumerable: !0, get: function () {
                return e.axisLeft
            }
        });
    }, {"./axis": "76c1"}], "a3oC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var n = {
            value: function () {
            }
        };

        function r() {
            for (var n, r = 0, t = arguments.length, o = {}; r < t; ++r) {
                if (!(n = arguments[r] + "") || n in o) throw new Error("illegal type: " + n);
                o[n] = []
            }
            return new e(o)
        }

        function e(n) {
            this._ = n
        }

        function t(n, r) {
            return n.trim().split(/^|\s+/).map(function (n) {
                var e = "", t = n.indexOf(".");
                if (t >= 0 && (e = n.slice(t + 1), n = n.slice(0, t)), n && !r.hasOwnProperty(n)) throw new Error("unknown type: " + n);
                return {type: n, name: e}
            })
        }

        function o(n, r) {
            for (var e, t = 0, o = n.length; t < o; ++t) if ((e = n[t]).name === r) return e.value
        }

        function i(r, e, t) {
            for (var o = 0, i = r.length; o < i; ++o) if (r[o].name === e) {
                r[o] = n, r = r.slice(0, o).concat(r.slice(o + 1));
                break
            }
            return null != t && r.push({name: e, value: t}), r
        }

        e.prototype = r.prototype = {
            constructor: e, on: function (n, r) {
                var e, l = this._, a = t(n + "", l), f = -1, u = a.length;
                if (!(arguments.length < 2)) {
                    if (null != r && "function" != typeof r) throw new Error("invalid callback: " + r);
                    for (; ++f < u;) if (e = (n = a[f]).type) l[e] = i(l[e], n.name, r); else if (null == r) for (e in l) l[e] = i(l[e], n.name, null);
                    return this
                }
                for (; ++f < u;) if ((e = (n = a[f]).type) && (e = o(l[e], n.name))) return e
            }, copy: function () {
                var n = {}, r = this._;
                for (var t in r) n[t] = r[t].slice();
                return new e(n)
            }, call: function (n, r) {
                if ((e = arguments.length - 2) > 0) for (var e, t, o = new Array(e), i = 0; i < e; ++i) o[i] = arguments[i + 2];
                if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
                for (i = 0, e = (t = this._[n]).length; i < e; ++i) t[i].value.apply(r, o)
            }, apply: function (n, r, e) {
                if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);
                for (var t = this._[n], o = 0, i = t.length; o < i; ++o) t[o].value.apply(r, e)
            }
        }, exports.default = r;
    }, {}], "D3zY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./dispatch");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "dispatch", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
    }, {"./dispatch": "a3oC"}], "YeOr": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = exports.xhtml = "http://www.w3.org/1999/xhtml";
        exports.default = {svg: "http://www.w3.org/2000/svg", xhtml: t, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
    }, {}], "U3j5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var t = e += "", s = t.indexOf(":");
            return s >= 0 && "xmlns" !== (t = e.slice(0, s)) && (e = e.slice(s + 1)), r.default.hasOwnProperty(t) ? {space: r.default[t], local: e} : e
        };
        var e = require("./namespaces"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./namespaces": "YeOr"}], "z8hd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var n = (0, t.default)(e);
            return (n.local ? a : u)(n)
        };
        var e = require("./namespace"), t = r(e), n = require("./namespaces");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e) {
            return function () {
                var t = this.ownerDocument, r = this.namespaceURI;
                return r === n.xhtml && t.documentElement.namespaceURI === n.xhtml ? t.createElement(e) : t.createElementNS(r, e)
            }
        }

        function a(e) {
            return function () {
                return this.ownerDocument.createElementNS(e.space, e.local)
            }
        }
    }, {"./namespace": "U3j5", "./namespaces": "YeOr"}], "vXaf": [function (require, module, exports) {
        "use strict";

        function e() {
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return null == t ? e : function () {
                return this.querySelector(t)
            }
        };
    }, {}], "LlPS": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            "function" != typeof t && (t = (0, r.default)(t));
            for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u) for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f) (o = l[f]) && (i = t.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
            return new e.Selection(n, this._parents)
        };
        var e = require("./index"), t = require("../selector"), r = _(t);

        function _(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./index": "G2fv", "../selector": "vXaf"}], "/t3J": [function (require, module, exports) {
        "use strict";

        function e() {
            return []
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return null == t ? e : function () {
                return this.querySelectorAll(t)
            }
        };
    }, {}], "65VX": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            "function" != typeof t && (t = (0, r.default)(t));
            for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) (a = f[_]) && (n.push(t.call(a, a.__data__, _, f)), o.push(a));
            return new e.Selection(n, o)
        };
        var e = require("./index"), t = require("../selectorAll"), r = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./index": "G2fv", "../selectorAll": "/t3J"}], "oB3r": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = function (e) {
            return function () {
                return this.matches(e)
            }
        };
        if ("undefined" != typeof document) {
            var t = document.documentElement;
            if (!t.matches) {
                var c = t.webkitMatchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector;
                e = function (e) {
                    return function () {
                        return c.call(this, e)
                    }
                }
            }
        }
        exports.default = e;
    }, {}], "SSab": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            "function" != typeof r && (r = (0, t.default)(r));
            for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_) (i = l[_]) && r.call(i, i.__data__, _, l) && f.push(i);
            return new e.Selection(a, this._parents)
        };
        var e = require("./index"), r = require("../matcher"), t = n(r);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./index": "G2fv", "../matcher": "oB3r"}], "CH7j": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return new Array(e.length)
        };
    }, {}], "Bnlt": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return new r.Selection(this._enter || this._groups.map(t.default), this._parents)
        }, exports.EnterNode = o;
        var e = require("./sparse"), t = n(e), r = require("./index");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e, t) {
            this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
        }

        o.prototype = {
            constructor: o, appendChild: function (e) {
                return this._parent.insertBefore(e, this._next)
            }, insertBefore: function (e, t) {
                return this._parent.insertBefore(e, t)
            }, querySelector: function (e) {
                return this._parent.querySelector(e)
            }, querySelectorAll: function (e) {
                return this._parent.querySelectorAll(e)
            }
        };
    }, {"./sparse": "CH7j", "./index": "G2fv"}], "qO+/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, n) {
            if (!r) return v = new Array(this.size()), d = -1, this.each(function (e) {
                v[++d] = e
            }), v;
            var a = n ? l : _, o = this._parents, i = this._groups;
            "function" != typeof r && (r = (0, t.default)(r));
            for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
                var h = o[d], w = i[d], y = w.length, v = r.call(h, h && h.__data__, d, o), g = v.length, A = c[d] = new Array(g), p = f[d] = new Array(g);
                a(h, w, A, p, s[d] = new Array(y), v, n);
                for (var x, q, E = 0, M = 0; E < g; ++E) if (x = A[E]) {
                    for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;) ;
                    x._next = q || null
                }
            }
            return (f = new e.Selection(f, o))._enter = c, f._exit = s, f
        };
        var e = require("./index"), r = require("./enter"), n = require("../constant"), t = a(n);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = "$";

        function _(e, n, t, a, o, _) {
            for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) (l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
            for (; i < u; ++i) (l = n[i]) && (o[i] = l)
        }

        function l(e, n, t, a, _, l, i) {
            var u, f, c, s = {}, d = n.length, h = l.length, w = new Array(d);
            for (u = 0; u < d; ++u) (f = n[u]) && (w[u] = c = o + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
            for (u = 0; u < h; ++u) (f = s[c = o + i.call(e, l[u], u, l)]) ? (a[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
            for (u = 0; u < d; ++u) (f = n[u]) && s[w[u]] === f && (_[u] = f)
        }
    }, {"./index": "G2fv", "./enter": "Bnlt", "../constant": "aCvo"}], "sLhL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return new r.Selection(this._exit || this._groups.map(t.default), this._parents)
        };
        var e = require("./sparse"), t = u(e), r = require("./index");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./sparse": "CH7j", "./index": "G2fv"}], "VSNx": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u) for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_) (l = f[_] || h[_]) && (g[_] = l);
            for (; u < o; ++u) i[u] = t[u];
            return new e.Selection(i, this._parents)
        };
        var e = require("./index");
    }, {"./index": "G2fv"}], "7z9O": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            for (var e = this._groups, t = -1, r = e.length; ++t < r;) for (var n, o = e[t], s = o.length - 1, i = o[s]; --s >= 0;) (n = o[s]) && (i && i !== n.nextSibling && i.parentNode.insertBefore(n, i), i = n);
            return this
        };
    }, {}], "Vwkw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            function n(r, e) {
                return r && e ? t(r.__data__, e.__data__) : !r - !e
            }

            t || (t = e);
            for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
                for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c) (i = s[c]) && (f[c] = i);
                f.sort(n)
            }
            return new r.Selection(u, this._parents).order()
        };
        var r = require("./index");

        function e(r, e) {
            return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN
        }
    }, {"./index": "G2fv"}], "fuyN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = arguments[0];
            return arguments[0] = this, e.apply(null, arguments), this
        };
    }, {}], "x3ma": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = new Array(this.size()), t = -1;
            return this.each(function () {
                e[++t] = this
            }), e
        };
    }, {}], "zOHW": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            for (var e = this._groups, r = 0, t = e.length; r < t; ++r) for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
                var l = u[n];
                if (l) return l
            }
            return null
        };
    }, {}], "zFge": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = 0;
            return this.each(function () {
                ++e
            }), e
        };
    }, {}], "ZnyY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return !this.node()
        };
    }, {}], "ntqp": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t = this._groups, r = 0, o = t.length; r < o; ++r) for (var s, a = t[r], l = 0, u = a.length; l < u; ++l) (s = a[l]) && e.call(s, s.__data__, l, a);
            return this
        };
    }, {}], "K+uP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, n) {
            var a = (0, e.default)(t);
            if (arguments.length < 2) {
                var s = this.node();
                return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a)
            }
            return this.each((null == n ? a.local ? r : u : "function" == typeof n ? a.local ? l : c : a.local ? o : i)(a, n))
        };
        var t = require("../namespace"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function u(t) {
            return function () {
                this.removeAttribute(t)
            }
        }

        function r(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function i(t, e) {
            return function () {
                this.setAttribute(t, e)
            }
        }

        function o(t, e) {
            return function () {
                this.setAttributeNS(t.space, t.local, e)
            }
        }

        function c(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
            }
        }

        function l(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
            }
        }
    }, {"../namespace": "U3j5"}], "6iFw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
        };
    }, {}], "6Wec": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, r) {
            return arguments.length > 1 ? this.each((null == t ? n : "function" == typeof t ? o : u)(e, t, null == r ? "" : r)) : l(this.node(), e)
        }, exports.styleValue = l;
        var e = require("../window"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e) {
            return function () {
                this.style.removeProperty(e)
            }
        }

        function u(e, t, r) {
            return function () {
                this.style.setProperty(e, t, r)
            }
        }

        function o(e, t, r) {
            return function () {
                var n = t.apply(this, arguments);
                null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r)
            }
        }

        function l(e, r) {
            return e.style.getPropertyValue(r) || (0, t.default)(e).getComputedStyle(e, null).getPropertyValue(r)
        }
    }, {"../window": "6iFw"}], "Tr0z": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return function () {
                delete this[t]
            }
        }

        function e(t, e) {
            return function () {
                this[t] = e
            }
        }

        function n(t, e) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? delete this[t] : this[t] = n
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (u, i) {
            return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u]
        };
    }, {}], "/CVL": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t.trim().split(/^|\s+/)
        }

        function n(t) {
            return t.classList || new e(t)
        }

        function e(n) {
            this._node = n, this._names = t(n.getAttribute("class") || "")
        }

        function i(t, e) {
            for (var i = n(t), s = -1, r = e.length; ++s < r;) i.add(e[s])
        }

        function s(t, e) {
            for (var i = n(t), s = -1, r = e.length; ++s < r;) i.remove(e[s])
        }

        function r(t) {
            return function () {
                i(this, t)
            }
        }

        function o(t) {
            return function () {
                s(this, t)
            }
        }

        function u(t, n) {
            return function () {
                (n.apply(this, arguments) ? i : s)(this, t)
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, i) {
            var s = t(e + "");
            if (arguments.length < 2) {
                for (var f = n(this.node()), c = -1, a = s.length; ++c < a;) if (!f.contains(s[c])) return !1;
                return !0
            }
            return this.each(("function" == typeof i ? u : i ? r : o)(s, i))
        }, e.prototype = {
            add: function (t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            }, remove: function (t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            }, contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };
    }, {}], "wYBq": [function (require, module, exports) {
        "use strict";

        function t() {
            this.textContent = ""
        }

        function n(t) {
            return function () {
                this.textContent = t
            }
        }

        function e(t) {
            return function () {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (o) {
            return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent
        };
    }, {}], "F/dS": [function (require, module, exports) {
        "use strict";

        function n() {
            this.innerHTML = ""
        }

        function t(n) {
            return function () {
                this.innerHTML = n
            }
        }

        function e(n) {
            return function () {
                var t = n.apply(this, arguments);
                this.innerHTML = null == t ? "" : t
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (i) {
            return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML
        };
    }, {}], "AlDR": [function (require, module, exports) {
        "use strict";

        function e() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this.each(e)
        };
    }, {}], "wunq": [function (require, module, exports) {
        "use strict";

        function e() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this.each(e)
        };
    }, {}], "jPcQ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r = "function" == typeof e ? e : (0, t.default)(e);
            return this.select(function () {
                return this.appendChild(r.apply(this, arguments))
            })
        };
        var e = require("../creator"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../creator": "z8hd"}], "NP4m": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var n = "function" == typeof e ? e : (0, t.default)(e), o = null == r ? l : "function" == typeof r ? r : (0, u.default)(r);
            return this.select(function () {
                return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null)
            })
        };
        var e = require("../creator"), t = n(e), r = require("../selector"), u = n(r);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function l() {
            return null
        }
    }, {"../creator": "z8hd", "../selector": "vXaf"}], "7Bhw": [function (require, module, exports) {
        "use strict";

        function e() {
            var e = this.parentNode;
            e && e.removeChild(this)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this.each(e)
        };
    }, {}], "C0r/": [function (require, module, exports) {
        "use strict";

        function e() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function t() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n) {
            return this.select(n ? t : e)
        };
    }, {}], "dIrG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return arguments.length ? this.property("__data__", e) : this.node().__data__
        };
    }, {}], "pgiW": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, n) {
            var r, i, a = o(e + ""), l = a.length;
            if (!(arguments.length < 2)) {
                for (p = t ? u : s, null == n && (n = !1), r = 0; r < l; ++r) this.each(p(a[r], t, n));
                return this
            }
            var p = this.node().__on;
            if (p) for (var v, f = 0, c = p.length; f < c; ++f) for (r = 0, v = p[f]; r < l; ++r) if ((i = a[r]).type === v.type && i.name === v.name) return v.value
        }, exports.customEvent = a;
        var e = {}, t = exports.event = null;
        if ("undefined" != typeof document) {
            var n = document.documentElement;
            "onmouseenter" in n || (e = {mouseenter: "mouseover", mouseleave: "mouseout"})
        }

        function r(e, t, n) {
            return e = i(e, t, n), function (t) {
                var n = t.relatedTarget;
                n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
            }
        }

        function i(e, n, r) {
            return function (i) {
                var o = t;
                exports.event = t = i;
                try {
                    e.call(this, this.__data__, n, r)
                } finally {
                    exports.event = t = o
                }
            }
        }

        function o(e) {
            return e.trim().split(/^|\s+/).map(function (e) {
                var t = "", n = e.indexOf(".");
                return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {type: e, name: t}
            })
        }

        function s(e) {
            return function () {
                var t = this.__on;
                if (t) {
                    for (var n, r = 0, i = -1, o = t.length; r < o; ++r) n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++i ? t.length = i : delete this.__on
                }
            }
        }

        function u(t, n, o) {
            var s = e.hasOwnProperty(t.type) ? r : i;
            return function (e, r, i) {
                var u, a = this.__on, l = s(n, r, i);
                if (a) for (var p = 0, v = a.length; p < v; ++p) if ((u = a[p]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = l, u.capture = o), void (u.value = n);
                this.addEventListener(t.type, l, o), u = {type: t.type, name: t.name, value: n, listener: l, capture: o}, a ? a.push(u) : this.__on = [u]
            }
        }

        function a(e, n, r, i) {
            var o = t;
            e.sourceEvent = t, exports.event = t = e;
            try {
                return n.apply(r, i)
            } finally {
                exports.event = t = o
            }
        }
    }, {}], "YF1h": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e) {
            return this.each(("function" == typeof e ? r : i)(t, e))
        };
        var t = require("../window"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function u(t, n, u) {
            var i = (0, e.default)(t), r = i.CustomEvent;
            "function" == typeof r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), t.dispatchEvent(r)
        }

        function i(t, e) {
            return function () {
                return u(this, t, e)
            }
        }

        function r(t, e) {
            return function () {
                return u(this, t, e.apply(this, arguments))
            }
        }
    }, {"../window": "6iFw"}], "G2fv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.root = void 0, exports.Selection = oe;
        var e = require("./select"), r = de(e), t = require("./selectAll"), u = de(t), l = require("./filter"), a = de(l), d = require("./data"), i = de(d), o = require("./enter"), f = de(o), s = require("./exit"), n = de(s), q = require("./merge"), c = de(q), p = require("./order"), m = de(p), x = require("./sort"), y = de(x), h = require("./call"), v = de(h), _ = require("./nodes"), g = de(_), w = require("./node"), z = de(w), A = require("./size"), M = de(A), b = require("./empty"),
            j = de(b), E = require("./each"), O = de(E), P = require("./attr"), S = de(P), k = require("./style"), B = de(k), C = require("./property"), D = de(C), F = require("./classed"), G = de(F), H = require("./text"), I = de(H), J = require("./html"), K = de(J), L = require("./raise"), N = de(L), Q = require("./lower"), R = de(Q), T = require("./append"), U = de(T), V = require("./insert"), W = de(V), X = require("./remove"), Y = de(X), Z = require("./clone"), $ = de(Z),
            ee = require("./datum"), re = de(ee), te = require("./on"), ue = de(te), le = require("./dispatch"), ae = de(le);

        function de(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var ie = exports.root = [null];

        function oe(e, r) {
            this._groups = e, this._parents = r
        }

        function fe() {
            return new oe([[document.documentElement]], ie)
        }

        oe.prototype = fe.prototype = {
            constructor: oe,
            select: r.default,
            selectAll: u.default,
            filter: a.default,
            data: i.default,
            enter: f.default,
            exit: n.default,
            merge: c.default,
            order: m.default,
            sort: y.default,
            call: v.default,
            nodes: g.default,
            node: z.default,
            size: M.default,
            empty: j.default,
            each: O.default,
            attr: S.default,
            style: B.default,
            property: D.default,
            classed: G.default,
            text: I.default,
            html: K.default,
            raise: N.default,
            lower: R.default,
            append: U.default,
            insert: W.default,
            remove: Y.default,
            clone: $.default,
            datum: re.default,
            on: ue.default,
            dispatch: ae.default
        }, exports.default = fe;
    }, {
        "./select": "LlPS",
        "./selectAll": "65VX",
        "./filter": "SSab",
        "./data": "qO+/",
        "./enter": "Bnlt",
        "./exit": "sLhL",
        "./merge": "VSNx",
        "./order": "7z9O",
        "./sort": "Vwkw",
        "./call": "fuyN",
        "./nodes": "x3ma",
        "./node": "zOHW",
        "./size": "zFge",
        "./empty": "ZnyY",
        "./each": "ntqp",
        "./attr": "K+uP",
        "./style": "6Wec",
        "./property": "Tr0z",
        "./classed": "/CVL",
        "./text": "wYBq",
        "./html": "F/dS",
        "./raise": "AlDR",
        "./lower": "wunq",
        "./append": "jPcQ",
        "./insert": "NP4m",
        "./remove": "7Bhw",
        "./clone": "C0r/",
        "./datum": "dIrG",
        "./on": "pgiW",
        "./dispatch": "YF1h"
    }], "RAQf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root)
        };
        var e = require("./selection/index");
    }, {"./selection/index": "G2fv"}], "aaeJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return (0, u.default)((0, t.default)(e).call(document.documentElement))
        };
        var e = require("./creator"), t = l(e), r = require("./select"), u = l(r);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./creator": "z8hd", "./select": "RAQf"}], "iml1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = e;
        var t = 0;

        function e() {
            return new r
        }

        function r() {
            this._ = "@" + (++t).toString(36)
        }

        r.prototype = e.prototype = {
            constructor: r, get: function (t) {
                for (var e = this._; !(e in t);) if (!(t = t.parentNode)) return;
                return t[e]
            }, set: function (t, e) {
                return t[this._] = e
            }, remove: function (t) {
                return this._ in t && delete t[this._]
            }, toString: function () {
                return this._
            }
        };
    }, {}], "Tqn5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            for (var r, t = e.event; r = t.sourceEvent;) t = r;
            return t
        };
        var e = require("./selection/on");
    }, {"./selection/on": "pgiW"}], "/JEJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
                var r = n.createSVGPoint();
                return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y]
            }
            var i = e.getBoundingClientRect();
            return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop]
        };
    }, {}], "Y8+C": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r = (0, u.default)();
            return r.changedTouches && (r = r.changedTouches[0]), (0, t.default)(e, r)
        };
        var e = require("./sourceEvent"), u = n(e), r = require("./point"), t = n(r);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./sourceEvent": "Tqn5", "./point": "/JEJ"}], "zmwq": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root)
        };
        var e = require("./selection/index");
    }, {"./selection/index": "G2fv"}], "SZFU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, n) {
            arguments.length < 3 && (n = t, t = (0, r.default)().changedTouches);
            for (var i, l = 0, o = t ? t.length : 0; l < o; ++l) if ((i = t[l]).identifier === n) return (0, u.default)(e, i);
            return null
        };
        var e = require("./sourceEvent"), r = n(e), t = require("./point"), u = n(t);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./sourceEvent": "Tqn5", "./point": "/JEJ"}], "lhoo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            null == t && (t = (0, r.default)().touches);
            for (var n = 0, o = t ? t.length : 0, l = new Array(o); n < o; ++n) l[n] = (0, u.default)(e, t[n]);
            return l
        };
        var e = require("./sourceEvent"), r = n(e), t = require("./point"), u = n(t);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./sourceEvent": "Tqn5", "./point": "/JEJ"}], "//ys": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./create");
        Object.defineProperty(exports, "create", {
            enumerable: !0, get: function () {
                return x(e).default
            }
        });
        var r = require("./creator");
        Object.defineProperty(exports, "creator", {
            enumerable: !0, get: function () {
                return x(r).default
            }
        });
        var t = require("./local");
        Object.defineProperty(exports, "local", {
            enumerable: !0, get: function () {
                return x(t).default
            }
        });
        var n = require("./matcher");
        Object.defineProperty(exports, "matcher", {
            enumerable: !0, get: function () {
                return x(n).default
            }
        });
        var u = require("./mouse");
        Object.defineProperty(exports, "mouse", {
            enumerable: !0, get: function () {
                return x(u).default
            }
        });
        var o = require("./namespace");
        Object.defineProperty(exports, "namespace", {
            enumerable: !0, get: function () {
                return x(o).default
            }
        });
        var a = require("./namespaces");
        Object.defineProperty(exports, "namespaces", {
            enumerable: !0, get: function () {
                return x(a).default
            }
        });
        var c = require("./point");
        Object.defineProperty(exports, "clientPoint", {
            enumerable: !0, get: function () {
                return x(c).default
            }
        });
        var i = require("./select");
        Object.defineProperty(exports, "select", {
            enumerable: !0, get: function () {
                return x(i).default
            }
        });
        var l = require("./selectAll");
        Object.defineProperty(exports, "selectAll", {
            enumerable: !0, get: function () {
                return x(l).default
            }
        });
        var f = require("./selection/index");
        Object.defineProperty(exports, "selection", {
            enumerable: !0, get: function () {
                return x(f).default
            }
        });
        var s = require("./selector");
        Object.defineProperty(exports, "selector", {
            enumerable: !0, get: function () {
                return x(s).default
            }
        });
        var p = require("./selectorAll");
        Object.defineProperty(exports, "selectorAll", {
            enumerable: !0, get: function () {
                return x(p).default
            }
        });
        var d = require("./selection/style");
        Object.defineProperty(exports, "style", {
            enumerable: !0, get: function () {
                return d.styleValue
            }
        });
        var b = require("./touch");
        Object.defineProperty(exports, "touch", {
            enumerable: !0, get: function () {
                return x(b).default
            }
        });
        var m = require("./touches");
        Object.defineProperty(exports, "touches", {
            enumerable: !0, get: function () {
                return x(m).default
            }
        });
        var v = require("./window");
        Object.defineProperty(exports, "window", {
            enumerable: !0, get: function () {
                return x(v).default
            }
        });
        var y = require("./selection/on");

        function x(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "event", {
            enumerable: !0, get: function () {
                return y.event
            }
        }), Object.defineProperty(exports, "customEvent", {
            enumerable: !0, get: function () {
                return y.customEvent
            }
        });
    }, {"./create": "aaeJ", "./creator": "z8hd", "./local": "iml1", "./matcher": "oB3r", "./mouse": "Y8+C", "./namespace": "U3j5", "./namespaces": "YeOr", "./point": "/JEJ", "./select": "RAQf", "./selectAll": "zmwq", "./selection/index": "G2fv", "./selector": "vXaf", "./selectorAll": "/t3J", "./selection/style": "6Wec", "./touch": "SZFU", "./touches": "lhoo", "./window": "6iFw", "./selection/on": "pgiW"}], "BxLv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.nopropagation = t, exports.default = function () {
            e.event.preventDefault(), e.event.stopImmediatePropagation()
        };
        var e = require("d3-selection");

        function t() {
            e.event.stopImmediatePropagation()
        }
    }, {"d3-selection": "//ys"}], "m07T": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var l = t.document.documentElement, r = (0, e.select)(t).on("dragstart.drag", n.default, !0);
            "onselectstart" in l ? r.on("selectstart.drag", n.default, !0) : (l.__noselect = l.style.MozUserSelect, l.style.MozUserSelect = "none")
        }, exports.yesdrag = r;
        var e = require("d3-selection"), t = require("./noevent"), n = l(t);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function r(t, l) {
            var r = t.document.documentElement, o = (0, e.select)(t).on("dragstart.drag", null);
            l && (o.on("click.drag", n.default, !0), setTimeout(function () {
                o.on("click.drag", null)
            }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect)
        }
    }, {"d3-selection": "//ys", "./noevent": "BxLv"}], "qb7E": [function (require, module, exports) {
        "use strict";

        function t(t, i, s, e, h, r, o, n, p, u) {
            this.target = t, this.type = i, this.subject = s, this.identifier = e, this.active = h, this.x = r, this.y = o, this.dx = n, this.dy = p, this._ = u
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = t, t.prototype.on = function () {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
    }, {}], "NgLN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var i, c, l, p, g = s, y = d, m = h, b = v, w = {}, q = (0, e.dispatch)("start", "drag", "end"), x = 0, T = 0;

            function _(e) {
                e.on("mousedown.drag", j).filter(b).on("touchstart.drag", E).on("touchmove.drag", X).on("touchend.drag touchcancel.drag", Y).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function j() {
                if (!p && g.apply(this, arguments)) {
                    var e = D("mouse", y.apply(this, arguments), t.mouse, this, arguments);
                    e && ((0, t.select)(t.event.view).on("mousemove.drag", k, !0).on("mouseup.drag", M, !0), (0, o.default)(t.event.view), (0, r.nopropagation)(), l = !1, i = t.event.clientX, c = t.event.clientY, e("start"))
                }
            }

            function k() {
                if ((0, u.default)(), !l) {
                    var e = t.event.clientX - i, n = t.event.clientY - c;
                    l = e * e + n * n > T
                }
                w.mouse("drag")
            }

            function M() {
                (0, t.select)(t.event.view).on("mousemove.drag mouseup.drag", null), (0, n.yesdrag)(t.event.view, l), (0, u.default)(), w.mouse("end")
            }

            function E() {
                if (g.apply(this, arguments)) {
                    var e, n, o = t.event.changedTouches, u = y.apply(this, arguments), i = o.length;
                    for (e = 0; e < i; ++e) (n = D(o[e].identifier, u, t.touch, this, arguments)) && ((0, r.nopropagation)(), n("start"))
                }
            }

            function X() {
                var e, n, o = t.event.changedTouches, r = o.length;
                for (e = 0; e < r; ++e) (n = w[o[e].identifier]) && ((0, u.default)(), n("drag"))
            }

            function Y() {
                var e, n, o = t.event.changedTouches, u = o.length;
                for (p && clearTimeout(p), p = setTimeout(function () {
                    p = null
                }, 500), e = 0; e < u; ++e) (n = w[o[e].identifier]) && ((0, r.nopropagation)(), n("end"))
            }

            function D(e, n, o, r, u) {
                var i, a, c, l = o(n, e), s = q.copy();
                if ((0, t.customEvent)(new f.default(_, "beforestart", i, e, x, l[0], l[1], 0, 0, s), function () {
                    return null != (t.event.subject = i = m.apply(r, u)) && (a = i.x - l[0] || 0, c = i.y - l[1] || 0, !0)
                })) return function d(h) {
                    var v, p = l;
                    switch (h) {
                        case"start":
                            w[e] = d, v = x++;
                            break;
                        case"end":
                            delete w[e], --x;
                        case"drag":
                            l = o(n, e), v = x
                    }
                    (0, t.customEvent)(new f.default(_, h, i, e, v, l[0] + a, l[1] + c, l[0] - p[0], l[1] - p[1], s), s.apply, s, [h, r, u])
                }
            }

            return _.filter = function (e) {
                return arguments.length ? (g = "function" == typeof e ? e : (0, a.default)(!!e), _) : g
            }, _.container = function (e) {
                return arguments.length ? (y = "function" == typeof e ? e : (0, a.default)(e), _) : y
            }, _.subject = function (e) {
                return arguments.length ? (m = "function" == typeof e ? e : (0, a.default)(e), _) : m
            }, _.touchable = function (e) {
                return arguments.length ? (b = "function" == typeof e ? e : (0, a.default)(!!e), _) : b
            }, _.on = function () {
                var e = q.on.apply(q, arguments);
                return e === q ? _ : e
            }, _.clickDistance = function (e) {
                return arguments.length ? (T = (e = +e) * e, _) : Math.sqrt(T)
            }, _
        };
        var e = require("d3-dispatch"), t = require("d3-selection"), n = require("./nodrag"), o = l(n), r = require("./noevent"), u = l(r), i = require("./constant"), a = l(i), c = require("./event"), f = l(c);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s() {
            return !t.event.button
        }

        function d() {
            return this.parentNode
        }

        function h(e) {
            return null == e ? {x: t.event.x, y: t.event.y} : e
        }

        function v() {
            return "ontouchstart" in this
        }
    }, {"d3-dispatch": "D3zY", "d3-selection": "//ys", "./nodrag": "m07T", "./noevent": "BxLv", "./constant": "aCvo", "./event": "qb7E"}], "kkdU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./drag");
        Object.defineProperty(exports, "drag", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
        var r = require("./nodrag");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "dragDisable", {
            enumerable: !0, get: function () {
                return t(r).default
            }
        }), Object.defineProperty(exports, "dragEnable", {
            enumerable: !0, get: function () {
                return r.yesdrag
            }
        });
    }, {"./drag": "NgLN", "./nodrag": "m07T"}], "8fV2": [function (require, module, exports) {
        "use strict";

        function t(t, e) {
            var r = Object.create(t.prototype);
            for (var o in e) r[o] = e[o];
            return r
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e, r) {
            t.prototype = e.prototype = r, r.constructor = t
        }, exports.extend = t;
    }, {}], "3/LI": [function (require, module, exports) {

        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.brighter = exports.darker = void 0, exports.Color = n, exports.default = w, exports.rgbConvert = x, exports.rgb = v, exports.Rgb = N, exports.hslConvert = E, exports.hsl = $;
        var e = require("./define"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n() {
        }

        var i = exports.darker = .7, a = exports.brighter = 1 / i, s = "\\s*([+-]?\\d+)\\s*", o = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", h = /^#([0-9a-f]{3})$/, u = /^#([0-9a-f]{6})$/, g = new RegExp("^rgb\\(" + [s, s, s] + "\\)$"), d = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"), c = new RegExp("^rgba\\(" + [s, s, s, o] + "\\)$"), p = new RegExp("^rgba\\(" + [l, l, l, o] + "\\)$"), b = new RegExp("^hsl\\(" + [o, l, l] + "\\)$"),
            y = new RegExp("^hsla\\(" + [o, l, l, o] + "\\)$"), m = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function w(e) {
            var t;
            return e = (e + "").trim().toLowerCase(), (t = h.exec(e)) ? new N((t = parseInt(t[1], 16)) >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : (t = u.exec(e)) ? f(parseInt(t[1], 16)) : (t = g.exec(e)) ? new N(t[1], t[2], t[3], 1) : (t = d.exec(e)) ? new N(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = c.exec(e)) ? k(t[1], t[2], t[3], t[4]) : (t = p.exec(e)) ? k(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = b.exec(e)) ? q(t[1], t[2] / 100, t[3] / 100, 1) : (t = y.exec(e)) ? q(t[1], t[2] / 100, t[3] / 100, t[4]) : m.hasOwnProperty(e) ? f(m[e]) : "transparent" === e ? new N(NaN, NaN, NaN, 0) : null
        }

        function f(e) {
            return new N(e >> 16 & 255, e >> 8 & 255, 255 & e, 1)
        }

        function k(e, t, r, n) {
            return n <= 0 && (e = t = r = NaN), new N(e, t, r, n)
        }

        function x(e) {
            return e instanceof n || (e = w(e)), e ? new N((e = e.rgb()).r, e.g, e.b, e.opacity) : new N
        }

        function v(e, t, r, n) {
            return 1 === arguments.length ? x(e) : new N(e, t, r, null == n ? 1 : n)
        }

        function N(e, t, r, n) {
            this.r = +e, this.g = +t, this.b = +r, this.opacity = +n
        }

        function M(e) {
            return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16)
        }

        function q(e, t, r, n) {
            return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new R(e, t, r, n)
        }

        function E(e) {
            if (e instanceof R) return new R(e.h, e.s, e.l, e.opacity);
            if (e instanceof n || (e = w(e)), !e) return new R;
            if (e instanceof R) return e;
            var t = (e = e.rgb()).r / 255, r = e.g / 255, i = e.b / 255, a = Math.min(t, r, i), s = Math.max(t, r, i), o = NaN, l = s - a, h = (s + a) / 2;
            return l ? (o = t === s ? (r - i) / l + 6 * (r < i) : r === s ? (i - t) / l + 2 : (t - r) / l + 4, l /= h < .5 ? s + a : 2 - s - a, o *= 60) : l = h > 0 && h < 1 ? 0 : o, new R(o, l, h, e.opacity)
        }

        function $(e, t, r, n) {
            return 1 === arguments.length ? E(e) : new R(e, t, r, null == n ? 1 : n)
        }

        function R(e, t, r, n) {
            this.h = +e, this.s = +t, this.l = +r, this.opacity = +n
        }

        function C(e, t, r) {
            return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t)
        }

        (0, t.default)(n, w, {
            displayable: function () {
                return this.rgb().displayable()
            }, hex: function () {
                return this.rgb().hex()
            }, toString: function () {
                return this.rgb() + ""
            }
        }), (0, t.default)(N, v, (0, e.extend)(n, {
            brighter: function (e) {
                return e = null == e ? a : Math.pow(a, e), new N(this.r * e, this.g * e, this.b * e, this.opacity)
            }, darker: function (e) {
                return e = null == e ? i : Math.pow(i, e), new N(this.r * e, this.g * e, this.b * e, this.opacity)
            }, rgb: function () {
                return this
            }, displayable: function () {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            }, hex: function () {
                return "#" + M(this.r) + M(this.g) + M(this.b)
            }, toString: function () {
                var e = this.opacity;
                return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")")
            }
        })), (0, t.default)(R, $, (0, e.extend)(n, {
            brighter: function (e) {
                return e = null == e ? a : Math.pow(a, e), new R(this.h, this.s, this.l * e, this.opacity)
            }, darker: function (e) {
                return e = null == e ? i : Math.pow(i, e), new R(this.h, this.s, this.l * e, this.opacity)
            }, rgb: function () {
                var e = this.h % 360 + 360 * (this.h < 0), t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < .5 ? r : 1 - r) * t, i = 2 * r - n;
                return new N(C(e >= 240 ? e - 240 : e + 120, i, n), C(e, i, n), C(e < 120 ? e + 240 : e - 120, i, n), this.opacity)
            }, displayable: function () {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
    }, {"./define": "8fV2"}], "8XzI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = exports.deg2rad = Math.PI / 180, r = exports.rad2deg = 180 / Math.PI;
    }, {}], "2f7A": [function (require, module, exports) {

        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.gray = b, exports.default = w, exports.Lab = d, exports.lch = N, exports.hcl = q, exports.Hcl = _;
        var t = require("./define"), n = i(t), r = require("./color"), e = require("./math");

        function i(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var a = 18, u = .96422, o = 1, s = .82521, h = 4 / 29, c = 6 / 29, l = 3 * c * c, f = c * c * c;

        function p(t) {
            if (t instanceof d) return new d(t.l, t.a, t.b, t.opacity);
            if (t instanceof _) {
                if (isNaN(t.h)) return new d(t.l, 0, 0, t.opacity);
                var n = t.h * e.deg2rad;
                return new d(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof r.Rgb || (t = (0, r.rgbConvert)(t));
            var i, a, h = M(t.r), c = M(t.g), l = M(t.b), f = y((.2225045 * h + .7168786 * c + .0606169 * l) / o);
            return h === c && c === l ? i = a = f : (i = y((.4360747 * h + .3850649 * c + .1430804 * l) / u), a = y((.0139322 * h + .0971045 * c + .7141733 * l) / s)), new d(116 * f - 16, 500 * (i - f), 200 * (f - a), t.opacity)
        }

        function b(t, n) {
            return new d(t, 0, 0, null == n ? 1 : n)
        }

        function w(t, n, r, e) {
            return 1 === arguments.length ? p(t) : new d(t, n, r, null == e ? 1 : e)
        }

        function d(t, n, r, e) {
            this.l = +t, this.a = +n, this.b = +r, this.opacity = +e
        }

        function y(t) {
            return t > f ? Math.pow(t, 1 / 3) : t / l + h
        }

        function g(t) {
            return t > c ? t * t * t : l * (t - h)
        }

        function x(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function M(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function v(t) {
            if (t instanceof _) return new _(t.h, t.c, t.l, t.opacity);
            if (t instanceof d || (t = p(t)), 0 === t.a && 0 === t.b) return new _(NaN, 0, t.l, t.opacity);
            var n = Math.atan2(t.b, t.a) * e.rad2deg;
            return new _(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function N(t, n, r, e) {
            return 1 === arguments.length ? v(t) : new _(r, n, t, null == e ? 1 : e)
        }

        function q(t, n, r, e) {
            return 1 === arguments.length ? v(t) : new _(t, n, r, null == e ? 1 : e)
        }

        function _(t, n, r, e) {
            this.h = +t, this.c = +n, this.l = +r, this.opacity = +e
        }

        (0, n.default)(d, w, (0, t.extend)(r.Color, {
            brighter: function (t) {
                return new d(this.l + a * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, darker: function (t) {
                return new d(this.l - a * (null == t ? 1 : t), this.a, this.b, this.opacity)
            }, rgb: function () {
                var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
                return n = u * g(n), t = o * g(t), e = s * g(e), new r.Rgb(x(3.1338561 * n - 1.6168667 * t - .4906146 * e), x(-.9787684 * n + 1.9161415 * t + .033454 * e), x(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
            }
        })), (0, n.default)(_, q, (0, t.extend)(r.Color, {
            brighter: function (t) {
                return new _(this.h, this.c, this.l + a * (null == t ? 1 : t), this.opacity)
            }, darker: function (t) {
                return new _(this.h, this.c, this.l - a * (null == t ? 1 : t), this.opacity)
            }, rgb: function () {
                return p(this).rgb()
            }
        }));
    }, {"./define": "8fV2", "./color": "3/LI", "./math": "8XzI"}], "CMX9": [function (require, module, exports) {

        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = p, exports.Cubehelix = g;
        var t = require("./define"), e = n(t), r = require("./color"), i = require("./math");

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var s = -.14861, h = 1.78277, a = -.29227, o = -.90649, u = 1.97294, l = u * o, c = u * h, d = h * a - o * s;

        function f(t) {
            if (t instanceof g) return new g(t.h, t.s, t.l, t.opacity);
            t instanceof r.Rgb || (t = (0, r.rgbConvert)(t));
            var e = t.r / 255, n = t.g / 255, s = t.b / 255, h = (d * s + l * e - c * n) / (d + l - c), f = s - h, p = (u * (n - h) - a * f) / o, b = Math.sqrt(p * p + f * f) / (u * h * (1 - h)), w = b ? Math.atan2(p, f) * i.rad2deg - 120 : NaN;
            return new g(w < 0 ? w + 360 : w, b, h, t.opacity)
        }

        function p(t, e, r, i) {
            return 1 === arguments.length ? f(t) : new g(t, e, r, null == i ? 1 : i)
        }

        function g(t, e, r, i) {
            this.h = +t, this.s = +e, this.l = +r, this.opacity = +i
        }

        (0, e.default)(g, p, (0, t.extend)(r.Color, {
            brighter: function (t) {
                return t = null == t ? r.brighter : Math.pow(r.brighter, t), new g(this.h, this.s, this.l * t, this.opacity)
            }, darker: function (t) {
                return t = null == t ? r.darker : Math.pow(r.darker, t), new g(this.h, this.s, this.l * t, this.opacity)
            }, rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * i.deg2rad, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e), l = Math.cos(t), c = Math.sin(t);
                return new r.Rgb(255 * (e + n * (s * l + h * c)), 255 * (e + n * (a * l + o * c)), 255 * (e + n * (u * l)), this.opacity)
            }
        }));
    }, {"./define": "8fV2", "./color": "3/LI", "./math": "8XzI"}], "Peej": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./color");
        Object.defineProperty(exports, "color", {
            enumerable: !0, get: function () {
                return n(e).default
            }
        }), Object.defineProperty(exports, "rgb", {
            enumerable: !0, get: function () {
                return e.rgb
            }
        }), Object.defineProperty(exports, "hsl", {
            enumerable: !0, get: function () {
                return e.hsl
            }
        });
        var r = require("./lab");
        Object.defineProperty(exports, "lab", {
            enumerable: !0, get: function () {
                return n(r).default
            }
        }), Object.defineProperty(exports, "hcl", {
            enumerable: !0, get: function () {
                return r.hcl
            }
        }), Object.defineProperty(exports, "lch", {
            enumerable: !0, get: function () {
                return r.lch
            }
        }), Object.defineProperty(exports, "gray", {
            enumerable: !0, get: function () {
                return r.gray
            }
        });
        var t = require("./cubehelix");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "cubehelix", {
            enumerable: !0, get: function () {
                return n(t).default
            }
        });
    }, {"./color": "3/LI", "./lab": "2f7A", "./cubehelix": "CMX9"}], "2ElX": [function (require, module, exports) {
        "use strict";

        function e(e, r, t, n, o) {
            var u = e * e, s = u * e;
            return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.basis = e, exports.default = function (r) {
            var t = r.length - 1;
            return function (n) {
                var o = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), u = r[o], s = r[o + 1], a = o > 0 ? r[o - 1] : 2 * u - s, f = o < t - 1 ? r[o + 2] : 2 * s - u;
                return e((n - o / t) * t, a, u, s, f)
            }
        };
    }, {}], "hnXz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            var t = r.length;
            return function (s) {
                var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t), a = r[(u + t - 1) % t], n = r[u % t], o = r[(u + 1) % t], i = r[(u + 2) % t];
                return (0, e.basis)((s - u / t) * t, a, n, o, i)
            }
        };
        var e = require("./basis");
    }, {"./basis": "2ElX"}], "RhzI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.hue = o, exports.gamma = a, exports.default = f;
        var t = require("./constant"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function r(t, e) {
            return function (n) {
                return t + n * e
            }
        }

        function u(t, e, n) {
            return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                return Math.pow(t + r * e, n)
            }
        }

        function o(t, n) {
            var u = n - t;
            return u ? r(t, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, e.default)(isNaN(t) ? n : t)
        }

        function a(t) {
            return 1 == (t = +t) ? f : function (n, r) {
                return r - n ? u(n, r, t) : (0, e.default)(isNaN(n) ? r : n)
            }
        }

        function f(t, n) {
            var u = n - t;
            return u ? r(t, u) : (0, e.default)(isNaN(t) ? n : t)
        }
    }, {"./constant": "aCvo"}], "rvVK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.rgbBasisClosed = exports.rgbBasis = void 0;
        var r = require("d3-color"), e = require("./basis"), t = s(e), o = require("./basisClosed"), a = s(o), u = require("./color"), n = s(u);

        function s(r) {
            return r && r.__esModule ? r : {default: r}
        }

        function i(e) {
            return function (t) {
                var o, a, u = t.length, n = new Array(u), s = new Array(u), i = new Array(u);
                for (o = 0; o < u; ++o) a = (0, r.rgb)(t[o]), n[o] = a.r || 0, s[o] = a.g || 0, i[o] = a.b || 0;
                return n = e(n), s = e(s), i = e(i), a.opacity = 1, function (r) {
                    return a.r = n(r), a.g = s(r), a.b = i(r), a + ""
                }
            }
        }

        exports.default = function e(t) {
            var o = (0, u.gamma)(t);

            function a(e, t) {
                var a = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r), u = o(e.g, t.g), s = o(e.b, t.b), i = (0, n.default)(e.opacity, t.opacity);
                return function (r) {
                    return e.r = a(r), e.g = u(r), e.b = s(r), e.opacity = i(r), e + ""
                }
            }

            return a.gamma = e, a
        }(1);
        var b = exports.rgbBasis = i(t.default), c = exports.rgbBasisClosed = i(a.default);
    }, {"d3-color": "Peej", "./basis": "2ElX", "./basisClosed": "hnXz", "./color": "RhzI"}], "TYZM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var n, u = t ? t.length : 0, o = e ? Math.min(u, e.length) : 0, a = new Array(o), f = new Array(u);
            for (n = 0; n < o; ++n) a[n] = (0, r.default)(e[n], t[n]);
            for (; n < u; ++n) f[n] = t[n];
            return function (e) {
                for (n = 0; n < o; ++n) f[n] = a[n](e);
                return f
            }
        };
        var e = require("./value"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./value": "gzc/"}], "jEDF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var r = new Date;
            return t -= e = +e, function (n) {
                return r.setTime(e + t * n), r
            }
        };
    }, {}], "YNf8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return t -= e = +e, function (r) {
                return e + t * r
            }
        };
    }, {}], "iJdZ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var u, n = {}, o = {};
            for (u in null !== e && "object" == typeof e || (e = {}), null !== r && "object" == typeof r || (r = {}), r) u in e ? n[u] = (0, t.default)(e[u], r[u]) : o[u] = r[u];
            return function (e) {
                for (u in n) o[u] = n[u](e);
                return o
            }
        };
        var e = require("./value"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./value": "gzc/"}], "nK0E": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var o, c, d, f = t.lastIndex = u.lastIndex = 0, s = -1, x = [], a = [];
            for (e += "", r += ""; (o = t.exec(e)) && (c = u.exec(r));) (d = c.index) > f && (d = r.slice(f, d), x[s] ? x[s] += d : x[++s] = d), (o = o[0]) === (c = c[0]) ? x[s] ? x[s] += c : x[++s] = c : (x[++s] = null, a.push({i: s, x: (0, n.default)(o, c)})), f = u.lastIndex;
            return f < r.length && (d = r.slice(f), x[s] ? x[s] += d : x[++s] = d), x.length < 2 ? a[0] ? l(a[0].x) : i(r) : (r = a.length, function (e) {
                for (var n, t = 0; t < r; ++t) x[(n = a[t]).i] = n.x(e);
                return x.join("")
            })
        };
        var e = require("./number"), n = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var t = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, u = new RegExp(t.source, "g");

        function i(e) {
            return function () {
                return e
            }
        }

        function l(e) {
            return function (n) {
                return e(n) + ""
            }
        }
    }, {"./number": "YNf8"}], "gzc/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, u) {
            var o, f = typeof u;
            return null == u || "boolean" === f ? (0, y.default)(u) : ("number" === f ? i.default : "string" === f ? (o = (0, e.color)(u)) ? (u = o, t.default) : s.default : u instanceof e.color ? t.default : u instanceof Date ? n.default : Array.isArray(u) ? a.default : "function" != typeof u.valueOf && "function" != typeof u.toString || isNaN(u) ? d.default : i.default)(r, u)
        };
        var e = require("d3-color"), r = require("./rgb"), t = b(r), u = require("./array"), a = b(u), o = require("./date"), n = b(o), f = require("./number"), i = b(f), l = require("./object"), d = b(l), c = require("./string"), s = b(c), q = require("./constant"), y = b(q);

        function b(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"d3-color": "Peej", "./rgb": "rvVK", "./array": "TYZM", "./date": "jEDF", "./number": "YNf8", "./object": "iJdZ", "./string": "nK0E", "./constant": "aCvo"}], "B1w8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var e = t.length;
            return function (r) {
                return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))]
            }
        };
    }, {}], "0ZrP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t) {
            var o = (0, e.hue)(+r, +t);
            return function (e) {
                var r = o(e);
                return r - 360 * Math.floor(r / 360)
            }
        };
        var e = require("./color");
    }, {"./color": "RhzI"}], "nXvs": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return t -= e = +e, function (r) {
                return Math.round(e + t * r)
            }
        };
    }, {}], "UXwK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (a, e, r, s, l, n) {
            var o, c, u;
            return (o = Math.sqrt(a * a + e * e)) && (a /= o, e /= o), (u = a * r + e * s) && (r -= a * u, s -= e * u), (c = Math.sqrt(r * r + s * s)) && (r /= c, s /= c, u /= c), a * s < e * r && (a = -a, e = -e, u = -u, o = -o), {translateX: l, translateY: n, rotate: Math.atan2(e, a) * t, skewX: Math.atan(u) * t, scaleX: o, scaleY: c}
        };
        var t = 180 / Math.PI, a = exports.identity = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1};
    }, {}], "LVjk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.parseCss = s, exports.parseSvg = d;
        var e, t, r, n, o = require("./decompose"), u = l(o);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function s(n) {
            return "none" === n ? o.identity : (e || (e = document.createElement("DIV"), t = document.documentElement, r = document.defaultView), e.style.transform = n, n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform"), t.removeChild(e), n = n.slice(7, -1).split(","), (0, u.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]))
        }

        function d(e) {
            return null == e ? o.identity : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", e), (e = n.transform.baseVal.consolidate()) ? (e = e.matrix, (0, u.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity)
        }
    }, {"./decompose": "UXwK"}], "9v4X": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0;
        var e = require("../number"), t = s(e), r = require("./parse");

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e, r, s, n) {
            function a(e) {
                return e.length ? e.pop() + " " : ""
            }

            return function (u, l) {
                var o = [], p = [];
                return u = e(u), l = e(l), function (e, n, a, u, l, o) {
                    if (e !== a || n !== u) {
                        var p = l.push("translate(", null, r, null, s);
                        o.push({i: p - 4, x: (0, t.default)(e, a)}, {i: p - 2, x: (0, t.default)(n, u)})
                    } else (a || u) && l.push("translate(" + a + r + u + s)
                }(u.translateX, u.translateY, l.translateX, l.translateY, o, p), function (e, r, s, u) {
                    e !== r ? (e - r > 180 ? r += 360 : r - e > 180 && (e += 360), u.push({i: s.push(a(s) + "rotate(", null, n) - 2, x: (0, t.default)(e, r)})) : r && s.push(a(s) + "rotate(" + r + n)
                }(u.rotate, l.rotate, o, p), function (e, r, s, u) {
                    e !== r ? u.push({i: s.push(a(s) + "skewX(", null, n) - 2, x: (0, t.default)(e, r)}) : r && s.push(a(s) + "skewX(" + r + n)
                }(u.skewX, l.skewX, o, p), function (e, r, s, n, u, l) {
                    if (e !== s || r !== n) {
                        var o = u.push(a(u) + "scale(", null, ",", null, ")");
                        l.push({i: o - 4, x: (0, t.default)(e, s)}, {i: o - 2, x: (0, t.default)(r, n)})
                    } else 1 === s && 1 === n || u.push(a(u) + "scale(" + s + "," + n + ")")
                }(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p), u = l = null, function (e) {
                    for (var t, r = -1, s = p.length; ++r < s;) o[(t = p[r]).i] = t.x(e);
                    return o.join("")
                }
            }
        }

        var a = exports.interpolateTransformCss = n(r.parseCss, "px, ", "px)", "deg)"), u = exports.interpolateTransformSvg = n(r.parseSvg, ", ", ")", ")");
    }, {"../number": "YNf8", "./parse": "LVjk"}], "jU1v": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (M, h) {
            var i, f, s = M[0], c = M[1], l = M[2], p = h[0], x = h[1], v = h[2], d = p - s, g = x - c, q = d * d + g * g;
            if (q < n) f = Math.log(v / l) / t, i = function (e) {
                return [s + e * d, c + e * g, l * Math.exp(t * e * f)]
            }; else {
                var _ = Math.sqrt(q), b = (v * v - l * l + r * q) / (2 * l * e * _), j = (v * v - l * l - r * q) / (2 * v * e * _), y = Math.log(Math.sqrt(b * b + 1) - b), O = Math.log(Math.sqrt(j * j + 1) - j);
                f = (O - y) / t, i = function (r) {
                    var n = r * f, M = a(y), h = l / (e * _) * (M * o(t * n + y) - u(y));
                    return [s + h * d, c + h * g, l * M / a(t * n + y)]
                }
            }
            return i.duration = 1e3 * f, i
        };
        var t = Math.SQRT2, e = 2, r = 4, n = 1e-12;

        function a(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }

        function u(t) {
            return ((t = Math.exp(t)) - 1 / t) / 2
        }

        function o(t) {
            return ((t = Math.exp(2 * t)) - 1) / (t + 1)
        }
    }, {}], "Lde/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.hslLong = void 0;
        var e = require("d3-color"), t = require("./color"), r = o(t);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(t) {
            return function (o, u) {
                var l = t((o = (0, e.hsl)(o)).h, (u = (0, e.hsl)(u)).h), n = (0, r.default)(o.s, u.s), s = (0, r.default)(o.l, u.l), a = (0, r.default)(o.opacity, u.opacity);
                return function (e) {
                    return o.h = l(e), o.s = n(e), o.l = s(e), o.opacity = a(e), o + ""
                }
            }
        }

        exports.default = u(t.hue);
        var l = exports.hslLong = u(r.default);
    }, {"d3-color": "Peej", "./color": "RhzI"}], "+rgh": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = a;
        var e = require("d3-color"), t = require("./color"), r = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(t, u) {
            var a = (0, r.default)((t = (0, e.lab)(t)).l, (u = (0, e.lab)(u)).l), l = (0, r.default)(t.a, u.a), o = (0, r.default)(t.b, u.b), c = (0, r.default)(t.opacity, u.opacity);
            return function (e) {
                return t.l = a(e), t.a = l(e), t.b = o(e), t.opacity = c(e), t + ""
            }
        }
    }, {"d3-color": "Peej", "./color": "RhzI"}], "5dxP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.hclLong = void 0;
        var e = require("d3-color"), t = require("./color"), r = o(t);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(t) {
            return function (o, u) {
                var c = t((o = (0, e.hcl)(o)).h, (u = (0, e.hcl)(u)).h), l = (0, r.default)(o.c, u.c), n = (0, r.default)(o.l, u.l), a = (0, r.default)(o.opacity, u.opacity);
                return function (e) {
                    return o.h = c(e), o.c = l(e), o.l = n(e), o.opacity = a(e), o + ""
                }
            }
        }

        exports.default = u(t.hue);
        var c = exports.hclLong = u(r.default);
    }, {"d3-color": "Peej", "./color": "RhzI"}], "X3VV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.cubehelixLong = void 0;
        var e = require("d3-color"), t = require("./color"), u = r(t);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(t) {
            return function r(o) {
                function l(r, l) {
                    var n = t((r = (0, e.cubehelix)(r)).h, (l = (0, e.cubehelix)(l)).h), i = (0, u.default)(r.s, l.s), a = (0, u.default)(r.l, l.l), c = (0, u.default)(r.opacity, l.opacity);
                    return function (e) {
                        return r.h = n(e), r.s = i(e), r.l = a(Math.pow(e, o)), r.opacity = c(e), r + ""
                    }
                }

                return o = +o, l.gamma = r, l
            }(1)
        }

        exports.default = o(t.hue);
        var l = exports.cubehelixLong = o(u.default);
    }, {"d3-color": "Peej", "./color": "RhzI"}], "1xtk": [function (require, module, exports) {
        "use strict";

        function e(e, r) {
            for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n;) o[t] = e(a, a = r[++t]);
            return function (e) {
                var r = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
                return o[r](e - r)
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = e;
    }, {}], "7Oe1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            for (var t = new Array(r), o = 0; o < r; ++o) t[o] = e(o / (r - 1));
            return t
        };
    }, {}], "k9aH": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./value");
        Object.defineProperty(exports, "interpolate", {
            enumerable: !0, get: function () {
                return O(e).default
            }
        });
        var r = require("./array");
        Object.defineProperty(exports, "interpolateArray", {
            enumerable: !0, get: function () {
                return O(r).default
            }
        });
        var t = require("./basis");
        Object.defineProperty(exports, "interpolateBasis", {
            enumerable: !0, get: function () {
                return O(t).default
            }
        });
        var n = require("./basisClosed");
        Object.defineProperty(exports, "interpolateBasisClosed", {
            enumerable: !0, get: function () {
                return O(n).default
            }
        });
        var u = require("./date");
        Object.defineProperty(exports, "interpolateDate", {
            enumerable: !0, get: function () {
                return O(u).default
            }
        });
        var o = require("./discrete");
        Object.defineProperty(exports, "interpolateDiscrete", {
            enumerable: !0, get: function () {
                return O(o).default
            }
        });
        var i = require("./hue");
        Object.defineProperty(exports, "interpolateHue", {
            enumerable: !0, get: function () {
                return O(i).default
            }
        });
        var a = require("./number");
        Object.defineProperty(exports, "interpolateNumber", {
            enumerable: !0, get: function () {
                return O(a).default
            }
        });
        var l = require("./object");
        Object.defineProperty(exports, "interpolateObject", {
            enumerable: !0, get: function () {
                return O(l).default
            }
        });
        var p = require("./round");
        Object.defineProperty(exports, "interpolateRound", {
            enumerable: !0, get: function () {
                return O(p).default
            }
        });
        var f = require("./string");
        Object.defineProperty(exports, "interpolateString", {
            enumerable: !0, get: function () {
                return O(f).default
            }
        });
        var b = require("./transform/index");
        Object.defineProperty(exports, "interpolateTransformCss", {
            enumerable: !0, get: function () {
                return b.interpolateTransformCss
            }
        }), Object.defineProperty(exports, "interpolateTransformSvg", {
            enumerable: !0, get: function () {
                return b.interpolateTransformSvg
            }
        });
        var s = require("./zoom");
        Object.defineProperty(exports, "interpolateZoom", {
            enumerable: !0, get: function () {
                return O(s).default
            }
        });
        var c = require("./rgb");
        Object.defineProperty(exports, "interpolateRgb", {
            enumerable: !0, get: function () {
                return O(c).default
            }
        }), Object.defineProperty(exports, "interpolateRgbBasis", {
            enumerable: !0, get: function () {
                return c.rgbBasis
            }
        }), Object.defineProperty(exports, "interpolateRgbBasisClosed", {
            enumerable: !0, get: function () {
                return c.rgbBasisClosed
            }
        });
        var d = require("./hsl");
        Object.defineProperty(exports, "interpolateHsl", {
            enumerable: !0, get: function () {
                return O(d).default
            }
        }), Object.defineProperty(exports, "interpolateHslLong", {
            enumerable: !0, get: function () {
                return d.hslLong
            }
        });
        var g = require("./lab");
        Object.defineProperty(exports, "interpolateLab", {
            enumerable: !0, get: function () {
                return O(g).default
            }
        });
        var m = require("./hcl");
        Object.defineProperty(exports, "interpolateHcl", {
            enumerable: !0, get: function () {
                return O(m).default
            }
        }), Object.defineProperty(exports, "interpolateHclLong", {
            enumerable: !0, get: function () {
                return m.hclLong
            }
        });
        var x = require("./cubehelix");
        Object.defineProperty(exports, "interpolateCubehelix", {
            enumerable: !0, get: function () {
                return O(x).default
            }
        }), Object.defineProperty(exports, "interpolateCubehelixLong", {
            enumerable: !0, get: function () {
                return x.cubehelixLong
            }
        });
        var j = require("./piecewise");
        Object.defineProperty(exports, "piecewise", {
            enumerable: !0, get: function () {
                return O(j).default
            }
        });
        var y = require("./quantize");

        function O(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "quantize", {
            enumerable: !0, get: function () {
                return O(y).default
            }
        });
    }, {"./value": "gzc/", "./array": "TYZM", "./basis": "2ElX", "./basisClosed": "hnXz", "./date": "jEDF", "./discrete": "B1w8", "./hue": "0ZrP", "./number": "YNf8", "./object": "iJdZ", "./round": "nXvs", "./string": "nK0E", "./transform/index": "9v4X", "./zoom": "jU1v", "./rgb": "rvVK", "./hsl": "Lde/", "./lab": "+rgh", "./hcl": "5dxP", "./cubehelix": "X3VV", "./piecewise": "1xtk", "./quantize": "7Oe1"}], "ea66": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.now = f, exports.Timer = m, exports.timer = p, exports.timerFlush = w;
        var t, n, e = 0, o = 0, i = 0, r = 1e3, l = 0, c = 0, s = 0, u = "object" == typeof performance && performance.now ? performance : Date, a = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };

        function f() {
            return c || (a(_), c = u.now() + s)
        }

        function _() {
            c = 0
        }

        function m() {
            this._call = this._time = this._next = null
        }

        function p(t, n, e) {
            var o = new m;
            return o.restart(t, n, e), o
        }

        function w() {
            f(), ++e;
            for (var n, o = t; o;) (n = c - o._time) >= 0 && o._call.call(null, n), o = o._next;
            --e
        }

        function h() {
            c = (l = u.now()) + s, e = o = 0;
            try {
                w()
            } finally {
                e = 0, y(), c = 0
            }
        }

        function x() {
            var t = u.now(), n = t - l;
            n > r && (s -= n, l = t)
        }

        function y() {
            for (var e, o, i = t, r = 1 / 0; i;) i._call ? (r > i._time && (r = i._time), e = i, i = i._next) : (o = i._next, i._next = null, i = e ? e._next = o : t = o);
            n = e, v(r)
        }

        function v(t) {
            e || (o && (o = clearTimeout(o)), t - c > 24 ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)), i && (i = clearInterval(i))) : (i || (l = u.now(), i = setInterval(x, r)), e = 1, a(h)))
        }

        m.prototype = p.prototype = {
            constructor: m, restart: function (e, o, i) {
                if ("function" != typeof e) throw new TypeError("callback is not a function");
                i = (null == i ? f() : +i) + (null == o ? 0 : +o), this._next || n === this || (n ? n._next = this : t = this, n = this), this._call = e, this._time = i, v()
            }, stop: function () {
                this._call && (this._call = null, this._time = 1 / 0, v())
            }
        };
    }, {}], "jIZm": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t, u) {
            var n = new e.Timer;
            return t = null == t ? 0 : +t, n.restart(function (e) {
                n.stop(), r(e + t)
            }, t, u), n
        };
        var e = require("./timer");
    }, {"./timer": "ea66"}], "QZ3s": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t, n) {
            var u = new e.Timer, s = t;
            return null == t ? (u.restart(r, t, n), u) : (t = +t, n = null == n ? (0, e.now)() : +n, u.restart(function e(a) {
                a += s, u.restart(e, s += t, n), r(a)
            }, t, n), u)
        };
        var e = require("./timer");
    }, {"./timer": "ea66"}], "rdzS": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./timer");
        Object.defineProperty(exports, "now", {
            enumerable: !0, get: function () {
                return e.now
            }
        }), Object.defineProperty(exports, "timer", {
            enumerable: !0, get: function () {
                return e.timer
            }
        }), Object.defineProperty(exports, "timerFlush", {
            enumerable: !0, get: function () {
                return e.timerFlush
            }
        });
        var r = require("./timeout");
        Object.defineProperty(exports, "timeout", {
            enumerable: !0, get: function () {
                return n(r).default
            }
        });
        var t = require("./interval");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "interval", {
            enumerable: !0, get: function () {
                return n(t).default
            }
        });
    }, {"./timer": "ea66", "./timeout": "jIZm", "./interval": "QZ3s"}], "nqGJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = void 0, exports.default = function (t, e, o, i, s, u) {
            var l = t.__transition;
            if (l) {
                if (o in l) return
            } else t.__transition = {};
            x(t, o, {name: e, index: i, group: s, on: r, tween: a, time: u.time, delay: u.delay, duration: u.duration, ease: u.ease, timer: null, state: n})
        }, exports.init = p, exports.set = _, exports.get = f;
        var t = require("d3-dispatch"), e = require("d3-timer"), r = (0, t.dispatch)("start", "end", "interrupt"), a = [], n = exports.CREATED = 0, o = exports.SCHEDULED = 1, i = exports.STARTING = 2, s = exports.STARTED = 3, u = exports.RUNNING = 4, l = exports.ENDING = 5, d = exports.ENDED = 6;

        function p(t, e) {
            var r = f(t, e);
            if (r.state > n) throw new Error("too late; already scheduled");
            return r
        }

        function _(t, e) {
            var r = f(t, e);
            if (r.state > i) throw new Error("too late; already started");
            return r
        }

        function f(t, e) {
            var r = t.__transition;
            if (!r || !(r = r[e])) throw new Error("transition not found");
            return r
        }

        function x(t, r, a) {
            var n, p = t.__transition;

            function _(l) {
                var c, m, E, D;
                if (a.state !== o) return x();
                for (c in p) if ((D = p[c]).name === a.name) {
                    if (D.state === s) return (0, e.timeout)(_);
                    D.state === u ? (D.state = d, D.timer.stop(), D.on.call("interrupt", t, t.__data__, D.index, D.group), delete p[c]) : +c < r && (D.state = d, D.timer.stop(), delete p[c])
                }
                if ((0, e.timeout)(function () {
                    a.state === s && (a.state = u, a.timer.restart(f, a.delay, a.time), f(l))
                }), a.state = i, a.on.call("start", t, t.__data__, a.index, a.group), a.state === i) {
                    for (a.state = s, n = new Array(E = a.tween.length), c = 0, m = -1; c < E; ++c) (D = a.tween[c].value.call(t, t.__data__, a.index, a.group)) && (n[++m] = D);
                    n.length = m + 1
                }
            }

            function f(e) {
                for (var r = e < a.duration ? a.ease.call(null, e / a.duration) : (a.timer.restart(x), a.state = l, 1), o = -1, i = n.length; ++o < i;) n[o].call(null, r);
                a.state === l && (a.on.call("end", t, t.__data__, a.index, a.group), x())
            }

            function x() {
                for (var e in a.state = d, a.timer.stop(), delete p[r], p) return;
                delete t.__transition
            }

            p[r] = a, a.timer = (0, e.timer)(function (t) {
                a.state = o, a.timer.restart(_, a.delay, a.time), a.delay <= t && _(t - a.delay)
            }, 0, a.time)
        }
    }, {"d3-dispatch": "D3zY", "d3-timer": "rdzS"}], "fDNN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, r) {
            var n, i, a, s = t.__transition, l = !0;
            if (s) {
                for (a in r = null == r ? null : r + "", s) (n = s[a]).name === r ? (i = n.state > e.STARTING && n.state < e.ENDING, n.state = e.ENDED, n.timer.stop(), i && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete s[a]) : l = !1;
                l && delete t.__transition
            }
        };
        var e = require("./transition/schedule");
    }, {"./transition/schedule": "nqGJ"}], "cQLj": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return this.each(function () {
                (0, t.default)(this, e)
            })
        };
        var e = require("../interrupt"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../interrupt": "fDNN"}], "jGA0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, i) {
            var u = this._id;
            if (r += "", arguments.length < 2) {
                for (var a, f = (0, e.get)(this.node(), u).tween, l = 0, o = f.length; l < o; ++l) if ((a = f[l]).name === r) return a.value;
                return null
            }
            return this.each((null == i ? t : n)(u, r, i))
        }, exports.tweenValue = r;
        var e = require("./schedule");

        function t(t, n) {
            var r, i;
            return function () {
                var u = (0, e.set)(this, t), a = u.tween;
                if (a !== r) for (var f = 0, l = (i = r = a).length; f < l; ++f) if (i[f].name === n) {
                    (i = i.slice()).splice(f, 1);
                    break
                }
                u.tween = i
            }
        }

        function n(t, n, r) {
            var i, u;
            if ("function" != typeof r) throw new Error;
            return function () {
                var a = (0, e.set)(this, t), f = a.tween;
                if (f !== i) {
                    u = (i = f).slice();
                    for (var l = {name: n, value: r}, o = 0, s = u.length; o < s; ++o) if (u[o].name === n) {
                        u[o] = l;
                        break
                    }
                    o === s && u.push(l)
                }
                a.tween = u
            }
        }

        function r(t, n, r) {
            var i = t._id;
            return t.each(function () {
                var t = (0, e.set)(this, i);
                (t.value || (t.value = {}))[n] = r.apply(this, arguments)
            }), function (t) {
                return (0, e.get)(t, i).value[n]
            }
        }
    }, {"./schedule": "nqGJ"}], "EwAl": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, o) {
            var n;
            return ("number" == typeof o ? r.interpolateNumber : o instanceof e.color ? r.interpolateRgb : (n = (0, e.color)(o)) ? (o = n, r.interpolateRgb) : r.interpolateString)(t, o)
        };
        var e = require("d3-color"), r = require("d3-interpolate");
    }, {"d3-color": "Peej", "d3-interpolate": "k9aH"}], "Edhf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n, i) {
            var v = (0, e.namespace)(n), h = "transform" === v ? t.interpolateTransformSvg : u.default;
            return this.attrTween(n, "function" == typeof i ? (v.local ? f : s)(v, h, (0, r.tweenValue)(this, "attr." + n, i)) : null == i ? (v.local ? o : l)(v) : (v.local ? c : a)(v, h, i + ""))
        };
        var t = require("d3-interpolate"), e = require("d3-selection"), r = require("./tween"), n = require("./interpolate"), u = i(n);

        function i(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function l(t) {
            return function () {
                this.removeAttribute(t)
            }
        }

        function o(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function a(t, e, r) {
            var n, u;
            return function () {
                var i = this.getAttribute(t);
                return i === r ? null : i === n ? u : u = e(n = i, r)
            }
        }

        function c(t, e, r) {
            var n, u;
            return function () {
                var i = this.getAttributeNS(t.space, t.local);
                return i === r ? null : i === n ? u : u = e(n = i, r)
            }
        }

        function s(t, e, r) {
            var n, u, i;
            return function () {
                var l, o = r(this);
                if (null != o) return (l = this.getAttribute(t)) === o ? null : l === n && o === u ? i : i = e(n = l, u = o);
                this.removeAttribute(t)
            }
        }

        function f(t, e, r) {
            var n, u, i;
            return function () {
                var l, o = r(this);
                if (null != o) return (l = this.getAttributeNS(t.space, t.local)) === o ? null : l === n && o === u ? i : i = e(n = l, u = o);
                this.removeAttributeNS(t.space, t.local)
            }
        }
    }, {"d3-interpolate": "k9aH", "d3-selection": "//ys", "./tween": "jGA0", "./interpolate": "EwAl"}], "+bkn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, u) {
            var i = "attr." + r;
            if (arguments.length < 2) return (i = this.tween(i)) && i._value;
            if (null == u) return this.tween(i, null);
            if ("function" != typeof u) throw new Error;
            var a = (0, t.namespace)(r);
            return this.tween(i, (a.local ? e : n)(a, u))
        };
        var t = require("d3-selection");

        function e(t, e) {
            function n() {
                var n = this, r = e.apply(n, arguments);
                return r && function (e) {
                    n.setAttributeNS(t.space, t.local, r(e))
                }
            }

            return n._value = e, n
        }

        function n(t, e) {
            function n() {
                var n = this, r = e.apply(n, arguments);
                return r && function (e) {
                    n.setAttribute(t, r(e))
                }
            }

            return n._value = e, n
        }
    }, {"d3-selection": "//ys"}], "8ln8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n) {
            var r = this._id;
            return arguments.length ? this.each(("function" == typeof n ? e : i)(r, n)) : (0, t.get)(this.node(), r).delay
        };
        var t = require("./schedule");

        function e(e, i) {
            return function () {
                (0, t.init)(this, e).delay = +i.apply(this, arguments)
            }
        }

        function i(e, i) {
            return i = +i, function () {
                (0, t.init)(this, e).delay = i
            }
        }
    }, {"./schedule": "nqGJ"}], "WWpH": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (i) {
            var r = this._id;
            return arguments.length ? this.each(("function" == typeof i ? e : n)(r, i)) : (0, t.get)(this.node(), r).duration
        };
        var t = require("./schedule");

        function e(e, n) {
            return function () {
                (0, t.set)(this, e).duration = +n.apply(this, arguments)
            }
        }

        function n(e, n) {
            return n = +n, function () {
                (0, t.set)(this, e).duration = n
            }
        }
    }, {"./schedule": "nqGJ"}], "/Acg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            var n = this._id;
            return arguments.length ? this.each(t(n, r)) : (0, e.get)(this.node(), n).ease
        };
        var e = require("./schedule");

        function t(t, r) {
            if ("function" != typeof r) throw new Error;
            return function () {
                (0, e.set)(this, t).ease = r
            }
        }
    }, {"./schedule": "nqGJ"}], "MnwJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            "function" != typeof t && (t = (0, e.matcher)(t));
            for (var n = this._groups, i = n.length, s = new Array(i), a = 0; a < i; ++a) for (var o, u = n[a], _ = u.length, h = s[a] = [], l = 0; l < _; ++l) (o = u[l]) && t.call(o, o.__data__, l, u) && h.push(o);
            return new r.Transition(s, this._parents, this._name, this._id)
        };
        var e = require("d3-selection"), r = require("./index");
    }, {"d3-selection": "//ys", "./index": "OWOq"}], "cfNr": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            if (e._id !== this._id) throw new Error;
            for (var t = this._groups, i = e._groups, n = t.length, s = i.length, o = Math.min(n, s), a = new Array(n), h = 0; h < o; ++h) for (var u, _ = t[h], d = i[h], f = _.length, l = a[h] = new Array(f), p = 0; p < f; ++p) (u = _[p] || d[p]) && (l[p] = u);
            for (; h < n; ++h) a[h] = t[h];
            return new r.Transition(a, this._parents, this._name, this._id)
        };
        var r = require("./index");
    }, {"./index": "OWOq"}], "ELQ0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, r) {
            var i = this._id;
            return arguments.length < 2 ? (0, e.get)(this.node(), i).on.on(t) : this.each(n(i, t, r))
        };
        var e = require("./schedule");

        function t(e) {
            return (e + "").trim().split(/^|\s+/).every(function (e) {
                var t = e.indexOf(".");
                return t >= 0 && (e = e.slice(0, t)), !e || "start" === e
            })
        }

        function n(n, r, i) {
            var o, s, u = t(r) ? e.init : e.set;
            return function () {
                var e = u(this, n), t = e.on;
                t !== o && (s = (o = t).copy()).on(r, i), e.on = s
            }
        }
    }, {"./schedule": "nqGJ"}], "mXFz": [function (require, module, exports) {
        "use strict";

        function e(e) {
            return function () {
                var t = this.parentNode;
                for (var r in this.__transition) if (+r !== e) return;
                t && t.removeChild(this)
            }
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this.on("end.remove", e(this._id))
        };
    }, {}], "P4XU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (a) {
            var n = this._name, i = this._id;
            "function" != typeof a && (a = (0, e.selector)(a));
            for (var u = this._groups, s = u.length, o = new Array(s), d = 0; d < s; ++d) for (var l, f, c = u[d], h = c.length, p = o[d] = new Array(h), v = 0; v < h; ++v) (l = c[v]) && (f = a.call(l, l.__data__, v, c)) && ("__data__" in l && (f.__data__ = l.__data__), p[v] = f, (0, _.default)(p[v], n, i, v, p, (0, r.get)(l, i)));
            return new t.Transition(o, this._parents, n, i)
        };
        var e = require("d3-selection"), t = require("./index"), r = require("./schedule"), _ = a(r);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"d3-selection": "//ys", "./index": "OWOq", "./schedule": "nqGJ"}], "BH5v": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n) {
            var i = this._name, l = this._id;
            "function" != typeof n && (n = (0, e.selectorAll)(n));
            for (var o = this._groups, s = o.length, a = [], f = [], d = 0; d < s; ++d) for (var _, c = o[d], h = c.length, p = 0; p < h; ++p) if (_ = c[p]) {
                for (var v, g = n.call(_, _.__data__, p, c), q = (0, t.get)(_, l), x = 0, y = g.length; x < y; ++x) (v = g[x]) && (0, u.default)(v, i, l, x, g, q);
                a.push(g), f.push(_)
            }
            return new r.Transition(a, f, i, l)
        };
        var e = require("d3-selection"), r = require("./index"), t = require("./schedule"), u = n(t);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"d3-selection": "//ys", "./index": "OWOq", "./schedule": "nqGJ"}], "kIVv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return new t(this._groups, this._parents)
        };
        var e = require("d3-selection"), t = e.selection.prototype.constructor;
    }, {"d3-selection": "//ys"}], "xTYE": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, n, s) {
            var f = "transform" == (t += "") ? e.interpolateTransformCss : u.default;
            return null == n ? this.styleTween(t, i(t, f)).on("end.style." + t, l(t)) : this.styleTween(t, "function" == typeof n ? a(t, f, (0, r.tweenValue)(this, "style." + t, n)) : o(t, f, n + ""), s)
        };
        var e = require("d3-interpolate"), t = require("d3-selection"), r = require("./tween"), n = require("./interpolate"), u = s(n);

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i(e, r) {
            var n, u, s;
            return function () {
                var i = (0, t.style)(this, e), l = (this.style.removeProperty(e), (0, t.style)(this, e));
                return i === l ? null : i === n && l === u ? s : s = r(n = i, u = l)
            }
        }

        function l(e) {
            return function () {
                this.style.removeProperty(e)
            }
        }

        function o(e, r, n) {
            var u, s;
            return function () {
                var i = (0, t.style)(this, e);
                return i === n ? null : i === u ? s : s = r(u = i, n)
            }
        }

        function a(e, r, n) {
            var u, s, i;
            return function () {
                var l = (0, t.style)(this, e), o = n(this);
                return null == o && (this.style.removeProperty(e), o = (0, t.style)(this, e)), l === o ? null : l === u && o === s ? i : i = r(u = l, s = o)
            }
        }
    }, {"d3-interpolate": "k9aH", "d3-selection": "//ys", "./tween": "jGA0", "./interpolate": "EwAl"}], "PSnC": [function (require, module, exports) {
        "use strict";

        function e(e, t, n) {
            function r() {
                var r = this, u = t.apply(r, arguments);
                return u && function (t) {
                    r.style.setProperty(e, u(t), n)
                }
            }

            return r._value = t, r
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, n, r) {
            var u = "style." + (t += "");
            if (arguments.length < 2) return (u = this.tween(u)) && u._value;
            if (null == n) return this.tween(u, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(u, e(t, n, null == r ? "" : r))
        };
    }, {}], "JpCG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (u) {
            return this.tween("text", "function" == typeof u ? n((0, t.tweenValue)(this, "text", u)) : e(null == u ? "" : u + ""))
        };
        var t = require("./tween");

        function e(t) {
            return function () {
                this.textContent = t
            }
        }

        function n(t) {
            return function () {
                var e = t(this);
                this.textContent = null == e ? "" : e
            }
        }
    }, {"./tween": "jGA0"}], "IPhv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            for (var i = this._name, n = this._id, a = (0, e.newId)(), u = this._groups, s = u.length, d = 0; d < s; ++d) for (var o, l = u[d], f = l.length, _ = 0; _ < f; ++_) if (o = l[_]) {
                var h = (0, t.get)(o, n);
                (0, r.default)(o, i, a, _, l, {time: h.time + h.delay + h.duration, delay: 0, duration: h.duration, ease: h.ease})
            }
            return new e.Transition(u, this._parents, i, a)
        };
        var e = require("./index"), t = require("./schedule"), r = i(t);

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./index": "OWOq", "./schedule": "nqGJ"}], "OWOq": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.Transition = F, exports.default = G, exports.newId = H;
        var e = require("d3-selection"), t = require("./attr"), r = D(t), u = require("./attrTween"), i = D(u), l = require("./delay"), a = D(l), n = require("./duration"), o = D(n), s = require("./ease"), d = D(s), f = require("./filter"), c = D(f), q = require("./merge"), p = D(q), y = require("./on"), _ = D(y), m = require("./remove"), w = D(m), h = require("./select"), v = D(h), x = require("./selectAll"), T = D(x), g = require("./selection"), z = D(g), A = require("./style"), M = D(A),
            b = require("./styleTween"), j = D(b), I = require("./text"), O = D(I), P = require("./transition"), k = D(P), B = require("./tween"), C = D(B);

        function D(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var E = 0;

        function F(e, t, r, u) {
            this._groups = e, this._parents = t, this._name = r, this._id = u
        }

        function G(t) {
            return (0, e.selection)().transition(t)
        }

        function H() {
            return ++E
        }

        var J = e.selection.prototype;
        F.prototype = G.prototype = {constructor: F, select: v.default, selectAll: T.default, filter: c.default, merge: p.default, selection: z.default, transition: k.default, call: J.call, nodes: J.nodes, node: J.node, size: J.size, empty: J.empty, each: J.each, on: _.default, attr: r.default, attrTween: i.default, style: M.default, styleTween: j.default, text: O.default, remove: w.default, tween: C.default, delay: a.default, duration: o.default, ease: d.default};
    }, {"d3-selection": "//ys", "./attr": "Edhf", "./attrTween": "+bkn", "./delay": "8ln8", "./duration": "WWpH", "./ease": "/Acg", "./filter": "MnwJ", "./merge": "cfNr", "./on": "ELQ0", "./remove": "mXFz", "./select": "P4XU", "./selectAll": "BH5v", "./selection": "kIVv", "./style": "xTYE", "./styleTween": "PSnC", "./text": "JpCG", "./transition": "IPhv", "./tween": "jGA0"}], "+Vac": [function (require, module, exports) {
        "use strict";

        function e(e) {
            return +e
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.linear = e;
    }, {}], "EZNz": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t * t
        }

        function e(t) {
            return t * (2 - t)
        }

        function u(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.quadIn = t, exports.quadOut = e, exports.quadInOut = u;
    }, {}], "ropQ": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t * t * t
        }

        function e(t) {
            return --t * t * t + 1
        }

        function u(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.cubicIn = t, exports.cubicOut = e, exports.cubicInOut = u;
    }, {}], "rJoA": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = 3, n = exports.polyIn = function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }

            return n = +n, e.exponent = t, e
        }(t), e = exports.polyOut = function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }

            return n = +n, e.exponent = t, e
        }(t), o = exports.polyInOut = function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }

            return n = +n, e.exponent = t, e
        }(t);
    }, {}], "XXPs": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.sinIn = e, exports.sinOut = r, exports.sinInOut = s;
        var t = Math.PI, n = t / 2;

        function e(t) {
            return 1 - Math.cos(t * n)
        }

        function r(t) {
            return Math.sin(t * n)
        }

        function s(n) {
            return (1 - Math.cos(t * n)) / 2
        }
    }, {}], "PTZz": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return Math.pow(2, 10 * t - 10)
        }

        function e(t) {
            return 1 - Math.pow(2, -10 * t)
        }

        function o(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.expIn = t, exports.expOut = e, exports.expInOut = o;
    }, {}], "qwy6": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return 1 - Math.sqrt(1 - t * t)
        }

        function r(t) {
            return Math.sqrt(1 - --t * t)
        }

        function e(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.circleIn = t, exports.circleOut = r, exports.circleInOut = e;
    }, {}], "r/eB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.bounceIn = b, exports.bounceOut = f, exports.bounceInOut = x;
        var e = 4 / 11, t = 6 / 11, n = 8 / 11, r = .75, u = 9 / 11, o = 10 / 11, c = .9375, s = 21 / 22, i = 63 / 64, p = 1 / e / e;

        function b(e) {
            return 1 - f(1 - e)
        }

        function f(b) {
            return (b = +b) < e ? p * b * b : b < n ? p * (b -= t) * b + r : b < o ? p * (b -= u) * b + c : p * (b -= s) * b + i
        }

        function x(e) {
            return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2
        }
    }, {}], "G5Mi": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = 1.70158, r = exports.backIn = function t(r) {
            function e(t) {
                return t * t * ((r + 1) * t - r)
            }

            return r = +r, e.overshoot = t, e
        }(t), e = exports.backOut = function t(r) {
            function e(t) {
                return --t * t * ((r + 1) * t + r) + 1
            }

            return r = +r, e.overshoot = t, e
        }(t), n = exports.backInOut = function t(r) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((r + 1) * t - r) : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2
            }

            return r = +r, e.overshoot = t, e
        }(t);
    }, {}], "TN0k": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = 2 * Math.PI, n = 1, r = .3, e = exports.elasticIn = function n(r, e) {
            var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

            function u(t) {
                return r * Math.pow(2, 10 * --t) * Math.sin((a - t) / e)
            }

            return u.amplitude = function (r) {
                return n(r, e * t)
            }, u.period = function (t) {
                return n(r, t)
            }, u
        }(n, r), a = exports.elasticOut = function n(r, e) {
            var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

            function u(t) {
                return 1 - r * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / e)
            }

            return u.amplitude = function (r) {
                return n(r, e * t)
            }, u.period = function (t) {
                return n(r, t)
            }, u
        }(n, r), u = exports.elasticInOut = function n(r, e) {
            var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

            function u(t) {
                return ((t = 2 * t - 1) < 0 ? r * Math.pow(2, 10 * t) * Math.sin((a - t) / e) : 2 - r * Math.pow(2, -10 * t) * Math.sin((a + t) / e)) / 2
            }

            return u.amplitude = function (r) {
                return n(r, e * t)
            }, u.period = function (t) {
                return n(r, t)
            }, u
        }(n, r);
    }, {}], "pJ11": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./linear");
        Object.defineProperty(exports, "easeLinear", {
            enumerable: !0, get: function () {
                return e.linear
            }
        });
        var t = require("./quad");
        Object.defineProperty(exports, "easeQuad", {
            enumerable: !0, get: function () {
                return t.quadInOut
            }
        }), Object.defineProperty(exports, "easeQuadIn", {
            enumerable: !0, get: function () {
                return t.quadIn
            }
        }), Object.defineProperty(exports, "easeQuadOut", {
            enumerable: !0, get: function () {
                return t.quadOut
            }
        }), Object.defineProperty(exports, "easeQuadInOut", {
            enumerable: !0, get: function () {
                return t.quadInOut
            }
        });
        var r = require("./cubic");
        Object.defineProperty(exports, "easeCubic", {
            enumerable: !0, get: function () {
                return r.cubicInOut
            }
        }), Object.defineProperty(exports, "easeCubicIn", {
            enumerable: !0, get: function () {
                return r.cubicIn
            }
        }), Object.defineProperty(exports, "easeCubicOut", {
            enumerable: !0, get: function () {
                return r.cubicOut
            }
        }), Object.defineProperty(exports, "easeCubicInOut", {
            enumerable: !0, get: function () {
                return r.cubicInOut
            }
        });
        var n = require("./poly");
        Object.defineProperty(exports, "easePoly", {
            enumerable: !0, get: function () {
                return n.polyInOut
            }
        }), Object.defineProperty(exports, "easePolyIn", {
            enumerable: !0, get: function () {
                return n.polyIn
            }
        }), Object.defineProperty(exports, "easePolyOut", {
            enumerable: !0, get: function () {
                return n.polyOut
            }
        }), Object.defineProperty(exports, "easePolyInOut", {
            enumerable: !0, get: function () {
                return n.polyInOut
            }
        });
        var u = require("./sin");
        Object.defineProperty(exports, "easeSin", {
            enumerable: !0, get: function () {
                return u.sinInOut
            }
        }), Object.defineProperty(exports, "easeSinIn", {
            enumerable: !0, get: function () {
                return u.sinIn
            }
        }), Object.defineProperty(exports, "easeSinOut", {
            enumerable: !0, get: function () {
                return u.sinOut
            }
        }), Object.defineProperty(exports, "easeSinInOut", {
            enumerable: !0, get: function () {
                return u.sinInOut
            }
        });
        var o = require("./exp");
        Object.defineProperty(exports, "easeExp", {
            enumerable: !0, get: function () {
                return o.expInOut
            }
        }), Object.defineProperty(exports, "easeExpIn", {
            enumerable: !0, get: function () {
                return o.expIn
            }
        }), Object.defineProperty(exports, "easeExpOut", {
            enumerable: !0, get: function () {
                return o.expOut
            }
        }), Object.defineProperty(exports, "easeExpInOut", {
            enumerable: !0, get: function () {
                return o.expInOut
            }
        });
        var c = require("./circle");
        Object.defineProperty(exports, "easeCircle", {
            enumerable: !0, get: function () {
                return c.circleInOut
            }
        }), Object.defineProperty(exports, "easeCircleIn", {
            enumerable: !0, get: function () {
                return c.circleIn
            }
        }), Object.defineProperty(exports, "easeCircleOut", {
            enumerable: !0, get: function () {
                return c.circleOut
            }
        }), Object.defineProperty(exports, "easeCircleInOut", {
            enumerable: !0, get: function () {
                return c.circleInOut
            }
        });
        var i = require("./bounce");
        Object.defineProperty(exports, "easeBounce", {
            enumerable: !0, get: function () {
                return i.bounceOut
            }
        }), Object.defineProperty(exports, "easeBounceIn", {
            enumerable: !0, get: function () {
                return i.bounceIn
            }
        }), Object.defineProperty(exports, "easeBounceOut", {
            enumerable: !0, get: function () {
                return i.bounceOut
            }
        }), Object.defineProperty(exports, "easeBounceInOut", {
            enumerable: !0, get: function () {
                return i.bounceInOut
            }
        });
        var a = require("./back");
        Object.defineProperty(exports, "easeBack", {
            enumerable: !0, get: function () {
                return a.backInOut
            }
        }), Object.defineProperty(exports, "easeBackIn", {
            enumerable: !0, get: function () {
                return a.backIn
            }
        }), Object.defineProperty(exports, "easeBackOut", {
            enumerable: !0, get: function () {
                return a.backOut
            }
        }), Object.defineProperty(exports, "easeBackInOut", {
            enumerable: !0, get: function () {
                return a.backInOut
            }
        });
        var b = require("./elastic");
        Object.defineProperty(exports, "easeElastic", {
            enumerable: !0, get: function () {
                return b.elasticOut
            }
        }), Object.defineProperty(exports, "easeElasticIn", {
            enumerable: !0, get: function () {
                return b.elasticIn
            }
        }), Object.defineProperty(exports, "easeElasticOut", {
            enumerable: !0, get: function () {
                return b.elasticOut
            }
        }), Object.defineProperty(exports, "easeElasticInOut", {
            enumerable: !0, get: function () {
                return b.elasticInOut
            }
        });
    }, {"./linear": "+Vac", "./quad": "EZNz", "./cubic": "ropQ", "./poly": "rJoA", "./sin": "XXPs", "./exp": "PTZz", "./circle": "qwy6", "./bounce": "r/eB", "./back": "G5Mi", "./elastic": "TN0k"}], "VKWr": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            var t, u;
            r instanceof e.Transition ? (t = r._id, r = r._name) : (t = (0, e.newId)(), (u = a).time = (0, i.now)(), r = null == r ? null : r + "");
            for (var s = this._groups, l = s.length, d = 0; d < l; ++d) for (var f, _ = s[d], c = _.length, v = 0; v < c; ++v) (f = _[v]) && (0, n.default)(f, r, t, v, _, u || o(f, t));
            return new e.Transition(s, this._parents, r, t)
        };
        var e = require("../transition/index"), r = require("../transition/schedule"), n = u(r), t = require("d3-ease"), i = require("d3-timer");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = {time: null, delay: 0, duration: 250, ease: t.easeCubicInOut};

        function o(e, r) {
            for (var n; !(n = e.__transition) || !(n = n[r]);) if (!(e = e.parentNode)) return a.time = (0, i.now)(), a;
            return n
        }
    }, {"../transition/index": "OWOq", "../transition/schedule": "nqGJ", "d3-ease": "pJ11", "d3-timer": "rdzS"}], "vGqA": [function (require, module, exports) {
        "use strict";
        var e = require("d3-selection"), t = require("./interrupt"), r = u(t), i = require("./transition"), n = u(i);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e.selection.prototype.interrupt = r.default, e.selection.prototype.transition = n.default;
    }, {"d3-selection": "//ys", "./interrupt": "cQLj", "./transition": "VKWr"}], "UWV/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, i) {
            var u, l, s = t.__transition;
            if (s) for (l in i = null == i ? null : i + "", s) if ((u = s[l]).state > n.SCHEDULED && u.name === i) return new e.Transition([[t]], r, i, +l);
            return null
        };
        var e = require("./transition/index"), n = require("./transition/schedule"), r = [null];
    }, {"./transition/index": "OWOq", "./transition/schedule": "nqGJ"}], "UqVV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.interrupt = exports.active = exports.transition = void 0;
        var e = require("./transition/index");
        Object.defineProperty(exports, "transition", {
            enumerable: !0, get: function () {
                return n(e).default
            }
        });
        var t = require("./active");
        Object.defineProperty(exports, "active", {
            enumerable: !0, get: function () {
                return n(t).default
            }
        });
        var r = require("./interrupt");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "interrupt", {
            enumerable: !0, get: function () {
                return n(r).default
            }
        }), require("./selection/index");
    }, {"./selection/index": "vGqA", "./transition/index": "OWOq", "./active": "UWV/", "./interrupt": "fDNN"}], "Bo4j": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, s) {
            this.target = e, this.type = t, this.selection = s
        };
    }, {}], "qu2I": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.brushSelection = K, exports.brushX = S, exports.brushY = T, exports.default = function () {
            return V(m)
        };
        var t = require("d3-dispatch"), e = require("d3-drag"), n = require("d3-interpolate"), r = require("d3-selection"), s = require("d3-transition"), a = require("./constant"), u = h(a), i = require("./event"), o = h(i), l = require("./noevent"), c = h(l);

        function h(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var f = {name: "drag"}, p = {name: "space"}, d = {name: "handle"}, v = {name: "center"}, b = {
                name: "x", handles: ["e", "w"].map(k), input: function (t, e) {
                    return t && [[t[0], e[0][1]], [t[1], e[1][1]]]
                }, output: function (t) {
                    return t && [t[0][0], t[1][0]]
                }
            }, y = {
                name: "y", handles: ["n", "s"].map(k), input: function (t, e) {
                    return t && [[e[0][0], t[0]], [e[1][0], t[1]]]
                }, output: function (t) {
                    return t && [t[0][1], t[1][1]]
                }
            }, m = {
                name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(k), input: function (t) {
                    return t
                }, output: function (t) {
                    return t
                }
            }, w = {overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, g = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"}, x = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"}, _ = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1},
            M = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1};

        function k(t) {
            return {type: t}
        }

        function z() {
            return !r.event.button
        }

        function q() {
            var t = this.ownerSVGElement || this;
            return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
        }

        function A(t) {
            for (; !t.__brush;) if (!(t = t.parentNode)) return;
            return t.__brush
        }

        function E(t) {
            return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }

        function K(t) {
            var e = t.__brush;
            return e ? e.dim.output(e.selection) : null
        }

        function S() {
            return V(b)
        }

        function T() {
            return V(y)
        }

        function V(a) {
            var i, h = q, m = z, K = (0, t.dispatch)(T, "start", "brush", "end"), S = 6;

            function T(t) {
                var e = t.property("__brush", G).selectAll(".overlay").data([k("overlay")]);
                e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", w.overlay).merge(e).each(function () {
                    var t = A(this).extent;
                    (0, r.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                }), t.selectAll(".selection").data([k("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", w.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var n = t.selectAll(".handle").data(a.handles, function (t) {
                    return t.type
                });
                n.exit().remove(), n.enter().append("rect").attr("class", function (t) {
                    return "handle handle--" + t.type
                }).attr("cursor", function (t) {
                    return w[t.type]
                }), t.each(V).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", D)
            }

            function V() {
                var t = (0, r.select)(this), e = A(this).selection;
                e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
                    return "e" === t.type[t.type.length - 1] ? e[1][0] - S / 2 : e[0][0] - S / 2
                }).attr("y", function (t) {
                    return "s" === t.type[0] ? e[1][1] - S / 2 : e[0][1] - S / 2
                }).attr("width", function (t) {
                    return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + S : S
                }).attr("height", function (t) {
                    return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + S : S
                })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }

            function C(t, e) {
                return t.__brush.emitter || new j(t, e)
            }

            function j(t, e) {
                this.that = t, this.args = e, this.state = t.__brush, this.active = 0
            }

            function D() {
                if (r.event.touches) {
                    if (r.event.changedTouches.length < r.event.touches.length) return (0, c.default)()
                } else if (i) return;
                if (m.apply(this, arguments)) {
                    var t, n, u, o, h, k, z, q, K, S, T, j, D, G = this, N = r.event.target.__data__.type, O = "selection" === (r.event.metaKey ? N = "overlay" : N) ? f : r.event.altKey ? v : d, P = a === y ? null : _[N], X = a === b ? null : M[N], Y = A(G), B = Y.extent, F = Y.selection, H = B[0][0], I = B[0][1], J = B[1][0], L = B[1][1], Q = P && X && r.event.shiftKey, R = (0, r.mouse)(G), U = R, W = C(G, arguments).beforestart();
                    "overlay" === N ? Y.selection = F = [[t = a === y ? H : R[0], u = a === b ? I : R[1]], [h = a === y ? J : t, z = a === b ? L : u]] : (t = F[0][0], u = F[0][1], h = F[1][0], z = F[1][1]), n = t, o = u, k = h, q = z;
                    var Z = (0, r.select)(G).attr("pointer-events", "none"), $ = Z.selectAll(".overlay").attr("cursor", w[N]);
                    if (r.event.touches) Z.on("touchmove.brush", et, !0).on("touchend.brush touchcancel.brush", rt, !0); else {
                        var tt = (0, r.select)(r.event.view).on("keydown.brush", function () {
                            switch (r.event.keyCode) {
                                case 16:
                                    Q = P && X;
                                    break;
                                case 18:
                                    O === d && (P && (h = k - K * P, t = n + K * P), X && (z = q - S * X, u = o + S * X), O = v, nt());
                                    break;
                                case 32:
                                    O !== d && O !== v || (P < 0 ? h = k - K : P > 0 && (t = n - K), X < 0 ? z = q - S : X > 0 && (u = o - S), O = p, $.attr("cursor", w.selection), nt());
                                    break;
                                default:
                                    return
                            }
                            (0, c.default)()
                        }, !0).on("keyup.brush", function () {
                            switch (r.event.keyCode) {
                                case 16:
                                    Q && (j = D = Q = !1, nt());
                                    break;
                                case 18:
                                    O === v && (P < 0 ? h = k : P > 0 && (t = n), X < 0 ? z = q : X > 0 && (u = o), O = d, nt());
                                    break;
                                case 32:
                                    O === p && (r.event.altKey ? (P && (h = k - K * P, t = n + K * P), X && (z = q - S * X, u = o + S * X), O = v) : (P < 0 ? h = k : P > 0 && (t = n), X < 0 ? z = q : X > 0 && (u = o), O = d), $.attr("cursor", w[N]), nt());
                                    break;
                                default:
                                    return
                            }
                            (0, c.default)()
                        }, !0).on("mousemove.brush", et, !0).on("mouseup.brush", rt, !0);
                        (0, e.dragDisable)(r.event.view)
                    }
                    (0, l.nopropagation)(), (0, s.interrupt)(G), V.call(G), W.start()
                }

                function et() {
                    var t = (0, r.mouse)(G);
                    !Q || j || D || (Math.abs(t[0] - U[0]) > Math.abs(t[1] - U[1]) ? D = !0 : j = !0), U = t, T = !0, (0, c.default)(), nt()
                }

                function nt() {
                    var e;
                    switch (K = U[0] - R[0], S = U[1] - R[1], O) {
                        case p:
                        case f:
                            P && (K = Math.max(H - t, Math.min(J - h, K)), n = t + K, k = h + K), X && (S = Math.max(I - u, Math.min(L - z, S)), o = u + S, q = z + S);
                            break;
                        case d:
                            P < 0 ? (K = Math.max(H - t, Math.min(J - t, K)), n = t + K, k = h) : P > 0 && (K = Math.max(H - h, Math.min(J - h, K)), n = t, k = h + K), X < 0 ? (S = Math.max(I - u, Math.min(L - u, S)), o = u + S, q = z) : X > 0 && (S = Math.max(I - z, Math.min(L - z, S)), o = u, q = z + S);
                            break;
                        case v:
                            P && (n = Math.max(H, Math.min(J, t - K * P)), k = Math.max(H, Math.min(J, h + K * P))), X && (o = Math.max(I, Math.min(L, u - S * X)), q = Math.max(I, Math.min(L, z + S * X)))
                    }
                    k < n && (P *= -1, e = t, t = h, h = e, e = n, n = k, k = e, N in g && $.attr("cursor", w[N = g[N]])), q < o && (X *= -1, e = u, u = z, z = e, e = o, o = q, q = e, N in x && $.attr("cursor", w[N = x[N]])), Y.selection && (F = Y.selection), j && (n = F[0][0], k = F[1][0]), D && (o = F[0][1], q = F[1][1]), F[0][0] === n && F[0][1] === o && F[1][0] === k && F[1][1] === q || (Y.selection = [[n, o], [k, q]], V.call(G), W.brush())
                }

                function rt() {
                    if ((0, l.nopropagation)(), r.event.touches) {
                        if (r.event.touches.length) return;
                        i && clearTimeout(i), i = setTimeout(function () {
                            i = null
                        }, 500), Z.on("touchmove.brush touchend.brush touchcancel.brush", null)
                    } else (0, e.dragEnable)(r.event.view, T), tt.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    Z.attr("pointer-events", "all"), $.attr("cursor", w.overlay), Y.selection && (F = Y.selection), E(F) && (Y.selection = null, V.call(G)), W.end()
                }
            }

            function G() {
                var t = this.__brush || {selection: null};
                return t.extent = h.apply(this, arguments), t.dim = a, t
            }

            return T.move = function (t, e) {
                t.selection ? t.on("start.brush", function () {
                    C(this, arguments).beforestart().start()
                }).on("interrupt.brush end.brush", function () {
                    C(this, arguments).end()
                }).tween("brush", function () {
                    var t = this, r = t.__brush, s = C(t, arguments), u = r.selection, i = a.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent), o = (0, n.interpolate)(u, i);

                    function l(e) {
                        r.selection = 1 === e && E(i) ? null : o(e), V.call(t), s.brush()
                    }

                    return u && i ? l : l(1)
                }) : t.each(function () {
                    var t = arguments, n = this.__brush, r = a.input("function" == typeof e ? e.apply(this, t) : e, n.extent), u = C(this, t).beforestart();
                    (0, s.interrupt)(this), n.selection = null == r || E(r) ? null : r, V.call(this), u.start().brush().end()
                })
            }, j.prototype = {
                beforestart: function () {
                    return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
                }, start: function () {
                    return this.starting && (this.starting = !1, this.emit("start")), this
                }, brush: function () {
                    return this.emit("brush"), this
                }, end: function () {
                    return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                }, emit: function (t) {
                    (0, r.customEvent)(new o.default(T, t, a.output(this.state.selection)), K.apply, K, [t, this.that, this.args])
                }
            }, T.extent = function (t) {
                return arguments.length ? (h = "function" == typeof t ? t : (0, u.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), T) : h
            }, T.filter = function (t) {
                return arguments.length ? (m = "function" == typeof t ? t : (0, u.default)(!!t), T) : m
            }, T.handleSize = function (t) {
                return arguments.length ? (S = +t, T) : S
            }, T.on = function () {
                var t = K.on.apply(K, arguments);
                return t === K ? T : t
            }, T
        }
    }, {"d3-dispatch": "D3zY", "d3-drag": "kkdU", "d3-interpolate": "k9aH", "d3-selection": "//ys", "d3-transition": "UqVV", "./constant": "aCvo", "./event": "Bo4j", "./noevent": "BxLv"}], "tkh5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./brush");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "brush", {
            enumerable: !0, get: function () {
                return r(e).default
            }
        }), Object.defineProperty(exports, "brushX", {
            enumerable: !0, get: function () {
                return e.brushX
            }
        }), Object.defineProperty(exports, "brushY", {
            enumerable: !0, get: function () {
                return e.brushY
            }
        }), Object.defineProperty(exports, "brushSelection", {
            enumerable: !0, get: function () {
                return e.brushSelection
            }
        });
    }, {"./brush": "qu2I"}], "0nrz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = exports.cos = Math.cos, e = exports.sin = Math.sin, s = exports.pi = Math.PI, o = exports.halfPi = s / 2, r = exports.tau = 2 * s, a = exports.max = Math.max;
    }, {}], "TnSC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var u = 0, t = null, a = null, o = null;

            function l(n) {
                var l, s, f, c, g, i, v = n.length, d = [], h = (0, r.range)(v), p = [], x = [], A = x.groups = new Array(v), y = new Array(v * v);
                for (l = 0, g = -1; ++g < v;) {
                    for (s = 0, i = -1; ++i < v;) s += n[g][i];
                    d.push(s), p.push((0, r.range)(v)), l += s
                }
                for (t && h.sort(function (r, e) {
                    return t(d[r], d[e])
                }), a && p.forEach(function (r, e) {
                    r.sort(function (r, u) {
                        return a(n[e][r], n[e][u])
                    })
                }), c = (l = (0, e.max)(0, e.tau - u * v) / l) ? u : e.tau / v, s = 0, g = -1; ++g < v;) {
                    for (f = s, i = -1; ++i < v;) {
                        var _ = h[g], b = p[_][i], m = n[_][b], q = s, w = s += m * l;
                        y[b * v + _] = {index: _, subindex: b, startAngle: q, endAngle: w, value: m}
                    }
                    A[_] = {index: _, startAngle: f, endAngle: s, value: d[_]}, s += c
                }
                for (g = -1; ++g < v;) for (i = g - 1; ++i < v;) {
                    var j = y[i * v + g], C = y[g * v + i];
                    (j.value || C.value) && x.push(j.value < C.value ? {source: C, target: j} : {source: j, target: C})
                }
                return o ? x.sort(o) : x
            }

            return l.padAngle = function (r) {
                return arguments.length ? (u = (0, e.max)(0, r), l) : u
            }, l.sortGroups = function (r) {
                return arguments.length ? (t = r, l) : t
            }, l.sortSubgroups = function (r) {
                return arguments.length ? (a = r, l) : a
            }, l.sortChords = function (r) {
                return arguments.length ? (null == r ? o = null : (o = n(r))._ = r, l) : o && o._
            }, l
        };
        var r = require("d3-array"), e = require("./math");

        function n(r) {
            return function (e, n) {
                return r(e.source.value + e.target.value, n.source.value + n.target.value)
            }
        }
    }, {"d3-array": "K0bd", "./math": "0nrz"}], "hMob": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = Math.PI, i = 2 * t, s = 1e-6, h = i - s;

        function _() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function n() {
            return new _
        }

        _.prototype = n.prototype = {
            constructor: _, moveTo: function (t, i) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i)
            }, closePath: function () {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            }, lineTo: function (t, i) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i)
            }, quadraticCurveTo: function (t, i, s, h) {
                this._ += "Q" + +t + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +h)
            }, bezierCurveTo: function (t, i, s, h, _, n) {
                this._ += "C" + +t + "," + +i + "," + +s + "," + +h + "," + (this._x1 = +_) + "," + (this._y1 = +n)
            }, arcTo: function (i, h, _, n, e) {
                i = +i, h = +h, _ = +_, n = +n, e = +e;
                var r = this._x1, o = this._y1, a = _ - i, u = n - h, c = r - i, x = o - h, y = c * c + x * x;
                if (e < 0) throw new Error("negative radius: " + e);
                if (null === this._x1) this._ += "M" + (this._x1 = i) + "," + (this._y1 = h); else if (y > s) if (Math.abs(x * a - u * c) > s && e) {
                    var f = _ - r, M = n - o, l = a * a + u * u, v = f * f + M * M, p = Math.sqrt(l), b = Math.sqrt(y), d = e * Math.tan((t - Math.acos((l + y - v) / (2 * p * b))) / 2), w = d / b, T = d / p;
                    Math.abs(w - 1) > s && (this._ += "L" + (i + w * c) + "," + (h + w * x)), this._ += "A" + e + "," + e + ",0,0," + +(x * f > c * M) + "," + (this._x1 = i + T * a) + "," + (this._y1 = h + T * u)
                } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = h); else ;
            }, arc: function (_, n, e, r, o, a) {
                _ = +_, n = +n;
                var u = (e = +e) * Math.cos(r), c = e * Math.sin(r), x = _ + u, y = n + c, f = 1 ^ a, M = a ? r - o : o - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + x + "," + y : (Math.abs(this._x1 - x) > s || Math.abs(this._y1 - y) > s) && (this._ += "L" + x + "," + y), e && (M < 0 && (M = M % i + i), M > h ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (_ - u) + "," + (n - c) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = x) + "," + (this._y1 = y) : M > s && (this._ += "A" + e + "," + e + ",0," + +(M >= t) + "," + f + "," + (this._x1 = _ + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))))
            }, rect: function (t, i, s, h) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +s + "v" + +h + "h" + -s + "Z"
            }, toString: function () {
                return this._
            }
        }, exports.default = n;
    }, {}], "9OTy": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./path");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "path", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
    }, {"./path": "hMob"}], "stmI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n = i, l = a, s = o, p = c, h = f, d = null;

            function y() {
                var e, i = t.slice.call(arguments), a = n.apply(this, i), o = l.apply(this, i), c = +s.apply(this, (i[0] = a, i)), f = p.apply(this, i) - r.halfPi, y = h.apply(this, i) - r.halfPi, g = c * (0, r.cos)(f), v = c * (0, r.sin)(f), q = +s.apply(this, (i[0] = o, i)), P = p.apply(this, i) - r.halfPi, A = h.apply(this, i) - r.halfPi;
                if (d || (d = e = (0, u.path)()), d.moveTo(g, v), d.arc(0, 0, c, f, y), f === P && y === A || (d.quadraticCurveTo(0, 0, q * (0, r.cos)(P), q * (0, r.sin)(P)), d.arc(0, 0, q, P, A)), d.quadraticCurveTo(0, 0, g, v), d.closePath(), e) return d = null, e + "" || null
            }

            return y.radius = function (t) {
                return arguments.length ? (s = "function" == typeof t ? t : (0, e.default)(+t), y) : s
            }, y.startAngle = function (t) {
                return arguments.length ? (p = "function" == typeof t ? t : (0, e.default)(+t), y) : p
            }, y.endAngle = function (t) {
                return arguments.length ? (h = "function" == typeof t ? t : (0, e.default)(+t), y) : h
            }, y.source = function (t) {
                return arguments.length ? (n = t, y) : n
            }, y.target = function (t) {
                return arguments.length ? (l = t, y) : l
            }, y.context = function (t) {
                return arguments.length ? (d = null == t ? null : t, y) : d
            }, y
        };
        var t = require("./array"), n = require("./constant"), e = l(n), r = require("./math"), u = require("d3-path");

        function l(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function i(t) {
            return t.source
        }

        function a(t) {
            return t.target
        }

        function o(t) {
            return t.radius
        }

        function c(t) {
            return t.startAngle
        }

        function f(t) {
            return t.endAngle
        }
    }, {"./array": "KXlw", "./constant": "aCvo", "./math": "0nrz", "d3-path": "9OTy"}], "Iy8J": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./chord");
        Object.defineProperty(exports, "chord", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
        var r = require("./ribbon");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "ribbon", {
            enumerable: !0, get: function () {
                return t(r).default
            }
        });
    }, {"./chord": "TnSC", "./ribbon": "stmI"}], "lDu+": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = exports.prefix = "$";

        function r() {
        }

        function e(t, e) {
            var i = new r;
            if (t instanceof r) t.each(function (t, r) {
                i.set(r, t)
            }); else if (Array.isArray(t)) {
                var n, s = -1, o = t.length;
                if (null == e) for (; ++s < o;) i.set(s, t[s]); else for (; ++s < o;) i.set(e(n = t[s], s, t), n)
            } else if (t) for (var u in t) i.set(u, t[u]);
            return i
        }

        r.prototype = e.prototype = {
            constructor: r, has: function (r) {
                return t + r in this
            }, get: function (r) {
                return this[t + r]
            }, set: function (r, e) {
                return this[t + r] = e, this
            }, remove: function (r) {
                var e = t + r;
                return e in this && delete this[e]
            }, clear: function () {
                for (var r in this) r[0] === t && delete this[r]
            }, keys: function () {
                var r = [];
                for (var e in this) e[0] === t && r.push(e.slice(1));
                return r
            }, values: function () {
                var r = [];
                for (var e in this) e[0] === t && r.push(this[e]);
                return r
            }, entries: function () {
                var r = [];
                for (var e in this) e[0] === t && r.push({key: e.slice(1), value: this[e]});
                return r
            }, size: function () {
                var r = 0;
                for (var e in this) e[0] === t && ++r;
                return r
            }, empty: function () {
                for (var r in this) if (r[0] === t) return !1;
                return !0
            }, each: function (r) {
                for (var e in this) e[0] === t && r(this[e], e.slice(1), this)
            }
        }, exports.default = e;
    }, {}], "kDkA": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n, e, i, l = [], c = [];

            function s(u, r, o, f) {
                if (r >= l.length) return null != n && u.sort(n), null != e ? e(u) : u;
                for (var i, c, a, h = -1, p = u.length, d = l[r++], g = (0, t.default)(), v = o(); ++h < p;) (a = g.get(i = d(c = u[h]) + "")) ? a.push(c) : g.set(i, [c]);
                return g.each(function (n, t) {
                    f(v, t, s(n, r, o, f))
                }), v
            }

            return i = {
                object: function (n) {
                    return s(n, 0, u, r)
                }, map: function (n) {
                    return s(n, 0, o, f)
                }, entries: function (n) {
                    return function n(t, u) {
                        if (++u > l.length) return t;
                        var r, o = c[u - 1];
                        return null != e && u >= l.length ? r = t.entries() : (r = [], t.each(function (t, e) {
                            r.push({key: e, values: n(t, u)})
                        })), null != o ? r.sort(function (n, t) {
                            return o(n.key, t.key)
                        }) : r
                    }(s(n, 0, o, f), 0)
                }, key: function (n) {
                    return l.push(n), i
                }, sortKeys: function (n) {
                    return c[l.length - 1] = n, i
                }, sortValues: function (t) {
                    return n = t, i
                }, rollup: function (n) {
                    return e = n, i
                }
            }
        };
        var n = require("./map"), t = e(n);

        function e(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function u() {
            return {}
        }

        function r(n, t, e) {
            n[t] = e
        }

        function o() {
            return (0, t.default)()
        }

        function f(n, t, e) {
            n.set(t, e)
        }
    }, {"./map": "lDu+"}], "1vFP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./map"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o() {
        }

        var a = t.default.prototype;

        function n(e, t) {
            var r = new o;
            if (e instanceof o) e.each(function (e) {
                r.add(e)
            }); else if (e) {
                var a = -1, n = e.length;
                if (null == t) for (; ++a < n;) r.add(e[a]); else for (; ++a < n;) r.add(t(e[a], a, e))
            }
            return r
        }

        o.prototype = n.prototype = {
            constructor: o, has: a.has, add: function (t) {
                return t += "", this[e.prefix + t] = t, this
            }, remove: a.remove, clear: a.clear, values: a.keys, size: a.size, empty: a.empty, each: a.each
        }, exports.default = n;
    }, {"./map": "lDu+"}], "DTc5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r = [];
            for (var t in e) r.push(t);
            return r
        };
    }, {}], "Ka/q": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r = [];
            for (var t in e) r.push(e[t]);
            return r
        };
    }, {}], "wnH6": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r = [];
            for (var t in e) r.push({key: t, value: e[t]});
            return r
        };
    }, {}], "S3hn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./nest");
        Object.defineProperty(exports, "nest", {
            enumerable: !0, get: function () {
                return i(e).default
            }
        });
        var r = require("./set");
        Object.defineProperty(exports, "set", {
            enumerable: !0, get: function () {
                return i(r).default
            }
        });
        var t = require("./map");
        Object.defineProperty(exports, "map", {
            enumerable: !0, get: function () {
                return i(t).default
            }
        });
        var u = require("./keys");
        Object.defineProperty(exports, "keys", {
            enumerable: !0, get: function () {
                return i(u).default
            }
        });
        var n = require("./values");
        Object.defineProperty(exports, "values", {
            enumerable: !0, get: function () {
                return i(n).default
            }
        });
        var a = require("./entries");

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "entries", {
            enumerable: !0, get: function () {
                return i(a).default
            }
        });
    }, {"./nest": "kDkA", "./set": "1vFP", "./map": "lDu+", "./keys": "DTc5", "./values": "Ka/q", "./entries": "wnH6"}], "TvZ5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = Array.prototype, r = exports.slice = e.slice;
    }, {}], "T6bn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return e - t
        };
    }, {}], "TIuo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t = 0, r = e.length, o = e[r - 1][1] * e[0][0] - e[r - 1][0] * e[0][1]; ++t < r;) o += e[t - 1][1] * e[t][0] - e[t - 1][0] * e[t][1];
            return o
        };
    }, {}], "Mo/C": [function (require, module, exports) {
        "use strict";

        function r(r, e) {
            for (var n = e[0], u = e[1], f = -1, o = 0, i = r.length, c = i - 1; o < i; c = o++) {
                var a = r[o], l = a[0], s = a[1], v = r[c], d = v[0], p = v[1];
                if (t(a, v, e)) return 0;
                s > u != p > u && n < (d - l) * (u - s) / (p - s) + l && (f = -f)
            }
            return f
        }

        function t(r, t, u) {
            var f;
            return e(r, t, u) && n(r[f = +(r[0] === t[0])], u[f], t[f])
        }

        function e(r, t, e) {
            return (t[0] - r[0]) * (e[1] - r[1]) == (e[0] - r[0]) * (t[1] - r[1])
        }

        function n(r, t, e) {
            return r <= t && t <= e || e <= t && t <= r
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e) {
            for (var n, u = -1, f = e.length; ++u < f;) if (n = r(t, e[u])) return n;
            return 0
        };
    }, {}], "zOhu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
        };
    }, {}], "DT0k": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t = 1, a = 1, i = r.thresholdSturges, f = v;

            function s(e) {
                var t = i(e);
                if (Array.isArray(t)) t = t.slice().sort(n.default); else {
                    var a = (0, r.extent)(e), o = a[0], u = a[1];
                    t = (0, r.tickStep)(o, u, t), t = (0, r.range)(Math.floor(o / t) * t, Math.floor(u / t) * t, t)
                }
                return t.map(function (r) {
                    return d(e, r)
                })
            }

            function d(r, e) {
                var n = [], i = [];
                return function (r, e, n) {
                    var o, i, u, f, c, s, l = new Array, d = new Array;
                    o = i = -1, f = r[0] >= e, h[f << 1].forEach(v);
                    for (; ++o < t - 1;) u = f, f = r[o + 1] >= e, h[u | f << 1].forEach(v);
                    h[f << 0].forEach(v);
                    for (; ++i < a - 1;) {
                        for (o = -1, f = r[i * t + t] >= e, c = r[i * t] >= e, h[f << 1 | c << 2].forEach(v); ++o < t - 1;) u = f, f = r[i * t + t + o + 1] >= e, s = c, c = r[i * t + o + 1] >= e, h[u | f << 1 | c << 2 | s << 3].forEach(v);
                        h[f | c << 3].forEach(v)
                    }
                    o = -1, c = r[i * t] >= e, h[c << 2].forEach(v);
                    for (; ++o < t - 1;) s = c, c = r[i * t + o + 1] >= e, h[c << 2 | s << 3].forEach(v);

                    function v(r) {
                        var e, t, a = [r[0][0] + o, r[0][1] + i], u = [r[1][0] + o, r[1][1] + i], f = g(a), c = g(u);
                        (e = d[f]) ? (t = l[c]) ? (delete d[e.end], delete l[t.start], e === t ? (e.ring.push(u), n(e.ring)) : l[e.start] = d[t.end] = {start: e.start, end: t.end, ring: e.ring.concat(t.ring)}) : (delete d[e.end], e.ring.push(u), d[e.end = c] = e) : (e = l[c]) ? (t = d[f]) ? (delete l[e.start], delete d[t.end], e === t ? (e.ring.push(u), n(e.ring)) : l[t.start] = d[e.end] = {
                            start: t.start,
                            end: e.end,
                            ring: t.ring.concat(e.ring)
                        }) : (delete l[e.start], e.ring.unshift(a), l[e.start = f] = e) : l[f] = d[c] = {start: f, end: c, ring: [a, u]}
                    }

                    h[c << 3].forEach(v)
                }(r, e, function (t) {
                    f(t, r, e), (0, o.default)(t) > 0 ? n.push([t]) : i.push(t)
                }), i.forEach(function (r) {
                    for (var e, t = 0, a = n.length; t < a; ++t) if (-1 !== (0, c.default)((e = n[t])[0], r)) return void e.push(r)
                }), {type: "MultiPolygon", value: e, coordinates: n}
            }

            function g(r) {
                return 2 * r[0] + r[1] * (t + 1) * 4
            }

            function v(r, e, n) {
                r.forEach(function (r) {
                    var o, i = r[0], u = r[1], f = 0 | i, c = 0 | u, s = e[c * t + f];
                    i > 0 && i < t && f === i && (o = e[c * t + f - 1], r[0] = i + (n - o) / (s - o) - .5), u > 0 && u < a && c === u && (o = e[(c - 1) * t + f], r[1] = u + (n - o) / (s - o) - .5)
                })
            }

            return s.contour = d, s.size = function (r) {
                if (!arguments.length) return [t, a];
                var e = Math.ceil(r[0]), n = Math.ceil(r[1]);
                if (!(e > 0 && n > 0)) throw new Error("invalid size");
                return t = e, a = n, s
            }, s.thresholds = function (r) {
                return arguments.length ? (i = "function" == typeof r ? r : Array.isArray(r) ? (0, u.default)(e.slice.call(r)) : (0, u.default)(r), s) : i
            }, s.smooth = function (r) {
                return arguments.length ? (f = r ? v : l.default, s) : f === v
            }, s
        };
        var r = require("d3-array"), e = require("./array"), t = require("./ascending"), n = d(t), a = require("./area"), o = d(a), i = require("./constant"), u = d(i), f = require("./contains"), c = d(f), s = require("./noop"), l = d(s);

        function d(r) {
            return r && r.__esModule ? r : {default: r}
        }

        var h = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];
    }, {"d3-array": "K0bd", "./array": "TvZ5", "./ascending": "T6bn", "./area": "TIuo", "./constant": "aCvo", "./contains": "Mo/C", "./noop": "zOhu"}], "DGMp": [function (require, module, exports) {
        "use strict";

        function t(t, a, r) {
            for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < o; ++i) for (var h = 0, f = 0; h < e + r; ++h) h < e && (f += t.data[h + i * e]), h >= r && (h >= d && (f -= t.data[h - d + i * e]), a.data[h - r + i * e] = f / Math.min(h + 1, e - 1 + d - h, d))
        }

        function a(t, a, r) {
            for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < e; ++i) for (var h = 0, f = 0; h < o + r; ++h) h < o && (f += t.data[i + h * e]), h >= r && (h >= d && (f -= t.data[i + (h - d) * e]), a.data[i + (h - r) * e] = f / Math.min(h + 1, o - 1 + d - h, d))
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.blurX = t, exports.blurY = a;
    }, {}], "3NV0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n = o, a = f, u = d, l = 960, c = 500, w = 20, s = 2, g = 3 * w, y = l + 2 * g >> s, M = c + 2 * g >> s, p = (0, i.default)(20);

            function v(r) {
                var i = new Float32Array(y * M), o = new Float32Array(y * M);
                r.forEach(function (t, r, e) {
                    var h = +n(t, r, e) + g >> s, o = +a(t, r, e) + g >> s, f = +u(t, r, e);
                    h >= 0 && h < y && o >= 0 && o < M && (i[h + o * y] += f)
                }), (0, e.blurX)({width: y, height: M, data: i}, {width: y, height: M, data: o}, w >> s), (0, e.blurY)({width: y, height: M, data: o}, {width: y, height: M, data: i}, w >> s), (0, e.blurX)({width: y, height: M, data: i}, {width: y, height: M, data: o}, w >> s), (0, e.blurY)({width: y, height: M, data: o}, {width: y, height: M, data: i}, w >> s), (0, e.blurX)({width: y, height: M, data: i}, {width: y, height: M, data: o}, w >> s), (0, e.blurY)({
                    width: y,
                    height: M,
                    data: o
                }, {width: y, height: M, data: i}, w >> s);
                var f = p(i);
                if (!Array.isArray(f)) {
                    var d = (0, t.max)(i);
                    f = (0, t.tickStep)(0, d, f), (f = (0, t.range)(0, Math.floor(d / f) * f, f)).shift()
                }
                return (0, h.default)().thresholds(f).size([y, M])(i).map(b)
            }

            function b(t) {
                return t.value *= Math.pow(2, -2 * s), t.coordinates.forEach(q), t
            }

            function q(t) {
                t.forEach(E)
            }

            function E(t) {
                t.forEach(A)
            }

            function A(t) {
                t[0] = t[0] * Math.pow(2, s) - g, t[1] = t[1] * Math.pow(2, s) - g
            }

            function z() {
                return y = l + 2 * (g = 3 * w) >> s, M = c + 2 * g >> s, v
            }

            return v.x = function (t) {
                return arguments.length ? (n = "function" == typeof t ? t : (0, i.default)(+t), v) : n
            }, v.y = function (t) {
                return arguments.length ? (a = "function" == typeof t ? t : (0, i.default)(+t), v) : a
            }, v.weight = function (t) {
                return arguments.length ? (u = "function" == typeof t ? t : (0, i.default)(+t), v) : u
            }, v.size = function (t) {
                if (!arguments.length) return [l, c];
                var r = Math.ceil(t[0]), e = Math.ceil(t[1]);
                if (!(r >= 0 || r >= 0)) throw new Error("invalid size");
                return l = r, c = e, z()
            }, v.cellSize = function (t) {
                if (!arguments.length) return 1 << s;
                if (!((t = +t) >= 1)) throw new Error("invalid cell size");
                return s = Math.floor(Math.log(t) / Math.LN2), z()
            }, v.thresholds = function (t) {
                return arguments.length ? (p = "function" == typeof t ? t : Array.isArray(t) ? (0, i.default)(r.slice.call(t)) : (0, i.default)(t), v) : p
            }, v.bandwidth = function (t) {
                if (!arguments.length) return Math.sqrt(w * (w + 1));
                if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
                return w = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), z()
            }, v
        };
        var t = require("d3-array"), r = require("./array"), e = require("./blur"), n = require("./constant"), i = u(n), a = require("./contours"), h = u(a);

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function o(t) {
            return t[0]
        }

        function f(t) {
            return t[1]
        }

        function d() {
            return 1
        }
    }, {"d3-array": "K0bd", "./array": "TvZ5", "./blur": "DGMp", "./constant": "aCvo", "./contours": "DT0k"}], "5SiB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./contours");
        Object.defineProperty(exports, "contours", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
        var r = require("./density");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "contourDensity", {
            enumerable: !0, get: function () {
                return t(r).default
            }
        });
    }, {"./contours": "DT0k", "./density": "3NV0"}], "uRW4": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (a) {
            var f = new RegExp('["' + a + "\n\r]"), l = a.charCodeAt(0);

            function s(o, c) {
                var i, a = [], f = o.length, s = 0, p = 0, d = f <= 0, h = !1;

                function v() {
                    if (d) return r;
                    if (h) return h = !1, n;
                    var c, i, a = s;
                    if (o.charCodeAt(a) === t) {
                        for (; s++ < f && o.charCodeAt(s) !== t || o.charCodeAt(++s) === t;) ;
                        return (c = s) >= f ? d = !0 : (i = o.charCodeAt(s++)) === e ? h = !0 : i === u && (h = !0, o.charCodeAt(s) === e && ++s), o.slice(a + 1, c - 1).replace(/""/g, '"')
                    }
                    for (; s < f;) {
                        if ((i = o.charCodeAt(c = s++)) === e) h = !0; else if (i === u) h = !0, o.charCodeAt(s) === e && ++s; else if (i !== l) continue;
                        return o.slice(a, c)
                    }
                    return d = !0, o.slice(a, f)
                }

                for (o.charCodeAt(f - 1) === e && --f, o.charCodeAt(f - 1) === u && --f; (i = v()) !== r;) {
                    for (var A = []; i !== n && i !== r;) A.push(i), i = v();
                    c && null == (A = c(A, p++)) || a.push(A)
                }
                return a
            }

            function p(n) {
                return n.map(d).join(a)
            }

            function d(n) {
                return null == n ? "" : f.test(n += "") ? '"' + n.replace(/"/g, '""') + '"' : n
            }

            return {
                parse: function (n, r) {
                    var t, e, u = s(n, function (n, u) {
                        if (t) return t(n, u - 1);
                        e = n, t = r ? c(n, r) : o(n)
                    });
                    return u.columns = e || [], u
                }, parseRows: s, format: function (n, r) {
                    return null == r && (r = i(n)), [r.map(d).join(a)].concat(n.map(function (n) {
                        return r.map(function (r) {
                            return d(n[r])
                        }).join(a)
                    })).join("\n")
                }, formatRows: function (n) {
                    return n.map(p).join("\n")
                }
            }
        };
        var n = {}, r = {}, t = 34, e = 10, u = 13;

        function o(n) {
            return new Function("d", "return {" + n.map(function (n, r) {
                return JSON.stringify(n) + ": d[" + r + "]"
            }).join(",") + "}")
        }

        function c(n, r) {
            var t = o(n);
            return function (e, u) {
                return r(t(e), u, n)
            }
        }

        function i(n) {
            var r = Object.create(null), t = [];
            return n.forEach(function (n) {
                for (var e in n) e in r || t.push(r[e] = e)
            }), t
        }
    }, {}], "yGbu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.csvFormatRows = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;
        var s = require("./dsv"), e = r(s);

        function r(s) {
            return s && s.__esModule ? s : {default: s}
        }

        var o = (0, e.default)(","), t = exports.csvParse = o.parse, a = exports.csvParseRows = o.parseRows, v = exports.csvFormat = o.format, p = exports.csvFormatRows = o.formatRows;
    }, {"./dsv": "uRW4"}], "Rica": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.tsvFormatRows = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;
        var s = require("./dsv"), t = e(s);

        function e(s) {
            return s && s.__esModule ? s : {default: s}
        }

        var r = (0, t.default)("\t"), o = exports.tsvParse = r.parse, a = exports.tsvParseRows = r.parseRows, v = exports.tsvFormat = r.format, p = exports.tsvFormatRows = r.formatRows;
    }, {"./dsv": "uRW4"}], "EC2w": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./dsv");
        Object.defineProperty(exports, "dsvFormat", {
            enumerable: !0, get: function () {
                return s(e).default
            }
        });
        var r = require("./csv");
        Object.defineProperty(exports, "csvParse", {
            enumerable: !0, get: function () {
                return r.csvParse
            }
        }), Object.defineProperty(exports, "csvParseRows", {
            enumerable: !0, get: function () {
                return r.csvParseRows
            }
        }), Object.defineProperty(exports, "csvFormat", {
            enumerable: !0, get: function () {
                return r.csvFormat
            }
        }), Object.defineProperty(exports, "csvFormatRows", {
            enumerable: !0, get: function () {
                return r.csvFormatRows
            }
        });
        var t = require("./tsv");

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "tsvParse", {
            enumerable: !0, get: function () {
                return t.tsvParse
            }
        }), Object.defineProperty(exports, "tsvParseRows", {
            enumerable: !0, get: function () {
                return t.tsvParseRows
            }
        }), Object.defineProperty(exports, "tsvFormat", {
            enumerable: !0, get: function () {
                return t.tsvFormat
            }
        }), Object.defineProperty(exports, "tsvFormatRows", {
            enumerable: !0, get: function () {
                return t.tsvFormatRows
            }
        });
    }, {"./dsv": "uRW4", "./csv": "yGbu", "./tsv": "Rica"}], "qUE6": [function (require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.blob()
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return fetch(e, r).then(t)
        };
    }, {}], "G9Fv": [function (require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.arrayBuffer()
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return fetch(e, r).then(t)
        };
    }, {}], "bNd6": [function (require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return fetch(e, r).then(t)
        };
    }, {}], "Ul8d": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.tsv = exports.csv = void 0, exports.default = o;
        var e = require("d3-dsv"), t = require("./text"), r = n(t);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e) {
            return function (t, n, u) {
                return 2 === arguments.length && "function" == typeof n && (u = n, n = void 0), (0, r.default)(t, n).then(function (t) {
                    return e(t, u)
                })
            }
        }

        function o(t, n, u, o) {
            3 === arguments.length && "function" == typeof u && (o = u, u = void 0);
            var s = (0, e.dsvFormat)(t);
            return (0, r.default)(n, u).then(function (e) {
                return s.parse(e, o)
            })
        }

        var s = exports.csv = u(e.csvParse), f = exports.tsv = u(e.tsvParse);
    }, {"d3-dsv": "EC2w", "./text": "bNd6"}], "cIzq": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return new Promise(function (n, o) {
                var t = new Image;
                for (var u in r) t[u] = r[u];
                t.onerror = o, t.onload = function () {
                    n(t)
                }, t.src = e
            })
        };
    }, {}], "VDYt": [function (require, module, exports) {
        "use strict";

        function t(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.json()
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return fetch(e, r).then(t)
        };
    }, {}], "NUeg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.svg = exports.html = void 0;
        var e = require("./text"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e) {
            return function (r, n) {
                return (0, t.default)(r, n).then(function (t) {
                    return (new DOMParser).parseFromString(t, e)
                })
            }
        }

        exports.default = n("application/xml");
        var o = exports.html = n("text/html"), u = exports.svg = n("image/svg+xml");
    }, {"./text": "bNd6"}], "grWT": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./blob");
        Object.defineProperty(exports, "blob", {
            enumerable: !0, get: function () {
                return i(e).default
            }
        });
        var r = require("./buffer");
        Object.defineProperty(exports, "buffer", {
            enumerable: !0, get: function () {
                return i(r).default
            }
        });
        var t = require("./dsv");
        Object.defineProperty(exports, "dsv", {
            enumerable: !0, get: function () {
                return i(t).default
            }
        }), Object.defineProperty(exports, "csv", {
            enumerable: !0, get: function () {
                return t.csv
            }
        }), Object.defineProperty(exports, "tsv", {
            enumerable: !0, get: function () {
                return t.tsv
            }
        });
        var n = require("./image");
        Object.defineProperty(exports, "image", {
            enumerable: !0, get: function () {
                return i(n).default
            }
        });
        var u = require("./json");
        Object.defineProperty(exports, "json", {
            enumerable: !0, get: function () {
                return i(u).default
            }
        });
        var o = require("./text");
        Object.defineProperty(exports, "text", {
            enumerable: !0, get: function () {
                return i(o).default
            }
        });
        var f = require("./xml");

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "xml", {
            enumerable: !0, get: function () {
                return i(f).default
            }
        }), Object.defineProperty(exports, "html", {
            enumerable: !0, get: function () {
                return f.html
            }
        }), Object.defineProperty(exports, "svg", {
            enumerable: !0, get: function () {
                return f.svg
            }
        });
    }, {"./blob": "qUE6", "./buffer": "G9Fv", "./dsv": "Ul8d", "./image": "cIzq", "./json": "VDYt", "./text": "bNd6", "./xml": "NUeg"}], "i73m": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n, t) {
            var e;

            function r() {
                var r, u, i = e.length, l = 0, o = 0;
                for (r = 0; r < i; ++r) l += (u = e[r]).x, o += u.y;
                for (l = l / i - n, o = o / i - t, r = 0; r < i; ++r) (u = e[r]).x -= l, u.y -= o
            }

            return null == n && (n = 0), null == t && (t = 0), r.initialize = function (n) {
                e = n
            }, r.x = function (t) {
                return arguments.length ? (n = +t, r) : n
            }, r.y = function (n) {
                return arguments.length ? (t = +n, r) : t
            }, r
        };
    }, {}], "6Efb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return 1e-6 * (Math.random() - .5)
        };
    }, {}], "ALzt": [function (require, module, exports) {
        "use strict";

        function r(r, t, l, e) {
            if (isNaN(t) || isNaN(l)) return r;
            var n, a, i, o, s, u, _, h, c, f = r._root, y = {data: e}, x = r._x0, d = r._y0, N = r._x1, v = r._y1;
            if (!f) return r._root = y, r;
            for (; f.length;) if ((u = t >= (a = (x + N) / 2)) ? x = a : N = a, (_ = l >= (i = (d + v) / 2)) ? d = i : v = i, n = f, !(f = f[h = _ << 1 | u])) return n[h] = y, r;
            if (o = +r._x.call(null, f.data), s = +r._y.call(null, f.data), t === o && l === s) return y.next = f, n ? n[h] = y : r._root = y, r;
            do {
                n = n ? n[h] = new Array(4) : r._root = new Array(4), (u = t >= (a = (x + N) / 2)) ? x = a : N = a, (_ = l >= (i = (d + v) / 2)) ? d = i : v = i
            } while ((h = _ << 1 | u) == (c = (s >= i) << 1 | o >= a));
            return n[c] = f, n[h] = y, r
        }

        function t(t) {
            var l, e, n, a, i = t.length, o = new Array(i), s = new Array(i), u = 1 / 0, _ = 1 / 0, h = -1 / 0, c = -1 / 0;
            for (e = 0; e < i; ++e) isNaN(n = +this._x.call(null, l = t[e])) || isNaN(a = +this._y.call(null, l)) || (o[e] = n, s[e] = a, n < u && (u = n), n > h && (h = n), a < _ && (_ = a), a > c && (c = a));
            for (h < u && (u = this._x0, h = this._x1), c < _ && (_ = this._y0, c = this._y1), this.cover(u, _).cover(h, c), e = 0; e < i; ++e) r(this, o[e], s[e], t[e]);
            return this
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var l = +this._x.call(null, t), e = +this._y.call(null, t);
            return r(this.cover(l, e), l, e, t)
        }, exports.addAll = t;
    }, {}], "YvH0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e) {
            if (isNaN(t = +t) || isNaN(e = +e)) return this;
            var r = this._x0, i = this._y0, s = this._x1, h = this._y1;
            if (isNaN(r)) s = (r = Math.floor(t)) + 1, h = (i = Math.floor(e)) + 1; else {
                if (!(r > t || t > s || i > e || e > h)) return this;
                var o, a, _ = s - r, l = this._root;
                switch (a = (e < (i + h) / 2) << 1 | t < (r + s) / 2) {
                    case 0:
                        do {
                            (o = new Array(4))[a] = l, l = o
                        } while (h = i + (_ *= 2), t > (s = r + _) || e > h);
                        break;
                    case 1:
                        do {
                            (o = new Array(4))[a] = l, l = o
                        } while (h = i + (_ *= 2), (r = s - _) > t || e > h);
                        break;
                    case 2:
                        do {
                            (o = new Array(4))[a] = l, l = o
                        } while (i = h - (_ *= 2), t > (s = r + _) || i > e);
                        break;
                    case 3:
                        do {
                            (o = new Array(4))[a] = l, l = o
                        } while (i = h - (_ *= 2), (r = s - _) > t || i > e)
                }
                this._root && this._root.length && (this._root = l)
            }
            return this._x0 = r, this._y0 = i, this._x1 = s, this._y1 = h, this
        };
    }, {}], "99uV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = [];
            return this.visit(function (t) {
                if (!t.length) do {
                    e.push(t.data)
                } while (t = t.next)
            }), e
        };
    }, {}], "wciv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
        };
    }, {}], "HTh0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e, s, i, o) {
            this.node = t, this.x0 = e, this.y0 = s, this.x1 = i, this.y1 = o
        };
    }, {}], "NXzM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, l, a) {
            var u, n, r, s, d, h, i, f = this._x0, o = this._y0, _ = this._x1, p = this._y1, x = [], c = this._root;
            for (c && x.push(new t.default(c, f, o, _, p)), null == a ? a = 1 / 0 : (f = e - a, o = l - a, _ = e + a, p = l + a, a *= a); h = x.pop();) if (!(!(c = h.node) || (n = h.x0) > _ || (r = h.y0) > p || (s = h.x1) < f || (d = h.y1) < o)) if (c.length) {
                var v = (n + s) / 2, y = (r + d) / 2;
                x.push(new t.default(c[3], v, y, s, d), new t.default(c[2], n, y, v, d), new t.default(c[1], v, r, s, y), new t.default(c[0], n, r, v, y)), (i = (l >= y) << 1 | e >= v) && (h = x[x.length - 1], x[x.length - 1] = x[x.length - 1 - i], x[x.length - 1 - i] = h)
            } else {
                var g = e - +this._x.call(null, c.data), w = l - +this._y.call(null, c.data), q = g * g + w * w;
                if (q < a) {
                    var M = Math.sqrt(a = q);
                    f = e - M, o = l - M, _ = e + M, p = l + M, u = c.data
                }
            }
            return u
        };
        var e = require("./quad"), t = l(e);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./quad": "HTh0"}], "qMQE": [function (require, module, exports) {
        "use strict";

        function t(t) {
            for (var e = 0, i = t.length; e < i; ++e) this.remove(t[e]);
            return this
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            if (isNaN(h = +this._x.call(null, t)) || isNaN(n = +this._y.call(null, t))) return this;
            var e, i, r, s, h, n, l, o, u, f, a, x, _ = this._root, d = this._x0, c = this._y0, v = this._x1, g = this._y1;
            if (!_) return this;
            if (_.length) for (; ;) {
                if ((u = h >= (l = (d + v) / 2)) ? d = l : v = l, (f = n >= (o = (c + g) / 2)) ? c = o : g = o, e = _, !(_ = _[a = f << 1 | u])) return this;
                if (!_.length) break;
                (e[a + 1 & 3] || e[a + 2 & 3] || e[a + 3 & 3]) && (i = e, x = a)
            }
            for (; _.data !== t;) if (r = _, !(_ = _.next)) return this;
            return (s = _.next) && delete _.next, r ? (s ? r.next = s : delete r.next, this) : e ? (s ? e[a] = s : delete e[a], (_ = e[0] || e[1] || e[2] || e[3]) && _ === (e[3] || e[2] || e[1] || e[0]) && !_.length && (i ? i[x] = _ : this._root = _), this) : (this._root = s, this)
        }, exports.removeAll = t;
    }, {}], "f6UW": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this._root
        };
    }, {}], "hpwG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = 0;
            return this.visit(function (t) {
                if (!t.length) do {
                    ++e
                } while (t = t.next)
            }), e
        };
    }, {}], "Nl++": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var u, s, r, n, a, d, f = [], h = this._root;
            for (h && f.push(new t.default(h, this._x0, this._y0, this._x1, this._y1)); u = f.pop();) if (!e(h = u.node, r = u.x0, n = u.y0, a = u.x1, d = u.y1) && h.length) {
                var i = (r + a) / 2, o = (n + d) / 2;
                (s = h[3]) && f.push(new t.default(s, i, o, a, d)), (s = h[2]) && f.push(new t.default(s, r, o, i, d)), (s = h[1]) && f.push(new t.default(s, i, n, a, o)), (s = h[0]) && f.push(new t.default(s, r, n, i, o))
            }
            return this
        };
        var e = require("./quad"), t = u(e);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./quad": "HTh0"}], "mFQa": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var u, r = [], s = [];
            for (this._root && r.push(new t.default(this._root, this._x0, this._y0, this._x1, this._y1)); u = r.pop();) {
                var o = u.node;
                if (o.length) {
                    var n, h = u.x0, a = u.y0, d = u.x1, f = u.y1, i = (h + d) / 2, p = (a + f) / 2;
                    (n = o[0]) && r.push(new t.default(n, h, a, i, p)), (n = o[1]) && r.push(new t.default(n, i, a, d, p)), (n = o[2]) && r.push(new t.default(n, h, p, i, f)), (n = o[3]) && r.push(new t.default(n, i, p, d, f))
                }
                s.push(u)
            }
            for (; u = s.pop();) e(u.node, u.x0, u.y0, u.x1, u.y1);
            return this
        };
        var e = require("./quad"), t = u(e);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./quad": "HTh0"}], "9zEr": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t[0]
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.defaultX = t, exports.default = function (t) {
            return arguments.length ? (this._x = t, this) : this._x
        };
    }, {}], "C58w": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t[1]
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.defaultY = t, exports.default = function (t) {
            return arguments.length ? (this._y = t, this) : this._y
        };
    }, {}], "e6a1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = z;
        var e = require("./add"), t = w(e), r = require("./cover"), a = w(r), u = require("./data"), i = w(u), o = require("./extent"), d = w(o), l = require("./find"), n = w(l), f = require("./remove"), s = w(f), _ = require("./root"), v = w(_), h = require("./size"), x = w(h), y = require("./visit"), c = w(y), q = require("./visitAfter"), p = w(q), A = require("./x"), N = w(A), g = require("./y"), m = w(g);

        function w(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function z(e, t, r) {
            var a = new M(null == t ? A.defaultX : t, null == r ? g.defaultY : r, NaN, NaN, NaN, NaN);
            return null == e ? a : a.addAll(e)
        }

        function M(e, t, r, a, u, i) {
            this._x = e, this._y = t, this._x0 = r, this._y0 = a, this._x1 = u, this._y1 = i, this._root = void 0
        }

        function b(e) {
            for (var t = {data: e.data}, r = t; e = e.next;) r = r.next = {data: e.data};
            return t
        }

        var j = z.prototype = M.prototype;
        j.copy = function () {
            var e, t, r = new M(this._x, this._y, this._x0, this._y0, this._x1, this._y1), a = this._root;
            if (!a) return r;
            if (!a.length) return r._root = b(a), r;
            for (e = [{source: a, target: r._root = new Array(4)}]; a = e.pop();) for (var u = 0; u < 4; ++u) (t = a.source[u]) && (t.length ? e.push({source: t, target: a.target[u] = new Array(4)}) : a.target[u] = b(t));
            return r
        }, j.add = t.default, j.addAll = e.addAll, j.cover = a.default, j.data = i.default, j.extent = d.default, j.find = n.default, j.remove = s.default, j.removeAll = f.removeAll, j.root = v.default, j.size = x.default, j.visit = c.default, j.visitAfter = p.default, j.x = N.default, j.y = m.default;
    }, {"./add": "ALzt", "./cover": "YvH0", "./data": "99uV", "./extent": "wciv", "./find": "NXzM", "./remove": "qMQE", "./root": "f6UW", "./size": "hpwG", "./visit": "Nl++", "./visitAfter": "mFQa", "./x": "9zEr", "./y": "C58w"}], "lUbg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./quadtree");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "quadtree", {
            enumerable: !0, get: function () {
                return r(e).default
            }
        });
    }, {"./quadtree": "e6a1"}], "vmaP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var e, u, o = 1, d = 1;

            function v() {
                for (var t, r, v, c, x, s, y, g = e.length, h = 0; h < d; ++h) for (r = (0, i.quadtree)(e, f, a).visitAfter(l), t = 0; t < g; ++t) v = e[t], s = u[v.index], y = s * s, c = v.x + v.vx, x = v.y + v.vy, r.visit(q);

                function q(t, r, e, i, u) {
                    var f = t.data, a = t.r, d = s + a;
                    if (!f) return r > c + d || i < c - d || e > x + d || u < x - d;
                    if (f.index > v.index) {
                        var l = c - f.x - f.vx, g = x - f.y - f.vy, h = l * l + g * g;
                        h < d * d && (0 === l && (h += (l = (0, n.default)()) * l), 0 === g && (h += (g = (0, n.default)()) * g), h = (d - (h = Math.sqrt(h))) / h * o, v.vx += (l *= h) * (d = (a *= a) / (y + a)), v.vy += (g *= h) * d, f.vx -= l * (d = 1 - d), f.vy -= g * d)
                    }
                }
            }

            function l(t) {
                if (t.data) return t.r = u[t.data.index];
                for (var r = t.r = 0; r < 4; ++r) t[r] && t[r].r > t.r && (t.r = t[r].r)
            }

            function c() {
                if (e) {
                    var r, n, i = e.length;
                    for (u = new Array(i), r = 0; r < i; ++r) n = e[r], u[n.index] = +t(n, r, e)
                }
            }

            return "function" != typeof t && (t = (0, r.default)(null == t ? 1 : +t)), v.initialize = function (t) {
                e = t, c()
            }, v.iterations = function (t) {
                return arguments.length ? (d = +t, v) : d
            }, v.strength = function (t) {
                return arguments.length ? (o = +t, v) : o
            }, v.radius = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, r.default)(+e), c(), v) : t
            }, v
        };
        var t = require("./constant"), r = u(t), e = require("./jiggle"), n = u(e), i = require("d3-quadtree");

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function f(t) {
            return t.x + t.vx
        }

        function a(t) {
            return t.y + t.vy
        }
    }, {"./constant": "aCvo", "./jiggle": "6Efb", "d3-quadtree": "lUbg"}], "zZLJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var n, u, a, c, l, d = o, g = function (e) {
                return 1 / Math.min(c[e.source.index], c[e.target.index])
            }, s = (0, t.default)(30), x = 1;

            function v(t) {
                for (var i = 0, o = e.length; i < x; ++i) for (var f, a, c, d, g, s, v, y = 0; y < o; ++y) a = (f = e[y]).source, d = (c = f.target).x + c.vx - a.x - a.vx || (0, r.default)(), g = c.y + c.vy - a.y - a.vy || (0, r.default)(), d *= s = ((s = Math.sqrt(d * d + g * g)) - u[y]) / s * t * n[y], g *= s, c.vx -= d * (v = l[y]), c.vy -= g * v, a.vx += d * (v = 1 - v), a.vy += g * v
            }

            function y() {
                if (a) {
                    var t, r, o = a.length, g = e.length, s = (0, i.map)(a, d);
                    for (t = 0, c = new Array(o); t < g; ++t) (r = e[t]).index = t, "object" != typeof r.source && (r.source = f(s, r.source)), "object" != typeof r.target && (r.target = f(s, r.target)), c[r.source.index] = (c[r.source.index] || 0) + 1, c[r.target.index] = (c[r.target.index] || 0) + 1;
                    for (t = 0, l = new Array(g); t < g; ++t) r = e[t], l[t] = c[r.source.index] / (c[r.source.index] + c[r.target.index]);
                    n = new Array(g), h(), u = new Array(g), p()
                }
            }

            function h() {
                if (a) for (var t = 0, r = e.length; t < r; ++t) n[t] = +g(e[t], t, e)
            }

            function p() {
                if (a) for (var t = 0, n = e.length; t < n; ++t) u[t] = +s(e[t], t, e)
            }

            return null == e && (e = []), v.initialize = function (e) {
                a = e, y()
            }, v.links = function (t) {
                return arguments.length ? (e = t, y(), v) : e
            }, v.id = function (e) {
                return arguments.length ? (d = e, v) : d
            }, v.iterations = function (e) {
                return arguments.length ? (x = +e, v) : x
            }, v.strength = function (e) {
                return arguments.length ? (g = "function" == typeof e ? e : (0, t.default)(+e), h(), v) : g
            }, v.distance = function (e) {
                return arguments.length ? (s = "function" == typeof e ? e : (0, t.default)(+e), p(), v) : s
            }, v
        };
        var e = require("./constant"), t = u(e), n = require("./jiggle"), r = u(n), i = require("d3-collection");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e) {
            return e.index
        }

        function f(e, t) {
            var n = e.get(t);
            if (!n) throw new Error("missing: " + t);
            return n
        }
    }, {"./constant": "aCvo", "./jiggle": "6Efb", "d3-collection": "S3hn"}], "Jr7D": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.x = r, exports.y = i, exports.default = function (r) {
            var i, a = 1, c = .001, l = 1 - Math.pow(c, 1 / 300), f = 0, h = .6, s = (0, t.map)(), v = (0, e.timer)(y), x = (0, n.dispatch)("tick", "end");

            function y() {
                p(), x.call("tick", i), a < c && (v.stop(), x.call("end", i))
            }

            function p() {
                var n, t, e = r.length;
                for (a += (f - a) * l, s.each(function (n) {
                    n(a)
                }), n = 0; n < e; ++n) null == (t = r[n]).fx ? t.x += t.vx *= h : (t.x = t.fx, t.vx = 0), null == t.fy ? t.y += t.vy *= h : (t.y = t.fy, t.vy = 0)
            }

            function d() {
                for (var n, t = 0, e = r.length; t < e; ++t) {
                    if ((n = r[t]).index = t, isNaN(n.x) || isNaN(n.y)) {
                        var i = u * Math.sqrt(t), a = t * o;
                        n.x = i * Math.cos(a), n.y = i * Math.sin(a)
                    }
                    (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                }
            }

            function g(n) {
                return n.initialize && n.initialize(r), n
            }

            return null == r && (r = []), d(), i = {
                tick: p, restart: function () {
                    return v.restart(y), i
                }, stop: function () {
                    return v.stop(), i
                }, nodes: function (n) {
                    return arguments.length ? (r = n, d(), s.each(g), i) : r
                }, alpha: function (n) {
                    return arguments.length ? (a = +n, i) : a
                }, alphaMin: function (n) {
                    return arguments.length ? (c = +n, i) : c
                }, alphaDecay: function (n) {
                    return arguments.length ? (l = +n, i) : +l
                }, alphaTarget: function (n) {
                    return arguments.length ? (f = +n, i) : f
                }, velocityDecay: function (n) {
                    return arguments.length ? (h = 1 - n, i) : 1 - h
                }, force: function (n, t) {
                    return arguments.length > 1 ? (null == t ? s.remove(n) : s.set(n, g(t)), i) : s.get(n)
                }, find: function (n, t, e) {
                    var i, u, o, a, c, l = 0, f = r.length;
                    for (null == e ? e = 1 / 0 : e *= e, l = 0; l < f; ++l) (o = (i = n - (a = r[l]).x) * i + (u = t - a.y) * u) < e && (c = a, e = o);
                    return c
                }, on: function (n, t) {
                    return arguments.length > 1 ? (x.on(n, t), i) : x.on(n)
                }
            }
        };
        var n = require("d3-dispatch"), t = require("d3-collection"), e = require("d3-timer");

        function r(n) {
            return n.x
        }

        function i(n) {
            return n.y
        }

        var u = 10, o = Math.PI * (3 - Math.sqrt(5));
    }, {"d3-dispatch": "D3zY", "d3-collection": "S3hn", "d3-timer": "rdzS"}], "i5c4": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t, n, i, f, l = (0, e.default)(-30), d = 1, o = 1 / 0, s = .81;

            function v(e) {
                var a, f = t.length, l = (0, r.quadtree)(t, u.x, u.y).visitAfter(x);
                for (i = e, a = 0; a < f; ++a) n = t[a], l.visit(c)
            }

            function h() {
                if (t) {
                    var e, n, a = t.length;
                    for (f = new Array(a), e = 0; e < a; ++e) n = t[e], f[n.index] = +l(n, e, t)
                }
            }

            function x(t) {
                var e, n, a, r, u, i = 0, l = 0;
                if (t.length) {
                    for (a = r = u = 0; u < 4; ++u) (e = t[u]) && (n = Math.abs(e.value)) && (i += e.value, l += n, a += n * e.x, r += n * e.y);
                    t.x = a / l, t.y = r / l
                } else {
                    (e = t).x = e.data.x, e.y = e.data.y;
                    do {
                        i += f[e.data.index]
                    } while (e = e.next)
                }
                t.value = i
            }

            function c(t, e, r, u) {
                if (!t.value) return !0;
                var l = t.x - n.x, v = t.y - n.y, h = u - e, x = l * l + v * v;
                if (h * h / s < x) return x < o && (0 === l && (x += (l = (0, a.default)()) * l), 0 === v && (x += (v = (0, a.default)()) * v), x < d && (x = Math.sqrt(d * x)), n.vx += l * t.value * i / x, n.vy += v * t.value * i / x), !0;
                if (!(t.length || x >= o)) {
                    (t.data !== n || t.next) && (0 === l && (x += (l = (0, a.default)()) * l), 0 === v && (x += (v = (0, a.default)()) * v), x < d && (x = Math.sqrt(d * x)));
                    do {
                        t.data !== n && (h = f[t.data.index] * i / x, n.vx += l * h, n.vy += v * h)
                    } while (t = t.next)
                }
            }

            return v.initialize = function (e) {
                t = e, h()
            }, v.strength = function (t) {
                return arguments.length ? (l = "function" == typeof t ? t : (0, e.default)(+t), h(), v) : l
            }, v.distanceMin = function (t) {
                return arguments.length ? (d = t * t, v) : Math.sqrt(d)
            }, v.distanceMax = function (t) {
                return arguments.length ? (o = t * t, v) : Math.sqrt(o)
            }, v.theta = function (t) {
                return arguments.length ? (s = t * t, v) : Math.sqrt(s)
            }, v
        };
        var t = require("./constant"), e = i(t), n = require("./jiggle"), a = i(n), r = require("d3-quadtree"), u = require("./simulation");

        function i(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {"./constant": "aCvo", "./jiggle": "6Efb", "d3-quadtree": "lUbg", "./simulation": "Jr7D"}], "U/Aq": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t, e, r) {
            var u, f, o, i = (0, n.default)(.1);

            function l(t) {
                for (var n = 0, i = u.length; n < i; ++n) {
                    var l = u[n], a = l.x - e || 1e-6, c = l.y - r || 1e-6, s = Math.sqrt(a * a + c * c), d = (o[n] - s) * f[n] * t / s;
                    l.vx += a * d, l.vy += c * d
                }
            }

            function a() {
                if (u) {
                    var n, e = u.length;
                    for (f = new Array(e), o = new Array(e), n = 0; n < e; ++n) o[n] = +t(u[n], n, u), f[n] = isNaN(o[n]) ? 0 : +i(u[n], n, u)
                }
            }

            return "function" != typeof t && (t = (0, n.default)(+t)), null == e && (e = 0), null == r && (r = 0), l.initialize = function (t) {
                u = t, a()
            }, l.strength = function (t) {
                return arguments.length ? (i = "function" == typeof t ? t : (0, n.default)(+t), a(), l) : i
            }, l.radius = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, n.default)(+e), a(), l) : t
            }, l.x = function (t) {
                return arguments.length ? (e = +t, l) : e
            }, l.y = function (t) {
                return arguments.length ? (r = +t, l) : r
            }, l
        };
        var t = require("./constant"), n = e(t);

        function e(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {"./constant": "aCvo"}], "/oss": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var e, r, u, f = (0, n.default)(.1);

            function o(t) {
                for (var n, f = 0, o = e.length; f < o; ++f) (n = e[f]).vx += (u[f] - n.x) * r[f] * t
            }

            function i() {
                if (e) {
                    var n, o = e.length;
                    for (r = new Array(o), u = new Array(o), n = 0; n < o; ++n) r[n] = isNaN(u[n] = +t(e[n], n, e)) ? 0 : +f(e[n], n, e)
                }
            }

            return "function" != typeof t && (t = (0, n.default)(null == t ? 0 : +t)), o.initialize = function (t) {
                e = t, i()
            }, o.strength = function (t) {
                return arguments.length ? (f = "function" == typeof t ? t : (0, n.default)(+t), i(), o) : f
            }, o.x = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, n.default)(+e), i(), o) : t
            }, o
        };
        var t = require("./constant"), n = e(t);

        function e(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {"./constant": "aCvo"}], "GLsE": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var e, r, u, f = (0, n.default)(.1);

            function o(t) {
                for (var n, f = 0, o = e.length; f < o; ++f) (n = e[f]).vy += (u[f] - n.y) * r[f] * t
            }

            function i() {
                if (e) {
                    var n, o = e.length;
                    for (r = new Array(o), u = new Array(o), n = 0; n < o; ++n) r[n] = isNaN(u[n] = +t(e[n], n, e)) ? 0 : +f(e[n], n, e)
                }
            }

            return "function" != typeof t && (t = (0, n.default)(null == t ? 0 : +t)), o.initialize = function (t) {
                e = t, i()
            }, o.strength = function (t) {
                return arguments.length ? (f = "function" == typeof t ? t : (0, n.default)(+t), i(), o) : f
            }, o.y = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, n.default)(+e), i(), o) : t
            }, o
        };
        var t = require("./constant"), n = e(t);

        function e(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {"./constant": "aCvo"}], "oYRE": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./center");
        Object.defineProperty(exports, "forceCenter", {
            enumerable: !0, get: function () {
                return a(e).default
            }
        });
        var r = require("./collide");
        Object.defineProperty(exports, "forceCollide", {
            enumerable: !0, get: function () {
                return a(r).default
            }
        });
        var t = require("./link");
        Object.defineProperty(exports, "forceLink", {
            enumerable: !0, get: function () {
                return a(t).default
            }
        });
        var n = require("./manyBody");
        Object.defineProperty(exports, "forceManyBody", {
            enumerable: !0, get: function () {
                return a(n).default
            }
        });
        var u = require("./radial");
        Object.defineProperty(exports, "forceRadial", {
            enumerable: !0, get: function () {
                return a(u).default
            }
        });
        var o = require("./simulation");
        Object.defineProperty(exports, "forceSimulation", {
            enumerable: !0, get: function () {
                return a(o).default
            }
        });
        var i = require("./x");
        Object.defineProperty(exports, "forceX", {
            enumerable: !0, get: function () {
                return a(i).default
            }
        });
        var f = require("./y");

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "forceY", {
            enumerable: !0, get: function () {
                return a(f).default
            }
        });
    }, {"./center": "i73m", "./collide": "vmaP", "./link": "zZLJ", "./manyBody": "i5c4", "./radial": "U/Aq", "./simulation": "Jr7D", "./x": "/oss", "./y": "GLsE"}], "GAUC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
            var n, l = e.slice(0, n);
            return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(n + 1)]
        };
    }, {}], "tXBB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return (e = (0, t.default)(Math.abs(e))) ? e[1] : NaN
        };
        var e = require("./formatDecimal"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./formatDecimal": "GAUC"}], "rbAM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return function (r, n) {
                for (var u = r.length, s = [], o = 0, i = e[0], a = 0; u > 0 && i > 0 && (a + i + 1 > n && (i = Math.max(1, n - a)), s.push(r.substring(u -= i, u + i)), !((a += i + 1) > n));) i = e[o = (o + 1) % e.length];
                return s.reverse().join(t)
            }
        };
    }, {}], "h+Tc": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return function (t) {
                return t.replace(/[0-9]/g, function (t) {
                    return e[+t]
                })
            }
        };
    }, {}], "9aib": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = i;
        var t = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function i(t) {
            return new s(t)
        }

        function s(i) {
            if (!(s = t.exec(i))) throw new Error("invalid format: " + i);
            var s;
            this.fill = s[1] || " ", this.align = s[2] || ">", this.sign = s[3] || "-", this.symbol = s[4] || "", this.zero = !!s[5], this.width = s[6] && +s[6], this.comma = !!s[7], this.precision = s[8] && +s[8].slice(1), this.trim = !!s[9], this.type = s[10] || ""
        }

        i.prototype = s.prototype, s.prototype.toString = function () {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
    }, {}], "SUnU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            e:for (var r, t = e.length, s = 1, a = -1; s < t; ++s) switch (e[s]) {
                case".":
                    a = r = s;
                    break;
                case"0":
                    0 === a && (a = s), r = s;
                    break;
                default:
                    if (a > 0) {
                        if (!+e[s]) break e;
                        a = 0
                    }
            }
            return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e
        };
    }, {}], "f+bp": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.prefixExponent = void 0, exports.default = function (e, t) {
            var o = (0, r.default)(e, t);
            if (!o) return e + "";
            var a = o[0], i = o[1], u = i - (exports.prefixExponent = n = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, f = a.length;
            return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(e, Math.max(0, t + u - 1))[0]
        };
        var e = require("./formatDecimal"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var n = exports.prefixExponent = void 0;
    }, {"./formatDecimal": "GAUC"}], "UDrw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var n = (0, r.default)(e, t);
            if (!n) return e + "";
            var u = n[0], a = n[1];
            return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0")
        };
        var e = require("./formatDecimal"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./formatDecimal": "GAUC"}], "Wavi": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./formatPrefixAuto"), n = u(t), r = require("./formatRounded"), e = u(r);

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        exports.default = {
            "%": function (t, n) {
                return (100 * t).toFixed(n)
            }, b: function (t) {
                return Math.round(t).toString(2)
            }, c: function (t) {
                return t + ""
            }, d: function (t) {
                return Math.round(t).toString(10)
            }, e: function (t, n) {
                return t.toExponential(n)
            }, f: function (t, n) {
                return t.toFixed(n)
            }, g: function (t, n) {
                return t.toPrecision(n)
            }, o: function (t) {
                return Math.round(t).toString(8)
            }, p: function (t, n) {
                return (0, e.default)(100 * t, n)
            }, r: e.default, s: n.default, X: function (t) {
                return Math.round(t).toString(16).toUpperCase()
            }, x: function (t) {
                return Math.round(t).toString(16)
            }
        };
    }, {"./formatPrefixAuto": "f+bp", "./formatRounded": "UDrw"}], "IVmM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var t = e.grouping && e.thousands ? (0, a.default)(e.grouping, e.thousands) : h.default, n = e.currency, i = e.decimal, l = e.numerals ? (0, u.default)(e.numerals) : h.default, s = e.percent || "%";

            function d(e) {
                var r = (e = (0, f.default)(e)).fill, a = e.align, u = e.sign, d = e.symbol, h = e.zero, p = e.width, M = e.comma, x = e.precision, v = e.trim, y = e.type;
                "n" === y ? (M = !0, y = "g") : c.default[y] || (null == x && (x = 12), v = !0, y = "g"), (h || "0" === r && "=" === a) && (h = !0, r = "0", a = "=");
                var b = "$" === d ? n[0] : "#" === d && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", q = "$" === d ? n[1] : /[%p]/.test(y) ? s : "", k = c.default[y], w = /[defgprs%]/.test(y);

                function P(e) {
                    var n, f, s, c = b, d = q;
                    if ("c" === y) d = k(e) + d, e = ""; else {
                        var P = (e = +e) < 0;
                        if (e = k(Math.abs(e), x), v && (e = (0, o.default)(e)), P && 0 == +e && (P = !1), c = (P ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + c, d = ("s" === y ? g[8 + m.prefixExponent / 3] : "") + d + (P && "(" === u ? ")" : ""), w) for (n = -1, f = e.length; ++n < f;) if (48 > (s = e.charCodeAt(n)) || s > 57) {
                            d = (46 === s ? i + e.slice(n + 1) : e.slice(n)) + d, e = e.slice(0, n);
                            break
                        }
                    }
                    M && !h && (e = t(e, 1 / 0));
                    var _ = c.length + e.length + d.length, A = _ < p ? new Array(p - _ + 1).join(r) : "";
                    switch (M && h && (e = t(A + e, A.length ? p - d.length : 1 / 0), A = ""), a) {
                        case"<":
                            e = c + e + d + A;
                            break;
                        case"=":
                            e = c + A + e + d;
                            break;
                        case"^":
                            e = A.slice(0, _ = A.length >> 1) + c + e + d + A.slice(_);
                            break;
                        default:
                            e = A + c + e + d
                    }
                    return l(e)
                }

                return x = null == x ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), P.toString = function () {
                    return e + ""
                }, P
            }

            return {
                format: d, formatPrefix: function (e, t) {
                    var a = d(((e = (0, f.default)(e)).type = "f", e)), n = 3 * Math.max(-8, Math.min(8, Math.floor((0, r.default)(t) / 3))), u = Math.pow(10, -n), i = g[8 + n / 3];
                    return function (e) {
                        return a(u * e) + i
                    }
                }
            }
        };
        var e = require("./exponent"), r = p(e), t = require("./formatGroup"), a = p(t), n = require("./formatNumerals"), u = p(n), i = require("./formatSpecifier"), f = p(i), l = require("./formatTrim"), o = p(l), s = require("./formatTypes"), c = p(s), m = require("./formatPrefixAuto"), d = require("./identity"), h = p(d);

        function p(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var g = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    }, {"./exponent": "tXBB", "./formatGroup": "rbAM", "./formatNumerals": "h+Tc", "./formatSpecifier": "9aib", "./formatTrim": "SUnU", "./formatTypes": "Wavi", "./formatPrefixAuto": "f+bp", "./identity": "NNW9"}], "9KaM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.formatPrefix = exports.format = void 0, exports.default = u;
        var r, e = require("./locale"), t = o(e);

        function o(r) {
            return r && r.__esModule ? r : {default: r}
        }

        var f = exports.format = void 0, a = exports.formatPrefix = void 0;

        function u(e) {
            return r = (0, t.default)(e), exports.format = f = r.format, exports.formatPrefix = a = r.formatPrefix, r
        }

        u({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]});
    }, {"./locale": "IVmM"}], "EyKk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return Math.max(0, -(0, t.default)(Math.abs(e)))
        };
        var e = require("./exponent"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./exponent": "tXBB"}], "V+pk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, a) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, t.default)(a) / 3))) - (0, t.default)(Math.abs(e)))
        };
        var e = require("./exponent"), t = a(e);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./exponent": "tXBB"}], "DMyZ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, u) {
            return e = Math.abs(e), u = Math.abs(u) - e, Math.max(0, (0, t.default)(u) - (0, t.default)(e)) + 1
        };
        var e = require("./exponent"), t = u(e);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./exponent": "tXBB"}], "VuZR": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultLocale");
        Object.defineProperty(exports, "formatDefaultLocale", {
            enumerable: !0, get: function () {
                return u(e).default
            }
        }), Object.defineProperty(exports, "format", {
            enumerable: !0, get: function () {
                return e.format
            }
        }), Object.defineProperty(exports, "formatPrefix", {
            enumerable: !0, get: function () {
                return e.formatPrefix
            }
        });
        var r = require("./locale");
        Object.defineProperty(exports, "formatLocale", {
            enumerable: !0, get: function () {
                return u(r).default
            }
        });
        var t = require("./formatSpecifier");
        Object.defineProperty(exports, "formatSpecifier", {
            enumerable: !0, get: function () {
                return u(t).default
            }
        });
        var n = require("./precisionFixed");
        Object.defineProperty(exports, "precisionFixed", {
            enumerable: !0, get: function () {
                return u(n).default
            }
        });
        var o = require("./precisionPrefix");
        Object.defineProperty(exports, "precisionPrefix", {
            enumerable: !0, get: function () {
                return u(o).default
            }
        });
        var i = require("./precisionRound");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "precisionRound", {
            enumerable: !0, get: function () {
                return u(i).default
            }
        });
    }, {"./defaultLocale": "9KaM", "./locale": "IVmM", "./formatSpecifier": "9aib", "./precisionFixed": "EyKk", "./precisionPrefix": "V+pk", "./precisionRound": "DMyZ"}], "fG8A": [function (require, module, exports) {
        "use strict";

        function t() {
            this.reset()
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return new t
        }, t.prototype = {
            constructor: t, reset: function () {
                this.s = this.t = 0
            }, add: function (t) {
                e(s, t, this.t), e(this, s.s, this.s), this.s ? this.t += s.t : this.s = s.t
            }, valueOf: function () {
                return this.s
            }
        };
        var s = new t;

        function e(t, s, e) {
            var i = t.s = s + e, n = i - s, r = i - n;
            t.t = s - r + (e - n)
        }
    }, {}], "JQgf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.acos = v, exports.asin = w, exports.haversin = _;
        var t = exports.epsilon = 1e-6, e = exports.epsilon2 = 1e-12, s = exports.pi = Math.PI, r = exports.halfPi = s / 2, o = exports.quarterPi = s / 4, a = exports.tau = 2 * s, p = exports.degrees = 180 / s, n = exports.radians = s / 180, x = exports.abs = Math.abs, i = exports.atan = Math.atan, h = exports.atan2 = Math.atan2, M = exports.cos = Math.cos, u = exports.ceil = Math.ceil, c = exports.exp = Math.exp, l = exports.floor = Math.floor, f = exports.log = Math.log,
            g = exports.pow = Math.pow, d = exports.sin = Math.sin, P = exports.sign = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, b = exports.sqrt = Math.sqrt, q = exports.tan = Math.tan;

        function v(t) {
            return t > 1 ? 0 : t < -1 ? s : Math.acos(t)
        }

        function w(t) {
            return t > 1 ? r : t < -1 ? -r : Math.asin(t)
        }

        function _(t) {
            return (t = d(t / 2)) * t
        }
    }, {}], "DUih": [function (require, module, exports) {
        "use strict";

        function e() {
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = e;
    }, {}], "XQuq": [function (require, module, exports) {
        "use strict";

        function n(n, t) {
            n && o.hasOwnProperty(n.type) && o[n.type](n, t)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (o, e) {
            o && t.hasOwnProperty(o.type) ? t[o.type](o, e) : n(o, e)
        };
        var t = {
            Feature: function (t, o) {
                n(t.geometry, o)
            }, FeatureCollection: function (t, o) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;) n(e[r].geometry, o)
            }
        }, o = {
            Sphere: function (n, t) {
                t.sphere()
            }, Point: function (n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            }, MultiPoint: function (n, t) {
                for (var o = n.coordinates, e = -1, r = o.length; ++e < r;) n = o[e], t.point(n[0], n[1], n[2])
            }, LineString: function (n, t) {
                e(n.coordinates, t, 0)
            }, MultiLineString: function (n, t) {
                for (var o = n.coordinates, r = -1, i = o.length; ++r < i;) e(o[r], t, 0)
            }, Polygon: function (n, t) {
                r(n.coordinates, t)
            }, MultiPolygon: function (n, t) {
                for (var o = n.coordinates, e = -1, i = o.length; ++e < i;) r(o[e], t)
            }, GeometryCollection: function (t, o) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;) n(e[r], o)
            }
        };

        function e(n, t, o) {
            var e, r = -1, i = n.length - o;
            for (t.lineStart(); ++r < i;) e = n[r], t.point(e[0], e[1], e[2]);
            t.lineEnd()
        }

        function r(n, t) {
            var o = -1, r = n.length;
            for (t.polygonStart(); ++o < r;) e(n[o], t, 1);
            t.polygonEnd()
        }
    }, {}], "2rKt": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.areaStream = exports.areaRingSum = void 0, exports.default = function (e) {
            return S.reset(), (0, u.default)(e, m), 2 * S
        };
        var e = require("./adder"), t = o(e), a = require("./math"), n = require("./noop"), r = o(n), i = require("./stream"), u = o(i);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var d, s, l, f, p, c = exports.areaRingSum = (0, t.default)(), S = (0, t.default)(), m = exports.areaStream = {
            point: r.default, lineStart: r.default, lineEnd: r.default, polygonStart: function () {
                c.reset(), m.lineStart = q, m.lineEnd = v
            }, polygonEnd: function () {
                var e = +c;
                S.add(e < 0 ? a.tau + e : e), this.lineStart = this.lineEnd = this.point = r.default
            }, sphere: function () {
                S.add(a.tau)
            }
        };

        function q() {
            m.point = x
        }

        function v() {
            h(d, s)
        }

        function x(e, t) {
            m.point = h, d = e, s = t, e *= a.radians, t *= a.radians, l = e, f = (0, a.cos)(t = t / 2 + a.quarterPi), p = (0, a.sin)(t)
        }

        function h(e, t) {
            e *= a.radians, t = (t *= a.radians) / 2 + a.quarterPi;
            var n = e - l, r = n >= 0 ? 1 : -1, i = r * n, u = (0, a.cos)(t), o = (0, a.sin)(t), d = p * o, s = f * u + d * (0, a.cos)(i), S = d * r * (0, a.sin)(i);
            c.add((0, a.atan2)(S, s)), l = e, f = u, p = o
        }
    }, {"./adder": "fG8A", "./math": "JQgf", "./noop": "DUih", "./stream": "XQuq"}], "V83Q": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.spherical = e, exports.cartesian = t, exports.cartesianDot = n, exports.cartesianCross = s, exports.cartesianAddInPlace = a, exports.cartesianScale = o, exports.cartesianNormalizeInPlace = c;
        var r = require("./math");

        function e(e) {
            return [(0, r.atan2)(e[1], e[0]), (0, r.asin)(e[2])]
        }

        function t(e) {
            var t = e[0], n = e[1], s = (0, r.cos)(n);
            return [s * (0, r.cos)(t), s * (0, r.sin)(t), (0, r.sin)(n)]
        }

        function n(r, e) {
            return r[0] * e[0] + r[1] * e[1] + r[2] * e[2]
        }

        function s(r, e) {
            return [r[1] * e[2] - r[2] * e[1], r[2] * e[0] - r[0] * e[2], r[0] * e[1] - r[1] * e[0]]
        }

        function a(r, e) {
            r[0] += e[0], r[1] += e[1], r[2] += e[2]
        }

        function o(r, e) {
            return [r[0] * e, r[1] * e, r[2] * e]
        }

        function c(e) {
            var t = (0, r.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
            e[0] /= t, e[1] /= t, e[2] /= t
        }
    }, {"./math": "JQgf"}], "rw3L": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var n, r, a, t, i, u, d;
            if (c = f = -(l = s = 1 / 0), m = [], (0, o.default)(e, h), r = m.length) {
                for (m.sort(P), n = 1, i = [a = m[0]]; n < r; ++n) j(a, (t = m[n])[0]) || j(a, t[1]) ? (M(a[0], t[1]) > M(a[0], a[1]) && (a[1] = t[1]), M(t[0], a[1]) > M(a[0], a[1]) && (a[0] = t[0])) : i.push(a = t);
                for (u = -1 / 0, n = 0, a = i[r = i.length - 1]; n <= r; a = t, ++n) t = i[n], (d = M(a[1], t[0])) > u && (u = d, l = t[0], f = a[1])
            }
            return m = N = null, l === 1 / 0 || s === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[l, s], [f, c]]
        };
        var e = require("./adder"), n = u(e), r = require("./area"), a = require("./cartesian"), t = require("./math"), i = require("./stream"), o = u(i);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var l, s, f, c, d, p, S, g, m, N, v = (0, n.default)(), h = {
            point: E, lineStart: y, lineEnd: b, polygonStart: function () {
                h.point = _, h.lineStart = x, h.lineEnd = C, v.reset(), r.areaStream.polygonStart()
            }, polygonEnd: function () {
                r.areaStream.polygonEnd(), h.point = E, h.lineStart = y, h.lineEnd = b, r.areaRingSum < 0 ? (l = -(f = 180), s = -(c = 90)) : v > t.epsilon ? c = 90 : v < -t.epsilon && (s = -90), N[0] = l, N[1] = f
            }
        };

        function E(e, n) {
            m.push(N = [l = e, f = e]), n < s && (s = n), n > c && (c = n)
        }

        function q(e, n) {
            var r = (0, a.cartesian)([e * t.radians, n * t.radians]);
            if (g) {
                var i = (0, a.cartesianCross)(g, r), o = [i[1], -i[0], 0], u = (0, a.cartesianCross)(o, i);
                (0, a.cartesianNormalizeInPlace)(u), u = (0, a.spherical)(u);
                var p, S = e - d, v = S > 0 ? 1 : -1, h = u[0] * t.degrees * v, E = (0, t.abs)(S) > 180;
                E ^ (v * d < h && h < v * e) ? (p = u[1] * t.degrees) > c && (c = p) : E ^ (v * d < (h = (h + 360) % 360 - 180) && h < v * e) ? (p = -u[1] * t.degrees) < s && (s = p) : (n < s && (s = n), n > c && (c = n)), E ? e < d ? M(l, e) > M(l, f) && (f = e) : M(e, f) > M(l, f) && (l = e) : f >= l ? (e < l && (l = e), e > f && (f = e)) : e > d ? M(l, e) > M(l, f) && (f = e) : M(e, f) > M(l, f) && (l = e)
            } else m.push(N = [l = e, f = e]);
            n < s && (s = n), n > c && (c = n), g = r, d = e
        }

        function y() {
            h.point = q
        }

        function b() {
            N[0] = l, N[1] = f, h.point = E, g = null
        }

        function _(e, n) {
            if (g) {
                var a = e - d;
                v.add((0, t.abs)(a) > 180 ? a + (a > 0 ? 360 : -360) : a)
            } else p = e, S = n;
            r.areaStream.point(e, n), q(e, n)
        }

        function x() {
            r.areaStream.lineStart()
        }

        function C() {
            _(p, S), r.areaStream.lineEnd(), (0, t.abs)(v) > t.epsilon && (l = -(f = 180)), N[0] = l, N[1] = f, g = null
        }

        function M(e, n) {
            return (n -= e) < 0 ? n + 360 : n
        }

        function P(e, n) {
            return e[0] - n[0]
        }

        function j(e, n) {
            return e[0] <= e[1] ? e[0] <= n && n <= e[1] : n < e[0] || e[1] < n
        }
    }, {"./adder": "fG8A", "./area": "2rKt", "./cartesian": "V83Q", "./math": "JQgf", "./stream": "XQuq"}], "GCsQ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (f) {
            n = i = s = t = a = o = r = e = u = c = d = 0, (0, _.default)(f, h);
            var l = u, p = c, v = d, q = l * l + p * p + v * v;
            return q < g.epsilon2 && (l = o, p = r, v = e, i < g.epsilon && (l = s, p = t, v = a), (q = l * l + p * p + v * v) < g.epsilon2) ? [NaN, NaN] : [(0, g.atan2)(p, l) * g.degrees, (0, g.asin)(v / (0, g.sqrt)(q)) * g.degrees]
        };
        var n, i, s, t, a, o, r, e, u, c, d, f, l, p, v, q, g = require("./math"), E = require("./noop"), N = y(E), S = require("./stream"), _ = y(S);

        function y(n) {
            return n && n.__esModule ? n : {default: n}
        }

        var h = {
            sphere: N.default, point: m, lineStart: M, lineEnd: O, polygonStart: function () {
                h.lineStart = P, h.lineEnd = k
            }, polygonEnd: function () {
                h.lineStart = M, h.lineEnd = O
            }
        };

        function m(n, i) {
            n *= g.radians, i *= g.radians;
            var s = (0, g.cos)(i);
            x(s * (0, g.cos)(n), s * (0, g.sin)(n), (0, g.sin)(i))
        }

        function x(i, o, r) {
            s += (i - s) / ++n, t += (o - t) / n, a += (r - a) / n
        }

        function M() {
            h.point = b
        }

        function b(n, i) {
            n *= g.radians, i *= g.radians;
            var s = (0, g.cos)(i);
            p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), h.point = j, x(p, v, q)
        }

        function j(n, s) {
            n *= g.radians, s *= g.radians;
            var t = (0, g.cos)(s), a = t * (0, g.cos)(n), u = t * (0, g.sin)(n), c = (0, g.sin)(s), d = (0, g.atan2)((0, g.sqrt)((d = v * c - q * u) * d + (d = q * a - p * c) * d + (d = p * u - v * a) * d), p * a + v * u + q * c);
            i += d, o += d * (p + (p = a)), r += d * (v + (v = u)), e += d * (q + (q = c)), x(p, v, q)
        }

        function O() {
            h.point = m
        }

        function P() {
            h.point = w
        }

        function k() {
            z(f, l), h.point = m
        }

        function w(n, i) {
            f = n, l = i, n *= g.radians, i *= g.radians, h.point = z;
            var s = (0, g.cos)(i);
            p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), x(p, v, q)
        }

        function z(n, s) {
            n *= g.radians, s *= g.radians;
            var t = (0, g.cos)(s), a = t * (0, g.cos)(n), f = t * (0, g.sin)(n), l = (0, g.sin)(s), E = v * l - q * f, N = q * a - p * l, S = p * f - v * a, _ = (0, g.sqrt)(E * E + N * N + S * S), y = (0, g.asin)(_), h = _ && -y / _;
            u += h * E, c += h * N, d += h * S, i += y, o += y * (p + (p = a)), r += y * (v + (v = f)), e += y * (q + (q = l)), x(p, v, q)
        }
    }, {"./math": "JQgf", "./noop": "DUih", "./stream": "XQuq"}], "8tY9": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            function r(r, n) {
                return r = e(r, n), t(r[0], r[1])
            }

            return e.invert && t.invert && (r.invert = function (r, n) {
                return (r = t.invert(r, n)) && e.invert(r[0], r[1])
            }), r
        };
    }, {}], "LqUY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.rotateRadians = a, exports.default = function (n) {
            function r(r) {
                return (r = n(r[0] * e.radians, r[1] * e.radians))[0] *= e.degrees, r[1] *= e.degrees, r
            }

            return n = a(n[0] * e.radians, n[1] * e.radians, n.length > 2 ? n[2] * e.radians : 0), r.invert = function (r) {
                return (r = n.invert(r[0] * e.radians, r[1] * e.radians))[0] *= e.degrees, r[1] *= e.degrees, r
            }, r
        };
        var n = require("./compose"), r = t(n), e = require("./math");

        function t(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function i(n, r) {
            return [n > e.pi ? n - e.tau : n < -e.pi ? n + e.tau : n, r]
        }

        function a(n, t, a) {
            return (n %= e.tau) ? t || a ? (0, r.default)(s(n), o(t, a)) : s(n) : t || a ? o(t, a) : i
        }

        function u(n) {
            return function (r, t) {
                return [(r += n) > e.pi ? r - e.tau : r < -e.pi ? r + e.tau : r, t]
            }
        }

        function s(n) {
            var r = u(n);
            return r.invert = u(-n), r
        }

        function o(n, r) {
            var t = (0, e.cos)(n), i = (0, e.sin)(n), a = (0, e.cos)(r), u = (0, e.sin)(r);

            function s(n, r) {
                var s = (0, e.cos)(r), o = (0, e.cos)(n) * s, c = (0, e.sin)(n) * s, d = (0, e.sin)(r), f = d * t + o * i;
                return [(0, e.atan2)(c * a - f * u, o * t - d * i), (0, e.asin)(f * a + c * u)]
            }

            return s.invert = function (n, r) {
                var s = (0, e.cos)(r), o = (0, e.cos)(n) * s, c = (0, e.sin)(n) * s, d = (0, e.sin)(r), f = d * a - c * u;
                return [(0, e.atan2)(c * a + d * u, o * t + f * i), (0, e.asin)(f * t - o * i)]
            }, s
        }

        i.invert = i;
    }, {"./compose": "8tY9", "./math": "JQgf"}], "KcOR": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.circleStream = u, exports.default = function () {
            var e, t, i = (0, n.default)([0, 0]), o = (0, n.default)(90), s = (0, n.default)(6), c = {
                point: function (n, a) {
                    e.push(n = t(n, a)), n[0] *= r.degrees, n[1] *= r.degrees
                }
            };

            function l() {
                var n = i.apply(this, arguments), l = o.apply(this, arguments) * r.radians, f = s.apply(this, arguments) * r.radians;
                return e = [], t = (0, a.rotateRadians)(-n[0] * r.radians, -n[1] * r.radians, 0).invert, u(c, l, f, 1), n = {type: "Polygon", coordinates: [e]}, e = t = null, n
            }

            return l.center = function (e) {
                return arguments.length ? (i = "function" == typeof e ? e : (0, n.default)([+e[0], +e[1]]), l) : i
            }, l.radius = function (e) {
                return arguments.length ? (o = "function" == typeof e ? e : (0, n.default)(+e), l) : o
            }, l.precision = function (e) {
                return arguments.length ? (s = "function" == typeof e ? e : (0, n.default)(+e), l) : s
            }, l
        };
        var e = require("./cartesian"), t = require("./constant"), n = i(t), r = require("./math"), a = require("./rotation");

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(t, n, a, i, u, s) {
            if (a) {
                var c = (0, r.cos)(n), l = (0, r.sin)(n), f = i * a;
                null == u ? (u = n + i * r.tau, s = n - f / 2) : (u = o(c, u), s = o(c, s), (i > 0 ? u < s : u > s) && (u += i * r.tau));
                for (var d, p = u; i > 0 ? p > s : p < s; p -= f) d = (0, e.spherical)([c, -l * (0, r.cos)(p), -l * (0, r.sin)(p)]), t.point(d[0], d[1])
            }
        }

        function o(t, n) {
            (n = (0, e.cartesian)(n))[0] -= t, (0, e.cartesianNormalizeInPlace)(n);
            var a = (0, r.acos)(-n[1]);
            return ((-n[2] < 0 ? -a : a) + r.tau - r.epsilon) % r.tau
        }
    }, {"./cartesian": "V83Q", "./constant": "aCvo", "./math": "JQgf", "./rotation": "LqUY"}], "jFd0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e, t = [];
            return {
                point: function (n, t) {
                    e.push([n, t])
                }, lineStart: function () {
                    t.push(e = [])
                }, lineEnd: n.default, rejoin: function () {
                    t.length > 1 && t.push(t.pop().concat(t.shift()))
                }, result: function () {
                    var n = t;
                    return t = [], e = null, n
                }
            }
        };
        var e = require("../noop"), n = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../noop": "DUih"}], "yH90": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, t) {
            return (0, e.abs)(r[0] - t[0]) < e.epsilon && (0, e.abs)(r[1] - t[1]) < e.epsilon
        };
        var e = require("./math");
    }, {"./math": "JQgf"}], "Nr15": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, o, r, f) {
            var u, s, h = [], p = [];
            if (e.forEach(function (e) {
                if (!((t = e.length - 1) <= 0)) {
                    var t, l, o = e[0], r = e[t];
                    if ((0, n.default)(o, r)) {
                        for (f.lineStart(), u = 0; u < t; ++u) f.point((o = e[u])[0], o[1]);
                        f.lineEnd()
                    } else h.push(l = new i(o, e, null, !0)), p.push(l.o = new i(o, null, l, !1)), h.push(l = new i(r, e, null, !1)), p.push(l.o = new i(r, null, l, !0))
                }
            }), h.length) {
                for (p.sort(t), l(h), l(p), u = 0, s = p.length; u < s; ++u) p[u].e = o = !o;
                for (var a, v, d = h[0]; ;) {
                    for (var c = d, x = !0; c.v;) if ((c = c.n) === d) return;
                    a = c.z, f.lineStart();
                    do {
                        if (c.v = c.o.v = !0, c.e) {
                            if (x) for (u = 0, s = a.length; u < s; ++u) f.point((v = a[u])[0], v[1]); else r(c.x, c.n.x, 1, f);
                            c = c.n
                        } else {
                            if (x) for (a = c.p.z, u = a.length - 1; u >= 0; --u) f.point((v = a[u])[0], v[1]); else r(c.x, c.p.x, -1, f);
                            c = c.p
                        }
                        a = (c = c.o).z, x = !x
                    } while (!c.v);
                    f.lineEnd()
                }
            }
        };
        var e = require("../pointEqual"), n = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i(e, n, t, i) {
            this.x = e, this.z = n, this.o = t, this.e = i, this.v = !1, this.n = this.p = null
        }

        function l(e) {
            if (n = e.length) {
                for (var n, t, i = 0, l = e[0]; ++i < n;) l.n = t = e[i], t.p = l, l = t;
                l.n = t = e[0], t.p = l
            }
        }
    }, {"../pointEqual": "yH90"}], "GrwB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            var s = r[0], t = r[1], o = (0, i.sin)(t), l = [(0, i.sin)(s), -(0, i.cos)(s), 0], c = 0, u = 0;
            n.reset(), 1 === o ? t = i.halfPi + i.epsilon : -1 === o && (t = -i.halfPi - i.epsilon);
            for (var f = 0, d = e.length; f < d; ++f) if (p = (v = e[f]).length) for (var v, p, P = v[p - 1], h = P[0], q = P[1] / 2 + i.quarterPi, _ = (0, i.sin)(q), m = (0, i.cos)(q), g = 0; g < p; ++g, h = z, _ = I, m = M, P = x) {
                var x = v[g], z = x[0], C = x[1] / 2 + i.quarterPi, I = (0, i.sin)(C), M = (0, i.cos)(C), N = z - h, b = N >= 0 ? 1 : -1, j = b * N, y = j > i.pi, O = _ * I;
                if (n.add((0, i.atan2)(O * b * (0, i.sin)(j), m * M + O * (0, i.cos)(j))), c += y ? N + b * i.tau : N, y ^ h >= s ^ z >= s) {
                    var k = (0, a.cartesianCross)((0, a.cartesian)(P), (0, a.cartesian)(x));
                    (0, a.cartesianNormalizeInPlace)(k);
                    var w = (0, a.cartesianCross)(l, k);
                    (0, a.cartesianNormalizeInPlace)(w);
                    var A = (y ^ N >= 0 ? -1 : 1) * (0, i.asin)(w[2]);
                    (t > A || t === A && (k[0] || k[1])) && (u += y ^ N >= 0 ? 1 : -1)
                }
            }
            return (c < -i.epsilon || c < i.epsilon && n < -i.epsilon) ^ 1 & u
        };
        var e = require("./adder"), r = s(e), a = require("./cartesian"), i = require("./math");

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var n = (0, r.default)();
    }, {"./adder": "fG8A", "./cartesian": "V83Q", "./math": "JQgf"}], "J6h6": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n, e, l, o) {
            return function (a) {
                var c, d, s, h = e(a), g = (0, t.default)(), S = e(g), y = !1, E = {
                    point: q, lineStart: P, lineEnd: x, polygonStart: function () {
                        E.point = _, E.lineStart = b, E.lineEnd = j, d = [], c = []
                    }, polygonEnd: function () {
                        E.point = q, E.lineStart = P, E.lineEnd = x, d = (0, u.merge)(d);
                        var n = (0, r.default)(c, o);
                        d.length ? (y || (a.polygonStart(), y = !0), (0, i.default)(d, p, n, l, a)) : n && (y || (a.polygonStart(), y = !0), a.lineStart(), l(null, null, 1, a), a.lineEnd()), y && (a.polygonEnd(), y = !1), d = c = null
                    }, sphere: function () {
                        a.polygonStart(), a.lineStart(), l(null, null, 1, a), a.lineEnd(), a.polygonEnd()
                    }
                };

                function q(t, e) {
                    n(t, e) && a.point(t, e)
                }

                function v(n, t) {
                    h.point(n, t)
                }

                function P() {
                    E.point = v, h.lineStart()
                }

                function x() {
                    E.point = q, h.lineEnd()
                }

                function _(n, t) {
                    s.push([n, t]), S.point(n, t)
                }

                function b() {
                    S.lineStart(), s = []
                }

                function j() {
                    _(s[0][0], s[0][1]), S.lineEnd();
                    var n, t, e, i, l = S.clean(), o = g.result(), r = o.length;
                    if (s.pop(), c.push(s), s = null, r) if (1 & l) {
                        if ((t = (e = o[0]).length - 1) > 0) {
                            for (y || (a.polygonStart(), y = !0), a.lineStart(), n = 0; n < t; ++n) a.point((i = e[n])[0], i[1]);
                            a.lineEnd()
                        }
                    } else r > 1 && 2 & l && o.push(o.pop().concat(o.shift())), d.push(o.filter(f))
                }

                return E
            }
        };
        var n = require("./buffer"), t = a(n), e = require("./rejoin"), i = a(e), l = require("../math"), o = require("../polygonContains"), r = a(o), u = require("d3-array");

        function a(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function f(n) {
            return n.length > 1
        }

        function p(n, t) {
            return ((n = n.x)[0] < 0 ? n[1] - l.halfPi - l.epsilon : l.halfPi - n[1]) - ((t = t.x)[0] < 0 ? t[1] - l.halfPi - l.epsilon : l.halfPi - t[1])
        }
    }, {"./buffer": "jFd0", "./rejoin": "Nr15", "../math": "JQgf", "../polygonContains": "GrwB", "d3-array": "K0bd"}], "/1Go": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var i = require("./index"), n = e(i), t = require("../math");

        function e(i) {
            return i && i.__esModule ? i : {default: i}
        }

        function p(i) {
            var n, e = NaN, p = NaN, a = NaN;
            return {
                lineStart: function () {
                    i.lineStart(), n = 1
                }, point: function (l, r) {
                    var s = l > 0 ? t.pi : -t.pi, u = (0, t.abs)(l - e);
                    (0, t.abs)(u - t.pi) < t.epsilon ? (i.point(e, p = (p + r) / 2 > 0 ? t.halfPi : -t.halfPi), i.point(a, p), i.lineEnd(), i.lineStart(), i.point(s, p), i.point(l, p), n = 0) : a !== s && u >= t.pi && ((0, t.abs)(e - a) < t.epsilon && (e -= a * t.epsilon), (0, t.abs)(l - s) < t.epsilon && (l -= s * t.epsilon), p = o(e, p, l, r), i.point(a, p), i.lineEnd(), i.lineStart(), i.point(s, p), n = 0), i.point(e = l, p = r), a = s
                }, lineEnd: function () {
                    i.lineEnd(), e = p = NaN
                }, clean: function () {
                    return 2 - n
                }
            }
        }

        function o(i, n, e, p) {
            var o, a, l = (0, t.sin)(i - e);
            return (0, t.abs)(l) > t.epsilon ? (0, t.atan)(((0, t.sin)(n) * (a = (0, t.cos)(p)) * (0, t.sin)(e) - (0, t.sin)(p) * (o = (0, t.cos)(n)) * (0, t.sin)(i)) / (o * a * l)) : (n + p) / 2
        }

        function a(i, n, e, p) {
            var o;
            if (null == i) o = e * t.halfPi, p.point(-t.pi, o), p.point(0, o), p.point(t.pi, o), p.point(t.pi, 0), p.point(t.pi, -o), p.point(0, -o), p.point(-t.pi, -o), p.point(-t.pi, 0), p.point(-t.pi, o); else if ((0, t.abs)(i[0] - n[0]) > t.epsilon) {
                var a = i[0] < n[0] ? t.pi : -t.pi;
                o = e * a / 2, p.point(-a, o), p.point(0, o), p.point(a, o)
            } else p.point(n[0], n[1])
        }

        exports.default = (0, n.default)(function () {
            return !0
        }, p, a, [-t.pi, -t.halfPi]);
    }, {"./index": "J6h6", "../math": "JQgf"}], "lcCJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            var t = (0, i.cos)(r), s = 6 * i.radians, l = t > 0, o = (0, i.abs)(t) > i.epsilon;

            function u(e, n) {
                return (0, i.cos)(e) * (0, i.cos)(n) > t
            }

            function p(n, r, a) {
                var c = (0, e.cartesian)(n), s = (0, e.cartesian)(r), l = [1, 0, 0], o = (0, e.cartesianCross)(c, s), u = (0, e.cartesianDot)(o, o), p = o[0], f = u - p * p;
                if (!f) return !a && n;
                var d = t * u / f, v = -t * p / f, S = (0, e.cartesianCross)(l, o), q = (0, e.cartesianScale)(l, d), E = (0, e.cartesianScale)(o, v);
                (0, e.cartesianAddInPlace)(q, E);
                var b = S, D = (0, e.cartesianDot)(q, b), P = (0, e.cartesianDot)(b, b), _ = D * D - P * ((0, e.cartesianDot)(q, q) - 1);
                if (!(_ < 0)) {
                    var h = (0, i.sqrt)(_), x = (0, e.cartesianScale)(b, (-D - h) / P);
                    if ((0, e.cartesianAddInPlace)(x, q), x = (0, e.spherical)(x), !a) return x;
                    var A, I = n[0], m = r[0], C = n[1], M = r[1];
                    m < I && (A = I, I = m, m = A);
                    var j = m - I, y = (0, i.abs)(j - i.pi) < i.epsilon;
                    if (!y && M < C && (A = C, C = M, M = A), y || j < i.epsilon ? y ? C + M > 0 ^ x[1] < ((0, i.abs)(x[0] - I) < i.epsilon ? C : M) : C <= x[1] && x[1] <= M : j > i.pi ^ (I <= x[0] && x[0] <= m)) {
                        var O = (0, e.cartesianScale)(b, (-D + h) / P);
                        return (0, e.cartesianAddInPlace)(O, q), [x, (0, e.spherical)(O)]
                    }
                }
            }

            function f(e, n) {
                var a = l ? r : i.pi - r, t = 0;
                return e < -a ? t |= 1 : e > a && (t |= 2), n < -a ? t |= 4 : n > a && (t |= 8), t
            }

            return (0, c.default)(u, function (e) {
                var n, r, t, c, s;
                return {
                    lineStart: function () {
                        c = t = !1, s = 1
                    }, point: function (d, v) {
                        var S, q = [d, v], E = u(d, v), b = l ? E ? 0 : f(d, v) : E ? f(d + (d < 0 ? i.pi : -i.pi), v) : 0;
                        if (!n && (c = t = E) && e.lineStart(), E !== t && (!(S = p(n, q)) || (0, a.default)(n, S) || (0, a.default)(q, S)) && (q[0] += i.epsilon, q[1] += i.epsilon, E = u(q[0], q[1])), E !== t) s = 0, E ? (e.lineStart(), S = p(q, n), e.point(S[0], S[1])) : (S = p(n, q), e.point(S[0], S[1]), e.lineEnd()), n = S; else if (o && n && l ^ E) {
                            var D;
                            b & r || !(D = p(q, n, !0)) || (s = 0, l ? (e.lineStart(), e.point(D[0][0], D[0][1]), e.point(D[1][0], D[1][1]), e.lineEnd()) : (e.point(D[1][0], D[1][1]), e.lineEnd(), e.lineStart(), e.point(D[0][0], D[0][1])))
                        }
                        !E || n && (0, a.default)(n, q) || e.point(q[0], q[1]), n = q, t = E, r = b
                    }, lineEnd: function () {
                        t && e.lineEnd(), n = null
                    }, clean: function () {
                        return s | (c && t) << 1
                    }
                }
            }, function (e, i, a, t) {
                (0, n.circleStream)(t, r, s, a, e, i)
            }, l ? [0, -r] : [-i.pi, r - i.pi])
        };
        var e = require("../cartesian"), n = require("../circle"), i = require("../math"), r = require("../pointEqual"), a = s(r), t = require("./index"), c = s(t);

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../cartesian": "V83Q", "../circle": "KcOR", "../math": "JQgf", "../pointEqual": "yH90", "./index": "J6h6"}], "w1ni": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r, f, i, t, u) {
            var n, s = e[0], l = e[1], o = 0, a = 1, c = r[0] - s, d = r[1] - l;
            if (n = f - s, c || !(n > 0)) {
                if (n /= c, c < 0) {
                    if (n < o) return;
                    n < a && (a = n)
                } else if (c > 0) {
                    if (n > a) return;
                    n > o && (o = n)
                }
                if (n = t - s, c || !(n < 0)) {
                    if (n /= c, c < 0) {
                        if (n > a) return;
                        n > o && (o = n)
                    } else if (c > 0) {
                        if (n < o) return;
                        n < a && (a = n)
                    }
                    if (n = i - l, d || !(n > 0)) {
                        if (n /= d, d < 0) {
                            if (n < o) return;
                            n < a && (a = n)
                        } else if (d > 0) {
                            if (n > a) return;
                            n > o && (o = n)
                        }
                        if (n = u - l, d || !(n < 0)) {
                            if (n /= d, d < 0) {
                                if (n > a) return;
                                n > o && (o = n)
                            } else if (d > 0) {
                                if (n < o) return;
                                n < a && (a = n)
                            }
                            return o > 0 && (e[0] = s + o * c, e[1] = l + o * d), a < 1 && (r[0] = s + a * c, r[1] = l + a * d), !0
                        }
                    }
                }
            }
        };
    }, {}], "jRQA": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = s;
        var n = require("../math"), t = require("./buffer"), e = l(t), r = require("./line"), i = l(r), o = require("./rejoin"), u = l(o), a = require("d3-array");

        function l(n) {
            return n && n.__esModule ? n : {default: n}
        }

        var f = 1e9, p = -f;

        function s(t, r, o, l) {
            function s(n, e) {
                return t <= n && n <= o && r <= e && e <= l
            }

            function c(n, e, i, u) {
                var a = 0, f = 0;
                if (null == n || (a = d(n, i)) !== (f = d(e, i)) || v(n, e) < 0 ^ i > 0) do {
                    u.point(0 === a || 3 === a ? t : o, a > 1 ? l : r)
                } while ((a = (a + i + 4) % 4) !== f); else u.point(e[0], e[1])
            }

            function d(e, i) {
                return (0, n.abs)(e[0] - t) < n.epsilon ? i > 0 ? 0 : 3 : (0, n.abs)(e[0] - o) < n.epsilon ? i > 0 ? 2 : 1 : (0, n.abs)(e[1] - r) < n.epsilon ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
            }

            function h(n, t) {
                return v(n.x, t.x)
            }

            function v(n, t) {
                var e = d(n, 1), r = d(t, 1);
                return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
            }

            return function (n) {
                var d, v, m, M, g, x, S, y, E, b, q, _ = n, j = (0, e.default)(), N = {
                    point: w, lineStart: function () {
                        N.point = O, v && v.push(m = []);
                        b = !0, E = !1, S = y = NaN
                    }, lineEnd: function () {
                        d && (O(M, g), x && E && j.rejoin(), d.push(j.result()));
                        N.point = w, E && _.lineEnd()
                    }, polygonStart: function () {
                        _ = j, d = [], v = [], q = !0
                    }, polygonEnd: function () {
                        var e = function () {
                            for (var n = 0, e = 0, r = v.length; e < r; ++e) for (var i, o, u = v[e], a = 1, f = u.length, p = u[0], s = p[0], c = p[1]; a < f; ++a) i = s, o = c, p = u[a], s = p[0], c = p[1], o <= l ? c > l && (s - i) * (l - o) > (c - o) * (t - i) && ++n : c <= l && (s - i) * (l - o) < (c - o) * (t - i) && --n;
                            return n
                        }(), r = q && e, i = (d = (0, a.merge)(d)).length;
                        (r || i) && (n.polygonStart(), r && (n.lineStart(), c(null, null, 1, n), n.lineEnd()), i && (0, u.default)(d, h, e, c, n), n.polygonEnd());
                        _ = n, d = v = m = null
                    }
                };

                function w(n, t) {
                    s(n, t) && _.point(n, t)
                }

                function O(n, e) {
                    var u = s(n, e);
                    if (v && m.push([n, e]), b) M = n, g = e, x = u, b = !1, u && (_.lineStart(), _.point(n, e)); else if (u && E) _.point(n, e); else {
                        var a = [S = Math.max(p, Math.min(f, S)), y = Math.max(p, Math.min(f, y))], c = [n = Math.max(p, Math.min(f, n)), e = Math.max(p, Math.min(f, e))];
                        (0, i.default)(a, c, t, r, o, l) ? (E || (_.lineStart(), _.point(a[0], a[1])), _.point(c[0], c[1]), u || _.lineEnd(), q = !1) : u && (_.lineStart(), _.point(n, e), q = !1)
                    }
                    S = n, y = e, E = u
                }

                return N
            }
        }
    }, {"../math": "JQgf", "./buffer": "jFd0", "./line": "w1ni", "./rejoin": "Nr15", "d3-array": "K0bd"}], "EodF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e, r, n, u = 0, l = 0, o = 960, a = 500;
            return n = {
                stream: function (n) {
                    return e && r === n ? e : e = (0, t.default)(u, l, o, a)(r = n)
                }, extent: function (t) {
                    return arguments.length ? (u = +t[0][0], l = +t[0][1], o = +t[1][0], a = +t[1][1], e = r = null, n) : [[u, l], [o, a]]
                }
            }
        };
        var e = require("./rectangle"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./rectangle": "jRQA"}], "bXUe": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return f.reset(), (0, u.default)(e, c), +f
        };
        var e = require("./adder"), n = d(e), t = require("./math"), a = require("./noop"), r = d(a), i = require("./stream"), u = d(i);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o, s, l, f = (0, n.default)(), c = {sphere: r.default, point: r.default, lineStart: p, lineEnd: r.default, polygonStart: r.default, polygonEnd: r.default};

        function p() {
            c.point = v, c.lineEnd = q
        }

        function q() {
            c.point = c.lineEnd = r.default
        }

        function v(e, n) {
            e *= t.radians, n *= t.radians, o = e, s = (0, t.sin)(n), l = (0, t.cos)(n), c.point = E
        }

        function E(e, n) {
            e *= t.radians, n *= t.radians;
            var a = (0, t.sin)(n), r = (0, t.cos)(n), i = (0, t.abs)(e - o), u = (0, t.cos)(i), d = r * (0, t.sin)(i), c = l * a - s * r * u, p = s * a + l * r * u;
            f.add((0, t.atan2)((0, t.sqrt)(d * d + c * c), p)), o = e, s = a, l = r
        }
    }, {"./adder": "fG8A", "./math": "JQgf", "./noop": "DUih", "./stream": "XQuq"}], "hTgK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r) {
            return u[0] = e, u[1] = r, (0, t.default)(n)
        };
        var e = require("./length"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = [null, null], n = {type: "LineString", coordinates: u};
    }, {"./length": "bXUe"}], "tRhb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r, n) {
            return (r && i.hasOwnProperty(r.type) ? i[r.type] : a)(r, n)
        };
        var r = require("./polygonContains"), n = u(r), t = require("./distance"), e = u(t), o = require("./math");

        function u(r) {
            return r && r.__esModule ? r : {default: r}
        }

        var i = {
            Feature: function (r, n) {
                return a(r.geometry, n)
            }, FeatureCollection: function (r, n) {
                for (var t = r.features, e = -1, o = t.length; ++e < o;) if (a(t[e].geometry, n)) return !0;
                return !1
            }
        }, f = {
            Sphere: function () {
                return !0
            }, Point: function (r, n) {
                return c(r.coordinates, n)
            }, MultiPoint: function (r, n) {
                for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) if (c(t[e], n)) return !0;
                return !1
            }, LineString: function (r, n) {
                return l(r.coordinates, n)
            }, MultiLineString: function (r, n) {
                for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) if (l(t[e], n)) return !0;
                return !1
            }, Polygon: function (r, n) {
                return s(r.coordinates, n)
            }, MultiPolygon: function (r, n) {
                for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) if (s(t[e], n)) return !0;
                return !1
            }, GeometryCollection: function (r, n) {
                for (var t = r.geometries, e = -1, o = t.length; ++e < o;) if (a(t[e], n)) return !0;
                return !1
            }
        };

        function a(r, n) {
            return !(!r || !f.hasOwnProperty(r.type)) && f[r.type](r, n)
        }

        function c(r, n) {
            return 0 === (0, e.default)(r, n)
        }

        function l(r, n) {
            var t = (0, e.default)(r[0], r[1]);
            return (0, e.default)(r[0], n) + (0, e.default)(n, r[1]) <= t + o.epsilon
        }

        function s(r, t) {
            return !!(0, n.default)(r.map(d), p(t))
        }

        function d(r) {
            return (r = r.map(p)).pop(), r
        }

        function p(r) {
            return [r[0] * o.radians, r[1] * o.radians]
        }
    }, {"./polygonContains": "GrwB", "./distance": "hTgK", "./math": "JQgf"}], "69Id": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = i, exports.graticule10 = o;
        var n = require("d3-array"), e = require("./math");

        function t(t, r, i) {
            var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
            return function (n) {
                return o.map(function (e) {
                    return [n, e]
                })
            }
        }

        function r(t, r, i) {
            var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
            return function (n) {
                return o.map(function (e) {
                    return [e, n]
                })
            }
        }

        function i() {
            var i, o, u, c, a, s, l, p, f, g, M, x, h = 10, m = h, d = 90, v = 360, j = 2.5;

            function y() {
                return {type: "MultiLineString", coordinates: b()}
            }

            function b() {
                return (0, n.range)((0, e.ceil)(c / d) * d, u, d).map(M).concat((0, n.range)((0, e.ceil)(p / v) * v, l, v).map(x)).concat((0, n.range)((0, e.ceil)(o / h) * h, i, h).filter(function (n) {
                    return (0, e.abs)(n % d) > e.epsilon
                }).map(f)).concat((0, n.range)((0, e.ceil)(s / m) * m, a, m).filter(function (n) {
                    return (0, e.abs)(n % v) > e.epsilon
                }).map(g))
            }

            return y.lines = function () {
                return b().map(function (n) {
                    return {type: "LineString", coordinates: n}
                })
            }, y.outline = function () {
                return {type: "Polygon", coordinates: [M(c).concat(x(l).slice(1), M(u).reverse().slice(1), x(p).reverse().slice(1))]}
            }, y.extent = function (n) {
                return arguments.length ? y.extentMajor(n).extentMinor(n) : y.extentMinor()
            }, y.extentMajor = function (n) {
                return arguments.length ? (c = +n[0][0], u = +n[1][0], p = +n[0][1], l = +n[1][1], c > u && (n = c, c = u, u = n), p > l && (n = p, p = l, l = n), y.precision(j)) : [[c, p], [u, l]]
            }, y.extentMinor = function (n) {
                return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], a = +n[1][1], o > i && (n = o, o = i, i = n), s > a && (n = s, s = a, a = n), y.precision(j)) : [[o, s], [i, a]]
            }, y.step = function (n) {
                return arguments.length ? y.stepMajor(n).stepMinor(n) : y.stepMinor()
            }, y.stepMajor = function (n) {
                return arguments.length ? (d = +n[0], v = +n[1], y) : [d, v]
            }, y.stepMinor = function (n) {
                return arguments.length ? (h = +n[0], m = +n[1], y) : [h, m]
            }, y.precision = function (n) {
                return arguments.length ? (j = +n, f = t(s, a, 90), g = r(o, i, j), M = t(p, l, 90), x = r(c, u, j), y) : j
            }, y.extentMajor([[-180, -90 + e.epsilon], [180, 90 - e.epsilon]]).extentMinor([[-180, -80 - e.epsilon], [180, 80 + e.epsilon]])
        }

        function o() {
            return i()()
        }
    }, {"d3-array": "K0bd", "./math": "JQgf"}], "uuLr": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (s, r) {
            var n = s[0] * e.radians, a = s[1] * e.radians, i = r[0] * e.radians, t = r[1] * e.radians, d = (0, e.cos)(a), o = (0, e.sin)(a), u = (0, e.cos)(t), c = (0, e.sin)(t), v = d * (0, e.cos)(n), f = d * (0, e.sin)(n), g = u * (0, e.cos)(i), h = u * (0, e.sin)(i), l = 2 * (0, e.asin)((0, e.sqrt)((0, e.haversin)(t - a) + d * u * (0, e.haversin)(i - n))), p = (0, e.sin)(l), q = l ? function (s) {
                var r = (0, e.sin)(s *= l) / p, n = (0, e.sin)(l - s) / p, a = n * v + r * g, i = n * f + r * h, t = n * o + r * c;
                return [(0, e.atan2)(i, a) * e.degrees, (0, e.atan2)(t, (0, e.sqrt)(a * a + i * i)) * e.degrees]
            } : function () {
                return [n * e.degrees, a * e.degrees]
            };
            return q.distance = l, q
        };
        var e = require("./math");
    }, {"./math": "JQgf"}], "ueEe": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../adder"), t = i(e), n = require("../math"), r = require("../noop"), u = i(r);

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o, a, d, l, f = (0, t.default)(), c = (0, t.default)(), p = {
            point: u.default, lineStart: u.default, lineEnd: u.default, polygonStart: function () {
                p.lineStart = s, p.lineEnd = S
            }, polygonEnd: function () {
                p.lineStart = p.lineEnd = p.point = u.default, f.add((0, n.abs)(c)), c.reset()
            }, result: function () {
                var e = f / 2;
                return f.reset(), e
            }
        };

        function s() {
            p.point = v
        }

        function v(e, t) {
            p.point = E, o = d = e, a = l = t
        }

        function E(e, t) {
            c.add(l * e - d * t), d = e, l = t
        }

        function S() {
            E(o, a)
        }

        exports.default = p;
    }, {"../adder": "fG8A", "../math": "JQgf", "../noop": "DUih"}], "597t": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../noop"), t = n(e);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = 1 / 0, u = r, o = -r, l = o, a = {
            point: d, lineStart: t.default, lineEnd: t.default, polygonStart: t.default, polygonEnd: t.default, result: function () {
                var e = [[r, u], [o, l]];
                return o = l = -(u = r = 1 / 0), e
            }
        };

        function d(e, t) {
            e < r && (r = e), e > o && (o = e), t < u && (u = t), t > l && (l = t)
        }

        exports.default = a;
    }, {"../noop": "DUih"}], "PA8j": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var n, t, i, o, e = require("../math"), r = 0, u = 0, c = 0, f = 0, a = 0, l = 0, p = 0, s = 0, d = 0, v = {
            point: E, lineStart: N, lineEnd: y, polygonStart: function () {
                v.lineStart = g, v.lineEnd = x
            }, polygonEnd: function () {
                v.point = E, v.lineStart = N, v.lineEnd = y
            }, result: function () {
                var n = d ? [p / d, s / d] : l ? [f / l, a / l] : c ? [r / c, u / c] : [NaN, NaN];
                return r = u = c = f = a = l = p = s = d = 0, n
            }
        };

        function E(n, t) {
            r += n, u += t, ++c
        }

        function N() {
            v.point = S
        }

        function S(n, t) {
            v.point = q, E(i = n, o = t)
        }

        function q(n, t) {
            var r = n - i, u = t - o, c = (0, e.sqrt)(r * r + u * u);
            f += c * (i + n) / 2, a += c * (o + t) / 2, l += c, E(i = n, o = t)
        }

        function y() {
            v.point = E
        }

        function g() {
            v.point = _
        }

        function x() {
            b(n, t)
        }

        function _(e, r) {
            v.point = b, E(n = i = e, t = o = r)
        }

        function b(n, t) {
            var r = n - i, u = t - o, c = (0, e.sqrt)(r * r + u * u);
            f += c * (i + n) / 2, a += c * (o + t) / 2, l += c, p += (c = o * n - i * t) * (i + n), s += c * (o + t), d += 3 * c, E(i = n, o = t)
        }

        exports.default = v;
    }, {"../math": "JQgf"}], "r69t": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = o;
        var t = require("../math"), i = require("../noop"), e = n(i);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function o(t) {
            this._context = t
        }

        o.prototype = {
            _radius: 4.5, pointRadius: function (t) {
                return this._radius = t, this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._context.closePath(), this._point = NaN
            }, point: function (i, e) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(i, e), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(i, e);
                        break;
                    default:
                        this._context.moveTo(i + this._radius, e), this._context.arc(i, e, this._radius, 0, t.tau)
                }
            }, result: e.default
        };
    }, {"../math": "JQgf", "../noop": "DUih"}], "SjQK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("../adder"), e = o(t), n = require("../math"), r = require("../noop"), u = o(r);

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var i, l, a, d, f, c = (0, e.default)(), p = {
            point: u.default, lineStart: function () {
                p.point = s
            }, lineEnd: function () {
                i && q(l, a), p.point = u.default
            }, polygonStart: function () {
                i = !0
            }, polygonEnd: function () {
                i = null
            }, result: function () {
                var t = +c;
                return c.reset(), t
            }
        };

        function s(t, e) {
            p.point = q, l = d = t, a = f = e
        }

        function q(t, e) {
            d -= t, f -= e, c.add((0, n.sqrt)(d * d + f * f)), d = t, f = e
        }

        exports.default = p;
    }, {"../adder": "fG8A", "../math": "JQgf", "../noop": "DUih"}], "cxj1": [function (require, module, exports) {
        "use strict";

        function t() {
            this._string = []
        }

        function i(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = t, t.prototype = {
            _radius: 4.5, _circle: i(4.5), pointRadius: function (t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            }, polygonStart: function () {
                this._line = 0
            }, polygonEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                0 === this._line && this._string.push("Z"), this._point = NaN
            }, point: function (t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        null == this._circle && (this._circle = i(this._radius)), this._string.push("M", t, ",", n, this._circle)
                }
            }, result: function () {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        };
    }, {}], "JRMk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, u) {
            var r, l, f = 4.5;

            function d(e) {
                return e && ("function" == typeof f && l.pointRadius(+f.apply(this, arguments)), (0, n.default)(e, r(l))), l.result()
            }

            return d.area = function (e) {
                return (0, n.default)(e, r(i.default)), i.default.result()
            }, d.measure = function (e) {
                return (0, n.default)(e, r(p.default)), p.default.result()
            }, d.bounds = function (e) {
                return (0, n.default)(e, r(o.default)), o.default.result()
            }, d.centroid = function (e) {
                return (0, n.default)(e, r(a.default)), a.default.result()
            }, d.projection = function (u) {
                return arguments.length ? (r = null == u ? (e = null, t.default) : (e = u).stream, d) : e
            }, d.context = function (e) {
                return arguments.length ? (l = null == e ? (u = null, new y.default) : new s.default(u = e), "function" != typeof f && l.pointRadius(f), d) : u
            }, d.pointRadius = function (e) {
                return arguments.length ? (f = "function" == typeof e ? e : (l.pointRadius(+e), +e), d) : f
            }, d.projection(e).context(u)
        };
        var e = require("../identity"), t = x(e), u = require("../stream"), n = x(u), r = require("./area"), i = x(r), l = require("./bounds"), o = x(l), f = require("./centroid"), a = x(f), d = require("./context"), s = x(d), c = require("./measure"), p = x(c), q = require("./string"), y = x(q);

        function x(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"../identity": "NNW9", "../stream": "XQuq", "./area": "ueEe", "./bounds": "597t", "./centroid": "PA8j", "./context": "r69t", "./measure": "SjQK", "./string": "cxj1"}], "pfKH": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return function (r) {
                var e = new n;
                for (var o in t) e[o] = t[o];
                return e.stream = r, e
            }
        }

        function n() {
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n) {
            return {stream: t(n)}
        }, exports.transformer = t, n.prototype = {
            constructor: n, point: function (t, n) {
                this.stream.point(t, n)
            }, sphere: function () {
                this.stream.sphere()
            }, lineStart: function () {
                this.stream.lineStart()
            }, lineEnd: function () {
                this.stream.lineEnd()
            }, polygonStart: function () {
                this.stream.polygonStart()
            }, polygonEnd: function () {
                this.stream.polygonEnd()
            }
        };
    }, {}], "Ycma": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.fitExtent = l, exports.fitSize = i, exports.fitWidth = s, exports.fitHeight = c;
        var t = require("../stream"), e = u(t), n = require("../path/bounds"), r = u(n);

        function u(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function a(t, n, u) {
            var a = t.clipExtent && t.clipExtent();
            return t.scale(150).translate([0, 0]), null != a && t.clipExtent(null), (0, e.default)(u, t.stream(r.default)), n(r.default.result()), null != a && t.clipExtent(a), t
        }

        function l(t, e, n) {
            return a(t, function (n) {
                var r = e[1][0] - e[0][0], u = e[1][1] - e[0][1], a = Math.min(r / (n[1][0] - n[0][0]), u / (n[1][1] - n[0][1])), l = +e[0][0] + (r - a * (n[1][0] + n[0][0])) / 2, i = +e[0][1] + (u - a * (n[1][1] + n[0][1])) / 2;
                t.scale(150 * a).translate([l, i])
            }, n)
        }

        function i(t, e, n) {
            return l(t, [[0, 0], e], n)
        }

        function s(t, e, n) {
            return a(t, function (n) {
                var r = +e, u = r / (n[1][0] - n[0][0]), a = (r - u * (n[1][0] + n[0][0])) / 2, l = -u * n[0][1];
                t.scale(150 * u).translate([a, l])
            }, n)
        }

        function c(t, e, n) {
            return a(t, function (n) {
                var r = +e, u = r / (n[1][1] - n[0][1]), a = -u * n[0][0], l = (r - u * (n[1][1] + n[0][1])) / 2;
                t.scale(150 * u).translate([a, l])
            }, n)
        }
    }, {"../stream": "XQuq", "../path/bounds": "597t"}], "nAh8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (n, t) {
            return +t ? a(n, t) : e(n)
        };
        var n = require("../cartesian"), t = require("../math"), i = require("../transform"), o = 16, r = (0, t.cos)(30 * t.radians);

        function e(n) {
            return (0, i.transformer)({
                point: function (t, i) {
                    t = n(t, i), this.stream.point(t[0], t[1])
                }
            })
        }

        function a(i, e) {
            function a(n, o, u, s, c, f, p, l, d, v, E, S, b, y) {
                var g = p - n, m = l - o, q = g * g + m * m;
                if (q > 4 * e && b--) {
                    var h = s + v, x = c + E, N = f + S, _ = (0, t.sqrt)(h * h + x * x + N * N), j = (0, t.asin)(N /= _), M = (0, t.abs)((0, t.abs)(N) - 1) < t.epsilon || (0, t.abs)(u - d) < t.epsilon ? (u + d) / 2 : (0, t.atan2)(x, h), O = i(M, j), P = O[0], k = O[1], w = P - n, z = k - o, A = m * w - g * z;
                    (A * A / q > e || (0, t.abs)((g * w + m * z) / q - .5) > .3 || s * v + c * E + f * S < r) && (a(n, o, u, s, c, f, P, k, M, h /= _, x /= _, N, b, y), y.point(P, k), a(P, k, M, h, x, N, p, l, d, v, E, S, b, y))
                }
            }

            return function (t) {
                var r, e, u, s, c, f, p, l, d, v, E, S, b = {
                    point: y, lineStart: g, lineEnd: q, polygonStart: function () {
                        t.polygonStart(), b.lineStart = h
                    }, polygonEnd: function () {
                        t.polygonEnd(), b.lineStart = g
                    }
                };

                function y(n, o) {
                    n = i(n, o), t.point(n[0], n[1])
                }

                function g() {
                    l = NaN, b.point = m, t.lineStart()
                }

                function m(r, e) {
                    var u = (0, n.cartesian)([r, e]), s = i(r, e);
                    a(l, d, p, v, E, S, l = s[0], d = s[1], p = r, v = u[0], E = u[1], S = u[2], o, t), t.point(l, d)
                }

                function q() {
                    b.point = y, t.lineEnd()
                }

                function h() {
                    g(), b.point = x, b.lineEnd = N
                }

                function x(n, t) {
                    m(r = n, t), e = l, u = d, s = v, c = E, f = S, b.point = m
                }

                function N() {
                    a(l, d, p, v, E, S, e, u, r, s, c, f, o, t), b.lineEnd = q, q()
                }

                return b
            }
        }
    }, {"../cartesian": "V83Q", "../math": "JQgf", "../transform": "pfKH"}], "0Ktp": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = _, exports.projectionMutator = E;
        var n = require("../clip/antimeridian"), e = v(n), t = require("../clip/circle"), r = v(t), i = require("../clip/rectangle"), u = v(i), a = require("../compose"), l = v(a), o = require("../identity"), f = v(o), c = require("../math"), s = require("../rotation"), d = require("../transform"), g = require("./fit"), p = require("./resample"), h = v(p);

        function v(n) {
            return n && n.__esModule ? n : {default: n}
        }

        var q = (0, d.transformer)({
            point: function (n, e) {
                this.stream.point(n * c.radians, e * c.radians)
            }
        });

        function m(n) {
            return (0, d.transformer)({
                point: function (e, t) {
                    var r = n(e, t);
                    return this.stream.point(r[0], r[1])
                }
            })
        }

        function x(n, e, t) {
            function r(r, i) {
                return [e + n * r, t - n * i]
            }

            return r.invert = function (r, i) {
                return [(r - e) / n, (t - i) / n]
            }, r
        }

        function y(n, e, t, r) {
            var i = (0, c.cos)(r), u = (0, c.sin)(r), a = i * n, l = u * n, o = i / n, f = u / n, s = (u * t - i * e) / n, d = (u * e + i * t) / n;

            function g(n, r) {
                return [a * n - l * r + e, t - l * n - a * r]
            }

            return g.invert = function (n, e) {
                return [o * n - f * e + s, d - f * n - o * e]
            }, g
        }

        function _(n) {
            return E(function () {
                return n
            })()
        }

        function E(n) {
            var t, i, a, o, d, p, v, _, E, M, j = 150, z = 480, H = 250, S = 0, W = 0, b = 0, A = 0, O = 0, P = 0, R = null, k = e.default, w = null, B = f.default, C = .5;

            function D(n) {
                return _(n[0] * c.radians, n[1] * c.radians)
            }

            function F(n) {
                return (n = _.invert(n[0], n[1])) && [n[0] * c.degrees, n[1] * c.degrees]
            }

            function G() {
                var n = y(j, 0, 0, P).apply(null, t(S, W)), e = (P ? y : x)(j, z - n[0], H - n[1], P);
                return i = (0, s.rotateRadians)(b, A, O), v = (0, l.default)(t, e), _ = (0, l.default)(i, v), p = (0, h.default)(v, C), I()
            }

            function I() {
                return E = M = null, D
            }

            return D.stream = function (n) {
                return E && M === n ? E : E = q(m(i)(k(p(B(M = n)))))
            }, D.preclip = function (n) {
                return arguments.length ? (k = n, R = void 0, I()) : k
            }, D.postclip = function (n) {
                return arguments.length ? (B = n, w = a = o = d = null, I()) : B
            }, D.clipAngle = function (n) {
                return arguments.length ? (k = +n ? (0, r.default)(R = n * c.radians) : (R = null, e.default), I()) : R * c.degrees
            }, D.clipExtent = function (n) {
                return arguments.length ? (B = null == n ? (w = a = o = d = null, f.default) : (0, u.default)(w = +n[0][0], a = +n[0][1], o = +n[1][0], d = +n[1][1]), I()) : null == w ? null : [[w, a], [o, d]]
            }, D.scale = function (n) {
                return arguments.length ? (j = +n, G()) : j
            }, D.translate = function (n) {
                return arguments.length ? (z = +n[0], H = +n[1], G()) : [z, H]
            }, D.center = function (n) {
                return arguments.length ? (S = n[0] % 360 * c.radians, W = n[1] % 360 * c.radians, G()) : [S * c.degrees, W * c.degrees]
            }, D.rotate = function (n) {
                return arguments.length ? (b = n[0] % 360 * c.radians, A = n[1] % 360 * c.radians, O = n.length > 2 ? n[2] % 360 * c.radians : 0, G()) : [b * c.degrees, A * c.degrees, O * c.degrees]
            }, D.angle = function (n) {
                return arguments.length ? (P = n % 360 * c.radians, G()) : P * c.degrees
            }, D.precision = function (n) {
                return arguments.length ? (p = (0, h.default)(v, C = n * n), I()) : (0, c.sqrt)(C)
            }, D.fitExtent = function (n, e) {
                return (0, g.fitExtent)(D, n, e)
            }, D.fitSize = function (n, e) {
                return (0, g.fitSize)(D, n, e)
            }, D.fitWidth = function (n, e) {
                return (0, g.fitWidth)(D, n, e)
            }, D.fitHeight = function (n, e) {
                return (0, g.fitHeight)(D, n, e)
            }, function () {
                return t = n.apply(this, arguments), D.invert = t.invert && F, G()
            }
        }
    }, {"../clip/antimeridian": "/1Go", "../clip/circle": "lcCJ", "../clip/rectangle": "jRQA", "../compose": "8tY9", "../identity": "NNW9", "../math": "JQgf", "../rotation": "LqUY", "../transform": "pfKH", "./fit": "Ycma", "./resample": "nAh8"}], "Q2ed": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.conicProjection = t;
        var e = require("../math"), r = require("./index");

        function t(t) {
            var n = 0, i = e.pi / 3, o = (0, r.projectionMutator)(t), a = o(n, i);
            return a.parallels = function (r) {
                return arguments.length ? o(n = r[0] * e.radians, i = r[1] * e.radians) : [n * e.degrees, i * e.degrees]
            }, a
        }
    }, {"../math": "JQgf", "./index": "0Ktp"}], "JFau": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.cylindricalEqualAreaRaw = e;
        var r = require("../math");

        function e(e) {
            var n = (0, r.cos)(e);

            function t(e, t) {
                return [e * n, (0, r.sin)(t) / n]
            }

            return t.invert = function (e, t) {
                return [e / n, (0, r.asin)(t * n)]
            }, t
        }
    }, {"../math": "JQgf"}], "/TNC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.conicEqualAreaRaw = i, exports.default = function () {
            return (0, e.conicProjection)(i).scale(155.424).center([0, 33.6442])
        };
        var r = require("../math"), e = require("./conic"), n = require("./cylindricalEqualArea");

        function i(e, i) {
            var a = (0, r.sin)(e), t = (a + (0, r.sin)(i)) / 2;
            if ((0, r.abs)(t) < r.epsilon) return (0, n.cylindricalEqualAreaRaw)(e);
            var c = 1 + a * (2 * t - a), s = (0, r.sqrt)(c) / t;

            function u(e, n) {
                var i = (0, r.sqrt)(c - 2 * t * (0, r.sin)(n)) / t;
                return [i * (0, r.sin)(e *= t), s - i * (0, r.cos)(e)]
            }

            return u.invert = function (e, n) {
                var i = s - n;
                return [(0, r.atan2)(e, (0, r.abs)(i)) / t * (0, r.sign)(i), (0, r.asin)((c - (e * e + i * i) * t * t) / (2 * t))]
            }, u
        }
    }, {"../math": "JQgf", "./conic": "Q2ed", "./cylindricalEqualArea": "JFau"}], "cpQd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return (0, t.default)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        };
        var e = require("./conicEqualArea"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./conicEqualArea": "/TNC"}], "RPZI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n, r, o, u, s, c, f = (0, e.default)(), p = (0, i.default)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), v = (0, i.default)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), d = {
                point: function (t, n) {
                    c = [t, n]
                }
            };

            function h(t) {
                var n = t[0], e = t[1];
                return c = null, o.point(n, e), c || (u.point(n, e), c) || (s.point(n, e), c)
            }

            function g() {
                return n = r = null, h
            }

            return h.invert = function (t) {
                var n = f.scale(), e = f.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
                return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? p : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? v : f).invert(t)
            }, h.stream = function (t) {
                return n && r === t ? n : n = l([f.stream(r = t), p.stream(t), v.stream(t)])
            }, h.precision = function (t) {
                return arguments.length ? (f.precision(t), p.precision(t), v.precision(t), g()) : f.precision()
            }, h.scale = function (t) {
                return arguments.length ? (f.scale(t), p.scale(.35 * t), v.scale(t), h.translate(f.translate())) : f.scale()
            }, h.translate = function (n) {
                if (!arguments.length) return f.translate();
                var e = f.scale(), r = +n[0], i = +n[1];
                return o = f.translate(n).clipExtent([[r - .455 * e, i - .238 * e], [r + .455 * e, i + .238 * e]]).stream(d), u = p.translate([r - .307 * e, i + .201 * e]).clipExtent([[r - .425 * e + t.epsilon, i + .12 * e + t.epsilon], [r - .214 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), s = v.translate([r - .205 * e, i + .212 * e]).clipExtent([[r - .214 * e + t.epsilon, i + .166 * e + t.epsilon], [r - .115 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), g()
            }, h.fitExtent = function (t, n) {
                return (0, a.fitExtent)(h, t, n)
            }, h.fitSize = function (t, n) {
                return (0, a.fitSize)(h, t, n)
            }, h.fitWidth = function (t, n) {
                return (0, a.fitWidth)(h, t, n)
            }, h.fitHeight = function (t, n) {
                return (0, a.fitHeight)(h, t, n)
            }, h.scale(1070)
        };
        var t = require("../math"), n = require("./albers"), e = o(n), r = require("./conicEqualArea"), i = o(r), a = require("./fit");

        function o(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function l(t) {
            var n = t.length;
            return {
                point: function (e, r) {
                    for (var i = -1; ++i < n;) t[i].point(e, r)
                }, sphere: function () {
                    for (var e = -1; ++e < n;) t[e].sphere()
                }, lineStart: function () {
                    for (var e = -1; ++e < n;) t[e].lineStart()
                }, lineEnd: function () {
                    for (var e = -1; ++e < n;) t[e].lineEnd()
                }, polygonStart: function () {
                    for (var e = -1; ++e < n;) t[e].polygonStart()
                }, polygonEnd: function () {
                    for (var e = -1; ++e < n;) t[e].polygonEnd()
                }
            }
        }
    }, {"../math": "JQgf", "./albers": "cpQd", "./conicEqualArea": "/TNC", "./fit": "Ycma"}], "WksQ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.azimuthalRaw = t, exports.azimuthalInvert = n;
        var r = require("../math");

        function t(t) {
            return function (n, e) {
                var s = (0, r.cos)(n), u = (0, r.cos)(e), a = t(s * u);
                return [a * u * (0, r.sin)(n), a * (0, r.sin)(e)]
            }
        }

        function n(t) {
            return function (n, e) {
                var s = (0, r.sqrt)(n * n + e * e), u = t(s), a = (0, r.sin)(u), i = (0, r.cos)(u);
                return [(0, r.atan2)(n * a, s * i), (0, r.asin)(s && e * a / s)]
            }
        }
    }, {"../math": "JQgf"}], "OyGo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.azimuthalEqualAreaRaw = void 0, exports.default = function () {
            return (0, a.default)(i).scale(124.75).clipAngle(179.999)
        };
        var e = require("../math"), r = require("./azimuthal"), t = require("./index"), a = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var i = exports.azimuthalEqualAreaRaw = (0, r.azimuthalRaw)(function (r) {
            return (0, e.sqrt)(2 / (1 + r))
        });
        i.invert = (0, r.azimuthalInvert)(function (r) {
            return 2 * (0, e.asin)(r / 2)
        });
    }, {"../math": "JQgf", "./azimuthal": "WksQ", "./index": "0Ktp"}], "mwct": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.azimuthalEquidistantRaw = void 0, exports.default = function () {
            return (0, u.default)(i).scale(79.4188).clipAngle(179.999)
        };
        var e = require("../math"), t = require("./azimuthal"), r = require("./index"), u = a(r);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var i = exports.azimuthalEquidistantRaw = (0, t.azimuthalRaw)(function (t) {
            return (t = (0, e.acos)(t)) && t / (0, e.sin)(t)
        });
        i.invert = (0, t.azimuthalInvert)(function (e) {
            return e
        });
    }, {"../math": "JQgf", "./azimuthal": "WksQ", "./index": "0Ktp"}], "n0Ot": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.mercatorRaw = l, exports.default = function () {
            return i(l).scale(961 / t.tau)
        }, exports.mercatorProjection = i;
        var t = require("../math"), e = require("../rotation"), n = a(e), r = require("./index"), u = a(r);

        function a(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function l(e, n) {
            return [e, (0, t.log)((0, t.tan)((t.halfPi + n) / 2))]
        }

        function i(e) {
            var r, a, i, o = (0, u.default)(e), c = o.center, f = o.scale, s = o.translate, h = o.clipExtent, x = null;

            function p() {
                var u = t.pi * f(), c = o((0, n.default)(o.rotate()).invert([0, 0]));
                return h(null == x ? [[c[0] - u, c[1] - u], [c[0] + u, c[1] + u]] : e === l ? [[Math.max(c[0] - u, x), r], [Math.min(c[0] + u, a), i]] : [[x, Math.max(c[1] - u, r)], [a, Math.min(c[1] + u, i)]])
            }

            return o.scale = function (t) {
                return arguments.length ? (f(t), p()) : f()
            }, o.translate = function (t) {
                return arguments.length ? (s(t), p()) : s()
            }, o.center = function (t) {
                return arguments.length ? (c(t), p()) : c()
            }, o.clipExtent = function (t) {
                return arguments.length ? (null == t ? x = r = a = i = null : (x = +t[0][0], r = +t[0][1], a = +t[1][0], i = +t[1][1]), p()) : null == x ? null : [[x, r], [a, i]]
            }, p()
        }

        l.invert = function (e, n) {
            return [e, 2 * (0, t.atan)((0, t.exp)(n)) - t.halfPi]
        };
    }, {"../math": "JQgf", "../rotation": "LqUY", "./index": "0Ktp"}], "kVD1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.conicConformalRaw = i, exports.default = function () {
            return (0, e.conicProjection)(i).scale(109.5).parallels([30, 30])
        };
        var r = require("../math"), e = require("./conic"), n = require("./mercator");

        function o(e) {
            return (0, r.tan)((r.halfPi + e) / 2)
        }

        function i(e, i) {
            var t = (0, r.cos)(e), a = e === i ? (0, r.sin)(e) : (0, r.log)(t / (0, r.cos)(i)) / (0, r.log)(o(i) / o(e)), s = t * (0, r.pow)(o(e), a) / a;
            if (!a) return n.mercatorRaw;

            function c(e, n) {
                s > 0 ? n < -r.halfPi + r.epsilon && (n = -r.halfPi + r.epsilon) : n > r.halfPi - r.epsilon && (n = r.halfPi - r.epsilon);
                var i = s / (0, r.pow)(o(n), a);
                return [i * (0, r.sin)(a * e), s - i * (0, r.cos)(a * e)]
            }

            return c.invert = function (e, n) {
                var o = s - n, i = (0, r.sign)(a) * (0, r.sqrt)(e * e + o * o);
                return [(0, r.atan2)(e, (0, r.abs)(o)) / a * (0, r.sign)(o), 2 * (0, r.atan)((0, r.pow)(s / i, 1 / a)) - r.halfPi]
            }, c
        }
    }, {"../math": "JQgf", "./conic": "Q2ed", "./mercator": "n0Ot"}], "RMXQ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.equirectangularRaw = u, exports.default = function () {
            return (0, r.default)(u).scale(152.63)
        };
        var e = require("./index"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e, r) {
            return [e, r]
        }

        u.invert = u;
    }, {"./index": "0Ktp"}], "TJ85": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.conicEquidistantRaw = t, exports.default = function () {
            return (0, e.conicProjection)(t).scale(131.154).center([0, 13.9389])
        };
        var r = require("../math"), e = require("./conic"), n = require("./equirectangular");

        function t(e, t) {
            var i = (0, r.cos)(e), u = e === t ? (0, r.sin)(e) : (i - (0, r.cos)(t)) / (t - e), c = i / u + e;
            if ((0, r.abs)(u) < r.epsilon) return n.equirectangularRaw;

            function a(e, n) {
                var t = c - n, i = u * e;
                return [t * (0, r.sin)(i), c - t * (0, r.cos)(i)]
            }

            return a.invert = function (e, n) {
                var t = c - n;
                return [(0, r.atan2)(e, (0, r.abs)(t)) / u * (0, r.sign)(t), c - (0, r.sign)(u) * (0, r.sqrt)(e * e + t * t)]
            }, a
        }
    }, {"../math": "JQgf", "./conic": "Q2ed", "./equirectangular": "RMXQ"}], "qrWJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.equalEarthRaw = f, exports.default = function () {
            return (0, r.default)(f).scale(177.158)
        };
        var e = require("./index.js"), r = n(e), t = require("../math.js");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var s = 1.340264, u = -.081106, a = 893e-6, i = .003796, o = (0, t.sqrt)(3) / 2, c = 12;

        function f(e, r) {
            var n = (0, t.asin)(o * (0, t.sin)(r)), c = n * n, f = c * c * c;
            return [e * (0, t.cos)(n) / (o * (s + 3 * u * c + f * (7 * a + 9 * i * c))), n * (s + u * c + f * (a + i * c))]
        }

        f.invert = function (e, r) {
            for (var n, f = r, l = f * f, d = l * l * l, v = 0; v < c && (d = (l = (f -= n = (f * (s + u * l + d * (a + i * l)) - r) / (s + 3 * u * l + d * (7 * a + 9 * i * l))) * f) * l * l, !((0, t.abs)(n) < t.epsilon2)); ++v) ;
            return [o * e * (s + 3 * u * l + d * (7 * a + 9 * i * l)) / (0, t.cos)(f), (0, t.asin)((0, t.sin)(f) / o)]
        };
    }, {"./index.js": "0Ktp", "../math.js": "JQgf"}], "KVOo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.gnomonicRaw = i, exports.default = function () {
            return (0, n.default)(i).scale(144.049).clipAngle(60)
        };
        var e = require("../math"), r = require("./azimuthal"), t = require("./index"), n = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i(r, t) {
            var n = (0, e.cos)(t), u = (0, e.cos)(r) * n;
            return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u]
        }

        i.invert = (0, r.azimuthalInvert)(e.atan);
    }, {"../math": "JQgf", "./azimuthal": "WksQ", "./index": "0Ktp"}], "1X+K": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t, e, u, l, o, c, a = 1, s = 0, d = 0, h = 1, g = 1, p = r.default, x = null, m = r.default;

            function q() {
                return l = o = null, c
            }

            return c = {
                stream: function (t) {
                    return l && o === t ? l : l = p(m(o = t))
                }, postclip: function (n) {
                    return arguments.length ? (m = n, x = t = e = u = null, q()) : m
                }, clipExtent: function (i) {
                    return arguments.length ? (m = null == i ? (x = t = e = u = null, r.default) : (0, n.default)(x = +i[0][0], t = +i[0][1], e = +i[1][0], u = +i[1][1]), q()) : null == x ? null : [[x, t], [e, u]]
                }, scale: function (t) {
                    return arguments.length ? (p = f((a = +t) * h, a * g, s, d), q()) : a
                }, translate: function (t) {
                    return arguments.length ? (p = f(a * h, a * g, s = +t[0], d = +t[1]), q()) : [s, d]
                }, reflectX: function (t) {
                    return arguments.length ? (p = f(a * (h = t ? -1 : 1), a * g, s, d), q()) : h < 0
                }, reflectY: function (t) {
                    return arguments.length ? (p = f(a * h, a * (g = t ? -1 : 1), s, d), q()) : g < 0
                }, fitExtent: function (t, n) {
                    return (0, i.fitExtent)(c, t, n)
                }, fitSize: function (t, n) {
                    return (0, i.fitSize)(c, t, n)
                }, fitWidth: function (t, n) {
                    return (0, i.fitWidth)(c, t, n)
                }, fitHeight: function (t, n) {
                    return (0, i.fitHeight)(c, t, n)
                }
            }
        };
        var t = require("../clip/rectangle"), n = l(t), e = require("../identity"), r = l(e), u = require("../transform"), i = require("./fit");

        function l(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function f(t, n, e, i) {
            return 1 === t && 1 === n && 0 === e && 0 === i ? r.default : (0, u.transformer)({
                point: function (r, u) {
                    this.stream.point(r * t + e, u * n + i)
                }
            })
        }
    }, {"../clip/rectangle": "jRQA", "../identity": "NNW9", "../transform": "pfKH", "./fit": "Ycma"}], "Y5z/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.naturalEarth1Raw = n, exports.default = function () {
            return (0, r.default)(n).scale(175.295)
        };
        var e = require("./index"), r = u(e), t = require("../math");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function n(e, r) {
            var t = r * r, u = t * t;
            return [e * (.8707 - .131979 * t + u * (u * (.003971 * t - .001529 * u) - .013791)), r * (1.007226 + t * (.015085 + u * (.028874 * t - .044475 - .005916 * u)))]
        }

        n.invert = function (e, r) {
            var u, n = r, a = 25;
            do {
                var i = n * n, o = i * i;
                n -= u = (n * (1.007226 + i * (.015085 + o * (.028874 * i - .044475 - .005916 * o))) - r) / (1.007226 + i * (.045255 + o * (.259866 * i - .311325 - .005916 * 11 * o)))
            } while ((0, t.abs)(u) > t.epsilon && --a > 0);
            return [e / (.8707 + (i = n * n) * (i * (i * i * i * (.003971 - .001529 * i) - .013791) - .131979)), n]
        };
    }, {"./index": "0Ktp", "../math": "JQgf"}], "UMbg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.orthographicRaw = u, exports.default = function () {
            return (0, i.default)(u).scale(249.5).clipAngle(90 + e.epsilon)
        };
        var e = require("../math"), r = require("./azimuthal"), t = require("./index"), i = n(t);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(r, t) {
            return [(0, e.cos)(t) * (0, e.sin)(r), (0, e.sin)(t)]
        }

        u.invert = (0, r.azimuthalInvert)(e.asin);
    }, {"../math": "JQgf", "./azimuthal": "WksQ", "./index": "0Ktp"}], "vfE9": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.stereographicRaw = i, exports.default = function () {
            return (0, n.default)(i).scale(250).clipAngle(142)
        };
        var e = require("../math"), r = require("./azimuthal"), t = require("./index"), n = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i(r, t) {
            var n = (0, e.cos)(t), u = 1 + (0, e.cos)(r) * n;
            return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u]
        }

        i.invert = (0, r.azimuthalInvert)(function (r) {
            return 2 * (0, e.atan)(r)
        });
    }, {"../math": "JQgf", "./azimuthal": "WksQ", "./index": "0Ktp"}], "o0eF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.transverseMercatorRaw = t, exports.default = function () {
            var e = (0, r.mercatorProjection)(t), n = e.center, a = e.rotate;
            return e.center = function (e) {
                return arguments.length ? n([-e[1], e[0]]) : [(e = n())[1], -e[0]]
            }, e.rotate = function (e) {
                return arguments.length ? a([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : [(e = a())[0], e[1], e[2] - 90]
            }, a([0, 0, 90]).scale(159.155)
        };
        var e = require("../math"), r = require("./mercator");

        function t(r, t) {
            return [(0, e.log)((0, e.tan)((e.halfPi + t) / 2)), -r]
        }

        t.invert = function (r, t) {
            return [-t, 2 * (0, e.atan)((0, e.exp)(r)) - e.halfPi]
        };
    }, {"../math": "JQgf", "./mercator": "n0Ot"}], "/Ah6": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./area");
        Object.defineProperty(exports, "geoArea", {
            enumerable: !0, get: function () {
                return S(e).default
            }
        });
        var r = require("./bounds");
        Object.defineProperty(exports, "geoBounds", {
            enumerable: !0, get: function () {
                return S(r).default
            }
        });
        var t = require("./centroid");
        Object.defineProperty(exports, "geoCentroid", {
            enumerable: !0, get: function () {
                return S(t).default
            }
        });
        var n = require("./circle");
        Object.defineProperty(exports, "geoCircle", {
            enumerable: !0, get: function () {
                return S(n).default
            }
        });
        var o = require("./clip/antimeridian");
        Object.defineProperty(exports, "geoClipAntimeridian", {
            enumerable: !0, get: function () {
                return S(o).default
            }
        });
        var u = require("./clip/circle");
        Object.defineProperty(exports, "geoClipCircle", {
            enumerable: !0, get: function () {
                return S(u).default
            }
        });
        var a = require("./clip/extent");
        Object.defineProperty(exports, "geoClipExtent", {
            enumerable: !0, get: function () {
                return S(a).default
            }
        });
        var i = require("./clip/rectangle");
        Object.defineProperty(exports, "geoClipRectangle", {
            enumerable: !0, get: function () {
                return S(i).default
            }
        });
        var c = require("./contains");
        Object.defineProperty(exports, "geoContains", {
            enumerable: !0, get: function () {
                return S(c).default
            }
        });
        var l = require("./distance");
        Object.defineProperty(exports, "geoDistance", {
            enumerable: !0, get: function () {
                return S(l).default
            }
        });
        var f = require("./graticule");
        Object.defineProperty(exports, "geoGraticule", {
            enumerable: !0, get: function () {
                return S(f).default
            }
        }), Object.defineProperty(exports, "geoGraticule10", {
            enumerable: !0, get: function () {
                return f.graticule10
            }
        });
        var p = require("./interpolate");
        Object.defineProperty(exports, "geoInterpolate", {
            enumerable: !0, get: function () {
                return S(p).default
            }
        });
        var g = require("./length");
        Object.defineProperty(exports, "geoLength", {
            enumerable: !0, get: function () {
                return S(g).default
            }
        });
        var d = require("./path/index");
        Object.defineProperty(exports, "geoPath", {
            enumerable: !0, get: function () {
                return S(d).default
            }
        });
        var b = require("./projection/albers");
        Object.defineProperty(exports, "geoAlbers", {
            enumerable: !0, get: function () {
                return S(b).default
            }
        });
        var s = require("./projection/albersUsa");
        Object.defineProperty(exports, "geoAlbersUsa", {
            enumerable: !0, get: function () {
                return S(s).default
            }
        });
        var m = require("./projection/azimuthalEqualArea");
        Object.defineProperty(exports, "geoAzimuthalEqualArea", {
            enumerable: !0, get: function () {
                return S(m).default
            }
        }), Object.defineProperty(exports, "geoAzimuthalEqualAreaRaw", {
            enumerable: !0, get: function () {
                return m.azimuthalEqualAreaRaw
            }
        });
        var j = require("./projection/azimuthalEquidistant");
        Object.defineProperty(exports, "geoAzimuthalEquidistant", {
            enumerable: !0, get: function () {
                return S(j).default
            }
        }), Object.defineProperty(exports, "geoAzimuthalEquidistantRaw", {
            enumerable: !0, get: function () {
                return j.azimuthalEquidistantRaw
            }
        });
        var q = require("./projection/conicConformal");
        Object.defineProperty(exports, "geoConicConformal", {
            enumerable: !0, get: function () {
                return S(q).default
            }
        }), Object.defineProperty(exports, "geoConicConformalRaw", {
            enumerable: !0, get: function () {
                return q.conicConformalRaw
            }
        });
        var x = require("./projection/conicEqualArea");
        Object.defineProperty(exports, "geoConicEqualArea", {
            enumerable: !0, get: function () {
                return S(x).default
            }
        }), Object.defineProperty(exports, "geoConicEqualAreaRaw", {
            enumerable: !0, get: function () {
                return x.conicEqualAreaRaw
            }
        });
        var P = require("./projection/conicEquidistant");
        Object.defineProperty(exports, "geoConicEquidistant", {
            enumerable: !0, get: function () {
                return S(P).default
            }
        }), Object.defineProperty(exports, "geoConicEquidistantRaw", {
            enumerable: !0, get: function () {
                return P.conicEquidistantRaw
            }
        });
        var y = require("./projection/equalEarth");
        Object.defineProperty(exports, "geoEqualEarth", {
            enumerable: !0, get: function () {
                return S(y).default
            }
        }), Object.defineProperty(exports, "geoEqualEarthRaw", {
            enumerable: !0, get: function () {
                return y.equalEarthRaw
            }
        });
        var O = require("./projection/equirectangular");
        Object.defineProperty(exports, "geoEquirectangular", {
            enumerable: !0, get: function () {
                return S(O).default
            }
        }), Object.defineProperty(exports, "geoEquirectangularRaw", {
            enumerable: !0, get: function () {
                return O.equirectangularRaw
            }
        });
        var v = require("./projection/gnomonic");
        Object.defineProperty(exports, "geoGnomonic", {
            enumerable: !0, get: function () {
                return S(v).default
            }
        }), Object.defineProperty(exports, "geoGnomonicRaw", {
            enumerable: !0, get: function () {
                return v.gnomonicRaw
            }
        });
        var h = require("./projection/identity");
        Object.defineProperty(exports, "geoIdentity", {
            enumerable: !0, get: function () {
                return S(h).default
            }
        });
        var E = require("./projection/index");
        Object.defineProperty(exports, "geoProjection", {
            enumerable: !0, get: function () {
                return S(E).default
            }
        }), Object.defineProperty(exports, "geoProjectionMutator", {
            enumerable: !0, get: function () {
                return E.projectionMutator
            }
        });
        var R = require("./projection/mercator");
        Object.defineProperty(exports, "geoMercator", {
            enumerable: !0, get: function () {
                return S(R).default
            }
        }), Object.defineProperty(exports, "geoMercatorRaw", {
            enumerable: !0, get: function () {
                return R.mercatorRaw
            }
        });
        var w = require("./projection/naturalEarth1");
        Object.defineProperty(exports, "geoNaturalEarth1", {
            enumerable: !0, get: function () {
                return S(w).default
            }
        }), Object.defineProperty(exports, "geoNaturalEarth1Raw", {
            enumerable: !0, get: function () {
                return w.naturalEarth1Raw
            }
        });
        var C = require("./projection/orthographic");
        Object.defineProperty(exports, "geoOrthographic", {
            enumerable: !0, get: function () {
                return S(C).default
            }
        }), Object.defineProperty(exports, "geoOrthographicRaw", {
            enumerable: !0, get: function () {
                return C.orthographicRaw
            }
        });
        var A = require("./projection/stereographic");
        Object.defineProperty(exports, "geoStereographic", {
            enumerable: !0, get: function () {
                return S(A).default
            }
        }), Object.defineProperty(exports, "geoStereographicRaw", {
            enumerable: !0, get: function () {
                return A.stereographicRaw
            }
        });
        var M = require("./projection/transverseMercator");
        Object.defineProperty(exports, "geoTransverseMercator", {
            enumerable: !0, get: function () {
                return S(M).default
            }
        }), Object.defineProperty(exports, "geoTransverseMercatorRaw", {
            enumerable: !0, get: function () {
                return M.transverseMercatorRaw
            }
        });
        var z = require("./rotation");
        Object.defineProperty(exports, "geoRotation", {
            enumerable: !0, get: function () {
                return S(z).default
            }
        });
        var G = require("./stream");
        Object.defineProperty(exports, "geoStream", {
            enumerable: !0, get: function () {
                return S(G).default
            }
        });
        var _ = require("./transform");

        function S(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "geoTransform", {
            enumerable: !0, get: function () {
                return S(_).default
            }
        });
    }, {
        "./area": "2rKt",
        "./bounds": "rw3L",
        "./centroid": "GCsQ",
        "./circle": "KcOR",
        "./clip/antimeridian": "/1Go",
        "./clip/circle": "lcCJ",
        "./clip/extent": "EodF",
        "./clip/rectangle": "jRQA",
        "./contains": "tRhb",
        "./distance": "hTgK",
        "./graticule": "69Id",
        "./interpolate": "uuLr",
        "./length": "bXUe",
        "./path/index": "JRMk",
        "./projection/albers": "cpQd",
        "./projection/albersUsa": "RPZI",
        "./projection/azimuthalEqualArea": "OyGo",
        "./projection/azimuthalEquidistant": "mwct",
        "./projection/conicConformal": "kVD1",
        "./projection/conicEqualArea": "/TNC",
        "./projection/conicEquidistant": "TJ85",
        "./projection/equalEarth": "qrWJ",
        "./projection/equirectangular": "RMXQ",
        "./projection/gnomonic": "KVOo",
        "./projection/identity": "1X+K",
        "./projection/index": "0Ktp",
        "./projection/mercator": "n0Ot",
        "./projection/naturalEarth1": "Y5z/",
        "./projection/orthographic": "UMbg",
        "./projection/stereographic": "vfE9",
        "./projection/transverseMercator": "o0eF",
        "./rotation": "LqUY",
        "./stream": "XQuq",
        "./transform": "pfKH"
    }], "66JR": [function (require, module, exports) {
        "use strict";

        function n(n, r) {
            return n.parent === r.parent ? 1 : 2
        }

        function r(n) {
            return n.reduce(e, 0) / n.length
        }

        function e(n, r) {
            return n + r.x
        }

        function t(n) {
            return 1 + n.reduce(u, 0)
        }

        function u(n, r) {
            return Math.max(n, r.y)
        }

        function c(n) {
            for (var r; r = n.children;) n = r[0];
            return n
        }

        function i(n) {
            for (var r; r = n.children;) n = r[r.length - 1];
            return n
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = n, u = 1, o = 1, f = !1;

            function a(n) {
                var a, l = 0;
                n.eachAfter(function (n) {
                    var u = n.children;
                    u ? (n.x = r(u), n.y = t(u)) : (n.x = a ? l += e(n, a) : 0, n.y = 0, a = n)
                });
                var x = c(n), h = i(n), y = x.x - e(x, h) / 2, d = h.x + e(h, x) / 2;
                return n.eachAfter(f ? function (r) {
                    r.x = (r.x - n.x) * u, r.y = (n.y - r.y) * o
                } : function (r) {
                    r.x = (r.x - y) / (d - y) * u, r.y = (1 - (n.y ? r.y / n.y : 1)) * o
                })
            }

            return a.separation = function (n) {
                return arguments.length ? (e = n, a) : e
            }, a.size = function (n) {
                return arguments.length ? (f = !1, u = +n[0], o = +n[1], a) : f ? null : [u, o]
            }, a.nodeSize = function (n) {
                return arguments.length ? (f = !0, u = +n[0], o = +n[1], a) : f ? [u, o] : null
            }, a
        };
    }, {}], "Fb+P": [function (require, module, exports) {
        "use strict";

        function e(e) {
            var t = 0, r = e.children, u = r && r.length;
            if (u) for (; --u >= 0;) t += r[u].value; else t = 1;
            e.value = t
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return this.eachAfter(e)
        };
    }, {}], "6aoO": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var r, t, o, s, i = this, h = [i];
            do {
                for (r = h.reverse(), h = []; i = r.pop();) if (e(i), t = i.children) for (o = 0, s = t.length; o < s; ++o) h.push(t[o])
            } while (h.length);
            return this
        };
    }, {}], "vU7q": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t, r, o = this, s = [o]; o = s.pop();) if (e(o), t = o.children) for (r = t.length - 1; r >= 0; --r) s.push(t[r]);
            return this
        };
    }, {}], "bidz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var r, t, o, p = this, s = [p], u = []; p = s.pop();) if (u.push(p), r = p.children) for (t = 0, o = r.length; t < o; ++t) s.push(r[t]);
            for (; p = u.pop();) e(p);
            return this
        };
    }, {}], "tYQG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return this.eachAfter(function (t) {
                for (var r = +e(t.data) || 0, u = t.children, a = u && u.length; --a >= 0;) r += u[a].value;
                t.value = r
            })
        };
    }, {}], "l55u": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return this.eachBefore(function (t) {
                t.children && t.children.sort(e)
            })
        };
    }, {}], "Rfs8": [function (require, module, exports) {
        "use strict";

        function r(r, e) {
            if (r === e) return r;
            var t = r.ancestors(), o = e.ancestors(), p = null;
            for (r = t.pop(), e = o.pop(); r === e;) p = r, r = t.pop(), e = o.pop();
            return p
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t = this, o = r(t, e), p = [t]; t !== o;) t = t.parent, p.push(t);
            for (var n = p.length; e !== o;) p.splice(n, 0, e), e = e.parent;
            return p
        };
    }, {}], "iENO": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            for (var e = this, t = [e]; e = e.parent;) t.push(e);
            return t
        };
    }, {}], "b4YN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = [];
            return this.each(function (t) {
                e.push(t)
            }), e
        };
    }, {}], "A1Sr": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = [];
            return this.eachBefore(function (t) {
                t.children || e.push(t)
            }), e
        };
    }, {}], "NfF5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = this, t = [];
            return e.each(function (r) {
                r !== e && t.push({source: r.parent, target: r})
            }), t
        };
    }, {}], "xn1B": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = m, exports.computeHeight = b, exports.Node = j;
        var e = require("./count"), t = _(e), r = require("./each"), a = _(r), u = require("./eachBefore"), n = _(u), o = require("./eachAfter"), i = _(o), d = require("./sum"), l = _(d), h = require("./sort"), s = _(h), c = require("./path"), f = _(c), p = require("./ancestors"), q = _(p), v = require("./descendants"), g = _(v), y = require("./leaves"), w = _(y), x = require("./links"), B = _(x);

        function _(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function m(e, t) {
            var r, a, u, n, o, i = new j(e), d = +e.value && (i.value = e.value), l = [i];
            for (null == t && (t = k); r = l.pop();) if (d && (r.value = +r.data.value), (u = t(r.data)) && (o = u.length)) for (r.children = new Array(o), n = o - 1; n >= 0; --n) l.push(a = r.children[n] = new j(u[n])), a.parent = r, a.depth = r.depth + 1;
            return i.eachBefore(b)
        }

        function A() {
            return m(this).eachBefore(M)
        }

        function k(e) {
            return e.children
        }

        function M(e) {
            e.data = e.data.data
        }

        function b(e) {
            var t = 0;
            do {
                e.height = t
            } while ((e = e.parent) && e.height < ++t)
        }

        function j(e) {
            this.data = e, this.depth = this.height = 0, this.parent = null
        }

        j.prototype = m.prototype = {constructor: j, count: t.default, each: a.default, eachAfter: i.default, eachBefore: n.default, sum: l.default, sort: s.default, path: f.default, ancestors: q.default, descendants: g.default, leaves: w.default, links: B.default, copy: A};
    }, {"./count": "Fb+P", "./each": "6aoO", "./eachBefore": "vU7q", "./eachAfter": "bidz", "./sum": "tYQG", "./sort": "l55u", "./path": "Rfs8", "./ancestors": "iENO", "./descendants": "b4YN", "./leaves": "A1Sr", "./links": "NfF5"}], "aDgv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.shuffle = r;
        var e = exports.slice = Array.prototype.slice;

        function r(e) {
            for (var r, t, o = e.length; o;) t = Math.random() * o-- | 0, r = e[o], e[o] = e[t], e[t] = r;
            return e
        }
    }, {}], "H7R8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var u, o, a = 0, i = (e = (0, r.shuffle)(r.slice.call(e))).length, c = []; a < i;) u = e[a], o && n(o, u) ? ++a : (o = f(c = t(c, u)), a = 0);
            return o
        };
        var r = require("../array");

        function t(r, t) {
            var n, f;
            if (u(t, r)) return [t];
            for (n = 0; n < r.length; ++n) if (e(t, r[n]) && u(a(r[n], t), r)) return [r[n], t];
            for (n = 0; n < r.length - 1; ++n) for (f = n + 1; f < r.length; ++f) if (e(a(r[n], r[f]), t) && e(a(r[n], t), r[f]) && e(a(r[f], t), r[n]) && u(i(r[n], r[f], t), r)) return [r[n], r[f], t];
            throw new Error
        }

        function e(r, t) {
            var e = r.r - t.r, n = t.x - r.x, u = t.y - r.y;
            return e < 0 || e * e < n * n + u * u
        }

        function n(r, t) {
            var e = r.r - t.r + 1e-6, n = t.x - r.x, u = t.y - r.y;
            return e > 0 && e * e > n * n + u * u
        }

        function u(r, t) {
            for (var e = 0; e < t.length; ++e) if (!n(r, t[e])) return !1;
            return !0
        }

        function f(r) {
            switch (r.length) {
                case 1:
                    return o(r[0]);
                case 2:
                    return a(r[0], r[1]);
                case 3:
                    return i(r[0], r[1], r[2])
            }
        }

        function o(r) {
            return {x: r.x, y: r.y, r: r.r}
        }

        function a(r, t) {
            var e = r.x, n = r.y, u = r.r, f = t.x, o = t.y, a = t.r, i = f - e, c = o - n, x = a - u, y = Math.sqrt(i * i + c * c);
            return {x: (e + f + i / y * x) / 2, y: (n + o + c / y * x) / 2, r: (y + u + a) / 2}
        }

        function i(r, t, e) {
            var n = r.x, u = r.y, f = r.r, o = t.x, a = t.y, i = t.r, c = e.x, x = e.y, y = e.r, l = n - o, s = n - c, h = u - a, v = u - x, g = i - f, d = y - f, p = n * n + u * u - f * f, q = p - o * o - a * a + i * i, w = p - c * c - x * x + y * y, M = s * h - l * v, _ = (h * w - v * q) / (2 * M) - n, b = (v * g - h * d) / M, j = (s * q - l * w) / (2 * M) - u, E = (l * d - s * g) / M, O = b * b + E * E - 1, P = 2 * (f + _ * b + j * E), k = _ * _ + j * j - f * f,
                m = -(O ? (P + Math.sqrt(P * P - 4 * O * k)) / (2 * O) : k / P);
            return {x: n + _ + b * m, y: u + j + E * m, r: m}
        }
    }, {"../array": "aDgv"}], "ObEg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.packEnclose = o, exports.default = function (r) {
            return o(r), r
        };
        var r = require("./enclose"), e = t(r);

        function t(r) {
            return r && r.__esModule ? r : {default: r}
        }

        function n(r, e, t) {
            var n, u, x, i, o = r.x - e.x, s = r.y - e.y, f = o * o + s * s;
            f ? (u = e.r + t.r, u *= u, i = r.r + t.r, u > (i *= i) ? (n = (f + i - u) / (2 * f), x = Math.sqrt(Math.max(0, i / f - n * n)), t.x = r.x - n * o - x * s, t.y = r.y - n * s + x * o) : (n = (f + u - i) / (2 * f), x = Math.sqrt(Math.max(0, u / f - n * n)), t.x = e.x + n * o - x * s, t.y = e.y + n * s + x * o)) : (t.x = e.x + t.r, t.y = e.y)
        }

        function u(r, e) {
            var t = r.r + e.r - 1e-6, n = e.x - r.x, u = e.y - r.y;
            return t > 0 && t * t > n * n + u * u
        }

        function x(r) {
            var e = r._, t = r.next._, n = e.r + t.r, u = (e.x * t.r + t.x * e.r) / n, x = (e.y * t.r + t.y * e.r) / n;
            return u * u + x * x
        }

        function i(r) {
            this._ = r, this.next = null, this.previous = null
        }

        function o(r) {
            if (!(f = r.length)) return 0;
            var t, o, s, f, _, y, a, p, v, l, c;
            if ((t = r[0]).x = 0, t.y = 0, !(f > 1)) return t.r;
            if (o = r[1], t.x = -o.r, o.x = t.r, o.y = 0, !(f > 2)) return t.r + o.r;
            n(o, t, s = r[2]), t = new i(t), o = new i(o), s = new i(s), t.next = s.previous = o, o.next = t.previous = s, s.next = o.previous = t;
            r:for (a = 3; a < f; ++a) {
                n(t._, o._, s = r[a]), s = new i(s), p = o.next, v = t.previous, l = o._.r, c = t._.r;
                do {
                    if (l <= c) {
                        if (u(p._, s._)) {
                            o = p, t.next = o, o.previous = t, --a;
                            continue r
                        }
                        l += p._.r, p = p.next
                    } else {
                        if (u(v._, s._)) {
                            (t = v).next = o, o.previous = t, --a;
                            continue r
                        }
                        c += v._.r, v = v.previous
                    }
                } while (p !== v.next);
                for (s.previous = t, s.next = o, t.next = o.previous = o = s, _ = x(t); (s = s.next) !== o;) (y = x(s)) < _ && (t = s, _ = y);
                o = t.next
            }
            for (t = [o._], s = o; (s = s.next) !== o;) t.push(s._);
            for (s = (0, e.default)(t), a = 0; a < f; ++a) (t = r[a]).x -= s.x, t.y -= s.y;
            return s.r
        }
    }, {"./enclose": "H7R8"}], "kxuB": [function (require, module, exports) {
        "use strict";

        function e(e) {
            return null == e ? null : r(e)
        }

        function r(e) {
            if ("function" != typeof e) throw new Error;
            return e
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.optional = e, exports.required = r;
    }, {}], "JuqG": [function (require, module, exports) {
        "use strict";

        function e() {
            return 0
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.constantZero = e, exports.default = function (e) {
            return function () {
                return e
            }
        };
    }, {}], "fIYd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = null, u = 1, a = 1, l = r.constantZero;

            function s(n) {
                return n.x = u / 2, n.y = a / 2, e ? n.eachBefore(c(e)).eachAfter(i(l, .5)).eachBefore(f(1)) : n.eachBefore(c(o)).eachAfter(i(r.constantZero, 1)).eachAfter(i(l, n.r / Math.min(u, a))).eachBefore(f(Math.min(u, a) / (2 * n.r))), n
            }

            return s.radius = function (r) {
                return arguments.length ? (e = (0, n.optional)(r), s) : e
            }, s.size = function (e) {
                return arguments.length ? (u = +e[0], a = +e[1], s) : [u, a]
            }, s.padding = function (e) {
                return arguments.length ? (l = "function" == typeof e ? e : (0, t.default)(+e), s) : l
            }, s
        };
        var e = require("./siblings"), n = require("../accessors"), r = require("../constant"), t = u(r);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function o(e) {
            return Math.sqrt(e.value)
        }

        function c(e) {
            return function (n) {
                n.children || (n.r = Math.max(0, +e(n) || 0))
            }
        }

        function i(n, r) {
            return function (t) {
                if (u = t.children) {
                    var u, o, c, i = u.length, f = n(t) * r || 0;
                    if (f) for (o = 0; o < i; ++o) u[o].r += f;
                    if (c = (0, e.packEnclose)(u), f) for (o = 0; o < i; ++o) u[o].r -= f;
                    t.r = c + f
                }
            }
        }

        function f(e) {
            return function (n) {
                var r = n.parent;
                n.r *= e, r && (n.x = r.x + e * n.x, n.y = r.y + e * n.y)
            }
        }
    }, {"./siblings": "ObEg", "../accessors": "kxuB", "../constant": "JuqG"}], "kcDz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
        };
    }, {}], "Z1AK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, l, r, u) {
            for (var a, o = e.children, n = -1, s = o.length, v = e.value && (r - t) / e.value; ++n < s;) (a = o[n]).y0 = l, a.y1 = u, a.x0 = t, a.x1 = t += a.value * v
        };
    }, {}], "1ekb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = 1, t = 1, u = 0, i = !1;

            function o(o) {
                var d = o.height + 1;
                return o.x0 = o.y0 = u, o.x1 = e, o.y1 = t / d, o.eachBefore(function (e, r) {
                    return function (t) {
                        t.children && (0, n.default)(t, t.x0, e * (t.depth + 1) / r, t.x1, e * (t.depth + 2) / r);
                        var i = t.x0, o = t.y0, d = t.x1 - u, f = t.y1 - u;
                        d < i && (i = d = (i + d) / 2), f < o && (o = f = (o + f) / 2), t.x0 = i, t.y0 = o, t.x1 = d, t.y1 = f
                    }
                }(t, d)), i && o.eachBefore(r.default), o
            }

            return o.round = function (e) {
                return arguments.length ? (i = !!e, o) : i
            }, o.size = function (r) {
                return arguments.length ? (e = +r[0], t = +r[1], o) : [e, t]
            }, o.padding = function (e) {
                return arguments.length ? (u = +e, o) : u
            }, o
        };
        var e = require("./treemap/round"), r = u(e), t = require("./treemap/dice"), n = u(t);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./treemap/round": "kcDz", "./treemap/dice": "Z1AK"}], "fM3r": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var c = i, h = u;

            function f(r) {
                var i, u, f, l, d, a, p, s = r.length, w = new Array(s), g = {};
                for (u = 0; u < s; ++u) i = r[u], d = w[u] = new e.Node(i), null != (a = c(i, u, r)) && (a += "") && (g[p = n + (d.id = a)] = p in g ? o : d);
                for (u = 0; u < s; ++u) if (d = w[u], null != (a = h(r[u], u, r)) && (a += "")) {
                    if (!(l = g[n + a])) throw new Error("missing: " + a);
                    if (l === o) throw new Error("ambiguous: " + a);
                    l.children ? l.children.push(d) : l.children = [d], d.parent = l
                } else {
                    if (f) throw new Error("multiple roots");
                    f = d
                }
                if (!f) throw new Error("no root");
                if (f.parent = t, f.eachBefore(function (r) {
                    r.depth = r.parent.depth + 1, --s
                }).eachBefore(e.computeHeight), f.parent = null, s > 0) throw new Error("cycle");
                return f
            }

            return f.id = function (e) {
                return arguments.length ? (c = (0, r.required)(e), f) : c
            }, f.parentId = function (e) {
                return arguments.length ? (h = (0, r.required)(e), f) : h
            }, f
        };
        var r = require("./accessors"), e = require("./hierarchy/index"), n = "$", t = {depth: -1}, o = {};

        function i(r) {
            return r.id
        }

        function u(r) {
            return r.parentId
        }
    }, {"./accessors": "kxuB", "./hierarchy/index": "xn1B"}], "xQqP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n = e, a = 1, l = 1, o = null;

            function f(e) {
                var t = h(e);
                if (t.eachAfter(p), t.parent.m = -t.z, t.eachBefore(s), o) e.eachBefore(d); else {
                    var r = e, i = e, u = e;
                    e.eachBefore(function (n) {
                        n.x < r.x && (r = n), n.x > i.x && (i = n), n.depth > u.depth && (u = n)
                    });
                    var c = r === i ? 1 : n(r, i) / 2, f = c - r.x, m = a / (i.x + c + f), z = l / (u.depth || 1);
                    e.eachBefore(function (n) {
                        n.x = (n.x + f) * m, n.y = n.depth * z
                    })
                }
                return e
            }

            function p(e) {
                var a = e.children, h = e.parent.children, l = e.i ? h[e.i - 1] : null;
                if (a) {
                    u(e);
                    var o = (a[0].z + a[a.length - 1].z) / 2;
                    l ? (e.z = l.z + n(e._, l._), e.m = e.z - o) : e.z = o
                } else l && (e.z = l.z + n(e._, l._));
                e.parent.A = function (e, u, a) {
                    if (u) {
                        for (var h, l = e, o = e, f = u, p = l.parent.children[0], s = l.m, d = o.m, m = f.m, z = p.m; f = r(f), l = t(l), f && l;) p = t(p), (o = r(o)).a = e, (h = f.z + m - l.z - s + n(f._, l._)) > 0 && (i(c(f, e, a), e, h), s += h, d += h), m += f.m, s += l.m, z += p.m, d += o.m;
                        f && !r(o) && (o.t = f, o.m += m - d), l && !t(p) && (p.t = l, p.m += s - z, a = e)
                    }
                    return a
                }(e, l, e.parent.A || h[0])
            }

            function s(n) {
                n._.x = n.z + n.parent.m, n.m += n.parent.m
            }

            function d(n) {
                n.x *= a, n.y = n.depth * l
            }

            return f.separation = function (e) {
                return arguments.length ? (n = e, f) : n
            }, f.size = function (n) {
                return arguments.length ? (o = !1, a = +n[0], l = +n[1], f) : o ? null : [a, l]
            }, f.nodeSize = function (n) {
                return arguments.length ? (o = !0, a = +n[0], l = +n[1], f) : o ? [a, l] : null
            }, f
        };
        var n = require("./hierarchy/index");

        function e(n, e) {
            return n.parent === e.parent ? 1 : 2
        }

        function t(n) {
            var e = n.children;
            return e ? e[0] : n.t
        }

        function r(n) {
            var e = n.children;
            return e ? e[e.length - 1] : n.t
        }

        function i(n, e, t) {
            var r = t / (e.i - n.i);
            e.c -= r, e.s += t, n.c += r, e.z += t, e.m += t
        }

        function u(n) {
            for (var e, t = 0, r = 0, i = n.children, u = i.length; --u >= 0;) (e = i[u]).z += t, e.m += t, t += e.s + (r += e.c)
        }

        function c(n, e, t) {
            return n.a.parent === e.parent ? n.a : t
        }

        function a(n, e) {
            this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e
        }

        function h(n) {
            for (var e, t, r, i, u, c = new a(n, 0), h = [c]; e = h.pop();) if (r = e._.children) for (e.children = new Array(u = r.length), i = u - 1; i >= 0; --i) h.push(t = e.children[i] = new a(r[i], i)), t.parent = e;
            return (c.parent = new a(null, 0)).children = [c], c
        }

        a.prototype = Object.create(n.Node.prototype);
    }, {"./hierarchy/index": "xn1B"}], "XP76": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, l, r, u) {
            for (var a, o = e.children, n = -1, s = o.length, v = e.value && (u - l) / e.value; ++n < s;) (a = o[n]).x0 = t, a.x1 = r, a.y0 = l, a.y1 = l += a.value * v
        };
    }, {}], "sjir": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.phi = void 0, exports.squarifyRatio = o;
        var e = require("./dice"), r = i(e), t = require("./slice"), u = i(t);

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = exports.phi = (1 + Math.sqrt(5)) / 2;

        function o(e, t, i, a, o, n) {
            for (var l, c, d, f, s, h, p, v, x, M, q, _ = [], m = t.children, b = 0, y = 0, g = m.length, j = t.value; b < g;) {
                d = o - i, f = n - a;
                do {
                    s = m[y++].value
                } while (!s && y < g);
                for (h = p = s, q = s * s * (M = Math.max(f / d, d / f) / (j * e)), x = Math.max(p / q, q / h); y < g; ++y) {
                    if (s += c = m[y].value, c < h && (h = c), c > p && (p = c), q = s * s * M, (v = Math.max(p / q, q / h)) > x) {
                        s -= c;
                        break
                    }
                    x = v
                }
                _.push(l = {value: s, dice: d < f, children: m.slice(b, y)}), l.dice ? (0, r.default)(l, i, a, o, j ? a += f * s / j : n) : (0, u.default)(l, i, a, j ? i += d * s / j : o, n), j -= s, b = y
            }
            return _
        }

        exports.default = function e(r) {
            function t(e, t, u, i, a) {
                o(r, e, t, u, i, a)
            }

            return t.ratio = function (r) {
                return e((r = +r) > 1 ? r : 1)
            }, t
        }(a);
    }, {"./dice": "Z1AK", "./slice": "XP76"}], "dRX5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n = r.default, e = !1, i = 1, f = 1, a = [0], c = o.constantZero, p = o.constantZero, g = o.constantZero, l = o.constantZero, h = o.constantZero;

            function s(n) {
                return n.x0 = n.y0 = 0, n.x1 = i, n.y1 = f, n.eachBefore(y), a = [0], e && n.eachBefore(t.default), n
            }

            function y(t) {
                var e = a[t.depth], r = t.x0 + e, u = t.y0 + e, o = t.x1 - e, d = t.y1 - e;
                o < r && (r = o = (r + o) / 2), d < u && (u = d = (u + d) / 2), t.x0 = r, t.y0 = u, t.x1 = o, t.y1 = d, t.children && (e = a[t.depth + 1] = c(t) / 2, r += h(t) - e, u += p(t) - e, (o -= g(t) - e) < r && (r = o = (r + o) / 2), (d -= l(t) - e) < u && (u = d = (u + d) / 2), n(t, r, u, o, d))
            }

            return s.round = function (n) {
                return arguments.length ? (e = !!n, s) : e
            }, s.size = function (n) {
                return arguments.length ? (i = +n[0], f = +n[1], s) : [i, f]
            }, s.tile = function (t) {
                return arguments.length ? (n = (0, u.required)(t), s) : n
            }, s.padding = function (n) {
                return arguments.length ? s.paddingInner(n).paddingOuter(n) : s.paddingInner()
            }, s.paddingInner = function (n) {
                return arguments.length ? (c = "function" == typeof n ? n : (0, d.default)(+n), s) : c
            }, s.paddingOuter = function (n) {
                return arguments.length ? s.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : s.paddingTop()
            }, s.paddingTop = function (n) {
                return arguments.length ? (p = "function" == typeof n ? n : (0, d.default)(+n), s) : p
            }, s.paddingRight = function (n) {
                return arguments.length ? (g = "function" == typeof n ? n : (0, d.default)(+n), s) : g
            }, s.paddingBottom = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : (0, d.default)(+n), s) : l
            }, s.paddingLeft = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : (0, d.default)(+n), s) : h
            }, s
        };
        var n = require("./round"), t = i(n), e = require("./squarify"), r = i(e), u = require("../accessors"), o = require("../constant"), d = i(o);

        function i(n) {
            return n && n.__esModule ? n : {default: n}
        }
    }, {"./round": "kcDz", "./squarify": "sjir", "../accessors": "kxuB", "../constant": "JuqG"}], "dN/V": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, r, a, t, v) {
            var n, o, u = e.children, f = u.length, i = new Array(f + 1);
            for (i[0] = o = n = 0; n < f; ++n) i[n + 1] = o += u[n].value;
            !function e(r, a, t, v, n, o, f) {
                if (r >= a - 1) {
                    var l = u[r];
                    return l.x0 = v, l.y0 = n, l.x1 = o, void (l.y1 = f)
                }
                var s = i[r], c = t / 2 + s, d = r + 1, x = a - 1;
                for (; d < x;) {
                    var y = d + x >>> 1;
                    i[y] < c ? d = y + 1 : x = y
                }
                c - i[d - 1] < i[d] - c && r + 1 < d && --d;
                var p = i[d] - s, h = t - p;
                if (o - v > f - n) {
                    var _ = (v * h + o * p) / t;
                    e(r, d, p, v, n, _, f), e(d, a, h, _, n, o, f)
                } else {
                    var b = (n * h + f * p) / t;
                    e(r, d, p, v, n, o, b), e(d, a, h, v, b, o, f)
                }
            }(0, f, e.value, r, a, t, v)
        };
    }, {}], "rOuR": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, u, d, i, l) {
            (1 & e.depth ? r.default : t.default)(e, u, d, i, l)
        };
        var e = require("./dice"), t = d(e), u = require("./slice"), r = d(u);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./dice": "Z1AK", "./slice": "XP76"}], "XhZ5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./dice"), r = a(e), u = require("./slice"), i = a(u), t = require("./squarify");

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(u) {
            function a(e, a, l, f, n) {
                if ((o = e._squarify) && o.ratio === u) for (var o, s, c, d, v, q = -1, _ = o.length, y = e.value; ++q < _;) {
                    for (c = (s = o[q]).children, d = s.value = 0, v = c.length; d < v; ++d) s.value += c[d].value;
                    s.dice ? (0, r.default)(s, a, l, f, l += (n - l) * s.value / y) : (0, i.default)(s, a, l, a += (f - a) * s.value / y, n), y -= s.value
                } else e._squarify = o = (0, t.squarifyRatio)(u, e, a, l, f, n), o.ratio = u
            }

            return a.ratio = function (r) {
                return e((r = +r) > 1 ? r : 1)
            }, a
        }(t.phi);
    }, {"./dice": "Z1AK", "./slice": "XP76", "./squarify": "sjir"}], "Kps6": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./cluster");
        Object.defineProperty(exports, "cluster", {
            enumerable: !0, get: function () {
                return m(e).default
            }
        });
        var r = require("./hierarchy/index");
        Object.defineProperty(exports, "hierarchy", {
            enumerable: !0, get: function () {
                return m(r).default
            }
        });
        var t = require("./pack/index");
        Object.defineProperty(exports, "pack", {
            enumerable: !0, get: function () {
                return m(t).default
            }
        });
        var n = require("./pack/siblings");
        Object.defineProperty(exports, "packSiblings", {
            enumerable: !0, get: function () {
                return m(n).default
            }
        });
        var u = require("./pack/enclose");
        Object.defineProperty(exports, "packEnclose", {
            enumerable: !0, get: function () {
                return m(u).default
            }
        });
        var a = require("./partition");
        Object.defineProperty(exports, "partition", {
            enumerable: !0, get: function () {
                return m(a).default
            }
        });
        var i = require("./stratify");
        Object.defineProperty(exports, "stratify", {
            enumerable: !0, get: function () {
                return m(i).default
            }
        });
        var f = require("./tree");
        Object.defineProperty(exports, "tree", {
            enumerable: !0, get: function () {
                return m(f).default
            }
        });
        var o = require("./treemap/index");
        Object.defineProperty(exports, "treemap", {
            enumerable: !0, get: function () {
                return m(o).default
            }
        });
        var p = require("./treemap/binary");
        Object.defineProperty(exports, "treemapBinary", {
            enumerable: !0, get: function () {
                return m(p).default
            }
        });
        var c = require("./treemap/dice");
        Object.defineProperty(exports, "treemapDice", {
            enumerable: !0, get: function () {
                return m(c).default
            }
        });
        var l = require("./treemap/slice");
        Object.defineProperty(exports, "treemapSlice", {
            enumerable: !0, get: function () {
                return m(l).default
            }
        });
        var d = require("./treemap/sliceDice");
        Object.defineProperty(exports, "treemapSliceDice", {
            enumerable: !0, get: function () {
                return m(d).default
            }
        });
        var b = require("./treemap/squarify");
        Object.defineProperty(exports, "treemapSquarify", {
            enumerable: !0, get: function () {
                return m(b).default
            }
        });
        var s = require("./treemap/resquarify");

        function m(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "treemapResquarify", {
            enumerable: !0, get: function () {
                return m(s).default
            }
        });
    }, {"./cluster": "66JR", "./hierarchy/index": "xn1B", "./pack/index": "fIYd", "./pack/siblings": "ObEg", "./pack/enclose": "H7R8", "./partition": "1ekb", "./stratify": "fM3r", "./tree": "xQqP", "./treemap/index": "dRX5", "./treemap/binary": "dN/V", "./treemap/dice": "Z1AK", "./treemap/slice": "XP76", "./treemap/sliceDice": "rOuR", "./treemap/squarify": "sjir", "./treemap/resquarify": "XhZ5"}], "lAFu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t, r = -1, o = e.length, u = e[o - 1], n = 0; ++r < o;) t = u, u = e[r], n += t[1] * u[0] - t[0] * u[1];
            return n / 2
        };
    }, {}], "2CP3": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t, r, o = -1, u = e.length, n = 0, s = 0, f = e[u - 1], l = 0; ++o < u;) t = f, f = e[o], l += r = t[0] * f[1] - f[0] * t[1], n += (t[0] + f[0]) * r, s += (t[1] + f[1]) * r;
            return [n / (l *= 3), s / l]
        };
    }, {}], "zVqT": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t, r) {
            return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0])
        };
    }, {}], "Q16x": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (r) {
            if ((t = r.length) < 3) return null;
            var e, t, o = new Array(t), f = new Array(t);
            for (e = 0; e < t; ++e) o[e] = [+r[e][0], +r[e][1], e];
            for (o.sort(n), e = 0; e < t; ++e) f[e] = [o[e][0], -o[e][1]];
            var l = u(o), s = u(f), a = s[0] === l[0], i = s[s.length - 1] === l[l.length - 1], c = [];
            for (e = l.length - 1; e >= 0; --e) c.push(r[o[l[e]][2]]);
            for (e = +a; e < s.length - i; ++e) c.push(r[o[s[e]][2]]);
            return c
        };
        var r = require("./cross"), e = t(r);

        function t(r) {
            return r && r.__esModule ? r : {default: r}
        }

        function n(r, e) {
            return r[0] - e[0] || r[1] - e[1]
        }

        function u(r) {
            for (var t = r.length, n = [0, 1], u = 2, o = 2; o < t; ++o) {
                for (; u > 1 && (0, e.default)(r[n[u - 2]], r[n[u - 1]], r[o]) <= 0;) --u;
                n[u++] = o
            }
            return n.slice(0, u)
        }
    }, {"./cross": "zVqT"}], "3tui": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            for (var r, o, u = e.length, n = e[u - 1], s = t[0], f = t[1], l = n[0], a = n[1], c = !1, d = 0; d < u; ++d) r = (n = e[d])[0], (o = n[1]) > f != a > f && s < (l - r) * (f - o) / (a - o) + r && (c = !c), l = r, a = o;
            return c
        };
    }, {}], "AReD": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var t, r, o = -1, s = e.length, u = e[s - 1], n = u[0], a = u[1], f = 0; ++o < s;) t = n, r = a, t -= n = (u = e[o])[0], r -= a = u[1], f += Math.sqrt(t * t + r * r);
            return f
        };
    }, {}], "H15P": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./area");
        Object.defineProperty(exports, "polygonArea", {
            enumerable: !0, get: function () {
                return u(e).default
            }
        });
        var r = require("./centroid");
        Object.defineProperty(exports, "polygonCentroid", {
            enumerable: !0, get: function () {
                return u(r).default
            }
        });
        var t = require("./hull");
        Object.defineProperty(exports, "polygonHull", {
            enumerable: !0, get: function () {
                return u(t).default
            }
        });
        var n = require("./contains");
        Object.defineProperty(exports, "polygonContains", {
            enumerable: !0, get: function () {
                return u(n).default
            }
        });
        var o = require("./length");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "polygonLength", {
            enumerable: !0, get: function () {
                return u(o).default
            }
        });
    }, {"./area": "lAFu", "./centroid": "2CP3", "./hull": "Q16x", "./contains": "3tui", "./length": "AReD"}], "m3Qw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return Math.random()
        };
    }, {}], "j5my": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), u = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(u) {
            function t(e, t) {
                return e = null == e ? 0 : +e, t = null == t ? 1 : +t, 1 === arguments.length ? (t = e, e = 0) : t -= e, function () {
                    return u() * t + e
                }
            }

            return t.source = e, t
        }(u.default);
    }, {"./defaultSource": "m3Qw"}], "rHsL": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), u = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(u) {
            function r(e, r) {
                var t, l;
                return e = null == e ? 0 : +e, r = null == r ? 1 : +r, function () {
                    var n;
                    if (null != t) n = t, t = null; else do {
                        t = 2 * u() - 1, n = 2 * u() - 1, l = t * t + n * n
                    } while (!l || l > 1);
                    return e + r * n * Math.sqrt(-2 * Math.log(l) / l)
                }
            }

            return r.source = e, r
        }(u.default);
    }, {"./defaultSource": "m3Qw"}], "egwl": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), r = n(e), u = require("./normal"), t = n(u);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(r) {
            function u() {
                var e = t.default.source(r).apply(this, arguments);
                return function () {
                    return Math.exp(e())
                }
            }

            return u.source = e, u
        }(r.default);
    }, {"./defaultSource": "m3Qw", "./normal": "rHsL"}], "xpLv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), r = u(e);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(r) {
            function u(e) {
                return function () {
                    for (var u = 0, t = 0; t < e; ++t) u += r();
                    return u
                }
            }

            return u.source = e, u
        }(r.default);
    }, {"./defaultSource": "m3Qw"}], "th5P": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), r = n(e), u = require("./irwinHall"), t = n(u);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(r) {
            function u(e) {
                var u = t.default.source(r)(e);
                return function () {
                    return u() / e
                }
            }

            return u.source = e, u
        }(r.default);
    }, {"./defaultSource": "m3Qw", "./irwinHall": "xpLv"}], "91r4": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultSource"), t = u(e);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = function e(t) {
            function u(e) {
                return function () {
                    return -Math.log(1 - t()) / e
                }
            }

            return u.source = e, u
        }(t.default);
    }, {"./defaultSource": "m3Qw"}], "Gz2j": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./uniform");
        Object.defineProperty(exports, "randomUniform", {
            enumerable: !0, get: function () {
                return a(e).default
            }
        });
        var r = require("./normal");
        Object.defineProperty(exports, "randomNormal", {
            enumerable: !0, get: function () {
                return a(r).default
            }
        });
        var t = require("./logNormal");
        Object.defineProperty(exports, "randomLogNormal", {
            enumerable: !0, get: function () {
                return a(t).default
            }
        });
        var n = require("./bates");
        Object.defineProperty(exports, "randomBates", {
            enumerable: !0, get: function () {
                return a(n).default
            }
        });
        var o = require("./irwinHall");
        Object.defineProperty(exports, "randomIrwinHall", {
            enumerable: !0, get: function () {
                return a(o).default
            }
        });
        var u = require("./exponential");

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "randomExponential", {
            enumerable: !0, get: function () {
                return a(u).default
            }
        });
    }, {"./uniform": "j5my", "./normal": "rHsL", "./logNormal": "egwl", "./bates": "th5P", "./irwinHall": "xpLv", "./exponential": "91r4"}], "qoMs": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = Array.prototype, r = exports.map = e.map, t = exports.slice = e.slice;
    }, {}], "GjLX": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.implicit = void 0, exports.default = t;
        var e = require("d3-collection"), n = require("./array"), r = exports.implicit = {name: "implicit"};

        function t(i) {
            var u = (0, e.map)(), l = [], o = r;

            function c(e) {
                var n = e + "", t = u.get(n);
                if (!t) {
                    if (o !== r) return o;
                    u.set(n, t = l.push(e))
                }
                return i[(t - 1) % i.length]
            }

            return i = null == i ? [] : n.slice.call(i), c.domain = function (n) {
                if (!arguments.length) return l.slice();
                l = [], u = (0, e.map)();
                for (var r, t, i = -1, o = n.length; ++i < o;) u.has(t = (r = n[i]) + "") || u.set(t, l.push(r));
                return c
            }, c.range = function (e) {
                return arguments.length ? (i = n.slice.call(e), c) : i.slice()
            }, c.unknown = function (e) {
                return arguments.length ? (o = e, c) : o
            }, c.copy = function () {
                return t().domain(l).range(i).unknown(o)
            }, c
        }
    }, {"d3-collection": "S3hn", "./array": "qoMs"}], "BAgl": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = u, exports.point = i;
        var n = require("d3-array"), t = require("./ordinal"), r = e(t);

        function e(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function u() {
            var t, e, a = (0, r.default)().unknown(void 0), i = a.domain, d = a.range, o = [0, 1], g = !1, c = 0, f = 0, l = .5;

            function h() {
                var r = i().length, u = o[1] < o[0], a = o[u - 0], h = o[1 - u];
                t = (h - a) / Math.max(1, r - c + 2 * f), g && (t = Math.floor(t)), a += (h - a - t * (r - c)) * l, e = t * (1 - c), g && (a = Math.round(a), e = Math.round(e));
                var p = (0, n.range)(r).map(function (n) {
                    return a + t * n
                });
                return d(u ? p.reverse() : p)
            }

            return delete a.unknown, a.domain = function (n) {
                return arguments.length ? (i(n), h()) : i()
            }, a.range = function (n) {
                return arguments.length ? (o = [+n[0], +n[1]], h()) : o.slice()
            }, a.rangeRound = function (n) {
                return o = [+n[0], +n[1]], g = !0, h()
            }, a.bandwidth = function () {
                return e
            }, a.step = function () {
                return t
            }, a.round = function (n) {
                return arguments.length ? (g = !!n, h()) : g
            }, a.padding = function (n) {
                return arguments.length ? (c = f = Math.max(0, Math.min(1, n)), h()) : c
            }, a.paddingInner = function (n) {
                return arguments.length ? (c = Math.max(0, Math.min(1, n)), h()) : c
            }, a.paddingOuter = function (n) {
                return arguments.length ? (f = Math.max(0, Math.min(1, n)), h()) : f
            }, a.align = function (n) {
                return arguments.length ? (l = Math.max(0, Math.min(1, n)), h()) : l
            }, a.copy = function () {
                return u().domain(i()).range(o).round(g).paddingInner(c).paddingOuter(f).align(l)
            }, h()
        }

        function a(n) {
            var t = n.copy;
            return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
                return a(t())
            }, n
        }

        function i() {
            return a(u().paddingInner(1))
        }
    }, {"d3-array": "K0bd", "./ordinal": "GjLX"}], "FNaI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return +e
        };
    }, {}], "CjJ5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.deinterpolateLinear = l, exports.copy = g, exports.default = v;
        var n = require("d3-array"), r = require("d3-interpolate"), e = require("./array"), t = require("./constant"), u = a(t), i = require("./number"), o = a(i);

        function a(n) {
            return n && n.__esModule ? n : {default: n}
        }

        var c = [0, 1];

        function l(n, r) {
            return (r -= n = +n) ? function (e) {
                return (e - n) / r
            } : (0, u.default)(r)
        }

        function f(n) {
            return function (r, e) {
                var t = n(r = +r, e = +e);
                return function (n) {
                    return n <= r ? 0 : n >= e ? 1 : t(n)
                }
            }
        }

        function s(n) {
            return function (r, e) {
                var t = n(r = +r, e = +e);
                return function (n) {
                    return n <= 0 ? r : n >= 1 ? e : t(n)
                }
            }
        }

        function p(n, r, e, t) {
            var u = n[0], i = n[1], o = r[0], a = r[1];
            return i < u ? (u = e(i, u), o = t(a, o)) : (u = e(u, i), o = t(o, a)), function (n) {
                return o(u(n))
            }
        }

        function d(r, e, t, u) {
            var i = Math.min(r.length, e.length) - 1, o = new Array(i), a = new Array(i), c = -1;
            for (r[i] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++c < i;) o[c] = t(r[c], r[c + 1]), a[c] = u(e[c], e[c + 1]);
            return function (e) {
                var t = (0, n.bisect)(r, e, 1, i) - 1;
                return a[t](o[t](e))
            }
        }

        function g(n, r) {
            return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp())
        }

        function v(n, t) {
            var u, i, a, g = c, v = c, h = r.interpolate, m = !1;

            function y() {
                return u = Math.min(g.length, v.length) > 2 ? d : p, i = a = null, q
            }

            function q(r) {
                return (i || (i = u(g, v, m ? f(n) : n, h)))(+r)
            }

            return q.invert = function (n) {
                return (a || (a = u(v, g, l, m ? s(t) : t)))(+n)
            }, q.domain = function (n) {
                return arguments.length ? (g = e.map.call(n, o.default), y()) : g.slice()
            }, q.range = function (n) {
                return arguments.length ? (v = e.slice.call(n), y()) : v.slice()
            }, q.rangeRound = function (n) {
                return v = e.slice.call(n), h = r.interpolateRound, y()
            }, q.clamp = function (n) {
                return arguments.length ? (m = !!n, y()) : m
            }, q.interpolate = function (n) {
                return arguments.length ? (h = n, y()) : h
            }, y()
        }
    }, {"d3-array": "K0bd", "d3-interpolate": "k9aH", "./array": "qoMs", "./constant": "aCvo", "./number": "FNaI"}], "qjRa": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (a, i, s) {
            var t, c = a[0], n = a[a.length - 1], o = (0, e.tickStep)(c, n, null == i ? 10 : i);
            switch ((s = (0, r.formatSpecifier)(null == s ? ",f" : s)).type) {
                case"s":
                    var p = Math.max(Math.abs(c), Math.abs(n));
                    return null != s.precision || isNaN(t = (0, r.precisionPrefix)(o, p)) || (s.precision = t), (0, r.formatPrefix)(s, p);
                case"":
                case"e":
                case"g":
                case"p":
                case"r":
                    null != s.precision || isNaN(t = (0, r.precisionRound)(o, Math.max(Math.abs(c), Math.abs(n)))) || (s.precision = t - ("e" === s.type));
                    break;
                case"f":
                case"%":
                    null != s.precision || isNaN(t = (0, r.precisionFixed)(o)) || (s.precision = t - 2 * ("%" === s.type))
            }
            return (0, r.format)(s)
        };
        var e = require("d3-array"), r = require("d3-format");
    }, {"d3-array": "K0bd", "d3-format": "VuZR"}], "+LIJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.linearish = a, exports.default = c;
        var e = require("d3-array"), t = require("d3-interpolate"), r = require("./continuous"), n = u(r), i = require("./tickFormat"), o = u(i);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(t) {
            var r = t.domain;
            return t.ticks = function (t) {
                var n = r();
                return (0, e.ticks)(n[0], n[n.length - 1], null == t ? 10 : t)
            }, t.tickFormat = function (e, t) {
                return (0, o.default)(r(), e, t)
            }, t.nice = function (n) {
                null == n && (n = 10);
                var i, o = r(), u = 0, a = o.length - 1, c = o[u], l = o[a];
                return l < c && (i = c, c = l, l = i, i = u, u = a, a = i), (i = (0, e.tickIncrement)(c, l, n)) > 0 ? (c = Math.floor(c / i) * i, l = Math.ceil(l / i) * i, i = (0, e.tickIncrement)(c, l, n)) : i < 0 && (c = Math.ceil(c * i) / i, l = Math.floor(l * i) / i, i = (0, e.tickIncrement)(c, l, n)), i > 0 ? (o[u] = Math.floor(c / i) * i, o[a] = Math.ceil(l / i) * i, r(o)) : i < 0 && (o[u] = Math.ceil(c * i) / i, o[a] = Math.floor(l * i) / i, r(o)), t
            }, t
        }

        function c() {
            var e = (0, n.default)(r.deinterpolateLinear, t.interpolateNumber);
            return e.copy = function () {
                return (0, r.copy)(e, c())
            }, a(e)
        }
    }, {"d3-array": "K0bd", "d3-interpolate": "k9aH", "./continuous": "CjJ5", "./tickFormat": "qjRa"}], "FKHe": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = i;
        var e = require("./array"), r = require("./linear"), n = require("./number"), t = u(n);

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function i() {
            var n = [0, 1];

            function u(e) {
                return +e
            }

            return u.invert = u, u.domain = u.range = function (r) {
                return arguments.length ? (n = e.map.call(r, t.default), u) : n.slice()
            }, u.copy = function () {
                return i().domain(n)
            }, (0, r.linearish)(u)
        }
    }, {"./array": "qoMs", "./linear": "+LIJ", "./number": "FNaI"}], "eMTM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            var r, l = 0, o = (e = e.slice()).length - 1, s = e[l], u = e[o];
            return u < s && (r = l, l = o, o = r, r = s, s = u, u = r), e[l] = t.floor(s), e[o] = t.ceil(u), e
        };
    }, {}], "ea59": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = p;
        var t = require("d3-array"), n = require("d3-format"), r = require("./constant"), e = f(r), u = require("./nice"), o = f(u), i = require("./continuous"), a = f(i);

        function f(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function c(t, n) {
            return (n = Math.log(n / t)) ? function (r) {
                return Math.log(r / t) / n
            } : (0, e.default)(n)
        }

        function l(t, n) {
            return t < 0 ? function (r) {
                return -Math.pow(-n, r) * Math.pow(-t, 1 - r)
            } : function (r) {
                return Math.pow(n, r) * Math.pow(t, 1 - r)
            }
        }

        function h(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }

        function M(t) {
            return 10 === t ? h : t === Math.E ? Math.exp : function (n) {
                return Math.pow(t, n)
            }
        }

        function s(t) {
            return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
                return Math.log(n) / t
            })
        }

        function d(t) {
            return function (n) {
                return -t(-n)
            }
        }

        function p() {
            var r = (0, a.default)(c, l).domain([1, 10]), e = r.domain, u = 10, f = s(10), h = M(10);

            function g() {
                return f = s(u), h = M(u), e()[0] < 0 && (f = d(f), h = d(h)), r
            }

            return r.base = function (t) {
                return arguments.length ? (u = +t, g()) : u
            }, r.domain = function (t) {
                return arguments.length ? (e(t), g()) : e()
            }, r.ticks = function (n) {
                var r, o = e(), i = o[0], a = o[o.length - 1];
                (r = a < i) && (s = i, i = a, a = s);
                var c, l, M, s = f(i), d = f(a), p = null == n ? 10 : +n, g = [];
                if (!(u % 1) && d - s < p) {
                    if (s = Math.round(s) - 1, d = Math.round(d) + 1, i > 0) {
                        for (; s < d; ++s) for (l = 1, c = h(s); l < u; ++l) if (!((M = c * l) < i)) {
                            if (M > a) break;
                            g.push(M)
                        }
                    } else for (; s < d; ++s) for (l = u - 1, c = h(s); l >= 1; --l) if (!((M = c * l) < i)) {
                        if (M > a) break;
                        g.push(M)
                    }
                } else g = (0, t.ticks)(s, d, Math.min(d - s, p)).map(h);
                return r ? g.reverse() : g
            }, r.tickFormat = function (t, e) {
                if (null == e && (e = 10 === u ? ".0e" : ","), "function" != typeof e && (e = (0, n.format)(e)), t === 1 / 0) return e;
                null == t && (t = 10);
                var o = Math.max(1, u * t / r.ticks().length);
                return function (t) {
                    var n = t / h(Math.round(f(t)));
                    return n * u < u - .5 && (n *= u), n <= o ? e(t) : ""
                }
            }, r.nice = function () {
                return e((0, o.default)(e(), {
                    floor: function (t) {
                        return h(Math.floor(f(t)))
                    }, ceil: function (t) {
                        return h(Math.ceil(f(t)))
                    }
                }))
            }, r.copy = function () {
                return (0, i.copy)(r, p().base(u))
            }, r
        }
    }, {"d3-array": "K0bd", "d3-format": "VuZR", "./constant": "aCvo", "./nice": "eMTM", "./continuous": "CjJ5"}], "xeRN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = c, exports.sqrt = f;
        var n = require("./constant"), e = o(n), t = require("./linear"), r = require("./continuous"), u = o(r);

        function o(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function i(n, e) {
            return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e)
        }

        function c() {
            var n = 1, o = (0, u.default)(function (t, r) {
                return (r = i(r, n) - (t = i(t, n))) ? function (e) {
                    return (i(e, n) - t) / r
                } : (0, e.default)(r)
            }, function (e, t) {
                return t = i(t, n) - (e = i(e, n)), function (r) {
                    return i(e + t * r, 1 / n)
                }
            }), f = o.domain;
            return o.exponent = function (e) {
                return arguments.length ? (n = +e, f(f())) : n
            }, o.copy = function () {
                return (0, r.copy)(o, c().exponent(n))
            }, (0, t.linearish)(o)
        }

        function f() {
            return c().exponent(.5)
        }
    }, {"./constant": "aCvo", "./linear": "+LIJ", "./continuous": "CjJ5"}], "AGCd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = r;
        var n = require("d3-array"), e = require("./array");

        function r() {
            var t = [], i = [], u = [];

            function a() {
                var e = 0, r = Math.max(1, i.length);
                for (u = new Array(r - 1); ++e < r;) u[e - 1] = (0, n.quantile)(t, e / r);
                return l
            }

            function l(e) {
                if (!isNaN(e = +e)) return i[(0, n.bisect)(u, e)]
            }

            return l.invertExtent = function (n) {
                var e = i.indexOf(n);
                return e < 0 ? [NaN, NaN] : [e > 0 ? u[e - 1] : t[0], e < u.length ? u[e] : t[t.length - 1]]
            }, l.domain = function (e) {
                if (!arguments.length) return t.slice();
                t = [];
                for (var r, i = 0, u = e.length; i < u; ++i) null == (r = e[i]) || isNaN(r = +r) || t.push(r);
                return t.sort(n.ascending), a()
            }, l.range = function (n) {
                return arguments.length ? (i = e.slice.call(n), a()) : i.slice()
            }, l.quantiles = function () {
                return u.slice()
            }, l.copy = function () {
                return r().domain(t).range(i)
            }, l
        }
    }, {"d3-array": "K0bd", "./array": "qoMs"}], "6d6X": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = t;
        var r = require("d3-array"), e = require("./array"), n = require("./linear");

        function t() {
            var i = 0, u = 1, a = 1, o = [.5], c = [0, 1];

            function f(e) {
                if (e <= e) return c[(0, r.bisect)(o, e, 0, a)]
            }

            function l() {
                var r = -1;
                for (o = new Array(a); ++r < a;) o[r] = ((r + 1) * u - (r - a) * i) / (a + 1);
                return f
            }

            return f.domain = function (r) {
                return arguments.length ? (i = +r[0], u = +r[1], l()) : [i, u]
            }, f.range = function (r) {
                return arguments.length ? (a = (c = e.slice.call(r)).length - 1, l()) : c.slice()
            }, f.invertExtent = function (r) {
                var e = c.indexOf(r);
                return e < 0 ? [NaN, NaN] : e < 1 ? [i, o[0]] : e >= a ? [o[a - 1], u] : [o[e - 1], o[e]]
            }, f.copy = function () {
                return t().domain([i, u]).range(c)
            }, (0, n.linearish)(f)
        }
    }, {"d3-array": "K0bd", "./array": "qoMs", "./linear": "+LIJ"}], "7I63": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = r;
        var e = require("d3-array"), n = require("./array");

        function r() {
            var t = [.5], i = [0, 1], u = 1;

            function a(n) {
                if (n <= n) return i[(0, e.bisect)(t, n, 0, u)]
            }

            return a.domain = function (e) {
                return arguments.length ? (t = n.slice.call(e), u = Math.min(t.length, i.length - 1), a) : t.slice()
            }, a.range = function (e) {
                return arguments.length ? (i = n.slice.call(e), u = Math.min(t.length, i.length - 1), a) : i.slice()
            }, a.invertExtent = function (e) {
                var n = i.indexOf(e);
                return [t[n - 1], t[n]]
            }, a.copy = function () {
                return r().domain(t).range(i)
            }, a
        }
    }, {"d3-array": "K0bd", "./array": "qoMs"}], "+QFU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = t;
        var e = new Date, n = new Date;

        function t(r, o, u, f) {
            function i(e) {
                return r(e = new Date(+e)), e
            }

            return i.floor = i, i.ceil = function (e) {
                return r(e = new Date(e - 1)), o(e, 1), r(e), e
            }, i.round = function (e) {
                var n = i(e), t = i.ceil(e);
                return e - n < t - e ? n : t
            }, i.offset = function (e, n) {
                return o(e = new Date(+e), null == n ? 1 : Math.floor(n)), e
            }, i.range = function (e, n, t) {
                var u, f = [];
                if (e = i.ceil(e), t = null == t ? 1 : Math.floor(t), !(e < n && t > 0)) return f;
                do {
                    f.push(u = new Date(+e)), o(e, t), r(e)
                } while (u < e && e < n);
                return f
            }, i.filter = function (e) {
                return t(function (n) {
                    if (n >= n) for (; r(n), !e(n);) n.setTime(n - 1)
                }, function (n, t) {
                    if (n >= n) if (t < 0) for (; ++t <= 0;) for (; o(n, -1), !e(n);) ; else for (; --t >= 0;) for (; o(n, 1), !e(n);) ;
                })
            }, u && (i.count = function (t, o) {
                return e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n))
            }, i.every = function (e) {
                return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? i.filter(f ? function (n) {
                    return f(n) % e == 0
                } : function (n) {
                    return i.count(0, n) % e == 0
                }) : i : null
            }), i
        }
    }, {}], "46WV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.milliseconds = void 0;
        var e = require("./interval"), t = n(e);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = (0, t.default)(function () {
        }, function (e, t) {
            e.setTime(+e + t)
        }, function (e, t) {
            return t - e
        });
        r.every = function (e) {
            return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? (0, t.default)(function (t) {
                t.setTime(Math.floor(t / e) * e)
            }, function (t, n) {
                t.setTime(+t + n * e)
            }, function (t, n) {
                return (n - t) / e
            }) : r : null
        }, exports.default = r;
        var i = exports.milliseconds = r.range;
    }, {"./interval": "+QFU"}], "Vnta": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = exports.durationSecond = 1e3, r = exports.durationMinute = 6e4, t = exports.durationHour = 36e5, o = exports.durationDay = 864e5, u = exports.durationWeek = 6048e5;
    }, {}], "AYLw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.seconds = void 0;
        var e = require("./interval"), t = r(e), n = require("./duration");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = (0, t.default)(function (e) {
            e.setTime(Math.floor(e / n.durationSecond) * n.durationSecond)
        }, function (e, t) {
            e.setTime(+e + t * n.durationSecond)
        }, function (e, t) {
            return (t - e) / n.durationSecond
        }, function (e) {
            return e.getUTCSeconds()
        });
        exports.default = o;
        var u = exports.seconds = o.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "etD9": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.minutes = void 0;
        var e = require("./interval"), t = n(e), u = require("./duration");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = (0, t.default)(function (e) {
            e.setTime(Math.floor(e / u.durationMinute) * u.durationMinute)
        }, function (e, t) {
            e.setTime(+e + t * u.durationMinute)
        }, function (e, t) {
            return (t - e) / u.durationMinute
        }, function (e) {
            return e.getMinutes()
        });
        exports.default = r;
        var i = exports.minutes = r.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "/6py": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.hours = void 0;
        var r = require("./interval"), e = u(r), t = require("./duration");

        function u(r) {
            return r && r.__esModule ? r : {default: r}
        }

        var o = (0, e.default)(function (r) {
            var e = r.getTimezoneOffset() * t.durationMinute % t.durationHour;
            e < 0 && (e += t.durationHour), r.setTime(Math.floor((+r - e) / t.durationHour) * t.durationHour + e)
        }, function (r, e) {
            r.setTime(+r + e * t.durationHour)
        }, function (r, e) {
            return (e - r) / t.durationHour
        }, function (r) {
            return r.getHours()
        });
        exports.default = o;
        var n = exports.hours = o.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "LWrz": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.days = void 0;
        var e = require("./interval"), t = n(e), r = require("./duration");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = (0, t.default)(function (e) {
            e.setHours(0, 0, 0, 0)
        }, function (e, t) {
            e.setDate(e.getDate() + t)
        }, function (e, t) {
            return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * r.durationMinute) / r.durationDay
        }, function (e) {
            return e.getDate() - 1
        });
        exports.default = u;
        var o = exports.days = u.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "Dweu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = void 0;
        var e = require("./interval"), t = r(e), s = require("./duration");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            return (0, t.default)(function (t) {
                t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
            }, function (e, t) {
                e.setDate(e.getDate() + 7 * t)
            }, function (e, t) {
                return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * s.durationMinute) / s.durationWeek
            })
        }

        var o = exports.sunday = a(0), d = exports.monday = a(1), n = exports.tuesday = a(2), u = exports.wednesday = a(3), p = exports.thursday = a(4), y = exports.friday = a(5), x = exports.saturday = a(6), i = exports.sundays = o.range, f = exports.mondays = d.range, g = exports.tuesdays = n.range, c = exports.wednesdays = u.range, l = exports.thursdays = p.range, m = exports.fridays = y.range, v = exports.saturdays = x.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "gOAO": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.months = void 0;
        var t = require("./interval"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var r = (0, e.default)(function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setMonth(t.getMonth() + e)
        }, function (t, e) {
            return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
        }, function (t) {
            return t.getMonth()
        });
        exports.default = r;
        var o = exports.months = r.range;
    }, {"./interval": "+QFU"}], "kReM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.years = void 0;
        var e = require("./interval"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = (0, t.default)(function (e) {
            e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
        }, function (e, t) {
            e.setFullYear(e.getFullYear() + t)
        }, function (e, t) {
            return t.getFullYear() - e.getFullYear()
        }, function (e) {
            return e.getFullYear()
        });
        u.every = function (e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? (0, t.default)(function (t) {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function (t, r) {
                t.setFullYear(t.getFullYear() + r * e)
            }) : null
        }, exports.default = u;
        var l = exports.years = u.range;
    }, {"./interval": "+QFU"}], "O6lW": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcMinutes = void 0;
        var e = require("./interval"), t = n(e), u = require("./duration");

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = (0, t.default)(function (e) {
            e.setUTCSeconds(0, 0)
        }, function (e, t) {
            e.setTime(+e + t * u.durationMinute)
        }, function (e, t) {
            return (t - e) / u.durationMinute
        }, function (e) {
            return e.getUTCMinutes()
        });
        exports.default = r;
        var i = exports.utcMinutes = r.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "qnVA": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcHours = void 0;
        var e = require("./interval"), r = u(e), t = require("./duration");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = (0, r.default)(function (e) {
            e.setUTCMinutes(0, 0, 0)
        }, function (e, r) {
            e.setTime(+e + r * t.durationHour)
        }, function (e, r) {
            return (r - e) / t.durationHour
        }, function (e) {
            return e.getUTCHours()
        });
        exports.default = o;
        var n = exports.utcHours = o.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "HXiV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcDays = void 0;
        var e = require("./interval"), t = u(e), r = require("./duration");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var n = (0, t.default)(function (e) {
            e.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
            e.setUTCDate(e.getUTCDate() + t)
        }, function (e, t) {
            return (t - e) / r.durationDay
        }, function (e) {
            return e.getUTCDate() - 1
        });
        exports.default = n;
        var a = exports.utcDays = n.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "CRXo": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = void 0;
        var t = require("./interval"), e = s(t), r = require("./duration");

        function s(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function u(t) {
            return (0, e.default)(function (e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0)
            }, function (t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }, function (t, e) {
                return (e - t) / r.durationWeek
            })
        }

        var a = exports.utcSunday = u(0), o = exports.utcMonday = u(1), d = exports.utcTuesday = u(2), n = exports.utcWednesday = u(3), c = exports.utcThursday = u(4), p = exports.utcFriday = u(5), y = exports.utcSaturday = u(6), x = exports.utcSundays = a.range, i = exports.utcMondays = o.range, T = exports.utcTuesdays = d.range, g = exports.utcWednesdays = n.range, f = exports.utcThursdays = c.range, S = exports.utcFridays = p.range, l = exports.utcSaturdays = y.range;
    }, {"./interval": "+QFU", "./duration": "Vnta"}], "EphR": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcMonths = void 0;
        var t = require("./interval"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        var r = (0, e.default)(function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, e) {
            t.setUTCMonth(t.getUTCMonth() + e)
        }, function (t, e) {
            return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
        }, function (t) {
            return t.getUTCMonth()
        });
        exports.default = r;
        var o = exports.utcMonths = r.range;
    }, {"./interval": "+QFU"}], "Abfv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcYears = void 0;
        var e = require("./interval"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var u = (0, t.default)(function (e) {
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
        }, function (e, t) {
            e.setUTCFullYear(e.getUTCFullYear() + t)
        }, function (e, t) {
            return t.getUTCFullYear() - e.getUTCFullYear()
        }, function (e) {
            return e.getUTCFullYear()
        });
        u.every = function (e) {
            return isFinite(e = Math.floor(e)) && e > 0 ? (0, t.default)(function (t) {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function (t, r) {
                t.setUTCFullYear(t.getUTCFullYear() + r * e)
            }) : null
        }, exports.default = u;
        var l = exports.utcYears = u.range;
    }, {"./interval": "+QFU"}], "0hQY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./interval");
        Object.defineProperty(exports, "timeInterval", {
            enumerable: !0, get: function () {
                return m(e).default
            }
        });
        var t = require("./millisecond");
        Object.defineProperty(exports, "timeMillisecond", {
            enumerable: !0, get: function () {
                return m(t).default
            }
        }), Object.defineProperty(exports, "timeMilliseconds", {
            enumerable: !0, get: function () {
                return t.milliseconds
            }
        }), Object.defineProperty(exports, "utcMillisecond", {
            enumerable: !0, get: function () {
                return m(t).default
            }
        }), Object.defineProperty(exports, "utcMilliseconds", {
            enumerable: !0, get: function () {
                return t.milliseconds
            }
        });
        var r = require("./second");
        Object.defineProperty(exports, "timeSecond", {
            enumerable: !0, get: function () {
                return m(r).default
            }
        }), Object.defineProperty(exports, "timeSeconds", {
            enumerable: !0, get: function () {
                return r.seconds
            }
        }), Object.defineProperty(exports, "utcSecond", {
            enumerable: !0, get: function () {
                return m(r).default
            }
        }), Object.defineProperty(exports, "utcSeconds", {
            enumerable: !0, get: function () {
                return r.seconds
            }
        });
        var n = require("./minute");
        Object.defineProperty(exports, "timeMinute", {
            enumerable: !0, get: function () {
                return m(n).default
            }
        }), Object.defineProperty(exports, "timeMinutes", {
            enumerable: !0, get: function () {
                return n.minutes
            }
        });
        var u = require("./hour");
        Object.defineProperty(exports, "timeHour", {
            enumerable: !0, get: function () {
                return m(u).default
            }
        }), Object.defineProperty(exports, "timeHours", {
            enumerable: !0, get: function () {
                return u.hours
            }
        });
        var o = require("./day");
        Object.defineProperty(exports, "timeDay", {
            enumerable: !0, get: function () {
                return m(o).default
            }
        }), Object.defineProperty(exports, "timeDays", {
            enumerable: !0, get: function () {
                return o.days
            }
        });
        var i = require("./week");
        Object.defineProperty(exports, "timeWeek", {
            enumerable: !0, get: function () {
                return i.sunday
            }
        }), Object.defineProperty(exports, "timeWeeks", {
            enumerable: !0, get: function () {
                return i.sundays
            }
        }), Object.defineProperty(exports, "timeSunday", {
            enumerable: !0, get: function () {
                return i.sunday
            }
        }), Object.defineProperty(exports, "timeSundays", {
            enumerable: !0, get: function () {
                return i.sundays
            }
        }), Object.defineProperty(exports, "timeMonday", {
            enumerable: !0, get: function () {
                return i.monday
            }
        }), Object.defineProperty(exports, "timeMondays", {
            enumerable: !0, get: function () {
                return i.mondays
            }
        }), Object.defineProperty(exports, "timeTuesday", {
            enumerable: !0, get: function () {
                return i.tuesday
            }
        }), Object.defineProperty(exports, "timeTuesdays", {
            enumerable: !0, get: function () {
                return i.tuesdays
            }
        }), Object.defineProperty(exports, "timeWednesday", {
            enumerable: !0, get: function () {
                return i.wednesday
            }
        }), Object.defineProperty(exports, "timeWednesdays", {
            enumerable: !0, get: function () {
                return i.wednesdays
            }
        }), Object.defineProperty(exports, "timeThursday", {
            enumerable: !0, get: function () {
                return i.thursday
            }
        }), Object.defineProperty(exports, "timeThursdays", {
            enumerable: !0, get: function () {
                return i.thursdays
            }
        }), Object.defineProperty(exports, "timeFriday", {
            enumerable: !0, get: function () {
                return i.friday
            }
        }), Object.defineProperty(exports, "timeFridays", {
            enumerable: !0, get: function () {
                return i.fridays
            }
        }), Object.defineProperty(exports, "timeSaturday", {
            enumerable: !0, get: function () {
                return i.saturday
            }
        }), Object.defineProperty(exports, "timeSaturdays", {
            enumerable: !0, get: function () {
                return i.saturdays
            }
        });
        var c = require("./month");
        Object.defineProperty(exports, "timeMonth", {
            enumerable: !0, get: function () {
                return m(c).default
            }
        }), Object.defineProperty(exports, "timeMonths", {
            enumerable: !0, get: function () {
                return c.months
            }
        });
        var a = require("./year");
        Object.defineProperty(exports, "timeYear", {
            enumerable: !0, get: function () {
                return m(a).default
            }
        }), Object.defineProperty(exports, "timeYears", {
            enumerable: !0, get: function () {
                return a.years
            }
        });
        var s = require("./utcMinute");
        Object.defineProperty(exports, "utcMinute", {
            enumerable: !0, get: function () {
                return m(s).default
            }
        }), Object.defineProperty(exports, "utcMinutes", {
            enumerable: !0, get: function () {
                return s.utcMinutes
            }
        });
        var d = require("./utcHour");
        Object.defineProperty(exports, "utcHour", {
            enumerable: !0, get: function () {
                return m(d).default
            }
        }), Object.defineProperty(exports, "utcHours", {
            enumerable: !0, get: function () {
                return d.utcHours
            }
        });
        var f = require("./utcDay");
        Object.defineProperty(exports, "utcDay", {
            enumerable: !0, get: function () {
                return m(f).default
            }
        }), Object.defineProperty(exports, "utcDays", {
            enumerable: !0, get: function () {
                return f.utcDays
            }
        });
        var y = require("./utcWeek");
        Object.defineProperty(exports, "utcWeek", {
            enumerable: !0, get: function () {
                return y.utcSunday
            }
        }), Object.defineProperty(exports, "utcWeeks", {
            enumerable: !0, get: function () {
                return y.utcSundays
            }
        }), Object.defineProperty(exports, "utcSunday", {
            enumerable: !0, get: function () {
                return y.utcSunday
            }
        }), Object.defineProperty(exports, "utcSundays", {
            enumerable: !0, get: function () {
                return y.utcSundays
            }
        }), Object.defineProperty(exports, "utcMonday", {
            enumerable: !0, get: function () {
                return y.utcMonday
            }
        }), Object.defineProperty(exports, "utcMondays", {
            enumerable: !0, get: function () {
                return y.utcMondays
            }
        }), Object.defineProperty(exports, "utcTuesday", {
            enumerable: !0, get: function () {
                return y.utcTuesday
            }
        }), Object.defineProperty(exports, "utcTuesdays", {
            enumerable: !0, get: function () {
                return y.utcTuesdays
            }
        }), Object.defineProperty(exports, "utcWednesday", {
            enumerable: !0, get: function () {
                return y.utcWednesday
            }
        }), Object.defineProperty(exports, "utcWednesdays", {
            enumerable: !0, get: function () {
                return y.utcWednesdays
            }
        }), Object.defineProperty(exports, "utcThursday", {
            enumerable: !0, get: function () {
                return y.utcThursday
            }
        }), Object.defineProperty(exports, "utcThursdays", {
            enumerable: !0, get: function () {
                return y.utcThursdays
            }
        }), Object.defineProperty(exports, "utcFriday", {
            enumerable: !0, get: function () {
                return y.utcFriday
            }
        }), Object.defineProperty(exports, "utcFridays", {
            enumerable: !0, get: function () {
                return y.utcFridays
            }
        }), Object.defineProperty(exports, "utcSaturday", {
            enumerable: !0, get: function () {
                return y.utcSaturday
            }
        }), Object.defineProperty(exports, "utcSaturdays", {
            enumerable: !0, get: function () {
                return y.utcSaturdays
            }
        });
        var p = require("./utcMonth");
        Object.defineProperty(exports, "utcMonth", {
            enumerable: !0, get: function () {
                return m(p).default
            }
        }), Object.defineProperty(exports, "utcMonths", {
            enumerable: !0, get: function () {
                return p.utcMonths
            }
        });
        var b = require("./utcYear");

        function m(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "utcYear", {
            enumerable: !0, get: function () {
                return m(b).default
            }
        }), Object.defineProperty(exports, "utcYears", {
            enumerable: !0, get: function () {
                return b.utcYears
            }
        });
    }, {"./interval": "+QFU", "./millisecond": "46WV", "./second": "AYLw", "./minute": "etD9", "./hour": "/6py", "./day": "LWrz", "./week": "Dweu", "./month": "gOAO", "./year": "kReM", "./utcMinute": "O6lW", "./utcHour": "qnVA", "./utcDay": "HXiV", "./utcWeek": "CRXo", "./utcMonth": "EphR", "./utcYear": "Abfv"}], "UbHU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = u;
        var n = require("d3-time");

        function t(n) {
            if (0 <= n.y && n.y < 100) {
                var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
                return t.setFullYear(n.y), t
            }
            return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L)
        }

        function e(n) {
            if (0 <= n.y && n.y < 100) {
                var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
                return t.setUTCFullYear(n.y), t
            }
            return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L))
        }

        function r(n) {
            return {y: n, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
        }

        function u(u) {
            var i = u.dateTime, o = u.date, a = u.time, f = u.periods, l = u.days, vn = u.shortDays, mn = u.months, Cn = u.shortMonths, Dn = g(f), Tn = s(f), xn = g(l), Mn = s(l), Un = g(vn), wn = s(vn), Yn = g(mn), Hn = s(mn), pn = g(Cn), Sn = s(Cn), Ln = {
                a: function (n) {
                    return vn[n.getDay()]
                }, A: function (n) {
                    return l[n.getDay()]
                }, b: function (n) {
                    return Cn[n.getMonth()]
                }, B: function (n) {
                    return mn[n.getMonth()]
                }, c: null, d: F, e: F, f: X, H: V, I: W, j: j, L: Q, m: b, M: B, p: function (n) {
                    return f[+(n.getHours() >= 12)]
                }, Q: yn, s: dn, S: I, u: _, U: O, V: P, w: $, W: q, x: null, X: null, y: z, Y: E, Z: R, "%": hn
            }, An = {
                a: function (n) {
                    return vn[n.getUTCDay()]
                }, A: function (n) {
                    return l[n.getUTCDay()]
                }, b: function (n) {
                    return Cn[n.getUTCMonth()]
                }, B: function (n) {
                    return mn[n.getUTCMonth()]
                }, c: null, d: k, e: k, f: nn, H: G, I: J, j: K, L: N, m: tn, M: en, p: function (n) {
                    return f[+(n.getUTCHours() >= 12)]
                }, Q: yn, s: dn, S: rn, u: un, U: cn, V: on, w: an, W: fn, x: null, X: null, y: ln, Y: gn, Z: sn, "%": hn
            }, Zn = {
                a: function (n, t, e) {
                    var r = Un.exec(t.slice(e));
                    return r ? (n.w = wn[r[0].toLowerCase()], e + r[0].length) : -1
                }, A: function (n, t, e) {
                    var r = xn.exec(t.slice(e));
                    return r ? (n.w = Mn[r[0].toLowerCase()], e + r[0].length) : -1
                }, b: function (n, t, e) {
                    var r = pn.exec(t.slice(e));
                    return r ? (n.m = Sn[r[0].toLowerCase()], e + r[0].length) : -1
                }, B: function (n, t, e) {
                    var r = Yn.exec(t.slice(e));
                    return r ? (n.m = Hn[r[0].toLowerCase()], e + r[0].length) : -1
                }, c: function (n, t, e) {
                    return Wn(n, i, t, e)
                }, d: M, e: M, f: S, H: w, I: w, j: U, L: p, m: x, M: Y, p: function (n, t, e) {
                    var r = Dn.exec(t.slice(e));
                    return r ? (n.p = Tn[r[0].toLowerCase()], e + r[0].length) : -1
                }, Q: A, s: Z, S: H, u: y, U: d, V: v, w: h, W: m, x: function (n, t, e) {
                    return Wn(n, o, t, e)
                }, X: function (n, t, e) {
                    return Wn(n, a, t, e)
                }, y: D, Y: C, Z: T, "%": L
            };

            function Fn(n, t) {
                return function (e) {
                    var r, u, i, o = [], a = -1, f = 0, l = n.length;
                    for (e instanceof Date || (e = new Date(+e)); ++a < l;) 37 === n.charCodeAt(a) && (o.push(n.slice(f, a)), null != (u = c[r = n.charAt(++a)]) ? r = n.charAt(++a) : u = "e" === r ? " " : "0", (i = t[r]) && (r = i(e, u)), o.push(r), f = a + 1);
                    return o.push(n.slice(f, a)), o.join("")
                }
            }

            function Vn(t, u) {
                return function (c) {
                    var i, o, a = r(1900);
                    if (Wn(a, t, c += "", 0) != c.length) return null;
                    if ("Q" in a) return new Date(a.Q);
                    if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                        if (a.V < 1 || a.V > 53) return null;
                        "w" in a || (a.w = 1), "Z" in a ? (o = (i = e(r(a.y))).getUTCDay(), i = o > 4 || 0 === o ? n.utcMonday.ceil(i) : (0, n.utcMonday)(i), i = n.utcDay.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (o = (i = u(r(a.y))).getDay(), i = o > 4 || 0 === o ? n.timeMonday.ceil(i) : (0, n.timeMonday)(i), i = n.timeDay.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                    } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? e(r(a.y)).getUTCDay() : u(r(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);
                    return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, e(a)) : u(a)
                }
            }

            function Wn(n, t, e, r) {
                for (var u, i, o = 0, a = t.length, f = e.length; o < a;) {
                    if (r >= f) return -1;
                    if (37 === (u = t.charCodeAt(o++))) {
                        if (u = t.charAt(o++), !(i = Zn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0) return -1
                    } else if (u != e.charCodeAt(r++)) return -1
                }
                return r
            }

            return Ln.x = Fn(o, Ln), Ln.X = Fn(a, Ln), Ln.c = Fn(i, Ln), An.x = Fn(o, An), An.X = Fn(a, An), An.c = Fn(i, An), {
                format: function (n) {
                    var t = Fn(n += "", Ln);
                    return t.toString = function () {
                        return n
                    }, t
                }, parse: function (n) {
                    var e = Vn(n += "", t);
                    return e.toString = function () {
                        return n
                    }, e
                }, utcFormat: function (n) {
                    var t = Fn(n += "", An);
                    return t.toString = function () {
                        return n
                    }, t
                }, utcParse: function (n) {
                    var t = Vn(n, e);
                    return t.toString = function () {
                        return n
                    }, t
                }
            }
        }

        var c = {"-": "", _: " ", 0: "0"}, i = /^\s*\d+/, o = /^%/, a = /[\\^$*+?|[\]().{}]/g;

        function f(n, t, e) {
            var r = n < 0 ? "-" : "", u = (r ? -n : n) + "", c = u.length;
            return r + (c < e ? new Array(e - c + 1).join(t) + u : u)
        }

        function l(n) {
            return n.replace(a, "\\$&")
        }

        function g(n) {
            return new RegExp("^(?:" + n.map(l).join("|") + ")", "i")
        }

        function s(n) {
            for (var t = {}, e = -1, r = n.length; ++e < r;) t[n[e].toLowerCase()] = e;
            return t
        }

        function h(n, t, e) {
            var r = i.exec(t.slice(e, e + 1));
            return r ? (n.w = +r[0], e + r[0].length) : -1
        }

        function y(n, t, e) {
            var r = i.exec(t.slice(e, e + 1));
            return r ? (n.u = +r[0], e + r[0].length) : -1
        }

        function d(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.U = +r[0], e + r[0].length) : -1
        }

        function v(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.V = +r[0], e + r[0].length) : -1
        }

        function m(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.W = +r[0], e + r[0].length) : -1
        }

        function C(n, t, e) {
            var r = i.exec(t.slice(e, e + 4));
            return r ? (n.y = +r[0], e + r[0].length) : -1
        }

        function D(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
        }

        function T(n, t, e) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
            return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
        }

        function x(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.m = r[0] - 1, e + r[0].length) : -1
        }

        function M(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.d = +r[0], e + r[0].length) : -1
        }

        function U(n, t, e) {
            var r = i.exec(t.slice(e, e + 3));
            return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1
        }

        function w(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.H = +r[0], e + r[0].length) : -1
        }

        function Y(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.M = +r[0], e + r[0].length) : -1
        }

        function H(n, t, e) {
            var r = i.exec(t.slice(e, e + 2));
            return r ? (n.S = +r[0], e + r[0].length) : -1
        }

        function p(n, t, e) {
            var r = i.exec(t.slice(e, e + 3));
            return r ? (n.L = +r[0], e + r[0].length) : -1
        }

        function S(n, t, e) {
            var r = i.exec(t.slice(e, e + 6));
            return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
        }

        function L(n, t, e) {
            var r = o.exec(t.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function A(n, t, e) {
            var r = i.exec(t.slice(e));
            return r ? (n.Q = +r[0], e + r[0].length) : -1
        }

        function Z(n, t, e) {
            var r = i.exec(t.slice(e));
            return r ? (n.Q = 1e3 * +r[0], e + r[0].length) : -1
        }

        function F(n, t) {
            return f(n.getDate(), t, 2)
        }

        function V(n, t) {
            return f(n.getHours(), t, 2)
        }

        function W(n, t) {
            return f(n.getHours() % 12 || 12, t, 2)
        }

        function j(t, e) {
            return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3)
        }

        function Q(n, t) {
            return f(n.getMilliseconds(), t, 3)
        }

        function X(n, t) {
            return Q(n, t) + "000"
        }

        function b(n, t) {
            return f(n.getMonth() + 1, t, 2)
        }

        function B(n, t) {
            return f(n.getMinutes(), t, 2)
        }

        function I(n, t) {
            return f(n.getSeconds(), t, 2)
        }

        function _(n) {
            var t = n.getDay();
            return 0 === t ? 7 : t
        }

        function O(t, e) {
            return f(n.timeSunday.count((0, n.timeYear)(t), t), e, 2)
        }

        function P(t, e) {
            var r = t.getDay();
            return t = r >= 4 || 0 === r ? (0, n.timeThursday)(t) : n.timeThursday.ceil(t), f(n.timeThursday.count((0, n.timeYear)(t), t) + (4 === (0, n.timeYear)(t).getDay()), e, 2)
        }

        function $(n) {
            return n.getDay()
        }

        function q(t, e) {
            return f(n.timeMonday.count((0, n.timeYear)(t), t), e, 2)
        }

        function z(n, t) {
            return f(n.getFullYear() % 100, t, 2)
        }

        function E(n, t) {
            return f(n.getFullYear() % 1e4, t, 4)
        }

        function R(n) {
            var t = n.getTimezoneOffset();
            return (t > 0 ? "-" : (t *= -1, "+")) + f(t / 60 | 0, "0", 2) + f(t % 60, "0", 2)
        }

        function k(n, t) {
            return f(n.getUTCDate(), t, 2)
        }

        function G(n, t) {
            return f(n.getUTCHours(), t, 2)
        }

        function J(n, t) {
            return f(n.getUTCHours() % 12 || 12, t, 2)
        }

        function K(t, e) {
            return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3)
        }

        function N(n, t) {
            return f(n.getUTCMilliseconds(), t, 3)
        }

        function nn(n, t) {
            return N(n, t) + "000"
        }

        function tn(n, t) {
            return f(n.getUTCMonth() + 1, t, 2)
        }

        function en(n, t) {
            return f(n.getUTCMinutes(), t, 2)
        }

        function rn(n, t) {
            return f(n.getUTCSeconds(), t, 2)
        }

        function un(n) {
            var t = n.getUTCDay();
            return 0 === t ? 7 : t
        }

        function cn(t, e) {
            return f(n.utcSunday.count((0, n.utcYear)(t), t), e, 2)
        }

        function on(t, e) {
            var r = t.getUTCDay();
            return t = r >= 4 || 0 === r ? (0, n.utcThursday)(t) : n.utcThursday.ceil(t), f(n.utcThursday.count((0, n.utcYear)(t), t) + (4 === (0, n.utcYear)(t).getUTCDay()), e, 2)
        }

        function an(n) {
            return n.getUTCDay()
        }

        function fn(t, e) {
            return f(n.utcMonday.count((0, n.utcYear)(t), t), e, 2)
        }

        function ln(n, t) {
            return f(n.getUTCFullYear() % 100, t, 2)
        }

        function gn(n, t) {
            return f(n.getUTCFullYear() % 1e4, t, 4)
        }

        function sn() {
            return "+0000"
        }

        function hn() {
            return "%"
        }

        function yn(n) {
            return +n
        }

        function dn(n) {
            return Math.floor(+n / 1e3)
        }
    }, {"d3-time": "0hQY"}], "5csj": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = void 0, exports.default = i;
        var e, t = require("./locale"), r = a(t);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var o = exports.timeFormat = void 0, s = exports.timeParse = void 0, u = exports.utcFormat = void 0, d = exports.utcParse = void 0;

        function i(t) {
            return e = (0, r.default)(t), exports.timeFormat = o = e.format, exports.timeParse = s = e.parse, exports.utcFormat = u = e.utcFormat, exports.utcParse = d = e.utcParse, e
        }

        i({dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
    }, {"./locale": "UbHU"}], "PKKZ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.isoSpecifier = void 0;
        var e = require("./defaultLocale"), t = exports.isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

        function r(e) {
            return e.toISOString()
        }

        var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t);
        exports.default = o;
    }, {"./defaultLocale": "5csj"}], "d4jk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./isoFormat"), r = require("./defaultLocale");

        function t(e) {
            var r = new Date(e);
            return isNaN(r) ? null : r
        }

        var a = +new Date("2000-01-01T00:00:00.000Z") ? t : (0, r.utcParse)(e.isoSpecifier);
        exports.default = a;
    }, {"./isoFormat": "PKKZ", "./defaultLocale": "5csj"}], "UYpZ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./defaultLocale");
        Object.defineProperty(exports, "timeFormatDefaultLocale", {
            enumerable: !0, get: function () {
                return u(e).default
            }
        }), Object.defineProperty(exports, "timeFormat", {
            enumerable: !0, get: function () {
                return e.timeFormat
            }
        }), Object.defineProperty(exports, "timeParse", {
            enumerable: !0, get: function () {
                return e.timeParse
            }
        }), Object.defineProperty(exports, "utcFormat", {
            enumerable: !0, get: function () {
                return e.utcFormat
            }
        }), Object.defineProperty(exports, "utcParse", {
            enumerable: !0, get: function () {
                return e.utcParse
            }
        });
        var r = require("./locale");
        Object.defineProperty(exports, "timeFormatLocale", {
            enumerable: !0, get: function () {
                return u(r).default
            }
        });
        var t = require("./isoFormat");
        Object.defineProperty(exports, "isoFormat", {
            enumerable: !0, get: function () {
                return u(t).default
            }
        });
        var o = require("./isoParse");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "isoParse", {
            enumerable: !0, get: function () {
                return u(o).default
            }
        });
    }, {"./defaultLocale": "5csj", "./locale": "UbHU", "./isoFormat": "PKKZ", "./isoParse": "d4jk"}], "kVXt": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.calendar = q, exports.default = function () {
            return q(r.timeYear, r.timeMonth, r.timeWeek, r.timeDay, r.timeHour, r.timeMinute, r.timeSecond, r.timeMillisecond, n.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        };
        var e = require("d3-array"), t = require("d3-interpolate"), r = require("d3-time"), n = require("d3-time-format"), i = require("./array"), u = require("./continuous"), a = l(u), o = require("./nice"), c = l(o);

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var f = 1e3, m = 60 * f, d = 60 * m, p = 24 * d, s = 7 * p, v = 30 * p, h = 365 * p;

        function y(e) {
            return new Date(e)
        }

        function M(e) {
            return e instanceof Date ? +e : +new Date(+e)
        }

        function q(r, n, o, l, D, b, g, k, w) {
            var x = (0, a.default)(u.deinterpolateLinear, t.interpolateNumber), S = x.invert, _ = x.domain, F = w(".%L"), I = w(":%S"), L = w("%I:%M"), Y = w("%I %p"), j = w("%a %d"), B = w("%b %d"), H = w("%B"), N = w("%Y"), O = [[g, 1, f], [g, 5, 5 * f], [g, 15, 15 * f], [g, 30, 30 * f], [b, 1, m], [b, 5, 5 * m], [b, 15, 15 * m], [b, 30, 30 * m], [D, 1, d], [D, 3, 3 * d], [D, 6, 6 * d], [D, 12, 12 * d], [l, 1, p], [l, 2, 2 * p], [o, 1, s], [n, 1, v], [n, 3, 3 * v], [r, 1, h]];

            function P(e) {
                return (g(e) < e ? F : b(e) < e ? I : D(e) < e ? L : l(e) < e ? Y : n(e) < e ? o(e) < e ? j : B : r(e) < e ? H : N)(e)
            }

            function W(t, n, i, u) {
                if (null == t && (t = 10), "number" == typeof t) {
                    var a = Math.abs(i - n) / t, o = (0, e.bisector)(function (e) {
                        return e[2]
                    }).right(O, a);
                    o === O.length ? (u = (0, e.tickStep)(n / h, i / h, t), t = r) : o ? (u = (o = O[a / O[o - 1][2] < O[o][2] / a ? o - 1 : o])[1], t = o[0]) : (u = Math.max((0, e.tickStep)(n, i, t), 1), t = k)
                }
                return null == u ? t : t.every(u)
            }

            return x.invert = function (e) {
                return new Date(S(e))
            }, x.domain = function (e) {
                return arguments.length ? _(i.map.call(e, M)) : _().map(y)
            }, x.ticks = function (e, t) {
                var r, n = _(), i = n[0], u = n[n.length - 1], a = u < i;
                return a && (r = i, i = u, u = r), r = (r = W(e, i, u, t)) ? r.range(i, u + 1) : [], a ? r.reverse() : r
            }, x.tickFormat = function (e, t) {
                return null == t ? P : w(t)
            }, x.nice = function (e, t) {
                var r = _();
                return (e = W(e, r[0], r[r.length - 1], t)) ? _((0, c.default)(r, e)) : x
            }, x.copy = function () {
                return (0, u.copy)(x, q(r, n, o, l, D, b, g, k, w))
            }, x
        }
    }, {"d3-array": "K0bd", "d3-interpolate": "k9aH", "d3-time": "0hQY", "d3-time-format": "UYpZ", "./array": "qoMs", "./continuous": "CjJ5", "./nice": "eMTM"}], "6Wrb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            return (0, e.calendar)(u.utcYear, u.utcMonth, u.utcWeek, u.utcDay, u.utcHour, u.utcMinute, u.utcSecond, u.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        };
        var e = require("./time"), t = require("d3-time-format"), u = require("d3-time");
    }, {"./time": "kVXt", "d3-time-format": "UYpZ", "d3-time": "0hQY"}], "J7VY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = r;
        var n = require("./linear");

        function r(t) {
            var e = 0, u = 1, i = 1, a = !1;

            function o(n) {
                var r = (n - e) * i;
                return t(a ? Math.max(0, Math.min(1, r)) : r)
            }

            return o.domain = function (n) {
                return arguments.length ? (e = +n[0], u = +n[1], i = e === u ? 0 : 1 / (u - e), o) : [e, u]
            }, o.clamp = function (n) {
                return arguments.length ? (a = !!n, o) : a
            }, o.interpolator = function (n) {
                return arguments.length ? (t = n, o) : t
            }, o.copy = function () {
                return r(t).domain([e, u]).clamp(a)
            }, (0, n.linearish)(o)
        }
    }, {"./linear": "+LIJ"}], "CLse": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = r;
        var n = require("./linear");

        function r(t) {
            var e = 0, u = .5, i = 1, a = 1, o = 1, c = !1;

            function l(n) {
                var r = .5 + ((n = +n) - u) * (n < u ? a : o);
                return t(c ? Math.max(0, Math.min(1, r)) : r)
            }

            return l.domain = function (n) {
                return arguments.length ? (e = +n[0], u = +n[1], i = +n[2], a = e === u ? 0 : .5 / (u - e), o = u === i ? 0 : .5 / (i - u), l) : [e, u, i]
            }, l.clamp = function (n) {
                return arguments.length ? (c = !!n, l) : c
            }, l.interpolator = function (n) {
                return arguments.length ? (t = n, l) : t
            }, l.copy = function () {
                return r(t).domain([e, u, i]).clamp(c)
            }, (0, n.linearish)(l)
        }
    }, {"./linear": "+LIJ"}], "zL2z": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./band");
        Object.defineProperty(exports, "scaleBand", {
            enumerable: !0, get: function () {
                return p(e).default
            }
        }), Object.defineProperty(exports, "scalePoint", {
            enumerable: !0, get: function () {
                return e.point
            }
        });
        var r = require("./identity");
        Object.defineProperty(exports, "scaleIdentity", {
            enumerable: !0, get: function () {
                return p(r).default
            }
        });
        var t = require("./linear");
        Object.defineProperty(exports, "scaleLinear", {
            enumerable: !0, get: function () {
                return p(t).default
            }
        });
        var n = require("./log");
        Object.defineProperty(exports, "scaleLog", {
            enumerable: !0, get: function () {
                return p(n).default
            }
        });
        var u = require("./ordinal");
        Object.defineProperty(exports, "scaleOrdinal", {
            enumerable: !0, get: function () {
                return p(u).default
            }
        }), Object.defineProperty(exports, "scaleImplicit", {
            enumerable: !0, get: function () {
                return u.implicit
            }
        });
        var i = require("./pow");
        Object.defineProperty(exports, "scalePow", {
            enumerable: !0, get: function () {
                return p(i).default
            }
        }), Object.defineProperty(exports, "scaleSqrt", {
            enumerable: !0, get: function () {
                return i.sqrt
            }
        });
        var a = require("./quantile");
        Object.defineProperty(exports, "scaleQuantile", {
            enumerable: !0, get: function () {
                return p(a).default
            }
        });
        var o = require("./quantize");
        Object.defineProperty(exports, "scaleQuantize", {
            enumerable: !0, get: function () {
                return p(o).default
            }
        });
        var l = require("./threshold");
        Object.defineProperty(exports, "scaleThreshold", {
            enumerable: !0, get: function () {
                return p(l).default
            }
        });
        var c = require("./time");
        Object.defineProperty(exports, "scaleTime", {
            enumerable: !0, get: function () {
                return p(c).default
            }
        });
        var f = require("./utcTime");
        Object.defineProperty(exports, "scaleUtc", {
            enumerable: !0, get: function () {
                return p(f).default
            }
        });
        var d = require("./sequential");
        Object.defineProperty(exports, "scaleSequential", {
            enumerable: !0, get: function () {
                return p(d).default
            }
        });
        var s = require("./diverging");

        function p(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "scaleDiverging", {
            enumerable: !0, get: function () {
                return p(s).default
            }
        });
    }, {"./band": "BAgl", "./identity": "FKHe", "./linear": "+LIJ", "./log": "ea59", "./ordinal": "GjLX", "./pow": "xeRN", "./quantile": "AGCd", "./quantize": "6d6X", "./threshold": "7I63", "./time": "kVXt", "./utcTime": "6Wrb", "./sequential": "J7VY", "./diverging": "CLse"}], "xz73": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var r = e.length / 6 | 0, t = new Array(r), n = 0; n < r;) t[n] = "#" + e.slice(6 * n, 6 * ++n);
            return t
        };
    }, {}], "dTYe": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), f = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, f.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    }, {"../colors": "xz73"}], "o8vx": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), f = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, f.default)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
    }, {"../colors": "xz73"}], "regV": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, r.default)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    }, {"../colors": "xz73"}], "E9sC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), f = a(e);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, f.default)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    }, {"../colors": "xz73"}], "RCRU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), f = d(e);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, f.default)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
    }, {"../colors": "xz73"}], "QfGF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), c = f(e);

        function f(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, c.default)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
    }, {"../colors": "xz73"}], "IldB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), f = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, f.default)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
    }, {"../colors": "xz73"}], "KR9o": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, r.default)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    }, {"../colors": "xz73"}], "XNXw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../colors"), d = f(e);

        function f(e) {
            return e && e.__esModule ? e : {default: e}
        }

        exports.default = (0, d.default)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    }, {"../colors": "xz73"}], "MNyl": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return (0, e.interpolateRgbBasis)(t[t.length - 1])
        };
        var e = require("d3-interpolate");
    }, {"d3-interpolate": "k9aH"}], "ArEB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), c = d(e), f = require("../ramp"), a = d(f);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(c.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "kzYK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var a = require("../colors"), e = b(a), f = require("../ramp"), d = b(f);

        function b(a) {
            return a && a.__esModule ? a : {default: a}
        }

        var c = exports.scheme = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(e.default);
        exports.default = (0, d.default)(c);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "PI8x": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), d = b(e), f = require("../ramp"), a = b(f);

        function b(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = exports.scheme = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(d.default);
        exports.default = (0, a.default)(c);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "h8TC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), b = a(e), f = require("../ramp"), d = a(f);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(b.default);
        exports.default = (0, d.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "+i3r": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = a(f), d = require("../ramp"), c = a(d);

        function a(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var b = exports.scheme = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(e.default);
        exports.default = (0, c.default)(b);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "WaJg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = b(f), a = require("../ramp"), d = b(a);

        function b(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(e.default);
        exports.default = (0, d.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "Jvs/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = b(f), d = require("../ramp"), a = b(d);

        function b(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(e.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "9K9l": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = b(f), d = require("../ramp"), a = b(d);

        function b(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(e.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "rXym": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = b(f), d = require("../ramp"), a = b(d);

        function b(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(e.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "1KGB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), c = d(e), f = require("../ramp"), a = d(f);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(c.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "lAoh": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), c = b(e), d = require("../ramp"), f = b(d);

        function b(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = exports.scheme = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(c.default);
        exports.default = (0, f.default)(a);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "ZoIf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var c = require("../colors"), e = d(c), b = require("../ramp"), a = d(b);

        function d(c) {
            return c && c.__esModule ? c : {default: c}
        }

        var f = exports.scheme = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(e.default);
        exports.default = (0, a.default)(f);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "+7Si": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), f = r(e), d = require("../ramp"), c = r(d);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = exports.scheme = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(f.default);
        exports.default = (0, c.default)(a);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "vp6S": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), f = a(e), c = require("../ramp"), d = a(c);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(f.default);
        exports.default = (0, d.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "Wfss": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), d = a(e), f = require("../ramp"), b = a(f);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = exports.scheme = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(d.default);
        exports.default = (0, b.default)(c);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "NZPG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), d = r(e), f = require("../ramp"), c = r(f);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = exports.scheme = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(d.default);
        exports.default = (0, c.default)(a);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "fzkB": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), f = d(e), a = require("../ramp"), c = d(a);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var b = exports.scheme = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(f.default);
        exports.default = (0, c.default)(b);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "fL+1": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var c = require("../colors"), f = d(c), e = require("../ramp"), b = d(e);

        function d(c) {
            return c && c.__esModule ? c : {default: c}
        }

        var a = exports.scheme = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(f.default);
        exports.default = (0, b.default)(a);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "xEGO": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = c(f), d = require("../ramp"), a = c(d);

        function c(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(e.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "Bmd/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = r(f), c = require("../ramp"), d = r(c);

        function r(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var t = exports.scheme = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(e.default);
        exports.default = (0, d.default)(t);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "SHo5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), e = a(f), c = require("../ramp"), d = a(c);

        function a(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var r = exports.scheme = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(e.default);
        exports.default = (0, d.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "jpg6": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), f = c(e), d = require("../ramp"), b = c(d);

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = exports.scheme = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(f.default);
        exports.default = (0, b.default)(a);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "rjqF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), c = f(e), a = require("../ramp"), d = f(a);

        function f(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(c.default);
        exports.default = (0, d.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "x8Iu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var f = require("../colors"), d = r(f), e = require("../ramp"), c = r(e);

        function r(f) {
            return f && f.__esModule ? f : {default: f}
        }

        var b = exports.scheme = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(d.default);
        exports.default = (0, c.default)(b);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "MJdW": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), a = c(e), d = require("../ramp"), f = c(d);

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var b = exports.scheme = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(a.default);
        exports.default = (0, f.default)(b);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "DiEh": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), f = c(e), a = require("../ramp"), d = c(a);

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var b = exports.scheme = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(f.default);
        exports.default = (0, d.default)(b);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "O9hI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.scheme = void 0;
        var e = require("../colors"), d = c(e), f = require("../ramp"), a = c(f);

        function c(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var r = exports.scheme = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(d.default);
        exports.default = (0, a.default)(r);
    }, {"../colors": "xz73", "../ramp": "MNyl"}], "c/i8": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("d3-color"), r = require("d3-interpolate");
        exports.default = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(300, .5, 0), (0, e.cubehelix)(-240, .5, 1));
    }, {"d3-color": "Peej", "d3-interpolate": "k9aH"}], "BkJF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.cool = exports.warm = void 0, exports.default = function (e) {
            (e < 0 || e > 1) && (e -= Math.floor(e));
            var r = Math.abs(e - .5);
            return l.h = 360 * e - 100, l.s = 1.5 - 1.5 * r, l.l = .8 - .9 * r, l + ""
        };
        var e = require("d3-color"), r = require("d3-interpolate"), o = exports.warm = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(-100, .75, .35), (0, e.cubehelix)(80, 1.5, .8)), t = exports.cool = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(260, .75, .35), (0, e.cubehelix)(80, 1.5, .8)), l = (0, e.cubehelix)();
    }, {"d3-color": "Peej", "d3-interpolate": "k9aH"}], "+ZXM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            var s;
            return t = (.5 - t) * Math.PI, e.r = 255 * (s = Math.sin(t)) * s, e.g = 255 * (s = Math.sin(t + r)) * s, e.b = 255 * (s = Math.sin(t + a)) * s, e + ""
        };
        var t = require("d3-color"), e = (0, t.rgb)(), r = Math.PI / 3, a = 2 * Math.PI / 3;
    }, {"d3-color": "Peej"}], "SfG7": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.plasma = exports.inferno = exports.magma = void 0;
        var f = require("../colors"), e = a(f);

        function a(f) {
            return f && f.__esModule ? f : {default: f}
        }

        function d(f) {
            var e = f.length;
            return function (a) {
                return f[Math.max(0, Math.min(e - 1, Math.floor(a * e)))]
            }
        }

        exports.default = d((0, e.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
        var c = exports.magma = d((0, e.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            b = exports.inferno = d((0, e.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            t = exports.plasma = d((0, e.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    }, {"../colors": "xz73"}], "1ado": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./categorical/category10");
        Object.defineProperty(exports, "schemeCategory10", {
            enumerable: !0, get: function () {
                return z(e).default
            }
        });
        var r = require("./categorical/Accent");
        Object.defineProperty(exports, "schemeAccent", {
            enumerable: !0, get: function () {
                return z(r).default
            }
        });
        var t = require("./categorical/Dark2");
        Object.defineProperty(exports, "schemeDark2", {
            enumerable: !0, get: function () {
                return z(t).default
            }
        });
        var n = require("./categorical/Paired");
        Object.defineProperty(exports, "schemePaired", {
            enumerable: !0, get: function () {
                return z(n).default
            }
        });
        var u = require("./categorical/Pastel1");
        Object.defineProperty(exports, "schemePastel1", {
            enumerable: !0, get: function () {
                return z(u).default
            }
        });
        var i = require("./categorical/Pastel2");
        Object.defineProperty(exports, "schemePastel2", {
            enumerable: !0, get: function () {
                return z(i).default
            }
        });
        var o = require("./categorical/Set1");
        Object.defineProperty(exports, "schemeSet1", {
            enumerable: !0, get: function () {
                return z(o).default
            }
        });
        var a = require("./categorical/Set2");
        Object.defineProperty(exports, "schemeSet2", {
            enumerable: !0, get: function () {
                return z(a).default
            }
        });
        var l = require("./categorical/Set3");
        Object.defineProperty(exports, "schemeSet3", {
            enumerable: !0, get: function () {
                return z(l).default
            }
        });
        var c = require("./diverging/BrBG");
        Object.defineProperty(exports, "interpolateBrBG", {
            enumerable: !0, get: function () {
                return z(c).default
            }
        }), Object.defineProperty(exports, "schemeBrBG", {
            enumerable: !0, get: function () {
                return c.scheme
            }
        });
        var s = require("./diverging/PRGn");
        Object.defineProperty(exports, "interpolatePRGn", {
            enumerable: !0, get: function () {
                return z(s).default
            }
        }), Object.defineProperty(exports, "schemePRGn", {
            enumerable: !0, get: function () {
                return s.scheme
            }
        });
        var f = require("./diverging/PiYG");
        Object.defineProperty(exports, "interpolatePiYG", {
            enumerable: !0, get: function () {
                return z(f).default
            }
        }), Object.defineProperty(exports, "schemePiYG", {
            enumerable: !0, get: function () {
                return f.scheme
            }
        });
        var p = require("./diverging/PuOr");
        Object.defineProperty(exports, "interpolatePuOr", {
            enumerable: !0, get: function () {
                return z(p).default
            }
        }), Object.defineProperty(exports, "schemePuOr", {
            enumerable: !0, get: function () {
                return p.scheme
            }
        });
        var m = require("./diverging/RdBu");
        Object.defineProperty(exports, "interpolateRdBu", {
            enumerable: !0, get: function () {
                return z(m).default
            }
        }), Object.defineProperty(exports, "schemeRdBu", {
            enumerable: !0, get: function () {
                return m.scheme
            }
        });
        var d = require("./diverging/RdGy");
        Object.defineProperty(exports, "interpolateRdGy", {
            enumerable: !0, get: function () {
                return z(d).default
            }
        }), Object.defineProperty(exports, "schemeRdGy", {
            enumerable: !0, get: function () {
                return d.scheme
            }
        });
        var b = require("./diverging/RdYlBu");
        Object.defineProperty(exports, "interpolateRdYlBu", {
            enumerable: !0, get: function () {
                return z(b).default
            }
        }), Object.defineProperty(exports, "schemeRdYlBu", {
            enumerable: !0, get: function () {
                return b.scheme
            }
        });
        var g = require("./diverging/RdYlGn");
        Object.defineProperty(exports, "interpolateRdYlGn", {
            enumerable: !0, get: function () {
                return z(g).default
            }
        }), Object.defineProperty(exports, "schemeRdYlGn", {
            enumerable: !0, get: function () {
                return g.scheme
            }
        });
        var P = require("./diverging/Spectral");
        Object.defineProperty(exports, "interpolateSpectral", {
            enumerable: !0, get: function () {
                return z(P).default
            }
        }), Object.defineProperty(exports, "schemeSpectral", {
            enumerable: !0, get: function () {
                return P.scheme
            }
        });
        var O = require("./sequential-multi/BuGn");
        Object.defineProperty(exports, "interpolateBuGn", {
            enumerable: !0, get: function () {
                return z(O).default
            }
        }), Object.defineProperty(exports, "schemeBuGn", {
            enumerable: !0, get: function () {
                return O.scheme
            }
        });
        var y = require("./sequential-multi/BuPu");
        Object.defineProperty(exports, "interpolateBuPu", {
            enumerable: !0, get: function () {
                return z(y).default
            }
        }), Object.defineProperty(exports, "schemeBuPu", {
            enumerable: !0, get: function () {
                return y.scheme
            }
        });
        var x = require("./sequential-multi/GnBu");
        Object.defineProperty(exports, "interpolateGnBu", {
            enumerable: !0, get: function () {
                return z(x).default
            }
        }), Object.defineProperty(exports, "schemeGnBu", {
            enumerable: !0, get: function () {
                return x.scheme
            }
        });
        var j = require("./sequential-multi/OrRd");
        Object.defineProperty(exports, "interpolateOrRd", {
            enumerable: !0, get: function () {
                return z(j).default
            }
        }), Object.defineProperty(exports, "schemeOrRd", {
            enumerable: !0, get: function () {
                return j.scheme
            }
        });
        var h = require("./sequential-multi/PuBuGn");
        Object.defineProperty(exports, "interpolatePuBuGn", {
            enumerable: !0, get: function () {
                return z(h).default
            }
        }), Object.defineProperty(exports, "schemePuBuGn", {
            enumerable: !0, get: function () {
                return h.scheme
            }
        });
        var q = require("./sequential-multi/PuBu");
        Object.defineProperty(exports, "interpolatePuBu", {
            enumerable: !0, get: function () {
                return z(q).default
            }
        }), Object.defineProperty(exports, "schemePuBu", {
            enumerable: !0, get: function () {
                return q.scheme
            }
        });
        var v = require("./sequential-multi/PuRd");
        Object.defineProperty(exports, "interpolatePuRd", {
            enumerable: !0, get: function () {
                return z(v).default
            }
        }), Object.defineProperty(exports, "schemePuRd", {
            enumerable: !0, get: function () {
                return v.scheme
            }
        });
        var B = require("./sequential-multi/RdPu");
        Object.defineProperty(exports, "interpolateRdPu", {
            enumerable: !0, get: function () {
                return z(B).default
            }
        }), Object.defineProperty(exports, "schemeRdPu", {
            enumerable: !0, get: function () {
                return B.scheme
            }
        });
        var G = require("./sequential-multi/YlGnBu");
        Object.defineProperty(exports, "interpolateYlGnBu", {
            enumerable: !0, get: function () {
                return z(G).default
            }
        }), Object.defineProperty(exports, "schemeYlGnBu", {
            enumerable: !0, get: function () {
                return G.scheme
            }
        });
        var R = require("./sequential-multi/YlGn");
        Object.defineProperty(exports, "interpolateYlGn", {
            enumerable: !0, get: function () {
                return z(R).default
            }
        }), Object.defineProperty(exports, "schemeYlGn", {
            enumerable: !0, get: function () {
                return R.scheme
            }
        });
        var Y = require("./sequential-multi/YlOrBr");
        Object.defineProperty(exports, "interpolateYlOrBr", {
            enumerable: !0, get: function () {
                return z(Y).default
            }
        }), Object.defineProperty(exports, "schemeYlOrBr", {
            enumerable: !0, get: function () {
                return Y.scheme
            }
        });
        var S = require("./sequential-multi/YlOrRd");
        Object.defineProperty(exports, "interpolateYlOrRd", {
            enumerable: !0, get: function () {
                return z(S).default
            }
        }), Object.defineProperty(exports, "schemeYlOrRd", {
            enumerable: !0, get: function () {
                return S.scheme
            }
        });
        var w = require("./sequential-single/Blues");
        Object.defineProperty(exports, "interpolateBlues", {
            enumerable: !0, get: function () {
                return z(w).default
            }
        }), Object.defineProperty(exports, "schemeBlues", {
            enumerable: !0, get: function () {
                return w.scheme
            }
        });
        var _ = require("./sequential-single/Greens");
        Object.defineProperty(exports, "interpolateGreens", {
            enumerable: !0, get: function () {
                return z(_).default
            }
        }), Object.defineProperty(exports, "schemeGreens", {
            enumerable: !0, get: function () {
                return _.scheme
            }
        });
        var C = require("./sequential-single/Greys");
        Object.defineProperty(exports, "interpolateGreys", {
            enumerable: !0, get: function () {
                return z(C).default
            }
        }), Object.defineProperty(exports, "schemeGreys", {
            enumerable: !0, get: function () {
                return C.scheme
            }
        });
        var D = require("./sequential-single/Purples");
        Object.defineProperty(exports, "interpolatePurples", {
            enumerable: !0, get: function () {
                return z(D).default
            }
        }), Object.defineProperty(exports, "schemePurples", {
            enumerable: !0, get: function () {
                return D.scheme
            }
        });
        var M = require("./sequential-single/Reds");
        Object.defineProperty(exports, "interpolateReds", {
            enumerable: !0, get: function () {
                return z(M).default
            }
        }), Object.defineProperty(exports, "schemeReds", {
            enumerable: !0, get: function () {
                return M.scheme
            }
        });
        var k = require("./sequential-single/Oranges");
        Object.defineProperty(exports, "interpolateOranges", {
            enumerable: !0, get: function () {
                return z(k).default
            }
        }), Object.defineProperty(exports, "schemeOranges", {
            enumerable: !0, get: function () {
                return k.scheme
            }
        });
        var A = require("./sequential-multi/cubehelix");
        Object.defineProperty(exports, "interpolateCubehelixDefault", {
            enumerable: !0, get: function () {
                return z(A).default
            }
        });
        var I = require("./sequential-multi/rainbow");
        Object.defineProperty(exports, "interpolateRainbow", {
            enumerable: !0, get: function () {
                return z(I).default
            }
        }), Object.defineProperty(exports, "interpolateWarm", {
            enumerable: !0, get: function () {
                return I.warm
            }
        }), Object.defineProperty(exports, "interpolateCool", {
            enumerable: !0, get: function () {
                return I.cool
            }
        });
        var V = require("./sequential-multi/sinebow");
        Object.defineProperty(exports, "interpolateSinebow", {
            enumerable: !0, get: function () {
                return z(V).default
            }
        });
        var W = require("./sequential-multi/viridis");

        function z(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "interpolateViridis", {
            enumerable: !0, get: function () {
                return z(W).default
            }
        }), Object.defineProperty(exports, "interpolateMagma", {
            enumerable: !0, get: function () {
                return W.magma
            }
        }), Object.defineProperty(exports, "interpolateInferno", {
            enumerable: !0, get: function () {
                return W.inferno
            }
        }), Object.defineProperty(exports, "interpolatePlasma", {
            enumerable: !0, get: function () {
                return W.plasma
            }
        });
    }, {
        "./categorical/category10": "dTYe",
        "./categorical/Accent": "o8vx",
        "./categorical/Dark2": "regV",
        "./categorical/Paired": "E9sC",
        "./categorical/Pastel1": "RCRU",
        "./categorical/Pastel2": "QfGF",
        "./categorical/Set1": "IldB",
        "./categorical/Set2": "KR9o",
        "./categorical/Set3": "XNXw",
        "./diverging/BrBG": "ArEB",
        "./diverging/PRGn": "kzYK",
        "./diverging/PiYG": "PI8x",
        "./diverging/PuOr": "h8TC",
        "./diverging/RdBu": "+i3r",
        "./diverging/RdGy": "WaJg",
        "./diverging/RdYlBu": "Jvs/",
        "./diverging/RdYlGn": "9K9l",
        "./diverging/Spectral": "rXym",
        "./sequential-multi/BuGn": "1KGB",
        "./sequential-multi/BuPu": "lAoh",
        "./sequential-multi/GnBu": "ZoIf",
        "./sequential-multi/OrRd": "+7Si",
        "./sequential-multi/PuBuGn": "vp6S",
        "./sequential-multi/PuBu": "Wfss",
        "./sequential-multi/PuRd": "NZPG",
        "./sequential-multi/RdPu": "fzkB",
        "./sequential-multi/YlGnBu": "fL+1",
        "./sequential-multi/YlGn": "xEGO",
        "./sequential-multi/YlOrBr": "Bmd/",
        "./sequential-multi/YlOrRd": "SHo5",
        "./sequential-single/Blues": "jpg6",
        "./sequential-single/Greens": "rjqF",
        "./sequential-single/Greys": "x8Iu",
        "./sequential-single/Purples": "MJdW",
        "./sequential-single/Reds": "DiEh",
        "./sequential-single/Oranges": "O9hI",
        "./sequential-multi/cubehelix": "c/i8",
        "./sequential-multi/rainbow": "BkJF",
        "./sequential-multi/sinebow": "+ZXM",
        "./sequential-multi/viridis": "SfG7"
    }], "kIKs": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.acos = M, exports.asin = c;
        var t = exports.abs = Math.abs, s = exports.atan2 = Math.atan2, a = exports.cos = Math.cos, e = exports.max = Math.max, r = exports.min = Math.min, o = exports.sin = Math.sin, p = exports.sqrt = Math.sqrt, n = exports.epsilon = 1e-12, x = exports.pi = Math.PI, i = exports.halfPi = x / 2, h = exports.tau = 2 * x;

        function M(t) {
            return t > 1 ? 0 : t < -1 ? x : Math.acos(t)
        }

        function c(t) {
            return t >= 1 ? i : t <= -1 ? -i : Math.asin(t)
        }
    }, {}], "BL7I": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t = r, i = o, f = (0, e.default)(0), y = null, x = c, d = u, h = l, v = null;

            function g() {
                var e, r, o = +t.apply(this, arguments), c = +i.apply(this, arguments), u = x.apply(this, arguments) - a.halfPi, l = d.apply(this, arguments) - a.halfPi, g = (0, a.abs)(l - u), m = l > u;
                if (v || (v = e = (0, n.path)()), c < o && (r = c, c = o, o = r), c > a.epsilon) if (g > a.tau - a.epsilon) v.moveTo(c * (0, a.cos)(u), c * (0, a.sin)(u)), v.arc(0, 0, c, u, l, !m), o > a.epsilon && (v.moveTo(o * (0, a.cos)(l), o * (0, a.sin)(l)), v.arc(0, 0, o, l, u, m)); else {
                    var q, T, A = u, R = l, P = u, _ = l, b = g, M = g, j = h.apply(this, arguments) / 2, O = j > a.epsilon && (y ? +y.apply(this, arguments) : (0, a.sqrt)(o * o + c * c)), k = (0, a.min)((0, a.abs)(c - o) / 2, +f.apply(this, arguments)), w = k, z = k;
                    if (O > a.epsilon) {
                        var B = (0, a.asin)(O / o * (0, a.sin)(j)), C = (0, a.asin)(O / c * (0, a.sin)(j));
                        (b -= 2 * B) > a.epsilon ? (P += B *= m ? 1 : -1, _ -= B) : (b = 0, P = _ = (u + l) / 2), (M -= 2 * C) > a.epsilon ? (A += C *= m ? 1 : -1, R -= C) : (M = 0, A = R = (u + l) / 2)
                    }
                    var D = c * (0, a.cos)(A), E = c * (0, a.sin)(A), F = o * (0, a.cos)(_), G = o * (0, a.sin)(_);
                    if (k > a.epsilon) {
                        var H = c * (0, a.cos)(R), I = c * (0, a.sin)(R), J = o * (0, a.cos)(P), K = o * (0, a.sin)(P);
                        if (g < a.pi) {
                            var L = b > a.epsilon ? s(D, E, J, K, H, I, F, G) : [F, G], N = D - L[0], Q = E - L[1], S = H - L[0], U = I - L[1], V = 1 / (0, a.sin)((0, a.acos)((N * S + Q * U) / ((0, a.sqrt)(N * N + Q * Q) * (0, a.sqrt)(S * S + U * U))) / 2), W = (0, a.sqrt)(L[0] * L[0] + L[1] * L[1]);
                            w = (0, a.min)(k, (o - W) / (V - 1)), z = (0, a.min)(k, (c - W) / (V + 1))
                        }
                    }
                    M > a.epsilon ? z > a.epsilon ? (q = p(J, K, D, E, c, z, m), T = p(H, I, F, G, c, z, m), v.moveTo(q.cx + q.x01, q.cy + q.y01), z < k ? v.arc(q.cx, q.cy, z, (0, a.atan2)(q.y01, q.x01), (0, a.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, z, (0, a.atan2)(q.y01, q.x01), (0, a.atan2)(q.y11, q.x11), !m), v.arc(0, 0, c, (0, a.atan2)(q.cy + q.y11, q.cx + q.x11), (0, a.atan2)(T.cy + T.y11, T.cx + T.x11), !m), v.arc(T.cx, T.cy, z, (0, a.atan2)(T.y11, T.x11), (0, a.atan2)(T.y01, T.x01), !m))) : (v.moveTo(D, E), v.arc(0, 0, c, A, R, !m)) : v.moveTo(D, E), o > a.epsilon && b > a.epsilon ? w > a.epsilon ? (q = p(F, G, H, I, o, -w, m), T = p(D, E, J, K, o, -w, m), v.lineTo(q.cx + q.x01, q.cy + q.y01), w < k ? v.arc(q.cx, q.cy, w, (0, a.atan2)(q.y01, q.x01), (0, a.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, w, (0, a.atan2)(q.y01, q.x01), (0, a.atan2)(q.y11, q.x11), !m), v.arc(0, 0, o, (0, a.atan2)(q.cy + q.y11, q.cx + q.x11), (0, a.atan2)(T.cy + T.y11, T.cx + T.x11), m), v.arc(T.cx, T.cy, w, (0, a.atan2)(T.y11, T.x11), (0, a.atan2)(T.y01, T.x01), !m))) : v.arc(0, 0, o, _, P, m) : v.lineTo(F, G)
                } else v.moveTo(0, 0);
                if (v.closePath(), e) return v = null, e + "" || null
            }

            return g.centroid = function () {
                var n = (+t.apply(this, arguments) + +i.apply(this, arguments)) / 2, e = (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 - a.pi / 2;
                return [(0, a.cos)(e) * n, (0, a.sin)(e) * n]
            }, g.innerRadius = function (n) {
                return arguments.length ? (t = "function" == typeof n ? n : (0, e.default)(+n), g) : t
            }, g.outerRadius = function (n) {
                return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), g) : i
            }, g.cornerRadius = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : (0, e.default)(+n), g) : f
            }, g.padRadius = function (n) {
                return arguments.length ? (y = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), g) : y
            }, g.startAngle = function (n) {
                return arguments.length ? (x = "function" == typeof n ? n : (0, e.default)(+n), g) : x
            }, g.endAngle = function (n) {
                return arguments.length ? (d = "function" == typeof n ? n : (0, e.default)(+n), g) : d
            }, g.padAngle = function (n) {
                return arguments.length ? (h = "function" == typeof n ? n : (0, e.default)(+n), g) : h
            }, g.context = function (n) {
                return arguments.length ? (v = null == n ? null : n, g) : v
            }, g
        };
        var n = require("d3-path"), t = require("./constant"), e = i(t), a = require("./math");

        function i(n) {
            return n && n.__esModule ? n : {default: n}
        }

        function r(n) {
            return n.innerRadius
        }

        function o(n) {
            return n.outerRadius
        }

        function c(n) {
            return n.startAngle
        }

        function u(n) {
            return n.endAngle
        }

        function l(n) {
            return n && n.padAngle
        }

        function s(n, t, e, a, i, r, o, c) {
            var u = e - n, l = a - t, s = o - i, p = c - r, f = (s * (t - r) - p * (n - i)) / (p * u - s * l);
            return [n + f * u, t + f * l]
        }

        function p(n, t, e, i, r, o, c) {
            var u = n - e, l = t - i, s = (c ? o : -o) / (0, a.sqrt)(u * u + l * l), p = s * l, f = -s * u, y = n + p, x = t + f, d = e + p, h = i + f, v = (y + d) / 2, g = (x + h) / 2, m = d - y, q = h - x, T = m * m + q * q, A = r - o, R = y * h - d * x, P = (q < 0 ? -1 : 1) * (0, a.sqrt)((0, a.max)(0, A * A * T - R * R)), _ = (R * q - m * P) / T, b = (-R * m - q * P) / T, M = (R * q + m * P) / T, j = (-R * m + q * P) / T, O = _ - v, k = b - g, w = M - v, z = j - g;
            return O * O + k * k > w * w + z * z && (_ = M, b = j), {cx: _, cy: b, x01: -p, y01: -f, x11: _ * (r / A - 1), y11: b * (r / A - 1)}
        }
    }, {"d3-path": "9OTy", "./constant": "aCvo", "./math": "kIKs"}], "+L3Q": [function (require, module, exports) {
        "use strict";

        function t(t) {
            this._context = t
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (i) {
            return new t(i)
        }, t.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, i)
                }
            }
        };
    }, {}], "LnI9": [function (require, module, exports) {
        "use strict";

        function e(e) {
            return e[0]
        }

        function t(e) {
            return e[1]
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.x = e, exports.y = t;
    }, {}], "KhHE": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = l.x, u = l.y, f = (0, t.default)(!0), i = null, o = r.default, c = null;

            function a(t) {
                var r, l, a, d = t.length, p = !1;
                for (null == i && (c = o(a = (0, n.path)())), r = 0; r <= d; ++r) !(r < d && f(l = t[r], r, t)) === p && ((p = !p) ? c.lineStart() : c.lineEnd()), p && c.point(+e(l, r, t), +u(l, r, t));
                if (a) return c = null, a + "" || null
            }

            return a.x = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : (0, t.default)(+n), a) : e
            }, a.y = function (n) {
                return arguments.length ? (u = "function" == typeof n ? n : (0, t.default)(+n), a) : u
            }, a.defined = function (n) {
                return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(!!n), a) : f
            }, a.curve = function (n) {
                return arguments.length ? (o = n, null != i && (c = o(i)), a) : o
            }, a.context = function (n) {
                return arguments.length ? (null == n ? i = c = null : c = o(i = n), a) : i
            }, a
        };
        var n = require("d3-path"), e = require("./constant"), t = f(e), u = require("./curve/linear"), r = f(u), l = require("./point");

        function f(n) {
            return n && n.__esModule ? n : {default: n}
        }
    }, {"d3-path": "9OTy", "./constant": "aCvo", "./curve/linear": "+L3Q", "./point": "LnI9"}], "IYvJ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var e = i.x, u = null, r = (0, t.default)(0), o = i.y, c = (0, t.default)(!0), a = null, d = l.default, y = null;

            function p(t) {
                var l, f, i, p, h, x = t.length, g = !1, s = new Array(x), v = new Array(x);
                for (null == a && (y = d(h = (0, n.path)())), l = 0; l <= x; ++l) {
                    if (!(l < x && c(p = t[l], l, t)) === g) if (g = !g) f = l, y.areaStart(), y.lineStart(); else {
                        for (y.lineEnd(), y.lineStart(), i = l - 1; i >= f; --i) y.point(s[i], v[i]);
                        y.lineEnd(), y.areaEnd()
                    }
                    g && (s[l] = +e(p, l, t), v[l] = +r(p, l, t), y.point(u ? +u(p, l, t) : s[l], o ? +o(p, l, t) : v[l]))
                }
                if (h) return y = null, h + "" || null
            }

            function h() {
                return (0, f.default)().defined(c).curve(d).context(a)
            }

            return p.x = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : (0, t.default)(+n), u = null, p) : e
            }, p.x0 = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : (0, t.default)(+n), p) : e
            }, p.x1 = function (n) {
                return arguments.length ? (u = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), p) : u
            }, p.y = function (n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), o = null, p) : r
            }, p.y0 = function (n) {
                return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), p) : r
            }, p.y1 = function (n) {
                return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), p) : o
            }, p.lineX0 = p.lineY0 = function () {
                return h().x(e).y(r)
            }, p.lineY1 = function () {
                return h().x(e).y(o)
            }, p.lineX1 = function () {
                return h().x(u).y(r)
            }, p.defined = function (n) {
                return arguments.length ? (c = "function" == typeof n ? n : (0, t.default)(!!n), p) : c
            }, p.curve = function (n) {
                return arguments.length ? (d = n, null != a && (y = d(a)), p) : d
            }, p.context = function (n) {
                return arguments.length ? (null == n ? a = y = null : y = d(a = n), p) : a
            }, p
        };
        var n = require("d3-path"), e = require("./constant"), t = o(e), u = require("./curve/linear"), l = o(u), r = require("./line"), f = o(r), i = require("./point");

        function o(n) {
            return n && n.__esModule ? n : {default: n}
        }
    }, {"d3-path": "9OTy", "./constant": "aCvo", "./curve/linear": "+L3Q", "./line": "KhHE", "./point": "LnI9"}], "bAZU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t = l.default, e = u.default, r = null, f = (0, n.default)(0), o = (0, n.default)(a.tau), i = (0, n.default)(0);

            function d(n) {
                var u, l, d, c, s, h = n.length, p = 0, g = new Array(h), y = new Array(h), A = +f.apply(this, arguments), v = Math.min(a.tau, Math.max(-a.tau, o.apply(this, arguments) - A)), M = Math.min(Math.abs(v) / h, i.apply(this, arguments)), m = M * (v < 0 ? -1 : 1);
                for (u = 0; u < h; ++u) (s = y[g[u] = u] = +t(n[u], u, n)) > 0 && (p += s);
                for (null != e ? g.sort(function (t, n) {
                    return e(y[t], y[n])
                }) : null != r && g.sort(function (t, e) {
                    return r(n[t], n[e])
                }), u = 0, d = p ? (v - h * m) / p : 0; u < h; ++u, A = c) l = g[u], c = A + ((s = y[l]) > 0 ? s * d : 0) + m, y[l] = {data: n[l], index: u, value: s, startAngle: A, endAngle: c, padAngle: M};
                return y
            }

            return d.value = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, n.default)(+e), d) : t
            }, d.sortValues = function (t) {
                return arguments.length ? (e = t, r = null, d) : e
            }, d.sort = function (t) {
                return arguments.length ? (r = t, e = null, d) : r
            }, d.startAngle = function (t) {
                return arguments.length ? (f = "function" == typeof t ? t : (0, n.default)(+t), d) : f
            }, d.endAngle = function (t) {
                return arguments.length ? (o = "function" == typeof t ? t : (0, n.default)(+t), d) : o
            }, d.padAngle = function (t) {
                return arguments.length ? (i = "function" == typeof t ? t : (0, n.default)(+t), d) : i
            }, d
        };
        var t = require("./constant"), n = f(t), e = require("./descending"), u = f(e), r = require("./identity"), l = f(r), a = require("./math");

        function f(t) {
            return t && t.__esModule ? t : {default: t}
        }
    }, {"./constant": "aCvo", "./descending": "fBAz", "./identity": "NNW9", "./math": "kIKs"}], "LARK": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.curveRadialLinear = void 0, exports.default = u;
        var e = require("./linear"), t = r(e);

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var n = exports.curveRadialLinear = u(t.default);

        function i(e) {
            this._curve = e
        }

        function u(e) {
            function t(t) {
                return new i(e(t))
            }

            return t._curve = e, t
        }

        i.prototype = {
            areaStart: function () {
                this._curve.areaStart()
            }, areaEnd: function () {
                this._curve.areaEnd()
            }, lineStart: function () {
                this._curve.lineStart()
            }, lineEnd: function () {
                this._curve.lineEnd()
            }, point: function (e, t) {
                this._curve.point(t * Math.sin(e), t * -Math.cos(e))
            }
        };
    }, {"./linear": "+L3Q"}], "faWF": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.lineRadial = a, exports.default = function () {
            return a((0, t.default)().curve(e.curveRadialLinear))
        };
        var e = require("./curve/radial"), r = n(e), u = require("./line"), t = n(u);

        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            var u = e.curve;
            return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e.curve = function (e) {
                return arguments.length ? u((0, r.default)(e)) : u()._curve
            }, e
        }
    }, {"./curve/radial": "LARK", "./line": "KhHE"}], "T5gn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var l = (0, i.default)().curve(e.curveRadialLinear), t = l.curve, u = l.lineX0, a = l.lineX1, d = l.lineY0, c = l.lineY1;
            return l.angle = l.x, delete l.x, l.startAngle = l.x0, delete l.x0, l.endAngle = l.x1, delete l.x1, l.radius = l.y, delete l.y, l.innerRadius = l.y0, delete l.y0, l.outerRadius = l.y1, delete l.y1, l.lineStartAngle = function () {
                return (0, r.lineRadial)(u())
            }, delete l.lineX0, l.lineEndAngle = function () {
                return (0, r.lineRadial)(a())
            }, delete l.lineX1, l.lineInnerRadius = function () {
                return (0, r.lineRadial)(d())
            }, delete l.lineY0, l.lineOuterRadius = function () {
                return (0, r.lineRadial)(c())
            }, delete l.lineY1, l.curve = function (e) {
                return arguments.length ? t((0, n.default)(e)) : t()._curve
            }, l
        };
        var e = require("./curve/radial"), n = t(e), l = require("./area"), i = t(l), r = require("./lineRadial");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./curve/radial": "LARK", "./area": "IYvJ", "./lineRadial": "faWF"}], "vzjT": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)]
        };
    }, {}], "npGN": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.linkHorizontal = y, exports.linkVertical = h, exports.linkRadial = v;
        var e = require("d3-path"), t = require("../array"), n = require("../constant"), r = o(n), u = require("../point"), i = require("../pointRadial"), l = o(i);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e) {
            return e.source
        }

        function f(e) {
            return e.target
        }

        function c(n) {
            var i = a, l = f, o = u.x, c = u.y, p = null;

            function s() {
                var r, u = t.slice.call(arguments), a = i.apply(this, u), f = l.apply(this, u);
                if (p || (p = r = (0, e.path)()), n(p, +o.apply(this, (u[0] = a, u)), +c.apply(this, u), +o.apply(this, (u[0] = f, u)), +c.apply(this, u)), r) return p = null, r + "" || null
            }

            return s.source = function (e) {
                return arguments.length ? (i = e, s) : i
            }, s.target = function (e) {
                return arguments.length ? (l = e, s) : l
            }, s.x = function (e) {
                return arguments.length ? (o = "function" == typeof e ? e : (0, r.default)(+e), s) : o
            }, s.y = function (e) {
                return arguments.length ? (c = "function" == typeof e ? e : (0, r.default)(+e), s) : c
            }, s.context = function (e) {
                return arguments.length ? (p = null == e ? null : e, s) : p
            }, s
        }

        function p(e, t, n, r, u) {
            e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, u, r, u)
        }

        function s(e, t, n, r, u) {
            e.moveTo(t, n), e.bezierCurveTo(t, n = (n + u) / 2, r, n, r, u)
        }

        function d(e, t, n, r, u) {
            var i = (0, l.default)(t, n), o = (0, l.default)(t, n = (n + u) / 2), a = (0, l.default)(r, n), f = (0, l.default)(r, u);
            e.moveTo(i[0], i[1]), e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1])
        }

        function y() {
            return c(p)
        }

        function h() {
            return c(s)
        }

        function v() {
            var e = c(d);
            return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e
        }
    }, {"d3-path": "9OTy", "../array": "KXlw", "../constant": "aCvo", "../point": "LnI9", "../pointRadial": "vzjT"}], "zjv7": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("../math");
        exports.default = {
            draw: function (r, t) {
                var a = Math.sqrt(t / e.pi);
                r.moveTo(a, 0), r.arc(0, 0, a, 0, e.tau)
            }
        };
    }, {"../math": "kIKs"}], "PTh9": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = {
            draw: function (e, o) {
                var l = Math.sqrt(o / 5) / 2;
                e.moveTo(-3 * l, -l), e.lineTo(-l, -l), e.lineTo(-l, -3 * l), e.lineTo(l, -3 * l), e.lineTo(l, -l), e.lineTo(3 * l, -l), e.lineTo(3 * l, l), e.lineTo(l, l), e.lineTo(l, 3 * l), e.lineTo(-l, 3 * l), e.lineTo(-l, l), e.lineTo(-3 * l, l), e.closePath()
            }
        };
    }, {}], "08fu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = Math.sqrt(1 / 3), t = 2 * e;
        exports.default = {
            draw: function (o, r) {
                var a = Math.sqrt(r / t), s = a * e;
                o.moveTo(0, -a), o.lineTo(s, 0), o.lineTo(0, a), o.lineTo(-s, 0), o.closePath()
            }
        };
    }, {}], "L5Ql": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("../math"), a = .8908130915292852, e = Math.sin(t.pi / 10) / Math.sin(7 * t.pi / 10), o = Math.sin(t.tau / 10) * e, r = -Math.cos(t.tau / 10) * e;
        exports.default = {
            draw: function (e, i) {
                var s = Math.sqrt(i * a), n = o * s, h = r * s;
                e.moveTo(0, -s), e.lineTo(n, h);
                for (var u = 1; u < 5; ++u) {
                    var M = t.tau * u / 5, l = Math.cos(M), c = Math.sin(M);
                    e.lineTo(c * s, -l * s), e.lineTo(l * n - c * h, c * n + l * h)
                }
                e.closePath()
            }
        };
    }, {"../math": "kIKs"}], "bj9s": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = {
            draw: function (e, t) {
                var r = Math.sqrt(t), s = -r / 2;
                e.rect(s, s, r, r)
            }
        };
    }, {}], "owZx": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = Math.sqrt(3);
        exports.default = {
            draw: function (t, o) {
                var r = -Math.sqrt(o / (3 * e));
                t.moveTo(0, 2 * r), t.lineTo(-e * r, -r), t.lineTo(e * r, -r), t.closePath()
            }
        };
    }, {}], "UZQY": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = -.5, o = Math.sqrt(3) / 2, t = 1 / Math.sqrt(12), l = 3 * (t / 2 + 1);
        exports.default = {
            draw: function (i, n) {
                var r = Math.sqrt(n / l), a = r / 2, s = r * t, T = a, u = r * t + r, c = -T, d = u;
                i.moveTo(a, s), i.lineTo(T, u), i.lineTo(c, d), i.lineTo(e * a - o * s, o * a + e * s), i.lineTo(e * T - o * u, o * T + e * u), i.lineTo(e * c - o * d, o * c + e * d), i.lineTo(e * a + o * s, e * s - o * a), i.lineTo(e * T + o * u, e * u - o * T), i.lineTo(e * c + o * d, e * d - o * c), i.closePath()
            }
        };
    }, {}], "bBh/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.symbols = void 0, exports.default = function () {
            var t = (0, m.default)(r.default), u = (0, m.default)(64), l = null;

            function n() {
                var r;
                if (l || (l = r = (0, e.path)()), t.apply(this, arguments).draw(l, +u.apply(this, arguments)), r) return l = null, r + "" || null
            }

            return n.type = function (e) {
                return arguments.length ? (t = "function" == typeof e ? e : (0, m.default)(e), n) : t
            }, n.size = function (e) {
                return arguments.length ? (u = "function" == typeof e ? e : (0, m.default)(+e), n) : u
            }, n.context = function (e) {
                return arguments.length ? (l = null == e ? null : e, n) : l
            }, n
        };
        var e = require("d3-path"), t = require("./symbol/circle"), r = q(t), u = require("./symbol/cross"), l = q(u), n = require("./symbol/diamond"), o = q(n), a = require("./symbol/star"), i = q(a), s = require("./symbol/square"), f = q(s), d = require("./symbol/triangle"), y = q(d), c = require("./symbol/wye"), p = q(c), b = require("./constant"), m = q(b);

        function q(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var h = exports.symbols = [r.default, l.default, o.default, f.default, i.default, y.default, p.default];
    }, {"d3-path": "9OTy", "./symbol/circle": "zjv7", "./symbol/cross": "PTh9", "./symbol/diamond": "08fu", "./symbol/star": "L5Ql", "./symbol/square": "bj9s", "./symbol/triangle": "owZx", "./symbol/wye": "UZQY", "./constant": "aCvo"}], "cx05": [function (require, module, exports) {
        "use strict";

        function t(t, i, s) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + i) / 6, (t._y0 + 4 * t._y1 + s) / 6)
        }

        function i(t) {
            this._context = t
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.point = t, exports.Basis = i, exports.default = function (t) {
            return new i(t)
        }, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 3:
                        t(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        t(this, i, s)
                }
                this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s
            }
        };
    }, {}], "FS5M": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return new _(t)
        };
        var t = require("../noop"), i = h(t), s = require("./basis");

        function h(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function _(t) {
            this._context = t
        }

        _.prototype = {
            areaStart: i.default, areaEnd: i.default, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            }, point: function (t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = i;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = i;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = i, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + i) / 6);
                        break;
                    default:
                        (0, s.point)(this, t, i)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = i
            }
        };
    }, {"../noop": "zOhu", "./basis": "cx05"}], "feGb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return new i(t)
        };
        var t = require("./basis");

        function i(t) {
            this._context = t
        }

        i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (i, s) {
                switch (i = +i, s = +s, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + i) / 6, n = (this._y0 + 4 * this._y1 + s) / 6;
                        this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, t.point)(this, i, s)
                }
                this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s
            }
        };
    }, {"./basis": "cx05"}], "i+ag": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./basis");

        function i(i, s) {
            this._basis = new t.Basis(i), this._beta = s
        }

        i.prototype = {
            lineStart: function () {
                this._x = [], this._y = [], this._basis.lineStart()
            }, lineEnd: function () {
                var t = this._x, i = this._y, s = t.length - 1;
                if (s > 0) for (var e, n = t[0], a = i[0], h = t[s] - n, r = i[s] - a, _ = -1; ++_ <= s;) e = _ / s, this._basis.point(this._beta * t[_] + (1 - this._beta) * (n + e * h), this._beta * i[_] + (1 - this._beta) * (a + e * r));
                this._x = this._y = null, this._basis.lineEnd()
            }, point: function (t, i) {
                this._x.push(+t), this._y.push(+i)
            }
        }, exports.default = function s(e) {
            function n(s) {
                return 1 === e ? new t.Basis(s) : new i(s, e)
            }

            return n.beta = function (t) {
                return s(+t)
            }, n
        }(.85);
    }, {"./basis": "cx05"}], "8DOR": [function (require, module, exports) {
        "use strict";

        function t(t, i, _) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - i), t._y2 + t._k * (t._y1 - _), t._x2, t._y2)
        }

        function i(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.point = t, exports.Cardinal = i, i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        t(this, this._x1, this._y1)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (i, _) {
                switch (i = +i, _ = +_, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(i, _) : this._context.moveTo(i, _);
                        break;
                    case 1:
                        this._point = 2, this._x1 = i, this._y1 = _;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        t(this, i, _)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _
            }
        }, exports.default = function t(_) {
            function s(t) {
                return new i(t, _)
            }

            return s.tension = function (i) {
                return t(+i)
            }, s
        }(0);
    }, {}], "FUQi": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.CardinalClosed = e;
        var t = require("../noop"), i = h(t), s = require("./cardinal");

        function h(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function e(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }

        e.prototype = {
            areaStart: i.default, areaEnd: i.default, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = i;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = i;
                        break;
                    default:
                        (0, s.point)(this, t, i)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i
            }
        }, exports.default = function t(i) {
            function s(t) {
                return new e(t, i)
            }

            return s.tension = function (i) {
                return t(+i)
            }, s
        }(0);
    }, {"../noop": "zOhu", "./cardinal": "8DOR"}], "6iWb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.CardinalOpen = i;
        var t = require("./cardinal");

        function i(t, i) {
            this._context = t, this._k = (1 - i) / 6
        }

        i.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (i, n) {
                switch (i = +i, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, t.point)(this, i, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        }, exports.default = function t(n) {
            function s(t) {
                return new i(t, n)
            }

            return s.tension = function (i) {
                return t(+i)
            }, s
        }(0);
    }, {"./cardinal": "8DOR"}], "6oFi": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.point = i;
        var _ = require("../math"), t = require("./cardinal");

        function i(t, i, s) {
            var a = t._x1, h = t._y1, l = t._x2, n = t._y2;
            if (t._l01_a > _.epsilon) {
                var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, o = 3 * t._l01_a * (t._l01_a + t._l12_a);
                a = (a * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o
            }
            if (t._l23_a > _.epsilon) {
                var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, c = 3 * t._l23_a * (t._l23_a + t._l12_a);
                l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c, n = (n * r + t._y1 * t._l23_2a - s * t._l12_2a) / c
            }
            t._context.bezierCurveTo(a, h, l, n, t._x2, t._y2)
        }

        function s(_, t) {
            this._context = _, this._alpha = t
        }

        s.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (_, t) {
                if (_ = +_, t = +t, this._point) {
                    var s = this._x2 - _, a = this._y2 - t;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + a * a, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(_, t) : this._context.moveTo(_, t);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        i(this, _, t)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = _, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t
            }
        }, exports.default = function _(i) {
            function a(_) {
                return i ? new s(_, i) : new t.Cardinal(_, 0)
            }

            return a.alpha = function (t) {
                return _(+t)
            }, a
        }(.5);
    }, {"../math": "kIKs", "./cardinal": "8DOR"}], "AW0P": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./cardinalClosed"), i = require("../noop"), s = h(i), _ = require("./catmullRom");

        function h(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function e(t, i) {
            this._context = t, this._alpha = i
        }

        e.prototype = {
            areaStart: s.default, areaEnd: s.default, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            }, point: function (t, i) {
                if (t = +t, i = +i, this._point) {
                    var s = this._x2 - t, h = this._y2 - i;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = i;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = i;
                        break;
                    default:
                        (0, _.point)(this, t, i)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i
            }
        }, exports.default = function i(s) {
            function _(i) {
                return s ? new e(i, s) : new t.CardinalClosed(i, 0)
            }

            return _.alpha = function (t) {
                return i(+t)
            }, _
        }(.5);
    }, {"./cardinalClosed": "FUQi", "../noop": "zOhu", "./catmullRom": "6oFi"}], "PGVM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./cardinalOpen"), i = require("./catmullRom");

        function _(t, i) {
            this._context = t, this._alpha = i
        }

        _.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            }, lineEnd: function () {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, _) {
                if (t = +t, _ = +_, this._point) {
                    var s = this._x2 - t, h = this._y2 - _;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        (0, i.point)(this, t, _)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _
            }
        }, exports.default = function i(s) {
            function h(i) {
                return s ? new _(i, s) : new t.CardinalOpen(i, 0)
            }

            return h.alpha = function (t) {
                return i(+t)
            }, h
        }(.5);
    }, {"./cardinalOpen": "6iWb", "./catmullRom": "6oFi"}], "c2vC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (t) {
            return new o(t)
        };
        var t = require("../noop"), e = n(t);

        function n(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function o(t) {
            this._context = t
        }

        o.prototype = {
            areaStart: e.default, areaEnd: e.default, lineStart: function () {
                this._point = 0
            }, lineEnd: function () {
                this._point && this._context.closePath()
            }, point: function (t, e) {
                t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e))
            }
        };
    }, {"../noop": "zOhu"}], "DNx2": [function (require, module, exports) {
        "use strict";

        function t(t) {
            return t < 0 ? -1 : 1
        }

        function i(i, n, e) {
            var o = i._x1 - i._x0, s = n - i._x1, h = (i._y1 - i._y0) / (o || s < 0 && -0), _ = (e - i._y1) / (s || o < 0 && -0), c = (h * s + _ * o) / (o + s);
            return (t(h) + t(_)) * Math.min(Math.abs(h), Math.abs(_), .5 * Math.abs(c)) || 0
        }

        function n(t, i) {
            var n = t._x1 - t._x0;
            return n ? (3 * (t._y1 - t._y0) / n - i) / 2 : i
        }

        function e(t, i, n) {
            var e = t._x0, o = t._y0, s = t._x1, h = t._y1, _ = (s - e) / 3;
            t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h)
        }

        function o(t) {
            this._context = t
        }

        function s(t) {
            this._context = new h(t)
        }

        function h(t) {
            this._context = t
        }

        function _(t) {
            return new o(t)
        }

        function c(t) {
            return new s(t)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.monotoneX = _, exports.monotoneY = c, o.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            }, lineEnd: function () {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        e(this, this._t0, n(this, this._t0))
                }
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            }, point: function (t, o) {
                var s = NaN;
                if (o = +o, (t = +t) !== this._x1 || o !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, o) : this._context.moveTo(t, o);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, e(this, n(this, s = i(this, t, o)), s);
                            break;
                        default:
                            e(this, this._t0, s = i(this, t, o))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = o, this._t0 = s
                }
            }
        }, (s.prototype = Object.create(o.prototype)).point = function (t, i) {
            o.prototype.point.call(this, i, t)
        }, h.prototype = {
            moveTo: function (t, i) {
                this._context.moveTo(i, t)
            }, closePath: function () {
                this._context.closePath()
            }, lineTo: function (t, i) {
                this._context.lineTo(i, t)
            }, bezierCurveTo: function (t, i, n, e, o, s) {
                this._context.bezierCurveTo(i, t, e, n, s, o)
            }
        };
    }, {}], "qyH2": [function (require, module, exports) {
        "use strict";

        function t(t) {
            this._context = t
        }

        function e(t) {
            var e, i, n = t.length - 1, o = new Array(n), r = new Array(n), s = new Array(n);
            for (o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) o[e] = 1, r[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
            for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) i = o[e] / r[e - 1], r[e] -= i, s[e] -= i * s[e - 1];
            for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e) o[e] = (s[e] - o[e + 1]) / r[e];
            for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) r[e] = 2 * t[e + 1] - o[e + 1];
            return [o, r]
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return new t(e)
        }, t.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = [], this._y = []
            }, lineEnd: function () {
                var t = this._x, i = this._y, n = t.length;
                if (n) if (this._line ? this._context.lineTo(t[0], i[0]) : this._context.moveTo(t[0], i[0]), 2 === n) this._context.lineTo(t[1], i[1]); else for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h) this._context.bezierCurveTo(o[0][s], r[0][s], o[1][s], r[1][s], t[h], i[h]);
                (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            }, point: function (t, e) {
                this._x.push(+t), this._y.push(+e)
            }
        };
    }, {}], "SIad": [function (require, module, exports) {
        "use strict";

        function t(t, i) {
            this._context = t, this._t = i
        }

        function i(i) {
            return new t(i, 0)
        }

        function e(i) {
            return new t(i, 1)
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (i) {
            return new t(i, .5)
        }, exports.stepBefore = i, exports.stepAfter = e, t.prototype = {
            areaStart: function () {
                this._line = 0
            }, areaEnd: function () {
                this._line = NaN
            }, lineStart: function () {
                this._x = this._y = NaN, this._point = 0
            }, lineEnd: function () {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
            }, point: function (t, i) {
                switch (t = +t, i = +i, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, i), this._context.lineTo(t, i); else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, i)
                        }
                }
                this._x = t, this._y = i
            }
        };
    }, {}], "jW6Y": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((f = e.length) > 1) for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s) for (o = i, i = e[t[s]], r = 0; r < l; ++r) i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1]
        };
    }, {}], "NTwk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            for (var r = e.length, t = new Array(r); --r >= 0;) t[r] = r;
            return t
        };
    }, {}], "k9Ur": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var t = (0, n.default)([]), r = l.default, f = u.default, o = a;

            function i(e) {
                var n, u, l = t.apply(this, arguments), a = e.length, i = l.length, c = new Array(i);
                for (n = 0; n < i; ++n) {
                    for (var d, s = l[n], y = c[n] = new Array(a), p = 0; p < a; ++p) y[p] = d = [0, +o(e[p], s, p, e)], d.data = e[p];
                    y.key = s
                }
                for (n = 0, u = r(c); n < i; ++n) c[u[n]].index = n;
                return f(c, u), c
            }

            return i.keys = function (r) {
                return arguments.length ? (t = "function" == typeof r ? r : (0, n.default)(e.slice.call(r)), i) : t
            }, i.value = function (e) {
                return arguments.length ? (o = "function" == typeof e ? e : (0, n.default)(+e), i) : o
            }, i.order = function (t) {
                return arguments.length ? (r = null == t ? l.default : "function" == typeof t ? t : (0, n.default)(e.slice.call(t)), i) : r
            }, i.offset = function (e) {
                return arguments.length ? (f = null == e ? u.default : e, i) : f
            }, i
        };
        var e = require("./array"), t = require("./constant"), n = o(t), r = require("./offset/none"), u = o(r), f = require("./order/none"), l = o(f);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function a(e, t) {
            return e[t]
        }
    }, {"./array": "KXlw", "./constant": "aCvo", "./offset/none": "jW6Y", "./order/none": "NTwk"}], "WOsM": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((o = e.length) > 0) {
                for (var f, o, u, n = 0, l = e[0].length; n < l; ++n) {
                    for (u = f = 0; f < o; ++f) u += e[f][n][1] || 0;
                    if (u) for (f = 0; f < o; ++f) e[f][n][1] /= u
                }
                (0, r.default)(e, t)
            }
        };
        var e = require("./none"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./none": "jW6Y"}], "PS+7": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((s = e.length) > 1) for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u) for (l = n = 0, r = 0; r < s; ++r) (f = (o = e[t[r]][u])[1] - o[0]) >= 0 ? (o[0] = l, o[1] = l += f) : f < 0 ? (o[1] = n, o[0] = n += f) : o[0] = l
        };
    }, {}], "UGaf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((u = e.length) > 0) {
                for (var u, n = 0, o = e[t[0]], f = o.length; n < f; ++n) {
                    for (var l = 0, a = 0; l < u; ++l) a += e[l][n][1] || 0;
                    o[n][1] += o[n][0] = -a / 2
                }
                (0, r.default)(e, t)
            }
        };
        var e = require("./none"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./none": "jW6Y"}], "zv8R": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e, t) {
            if ((f = e.length) > 0 && (u = (o = e[t[0]]).length) > 0) {
                for (var o, u, f, n = 0, a = 1; a < u; ++a) {
                    for (var l = 0, d = 0, i = 0; l < f; ++l) {
                        for (var s = e[t[l]], v = s[a][1] || 0, c = (v - (s[a - 1][1] || 0)) / 2, _ = 0; _ < l; ++_) {
                            var p = e[t[_]];
                            c += (p[a][1] || 0) - (p[a - 1][1] || 0)
                        }
                        d += v, i += c * v
                    }
                    o[a - 1][1] += o[a - 1][0] = n, d && (n -= i / d)
                }
                o[a - 1][1] += o[a - 1][0] = n, (0, r.default)(e, t)
            }
        };
        var e = require("./none"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./none": "jW6Y"}], "Z1jP": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var t = e.map(u);
            return (0, r.default)(e).sort(function (e, r) {
                return t[e] - t[r]
            })
        }, exports.sum = u;
        var e = require("./none"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function u(e) {
            for (var r, t = 0, u = -1, n = e.length; ++u < n;) (r = +e[u][1]) && (t += r);
            return t
        }
    }, {"./none": "NTwk"}], "oyxb": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return (0, r.default)(e).reverse()
        };
        var e = require("./ascending"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./ascending": "Z1jP"}], "cmz2": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            var u, n, o = e.length, s = e.map(t.sum), a = (0, r.default)(e).sort(function (e, r) {
                return s[r] - s[e]
            }), c = 0, f = 0, i = [], d = [];
            for (u = 0; u < o; ++u) n = a[u], c < f ? (c += s[n], i.push(n)) : (f += s[n], d.push(n));
            return d.reverse().concat(i)
        };
        var e = require("./none"), r = u(e), t = require("./ascending");

        function u(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./none": "NTwk", "./ascending": "Z1jP"}], "MoW7": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function (e) {
            return (0, r.default)(e).reverse()
        };
        var e = require("./none"), r = t(e);

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, {"./none": "NTwk"}], "9maw": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./arc");
        Object.defineProperty(exports, "arc", {
            enumerable: !0, get: function () {
                return Y(e).default
            }
        });
        var r = require("./area");
        Object.defineProperty(exports, "area", {
            enumerable: !0, get: function () {
                return Y(r).default
            }
        });
        var t = require("./line");
        Object.defineProperty(exports, "line", {
            enumerable: !0, get: function () {
                return Y(t).default
            }
        });
        var n = require("./pie");
        Object.defineProperty(exports, "pie", {
            enumerable: !0, get: function () {
                return Y(n).default
            }
        });
        var u = require("./areaRadial");
        Object.defineProperty(exports, "areaRadial", {
            enumerable: !0, get: function () {
                return Y(u).default
            }
        }), Object.defineProperty(exports, "radialArea", {
            enumerable: !0, get: function () {
                return Y(u).default
            }
        });
        var o = require("./lineRadial");
        Object.defineProperty(exports, "lineRadial", {
            enumerable: !0, get: function () {
                return Y(o).default
            }
        }), Object.defineProperty(exports, "radialLine", {
            enumerable: !0, get: function () {
                return Y(o).default
            }
        });
        var a = require("./pointRadial");
        Object.defineProperty(exports, "pointRadial", {
            enumerable: !0, get: function () {
                return Y(a).default
            }
        });
        var i = require("./link/index");
        Object.defineProperty(exports, "linkHorizontal", {
            enumerable: !0, get: function () {
                return i.linkHorizontal
            }
        }), Object.defineProperty(exports, "linkVertical", {
            enumerable: !0, get: function () {
                return i.linkVertical
            }
        }), Object.defineProperty(exports, "linkRadial", {
            enumerable: !0, get: function () {
                return i.linkRadial
            }
        });
        var l = require("./symbol");
        Object.defineProperty(exports, "symbol", {
            enumerable: !0, get: function () {
                return Y(l).default
            }
        }), Object.defineProperty(exports, "symbols", {
            enumerable: !0, get: function () {
                return l.symbols
            }
        });
        var f = require("./symbol/circle");
        Object.defineProperty(exports, "symbolCircle", {
            enumerable: !0, get: function () {
                return Y(f).default
            }
        });
        var c = require("./symbol/cross");
        Object.defineProperty(exports, "symbolCross", {
            enumerable: !0, get: function () {
                return Y(c).default
            }
        });
        var d = require("./symbol/diamond");
        Object.defineProperty(exports, "symbolDiamond", {
            enumerable: !0, get: function () {
                return Y(d).default
            }
        });
        var s = require("./symbol/square");
        Object.defineProperty(exports, "symbolSquare", {
            enumerable: !0, get: function () {
                return Y(s).default
            }
        });
        var b = require("./symbol/star");
        Object.defineProperty(exports, "symbolStar", {
            enumerable: !0, get: function () {
                return Y(b).default
            }
        });
        var p = require("./symbol/triangle");
        Object.defineProperty(exports, "symbolTriangle", {
            enumerable: !0, get: function () {
                return Y(p).default
            }
        });
        var m = require("./symbol/wye");
        Object.defineProperty(exports, "symbolWye", {
            enumerable: !0, get: function () {
                return Y(m).default
            }
        });
        var v = require("./curve/basisClosed");
        Object.defineProperty(exports, "curveBasisClosed", {
            enumerable: !0, get: function () {
                return Y(v).default
            }
        });
        var y = require("./curve/basisOpen");
        Object.defineProperty(exports, "curveBasisOpen", {
            enumerable: !0, get: function () {
                return Y(y).default
            }
        });
        var O = require("./curve/basis");
        Object.defineProperty(exports, "curveBasis", {
            enumerable: !0, get: function () {
                return Y(O).default
            }
        });
        var g = require("./curve/bundle");
        Object.defineProperty(exports, "curveBundle", {
            enumerable: !0, get: function () {
                return Y(g).default
            }
        });
        var x = require("./curve/cardinalClosed");
        Object.defineProperty(exports, "curveCardinalClosed", {
            enumerable: !0, get: function () {
                return Y(x).default
            }
        });
        var j = require("./curve/cardinalOpen");
        Object.defineProperty(exports, "curveCardinalOpen", {
            enumerable: !0, get: function () {
                return Y(j).default
            }
        });
        var P = require("./curve/cardinal");
        Object.defineProperty(exports, "curveCardinal", {
            enumerable: !0, get: function () {
                return Y(P).default
            }
        });
        var q = require("./curve/catmullRomClosed");
        Object.defineProperty(exports, "curveCatmullRomClosed", {
            enumerable: !0, get: function () {
                return Y(q).default
            }
        });
        var k = require("./curve/catmullRomOpen");
        Object.defineProperty(exports, "curveCatmullRomOpen", {
            enumerable: !0, get: function () {
                return Y(k).default
            }
        });
        var C = require("./curve/catmullRom");
        Object.defineProperty(exports, "curveCatmullRom", {
            enumerable: !0, get: function () {
                return Y(C).default
            }
        });
        var R = require("./curve/linearClosed");
        Object.defineProperty(exports, "curveLinearClosed", {
            enumerable: !0, get: function () {
                return Y(R).default
            }
        });
        var B = require("./curve/linear");
        Object.defineProperty(exports, "curveLinear", {
            enumerable: !0, get: function () {
                return Y(B).default
            }
        });
        var S = require("./curve/monotone");
        Object.defineProperty(exports, "curveMonotoneX", {
            enumerable: !0, get: function () {
                return S.monotoneX
            }
        }), Object.defineProperty(exports, "curveMonotoneY", {
            enumerable: !0, get: function () {
                return S.monotoneY
            }
        });
        var A = require("./curve/natural");
        Object.defineProperty(exports, "curveNatural", {
            enumerable: !0, get: function () {
                return Y(A).default
            }
        });
        var M = require("./curve/step");
        Object.defineProperty(exports, "curveStep", {
            enumerable: !0, get: function () {
                return Y(M).default
            }
        }), Object.defineProperty(exports, "curveStepAfter", {
            enumerable: !0, get: function () {
                return M.stepAfter
            }
        }), Object.defineProperty(exports, "curveStepBefore", {
            enumerable: !0, get: function () {
                return M.stepBefore
            }
        });
        var _ = require("./stack");
        Object.defineProperty(exports, "stack", {
            enumerable: !0, get: function () {
                return Y(_).default
            }
        });
        var D = require("./offset/expand");
        Object.defineProperty(exports, "stackOffsetExpand", {
            enumerable: !0, get: function () {
                return Y(D).default
            }
        });
        var L = require("./offset/diverging");
        Object.defineProperty(exports, "stackOffsetDiverging", {
            enumerable: !0, get: function () {
                return Y(L).default
            }
        });
        var N = require("./offset/none");
        Object.defineProperty(exports, "stackOffsetNone", {
            enumerable: !0, get: function () {
                return Y(N).default
            }
        });
        var h = require("./offset/silhouette");
        Object.defineProperty(exports, "stackOffsetSilhouette", {
            enumerable: !0, get: function () {
                return Y(h).default
            }
        });
        var w = require("./offset/wiggle");
        Object.defineProperty(exports, "stackOffsetWiggle", {
            enumerable: !0, get: function () {
                return Y(w).default
            }
        });
        var z = require("./order/ascending");
        Object.defineProperty(exports, "stackOrderAscending", {
            enumerable: !0, get: function () {
                return Y(z).default
            }
        });
        var H = require("./order/descending");
        Object.defineProperty(exports, "stackOrderDescending", {
            enumerable: !0, get: function () {
                return Y(H).default
            }
        });
        var V = require("./order/insideOut");
        Object.defineProperty(exports, "stackOrderInsideOut", {
            enumerable: !0, get: function () {
                return Y(V).default
            }
        });
        var W = require("./order/none");
        Object.defineProperty(exports, "stackOrderNone", {
            enumerable: !0, get: function () {
                return Y(W).default
            }
        });
        var X = require("./order/reverse");

        function Y(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "stackOrderReverse", {
            enumerable: !0, get: function () {
                return Y(X).default
            }
        });
    }, {
        "./arc": "BL7I",
        "./area": "IYvJ",
        "./line": "KhHE",
        "./pie": "bAZU",
        "./areaRadial": "T5gn",
        "./lineRadial": "faWF",
        "./pointRadial": "vzjT",
        "./link/index": "npGN",
        "./symbol": "bBh/",
        "./symbol/circle": "zjv7",
        "./symbol/cross": "PTh9",
        "./symbol/diamond": "08fu",
        "./symbol/square": "bj9s",
        "./symbol/star": "L5Ql",
        "./symbol/triangle": "owZx",
        "./symbol/wye": "UZQY",
        "./curve/basisClosed": "FS5M",
        "./curve/basisOpen": "feGb",
        "./curve/basis": "cx05",
        "./curve/bundle": "i+ag",
        "./curve/cardinalClosed": "FUQi",
        "./curve/cardinalOpen": "6iWb",
        "./curve/cardinal": "8DOR",
        "./curve/catmullRomClosed": "AW0P",
        "./curve/catmullRomOpen": "PGVM",
        "./curve/catmullRom": "6oFi",
        "./curve/linearClosed": "c2vC",
        "./curve/linear": "+L3Q",
        "./curve/monotone": "DNx2",
        "./curve/natural": "qyH2",
        "./curve/step": "SIad",
        "./stack": "k9Ur",
        "./offset/expand": "WOsM",
        "./offset/diverging": "PS+7",
        "./offset/none": "jW6Y",
        "./offset/silhouette": "UGaf",
        "./offset/wiggle": "zv8R",
        "./order/ascending": "Z1jP",
        "./order/descending": "oyxb",
        "./order/insideOut": "cmz2",
        "./order/none": "NTwk",
        "./order/reverse": "MoW7"
    }], "getm": [function (require, module, exports) {
        "use strict";

        function C() {
            this._ = null
        }

        function t(C) {
            C.U = C.C = C.L = C.R = C.P = C.N = null
        }

        function i(C, t) {
            var i = t, L = t.R, R = i.U;
            R ? R.L === i ? R.L = L : R.R = L : C._ = L, L.U = R, i.U = L, i.R = L.L, i.R && (i.R.U = i), L.L = i
        }

        function L(C, t) {
            var i = t, L = t.L, R = i.U;
            R ? R.L === i ? R.L = L : R.R = L : C._ = L, L.U = R, i.U = L, i.L = L.R, i.L && (i.L.U = i), L.R = i
        }

        function R(C) {
            for (; C.L;) C = C.L;
            return C
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.RedBlackNode = t, C.prototype = {
            constructor: C, insert: function (C, t) {
                var e, s, n;
                if (C) {
                    if (t.P = C, t.N = C.N, C.N && (C.N.P = t), C.N = t, C.R) {
                        for (C = C.R; C.L;) C = C.L;
                        C.L = t
                    } else C.R = t;
                    e = C
                } else this._ ? (C = R(this._), t.P = null, t.N = C, C.P = C.L = t, e = C) : (t.P = t.N = null, this._ = t, e = null);
                for (t.L = t.R = null, t.U = e, t.C = !0, C = t; e && e.C;) e === (s = e.U).L ? (n = s.R) && n.C ? (e.C = n.C = !1, s.C = !0, C = s) : (C === e.R && (i(this, e), e = (C = e).U), e.C = !1, s.C = !0, L(this, s)) : (n = s.L) && n.C ? (e.C = n.C = !1, s.C = !0, C = s) : (C === e.L && (L(this, e), e = (C = e).U), e.C = !1, s.C = !0, i(this, s)), e = C.U;
                this._.C = !1
            }, remove: function (C) {
                C.N && (C.N.P = C.P), C.P && (C.P.N = C.N), C.N = C.P = null;
                var t, e, s, n = C.U, l = C.L, r = C.R;
                if (e = l ? r ? R(r) : l : r, n ? n.L === C ? n.L = e : n.R = e : this._ = e, l && r ? (s = e.C, e.C = C.C, e.L = l, l.U = e, e !== r ? (n = e.U, e.U = C.U, C = e.R, n.L = C, e.R = r, r.U = e) : (e.U = n, n = e, C = e.R)) : (s = C.C, C = e), C && (C.U = n), !s) if (C && C.C) C.C = !1; else {
                    do {
                        if (C === this._) break;
                        if (C === n.L) {
                            if ((t = n.R).C && (t.C = !1, n.C = !0, i(this, n), t = n.R), t.L && t.L.C || t.R && t.R.C) {
                                t.R && t.R.C || (t.L.C = !1, t.C = !0, L(this, t), t = n.R), t.C = n.C, n.C = t.R.C = !1, i(this, n), C = this._;
                                break
                            }
                        } else if ((t = n.L).C && (t.C = !1, n.C = !0, L(this, n), t = n.L), t.L && t.L.C || t.R && t.R.C) {
                            t.L && t.L.C || (t.R.C = !1, t.C = !0, i(this, t), t = n.L), t.C = n.C, n.C = t.L.C = !1, L(this, n), C = this._;
                            break
                        }
                        t.C = !0, C = n, n = n.U
                    } while (!C.C);
                    C && (C.C = !1)
                }
            }
        }, exports.default = C;
    }, {}], "R6Hk": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.createEdge = r, exports.createBorderEdge = i, exports.setEdgeEnd = f, exports.clipEdges = s;
        var e = require("./Diagram");

        function r(r, i, t, n) {
            var s = [null, null], l = e.edges.push(s) - 1;
            return s.left = r, s.right = i, t && f(s, r, i, t), n && f(s, i, r, n), e.cells[r.index].halfedges.push(l), e.cells[i.index].halfedges.push(l), s
        }

        function i(e, r, i) {
            var f = [r, i];
            return f.left = e, f
        }

        function f(e, r, i, f) {
            e[0] || e[1] ? e.left === i ? e[1] = f : e[0] = f : (e[0] = f, e.left = r, e.right = i)
        }

        function t(e, r, i, f, t) {
            var n, s = e[0], l = e[1], u = s[0], a = s[1], d = 0, o = 1, g = l[0] - u, c = l[1] - a;
            if (n = r - u, g || !(n > 0)) {
                if (n /= g, g < 0) {
                    if (n < d) return;
                    n < o && (o = n)
                } else if (g > 0) {
                    if (n > o) return;
                    n > d && (d = n)
                }
                if (n = f - u, g || !(n < 0)) {
                    if (n /= g, g < 0) {
                        if (n > o) return;
                        n > d && (d = n)
                    } else if (g > 0) {
                        if (n < d) return;
                        n < o && (o = n)
                    }
                    if (n = i - a, c || !(n > 0)) {
                        if (n /= c, c < 0) {
                            if (n < d) return;
                            n < o && (o = n)
                        } else if (c > 0) {
                            if (n > o) return;
                            n > d && (d = n)
                        }
                        if (n = t - a, c || !(n < 0)) {
                            if (n /= c, c < 0) {
                                if (n > o) return;
                                n > d && (d = n)
                            } else if (c > 0) {
                                if (n < d) return;
                                n < o && (o = n)
                            }
                            return !(d > 0 || o < 1) || (d > 0 && (e[0] = [u + d * g, a + d * c]), o < 1 && (e[1] = [u + o * g, a + o * c]), !0)
                        }
                    }
                }
            }
        }

        function n(e, r, i, f, t) {
            var n = e[1];
            if (n) return !0;
            var s, l, u = e[0], a = e.left, d = e.right, o = a[0], g = a[1], c = d[0], p = d[1], h = (o + c) / 2, v = (g + p) / 2;
            if (p === g) {
                if (h < r || h >= f) return;
                if (o > c) {
                    if (u) {
                        if (u[1] >= t) return
                    } else u = [h, i];
                    n = [h, t]
                } else {
                    if (u) {
                        if (u[1] < i) return
                    } else u = [h, t];
                    n = [h, i]
                }
            } else if (l = v - (s = (o - c) / (p - g)) * h, s < -1 || s > 1) if (o > c) {
                if (u) {
                    if (u[1] >= t) return
                } else u = [(i - l) / s, i];
                n = [(t - l) / s, t]
            } else {
                if (u) {
                    if (u[1] < i) return
                } else u = [(t - l) / s, t];
                n = [(i - l) / s, i]
            } else if (g < p) {
                if (u) {
                    if (u[0] >= f) return
                } else u = [r, s * r + l];
                n = [f, s * f + l]
            } else {
                if (u) {
                    if (u[0] < r) return
                } else u = [f, s * f + l];
                n = [r, s * r + l]
            }
            return e[0] = u, e[1] = n, !0
        }

        function s(r, i, f, s) {
            for (var l, u = e.edges.length; u--;) n(l = e.edges[u], r, i, f, s) && t(l, r, i, f, s) && (Math.abs(l[0][0] - l[1][0]) > e.epsilon || Math.abs(l[0][1] - l[1][1]) > e.epsilon) || delete e.edges[u]
        }
    }, {"./Diagram": "ZmLv"}], "bFev": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.createCell = l, exports.cellHalfedgeStart = t, exports.cellHalfedgeEnd = a, exports.sortCellHalfedges = n, exports.clipCells = o;
        var e = require("./Edge"), s = require("./Diagram");

        function l(e) {
            return s.cells[e.index] = {site: e, halfedges: []}
        }

        function r(e, s) {
            var l = e.site, r = s.left, t = s.right;
            return l === t && (t = r, r = l), t ? Math.atan2(t[1] - r[1], t[0] - r[0]) : (l === r ? (r = s[1], t = s[0]) : (r = s[0], t = s[1]), Math.atan2(r[0] - t[0], t[1] - r[1]))
        }

        function t(e, s) {
            return s[+(s.left !== e.site)]
        }

        function a(e, s) {
            return s[+(s.left === e.site)]
        }

        function n() {
            for (var e, l, t, a, n = 0, o = s.cells.length; n < o; ++n) if ((e = s.cells[n]) && (a = (l = e.halfedges).length)) {
                var i = new Array(a), d = new Array(a);
                for (t = 0; t < a; ++t) i[t] = t, d[t] = r(e, s.edges[l[t]]);
                for (i.sort(function (e, s) {
                    return d[s] - d[e]
                }), t = 0; t < a; ++t) d[t] = l[i[t]];
                for (t = 0; t < a; ++t) l[t] = d[t]
            }
        }

        function o(l, r, n, o) {
            var i, d, f, g, h, p, c, u, M, b, v, x, E = s.cells.length, B = !0;
            for (i = 0; i < E; ++i) if (d = s.cells[i]) {
                for (f = d.site, g = (h = d.halfedges).length; g--;) s.edges[h[g]] || h.splice(g, 1);
                for (g = 0, p = h.length; g < p;) v = (b = a(d, s.edges[h[g]]))[0], x = b[1], u = (c = t(d, s.edges[h[++g % p]]))[0], M = c[1], (Math.abs(v - u) > s.epsilon || Math.abs(x - M) > s.epsilon) && (h.splice(g, 0, s.edges.push((0, e.createBorderEdge)(f, b, Math.abs(v - l) < s.epsilon && o - x > s.epsilon ? [l, Math.abs(u - l) < s.epsilon ? M : o] : Math.abs(x - o) < s.epsilon && n - v > s.epsilon ? [Math.abs(M - o) < s.epsilon ? u : n, o] : Math.abs(v - n) < s.epsilon && x - r > s.epsilon ? [n, Math.abs(u - n) < s.epsilon ? M : r] : Math.abs(x - r) < s.epsilon && v - l > s.epsilon ? [Math.abs(M - r) < s.epsilon ? u : l, r] : null)) - 1), ++p);
                p && (B = !1)
            }
            if (B) {
                var y, C, H, q = 1 / 0;
                for (i = 0, B = null; i < E; ++i) (d = s.cells[i]) && (H = (y = (f = d.site)[0] - l) * y + (C = f[1] - r) * C) < q && (q = H, B = d);
                if (B) {
                    var w = [l, r], A = [l, o], _ = [n, o], j = [n, r];
                    B.halfedges.push(s.edges.push((0, e.createBorderEdge)(f = B.site, w, A)) - 1, s.edges.push((0, e.createBorderEdge)(f, A, _)) - 1, s.edges.push((0, e.createBorderEdge)(f, _, j)) - 1, s.edges.push((0, e.createBorderEdge)(f, j, w)) - 1)
                }
            }
            for (i = 0; i < E; ++i) (d = s.cells[i]) && (d.halfedges.length || delete s.cells[i])
        }
    }, {"./Edge": "R6Hk", "./Diagram": "ZmLv"}], "Nay5": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.firstCircle = void 0, exports.attachCircle = c, exports.detachCircle = l;
        var e = require("./RedBlackTree"), r = require("./Diagram"), i = [], t = exports.firstCircle = void 0;

        function s() {
            (0, e.RedBlackNode)(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function c(e) {
            var c = e.P, l = e.N;
            if (c && l) {
                var a = c.site, o = e.site, f = l.site;
                if (a !== f) {
                    var n = o[0], p = o[1], u = a[0] - n, v = a[1] - p, x = f[0] - n, d = f[1] - p, h = 2 * (u * d - v * x);
                    if (!(h >= -r.epsilon2)) {
                        var y = u * u + v * v, C = x * x + d * d, k = (d * y - v * C) / h, R = (u * C - x * y) / h, N = i.pop() || new s;
                        N.arc = e, N.site = o, N.x = k + n, N.y = (N.cy = R + p) + Math.sqrt(k * k + R * R), e.circle = N;
                        for (var P = null, b = r.circles._; b;) if (N.y < b.y || N.y === b.y && N.x <= b.x) {
                            if (!b.L) {
                                P = b.P;
                                break
                            }
                            b = b.L
                        } else {
                            if (!b.R) {
                                P = b;
                                break
                            }
                            b = b.R
                        }
                        r.circles.insert(P, N), P || (exports.firstCircle = t = N)
                    }
                }
            }
        }

        function l(s) {
            var c = s.circle;
            c && (c.P || (exports.firstCircle = t = c.N), r.circles.remove(c), i.push(c), (0, e.RedBlackNode)(c), s.circle = null)
        }
    }, {"./RedBlackTree": "getm", "./Diagram": "ZmLv"}], "YRKg": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.removeBeach = d, exports.addBeach = h;
        var e = require("./RedBlackTree"), r = require("./Cell"), i = require("./Circle"), t = require("./Edge"), c = require("./Diagram"), a = [];

        function s() {
            (0, e.RedBlackNode)(this), this.edge = this.site = this.circle = null
        }

        function l(e) {
            var r = a.pop() || new s;
            return r.site = e, r
        }

        function n(r) {
            (0, i.detachCircle)(r), c.beaches.remove(r), a.push(r), (0, e.RedBlackNode)(r)
        }

        function d(e) {
            var r = e.circle, a = r.x, s = r.cy, l = [a, s], d = e.P, h = e.N, u = [e];
            n(e);
            for (var o = d; o.circle && Math.abs(a - o.circle.x) < c.epsilon && Math.abs(s - o.circle.cy) < c.epsilon;) d = o.P, u.unshift(o), n(o), o = d;
            u.unshift(o), (0, i.detachCircle)(o);
            for (var f = h; f.circle && Math.abs(a - f.circle.x) < c.epsilon && Math.abs(s - f.circle.cy) < c.epsilon;) h = f.N, u.push(f), n(f), f = h;
            u.push(f), (0, i.detachCircle)(f);
            var g, v = u.length;
            for (g = 1; g < v; ++g) f = u[g], o = u[g - 1], (0, t.setEdgeEnd)(f.edge, o.site, f.site, l);
            o = u[0], (f = u[v - 1]).edge = (0, t.createEdge)(o.site, f.site, null, l), (0, i.attachCircle)(o), (0, i.attachCircle)(f)
        }

        function h(e) {
            for (var a, s, n, d, h = e[0], f = e[1], g = c.beaches._; g;) if ((n = u(g, f) - h) > c.epsilon) g = g.L; else {
                if (!((d = h - o(g, f)) > c.epsilon)) {
                    n > -c.epsilon ? (a = g.P, s = g) : d > -c.epsilon ? (a = g, s = g.N) : a = s = g;
                    break
                }
                if (!g.R) {
                    a = g;
                    break
                }
                g = g.R
            }
            (0, r.createCell)(e);
            var v = l(e);
            if (c.beaches.insert(a, v), a || s) {
                if (a === s) return (0, i.detachCircle)(a), s = l(a.site), c.beaches.insert(v, s), v.edge = s.edge = (0, t.createEdge)(a.site, v.site), (0, i.attachCircle)(a), void (0, i.attachCircle)(s);
                if (s) {
                    (0, i.detachCircle)(a), (0, i.detachCircle)(s);
                    var p = a.site, C = p[0], b = p[1], E = e[0] - C, q = e[1] - b, x = s.site, M = x[0] - C, N = x[1] - b, k = 2 * (E * N - q * M), B = E * E + q * q, P = M * M + N * N, R = [(N * B - q * P) / k + C, (E * P - M * B) / k + b];
                    (0, t.setEdgeEnd)(s.edge, p, x, R), v.edge = (0, t.createEdge)(p, e, null, R), s.edge = (0, t.createEdge)(e, x, null, R), (0, i.attachCircle)(a), (0, i.attachCircle)(s)
                } else v.edge = (0, t.createEdge)(a.site, v.site)
            }
        }

        function u(e, r) {
            var i = e.site, t = i[0], c = i[1], a = c - r;
            if (!a) return t;
            var s = e.P;
            if (!s) return -1 / 0;
            var l = (i = s.site)[0], n = i[1], d = n - r;
            if (!d) return l;
            var h = l - t, u = 1 / a - 1 / d, o = h / d;
            return u ? (-o + Math.sqrt(o * o - 2 * u * (h * h / (-2 * d) - n + d / 2 + c - a / 2))) / u + t : (t + l) / 2
        }

        function o(e, r) {
            var i = e.N;
            if (i) return u(i, r);
            var t = e.site;
            return t[1] === r ? t[0] : 1 / 0
        }
    }, {"./RedBlackTree": "getm", "./Cell": "bFev", "./Circle": "Nay5", "./Edge": "R6Hk", "./Diagram": "ZmLv"}], "ZmLv": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.edges = exports.circles = exports.cells = exports.beaches = exports.epsilon2 = exports.epsilon = void 0, exports.default = g;
        var e = require("./Beach"), r = require("./Cell"), t = require("./Circle"), s = require("./Edge"), l = require("./RedBlackTree"), i = o(l);

        function o(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var n = exports.epsilon = 1e-6, a = exports.epsilon2 = 1e-12, c = exports.beaches = void 0, u = exports.cells = void 0, f = exports.circles = void 0, d = exports.edges = void 0;

        function p(e, r, t) {
            return (e[0] - t[0]) * (r[1] - e[1]) - (e[0] - r[0]) * (t[1] - e[1])
        }

        function h(e, r) {
            return r[1] - e[1] || r[0] - e[0]
        }

        function g(l, o) {
            var n, a, p, g = l.sort(h).pop();
            for (exports.edges = d = [], exports.cells = u = new Array(l.length), exports.beaches = c = new i.default, exports.circles = f = new i.default; ;) if (p = t.firstCircle, g && (!p || g[1] < p.y || g[1] === p.y && g[0] < p.x)) g[0] === n && g[1] === a || ((0, e.addBeach)(g), n = g[0], a = g[1]), g = l.pop(); else {
                if (!p) break;
                (0, e.removeBeach)(p.arc)
            }
            if ((0, r.sortCellHalfedges)(), o) {
                var x = +o[0][0], v = +o[0][1], b = +o[1][0], y = +o[1][1];
                (0, s.clipEdges)(x, v, b, y), (0, r.clipCells)(x, v, b, y)
            }
            this.edges = d, this.cells = u, exports.beaches = c = exports.circles = f = exports.edges = d = exports.cells = u = null
        }

        g.prototype = {
            constructor: g, polygons: function () {
                var e = this.edges;
                return this.cells.map(function (t) {
                    var s = t.halfedges.map(function (s) {
                        return (0, r.cellHalfedgeStart)(t, e[s])
                    });
                    return s.data = t.site.data, s
                })
            }, triangles: function () {
                var e = [], r = this.edges;
                return this.cells.forEach(function (t, s) {
                    if (i = (l = t.halfedges).length) for (var l, i, o, n = t.site, a = -1, c = r[l[i - 1]], u = c.left === n ? c.right : c.left; ++a < i;) o = u, u = (c = r[l[a]]).left === n ? c.right : c.left, o && u && s < o.index && s < u.index && p(n, o, u) < 0 && e.push([n.data, o.data, u.data])
                }), e
            }, links: function () {
                return this.edges.filter(function (e) {
                    return e.right
                }).map(function (e) {
                    return {source: e.left.data, target: e.right.data}
                })
            }, find: function (e, r, t) {
                for (var s, l, i = this, o = i._found || 0, n = i.cells.length; !(l = i.cells[o]);) if (++o >= n) return null;
                var a = e - l.site[0], c = r - l.site[1], u = a * a + c * c;
                do {
                    l = i.cells[s = o], o = null, l.halfedges.forEach(function (t) {
                        var s = i.edges[t], n = s.left;
                        if (n !== l.site && n || (n = s.right)) {
                            var a = e - n[0], c = r - n[1], f = a * a + c * c;
                            f < u && (u = f, o = n.index)
                        }
                    })
                } while (null !== o);
                return i._found = s, null == t || u <= t * t ? l.site : null
            }
        };
    }, {"./Beach": "YRKg", "./Cell": "bFev", "./Circle": "Nay5", "./Edge": "R6Hk", "./RedBlackTree": "getm"}], "huq3": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var n = t.x, l = t.y, o = null;

            function i(e) {
                return new r.default(e.map(function (t, r) {
                    var o = [Math.round(n(t, r, e) / u.epsilon) * u.epsilon, Math.round(l(t, r, e) / u.epsilon) * u.epsilon];
                    return o.index = r, o.data = t, o
                }), o)
            }

            return i.polygons = function (n) {
                return i(n).polygons()
            }, i.links = function (n) {
                return i(n).links()
            }, i.triangles = function (n) {
                return i(n).triangles()
            }, i.x = function (t) {
                return arguments.length ? (n = "function" == typeof t ? t : (0, e.default)(+t), i) : n
            }, i.y = function (n) {
                return arguments.length ? (l = "function" == typeof n ? n : (0, e.default)(+n), i) : l
            }, i.extent = function (n) {
                return arguments.length ? (o = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], i) : o && [[o[0][0], o[0][1]], [o[1][0], o[1][1]]]
            }, i.size = function (n) {
                return arguments.length ? (o = null == n ? null : [[0, 0], [+n[0], +n[1]]], i) : o && [o[1][0] - o[0][0], o[1][1] - o[0][1]]
            }, i
        };
        var n = require("./constant"), e = l(n), t = require("./point"), u = require("./Diagram"), r = l(u);

        function l(n) {
            return n && n.__esModule ? n : {default: n}
        }
    }, {"./constant": "aCvo", "./point": "LnI9", "./Diagram": "ZmLv"}], "rLIC": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./voronoi");

        function r(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "voronoi", {
            enumerable: !0, get: function () {
                return r(e).default
            }
        });
    }, {"./voronoi": "huq3"}], "UMU7": [function (require, module, exports) {
        "use strict";

        function t(t, e, s) {
            this.target = t, this.type = e, this.transform = s
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = t;
    }, {}], "0OLQ": [function (require, module, exports) {
        "use strict";

        function t(t, i, n) {
            this.k = t, this.x = i, this.y = n
        }

        Object.defineProperty(exports, "__esModule", {value: !0}), exports.Transform = t, exports.default = n, t.prototype = {
            constructor: t, scale: function (i) {
                return 1 === i ? this : new t(this.k * i, this.x, this.y)
            }, translate: function (i, n) {
                return 0 === i & 0 === n ? this : new t(this.k, this.x + this.k * i, this.y + this.k * n)
            }, apply: function (t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            }, applyX: function (t) {
                return t * this.k + this.x
            }, applyY: function (t) {
                return t * this.k + this.y
            }, invert: function (t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            }, invertX: function (t) {
                return (t - this.x) / this.k
            }, invertY: function (t) {
                return (t - this.y) / this.k
            }, rescaleX: function (t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            }, rescaleY: function (t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            }, toString: function () {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var i = exports.identity = new t(1, 0, 0);

        function n(t) {
            return t.__zoom || i
        }

        n.prototype = t.prototype;
    }, {}], "LZWf": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0}), exports.default = function () {
            var u, h, f = m, _ = p, g = z, w = v, x = y, T = [0, 1 / 0], k = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], M = 250, b = n.interpolateZoom, q = [], E = (0, t.dispatch)("start", "zoom", "end"), Y = 500, V = 150, X = 0;

            function D(t) {
                t.property("__zoom", d).on("wheel.zoom", O).on("mousedown.zoom", P).on("dblclick.zoom", W).filter(x).on("touchstart.zoom", Z).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function B(t, e) {
                return (e = Math.max(T[0], Math.min(T[1], e))) === t.k ? t : new c.Transform(e, t.x, t.y)
            }

            function G(t, e, n) {
                var o = e[0] - n[0] * t.k, i = e[1] - n[1] * t.k;
                return o === t.x && i === t.y ? t : new c.Transform(t.k, o, i)
            }

            function S(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }

            function j(t, e, n) {
                t.on("start.zoom", function () {
                    H(this, arguments).start()
                }).on("interrupt.zoom end.zoom", function () {
                    H(this, arguments).end()
                }).tween("zoom", function () {
                    var t = arguments, o = H(this, t), i = _.apply(this, t), u = n || S(i), r = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]), h = this.__zoom, s = "function" == typeof e ? e.apply(this, t) : e, a = b(h.invert(u).concat(r / h.k), s.invert(u).concat(r / s.k));
                    return function (t) {
                        if (1 === t) t = s; else {
                            var e = a(t), n = r / e[2];
                            t = new c.Transform(n, u[0] - e[0] * n, u[1] - e[1] * n)
                        }
                        o.zoom(null, t)
                    }
                })
            }

            function H(t, e) {
                for (var n, o = 0, i = q.length; o < i; ++o) if ((n = q[o]).that === t) return n;
                return new K(t, e)
            }

            function K(t, e) {
                this.that = t, this.args = e, this.index = -1, this.active = 0, this.extent = _.apply(t, e)
            }

            function O() {
                if (f.apply(this, arguments)) {
                    var t = H(this, arguments), e = this.__zoom, n = Math.max(T[0], Math.min(T[1], e.k * Math.pow(2, w.apply(this, arguments)))), u = (0, o.mouse)(this);
                    if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = e.invert(t.mouse[0] = u)), clearTimeout(t.wheel); else {
                        if (e.k === n) return;
                        t.mouse = [u, e.invert(u)], (0, i.interrupt)(this), t.start()
                    }
                    (0, l.default)(), t.wheel = setTimeout(function () {
                        t.wheel = null, t.end()
                    }, V), t.zoom("mouse", g(G(B(e, n), t.mouse[0], t.mouse[1]), t.extent, k))
                }
            }

            function P() {
                if (!h && f.apply(this, arguments)) {
                    var t = H(this, arguments), n = (0, o.select)(o.event.view).on("mousemove.zoom", function () {
                        if ((0, l.default)(), !t.moved) {
                            var e = o.event.clientX - r, n = o.event.clientY - s;
                            t.moved = e * e + n * n > X
                        }
                        t.zoom("mouse", g(G(t.that.__zoom, t.mouse[0] = (0, o.mouse)(t.that), t.mouse[1]), t.extent, k))
                    }, !0).on("mouseup.zoom", function () {
                        n.on("mousemove.zoom mouseup.zoom", null), (0, e.dragEnable)(o.event.view, t.moved), (0, l.default)(), t.end()
                    }, !0), u = (0, o.mouse)(this), r = o.event.clientX, s = o.event.clientY;
                    (0, e.dragDisable)(o.event.view), (0, a.nopropagation)(), t.mouse = [u, this.__zoom.invert(u)], (0, i.interrupt)(this), t.start()
                }
            }

            function W() {
                if (f.apply(this, arguments)) {
                    var t = this.__zoom, e = (0, o.mouse)(this), n = t.invert(e), i = t.k * (o.event.shiftKey ? .5 : 2), u = g(G(B(t, i), e, n), _.apply(this, arguments), k);
                    (0, l.default)(), M > 0 ? (0, o.select)(this).transition().duration(M).call(j, u, e) : (0, o.select)(this).call(D.transform, u)
                }
            }

            function Z() {
                if (f.apply(this, arguments)) {
                    var t, e, n, r, h = H(this, arguments), s = o.event.changedTouches, c = s.length;
                    for ((0, a.nopropagation)(), e = 0; e < c; ++e) n = s[e], r = [r = (0, o.touch)(this, s, n.identifier), this.__zoom.invert(r), n.identifier], h.touch0 ? h.touch1 || (h.touch1 = r) : (h.touch0 = r, t = !0);
                    if (u && (u = clearTimeout(u), !h.touch1)) return h.end(), void ((r = (0, o.select)(this).on("dblclick.zoom")) && r.apply(this, arguments));
                    t && (u = setTimeout(function () {
                        u = null
                    }, Y), (0, i.interrupt)(this), h.start())
                }
            }

            function A() {
                var t, e, n, i, r = H(this, arguments), h = o.event.changedTouches, s = h.length;
                for ((0, l.default)(), u && (u = clearTimeout(u)), t = 0; t < s; ++t) e = h[t], n = (0, o.touch)(this, h, e.identifier), r.touch0 && r.touch0[2] === e.identifier ? r.touch0[0] = n : r.touch1 && r.touch1[2] === e.identifier && (r.touch1[0] = n);
                if (e = r.that.__zoom, r.touch1) {
                    var c = r.touch0[0], a = r.touch0[1], f = r.touch1[0], m = r.touch1[1], p = (p = f[0] - c[0]) * p + (p = f[1] - c[1]) * p, d = (d = m[0] - a[0]) * d + (d = m[1] - a[1]) * d;
                    e = B(e, Math.sqrt(p / d)), n = [(c[0] + f[0]) / 2, (c[1] + f[1]) / 2], i = [(a[0] + m[0]) / 2, (a[1] + m[1]) / 2]
                } else {
                    if (!r.touch0) return;
                    n = r.touch0[0], i = r.touch0[1]
                }
                r.zoom("touch", g(G(e, n, i), r.extent, k))
            }

            function C() {
                var t, e, n = H(this, arguments), i = o.event.changedTouches, u = i.length;
                for ((0, a.nopropagation)(), h && clearTimeout(h), h = setTimeout(function () {
                    h = null
                }, Y), t = 0; t < u; ++t) e = i[t], n.touch0 && n.touch0[2] === e.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === e.identifier && delete n.touch1;
                n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0 ? n.touch0[1] = this.__zoom.invert(n.touch0[0]) : n.end()
            }

            return D.transform = function (t, e) {
                var n = t.selection ? t.selection() : t;
                n.property("__zoom", d), t !== n ? j(t, e) : n.interrupt().each(function () {
                    H(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end()
                })
            }, D.scaleBy = function (t, e) {
                D.scaleTo(t, function () {
                    return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
                })
            }, D.scaleTo = function (t, e) {
                D.transform(t, function () {
                    var t = _.apply(this, arguments), n = this.__zoom, o = S(t), i = n.invert(o), u = "function" == typeof e ? e.apply(this, arguments) : e;
                    return g(G(B(n, u), o, i), t, k)
                })
            }, D.translateBy = function (t, e, n) {
                D.transform(t, function () {
                    return g(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), _.apply(this, arguments), k)
                })
            }, D.translateTo = function (t, e, n) {
                D.transform(t, function () {
                    var t = _.apply(this, arguments), o = this.__zoom, i = S(t);
                    return g(c.identity.translate(i[0], i[1]).scale(o.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, k)
                })
            }, K.prototype = {
                start: function () {
                    return 1 == ++this.active && (this.index = q.push(this) - 1, this.emit("start")), this
                }, zoom: function (t, e) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this
                }, end: function () {
                    return 0 == --this.active && (q.splice(this.index, 1), this.index = -1, this.emit("end")), this
                }, emit: function (t) {
                    (0, o.customEvent)(new s.default(D, t, this.that.__zoom), E.apply, E, [t, this.that, this.args])
                }
            }, D.wheelDelta = function (t) {
                return arguments.length ? (w = "function" == typeof t ? t : (0, r.default)(+t), D) : w
            }, D.filter = function (t) {
                return arguments.length ? (f = "function" == typeof t ? t : (0, r.default)(!!t), D) : f
            }, D.touchable = function (t) {
                return arguments.length ? (x = "function" == typeof t ? t : (0, r.default)(!!t), D) : x
            }, D.extent = function (t) {
                return arguments.length ? (_ = "function" == typeof t ? t : (0, r.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), D) : _
            }, D.scaleExtent = function (t) {
                return arguments.length ? (T[0] = +t[0], T[1] = +t[1], D) : [T[0], T[1]]
            }, D.translateExtent = function (t) {
                return arguments.length ? (k[0][0] = +t[0][0], k[1][0] = +t[1][0], k[0][1] = +t[0][1], k[1][1] = +t[1][1], D) : [[k[0][0], k[0][1]], [k[1][0], k[1][1]]]
            }, D.constrain = function (t) {
                return arguments.length ? (g = t, D) : g
            }, D.duration = function (t) {
                return arguments.length ? (M = +t, D) : M
            }, D.interpolate = function (t) {
                return arguments.length ? (b = t, D) : b
            }, D.on = function () {
                var t = E.on.apply(E, arguments);
                return t === E ? D : t
            }, D.clickDistance = function (t) {
                return arguments.length ? (X = (t = +t) * t, D) : Math.sqrt(X)
            }, D
        };
        var t = require("d3-dispatch"), e = require("d3-drag"), n = require("d3-interpolate"), o = require("d3-selection"), i = require("d3-transition"), u = require("./constant"), r = f(u), h = require("./event"), s = f(h), c = require("./transform"), a = require("./noevent"), l = f(a);

        function f(t) {
            return t && t.__esModule ? t : {default: t}
        }

        function m() {
            return !o.event.button
        }

        function p() {
            var t, e, n = this;
            return n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value, e = n.height.baseVal.value) : (t = n.clientWidth, e = n.clientHeight), [[0, 0], [t, e]]
        }

        function d() {
            return this.__zoom || c.identity
        }

        function v() {
            return -o.event.deltaY * (o.event.deltaMode ? 120 : 1) / 500
        }

        function y() {
            return "ontouchstart" in this
        }

        function z(t, e, n) {
            var o = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], u = t.invertY(e[0][1]) - n[0][1], r = t.invertY(e[1][1]) - n[1][1];
            return t.translate(i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i), r > u ? (u + r) / 2 : Math.min(0, u) || Math.max(0, r))
        }
    }, {"d3-dispatch": "D3zY", "d3-drag": "kkdU", "d3-interpolate": "k9aH", "d3-selection": "//ys", "d3-transition": "UqVV", "./constant": "aCvo", "./event": "UMU7", "./transform": "0OLQ", "./noevent": "BxLv"}], "MHdZ": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./zoom");
        Object.defineProperty(exports, "zoom", {
            enumerable: !0, get: function () {
                return t(e).default
            }
        });
        var r = require("./transform");

        function t(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Object.defineProperty(exports, "zoomTransform", {
            enumerable: !0, get: function () {
                return t(r).default
            }
        }), Object.defineProperty(exports, "zoomIdentity", {
            enumerable: !0, get: function () {
                return r.identity
            }
        });
    }, {"./zoom": "LZWf", "./transform": "0OLQ"}], "UzF0": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./dist/package");
        Object.defineProperty(exports, "version", {
            enumerable: !0, get: function () {
                return e.version
            }
        });
        var r = require("d3-array");
        Object.keys(r).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return r[e]
                }
            })
        });
        var t = require("d3-axis");
        Object.keys(t).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return t[e]
                }
            })
        });
        var n = require("d3-brush");
        Object.keys(n).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return n[e]
                }
            })
        });
        var u = require("d3-chord");
        Object.keys(u).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return u[e]
                }
            })
        });
        var o = require("d3-collection");
        Object.keys(o).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return o[e]
                }
            })
        });
        var c = require("d3-color");
        Object.keys(c).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return c[e]
                }
            })
        });
        var f = require("d3-contour");
        Object.keys(f).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return f[e]
                }
            })
        });
        var a = require("d3-dispatch");
        Object.keys(a).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return a[e]
                }
            })
        });
        var i = require("d3-drag");
        Object.keys(i).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return i[e]
                }
            })
        });
        var d = require("d3-dsv");
        Object.keys(d).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return d[e]
                }
            })
        });
        var s = require("d3-ease");
        Object.keys(s).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return s[e]
                }
            })
        });
        var l = require("d3-fetch");
        Object.keys(l).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return l[e]
                }
            })
        });
        var b = require("d3-force");
        Object.keys(b).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return b[e]
                }
            })
        });
        var p = require("d3-format");
        Object.keys(p).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return p[e]
                }
            })
        });
        var y = require("d3-geo");
        Object.keys(y).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return y[e]
                }
            })
        });
        var j = require("d3-hierarchy");
        Object.keys(j).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return j[e]
                }
            })
        });
        var O = require("d3-interpolate");
        Object.keys(O).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return O[e]
                }
            })
        });
        var _ = require("d3-path");
        Object.keys(_).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return _[e]
                }
            })
        });
        var h = require("d3-polygon");
        Object.keys(h).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return h[e]
                }
            })
        });
        var m = require("d3-quadtree");
        Object.keys(m).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return m[e]
                }
            })
        });
        var v = require("d3-random");
        Object.keys(v).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return v[e]
                }
            })
        });
        var g = require("d3-scale");
        Object.keys(g).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return g[e]
                }
            })
        });
        var x = require("d3-scale-chromatic");
        Object.keys(x).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return x[e]
                }
            })
        });
        var q = require("d3-selection");
        Object.keys(q).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return q[e]
                }
            })
        });
        var P = require("d3-shape");
        Object.keys(P).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return P[e]
                }
            })
        });
        var k = require("d3-time");
        Object.keys(k).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return k[e]
                }
            })
        });
        var M = require("d3-time-format");
        Object.keys(M).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return M[e]
                }
            })
        });
        var E = require("d3-timer");
        Object.keys(E).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return E[e]
                }
            })
        });
        var z = require("d3-transition");
        Object.keys(z).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return z[e]
                }
            })
        });
        var w = require("d3-voronoi");
        Object.keys(w).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return w[e]
                }
            })
        });
        var A = require("d3-zoom");
        Object.keys(A).forEach(function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(exports, e, {
                enumerable: !0, get: function () {
                    return A[e]
                }
            })
        });
    }, {
        "./dist/package": "pT13",
        "d3-array": "K0bd",
        "d3-axis": "mp0m",
        "d3-brush": "tkh5",
        "d3-chord": "Iy8J",
        "d3-collection": "S3hn",
        "d3-color": "Peej",
        "d3-contour": "5SiB",
        "d3-dispatch": "D3zY",
        "d3-drag": "kkdU",
        "d3-dsv": "EC2w",
        "d3-ease": "pJ11",
        "d3-fetch": "grWT",
        "d3-force": "oYRE",
        "d3-format": "VuZR",
        "d3-geo": "/Ah6",
        "d3-hierarchy": "Kps6",
        "d3-interpolate": "k9aH",
        "d3-path": "9OTy",
        "d3-polygon": "H15P",
        "d3-quadtree": "lUbg",
        "d3-random": "Gz2j",
        "d3-scale": "zL2z",
        "d3-scale-chromatic": "1ado",
        "d3-selection": "//ys",
        "d3-shape": "9maw",
        "d3-time": "0hQY",
        "d3-time-format": "UYpZ",
        "d3-timer": "rdzS",
        "d3-transition": "UqVV",
        "d3-voronoi": "rLIC",
        "d3-zoom": "MHdZ"
    }], "NYkG": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = function () {
            function e() {
                this._node = {style: {shape: "circle", width: 20, height: 20, rx: 5, ry: 5, strokeColor: "#000", strokeWidth: 2, fillColor: "#fff"}, label: {dx: -10, dy: -10, textAnchor: "end", color: "#000", fontSize: "12px", fontFamily: "sans-serif"}}, this._link = {style: {connectionType: "direct", curveType: "default", color: "#000", width: 2, headType: "arrow", arrowheadSize: 6}, label: {dx: void 0, dy: void 0, textAnchor: void 0, color: "#000", fontSize: "12px", fontFamily: "sans-serif"}}
            }

            return Object.defineProperty(e.prototype, "shape", {
                get: function () {
                    return this._node.style.shape
                }, set: function (e) {
                    this._node.style.shape = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeWidth", {
                get: function () {
                    return this._node.style.width
                }, set: function (e) {
                    this._node.style.width = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeHeight", {
                get: function () {
                    return this._node.style.height
                }, set: function (e) {
                    this._node.style.height = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeRX", {
                get: function () {
                    return this._node.style.rx
                }, set: function (e) {
                    this._node.style.rx = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeRY", {
                get: function () {
                    return this._node.style.ry
                }, set: function (e) {
                    this._node.style.ry = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeStrokeColor", {
                get: function () {
                    return this._node.style.strokeColor
                }, set: function (e) {
                    this._node.style.strokeColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeStrokeWidth", {
                get: function () {
                    return this._node.style.strokeWidth
                }, set: function (e) {
                    this._node.style.width = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeFillColor", {
                get: function () {
                    return this._node.style.fillColor
                }, set: function (e) {
                    this._node.style.fillColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelDX", {
                get: function () {
                    return this._node.label.dx
                }, set: function (e) {
                    this._node.label.dx = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelDY", {
                get: function () {
                    return this._node.label.dy
                }, set: function (e) {
                    this._node.label.dy = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelTextAnchor", {
                get: function () {
                    return this._node.label.textAnchor
                }, set: function (e) {
                    this._node.label.textAnchor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelColor", {
                get: function () {
                    return this._node.label.color
                }, set: function (e) {
                    this._node.label.color = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelFontSize", {
                get: function () {
                    return this._node.label.fontSize
                }, set: function (e) {
                    this._node.label.fontSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelFontFamily", {
                get: function () {
                    return this._node.label.fontFamily
                }, set: function (e) {
                    this._node.label.fontFamily = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkConnectionType", {
                get: function () {
                    return this._link.style.connectionType
                }, set: function (e) {
                    this._link.style.connectionType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkCurveType", {
                get: function () {
                    return this._link.style.curveType
                }, set: function (e) {
                    this._link.style.curveType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkColor", {
                get: function () {
                    return this._link.style.color
                }, set: function (e) {
                    this._link.style.color = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkWidth", {
                get: function () {
                    return this._link.style.width
                }, set: function (e) {
                    this._link.style.width = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkHeadType", {
                get: function () {
                    return this._link.style.headType
                }, set: function (e) {
                    this._link.style.headType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkArrowheadSize", {
                get: function () {
                    return this._link.style.arrowheadSize
                }, set: function (e) {
                    this._link.style.arrowheadSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelDX", {
                get: function () {
                    return this._link.label.dx
                }, set: function (e) {
                    this._link.label.dx = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelDY", {
                get: function () {
                    return this._link.label.dy
                }, set: function (e) {
                    this._link.label.dy = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelTextAnchor", {
                get: function () {
                    return this._link.label.textAnchor
                }, set: function (e) {
                    this._link.label.textAnchor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelColor", {
                get: function () {
                    return this._link.label.color
                }, set: function (e) {
                    this._link.label.color = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelFontSize", {
                get: function () {
                    return this._link.label.fontSize
                }, set: function (e) {
                    this._link.label.fontSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelFontFamily", {
                get: function () {
                    return this._link.label.fontFamily
                }, set: function (e) {
                    this._link.label.fontFamily = e
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartySettings = e;
    }, {}], "zcNd": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("tslib"), t = e.__importStar(require("d3")), r = function () {
            function e(e, r) {
                this._svg = e, this._elements = r, this._widthInterval = 0, this._heightInterval = 0, this._arrowheadIndex = 0, this.lineStrait = t.line().x(function (e) {
                    return e.x
                }).y(function (e) {
                    return e.y
                }), this.lineStepBefore = t.line().curve(t.curveStepBefore).x(function (e) {
                    return e.x
                }).y(function (e) {
                    return e.y
                }), this.lineStepAfter = t.line().curve(t.curveStepAfter).x(function (e) {
                    return e.x
                }).y(function (e) {
                    return e.y
                })
            }

            return e.prototype.render = function () {
                void 0 !== this._g && this._g.remove(), this._g = this._svg.append("g").classed("flowchartyCanvas", !0), this.renderNodes(), this.renderLinks(), t.selectAll("._should_remove_element").remove()
            }, e.prototype.renderNodes = function () {
                var e = this, r = this;
                this._widthInterval = Number(this._svg.attr("width")) / this._elements.map.getColumnCount(), this._heightInterval = Number(this._svg.attr("height")) / this._elements.map.getRowCount(), this._elements.map.getRows().map(function (n, o) {
                    var s = e._g.selectAll(".node").data(n).enter().append("svg").style("overflow", "visible").attr("x", function (t, r) {
                        return null === t ? 0 : (e._elements.getNodeById(t).x = e._widthInterval / 2 + e._widthInterval * r, e._elements.getNodeById(t).x)
                    }).attr("y", function (t) {
                        return null === t ? 0 : (e._elements.getNodeById(t).y = e._heightInterval / 2 + e._heightInterval * o, e._elements.getNodeById(t).y)
                    }).attr("width", "100%").attr("height", "100%").attr("class", function (t) {
                        return "" === e._elements.getNodeById(t).id ? "_should_remove_element" : ""
                    });
                    s.append("ellipse").attr("class", function (t) {
                        return "circle" !== e._elements.getNodeById(t).style.shape ? "_should_remove_element" : ""
                    }).attr("rx", function (t) {
                        return e._elements.getNodeById(t).style.rx
                    }).attr("ry", function (t) {
                        return e._elements.getNodeById(t).style.ry
                    }).attr("fill", function (t) {
                        return e._elements.getNodeById(t).style.fillColor
                    }).attr("stroke", function (t) {
                        return e._elements.getNodeById(t).style.strokeColor
                    }).attr("stroke-width", function (t) {
                        return e._elements.getNodeById(t).style.strokeWidth
                    }), s.append("rect").attr("class", function (t) {
                        return "rect" !== e._elements.getNodeById(t).style.shape ? "_should_remove_element" : ""
                    }).attr("width", function (t) {
                        return e._elements.getNodeById(t).style.width
                    }).attr("height", function (t) {
                        return e._elements.getNodeById(t).style.height
                    }).attr("rx", function (t) {
                        return e._elements.getNodeById(t).style.rx
                    }).attr("ry", function (t) {
                        return e._elements.getNodeById(t).style.ry
                    }).attr("x", function (t) {
                        return -e._elements.getNodeById(t).style.width / 2
                    }).attr("y", function (t) {
                        return -e._elements.getNodeById(t).style.height / 2
                    }).attr("fill", function (t) {
                        return e._elements.getNodeById(t).style.fillColor
                    }).attr("stroke", function (t) {
                        return e._elements.getNodeById(t).style.strokeColor
                    }).attr("stroke-width", function (t) {
                        return e._elements.getNodeById(t).style.strokeWidth
                    }), s.html(function (e) {
                        return t.select(this).html() + r.getTextElementsWithLineBreak(r._elements.getNodeById(e))
                    })
                })
            }, e.prototype.getTextElementsWithLineBreak = function (e) {
                var t = "";
                return e.label.name.split(/\n/).reverse().forEach(function (r, n) {
                    t += '<text font-size="' + e.label.fontSize + '" fill="' + e.label.color + '" dx="' + e.label.dx + '" dy="' + e.label.dy + '" text-anchor="' + e.label.textAnchor + '" dominant-baseline="central" y="-' + n + 'em">' + r + "</text>"
                }), t
            }, e.prototype.renderLinks = function () {
                var e = this, t = this, r = this._g.selectAll(".link").data(this._elements.links).attr("class", "link").enter().append("g");
                r.append("path").style("fill", "none").style("stroke", function (e) {
                    return e.style.color
                }).style("stroke-width", function (e) {
                    return e.style.strokeWidth
                }).attr("marker-end", function (t) {
                    return "arrow" === t.style.headType ? "url(#" + e.generateArrowhead(t) + ")" : ""
                }).attr("d", function (r) {
                    var n = "marge" === r.style.connectionType ? e._heightInterval / 5 : 0, o = [{x: e._elements.getNodeById(r.sourceNodeId).x, y: e._elements.getNodeById(r.sourceNodeId).y}, {x: e._elements.getNodeById(r.targetNodeId).x, y: e._elements.getNodeById(r.targetNodeId).y - n}];
                    return t.decideLineType(r)(o)
                }).attr("stroke-dasharray", function (e) {
                    return this instanceof SVGPathElement ? "marge" === e.style.connectionType ? [0, t.decideLinkMargin(e, "from") + t._elements.getNodeById(e.sourceNodeId).style.strokeWidth / 2, this.getTotalLength() - (("arrow" === e.style.headType ? e.style.arrowHeadSize : 0) + t._elements.getNodeById(e.sourceNodeId).style.strokeWidth / 2), this.getTotalLength()].join(" ") : [0, t.decideLinkMargin(e, "from") + t._elements.getNodeById(e.sourceNodeId).style.strokeWidth / 2, this.getTotalLength() - (t.decideLinkMargin(e, "from") + t.decideLinkMargin(e, "to") + ("arrow" === e.style.headType ? e.style.arrowHeadSize : 0) + t._elements.getNodeById(e.sourceNodeId).style.strokeWidth / 2), this.getTotalLength()].join(" ") : ""
                }).attr("stroke-dashoffset", 0), r.append("text").attr("class", function (e) {
                    return "" === e.label.name ? "_should_remove_element" : ""
                }).text(function (e) {
                    return e.label.name
                }).style("fill", function (e) {
                    return e.label.color
                }).attr("font-size", function (e) {
                    return e.label.fontSize
                }).attr("x", function (t) {
                    return e._elements.getNodeById(t.sourceNodeId).x
                }).attr("y", function (t) {
                    return e._elements.getNodeById(t.sourceNodeId).y
                }).attr("dx", function (t) {
                    if (t.label.dx) return t.label.dx;
                    var r = e._elements.getNodeById(t.sourceNodeId), n = e._elements.getNodeById(t.targetNodeId), o = e.decideCurveType(t);
                    return r.x === n.x || "stepBefore" === o ? -10 : 20
                }).attr("dy", function (t) {
                    if (t.label.dy) return t.label.dy;
                    var r = e._elements.getNodeById(t.sourceNodeId), n = e._elements.getNodeById(t.targetNodeId), o = e.decideCurveType(t);
                    return r.x === n.x || "stepBefore" === o ? 20 : -10
                }).attr("text-anchor", function (t) {
                    if (void 0 !== t.label.textAnchor) return t.label.textAnchor;
                    var r = e._elements.getNodeById(t.sourceNodeId), n = e._elements.getNodeById(t.targetNodeId), o = e.decideCurveType(t);
                    return r.x === n.x || "stepBefore" === o ? "end" : "start"
                })
            }, e.prototype.generateArrowhead = function (e) {
                var t = "arrowhead_" + this._arrowheadIndex++;
                return this._g.append("defs").append("marker").attr("id", t).attr("refX", ("direct" === e.style.connectionType ? this.decideLinkMargin(e, "to") : 0) / e.style.strokeWidth + e.style.arrowHeadSize).attr("refY", e.style.arrowHeadSize / 2).attr("markerUnits", "strokeWidth").attr("markerWidth", e.style.arrowHeadSize).attr("markerHeight", e.style.arrowHeadSize).attr("orient", "auto").append("path").attr("d", ["M", "0,0", "V", e.style.arrowHeadSize, "L", [e.style.arrowHeadSize, e.style.arrowHeadSize / 2].join(","), "Z"].join(" ")).attr("fill", e.style.color), t
            }, e.prototype.decideLinkMargin = function (e, t) {
                var r = this._elements.getNodeById(e.sourceNodeId), n = this._elements.getNodeById(e.targetNodeId), o = "to" === t ? n : r;
                return r.x === n.x ? o.style.verticalLength / 2 : r.y === n.y ? o.style.horizontalLength / 2 : "stepAfter" === this.decideCurveType(e) ? "to" === t ? o.style.verticalLength / 2 : o.style.horizontalLength / 2 : "to" === t ? o.style.horizontalLength / 2 : o.style.verticalLength / 2
            }, e.prototype.decideCurveType = function (e) {
                var t = this._elements.getNodeById(e.sourceNodeId), r = this._elements.getNodeById(e.targetNodeId);
                return "default" === e.style.curveType ? t.x === r.x || t.y === r.y ? "strait" : t.x > r.x ? "stepBefore" : "stepAfter" : e.style.curveType
            }, e.prototype.decideLineType = function (e) {
                switch (this.decideCurveType(e)) {
                    case"stepBefore":
                        return this.lineStepBefore;
                    case"stepAfter":
                        return this.lineStepAfter;
                    case"strait":
                    default:
                        return this.lineStrait
                }
            }, e
        }();
        exports.FlowchartyCanvas = r;
    }, {"tslib": "vCxL", "d3": "UzF0"}], "EiTc": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = function () {
            function e(e, t, r) {
                this._id = e, this._style = t, this._label = r, this._nodePosition = {x: 0, y: 0}
            }

            return Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this._id
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "style", {
                get: function () {
                    return this._style
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "label", {
                get: function () {
                    return this._label
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "x", {
                get: function () {
                    return this._nodePosition.x
                }, set: function (e) {
                    this._nodePosition.x = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "y", {
                get: function () {
                    return this._nodePosition.y
                }, set: function (e) {
                    this._nodePosition.y = e
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyNode = e;
        var t = function () {
            function e(e, t, r, o, n, i, u, c) {
                this._shape = e, this._width = t, this._height = r, this._rx = o, this._ry = n, this._strokeColor = i, this._strokeWidth = u, this._fillColor = c
            }

            return Object.defineProperty(e.prototype, "shape", {
                get: function () {
                    return this._shape
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this._width
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function () {
                    return this._height
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "rx", {
                get: function () {
                    return this._rx
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "ry", {
                get: function () {
                    return this._ry
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "strokeColor", {
                get: function () {
                    return this._strokeColor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "strokeWidth", {
                get: function () {
                    return this._strokeWidth
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "fillColor", {
                get: function () {
                    return this._fillColor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "horizontalLength", {
                get: function () {
                    return "circle" === this._shape ? 2 * this._rx : "rect" === this._shape ? this._width : 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "verticalLength", {
                get: function () {
                    return "circle" === this._shape ? 2 * this._ry : "rect" === this._shape ? this._height : 0
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyNodeStyle = t;
        var r = function () {
            function e(e, t, r, o, n, i, u) {
                this._name = e, this._dx = t, this._dy = r, this._textAnchor = o, this._color = n, this._fontSize = i, this._fontFamily = u
            }

            return Object.defineProperty(e.prototype, "name", {
                get: function () {
                    return this._name
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "dx", {
                get: function () {
                    return this._dx
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "dy", {
                get: function () {
                    return this._dy
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "textAnchor", {
                get: function () {
                    return this._textAnchor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "color", {
                get: function () {
                    return this._color
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "fontSize", {
                get: function () {
                    return this._fontSize
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "fontFamily", {
                get: function () {
                    return this._fontFamily
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyNodeLabel = r;
    }, {}], "0xjy": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("./node"), t = function () {
            function t(t, n, r) {
                this._nodes = t, this._links = n, this._map = r;
                var o = new e.FlowchartyNodeStyle("nothing", 0, 0, 0, 0, "#000", 0, "#000"), i = new e.FlowchartyNodeLabel("", 0, 0, "start", "#000", "0", "");
                this._dummyNode = new e.FlowchartyNode("", o, i)
            }

            return Object.defineProperty(t.prototype, "nodes", {
                get: function () {
                    return this._nodes
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "map", {
                get: function () {
                    return this._map
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "links", {
                get: function () {
                    return this._links
                }, enumerable: !0, configurable: !0
            }), t.prototype.getNodeById = function (e) {
                return this._nodes.filter(function (t) {
                    return t.id === e
                }).pop() || this._dummyNode
            }, t
        }();
        exports.FlowchartyElements = t;
    }, {"./node": "EiTc"}], "nCI/": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./node"), e = function () {
            function e(t) {
                this._settings = t
            }

            return e.prototype.create = function (e) {
                return new t.FlowchartyNode(e.id, this.createStyle(e.style), this.createLabel(e.label))
            }, e.prototype.createStyle = function (e) {
                return e ? new t.FlowchartyNodeStyle(void 0 !== e.shape ? e.shape : this._settings.shape, void 0 !== e.width ? e.width : this._settings.nodeWidth, void 0 !== e.height ? e.height : this._settings.nodeHeight, void 0 !== e.rx ? e.rx : this._settings.nodeRX, void 0 !== e.ry ? e.ry : this._settings.nodeRY, void 0 !== e.strokeColor ? e.strokeColor : this._settings.nodeStrokeColor, void 0 !== e.strokeWidth ? e.strokeWidth : this._settings.nodeStrokeWidth, void 0 !== e.fillColor ? e.fillColor : this._settings.nodeFillColor) : new t.FlowchartyNodeStyle(this._settings.shape, this._settings.nodeWidth, this._settings.nodeHeight, this._settings.nodeRX, this._settings.nodeRY, this._settings.nodeStrokeColor, this._settings.nodeStrokeWidth, this._settings.nodeFillColor)
            }, e.prototype.createLabel = function (e) {
                return new t.FlowchartyNodeLabel(e.name, void 0 !== e.dx ? e.dx : this._settings.nodeLabelDX, void 0 !== e.dy ? e.dy : this._settings.nodeLabelDY, void 0 !== e.textAnchor ? e.textAnchor : this._settings.nodeLabelTextAnchor, void 0 !== e.color ? e.color : this._settings.nodeLabelColor, void 0 !== e.fontSize ? e.fontSize : this._settings.nodeLabelFontSize, void 0 !== e.fontFamily ? e.fontFamily : this._settings.nodeLabelFontFamily)
            }, e
        }();
        exports.FlowchartyNodeFactory = e;
    }, {"./node": "EiTc"}], "JoHj": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = function () {
            function e(e, t, r, n) {
                this._sourceNodeId = e, this._targetNodeId = t, this._style = r, this._label = n
            }

            return Object.defineProperty(e.prototype, "sourceNodeId", {
                get: function () {
                    return this._sourceNodeId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "targetNodeId", {
                get: function () {
                    return this._targetNodeId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "style", {
                get: function () {
                    return this._style
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "label", {
                get: function () {
                    return this._label
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyLink = e;
        var t = function () {
            function e(e, t, r, n, o, i) {
                this._connectionType = e, this._curveType = t, this._color = r, this._strokeWidth = n, this._headType = o, this._arrowheadSize = i
            }

            return Object.defineProperty(e.prototype, "connectionType", {
                get: function () {
                    return this._connectionType
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "curveType", {
                get: function () {
                    return this._curveType
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "color", {
                get: function () {
                    return this._color
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "strokeWidth", {
                get: function () {
                    return this._strokeWidth
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "headType", {
                get: function () {
                    return this._headType
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "arrowHeadSize", {
                get: function () {
                    return this._arrowheadSize
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyLinkStyle = t;
        var r = function () {
            function e(e, t, r, n, o, i, u) {
                this._name = e, this._dx = t, this._dy = r, this._textAnchor = n, this._color = o, this._fontSize = i, this._fontFamily = u
            }

            return Object.defineProperty(e.prototype, "name", {
                get: function () {
                    return this._name
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "dx", {
                get: function () {
                    return this._dx
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "dy", {
                get: function () {
                    return this._dy
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "textAnchor", {
                get: function () {
                    return this._textAnchor
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "color", {
                get: function () {
                    return this._color
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "fontSize", {
                get: function () {
                    return this._fontSize
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "fontFamily", {
                get: function () {
                    return this._fontFamily
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.FlowchartyLinkLabel = r;
    }, {}], "FV6i": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = require("./link"), e = function () {
            function e(t) {
                this._settings = t
            }

            return e.prototype.create = function (e) {
                return new t.FlowchartyLink(e.source, e.target, this.createStyle(e.style), this.createLabel(e.label))
            }, e.prototype.createStyle = function (e) {
                return e ? new t.FlowchartyLinkStyle(void 0 !== e.connectionType ? e.connectionType : this._settings.linkConnectionType, void 0 !== e.curveType ? e.curveType : this._settings.linkCurveType, void 0 !== e.color ? e.color : this._settings.linkColor, void 0 !== e.strokeWidth ? e.strokeWidth : this._settings.linkWidth, void 0 !== e.headType ? e.headType : this._settings.linkHeadType, void 0 !== e.arrowheadSize ? e.arrowheadSize : this._settings.linkArrowheadSize) : new t.FlowchartyLinkStyle(this._settings.linkConnectionType, this._settings.linkCurveType, this._settings.linkColor, this._settings.linkWidth, this._settings.linkHeadType, this._settings.linkArrowheadSize)
            }, e.prototype.createLabel = function (e) {
                return e ? new t.FlowchartyLinkLabel(void 0 !== e.name ? e.name : "", e.dx, e.dy, e.textAnchor, void 0 !== e.color ? e.color : this._settings.linkLabelColor, void 0 !== e.fontSize ? e.fontSize : this._settings.linkLabelFontSize, void 0 !== e.fontFamily ? e.fontFamily : this._settings.linkLabelFontFamily) : new t.FlowchartyLinkLabel("", this._settings.linkLabelDX, this._settings.linkLabelDY, this._settings.linkLabelTextAnchor, this._settings.linkLabelColor, this._settings.linkLabelFontSize, this._settings.linkLabelFontFamily)
            }, e
        }();
        exports.FlowchartyLinkFactory = e;
    }, {"./link": "JoHj"}], "YIPn": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var t = function () {
            function t(t) {
                this._map = t
            }

            return t.prototype.getColumnCount = function () {
                return Math.max.apply(this, this._map.map(function (t) {
                    return t.length
                }))
            }, t.prototype.getRowCount = function () {
                return this._map.length
            }, t.prototype.getRows = function () {
                return this._map
            }, t
        }();
        exports.FlowchartyMap = t;
    }, {}], "sUuI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: !0});
        var e = require("tslib"), t = e.__importStar(require("d3")), n = require("./settings"), o = require("./canvas"), i = require("./elements"), r = require("./node_factory"), l = require("./link_factory"), s = require("./map"), a = function () {
            function e(e) {
                void 0 === e && (e = new n.FlowchartySettings), this._settings = e
            }

            return e.prototype.render = function (e, n) {
                var a;
                a = "string" == typeof e ? t.select(e) : e;
                var c = new r.FlowchartyNodeFactory(this._settings), b = new l.FlowchartyLinkFactory(this._settings);
                new o.FlowchartyCanvas(a, new i.FlowchartyElements(n.nodes.map(function (e) {
                    return c.create(e)
                }), n.links.map(function (e) {
                    return b.create(e)
                }), new s.FlowchartyMap(n.map))).render()
            }, Object.defineProperty(e.prototype, "shape", {
                set: function (e) {
                    this._settings.shape = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeWidth", {
                set: function (e) {
                    this._settings.nodeWidth = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeHeight", {
                set: function (e) {
                    this._settings.nodeHeight = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeRX", {
                set: function (e) {
                    this._settings.nodeRX = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeRY", {
                set: function (e) {
                    this._settings.nodeRY = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeStrokeColor", {
                set: function (e) {
                    this._settings.nodeStrokeColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeStrokeWidth", {
                set: function (e) {
                    this._settings.nodeStrokeWidth = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeFillColor", {
                set: function (e) {
                    this._settings.nodeFillColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelDX", {
                set: function (e) {
                    this._settings.nodeLabelDX = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelDY", {
                set: function (e) {
                    this._settings.nodeLabelDY = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelTextAnchor", {
                set: function (e) {
                    this._settings.nodeLabelTextAnchor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelColor", {
                set: function (e) {
                    this._settings.nodeLabelColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelFontSize", {
                set: function (e) {
                    this._settings.nodeLabelFontSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "nodeLabelFontFamily", {
                set: function (e) {
                    this._settings.nodeLabelFontFamily = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkConnectionType", {
                set: function (e) {
                    this._settings.linkConnectionType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkCurveType", {
                set: function (e) {
                    this._settings.linkCurveType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkColor", {
                set: function (e) {
                    this._settings.linkColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkWidth", {
                set: function (e) {
                    this._settings.linkWidth = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkHeadType", {
                set: function (e) {
                    this._settings.linkHeadType = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkArrowheadSize", {
                set: function (e) {
                    this._settings.linkArrowheadSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelDX", {
                set: function (e) {
                    this._settings.linkLabelDX = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelDY", {
                set: function (e) {
                    this._settings.linkLabelDY = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelTextAnchor", {
                set: function (e) {
                    this._settings.linkLabelTextAnchor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelColor", {
                set: function (e) {
                    this._settings.linkLabelColor = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelFontSize", {
                set: function (e) {
                    this._settings.linkLabelFontSize = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "linkLabelFontFamily", {
                set: function (e) {
                    this._settings.linkLabelFontFamily = e
                }, enumerable: !0, configurable: !0
            }), e
        }();
        exports.default = a;
    }, {"tslib": "vCxL", "d3": "UzF0", "./settings": "NYkG", "./canvas": "zcNd", "./elements": "0xjy", "./node_factory": "nCI/", "./link_factory": "FV6i", "./map": "YIPn"}]
}, {}, ["sUuI"], "Flowcharty")
//# sourceMappingURL=/flowcharty.map