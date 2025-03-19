var _iid = 0
function iid(){ //eg-"s0", run time incremental integer-id
return ++_iid
}


var $_$_cidObj ={}
function sid(namespaceStr){
var namespace = namespaceStr || "s"
if(namespace.trim().length==0){namespace = "s"}
namespace = namespace.trim()
if($_$_cidObj[namespace] != undefined){
$_$_cidObj[namespace] = $_$_cidObj[namespace]+1
}else{
$_$_cidObj[namespace] = 0
}
return namespace + $_$_cidObj[namespace]
}

function cid(namespaceStr){
var namespace = namespaceStr || "s"
if(namespace.trim().length==0){namespace = "s"}
namespace = namespace.trim()
if($_$_cidObj[namespace] != undefined){
return namespace+$_$_cidObj[namespace]
}else{
return namespace+0
}
}


sid.reset = function (namespaceStr){ //eg-"s0"
var namespace = namespaceStr || "s"
if(namespace.trim().length==0){namespace = "s"}
namespace = namespace.trim()
if($_$_cidObj[namespace] != undefined){
$_$_cidObj[namespace] = 0
}else{
$_$_cidObj[namespace] = 0
}
return namespace + $_$_cidObj[namespace]
}


function uid(){
return new Date().getTime()+iid()
}
function usid(){
return "s"+new Date().getTime()+iid()
}


//to check data type of pure object - {},new Object
function isPureObject(a) {
return (!!a) && (a.constructor === Object)
};

function k(v){if(v){
if(Array.isArray(v)){
return (v +" is not a pure object")
//actually may be a pure object
}else if(typeof(v)=="object"){
return(Object.keys(v))
}else{
return (v +" is not a pure object")
//actually may be a pure object
}
}};


function c(v){console.log(v)};

function a(v){alert(v)};
function w(v){document.write(v)};
function s(elm){return document.querySelector(elm)}
function sa(elms){return document.querySelectorAll(elms)}


var idlAnonFncLst={};
var db ={}
db.setData = setData
db.getData = getData
db.getTags = getTags
db.clearData = clearData
db.clearDataAll = clearDataAll


function setData(tag, value){
 localforage.setItem(tag, value)
}

function getData(tag, callBack) { 
  localforage.getItem(tag, function (err, data) {
    callBack(data);
  })
}

function getTags(callBack) {
  localforage.keys(function (err, data) {
    callBack(data);
  })
}

function clearData(tag){
localforage.removeItem(tag)
}

function clearDataAll(){
  localforage.clear()
}



var fb={};
fb.setData = function (tag, value){
 if(tag!=undefined &&tag!=""){ console.log(tag+" idl.fb.setFbData "+JSON.stringify(value)) }
}


fb.getData = function (tag, callBack){ 
var callBackFunctionName;  
if(callBack.name==""){ 
var fnTag="idlAnonFbFnc"+tag; idlAnonFncLst[fnTag]=callBack; callBackFunctionName="idlAnonFncLst."+fnTag 
}else{
callBackFunctionName=callBack.name
}
if(tag!=""){
console.log("idl.fb.getFbData "+tag+" "+ callBackFunctionName) }
}

fb.getTags =function (callBack){
var tag="FbTagsAll"; var callBackFunctionName;  if(callBack.name==""){
var fnTag="idlAnonFbFnc"+tag; idlAnonFncLst[fnTag]=callBack; callBackFunctionName="idlAnonFncLst."+fnTag
}else{
callBackFunctionName=callBack.name }
if(tag!=""){
console.log("idl.fb.getFbTagsAll "+callBackFunctionName) }}

fb.clearData = function(tag){
if(tag!=undefined){
console.log("idl.fb.clearFbData "+tag) }
}

fb.goOffline = function (){c("idl.fb.goOffline")}
fb.goOnline = function (){c("idl.fb.goOnline")}

fb.config = function (obj){
//{token,url,bucket}
c(obj.token+".idl.fb.config."+obj.url+".idl.fb.config."+ obj.bucket)
}

fb.token = function (token){c("idl.fb.token."+token)}

fb.url = function (url){c("idl.fb.url."+url)}

fb.bucket = function (bucket){c("idl.fb.bucket."+bucket)}


fb.ongetvalue = function (tag,value){
return null
}

fb.on = function (tag,value){
return null
}

