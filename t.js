 
const lb = {
//all the library methods should be linked there.
}

function K(obj){return Object.keys(obj)}

function k(v){
if(v==undefined||v==null||v.constructor.name=="Function"){
return (v +" is not a pure object")
}
if(v == "[object Math]"){
return Object.getOwnPropertyNames(v)
}
//setTimeout(()=>c(v))
if(v instanceof HTMLElement){
var elx = []
elx = prot(Node).concat(prot(Element), prot(HTMLElement),prot(EventTarget)).reverse()
if(v.constructor.name == "HTMLInputElement"){
elx = elx.concat(prot(HTMLInputElement))}
if(v.constructor.name == "HTMLTextAreaElement"){
elx = elx.concat(prot(HTMLTextAreaElement))}
return elx
}
var _arr = []
if(v.constructor === Object){_arr = Object.keys(v)}

var _arrOwn = []
if(![Array, Object, String].has(v.constructor)){
_arrOwn = Object.getOwnPropertyNames(v)}

var _arrProto = Object.getOwnPropertyNames(Object.getPrototypeOf(v)).reverse()
var _arrAll = _arr.concat(_arrOwn,_arrProto)
return(_arrAll)

function prot(ifc){
return Object.getOwnPropertyNames(ifc.prototype)}

};


const c = console.log;

function a(v){alert(v)};
var w = window;
function s(elm){
return (document.querySelector(elm) || document.querySelector("[" + elm + "]"))
}


function s(elm){
return (document.querySelector(elm) || document.querySelector("[" + elm + "]"))
}

function S(elm){
return document.querySelector(elm)
}

function sa(elms){
return document.querySelectorAll(elms)
}
function $O(prop, cbGet, cbSet){
Object.defineProperty(Object.prototype, prop,
{get : cbGet, set : cbSet})}

function $A(prop, cbGet, cbSet){
Object.defineProperty(Array.prototype, prop,
{get : cbGet, set : cbSet})
Object.defineProperty(NodeList.prototype, prop,
{get : cbGet, set : cbSet})}

function $S(prop, cbGet, cbSet){
Object.defineProperty(String.prototype, prop,
{get : cbGet, set : cbSet})}

function $N(prop, cbGet, cbSet){
Object.defineProperty(Number.prototype, prop,
{get : cbGet, set : cbSet})}

function $H(prop, cbGet, cbSet){
Object.defineProperty(HTMLElement.prototype, prop,
{get : cbGet, set : cbSet})
Object.defineProperty(SVGElement.prototype, prop,
{get : cbGet, set : cbSet})
}

$O("js", function (){return JSON.stringify(this)})
$O("jsc", function (){console.log(JSON.stringify(this,null,4))})
$O("jsa", function (){a(JSON.stringify(this,null,4))})
$O("jsm", function (){os.message(JSON.stringify(this,null,4))})
$O("jsn", function (){os.alert(JSON.stringify(this,null,4))})

$O("jp", function (){return JSON.parse(this)})
//$O("m", function (){os.message(this)})
//$O("a", function (){os.alert(this)})
//$O("A", function (){alert(this)})
$O("copy", function (){return JSON.parse(JSON.stringify(this))})

//

$S("l", function (){return this.length})

$A("l", function (){return this.length})

$A("last", function (){return this[this.length -1 ]},
function (val){this[this.length -1 ] = val})

$A("secondLast", function (){return this[this.length -2 ]},
function (val){this[this.length -2 ] = val})


function $Af(fnName, fnDef){
Array.prototype[fnName] = fnDef
}
function $Hf(fnName, fnDef){
HTMLElement.prototype[fnName] = fnDef;
SVGElement.prototype[fnName] = fnDef
}

$Af("Has", function (strOrNum){
if(this.indexOf(strOrNum) != -1){
return true
}
return false
})

$Af("has", function (strPart){
for (var i=0; i<this.length; i++){
if(typeof(this[i]) != "string"){
this[i] = this[i].toString()
}
if(this[i].indexOf(strPart) != -1){
return true
}
}
return false
})

