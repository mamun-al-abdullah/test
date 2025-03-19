var _iid = 0
  function iid() { //eg-"s0", run time incremental integer-id
    return ++_iid
  }


  var $_$_cidObj = {}
  function sid(namespaceStr) {
    var namespace = namespaceStr || "s"
    if (namespace.trim().length == 0) { namespace = "s" }
    namespace = namespace.trim()
    if ($_$_cidObj[namespace] != undefined) {
      $_$_cidObj[namespace] = $_$_cidObj[namespace] + 1
    } else {
      $_$_cidObj[namespace] = 0
    }
    return namespace + $_$_cidObj[namespace]
  }

  function cid(namespaceStr) {
    var namespace = namespaceStr || "s"
    if (namespace.trim().length == 0) { namespace = "s" }
    namespace = namespace.trim()
    if ($_$_cidObj[namespace] != undefined) {
      return namespace + $_$_cidObj[namespace]
    } else {
      return namespace + 0
    }
  }


  sid.reset = function (namespaceStr) { //eg-"s0"
    var namespace = namespaceStr || "s"
    if (namespace.trim().length == 0) { namespace = "s" }
    namespace = namespace.trim()
    if ($_$_cidObj[namespace] != undefined) {
      $_$_cidObj[namespace] = 0
    } else {
      $_$_cidObj[namespace] = 0
    }
    return namespace + $_$_cidObj[namespace]
  }


  function uid() {
    return new Date().getTime() + iid()
  }
  function usid() {
    return "s" + new Date().getTime() + iid()
  }

  function K(obj) { return Object.keys(obj) }

  function k(v) {
    if (v == undefined || v == null || v.constructor.name == "Function") {
      return (v + " is not a pure object")
    }
    if (v == "[object Math]") {
      return Object.getOwnPropertyNames(v)
    }
    setTimeout(() => c(v))
    if (v instanceof HTMLElement) {
      var elx = []
      elx = prot(Node).concat(prot(Element), prot(HTMLElement), prot(EventTarget)).reverse()
      if (v.constructor.name == "HTMLInputElement") {
        elx = elx.concat(prot(HTMLInputElement))
      }
      if (v.constructor.name == "HTMLTextAreaElement") {
        elx = elx.concat(prot(HTMLTextAreaElement))
      }
      return elx
    }
    var _arr = []
    if (v.constructor === Object) { _arr = Object.keys(v) }

    var _arrOwn = []
    if (![Array, Object, String].has(v.constructor)) {
      _arrOwn = Object.getOwnPropertyNames(v)
    }

    var _arrProto = Object.getOwnPropertyNames(Object.getPrototypeOf(v)).reverse()
    var _arrAll = _arr.concat(_arrOwn, _arrProto)
    return (_arrAll)

    function prot(ifc) {
      return Object.getOwnPropertyNames(ifc.prototype)
    }

  };


  function c(v) { console.log(v) };

  function a(v) { alert(v) };
  var w = window;
  function s(elm) {
    return (document.querySelector(elm) || document.querySelector("[" + elm + "]"))
  }

  function S(elm) {
    return document.querySelector(elm)
  }

  function sa(elms) {
    return document.querySelectorAll(elms)
  }


  var idlAnonFncLst = {};
  var db = {}
  db.setData = setData
  db.getData = getData
  db.getTags = getTags
  db.clearData = clearData
  db.clearDataAll = clearDataAll

  function setData(tag, value) {
    if (tag != undefined) { console.log(tag + " idl.setData " + JSON.stringify(value)) }
  }

  function getData(tag, callBack) {
    var callBackFunctionName;
    if (callBack.name == "") {
      var fnTag = "idlAnonFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
    } else {
      callBackFunctionName = callBack.name
    }
    if (tag != "") {
      console.log("idl.getData " + tag + " " + callBackFunctionName)
    }
  }

  function getTags(callBack) {
    var tag = "TagsAll"; var callBackFunctionName; if (callBack.name == "") {
      var fnTag = "idlAnonFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
    } else {
      callBackFunctionName = callBack.name
    }
    if (tag != "") {
      console.log("idl.getTagsAll " + callBackFunctionName)
    }
  }


  function clearData(tag) {
    if (tag != undefined) {
      console.log("idl.clearData " + tag)
    }
  }


  function clearDataAll() {
    console.log("idl.clearDataAll")
  }



  var fb = {};
  fb.setData = function (tag, value) {
    if (tag != undefined && tag != "") { console.log(tag + " idl.fb.setFbData " + JSON.stringify(value)) }
  }


  fb.getData = function (tag, callBack) {
    var callBackFunctionName;
    if (callBack.name == "") {
      var fnTag = "idlAnonFbFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
    } else {
      callBackFunctionName = callBack.name
    }
    if (tag != "") {
      console.log("idl.fb.getFbData " + tag + " " + callBackFunctionName)
    }
  }

  fb.getTags = function (callBack) {
    var tag = "FbTagsAll"; var callBackFunctionName; if (callBack.name == "") {
      var fnTag = "idlAnonFbFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
    } else {
      callBackFunctionName = callBack.name
    }
    if (tag != "") {
      console.log("idl.fb.getFbTagsAll " + callBackFunctionName)
    }
  }

  fb.clearData = function (tag) {
    if (tag != undefined) {
      console.log("idl.fb.clearFbData " + tag)
    }
  }

  fb.goOffline = function () { c("idl.fb.goOffline") }
  fb.goOnline = function () { c("idl.fb.goOnline") }

  fb.config = function (obj) {
    //{token,url,bucket}
    c(obj.token + ".idl.fb.config." + obj.url + ".idl.fb.config." + obj.bucket)
  }

  fb.token = function (token) { c("idl.fb.token." + token) }

  fb.url = function (url) { c("idl.fb.url." + url) }

  fb.bucket = function (bucket) { c("idl.fb.bucket." + bucket) }


  fb.ongetvalue = function (tag, value) {
    return null
  }

  fb.on = function (tag, value) {
    return null
  }

  fb.isSignedIn = function (callBack) {
    var tag = "sign"; var callBackFunctionName; if (callBack.name == "") {
      var fnTag = "idlAnonFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
    } else {
      callBackFunctionName = callBack.name
    }
    if (tag != "") {
      console.log("idl.fb.isSignedIn." + callBackFunctionName)
    }
  }


  fb.phoneNoSignIn = function (phoneNum) {
    c("idl.fb.phoneNoSignIn." + phoneNum)
  }

  fb.verifyPhoneCode = function (phoneCode) {
    c("idl.fb.verifyPhoneCode." + phoneCode)
  }

  fb.logOut = function () {
    c("idl.fb.logOut.")
  }

  fb.onLoginSuccess = function (obj) {
    return null
  }




  function launchApp(packageName) {
    console.log("idl.launchApp " + packageName)
  }


  function statusBar(bol) {
    console.log("idl.statusBarShow " + bol)
  }
  function statusBarLightIcon(bol) {
    console.log("idl.statusBarLightIcon " + bol)
  }

  function statusBarTransparentBgColor(transparentHex) {
    console.log("idl.screen.statusbar.transparentHEXColor." + transparentHex)
  }

  function transparentBg() {
    c("idl.screen.statusbar.transparentBg.")
  }

  function statusBarColor(hex) {
    console.log("idl.statusBarColor " + hex)
  }

  function statusBarHslColor(bgColor) {
    var h, s, l = ""
    var hsl = clr(bgColor, true)
    h = hsl.split(",")[0].split("(")[1] * 1
    s = hsl.split("%,")[0].split(",")[1] * 1
    l = l = hsl.split("%,")[1] * 1

    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
      // convert to Hex and prefix "0" if needed
    };
    var hex = `#${f(0)}${f(8)}${f(4)}`;
    console.log("idl.statusBarColor " + hex)
    return hex
  }


  function onAppResume() {
    return null
  }


  function showNavBar(bool) {
    c("idl.screen.showNavBar." + bool)
  }

  function hideKeyboard() {
    c("idl.screen.hideKeyboard.")
  }

  function keepScreenOn(bool) {
    c("idl.screen.keepScreenOn." + bool)
  }

  function minimize() {
    c("idl.screen.minimize.")
  }
  function $O(prop, cbGet, cbSet) {
    Object.defineProperty(Object.prototype, prop,
      { get: cbGet, set: cbSet })
  }

  function $A(prop, cbGet, cbSet) {
    Object.defineProperty(Array.prototype, prop,
      { get: cbGet, set: cbSet })
    Object.defineProperty(NodeList.prototype, prop,
      { get: cbGet, set: cbSet })
  }

  function $S(prop, cbGet, cbSet) {
    Object.defineProperty(String.prototype, prop,
      { get: cbGet, set: cbSet })
  }

  function $N(prop, cbGet, cbSet) {
    Object.defineProperty(Number.prototype, prop,
      { get: cbGet, set: cbSet })
  }

  function $H(prop, cbGet, cbSet) {
    Object.defineProperty(HTMLElement.prototype, prop,
      { get: cbGet, set: cbSet })
    Object.defineProperty(SVGElement.prototype, prop,
      { get: cbGet, set: cbSet })
  }

  $O("js", function () { return JSON.stringify(this) })
  $O("jsc", function () { c(JSON.stringify(this, null, 4)) })
  $O("jsa", function () { a(JSON.stringify(this, null, 4)) })
  $O("jsm", function () { os.message(JSON.stringify(this, null, 4)) })
  $O("jsn", function () { os.alert(JSON.stringify(this, null, 4)) })

  $O("jp", function () { return JSON.parse(this) })
  //$O("m", function (){os.message(this)})
  //$O("a", function (){os.alert(this)})
  //$O("A", function (){alert(this)})
  $O("copy", function () { return JSON.parse(JSON.stringify(this)) })

  //

  $S("l", function () { return this.length })

  $A("l", function () { return this.length })

  $A("last", function () { return this[this.length - 1] },
    function (val) { this[this.length - 1] = val })

  $A("secondLast", function () { return this[this.length - 2] },
    function (val) { this[this.length - 2] = val })


  function $Af(fnName, fnDef) {
    Array.prototype[fnName] = fnDef
  }
  function $Hf(fnName, fnDef) {
    HTMLElement.prototype[fnName] = fnDef;
    SVGElement.prototype[fnName] = fnDef
  }

  $Af("Has", function (strOrNum) {
    if (this.indexOf(strOrNum) != -1) {
      return true
    }
    return false
  })

  $Af("has", function (strPart) {
    for (var i = 0; i < this.length; i++) {
      if (typeof (this[i]) != "string") {
        this[i] = this[i].toString()
      }
      if (this[i].indexOf(strPart) != -1) {
        return true
      }
    }
    return false
  })

  $Af("indOf", function (strPart) {
    for (var i = 0; i < this.length; i++) {
      if (typeof (this[i]) != "string") {
        this[i] = this[i].toString()
      }
      if (this[i].indexOf(strPart) != -1) {
        return i
      }
    }
    return -1
  })

  $Af("ins", function (index, valueToInsert) {
    this.splice(index, 0, valueToInsert)
  })

  $Af("rep", function (index, valueToReplace) {
    this.splice(index, 1, valueToReplace)
  })

  $Af("rm", function (index) {
    this.splice(index, 1)
  })

  $O("isArr", function () {
    return Array.isArray(this)
  })

  $O("isNum", function () {
    return this.constructor.name == "Number"
  })

  $O("isStr", function () {
    return this.constructor.name == "String"
  })

  $O("isEl", function () {
    return this instanceof Element || this instanceof HTMLDocument
  })


  $Hf("ats", function (attrName, attrValue) {
    this.setAttribute(attrName, attrValue || "")
    reRenderHtml(this)
    return this
  })
  $Hf("atg", function (attrName) {
    return this.getAttribute(attrName)
  })
  $Hf("atr", function (attrName, attrValue) {
    this.removeAttribute(attrName, attrValue || "")
    reRenderHtml(this)
    return this
  })
  $Hf("att", function (attrName) {
    this.style = ""
    this.toggleAttribute(attrName)
    reRenderHtml(this)
    return this
  })
  $Hf("ath", function (attrName) {
    return this.hasAttribute(attrName)
  })

  $H("cln", function () {
    return this.className
  },
    function (classStr) {
      this.className = classStr
    })

  $Hf("cla", function (classStr) {
    this.classList.add(classStr)
    return this
  })
  $Hf("clr", function (classStr) {
    this.classList.remove(classStr)
    return this
  })
  $Hf("clt", function (classStr) {
    this.classList.toggle(classStr)
    return this
  })
  $Hf("clh", function (classStr) {
    return this.className.indexOf(classStr) != -1
  })

  $H("ih", function () {
    return this.innerHTML
  },
    function (htmlStr) {
      this.innerHTML = htmlStr
      reRenderHtmlChildren(this)
    })

  $H("oh", function () {
    return this.outerHTML
  },
    function (htmlStr) {
      var pel = this.parentElement
      this.outerHTML = htmlStr
      reRenderHtmlChildren(pel)
    })



  $H("it", function () {
    return this.innerText
  },
    function (txtStr) {
      this.innerText = txtStr
    })

  $H("tc", function () {
    return this.textContent
  },
    function (txtStr) {
      this.textContent = txtStr
    })

  $H("C", function () {
    return function (fn) {
      this.onclick = fn
    }
  },
    function (fn) {
      this.onclick = fn
    })


  $H("c", function () {
    return function (fn) {
      this.addEventListener("click", fn)
    }
  },
    function (fn) {
      this.addEventListener("click", fn)
    })

  s("body").c = function () {
    var t = event.target
    if (t.ath("fn")) {
      var fnStr = t.atg("fn")
      new Function(fnStr)()
    }
  }

  ///
  function $s(obj, key, returnFn, setFn) {
    //state handler
    obj[key] = ""
    Object.defineProperty(obj, key,
      { get: returnFn, set: setFn })
  }

  ///
  function $(obj, key, el) {
    //state-element syncer
    $s(obj, key, function () { return el && el.innerHTML },
      v => el && (el.innerHTML = v))
  }

  ///
  function tag(targetTagName) {
    return (event.target.tagName == targetTagName.toUpperCase())
  }

  ///
  function tf(elm, transformStr) {
    elm.style.webkitTransform = transformStr
  }

  ///
  function cre(html, css) {
    var html = html || ""
    var css = "<style>" + css + "</style>" || ""
    document.body.ih += html + css
  }

  ///
  function crt(elmStr, parentElm_se, txt) {
    var txt = txt || "";
    var el = document.createElement(elmStr.toUpperCase())

    if (parentElm_se == null) return c("parentElement is not found")

    var parentElm = parentElm_se.isEl ? parentElm_se : parentElm_se ? s(parentElm_se) : document.body

    if (!parentElm) return c("parentElement is not found")

    el.appendChild(document.createTextNode(txt));
    parentElm.appendChild(el)
  }

  ///
  function crh(elmStr, parentElm_se, html) {
    var html = html || ""

    if (parentElm_se == null) return c("parentElement is not found")

    var parentElm = parentElm_se.isEl ? parentElm_se : parentElm_se ? s(parentElm_se) : document.body

    if (!parentElm) return c("parentElement is not found")

    var el = document.createElement(elmStr.toUpperCase())
    el.ih = html;
    parentElm.appendChild(el)
  }

  ///
  function cra(parentElm_se, txt) {
    if (parentElm_se == null) return c("parentElement is not found")

    var parentElm = parentElm_se.isEl ? parentElm_se : parentElm_se ? s(parentElm_se) : document.body

    if (!parentElm) return c("parentElement is not found")

    var txt = txt || ""
    parentElm.append(txt)
  }

  ///
  function cri(targetElm_se, html, position) {
    //position : 1/2/3/4
    if (targetElm_se == null) return c("targetElement is not found")

    var targetElm = targetElm_se.isEl ? targetElm_se : targetElm_se ? s(targetElm_se) : document.body

    if (!targetElm) return c("targetElement is not found")

    var html = html || ""
    var Position = position || 3
    var pos = {
      pos1: "beforebegin",
      pos2: "afterbegin",
      pos3: "beforeend",
      pos4: "afterend"
    }
    targetElm.insertAdjacentHTML(pos["pos" + Position], html);
    reRenderHtmlChildren(targetElm.parentElement)
  }

  ///
  function remove(selectorStr, css, delay) {
    if (selectorStr) {
      var d = delay || 0;
      if (d > 0) {
        var str = "<style>" + selectorStr + "{transition:" + d + "ms;" + css + "}" +
          selectorStr + " ~*{transition : " + d + "ms;\
transform :\
translatey(-"+ (s(selectorStr).clientHeight + 5) + "px)}\
</style>";
        var elm = sid()
        crh(elm, "", str)
        //c(str)
        setTimeout(function () {
          if (s(selectorStr)) {
            s(selectorStr).remove();
          }
          s(elm).remove()
        }, d)
      } else {
        if (s(selectorStr)) {
          s(selectorStr).remove()
        }
      }
    }
  }

  ///
  var _i = function (arrOfObj, id) {
    var ind = -1;
    arrOfObj.forEach((item, index) => {
      if (item.id == id) {
        ind = index
        return
      }
    })
    return ind
  }

  function getStl(oElm, css3Prop) {
    var strValue = "";
    if (window.getComputedStyle) {
      strValue = getComputedStyle(oElm).getPropertyValue(css3Prop)
    } else if (oElm.currentStyle) {
      try {
        strValue = oElm.currentStyle[css3Prop]
      } catch (e) { }
    }
    return strValue
  }

  //fn get node index
  function ind(currentNode) {
    var child = currentNode;
    var parent = child.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, child);
    return index;
  }

  //html controller
  var htc = {
    p(t, v) { t.style.padding = pc(v) },
    m(t, v) { t.style.margin = pc(v) },
    h(t, v) { t.style.height = pc(v) },
    w(t, v) { t.style.width = pc(v) },
    s(t, v) { this.h(t, v); this.w(t, v) },
    l(t, v) { t.style.left = pc(v) },
    r(t, v) { t.style.right = pc(v) },
    t(t, v) { t.style.top = pc(v) },
    b(t, v) { t.style.bottom = pc(v) },
    i(t, v) { this.l(t, v); this.r(t, v); this.t(t, v); this.b(t, v) },
    c(t, v) { t.style.borderRadius = pc(v) },
    f(t, v) { t.style.fontSize = pc(v) },
    o(t, v) { t.style.opacity = v / 10 },
    z(t, v) { t.style.zIndex = v },

    fg(t, v) { t.style.flexGrow = v },
    fs(t, v) { t.style.flexShrink = v },
    fb(t, v) { t.style.flexBasis = pc(v) },

    pt(t, v) { t.style.paddingTop = pc(v) },
    pb(t, v) { t.style.paddingBottom = pc(v) },
    pl(t, v) { t.style.paddingLeft = pc(v) },
    pr(t, v) { t.style.paddingRight = pc(v) },
    px(t, v) { this.pl(t, v); this.pr(t, v) },
    py(t, v) { this.pt(t, v); this.pb(t, v) },

    mt(t, v) { t.style.marginTop = pc(v) },
    mb(t, v) { t.style.marginBottom = pc(v) },
    ml(t, v) { t.style.marginLeft = pc(v) },
    mr(t, v) { t.style.marginRight = pc(v) },
    mx(t, v) { this.ml(t, v); this.mr(t, v) },
    my(t, v) { this.mt(t, v); this.mb(t, v) },

    hm(t, v) { t.style.maxHeight = pc(v) },
    hn(t, v) { t.style.minHeight = pc(v) },
    wm(t, v) { t.style.maxWidth = pc(v) },
    wn(t, v) { t.style.minWidth = pc(v) },

    ra(t, v) { t.style.border = pc(v) + " solid #ccc" },
    rt(t, v) { t.style.borderTop = pc(v) + " solid #ccc" },
    rb(t, v) { t.style.borderBottom = pc(v) + " solid #ccc" },
    rl(t, v) { t.style.borderLeft = pc(v) + " solid #ccc" },
    rr(t, v) { t.style.borderRight = pc(v) + " solid #ccc" },

    cm(t, v) { t.style.borderTopLeftRadius = pc(v) },
    cn(t, v) { t.style.borderTopRightRadius = pc(v) },
    co(t, v) { t.style.borderBottomRightRadius = pc(v) },
    cp(t, v) { t.style.borderBottomLeftRadius = pc(v) },

    bf(t, v) { t.style.backdropFilter = "blur(" + v + "px)" },

    bw(t, v) { t.style.backgroundColor = "rgba(255,255,255," + v / 10 + ")" },
    bb(t, v) { t.style.backgroundColor = "rgba(0,0,0," + v / 10 + ")" },
    cw(t, v) { t.style.color = "rgba(255,255,255," + v / 10 + ")" },
    cb(t, v) { t.style.color = "rgba(0,0,0," + v / 10 + ")" },

    tn(t, v) { t.style.transitionDuration = v / 10 + "s" },
    td(t, v) { t.style.transitionDelay = v / 10 + "s" },

    tr(t, v) { t.style.transform = "rotate(" + v + "deg" },
    tx(t, v) { t.style.transform = "translatex(" + pc(v) + ")" },
    ty(t, v) { t.style.transform = "translatey(" + pc(v) + ")" },
    tt(t, v) {
      t.style.transform = "translate(" + pc(v.split('_')[0]) + "," + pc(v.split('_')[1]) + ")"
    },
    ts(t, v) { t.style.transform = "scale(" + v / 10 + ")" },
    ta(t, v) { t.style.transform = "skewx(" + v + "deg" },
    tb(t, v) { t.style.transform = "skewy(" + v + "deg" },

    ad(t, v) { t.style.animationDuration = v / 10 + "s" },
    aw(t, v) { t.style.animationDelay = v / 10 + "s" },
    bg(t, v) { t.style.backgroundColor = clr(v) },
    cl(t, v) { t.style.color = clr(v) },
    da(t, v) { t.style.borderColor = clr(v) },
    dt(t, v) { t.style.borderTopColor = clr(v) },
    db(t, v) { t.style.borderBottomColor = clr(v) },
    dl(t, v) { t.style.borderLeftColor = clr(v) },
    dr(t, v) { t.style.borderRightColor = clr(v) },
  }

  function pc(v) {
    if (v.slice(-1) == "p") return v.slice(0, -1) + "%"
    return v + "px"
  }

  function reRenderHtmlChildren(parentElm = "body") {
    var els
    if (typeof (parentElm) != "string") {
      els = parentElm.querySelectorAll("*")
    } else {
      els = sa(parentElm + " *")
    }

    for (var i = 0; i < els.length; i++) {
      reRenderHtml(els[i])
    }
  }

  function reRenderHtml(el) {
    var atrs = el.attributes

    if (atrs.length == 0) return

    //s("[ctr]").style = ""

    for (var i = 0; i < atrs.length; i++) {
      var nm = atrs[i].name
      ////
      if (num(1)) {
        htc[nm[0]](el, nm.slice(1))
      } else if (num(2)) {
        var fn = nm[0] + nm[1]
        if (!["in", "bs", "bg", "cl"].Has(fn)) {
          htc[fn](el, nm.slice(2))
        }
      } else {
        var fn = nm[0] + nm[1]
        if (["bg", "cl", "da", "dt", "db", "dl", "dr"].Has(fn)) {
          htc[fn](el, nm.slice(2))
        }
      }
      ////
    }
    function num(index) {
      return (!isNaN(nm[index]) || nm[index] == "-" || nm[index] == ".")
    }
  }

  //setTimeout
  function af(millisecond, cb) {
    var tnm = 1
    if (cb) {
      tnm = setTimeout(cb, millisecond)
    } else {
      tnm = setTimeout(millisecond, 0)
    }
    return tnm
  }

  //setInterval
  function aa(millisecond, cb) {
    var tnm = 1
    if (cb) {
      tnm = setInterval(cb, millisecond)
    } else {
      tnm = setInterval(millisecond, 0)
    }
    return tnm
  }


  function clr(clrCode, bol) {
    var addedIndex = 0
    if (bol == undefined) {
      addedIndex = 0
    } else {
      addedIndex = 2
    }
    var ab = "abcdefghijklmnopqrstuvwxyz"
    var h = Math.round(ab.split("").indexOf(clrCode[0 + addedIndex]) * 14.4)
    var s = Math.round(ab.split("").indexOf(clrCode[1 + addedIndex]) * 4)
    var l = Math.round(ab.split("").indexOf(clrCode[2 + addedIndex]) * 4)
    var a = ab.split("").indexOf(clrCode[3 + addedIndex]) * 0.04

    s < 0 && (s = 50)
    l < 0 && (l = 50)
    a < 0 && (a = 1)

    var str = `hsla(${h},${s}%,${l}%,${a})`
    return str
  }

  var os = {
    alert: "",
    message: "",
    screen: {
      hideKeyboard,
      showNavBar,
      onAppResume,
      keepScreenOn,
      minimize,
    },
    render: reRenderHtmlChildren,
    fileman: {},
    activity: "",
    viewport: "",
    ripple: "",
    statusBar: {
      show: statusBar,
      transparentBgColor: statusBarTransparentBgColor,
      transparentBg: transparentBg,
      color: statusBarColor,
      hslColor: statusBarHslColor,
      lightIcon: statusBarLightIcon
    },
    abstracts: {}
  };

  os.closeApplication = function () {
    console.log("idl.os.closeApplication")
  }
  os.onbackpress = function () {
    //to close application on backpress hardware button;
    this.closeApplication();
    //alert("বেক ক্লিক করা হয়েছে");
    //launchApp("ru.irk.ang.balsan.shortcutled")
  }
  os.api = {
    battery: {
      onchange: function (obj) {
        return obj
      }
    }
  }
  os.vibrate = function (duration) {
    var d = duration || 100
    c("idl.os.sensors.vibrator.vibrate" + d)
  }
  os.clipboard = {
    paste: function (callBack) {
      var tag = "pasted"
      var callBackFunctionName;
      if (callBack.name == "") {
        var fnTag = "idlAnonFnc" + tag; idlAnonFncLst[fnTag] = callBack; callBackFunctionName = "idlAnonFncLst." + fnTag
      } else {
        callBackFunctionName = callBack.name
      }
      if (tag != "") {
        console.log("idl.clipboard.paste " + callBackFunctionName)
      }
    },
    copy: function (data) {
      c("idl.clipboard.copy" + data);
    }
  }


  os.activity = {
    start: function () {
      c("idl.activity.start" + JSON.stringify(this))
      this.action = ""
      this.class = ""
      this.package = ""
      this.dataType = ""
      this.dataUri = ""
      this.extraKey = ""
      this.extraValue = ""
      this.extras = ""
      this.resultName = ""
    },
    onafteractivity: function (txt) {
      return null
    },
    action: "",
    class: "",
    package: "",
    dataType: "",
    dataUri: "",
    extraKey: "",
    extraValue: "",
    extras: "",
    resultName: "",
  }

  $O("isScrPortrait", () => w.matchMedia("(orientation: portrait)").matches)

  $O("isAppPortrait", () => w.screen.orientation.type.replace("-primary", "") == "portrait" ? true : false)


  os.api = {
    battery: {
      onchange: function (obj) {
        return obj
      }
    }
  }
  os.alert = function (str) {
    var x = document.createElement("ALERT");
    x.id = "osAlertComp";
    x.appendChild(document.createTextNode(str));
    document.body.appendChild(x);
    setTimeout(function () {
      document.body.removeChild(x)
    }, 3000);
  }
  os.message = function (msgHtml) {
    if (typeof (_p) == "undefined") {
      var el = document.createElement("DIV");
      el.id = "_p";
      el.ih = "<div id='_w'><div id='_h'>Message</div><div id='_m'></div><div id='_b'><div id='_b_back'>Back</div><div id='_b_ok'>Ok</div></div></div>";
      document.body.appendChild(el);
      _b_back.onclick = closeModal;
      _b_ok.onclick = closeModal;
      _p.style.display = "flex";
      _m.ih = msgHtml;
    }
  }

  function closeModal() {
    _p.style.webkitAnimation = "_p_anim_close 0.5s forwards";
    _w.style.webkitAnimation = "_w_anim_close 0.5s forwards";
    setTimeout(function () {
      if (typeof (_p) != "undefined") {
        _p.remove();
      }
    }, 500)
  }
  if (!os.abstracts) { os.abstracts = {} }
  os.abstracts.fileman = {}

  os.abstracts.fileman.fn = function () {
    var img = s("[filePickerInput]").files[0]
    if (img) {
      var url = URL.createObjectURL(img)
      os.abstracts.fileman.url = url
      fs.onpick(url)
    }
  }

  os.fileman = function () {
    return {
      pick, onpick, setData, getData
    }

    function pick() {
      if (!s("filePickerInput")) {
        cri("", `<input style="display: none" filePickerInput type="file" oninput=os.abstracts.fileman.fn() accept="image/gif, image/jpeg, image/png">`)
      }
      s("[filePickerInput]").click()
    }

    function onpick(url) {
      return url
    }

    function setData(tagName, srcElName, method = "image/jpeg") {
      if (!tagName) {
        return os.alert("tag name is required")
      }

      if (!s("filePickerCanvas")) {
        cri("", `<canvas style="display: none" filePickerCanvas>
  </canvas>`)
      }

      var img = s(srcElName);
      if (img.tagName != "IMG") {
        if (!s("filePickerImg")) {
          cri("", `<img src="" style="display: none" filePickerImg>`)
        }
        img = s("filePickerImg")
      }
      img.src = os.abstracts.fileman.url
      if (img.src.indexOf("undefined") != -1) {
        os.alert("image is not loaded")
        return
      }
      var cnv = s("filePickerCanvas");
      cnv.width = img.naturalWidth;
      cnv.height = img.naturalHeight;
      var ctx = cnv.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var scl = window.innerWidth / cnv.width
      cnv.style.transform = "scale(" + scl + ")"
      cnv.style.transformOrigin = "0 0"
      var imgData = cnv.toDataURL(method)
      db.setData(tagName, imgData)
    }

    function getData(tagName, fn) {
      if (!tagName || !fn) {
        return os.alert("tag name and src element is required")
      }
      db.getData(tagName, fn)
    }
  }

  os.random = function (min, max) {
    if (!min || !max) {
      return Math.random()
    }
    if ((min >= 0) && (max >= 0)) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      console.log("invoke os.random function with these two arguments : \nmin and max");
      return "";
    }
  }
  var _v_scale = 1.0;
  os.viewport = function () {
    if (typeof (_v_p) == "undefined") {
      var el = document.createElement("DIV");
      el.id = "_v_p";
      var style = "<style>\
#_v_p{\
position:fixed;top:0;bottom:0;left:0;right:0;display:flex;\
justify-content:center;align-items:flex-start;overflow: hidden;\
animation: _v_pAnimaOn 0.5s;pointer-events:none; \
display: none;z-index:999999999}\
@keyframes _v_pAnimaOn{\
70%{opacity:1}\
from{opacity: 0}\
}\
@keyframes _v_p_v_anim_v_close{\
50%{opacity:1}\
to{opacity: 0;}\
}\
#_v_w{\
pointer-events: auto;\
transform-origin: top;\
background:#fff;color:#444;height:70px;overflow :hidden;\
width: 280px;overflow: hidden;border-radius: 5px;display:flex;\
flex-wrap: wrap;box-shadow: 0 0 10px rgba(0,0,0,0.2);\
animation:_v_wAnimaWrapOn 0.5s\
}\
@keyframes _v_wAnimaWrapOn{\
from{opacity: 0;transform: translatey(-100px)}\
50%{opacity: 1;transform: translatey(10px)}\
}\
@keyframes _v_w_v_anim_v_close{\
from{opacity: 1}\
50%{opacity: 1;transform: translatey(10px)}\
to{opacity: 0;transform: translatey(-100px)}\
}\
#_v_m{\
width:280px;padding: 15px;font-size: 1.2em;margin-top:5px;\
display:flex;flex-wrap: wrap;justify-content:center;\
font-size:1em;color:#888;\
}\
#_v_m>div{\
border:1px solid #eee;margin:3px;padding:5px;border-radius: 50px;\
}\
#_v_m>#_v_b_v_close{color:tomato;position:absolute; right:-10px;\ top:-10px;border-radius: 0 0 0 30px}\
#_v_m>#_v_b_v_info {position:absolute;left:0;top:-6px;border:none;\
padding:5px 5px 11px 5px}\
</style>";


      el.innerHTML = "<div id='_v_w'><div id='_v_m'></div></div>" + style;
      document.body.insertAdjacentElement("afterend", el);
      _v_p.style.display = "flex";
      _v_m.innerHTML = '<div class="mt"\ onclick=osViewport(this,1)>phone_android</div>\
<div class="mt" onclick=osViewport(this,0.912)>tablet</div>\
<div class="mt" onclick=osViewport(this,0.513)>tablet</div>\
<div class="mt" onclick=osViewport(this,0.639) >desktop_windows</div>\
<div class="mt" onclick=osViewport(this,0.3595)>desktop_windows</div>\
<div class="mt" id="_v_b_v_close">close</div>\
<div id="_v_b_v_info">screen info</div>';

      _v_w.style.webkitTransform = "scale(" + (1 / _v_scale) + ")";
      _v_b_v_close.onclick = close_v_Modal;
      _v_b_v_info.innerHTML = "w: " + window.innerWidth + "&nbsp &nbsp h: " + window.innerHeight
    }
  }

  function close_v_Modal() {
    _v_p.style.webkitAnimation = "_v_p_v_anim_v_close 0.5s forwards";
    _v_w.style.webkitAnimation = "_v_w_v_anim_v_close 0.5s forwards";
    setTimeout(function () {
      if (typeof (_v_p) != "undefined") {
        _v_p.remove();
      }
    }, 500)
  }

  function osViewport(that, scale) {
    _v_scale = scale;

    that.innerHTML = '<meta name="viewport" content= "width=\
device-width,initial-scale='+ scale + ', user-scalable=no">' + that.innerHTML;
    _v_w.style.webkitTransform = "scale(" + (1 / scale) + ")";
    _v_b_v_info.innerHTML = "w: " + window.innerWidth + "&nbsp &nbsp h: " + window.innerHeight
  }
  os.ripple = function () {
    var waves = document.querySelectorAll('[w]');
    waves.forEach(function (wave, index) {
      wave.addEventListener('click', function (e) {
        var button = this,
          wave = document.createElement('ripple'),
          id = 'wave-' + new Date().getTime();
        wave.setAttribute('id', id);
        wave.setAttribute('class', 'wave');
        wave.style.left = e.offsetX + 'px';
        wave.style.top = e.offsetY + 'px';
        button.appendChild(wave);
        setTimeout(function () {
          wave.classList.add('is-active');
        }, 0);
        wave.addEventListener('transitionend', function (e) {
          if (button.contains(this)) {
            button.removeChild(this);
          }
        }, false);
      }, false);
    });
  }

  /*
  💥 v1.0
  1. add protos.js
  2. add utility.js
  3. add docs.js
  4. add cid in index.js
  5. add sid(namespace<optional)
  6. add sid.reset(namespace<optional)
  
  💥 v2.0
  1. firebase phone auth
  2. statusbar transparency
  3. navbar toggle
  4. hide keyboard function
  6. onclick proto >> C
  7. addEventListener> click >> c
  
  💥 v3.0
  1. tiny library added
  2. array and string method for length >> l
  3. setTimeout fn >> af
  4. setInterval fn >> aa
  5. html method >> isEl
  6. os.random without arguments
  7. fn attribute onbodyclick run fnValues as a function
  8. os.screen.keepScreenOn added
  9. os.screen.minimize added
  */