fb.isSignedIn = function(callBack){
var tag="sign"; var callBackFunctionName;  if(callBack.name==""){
var fnTag="idlAnonFnc"+tag; idlAnonFncLst[fnTag]=callBack; callBackFunctionName="idlAnonFncLst."+fnTag
}else{
callBackFunctionName=callBack.name }
if(tag!=""){
console.log("idl.fb.isSignedIn."+callBackFunctionName) 
}
}


fb.phoneNoSignIn = function (phoneNum){
c("idl.fb.phoneNoSignIn." + phoneNum)
}

fb.verifyPhoneCode = function (phoneCode){
c("idl.fb.verifyPhoneCode." + phoneCode)
}

fb.logOut = function (){
c("idl.fb.logOut.")
}

fb.onLoginSuccess = function(obj){
return null
}




function launchApp(packageName){
console.log("idl.launchApp "+packageName)
}


function statusBar (bol){ console.log("idl.statusBarShow "+bol)
}
function statusBarLightIcon (bol){ console.log("idl.statusBarLightIcon "+bol)
}

function statusBarTransparentBgColor(transparentHex){
console.log("idl.screen.statusbar.transparentHEXColor."+transparentHex)
}

function transparentBg (){
c("idl.screen.statusbar.transparentBg.")
}

function statusBarColor (hex){
console.log("idl.statusBarColor "+hex)
}


function onAppResume(){
return null
}


function showNavBar (bool){
c("idl.screen.showNavBar." + bool)
}

function hideKeyboard (){
c("idl.screen.hideKeyboard.")
}

function $O(prop, cbGet, cbSet){
Object.defineProperty(Object.prototype, prop,
{get : cbGet, set : cbSet})}