$Af("ind", function (srtOrNum){
return this.indexOf(srtOrNum)
})

$Af("indOf", function (strPart){
for (var i=0; i<this.length; i++){
if(typeof(this[i]) != "string"){
this[i] = this[i].toString()
}
if(this[i].indexOf(strPart) != -1){
return i
}
}
return -1
})

$Af("ins", function (index, valueToInsert){
this.splice(index,0, valueToInsert)
})

$Af("rep", function (index, valueToReplace){
this.splice(index,1, valueToReplace)
})

$Af("rm", function (index){
this.splice(index,1)
})

$Af("tog", function (srtOrNum){
if(this.Has(srtOrNum)){
this.rm(this.ind(srtOrNum))
}else{
this.push(srtOrNum)
}
})

$O("isArr", function (){
return Array.isArray(this)
})

$O("isNum", function (){
return this.constructor.name == "Number"
})

$O("isStr", function (){
return this.constructor.name == "String"
})

$O("isEl", function (){
return this instanceof Element || this instanceof HTMLDocument
})


$Hf("ats", function (attrName, attrValue){
this.setAttribute(attrName,attrValue||"")
reRenderHtml(this)
return this
})
$Hf("atg", function (attrName){
return this.getAttribute(attrName)
})
$Hf("atr", function (attrName, attrValue){
this.removeAttribute(attrName,attrValue||"")
reRenderHtml(this)
return this
})
$Hf("att", function (attrName){
this.style = ""
this.toggleAttribute(attrName)
reRenderHtml(this)
return this
})
$Hf("ath", function (attrName){
return this.hasAttribute(attrName)
})

$H("cln", function (){
return this.className
},
function (classStr){
this.className = classStr
})

$Hf("cla", function (classStr){
this.classList.add(classStr)
return this
})
$Hf("clr", function (classStr){
this.classList.remove(classStr)
return this
})
$Hf("clt", function (classStr){
this.classList.toggle(classStr)
return this
})
$Hf("clh", function (classStr){
return this.className.indexOf(classStr) != -1
})

$H("ih", function (){
return this.innerHTML
},
function (htmlStr){
this.innerHTML = htmlStr
reRenderHtmlChildren(this)
})

$H("oh", function (){
return this.outerHTML
},
function (htmlStr){
var pel = this.parentElement
this.outerHTML = htmlStr
reRenderHtmlChildren(pel)
})



$H("it", function (){
return this.innerText
},
function (txtStr){
this.innerText = txtStr
})

$H("tc", function (){
return this.textContent
},
function (txtStr){
this.textContent = txtStr
})

$H("C", function (){
return function (fn){
this.onclick = fn
}
},
function (fn){
this.onclick = fn
})


$H("c", function (){
return function (fn){
this.addEventListener("click", fn)
}
},
function (fn){
this.addEventListener("click", fn)
})

//stl >> style library
const stl = {}

