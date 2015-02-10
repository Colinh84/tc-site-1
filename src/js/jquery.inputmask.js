/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.4
*/
(function(c){if(void 0===c.fn.inputmask){var S=function(e){var a=document.createElement("input");e="on"+e;var c=e in a;c||(a.setAttribute(e,"return;"),c="function"==typeof a[e]);return c},I=function(e,a,d){return(e=d.aliases[e])?(e.alias&&I(e.alias,void 0,d),c.extend(!0,d,e),c.extend(!0,d,a),!0):!1},J=function(e){function a(a){function c(a,e,f,d){this.matches=[];this.isGroup=a||!1;this.isOptional=e||!1;this.isQuantifier=f||!1;this.isAlternator=d||!1;this.quantifier={min:1,max:1}}function d(a,f,c){var g=
e.definitions[f];c=void 0!=c?c:a.matches.length;if(g&&!w){for(var m=g.prevalidator,v=m?m.length:0,h=1;h<g.cardinality;h++){var n=v>=h?m[h-1]:[],r=n.validator,n=n.cardinality;a.matches.splice(c++,0,{fn:r?"string"==typeof r?RegExp(r):new function(){this.test=r}:/./,cardinality:n?n:1,optionality:a.isOptional,casing:g.casing,def:g.definitionSymbol||f})}a.matches.splice(c++,0,{fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):new function(){this.test=g.validator}:/./,cardinality:g.cardinality,
optionality:a.isOptional,casing:g.casing,def:g.definitionSymbol||f})}else a.matches.splice(c++,0,{fn:null,cardinality:0,optionality:a.isOptional,casing:null,def:f}),w=!1}for(var h=/(?:[?*+]|\{[0-9]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g,w=!1,q=new c,f,g=[],v=[];f=h.exec(a);)switch(f=f[0],f.charAt(0)){case e.optionalmarker.end:case e.groupmarker.end:var n=g.pop();0<g.length?g[g.length-1].matches.push(n):q.matches.push(n);break;case e.optionalmarker.start:g.push(new c(!1,!0));break;case e.groupmarker.start:g.push(new c(!0));
break;case e.quantifiermarker.start:n=new c(!1,!1,!0);f=f.replace(/[{}]/g,"");var r=f.split(",");f=isNaN(r[0])?r[0]:parseInt(r[0]);r=1==r.length?f:isNaN(r[1])?r[1]:parseInt(r[1]);n.quantifier={min:f,max:r};if("*"==r||"+"==r)e.greedy=!1;if(0<g.length){r=g[g.length-1].matches;f=r.pop();if(!f.isGroup){var B=new c(!0);B.matches.push(f);f=B}r.push(f);r.push(n)}else f=q.matches.pop(),f.isGroup||(B=new c(!0),B.matches.push(f),f=B),q.matches.push(f),q.matches.push(n);break;case e.escapeChar:w=!0;break;case e.alternatormarker:break;
default:0<g.length?d(g[g.length-1],f):(0<q.matches.length&&(n=q.matches[q.matches.length-1],n.isGroup&&(n.isGroup=!1,d(n,e.groupmarker.start,0),d(n,e.groupmarker.end))),d(q,f))}0<q.matches.length&&v.push(q);return v}function d(d,h){e.numericInput&&(d=d.split("").reverse().join(""));if(void 0!=d&&""!=d){if(0<e.repeat||"*"==e.repeat||"+"==e.repeat)d=e.groupmarker.start+d+e.groupmarker.end+e.quantifiermarker.start+("*"==e.repeat?0:"+"==e.repeat?1:e.repeat)+","+e.repeat+e.quantifiermarker.end;void 0==
c.inputmask.masksCache[d]&&(c.inputmask.masksCache[d]={mask:d,maskToken:a(d),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:h});return c.extend(!0,{},c.inputmask.masksCache[d])}}var h=[];c.isFunction(e.mask)&&(e.mask=e.mask.call(this,e));c.isArray(e.mask)?c.each(e.mask,function(a,c){void 0!=c.mask?h.push(d(c.mask.toString(),c)):h.push(d(c.toString()))}):(1==e.mask.length&&!1==e.greedy&&0!=e.repeat&&(e.placeholder=""),h=void 0!=e.mask.mask?d(e.mask.mask.toString(),e.mask):d(e.mask.toString()));
return h},da="function"===typeof ScriptEngineMajorVersion?ScriptEngineMajorVersion():10<=(new Function("/*@cc_on return @_jscript_version; @*/"))(),t=navigator.userAgent,ea=null!==t.match(/iphone/i),fa=null!==t.match(/android.*safari.*/i),ga=null!==t.match(/android.*chrome.*/i),Y=null!==t.match(/android.*firefox.*/i),Z=/Kindle/i.test(t)||/Silk/i.test(t)||/KFTT/i.test(t)||/KFOT/i.test(t)||/KFJWA/i.test(t)||/KFJWI/i.test(t)||/KFSOWI/i.test(t)||/KFTHWA/i.test(t)||/KFTHWI/i.test(t)||/KFAPWA/i.test(t)||
/KFAPWI/i.test(t),T=S("paste")?"paste":S("input")?"input":"propertychange",G=function(e,a,d){function h(b,u,c){u=u||0;var f=[],d,l=0,g;do{if(!0===b&&e.validPositions[l]){var p=e.validPositions[l];g=p.match;d=p.locator.slice();f.push(null==g.fn?g.def:!0===c?p.input:a.placeholder.charAt(l%a.placeholder.length))}else d=w(l,!0,d,l-1),d=d[a.greedy||u>l?0:d.length-1],g=d.match,d=d.locator.slice(),f.push(null==g.fn?g.def:a.placeholder.charAt(l%a.placeholder.length));l++}while((void 0==K||l-1<K)&&null!=g.fn||
null==g.fn&&""!=g.def||u>=l);f.pop();return f}function m(b){var u=e;u.buffer=void 0;u.tests={};!0!==b&&(u._buffer=void 0,u.validPositions={},u.p=-1)}function E(b){var u=e;b=-1;for(var a in u.validPositions)u=parseInt(a),u>b&&(b=u);return b}function C(b,u,f,k){if(a.insertMode&&void 0!=e.validPositions[b]&&void 0==k){k=c.extend(!0,{},e.validPositions);for(var d=t(B());d>b&&0<=d;d--)if(r(d)){var l=t(d),g=e.validPositions[l];void 0!=g&&D(d).def==D(l).def&&void 0==e.validPositions[d]&&!1!==n(d,g.input,
f,!0)&&delete e.validPositions[l]}if(void 0==e.validPositions[b])e.validPositions[b]=u;else return e.validPositions=c.extend(!0,{},k),!1}else e.validPositions[b]=u;return!0}function D(b){return e.validPositions[b]?e.validPositions[b].match:w(b)[0].match}function w(b,a,f,c){function d(a,f,c,e){function u(c,e,k){var l=g;if(g==b&&void 0==c.matches)return p.push({match:c,locator:e.reverse()}),!0;if(void 0!=c.matches)if(c.isGroup&&!0!==k){if(c=u(a.matches[z+1],e))return!0}else if(c.isOptional){var v=c;
if(c=d(c,f,e,k))c=p[p.length-1].match,(c=0==v.matches.indexOf(c))&&(h=!0),g=l}else{if(!c.isAlternator)if(c.isQuantifier&&!0!==k)for(l=c,k=0<f.length&&!0!==k?f.shift():0;k<(isNaN(l.quantifier.max)?k+1:l.quantifier.max)&&g<=b;k++){if(v=a.matches[a.matches.indexOf(l)-1],c=u(v,[k].concat(e),!0))if(c=p[p.length-1].match,k>l.quantifier.min-1&&(c.optionalQuantifier=!0),c=0==v.matches.indexOf(c))if(k>l.quantifier.min-1){h=!0;g=b;break}else return!0;else return!0}else if(c=d(c,f,e,k))return!0}else g++}for(var z=
0<f.length?f.shift():0;z<a.matches.length;z++)if(!0!==a.matches[z].isQuantifier){var k=u(a.matches[z],[z].concat(c),e);if(k&&g==b)return k;if(g>b)break}}var l=e.maskToken,g=f?c:0;c=f||[0];var p=[],h=!1;if(!0!==a&&e.tests[b]&&!e.validPositions[b])return e.tests[b];if(void 0==f){for(a=b-1;void 0==(f=e.validPositions[a])&&-1<a;)a--;if(void 0!=f&&-1<a)g=a,c=f.locator.slice();else{for(a=b-1;void 0==(f=e.tests[a])&&-1<a;)a--;void 0!=f&&-1<a&&(g=a,c=f[0].locator.slice())}}for(a=c.shift();a<l.length&&!(d(l[a],
c,[a])&&g==b||g>b);a++);(0==p.length||h&&2>p.length)&&p.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:""},locator:[]});return e.tests[b]=p}function q(){void 0==e._buffer&&(e._buffer=h(!1,1));return e._buffer}function f(){void 0==e.buffer&&(e.buffer=h(!0,E(),!0));return e.buffer}function g(b,a){for(var e=f(),k=b;k<a;k++)if(e[k]!=P(k)){var d=w(k,!1)[0];C(k,c.extend({},d,{input:v(e[k],d.match)}),!0)}}function v(b,a){switch(a.casing){case "upper":b=b.toUpperCase();break;case "lower":b=
b.toLowerCase()}return b}function n(b,u,z,k){function d(b,u,z,k){var l=!1;c.each(w(b,!z),function(d,h){for(var p=h.match,n=u?1:0,F="",r=f(),Q=p.cardinality;Q>n;Q--)F+=void 0==e.validPositions[b-(Q-1)]?P(b-(Q-1)):e.validPositions[b-(Q-1)].input;u&&(F+=u);l=null!=p.fn?p.fn.test(F,r,b,z,a):u!=p.def&&u!=a.skipOptionalPartCharacter||""==p.def?!1:{c:p.def,pos:b};if(!1!==l)return n=void 0!=l.c?l.c:u,n=n==a.skipOptionalPartCharacter?p.def:n,F=b,l.refreshFromBuffer?(r=l.refreshFromBuffer,z=!0,F=void 0!=l.pos?
l.pos:b,h=w(F,!z)[0],!0===r?(e.validPositions={},g(0,f().length)):g(r.start,r.end)):!0!==l&&l.pos!=b&&(F=l.pos,g(b,F),h=w(F,!z)[0]),0<d&&m(!0),C(F,c.extend({},h,{input:v(n,p)}),z,k)||(l=!1),!1});return l}z=!0===z;var l=d(b,u,z,k);if(!z&&(a.insertMode||void 0==e.validPositions[A(b)])&&!1===l&&!r(b))for(var h=b+1,p=A(b);h<=p;h++)if(l=d(h,u,z,k),!1!==l){b=h;break}!0===l&&(l={pos:b});return l}function r(b){b=D(b);return null!=b.fn?b.fn:!1}function B(){var b;K=s.prop("maxLength");-1==K&&(K=void 0);if(!1==
a.greedy){b=E()+1;for(var c=D(b);null!=c.fn||""!=c.def;)c=D(++b),!0!==c.optionality&&(c=w(b),c=c[c.length-1].match);b=h(!0,b).length;e.tests={}}else b=f().length;return void 0==K||b<K?b:K}function A(b){var c=B();if(b>=c)return c;for(;++b<c&&!r(b)&&(!0!==a.nojumps||a.nojumpsThreshold>b););return b}function t(b){if(0>=b)return 0;for(;0<--b&&!r(b););return b}function H(b,c,a){b._valueSet(c.join(""));void 0!=a&&x(b,a)}function P(b){var c=D(b);return null==c.fn?c.def:a.placeholder.charAt(b%a.placeholder.length)}
function N(b,a,f,k,d){k=void 0!=k?k.slice():I(b._valueGet()).split("");m();a&&b._valueSet("");c.each(k,function(k,g){if(!0===d){var h=e.p,h=-1==h?h:t(h),n=-1==h?k:A(h);-1==c.inArray(g,q().slice(h+1,n))&&U.call(b,void 0,!0,g.charCodeAt(0),a,f,k)}else U.call(b,void 0,!0,g.charCodeAt(0),a,f,k),f=f||0<k&&k>e.p})}function G(b){return c.inputmask.escapeRegex.call(this,b)}function I(b){return b.replace(RegExp("("+G(q().join(""))+")*$"),"")}function J(b){var c=f().slice(),a;for(a=c.length-1;0<=a;a--){var e=
D(a);if((e.optionality||e.optionalQuantifier)&&c[a]==P(a))c.pop();else break}H(b,c)}function R(b,e){if(!b.data("_inputmask")||!0!==e&&b.hasClass("hasDatepicker"))return b[0]._valueGet();var d=c.map(f(),function(b,c){return r(c)&&n(c,b,!0)?b:null}),d=(y?d.reverse():d).join(""),k=(y?f().reverse():f()).join("");return c.isFunction(a.onUnMask)?a.onUnMask.call(b,k,d,a):d}function L(b){!y||"number"!=typeof b||a.greedy&&""==a.placeholder||(b=f().length-b);return b}function x(b,f,e){b=b.jquery&&0<b.length?
b[0]:b;if("number"==typeof f){f=L(f);e=L(e);e="number"==typeof e?e:f;var d=c(b).data("_inputmask")||{};d.caret={begin:f,end:e};c(b).data("_inputmask",d);c(b).is(":visible")&&(b.scrollLeft=b.scrollWidth,!1==a.insertMode&&f==e&&e++,b.setSelectionRange?(b.selectionStart=f,b.selectionEnd=e):b.createTextRange&&(b=b.createTextRange(),b.collapse(!0),b.moveEnd("character",e),b.moveStart("character",f),b.select()))}else return d=c(b).data("_inputmask"),!c(b).is(":visible")&&d&&void 0!=d.caret?(f=d.caret.begin,
e=d.caret.end):b.setSelectionRange?(f=b.selectionStart,e=b.selectionEnd):document.selection&&document.selection.createRange&&(b=document.selection.createRange(),f=0-b.duplicate().moveStart("character",-1E5),e=f+b.text.length),f=L(f),e=L(e),{begin:f,end:e}}function O(b){if(c.isFunction(a.isComplete))return a.isComplete.call(s,b,a);if("*"!=a.repeat){var f=!1,e=t(B());if(E()==e)for(var f=!0,d=0;d<=e;d++){var g=r(d);if(g&&(void 0==b[d]||b[d]==P(d))||!g&&b[d]!=P(d)){f=!1;break}}return f}}function S(b){b=
c._data(b).events;c.each(b,function(b,a){c.each(a,function(b,c){if("inputmask"==c.namespace&&"setvalue"!=c.type){var a=c.handler;c.handler=function(b){if(this.readOnly||this.disabled)b.preventDefault;else return a.apply(this,arguments)}}})})}function ha(b){function a(b){if(void 0==c.valHooks[b]||!0!=c.valHooks[b].inputmaskpatch){var f=c.valHooks[b]&&c.valHooks[b].get?c.valHooks[b].get:function(b){return b.value},e=c.valHooks[b]&&c.valHooks[b].set?c.valHooks[b].set:function(b,c){b.value=c;return b};
c.valHooks[b]={get:function(b){var a=c(b);if(a.data("_inputmask")){if(a.data("_inputmask").opts.autoUnmask)return a.inputmask("unmaskedvalue");b=f(b);a=(a=a.data("_inputmask").maskset._buffer)?a.join(""):"";return b!=a?b:""}return f(b)},set:function(b,a){var f=c(b),d=e(b,a);f.data("_inputmask")&&f.triggerHandler("setvalue.inputmask");return d},inputmaskpatch:!0}}}var f;Object.getOwnPropertyDescriptor&&(f=Object.getOwnPropertyDescriptor(b,"value"));if(f&&f.get){if(!b._valueGet){var e=f.get,d=f.set;
b._valueGet=function(){return y?e.call(this).split("").reverse().join(""):e.call(this)};b._valueSet=function(b){d.call(this,y?b.split("").reverse().join(""):b)};Object.defineProperty(b,"value",{get:function(){var b=c(this),a=c(this).data("_inputmask"),f=a.maskset;return a&&a.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=f._buffer.join("")?e.call(this):""},set:function(b){d.call(this,b);c(this).triggerHandler("setvalue.inputmask")}})}}else document.__lookupGetter__&&b.__lookupGetter__("value")?
b._valueGet||(e=b.__lookupGetter__("value"),d=b.__lookupSetter__("value"),b._valueGet=function(){return y?e.call(this).split("").reverse().join(""):e.call(this)},b._valueSet=function(b){d.call(this,y?b.split("").reverse().join(""):b)},b.__defineGetter__("value",function(){var b=c(this),a=c(this).data("_inputmask"),f=a.maskset;return a&&a.opts.autoUnmask?b.inputmask("unmaskedvalue"):e.call(this)!=f._buffer.join("")?e.call(this):""}),b.__defineSetter__("value",function(b){d.call(this,b);c(this).triggerHandler("setvalue.inputmask")})):
(b._valueGet||(b._valueGet=function(){return y?this.value.split("").reverse().join(""):this.value},b._valueSet=function(b){this.value=y?b.split("").reverse().join(""):b}),a(b.type))}function $(b,c,d){if(a.numericInput||y){switch(c){case a.keyCode.BACKSPACE:c=a.keyCode.DELETE;break;case a.keyCode.DELETE:c=a.keyCode.BACKSPACE}y&&(b=d.end,d.end=d.begin,d.begin=b)}d.begin==d.end?(b=c==a.keyCode.BACKSPACE?d.begin-1:d.begin,a.isNumeric&&""!=a.radixPoint&&f()[b]==a.radixPoint&&(d.begin=f().length-1==b?d.begin:
c==a.keyCode.BACKSPACE?b:A(b),d.end=d.begin),c==a.keyCode.BACKSPACE?d.begin=t(d.begin):c==a.keyCode.DELETE&&d.end++):1!=d.end-d.begin||a.insertMode||c==a.keyCode.BACKSPACE&&d.begin--;b=d.begin;var g=d.end;for(c=A(b-1);b<g;b++)delete e.validPositions[b];for(b=A(g-1);b<=E();b=A(b)){var g=e.validPositions[b],h=e.validPositions[c];void 0!=g&&void 0==h&&(D(c).def==g.match.def&&!1!==n(c,g.input,!0)&&delete e.validPositions[b],c=A(c))}for(c=E();0<c&&(void 0==e.validPositions[c]||null==e.validPositions[c].match.fn);)delete e.validPositions[c],
c--;m(!0);c=A(-1);E()<c?e.p=c:e.p=d.begin}function V(b){W=!1;var d=this,h=c(d),k=b.keyCode,n=x(d);k==a.keyCode.BACKSPACE||k==a.keyCode.DELETE||ea&&127==k||b.ctrlKey&&88==k?(b.preventDefault(),88==k&&(M=f().join("")),$(d,k,n),H(d,f(),e.p),d._valueGet()==q().join("")&&h.trigger("cleared"),a.showTooltip&&h.prop("title",e.mask)):k==a.keyCode.END||k==a.keyCode.PAGE_DOWN?setTimeout(function(){var c=A(E());a.insertMode||c!=B()||b.shiftKey||c--;x(d,b.shiftKey?n.begin:c,c)},0):k==a.keyCode.HOME&&!b.shiftKey||
k==a.keyCode.PAGE_UP?x(d,0,b.shiftKey?n.begin:0):k==a.keyCode.ESCAPE||90==k&&b.ctrlKey?(N(d,!0,!1,M.split("")),h.click()):k!=a.keyCode.INSERT||b.shiftKey||b.ctrlKey?!1!=a.insertMode||b.shiftKey||(k==a.keyCode.RIGHT?setTimeout(function(){var b=x(d);x(d,b.begin)},0):k==a.keyCode.LEFT&&setTimeout(function(){var b=x(d);x(d,b.begin-1)},0)):(a.insertMode=!a.insertMode,x(d,a.insertMode||n.begin!=B()?n.begin:n.begin-1));var h=x(d),l=a.onKeyDown.call(this,b,f(),a);l&&!0===l.refreshFromBuffer&&(e.validPositions=
{},g(0,f().length),x(d,h.begin,h.end));aa=-1!=c.inArray(k,a.ignorables)}function U(b,d,g,h,v,l){if(void 0==g&&W)return!1;W=!0;var r=c(this);b=b||window.event;g=d?g:b.which||b.charCode||b.keyCode;if(!(!0===d||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||aa))return!0;if(g){!0!==d&&46==g&&!1==b.shiftKey&&","==a.radixPoint&&(g=44);var p,q;g=String.fromCharCode(g);d?(l=v?l:E()+1,p={begin:l,end:l}):p=x(this);if(l=y?1<p.begin-p.end||1==p.begin-p.end&&a.insertMode:1<p.end-p.begin||1==p.end-p.begin&&a.insertMode)e.undoPositions=
c.extend(!0,{},e.validPositions),$(this,a.keyCode.DELETE,p),a.insertMode||(a.insertMode=!a.insertMode,C(p.begin,void 0,v),a.insertMode=!a.insertMode),l=!a.multi;var B=f().join("").indexOf(a.radixPoint);a.isNumeric&&!0!==d&&-1!=B&&(a.greedy&&p.begin<=B?(p.begin=t(p.begin),p.end=p.begin):g==a.radixPoint&&(p.begin=B,p.end=p.begin));e.writeOutBuffer=!0;p=p.begin;var s=n(p,g,v);!1!==s&&(!0!==s&&(p=void 0!=s.pos?s.pos:p,g=void 0!=s.c?s.c:g),m(!0),q=A(p),e.p=q);if(!1!==h){var w=this;setTimeout(function(){a.onKeyValidation.call(w,
s,a)},0);if(e.writeOutBuffer&&!1!==s){var D=f();h=d?void 0:a.numericInput?p>B?t(q):g==a.radixPoint?q-1:t(q-1):q;H(this,D,h);!0!==d&&setTimeout(function(){!0===O(D)&&r.trigger("complete");X=!0;r.trigger("input")},0)}else l&&(e.buffer=void 0,e.validPositions=e.undoPositions)}else l&&(e.buffer=void 0,e.validPositions=e.undoPositions);a.showTooltip&&r.prop("title",e.mask);b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}}function ba(b){var d=c(this),h=b.keyCode,k=f();(b=a.onKeyUp.call(this,b,
k,a))&&!0===b.refreshFromBuffer&&(e.validPositions={},g(0,f().length));h==a.keyCode.TAB&&a.showMaskOnFocus&&(d.hasClass("focus.inputmask")&&0==this._valueGet().length?(m(),k=f(),H(this,k),x(this,0),M=f().join("")):(H(this,k),k.join("")==q().join("")&&-1!=c.inArray(a.radixPoint,k)?(x(this,L(0)),d.click()):x(this,L(0),L(B()))))}function ca(b){if(!0===X&&"input"==b.type)return X=!1,!0;var d=this,e=c(d);if("propertychange"==b.type&&d._valueGet().length<=B())return!0;setTimeout(function(){var b=c.isFunction(a.onBeforePaste)?
a.onBeforePaste.call(d,d._valueGet(),a):d._valueGet();N(d,!1,!1,b.split(""),!0);H(d,f());!0===O(f())&&e.trigger("complete");e.click()},0)}function ia(b){var d=c(this),e=x(this),g=this._valueGet(),g=g.replace(RegExp("("+G(q().join(""))+")*"),"");e.begin>g.length&&(x(this,g.length),e=x(this));1!=f().length-g.length||g.charAt(e.begin)==f()[e.begin]||g.charAt(e.begin+1)==f()[e.begin]||r(e.begin)?(N(this,!1,!1,g.split("")),H(this,f()),!0===O(f())&&d.trigger("complete"),d.click()):(b.keyCode=a.keyCode.BACKSPACE,
V.call(this,b));b.preventDefault()}function ja(b){s=c(b);if(s.is(":input")){s.data("_inputmask",{maskset:e,opts:a,isRTL:!1});a.showTooltip&&s.prop("title",e.mask);ha(b);a.numericInput&&(a.isNumeric=a.numericInput);("rtl"==b.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&s.css("text-align","right");if("rtl"==b.dir||a.numericInput){b.dir="ltr";s.removeAttr("dir");var d=s.data("_inputmask");d.isRTL=!0;s.data("_inputmask",d);y=!0}s.unbind(".inputmask");s.removeClass("focus.inputmask");
s.closest("form").bind("submit",function(){M!=f().join("")&&s.change()}).bind("reset",function(){setTimeout(function(){s.trigger("setvalue")},0)});s.bind("mouseenter.inputmask",function(){!c(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=f().join("")&&H(this,f())}).bind("blur.inputmask",function(){var b=c(this),d=this._valueGet(),e=f();b.removeClass("focus.inputmask");M!=f().join("")&&b.change();a.clearMaskOnLostFocus&&""!=d&&(d==q().join("")?this._valueSet(""):J(this));!1===
O(e)&&(b.trigger("incomplete"),a.clearIncomplete&&(m(),a.clearMaskOnLostFocus?this._valueSet(""):(e=q().slice(),H(this,e))))}).bind("focus.inputmask",function(){var b=c(this),d=this._valueGet();a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==d)&&this._valueGet()!=f().join("")&&H(this,f(),A(E()));b.addClass("focus.inputmask");M=f().join("")}).bind("mouseleave.inputmask",function(){var b=c(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||this._valueGet()==
b.attr("placeholder")||(this._valueGet()==q().join("")||""==this._valueGet()?this._valueSet(""):J(this)))}).bind("click.inputmask",function(){var b=this;setTimeout(function(){var d=x(b),e=f();if(d.begin==d.end){var d=y?L(d.begin):d.begin,g=E(d),e=a.isNumeric?!1===a.skipRadixDance&&""!=a.radixPoint&&-1!=c.inArray(a.radixPoint,e)?a.numericInput?A(c.inArray(a.radixPoint,e)):c.inArray(a.radixPoint,e):A(g):A(g);d<e?r(d)?x(b,d):x(b,A(d)):x(b,e)}},0)}).bind("dblclick.inputmask",function(){var b=this;setTimeout(function(){x(b,
0,A(E()))},0)}).bind(T+".inputmask dragdrop.inputmask drop.inputmask",ca).bind("setvalue.inputmask",function(){N(this,!0);M=f().join("");this._valueGet()==q().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);s.bind("keydown.inputmask",V).bind("keypress.inputmask",U).bind("keyup.inputmask",ba);if(fa||Y||ga||Z)if(s.attr("autocomplete","off").attr("autocorrect","off").attr("autocapitalize","off").attr("spellcheck",
!1),Y||Z)s.unbind("keydown.inputmask",V).unbind("keypress.inputmask",U).unbind("keyup.inputmask",ba),"input"==T&&s.unbind(T+".inputmask"),s.bind("input.inputmask",ia);da&&s.bind("input.inputmask",ca);d=c.isFunction(a.onBeforeMask)?a.onBeforeMask.call(b,b._valueGet(),a):b._valueGet();N(b,!0,!1,d.split(""),!0);M=f().join("");var g;try{g=document.activeElement}catch(h){}g===b?(s.addClass("focus.inputmask"),x(b,A(E()))):a.clearMaskOnLostFocus?f().join("")==q().join("")?b._valueSet(""):J(b):H(b,f());S(b)}}
var y=!1,M=f().join(""),s,W=!1,X=!1,aa=!1,K;if(void 0!=d)switch(d.action){case "isComplete":return s=c(d.el),O(d.buffer);case "unmaskedvalue":return s=d.$input,y=d.$input.data("_inputmask").isRTL,R(d.$input,d.skipDatepickerCheck);case "mask":ja(d.el);break;case "format":return s=c({}),s.data("_inputmask",{maskset:e,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,y=!0),d=d.value.split(""),N(s,!1,!1,y?d.reverse():d,!0),y?f().reverse().join(""):f().join("");case "isValid":return s=
c({}),s.data("_inputmask",{maskset:e,opts:a,isRTL:a.numericInput}),a.numericInput&&(a.isNumeric=a.numericInput,y=!0),d=d.value.split(""),N(s,!1,!0,y?d.reverse():d),O(f())}},R=function(e,a,d){function h(a,g,h){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof g){g=m(g);h=m(h);h="number"==typeof h?h:g;if(a!=e){var n=c(a).data("_inputmask")||{};n.caret={begin:g,end:h};c(a).data("_inputmask",n)}c(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==d.insertMode&&g==h&&h++,a.setSelectionRange?(a.selectionStart=
g,a.selectionEnd=h):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",h),a.moveStart("character",g),a.select()))}else return c(a).is(":visible")||void 0==c(a).data("_inputmask").caret?a.setSelectionRange?(g=a.selectionStart,h=a.selectionEnd):document.selection&&document.selection.createRange&&(a=document.selection.createRange(),g=0-a.duplicate().moveStart("character",-1E5),h=g+a.text.length):(n=c(a).data("_inputmask"),g=n.caret.begin,h=n.caret.end),g=m(g),h=m(h),{begin:g,
end:h}}function m(a){!D||"number"!=typeof a||d.greedy&&""==d.placeholder||(a=e.value.length-a);return a}function t(a,g){if("multiMaskScope"!=a){var v=-1,n=-1,r=-1;c.each(g,function(a,d){var e=c(d).data("_inputmask").maskset,f=-1,g=0,m=h(d).begin,q;for(q in e.validPositions)e=parseInt(q),e>f&&(f=e),g++;if(g>v||g==v&&n>m&&r>f||g==v&&n==m&&r<f)v=g,n=m,w=a,r=f});c.isFunction(d.determineActiveMasksetIndex)&&(w=d.determineActiveMasksetIndex.call(C,a,g));var m=C.data("_inputmask-multi")||{activeMasksetIndex:0,
elmasks:g};m.activeMasksetIndex=w;C.data("_inputmask-multi",m)}-1==["focus"].indexOf(a)&&e.value!=g[w]._valueGet()&&(m=""==c(g[w]).val()?g[w]._valueGet():c(g[w]).val(),e.value=m);-1==["blur","focus"].indexOf(a)&&c(g[w]).hasClass("focus.inputmask")&&(m=h(g[w]),h(e,m.begin,m.end))}d.multi=!0;var C=c(e),D="rtl"==e.dir||d.numericInput,w=0,q=c.map(a,function(a,e){var h='<input type="text" ';C.attr("value")&&(h+='value="'+C.attr("value")+'" ');C.attr("dir")&&(h+='dir="'+C.attr("dir")+'" ');h=c(h+"/>")[0];
G(c.extend(!0,{},a),d,{action:"mask",el:h});return h});C.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:q});("rtl"==e.dir||d.numericInput&&d.rightAlignNumerics||d.isNumeric&&d.rightAlignNumerics)&&C.css("text-align","right");e.dir="ltr";C.removeAttr("dir");""!=C.attr("value")&&t("init",q);C.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",function(a){var g=h(e),v,n=!0;if("keydown"==a.type){v=a.keyCode;if(v==d.keyCode.DOWN&&w<q.length-1)return w++,t("multiMaskScope",
q),!1;if(v==d.keyCode.UP&&0<w)return w--,t("multiMaskScope",q),!1;if(a.ctrlKey||a.shiftKey||a.altKey)return!0}else if("keypress"==a.type&&(a.ctrlKey||a.shiftKey||a.altKey))return!0;c.each(q,function(e,q){if("keydown"==a.type){v=a.keyCode;if(v==d.keyCode.BACKSPACE&&q._valueGet().length<g.begin)return;if(v==d.keyCode.TAB)n=!1;else{if(v==d.keyCode.RIGHT){h(q,g.begin+1,g.end+1);n=!1;return}if(v==d.keyCode.LEFT){h(q,g.begin-1,g.end-1);n=!1;return}}}if(-1!=["click"].indexOf(a.type)&&(h(q,m(g.begin),m(g.end)),
g.begin!=g.end)){n=!1;return}-1!=["keydown"].indexOf(a.type)&&g.begin!=g.end&&h(q,g.begin,g.end);c(q).triggerHandler(a)});n&&setTimeout(function(){t(a.type,q)},0)});C.bind(T+" dragdrop drop setvalue",function(a){h(e);setTimeout(function(){c.each(q,function(d,h){h._valueSet(e.value);c(h).triggerHandler(a)});setTimeout(function(){t(a.type,q)},0)},0)});(function(a){if(void 0==c.valHooks[a]||!0!=c.valHooks[a].inputmaskmultipatch){var d=c.valHooks[a]&&c.valHooks[a].get?c.valHooks[a].get:function(a){return a.value},
e=c.valHooks[a]&&c.valHooks[a].set?c.valHooks[a].set:function(a,c){a.value=c;return a};c.valHooks[a]={get:function(a){var e=c(a);return e.data("_inputmask-multi")?(a=e.data("_inputmask-multi"),d(a.elmasks[a.activeMasksetIndex])):d(a)},set:function(a,d){var f=c(a),g=e(a,d);f.data("_inputmask-multi")&&f.triggerHandler("setvalue");return g},inputmaskmultipatch:!0}}})(e.type)};c.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",
end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:c.noop,onincomplete:c.noop,oncleared:c.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:c.noop,onKeyDown:c.noop,onBeforeMask:void 0,onBeforePaste:void 0,onUnMask:void 0,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:c.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",
cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,
PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:void 0,multi:!1,nojumps:!1,nojumpsThreshold:0,determineActiveMasksetIndex:void 0},masksCache:{},escapeRegex:function(c){return c.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},format:function(e,a){var d=c.extend(!0,{},c.inputmask.defaults,a);I(d.alias,a,d);return G(J(d),d,{action:"format",
value:e})},isValid:function(e,a){var d=c.extend(!0,{},c.inputmask.defaults,a);I(d.alias,a,d);return G(J(d),d,{action:"isValid",value:e})}};c.fn.inputmask=function(e,a){function d(a,d){var e=c(a),h;for(h in d){var f=e.data("inputmask-"+h.toLowerCase());void 0!=f&&(d[h]=f)}return d}var h=c.extend(!0,{},c.inputmask.defaults,a),m;if("string"===typeof e)switch(e){case "mask":return I(h.alias,a,h),m=J(h),0==m.length?this:this.each(function(){c.isArray(m)?R(this,m,d(this,h)):G(c.extend(!0,{},m),d(this,h),
{action:"mask",el:this})});case "unmaskedvalue":var t=c(this);return t.data("_inputmask")?(m=t.data("_inputmask").maskset,h=t.data("_inputmask").opts,G(m,h,{action:"unmaskedvalue",$input:t})):t.val();case "remove":return this.each(function(){var a=c(this);if(a.data("_inputmask")){m=a.data("_inputmask").maskset;h=a.data("_inputmask").opts;this._valueSet(G(m,h,{action:"unmaskedvalue",$input:a,skipDatepickerCheck:!0}));a.removeData("_inputmask");a.unbind(".inputmask");a.removeClass("focus.inputmask");
var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(this,"value"));d&&d.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(e){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?
(m=this.data("_inputmask").maskset,m._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return this.data("_inputmask")?(m=this.data("_inputmask").maskset,h=this.data("_inputmask").opts,G(m,h,{action:"isComplete",buffer:this[0]._valueGet().split(""),el:this})):!0;case "getmetadata":if(this.data("_inputmask"))return m=this.data("_inputmask").maskset,m.metadata;break;default:return I(e,a,h)||(h.mask=e),m=J(h),void 0==
m?this:this.each(function(){c.isArray(m)?R(this,m,d(this,h)):G(c.extend(!0,{},m),d(this,h),{action:"mask",el:this})})}else{if("object"==typeof e)return h=c.extend(!0,{},c.inputmask.defaults,e),I(h.alias,e,h),m=J(h),void 0==m?this:this.each(function(){c.isArray(m)?R(this,m,d(this,h)):G(c.extend(!0,{},m),d(this,h),{action:"mask",el:this})});if(void 0==e)return this.each(function(){var d=c(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),e=c.parseJSON("{"+d+"}");c.extend(!0,
e,a);h=c.extend(!0,{},c.inputmask.defaults,e);I(h.alias,e,h);h.alias=void 0;c(this).inputmask(h)}catch(m){}})}}}})(jQuery);