function $A(prop, cbGet, cbSet){
Object.defineProperty(Array.prototype, prop,


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
$O("jp", function (){return JSON.parse(this)})
//$O("m", function (){os.message(this)})
//$O("a", function (){os.alert(this)})
//$O("A", function (){alert(this)})
$O("copy", function (){return JSON.parse(JSON.stringify(this))})

//

$Sf("has", function (str){
if(this.indexOf(str) != -1){
return true
}
return false
})

$A("last", function (){return this[this.length -1 ]},
function (val){this[this.length -1 ] = val})

$A("secondLast", function (){return this[this.length -2 ]},
function (val){this[this.length -2 ] = val})

function $Sf(fnName, fnDef){
String.prototype[fnName] = fnDef
}
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

$O("isArr", function (){
if(Array.isArray(this)){
return true
}else{
return false
}
})

$O("isNum", function (){
if(this.constructor.name == "Number"){
return true
}else{
return false
}
})

$O("isStr", function (){
if(this.constructor.name == "String"){
return true
}else{
return false
}
})

$Hf("ats", function (attrName, attrValue){
this.setAttribute(attrName,attrValue||"")
})
$Hf("atg", function (attrName){
return this.getAttribute(attrName)
})
$Hf("atr", function (attrName, attrValue){
this.removeAttribute(attrName,attrValue||"")
})
$Hf("att", function (attrName){
this.toggleAttribute(attrName)
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
})
$Hf("clr", function (classStr){
this.classList.remove(classStr)
})
$Hf("clt", function (classStr){
this.classList.toggle(classStr)
})
$Hf("clh", function (classStr){
return this.className.indexOf(classStr) != -1
})

$H("ih", function (){
return this.innerHTML
},
function (htmlStr){
this.innerHTML = htmlStr
})

$H("oh", function (){
return this.outerHTML
},
function (htmlStr){
this.outerHTML = htmlStr
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
return null
},
function (fn){
this.onclick = fn
})


$H("c", function (){
return null
},
function (fn){
this.addEventListener("click", fn)
})

///
function tag(targetTagName){
return(event.target.tagName == targetTagName.toUpperCase())
}

///
function tf(elm,transformStr){
elm.style.webkitTransform = transformStr
}

///
function crt(elmStr,parentElmStr,txt){
var txt = txt || "";
var el = document.createElement(elmStr.toUpperCase())
var parentElm = parentElmStr?s(parentElmStr) : document.body
el.appendChild(document.createTextNode(txt));
parentElm.appendChild(el)
}

///
function crh(elmStr,parentElmStr,html){
var html = html || ""
var parentElm = parentElmStr?s(parentElmStr) : document.body
var el = document.createElement(elmStr.toUpperCase())
el.innerHTML= html;
parentElm.appendChild(el)
}

///
function cra(parentElmStr, txt){
var parentElm = parentElmStr?s(parentElmStr) : document.body
var txt = txt || ""
parentElm.append(txt)
}

///
function cri(targetElmStr, html, position){
//position : 1/2/3/4
var targetElm
if(targetElmStr){
targetElm = s(targetElmStr)
}else{
targetElm = document.body
}
var html = html || ""
var position = position || 3
var pos = {
pos1 : "beforebegin",
pos2 : "afterbegin",
pos3 : "beforeend",
pos4 : "afterend"
}
targetElm.insertAdjacentHTML(pos["pos"+position], html);
}


///
function remove(selectorStr, css, delay){
if(selectorStr){
var d = delay || 0;
if (d>0){
var str= "<style>"+selectorStr+ "{transition:"+d+"ms;"+css+"}"+
selectorStr + " ~*{transition : "+d+"ms;\
-webkit-transform :\
translatey(-"+(s(selectorStr).clientHeight+5)+"px)}\
</style>";
var elm = sid()
crh(elm,"",str)
//c(str)
setTimeout(function (){
if(s(selectorStr)){
s(selectorStr).remove();
}
s(elm).remove()
},d)
}else{
if(s(selectorStr)){
s(selectorStr).remove()
}
}
}
}

///
var _i = function (arrOfObj, id){
var ind = -1;
arrOfObj.forEach((item, index)=>{
if(item.id==id){
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
}else if (oElm.currentStyle) {
try { strValue = oElm.currentStyle[css3Prop]
}catch (e) {} }
return strValue
}

//fn get node index
function ind(currentNode){
var child = currentNode;
var parent = child.parentNode;
var index = Array.prototype.indexOf.call(parent.children, child);
return index;
}
var dev = {}

dev.help = function (){
var results, currentWindow,
iframe = document.createElement('iframe'); iframe.style.display = 'none'; document.body.appendChild(iframe);
currentWindow = Object.getOwnPropertyNames(window);
results = currentWindow.filter(function(prop) { return !iframe.contentWindow.hasOwnProperty(prop); });
os.message(results.join("<br>")); document.body.removeChild(iframe);
}

dev.options = {
show : function (optionsStr){
var el =document.createElement("OPTIONS");
document.body.appendChild(el);
var arr = optionsStr.split(",");
var str = "";
for (i=0;i<arr.length;i++){
if(arr.indexOf("dev_color_picker")!=-1){
var clrArr = dev.color.dev_color_picker;
for(i=0;i<clrArr.length;i++){
var clr = clrArr[i].split(",");
var cl = "#"+clr[0]
str+="<item style='background:"+cl+"'>"+ dev.color.mainColorArr[i]+" - color code : "+cl+"</item>";
}
}else if(arr.indexOf("color_shade")!=-1){
var ccl = dev.color.currentColor;
var ind = dev.color.mainColorArr.indexOf(ccl)
var clrArr = dev.color.dev_color_picker[ind].split(",");
for(i=0;i<clrArr.length;i++){
var cl = "#"+clrArr[i]
str+="<item style='background:"+cl+"'>"+ccl +" - shade-"+[i]+"-color code : "+cl+"</item>";
}
}else{
str+="<item>"+arr[i]+"</item>"
}
}
s("options").innerHTML = "<items>"+str+"</items>";
dev.options.calc()
},
hide : function (){
if(s("options")){s("options").remove()}
}
}//end-dev.options


dev.options.calc = function (){
var t = {
selm : s("options>items"),
target : -(s("options items").clientHeight-s("options").clientHeight),
onclick : function (){return null},
y : 0,
sy : 0,
cy : 0,
dy :0,
ey : 0,
tms : 0,
tme : 0,
accel : 100,
drag : false
}


s("options").ontouchstart = function (){
t.drag = false
t.tms = new Date().getTime()
var m = t.y+t.dy
if(t.target-100<=m || m<=0){
t.selm.style.transition = ""
}else{
t.selm.style.transition = "0.5s"
}
event.preventDefault();
t.sy = event.touches[0].clientY
}


s("options").ontouchend = function (){
t.tme = new Date().getTime()
t.accel=(1/(t.tme-t.tms))*50* Math.abs(t.dy*t.dy/20)
if(t.y+t.dy>=0){
t.selm.style.transition = "0.5s";
t.selm.style.webkitTransform = "translatey(0px)"
}else if(t.target>=t.y+t.dy){
t.selm.style.transition = "0.5s";
t.selm.style.webkitTransform = "translatey("+t.target+"px)"
}else{
t.selm.style.transition = "0.5s"
var m = t.y+t.dy
if(t.dy<0){
if(t.target>(m-t.accel)){
t.selm.style.webkitTransform = "translatey("+t.target+"px)";
t.y += t.target
}else{
t.selm.style.webkitTransform = "translatey("+(m-t.accel)+"px)";
t.y += t.dy- t.accel
}
}else if(t.dy>0){
if(0<=(m+t.accel)){
t.selm.style.webkitTransform = "translatey(0px)";
t.y = 0
}else{
t.selm.style.webkitTransform = "translatey("+(m+t.accel)+"px)";
t.y += t.dy + t.accel
}
}
}
t.dy = 0;
if(!t.drag){
t.onclick(event.target.innerText)
}
}


s("options").ontouchmove = function (){
t.cy = event.touches[0].clientY
t.dy = t.cy-t.sy
if(Math.abs(t.dy)>10){
t.drag = true
}
var m = t.y+t.dy
if((t.target-50)<=m && (m-50)<=0){
if(t.selm.tagName=="ITEMS"){
t.selm.style.webkitTransform = "translatey("+m+"px)"
}
}else{
if(m>=0){
t.dy=0;
t.y=0;
}else{
t.dy=t.target;
t.y=t.target;
}
}
}
t.onclick = function (item){
if(item.indexOf(" - color code : #")!=-1){
var clr = item.split(" - color code : #")[0]
dev.color.currentColor = clr
c("idl.options.option shade.")
}else if(item.indexOf("-color code : #")!=-1){
var code = item.split("-color code : ")[1];
var ccl = dev.color.currentColor;
var shadeIndex = item.split("-color code : ")[0].split(" - shade-")[1];
c("idl.options.option "+code)
}else if(item=="help"){
dev.help()
}else{
c("idl.options.option "+item+".")
}
s("options").remove()
}
}//end option all



dev.color = {
mainColorArr : ["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"],
currentColor : "teal",
shade : {
color_shade:1
},
dev_color_picker :  ["f44336,ffebee,ffcdd2,ef9a9a,e57373,ef5350,f44336,e53935,d32f2f,c62828,b71c1c,ff8a80,ff5252,ff1744,d50000",
"e91e63,fce4ec,f8bbd0,f48fb1,f06292,ec407a,e91e63,d81b60,c2185b,ad1457,880e4f,ff80ab,ff4081,f50057,c51162",
"9c27b0,f3e5f5,e1bee7,ce93d8,ba68c8,ab47bc,9c27b0,8e24aa,7b1fa2,6a1b9a,4a148c,ea80fc,e040fb,d500f9,aa00ff",
"673ab7,ede7f6,d1c4e9,b39ddb,9575cd,7e57c2,673ab7,5e35b1,512da8,4527a0,311b92,b388ff,7c4dff,651fff,6200ea",
"3f51b5,e8eaf6,c5cae9,9fa8da,7986cb,5c6bc0,3f51b5,3949ab,303f9f,283593,1a237e,8c9eff,536dfe,3d5afe,304ffe",
"2196f3,e3f2fd,bbdefb,90caf9,64b5f6,42a5f5,2196f3,1e88e5,1976d2,1565c0,0d47a1,82b1ff,448aff,2979ff,2962ff",
"03a9f4,e1f5fe,b3e5fc,81d4fa,4fc3f7,29b6f6,03a9f4,039be5,0288d1,0277bd,01579b,80d8ff,40c4ff,00b0ff,0091ea",
"00bcd4,e0f7fa,b2ebf2,80deea,4dd0e1,26c6da,00bcd4,00acc1,0097a7,00838f,006064,84ffff,18ffff,00e5ff,00b8d4",
"009688,e0f2f1,b2dfdb,80cbc4,4db6ac,26a69a,009688,00897b,00796b,00695c,004d40,a7ffeb,64ffda,1de9b6,00bfa5",
"4caf50,e8f5e9,c8e6c9,a5d6a7,81c784,66bb6a,4caf50,43a047,388e3c,2e7d32,1b5e20,b9f6ca,69f0ae,00e676,00c853",
"8bc34a,f1f8e9,dcedc8,c5e1a5,aed581,9ccc65,8bc34a,7cb342,689f38,558b2f,33691e,ccff90,b2ff59,76ff03,64dd17",
"cddc39,f9fbe7,f0f4c3,e6ee9c,dce775,d4e157,cddc39,c0ca33,afb42b,9e9d24,827717,f4ff81,eeff41,c6ff00,aeea00",
"ffeb3b,fffde7,fff9c4,fff59d,fff176,ffee58,ffeb3b,fdd835,fbc02d,f9a825,f57f17,ffff8d,ffff00,ffea00,ffd600",
"ffc107,fff8e1,ffecb3,ffe082,ffd54f,ffca28,ffc107,ffb300,ffa000,ff8f00,ff6f00,ffe57f,ffd740,ffc400,ffab00",
"ff9800,fff3e0,ffe0b2,ffcc80,ffb74d,ffa726,ff9800,fb8c00,f57c00,ef6c00,e65100,ffd180,ffab40,ff9100,ff6d00",
"ff5722,fbe9e7,ffccbc,ffab91,ff8a65,ff7043,ff5722,f4511e,e64a19,d84315,bf360c,ff9e80,ff6e40,ff3d00,dd2c00",
"795548,efebe9,d7ccc8,bcaaa4,a1887f,8d6e63,795548,6d4c41,5d4037,4e342e,3e2723",
"9e9e9e,fafafa,f5f5f5,eeeeee,e0e0e0,bdbdbd,9e9e9e,757575,616161,424242,212121,ffffff,000000",
"607d8b,eceff1,cfd8dc,b0bec5,90a4ae,78909c,607d8b,546e7a,455a64,37474f,263238"]
}
var os={
alert :"",
message : "",
screen : {
hideKeyboard : hideKeyboard,
showNavBar : showNavBar,
onAppResume : onAppResume
},
activity : "",
viewport : "",
ripple :"",
statusBar : {
show : statusBar, 
transparentBgColor : statusBarTransparentBgColor,
transparentBg : transparentBg,
color : statusBarColor,
lightIcon : statusBarLightIcon
}
};

os.closeApplication = function (){
console.log("idl.os.closeApplication")
}
os.onbackpress = function (){
//to close application on backpress hardware button;
this.closeApplication();
//alert("বেক ক্লিক করা হয়েছে");
//launchApp("ru.irk.ang.balsan.shortcutled")
}
os.api={
battery: {
onchange: function (obj){
return obj
}}
}
os.vibrate = function(duration){
var d = duration || 100
c("idl.os.sensors.vibrator.vibrate"+d)
}
os.clipboard = {
paste : function (callBack){
var tag = "pasted"
var callBackFunctionName;  
if(callBack.name==""){ 
var fnTag="idlAnonFnc"+tag; idlAnonFncLst[fnTag]=callBack; callBackFunctionName="idlAnonFncLst."+fnTag 
}else{
callBackFunctionName=callBack.name
}
if(tag!=""){
console.log("idl.clipboard.paste " + callBackFunctionName) }
},
copy : function (data){
c("idl.clipboard.copy"+data);
}
}


os.activity = {
start : function (){
c("idl.activity.start"+ JSON.stringify(this))
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
onafteractivity : function (txt){
return null
},
action : "",
class : "",
package : "",
dataType : "",
dataUri : "",
extraKey : "",
extraValue : "",
extras : "",
resultName : "",
}


/*--os.api--*/

//os.api start
os.network = {
  isConnected : true
}
//os.api end

os.api={
battery: {
onchange: function (obj){
return obj
}
}
}
os.alert = function (str){
var x = document. createElement("ALERT");
x.id="osAlertComp";
x.appendChild(document.createTextNode(str));
document.body.appendChild(x);
setTimeout(function (){
document.body.removeChild(x)
},3000);
}
os.message= function(msgHtml){
if(typeof(_p)=="undefined"){
var el=document.createElement("DIV");
el.id="_p";
el.innerHTML="<div id='_w'><div id='_h'>Message</div><div id='_m'></div><div id='_b'><div id='_b_back'>Back</div><div id='_b_ok'>Ok</div></div></div>";
document.body.appendChild(el);
_b_back.onclick=closeModal;
_b_ok.onclick=closeModal;
_p.style.display="flex";
_m.innerHTML =msgHtml;
}
}

function closeModal(){
_p.style.webkitAnimation="_p_anim_close 0.5s forwards";
_w.style.webkitAnimation="_w_anim_close 0.5s forwards";
setTimeout(function(){
if(typeof(_p)!="undefined"){
_p.remove();
}},500)
}
os.random= function (min, max) {
if((min>=0) && (max>=0)){
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}else{
console.log("invoke os.random function with these two arguments : \nmin and max");
return "";
}
}
var _v_scale=1.0;
os.viewport= function(){
if(typeof(_v_p)=="undefined"){
var el=document.createElement("DIV");
el.id="_v_p";
var style ="<style>\
#_v_p{\
position:fixed;top:0;bottom:0;left:0;right:0;display:flex;\
justify-content:center;align-items:flex-start;overflow: hidden;\
-webkit-animation: _v_pAnimaOn 0.5s;pointer-events:none; \
display: none;z-index:999999999}\
@-webkit-keyframes _v_pAnimaOn{\
70%{opacity:1}\
from{opacity: 0}\
}\
@-webkit-keyframes _v_p_v_anim_v_close{\
50%{opacity:1}\
to{opacity: 0;}\
}\
#_v_w{\
pointer-events: auto;\
-webkit-transform-origin: top;\
background:#fff;color:#444;height:70px;overflow :hidden;\
width: 280px;overflow: hidden;border-radius: 5px;display:flex;\
flex-wrap: wrap;box-shadow: 0 0 10px rgba(0,0,0,0.2);\
-webkit-animation:_v_wAnimaWrapOn 0.5s\
}\
@-webkit-keyframes _v_wAnimaWrapOn{\
from{opacity: 0;-webkit-transform: translatey(-100px)}\
50%{opacity: 1;-webkit-transform: translatey(10px)}\
}\
@-webkit-keyframes _v_w_v_anim_v_close{\
from{opacity: 1}\
50%{opacity: 1;-webkit-transform: translatey(10px)}\
to{opacity: 0;-webkit-transform: translatey(-100px)}\
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


el.innerHTML="<div id='_v_w'><div id='_v_m'></div></div>"+style;
document.body.insertAdjacentElement("afterend",el);
_v_p.style.display="flex";
_v_m.innerHTML ='<div class="mt"\ onclick=osViewport(this,1)>phone_android</div>\
<div class="mt" onclick=osViewport(this,0.912)>tablet</div>\
<div class="mt" onclick=osViewport(this,0.513)>tablet</div>\
<div class="mt" onclick=osViewport(this,0.639) >desktop_windows</div>\
<div class="mt" onclick=osViewport(this,0.3595)>desktop_windows</div>\
<div class="mt" id="_v_b_v_close">close</div>\
<div id="_v_b_v_info">screen info</div>';

_v_w.style.webkitTransform="scale("+(1/_v_scale)+")";
_v_b_v_close.onclick=close_v_Modal;
_v_b_v_info.innerHTML = "w: "+window.innerWidth+ "&nbsp &nbsp h: "+window.innerHeight
}
}

function close_v_Modal(){
_v_p.style.webkitAnimation="_v_p_v_anim_v_close 0.5s forwards";
_v_w.style.webkitAnimation="_v_w_v_anim_v_close 0.5s forwards";
setTimeout(function(){
if(typeof(_v_p)!="undefined"){
_v_p.remove();
}},500)
}

function osViewport(that,scale){
_v_scale=scale;

that.innerHTML = '<meta name="viewport" content= "width=\
device-width,initial-scale='+scale+', user-scalable=no">'+that.innerHTML;
_v_w.style.webkitTransform="scale("+(1/scale)+")";
_v_b_v_info.innerHTML = "w: "+window.innerWidth+ "&nbsp &nbsp h: "+window.innerHeight
}
os.ripple = function(){
var waves = document.querySelectorAll('[w]');
waves.forEach(function (wave, index) {
  wave.addEventListener('click', function (e) {
    var button = this,
        wave   = document.createElement('ripple'),
        id     = 'wave-' + new Date().getTime();
    wave.setAttribute('id', id);
    wave.setAttribute('class', 'wave');
    wave.style.left = e.offsetX + 'px';
    wave.style.top  = e.offsetY + 'px';
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
*/