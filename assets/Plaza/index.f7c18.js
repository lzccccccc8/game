window.__require = function t(e, i, s) {
    function n(a, c) {
        if (!i[a]) {
            if (!e[a]) {
                var r = a.split("/");
                if (r = r[r.length - 1],
                !e[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l)
                        return l(r, !0);
                    if (o)
                        return o(r, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = r
            }
            var h = i[a] = {
                exports: {}
            };
            e[a][0].call(h.exports, function(t) {
                return n(e[a][1][t] || t)
            }, h, h.exports, t, e, i, s)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof __require && __require, a = 0; a < s.length; a++)
        n(s[a]);
    return n
}({
    DonatoAmount: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "15339N7sTBJ1LaRxy+6FC0f", "DonatoAmount");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, menu: o, property: a} = cc._decorator
          , c = [1, 5, 10, 20, 100];
        let r = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.btnScoreArray = []
            }
            onLoad() {
                this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
            }
            onDestroy() {
                this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this)
            }
            touchEnd(t) {
                this.OnCloseBtnClick()
            }
            show(t) {
                for (var e = this.btnScoreArray.length, i = 0; i < e - 1; i++)
                    cc.find("Background/Label", this.btnScoreArray[i].node).getComponent(cc.Label).string = "$" + c[i];
                if (t >= 100) {
                    for (i = 0; i < e; i++)
                        this.btnScoreArray[i].interactable = t >= 100 * c[i];
                    this.btnScoreArray[e - 1].interactable = !0
                } else
                    for (i = 0; i < e; i++)
                        this.btnScoreArray[i].interactable = !1;
                this.currWinScore = t,
                this.node.active = !0
            }
            OnCloseBtnClick() {
                this.node.active = !1
            }
            OnScoreBtnClick(t, e) {
                var i = e < 6 ? 100 * c[e - 1] : Math.floor(this.currWinScore);
                cc.error("\u5f53\u524d\u5206\u6570\uff1a" + this.currWinScore, "\u63d0\u53d6\u5206\u6570\uff1a", i),
                this.iPlazaBase.sendExchangepoints(i),
                this.OnCloseBtnClick()
            }
        }
        ;
        s([a([cc.Button])], r.prototype, "btnScoreArray", void 0),
        r = s([n], r),
        i.default = r,
        cc._RF.pop()
    }
    , {}],
    GameRecord: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "5413cLS4ixAvZ9RNI95AegY", "GameRecord");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.scrollView = null,
                this.itemPrefab = null,
                this.contentNode = null,
                this.btnEntriesRecord = null,
                this.btnWinningRecord = null,
                this.btnCloseRecord = null,
                this.gameRecordInfo = [],
                this.startIndex = 0,
                this.currentType = 1,
                this.isquery = !1,
                this.winColor = new cc.Color(0,255,0),
                this.loseColor = new cc.Color(255,0,0)
            }
            start() {
                this.scrollView.node.on("bounce-top", this.onScrollBounceTop, this),
                this.scrollView.node.on("bounce-bottom", this.onScrollBounceBottom, this),
                this.SetBtnEvent(this.btnEntriesRecord.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.btnWinningRecord.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.btnCloseRecord.getComponent(cc.Button), !0, !0)
            }
            onScrollBounceTop(t) {
                cc.error("onScrollBounceTop")
            }
            onScrollBounceBottom(t) {
                cc.error("onScrollBounceBottom"),
                0 == this.isquery && (this.startIndex = this.startIndex + 10,
                this.scendQueryGameRecord())
            }
            SetBtnEvent(t, e=!0, i=!0) {
                if (null != t) {
                    let s = new cc.Component.EventHandler;
                    s.target = this.node,
                    s.component = "GameRecord",
                    s.handler = "BtnEventCallback",
                    t.clickEvents.push(s),
                    t.node.active = e,
                    t.interactable = i
                }
            }
            BtnEventCallback(t, e) {
                var i = t.target;
                this.OnClickBtn(i)
            }
            OnClickBtn(t) {
                switch (t.name) {
                case "btnEntriesRecord":
                    this.ChangeGameType(1);
                    break;
                case "btnWinningRecord":
                    this.ChangeGameType(2);
                    break;
                case "btnCloseRecord":
                    this.node.active = !1
                }
            }
            ChangeGameType(t) {
                this.currentType = t,
                1 == this.currentType ? (cc.find("select", this.btnEntriesRecord).active = !0,
                cc.find("select", this.btnWinningRecord).active = !1) : (cc.find("select", this.btnEntriesRecord).active = !1,
                cc.find("select", this.btnWinningRecord).active = !0),
                this.reset(),
                this.scendQueryGameRecord()
            }
            reset() {
                this.isquery = !1,
                this.startIndex = 0,
                this.gameRecordInfo = [],
                this.contentNode.destroyAllChildren()
            }
            showPanel() {
                this.node.active = !0,
                this.ChangeGameType(1)
            }
            scendQueryGameRecord() {
                0 == this.isquery && (this.isquery = !0,
                this.iPlazaBase.sendQueryGameRecord(this.currentType, this.startIndex, 10))
            }
            ShowGameRecord(t) {
                t.dwRecordCounts > 0 && (this.isquery = !1),
                this.startIndex = t.dwStartIndex,
                this.currentType = t.cbRecordType;
                for (let e = 0; e < t.dwRecordCounts; e++)
                    this.gameRecordInfo.push(t.RecordInfo[e]);
                this.showGameRecord1(t.RecordInfo, t.cbRecordType, t.dwRecordCounts)
            }
            showGameRecord1(t, e, i) {
                let s = -(new Date).getTimezoneOffset() / 60;
                for (let o = 0; o < i; o++) {
                    let i = Math.round(t[o].fBetAmount)
                      , a = cc.instantiate(this.itemPrefab);
                    this.contentNode.addChild(a),
                    a.active = !0;
                    let c = new Date(t[o].RecordTime);
                    c.setHours(c.getHours() + s);
                    let r = c.toLocaleString().split(" ");
                    cc.find("LabelTime", a).getComponent(cc.Label).string = r[0] + "\n" + r[1];
                    var n = this.iPlazaBase.getClientGames(t[o].wKindID);
                    let l = "" + t[o].wKindID;
                    n && (l = n.Name),
                    cc.find("LabelName", a).getComponent(cc.Label).string = "" + l,
                    cc.find("LabelBet", a).getComponent(cc.Label).string = "" + i;
                    let h = cc.find("LabelResult", a).getComponent(cc.Label)
                      , d = cc.find("LabelBalance", a).getComponent(cc.Label);
                    1 == e ? (h.string = "lose",
                    h.node.color = this.loseColor,
                    d.string = "-" + i) : (h.string = "win",
                    h.node.color = this.winColor,
                    d.string = "+" + i);
                    let g = this.iPlazaBase.getNum(t[o].fbalance, !1);
                    cc.find("LabelBefore", a).getComponent(cc.Label).string = 0 == i ? "" + g : 1 == e ? "" + this.iPlazaBase.getNum(t[o].fbalance + i, !1) : "" + this.iPlazaBase.getNum(t[o].fbalance - i, !1),
                    cc.find("LabelAfter", a).getComponent(cc.Label).string = "" + g
                }
            }
        }
        ;
        s([o(cc.ScrollView)], a.prototype, "scrollView", void 0),
        s([o(cc.Node)], a.prototype, "itemPrefab", void 0),
        s([o(cc.Node)], a.prototype, "contentNode", void 0),
        s([o(cc.Node)], a.prototype, "btnEntriesRecord", void 0),
        s([o(cc.Node)], a.prototype, "btnWinningRecord", void 0),
        s([o(cc.Node)], a.prototype, "btnCloseRecord", void 0),
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    KeyBoardCtrl: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b1c36y1w85Oio+p1il7WYF4", "KeyBoardCtrl");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.positionY = []
            }
            onLoad() {
                this.keyPanel = cc.find("keyPanel", this.node);
                for (let s = 0; s <= 9; s++) {
                    let t = cc.find("keyPanel/Num" + s, this.node);
                    this.addBtnClick(t.getComponent(cc.Button), "numcallback", s.toString())
                }
                let t = cc.find("keyPanel/OKBtn", this.node);
                this.addBtnClick(t.getComponent(cc.Button), "okCallBack", "");
                let e = cc.find("keyPanel/BackBtn", this.node);
                this.addBtnClick(e.getComponent(cc.Button), "cancelCallBack", "");
                let i = cc.find("bgbtn", this.node);
                this.addBtnClick(i.getComponent(cc.Button), "okCallBack", ""),
                cc.log("============onload===============")
            }
            start() {}
            onDisable() {
                this.editBox = null
            }
            addBtnClick(t, e, i) {
                var s = new cc.Component.EventHandler;
                s.target = this.node,
                s.component = "KeyBoardCtrl",
                s.handler = e,
                s.customEventData = i,
                t.clickEvents.push(s)
            }
            numcallback(t, e) {
                t.target.getComponent(cc.Button),
                this.editBox && (this.editBox.string += e),
                cc.log("======>>>", e)
            }
            okCallBack(t, e) {
                this.node.active = !1
            }
            cancelCallBack(t, e) {
                if (this.editBox) {
                    let t = this.editBox.string
                      , e = "";
                    for (let i = 0; i < t.length - 1; i++)
                        e += t[i];
                    this.editBox.string = e
                }
            }
            showPanel(t, e) {
                this.editBox = e,
                t < this.positionY.length ? this.keyPanel.y = this.positionY[t] : this.keyPanel.y = this.positionY[0],
                this.node.active = !0
            }
        }
        ;
        s([o([Number])], a.prototype, "positionY", void 0),
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    LightMove: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "55e81AmtRZO0KNLjGTaBHAu", "LightMove");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.light = null,
                this.posx = 0
            }
            onLoad() {
                this.posx = this.node.width / 2 + this.light.width / 2,
                this.lightMove()
            }
            lightMove() {
                cc.tween(this.light).delay(2).to(1.5, {
                    position: cc.v3(this.posx, this.light.position.y, 0)
                }).call(()=>{
                    this.light.setPosition(-this.posx, this.light.position.y, 0),
                    this.lightMove()
                }
                ).start()
            }
            lightmove() {
                this.light.position.x > this.posx && this.light.setPosition(-this.posx, this.light.position.y, 0),
                this.light.setPosition(this.light.position.x + 5, this.light.position.y, 0)
            }
            onDestroy() {}
            start() {}
        }
        ;
        s([o(cc.Node)], a.prototype, "light", void 0),
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    Login: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "68076ncN9dK3K9GZU3l3P8E", "Login");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.Version = void 0;
        const n = t("./KeyBoardCtrl")
          , {ccclass: o, property: a} = cc._decorator;
        i.Version = "1.1.1";
        let c = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.handlerPriority = 1,
                this.handlerName = "Login",
                this.accountEditBox = null,
                this.passwordEditBox = null,
                this.rememberToggle = null,
                this.accountKey = "ACCOUNT",
                this.passwordKey = "PASSWORD",
                this.lblVersion = null,
                this.accountLoginPanel = null,
                this.accountMask = null,
                this.isRegister = !1
            }
            onLoad() {
                let t;
                this.iPlazaBase = cc.director.getScene().getComponentInChildren("PlazaBase"),
                this.iMainCtrl = cc.director.getScene().getComponentInChildren("MainControllerScript"),
                this.iMainCtrl.addRootNode(this.node.parent),
                this.iMainCtrl.addPlazaNode(this.node.parent.parent.getChildByName("PlazaPanel")),
                this.iMainCtrl.AddHandler(),
                this.accountEditBox = cc.find("AccountPanel/Account/accountEditBox", this.node).getComponent(cc.EditBox),
                this.passwordEditBox = cc.find("AccountPanel/Account/passwordEditBox", this.node).getComponent(cc.EditBox),
                this.rememberToggle = cc.find("AccountPanel/Account/RememberToggle", this.node).getComponent(cc.Toggle),
                this.keyboardCtrl = cc.find("AccountPanel/KeyboardPanel", this.node).getComponent(n.default),
                this.accountMask.on(cc.Node.EventType.TOUCH_START, ()=>{}
                ),
                this.iPlazaBase.setOrientation("H"),
                console.log("onEnable ", this.iPlazaBase.isClosed()),
                !this.iPlazaBase.isClosed() && this.iMainCtrl.GetIsBackPlaza() ? (this.node.parent.active = !1,
                this.node.parent.parent.getChildByName("PlazaPanel").active = !0) : (this.node.parent.active = !0,
                this.node.parent.parent.getChildByName("PlazaPanel").active = !1,
                this.iPlazaBase.CommonUI_RootNode(this.node)),
                this.mPopWaitPanel = cc.find("PopWaitPanel", this.node),
                this.mPopWaitPanel.active = !1,
                this.iMainCtrl.addPopWaitNode(this.mPopWaitPanel),
                cc.sys.isBrowser || (cc.sys.os == cc.sys.OS_ANDROID ? (t = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getVerCode", "()Ljava/lang/String;"),
                cc.error("=====\u7248\u672c\u53f7===", t, globalThis.UpdateApkVer_android),
                t == globalThis.UpdateApkVer_android ? cc.error("\u7248\u672c\u53f7====\u76f8\u540c", globalThis.URLAndroid) : (cc.error("\u7248\u672c\u53f7====\u4e0d\u76f8\u540c"),
                "" != globalThis.URLAndroid && this.iPlazaBase.PopDialog_Show("There are new versions that need to be updated", ()=>{
                    var t = globalThis.URLAndroid + "?V=" + (new Date).getTime();
                    cc.sys.openURL(t),
                    cc.log("ok callback")
                }
                , ()=>{
                    cc.log("cancel callback")
                }
                , !1))) : (cc.sys.os,
                cc.sys.OS_IOS))
            }
            onEnable() {
                cc.error("onEnable=="),
                this.iPlazaBase.CommonUI_RootNode(this.node);
                let t = cc.find("PopMessage", this.node);
                t && (console.log("PopMessage return"),
                t.active = !1)
            }
            onDisable() {
                this.unscheduleAllCallbacks()
            }
            onDestroy() {}
            start() {
                cc.log("CC_DEV", !1),
                this.iMainCtrl.Login_Start(!1);
                let t = cc.sys.localStorage.getItem(this.passwordKey)
                  , e = cc.sys.localStorage.getItem(this.accountKey);
                e && (this.accountEditBox.string = e),
                t && (this.passwordEditBox.string = t,
                this.rememberToggle.isChecked = !0),
                this.lblVersion.string = "Ver" + i.Version,
                this.iMainCtrl.Login_FulleScreen()
            }
            onBtnLoginByAccount() {
                if (!this.isRegister) {
                    let t = this.accountEditBox.string
                      , e = this.passwordEditBox.string;
                    if ("" == t || "" == e)
                        return;
                    this.rememberToggle.isChecked ? (cc.sys.localStorage.setItem(this.accountKey, t),
                    cc.sys.localStorage.setItem(this.passwordKey, e)) : (cc.sys.localStorage.removeItem(this.accountKey),
                    cc.sys.localStorage.removeItem(this.passwordKey)),
                    this.iMainCtrl.Login_logonByAccount(t, e, 0),
                    this.scheduleOnce(()=>{
                        cc.error("mPopWaitPanel time 5"),
                        this.mPopWaitPanel.activeInHierarchy && this.iPlazaBase.PopMessage_Show(()=>{
                            this.mPopWaitPanel.active = !1
                        }
                        )
                    }
                    , 5)
                }
            }
            onBtnShowKeyboard(t, e) {
                this.keyboardCtrl.node.active = !0,
                "0" == e ? this.keyboardCtrl.showPanel(0, this.accountEditBox) : this.keyboardCtrl.showPanel(1, this.passwordEditBox)
            }
            onfbLogout() {
                window.logout()
            }
            useAccountLogint() {
                this.accountLoginPanel.active = !0,
                this.isRegister = !1;
                let t = cc.sys.localStorage.getItem(this.passwordKey)
                  , e = cc.sys.localStorage.getItem(this.accountKey);
                e && (this.accountEditBox.string = e),
                t && (this.passwordEditBox.string = t,
                this.rememberToggle.isChecked = !0)
            }
            useRegisterLogin() {}
            closeAccountPanel() {
                this.accountLoginPanel.active = !1
            }
        }
        ;
        s([a(cc.Label)], c.prototype, "lblVersion", void 0),
        s([a(cc.Node)], c.prototype, "accountLoginPanel", void 0),
        s([a(cc.Node)], c.prototype, "accountMask", void 0),
        c = s([o], c),
        i.default = c,
        cc._RF.pop()
    }
    , {
        "./KeyBoardCtrl": "KeyBoardCtrl"
    }],
    ModifyPassword: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "62501Ke9NdP37JvxVdhKAAQ", "ModifyPassword");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.idLabel = null,
                this.passwordEdit = null,
                this.newPasswordEdit = null,
                this.confirmPasswordEdit = null
            }
            start() {}
            init() {
                this.idLabel = cc.find("inputbg/IDLabel", this.node).getComponent(cc.Label),
                this.passwordEdit = cc.find("PasswordEditBox", this.node).getComponent(cc.EditBox),
                this.newPasswordEdit = cc.find("NewPasswordEditBox", this.node).getComponent(cc.EditBox),
                this.confirmPasswordEdit = cc.find("ConfirmPasswordEditBox", this.node).getComponent(cc.EditBox),
                this.okBtn = cc.find("OKBtn", this.node),
                this.okBtn.on(cc.Node.EventType.TOUCH_START, this.onClickOKBtn, this),
                this.closeBtn = cc.find("closeBtn", this.node),
                this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onClose, this)
            }
            onEnable() {
                this.idLabel.string = "" + this.iPlazaBase.GetUserInfo().szAccounts,
                this.passwordEdit.string = "",
                this.newPasswordEdit.string = "",
                this.confirmPasswordEdit.string = ""
            }
            onClickOKBtn() {
                let t = this.passwordEdit.string
                  , e = this.newPasswordEdit.string
                  , i = this.confirmPasswordEdit.string;
                "" != t && "" != e && "" != i && (e == i ? this.iPlazaBase.sendModifyPassword(t, e) : this.iPlazaBase.PopDialog_Show("Confirm password error", ()=>{
                    cc.log("ok callback")
                }
                , ()=>{
                    cc.log("cancel callback")
                }
                , !1))
            }
            onClose() {
                this.node.active = !1
            }
            onDestroy() {
                this.okBtn.off(cc.Node.EventType.TOUCH_START, this.onClickOKBtn, this),
                this.closeBtn.off(cc.Node.EventType.TOUCH_START, this.onClose, this)
            }
        }
        ;
        s([o(cc.Label)], a.prototype, "idLabel", void 0),
        s([o(cc.EditBox)], a.prototype, "passwordEdit", void 0),
        s([o(cc.EditBox)], a.prototype, "newPasswordEdit", void 0),
        s([o(cc.EditBox)], a.prototype, "confirmPasswordEdit", void 0),
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    Pay: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "db3a1qyxxpIDbChBHhJQ6P1", "Pay");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
          , n = this && this.__awaiter || function(t, e, i, s) {
            return new (i || (i = Promise))(function(n, o) {
                function a(t) {
                    try {
                        r(s.next(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(t) {
                    try {
                        r(s.throw(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function r(t) {
                    var e;
                    t.done ? n(t.value) : (e = t.value,
                    e instanceof i ? e : new i(function(t) {
                        t(e)
                    }
                    )).then(a, c)
                }
                r((s = s.apply(t, e || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const o = t("../../../xhr")
          , {ccclass: a, property: c} = cc._decorator;
        let r = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.ItemPrefab = null,
                this.ItemPrefab1 = null,
                this.scrollView = null,
                this.webView = null,
                this.scriptName = "Pay",
                this.mPageArray = [],
                this.mCurPage = 0,
                this.mCurItem = 0,
                this.flgInit = !1,
                this.mLastflg = !1,
                this.mScore = 0,
                this.mflgPop = !1,
                this.mMinInput = 50,
                this.mMaxInput = 500,
                this.mMultiply = 1,
                this.openUrl = ""
            }
            onLoad() {
                if (this.flgInit)
                    this.mCurPage = 0,
                    this.mCurItem = 0,
                    this.showPage(this.mCurPage),
                    this.mLastflg = !1;
                else {
                    var t = cc.find("btnClose", this.node);
                    this.SetBtnEvent(t.getComponent(cc.Button), !0, !0);
                    var e = cc.find("btnRule", this.node);
                    this.SetBtnEvent(e.getComponent(cc.Button), !0, !0),
                    this.mRulePage = cc.find("Rule", this.node);
                    var i = cc.find("Rule/btnOK", this.node);
                    this.SetBtnEvent(i.getComponent(cc.Button), !0, !0);
                    var s = cc.find("Rule/btnCloseRule", this.node);
                    this.SetBtnEvent(s.getComponent(cc.Button), !0, !0);
                    for (let t = 0; t < 4; t++) {
                        var n = cc.find("Page" + t, this.node);
                        if (this.mPageArray.push(n),
                        0 == t)
                            this.scrollView = cc.find("MyScrollView", n).getComponent(cc.ScrollView);
                        else if (1 == t) {
                            var o = cc.find("btnPay", n);
                            this.SetBtnEvent(o.getComponent(cc.Button), !0, !0)
                        } else if (2 == t) {
                            var a = cc.find("bg/btnClose1", n);
                            this.SetBtnEvent(a.getComponent(cc.Button), !0, !0);
                            var c = cc.find("bg/btnRecharge", n);
                            this.SetBtnEvent(c.getComponent(cc.Button), !0, !0)
                        } else {
                            this.webView = cc.find("WebView", n).getComponent(cc.WebView);
                            var r = cc.find("btnClose2", n);
                            this.SetBtnEvent(r.getComponent(cc.Button), !0, !0)
                        }
                    }
                    this.showPage(this.mCurPage),
                    this.startLoad(),
                    this.flgInit = !0,
                    this.waitNode = cc.find("Wait", this.node),
                    this.popDialog = cc.find("PopDialog", this.node);
                    let l = cc.find("Popup/btnOKDialog", this.popDialog)
                      , h = cc.find("Popup/btnCancelDialog", this.popDialog)
                      , d = cc.find("Popup/btnCloseDialog", this.popDialog);
                    this.SetBtnEvent(l.getComponent(cc.Button), !0, !0),
                    this.SetBtnEvent(h.getComponent(cc.Button), !0, !0),
                    this.SetBtnEvent(d.getComponent(cc.Button), !0, !0)
                }
            }
            start() {}
            showPage(t) {
                for (let e = 0; e < this.mPageArray.length; e++)
                    2 == t ? (this.mPageArray[0].active = !0,
                    this.mPageArray[1].active = !0,
                    this.mPageArray[2].active = !0) : this.mPageArray[e].active = e == t
            }
            Init() {
                var t = cc.assetManager.getBundle("Plaza");
                for (let d = 0; d < this.MyData.length; d++) {
                    let l = cc.instantiate(this.ItemPrefab);
                    this.scrollView.content.addChild(l);
                    var e = d % 2
                      , i = l.getComponent(cc.Sprite)
                      , s = t.get("Res/Pay/bgItem" + e, cc.SpriteFrame);
                    if (i.spriteFrame = s,
                    cc.find("USD", l).getComponent(cc.Label).node.color = 0 == e ? new cc.Color(255,213,0) : new cc.Color(214,0,82),
                    d <= 6) {
                        var n = cc.find("coin", l).getComponent(cc.Sprite)
                          , o = t.get("Res/Pay/Item/coin" + d, cc.SpriteFrame);
                        n.spriteFrame = o
                    } else
                        n = cc.find("coin", l).getComponent(cc.Sprite),
                        o = t.get("Res/Pay/Item/coin6", cc.SpriteFrame),
                        n.spriteFrame = o;
                    (h = cc.find("btn", l)).name = "Button_" + d,
                    this.SetBtnEvent(h.getComponent(cc.Button), !0, !0);
                    var a = cc.find("data0", l).getComponent(cc.Label)
                      , c = cc.find("data1", l).getComponent(cc.Label)
                      , r = cc.find("data2", l).getComponent(cc.Label);
                    a.string = "" + this.MyData[d].coins,
                    c.string = "+" + this.MyData[d].coins_give,
                    r.string = "$" + this.MyData[d].amount,
                    0 == e ? (a.node.color = cc.Color.WHITE,
                    r.node.color = cc.Color.WHITE) : (a.node.color = new cc.Color(16,127,16),
                    r.node.color = new cc.Color(16,127,16))
                }
                let l = cc.instantiate(this.ItemPrefab1);
                var h;
                this.scrollView.content.addChild(l),
                e = this.MyData.length % 2,
                i = l.getComponent(cc.Sprite),
                s = t.get("Res/Pay/bgItem" + e, cc.SpriteFrame),
                cc.find("USD", l).getComponent(cc.Label),
                this.MyData.length <= 6 ? (n = cc.find("coin", l).getComponent(cc.Sprite),
                o = t.get("Res/Pay/Item/coin" + this.MyData.length, cc.SpriteFrame),
                n.spriteFrame = o) : (n = cc.find("coin", l).getComponent(cc.Sprite),
                o = t.get("Res/Pay/Item/coin6", cc.SpriteFrame),
                n.spriteFrame = o),
                (h = cc.find("btn", l)).name = "Button_" + this.MyData.length,
                this.SetBtnEvent(h.getComponent(cc.Button), !0, !0),
                this.mLastItem_data0 = cc.find("data0", l).getComponent(cc.Label),
                this.mLastItem_data1 = cc.find("data1", l).getComponent(cc.Label),
                this.mLastItem_EditBox = cc.find("EditBox", l).getComponent(cc.EditBox),
                this.mLastItem_EditBox.node.on("text-changed", this.onEditingTextChanged, this),
                this.mLastItem_data0.string = "0.00",
                this.mLastItem_data1.string = ""
            }
            onEditingTextChanged(t) {
                if (!this.mflgPop) {
                    if (!1 === /^[0-9]+$/.test(this.mLastItem_EditBox.string))
                        this.mflgPop = !0,
                        this.iPlazaBase.PopDialog_Show("Invalid input", ()=>{
                            this.mflgPop = !1
                        }
                        , ()=>{
                            this.mflgPop = !1
                        }
                        , !1);
                    else {
                        var e = Number(this.mLastItem_EditBox.string);
                        if (e >= this.mMinInput && e <= this.mMaxInput)
                            return this.mLastflg = !0,
                            this.mLastItem_data0.string = "" + 100 * e,
                            void (this.mLastItem_data1.string = "+" + 100 * e)
                    }
                    this.mLastflg = !1,
                    this.mLastItem_data0.string = "0.00",
                    this.mLastItem_data1.string = ""
                }
            }
            SetBtnEvent(t, e=!0, i=!0) {
                if (null != t) {
                    let s = new cc.Component.EventHandler;
                    s.target = this.node,
                    s.component = this.scriptName,
                    s.handler = "BtnEventCallback",
                    t.clickEvents.push(s),
                    t.node.active = e,
                    t.interactable = i
                }
            }
            BtnEventCallback(t, e) {
                var i = t.target;
                this.OnClickBtn(i)
            }
            OnClickBtn(t) {
                if (t.name.startsWith("Button_")) {
                    let h = t.name.split("Button_");
                    this.mCurItem = Number(h[1]);
                    var e = cc.assetManager.getBundle("Plaza");
                    if (this.mCurItem == this.MyData.length) {
                        if (!1 === /^[0-9]+$/.test(this.mLastItem_EditBox.string)) {
                            if (this.mflgPop)
                                return;
                            return void this.iPlazaBase.PopDialog_Show("Invalid input", ()=>{}
                            , ()=>{}
                            , !1)
                        }
                        var i = Number(this.mLastItem_EditBox.string);
                        if (i < this.mMinInput)
                            return void this.iPlazaBase.PopDialog_Show("The value must be between " + this.mMinInput + " and " + this.mMaxInput, ()=>{}
                            , ()=>{}
                            , !1);
                        if (i > this.mMaxInput)
                            return void this.iPlazaBase.PopDialog_Show("The value must be between " + this.mMinInput + " and " + this.mMaxInput, ()=>{}
                            , ()=>{}
                            , !1);
                        var s = cc.find("itemCheck", this.mPageArray[1])
                          , n = cc.find("data0", s).getComponent(cc.Label)
                          , o = cc.find("data2", s).getComponent(cc.Label);
                        if (this.mCurItem <= 6) {
                            var a = cc.find("coin", s).getComponent(cc.Sprite)
                              , c = e.get("Res/Pay/Item/coin" + this.mCurItem, cc.SpriteFrame);
                            a.spriteFrame = c
                        } else
                            a = cc.find("coin", s).getComponent(cc.Sprite),
                            c = e.get("Res/Pay/Item/coin6", cc.SpriteFrame),
                            a.spriteFrame = c;
                        var r = Number(this.mLastItem_EditBox.string);
                        n.string = "" + 100 * (r + r),
                        o.string = "" + r,
                        this.mCurPage = 1,
                        this.showPage(this.mCurPage)
                    } else {
                        s = cc.find("itemCheck", this.mPageArray[1]),
                        n = cc.find("data0", s).getComponent(cc.Label),
                        o = cc.find("data2", s).getComponent(cc.Label),
                        a = cc.find("coin", s).getComponent(cc.Sprite),
                        c = e.get("Res/Pay/Item/coin" + this.mCurItem % 7, cc.SpriteFrame),
                        a.spriteFrame = c,
                        r = Number(this.MyData[this.mCurItem].coins);
                        var l = Number(this.MyData[this.mCurItem].coins_give);
                        cc.error("num1---num2----", r, l),
                        n.string = "" + (r + l) * this.mMultiply,
                        o.string = "" + this.MyData[this.mCurItem].amount,
                        this.mCurPage = 1,
                        this.showPage(this.mCurPage)
                    }
                } else
                    switch (t.name) {
                    case "btnPay":
                        this.onbtnPayClick(),
                        this.fetchBundleVersion3(this.iPlazaBase.getUserID(), this.mScore, "");
                        break;
                    case "btnRecharge":
                        cc.sys.openURL(this.openUrl);
                        break;
                    case "btnClose2":
                        this.mPageArray[3].active = !1,
                        this.mCurPage = 2;
                        break;
                    case "btnClose":
                    case "btnClose1":
                        2 == this.mCurPage && this.setPage2PopWaitPanel(!1),
                        this.mCurPage > 0 ? (this.mCurPage--,
                        this.showPage(this.mCurPage)) : this.node.active = !1;
                        break;
                    case "btnRule":
                        this.mRulePage.active = !0;
                        break;
                    case "btnOK":
                    case "btnCloseRule":
                        this.mRulePage.active = !1;
                        break;
                    case "btnOKDialog":
                        this.popDialog.active = !1,
                        cc.sys.openURL(this.openUrl);
                        break;
                    case "btnCancelDialog":
                    case "btnCloseDialog":
                        this.popDialog.active = !1
                    }
            }
            startLoad() {
                return n(this, void 0, void 0, function*() {
                    yield this.fetchBundleVersion2(),
                    this.Init()
                })
            }
            fetchBundleVersion2() {
                return n(this, void 0, void 0, function*() {
                    let t = "http://192.168.91.133:81/GameApp/RechargeItems";
                    var e = this;
                    return cc.error(t),
                    new Promise(i=>{
                        o.xhr_request({
                            url: t,
                            method: "GET",
                            success: t=>{
                                "Success" == t.status ? (e.MyData = t.data,
                                cc.error("\u5145\u503c\u8fd4\u56de\u503c===", t),
                                i(!0)) : i(!1)
                            }
                            ,
                            fail: ()=>{
                                i(!1)
                            }
                        })
                    }
                    )
                })
            }
            fetchBundleVersion3(t, e, i) {
                return n(this, void 0, void 0, function*() {
                    this.waitNode.active = !0;
                    let s = "http://192.168.91.133:81/GameApp/Pay/" + t + "/" + e;
                    return i && "" != i && (s = "http://192.168.91.133:81/GameApp/Pay/" + t + "/" + e + "/" + i),
                    cc.error("000----", s),
                    new Promise(t=>{
                        o.xhr_request({
                            url: s,
                            method: "GET",
                            param: null,
                            success: e=>{
                                this.waitNode.active = !1,
                                2 == this.mCurPage && this.setPage2PopWaitPanel(!1),
                                "Success" == e.status ? (cc.error("\u6210\u529f\uff01===", e.data),
                                this.openUrl = e.data,
                                this.showPage(this.mCurPage),
                                t(!0)) : (this.iPlazaBase.PopDialog_Show(e.msg, ()=>{}
                                , ()=>{}
                                , !1),
                                t(!1))
                            }
                            ,
                            fail: e=>{
                                this.iPlazaBase.PopDialog_Show(e, ()=>{}
                                , ()=>{}
                                , !1),
                                this.waitNode.active = !1,
                                t(!1)
                            }
                        })
                    }
                    )
                })
            }
            showUrl(t) {
                this.iPlazaBase.PopDialog_Show("Open the payment page?", ()=>{
                    cc.log("ok callback"),
                    cc.sys.openURL(t)
                }
                , ()=>{
                    cc.log("cancel callback")
                }
                , !0)
            }
            onDynamicPassResult(t) {}
            setPage2PopWaitPanel(t) {
                var e = cc.find("Page2", this.node);
                cc.find("PopWaitPanel", e).active = t
            }
            onbtnPayClick() {
                var t = cc.find("bg", this.mPageArray[2])
                  , e = cc.find("data0", t).getComponent(cc.Label)
                  , i = cc.find("data1", t).getComponent(cc.Label)
                  , s = cc.find("data2", t).getComponent(cc.Label);
                if (e.string = String(this.iPlazaBase.getUserID()),
                this.mCurItem == this.MyData.length) {
                    var n = Number(this.mLastItem_EditBox.string);
                    this.mScore = n,
                    i.string = "$" + n,
                    s.string = "" + 100 * (n + n)
                } else {
                    this.mScore = this.MyData[this.mCurItem].amount,
                    i.string = "$" + this.MyData[this.mCurItem].amount,
                    n = Number(this.MyData[this.mCurItem].coins);
                    var o = Number(this.MyData[this.mCurItem].coins_give);
                    s.string = "" + (n + o) * this.mMultiply
                }
                this.mCurPage = 2
            }
        }
        ;
        s([c(cc.Prefab)], r.prototype, "ItemPrefab", void 0),
        s([c(cc.Prefab)], r.prototype, "ItemPrefab1", void 0),
        r = s([a], r),
        i.default = r,
        cc._RF.pop()
    }
    , {
        "../../../xhr": void 0
    }],
    PlazaGameButton: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "35da4oURSVOmrDi6exKVRkt", "PlazaGameButton");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = t("../../../BundlerHelper")
          , {ccclass: o, property: a} = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.gameIcon = null,
                this.particlePrefab = null,
                this.statu = null,
                this.progressBar = null,
                this.gameTypeSprite = null,
                this.gameTypeLabel = null,
                this.collectBtn = null,
                this.uncollectBtn = null,
                this.lighting = null,
                this.lightingAnim = null,
                this.temp = null,
                this.KindID = 0,
                this.BundleName = "",
                this.gameChoose = null,
                this.GameButSaveDataName = [],
                this.collectState = !1,
                this.kindIDToLine = new Map
            }
            start() {
                this.lightingAnim = this.lighting.getComponent(cc.Animation),
                this.lightingflash()
            }
            lightingflash() {
                Math.random() < .25 && this.lightingAnim.play(),
                this.temp = cc.tween(this.node).delay(4).call(()=>{
                    this.lightingflash()
                }
                ).start()
            }
            setKindID(t, e=!1) {
                var i = cc.assetManager.getBundle("Plaza");
                this.KindID = t,
                this.iPlazaBase.setKindID(t, this.gameIcon, "Res/GameIcon/"),
                this.collectState = e,
                this.collectBtn.active = !this.collectState,
                this.uncollectBtn.active = this.collectState;
                var s = this.iPlazaBase.getClientGames(t);
                1 == s.Category ? (this.gameTypeSprite.spriteFrame = i.get("Res/GameCategory/Slot", cc.SpriteFrame),
                this.gameTypeLabel.string = "SLOT",
                s.Line && (this.gameTypeLabel.string = "LINE " + s.Line)) : 2 == s.Category ? (this.gameTypeSprite.spriteFrame = i.get("Res/GameCategory/Fish", cc.SpriteFrame),
                this.node.children[4].active = !1) : 3 == s.Category ? (this.gameTypeSprite.spriteFrame = i.get("Res/GameCategory/Keno", cc.SpriteFrame),
                this.gameTypeLabel.string = "KENO") : 4 == s.Category ? (this.gameTypeSprite.spriteFrame = i.get("Res/GameCategory/Casino", cc.SpriteFrame),
                this.gameTypeLabel.string = "CASINO") : (this.gameTypeSprite.spriteFrame = i.get("Res/GameCategory/Other", cc.SpriteFrame),
                this.gameTypeLabel.string = "OTHER"),
                s.Statu && 1 == s.Statu ? (this.statu.spriteFrame = i.get("Res/GameStatu/Hot", cc.SpriteFrame),
                this.statu.node.active = !0) : (this.statu.spriteFrame = i.get("Res/GameStatu/New", cc.SpriteFrame),
                this.statu.node.active = !0)
            }
            release() {
                this.temp.stop(),
                this.node.destroy()
            }
            onTouchBegin(t) {
                let e = t.getLocation()
                  , i = this.node.convertToNodeSpaceAR(e)
                  , s = null;
                (s = cc.instantiate(this.particlePrefab)).name = "clickNode",
                s.setPosition(i),
                this.node.addChild(s)
            }
            onTouchCancel(t) {
                this.scheduleOnce(()=>{
                    this.node.children.forEach(t=>{
                        "clickNode" === t.name && this.node.removeChild(t)
                    }
                    )
                }
                , .05)
            }
            onCollect() {
                cc.log("\u6536\u85cf\u5f53\u524d\u6e38\u620f", this.KindID),
                this.collectState = !0,
                this.collectBtn.active = !1,
                this.uncollectBtn.active = !0;
                let t = n.PlatformName + "COLLECT"
                  , e = cc.sys.localStorage.getItem(t);
                e = null == e || "" == e ? "" + this.KindID : e + "|" + this.KindID,
                cc.log("\u5b58\u50a8\u6570\u636e1", e),
                cc.sys.localStorage.setItem(t, e)
            }
            onUnCollect() {
                cc.log("\u53d6\u6d88\u6536\u85cf\u5f53\u524d\u6e38\u620f", this.KindID),
                this.collectBtn.active = !0,
                this.uncollectBtn.active = !1,
                this.collectState = !1;
                let t = n.PlatformName + "COLLECT"
                  , e = ""
                  , i = cc.sys.localStorage.getItem(t).split("|");
                for (let s = 0; s < i.length; s++)
                    Number(i[s]) == this.KindID || (0 == s ? e += i[s] : e = e + "|" + i[s]);
                cc.log("\u5b58\u50a8\u6570\u636e2", e),
                cc.sys.localStorage.setItem(t, e)
            }
        }
        ;
        s([a(cc.Sprite)], c.prototype, "gameIcon", void 0),
        s([a(cc.Prefab)], c.prototype, "particlePrefab", void 0),
        s([a(cc.Sprite)], c.prototype, "statu", void 0),
        s([a(cc.ProgressBar)], c.prototype, "progressBar", void 0),
        s([a(cc.Sprite)], c.prototype, "gameTypeSprite", void 0),
        s([a(cc.Label)], c.prototype, "gameTypeLabel", void 0),
        s([a(cc.Node)], c.prototype, "collectBtn", void 0),
        s([a(cc.Node)], c.prototype, "uncollectBtn", void 0),
        s([a(cc.Node)], c.prototype, "lighting", void 0),
        c = s([o], c),
        i.default = c,
        cc._RF.pop()
    }
    , {
        "../../../BundlerHelper": void 0
    }],
    PlazaGames: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "b8e8445R3RFIaFv1Qui2VJh", "PlazaGames");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.assignBundleVersion = void 0;
        const n = t("./PlazaGameButton")
          , o = t("../../../BundlerHelper")
          , {ccclass: a, property: c} = cc._decorator;
        var r;
        (function(t) {
            t[t.none = 0] = "none",
            t[t.left = 1] = "left",
            t[t.right = 2] = "right"
        }
        )(r || (r = {})),
        globalThis.BundlerVerions0 = {},
        i.assignBundleVersion = function(t) {
            Object.assign(globalThis.BundlerVerions0, t)
        }
        ;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.scrollView = null,
                this.gamePrefab = null,
                this.particlePrefab = null,
                this.selectBtnParent = null,
                this.lightEffect = null,
                this.btnSprites = null,
                this.gameButtons = [],
                this.column = 0,
                this.leftSpace = 40,
                this.space = 10,
                this.smallSpase = 10,
                this.isDraging = !1,
                this.currDragDir = r.right,
                this.lastDragDir = r.none,
                this.moveOffest = 160,
                this.collectList = [],
                this.lastoffsetX = 0,
                this.smallCount = 0,
                this.GameCategoryStr = ["All", "Slot", "Fish", "Keno", "Casion", "Other", "Favorite"],
                this.waitLoading = !1
            }
            onLoad() {
                this.selectBtnParent = cc.find("GameFilter", this.node.parent),
                this.btnSprites = new Array;
                for (var t = 0, e = this.selectBtnParent.childrenCount; t < e; t++)
                    this.btnSprites[t] = this.selectBtnParent.children[t].getComponent(cc.Sprite);
                this.waitLoading = !1
            }
            onSelectPanelClick() {}
            start() {
                this.getCollectList(),
                this.loadGameButtons(),
                this.scrollView.node.on("scrolling", this.onScrollingEvent, this),
                this.scrollView.node.on("scroll-began", this.onScrollBeganEvent, this),
                this.scrollView.node.on("touch-up", this.onScrollEnd, this),
                this.scrollView.node.on("bounce-left", this.onScrollBounceLeft, this),
                this.scrollView.node.on("bounce-right", this.onScrollBounceRight, this)
            }
            getCollectList() {
                let t = o.PlatformName + "COLLECT"
                  , e = cc.sys.localStorage.getItem(t);
                if (e && "" != e) {
                    let t = e.split("|");
                    for (let e = 0; e < t.length; e++)
                        "" != t[e] && this.collectList.push(Number(t[e]))
                }
            }
            isCollectGame(t) {
                for (let e = 0; e < this.collectList.length; e++)
                    if (this.collectList[e] == t)
                        return !0;
                return !1
            }
            onScrollBeganEvent(t) {
                this.lastoffsetX = this.scrollView.getScrollOffset().x,
                this.isDraging = !0
            }
            setScrollViewAnchor(t) {
                var e, i, s = this.scrollView.content.getContentSize().width, n = this.scrollView.content.getPosition();
                if (t == r.left)
                    e = cc.v2(0, .5),
                    i = cc.v2(-this.scrollViewWidth, n.y);
                else {
                    var o = 0;
                    s < this.scrollViewWidth ? (o = -(this.scrollViewWidth - s),
                    i = cc.v2(o, n.y)) : (o = Math.abs(this.scrollViewWidth - s),
                    i = cc.v2(o, n.y)),
                    e = cc.v2(1, .5)
                }
                this.scrollView.content.setAnchorPoint(e),
                this.scrollView.content.setPosition(i)
            }
            playAnimator(t) {
                if (!this.currDragDir || this.currDragDir != t) {
                    this.currDragDir = t;
                    var e = 0
                      , i = this.scrollView.content.getContentSize();
                    if (t == r.left) {
                        var s = this.moveOffest;
                        i.width > this.scrollViewWidth && (s = this.moveOffest - (i.width - this.scrollViewWidth)),
                        e = -.5 * cc.visibleRect.width - this.moveOffest,
                        this.scrollView.content.setContentSize(this.originContentWidth + s, i.height),
                        this.moveOffest
                    } else
                        t == r.right && (e = -.5 * cc.visibleRect.width);
                    cc.tween(this.selectBtnParent).to(.2, {
                        position: cc.v3(e, this.selectBtnParent.getPosition().y, 0)
                    }).call(()=>{}
                    ).start()
                }
            }
            onScrollingEvent(t) {
                var e = this.scrollView.getScrollOffset().x;
                this.isDraging && Math.abs(this.lastoffsetX - e) > .5 && (this.lastoffsetX > e ? this.playAnimator(r.left) : this.playAnimator(r.right)),
                this.lastoffsetX = e,
                this.changeSizeRote()
            }
            changeSizeRote() {}
            onScrollBounceLeft(t) {
                if (this.isDraging = !1,
                this.currDragDir != this.lastDragDir && this.lastDragDir != r.none) {
                    this.lastDragDir = r.right;
                    var e = this.scrollView.content.getContentSize();
                    this.scrollView.content.setContentSize(this.originContentWidth, e.height)
                }
            }
            onScrollBounceRight(t) {
                this.isDraging = !1,
                this.lastDragDir = r.left
            }
            onScrollEnd(t) {
                this.isDraging = !1
            }
            loadGameButtons() {
                this.sorrtedArray = this.mPlaza.iPlazaBase.loadGameButtons(),
                cc.error("===loadGameButtons===", this.sorrtedArray);
                for (const s of this.sorrtedArray) {
                    var t = this.mPlaza.iPlazaBase.getClientGames(s);
                    t.IsSmall = !1,
                    t.IsSmall ? (this.smallCount++,
                    200 - this.smallSpase,
                    this.smallCount % 2 == 1 ? (this.column++,
                    this.smallSpase) : this.smallSpase) : (400,
                    this.column++);
                    let e = cc.instantiate(this.gamePrefab);
                    e.name = t.KindID.toString();
                    let i = e.getComponent(n.default);
                    this.scrollView.content.addChild(e);
                    let o = this.isCollectGame(s);
                    if (null != e) {
                        i.iPlazaBase = this.mPlaza.iPlazaBase,
                        i.setKindID(s, o),
                        i.gameChoose = this,
                        i.particlePrefab = this.particlePrefab;
                        let t = cc.find("btnChoose copy", e);
                        t.on(cc.Node.EventType.TOUCH_START, i.onTouchBegin, this),
                        t.on(cc.Node.EventType.TOUCH_CANCEL, i.onTouchCancel, this),
                        t.name = e.name;
                        let n = t.getComponent(cc.Button);
                        this.mPlaza.SetBtnEvent(n, !0, !0),
                        this.gameButtons.push(i)
                    } else
                        cc.log("\u5927\u5385\u52a0\u8f7d\u6e38\u620f\u6309\u94ae\u672a\u627e\u5230\u5f53\u524d\u6e38\u620f\uff1a" + s)
                }
                var e = 211.5 * this.column + this.leftSpace + (this.column - 1) * this.space
                  , i = Math.max(cc.winSize.width, e);
                this.originContentWidth = i,
                this.changeSizeRote()
            }
            setSelectBtn(t) {
                for (let o = 0, a = this.btnSprites.length; o < a; o++) {
                    const a = this.btnSprites[o];
                    var e = o == t ? this.GameCategoryStr[o] + "Light" : this.GameCategoryStr[o];
                    let c = cc.assetManager.getBundle("Plaza");
                    var i = c.get("Res/GameCategory/" + e, cc.SpriteFrame);
                    a.spriteFrame = i;
                    var s = cc.find("Label", a.node).getComponent(cc.Sprite)
                      , n = c.get("Res/GameCategory/Lable/" + e, cc.SpriteFrame);
                    s.spriteFrame = n
                }
            }
            fullScreenSetcontentSize() {}
            onBtnFilter(t, e) {
                this.onSelectPanelClick();
                let i = Number(e);
                if (this.mPlaza.iPlazaBase.isCurrgameCategory(i))
                    cc.log("isCurrgameCategory return");
                else {
                    this.mPlaza.iPlazaBase.setCurrgameCategory(i),
                    this.column = 0,
                    this.smallCount = 0,
                    this.setSelectBtn(i);
                    for (let t of this.gameButtons) {
                        let e = this.mPlaza.iPlazaBase.getClientGames(t.KindID);
                        if (6 == i) {
                            if (0 == t.collectState) {
                                t.node.active = !1;
                                continue
                            }
                        } else if (5 == i) {
                            if (1 == e.Category || 2 == e.Category) {
                                t.node.active = !1;
                                continue
                            }
                        } else if (!this.mPlaza.iPlazaBase.isGameCategoryAll(i) && e.Category != i) {
                            t.node.active = !1;
                            continue
                        }
                        t.node.active = !0
                    }
                }
            }
            onChooseGame(t) {
                this.mPlaza.iPlazaBase.onChooseGame(t)
            }
            enterGameScene(t) {}
            onDestroy() {}
            onDisable() {}
        }
        ;
        s([c(cc.ScrollView)], l.prototype, "scrollView", void 0),
        s([c(cc.Prefab)], l.prototype, "gamePrefab", void 0),
        s([c(cc.Prefab)], l.prototype, "particlePrefab", void 0),
        s([c({
            type: cc.Node,
            tooltip: "\u626b\u5149\u7279\u6548"
        })], l.prototype, "lightEffect", void 0),
        l = s([a], l),
        i.default = l,
        cc._RF.pop()
    }
    , {
        "../../../BundlerHelper": void 0,
        "./PlazaGameButton": "PlazaGameButton"
    }],
    PlazaUserInfo: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "7bd76rk4gJChLnE2HwsASom", "PlazaUserInfo");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.lblEntries = null,
                this.lblWinscore = null,
                this.head = null,
                this.lblUserId = null
            }
            start() {}
            UpdataUserInfo(t=!0) {
                this.iPlazaBase && (this.iPlazaBase.isScoreShowMode() ? (this.lblEntries.string = "" + this.iPlazaBase.GetUserScore(),
                this.lblWinscore.string = "" + this.iPlazaBase.GetUserInsure()) : (this.lblEntries.string = "$" + this.iPlazaBase.GetUserScore(),
                this.lblWinscore.string = "$" + this.iPlazaBase.GetUserInsure()),
                this.lblUserId.string = this.iPlazaBase.GetUserInfo().szAccounts + "(" + this.iPlazaBase.GetUserInfo().dwUserID + ")")
            }
        }
        ;
        s([o(cc.Label)], a.prototype, "lblEntries", void 0),
        s([o(cc.Label)], a.prototype, "lblWinscore", void 0),
        s([o(cc.Sprite)], a.prototype, "head", void 0),
        s([o(cc.Label)], a.prototype, "lblUserId", void 0),
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    Plaza: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "502a2K0DjhEy5mvPDvFG8D0", "Plaza");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
          , n = this && this.__awaiter || function(t, e, i, s) {
            return new (i || (i = Promise))(function(n, o) {
                function a(t) {
                    try {
                        r(s.next(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(t) {
                    try {
                        r(s.throw(t))
                    } catch (e) {
                        o(e)
                    }
                }
                function r(t) {
                    var e;
                    t.done ? n(t.value) : (e = t.value,
                    e instanceof i ? e : new i(function(t) {
                        t(e)
                    }
                    )).then(a, c)
                }
                r((s = s.apply(t, e || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const o = t("../../xhr")
          , a = t("./DonatoAmount/DonatoAmount")
          , c = t("./GameRecord/GameRecord")
          , r = t("./Games/ModifyPassword")
          , l = t("./Games/PlazaGames")
          , h = t("./Games/SignCtrl")
          , d = t("./Games/Turntable")
          , g = t("./Pay/Pay")
          , m = t("./PlazaUserInfo")
          , {ccclass: u, property: p} = cc._decorator;
        let f = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.handlerPriority = 1,
                this.handlerName = "Plaza",
                this.plazaGamesComp = null,
                this.setBtn = null,
                this.setPanel = null,
                this.setPanelMask = null,
                this.jackPotLables = [],
                this.setPasswordPanel = null,
                this.inputPassword = null,
                this.btnChangebindbank = null,
                this.noticePanel = null,
                this.signCtrl = null,
                this.turntableCtrl = null,
                this.turntablePanel = null,
                this.signBtn = null,
                this.changePasswordBtn = null,
                this.WednesdayBtn = null,
                this.WednesdayPanel = null,
                this.AppBtn = null,
                this.PayPrefab = null,
                this.NotificationPrefab = null,
                this.payBtn = null,
                this.notiBtn = null,
                this.CustomerServicesBtn = null,
                this.modifyPrefab = null,
                this.signPrefab = null,
                this.TurntablePrefab = null,
                this.btnNodePanel = null,
                this.btnWheel = null,
                this.btnServer = null,
                this.donatoAmountPrefab = null,
                this.btnDonatoAmount = null,
                this.btnAddScore = null,
                this.accountPrefab = null,
                this.leavePanelPrefab = null,
                this.emailPanelPrefab = null,
                this.jpStatusPrefab = null,
                this.gameRecordPrefab = null,
                this.modifyPanel = null,
                this.isPlaying = !1,
                this.isInit = !1,
                this.setbtnWidget = null,
                this.setPanelWidget = null,
                this.plazaUserInfo = null,
                this.marqueeQueue = [],
                this.isMarqueeing = !1,
                this.isRewriteMarquee = !1,
                this.isClickSignBtn = !1,
                this.isFirstFlg = !0,
                this.customerServicesUrl = "",
                this.hidePanel = [],
                this.marqueeQueueStr = "",
                this.isShowed = !1
            }
            onLoad() {
                this.iPlazaBase = cc.director.getScene().getComponentInChildren("PlazaBase"),
                this.iLoadingBase = cc.director.getScene().getComponentInChildren("LoadingBase"),
                this.iMainCtrl = cc.director.getScene().getComponentInChildren("MainControllerScript"),
                cc.game.on(cc.game.EVENT_HIDE, this.onEnterBackground, this),
                cc.game.on(cc.game.EVENT_SHOW, this.onEnterForeground, this),
                this.iMainCtrl.RemoveHandler(),
                this.iPlazaBase.AddHandler(),
                this.iPlazaBase.Init(this, this.setJackPotInfo.bind(this), this.showMarquee.bind(this), this.screenSizeChange.bind(this), this.UpdataUserInfo.bind(this)),
                this.iPlazaBase.CommonUI_RootNode(this.node),
                this.iPlazaBase.setHandleEvent(this.handleEvent.bind(this)),
                this.iPlazaBase.setOrientation("H"),
                this.plazaGamesComp.mPlaza = this,
                this.iPlazaBase.setCurrgameCategory(0),
                this.iPlazaBase.removefulleScreen(!1)
            }
            onDestroy() {
                cc.log("\u9500\u6bc1\u5927\u5385"),
                this.unscheduleAllCallbacks(),
                this.iPlazaBase.RemoveHandler(),
                this.iPlazaBase.releasePlazaRes()
            }
            start() {
                this.setPanelWidget = this.setPanel.getComponent(cc.Widget),
                this.setbtnWidget = this.setBtn.getComponent(cc.Widget),
                this.plazaUserInfo = cc.find("bottom/UserInfo", this.node).getComponent(m.default),
                this.plazaUserInfo.iPlazaBase = this.iPlazaBase;
                var t = cc.find("bottom/UserInfo/head", this.node);
                this.SetBtnEvent(t.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.btnWheel.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.btnServer.getComponent(cc.Button), !0, !0),
                this.marqueeRoot = cc.find("MarqueeMsg/mask", this.node),
                this.marqueeLabel = this.marqueeRoot.getChildByName("msg").getComponent(cc.Label),
                this.marqueeLabel.node.active = !1,
                this.iPlazaBase.setJackPotInfo(),
                this.iPlazaBase.showMarquee(),
                this.plazaUserInfo.UpdataUserInfo();
                let e = cc.find("Sound/Switch/soundOn", this.setBtn.parent)
                  , i = cc.find("Sound/Switch/soundOff", this.setBtn.parent);
                if (this.iPlazaBase.AddSetSystem(this.setPanel, e, i),
                this.SetBtnEvent(this.changePasswordBtn.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.signBtn.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.AppBtn.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.payBtn.getComponent(cc.Button), !0, !0),
                this.SetBtnEvent(this.CustomerServicesBtn.getComponent(cc.Button), !0, !0),
                this.btnDonatoAmount && this.SetBtnEvent(this.btnDonatoAmount.getComponent(cc.Button), !0, !0),
                this.btnAddScore && this.SetBtnEvent(this.btnAddScore.getComponent(cc.Button), !0, !0),
                this.jpStatusPrefab) {
                    var s = cc.instantiate(this.jpStatusPrefab);
                    s && (this.node.addChild(s),
                    this.jpStatusPanel = s,
                    s.active = !1)
                }
                if (this.modifyPanel = cc.instantiate(this.modifyPrefab),
                this.modifyPanel) {
                    this.node.addChild(this.modifyPanel),
                    this.modifyPanel.active = !1;
                    var n = this.modifyPanel.addComponent(r.default);
                    n.iPlazaBase = this.iPlazaBase,
                    n.init(),
                    this.hidePanel.push(this.modifyPanel)
                }
                var o = cc.instantiate(this.signPrefab);
                if (o && (this.node.addChild(o),
                this.signCtrl = o.getComponent(h.default),
                this.signCtrl.iPlazaBase = this.iPlazaBase,
                o.active = !1,
                this.hidePanel.push(o)),
                this.TurntablePrefab) {
                    var l = cc.instantiate(this.TurntablePrefab);
                    l && (this.node.addChild(l),
                    l.active = !1,
                    this.turntableCtrl = l.getComponent(d.default),
                    this.turntableCtrl.iPlazaBase = this.iPlazaBase,
                    this.turntableCtrl.plazaUserInfo = this.plazaUserInfo,
                    this.hidePanel.push(l))
                }
                if (this.donatoAmountPrefab) {
                    cc.error("\u521d\u59cb\u5316\u8f6c\u5206");
                    var g = cc.instantiate(this.donatoAmountPrefab);
                    g && (this.node.addChild(g),
                    this.donatoAmountCtrl = g.getComponent(a.default),
                    this.donatoAmountCtrl.iPlazaBase = this.iPlazaBase,
                    g.active = !1,
                    this.hidePanel.push(g))
                }
                if (this.accountPrefab) {
                    cc.error("\u8d26\u53f7Panel");
                    var u = cc.instantiate(this.accountPrefab);
                    if (u) {
                        this.node.addChild(u),
                        this.accountPanel = u;
                        var p = cc.find("btnPassword", u)
                          , f = cc.find("btnCloseAccount", u)
                          , P = cc.find("btnRecord", u);
                        this.SetBtnEvent(p.getComponent(cc.Button), !0, !0),
                        this.SetBtnEvent(f.getComponent(cc.Button), !0, !0),
                        this.SetBtnEvent(P.getComponent(cc.Button), !0, !0),
                        u.active = !1,
                        this.hidePanel.push(u)
                    }
                }
                if (this.leavePanelPrefab) {
                    var b = cc.instantiate(this.leavePanelPrefab);
                    if (b) {
                        this.node.addChild(b),
                        this.leavePanel = b;
                        var S = cc.find("btnOkLeave", b)
                          , v = cc.find("btnCloseLeave", b);
                        this.SetBtnEvent(S.getComponent(cc.Button), !0, !0),
                        this.SetBtnEvent(v.getComponent(cc.Button), !0, !0),
                        b.active = !1,
                        this.hidePanel.push(b)
                    }
                }
                if (this.emailPanelPrefab) {
                    var C = cc.instantiate(this.emailPanelPrefab);
                    if (C) {
                        this.node.addChild(C),
                        this.emailPanel = C;
                        var B = cc.find("btnCloseEmail", C)
                          , y = cc.find("btnCloseEmailX", C);
                        this.SetBtnEvent(y.getComponent(cc.Button), !0, !0),
                        this.SetBtnEvent(B.getComponent(cc.Button), !0, !0),
                        C.active = !1,
                        this.hidePanel.push(C)
                    }
                }
                if (this.gameRecordPrefab) {
                    var w = cc.instantiate(this.gameRecordPrefab);
                    w && (this.node.addChild(w),
                    this.gameRecordCtrl = w.getComponent(c.default),
                    this.gameRecordCtrl.iPlazaBase = this.iPlazaBase,
                    w.active = !1,
                    this.hidePanel.push(w))
                }
                this.Init()
            }
            onEnable() {
                this.iPlazaBase.CommonUI_RootNode(this.node);
                let t = cc.view.getFrameSize();
                t.height > t.width && cc.view.setFrameSize(t.height, t.width),
                cc.game.canvas.style.cursor = "default";
                let e = cc.find("PopMessage", this.node);
                if (e)
                    return console.log("onEnterForeground return"),
                    void (e.active = !1)
            }
            setJackPotInfo(t) {
                if (this.jackPotLables)
                    for (var e = 0; e < this.jackPotLables.length; e++)
                        this.jackPotLables[e].string = "$" + t[e].toFixed(2)
            }
            onSetClick() {
                this.isPlaying || this.isShowed || (this.setBtnPos = this.setBtn.getPosition(),
                this.setbtnWidth = this.setBtn.getContentSize().width,
                this.setPanelPos = this.setPanel.getPosition(),
                this.setPanelWidth = this.setPanel.getContentSize().width,
                this.isPlaying = !0,
                cc.tween(this.setBtn).delay(.25).call(()=>{
                    cc.tween(this.setPanel).to(.25, {
                        position: cc.v3(this.setPanelPos.x - this.setPanelWidth, this.setPanelPos.y, 0)
                    }).call(()=>{
                        this.setPanelWidget.right = 0,
                        this.setPanelMask.active = !0,
                        this.isPlaying = !1,
                        this.isShowed = !0
                    }
                    ).start()
                }
                ).start())
            }
            onMaskClick() {
                this.isPlaying || (this.setBtnPos = this.setBtn.getPosition(),
                this.setbtnWidth = this.setBtn.getContentSize().width,
                this.setPanelPos = this.setPanel.getPosition(),
                this.setPanelWidth = this.setPanel.getContentSize().width,
                this.isPlaying = !0,
                cc.tween(this.setPanel).to(.25, {
                    position: cc.v3(this.setPanelPos.x + this.setPanelWidth, this.setPanelPos.y, 0)
                }).call(()=>{
                    this.setPanelMask.active = !1,
                    this.setPanelWidget.right = -this.setPanelWidth,
                    cc.tween(this.setBtn).delay(.25).call(()=>{
                        this.isPlaying = !1,
                        this.isShowed = !1
                    }
                    ).start()
                }
                ).start())
            }
            handleEvent(t, e) {
                switch (cc.error("===handleEvent===", t),
                t) {
                case "exchangepoints":
                    if (0 == e.cbResult) {
                        var i = e.fScore;
                        cc.error("exchangepoints:", i),
                        this.iPlazaBase.AddUserScore(i),
                        this.iPlazaBase.AddtUserInsure(-i),
                        this.plazaUserInfo.UpdataUserInfo(!1)
                    } else
                        this.iPlazaBase.PopDialog_Show(e.szDescribeString, ()=>{
                            cc.log("ok callback")
                        }
                        , ()=>{
                            cc.log("cancel callback")
                        }
                        , !1);
                    break;
                case "signMsg":
                    this.ShowSignPanel(e);
                    break;
                case "signReward":
                    this.ShowSignReward(e);
                    break;
                case "WednesdayReward":
                    this.ShowWednesdayReward(e);
                    break;
                case "weelMsg":
                    cc.error("weelMsg"),
                    this.ShowWeelPanel(e);
                    break;
                case "weelReward":
                    this.ShowWeelReward(e);
                    break;
                case "ModifyPassword":
                    let s = "";
                    s = 0 == e.cbResult ? "Change Password successful." : "Failed to modify password.Please check the password",
                    this.iPlazaBase.PopDialog_Show(s, ()=>{
                        0 == e.cbResult && (this.modifyPanel.active = !1,
                        this.onGoBack2Login(!1)),
                        cc.log("ok callback")
                    }
                    , ()=>{
                        cc.log("cancel callback"),
                        0 == e.cbResult && (this.modifyPanel.active = !1,
                        this.onGoBack2Login(!1))
                    }
                    , !1);
                    break;
                case "LogonPogKick":
                    this.onGoBack2Login(!1);
                    break;
                case "onGoLogin":
                    cc.error("\u767b\u5f55\u6210\u529f");
                    break;
                case "ModifyPassword":
                    let n = "";
                    n = 0 == e.cbResult ? "Change Password successful." : "Failed to modify password.Please check the password",
                    this.iPlazaBase.PopDialog_Show(n, ()=>{
                        0 == e.cbResult && (this.modifyPanel.active = !1,
                        this.onGoBack2Login(!1)),
                        cc.log("ok callback")
                    }
                    , ()=>{
                        cc.log("cancel callback"),
                        0 == e.cbResult && (this.modifyPanel.active = !1,
                        this.onGoBack2Login(!1))
                    }
                    , !1);
                    break;
                case "jackpotStatus":
                    this.onJackpotStatus();
                    break;
                case "gameRecord":
                    this.gameRecordCtrl.ShowGameRecord(e)
                }
            }
            showMarquee(t, e, i=!1) {
                this.marqueeLabel && "" != e && (t > 0 ? this.ShowMarqueeMessage(e, i) : (this.marqueeQueue = [],
                this.marqueeQueueStr = "",
                this.marqueeLabel.string = "",
                this.isMarqueeing = !1))
            }
            ShowMarqueeMessage(t, e) {
                if (e)
                    this.marqueeQueueStr = t,
                    this.CreateMarqueeMessage();
                else if ("" != t) {
                    let e = t.split("\n");
                    if (e.length > 0)
                        for (let t = 0; t < e.length; t++)
                            "" != e[t] && this.marqueeQueue.push(e[t]);
                    else
                        this.marqueeQueue.push(t);
                    this.CreateMarqueeMessage()
                }
            }
            CreateMarqueeMessage() {
                if (!this.isMarqueeing && (this.marqueeQueue.length > 0 || "" != this.marqueeQueueStr)) {
                    this.isMarqueeing = !0;
                    let t = !1;
                    "" != this.marqueeQueueStr ? (this.marqueeLabel.string = this.marqueeQueueStr,
                    this.marqueeQueueStr = "",
                    t = !0) : this.marqueeLabel.string = this.marqueeQueue.shift(),
                    this.marqueeLabel.node.setPosition(this.marqueeRoot.width / 2, this.marqueeLabel.node.y),
                    this.marqueeLabel.node.active = !0,
                    cc.tween(this.marqueeLabel.node).to(20, {
                        x: -(this.marqueeRoot.width / 2 + this.marqueeLabel.node.width)
                    }).call(()=>{
                        this.marqueeLabel.node.active = !1,
                        this.isMarqueeing = !1,
                        this.isRewriteMarquee && this.marqueeQueue.length > 0 ? (this.isRewriteMarquee = !1,
                        this.ShowMarqueeMessage(this.marqueeQueue.shift(), t)) : (cc.error("===", this.marqueeQueue),
                        0 == t ? this.ShowMarqueeMessage(this.marqueeLabel.string, !1) : this.marqueeQueue.length > 0 && this.ShowMarqueeMessage(this.marqueeQueue.shift(), !1))
                    }
                    ).start()
                }
            }
            onGoBack2Login(t=!0) {
                if (cc.error("onGoBack2Login"),
                0 != this.node.activeInHierarchy) {
                    t && this.onMaskClick(),
                    this.iPlazaBase.onGoLogin(),
                    this.node.parent.active = !1,
                    this.node.parent.parent.getChildByName("LoginPanel").active = !0,
                    this.iMainCtrl.AddHandler(),
                    this.onButtonPanelClick();
                    for (let t = 0; t < this.hidePanel.length; t++)
                        this.hidePanel[t] && (this.hidePanel[t].active = !1)
                }
            }
            onGoBackLogin() {
                this.leavePanel.active = !0
            }
            onNoticeOkBtnClick() {
                this.noticePanel.active = !1
            }
            onChangePassword() {
                this.modifyPanel.active = !0
            }
            onSignBtn() {
                cc.log("\u70b9\u51fb\u7b7e\u5230\u6309\u94ae"),
                this.isClickSignBtn = !0,
                this.iPlazaBase.sendQuerySignInfo()
            }
            ShowSignPanel(t) {
                let e = t.cbResult
                  , i = t.cbIndex;
                this.isClickSignBtn ? this.signCtrl.showPanel(e, i) : 1 == e && this.signCtrl.showPanel(e, i),
                this.isClickSignBtn = !1
            }
            ShowSignReward(t) {
                cc.log("\u66f4\u65b0\u5f53\u524d\u5206\u6570\u663e\u793a,\u52a0\u5206\u524d\u5206\u6570\uff1a", this.iPlazaBase.GetUserScore(), "\u589e\u52a0\u5206\u6570\uff1a", t.fScore),
                this.iPlazaBase.AddUserScore(t.fScore),
                this.plazaUserInfo.UpdataUserInfo(!1),
                this.signCtrl.ShowSignReward(t.cbIndex)
            }
            ShowWednesdayReward(t) {
                cc.log("\u66f4\u65b0\u5f53\u524d\u5206\u6570\u663e\u793a,\u52a0\u5206\u524d\u5206\u6570\uff1a", this.iPlazaBase.GetUserScore(), "\u589e\u52a0\u5206\u6570\uff1a", t.fScore),
                this.iPlazaBase.AddUserScore(t.fScore),
                this.plazaUserInfo.UpdataUserInfo(),
                0 == t.fScore ? (this.iPlazaBase.PopTips_showMessage(t.szDescribeString),
                this.WednesdayPanel.active = !1) : this.WednesdayPanel.active = !0
            }
            ShowWeelPanel(t) {
                cc.log("ShowWeelPanel", t),
                1 == t.cbResult ? this.turntableCtrl.showPanel(t.cbFreeTimes) : (this.isClickSignBtn = !1,
                this.iPlazaBase.sendQuerySignInfo())
            }
            ShowWeelReward(t) {
                cc.log("ShowWeelReward", t),
                this.turntableCtrl.OnRotate(t.cbIndex, t.fScore, t.cbFreeTimes),
                t.cbFreeTimes <= 0 && (this.isClickSignBtn = !1)
            }
            onDownLoadApk() {
                if ("" != globalThis.URLAndroid) {
                    var t = globalThis.URLAndroid + "?V=" + (new Date).getTime();
                    cc.sys.openURL(t)
                }
            }
            screenSizeChange() {
                this.plazaGamesComp && this.plazaGamesComp.fullScreenSetcontentSize()
            }
            UpdataUserInfo() {
                this.plazaUserInfo && this.plazaUserInfo.UpdataUserInfo()
            }
            Init() {
                cc.error(">>>>>" + this.isFirstFlg),
                this.isFirstFlg ? this.isFirstFlg = !1 : (this.iMainCtrl.RemoveHandler(),
                this.iPlazaBase.AddHandler()),
                this.WednesdayBtn && (1 == this.iPlazaBase.GetTodayAlmsCount() ? (cc.error("\u4eca\u5929\u661f\u671f\u4e09"),
                this.WednesdayBtn.getComponent(cc.Button).interactable = !0) : (cc.error("\u4eca\u5929\u4e0d\u662f\u661f\u671f\u4e09"),
                this.WednesdayBtn.getComponent(cc.Button).interactable = !1),
                "true" == globalThis.OpenWednesday ? this.WednesdayBtn.active = !0 : this.WednesdayBtn.active = !1),
                this.signBtn && ("true" == globalThis.ISSIGN ? this.signBtn.active = !0 : this.signBtn.active = !1),
                this.changePasswordBtn && (cc.error("changePasswordBtn", globalThis.ISCHANGEPASSWORD),
                "true" == globalThis.ISCHANGEPASSWORD ? this.changePasswordBtn.active = !0 : this.changePasswordBtn.active = !1),
                this.AppBtn && (null == globalThis.URLAndroid || "" == globalThis.URLAndroid ? this.AppBtn.active = !1 : this.AppBtn.active = !0),
                this.payBtn && ("true" == globalThis.OpenPay ? this.payBtn.active = !0 : this.payBtn.active = !1),
                this.notiBtn && ("true" == globalThis.OpenNoti ? (this.notiBtn.active = !0,
                this.iMainCtrl.GetIsBackPlaza() || this.startLoad_1()) : this.notiBtn.active = !1),
                this.CustomerServicesBtn && (globalThis.CustomerServices && "" != globalThis.CustomerServices ? (this.CustomerServicesBtn.active = !0,
                this.getCustomerServices()) : this.CustomerServicesBtn.active = !1),
                this.iMainCtrl.GetIsBackPlaza() || this.iPlazaBase.sendTurntableInfo(),
                globalThis.payUrl = "http://192.168.91.133:81",
                this.fetchBundleVersion()
            }
            fetchBundleVersion() {
                let t = this;
                cc.loader.load({
                    url: globalThis.mUrl + "BuddleVersion.json?v" + (new Date).getTime(),
                    type: "json"
                }, function(e, i) {
                    if (!e) {
                        var s = JSON.parse(JSON.stringify(i));
                        globalThis.BundlerVerions1 = s,
                        globalThis.BundlerVerions1 && (cc.log("\u91cd\u65b0\u83b7\u53d6\u7248\u672c\u53f7\uff1a", globalThis.BundlerVerions1),
                        t.iLoadingBase && t.iLoadingBase.SetGameVersion(globalThis.BundlerVerions1))
                    }
                }
                .bind(this))
            }
            onCustomerServices() {
                "" != globalThis.CustomerServices && "" != this.customerServicesUrl && (cc.error("onCustomerServices:", this.customerServicesUrl),
                cc.sys.openURL(this.customerServicesUrl))
            }
            onShowEmail() {
                this.emailPanel.active = !0
            }
            onShowWheel() {
                this.iPlazaBase.sendTurntableInfo(),
                cc.error("\u663e\u793a\u8f6c\u76d8\uff01")
            }
            onNotificationBtn() {
                if (this.mNotiRoot = cc.find("NotificationRoot", this.node),
                null == this.mNotiRoot) {
                    this.mNotiRoot = cc.instantiate(this.NotificationPrefab);
                    var t = cc.find("Page/MyImage", this.mNotiRoot)
                      , e = cc.find("Page/btnClose", this.mNotiRoot);
                    this.SetBtnEvent(e.getComponent(cc.Button), !0, !0),
                    cc.loader.load(this.MyData.activityCover, function(e, i) {
                        t.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i)
                    }),
                    this.node.addChild(this.mNotiRoot)
                } else
                    this.mNotiRoot.active = !0
            }
            startLoad_1() {
                return n(this, void 0, void 0, function*() {
                    this.MyData.enabled && this.onNotificationBtn()
                })
            }
            SetBtnEvent(t, e=!0, i=!0) {
                if (null != t) {
                    let s = new cc.Component.EventHandler;
                    s.target = this.node,
                    s.component = "Plaza",
                    s.handler = "BtnEventCallback",
                    t.clickEvents.push(s),
                    t.node.active = e,
                    t.interactable = i
                }
            }
            BtnEventCallback(t, e) {
                var i = t.target;
                this.OnClickBtn(i)
            }
            OnClickBtn(t) {
                switch (cc.log("===============>>\u6240\u6709\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6\uff1a" + t.name),
                t.name) {
                case "btnClose":
                    this.mNotiRoot.active = !1;
                    break;
                case "btnChangePassword":
                    this.onChangePassword(),
                    this.onButtonPanelClick();
                    break;
                case "btnSign":
                    this.onSignBtn(),
                    this.onButtonPanelClick();
                    break;
                case "btnDownloadApk":
                    this.onDownLoadApk(),
                    this.onButtonPanelClick();
                    break;
                case "btnPay":
                    this.onPayBtn();
                    break;
                case "btnEmail":
                    this.onShowEmail();
                    break;
                case "btnServer":
                    this.onCustomerServices();
                    break;
                case "btnWheel":
                    this.onShowWheel();
                    break;
                case "btnDonatoAmount":
                    this.onbtnDonatoAmount();
                    break;
                case "btnAddScore":
                    this.onPayBtn();
                    break;
                case "head":
                    this.onShowAccount();
                    break;
                case "btnPassword":
                    this.onChangePassword(),
                    this.accountPanel.active = !1;
                    break;
                case "btnCloseAccount":
                    this.accountPanel.active = !1;
                    break;
                case "btnRecord":
                    this.showRecordPanel(),
                    this.accountPanel.active = !1;
                    break;
                case "btnOkLeave":
                    this.leavePanel.active = !1,
                    this.onGoBack2Login();
                    break;
                case "btnCloseLeave":
                    this.leavePanel.active = !1;
                    break;
                case "btnCloseEmail":
                case "btnCloseEmailX":
                    this.emailPanel.active = !1;
                    break;
                default:
                    {
                        let e = Number(t.name);
                        for (const t of this.plazaGamesComp.sorrtedArray)
                            if (Number(t) == e) {
                                this.iPlazaBase.onChooseGame(t);
                                break
                            }
                    }
                }
            }
            onSettingSoundClick() {
                this.iPlazaBase.SettingSoundClick(),
                this.onButtonPanelClick()
            }
            onButtonPanelClick() {}
            onPayBtn() {
                var t = cc.find("PayRoot", this.node);
                if (null == t) {
                    let t = cc.instantiate(this.PayPrefab);
                    this.mPay = t.getComponent(g.default),
                    this.mPay.iPlazaBase = this.iPlazaBase,
                    this.node.addChild(t)
                } else
                    t.active = !0
            }
            onbtnDonatoAmount() {
                cc.error("onbtnDonatoAmount"),
                this.donatoAmountCtrl && this.donatoAmountCtrl.show(this.iPlazaBase.GetUserInfo().lUserInsure)
            }
            onShowAccount() {
                if (this.accountPanel) {
                    this.accountPanel.active = !0;
                    var t = cc.find("UserName", this.accountPanel).getComponent(cc.Label)
                      , e = cc.find("UserID", this.accountPanel).getComponent(cc.Label);
                    t.string = "" + this.iPlazaBase.GetUserInfo().szAccounts,
                    e.string = "" + this.iPlazaBase.GetUserInfo().dwUserID
                }
            }
            onJackpotStatus() {
                cc.error("\u6536\u5230\u5f69\u91d1\u72b6\u6001"),
                this.jpStatusPanel && (this.jpStatusPanel.active = !0,
                this.jpStatusPanel.opacity = 255,
                cc.tween(this.jpStatusPanel).delay(3).to(1, {
                    opacity: 0
                }).start())
            }
            getCustomerServices() {
                if (cc.error("getCustomerServices>>"),
                "" != globalThis.CustomerServices) {
                    let e = "http://192.168.91.133:81/GameApp/GetUseChannel/" + this.iPlazaBase.getUserID();
                    var t = this;
                    return cc.error(e),
                    new Promise(i=>{
                        o.xhr_request({
                            url: e,
                            method: "GET",
                            success: e=>{
                                if ("Success" == e.status) {
                                    cc.error("\u83b7\u5f97\u6e20\u9053\u94fe\u63a5\uff1a", e);
                                    var s = e.data;
                                    t.customerServicesUrl = s,
                                    i(!0)
                                } else
                                    i(!1)
                            }
                            ,
                            fail: t=>{
                                cc.error("msg\uff1a", t),
                                i(!1)
                            }
                        })
                    }
                    )
                }
            }
            onEnterBackground() {
                console.log("onEnterBackground")
            }
            onEnterForeground() {
                console.log("onEnterForeground", this.iPlazaBase.isClosed()),
                0 != this.node.activeInHierarchy ? cc.find("PopMessage", this.node) ? console.log("onEnterForeground return") : this.iPlazaBase.isClosed() && this.iPlazaBase.PopMessage_Show(()=>{
                    this.onGoBack2Login(!1)
                }
                ) : console.log("this.node.activeInHierarchy == false")
            }
            showRecordPanel() {
                this.gameRecordCtrl.showPanel()
            }
        }
        ;
        s([p(l.default)], f.prototype, "plazaGamesComp", void 0),
        s([p(cc.Node)], f.prototype, "setBtn", void 0),
        s([p(cc.Node)], f.prototype, "setPanel", void 0),
        s([p(cc.Node)], f.prototype, "setPanelMask", void 0),
        s([p([cc.Label])], f.prototype, "jackPotLables", void 0),
        s([p(cc.Node)], f.prototype, "setPasswordPanel", void 0),
        s([p(cc.EditBox)], f.prototype, "inputPassword", void 0),
        s([p(cc.Node)], f.prototype, "btnChangebindbank", void 0),
        s([p(cc.Node)], f.prototype, "noticePanel", void 0),
        s([p(cc.Node)], f.prototype, "signBtn", void 0),
        s([p(cc.Node)], f.prototype, "changePasswordBtn", void 0),
        s([p(cc.Node)], f.prototype, "WednesdayBtn", void 0),
        s([p(cc.Node)], f.prototype, "WednesdayPanel", void 0),
        s([p(cc.Node)], f.prototype, "AppBtn", void 0),
        s([p(cc.Prefab)], f.prototype, "PayPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "NotificationPrefab", void 0),
        s([p(cc.Node)], f.prototype, "payBtn", void 0),
        s([p(cc.Node)], f.prototype, "notiBtn", void 0),
        s([p(cc.Node)], f.prototype, "CustomerServicesBtn", void 0),
        s([p(cc.Prefab)], f.prototype, "modifyPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "signPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "TurntablePrefab", void 0),
        s([p(cc.Node)], f.prototype, "btnNodePanel", void 0),
        s([p(cc.Node)], f.prototype, "btnWheel", void 0),
        s([p(cc.Node)], f.prototype, "btnServer", void 0),
        s([p(cc.Prefab)], f.prototype, "donatoAmountPrefab", void 0),
        s([p(cc.Node)], f.prototype, "btnDonatoAmount", void 0),
        s([p(cc.Node)], f.prototype, "btnAddScore", void 0),
        s([p(cc.Prefab)], f.prototype, "accountPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "leavePanelPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "emailPanelPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "jpStatusPrefab", void 0),
        s([p(cc.Prefab)], f.prototype, "gameRecordPrefab", void 0),
        f = s([u], f),
        i.default = f,
        cc._RF.pop()
    }
    , {
        "../../xhr": void 0,
        "./DonatoAmount/DonatoAmount": "DonatoAmount",
        "./GameRecord/GameRecord": "GameRecord",
        "./Games/ModifyPassword": "ModifyPassword",
        "./Games/PlazaGames": "PlazaGames",
        "./Games/SignCtrl": "SignCtrl",
        "./Games/Turntable": "Turntable",
        "./Pay/Pay": "Pay",
        "./PlazaUserInfo": "PlazaUserInfo"
    }],
    SignCtrl: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "bd840GsyoFGW4w5gOxtLMEB", "SignCtrl");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {ccclass: n, property: o} = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.signSelectNodes = [],
                this.signBtnNodes = [],
                this.signParticleNodes = [],
                this.isInit = !1,
                this.signNum = [50, 80, 110, 150, 200, 250, 300]
            }
            onLoad() {}
            start() {}
            Init() {
                this.isInit = !0;
                for (let t = 0; t < 7; t++)
                    this.signSelectNodes[t] = cc.find("SignNode/Sign_" + t + "/select", this.node),
                    this.signSelectNodes[t].active = !1,
                    this.signBtnNodes[t] = cc.find("SignBtnNode/Btn" + t, this.node),
                    this.signParticleNodes[t] = cc.find("Particle", this.signSelectNodes[t]),
                    cc.find("SignNode/Sign_" + t + "/Num", this.node).getComponent(cc.Label).string = "" + this.signNum[t]
            }
            showPanel(t, e) {
                this.isInit || this.Init(),
                cc.error("showPanel:", t, e);
                for (let i = 0; i < 7; i++)
                    this.signParticleNodes[i].active = !1,
                    this.signBtnNodes[i].getComponent(cc.Button).interactable = !1,
                    this.signBtnNodes[i].active = !1,
                    i < e - 1 ? (this.signSelectNodes[i].active = !0,
                    this.signBtnNodes[i].active = !1,
                    cc.find("fram", this.signSelectNodes[i].parent).active = !1) : i == e - 1 ? 1 == t ? (this.signSelectNodes[i].active = !1,
                    this.signBtnNodes[i].active = !0,
                    this.signBtnNodes[i].getComponent(cc.Button).interactable = !0,
                    cc.find("fram", this.signSelectNodes[i].parent).active = !1) : (this.signSelectNodes[i].active = !0,
                    this.signBtnNodes[i].active = !1,
                    cc.find("fram", this.signSelectNodes[i].parent).active = !0) : (this.signSelectNodes[i].active = !1,
                    this.signBtnNodes[i].active = !1);
                this.node.active = !0
            }
            ShowSignReward(t) {
                cc.error("index:", t),
                this.showPanel(0, t),
                this.signParticleNodes[t - 1].active = !0
            }
            onCollectBtn(t, e) {
                cc.log("\u70b9\u51fb\u6536\u96c6\u6309\u94ae", e);
                let i = Number(e);
                this.iPlazaBase.sendSignInfo(i + 1)
            }
            onCloseBtn() {
                this.node.active = !1
            }
        }
        ;
        a = s([n], a),
        i.default = a,
        cc._RF.pop()
    }
    , {}],
    Turntable: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "62734cD/9JFzZZqhkY50La2", "Turntable");
        var s = this && this.__decorate || function(t, e, i, s) {
            var n, o = arguments.length, a = o < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, i, s);
            else
                for (var c = t.length - 1; c >= 0; c--)
                    (n = t[c]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
            return o > 3 && a && Object.defineProperty(e, i, a),
            a
        }
        ;
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.eRotateState = void 0;
        const n = t("../PlazaUserInfo")
          , {ccclass: o, property: a} = cc._decorator;
        var c;
        (function(t) {
            t[t.e_None = -1] = "e_None",
            t[t.e_FirstNegaSlow = 0] = "e_FirstNegaSlow",
            t[t.e_Acc = 1] = "e_Acc",
            t[t.e_Uniform = 2] = "e_Uniform",
            t[t.e_Slow = 3] = "e_Slow",
            t[t.e_End = 4] = "e_End",
            t[t.MaxValue = 5] = "MaxValue"
        }
        )(c = i.eRotateState || (i.eRotateState = {}));
        let r = class extends cc.Component {
            constructor() {
                super(...arguments),
                this.plazaUserInfo = null,
                this.m_eRotateState = c.e_None,
                this.m_dic_TurntableInitData = new Map,
                this.m_iStopId = 0,
                this.m_fFirstNegaTime = .5,
                this.m_fUniformTime = 3,
                this.m_fTimer = 0,
                this.m_fSpeedMax = 5,
                this.m_fSpeedMin = 3,
                this.m_fSpeedNow = 0,
                this.m_fTrim = 3,
                this.m_fSingleAareAverage = 0,
                this.m_fSlowAngleMin = 0,
                this.m_fSlowAngleMax = 0,
                this.m_pointOffsetAngle = 191.5,
                this.spinTimes = 0,
                this.rewardScore = 0,
                this.isInit = !1,
                this.winTipString = ["10 ENTRIES", "500 ENTRIES", "2000 ENTRIES", "30 ENTRIES", "10 ENTRIES", "80 ENTRIES", "100 ENTRIES", "300 ENTRIES", "10000 ENTRIES", "20 ENTRIES", "50 ENTRIES", "20 ENTRIES"]
            }
            GetTurntableInitData() {
                let t = new Map
                  , e = [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2];
                for (let i = 0; i < 12; i++) {
                    let s = [];
                    s.push(e[i]),
                    t.set(i, s)
                }
                return t
            }
            start() {
                this.Init()
            }
            Init() {
                if (this.isInit)
                    return;
                this.isInit = !0,
                cc.log("-----------init"),
                this.winNode = cc.find("Win", this.node),
                this.spinBtn = cc.find("Button_Turntable", this.node).getComponent(cc.Button),
                this.spinLastNum = cc.find("SpinLast/Num", this.node).getComponent(cc.Label),
                this.winTip = cc.find("WinTip", this.node),
                this.winTipLabel = cc.find("WinTip/WinTip", this.node).getComponent(cc.Label),
                this.m_TransTurntable = cc.find("Image_Turntable", this.node),
                this.m_TransTurntable.active = !0,
                this.m_dic_TurntableInitData = this.GetTurntableInitData(),
                this.m_TargetDirVec = new cc.Vec3(0,1,0);
                let t = 0;
                for (let e = 0; e < this.m_dic_TurntableInitData.size; e++)
                    t += this.m_dic_TurntableInitData.get(e).length;
                this.m_fSingleAareAverage = 360 / t,
                this.m_fSlowAngleMin = 2 * this.m_fSingleAareAverage,
                this.m_fSlowAngleMax = 4 * this.m_fSingleAareAverage
            }
            update() {
                switch (this.m_eRotateState) {
                case c.e_None:
                    break;
                case c.e_FirstNegaSlow:
                    this.FirstNegaSlowLogic();
                    break;
                case c.e_Acc:
                    this.AccLogic();
                    break;
                case c.e_Uniform:
                    this.UniformLogic();
                    break;
                case c.e_Slow:
                    this.SlowLogic();
                    break;
                case c.e_End:
                    this.m_fSpeedNow = 0,
                    this.m_fTimer = 0,
                    this.m_eRotateState = c.e_None,
                    this.EndTurntable()
                }
            }
            get IsEnd() {
                return this.m_eRotateState == c.e_None
            }
            get StopId() {
                return this.m_iStopId
            }
            set StopId(t) {
                this.m_iStopId = t
            }
            get FirstNegaTime() {
                return this.m_fFirstNegaTime
            }
            set FirstNegaTime(t) {
                t > 0 && (this.m_fFirstNegaTime = t)
            }
            get UniformTime() {
                return this.m_fUniformTime
            }
            set UniformTime(t) {
                t > 0 && (cc.log("====UniformTime===", t),
                this.m_fUniformTime = t)
            }
            get SpeedMax() {
                return this.m_fSpeedMax
            }
            set SpeedMax(t) {
                t > 0 && t > this.m_fSpeedMin && (this.m_fSpeedMax = t)
            }
            get SpeedMin() {
                return this.m_fSpeedMin
            }
            set SpeedMin(t) {
                t > 0 && t < this.m_fSpeedMax && (this.m_fSpeedMin = t)
            }
            get FTrimAngle() {
                return this.m_fTrim
            }
            set FTrimAngle(t) {
                this.m_fTrim = t
            }
            SlowSingleAarePre(t, e) {
                t = Math.abs(t * this.m_fSingleAareAverage),
                e = Math.abs(e * this.m_fSingleAareAverage),
                (t %= 360) > (e %= 360) && (t = e),
                this.m_fSlowAngleMin = t,
                this.m_fSlowAngleMax = e
            }
            OnRotate(t, e, i) {
                if (this.rewardScore = e,
                this.spinTimes = i,
                this.StopId = t - 1,
                this.m_eRotateState != c.e_None)
                    return;
                let s = this.GetTurntableArea;
                if (cc.log("====OnRotate==", s),
                -1 == s)
                    return;
                let n = this.GetTargetAngle(s);
                cc.log("====OnRotate===", n),
                this.m_TargetDirVec = this.GetDirVec(n),
                this.m_fSpeedNow = this.m_fSpeedMax,
                this.m_fTimer = 0,
                this.m_eRotateState = c.e_FirstNegaSlow
            }
            Random(t, e) {
                return Math.floor(Math.random() * (e - 1 - t) + t)
            }
            get GetTurntableArea() {
                cc.log("GetTurntableArea,this.m_iStopId", this.m_iStopId);
                let t = -1;
                if (this.m_dic_TurntableInitData.has(this.m_iStopId)) {
                    let e = this.m_dic_TurntableInitData.get(this.m_iStopId);
                    e.length > 0 && (t = e[this.Random(0, e.length)])
                }
                return t
            }
            GetTargetAngle(t) {
                let e = this.m_fSingleAareAverage * t;
                return cc.log("===GetTargetAngle===", e),
                e
            }
            GetDirVec(t) {
                let e = Math.cos(Math.PI * (t + this.m_pointOffsetAngle) / 180)
                  , i = Math.sin(Math.PI * (t + this.m_pointOffsetAngle) / 180);
                return new cc.Vec3(e,i,0)
            }
            FirstNegaSlowLogic() {
                this.m_fTimer += cc.director.getDeltaTime(),
                this.m_fTimer <= this.m_fFirstNegaTime ? (this.SetRototion(!0),
                this.m_fSpeedNow > this.m_fSpeedMin ? this.m_fSpeedNow -= 2 * this.m_fSpeedNow / 10 : this.m_fSpeedNow = this.m_fSpeedMin) : (this.m_fSpeedNow = this.m_fSpeedMin,
                this.m_fTimer = 0,
                this.m_eRotateState = c.e_Acc)
            }
            AccLogic() {
                this.SetRototion(!1),
                this.m_fSpeedNow < this.m_fSpeedMax ? this.m_fSpeedNow += 2 * this.m_fSpeedNow / 10 : (this.m_fSpeedNow = this.m_fSpeedMax,
                this.m_eRotateState = c.e_Uniform)
            }
            UniformLogic() {
                this.m_fTimer += cc.director.getDeltaTime(),
                this.m_fTimer < this.m_fUniformTime || this.GetAngle() < this.m_fSlowAngleMin || this.GetAngle() > this.m_fSlowAngleMax ? (this.SetRototion(!1),
                this.m_fSpeedNow < this.m_fSpeedMax && (this.m_fSpeedNow += 1,
                this.m_fSpeedNow > this.m_fSpeedMax && (this.m_fSpeedNow = this.m_fSpeedMax))) : (this.m_fSpeedNow = this.m_fSpeedMax,
                this.m_fTimer = 0,
                this.m_eRotateState = c.e_Slow)
            }
            SlowLogic() {
                this.m_fSpeedNow > this.m_fSpeedMin && (this.m_fSpeedNow -= .99 * this.m_fSpeedNow,
                this.m_fSpeedNow < this.m_fSpeedMin && (this.m_fSpeedNow = this.m_fSpeedMin)),
                this.GetAngle(),
                this.GetAngle() > this.m_fTrim ? this.SetRototion(!1) : (this.m_fSpeedNow = this.m_fSpeedMin,
                this.m_eRotateState = c.e_End)
            }
            EndNegaAccLogic() {
                cc.log("====EndNegaAccLogic==="),
                this.GetAngle() > 0 ? this.SetRototion(!0) : (cc.log("==EndNegaAccLogic==End==="),
                this.m_eRotateState = c.e_End)
            }
            GetAngle() {
                return this.CalAngle(this.m_TargetDirVec, this.m_TransTurntable.right)
            }
            CalAngle(t, e) {
                return 180 * cc.Vec3.angle(t, e) / Math.PI
            }
            SetRototion(t) {
                if (this.m_TransTurntable.angle < -360) {
                    let t = this.m_TransTurntable.angle % 360;
                    this.m_TransTurntable.angle = t
                }
                t ? this.m_TransTurntable.angle += this.m_fSpeedNow : this.m_TransTurntable.angle -= this.m_fSpeedNow
            }
            EndTurntable() {
                this.ShowSpinTimes();
                let t = this.GetTurntableArea
                  , e = this.GetTargetAngle(t)
                  , i = e - this.m_pointOffsetAngle;
                cc.log("====EndTurntable==", e, i),
                this.iPlazaBase.AddUserScore(this.rewardScore),
                this.plazaUserInfo.UpdataUserInfo(!1),
                this.winNode.active = !0,
                this.scheduleOnce(()=>{
                    this.showWinTip(),
                    this.spinTimes > 0 && (this.spinBtn.interactable = !0)
                }
                , 2)
            }
            showPanel(t=0) {
                this.Init(),
                this.node.active = !0,
                this.spinTimes = t,
                this.ShowSpinTimes(),
                this.spinTimes > 0 && (this.spinBtn.interactable = !0)
            }
            onSpinBtnClick() {
                this.spinTimes > 0 && (this.spinBtn.interactable = !1,
                this.iPlazaBase.sendWeelReward(),
                this.spinTimes--,
                this.ShowSpinTimes())
            }
            ShowSpinTimes() {
                this.spinLastNum.string = this.spinTimes + " SPIN"
            }
            showWinTip() {
                this.winTip.active = !0,
                this.winTipLabel.string = "You got  " + this.winTipString[this.m_iStopId] + "  reward"
            }
            onCloseWinTipBtn() {
                this.winTip.active = !1,
                this.winNode.active = !1
            }
            onWheelCloseBtn() {
                this.node.active = !1
            }
        }
        ;
        s([a(n.default)], r.prototype, "plazaUserInfo", void 0),
        r = s([o], r),
        i.default = r,
        cc._RF.pop()
    }
    , {
        "../PlazaUserInfo": "PlazaUserInfo"
    }]
}, {}, ["KeyBoardCtrl", "Login", "DonatoAmount", "GameRecord", "ModifyPassword", "PlazaGameButton", "PlazaGames", "SignCtrl", "Turntable", "Pay", "Plaza", "PlazaUserInfo", "LightMove"]);
