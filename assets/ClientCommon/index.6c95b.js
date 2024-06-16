window.__require = function t(e, r, s) {
    function i(a, h) {
        if (!r[a]) {
            if (!e[a]) {
                var d = a.split("/");
                if (d = d[d.length - 1],
                !e[d]) {
                    var o = "function" == typeof __require && __require;
                    if (!h && o)
                        return o(d, !0);
                    if (n)
                        return n(d, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = d
            }
            var c = r[a] = {
                exports: {}
            };
            e[a][0].call(c.exports, function(t) {
                return i(e[a][1][t] || t)
            }, c, c.exports, t, e, r, s)
        }
        return r[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < s.length; a++)
        i(s[a]);
    return i
}({
    CData: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "a43c04RbMlLPqNZRUSbpuoF", "CData");
        var s, i = this && this.__decorate || function(t, e, r, s) {
            var i, n = arguments.length, a = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, r) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, r, s);
            else
                for (var h = t.length - 1; h >= 0; h--)
                    (i = t[h]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
            return n > 3 && a && Object.defineProperty(e, r, a),
            a
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const {ccclass: n} = cc._decorator;
        let a = s = class {
            constructor() {
                this.wMain = 0,
                this.wSub = 0,
                this.binData = null,
                this.curIndex = 0,
                this.binLen = 0
            }
            initForRead(t) {
                this.binData = t,
                this.curIndex = 0,
                this.binLen = this.binData.byteLength,
                this.readbyte(),
                this.readbyte();
                let e = this.readword();
                return this.binLen = 8 + e,
                this.wMain = this.readword(),
                this.wSub = this.readword(),
                t.byteLength - 8 - e < 8 ? null : t.slice(8 + e)
            }
            initForSend(t, e, r) {
                let s = 4;
                s += r,
                this.wMain = t,
                this.wSub = e,
                this.binLen = s,
                this.curIndex = 0,
                this.binData = new ArrayBuffer(s),
                this.pushword(t),
                this.pushword(e)
            }
            getCurLen() {
                return this.curIndex
            }
            getLen() {
                return this.binLen
            }
            getDataIndex() {
                return this.curIndex - 8
            }
            setDataIndex(t) {
                this.curIndex = 8 + t
            }
            getDataLen() {
                return this.binLen - 8
            }
            readbyte() {
                let t = new DataView(this.binData,this.curIndex,1);
                return this.curIndex += 1,
                t.getUint8(0)
            }
            pushbyte(t) {
                let e = new DataView(this.binData,this.curIndex,1);
                this.curIndex += 1,
                e.setUint8(0, t)
            }
            readword() {
                let t = new DataView(this.binData,this.curIndex,2);
                return this.curIndex += 2,
                t.getUint16(0, !0)
            }
            pushword(t) {
                let e = new DataView(this.binData,this.curIndex,2);
                this.curIndex += 2,
                e.setUint16(0, t, !0)
            }
            readshort() {
                let t = new DataView(this.binData,this.curIndex,2);
                return this.curIndex += 2,
                t.getInt16(0, !0)
            }
            pushshort(t) {
                let e = new DataView(this.binData,this.curIndex,2);
                this.curIndex += 2,
                e.setInt16(0, t, !0)
            }
            readint() {
                let t = new DataView(this.binData,this.curIndex,4);
                return this.curIndex += 4,
                t.getInt32(0, !0)
            }
            pushint(t) {
                let e = new DataView(this.binData,this.curIndex,4);
                this.curIndex += 4,
                e.setInt32(0, t, !0)
            }
            readdword() {
                let t = new DataView(this.binData,this.curIndex,4);
                return this.curIndex += 4,
                t.getUint32(0, !0)
            }
            pushdword(t) {
                let e = new DataView(this.binData,this.curIndex,4);
                this.curIndex += 4,
                e.setUint32(0, t, !0)
            }
            readscore() {
                return this.readdouble()
            }
            pushscore(t) {
                this.pushdouble(t)
            }
            readint64() {
                let t = this.readdword()
                  , e = this.readdword();
                return e >= 2147483648 ? (t = 4294967295 & ~t,
                0 - ((e = 4294967295 & ~e) * Math.pow(2, 32) + t + 1)) : e * Math.pow(2, 32) + t
            }
            pushint64(t) {
                if (0 == t)
                    this.pushdword(0),
                    this.pushdword(0);
                else if (t > 0) {
                    let e = 4294967295 & t
                      , r = t - e >> 32;
                    this.pushdword(e),
                    this.pushdword(r)
                } else {
                    let e = 0 - t - 1
                      , r = 4294967295 & e
                      , s = e - r >> 32;
                    r = ~r,
                    s = ~s,
                    this.pushdword(r),
                    this.pushdword(s)
                }
            }
            readfloat() {
                let t = new DataView(this.binData,this.curIndex,4);
                return this.curIndex += 4,
                t.getFloat32(0, !0)
            }
            pushfloat(t) {
                let e = new DataView(this.binData,this.curIndex,4);
                this.curIndex += 4,
                e.setFloat32(0, t, !0)
            }
            readdouble() {
                let t = new DataView(this.binData,this.curIndex,8);
                return this.curIndex += 8,
                t.getFloat64(0, !0)
            }
            pushdouble(t) {
                let e = new DataView(this.binData,this.curIndex,8);
                this.curIndex += 8,
                e.setFloat64(0, t, !0)
            }
            readbool() {
                let t = new DataView(this.binData,this.curIndex,1);
                return this.curIndex += 1,
                0 != t.getInt8(0)
            }
            pushbool(t) {
                let e = new DataView(this.binData,this.curIndex,1);
                this.curIndex += 1,
                1 == t ? e.setInt8(0, 1) : e.setInt8(0, 0)
            }
            readstring(t) {
                let e = t;
                (2 * t > this.binLen - this.curIndex || void 0 === t) && (e = (this.binLen - this.curIndex) / 2);
                let r = this.binData.slice(this.curIndex, this.curIndex + 2 * e)
                  , s = new Uint16Array(r,0,e);
                this.curIndex += 2 * e;
                let i = s.indexOf(0);
                return 0 == i ? "" : i < 0 ? String.fromCharCode.apply(null, s) : String.fromCharCode.apply(null, s.slice(0, i))
            }
            readstring2(t) {
                let e = t;
                t > this.binLen - this.curIndex || void 0 === t ? e = (this.binLen - this.curIndex) / 2 : e /= 2;
                let r = this.binData.slice(this.curIndex, this.curIndex + 2 * e)
                  , s = new Uint16Array(r,0,e);
                this.curIndex += 2 * e;
                let i = s.indexOf(0);
                return 0 == i ? "" : i < 0 ? String.fromCharCode.apply(null, s) : String.fromCharCode.apply(null, s.slice(0, i))
            }
            pushstring(t, e=0) {
                let r = t.length;
                0 != e && (r = e);
                let s = new ArrayBuffer(2 * r)
                  , i = new Uint16Array(s);
                for (let h = 0; h < r; h++)
                    h < t.length ? i[h] = t.charCodeAt(h) : i[h] = 0;
                let n = new Uint8Array(s)
                  , a = new Uint8Array(this.binData,this.curIndex,2 * r);
                for (let h = 0; h < 2 * r; h++)
                    a[h] = n[h];
                this.curIndex += 2 * r
            }
            static getStructLen(t) {
                let e = 0;
                for (let r of t) {
                    let t = 0;
                    switch (r.t) {
                    case "int":
                    case "dword":
                        t = 4;
                        break;
                    case "word":
                    case "short":
                        t = 2;
                        break;
                    case "byte":
                    case "bool":
                        t = 1;
                        break;
                    case "float":
                        t = 4;
                        break;
                    case "double":
                    case "score":
                        t = 8;
                        break;
                    case "string":
                        t = 2 * r.s;
                        break;
                    case "table":
                        t = s.getStructLen(r.d)
                    }
                    null != r.l ? 0 == r.l[1] ? e += t * r.l[0] : e += t * r.l[0] * r.l[1] : e += t
                }
                return e
            }
        }
        ;
        a = s = i([n], a),
        r.default = a,
        cc._RF.pop()
    }
    , {}],
    DataUtils: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "0f577qNNbtBY560knLbyVLk", "DataUtils"),
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const s = t("./CData");
        class i {
            static readNetData(t, e) {
                return i.readTable(t, e)
            }
            static createNetData(t, e, r) {
                let i = new s.default;
                return i.initForSend(e, r, s.default.getStructLen(t)),
                i
            }
            static readTable(t, e) {
                let r = {};
                for (const s in t) {
                    let n = 0
                      , a = 0;
                    if (t[s].l && (n = t[s].l[0],
                    a = t[s].l[1]),
                    0 == n)
                        r[t[s].k] = i.readOnce(t[s], e);
                    else {
                        r[t[s].k] = [];
                        for (let h = 0; h < n; h++)
                            if (0 == a)
                                r[t[s].k][h] = i.readOnce(t[s], e);
                            else {
                                r[t[s].k][h] = [];
                                for (let n = 0; n < a; n++)
                                    r[t[s].k][h][n] = i.readOnce(t[s], e)
                            }
                    }
                }
                return r
            }
            static readOnce(t, e) {
                if ("byte" == t.t)
                    return e.readbyte();
                if ("bool" == t.t)
                    return e.readbool();
                if ("word" == t.t)
                    return e.readword();
                if ("short" == t.t)
                    return e.readshort();
                if ("int" == t.t)
                    return e.readint();
                if ("dword" == t.t)
                    return e.readdword();
                if ("float" == t.t)
                    return e.readfloat();
                if ("double" == t.t)
                    return e.readdouble();
                if ("score" == t.t)
                    return e.readscore();
                if ("string" == t.t)
                    return e.readstring(t.s);
                if ("sstring" == t.t) {
                    let t = e.readdword();
                    return e.readstring(t)
                }
                if ("table" == t.t)
                    return i.readTable(t.d, e);
                if ("vbyte" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readbyte();
                    return r
                }
                if ("vbool" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readbool();
                    return r
                }
                if ("vword" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readword();
                    return r
                }
                if ("vshort" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readshort();
                    return r
                }
                if ("vint" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readint();
                    return r
                }
                if ("vdword" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readdword();
                    return r
                }
                if ("vfloat" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readfloat();
                    return r
                }
                if ("vdouble" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readdouble();
                    return r
                }
                if ("vscore" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++)
                        r[s] = e.readscore();
                    return r
                }
                if ("vstring" == t.t) {
                    let t = e.readdword()
                      , r = new Array(t);
                    for (let s = 0; s < t; s++) {
                        let t = e.readdword();
                        r[s] = e.readstring(t)
                    }
                    return r
                }
                return null
            }
        }
        r.default = i,
        cc._RF.pop()
    }
    , {
        "./CData": "CData"
    }],
    EventCenter: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "d171aG1b5JAG5jTXWHZSYGQ", "EventCenter"),
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.EventCenter = void 0;
        class s {
            constructor(t, e=!1, r=0) {
                this.events = [],
                this.handlers = [],
                this.canPause = !1,
                this.paused = !1,
                this.maxEventCount = 0,
                this.name = t,
                this.canPause = e,
                this.maxEventCount = r
            }
            static AddHandler(t) {
                this.instance.addHandler(t),
                this.instanceDelay.addHandler(t)
            }
            static RemoveHandler(t) {
                this.instance.removeHandler(t),
                this.instanceDelay.removeHandler(t)
            }
            static EmitEvent(t, e=null) {
                this.instance.emitEvent(t, e)
            }
            static EmitDelayEvent(t, e=null) {
                this.instanceDelay.emitEvent(t, e)
            }
            static PauseDelayEvent() {
                this.instanceDelay.pause()
            }
            static ResumeDelayEvent() {
                this.instanceDelay.resume()
            }
            pause() {
                this.canPause && (this.paused = !0)
            }
            resume() {
                this.paused && (this.paused = !1,
                this.shiftEvent())
            }
            emitEvent(t, e=null) {
                if (!this.canPause) {
                    for (let r of this.handlers)
                        r && r.handleEvent && r.handleEvent(t, e);
                    return !0
                }
                let r = {
                    Name: t,
                    Data: e
                };
                return !(this.maxEventCount > 0 && this.events.length > this.maxEventCount || (this.events.push(r),
                this.shiftEvent(),
                0))
            }
            addHandler(t) {
                if (t) {
                    this.cleanHandler();
                    for (const e in this.handlers)
                        if (this.handlers[e] && this.handlers[e] === t && this.handlers[e].handlerName == t.handlerName)
                            return Number(e);
                    this.handlers.push(t),
                    this.handlers.sort((t,e)=>e.handlerPriority - t.handlerPriority)
                }
            }
            cleanHandler() {
                for (let t = 0; t < this.handlers.length; t++)
                    this.handlers[t] && this.handlers[t].handleEvent || (this.handlers.splice(t, 1),
                    t--)
            }
            removeHandler(t) {
                for (let e in this.handlers)
                    if (this.handlers[e] && this.handlers[e] === t)
                        return this.handlers[e] = null,
                        !0;
                return !1
            }
            removeHandlerByIndex(t) {
                this.handlers[t] = null
            }
            shiftEvent() {
                if (!this.paused && 0 != this.events.length)
                    for (const t of this.events)
                        for (const e of this.handlers)
                            e && e.handleEvent && e.handleEvent(t.Name, t.Data)
            }
        }
        r.EventCenter = s,
        s.instance = new s("NoDelay"),
        s.instanceDelay = new s("Delay",!0,200),
        cc._RF.pop()
    }
    , {}],
    EventCommonCode: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "58dad9V6PhC7KmlDLpTk02N", "EventCommonCode"),
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.EventCommonCode = void 0,
        function(t) {
            t.marqueeMsg = "marqueeMsg",
            t.receiveJackpot = "receiveJackpot",
            t.networkDelay = "networkDelay",
            t.InitSceneComplete = "InitSceneComplete",
            t.screenSizeChange = "screenSizeChange"
        }(r.EventCommonCode || (r.EventCommonCode = {})),
        cc._RF.pop()
    }
    , {}],
    MD5: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "78b3aUkrbtA9YJytzo6+73t", "MD5");
        var s, i = this && this.__decorate || function(t, e, r, s) {
            var i, n = arguments.length, a = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, r) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, r, s);
            else
                for (var h = t.length - 1; h >= 0; h--)
                    (i = t[h]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
            return n > 3 && a && Object.defineProperty(e, r, a),
            a
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const {ccclass: n} = cc._decorator;
        let a = s = class {
            constructor() {
                this.hexcase = 0,
                this.b64pad = ""
            }
            static calMD5(t) {
                return (new s).hex_md5(t).toLowerCase()
            }
            hex_md5(t) {
                return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
            }
            b64_md5(t) {
                return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
            }
            any_md5(t, e) {
                return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e)
            }
            rstr_md5(t) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
            }
            rstr2hex(t) {
                try {
                    this.hexcase
                } catch (n) {
                    this.hexcase = 0
                }
                for (var e, r = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", i = 0; i < t.length; i++)
                    e = t.charCodeAt(i),
                    s += r.charAt(e >>> 4 & 15) + r.charAt(15 & e);
                return s
            }
            rstr2b64(t) {
                try {
                    this.b64pad
                } catch (a) {
                    this.b64pad = ""
                }
                for (var e = "", r = t.length, s = 0; s < r; s += 3)
                    for (var i = t.charCodeAt(s) << 16 | (s + 1 < r ? t.charCodeAt(s + 1) << 8 : 0) | (s + 2 < r ? t.charCodeAt(s + 2) : 0), n = 0; n < 4; n++)
                        8 * s + 6 * n > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - n) & 63);
                return e
            }
            rstr2any(t, e) {
                var r, s, i, n, a, h = e.length, d = Array(Math.ceil(t.length / 2));
                for (r = 0; r < d.length; r++)
                    d[r] = t.charCodeAt(2 * r) << 8 | t.charCodeAt(2 * r + 1);
                var o = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2)))
                  , c = Array(o);
                for (s = 0; s < o; s++) {
                    for (a = Array(),
                    n = 0,
                    r = 0; r < d.length; r++)
                        n = (n << 16) + d[r],
                        n -= (i = Math.floor(n / h)) * h,
                        (a.length > 0 || i > 0) && (a[a.length] = i);
                    c[s] = n,
                    d = a
                }
                var l = "";
                for (r = c.length - 1; r >= 0; r--)
                    l += e.charAt(c[r]);
                return l
            }
            str2rstr_utf8(t) {
                for (var e, r, s = "", i = -1; ++i < t.length; )
                    e = t.charCodeAt(i),
                    r = i + 1 < t.length ? t.charCodeAt(i + 1) : 0,
                    55296 <= e && e <= 56319 && 56320 <= r && r <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & r),
                    i++),
                    e <= 127 ? s += String.fromCharCode(e) : e <= 2047 ? s += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? s += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (s += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
                return s
            }
            str2rstr_utf16le(t) {
                for (var e = "", r = 0; r < t.length; r++)
                    e += String.fromCharCode(255 & t.charCodeAt(r), t.charCodeAt(r) >>> 8 & 255);
                return e
            }
            str2rstr_utf16be(t) {
                for (var e = "", r = 0; r < t.length; r++)
                    e += String.fromCharCode(t.charCodeAt(r) >>> 8 & 255, 255 & t.charCodeAt(r));
                return e
            }
            rstr2binl(t) {
                for (var e = Array(t.length >> 2), r = 0; r < e.length; r++)
                    e[r] = 0;
                for (r = 0; r < 8 * t.length; r += 8)
                    e[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
                return e
            }
            binl2rstr(t) {
                for (var e = "", r = 0; r < 32 * t.length; r += 8)
                    e += String.fromCharCode(t[r >> 5] >>> r % 32 & 255);
                return e
            }
            binl_md5(t, e) {
                t[e >> 5] |= 128 << e % 32,
                t[14 + (e + 64 >>> 9 << 4)] = e;
                for (var r = 1732584193, s = -271733879, i = -1732584194, n = 271733878, a = 0; a < t.length; a += 16) {
                    var h = r
                      , d = s
                      , o = i
                      , c = n;
                    r = this.md5_ff(r, s, i, n, t[a + 0], 7, -680876936),
                    n = this.md5_ff(n, r, s, i, t[a + 1], 12, -389564586),
                    i = this.md5_ff(i, n, r, s, t[a + 2], 17, 606105819),
                    s = this.md5_ff(s, i, n, r, t[a + 3], 22, -1044525330),
                    r = this.md5_ff(r, s, i, n, t[a + 4], 7, -176418897),
                    n = this.md5_ff(n, r, s, i, t[a + 5], 12, 1200080426),
                    i = this.md5_ff(i, n, r, s, t[a + 6], 17, -1473231341),
                    s = this.md5_ff(s, i, n, r, t[a + 7], 22, -45705983),
                    r = this.md5_ff(r, s, i, n, t[a + 8], 7, 1770035416),
                    n = this.md5_ff(n, r, s, i, t[a + 9], 12, -1958414417),
                    i = this.md5_ff(i, n, r, s, t[a + 10], 17, -42063),
                    s = this.md5_ff(s, i, n, r, t[a + 11], 22, -1990404162),
                    r = this.md5_ff(r, s, i, n, t[a + 12], 7, 1804603682),
                    n = this.md5_ff(n, r, s, i, t[a + 13], 12, -40341101),
                    i = this.md5_ff(i, n, r, s, t[a + 14], 17, -1502002290),
                    s = this.md5_ff(s, i, n, r, t[a + 15], 22, 1236535329),
                    r = this.md5_gg(r, s, i, n, t[a + 1], 5, -165796510),
                    n = this.md5_gg(n, r, s, i, t[a + 6], 9, -1069501632),
                    i = this.md5_gg(i, n, r, s, t[a + 11], 14, 643717713),
                    s = this.md5_gg(s, i, n, r, t[a + 0], 20, -373897302),
                    r = this.md5_gg(r, s, i, n, t[a + 5], 5, -701558691),
                    n = this.md5_gg(n, r, s, i, t[a + 10], 9, 38016083),
                    i = this.md5_gg(i, n, r, s, t[a + 15], 14, -660478335),
                    s = this.md5_gg(s, i, n, r, t[a + 4], 20, -405537848),
                    r = this.md5_gg(r, s, i, n, t[a + 9], 5, 568446438),
                    n = this.md5_gg(n, r, s, i, t[a + 14], 9, -1019803690),
                    i = this.md5_gg(i, n, r, s, t[a + 3], 14, -187363961),
                    s = this.md5_gg(s, i, n, r, t[a + 8], 20, 1163531501),
                    r = this.md5_gg(r, s, i, n, t[a + 13], 5, -1444681467),
                    n = this.md5_gg(n, r, s, i, t[a + 2], 9, -51403784),
                    i = this.md5_gg(i, n, r, s, t[a + 7], 14, 1735328473),
                    s = this.md5_gg(s, i, n, r, t[a + 12], 20, -1926607734),
                    r = this.md5_hh(r, s, i, n, t[a + 5], 4, -378558),
                    n = this.md5_hh(n, r, s, i, t[a + 8], 11, -2022574463),
                    i = this.md5_hh(i, n, r, s, t[a + 11], 16, 1839030562),
                    s = this.md5_hh(s, i, n, r, t[a + 14], 23, -35309556),
                    r = this.md5_hh(r, s, i, n, t[a + 1], 4, -1530992060),
                    n = this.md5_hh(n, r, s, i, t[a + 4], 11, 1272893353),
                    i = this.md5_hh(i, n, r, s, t[a + 7], 16, -155497632),
                    s = this.md5_hh(s, i, n, r, t[a + 10], 23, -1094730640),
                    r = this.md5_hh(r, s, i, n, t[a + 13], 4, 681279174),
                    n = this.md5_hh(n, r, s, i, t[a + 0], 11, -358537222),
                    i = this.md5_hh(i, n, r, s, t[a + 3], 16, -722521979),
                    s = this.md5_hh(s, i, n, r, t[a + 6], 23, 76029189),
                    r = this.md5_hh(r, s, i, n, t[a + 9], 4, -640364487),
                    n = this.md5_hh(n, r, s, i, t[a + 12], 11, -421815835),
                    i = this.md5_hh(i, n, r, s, t[a + 15], 16, 530742520),
                    s = this.md5_hh(s, i, n, r, t[a + 2], 23, -995338651),
                    r = this.md5_ii(r, s, i, n, t[a + 0], 6, -198630844),
                    n = this.md5_ii(n, r, s, i, t[a + 7], 10, 1126891415),
                    i = this.md5_ii(i, n, r, s, t[a + 14], 15, -1416354905),
                    s = this.md5_ii(s, i, n, r, t[a + 5], 21, -57434055),
                    r = this.md5_ii(r, s, i, n, t[a + 12], 6, 1700485571),
                    n = this.md5_ii(n, r, s, i, t[a + 3], 10, -1894986606),
                    i = this.md5_ii(i, n, r, s, t[a + 10], 15, -1051523),
                    s = this.md5_ii(s, i, n, r, t[a + 1], 21, -2054922799),
                    r = this.md5_ii(r, s, i, n, t[a + 8], 6, 1873313359),
                    n = this.md5_ii(n, r, s, i, t[a + 15], 10, -30611744),
                    i = this.md5_ii(i, n, r, s, t[a + 6], 15, -1560198380),
                    s = this.md5_ii(s, i, n, r, t[a + 13], 21, 1309151649),
                    r = this.md5_ii(r, s, i, n, t[a + 4], 6, -145523070),
                    n = this.md5_ii(n, r, s, i, t[a + 11], 10, -1120210379),
                    i = this.md5_ii(i, n, r, s, t[a + 2], 15, 718787259),
                    s = this.md5_ii(s, i, n, r, t[a + 9], 21, -343485551),
                    r = this.safe_add(r, h),
                    s = this.safe_add(s, d),
                    i = this.safe_add(i, o),
                    n = this.safe_add(n, c)
                }
                return [r, s, i, n]
            }
            md5_cmn(t, e, r, s, i, n) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(s, n)), i), r)
            }
            md5_ff(t, e, r, s, i, n, a) {
                return this.md5_cmn(e & r | ~e & s, t, e, i, n, a)
            }
            md5_gg(t, e, r, s, i, n, a) {
                return this.md5_cmn(e & s | r & ~s, t, e, i, n, a)
            }
            md5_hh(t, e, r, s, i, n, a) {
                return this.md5_cmn(e ^ r ^ s, t, e, i, n, a)
            }
            md5_ii(t, e, r, s, i, n, a) {
                return this.md5_cmn(r ^ (e | ~s), t, e, i, n, a)
            }
            safe_add(t, e) {
                var r = (65535 & t) + (65535 & e);
                return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
            }
            bit_rol(t, e) {
                return t << e | t >>> 32 - e
            }
        }
        ;
        a = s = i([n], a),
        r.default = a,
        cc._RF.pop()
    }
    , {}],
    WSEngine: [function(t, e, r) {
        "use strict";
        cc._RF.push(e, "4fdf8f570ZHaIV+TFwxAxF7", "WSEngine");
        var s, i = this && this.__decorate || function(t, e, r, s) {
            var i, n = arguments.length, a = n < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, r) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, r, s);
            else
                for (var h = t.length - 1; h >= 0; h--)
                    (i = t[h]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
            return n > 3 && a && Object.defineProperty(e, r, a),
            a
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = t("./CData")
          , {ccclass: a, property: h} = cc._decorator;
        let d = s = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.serverAddr = "",
                this.nginxserverPort = 8663,
                this.serverPort = 0,
                this.MaxWaitTime = 15,
                this.waitDataTestTime = 0,
                this.sendHeartbeatTime = 0,
                this.isCheckTimeout = !1,
                this.waitDataTime = 0,
                this.bConnected = !1
            }
            GetConnected() {
                return this.bConnected
            }
            onLoad() {}
            setServer(t, e, r) {
                return this.serverAddr = t.slice(),
                this.serverPort = e,
                null != r && (this.nginxserverPort = r,
                cc.error("\u8bbe\u7f6e\u7aef\u53e3\uff01\uff01\uff01", this.nginxserverPort)),
                this
            }
            connectSocket() {
                let t = "";
                if (t = this.serverAddr.startsWith("192.") ? "ws://" + this.serverAddr + ":81/wss?pt=" + this.serverPort : "wss://" + this.serverAddr + ":81/wss?pt=" + this.serverPort,
                cc.sys.isBrowser || cc.sys.os != cc.sys.OS_ANDROID)
                    cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID ? this.ws = new WebSocket(t,s.cer.nativeUrl) : this.ws = new WebSocket(t);
                else {
                    var e = cc.url.raw("resources/ssl/nginx0.cer");
                    cc.loader.md5Pipe ? (e = cc.loader.md5Pipe.transformURL(e),
                    console.log(e),
                    this.ws = new WebSocket(t,null,e)) : cc.log("cc.loader.md5Pipe:", cc.loader.md5Pipe)
                }
                this.ws.binaryType = "arraybuffer",
                this.stopCheckConnect(),
                this.initEventHandler()
            }
            initEventHandler() {
                this.ws.onopen = this.onOpen.bind(this),
                this.ws.onclose = this.onClose.bind(this),
                this.ws.onerror = this.onError.bind(this),
                this.ws.onmessage = this.onBlobMessage.bind(this)
            }
            reConnect() {
                this.connectSocket()
            }
            close() {
                this.stopCheckConnect(),
                this.ws && this.ws.close()
            }
            netWorkDelay() {}
            checkConnection(t) {
                this.bConnected && (this.waitDataTime += t,
                this.waitDataTime >= this.MaxWaitTime && this.sendDetect())
            }
            sendDetect() {
                let t = new n.default;
                t.initForSend(0, 1, 0),
                this.sendData(t)
            }
            sendHeartbeat() {
                this.waitDataTestTime = 0,
                this.sendHeartbeatTime = Date.now(),
                this.isCheckTimeout = !0;
                let t = new n.default;
                t.initForSend(3, 268, 0),
                this.sendData(t)
            }
            beginCheckConnect() {
                this.unschedule(this.checkConnection),
                this.schedule(this.checkConnection, 1)
            }
            stopCheckConnect() {
                this.unschedule(this.checkConnection)
            }
            onOpen() {
                this.ws.onclose = this.onClose.bind(this),
                this.bConnected = !0,
                this.waitDataTime = 0,
                this.waitDataTestTime = 0,
                this.onSocketConnected(),
                this.beginCheckConnect()
            }
            onBlobMessage(t) {
                this.waitDataTime = 0;
                let e = new n.default;
                e.initForSend(0, 3, 0),
                this.sendData(e),
                this.onArrayBuffer(t.data)
            }
            onError() {
                cc.error("ws.onerror"),
                this.bConnected = !1,
                this.onSocketError()
            }
            onClose() {
                cc.error("ws.onclose"),
                this.bConnected = !1,
                this.onSocketClose()
            }
            onArrayBuffer(t) {
                let e = new n.default
                  , r = e.initForRead(t);
                0 != e.wMain ? this.onSocketData(e.wMain, e.wSub, e) : 1 == e.wSub && this.sendDetect(),
                null != r && this.onArrayBuffer(r)
            }
            onSocketConnected() {}
            onSocketError() {
                this.close()
            }
            onSocketClose() {}
            onSocketData(t, e, r) {}
            isServe() {
                return null != this.ws && this.ws.readyState == WebSocket.OPEN
            }
            isConnecting() {
                return null != this.ws && this.ws.readyState == WebSocket.CONNECTING
            }
            isClosing() {
                return null != this.ws && this.ws.readyState == WebSocket.CLOSING
            }
            isClosed() {
                return !this.ws || this.ws.readyState == WebSocket.CLOSED
            }
            sendData(t) {
                if (!this.ws)
                    return !1;
                switch (this.ws.readyState) {
                case WebSocket.CONNECTING:
                case WebSocket.CLOSING:
                case WebSocket.CLOSED:
                    return !1
                }
                return this.ws.send(t.binData),
                !0
            }
        }
        ;
        d.TYPESERVER = 1,
        d.cer = null,
        d = s = i([a], d),
        r.default = d,
        cc._RF.pop()
    }
    , {
        "./CData": "CData"
    }]
}, {}, ["CData", "DataUtils", "EventCenter", "EventCommonCode", "MD5", "WSEngine"]);