//html controller
var htc = {
p(t,v){t.style.padding = pc(v)},
m(t,v){t.style.margin = pc(v)},
h(t,v){t.style.height = pc(v)},
w(t,v){t.style.width = pc(v)},
s(t,v){this.h(t,v);this.w(t,v)},
l(t,v){t.style.left = pc(v)},
r(t,v){t.style.right = pc(v)},
t(t,v){t.style.top = pc(v)},
b(t,v){t.style.bottom = pc(v)},
i(t,v){this.l(t,v);this.r(t,v);this.t(t,v);this.b(t,v)},
c(t,v){t.style.borderRadius = pc(v)},
f(t,v){t.style.fontSize = pc(v)},
o(t,v){t.style.opacity = v/10},
z(t,v){t.style.zIndex = v},


fx(t,v){t.style.flex = v},
fg(t,v){t.style.flexGrow = v},
fs(t,v){t.style.flexShrink = v},
fb(t,v){t.style.flexBasis = pc(v)},

pt(t,v){t.style.paddingTop = pc(v)},
pb(t,v){t.style.paddingBottom = pc(v)},
pl(t,v){t.style.paddingLeft = pc(v)},
pr(t,v){t.style.paddingRight = pc(v)},
px(t,v){this.pl(t,v);this.pr(t,v)},
py(t,v){this.pt(t,v);this.pb(t,v)},

mt(t,v){t.style.marginTop = pc(v)},
mb(t,v){t.style.marginBottom = pc(v)},
ml(t,v){t.style.marginLeft = pc(v)},
mr(t,v){t.style.marginRight = pc(v)},
mx(t,v){this.ml(t,v);this.mr(t,v)},
my(t,v){this.mt(t,v);this.mb(t,v)},

hm(t,v){t.style.maxHeight = pc(v)},
hn(t,v){t.style.minHeight = pc(v)},
wm(t,v){t.style.maxWidth = pc(v)},
wn(t,v){t.style.minWidth = pc(v)},

ra(t,v){t.style.border = pc(v) + " solid #ccc"},
rt(t,v){t.style.borderTop = pc(v) + " solid #ccc"},
rb(t,v){t.style.borderBottom = pc(v) + " solid #ccc"},
rl(t,v){t.style.borderLeft = pc(v) + " solid #ccc"},
rr(t,v){t.style.borderRight = pc(v) + " solid #ccc"},

cm(t,v){t.style.borderTopLeftRadius = pc(v)},
cn(t,v){t.style.borderTopRightRadius = pc(v)},
co(t,v){t.style.borderBottomRightRadius = pc(v)},
cp(t,v){t.style.borderBottomLeftRadius = pc(v)},

bf(t,v){t.style.backdropFilter = "blur(" + v + "px)"},

bw(t,v){t.style.backgroundColor = "rgba(255,255,255," + v/10 + ")"},
bb(t,v){t.style.backgroundColor = "rgba(0,0,0," + v/10 + ")"},
cw(t,v){t.style.color = "rgba(255,255,255," + v/10 + ")"},
cb(t,v){t.style.color = "rgba(0,0,0," + v/10 + ")"},

tn(t,v){t.style.transitionDuration = v/10 + "s"},
td(t,v){t.style.transitionDelay = v/10 + "s"},

rz(t,v){t.style.transform = "rotatez(" + v + "deg"},
rx(t,v){t.style.transform = "rotatex(" + v + "deg"},
ry(t,v){t.style.transform = "rotatey(" + v + "deg"},
tx(t,v){t.style.transform = "translatex(" + pc(v) +")"},
ty(t,v){t.style.transform = "translatey(" + pc(v) +")"},
tt(t,v){
t.style.transform =  "translate(" + pc(v.split('_')[0]) + "," + pc(v.split('_')[1]) +")"
},
ts(t,v){t.style.transform = "scale(" + v/10 + ")"},
ta(t,v){t.style.transform = "skewx(" + v + "deg"},
tb(t,v){t.style.transform = "skewy(" + v + "deg"},
pv(t,v){t.style.perspective = v + "px"},

ad(t,v){t.style.animationDuration = v/10 + "s"},
aw(t,v){t.style.animationDelay = v/10 + "s"},
bg(t,v){t.style.background = clr(v)},
cl(t,v){t.style.color = clr(v)},
da(t,v){t.style.borderColor = clr(v)},
dt(t,v){t.style.borderTopColor = clr(v)},
db(t,v){t.style.borderBottomColor = clr(v)},
dl(t,v){t.style.borderLeftColor = clr(v)},
dr(t,v){t.style.borderRightColor = clr(v)},
}

function pc(v){
if(v.slice(-1) == "p") return v.slice(0,-1) + "%"
return v + "px"
}

function reRenderHtmlChildren(parentElm = "body"){
var els
if(typeof(parentElm) != "string"){
els = parentElm.querySelectorAll("*")
}else{
els = sa(parentElm + " *")
}

for(var i=0; i<els.length;i++){
reRenderHtml(els[i])
}
}

