(this["webpackJsonpdobble-generator"] = this["webpackJsonpdobble-generator"] || []).push([
    [0], {
        229: function(e) {
            e.exports = JSON.parse('["animals/alligator.png","animals/badger.png","animals/bear.png","animals/budgie.png","animals/bumblebee.png","animals/cat.png","animals/chicken.png","animals/cow.png","animals/crab.png","animals/cute-hamster.png","animals/deer.png","animals/dog.png","animals/dolphin.png","animals/dove.png","animals/elephant.png","animals/falcon.png","animals/fish.png","animals/flamingo.png","animals/fox.png","animals/frog.png","animals/grasshopper.png","animals/hornet.png","animals/horse.png","animals/hummingbird.png","animals/kangaroo.png","animals/kiwi-bird.png","animals/ladybird.png","animals/leopard.png","animals/lion.png","animals/llama.png","animals/monarch-butterfly.png","animals/mouse-animal.png","animals/octopus.png","animals/orca.png","animals/owl.png","animals/panda.png","animals/parrot.png","animals/peacock.png","animals/pig.png","animals/prawn.png","animals/puffin-bird.png","animals/rabbit.png","animals/rhinoceros.png","animals/seal.png","animals/sheep.png","animals/sloth.png","animals/snail.png","animals/snake.png","animals/squirrel.png","animals/starfish.png","animals/stork.png","animals/swan.png","animals/turtle.png","animals/unicorn.png","animals/whale.png","animals/wolf.png","animals/zebra.png"]')
        },
        603: function(e, n) {},
        605: function(e, n) {},
        72: function(e, n, a) {
            "use strict";
            (function(e) {
                a.d(n, "e", (function() {
                    return y
                })), a.d(n, "b", (function() {
                    return k
                })), a.d(n, "d", (function() {
                    return E
                })), a.d(n, "f", (function() {
                    return S
                })), a.d(n, "c", (function() {
                    return M
                })), a.d(n, "a", (function() {
                    return _
                }));
                var t = a(28),
                    r = a(10),
                    s = a.n(r),
                    i = a(37),
                    c = a(81),
                    o = a(63),
                    l = a(39),
                    p = a(456),
                    u = a.n(p),
                    m = a(457),
                    g = a.n(m),
                    b = a(458),
                    d = a(459),
                    f = a.n(d),
                    h = a(180),
                    j = a.n(h),
                    O = a(121),
                    x = a.n(O),
                    v = a(471),
                    y = [2, 3, 5, 7, 11].map((function(e) {
                        return {
                            n: e,
                            symbols: Math.pow(e, 2) + e + 1,
                            symbolsPerCard: e + 1
                        }
                    })),
                    w = function(e) {
                        var n = Object(l.a)(Array(e).keys());
                        return x()([x()([].concat(Object(l.a)(n), [e]))].concat(Object(l.a)(n.flatMap((function(a) {
                            return [x()([0].concat(Object(l.a)(n.map((function(n) {
                                return e + 1 + e * a + n
                            })))))].concat(Object(l.a)(n.map((function(t) {
                                return x()([a + 1].concat(Object(l.a)(n.map((function(n) {
                                    return e + 1 + e * n + (a * n + t) % e
                                })))))
                            }))))
                        })))))
                    },
                    k = function(e) {
                        return new Promise((function(n, a) {
                            var t = new FileReader;
                            t.onerror = a, t.onload = function() {
                                return n(t.result)
                            }, t.readAsDataURL(e)
                        }))
                    },
                    E = function(e) {
                        return new Promise((function(n, a) {
                            var t = new Image;
                            t.onerror = a, t.onload = function() {
                                return n(t.height / t.width)
                            }, t.src = e
                        }))
                    },
                    S = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return new Promise((function(n) {
                            return setTimeout(n, e)
                        }))
                    },
                    M = function() {
                        var e = Object(o.a)(s.a.mark((function e() {
                            var n, a, t, r, o, l, p, u, m, g, d, h, j, O, x, v, y, k, E, S, M, N, D, C, _, R, L, F, G, T, U, z, H, W, B, J, q, V = arguments;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = V.length > 0 && void 0 !== V[0] ? V[0] : [], a = V.length > 1 ? V[1] : void 0, t = a.n, r = a.pageWidth, o = void 0 === r ? 210 : r, l = a.pageHeight, p = void 0 === l ? 297 : l, u = a.cardRadius, m = void 0 === u ? 42 : u, g = a.symbolMargin, d = void 0 === g ? -.1 : g, h = a.rotateSymbols, j = void 0 === h || h, O = w(t).map((function(e) {
                                            return e.map((function(e) {
                                                return n[e]
                                            }))
                                        })), x = Math.floor(o / (2 * m)), v = Math.floor(p / (2 * m)), y = x * v, k = o / x, E = p / v, S = new b.a, M = Object(c.a)(f()(O, y).entries()), e.prev = 11, M.s();
                                    case 13:
                                        if ((N = M.n()).done) {
                                            e.next = 56;
                                            break
                                        }
                                        D = Object(i.a)(N.value, 2), C = D[0], _ = D[1], C > 0 && S.addPage(), R = Object(c.a)(_.entries()), e.prev = 17, R.s();
                                    case 19:
                                        if ((L = R.n()).done) {
                                            e.next = 46;
                                            break
                                        }
                                        F = Object(i.a)(L.value, 2), G = F[0], T = F[1], U = I(G, k, E), z = U.x, H = U.y, S.circle(z, H, m, "S"), W = A(T, d, t), B = Object(c.a)(W), e.prev = 25, B.s();
                                    case 27:
                                        if ((J = B.n()).done) {
                                            e.next = 36;
                                            break
                                        }
                                        if (q = J.value, !j) {
                                            e.next = 33;
                                            break
                                        }
                                        return e.next = 32, P(q);
                                    case 32:
                                        q = e.sent;
                                    case 33:
                                        S.addImage(q.image.base64src, "PNG", z + q.x * m, H + q.y * m, m * q.width, m * q.height, q.image.id, "NONE", 0);
                                    case 34:
                                        e.next = 27;
                                        break;
                                    case 36:
                                        e.next = 41;
                                        break;
                                    case 38:
                                        e.prev = 38, e.t0 = e.catch(25), B.e(e.t0);
                                    case 41:
                                        return e.prev = 41, B.f(), e.finish(41);
                                    case 44:
                                        e.next = 19;
                                        break;
                                    case 46:
                                        e.next = 51;
                                        break;
                                    case 48:
                                        e.prev = 48, e.t1 = e.catch(17), R.e(e.t1);
                                    case 51:
                                        return e.prev = 51, R.f(), e.finish(51);
                                    case 54:
                                        e.next = 13;
                                        break;
                                    case 56:
                                        e.next = 61;
                                        break;
                                    case 58:
                                        e.prev = 58, e.t2 = e.catch(11), M.e(e.t2);
                                    case 61:
                                        return e.prev = 61, M.f(), e.finish(61);
                                    case 64:
                                        return e.abrupt("return", S);
                                    case 65:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [11, 58, 61, 64],
                                [17, 48, 51, 54],
                                [25, 38, 41, 44]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    P = function(n) {
                        return new Promise((function(a, r) {
                            var s = n.image,
                                i = e.from(s.base64src.split(",")[1], "base64");
                            g.a.read(i).then((function(e) {
                                e.rotate(n.rotation).getBase64("image/png", (function(e, i) {
                                    e ? r(e) : a(Object(t.a)(Object(t.a)({}, n), {}, {
                                        image: Object(t.a)(Object(t.a)({}, s), {}, {
                                            base64src: i
                                        })
                                    }))
                                }))
                            }))
                        }))
                    };

                function A(e, n, a) {
                    for (var t = [], r = 500; r-- > 0 && (e.forEach((function(e) {
                            for (var r = 100; r-- > 0;) {
                                var s = C(e, r, a);
                                if (!N(s) && !D(t, s, n)) {
                                    t.push(s);
                                    break
                                }
                            }
                        })), t.length !== a + 1);) t.length = 0;
                    if (t.length !== a + 1) throw new Error("Could not generate a possible card layout");
                    return t
                }
                var N = function(e) {
                    return Math.pow(e.x + e.width, 2) + Math.pow(e.y, 2) > 1 || Math.pow(e.x + e.width, 2) + Math.pow(e.y + e.height, 2) > 1 || Math.pow(e.x, 2) + Math.pow(e.y, 2) > 1 || Math.pow(e.x, 2) + Math.pow(e.y + e.height, 2) > 1
                };

                function D(e, n, a) {
                    return e.some((function(e) {
                        return n.x - a < e.x + e.width && n.x + n.width + a > e.x && n.y - a < e.y + e.height && n.y + n.height + a > e.y
                    }))
                }

                function C(e, n, a) {
                    var t = function(e, n) {
                        return j()(Math.max(.6 * e / 100, .3), n < 7 ? 1 : .8)
                    }(n, a);
                    return {
                        x: j()(-1, 1 - t, !0),
                        y: j()(-1, 1 - t, !0),
                        rotation: j()(0, 359, !1),
                        width: t * e.ratio,
                        height: t * e.ratio,
                        image: e
                    }
                }

                function I(e, n, a) {
                    return {
                        x: e % 2 * n + n / 2,
                        y: Math.floor(e / 2) * a + a / 2
                    }
                }

                function _(e) {
                    var n = new u.a({
                        allErrors: !0,
                        useDefaults: !0
                    });
                    return new v.a(e, function(e) {
                        var a = n.compile(e);
                        return function(e) {
                            var n;
                            return a(e), (null === (n = a.errors) || void 0 === n ? void 0 : n.length) ? {
                                details: a.errors
                            } : null
                        }
                    }(e))
                }
            }).call(this, a(8).Buffer)
        },
        780: function(e, n, a) {
            var t = {
                "./animals/alligator.png": [848, 9, 6],
                "./animals/badger.png": [849, 9, 7],
                "./animals/bear.png": [850, 9, 8],
                "./animals/budgie.png": [851, 9, 9],
                "./animals/bumblebee.png": [852, 9, 10],
                "./animals/cat.png": [853, 9, 11],
                "./animals/chicken.png": [854, 9, 12],
                "./animals/cow.png": [855, 9, 13],
                "./animals/crab.png": [856, 9, 14],
                "./animals/cute-hamster.png": [857, 9, 15],
                "./animals/deer.png": [858, 9, 16],
                "./animals/dog.png": [859, 9, 17],
                "./animals/dolphin.png": [860, 9, 18],
                "./animals/dove.png": [861, 9, 19],
                "./animals/elephant.png": [862, 9, 20],
                "./animals/falcon.png": [863, 9, 21],
                "./animals/fish.png": [864, 9, 22],
                "./animals/flamingo.png": [865, 9, 23],
                "./animals/fox.png": [866, 9, 24],
                "./animals/frog.png": [867, 9, 25],
                "./animals/grasshopper.png": [868, 9, 26],
                "./animals/hornet.png": [869, 9, 27],
                "./animals/horse.png": [870, 9, 28],
                "./animals/hummingbird.png": [871, 9, 29],
                "./animals/kangaroo.png": [872, 9, 30],
                "./animals/kiwi-bird.png": [873, 9, 31],
                "./animals/ladybird.png": [874, 9, 32],
                "./animals/leopard.png": [875, 9, 33],
                "./animals/lion.png": [876, 9, 34],
                "./animals/llama.png": [877, 9, 35],
                "./animals/monarch-butterfly.png": [878, 9, 36],
                "./animals/mouse-animal.png": [879, 9, 37],
                "./animals/octopus.png": [880, 9, 38],
                "./animals/orca.png": [881, 9, 39],
                "./animals/owl.png": [882, 9, 40],
                "./animals/panda.png": [883, 9, 41],
                "./animals/parrot.png": [884, 9, 42],
                "./animals/peacock.png": [885, 9, 43],
                "./animals/pig.png": [886, 9, 44],
                "./animals/prawn.png": [887, 9, 45],
                "./animals/puffin-bird.png": [888, 9, 46],
                "./animals/rabbit.png": [889, 9, 47],
                "./animals/rhinoceros.png": [890, 9, 48],
                "./animals/seal.png": [891, 9, 49],
                "./animals/sheep.png": [892, 9, 50],
                "./animals/sloth.png": [893, 9, 51],
                "./animals/snail.png": [894, 9, 52],
                "./animals/snake.png": [895, 9, 53],
                "./animals/squirrel.png": [896, 9, 54],
                "./animals/starfish.png": [897, 9, 55],
                "./animals/stork.png": [898, 9, 56],
                "./animals/swan.png": [899, 9, 57],
                "./animals/turtle.png": [900, 9, 58],
                "./animals/unicorn.png": [901, 9, 59],
                "./animals/whale.png": [902, 9, 60],
                "./animals/wolf.png": [903, 9, 61],
                "./animals/zebra.png": [904, 9, 62],
                "./exampleFiles": [229, 3],
                "./exampleFiles.json": [229, 3],
                "./ui/remove-cursor.png": [905, 9, 63]
            };

            function r(e) {
                if (!a.o(t, e)) return Promise.resolve().then((function() {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }));
                var n = t[e],
                    r = n[0];
                return Promise.all(n.slice(2).map(a.e)).then((function() {
                    return a.t(r, n[1])
                }))
            }
            r.keys = function() {
                return Object.keys(t)
            }, r.id = 780, e.exports = r
        },
        838: function(e, n, a) {},
        839: function(e, n, a) {
            "use strict";
            a.r(n);
            var t = a(0),
                r = a(79),
                s = a.n(r),
                i = a(101),
                c = a(254),
                o = a(455),
                l = a(921),
                p = a(28),
                u = a(10),
                m = a.n(u),
                g = a(63),
                b = a(121),
                d = a.n(b),
                f = a(334),
                h = a.n(f),
                j = a(918),
                O = a(229),
                x = a(39),
                v = "APPEND_IMAGES",
                y = "GENERATE_PDF",
                w = "GENERATE_PDF_COMPLETE",
                k = "LOAD_EXAMPLES",
                E = "REMOVE_ALL",
                S = "REMOVE_IMAGE",
                M = "UPLOAD_IMAGES",
                P = "SET_SETTINGS",
                A = function(e) {
                    return {
                        type: v,
                        payload: e
                    }
                },
                N = function() {
                    return {
                        type: E
                    }
                },
                D = a(72),
                C = Object(j.a)({
                    type: M,
                    process: function(e, n, a) {
                        return Object(g.a)(m.a.mark((function t() {
                            var r, s;
                            return m.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.action, t.next = 3, Promise.all(r.payload.map(function() {
                                            var e = Object(g.a)(m.a.mark((function e(n) {
                                                var a;
                                                return m.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, Object(D.b)(n);
                                                        case 2:
                                                            return a = e.sent, e.t0 = a, e.t1 = h()("image_"), e.next = 7, Object(D.d)(a);
                                                        case 7:
                                                            return e.t2 = e.sent, e.t3 = n.name, e.abrupt("return", {
                                                                base64src: e.t0,
                                                                id: e.t1,
                                                                ratio: e.t2,
                                                                title: e.t3
                                                            });
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(n) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 3:
                                        s = t.sent, n(A(s)), a();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }),
                I = Object(j.a)({
                    type: y,
                    latest: !0,
                    validate: function(e, n, a) {
                        var t = e.action;
                        (0, e.getState)().processing ? a(t) : n(t)
                    },
                    process: function(e) {
                        function n(n, a, t) {
                            return e.apply(this, arguments)
                        }
                        return n.toString = function() {
                            return e.toString()
                        }, n
                    }((function(e, n, a) {
                        return Object(g.a)(m.a.mark((function t() {
                            var r, s, i, c, o, l;
                            return m.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.action, s = e.getState, i = s(), c = i.settings, o = i.images, t.next = 4, Object(D.f)(100);
                                    case 4:
                                        return t.next = 6, Object(D.c)(o, Object(p.a)(Object(p.a)({}, c), r.payload)).catch((function(e) {
                                            return alert(e.message)
                                        }));
                                    case 6:
                                        if (!(l = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.next = 11, l.save("Cards.pdf", {
                                            returnPromise: !0
                                        });
                                    case 11:
                                        t.next = 14;
                                        break;
                                    case 13:
                                        window.open(URL.createObjectURL(l.output("blob")));
                                    case 14:
                                        n({
                                            type: w
                                        }), a();
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }))
                }),
                _ = Object(j.a)({
                    type: k,
                    latest: !0,
                    process: function(e, n, t) {
                        return Object(g.a)(m.a.mark((function e() {
                            var r;
                            return m.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n(N()), e.next = 3, Promise.all(d()(O).map(function() {
                                            var e = Object(g.a)(m.a.mark((function e(n) {
                                                var t;
                                                return m.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, a(780)("./".concat(n));
                                                        case 2:
                                                            return t = e.sent.default, e.t0 = t, e.t1 = h()("image_"), e.next = 7, Object(D.d)(t);
                                                        case 7:
                                                            return e.t2 = e.sent, e.t3 = n, e.abrupt("return", {
                                                                base64src: e.t0,
                                                                id: e.t1,
                                                                ratio: e.t2,
                                                                title: e.t3
                                                            });
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(n) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 3:
                                        r = e.sent, n(A(r)), t();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }),
                R = [C, I, _],
                L = {
                    images: [],
                    processing: !1,
                    settings: {
                        pageWidth: 210,
                        pageHeight: 297,
                        cardRadius: 42,
                        symbolMargin: -.1,
                        rotateSymbols: !0
                    }
                };
            var F = Object(c.createStore)((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case v:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                images: [].concat(Object(x.a)(e.images), Object(x.a)(n.payload))
                            });
                        case y:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                processing: !0
                            });
                        case w:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                processing: !1
                            });
                        case E:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                images: []
                            });
                        case S:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                images: e.images.filter((function(e) {
                                    return e.id !== n.payload
                                }))
                            });
                        case P:
                            return Object(p.a)(Object(p.a)({}, e), {}, {
                                settings: Object(p.a)(Object(p.a)({}, e.settings), n.payload)
                            });
                        default:
                            return e
                    }
                }), Object(o.composeWithDevTools)(Object(c.applyMiddleware)(Object(l.a)(R)))),
                G = a(919),
                T = a(920),
                U = a(926),
                z = a(154),
                H = a(928),
                W = a(472),
                B = a(37),
                J = a(923),
                q = a(924),
                V = a(922),
                Y = a(4),
                X = Object(D.a)({
                    title: "Settings",
                    type: "object",
                    properties: {
                        pageWidth: {
                            type: "integer"
                        },
                        pageHeight: {
                            type: "integer"
                        },
                        cardRadius: {
                            type: "number"
                        },
                        symbolMargin: {
                            type: "number"
                        },
                        rotateSymbols: {
                            type: "boolean"
                        }
                    }
                }),
                K = Object(i.b)((function(e) {
                    return {
                        settings: e.settings
                    }
                }), {
                    setSettings: function(e) {
                        return {
                            type: P,
                            payload: e
                        }
                    }
                })((function(e) {
                    var n = e.settings,
                        a = e.setSettings,
                        r = Object(t.useState)(!1),
                        s = Object(B.a)(r, 2),
                        i = s[0],
                        c = s[1];
                    return Object(Y.jsxs)(J.a, {
                        onClose: function() {
                            return c(!1)
                        },
                        onOpen: function() {
                            return c(!0)
                        },
                        open: i,
                        dimmer: "blurring",
                        trigger: Object(Y.jsxs)(U.a, {
                            children: [Object(Y.jsx)(z.a, {
                                name: "cog"
                            }), "Settings"]
                        }),
                        children: [Object(Y.jsx)(J.a.Header, {
                            children: "Adjust settings for the print"
                        }), Object(Y.jsxs)(J.a.Content, {
                            children: [Object(Y.jsx)(V.a, {
                                schema: X,
                                model: n,
                                onSubmit: function(e) {
                                    a(e), c(!1)
                                }
                            }), Object(Y.jsx)(q.a, {
                                success: !0,
                                header: "Tips:",
                                list: ["Page sizes and card radius are in millimeters", "Symbol margin is a percentage of a symbol that should be left as a margin between other symbols", "If you rotate symbols, the margin value should be negative to allow overlap since rotated symbols are smaller", "Experiment and see what fit best for your pictures!"]
                            })]
                        })]
                    })
                })),
                Q = Object(i.b)((function(e) {
                    return {
                        images: e.images
                    }
                }), {
                    removeAll: N,
                    loadExamples: function() {
                        return {
                            type: k
                        }
                    },
                    uploadImages: function(e) {
                        return {
                            type: M,
                            payload: e ? Object(x.a)(e) : []
                        }
                    },
                    removeImage: function(e) {
                        return {
                            type: S,
                            payload: e
                        }
                    }
                })((function(e) {
                    var n = e.images,
                        a = e.loadExamples,
                        t = e.removeAll,
                        r = e.removeImage,
                        s = e.uploadImages;
                    return Object(Y.jsxs)(G.a, {
                        className: "pusher",
                        children: [Object(Y.jsx)(T.a, {
                            horizontal: !0,
                            children: Object(Y.jsxs)(U.a.Group, {
                                size: "huge",
                                children: [Object(Y.jsxs)(U.a, {
                                    primary: !0,
                                    as: "label",
                                    htmlFor: "fileUpload",
                                    children: [Object(Y.jsx)(z.a, {
                                        name: "cloud upload"
                                    }), "Upload images"]
                                })
                                ]
                            })
                        }), Object(Y.jsx)("input", {
                            type: "file",
                            id: "fileUpload",
                            onChange: function(e) {
                                return s(e.target.files)
                            },
                            multiple: !0,
                            style: {
                                display: "none"
                            },
                            accept: ".png,.jpg,.jpeg"
                        }), Object(Y.jsxs)(H.a, {
                            basic: !0,
                            textAlign: "center",
                            children: [Object(Y.jsx)(W.a.Group, {
                                size: "tiny",
                                children: n.map((function(e) {
                                    var n = e.id,
                                        a = e.base64src,
                                        t = e.title;
                                    return Object(Y.jsx)(W.a, {
                                        src: a,
                                        onClick: function() {
                                            return r(n)
                                        },
                                        className: "preview",
                                        title: t,
                                        alt: t
                                    }, n)
                                }))
                            }), n.length > 0 && Object(Y.jsxs)(Y.Fragment, {
                                children: [Object(Y.jsxs)(U.a, {
                                    onClick: t,
                                    children: [Object(Y.jsx)(z.a, {
                                        name: "trash"
                                    }), "Remove all images"]
                                }), Object(Y.jsx)(K, {})]
                            })]
                        })]
                    })
                })),
                Z = function() {
                    return Object(Y.jsx)(H.a, {
                        inverted: !0,
                        vertical: !0,
                        className: "footer",
                        children: Object(Y.jsxs)(G.a, {
                            text: !0,
                            textAlign: "center",
                            children: ["Dobble generator", Object(Y.jsx)("br", {}), "Made by BearPolarny.", Object(Y.jsx)("br", {}), "Example images by", " ", Object(Y.jsx)("a", {
                                href: "https://icons8.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "icons8.com"
                            })]
                        })
                    })
                },
                $ = a(929),
                ee = function() {
                    return Object(Y.jsx)(H.a, {
                        inverted: !0,
                        textAlign: "center",
                        vertical: !0,
                        className: "header",
                        children: Object(Y.jsxs)(G.a, {
                            text: !0,
                            children: [Object(Y.jsx)($.a, {
                                as: "h1",
                                content: "Dobble-like generator",
                                inverted: !0,
                                className: "title"
                            }), Object(Y.jsx)($.a, {
                                as: "h2",
                                content: "Prepare and print cards with your own images",
                                inverted: !0,
                                className: "subtitle"
                            })]
                        })
                    })
                },
                ne = a(470),
                ae = a.n(ne),
                te = a(925),
                re = Object(i.b)((function(e) {
                    return {
                        images: e.images,
                        plains: D.e,
                        processing: e.processing
                    }
                }), {
                    generatePdf: function(e) {
                        return {
                            type: y,
                            payload: {
                                n: e
                            }
                        }
                    }
                })((function(e) {
                    var n = e.images,
                        a = e.plains,
                        t = e.processing,
                        r = e.generatePdf,
                        s = n.length,
                        i = ae()(a, (function(e) {
                            var n = e.symbols;
                            return s >= n
                        })),
                        c = a[i] || null,
                        o = a[i + 1] || null,
                        l = s / (c || o).symbols * 100,
                        p = o ? s / o.symbols * 100 : 100;
                    return Object(Y.jsx)(G.a, {
                        children: Object(Y.jsxs)(H.a, {
                            textAlign: "center",
                            raised: !0,
                            children: [Object(Y.jsx)(te.a, {
                                percent: l,
                                attached: "top",
                                color: "blue",
                                autoSuccess: !0
                            }), Object(Y.jsx)(te.a, {
                                percent: p,
                                attached: "bottom",
                                color: "blue",
                                autoSuccess: !0
                            }), c && Object(Y.jsxs)(Y.Fragment, {
                                children: [Object(Y.jsxs)($.a, {
                                    as: "h1",
                                    className: "instructions",
                                    children: ["You can generate ", c.symbols, " cards with", " ", c.symbolsPerCard, " images per card.", s > c.symbols && Object(Y.jsxs)($.a.Subheader, {
                                        children: ["You have uploaded too much images. Last", " ", s - c.symbols, " images will not be used."]
                                    })]
                                }), Object(Y.jsxs)(U.a, {
                                    size: "massive",
                                    positive: !0,
                                    disabled: t,
                                    onClick: function() {
                                        return r(c.n)
                                    },
                                    children: [Object(Y.jsx)(z.a, {
                                        loading: t,
                                        name: "file pdf outline"
                                    }), "Generate and download PDF file"]
                                })]
                            }), c && o && Object(Y.jsx)(T.a, {
                                horizontal: !0,
                                className: "padded",
                                children: "Or"
                            }), o && Object(Y.jsxs)($.a, {
                                as: "h3",
                                className: "instructions",
                                children: ["Add ", o.symbols - s, " more images to generate", " ", o.symbols, " cards with ", o.symbolsPerCard, " images per card"]
                            })]
                        })
                    })
                })),
                se = function() {
                    return Object(Y.jsxs)(Y.Fragment, {
                        children: [Object(Y.jsx)(ee, {}), Object(Y.jsx)(Q, {}), Object(Y.jsx)(re, {}), Object(Y.jsx)(Z, {})]
                    })
                };
            a(838);
            s.a.render(Object(Y.jsx)(i.a, {
                store: F,
                children: Object(Y.jsx)(se, {})
            }), document.getElementById("root"))
        }
    },
    [
        [839, 1, 2]
    ]
]);
//# sourceMappingURL=main.37d9f0e5.chunk.js.map