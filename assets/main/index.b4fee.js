window.__require = function e(t, o, n) {
    function r(s, i) {
        if (!o[s]) {
            if (!t[s]) {
                var a = s.split("/");
                if (a = a[a.length - 1],
                !t[a]) {
                    var c = "function" == typeof __require && __require;
                    if (!i && c)
                        return c(a, !0);
                    if (l)
                        return l(a, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = a
            }
            var u = o[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                return r(t[s][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[s].exports
    }
    for (var l = "function" == typeof __require && __require, s = 0; s < n.length; s++)
        r(n[s]);
    return r
}({
    BundlerHelper: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0ee4dNVsKdBWKYQ1FKFncwp", "BundlerHelper");
        var n = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, l) {
                function s(e) {
                    try {
                        a(n.next(e))
                    } catch (t) {
                        l(t)
                    }
                }
                function i(e) {
                    try {
                        a(n.throw(e))
                    } catch (t) {
                        l(t)
                    }
                }
                function a(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(s, i)
                }
                a((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        function r(e, t) {
            return n(this, void 0, void 0, function*() {
                const o = cc.assetManager.getBundle(e);
                if (o)
                    return t && t(1),
                    o;
                let n = 0
                  , r = {
                    onFileProgress: (e,o)=>{
                        o && e / o > n && (n = e / o),
                        t && t(n)
                    }
                };
                return globalThis.BundlerVerions[e] && (r.version = globalThis.BundlerVerions[e]),
                new Promise((o,n)=>{
                    cc.assetManager.loadBundle(e, r, (e,r)=>{
                        e ? n(e) : (t && t(1),
                        o(r))
                    }
                    )
                }
                )
            })
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.GetUrl = o.PlatformName = o.Version = o.loadMultiBundle = o.loadBundle = o.assignBundleVersion = void 0,
        globalThis.BundlerVerions = {},
        o.assignBundleVersion = function(e) {
            Object.assign(globalThis.BundlerVerions, e)
        }
        ,
        o.loadBundle = r,
        o.loadMultiBundle = function(e, t) {
            return n(this, void 0, void 0, function*() {
                const o = e.length;
                if (0 == o)
                    return t && t(1),
                    Promise.resolve([]);
                const n = {};
                function l() {
                    if (t) {
                        let r = 0;
                        for (const t of e)
                            r += n[t] || 0;
                        t(r / o)
                    }
                }
                const s = [];
                for (const t of e)
                    s.push(r(t, e=>{
                        n[t] = e,
                        l()
                    }
                    ));
                return Promise.all(s)
            })
        }
        ,
        o.Version = "1.1.1",
        o.PlatformName = "MantaRays",
        o.GetUrl = function() {
            return globalThis.loadUrl
        }
        ,
        cc._RF.pop()
    }
    , {}],
    IJackpotNumChange: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ea3540Qhk1Jn7SqfPmO8jte", "IJackpotNumChange"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        cc._RF.pop()
    }
    , {}],
    ISoundSystem: [function(e, t) {
        "use strict";
        cc._RF.push(t, "a8abdjXDwhBNaNQpldEp0Jl", "ISoundSystem"),
        cc._RF.pop()
    }
    , {}],
    start: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cdaa2ggz2FAbrrl+mI0ewsb", "start");
        var n = this && this.__decorate || function(e, t, o, n) {
            var r, l = arguments.length, s = l < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                s = Reflect.decorate(e, t, o, n);
            else
                for (var i = e.length - 1; i >= 0; i--)
                    (r = e[i]) && (s = (l < 3 ? r(s) : l > 3 ? r(t, o, s) : r(t, o)) || s);
            return l > 3 && s && Object.defineProperty(t, o, s),
            s
        }
          , r = this && this.__awaiter || function(e, t, o, n) {
            return new (o || (o = Promise))(function(r, l) {
                function s(e) {
                    try {
                        a(n.next(e))
                    } catch (t) {
                        l(t)
                    }
                }
                function i(e) {
                    try {
                        a(n.throw(e))
                    } catch (t) {
                        l(t)
                    }
                }
                function a(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof o ? t : new o(function(e) {
                        e(t)
                    }
                    )).then(s, i)
                }
                a((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const l = e("./BundlerHelper")
          , {ccclass: s, property: i} = cc._decorator;
        globalThis.mUrl = "",
        globalThis.loadUrl = "http://192.168.91.133:81/",
        globalThis.URLAndroid = "",
        globalThis.URLIOS = "",
        globalThis.LOGONSERVER = "192.168.91.133",
        globalThis.isLocal = !1,
        globalThis.useMainUrl = !0;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.label = null,
                this.text = "hello"
            }
            start() {
                this.fetchBundleVersion2()
            }
            startLoad() {
                return r(this, void 0, void 0, function*() {
                    yield this.fetchBundleVersion()
                })
            }
            fetchBundleVersion2() {
                let e = "GameURL_MantaRays.txt";
                globalThis.isLocal && (globalThis.loadUrl = "http://192.168.0.24:82/assets/"),
                cc.error("fetchBundleVersion", l.GetUrl() + e);
                var t = this;
                cc.loader.load({
                    url: l.GetUrl() + e + "?v" + (new Date).getTime(),
                    type: "json"
                }, function(e, o) {
                    if (!e) {
                        globalThis.LOGONSERVER = o.URLServer,
                        globalThis.URLAndroid = o.URLAndroid,
                        globalThis.URLIOS = o.URLIOS;
                        var n = o.CurURL;
                        globalThis.loadUrl = o[n],
                        cc.error("===myKey url===", n, globalThis.loadUrl),
                        globalThis.OpenWednesday = o.OpenWednesday,
                        globalThis.ISSIGN = o.ISSIGN,
                        globalThis.ISCHANGEPASSWORD = o.ISCHANGEPASSWORD,
                        globalThis.OpenPay = o.OpenPay,
                        globalThis.OpenNoti = o.OpenNoti,
                        globalThis.ShowMode = o.ShowMode,
                        globalThis.UserScoreMode = o.UserScoreMode,
                        globalThis.TableMode = o.TableMode,
                        globalThis.UpdateApkVer_android = o.UpdateApkVer_android,
                        globalThis.CustomerServices = o.CustomerServices,
                        globalThis.LOGONPORTLIST = [];
                        var r = o.URLPortList;
                        if (r && "" != r) {
                            var l = r.split("|");
                            for (let e = 0; e < l.length; e++)
                                globalThis.LOGONPORTLIST.push(l[e])
                        }
                        globalThis.OpenWheel = o.OpenWheel,
                        t.startLoad()
                    }
                })
            }
            fetchBundleVersion() {
                cc.loader.load({
                    url: l.GetUrl() + "BuddleVersion.json?v" + (new Date).getTime(),
                    type: "json"
                }, function(e, t) {
                    if (!e) {
                        var o = JSON.parse(JSON.stringify(t));
                        globalThis.BundlerVerions1 = o;
                        let e = 0;
                        var n = "";
                        let r;
                        !globalThis.isLocal && globalThis.BundlerVerions1.Load && "" != globalThis.BundlerVerions1.Load ? (r = {
                            version: globalThis.BundlerVerions1.Load,
                            onFileProgress: (t,o)=>{
                                o && t / o > e && (e = t / o)
                            }
                        },
                        n = (1 == globalThis.useMainUrl ? l.GetUrl() : "") + "Load",
                        cc.error("url===>", n, globalThis.BundlerVerions1.Load)) : n = "Load",
                        cc.assetManager.loadBundle(n, r, (e,t)=>{
                            e ? cc.log("err=", e) : t.loadScene("StartScene", (e,t)=>{
                                e || cc.director.runSceneImmediate(t)
                            }
                            )
                        }
                        )
                    }
                }
                .bind(this))
            }
        }
        ;
        n([i(cc.Label)], a.prototype, "label", void 0),
        n([i], a.prototype, "text", void 0),
        a = n([s], a),
        o.default = a,
        cc._RF.pop()
    }
    , {
        "./BundlerHelper": "BundlerHelper"
    }],
    xhr: [function(e, t, o) {
        "use strict";
        function n(e) {
            let t = "";
            for (let o in e)
                null != e[o] && (t.length > 1 && (t += "&"),
                t = t + o + "=" + e[o]);
            return t.length > 1 ? t : ""
        }
        cc._RF.push(t, "07f51le0jZERaKdJ4KPicQU", "xhr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.xhr_request = void 0,
        o.xhr_request = function(e) {
            let t = e.url
              , o = e.param || null
              , r = e.method || "POST"
              , l = cc.loader.getXMLHttpRequest();
            l.responseType = "json";
            let s = r.toUpperCase()
              , i = "POST" == s;
            i ? l.open(s, t + "?t=" + (new Date).getTime()) : null != o ? (t = t + "?" + n(o),
            l.open(s, t)) : l.open(s, t),
            l.setRequestHeader("Content-Type", "application/json;charset=utf-8"),
            l.onreadystatechange = function() {
                4 == l.readyState && (200 == l.status ? e.success && e.success(l.response) : e.fail && e.fail("requestHeader error"))
            }
            ,
            i ? l.send(JSON.stringify(o)) : l.send()
        }
        ,
        cc._RF.pop()
    }
    , {}]
}, {}, ["BundlerHelper", "IJackpotNumChange", "ISoundSystem", "start", "xhr"]);