///
function reRenderHtml(el){
var atrs = el.attributes

if(atrs.length == 0) return

//s("[ctr]").style = ""

for(var i =0; i<atrs.length; i++){
var nm = atrs[i].name
var vl = atrs[i].value
////
if(num(1)){
if(!htc[nm[0]]) {
		c(nm[0]+nm.slice(1)+ " is not defined ❌")
return
}
htc[nm[0]](el, nm.slice(1))
}else if(num(2)){
var fn = nm[0] + nm[1]
if(!["in","bs","bg","cl"].Has(fn)){
if(!htc[fn]) {
		c(fn+nm.slice(2)+ " is not defined ❌")
return
}
htc[fn](el, vl.l==0?nm.slice(2):'$*'+vl)
}
}else{
var fn = nm[0] + nm[1]
if(["bg","cl","da","dt","db","dl","dr"].Has(fn)){
if(!htc[fn]) {
		c(fn+nm.slice(2)+ " is not defined ❌")
return
}
htc[fn](el, vl.l==0?nm.slice(2):'$*'+vl)
}
}
////
}
function num(index){
return (!isNaN(nm[index]) || nm[index] == "-" || nm[index] == ".")
}
}


///
function clr(clrCode, bol){
if(clrCode.includes("$*")){
var cl =  clrCode.replace("$*","")
if(cl.startsWith("L")){
var cl = "linear-gradient(" +
cl.replace("L","").split(",").map((v,i)=> {
if(i==0){
return v.l==0?"135deg" : v+"deg"
}
var vl =  v.trim().split(" ")
return vl.l==1?clr(vl[0]):(clr(vl[0]) + " " + pc(vl[1]))
}) +
")"
}

if(cl.startsWith("R")){
var cl = "radial-gradient(" +
cl.replace("R","").split(",").map((v,i)=> {
if(i==0){
return v.l==0?"circle" : "ellipse"
}
var vl =  v.trim().split(" ")
return vl.l==1?clr(vl[0]):(clr(vl[0]) + " " + pc(vl[1]))
}) +
")"
}

if(cl.startsWith("C")){
var cl = "conic-gradient(" +
cl.replace("C","").split(",").map((v,i)=> {
if(i==0){
return v.l==0?"from 0deg" : "from " + v+"deg"
}
var vl =  v.trim().split(" ")
return vl.l==1?clr(vl[0]):(clr(vl[0]) + " " + vl[1] + "deg")
}) +
")"
}

return cl
}

var addedIndex = 0
if(bol == undefined){
addedIndex = 0
}else{
addedIndex = 2
}
var ab="abcdefghijklmnopqrstuvwxyz"
var h = Math.round(ab.split("").indexOf(clrCode[0 + addedIndex]) * 14.4)
var s = Math.round(ab.split("").indexOf(clrCode[1 + addedIndex]) * 4)
var l = Math.round(ab.split("").indexOf(clrCode[2 + addedIndex]) * 4)
var a = ab.split("").indexOf(clrCode[3 + addedIndex]) * 0.04

s<0 && (s=50)
l<0 && (l=50)
a<0 && (a=1)

var str = `hsla(${h},${s}%,${l}%,${a})`
return str
}

///
function crn(parentElm_se,htmlStr, position){
//if one parameter is passed, it'll be taken as htmlStr

var parent, html

if(arguments.length==0){
		return c("atleast one argument need to pass as htmlString")
} else if(arguments.length==1){
		parent = document.body
		html = parentElm_se
}else{
		parent = parentElm_se.isEl ?
				parentElm_se : (parentElm_se!="")?
						s(parentElm_se) : document.body
		html = htmlStr
}

const parsedHtml = new DOMParser()
				.parseFromString(html, "text/html").body;

var Position = position || 3
var pos = {
pos1 : "beforebegin",
pos2 : "afterbegin",
pos3 : "beforeend",
pos4 : "afterend"
}
parent.insertAdjacentElement(pos["pos"+Position], parsedHtml)

if(parent.tagName != "BODY" && [1,4].includes(Position)){
parent = parent.parentElement
}else if(parent.tagName == "BODY"){
parent = document.body
}

reRenderHtmlChildren(parent)

return [parsedHtml.children[0], ... parsedHtml.querySelectorAll("[ref]")]
}