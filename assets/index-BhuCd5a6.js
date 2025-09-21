(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const k of c)if(k.type==="childList")for(const T of k.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&u(T)}).observe(document,{childList:!0,subtree:!0});function x(c){const k={};return c.integrity&&(k.integrity=c.integrity),c.referrerPolicy&&(k.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?k.credentials="include":c.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function u(c){if(c.ep)return;c.ep=!0;const k=x(c);fetch(c.href,k)}})();function getDefaultExportFromCjs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function getAugmentedNamespace(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var l=i.default;if(typeof l=="function"){var x=function u(){var c=!1;try{c=this instanceof u}catch{}return c?Reflect.construct(l,arguments,this.constructor):l.apply(this,arguments)};x.prototype=l.prototype}else x={};return Object.defineProperty(x,"__esModule",{value:!0}),Object.keys(i).forEach(function(u){var c=Object.getOwnPropertyDescriptor(i,u);Object.defineProperty(x,u,c.get?c:{enumerable:!0,get:function(){return i[u]}})}),x}var jsxRuntime={exports:{}},reactJsxRuntime_production={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production;function requireReactJsxRuntime_production(){if(hasRequiredReactJsxRuntime_production)return reactJsxRuntime_production;hasRequiredReactJsxRuntime_production=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function x(u,c,k){var T=null;if(k!==void 0&&(T=""+k),c.key!==void 0&&(T=""+c.key),"key"in c){k={};for(var A in c)A!=="key"&&(k[A]=c[A])}else k=c;return c=k.ref,{$$typeof:i,type:u,key:T,ref:c!==void 0?c:null,props:k}}return reactJsxRuntime_production.Fragment=l,reactJsxRuntime_production.jsx=x,reactJsxRuntime_production.jsxs=x,reactJsxRuntime_production}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),react={exports:{}},react_production={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production;function requireReact_production(){if(hasRequiredReact_production)return react_production;hasRequiredReact_production=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),T=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Ye=Symbol.iterator;function tt(nt){return nt===null||typeof nt!="object"?null:(nt=Ye&&nt[Ye]||nt["@@iterator"],typeof nt=="function"?nt:null)}var it={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lt=Object.assign,pt={};function xt(nt,bt,kt){this.props=nt,this.context=bt,this.refs=pt,this.updater=kt||it}xt.prototype.isReactComponent={},xt.prototype.setState=function(nt,bt){if(typeof nt!="object"&&typeof nt!="function"&&nt!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,nt,bt,"setState")},xt.prototype.forceUpdate=function(nt){this.updater.enqueueForceUpdate(this,nt,"forceUpdate")};function At(){}At.prototype=xt.prototype;function Tt(nt,bt,kt){this.props=nt,this.context=bt,this.refs=pt,this.updater=kt||it}var Dt=Tt.prototype=new At;Dt.constructor=Tt,lt(Dt,xt.prototype),Dt.isPureReactComponent=!0;var Ut=Array.isArray,Mt={H:null,A:null,T:null,S:null,V:null},Vt=Object.prototype.hasOwnProperty;function Zt(nt,bt,kt,Ot,Nt,Gt){return kt=Gt.ref,{$$typeof:i,type:nt,key:bt,ref:kt!==void 0?kt:null,props:Gt}}function an(nt,bt){return Zt(nt.type,bt,void 0,void 0,void 0,nt.props)}function tn(nt){return typeof nt=="object"&&nt!==null&&nt.$$typeof===i}function _n(nt){var bt={"=":"=0",":":"=2"};return"$"+nt.replace(/[=:]/g,function(kt){return bt[kt]})}var Tn=/\/+/g;function pn(nt,bt){return typeof nt=="object"&&nt!==null&&nt.key!=null?_n(""+nt.key):bt.toString(36)}function Hn(){}function Wt(nt){switch(nt.status){case"fulfilled":return nt.value;case"rejected":throw nt.reason;default:switch(typeof nt.status=="string"?nt.then(Hn,Hn):(nt.status="pending",nt.then(function(bt){nt.status==="pending"&&(nt.status="fulfilled",nt.value=bt)},function(bt){nt.status==="pending"&&(nt.status="rejected",nt.reason=bt)})),nt.status){case"fulfilled":return nt.value;case"rejected":throw nt.reason}}throw nt}function mn(nt,bt,kt,Ot,Nt){var Gt=typeof nt;(Gt==="undefined"||Gt==="boolean")&&(nt=null);var zt=!1;if(nt===null)zt=!0;else switch(Gt){case"bigint":case"string":case"number":zt=!0;break;case"object":switch(nt.$$typeof){case i:case l:zt=!0;break;case te:return zt=nt._init,mn(zt(nt._payload),bt,kt,Ot,Nt)}}if(zt)return Nt=Nt(nt),zt=Ot===""?"."+pn(nt,0):Ot,Ut(Nt)?(kt="",zt!=null&&(kt=zt.replace(Tn,"$&/")+"/"),mn(Nt,bt,kt,"",function(Bn){return Bn})):Nt!=null&&(tn(Nt)&&(Nt=an(Nt,kt+(Nt.key==null||nt&&nt.key===Nt.key?"":(""+Nt.key).replace(Tn,"$&/")+"/")+zt)),bt.push(Nt)),1;zt=0;var Sn=Ot===""?".":Ot+":";if(Ut(nt))for(var $t=0;$t<nt.length;$t++)Ot=nt[$t],Gt=Sn+pn(Ot,$t),zt+=mn(Ot,bt,kt,Gt,Nt);else if($t=tt(nt),typeof $t=="function")for(nt=$t.call(nt),$t=0;!(Ot=nt.next()).done;)Ot=Ot.value,Gt=Sn+pn(Ot,$t++),zt+=mn(Ot,bt,kt,Gt,Nt);else if(Gt==="object"){if(typeof nt.then=="function")return mn(Wt(nt),bt,kt,Ot,Nt);throw bt=String(nt),Error("Objects are not valid as a React child (found: "+(bt==="[object Object]"?"object with keys {"+Object.keys(nt).join(", ")+"}":bt)+"). If you meant to render a collection of children, use an array instead.")}return zt}function vt(nt,bt,kt){if(nt==null)return nt;var Ot=[],Nt=0;return mn(nt,Ot,"","",function(Gt){return bt.call(kt,Gt,Nt++)}),Ot}function yt(nt){if(nt._status===-1){var bt=nt._result;bt=bt(),bt.then(function(kt){(nt._status===0||nt._status===-1)&&(nt._status=1,nt._result=kt)},function(kt){(nt._status===0||nt._status===-1)&&(nt._status=2,nt._result=kt)}),nt._status===-1&&(nt._status=0,nt._result=bt)}if(nt._status===1)return nt._result.default;throw nt._result}var qt=typeof reportError=="function"?reportError:function(nt){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var bt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof nt=="object"&&nt!==null&&typeof nt.message=="string"?String(nt.message):String(nt),error:nt});if(!window.dispatchEvent(bt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",nt);return}console.error(nt)};function Jt(){}return react_production.Children={map:vt,forEach:function(nt,bt,kt){vt(nt,function(){bt.apply(this,arguments)},kt)},count:function(nt){var bt=0;return vt(nt,function(){bt++}),bt},toArray:function(nt){return vt(nt,function(bt){return bt})||[]},only:function(nt){if(!tn(nt))throw Error("React.Children.only expected to receive a single React element child.");return nt}},react_production.Component=xt,react_production.Fragment=x,react_production.Profiler=c,react_production.PureComponent=Tt,react_production.StrictMode=u,react_production.Suspense=Z,react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt,react_production.__COMPILER_RUNTIME={__proto__:null,c:function(nt){return Mt.H.useMemoCache(nt)}},react_production.cache=function(nt){return function(){return nt.apply(null,arguments)}},react_production.cloneElement=function(nt,bt,kt){if(nt==null)throw Error("The argument must be a React element, but you passed "+nt+".");var Ot=lt({},nt.props),Nt=nt.key,Gt=void 0;if(bt!=null)for(zt in bt.ref!==void 0&&(Gt=void 0),bt.key!==void 0&&(Nt=""+bt.key),bt)!Vt.call(bt,zt)||zt==="key"||zt==="__self"||zt==="__source"||zt==="ref"&&bt.ref===void 0||(Ot[zt]=bt[zt]);var zt=arguments.length-2;if(zt===1)Ot.children=kt;else if(1<zt){for(var Sn=Array(zt),$t=0;$t<zt;$t++)Sn[$t]=arguments[$t+2];Ot.children=Sn}return Zt(nt.type,Nt,void 0,void 0,Gt,Ot)},react_production.createContext=function(nt){return nt={$$typeof:T,_currentValue:nt,_currentValue2:nt,_threadCount:0,Provider:null,Consumer:null},nt.Provider=nt,nt.Consumer={$$typeof:k,_context:nt},nt},react_production.createElement=function(nt,bt,kt){var Ot,Nt={},Gt=null;if(bt!=null)for(Ot in bt.key!==void 0&&(Gt=""+bt.key),bt)Vt.call(bt,Ot)&&Ot!=="key"&&Ot!=="__self"&&Ot!=="__source"&&(Nt[Ot]=bt[Ot]);var zt=arguments.length-2;if(zt===1)Nt.children=kt;else if(1<zt){for(var Sn=Array(zt),$t=0;$t<zt;$t++)Sn[$t]=arguments[$t+2];Nt.children=Sn}if(nt&&nt.defaultProps)for(Ot in zt=nt.defaultProps,zt)Nt[Ot]===void 0&&(Nt[Ot]=zt[Ot]);return Zt(nt,Gt,void 0,void 0,null,Nt)},react_production.createRef=function(){return{current:null}},react_production.forwardRef=function(nt){return{$$typeof:A,render:nt}},react_production.isValidElement=tn,react_production.lazy=function(nt){return{$$typeof:te,_payload:{_status:-1,_result:nt},_init:yt}},react_production.memo=function(nt,bt){return{$$typeof:Y,type:nt,compare:bt===void 0?null:bt}},react_production.startTransition=function(nt){var bt=Mt.T,kt={};Mt.T=kt;try{var Ot=nt(),Nt=Mt.S;Nt!==null&&Nt(kt,Ot),typeof Ot=="object"&&Ot!==null&&typeof Ot.then=="function"&&Ot.then(Jt,qt)}catch(Gt){qt(Gt)}finally{Mt.T=bt}},react_production.unstable_useCacheRefresh=function(){return Mt.H.useCacheRefresh()},react_production.use=function(nt){return Mt.H.use(nt)},react_production.useActionState=function(nt,bt,kt){return Mt.H.useActionState(nt,bt,kt)},react_production.useCallback=function(nt,bt){return Mt.H.useCallback(nt,bt)},react_production.useContext=function(nt){return Mt.H.useContext(nt)},react_production.useDebugValue=function(){},react_production.useDeferredValue=function(nt,bt){return Mt.H.useDeferredValue(nt,bt)},react_production.useEffect=function(nt,bt,kt){var Ot=Mt.H;if(typeof kt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Ot.useEffect(nt,bt)},react_production.useId=function(){return Mt.H.useId()},react_production.useImperativeHandle=function(nt,bt,kt){return Mt.H.useImperativeHandle(nt,bt,kt)},react_production.useInsertionEffect=function(nt,bt){return Mt.H.useInsertionEffect(nt,bt)},react_production.useLayoutEffect=function(nt,bt){return Mt.H.useLayoutEffect(nt,bt)},react_production.useMemo=function(nt,bt){return Mt.H.useMemo(nt,bt)},react_production.useOptimistic=function(nt,bt){return Mt.H.useOptimistic(nt,bt)},react_production.useReducer=function(nt,bt,kt){return Mt.H.useReducer(nt,bt,kt)},react_production.useRef=function(nt){return Mt.H.useRef(nt)},react_production.useState=function(nt){return Mt.H.useState(nt)},react_production.useSyncExternalStore=function(nt,bt,kt){return Mt.H.useSyncExternalStore(nt,bt,kt)},react_production.useTransition=function(){return Mt.H.useTransition()},react_production.version="19.1.1",react_production}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production()),react.exports}var reactExports=requireReact(),client={exports:{}},reactDomClient_production={},scheduler={exports:{}},scheduler_production={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredScheduler_production;function requireScheduler_production(){return hasRequiredScheduler_production||(hasRequiredScheduler_production=1,(function(i){function l(vt,yt){var qt=vt.length;vt.push(yt);e:for(;0<qt;){var Jt=qt-1>>>1,nt=vt[Jt];if(0<c(nt,yt))vt[Jt]=yt,vt[qt]=nt,qt=Jt;else break e}}function x(vt){return vt.length===0?null:vt[0]}function u(vt){if(vt.length===0)return null;var yt=vt[0],qt=vt.pop();if(qt!==yt){vt[0]=qt;e:for(var Jt=0,nt=vt.length,bt=nt>>>1;Jt<bt;){var kt=2*(Jt+1)-1,Ot=vt[kt],Nt=kt+1,Gt=vt[Nt];if(0>c(Ot,qt))Nt<nt&&0>c(Gt,Ot)?(vt[Jt]=Gt,vt[Nt]=qt,Jt=Nt):(vt[Jt]=Ot,vt[kt]=qt,Jt=kt);else if(Nt<nt&&0>c(Gt,qt))vt[Jt]=Gt,vt[Nt]=qt,Jt=Nt;else break e}}return yt}function c(vt,yt){var qt=vt.sortIndex-yt.sortIndex;return qt!==0?qt:vt.id-yt.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;i.unstable_now=function(){return k.now()}}else{var T=Date,A=T.now();i.unstable_now=function(){return T.now()-A}}var Z=[],Y=[],te=1,Ye=null,tt=3,it=!1,lt=!1,pt=!1,xt=!1,At=typeof setTimeout=="function"?setTimeout:null,Tt=typeof clearTimeout=="function"?clearTimeout:null,Dt=typeof setImmediate<"u"?setImmediate:null;function Ut(vt){for(var yt=x(Y);yt!==null;){if(yt.callback===null)u(Y);else if(yt.startTime<=vt)u(Y),yt.sortIndex=yt.expirationTime,l(Z,yt);else break;yt=x(Y)}}function Mt(vt){if(pt=!1,Ut(vt),!lt)if(x(Z)!==null)lt=!0,Vt||(Vt=!0,pn());else{var yt=x(Y);yt!==null&&mn(Mt,yt.startTime-vt)}}var Vt=!1,Zt=-1,an=5,tn=-1;function _n(){return xt?!0:!(i.unstable_now()-tn<an)}function Tn(){if(xt=!1,Vt){var vt=i.unstable_now();tn=vt;var yt=!0;try{e:{lt=!1,pt&&(pt=!1,Tt(Zt),Zt=-1),it=!0;var qt=tt;try{t:{for(Ut(vt),Ye=x(Z);Ye!==null&&!(Ye.expirationTime>vt&&_n());){var Jt=Ye.callback;if(typeof Jt=="function"){Ye.callback=null,tt=Ye.priorityLevel;var nt=Jt(Ye.expirationTime<=vt);if(vt=i.unstable_now(),typeof nt=="function"){Ye.callback=nt,Ut(vt),yt=!0;break t}Ye===x(Z)&&u(Z),Ut(vt)}else u(Z);Ye=x(Z)}if(Ye!==null)yt=!0;else{var bt=x(Y);bt!==null&&mn(Mt,bt.startTime-vt),yt=!1}}break e}finally{Ye=null,tt=qt,it=!1}yt=void 0}}finally{yt?pn():Vt=!1}}}var pn;if(typeof Dt=="function")pn=function(){Dt(Tn)};else if(typeof MessageChannel<"u"){var Hn=new MessageChannel,Wt=Hn.port2;Hn.port1.onmessage=Tn,pn=function(){Wt.postMessage(null)}}else pn=function(){At(Tn,0)};function mn(vt,yt){Zt=At(function(){vt(i.unstable_now())},yt)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(vt){vt.callback=null},i.unstable_forceFrameRate=function(vt){0>vt||125<vt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):an=0<vt?Math.floor(1e3/vt):5},i.unstable_getCurrentPriorityLevel=function(){return tt},i.unstable_next=function(vt){switch(tt){case 1:case 2:case 3:var yt=3;break;default:yt=tt}var qt=tt;tt=yt;try{return vt()}finally{tt=qt}},i.unstable_requestPaint=function(){xt=!0},i.unstable_runWithPriority=function(vt,yt){switch(vt){case 1:case 2:case 3:case 4:case 5:break;default:vt=3}var qt=tt;tt=vt;try{return yt()}finally{tt=qt}},i.unstable_scheduleCallback=function(vt,yt,qt){var Jt=i.unstable_now();switch(typeof qt=="object"&&qt!==null?(qt=qt.delay,qt=typeof qt=="number"&&0<qt?Jt+qt:Jt):qt=Jt,vt){case 1:var nt=-1;break;case 2:nt=250;break;case 5:nt=1073741823;break;case 4:nt=1e4;break;default:nt=5e3}return nt=qt+nt,vt={id:te++,callback:yt,priorityLevel:vt,startTime:qt,expirationTime:nt,sortIndex:-1},qt>Jt?(vt.sortIndex=qt,l(Y,vt),x(Z)===null&&vt===x(Y)&&(pt?(Tt(Zt),Zt=-1):pt=!0,mn(Mt,qt-Jt))):(vt.sortIndex=nt,l(Z,vt),lt||it||(lt=!0,Vt||(Vt=!0,pn()))),vt},i.unstable_shouldYield=_n,i.unstable_wrapCallback=function(vt){var yt=tt;return function(){var qt=tt;tt=yt;try{return vt.apply(this,arguments)}finally{tt=qt}}}})(scheduler_production)),scheduler_production}var hasRequiredScheduler;function requireScheduler(){return hasRequiredScheduler||(hasRequiredScheduler=1,scheduler.exports=requireScheduler_production()),scheduler.exports}var reactDom={exports:{}},reactDom_production={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDom_production;function requireReactDom_production(){if(hasRequiredReactDom_production)return reactDom_production;hasRequiredReactDom_production=1;var i=requireReact();function l(Z){var Y="https://react.dev/errors/"+Z;if(1<arguments.length){Y+="?args[]="+encodeURIComponent(arguments[1]);for(var te=2;te<arguments.length;te++)Y+="&args[]="+encodeURIComponent(arguments[te])}return"Minified React error #"+Z+"; visit "+Y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var u={d:{f:x,r:function(){throw Error(l(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},c=Symbol.for("react.portal");function k(Z,Y,te){var Ye=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:Ye==null?null:""+Ye,children:Z,containerInfo:Y,implementation:te}}var T=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function A(Z,Y){if(Z==="font")return"";if(typeof Y=="string")return Y==="use-credentials"?Y:""}return reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,reactDom_production.createPortal=function(Z,Y){var te=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Y||Y.nodeType!==1&&Y.nodeType!==9&&Y.nodeType!==11)throw Error(l(299));return k(Z,Y,null,te)},reactDom_production.flushSync=function(Z){var Y=T.T,te=u.p;try{if(T.T=null,u.p=2,Z)return Z()}finally{T.T=Y,u.p=te,u.d.f()}},reactDom_production.preconnect=function(Z,Y){typeof Z=="string"&&(Y?(Y=Y.crossOrigin,Y=typeof Y=="string"?Y==="use-credentials"?Y:"":void 0):Y=null,u.d.C(Z,Y))},reactDom_production.prefetchDNS=function(Z){typeof Z=="string"&&u.d.D(Z)},reactDom_production.preinit=function(Z,Y){if(typeof Z=="string"&&Y&&typeof Y.as=="string"){var te=Y.as,Ye=A(te,Y.crossOrigin),tt=typeof Y.integrity=="string"?Y.integrity:void 0,it=typeof Y.fetchPriority=="string"?Y.fetchPriority:void 0;te==="style"?u.d.S(Z,typeof Y.precedence=="string"?Y.precedence:void 0,{crossOrigin:Ye,integrity:tt,fetchPriority:it}):te==="script"&&u.d.X(Z,{crossOrigin:Ye,integrity:tt,fetchPriority:it,nonce:typeof Y.nonce=="string"?Y.nonce:void 0})}},reactDom_production.preinitModule=function(Z,Y){if(typeof Z=="string")if(typeof Y=="object"&&Y!==null){if(Y.as==null||Y.as==="script"){var te=A(Y.as,Y.crossOrigin);u.d.M(Z,{crossOrigin:te,integrity:typeof Y.integrity=="string"?Y.integrity:void 0,nonce:typeof Y.nonce=="string"?Y.nonce:void 0})}}else Y==null&&u.d.M(Z)},reactDom_production.preload=function(Z,Y){if(typeof Z=="string"&&typeof Y=="object"&&Y!==null&&typeof Y.as=="string"){var te=Y.as,Ye=A(te,Y.crossOrigin);u.d.L(Z,te,{crossOrigin:Ye,integrity:typeof Y.integrity=="string"?Y.integrity:void 0,nonce:typeof Y.nonce=="string"?Y.nonce:void 0,type:typeof Y.type=="string"?Y.type:void 0,fetchPriority:typeof Y.fetchPriority=="string"?Y.fetchPriority:void 0,referrerPolicy:typeof Y.referrerPolicy=="string"?Y.referrerPolicy:void 0,imageSrcSet:typeof Y.imageSrcSet=="string"?Y.imageSrcSet:void 0,imageSizes:typeof Y.imageSizes=="string"?Y.imageSizes:void 0,media:typeof Y.media=="string"?Y.media:void 0})}},reactDom_production.preloadModule=function(Z,Y){if(typeof Z=="string")if(Y){var te=A(Y.as,Y.crossOrigin);u.d.m(Z,{as:typeof Y.as=="string"&&Y.as!=="script"?Y.as:void 0,crossOrigin:te,integrity:typeof Y.integrity=="string"?Y.integrity:void 0})}else u.d.m(Z)},reactDom_production.requestFormReset=function(Z){u.d.r(Z)},reactDom_production.unstable_batchedUpdates=function(Z,Y){return Z(Y)},reactDom_production.useFormState=function(Z,Y,te){return T.H.useFormState(Z,Y,te)},reactDom_production.useFormStatus=function(){return T.H.useHostTransitionStatus()},reactDom_production.version="19.1.1",reactDom_production}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),reactDom.exports=requireReactDom_production(),reactDom.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDomClient_production;function requireReactDomClient_production(){if(hasRequiredReactDomClient_production)return reactDomClient_production;hasRequiredReactDomClient_production=1;var i=requireScheduler(),l=requireReact(),x=requireReactDom();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function T(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(k(e)!==e)throw Error(u(188))}function Z(e){var t=e.alternate;if(!t){if(t=k(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return A(a),e;if(o===r)return A(a),t;o=o.sibling}throw Error(u(188))}if(n.return!==r.return)n=a,r=o;else{for(var H=!1,ne=a.child;ne;){if(ne===n){H=!0,n=a,r=o;break}if(ne===r){H=!0,r=a,n=o;break}ne=ne.sibling}if(!H){for(ne=o.child;ne;){if(ne===n){H=!0,n=o,r=a;break}if(ne===r){H=!0,r=o,n=a;break}ne=ne.sibling}if(!H)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var te=Object.assign,Ye=Symbol.for("react.element"),tt=Symbol.for("react.transitional.element"),it=Symbol.for("react.portal"),lt=Symbol.for("react.fragment"),pt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),At=Symbol.for("react.provider"),Tt=Symbol.for("react.consumer"),Dt=Symbol.for("react.context"),Ut=Symbol.for("react.forward_ref"),Mt=Symbol.for("react.suspense"),Vt=Symbol.for("react.suspense_list"),Zt=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),tn=Symbol.for("react.activity"),_n=Symbol.for("react.memo_cache_sentinel"),Tn=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Tn&&e[Tn]||e["@@iterator"],typeof e=="function"?e:null)}var Hn=Symbol.for("react.client.reference");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Hn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lt:return"Fragment";case xt:return"Profiler";case pt:return"StrictMode";case Mt:return"Suspense";case Vt:return"SuspenseList";case tn:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case it:return"Portal";case Dt:return(e.displayName||"Context")+".Provider";case Tt:return(e._context.displayName||"Context")+".Consumer";case Ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zt:return t=e.displayName||null,t!==null?t:Wt(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Wt(e(t))}catch{}}return null}var mn=Array.isArray,vt=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt={pending:!1,data:null,method:null,action:null},Jt=[],nt=-1;function bt(e){return{current:e}}function kt(e){0>nt||(e.current=Jt[nt],Jt[nt]=null,nt--)}function Ot(e,t){nt++,Jt[nt]=e.current,e.current=t}var Nt=bt(null),Gt=bt(null),zt=bt(null),Sn=bt(null);function $t(e,t){switch(Ot(zt,t),Ot(Gt,e),Ot(Nt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zd(t),e=$d(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}kt(Nt),Ot(Nt,e)}function Bn(){kt(Nt),kt(Gt),kt(zt)}function mr(e){e.memoizedState!==null&&Ot(Sn,e);var t=Nt.current,n=$d(t,e.type);t!==n&&(Ot(Gt,e),Ot(Nt,n))}function gr(e){Gt.current===e&&(kt(Nt),kt(Gt)),Sn.current===e&&(kt(Sn),ll._currentValue=qt)}var Yn=Object.prototype.hasOwnProperty,Gn=i.unstable_scheduleCallback,Jn=i.unstable_cancelCallback,Yr=i.unstable_shouldYield,Gr=i.unstable_requestPaint,gn=i.unstable_now,Pr=i.unstable_getCurrentPriorityLevel,Tr=i.unstable_ImmediatePriority,br=i.unstable_UserBlockingPriority,Pn=i.unstable_NormalPriority,zn=i.unstable_LowPriority,Sr=i.unstable_IdlePriority,f=i.log,ct=i.unstable_setDisableYieldValue,Et=null,ee=null;function s(e){if(typeof f=="function"&&ct(e),ee&&typeof ee.setStrictMode=="function")try{ee.setStrictMode(Et,e)}catch{}}var g=Math.clz32?Math.clz32:Ve,p=Math.log,me=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(p(e)/me|0)|0}var rt=256,mt=4194304;function dt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,o=e.suspendedLanes,H=e.pingedLanes;e=e.warmLanes;var ne=r&134217727;return ne!==0?(r=ne&~o,r!==0?a=dt(r):(H&=ne,H!==0?a=dt(H):n||(n=ne&~e,n!==0&&(a=dt(n))))):(ne=r&~o,ne!==0?a=dt(ne):H!==0?a=dt(H):n||(n=r&~e,n!==0&&(a=dt(n)))),a===0?0:t!==0&&t!==a&&(t&o)===0&&(o=a&-a,n=t&-t,o>=n||o===32&&(n&4194048)!==0)?t:a}function gt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ct(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var e=rt;return rt<<=1,(rt&4194048)===0&&(rt=256),e}function Ht(){var e=mt;return mt<<=1,(mt&62914560)===0&&(mt=4194304),e}function Vn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eh(e,t,n,r,a,o){var H=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var ne=e.entanglements,et=e.expirationTimes,st=e.hiddenUpdates;for(n=H&~n;0<n;){var St=31-g(n),Rt=1<<St;ne[St]=0,et[St]=-1;var ft=st[St];if(ft!==null)for(st[St]=null,St=0;St<ft.length;St++){var ht=ft[St];ht!==null&&(ht.lane&=-536870913)}n&=~Rt}r!==0&&Bs(e,r,0),o!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=o&~(H&~t))}function Bs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-g(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-g(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Eo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function js(){var e=yt.p;return e!==0?e:(e=window.event,e===void 0?32:gh(e.type))}function wh(e,t){var n=yt.p;try{return yt.p=e,t()}finally{yt.p=n}}var Vr=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Vr,Xn="__reactProps$"+Vr,Oa="__reactContainer$"+Vr,_o="__reactEvents$"+Vr,_h="__reactListeners$"+Vr,Rh="__reactHandles$"+Vr,Us="__reactResources$"+Vr,yi="__reactMarker$"+Vr;function Ro(e){delete e[Ln],delete e[Xn],delete e[_o],delete e[_h],delete e[Rh]}function Na(e){var t=e[Ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Oa]||n[Ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=th(e);e!==null;){if(n=e[Ln])return n;e=th(e)}return t}e=n,n=e.parentNode}return null}function Ba(e){if(e=e[Ln]||e[Oa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function vi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function qa(e){var t=e[Us];return t||(t=e[Us]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Mn(e){e[yi]=!0}var zs=new Set,Ls={};function ma(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Ls[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var Ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Is={},Hs={};function Th(e){return Yn.call(Hs,e)?!0:Yn.call(Is,e)?!1:Ah.test(e)?Hs[e]=!0:(Is[e]=!0,!1)}function fl(e,t,n){if(Th(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Cr(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var Ao,Fs;function Ua(e){if(Ao===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ao=t&&t[1]||"",Fs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ao+e+Fs}var To=!1;function Co(e,t){if(!e||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(ht){var ft=ht}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(ht){ft=ht}e.call(Rt.prototype)}}else{try{throw Error()}catch(ht){ft=ht}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(ht){if(ht&&ft&&typeof ht.stack=="string")return[ht.stack,ft.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),H=o[0],ne=o[1];if(H&&ne){var et=H.split(`
`),st=ne.split(`
`);for(a=r=0;r<et.length&&!et[r].includes("DetermineComponentFrameRoot");)r++;for(;a<st.length&&!st[a].includes("DetermineComponentFrameRoot");)a++;if(r===et.length||a===st.length)for(r=et.length-1,a=st.length-1;1<=r&&0<=a&&et[r]!==st[a];)a--;for(;1<=r&&0<=a;r--,a--)if(et[r]!==st[a]){if(r!==1||a!==1)do if(r--,a--,0>a||et[r]!==st[a]){var St=`
`+et[r].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=r&&0<=a);break}}}finally{To=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ua(n):""}function Ch(e){switch(e.tag){case 26:case 27:case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Co(e.type,!1);case 11:return Co(e.type.render,!1);case 1:return Co(e.type,!0);case 31:return Ua("Activity");default:return""}}function Ys(e){try{var t="";do t+=Ch(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function lr(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kh(e){var t=Gs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(H){r=""+H,o.call(this,H)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(H){r=""+H},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hl(e){e._valueTracker||(e._valueTracker=kh(e))}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mh=/[\n"\\]/g;function or(e){return e.replace(Mh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ko(e,t,n,r,a,o,H,ne){e.name="",H!=null&&typeof H!="function"&&typeof H!="symbol"&&typeof H!="boolean"?e.type=H:e.removeAttribute("type"),t!=null?H==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+lr(t)):e.value!==""+lr(t)&&(e.value=""+lr(t)):H!=="submit"&&H!=="reset"||e.removeAttribute("value"),t!=null?Mo(e,H,lr(t)):n!=null?Mo(e,H,lr(n)):r!=null&&e.removeAttribute("value"),a==null&&o!=null&&(e.defaultChecked=!!o),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),ne!=null&&typeof ne!="function"&&typeof ne!="symbol"&&typeof ne!="boolean"?e.name=""+lr(ne):e.removeAttribute("name")}function Vs(e,t,n,r,a,o,H,ne){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;n=n!=null?""+lr(n):"",t=t!=null?""+lr(t):n,ne||t===e.value||(e.value=t),e.defaultValue=t}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=ne?e.checked:!!r,e.defaultChecked=!!r,H!=null&&typeof H!="function"&&typeof H!="symbol"&&typeof H!="boolean"&&(e.name=H)}function Mo(e,t,n){t==="number"&&pl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function za(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+lr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Xs(e,t,n){if(t!=null&&(t=""+lr(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+lr(n):""}function Ks(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(u(92));if(mn(r)){if(1<r.length)throw Error(u(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=lr(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function La(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qs(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Dh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zs(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qs(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qs(e,o,t[o])}function Do(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return Nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oo=null;function No(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Ha=null;function $s(e){var t=Ba(e);if(t&&(e=t.stateNode)){var n=e[Xn]||null;e:switch(e=t.stateNode,t.type){case"input":if(ko(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+or(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Xn]||null;if(!a)throw Error(u(90));ko(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ps(r)}break e;case"textarea":Xs(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&za(e,!!n.multiple,t,!1)}}}var Bo=!1;function Js(e,t,n){if(Bo)return e(t,n);Bo=!0;try{var r=e(t);return r}finally{if(Bo=!1,(Ia!==null||Ha!==null)&&(eo(),Ia&&(t=Ia,e=Ha,Ha=Ia=null,$s(t),e)))for(t=0;t<e.length;t++)$s(e[t])}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Xn]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=!1;if(kr)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){qo=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{qo=!1}var Xr=null,jo=null,gl=null;function Ws(){if(gl)return gl;var e,t=jo,n=t.length,r,a="value"in Xr?Xr.value:Xr.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var H=n-e;for(r=1;r<=H&&t[n-r]===a[o-r];r++);return gl=a.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function ec(){return!1}function Kn(e){function t(n,r,a,o,H){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=H,this.currentTarget=null;for(var ne in e)e.hasOwnProperty(ne)&&(n=e[ne],this[ne]=n?n(o):o[ne]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vl:ec,this.isPropagationStopped=ec,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),t}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Kn(ga),Si=te({},ga,{view:0,detail:0}),Bh=Kn(Si),Uo,zo,Ei,bl=te({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Uo=e.screenX-Ei.screenX,zo=e.screenY-Ei.screenY):zo=Uo=0,Ei=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),tc=Kn(bl),qh=te({},bl,{dataTransfer:0}),jh=Kn(qh),Uh=te({},Si,{relatedTarget:0}),Lo=Kn(Uh),zh=te({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Lh=Kn(zh),Ih=te({},ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hh=Kn(Ih),Fh=te({},ga,{data:0}),nc=Kn(Fh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ph[e])?!!t[e]:!1}function Io(){return Vh}var Xh=te({},Si,{key:function(e){if(e.key){var t=Yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kh=Kn(Xh),Qh=te({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rc=Kn(Qh),Zh=te({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),$h=Kn(Zh),Jh=te({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wh=Kn(Jh),ep=te({},bl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Kn(ep),np=te({},ga,{newState:0,oldState:0}),rp=Kn(np),ap=[9,13,27,32],Ho=kr&&"CompositionEvent"in window,wi=null;kr&&"documentMode"in document&&(wi=document.documentMode);var ip=kr&&"TextEvent"in window&&!wi,ac=kr&&(!Ho||wi&&8<wi&&11>=wi),ic=" ",lc=!1;function oc(e,t){switch(e){case"keyup":return ap.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function lp(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(lc=!0,ic);case"textInput":return e=t.data,e===ic&&lc?null:e;default:return null}}function op(e,t){if(Fa)return e==="compositionend"||!Ho&&oc(e,t)?(e=Ws(),gl=jo=Xr=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!up[e.type]:t==="textarea"}function cc(e,t,n,r){Ia?Ha?Ha.push(r):Ha=[r]:Ia=r,t=lo(t,"onChange"),0<t.length&&(n=new xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Ri=null;function sp(e){Pd(e,0)}function Sl(e){var t=vi(e);if(Ps(t))return e}function fc(e,t){if(e==="change")return t}var dc=!1;if(kr){var Fo;if(kr){var Yo="oninput"in document;if(!Yo){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Yo=typeof hc.oninput=="function"}Fo=Yo}else Fo=!1;dc=Fo&&(!document.documentMode||9<document.documentMode)}function pc(){_i&&(_i.detachEvent("onpropertychange",mc),Ri=_i=null)}function mc(e){if(e.propertyName==="value"&&Sl(Ri)){var t=[];cc(t,Ri,e,No(e)),Js(sp,t)}}function cp(e,t,n){e==="focusin"?(pc(),_i=t,Ri=n,_i.attachEvent("onpropertychange",mc)):e==="focusout"&&pc()}function fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Ri)}function dp(e,t){if(e==="click")return Sl(t)}function hp(e,t){if(e==="input"||e==="change")return Sl(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:pp;function Ai(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Yn.call(t,a)||!Wn(e[a],t[a]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var n=gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gc(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pl(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mp=kr&&"documentMode"in document&&11>=document.documentMode,Ya=null,Po=null,Ti=null,Vo=!1;function bc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vo||Ya==null||Ya!==pl(r)||(r=Ya,"selectionStart"in r&&Go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&Ai(Ti,r)||(Ti=r,r=lo(Po,"onSelect"),0<r.length&&(t=new xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ya)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ga={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},Xo={},Sc={};kr&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function va(e){if(Xo[e])return Xo[e];if(!Ga[e])return e;var t=Ga[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return Xo[e]=t[n];return e}var Ec=va("animationend"),wc=va("animationiteration"),_c=va("animationstart"),gp=va("transitionrun"),yp=va("transitionstart"),vp=va("transitioncancel"),Rc=va("transitionend"),Ac=new Map,Ko="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ko.push("scrollEnd");function yr(e,t){Ac.set(e,t),ma(t,[e])}var Tc=new WeakMap;function ur(e,t){if(typeof e=="object"&&e!==null){var n=Tc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ys(t)},Tc.set(e,t),t)}return{value:e,source:t,stack:Ys(t)}}var sr=[],Pa=0,Qo=0;function El(){for(var e=Pa,t=Qo=Pa=0;t<e;){var n=sr[t];sr[t++]=null;var r=sr[t];sr[t++]=null;var a=sr[t];sr[t++]=null;var o=sr[t];if(sr[t++]=null,r!==null&&a!==null){var H=r.pending;H===null?a.next=a:(a.next=H.next,H.next=a),r.pending=a}o!==0&&Cc(n,a,o)}}function wl(e,t,n,r){sr[Pa++]=e,sr[Pa++]=t,sr[Pa++]=n,sr[Pa++]=r,Qo|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Zo(e,t,n,r){return wl(e,t,n,r),_l(e)}function Va(e,t){return wl(e,null,null,t),_l(e)}function Cc(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,o=e.return;o!==null;)o.childLanes|=n,r=o.alternate,r!==null&&(r.childLanes|=n),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(a=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,a&&t!==null&&(a=31-g(n),e=o.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),o):null}function _l(e){if(50<Ji)throw Ji=0,ns=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xa={};function xp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function er(e,t,n,r){return new xp(e,t,n,r)}function $o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mr(e,t){var n=e.alternate;return n===null?(n=er(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Rl(e,t,n,r,a,o){var H=0;if(r=e,typeof e=="function")$o(e)&&(H=1);else if(typeof e=="string")H=Sm(e,n,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case tn:return e=er(31,n,t,a),e.elementType=tn,e.lanes=o,e;case lt:return xa(n.children,a,o,t);case pt:H=8,a|=24;break;case xt:return e=er(12,n,t,a|2),e.elementType=xt,e.lanes=o,e;case Mt:return e=er(13,n,t,a),e.elementType=Mt,e.lanes=o,e;case Vt:return e=er(19,n,t,a),e.elementType=Vt,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case At:case Dt:H=10;break e;case Tt:H=9;break e;case Ut:H=11;break e;case Zt:H=14;break e;case an:H=16,r=null;break e}H=29,n=Error(u(130,e===null?"null":typeof e,"")),r=null}return t=er(H,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xa(e,t,n,r){return e=er(7,e,r,t),e.lanes=n,e}function Jo(e,t,n){return e=er(6,e,null,t),e.lanes=n,e}function Wo(e,t,n){return t=er(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ka=[],Qa=0,Al=null,Tl=0,cr=[],fr=0,ba=null,Dr=1,Or="";function Sa(e,t){Ka[Qa++]=Tl,Ka[Qa++]=Al,Al=e,Tl=t}function Mc(e,t,n){cr[fr++]=Dr,cr[fr++]=Or,cr[fr++]=ba,ba=e;var r=Dr;e=Or;var a=32-g(r)-1;r&=~(1<<a),n+=1;var o=32-g(t)+a;if(30<o){var H=a-a%5;o=(r&(1<<H)-1).toString(32),r>>=H,a-=H,Dr=1<<32-g(t)+a|n<<a|r,Or=o+e}else Dr=1<<o|n<<a|r,Or=e}function eu(e){e.return!==null&&(Sa(e,1),Mc(e,1,0))}function tu(e){for(;e===Al;)Al=Ka[--Qa],Ka[Qa]=null,Tl=Ka[--Qa],Ka[Qa]=null;for(;e===ba;)ba=cr[--fr],cr[fr]=null,Or=cr[--fr],cr[fr]=null,Dr=cr[--fr],cr[fr]=null}var Fn=null,xn=null,rn=!1,Ea=null,Er=!1,nu=Error(u(519));function wa(e){var t=Error(u(418,""));throw Mi(ur(t,e)),nu}function Dc(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ln]=e,t[Xn]=r,n){case"dialog":Qt("cancel",t),Qt("close",t);break;case"iframe":case"object":case"embed":Qt("load",t);break;case"video":case"audio":for(n=0;n<el.length;n++)Qt(el[n],t);break;case"source":Qt("error",t);break;case"img":case"image":case"link":Qt("error",t),Qt("load",t);break;case"details":Qt("toggle",t);break;case"input":Qt("invalid",t),Vs(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),hl(t);break;case"select":Qt("invalid",t);break;case"textarea":Qt("invalid",t),Ks(t,r.value,r.defaultValue,r.children),hl(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Qd(t.textContent,n)?(r.popover!=null&&(Qt("beforetoggle",t),Qt("toggle",t)),r.onScroll!=null&&Qt("scroll",t),r.onScrollEnd!=null&&Qt("scrollend",t),r.onClick!=null&&(t.onclick=oo),t=!0):t=!1,t||wa(e)}function Oc(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 13:Er=!1;return;case 27:case 3:Er=!0;return;default:Fn=Fn.return}}function Ci(e){if(e!==Fn)return!1;if(!rn)return Oc(e),rn=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vs(e.type,e.memoizedProps)),n=!n),n&&xn&&wa(e),Oc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){xn=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}xn=null}}else t===27?(t=xn,sa(e.type)?(e=Es,Es=null,xn=e):xn=t):xn=Fn?xr(e.stateNode.nextSibling):null;return!0}function ki(){xn=Fn=null,rn=!1}function Nc(){var e=Ea;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ea=null),e}function Mi(e){Ea===null?Ea=[e]:Ea.push(e)}var ru=bt(null),_a=null,Nr=null;function Kr(e,t,n){Ot(ru,t._currentValue),t._currentValue=n}function Br(e){e._currentValue=ru.current,kt(ru)}function au(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function iu(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var H=a.child;o=o.firstContext;e:for(;o!==null;){var ne=o;o=a;for(var et=0;et<t.length;et++)if(ne.context===t[et]){o.lanes|=n,ne=o.alternate,ne!==null&&(ne.lanes|=n),au(o.return,n,e),r||(H=null);break e}o=ne.next}}else if(a.tag===18){if(H=a.return,H===null)throw Error(u(341));H.lanes|=n,o=H.alternate,o!==null&&(o.lanes|=n),au(H,n,e),H=null}else H=a.child;if(H!==null)H.return=a;else for(H=a;H!==null;){if(H===e){H=null;break}if(a=H.sibling,a!==null){a.return=H.return,H=a;break}H=H.return}a=H}}function Di(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if((a.flags&524288)!==0)o=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var H=a.alternate;if(H===null)throw Error(u(387));if(H=H.memoizedProps,H!==null){var ne=a.type;Wn(a.pendingProps.value,H.value)||(e!==null?e.push(ne):e=[ne])}}else if(a===Sn.current){if(H=a.alternate,H===null)throw Error(u(387));H.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}a=a.return}e!==null&&iu(t,e,n,r),t.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){_a=e,Nr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return Bc(_a,e)}function kl(e,t){return _a===null&&Ra(e),Bc(e,t)}function Bc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Nr===null){if(e===null)throw Error(u(308));Nr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nr=Nr.next=t;return n}var bp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Sp=i.unstable_scheduleCallback,Ep=i.unstable_NormalPriority,Cn={$$typeof:Dt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new bp,data:new Map,refCount:0}}function Oi(e){e.refCount--,e.refCount===0&&Sp(Ep,function(){e.controller.abort()})}var Ni=null,ou=0,Za=0,$a=null;function wp(e,t){if(Ni===null){var n=Ni=[];ou=0,Za=ss(),$a={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ou++,t.then(qc,qc),t}function qc(){if(--ou===0&&Ni!==null){$a!==null&&($a.status="fulfilled");var e=Ni;Ni=null,Za=0,$a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _p(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(r.status="rejected",r.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),r}var jc=vt.S;vt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&wp(e,t),jc!==null&&jc(e,t)};var Aa=bt(null);function uu(){var e=Aa.current;return e!==null?e:dn.pooledCache}function Ml(e,t){t===null?Ot(Aa,Aa.current):Ot(Aa,t.pool)}function Uc(){var e=uu();return e===null?null:{parent:Cn._currentValue,pool:e}}var Bi=Error(u(460)),zc=Error(u(474)),Dl=Error(u(542)),su={then:function(){}};function Lc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ol(){}function Ic(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ol,Ol),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e;default:if(typeof t.status=="string")t.then(Ol,Ol);else{if(e=dn,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=r}},function(r){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fc(e),e}throw qi=t,Bi}}var qi=null;function Hc(){if(qi===null)throw Error(u(459));var e=qi;return qi=null,e}function Fc(e){if(e===Bi||e===Dl)throw Error(u(483))}var Qr=!1;function cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ln&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=_l(e),Cc(e,null,n),t}return wl(e,r,t,n),_l(e)}function ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}function du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var H={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?a=o=H:o=o.next=H,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var hu=!1;function Ui(){if(hu){var e=$a;if(e!==null)throw e}}function zi(e,t,n,r){hu=!1;var a=e.updateQueue;Qr=!1;var o=a.firstBaseUpdate,H=a.lastBaseUpdate,ne=a.shared.pending;if(ne!==null){a.shared.pending=null;var et=ne,st=et.next;et.next=null,H===null?o=st:H.next=st,H=et;var St=e.alternate;St!==null&&(St=St.updateQueue,ne=St.lastBaseUpdate,ne!==H&&(ne===null?St.firstBaseUpdate=st:ne.next=st,St.lastBaseUpdate=et))}if(o!==null){var Rt=a.baseState;H=0,St=st=et=null,ne=o;do{var ft=ne.lane&-536870913,ht=ft!==ne.lane;if(ht?(en&ft)===ft:(r&ft)===ft){ft!==0&&ft===Za&&(hu=!0),St!==null&&(St=St.next={lane:0,tag:ne.tag,payload:ne.payload,callback:null,next:null});e:{var Yt=e,Lt=ne;ft=t;var cn=n;switch(Lt.tag){case 1:if(Yt=Lt.payload,typeof Yt=="function"){Rt=Yt.call(cn,Rt,ft);break e}Rt=Yt;break e;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=Lt.payload,ft=typeof Yt=="function"?Yt.call(cn,Rt,ft):Yt,ft==null)break e;Rt=te({},Rt,ft);break e;case 2:Qr=!0}}ft=ne.callback,ft!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=a.callbacks,ht===null?a.callbacks=[ft]:ht.push(ft))}else ht={lane:ft,tag:ne.tag,payload:ne.payload,callback:ne.callback,next:null},St===null?(st=St=ht,et=Rt):St=St.next=ht,H|=ft;if(ne=ne.next,ne===null){if(ne=a.shared.pending,ne===null)break;ht=ne,ne=ht.next,ht.next=null,a.lastBaseUpdate=ht,a.shared.pending=null}}while(!0);St===null&&(et=Rt),a.baseState=et,a.firstBaseUpdate=st,a.lastBaseUpdate=St,o===null&&(a.shared.lanes=0),ia|=H,e.lanes=H,e.memoizedState=Rt}}function Yc(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Gc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Yc(n[e],t)}var Ja=bt(null),Nl=bt(0);function Pc(e,t){e=Hr,Ot(Nl,e),Ot(Ja,t),Hr=e|t.baseLanes}function pu(){Ot(Nl,Hr),Ot(Ja,Ja.current)}function mu(){Hr=Nl.current,kt(Ja),kt(Nl)}var Jr=0,Pt=null,un=null,Rn=null,Bl=!1,Wa=!1,Ta=!1,ql=0,Li=0,ei=null,Rp=0;function En(){throw Error(u(321))}function gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function yu(e,t,n,r,a,o){return Jr=o,Pt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vt.H=e===null||e.memoizedState===null?kf:Mf,Ta=!1,o=n(r,a),Ta=!1,Wa&&(o=Xc(t,n,r,a)),Vc(e),o}function Vc(e){vt.H=Hl;var t=un!==null&&un.next!==null;if(Jr=0,Rn=un=Pt=null,Bl=!1,Li=0,ei=null,t)throw Error(u(300));e===null||Dn||(e=e.dependencies,e!==null&&Cl(e)&&(Dn=!0))}function Xc(e,t,n,r){Pt=e;var a=0;do{if(Wa&&(ei=null),Li=0,Wa=!1,25<=a)throw Error(u(301));if(a+=1,Rn=un=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}vt.H=Op,o=t(n,r)}while(Wa);return o}function Ap(){var e=vt.H,t=e.useState()[0];return t=typeof t.then=="function"?Ii(t):t,e=e.useState()[0],(un!==null?un.memoizedState:null)!==e&&(Pt.flags|=1024),t}function vu(){var e=ql!==0;return ql=0,e}function xu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bu(e){if(Bl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bl=!1}Jr=0,Rn=un=Pt=null,Wa=!1,Li=ql=0,ei=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Pt.memoizedState=Rn=e:Rn=Rn.next=e,Rn}function An(){if(un===null){var e=Pt.alternate;e=e!==null?e.memoizedState:null}else e=un.next;var t=Rn===null?Pt.memoizedState:Rn.next;if(t!==null)Rn=t,un=e;else{if(e===null)throw Pt.alternate===null?Error(u(467)):Error(u(310));un=e,e={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},Rn===null?Pt.memoizedState=Rn=e:Rn=Rn.next=e}return Rn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ii(e){var t=Li;return Li+=1,ei===null&&(ei=[]),e=Ic(ei,e,t),t=Pt,(Rn===null?t.memoizedState:Rn.next)===null&&(t=t.alternate,vt.H=t===null||t.memoizedState===null?kf:Mf),e}function jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ii(e);if(e.$$typeof===Dt)return In(e)}throw Error(u(438,String(e)))}function Eu(e){var t=null,n=Pt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Pt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Su(),Pt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_n;return t.index++,n}function qr(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=An();return wu(t,un,e)}function wu(e,t,n){var r=e.queue;if(r===null)throw Error(u(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var H=a.next;a.next=o.next,o.next=H}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var ne=H=null,et=null,st=t,St=!1;do{var Rt=st.lane&-536870913;if(Rt!==st.lane?(en&Rt)===Rt:(Jr&Rt)===Rt){var ft=st.revertLane;if(ft===0)et!==null&&(et=et.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Rt===Za&&(St=!0);else if((Jr&ft)===ft){st=st.next,ft===Za&&(St=!0);continue}else Rt={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},et===null?(ne=et=Rt,H=o):et=et.next=Rt,Pt.lanes|=ft,ia|=ft;Rt=st.action,Ta&&n(o,Rt),o=st.hasEagerState?st.eagerState:n(o,Rt)}else ft={lane:Rt,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},et===null?(ne=et=ft,H=o):et=et.next=ft,Pt.lanes|=Rt,ia|=Rt;st=st.next}while(st!==null&&st!==t);if(et===null?H=o:et.next=ne,!Wn(o,e.memoizedState)&&(Dn=!0,St&&(n=$a,n!==null)))throw n;e.memoizedState=o,e.baseState=H,e.baseQueue=et,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function _u(e){var t=An(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var H=a=a.next;do o=e(o,H.action),H=H.next;while(H!==a);Wn(o,t.memoizedState)||(Dn=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Kc(e,t,n){var r=Pt,a=An(),o=rn;if(o){if(n===void 0)throw Error(u(407));n=n()}else n=t();var H=!Wn((un||a).memoizedState,n);H&&(a.memoizedState=n,Dn=!0),a=a.queue;var ne=$c.bind(null,r,a,e);if(Hi(2048,8,ne,[e]),a.getSnapshot!==t||H||Rn!==null&&Rn.memoizedState.tag&1){if(r.flags|=2048,ti(9,zl(),Zc.bind(null,r,a,n,t),null),dn===null)throw Error(u(349));o||(Jr&124)!==0||Qc(r,t,n)}return n}function Qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pt.updateQueue,t===null?(t=Su(),Pt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&Wc(e)}function $c(e,t,n){return n(function(){Jc(t)&&Wc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Wc(e){var t=Va(e,2);t!==null&&ir(t,e,2)}function Ru(e){var t=Qn();if(typeof e=="function"){var n=e;if(e=n(),Ta){s(!0);try{n()}finally{s(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t}function ef(e,t,n,r){return e.baseState=n,wu(e,un,typeof r=="function"?r:qr)}function Tp(e,t,n,r,a){if(Il(e))throw Error(u(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(H){o.listeners.push(H)}};vt.T!==null?n(!0):o.isTransition=!1,r(o),n=t.pending,n===null?(o.next=t.pending=o,tf(t,o)):(o.next=n.next,t.pending=n.next=o)}}function tf(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=vt.T,H={};vt.T=H;try{var ne=n(a,r),et=vt.S;et!==null&&et(H,ne),nf(e,t,ne)}catch(st){Au(e,t,st)}finally{vt.T=o}}else try{o=n(a,r),nf(e,t,o)}catch(st){Au(e,t,st)}}function nf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){rf(e,t,r)},function(r){return Au(e,t,r)}):rf(e,t,n)}function rf(e,t,n){t.status="fulfilled",t.value=n,af(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,tf(e,n)))}function Au(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,af(t),t=t.next;while(t!==r)}e.action=null}function af(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lf(e,t){return t}function of(e,t){if(rn){var n=dn.formState;if(n!==null){e:{var r=Pt;if(rn){if(xn){t:{for(var a=xn,o=Er;a.nodeType!==8;){if(!o){a=null;break t}if(a=xr(a.nextSibling),a===null){a=null;break t}}o=a.data,a=o==="F!"||o==="F"?a:null}if(a){xn=xr(a.nextSibling),r=a.data==="F!";break e}}wa(r)}r=!1}r&&(t=n[0])}}return n=Qn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},n.queue=r,n=Af.bind(null,Pt,r),r.dispatch=n,r=Ru(!1),o=Du.bind(null,Pt,!1,r.queue),r=Qn(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=Tp.bind(null,Pt,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function uf(e){var t=An();return sf(t,un,e)}function sf(e,t,n){if(t=wu(e,t,lf)[0],e=Ul(qr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ii(t)}catch(H){throw H===Bi?Dl:H}else r=t;t=An();var a=t.queue,o=a.dispatch;return n!==t.memoizedState&&(Pt.flags|=2048,ti(9,zl(),Cp.bind(null,a,n),null)),[r,o,e]}function Cp(e,t){e.action=t}function cf(e){var t=An(),n=un;if(n!==null)return sf(t,n,e);An(),t=t.memoizedState,n=An();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ti(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Pt.updateQueue,t===null&&(t=Su(),Pt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zl(){return{destroy:void 0,resource:void 0}}function ff(){return An().memoizedState}function Ll(e,t,n,r){var a=Qn();r=r===void 0?null:r,Pt.flags|=e,a.memoizedState=ti(1|t,zl(),n,r)}function Hi(e,t,n,r){var a=An();r=r===void 0?null:r;var o=a.memoizedState.inst;un!==null&&r!==null&&gu(r,un.memoizedState.deps)?a.memoizedState=ti(t,o,n,r):(Pt.flags|=e,a.memoizedState=ti(1|t,o,n,r))}function df(e,t){Ll(8390656,8,e,t)}function hf(e,t){Hi(2048,8,e,t)}function pf(e,t){return Hi(4,2,e,t)}function mf(e,t){return Hi(4,4,e,t)}function gf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yf(e,t,n){n=n!=null?n.concat([e]):null,Hi(4,4,gf.bind(null,t,e),n)}function Tu(){}function vf(e,t){var n=An();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xf(e,t){var n=An();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&gu(t,r[1]))return r[0];if(r=e(),Ta){s(!0);try{e()}finally{s(!1)}}return n.memoizedState=[r,t],r}function Cu(e,t,n){return n===void 0||(Jr&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ed(),Pt.lanes|=e,ia|=e,n)}function bf(e,t,n,r){return Wn(n,t)?n:Ja.current!==null?(e=Cu(e,n,r),Wn(e,t)||(Dn=!0),e):(Jr&42)===0?(Dn=!0,e.memoizedState=n):(e=Ed(),Pt.lanes|=e,ia|=e,t)}function Sf(e,t,n,r,a){var o=yt.p;yt.p=o!==0&&8>o?o:8;var H=vt.T,ne={};vt.T=ne,Du(e,!1,t,n);try{var et=a(),st=vt.S;if(st!==null&&st(ne,et),et!==null&&typeof et=="object"&&typeof et.then=="function"){var St=_p(et,r);Fi(e,t,St,ar(e))}else Fi(e,t,r,ar(e))}catch(Rt){Fi(e,t,{then:function(){},status:"rejected",reason:Rt},ar())}finally{yt.p=o,vt.T=H}}function kp(){}function ku(e,t,n,r){if(e.tag!==5)throw Error(u(476));var a=Ef(e).queue;Sf(e,a,t,qt,n===null?kp:function(){return wf(e),n(r)})}function Ef(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:qt,baseState:qt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:qt},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function wf(e){var t=Ef(e).next.queue;Fi(e,t,{},ar())}function Mu(){return In(ll)}function _f(){return An().memoizedState}function Rf(){return An().memoizedState}function Mp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ar();e=Zr(n);var r=$r(t,e,n);r!==null&&(ir(r,t,n),ji(r,t,n)),t={cache:lu()},e.payload=t;return}t=t.return}}function Dp(e,t,n){var r=ar();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Il(e)?Tf(t,n):(n=Zo(e,t,n,r),n!==null&&(ir(n,e,r),Cf(n,t,r)))}function Af(e,t,n){var r=ar();Fi(e,t,n,r)}function Fi(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Il(e))Tf(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var H=t.lastRenderedState,ne=o(H,n);if(a.hasEagerState=!0,a.eagerState=ne,Wn(ne,H))return wl(e,t,a,0),dn===null&&El(),!1}catch{}finally{}if(n=Zo(e,t,a,r),n!==null)return ir(n,e,r),Cf(n,t,r),!0}return!1}function Du(e,t,n,r){if(r={lane:2,revertLane:ss(),action:r,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(t)throw Error(u(479))}else t=Zo(e,n,r,2),t!==null&&ir(t,e,2)}function Il(e){var t=e.alternate;return e===Pt||t!==null&&t===Pt}function Tf(e,t){Wa=Bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cf(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qs(e,n)}}var Hl={readContext:In,use:jl,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},kf={readContext:In,use:jl,useCallback:function(e,t){return Qn().memoizedState=[e,t===void 0?null:t],e},useContext:In,useEffect:df,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ll(4194308,4,gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){Ll(4,2,e,t)},useMemo:function(e,t){var n=Qn();t=t===void 0?null:t;var r=e();if(Ta){s(!0);try{e()}finally{s(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Qn();if(n!==void 0){var a=n(t);if(Ta){s(!0);try{n(t)}finally{s(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Dp.bind(null,Pt,e),[r.memoizedState,e]},useRef:function(e){var t=Qn();return e={current:e},t.memoizedState=e},useState:function(e){e=Ru(e);var t=e.queue,n=Af.bind(null,Pt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tu,useDeferredValue:function(e,t){var n=Qn();return Cu(n,e,t)},useTransition:function(){var e=Ru(!1);return e=Sf.bind(null,Pt,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Pt,a=Qn();if(rn){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),dn===null)throw Error(u(349));(en&124)!==0||Qc(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,df($c.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,zl(),Zc.bind(null,r,o,n,t),null),n},useId:function(){var e=Qn(),t=dn.identifierPrefix;if(rn){var n=Or,r=Dr;n=(r&~(1<<32-g(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=ql++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Rp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Mu,useFormState:of,useActionState:of,useOptimistic:function(e){var t=Qn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Du.bind(null,Pt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Eu,useCacheRefresh:function(){return Qn().memoizedState=Mp.bind(null,Pt)}},Mf={readContext:In,use:jl,useCallback:vf,useContext:In,useEffect:hf,useImperativeHandle:yf,useInsertionEffect:pf,useLayoutEffect:mf,useMemo:xf,useReducer:Ul,useRef:ff,useState:function(){return Ul(qr)},useDebugValue:Tu,useDeferredValue:function(e,t){var n=An();return bf(n,un.memoizedState,e,t)},useTransition:function(){var e=Ul(qr)[0],t=An().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Kc,useId:_f,useHostTransitionStatus:Mu,useFormState:uf,useActionState:uf,useOptimistic:function(e,t){var n=An();return ef(n,un,e,t)},useMemoCache:Eu,useCacheRefresh:Rf},Op={readContext:In,use:jl,useCallback:vf,useContext:In,useEffect:hf,useImperativeHandle:yf,useInsertionEffect:pf,useLayoutEffect:mf,useMemo:xf,useReducer:_u,useRef:ff,useState:function(){return _u(qr)},useDebugValue:Tu,useDeferredValue:function(e,t){var n=An();return un===null?Cu(n,e,t):bf(n,un.memoizedState,e,t)},useTransition:function(){var e=_u(qr)[0],t=An().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Kc,useId:_f,useHostTransitionStatus:Mu,useFormState:cf,useActionState:cf,useOptimistic:function(e,t){var n=An();return un!==null?ef(n,un,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:Rf},ni=null,Yi=0;function Fl(e){var t=Yi;return Yi+=1,ni===null&&(ni=[]),Ic(ni,e,t)}function Gi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yl(e,t){throw t.$$typeof===Ye?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Df(e){var t=e._init;return t(e._payload)}function Of(e){function t(ot,at){if(e){var ut=ot.deletions;ut===null?(ot.deletions=[at],ot.flags|=16):ut.push(at)}}function n(ot,at){if(!e)return null;for(;at!==null;)t(ot,at),at=at.sibling;return null}function r(ot){for(var at=new Map;ot!==null;)ot.key!==null?at.set(ot.key,ot):at.set(ot.index,ot),ot=ot.sibling;return at}function a(ot,at){return ot=Mr(ot,at),ot.index=0,ot.sibling=null,ot}function o(ot,at,ut){return ot.index=ut,e?(ut=ot.alternate,ut!==null?(ut=ut.index,ut<at?(ot.flags|=67108866,at):ut):(ot.flags|=67108866,at)):(ot.flags|=1048576,at)}function H(ot){return e&&ot.alternate===null&&(ot.flags|=67108866),ot}function ne(ot,at,ut,wt){return at===null||at.tag!==6?(at=Jo(ut,ot.mode,wt),at.return=ot,at):(at=a(at,ut),at.return=ot,at)}function et(ot,at,ut,wt){var Bt=ut.type;return Bt===lt?St(ot,at,ut.props.children,wt,ut.key):at!==null&&(at.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===an&&Df(Bt)===at.type)?(at=a(at,ut.props),Gi(at,ut),at.return=ot,at):(at=Rl(ut.type,ut.key,ut.props,null,ot.mode,wt),Gi(at,ut),at.return=ot,at)}function st(ot,at,ut,wt){return at===null||at.tag!==4||at.stateNode.containerInfo!==ut.containerInfo||at.stateNode.implementation!==ut.implementation?(at=Wo(ut,ot.mode,wt),at.return=ot,at):(at=a(at,ut.children||[]),at.return=ot,at)}function St(ot,at,ut,wt,Bt){return at===null||at.tag!==7?(at=xa(ut,ot.mode,wt,Bt),at.return=ot,at):(at=a(at,ut),at.return=ot,at)}function Rt(ot,at,ut){if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return at=Jo(""+at,ot.mode,ut),at.return=ot,at;if(typeof at=="object"&&at!==null){switch(at.$$typeof){case tt:return ut=Rl(at.type,at.key,at.props,null,ot.mode,ut),Gi(ut,at),ut.return=ot,ut;case it:return at=Wo(at,ot.mode,ut),at.return=ot,at;case an:var wt=at._init;return at=wt(at._payload),Rt(ot,at,ut)}if(mn(at)||pn(at))return at=xa(at,ot.mode,ut,null),at.return=ot,at;if(typeof at.then=="function")return Rt(ot,Fl(at),ut);if(at.$$typeof===Dt)return Rt(ot,kl(ot,at),ut);Yl(ot,at)}return null}function ft(ot,at,ut,wt){var Bt=at!==null?at.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return Bt!==null?null:ne(ot,at,""+ut,wt);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case tt:return ut.key===Bt?et(ot,at,ut,wt):null;case it:return ut.key===Bt?st(ot,at,ut,wt):null;case an:return Bt=ut._init,ut=Bt(ut._payload),ft(ot,at,ut,wt)}if(mn(ut)||pn(ut))return Bt!==null?null:St(ot,at,ut,wt,null);if(typeof ut.then=="function")return ft(ot,at,Fl(ut),wt);if(ut.$$typeof===Dt)return ft(ot,at,kl(ot,ut),wt);Yl(ot,ut)}return null}function ht(ot,at,ut,wt,Bt){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return ot=ot.get(ut)||null,ne(at,ot,""+wt,Bt);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case tt:return ot=ot.get(wt.key===null?ut:wt.key)||null,et(at,ot,wt,Bt);case it:return ot=ot.get(wt.key===null?ut:wt.key)||null,st(at,ot,wt,Bt);case an:var Xt=wt._init;return wt=Xt(wt._payload),ht(ot,at,ut,wt,Bt)}if(mn(wt)||pn(wt))return ot=ot.get(ut)||null,St(at,ot,wt,Bt,null);if(typeof wt.then=="function")return ht(ot,at,ut,Fl(wt),Bt);if(wt.$$typeof===Dt)return ht(ot,at,ut,kl(at,wt),Bt);Yl(at,wt)}return null}function Yt(ot,at,ut,wt){for(var Bt=null,Xt=null,jt=at,It=at=0,Nn=null;jt!==null&&It<ut.length;It++){jt.index>It?(Nn=jt,jt=null):Nn=jt.sibling;var nn=ft(ot,jt,ut[It],wt);if(nn===null){jt===null&&(jt=Nn);break}e&&jt&&nn.alternate===null&&t(ot,jt),at=o(nn,at,It),Xt===null?Bt=nn:Xt.sibling=nn,Xt=nn,jt=Nn}if(It===ut.length)return n(ot,jt),rn&&Sa(ot,It),Bt;if(jt===null){for(;It<ut.length;It++)jt=Rt(ot,ut[It],wt),jt!==null&&(at=o(jt,at,It),Xt===null?Bt=jt:Xt.sibling=jt,Xt=jt);return rn&&Sa(ot,It),Bt}for(jt=r(jt);It<ut.length;It++)Nn=ht(jt,ot,It,ut[It],wt),Nn!==null&&(e&&Nn.alternate!==null&&jt.delete(Nn.key===null?It:Nn.key),at=o(Nn,at,It),Xt===null?Bt=Nn:Xt.sibling=Nn,Xt=Nn);return e&&jt.forEach(function(pa){return t(ot,pa)}),rn&&Sa(ot,It),Bt}function Lt(ot,at,ut,wt){if(ut==null)throw Error(u(151));for(var Bt=null,Xt=null,jt=at,It=at=0,Nn=null,nn=ut.next();jt!==null&&!nn.done;It++,nn=ut.next()){jt.index>It?(Nn=jt,jt=null):Nn=jt.sibling;var pa=ft(ot,jt,nn.value,wt);if(pa===null){jt===null&&(jt=Nn);break}e&&jt&&pa.alternate===null&&t(ot,jt),at=o(pa,at,It),Xt===null?Bt=pa:Xt.sibling=pa,Xt=pa,jt=Nn}if(nn.done)return n(ot,jt),rn&&Sa(ot,It),Bt;if(jt===null){for(;!nn.done;It++,nn=ut.next())nn=Rt(ot,nn.value,wt),nn!==null&&(at=o(nn,at,It),Xt===null?Bt=nn:Xt.sibling=nn,Xt=nn);return rn&&Sa(ot,It),Bt}for(jt=r(jt);!nn.done;It++,nn=ut.next())nn=ht(jt,ot,It,nn.value,wt),nn!==null&&(e&&nn.alternate!==null&&jt.delete(nn.key===null?It:nn.key),at=o(nn,at,It),Xt===null?Bt=nn:Xt.sibling=nn,Xt=nn);return e&&jt.forEach(function(Nm){return t(ot,Nm)}),rn&&Sa(ot,It),Bt}function cn(ot,at,ut,wt){if(typeof ut=="object"&&ut!==null&&ut.type===lt&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case tt:e:{for(var Bt=ut.key;at!==null;){if(at.key===Bt){if(Bt=ut.type,Bt===lt){if(at.tag===7){n(ot,at.sibling),wt=a(at,ut.props.children),wt.return=ot,ot=wt;break e}}else if(at.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===an&&Df(Bt)===at.type){n(ot,at.sibling),wt=a(at,ut.props),Gi(wt,ut),wt.return=ot,ot=wt;break e}n(ot,at);break}else t(ot,at);at=at.sibling}ut.type===lt?(wt=xa(ut.props.children,ot.mode,wt,ut.key),wt.return=ot,ot=wt):(wt=Rl(ut.type,ut.key,ut.props,null,ot.mode,wt),Gi(wt,ut),wt.return=ot,ot=wt)}return H(ot);case it:e:{for(Bt=ut.key;at!==null;){if(at.key===Bt)if(at.tag===4&&at.stateNode.containerInfo===ut.containerInfo&&at.stateNode.implementation===ut.implementation){n(ot,at.sibling),wt=a(at,ut.children||[]),wt.return=ot,ot=wt;break e}else{n(ot,at);break}else t(ot,at);at=at.sibling}wt=Wo(ut,ot.mode,wt),wt.return=ot,ot=wt}return H(ot);case an:return Bt=ut._init,ut=Bt(ut._payload),cn(ot,at,ut,wt)}if(mn(ut))return Yt(ot,at,ut,wt);if(pn(ut)){if(Bt=pn(ut),typeof Bt!="function")throw Error(u(150));return ut=Bt.call(ut),Lt(ot,at,ut,wt)}if(typeof ut.then=="function")return cn(ot,at,Fl(ut),wt);if(ut.$$typeof===Dt)return cn(ot,at,kl(ot,ut),wt);Yl(ot,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,at!==null&&at.tag===6?(n(ot,at.sibling),wt=a(at,ut),wt.return=ot,ot=wt):(n(ot,at),wt=Jo(ut,ot.mode,wt),wt.return=ot,ot=wt),H(ot)):n(ot,at)}return function(ot,at,ut,wt){try{Yi=0;var Bt=cn(ot,at,ut,wt);return ni=null,Bt}catch(jt){if(jt===Bi||jt===Dl)throw jt;var Xt=er(29,jt,null,ot.mode);return Xt.lanes=wt,Xt.return=ot,Xt}finally{}}}var ri=Of(!0),Nf=Of(!1),dr=bt(null),wr=null;function Wr(e){var t=e.alternate;Ot(kn,kn.current&1),Ot(dr,e),wr===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(wr=e)}function Bf(e){if(e.tag===22){if(Ot(kn,kn.current),Ot(dr,e),wr===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(wr=e)}}else ea()}function ea(){Ot(kn,kn.current),Ot(dr,dr.current)}function jr(e){kt(dr),wr===e&&(wr=null),kt(kn)}var kn=bt(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Ss(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ar(),a=Zr(r);a.payload=t,n!=null&&(a.callback=n),t=$r(e,a,r),t!==null&&(ir(t,e,r),ji(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ar(),a=Zr(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$r(e,a,r),t!==null&&(ir(t,e,r),ji(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ar(),r=Zr(n);r.tag=2,t!=null&&(r.callback=t),t=$r(e,r,n),t!==null&&(ir(t,e,n),ji(t,e,n))}};function qf(e,t,n,r,a,o,H){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,H):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(a,o):!0}function jf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=te({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var Pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uf(e){Pl(e)}function zf(e){console.error(e)}function Lf(e){Pl(e)}function Vl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function If(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Bu(e,t,n){return n=Zr(n),n.tag=3,n.payload={element:null},n.callback=function(){Vl(e,t)},n}function Hf(e){return e=Zr(e),e.tag=3,e}function Ff(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){If(t,n,r)}}var H=n.stateNode;H!==null&&typeof H.componentDidCatch=="function"&&(e.callback=function(){If(t,n,r),typeof a!="function"&&(la===null?la=new Set([this]):la.add(this));var ne=r.stack;this.componentDidCatch(r.value,{componentStack:ne!==null?ne:""})})}function Np(e,t,n,r,a){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Di(t,n,a,!0),n=dr.current,n!==null){switch(n.tag){case 13:return wr===null?as():n.alternate===null&&bn===0&&(bn=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===su?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ls(e,r,a)),!1;case 22:return n.flags|=65536,r===su?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ls(e,r,a)),!1}throw Error(u(435,n.tag))}return ls(e,r,a),as(),!1}if(rn)return t=dr.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==nu&&(e=Error(u(422),{cause:r}),Mi(ur(e,n)))):(r!==nu&&(t=Error(u(423),{cause:r}),Mi(ur(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ur(r,n),a=Bu(e.stateNode,r,a),du(e,a),bn!==4&&(bn=2)),!1;var o=Error(u(520),{cause:r});if(o=ur(o,n),$i===null?$i=[o]:$i.push(o),bn!==4&&(bn=2),t===null)return!0;r=ur(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Bu(n.stateNode,r,e),du(n,e),!1;case 1:if(t=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(la===null||!la.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Hf(a),Ff(a,e,n,r),du(n,a),!1}n=n.return}while(n!==null);return!1}var Yf=Error(u(461)),Dn=!1;function qn(e,t,n,r){t.child=e===null?Nf(t,null,n,r):ri(t,e.child,n,r)}function Gf(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var H={};for(var ne in r)ne!=="ref"&&(H[ne]=r[ne])}else H=r;return Ra(t),r=yu(e,t,n,H,o,a),ne=vu(),e!==null&&!Dn?(xu(e,t,a),Ur(e,t,a)):(rn&&ne&&eu(t),t.flags|=1,qn(e,t,r,a),t.child)}function Pf(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!$o(o)&&o.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=o,Vf(e,t,o,r,a)):(e=Rl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Fu(e,a)){var H=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(H,r)&&e.ref===t.ref)return Ur(e,t,a)}return t.flags|=1,e=Mr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(Dn=!1,t.pendingProps=r=o,Fu(e,a))(e.flags&131072)!==0&&(Dn=!0);else return t.lanes=e.lanes,Ur(e,t,a)}return qu(e,t,n,r,a)}function Xf(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=o!==null?o.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;t.childLanes=o&~r}else t.childLanes=0,t.child=null;return Kf(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(t,o!==null?o.cachePool:null),o!==null?Pc(t,o):pu(),Bf(t);else return t.lanes=t.childLanes=536870912,Kf(e,t,o!==null?o.baseLanes|n:n,n)}else o!==null?(Ml(t,o.cachePool),Pc(t,o),ea(),t.memoizedState=null):(e!==null&&Ml(t,null),pu(),ea());return qn(e,t,a,n),t.child}function Kf(e,t,n,r){var a=uu();return a=a===null?null:{parent:Cn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ml(t,null),pu(),Bf(t),e!==null&&Di(e,t,r,!0),null}function Xl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qu(e,t,n,r,a){return Ra(t),n=yu(e,t,n,r,void 0,a),r=vu(),e!==null&&!Dn?(xu(e,t,a),Ur(e,t,a)):(rn&&r&&eu(t),t.flags|=1,qn(e,t,n,a),t.child)}function Qf(e,t,n,r,a,o){return Ra(t),t.updateQueue=null,n=Xc(t,r,n,a),Vc(e),r=vu(),e!==null&&!Dn?(xu(e,t,o),Ur(e,t,o)):(rn&&r&&eu(t),t.flags|=1,qn(e,t,n,o),t.child)}function Zf(e,t,n,r,a){if(Ra(t),t.stateNode===null){var o=Xa,H=n.contextType;typeof H=="object"&&H!==null&&(o=In(H)),o=new n(r,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Nu,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=r,o.state=t.memoizedState,o.refs={},cu(t),H=n.contextType,o.context=typeof H=="object"&&H!==null?In(H):Xa,o.state=t.memoizedState,H=n.getDerivedStateFromProps,typeof H=="function"&&(Ou(t,n,H,r),o.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(H=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),H!==o.state&&Nu.enqueueReplaceState(o,o.state,null),zi(t,r,o,a),Ui(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){o=t.stateNode;var ne=t.memoizedProps,et=Ca(n,ne);o.props=et;var st=o.context,St=n.contextType;H=Xa,typeof St=="object"&&St!==null&&(H=In(St));var Rt=n.getDerivedStateFromProps;St=typeof Rt=="function"||typeof o.getSnapshotBeforeUpdate=="function",ne=t.pendingProps!==ne,St||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(ne||st!==H)&&jf(t,o,r,H),Qr=!1;var ft=t.memoizedState;o.state=ft,zi(t,r,o,a),Ui(),st=t.memoizedState,ne||ft!==st||Qr?(typeof Rt=="function"&&(Ou(t,n,Rt,r),st=t.memoizedState),(et=Qr||qf(t,n,et,r,ft,st,H))?(St||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=st),o.props=r,o.state=st,o.context=H,r=et):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fu(e,t),H=t.memoizedProps,St=Ca(n,H),o.props=St,Rt=t.pendingProps,ft=o.context,st=n.contextType,et=Xa,typeof st=="object"&&st!==null&&(et=In(st)),ne=n.getDerivedStateFromProps,(st=typeof ne=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(H!==Rt||ft!==et)&&jf(t,o,r,et),Qr=!1,ft=t.memoizedState,o.state=ft,zi(t,r,o,a),Ui();var ht=t.memoizedState;H!==Rt||ft!==ht||Qr||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof ne=="function"&&(Ou(t,n,ne,r),ht=t.memoizedState),(St=Qr||qf(t,n,St,r,ft,ht,et)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(st||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,ht,et),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,ht,et)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||H===e.memoizedProps&&ft===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||H===e.memoizedProps&&ft===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=ht),o.props=r,o.state=ht,o.context=et,r=St):(typeof o.componentDidUpdate!="function"||H===e.memoizedProps&&ft===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||H===e.memoizedProps&&ft===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Xl(e,t),r=(t.flags&128)!==0,o||r?(o=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&r?(t.child=ri(t,e.child,null,a),t.child=ri(t,null,n,a)):qn(e,t,n,a),t.memoizedState=o.state,e=t.child):e=Ur(e,t,a),e}function $f(e,t,n,r){return ki(),t.flags|=256,qn(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(e){return{baseLanes:e,cachePool:Uc()}}function zu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=hr),e}function Jf(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!==0,H;if((H=o)||(H=e!==null&&e.memoizedState===null?!1:(kn.current&2)!==0),H&&(a=!0,t.flags&=-129),H=(t.flags&32)!==0,t.flags&=-33,e===null){if(rn){if(a?Wr(t):ea(),rn){var ne=xn,et;if(et=ne){e:{for(et=ne,ne=Er;et.nodeType!==8;){if(!ne){ne=null;break e}if(et=xr(et.nextSibling),et===null){ne=null;break e}}ne=et}ne!==null?(t.memoizedState={dehydrated:ne,treeContext:ba!==null?{id:Dr,overflow:Or}:null,retryLane:536870912,hydrationErrors:null},et=er(18,null,null,0),et.stateNode=ne,et.return=t,t.child=et,Fn=t,xn=null,et=!0):et=!1}et||wa(t)}if(ne=t.memoizedState,ne!==null&&(ne=ne.dehydrated,ne!==null))return Ss(ne)?t.lanes=32:t.lanes=536870912,null;jr(t)}return ne=r.children,r=r.fallback,a?(ea(),a=t.mode,ne=Kl({mode:"hidden",children:ne},a),r=xa(r,a,n,null),ne.return=t,r.return=t,ne.sibling=r,t.child=ne,a=t.child,a.memoizedState=Uu(n),a.childLanes=zu(e,H,n),t.memoizedState=ju,r):(Wr(t),Lu(t,ne))}if(et=e.memoizedState,et!==null&&(ne=et.dehydrated,ne!==null)){if(o)t.flags&256?(Wr(t),t.flags&=-257,t=Iu(e,t,n)):t.memoizedState!==null?(ea(),t.child=e.child,t.flags|=128,t=null):(ea(),a=r.fallback,ne=t.mode,r=Kl({mode:"visible",children:r.children},ne),a=xa(a,ne,n,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,ri(t,e.child,null,n),r=t.child,r.memoizedState=Uu(n),r.childLanes=zu(e,H,n),t.memoizedState=ju,t=a);else if(Wr(t),Ss(ne)){if(H=ne.nextSibling&&ne.nextSibling.dataset,H)var st=H.dgst;H=st,r=Error(u(419)),r.stack="",r.digest=H,Mi({value:r,source:null,stack:null}),t=Iu(e,t,n)}else if(Dn||Di(e,t,n,!1),H=(n&e.childLanes)!==0,Dn||H){if(H=dn,H!==null&&(r=n&-n,r=(r&42)!==0?1:Eo(r),r=(r&(H.suspendedLanes|n))!==0?0:r,r!==0&&r!==et.retryLane))throw et.retryLane=r,Va(e,r),ir(H,e,r),Yf;ne.data==="$?"||as(),t=Iu(e,t,n)}else ne.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=et.treeContext,xn=xr(ne.nextSibling),Fn=t,rn=!0,Ea=null,Er=!1,e!==null&&(cr[fr++]=Dr,cr[fr++]=Or,cr[fr++]=ba,Dr=e.id,Or=e.overflow,ba=t),t=Lu(t,r.children),t.flags|=4096);return t}return a?(ea(),a=r.fallback,ne=t.mode,et=e.child,st=et.sibling,r=Mr(et,{mode:"hidden",children:r.children}),r.subtreeFlags=et.subtreeFlags&65011712,st!==null?a=Mr(st,a):(a=xa(a,ne,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,ne=e.child.memoizedState,ne===null?ne=Uu(n):(et=ne.cachePool,et!==null?(st=Cn._currentValue,et=et.parent!==st?{parent:st,pool:st}:et):et=Uc(),ne={baseLanes:ne.baseLanes|n,cachePool:et}),a.memoizedState=ne,a.childLanes=zu(e,H,n),t.memoizedState=ju,r):(Wr(t),n=e.child,e=n.sibling,n=Mr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(H=t.deletions,H===null?(t.deletions=[e],t.flags|=16):H.push(e)),t.child=n,t.memoizedState=null,n)}function Lu(e,t){return t=Kl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kl(e,t){return e=er(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Iu(e,t,n){return ri(t,e.child,null,n),e=Lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),au(e.return,t,n)}function Hu(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function ed(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(qn(e,t,r.children,n),r=kn.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,n,t);else if(e.tag===19)Wf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Ot(kn,r),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Gl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Hu(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Gl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Hu(t,!0,n,null,o);break;case"together":Hu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Di(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function Bp(e,t,n){switch(t.tag){case 3:$t(t,t.stateNode.containerInfo),Kr(t,Cn,e.memoizedState.cache),ki();break;case 27:case 5:mr(t);break;case 4:$t(t,t.stateNode.containerInfo);break;case 10:Kr(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Wr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Jf(e,t,n):(Wr(t),e=Ur(e,t,n),e!==null?e.sibling:null);Wr(t);break;case 19:var a=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Di(e,t,n,!1),r=(n&t.childLanes)!==0),a){if(r)return ed(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ot(kn,kn.current),r)break;return null;case 22:case 23:return t.lanes=0,Xf(e,t,n);case 24:Kr(t,Cn,e.memoizedState.cache)}return Ur(e,t,n)}function td(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Dn=!0;else{if(!Fu(e,n)&&(t.flags&128)===0)return Dn=!1,Bp(e,t,n);Dn=(e.flags&131072)!==0}else Dn=!1,rn&&(t.flags&1048576)!==0&&Mc(t,Tl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,typeof r=="function")$o(r)?(e=Ca(r,e),t.tag=1,t=Zf(null,t,r,e,n)):(t.tag=0,t=qu(null,t,r,e,n));else{if(r!=null){if(a=r.$$typeof,a===Ut){t.tag=11,t=Gf(null,t,r,e,n);break e}else if(a===Zt){t.tag=14,t=Pf(null,t,r,e,n);break e}}throw t=Wt(r)||r,Error(u(306,t,""))}}return t;case 0:return qu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ca(r,t.pendingProps),Zf(e,t,r,a,n);case 3:e:{if($t(t,t.stateNode.containerInfo),e===null)throw Error(u(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,fu(e,t),zi(t,r,null,n);var H=t.memoizedState;if(r=H.cache,Kr(t,Cn,r),r!==o.cache&&iu(t,[Cn],n,!0),Ui(),r=H.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:H.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$f(e,t,r,n);break e}else if(r!==a){a=ur(Error(u(424)),t),Mi(a),t=$f(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xn=xr(e.firstChild),Fn=t,rn=!0,Ea=null,Er=!0,n=Nf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ki(),r===a){t=Ur(e,t,n);break e}qn(e,t,r,n)}t=t.child}return t;case 26:return Xl(e,t),e===null?(n=ih(t.type,null,t.pendingProps,null))?t.memoizedState=n:rn||(n=t.type,e=t.pendingProps,r=uo(zt.current).createElement(n),r[Ln]=t,r[Xn]=e,Un(r,n,e),Mn(r),t.stateNode=r):t.memoizedState=ih(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mr(t),e===null&&rn&&(r=t.stateNode=nh(t.type,t.pendingProps,zt.current),Fn=t,Er=!0,a=xn,sa(t.type)?(Es=a,xn=xr(r.firstChild)):xn=a),qn(e,t,t.pendingProps.children,n),Xl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&rn&&((a=r=xn)&&(r=um(r,t.type,t.pendingProps,Er),r!==null?(t.stateNode=r,Fn=t,xn=xr(r.firstChild),Er=!1,a=!0):a=!1),a||wa(t)),mr(t),a=t.type,o=t.pendingProps,H=e!==null?e.memoizedProps:null,r=o.children,vs(a,o)?r=null:H!==null&&vs(a,H)&&(t.flags|=32),t.memoizedState!==null&&(a=yu(e,t,Ap,null,null,n),ll._currentValue=a),Xl(e,t),qn(e,t,r,n),t.child;case 6:return e===null&&rn&&((e=n=xn)&&(n=sm(n,t.pendingProps,Er),n!==null?(t.stateNode=n,Fn=t,xn=null,e=!0):e=!1),e||wa(t)),null;case 13:return Jf(e,t,n);case 4:return $t(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ri(t,null,r,n):qn(e,t,r,n),t.child;case 11:return Gf(e,t,t.type,t.pendingProps,n);case 7:return qn(e,t,t.pendingProps,n),t.child;case 8:return qn(e,t,t.pendingProps.children,n),t.child;case 12:return qn(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Kr(t,t.type,r.value),qn(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ra(t),a=In(a),r=r(a),t.flags|=1,qn(e,t,r,n),t.child;case 14:return Pf(e,t,t.type,t.pendingProps,n);case 15:return Vf(e,t,t.type,t.pendingProps,n);case 19:return ed(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Kl(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Mr(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Xf(e,t,n);case 24:return Ra(t),r=In(Cn),e===null?(a=uu(),a===null&&(a=dn,o=lu(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},cu(t),Kr(t,Cn,a)):((e.lanes&n)!==0&&(fu(e,t),zi(t,null,null,n),Ui()),a=e.memoizedState,o=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Kr(t,Cn,r)):(r=o.cache,Kr(t,Cn,r),r!==a.cache&&iu(t,[Cn],n,!0))),qn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function zr(e){e.flags|=4}function nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ch(t)){if(t=dr.current,t!==null&&((en&4194048)===en?wr!==null:(en&62914560)!==en&&(en&536870912)===0||t!==wr))throw qi=su,zc;e.flags|=8192}}function Ql(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ht():536870912,e.lanes|=t,oi|=t)}function Pi(e,t){if(!rn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function yn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qp(e,t,n){var r=t.pendingProps;switch(tu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(t),null;case 1:return yn(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Br(Cn),Bn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?zr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nc())),yn(t),null;case 26:return n=t.memoizedState,e===null?(zr(t),n!==null?(yn(t),nd(t,n)):(yn(t),t.flags&=-16777217)):n?n!==e.memoizedState?(zr(t),yn(t),nd(t,n)):(yn(t),t.flags&=-16777217):(e.memoizedProps!==r&&zr(t),yn(t),t.flags&=-16777217),null;case 27:gr(t),n=zt.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&zr(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return yn(t),null}e=Nt.current,Ci(t)?Dc(t):(e=nh(a,r,n),t.stateNode=e,zr(t))}return yn(t),null;case 5:if(gr(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&zr(t);else{if(!r){if(t.stateNode===null)throw Error(u(166));return yn(t),null}if(e=Nt.current,Ci(t))Dc(t);else{switch(a=uo(zt.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Ln]=t,e[Xn]=r;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(Un(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&zr(t)}}return yn(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&zr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(e=zt.current,Ci(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Fn,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ln]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Qd(e.nodeValue,n)),e||wa(t)}else e=uo(e).createTextNode(r),e[Ln]=t,t.stateNode=e}return yn(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(u(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(u(317));a[Ln]=t}else ki(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;yn(t),a=!1}else a=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(jr(t),t):(jr(t),null)}if(jr(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var o=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ql(t,t.updateQueue),yn(t),null;case 4:return Bn(),e===null&&hs(t.stateNode.containerInfo),yn(t),null;case 10:return Br(t.type),yn(t),null;case 19:if(kt(kn),a=t.memoizedState,a===null)return yn(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Pi(a,!1);else{if(bn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Gl(e),o!==null){for(t.flags|=128,Pi(a,!1),e=o.updateQueue,t.updateQueue=e,Ql(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kc(n,e),n=n.sibling;return Ot(kn,kn.current&1|2),t.child}e=e.sibling}a.tail!==null&&gn()>Jl&&(t.flags|=128,r=!0,Pi(a,!1),t.lanes=4194304)}else{if(!r)if(e=Gl(o),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ql(t,e),Pi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!rn)return yn(t),null}else 2*gn()-a.renderingStartTime>Jl&&n!==536870912&&(t.flags|=128,r=!0,Pi(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(e=a.last,e!==null?e.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=gn(),t.sibling=null,e=kn.current,Ot(kn,r?e&1|2:e&1),t):(yn(t),null);case 22:case 23:return jr(t),mu(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(yn(t),t.subtreeFlags&6&&(t.flags|=8192)):yn(t),n=t.updateQueue,n!==null&&Ql(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&kt(Aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Br(Cn),yn(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function jp(e,t){switch(tu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(Cn),Bn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gr(t),null;case 13:if(jr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return kt(kn),null;case 4:return Bn(),null;case 10:return Br(t.type),null;case 22:case 23:return jr(t),mu(),e!==null&&kt(Aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Br(Cn),null;case 25:return null;default:return null}}function rd(e,t){switch(tu(t),t.tag){case 3:Br(Cn),Bn();break;case 26:case 27:case 5:gr(t);break;case 4:Bn();break;case 13:jr(t);break;case 19:kt(kn);break;case 10:Br(t.type);break;case 22:case 23:jr(t),mu(),e!==null&&kt(Aa);break;case 24:Br(Cn)}}function Vi(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,H=n.inst;r=o(),H.destroy=r}n=n.next}while(n!==a)}}catch(ne){fn(t,t.return,ne)}}function ta(e,t,n){try{var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var o=a.next;r=o;do{if((r.tag&e)===e){var H=r.inst,ne=H.destroy;if(ne!==void 0){H.destroy=void 0,a=t;var et=n,st=ne;try{st()}catch(St){fn(a,et,St)}}}r=r.next}while(r!==o)}}catch(St){fn(t,t.return,St)}}function ad(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Gc(t,n)}catch(r){fn(e,e.return,r)}}}function id(e,t,n){n.props=Ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){fn(e,t,r)}}function Xi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(a){fn(e,t,a)}}function _r(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(a){fn(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){fn(e,t,a)}else n.current=null}function ld(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){fn(e,e.return,a)}}function Yu(e,t,n){try{var r=e.stateNode;rm(r,e.type,n,t),r[Xn]=t}catch(a){fn(e,e.return,a)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(r===27&&sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Pu(e,t,n),e=e.sibling;e!==null;)Pu(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function ud(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Un(t,r,n),t[Ln]=e,t[Xn]=n}catch(o){fn(e,e.return,o)}}var Lr=!1,wn=!1,Vu=!1,sd=typeof WeakSet=="function"?WeakSet:Set,On=null;function Up(e,t){if(e=e.containerInfo,gs=mo,e=xc(e),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var H=0,ne=-1,et=-1,st=0,St=0,Rt=e,ft=null;t:for(;;){for(var ht;Rt!==n||a!==0&&Rt.nodeType!==3||(ne=H+a),Rt!==o||r!==0&&Rt.nodeType!==3||(et=H+r),Rt.nodeType===3&&(H+=Rt.nodeValue.length),(ht=Rt.firstChild)!==null;)ft=Rt,Rt=ht;for(;;){if(Rt===e)break t;if(ft===n&&++st===a&&(ne=H),ft===o&&++St===r&&(et=H),(ht=Rt.nextSibling)!==null)break;Rt=ft,ft=Rt.parentNode}Rt=ht}n=ne===-1||et===-1?null:{start:ne,end:et}}else n=null}n=n||{start:0,end:0}}else n=null;for(ys={focusedElem:e,selectionRange:n},mo=!1,On=t;On!==null;)if(t=On,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,On=e;else for(;On!==null;){switch(t=On,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var Yt=Ca(n.type,a,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(Yt,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(Lt){fn(n,n.return,Lt)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)bs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,On=e;break}On=t.return}}function cd(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:na(e,n),r&4&&Vi(5,n);break;case 1:if(na(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(H){fn(n,n.return,H)}else{var a=Ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(H){fn(n,n.return,H)}}r&64&&ad(n),r&512&&Xi(n,n.return);break;case 3:if(na(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Gc(e,t)}catch(H){fn(n,n.return,H)}}break;case 27:t===null&&r&4&&ud(n);case 26:case 5:na(e,n),t===null&&r&4&&ld(n),r&512&&Xi(n,n.return);break;case 12:na(e,n);break;case 13:na(e,n),r&4&&hd(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Vp.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||Lr,!r){t=t!==null&&t.memoizedState!==null||wn,a=Lr;var o=wn;Lr=r,(wn=t)&&!o?ra(e,n,(n.subtreeFlags&8772)!==0):na(e,n),Lr=a,wn=o}break;case 30:break;default:na(e,n)}}function fd(e){var t=e.alternate;t!==null&&(e.alternate=null,fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ro(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,Zn=!1;function Ir(e,t,n){for(n=n.child;n!==null;)dd(e,t,n),n=n.sibling}function dd(e,t,n){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(Et,n)}catch{}switch(n.tag){case 26:wn||_r(n,t),Ir(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:wn||_r(n,t);var r=hn,a=Zn;sa(n.type)&&(hn=n.stateNode,Zn=!1),Ir(e,t,n),nl(n.stateNode),hn=r,Zn=a;break;case 5:wn||_r(n,t);case 6:if(r=hn,a=Zn,hn=null,Ir(e,t,n),hn=r,Zn=a,hn!==null)if(Zn)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(n.stateNode)}catch(o){fn(n,t,o)}else try{hn.removeChild(n.stateNode)}catch(o){fn(n,t,o)}break;case 18:hn!==null&&(Zn?(e=hn,eh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),cl(e)):eh(hn,n.stateNode));break;case 4:r=hn,a=Zn,hn=n.stateNode.containerInfo,Zn=!0,Ir(e,t,n),hn=r,Zn=a;break;case 0:case 11:case 14:case 15:wn||ta(2,n,t),wn||ta(4,n,t),Ir(e,t,n);break;case 1:wn||(_r(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&id(n,t,r)),Ir(e,t,n);break;case 21:Ir(e,t,n);break;case 22:wn=(r=wn)||n.memoizedState!==null,Ir(e,t,n),wn=r;break;default:Ir(e,t,n)}}function hd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cl(e)}catch(n){fn(t,t.return,n)}}function zp(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sd),t;default:throw Error(u(435,e.tag))}}function Xu(e,t){var n=zp(e);t.forEach(function(r){var a=Xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}function tr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,H=t,ne=H;e:for(;ne!==null;){switch(ne.tag){case 27:if(sa(ne.type)){hn=ne.stateNode,Zn=!1;break e}break;case 5:hn=ne.stateNode,Zn=!1;break e;case 3:case 4:hn=ne.stateNode.containerInfo,Zn=!0;break e}ne=ne.return}if(hn===null)throw Error(u(160));dd(o,H,a),hn=null,Zn=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}var vr=null;function pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tr(t,e),nr(e),r&4&&(ta(3,e,e.return),Vi(3,e),ta(5,e,e.return));break;case 1:tr(t,e),nr(e),r&512&&(wn||n===null||_r(n,n.return)),r&64&&Lr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vr;if(tr(t,e),nr(e),r&512&&(wn||n===null||_r(n,n.return)),r&4){var o=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":o=a.getElementsByTagName("title")[0],(!o||o[yi]||o[Ln]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector("head > title"))),Un(o,r,n),o[Ln]=e,Mn(o),r=o;break e;case"link":var H=uh("link","href",a).get(r+(n.href||""));if(H){for(var ne=0;ne<H.length;ne++)if(o=H[ne],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){H.splice(ne,1);break t}}o=a.createElement(r),Un(o,r,n),a.head.appendChild(o);break;case"meta":if(H=uh("meta","content",a).get(r+(n.content||""))){for(ne=0;ne<H.length;ne++)if(o=H[ne],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){H.splice(ne,1);break t}}o=a.createElement(r),Un(o,r,n),a.head.appendChild(o);break;default:throw Error(u(468,r))}o[Ln]=e,Mn(o),r=o}e.stateNode=r}else sh(a,e.type,e.stateNode);else e.stateNode=oh(a,r,e.memoizedProps);else o!==r?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?sh(a,e.type,e.stateNode):oh(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Yu(e,e.memoizedProps,n.memoizedProps)}break;case 27:tr(t,e),nr(e),r&512&&(wn||n===null||_r(n,n.return)),n!==null&&r&4&&Yu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tr(t,e),nr(e),r&512&&(wn||n===null||_r(n,n.return)),e.flags&32){a=e.stateNode;try{La(a,"")}catch(ht){fn(e,e.return,ht)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yu(e,a,n!==null?n.memoizedProps:a)),r&1024&&(Vu=!0);break;case 6:if(tr(t,e),nr(e),r&4){if(e.stateNode===null)throw Error(u(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ht){fn(e,e.return,ht)}}break;case 3:if(fo=null,a=vr,vr=so(t.containerInfo),tr(t,e),vr=a,nr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(t.containerInfo)}catch(ht){fn(e,e.return,ht)}Vu&&(Vu=!1,md(e));break;case 4:r=vr,vr=so(e.stateNode.containerInfo),tr(t,e),nr(e),vr=r;break;case 12:tr(t,e),nr(e);break;case 13:tr(t,e),nr(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Wu=gn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xu(e,r)));break;case 22:a=e.memoizedState!==null;var et=n!==null&&n.memoizedState!==null,st=Lr,St=wn;if(Lr=st||a,wn=St||et,tr(t,e),wn=St,Lr=st,nr(e),r&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||et||Lr||wn||ka(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){et=n=t;try{if(o=et.stateNode,a)H=o.style,typeof H.setProperty=="function"?H.setProperty("display","none","important"):H.display="none";else{ne=et.stateNode;var Rt=et.memoizedProps.style,ft=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;ne.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(ht){fn(et,et.return,ht)}}}else if(t.tag===6){if(n===null){et=t;try{et.stateNode.nodeValue=a?"":et.memoizedProps}catch(ht){fn(et,et.return,ht)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Xu(e,n))));break;case 19:tr(t,e),nr(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Xu(e,r)));break;case 30:break;case 21:break;default:tr(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(od(r)){n=r;break}r=r.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var a=n.stateNode,o=Gu(e);Zl(e,o,a);break;case 5:var H=n.stateNode;n.flags&32&&(La(H,""),n.flags&=-33);var ne=Gu(e);Zl(e,ne,H);break;case 3:case 4:var et=n.stateNode.containerInfo,st=Gu(e);Pu(e,st,et);break;default:throw Error(u(161))}}catch(St){fn(e,e.return,St)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;md(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cd(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ta(4,t,t.return),ka(t);break;case 1:_r(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&id(t,t.return,n),ka(t);break;case 27:nl(t.stateNode);case 26:case 5:_r(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function ra(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,a=e,o=t,H=o.flags;switch(o.tag){case 0:case 11:case 15:ra(a,o,n),Vi(4,o);break;case 1:if(ra(a,o,n),r=o,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(st){fn(r,r.return,st)}if(r=o,a=r.updateQueue,a!==null){var ne=r.stateNode;try{var et=a.shared.hiddenCallbacks;if(et!==null)for(a.shared.hiddenCallbacks=null,a=0;a<et.length;a++)Yc(et[a],ne)}catch(st){fn(r,r.return,st)}}n&&H&64&&ad(o),Xi(o,o.return);break;case 27:ud(o);case 26:case 5:ra(a,o,n),n&&r===null&&H&4&&ld(o),Xi(o,o.return);break;case 12:ra(a,o,n);break;case 13:ra(a,o,n),n&&H&4&&hd(a,o);break;case 22:o.memoizedState===null&&ra(a,o,n),Xi(o,o.return);break;case 30:break;default:ra(a,o,n)}t=t.sibling}}function Ku(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oi(n))}function Qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e))}function Rr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gd(e,t,n,r),t=t.sibling}function gd(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Rr(e,t,n,r),a&2048&&Vi(9,t);break;case 1:Rr(e,t,n,r);break;case 3:Rr(e,t,n,r),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e)));break;case 12:if(a&2048){Rr(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,H=o.id,ne=o.onPostCommit;typeof ne=="function"&&ne(H,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(et){fn(t,t.return,et)}}else Rr(e,t,n,r);break;case 13:Rr(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,H=t.alternate,t.memoizedState!==null?o._visibility&2?Rr(e,t,n,r):Ki(e,t):o._visibility&2?Rr(e,t,n,r):(o._visibility|=2,ai(e,t,n,r,(t.subtreeFlags&10256)!==0)),a&2048&&Ku(H,t);break;case 24:Rr(e,t,n,r),a&2048&&Qu(t.alternate,t);break;default:Rr(e,t,n,r)}}function ai(e,t,n,r,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,H=t,ne=n,et=r,st=H.flags;switch(H.tag){case 0:case 11:case 15:ai(o,H,ne,et,a),Vi(8,H);break;case 23:break;case 22:var St=H.stateNode;H.memoizedState!==null?St._visibility&2?ai(o,H,ne,et,a):Ki(o,H):(St._visibility|=2,ai(o,H,ne,et,a)),a&&st&2048&&Ku(H.alternate,H);break;case 24:ai(o,H,ne,et,a),a&&st&2048&&Qu(H.alternate,H);break;default:ai(o,H,ne,et,a)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Ki(n,r),a&2048&&Ku(r.alternate,r);break;case 24:Ki(n,r),a&2048&&Qu(r.alternate,r);break;default:Ki(n,r)}t=t.sibling}}var Qi=8192;function ii(e){if(e.subtreeFlags&Qi)for(e=e.child;e!==null;)yd(e),e=e.sibling}function yd(e){switch(e.tag){case 26:ii(e),e.flags&Qi&&e.memoizedState!==null&&wm(vr,e.memoizedState,e.memoizedProps);break;case 5:ii(e);break;case 3:case 4:var t=vr;vr=so(e.stateNode.containerInfo),ii(e),vr=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Qi,Qi=16777216,ii(e),Qi=t):ii(e));break;default:ii(e)}}function vd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];On=r,bd(r,e)}vd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xd(e),e=e.sibling}function xd(e){switch(e.tag){case 0:case 11:case 15:Zi(e),e.flags&2048&&ta(9,e,e.return);break;case 3:Zi(e);break;case 12:Zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$l(e)):Zi(e);break;default:Zi(e)}}function $l(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];On=r,bd(r,e)}vd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ta(8,t,t.return),$l(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$l(t));break;default:$l(t)}e=e.sibling}}function bd(e,t){for(;On!==null;){var n=On;switch(n.tag){case 0:case 11:case 15:ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,On=r;else e:for(n=e;On!==null;){r=On;var a=r.sibling,o=r.return;if(fd(r),r===n){On=null;break e}if(a!==null){a.return=o,On=a;break e}On=o}}}var Lp={getCacheForType:function(e){var t=In(Cn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Ip=typeof WeakMap=="function"?WeakMap:Map,ln=0,dn=null,Kt=null,en=0,on=0,rr=null,aa=!1,li=!1,Zu=!1,Hr=0,bn=0,ia=0,Ma=0,$u=0,hr=0,oi=0,$i=null,$n=null,Ju=!1,Wu=0,Jl=1/0,Wl=null,la=null,jn=0,oa=null,ui=null,si=0,es=0,ts=null,Sd=null,Ji=0,ns=null;function ar(){if((ln&2)!==0&&en!==0)return en&-en;if(vt.T!==null){var e=Za;return e!==0?e:ss()}return js()}function Ed(){hr===0&&(hr=(en&536870912)===0||rn?Ft():536870912);var e=dr.current;return e!==null&&(e.flags|=32),hr}function ir(e,t,n){(e===dn&&(on===2||on===9)||e.cancelPendingCommit!==null)&&(ci(e,0),ua(e,en,hr,!1)),vn(e,n),((ln&2)===0||e!==dn)&&(e===dn&&((ln&2)===0&&(Ma|=n),bn===4&&ua(e,en,hr,!1)),Ar(e))}function wd(e,t,n){if((ln&6)!==0)throw Error(u(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||gt(e,t),a=r?Yp(e,t):is(e,t,!0),o=r;do{if(a===0){li&&!r&&ua(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!Hp(n)){a=is(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var H=0;else H=e.pendingLanes&-536870913,H=H!==0?H:H&536870912?536870912:0;if(H!==0){t=H;e:{var ne=e;a=$i;var et=ne.current.memoizedState.isDehydrated;if(et&&(ci(ne,H).flags|=256),H=is(ne,H,!1),H!==2){if(Zu&&!et){ne.errorRecoveryDisabledLanes|=o,Ma|=o,a=4;break e}o=$n,$n=a,o!==null&&($n===null?$n=o:$n.push.apply($n,o))}a=H}if(o=!1,a!==2)continue}}if(a===1){ci(e,0),ua(e,t,0,!0);break}e:{switch(r=e,o=a,o){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ua(r,t,hr,!aa);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(a=Wu+300-gn(),10<a)){if(ua(r,t,hr,!aa),_t(r,0,!0)!==0)break e;r.timeoutHandle=Jd(_d.bind(null,r,n,$n,Wl,Ju,t,hr,Ma,oi,aa,o,2,-0,0),a);break e}_d(r,n,$n,Wl,Ju,t,hr,Ma,oi,aa,o,0,-0,0)}}break}while(!0);Ar(e)}function _d(e,t,n,r,a,o,H,ne,et,st,St,Rt,ft,ht){if(e.timeoutHandle=-1,Rt=t.subtreeFlags,(Rt&8192||(Rt&16785408)===16785408)&&(il={stylesheets:null,count:0,unsuspend:Em},yd(t),Rt=_m(),Rt!==null)){e.cancelPendingCommit=Rt(Dd.bind(null,e,t,o,n,r,a,H,ne,et,St,1,ft,ht)),ua(e,o,H,!st);return}Dd(e,t,o,n,r,a,H,ne,et)}function Hp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!Wn(o(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ua(e,t,n,r){t&=~$u,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-g(a),H=1<<o;r[o]=-1,a&=~H}n!==0&&Bs(e,n,t)}function eo(){return(ln&6)===0?(Wi(0),!1):!0}function rs(){if(Kt!==null){if(on===0)var e=Kt.return;else e=Kt,Nr=_a=null,bu(e),ni=null,Yi=0,e=Kt;for(;e!==null;)rd(e.alternate,e),e=e.return;Kt=null}}function ci(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,im(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rs(),dn=e,Kt=n=Mr(e.current,null),en=t,on=0,rr=null,aa=!1,li=gt(e,t),Zu=!1,oi=hr=$u=Ma=ia=bn=0,$n=$i=null,Ju=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var a=31-g(r),o=1<<a;t|=e[a],r&=~o}return Hr=t,El(),n}function Rd(e,t){Pt=null,vt.H=Hl,t===Bi||t===Dl?(t=Hc(),on=3):t===zc?(t=Hc(),on=4):on=t===Yf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rr=t,Kt===null&&(bn=1,Vl(e,ur(t,e.current)))}function Ad(){var e=vt.H;return vt.H=Hl,e===null?Hl:e}function Td(){var e=vt.A;return vt.A=Lp,e}function as(){bn=4,aa||(en&4194048)!==en&&dr.current!==null||(li=!0),(ia&134217727)===0&&(Ma&134217727)===0||dn===null||ua(dn,en,hr,!1)}function is(e,t,n){var r=ln;ln|=2;var a=Ad(),o=Td();(dn!==e||en!==t)&&(Wl=null,ci(e,t)),t=!1;var H=bn;e:do try{if(on!==0&&Kt!==null){var ne=Kt,et=rr;switch(on){case 8:rs(),H=6;break e;case 3:case 2:case 9:case 6:dr.current===null&&(t=!0);var st=on;if(on=0,rr=null,fi(e,ne,et,st),n&&li){H=0;break e}break;default:st=on,on=0,rr=null,fi(e,ne,et,st)}}Fp(),H=bn;break}catch(St){Rd(e,St)}while(!0);return t&&e.shellSuspendCounter++,Nr=_a=null,ln=r,vt.H=a,vt.A=o,Kt===null&&(dn=null,en=0,El()),H}function Fp(){for(;Kt!==null;)Cd(Kt)}function Yp(e,t){var n=ln;ln|=2;var r=Ad(),a=Td();dn!==e||en!==t?(Wl=null,Jl=gn()+500,ci(e,t)):li=gt(e,t);e:do try{if(on!==0&&Kt!==null){t=Kt;var o=rr;t:switch(on){case 1:on=0,rr=null,fi(e,t,o,1);break;case 2:case 9:if(Lc(o)){on=0,rr=null,kd(t);break}t=function(){on!==2&&on!==9||dn!==e||(on=7),Ar(e)},o.then(t,t);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:Lc(o)?(on=0,rr=null,kd(t)):(on=0,rr=null,fi(e,t,o,7));break;case 5:var H=null;switch(Kt.tag){case 26:H=Kt.memoizedState;case 5:case 27:var ne=Kt;if(!H||ch(H)){on=0,rr=null;var et=ne.sibling;if(et!==null)Kt=et;else{var st=ne.return;st!==null?(Kt=st,to(st)):Kt=null}break t}}on=0,rr=null,fi(e,t,o,5);break;case 6:on=0,rr=null,fi(e,t,o,6);break;case 8:rs(),bn=6;break e;default:throw Error(u(462))}}Gp();break}catch(St){Rd(e,St)}while(!0);return Nr=_a=null,vt.H=r,vt.A=a,ln=n,Kt!==null?0:(dn=null,en=0,El(),bn)}function Gp(){for(;Kt!==null&&!Yr();)Cd(Kt)}function Cd(e){var t=td(e.alternate,e,Hr);e.memoizedProps=e.pendingProps,t===null?to(e):Kt=t}function kd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qf(n,t,t.pendingProps,t.type,void 0,en);break;case 11:t=Qf(n,t,t.pendingProps,t.type.render,t.ref,en);break;case 5:bu(t);default:rd(n,t),t=Kt=kc(t,Hr),t=td(n,t,Hr)}e.memoizedProps=e.pendingProps,t===null?to(e):Kt=t}function fi(e,t,n,r){Nr=_a=null,bu(t),ni=null,Yi=0;var a=t.return;try{if(Np(e,a,t,n,en)){bn=1,Vl(e,ur(n,e.current)),Kt=null;return}}catch(o){if(a!==null)throw Kt=a,o;bn=1,Vl(e,ur(n,e.current)),Kt=null;return}t.flags&32768?(rn||r===1?e=!0:li||(en&536870912)!==0?e=!1:(aa=e=!0,(r===2||r===9||r===3||r===6)&&(r=dr.current,r!==null&&r.tag===13&&(r.flags|=16384))),Md(t,e)):to(t)}function to(e){var t=e;do{if((t.flags&32768)!==0){Md(t,aa);return}e=t.return;var n=qp(t.alternate,t,Hr);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);bn===0&&(bn=5)}function Md(e,t){do{var n=jp(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);bn=6,Kt=null}function Dd(e,t,n,r,a,o,H,ne,et){e.cancelPendingCommit=null;do no();while(jn!==0);if((ln&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(o=t.lanes|t.childLanes,o|=Qo,Eh(e,n,o,H,ne,et),e===dn&&(Kt=dn=null,en=0),ui=t,oa=e,si=n,es=o,ts=a,Sd=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kp(Pn,function(){return jd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=vt.T,vt.T=null,a=yt.p,yt.p=2,H=ln,ln|=4;try{Up(e,t,n)}finally{ln=H,yt.p=a,vt.T=r}}jn=1,Od(),Nd(),Bd()}}function Od(){if(jn===1){jn=0;var e=oa,t=ui,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=vt.T,vt.T=null;var r=yt.p;yt.p=2;var a=ln;ln|=4;try{pd(t,e);var o=ys,H=xc(e.containerInfo),ne=o.focusedElem,et=o.selectionRange;if(H!==ne&&ne&&ne.ownerDocument&&vc(ne.ownerDocument.documentElement,ne)){if(et!==null&&Go(ne)){var st=et.start,St=et.end;if(St===void 0&&(St=st),"selectionStart"in ne)ne.selectionStart=st,ne.selectionEnd=Math.min(St,ne.value.length);else{var Rt=ne.ownerDocument||document,ft=Rt&&Rt.defaultView||window;if(ft.getSelection){var ht=ft.getSelection(),Yt=ne.textContent.length,Lt=Math.min(et.start,Yt),cn=et.end===void 0?Lt:Math.min(et.end,Yt);!ht.extend&&Lt>cn&&(H=cn,cn=Lt,Lt=H);var ot=yc(ne,Lt),at=yc(ne,cn);if(ot&&at&&(ht.rangeCount!==1||ht.anchorNode!==ot.node||ht.anchorOffset!==ot.offset||ht.focusNode!==at.node||ht.focusOffset!==at.offset)){var ut=Rt.createRange();ut.setStart(ot.node,ot.offset),ht.removeAllRanges(),Lt>cn?(ht.addRange(ut),ht.extend(at.node,at.offset)):(ut.setEnd(at.node,at.offset),ht.addRange(ut))}}}}for(Rt=[],ht=ne;ht=ht.parentNode;)ht.nodeType===1&&Rt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof ne.focus=="function"&&ne.focus(),ne=0;ne<Rt.length;ne++){var wt=Rt[ne];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}mo=!!gs,ys=gs=null}finally{ln=a,yt.p=r,vt.T=n}}e.current=t,jn=2}}function Nd(){if(jn===2){jn=0;var e=oa,t=ui,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=vt.T,vt.T=null;var r=yt.p;yt.p=2;var a=ln;ln|=4;try{cd(e,t.alternate,t)}finally{ln=a,yt.p=r,vt.T=n}}jn=3}}function Bd(){if(jn===4||jn===3){jn=0,Gr();var e=oa,t=ui,n=si,r=Sd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jn=5:(jn=0,ui=oa=null,qd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(la=null),wo(n),t=t.stateNode,ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=vt.T,a=yt.p,yt.p=2,vt.T=null;try{for(var o=e.onRecoverableError,H=0;H<r.length;H++){var ne=r[H];o(ne.value,{componentStack:ne.stack})}}finally{vt.T=t,yt.p=a}}(si&3)!==0&&no(),Ar(e),a=e.pendingLanes,(n&4194090)!==0&&(a&42)!==0?e===ns?Ji++:(Ji=0,ns=e):Ji=0,Wi(0)}}function qd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oi(t)))}function no(e){return Od(),Nd(),Bd(),jd()}function jd(){if(jn!==5)return!1;var e=oa,t=es;es=0;var n=wo(si),r=vt.T,a=yt.p;try{yt.p=32>n?32:n,vt.T=null,n=ts,ts=null;var o=oa,H=si;if(jn=0,ui=oa=null,si=0,(ln&6)!==0)throw Error(u(331));var ne=ln;if(ln|=4,xd(o.current),gd(o,o.current,H,n),ln=ne,Wi(0,!1),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(Et,o)}catch{}return!0}finally{yt.p=a,vt.T=r,qd(e,t)}}function Ud(e,t,n){t=ur(n,t),t=Bu(e.stateNode,t,2),e=$r(e,t,2),e!==null&&(vn(e,2),Ar(e))}function fn(e,t,n){if(e.tag===3)Ud(e,e,n);else for(;t!==null;){if(t.tag===3){Ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(la===null||!la.has(r))){e=ur(n,e),n=Hf(2),r=$r(t,n,2),r!==null&&(Ff(n,r,t,e),vn(r,2),Ar(r));break}}t=t.return}}function ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ip;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Zu=!0,a.add(n),e=Pp.bind(null,e,t,n),t.then(e,e))}function Pp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,dn===e&&(en&n)===n&&(bn===4||bn===3&&(en&62914560)===en&&300>gn()-Wu?(ln&2)===0&&ci(e,0):$u|=n,oi===en&&(oi=0)),Ar(e)}function zd(e,t){t===0&&(t=Ht()),e=Va(e,t),e!==null&&(vn(e,t),Ar(e))}function Vp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zd(e,n)}function Xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(u(314))}r!==null&&r.delete(t),zd(e,n)}function Kp(e,t){return Gn(e,t)}var ro=null,di=null,os=!1,ao=!1,us=!1,Da=0;function Ar(e){e!==di&&e.next===null&&(di===null?ro=di=e:di=di.next=e),ao=!0,os||(os=!0,Zp())}function Wi(e,t){if(!us&&ao){us=!0;do for(var n=!1,r=ro;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var o=0;else{var H=r.suspendedLanes,ne=r.pingedLanes;o=(1<<31-g(42|e)+1)-1,o&=a&~(H&~ne),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,Fd(r,o))}else o=en,o=_t(r,r===dn?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||gt(r,o)||(n=!0,Fd(r,o));r=r.next}while(n);us=!1}}function Qp(){Ld()}function Ld(){ao=os=!1;var e=0;Da!==0&&(am()&&(e=Da),Da=0);for(var t=gn(),n=null,r=ro;r!==null;){var a=r.next,o=Id(r,t);o===0?(r.next=null,n===null?ro=a:n.next=a,a===null&&(di=n)):(n=r,(e!==0||(o&3)!==0)&&(ao=!0)),r=a}Wi(e)}function Id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var H=31-g(o),ne=1<<H,et=a[H];et===-1?((ne&n)===0||(ne&r)!==0)&&(a[H]=Ct(ne,t)):et<=t&&(e.expiredLanes|=ne),o&=~ne}if(t=dn,n=en,n=_t(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(on===2||on===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Jn(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||gt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Jn(r),wo(n)){case 2:case 8:n=br;break;case 32:n=Pn;break;case 268435456:n=Sr;break;default:n=Pn}return r=Hd.bind(null,e),n=Gn(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Jn(r),e.callbackPriority=2,e.callbackNode=null,2}function Hd(e,t){if(jn!==0&&jn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var r=en;return r=_t(e,e===dn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(wd(e,r,t),Id(e,gn()),e.callbackNode!=null&&e.callbackNode===n?Hd.bind(null,e):null)}function Fd(e,t){if(no())return null;wd(e,t,!0)}function Zp(){lm(function(){(ln&6)!==0?Gn(Tr,Qp):Ld()})}function ss(){return Da===0&&(Da=Ft()),Da}function Yd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function Gd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function $p(e,t,n,r,a){if(t==="submit"&&n&&n.stateNode===a){var o=Yd((a[Xn]||null).action),H=r.submitter;H&&(t=(t=H[Xn]||null)?Yd(t.formAction):H.getAttribute("formAction"),t!==null&&(o=t,H=null));var ne=new xl("action","action",null,r,a);e.push({event:ne,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Da!==0){var et=H?Gd(a,H):new FormData(a);ku(n,{pending:!0,data:et,method:a.method,action:o},null,et)}}else typeof o=="function"&&(ne.preventDefault(),et=H?Gd(a,H):new FormData(a),ku(n,{pending:!0,data:et,method:a.method,action:o},o,et))},currentTarget:a}]})}}for(var cs=0;cs<Ko.length;cs++){var fs=Ko[cs],Jp=fs.toLowerCase(),Wp=fs[0].toUpperCase()+fs.slice(1);yr(Jp,"on"+Wp)}yr(Ec,"onAnimationEnd"),yr(wc,"onAnimationIteration"),yr(_c,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(gp,"onTransitionRun"),yr(yp,"onTransitionStart"),yr(vp,"onTransitionCancel"),yr(Rc,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function Pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var H=r.length-1;0<=H;H--){var ne=r[H],et=ne.instance,st=ne.currentTarget;if(ne=ne.listener,et!==o&&a.isPropagationStopped())break e;o=ne,a.currentTarget=st;try{o(a)}catch(St){Pl(St)}a.currentTarget=null,o=et}else for(H=0;H<r.length;H++){if(ne=r[H],et=ne.instance,st=ne.currentTarget,ne=ne.listener,et!==o&&a.isPropagationStopped())break e;o=ne,a.currentTarget=st;try{o(a)}catch(St){Pl(St)}a.currentTarget=null,o=et}}}}function Qt(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var r=e+"__bubble";n.has(r)||(Vd(t,e,2,!1),n.add(r))}function ds(e,t,n){var r=0;t&&(r|=4),Vd(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function hs(e){if(!e[io]){e[io]=!0,zs.forEach(function(n){n!=="selectionchange"&&(em.has(n)||ds(n,!1,e),ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,ds("selectionchange",!1,t))}}function Vd(e,t,n,r){switch(gh(t)){case 2:var a=Tm;break;case 8:a=Cm;break;default:a=Ts}n=a.bind(null,t,n,e),a=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ps(e,t,n,r,a){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var H=r.tag;if(H===3||H===4){var ne=r.stateNode.containerInfo;if(ne===a)break;if(H===4)for(H=r.return;H!==null;){var et=H.tag;if((et===3||et===4)&&H.stateNode.containerInfo===a)return;H=H.return}for(;ne!==null;){if(H=Na(ne),H===null)return;if(et=H.tag,et===5||et===6||et===26||et===27){r=o=H;continue e}ne=ne.parentNode}}r=r.return}Js(function(){var st=o,St=No(n),Rt=[];e:{var ft=Ac.get(e);if(ft!==void 0){var ht=xl,Yt=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":ht=Kh;break;case"focusin":Yt="focus",ht=Lo;break;case"focusout":Yt="blur",ht=Lo;break;case"beforeblur":case"afterblur":ht=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=$h;break;case Ec:case wc:case _c:ht=Lh;break;case Rc:ht=Wh;break;case"scroll":case"scrollend":ht=Bh;break;case"wheel":ht=tp;break;case"copy":case"cut":case"paste":ht=Hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=rc;break;case"toggle":case"beforetoggle":ht=rp}var Lt=(t&4)!==0,cn=!Lt&&(e==="scroll"||e==="scrollend"),ot=Lt?ft!==null?ft+"Capture":null:ft;Lt=[];for(var at=st,ut;at!==null;){var wt=at;if(ut=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||ut===null||ot===null||(wt=xi(at,ot),wt!=null&&Lt.push(tl(at,wt,ut))),cn)break;at=at.return}0<Lt.length&&(ft=new ht(ft,Yt,null,n,St),Rt.push({event:ft,listeners:Lt}))}}if((t&7)===0){e:{if(ft=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ft&&n!==Oo&&(Yt=n.relatedTarget||n.fromElement)&&(Na(Yt)||Yt[Oa]))break e;if((ht||ft)&&(ft=St.window===St?St:(ft=St.ownerDocument)?ft.defaultView||ft.parentWindow:window,ht?(Yt=n.relatedTarget||n.toElement,ht=st,Yt=Yt?Na(Yt):null,Yt!==null&&(cn=k(Yt),Lt=Yt.tag,Yt!==cn||Lt!==5&&Lt!==27&&Lt!==6)&&(Yt=null)):(ht=null,Yt=st),ht!==Yt)){if(Lt=tc,wt="onMouseLeave",ot="onMouseEnter",at="mouse",(e==="pointerout"||e==="pointerover")&&(Lt=rc,wt="onPointerLeave",ot="onPointerEnter",at="pointer"),cn=ht==null?ft:vi(ht),ut=Yt==null?ft:vi(Yt),ft=new Lt(wt,at+"leave",ht,n,St),ft.target=cn,ft.relatedTarget=ut,wt=null,Na(St)===st&&(Lt=new Lt(ot,at+"enter",Yt,n,St),Lt.target=ut,Lt.relatedTarget=cn,wt=Lt),cn=wt,ht&&Yt)t:{for(Lt=ht,ot=Yt,at=0,ut=Lt;ut;ut=hi(ut))at++;for(ut=0,wt=ot;wt;wt=hi(wt))ut++;for(;0<at-ut;)Lt=hi(Lt),at--;for(;0<ut-at;)ot=hi(ot),ut--;for(;at--;){if(Lt===ot||ot!==null&&Lt===ot.alternate)break t;Lt=hi(Lt),ot=hi(ot)}Lt=null}else Lt=null;ht!==null&&Xd(Rt,ft,ht,Lt,!1),Yt!==null&&cn!==null&&Xd(Rt,cn,Yt,Lt,!0)}}e:{if(ft=st?vi(st):window,ht=ft.nodeName&&ft.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ft.type==="file")var Bt=fc;else if(sc(ft))if(dc)Bt=hp;else{Bt=fp;var Xt=cp}else ht=ft.nodeName,!ht||ht.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?st&&Do(st.elementType)&&(Bt=fc):Bt=dp;if(Bt&&(Bt=Bt(e,st))){cc(Rt,Bt,n,St);break e}Xt&&Xt(e,ft,st),e==="focusout"&&st&&ft.type==="number"&&st.memoizedProps.value!=null&&Mo(ft,"number",ft.value)}switch(Xt=st?vi(st):window,e){case"focusin":(sc(Xt)||Xt.contentEditable==="true")&&(Ya=Xt,Po=st,Ti=null);break;case"focusout":Ti=Po=Ya=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":Vo=!1,bc(Rt,n,St);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":bc(Rt,n,St)}var jt;if(Ho)e:{switch(e){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else Fa?oc(e,n)&&(It="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(It="onCompositionStart");It&&(ac&&n.locale!=="ko"&&(Fa||It!=="onCompositionStart"?It==="onCompositionEnd"&&Fa&&(jt=Ws()):(Xr=St,jo="value"in Xr?Xr.value:Xr.textContent,Fa=!0)),Xt=lo(st,It),0<Xt.length&&(It=new nc(It,e,null,n,St),Rt.push({event:It,listeners:Xt}),jt?It.data=jt:(jt=uc(n),jt!==null&&(It.data=jt)))),(jt=ip?lp(e,n):op(e,n))&&(It=lo(st,"onBeforeInput"),0<It.length&&(Xt=new nc("onBeforeInput","beforeinput",null,n,St),Rt.push({event:Xt,listeners:It}),Xt.data=jt)),$p(Rt,e,st,n,St)}Pd(Rt,t)})}function tl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||o===null||(a=xi(e,n),a!=null&&r.unshift(tl(e,a,o)),a=xi(e,t),a!=null&&r.push(tl(e,a,o))),e.tag===3)return r;e=e.return}return[]}function hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xd(e,t,n,r,a){for(var o=t._reactName,H=[];n!==null&&n!==r;){var ne=n,et=ne.alternate,st=ne.stateNode;if(ne=ne.tag,et!==null&&et===r)break;ne!==5&&ne!==26&&ne!==27||st===null||(et=st,a?(st=xi(n,o),st!=null&&H.unshift(tl(n,st,et))):a||(st=xi(n,o),st!=null&&H.push(tl(n,st,et)))),n=n.return}H.length!==0&&e.push({event:t,listeners:H})}var tm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function Kd(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(nm,"")}function Qd(e,t){return t=Kd(t),Kd(e)===t}function oo(){}function sn(e,t,n,r,a,o){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||La(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&La(e,""+r);break;case"className":dl(e,"class",r);break;case"tabIndex":dl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(e,n,r);break;case"style":Zs(e,r,o);break;case"data":if(t!=="object"){dl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ml(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(t!=="input"&&sn(e,t,"name",a.name,a,null),sn(e,t,"formEncType",a.formEncType,a,null),sn(e,t,"formMethod",a.formMethod,a,null),sn(e,t,"formTarget",a.formTarget,a,null)):(sn(e,t,"encType",a.encType,a,null),sn(e,t,"method",a.method,a,null),sn(e,t,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ml(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=oo);break;case"onScroll":r!=null&&Qt("scroll",e);break;case"onScrollEnd":r!=null&&Qt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=ml(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Qt("beforetoggle",e),Qt("toggle",e),fl(e,"popover",r);break;case"xlinkActuate":Cr(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Cr(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Cr(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Cr(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Cr(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Cr(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Cr(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Cr(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Cr(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Oh.get(n)||n,fl(e,n,r))}}function ms(e,t,n,r,a,o){switch(n){case"style":Zs(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(u(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof r=="string"?La(e,r):(typeof r=="number"||typeof r=="bigint")&&La(e,""+r);break;case"onScroll":r!=null&&Qt("scroll",e);break;case"onScrollEnd":r!=null&&Qt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ls.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),o=e[Xn]||null,o=o!=null?o[n]:null,typeof o=="function"&&e.removeEventListener(t,o,a),typeof r=="function")){typeof o!="function"&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):fl(e,n,r)}}}function Un(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qt("error",e),Qt("load",e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var H=n[o];if(H!=null)switch(o){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:sn(e,t,o,H,n,null)}}a&&sn(e,t,"srcSet",n.srcSet,n,null),r&&sn(e,t,"src",n.src,n,null);return;case"input":Qt("invalid",e);var ne=o=H=a=null,et=null,st=null;for(r in n)if(n.hasOwnProperty(r)){var St=n[r];if(St!=null)switch(r){case"name":a=St;break;case"type":H=St;break;case"checked":et=St;break;case"defaultChecked":st=St;break;case"value":o=St;break;case"defaultValue":ne=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(u(137,t));break;default:sn(e,t,r,St,n,null)}}Vs(e,o,ne,et,st,H,a,!1),hl(e);return;case"select":Qt("invalid",e),r=H=o=null;for(a in n)if(n.hasOwnProperty(a)&&(ne=n[a],ne!=null))switch(a){case"value":o=ne;break;case"defaultValue":H=ne;break;case"multiple":r=ne;default:sn(e,t,a,ne,n,null)}t=o,n=H,e.multiple=!!r,t!=null?za(e,!!r,t,!1):n!=null&&za(e,!!r,n,!0);return;case"textarea":Qt("invalid",e),o=a=r=null;for(H in n)if(n.hasOwnProperty(H)&&(ne=n[H],ne!=null))switch(H){case"value":r=ne;break;case"defaultValue":a=ne;break;case"children":o=ne;break;case"dangerouslySetInnerHTML":if(ne!=null)throw Error(u(91));break;default:sn(e,t,H,ne,n,null)}Ks(e,r,a,o),hl(e);return;case"option":for(et in n)if(n.hasOwnProperty(et)&&(r=n[et],r!=null))switch(et){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:sn(e,t,et,r,n,null)}return;case"dialog":Qt("beforetoggle",e),Qt("toggle",e),Qt("cancel",e),Qt("close",e);break;case"iframe":case"object":Qt("load",e);break;case"video":case"audio":for(r=0;r<el.length;r++)Qt(el[r],e);break;case"image":Qt("error",e),Qt("load",e);break;case"details":Qt("toggle",e);break;case"embed":case"source":case"link":Qt("error",e),Qt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in n)if(n.hasOwnProperty(st)&&(r=n[st],r!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:sn(e,t,st,r,n,null)}return;default:if(Do(t)){for(St in n)n.hasOwnProperty(St)&&(r=n[St],r!==void 0&&ms(e,t,St,r,n,void 0));return}}for(ne in n)n.hasOwnProperty(ne)&&(r=n[ne],r!=null&&sn(e,t,ne,r,n,null))}function rm(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,o=null,H=null,ne=null,et=null,st=null,St=null;for(ht in n){var Rt=n[ht];if(n.hasOwnProperty(ht)&&Rt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":et=Rt;default:r.hasOwnProperty(ht)||sn(e,t,ht,null,r,Rt)}}for(var ft in r){var ht=r[ft];if(Rt=n[ft],r.hasOwnProperty(ft)&&(ht!=null||Rt!=null))switch(ft){case"type":o=ht;break;case"name":a=ht;break;case"checked":st=ht;break;case"defaultChecked":St=ht;break;case"value":H=ht;break;case"defaultValue":ne=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(u(137,t));break;default:ht!==Rt&&sn(e,t,ft,ht,r,Rt)}}ko(e,H,ne,et,st,St,o,a);return;case"select":ht=H=ne=ft=null;for(o in n)if(et=n[o],n.hasOwnProperty(o)&&et!=null)switch(o){case"value":break;case"multiple":ht=et;default:r.hasOwnProperty(o)||sn(e,t,o,null,r,et)}for(a in r)if(o=r[a],et=n[a],r.hasOwnProperty(a)&&(o!=null||et!=null))switch(a){case"value":ft=o;break;case"defaultValue":ne=o;break;case"multiple":H=o;default:o!==et&&sn(e,t,a,o,r,et)}t=ne,n=H,r=ht,ft!=null?za(e,!!n,ft,!1):!!r!=!!n&&(t!=null?za(e,!!n,t,!0):za(e,!!n,n?[]:"",!1));return;case"textarea":ht=ft=null;for(ne in n)if(a=n[ne],n.hasOwnProperty(ne)&&a!=null&&!r.hasOwnProperty(ne))switch(ne){case"value":break;case"children":break;default:sn(e,t,ne,null,r,a)}for(H in r)if(a=r[H],o=n[H],r.hasOwnProperty(H)&&(a!=null||o!=null))switch(H){case"value":ft=a;break;case"defaultValue":ht=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(u(91));break;default:a!==o&&sn(e,t,H,a,r,o)}Xs(e,ft,ht);return;case"option":for(var Yt in n)if(ft=n[Yt],n.hasOwnProperty(Yt)&&ft!=null&&!r.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:sn(e,t,Yt,null,r,ft)}for(et in r)if(ft=r[et],ht=n[et],r.hasOwnProperty(et)&&ft!==ht&&(ft!=null||ht!=null))switch(et){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:sn(e,t,et,ft,r,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Lt in n)ft=n[Lt],n.hasOwnProperty(Lt)&&ft!=null&&!r.hasOwnProperty(Lt)&&sn(e,t,Lt,null,r,ft);for(st in r)if(ft=r[st],ht=n[st],r.hasOwnProperty(st)&&ft!==ht&&(ft!=null||ht!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(u(137,t));break;default:sn(e,t,st,ft,r,ht)}return;default:if(Do(t)){for(var cn in n)ft=n[cn],n.hasOwnProperty(cn)&&ft!==void 0&&!r.hasOwnProperty(cn)&&ms(e,t,cn,void 0,r,ft);for(St in r)ft=r[St],ht=n[St],!r.hasOwnProperty(St)||ft===ht||ft===void 0&&ht===void 0||ms(e,t,St,ft,r,ht);return}}for(var ot in n)ft=n[ot],n.hasOwnProperty(ot)&&ft!=null&&!r.hasOwnProperty(ot)&&sn(e,t,ot,null,r,ft);for(Rt in r)ft=r[Rt],ht=n[Rt],!r.hasOwnProperty(Rt)||ft===ht||ft==null&&ht==null||sn(e,t,Rt,ft,r,ht)}var gs=null,ys=null;function uo(e){return e.nodeType===9?e:e.ownerDocument}function Zd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $d(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=null;function am(){var e=window.event;return e&&e.type==="popstate"?e===xs?!1:(xs=e,!0):(xs=null,!1)}var Jd=typeof setTimeout=="function"?setTimeout:void 0,im=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(om)}:Jd;function om(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function eh(e,t){var n=t,r=0,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(0<r&&8>r){n=r;var H=e.ownerDocument;if(n&1&&nl(H.documentElement),n&2&&nl(H.body),n&4)for(n=H.head,nl(n),H=n.firstChild;H;){var ne=H.nextSibling,et=H.nodeName;H[yi]||et==="SCRIPT"||et==="STYLE"||et==="LINK"&&H.rel.toLowerCase()==="stylesheet"||n.removeChild(H),H=ne}}if(a===0){e.removeChild(o),cl(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:r=n.charCodeAt(0)-48;else r=0;n=o}while(n);cl(t)}function bs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":bs(n),Ro(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function um(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=xr(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xr(e.nextSibling),e===null))return null;return e}function Ss(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cm(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Es=null;function th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function nh(e,t,n){switch(t=uo(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function nl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ro(e)}var pr=new Map,rh=new Set;function so(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fr=yt.d;yt.d={f:fm,r:dm,D:hm,C:pm,L:mm,m:gm,X:vm,S:ym,M:xm};function fm(){var e=Fr.f(),t=eo();return e||t}function dm(e){var t=Ba(e);t!==null&&t.tag===5&&t.type==="form"?wf(t):Fr.r(e)}var pi=typeof document>"u"?null:document;function ah(e,t,n){var r=pi;if(r&&typeof t=="string"&&t){var a=or(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),rh.has(a)||(rh.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement("link"),Un(t,"link",e),Mn(t),r.head.appendChild(t)))}}function hm(e){Fr.D(e),ah("dns-prefetch",e,null)}function pm(e,t){Fr.C(e,t),ah("preconnect",e,t)}function mm(e,t,n){Fr.L(e,t,n);var r=pi;if(r&&e&&t){var a='link[rel="preload"][as="'+or(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+or(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+or(n.imageSizes)+'"]')):a+='[href="'+or(e)+'"]';var o=a;switch(t){case"style":o=mi(e);break;case"script":o=gi(e)}pr.has(o)||(e=te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pr.set(o,e),r.querySelector(a)!==null||t==="style"&&r.querySelector(rl(o))||t==="script"&&r.querySelector(al(o))||(t=r.createElement("link"),Un(t,"link",e),Mn(t),r.head.appendChild(t)))}}function gm(e,t){Fr.m(e,t);var n=pi;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+or(r)+'"][href="'+or(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=gi(e)}if(!pr.has(o)&&(e=te({rel:"modulepreload",href:e},t),pr.set(o,e),n.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(al(o)))return}r=n.createElement("link"),Un(r,"link",e),Mn(r),n.head.appendChild(r)}}}function ym(e,t,n){Fr.S(e,t,n);var r=pi;if(r&&e){var a=qa(r).hoistableStyles,o=mi(e);t=t||"default";var H=a.get(o);if(!H){var ne={loading:0,preload:null};if(H=r.querySelector(rl(o)))ne.loading=5;else{e=te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pr.get(o))&&ws(e,n);var et=H=r.createElement("link");Mn(et),Un(et,"link",e),et._p=new Promise(function(st,St){et.onload=st,et.onerror=St}),et.addEventListener("load",function(){ne.loading|=1}),et.addEventListener("error",function(){ne.loading|=2}),ne.loading|=4,co(H,t,r)}H={type:"stylesheet",instance:H,count:1,state:ne},a.set(o,H)}}}function vm(e,t){Fr.X(e,t);var n=pi;if(n&&e){var r=qa(n).hoistableScripts,a=gi(e),o=r.get(a);o||(o=n.querySelector(al(a)),o||(e=te({src:e,async:!0},t),(t=pr.get(a))&&_s(e,t),o=n.createElement("script"),Mn(o),Un(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}function xm(e,t){Fr.M(e,t);var n=pi;if(n&&e){var r=qa(n).hoistableScripts,a=gi(e),o=r.get(a);o||(o=n.querySelector(al(a)),o||(e=te({src:e,async:!0,type:"module"},t),(t=pr.get(a))&&_s(e,t),o=n.createElement("script"),Mn(o),Un(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}function ih(e,t,n,r){var a=(a=zt.current)?so(a):null;if(!a)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=mi(n.href),n=qa(a).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=mi(n.href);var o=qa(a).hoistableStyles,H=o.get(e);if(H||(a=a.ownerDocument||a,H={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,H),(o=a.querySelector(rl(e)))&&!o._p&&(H.instance=o,H.state.loading=5),pr.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pr.set(e,n),o||bm(a,e,n,H.state))),t&&r===null)throw Error(u(528,""));return H}if(t&&r!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gi(n),n=qa(a).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function mi(e){return'href="'+or(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function lh(e){return te({},e,{"data-precedence":e.precedence,precedence:null})}function bm(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Un(t,"link",n),Mn(t),e.head.appendChild(t))}function gi(e){return'[src="'+or(e)+'"]'}function al(e){return"script[async]"+e}function oh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+or(n.href)+'"]');if(r)return t.instance=r,Mn(r),r;var a=te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Mn(r),Un(r,"style",a),co(r,n.precedence,e),t.instance=r;case"stylesheet":a=mi(n.href);var o=e.querySelector(rl(a));if(o)return t.state.loading|=4,t.instance=o,Mn(o),o;r=lh(n),(a=pr.get(a))&&ws(r,a),o=(e.ownerDocument||e).createElement("link"),Mn(o);var H=o;return H._p=new Promise(function(ne,et){H.onload=ne,H.onerror=et}),Un(o,"link",r),t.state.loading|=4,co(o,n.precedence,e),t.instance=o;case"script":return o=gi(n.src),(a=e.querySelector(al(o)))?(t.instance=a,Mn(a),a):(r=n,(a=pr.get(o))&&(r=te({},n),_s(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),Mn(a),Un(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,co(r,n.precedence,e));return t.instance}function co(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,H=0;H<r.length;H++){var ne=r[H];if(ne.dataset.precedence===t)o=ne;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _s(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var fo=null;function uh(e,t,n){if(fo===null){var r=new Map,a=fo=new Map;a.set(n,r)}else a=fo,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[yi]||o[Ln]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var H=o.getAttribute(t)||"";H=e+H;var ne=r.get(H);ne?ne.push(o):r.set(H,[o])}}return r}function sh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Sm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ch(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var il=null;function Em(){}function wm(e,t,n){if(il===null)throw Error(u(475));var r=il;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var a=mi(n.href),o=e.querySelector(rl(a));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ho.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=o,Mn(o);return}o=e.ownerDocument||e,n=lh(n),(a=pr.get(a))&&ws(n,a),o=o.createElement("link"),Mn(o);var H=o;H._p=new Promise(function(ne,et){H.onload=ne,H.onerror=et}),Un(o,"link",n),t.instance=o}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=ho.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function _m(){if(il===null)throw Error(u(475));var e=il;return e.stylesheets&&e.count===0&&Rs(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Rs(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ho(){if(this.count--,this.count===0){if(this.stylesheets)Rs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var po=null;function Rs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,po=new Map,t.forEach(Rm,e),po=null,ho.call(e))}function Rm(e,t){if(!(t.state.loading&4)){var n=po.get(e);if(n)var r=n.get(null);else{n=new Map,po.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var H=a[o];(H.nodeName==="LINK"||H.getAttribute("media")!=="not all")&&(n.set(H.dataset.precedence,H),r=H)}r&&n.set(null,r)}a=t.instance,H=a.getAttribute("data-precedence"),o=n.get(H)||r,o===r&&n.set(null,a),n.set(H,a),this.count++,r=ho.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ll={$$typeof:Dt,Provider:null,Consumer:null,_currentValue:qt,_currentValue2:qt,_threadCount:0};function Am(e,t,n,r,a,o,H,ne){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.hiddenUpdates=Vn(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=H,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=ne,this.incompleteTransitions=new Map}function fh(e,t,n,r,a,o,H,ne,et,st,St,Rt){return e=new Am(e,t,n,H,ne,et,st,Rt),t=1,o===!0&&(t|=24),o=er(3,null,null,t),e.current=o,o.stateNode=e,t=lu(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},cu(o),e}function dh(e){return e?(e=Xa,e):Xa}function hh(e,t,n,r,a,o){a=dh(a),r.context===null?r.context=a:r.pendingContext=a,r=Zr(t),r.payload={element:n},o=o===void 0?null:o,o!==null&&(r.callback=o),n=$r(e,r,t),n!==null&&(ir(n,e,t),ji(n,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function mh(e){if(e.tag===13){var t=Va(e,67108864);t!==null&&ir(t,e,67108864),As(e,67108864)}}var mo=!0;function Tm(e,t,n,r){var a=vt.T;vt.T=null;var o=yt.p;try{yt.p=2,Ts(e,t,n,r)}finally{yt.p=o,vt.T=a}}function Cm(e,t,n,r){var a=vt.T;vt.T=null;var o=yt.p;try{yt.p=8,Ts(e,t,n,r)}finally{yt.p=o,vt.T=a}}function Ts(e,t,n,r){if(mo){var a=Cs(r);if(a===null)ps(e,t,r,go,n),yh(e,r);else if(Mm(a,e,t,n,r))r.stopPropagation();else if(yh(e,r),t&4&&-1<km.indexOf(e)){for(;a!==null;){var o=Ba(a);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var H=dt(o.pendingLanes);if(H!==0){var ne=o;for(ne.pendingLanes|=2,ne.entangledLanes|=2;H;){var et=1<<31-g(H);ne.entanglements[1]|=et,H&=~et}Ar(o),(ln&6)===0&&(Jl=gn()+500,Wi(0))}}break;case 13:ne=Va(o,2),ne!==null&&ir(ne,o,2),eo(),As(o,2)}if(o=Cs(r),o===null&&ps(e,t,r,go,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else ps(e,t,r,null,n)}}function Cs(e){return e=No(e),ks(e)}var go=null;function ks(e){if(go=null,e=Na(e),e!==null){var t=k(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=T(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return go=e,null}function gh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pr()){case Tr:return 2;case br:return 8;case Pn:case zn:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var Ms=!1,ca=null,fa=null,da=null,ol=new Map,ul=new Map,ha=[],km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yh(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(t.pointerId)}}function sl(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Ba(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Mm(e,t,n,r,a){switch(t){case"focusin":return ca=sl(ca,e,t,n,r,a),!0;case"dragenter":return fa=sl(fa,e,t,n,r,a),!0;case"mouseover":return da=sl(da,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return ol.set(o,sl(ol.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,ul.set(o,sl(ul.get(o)||null,e,t,n,r,a)),!0}return!1}function vh(e){var t=Na(e.target);if(t!==null){var n=k(t);if(n!==null){if(t=n.tag,t===13){if(t=T(n),t!==null){e.blockedOn=t,wh(e.priority,function(){if(n.tag===13){var r=ar();r=Eo(r);var a=Va(n,r);a!==null&&ir(a,n,r),As(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cs(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oo=r,n.target.dispatchEvent(r),Oo=null}else return t=Ba(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function xh(e,t,n){yo(e)&&n.delete(t)}function Dm(){Ms=!1,ca!==null&&yo(ca)&&(ca=null),fa!==null&&yo(fa)&&(fa=null),da!==null&&yo(da)&&(da=null),ol.forEach(xh),ul.forEach(xh)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Dm)))}var xo=null;function bh(e){xo!==e&&(xo=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!="function"){if(ks(r||n)===null)continue;break}var o=Ba(n);o!==null&&(e.splice(t,3),t-=3,ku(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function cl(e){function t(et){return vo(et,e)}ca!==null&&vo(ca,e),fa!==null&&vo(fa,e),da!==null&&vo(da,e),ol.forEach(t),ul.forEach(t);for(var n=0;n<ha.length;n++){var r=ha[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ha.length&&(n=ha[0],n.blockedOn===null);)vh(n),n.blockedOn===null&&ha.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],H=a[Xn]||null;if(typeof o=="function")H||bh(n);else if(H){var ne=null;if(o&&o.hasAttribute("formAction")){if(a=o,H=o[Xn]||null)ne=H.formAction;else if(ks(a)!==null)continue}else ne=H.action;typeof ne=="function"?n[r+1]=ne:(n.splice(r,3),r-=3),bh(n)}}}function Ds(e){this._internalRoot=e}bo.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,r=ar();hh(n,r,e,t,null,null)},bo.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hh(e.current,2,null,e,null,null),eo(),t[Oa]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ha.length&&t!==0&&t<ha[n].priority;n++);ha.splice(n,0,e),n===0&&vh(e)}};var Sh=l.version;if(Sh!=="19.1.1")throw Error(u(527,Sh,"19.1.1"));yt.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=Z(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var Om={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:vt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Et=So.inject(Om),ee=So}catch{}}return reactDomClient_production.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,r="",a=Uf,o=zf,H=Lf,ne=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(H=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(ne=t.unstable_transitionCallbacks)),t=fh(e,1,!1,null,null,n,r,a,o,H,ne,null),e[Oa]=t.current,hs(e),new Ds(t)},reactDomClient_production.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var r=!1,a="",o=Uf,H=zf,ne=Lf,et=null,st=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(H=n.onCaughtError),n.onRecoverableError!==void 0&&(ne=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(et=n.unstable_transitionCallbacks),n.formState!==void 0&&(st=n.formState)),t=fh(e,1,!0,t,n??null,r,a,o,H,ne,et,st),t.context=dh(null),n=t.current,r=ar(),r=Eo(r),a=Zr(r),a.callback=null,$r(n,a,r),n=r,t.current.lanes=n,vn(t,n),Ar(t),e[Oa]=t.current,hs(e),new bo(t)},reactDomClient_production.version="19.1.1",reactDomClient_production}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client.exports;hasRequiredClient=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),client.exports=requireReactDomClient_production(),client.exports}var clientExports=requireClient();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var PopStateEventType="popstate";function createBrowserHistory(i={}){function l(u,c){let{pathname:k,search:T,hash:A}=u.location;return createLocation("",{pathname:k,search:T,hash:A},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function x(u,c){return typeof c=="string"?c:createPath(c)}return getUrlBasedHistory(l,x,null,i)}function invariant(i,l){if(i===!1||i===null||typeof i>"u")throw new Error(l)}function warning(i,l){if(!i){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function createKey(){return Math.random().toString(36).substring(2,10)}function getHistoryState(i,l){return{usr:i.state,key:i.key,idx:l}}function createLocation(i,l,x=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof l=="string"?parsePath(l):l,state:x,key:l&&l.key||u||createKey()}}function createPath({pathname:i="/",search:l="",hash:x=""}){return l&&l!=="?"&&(i+=l.charAt(0)==="?"?l:"?"+l),x&&x!=="#"&&(i+=x.charAt(0)==="#"?x:"#"+x),i}function parsePath(i){let l={};if(i){let x=i.indexOf("#");x>=0&&(l.hash=i.substring(x),i=i.substring(0,x));let u=i.indexOf("?");u>=0&&(l.search=i.substring(u),i=i.substring(0,u)),i&&(l.pathname=i)}return l}function getUrlBasedHistory(i,l,x,u={}){let{window:c=document.defaultView,v5Compat:k=!1}=u,T=c.history,A="POP",Z=null,Y=te();Y==null&&(Y=0,T.replaceState({...T.state,idx:Y},""));function te(){return(T.state||{idx:null}).idx}function Ye(){A="POP";let xt=te(),At=xt==null?null:xt-Y;Y=xt,Z&&Z({action:A,location:pt.location,delta:At})}function tt(xt,At){A="PUSH";let Tt=createLocation(pt.location,xt,At);Y=te()+1;let Dt=getHistoryState(Tt,Y),Ut=pt.createHref(Tt);try{T.pushState(Dt,"",Ut)}catch(Mt){if(Mt instanceof DOMException&&Mt.name==="DataCloneError")throw Mt;c.location.assign(Ut)}k&&Z&&Z({action:A,location:pt.location,delta:1})}function it(xt,At){A="REPLACE";let Tt=createLocation(pt.location,xt,At);Y=te();let Dt=getHistoryState(Tt,Y),Ut=pt.createHref(Tt);T.replaceState(Dt,"",Ut),k&&Z&&Z({action:A,location:pt.location,delta:0})}function lt(xt){return createBrowserURLImpl(xt)}let pt={get action(){return A},get location(){return i(c,T)},listen(xt){if(Z)throw new Error("A history only accepts one active listener");return c.addEventListener(PopStateEventType,Ye),Z=xt,()=>{c.removeEventListener(PopStateEventType,Ye),Z=null}},createHref(xt){return l(c,xt)},createURL:lt,encodeLocation(xt){let At=lt(xt);return{pathname:At.pathname,search:At.search,hash:At.hash}},push:tt,replace:it,go(xt){return T.go(xt)}};return pt}function createBrowserURLImpl(i,l=!1){let x="http://localhost";typeof window<"u"&&(x=window.location.origin!=="null"?window.location.origin:window.location.href),invariant(x,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:createPath(i);return u=u.replace(/ $/,"%20"),!l&&u.startsWith("//")&&(u=x+u),new URL(u,x)}function matchRoutes(i,l,x="/"){return matchRoutesImpl(i,l,x,!1)}function matchRoutesImpl(i,l,x,u){let c=typeof l=="string"?parsePath(l):l,k=stripBasename(c.pathname||"/",x);if(k==null)return null;let T=flattenRoutes(i);rankRouteBranches(T);let A=null;for(let Z=0;A==null&&Z<T.length;++Z){let Y=decodePath(k);A=matchRouteBranch(T[Z],Y,u)}return A}function flattenRoutes(i,l=[],x=[],u="",c=!1){let k=(T,A,Z=c,Y)=>{let te={relativePath:Y===void 0?T.path||"":Y,caseSensitive:T.caseSensitive===!0,childrenIndex:A,route:T};if(te.relativePath.startsWith("/")){if(!te.relativePath.startsWith(u)&&Z)return;invariant(te.relativePath.startsWith(u),`Absolute route path "${te.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),te.relativePath=te.relativePath.slice(u.length)}let Ye=joinPaths([u,te.relativePath]),tt=x.concat(te);T.children&&T.children.length>0&&(invariant(T.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${Ye}".`),flattenRoutes(T.children,l,tt,Ye,Z)),!(T.path==null&&!T.index)&&l.push({path:Ye,score:computeScore(Ye,T.index),routesMeta:tt})};return i.forEach((T,A)=>{if(T.path===""||!T.path?.includes("?"))k(T,A);else for(let Z of explodeOptionalSegments(T.path))k(T,A,!0,Z)}),l}function explodeOptionalSegments(i){let l=i.split("/");if(l.length===0)return[];let[x,...u]=l,c=x.endsWith("?"),k=x.replace(/\?$/,"");if(u.length===0)return c?[k,""]:[k];let T=explodeOptionalSegments(u.join("/")),A=[];return A.push(...T.map(Z=>Z===""?k:[k,Z].join("/"))),c&&A.push(...T),A.map(Z=>i.startsWith("/")&&Z===""?"/":Z)}function rankRouteBranches(i){i.sort((l,x)=>l.score!==x.score?x.score-l.score:compareIndexes(l.routesMeta.map(u=>u.childrenIndex),x.routesMeta.map(u=>u.childrenIndex)))}var paramRe=/^:[\w-]+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=i=>i==="*";function computeScore(i,l){let x=i.split("/"),u=x.length;return x.some(isSplat)&&(u+=splatPenalty),l&&(u+=indexRouteValue),x.filter(c=>!isSplat(c)).reduce((c,k)=>c+(paramRe.test(k)?dynamicSegmentValue:k===""?emptySegmentValue:staticSegmentValue),u)}function compareIndexes(i,l){return i.length===l.length&&i.slice(0,-1).every((u,c)=>u===l[c])?i[i.length-1]-l[l.length-1]:0}function matchRouteBranch(i,l,x=!1){let{routesMeta:u}=i,c={},k="/",T=[];for(let A=0;A<u.length;++A){let Z=u[A],Y=A===u.length-1,te=k==="/"?l:l.slice(k.length)||"/",Ye=matchPath({path:Z.relativePath,caseSensitive:Z.caseSensitive,end:Y},te),tt=Z.route;if(!Ye&&Y&&x&&!u[u.length-1].route.index&&(Ye=matchPath({path:Z.relativePath,caseSensitive:Z.caseSensitive,end:!1},te)),!Ye)return null;Object.assign(c,Ye.params),T.push({params:c,pathname:joinPaths([k,Ye.pathname]),pathnameBase:normalizePathname(joinPaths([k,Ye.pathnameBase])),route:tt}),Ye.pathnameBase!=="/"&&(k=joinPaths([k,Ye.pathnameBase]))}return T}function matchPath(i,l){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[x,u]=compilePath(i.path,i.caseSensitive,i.end),c=l.match(x);if(!c)return null;let k=c[0],T=k.replace(/(.)\/+$/,"$1"),A=c.slice(1);return{params:u.reduce((Y,{paramName:te,isOptional:Ye},tt)=>{if(te==="*"){let lt=A[tt]||"";T=k.slice(0,k.length-lt.length).replace(/(.)\/+$/,"$1")}const it=A[tt];return Ye&&!it?Y[te]=void 0:Y[te]=(it||"").replace(/%2F/g,"/"),Y},{}),pathname:k,pathnameBase:T,pattern:i}}function compilePath(i,l=!1,x=!0){warning(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(T,A,Z)=>(u.push({paramName:A,isOptional:Z!=null}),Z?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):x?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,l?void 0:"i"),u]}function decodePath(i){try{return i.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return warning(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),i}}function stripBasename(i,l){if(l==="/")return i;if(!i.toLowerCase().startsWith(l.toLowerCase()))return null;let x=l.endsWith("/")?l.length-1:l.length,u=i.charAt(x);return u&&u!=="/"?null:i.slice(x)||"/"}function resolvePath(i,l="/"){let{pathname:x,search:u="",hash:c=""}=typeof i=="string"?parsePath(i):i;return{pathname:x?x.startsWith("/")?x:resolvePathname(x,l):l,search:normalizeSearch(u),hash:normalizeHash(c)}}function resolvePathname(i,l){let x=l.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?x.length>1&&x.pop():c!=="."&&x.push(c)}),x.length>1?x.join("/"):"/"}function getInvalidPathError(i,l,x,u){return`Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${x}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function getPathContributingMatches(i){return i.filter((l,x)=>x===0||l.route.path&&l.route.path.length>0)}function getResolveToMatches(i){let l=getPathContributingMatches(i);return l.map((x,u)=>u===l.length-1?x.pathname:x.pathnameBase)}function resolveTo(i,l,x,u=!1){let c;typeof i=="string"?c=parsePath(i):(c={...i},invariant(!c.pathname||!c.pathname.includes("?"),getInvalidPathError("?","pathname","search",c)),invariant(!c.pathname||!c.pathname.includes("#"),getInvalidPathError("#","pathname","hash",c)),invariant(!c.search||!c.search.includes("#"),getInvalidPathError("#","search","hash",c)));let k=i===""||c.pathname==="",T=k?"/":c.pathname,A;if(T==null)A=x;else{let Ye=l.length-1;if(!u&&T.startsWith("..")){let tt=T.split("/");for(;tt[0]==="..";)tt.shift(),Ye-=1;c.pathname=tt.join("/")}A=Ye>=0?l[Ye]:"/"}let Z=resolvePath(c,A),Y=T&&T!=="/"&&T.endsWith("/"),te=(k||T===".")&&x.endsWith("/");return!Z.pathname.endsWith("/")&&(Y||te)&&(Z.pathname+="/"),Z}var joinPaths=i=>i.join("/").replace(/\/\/+/g,"/"),normalizePathname=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,normalizeHash=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function isRouteErrorResponse(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var validMutationMethodsArr=["POST","PUT","PATCH","DELETE"];new Set(validMutationMethodsArr);var validRequestMethodsArr=["GET",...validMutationMethodsArr];new Set(validRequestMethodsArr);var DataRouterContext=reactExports.createContext(null);DataRouterContext.displayName="DataRouter";var DataRouterStateContext=reactExports.createContext(null);DataRouterStateContext.displayName="DataRouterState";reactExports.createContext(!1);var ViewTransitionContext=reactExports.createContext({isTransitioning:!1});ViewTransitionContext.displayName="ViewTransition";var FetchersContext=reactExports.createContext(new Map);FetchersContext.displayName="Fetchers";var AwaitContext=reactExports.createContext(null);AwaitContext.displayName="Await";var NavigationContext=reactExports.createContext(null);NavigationContext.displayName="Navigation";var LocationContext=reactExports.createContext(null);LocationContext.displayName="Location";var RouteContext=reactExports.createContext({outlet:null,matches:[],isDataRoute:!1});RouteContext.displayName="Route";var RouteErrorContext=reactExports.createContext(null);RouteErrorContext.displayName="RouteError";function useHref(i,{relative:l}={}){invariant(useInRouterContext(),"useHref() may be used only in the context of a <Router> component.");let{basename:x,navigator:u}=reactExports.useContext(NavigationContext),{hash:c,pathname:k,search:T}=useResolvedPath(i,{relative:l}),A=k;return x!=="/"&&(A=k==="/"?x:joinPaths([x,k])),u.createHref({pathname:A,search:T,hash:c})}function useInRouterContext(){return reactExports.useContext(LocationContext)!=null}function useLocation(){return invariant(useInRouterContext(),"useLocation() may be used only in the context of a <Router> component."),reactExports.useContext(LocationContext).location}var navigateEffectWarning="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function useIsomorphicLayoutEffect(i){reactExports.useContext(NavigationContext).static||reactExports.useLayoutEffect(i)}function useNavigate(){let{isDataRoute:i}=reactExports.useContext(RouteContext);return i?useNavigateStable():useNavigateUnstable()}function useNavigateUnstable(){invariant(useInRouterContext(),"useNavigate() may be used only in the context of a <Router> component.");let i=reactExports.useContext(DataRouterContext),{basename:l,navigator:x}=reactExports.useContext(NavigationContext),{matches:u}=reactExports.useContext(RouteContext),{pathname:c}=useLocation(),k=JSON.stringify(getResolveToMatches(u)),T=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{T.current=!0}),reactExports.useCallback((Z,Y={})=>{if(warning(T.current,navigateEffectWarning),!T.current)return;if(typeof Z=="number"){x.go(Z);return}let te=resolveTo(Z,JSON.parse(k),c,Y.relative==="path");i==null&&l!=="/"&&(te.pathname=te.pathname==="/"?l:joinPaths([l,te.pathname])),(Y.replace?x.replace:x.push)(te,Y.state,Y)},[l,x,k,c,i])}var OutletContext=reactExports.createContext(null);function useOutlet(i){let l=reactExports.useContext(RouteContext).outlet;return l&&reactExports.createElement(OutletContext.Provider,{value:i},l)}function useParams(){let{matches:i}=reactExports.useContext(RouteContext),l=i[i.length-1];return l?l.params:{}}function useResolvedPath(i,{relative:l}={}){let{matches:x}=reactExports.useContext(RouteContext),{pathname:u}=useLocation(),c=JSON.stringify(getResolveToMatches(x));return reactExports.useMemo(()=>resolveTo(i,JSON.parse(c),u,l==="path"),[i,c,u,l])}function useRoutes(i,l){return useRoutesImpl(i,l)}function useRoutesImpl(i,l,x,u,c){invariant(useInRouterContext(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:k}=reactExports.useContext(NavigationContext),{matches:T}=reactExports.useContext(RouteContext),A=T[T.length-1],Z=A?A.params:{},Y=A?A.pathname:"/",te=A?A.pathnameBase:"/",Ye=A&&A.route;{let Tt=Ye&&Ye.path||"";warningOnce(Y,!Ye||Tt.endsWith("*")||Tt.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${Y}" (under <Route path="${Tt}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Tt}"> to <Route path="${Tt==="/"?"*":`${Tt}/*`}">.`)}let tt=useLocation(),it;if(l){let Tt=typeof l=="string"?parsePath(l):l;invariant(te==="/"||Tt.pathname?.startsWith(te),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${te}" but pathname "${Tt.pathname}" was given in the \`location\` prop.`),it=Tt}else it=tt;let lt=it.pathname||"/",pt=lt;if(te!=="/"){let Tt=te.replace(/^\//,"").split("/");pt="/"+lt.replace(/^\//,"").split("/").slice(Tt.length).join("/")}let xt=matchRoutes(i,{pathname:pt});warning(Ye||xt!=null,`No routes matched location "${it.pathname}${it.search}${it.hash}" `),warning(xt==null||xt[xt.length-1].route.element!==void 0||xt[xt.length-1].route.Component!==void 0||xt[xt.length-1].route.lazy!==void 0,`Matched leaf route at location "${it.pathname}${it.search}${it.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let At=_renderMatches(xt&&xt.map(Tt=>Object.assign({},Tt,{params:Object.assign({},Z,Tt.params),pathname:joinPaths([te,k.encodeLocation?k.encodeLocation(Tt.pathname).pathname:Tt.pathname]),pathnameBase:Tt.pathnameBase==="/"?te:joinPaths([te,k.encodeLocation?k.encodeLocation(Tt.pathnameBase).pathname:Tt.pathnameBase])})),T,x,u,c);return l&&At?reactExports.createElement(LocationContext.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...it},navigationType:"POP"}},At):At}function DefaultErrorComponent(){let i=useRouteError(),l=isRouteErrorResponse(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),x=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},k={padding:"2px 4px",backgroundColor:u},T=null;return console.error("Error handled by React Router default ErrorBoundary:",i),T=reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("p",null,"💿 Hey developer 👋"),reactExports.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",reactExports.createElement("code",{style:k},"ErrorBoundary")," or"," ",reactExports.createElement("code",{style:k},"errorElement")," prop on your route.")),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement("h2",null,"Unexpected Application Error!"),reactExports.createElement("h3",{style:{fontStyle:"italic"}},l),x?reactExports.createElement("pre",{style:c},x):null,T)}var defaultErrorElement=reactExports.createElement(DefaultErrorComponent,null),RenderErrorBoundary=class extends reactExports.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,l){return l.location!==i.location||l.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:l.error,location:l.location,revalidation:i.revalidation||l.revalidation}}componentDidCatch(i,l){this.props.unstable_onError?this.props.unstable_onError(i,l):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?reactExports.createElement(RouteContext.Provider,{value:this.props.routeContext},reactExports.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RenderedRoute({routeContext:i,match:l,children:x}){let u=reactExports.useContext(DataRouterContext);return u&&u.static&&u.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=l.route.id),reactExports.createElement(RouteContext.Provider,{value:i},x)}function _renderMatches(i,l=[],x=null,u=null,c=null){if(i==null){if(!x)return null;if(x.errors)i=x.matches;else if(l.length===0&&!x.initialized&&x.matches.length>0)i=x.matches;else return null}let k=i,T=x?.errors;if(T!=null){let Y=k.findIndex(te=>te.route.id&&T?.[te.route.id]!==void 0);invariant(Y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(T).join(",")}`),k=k.slice(0,Math.min(k.length,Y+1))}let A=!1,Z=-1;if(x)for(let Y=0;Y<k.length;Y++){let te=k[Y];if((te.route.HydrateFallback||te.route.hydrateFallbackElement)&&(Z=Y),te.route.id){let{loaderData:Ye,errors:tt}=x,it=te.route.loader&&!Ye.hasOwnProperty(te.route.id)&&(!tt||tt[te.route.id]===void 0);if(te.route.lazy||it){A=!0,Z>=0?k=k.slice(0,Z+1):k=[k[0]];break}}}return k.reduceRight((Y,te,Ye)=>{let tt,it=!1,lt=null,pt=null;x&&(tt=T&&te.route.id?T[te.route.id]:void 0,lt=te.route.errorElement||defaultErrorElement,A&&(Z<0&&Ye===0?(warningOnce("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),it=!0,pt=null):Z===Ye&&(it=!0,pt=te.route.hydrateFallbackElement||null)));let xt=l.concat(k.slice(0,Ye+1)),At=()=>{let Tt;return tt?Tt=lt:it?Tt=pt:te.route.Component?Tt=reactExports.createElement(te.route.Component,null):te.route.element?Tt=te.route.element:Tt=Y,reactExports.createElement(RenderedRoute,{match:te,routeContext:{outlet:Y,matches:xt,isDataRoute:x!=null},children:Tt})};return x&&(te.route.ErrorBoundary||te.route.errorElement||Ye===0)?reactExports.createElement(RenderErrorBoundary,{location:x.location,revalidation:x.revalidation,component:lt,error:tt,children:At(),routeContext:{outlet:null,matches:xt,isDataRoute:!0},unstable_onError:u}):At()},null)}function getDataRouterConsoleError(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext(i){let l=reactExports.useContext(DataRouterContext);return invariant(l,getDataRouterConsoleError(i)),l}function useDataRouterState(i){let l=reactExports.useContext(DataRouterStateContext);return invariant(l,getDataRouterConsoleError(i)),l}function useRouteContext(i){let l=reactExports.useContext(RouteContext);return invariant(l,getDataRouterConsoleError(i)),l}function useCurrentRouteId(i){let l=useRouteContext(i),x=l.matches[l.matches.length-1];return invariant(x.route.id,`${i} can only be used on routes that contain a unique "id"`),x.route.id}function useRouteId(){return useCurrentRouteId("useRouteId")}function useRouteError(){let i=reactExports.useContext(RouteErrorContext),l=useDataRouterState("useRouteError"),x=useCurrentRouteId("useRouteError");return i!==void 0?i:l.errors?.[x]}function useNavigateStable(){let{router:i}=useDataRouterContext("useNavigate"),l=useCurrentRouteId("useNavigate"),x=reactExports.useRef(!1);return useIsomorphicLayoutEffect(()=>{x.current=!0}),reactExports.useCallback(async(c,k={})=>{warning(x.current,navigateEffectWarning),x.current&&(typeof c=="number"?i.navigate(c):await i.navigate(c,{fromRouteId:l,...k}))},[i,l])}var alreadyWarned={};function warningOnce(i,l,x){!l&&!alreadyWarned[i]&&(alreadyWarned[i]=!0,warning(!1,x))}reactExports.memo(DataRoutes);function DataRoutes({routes:i,future:l,state:x,unstable_onError:u}){return useRoutesImpl(i,void 0,x,u,l)}function Outlet(i){return useOutlet(i.context)}function Route(i){invariant(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Router({basename:i="/",children:l=null,location:x,navigationType:u="POP",navigator:c,static:k=!1}){invariant(!useInRouterContext(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let T=i.replace(/^\/*/,"/"),A=reactExports.useMemo(()=>({basename:T,navigator:c,static:k,future:{}}),[T,c,k]);typeof x=="string"&&(x=parsePath(x));let{pathname:Z="/",search:Y="",hash:te="",state:Ye=null,key:tt="default"}=x,it=reactExports.useMemo(()=>{let lt=stripBasename(Z,T);return lt==null?null:{location:{pathname:lt,search:Y,hash:te,state:Ye,key:tt},navigationType:u}},[T,Z,Y,te,Ye,tt,u]);return warning(it!=null,`<Router basename="${T}"> is not able to match the URL "${Z}${Y}${te}" because it does not start with the basename, so the <Router> won't render anything.`),it==null?null:reactExports.createElement(NavigationContext.Provider,{value:A},reactExports.createElement(LocationContext.Provider,{children:l,value:it}))}function Routes({children:i,location:l}){return useRoutes(createRoutesFromChildren(i),l)}function createRoutesFromChildren(i,l=[]){let x=[];return reactExports.Children.forEach(i,(u,c)=>{if(!reactExports.isValidElement(u))return;let k=[...l,c];if(u.type===reactExports.Fragment){x.push.apply(x,createRoutesFromChildren(u.props.children,k));return}invariant(u.type===Route,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),invariant(!u.props.index||!u.props.children,"An index route cannot have child routes.");let T={id:u.props.id||k.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(T.children=createRoutesFromChildren(u.props.children,k)),x.push(T)}),x}var defaultMethod="get",defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(i){return i!=null&&typeof i.tagName=="string"}function isButtonElement(i){return isHtmlElement(i)&&i.tagName.toLowerCase()==="button"}function isFormElement(i){return isHtmlElement(i)&&i.tagName.toLowerCase()==="form"}function isInputElement(i){return isHtmlElement(i)&&i.tagName.toLowerCase()==="input"}function isModifiedEvent(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function shouldProcessLinkClick(i,l){return i.button===0&&(!l||l==="_self")&&!isModifiedEvent(i)}var _formDataSupportsSubmitter=null;function isFormDataSubmitterSupported(){if(_formDataSupportsSubmitter===null)try{new FormData(document.createElement("form"),0),_formDataSupportsSubmitter=!1}catch{_formDataSupportsSubmitter=!0}return _formDataSupportsSubmitter}var supportedFormEncTypes=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function getFormEncType(i){return i!=null&&!supportedFormEncTypes.has(i)?(warning(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`),null):i}function getFormSubmissionInfo(i,l){let x,u,c,k,T;if(isFormElement(i)){let A=i.getAttribute("action");u=A?stripBasename(A,l):null,x=i.getAttribute("method")||defaultMethod,c=getFormEncType(i.getAttribute("enctype"))||defaultEncType,k=new FormData(i)}else if(isButtonElement(i)||isInputElement(i)&&(i.type==="submit"||i.type==="image")){let A=i.form;if(A==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let Z=i.getAttribute("formaction")||A.getAttribute("action");if(u=Z?stripBasename(Z,l):null,x=i.getAttribute("formmethod")||A.getAttribute("method")||defaultMethod,c=getFormEncType(i.getAttribute("formenctype"))||getFormEncType(A.getAttribute("enctype"))||defaultEncType,k=new FormData(A,i),!isFormDataSubmitterSupported()){let{name:Y,type:te,value:Ye}=i;if(te==="image"){let tt=Y?`${Y}.`:"";k.append(`${tt}x`,"0"),k.append(`${tt}y`,"0")}else Y&&k.append(Y,Ye)}}else{if(isHtmlElement(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');x=defaultMethod,u=null,c=defaultEncType,T=i}return k&&c==="text/plain"&&(T=k,k=void 0),{action:u,method:x.toLowerCase(),encType:c,formData:k,body:T}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function invariant2(i,l){if(i===!1||i===null||typeof i>"u")throw new Error(l)}function singleFetchUrl(i,l,x){let u=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return u.pathname==="/"?u.pathname=`_root.${x}`:l&&stripBasename(u.pathname,l)==="/"?u.pathname=`${l.replace(/\/$/,"")}/_root.${x}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${x}`,u}async function loadRouteModule(i,l){if(i.id in l)return l[i.id];try{let x=await import(i.module);return l[i.id]=x,x}catch(x){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(x),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function isHtmlLinkDescriptor(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function getKeyedPrefetchLinks(i,l,x){let u=await Promise.all(i.map(async c=>{let k=l.routes[c.route.id];if(k){let T=await loadRouteModule(k,x);return T.links?T.links():[]}return[]}));return dedupeLinkDescriptors(u.flat(1).filter(isHtmlLinkDescriptor).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function getNewMatchesForLinks(i,l,x,u,c,k){let T=(Z,Y)=>x[Y]?Z.route.id!==x[Y].route.id:!0,A=(Z,Y)=>x[Y].pathname!==Z.pathname||x[Y].route.path?.endsWith("*")&&x[Y].params["*"]!==Z.params["*"];return k==="assets"?l.filter((Z,Y)=>T(Z,Y)||A(Z,Y)):k==="data"?l.filter((Z,Y)=>{let te=u.routes[Z.route.id];if(!te||!te.hasLoader)return!1;if(T(Z,Y)||A(Z,Y))return!0;if(Z.route.shouldRevalidate){let Ye=Z.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:x[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:Z.params,defaultShouldRevalidate:!0});if(typeof Ye=="boolean")return Ye}return!0}):[]}function getModuleLinkHrefs(i,l,{includeHydrateFallback:x}={}){return dedupeHrefs(i.map(u=>{let c=l.routes[u.route.id];if(!c)return[];let k=[c.module];return c.clientActionModule&&(k=k.concat(c.clientActionModule)),c.clientLoaderModule&&(k=k.concat(c.clientLoaderModule)),x&&c.hydrateFallbackModule&&(k=k.concat(c.hydrateFallbackModule)),c.imports&&(k=k.concat(c.imports)),k}).flat(1))}function dedupeHrefs(i){return[...new Set(i)]}function sortKeys(i){let l={},x=Object.keys(i).sort();for(let u of x)l[u]=i[u];return l}function dedupeLinkDescriptors(i,l){let x=new Set;return new Set(l),i.reduce((u,c)=>{let k=JSON.stringify(sortKeys(c));return x.has(k)||(x.add(k),u.push({key:k,link:c})),u},[])}function useDataRouterContext2(){let i=reactExports.useContext(DataRouterContext);return invariant2(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function useDataRouterStateContext(){let i=reactExports.useContext(DataRouterStateContext);return invariant2(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var FrameworkContext=reactExports.createContext(void 0);FrameworkContext.displayName="FrameworkContext";function useFrameworkContext(){let i=reactExports.useContext(FrameworkContext);return invariant2(i,"You must render this element inside a <HydratedRouter> element"),i}function usePrefetchBehavior(i,l){let x=reactExports.useContext(FrameworkContext),[u,c]=reactExports.useState(!1),[k,T]=reactExports.useState(!1),{onFocus:A,onBlur:Z,onMouseEnter:Y,onMouseLeave:te,onTouchStart:Ye}=l,tt=reactExports.useRef(null);reactExports.useEffect(()=>{if(i==="render"&&T(!0),i==="viewport"){let pt=At=>{At.forEach(Tt=>{T(Tt.isIntersecting)})},xt=new IntersectionObserver(pt,{threshold:.5});return tt.current&&xt.observe(tt.current),()=>{xt.disconnect()}}},[i]),reactExports.useEffect(()=>{if(u){let pt=setTimeout(()=>{T(!0)},100);return()=>{clearTimeout(pt)}}},[u]);let it=()=>{c(!0)},lt=()=>{c(!1),T(!1)};return x?i!=="intent"?[k,tt,{}]:[k,tt,{onFocus:composeEventHandlers(A,it),onBlur:composeEventHandlers(Z,lt),onMouseEnter:composeEventHandlers(Y,it),onMouseLeave:composeEventHandlers(te,lt),onTouchStart:composeEventHandlers(Ye,it)}]:[!1,tt,{}]}function composeEventHandlers(i,l){return x=>{i&&i(x),x.defaultPrevented||l(x)}}function PrefetchPageLinks({page:i,...l}){let{router:x}=useDataRouterContext2(),u=reactExports.useMemo(()=>matchRoutes(x.routes,i,x.basename),[x.routes,i,x.basename]);return u?reactExports.createElement(PrefetchPageLinksImpl,{page:i,matches:u,...l}):null}function useKeyedPrefetchLinks(i){let{manifest:l,routeModules:x}=useFrameworkContext(),[u,c]=reactExports.useState([]);return reactExports.useEffect(()=>{let k=!1;return getKeyedPrefetchLinks(i,l,x).then(T=>{k||c(T)}),()=>{k=!0}},[i,l,x]),u}function PrefetchPageLinksImpl({page:i,matches:l,...x}){let u=useLocation(),{manifest:c,routeModules:k}=useFrameworkContext(),{basename:T}=useDataRouterContext2(),{loaderData:A,matches:Z}=useDataRouterStateContext(),Y=reactExports.useMemo(()=>getNewMatchesForLinks(i,l,Z,c,u,"data"),[i,l,Z,c,u]),te=reactExports.useMemo(()=>getNewMatchesForLinks(i,l,Z,c,u,"assets"),[i,l,Z,c,u]),Ye=reactExports.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let lt=new Set,pt=!1;if(l.forEach(At=>{let Tt=c.routes[At.route.id];!Tt||!Tt.hasLoader||(!Y.some(Dt=>Dt.route.id===At.route.id)&&At.route.id in A&&k[At.route.id]?.shouldRevalidate||Tt.hasClientLoader?pt=!0:lt.add(At.route.id))}),lt.size===0)return[];let xt=singleFetchUrl(i,T,"data");return pt&&lt.size>0&&xt.searchParams.set("_routes",l.filter(At=>lt.has(At.route.id)).map(At=>At.route.id).join(",")),[xt.pathname+xt.search]},[T,A,u,c,Y,l,i,k]),tt=reactExports.useMemo(()=>getModuleLinkHrefs(te,c),[te,c]),it=useKeyedPrefetchLinks(te);return reactExports.createElement(reactExports.Fragment,null,Ye.map(lt=>reactExports.createElement("link",{key:lt,rel:"prefetch",as:"fetch",href:lt,...x})),tt.map(lt=>reactExports.createElement("link",{key:lt,rel:"modulepreload",href:lt,...x})),it.map(({key:lt,link:pt})=>reactExports.createElement("link",{key:lt,nonce:x.nonce,...pt})))}function mergeRefs(...i){return l=>{i.forEach(x=>{typeof x=="function"?x(l):x!=null&&(x.current=l)})}}var isBrowser=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{isBrowser&&(window.__reactRouterVersion="7.9.1")}catch{}function BrowserRouter({basename:i,children:l,window:x}){let u=reactExports.useRef();u.current==null&&(u.current=createBrowserHistory({window:x,v5Compat:!0}));let c=u.current,[k,T]=reactExports.useState({action:c.action,location:c.location}),A=reactExports.useCallback(Z=>{reactExports.startTransition(()=>T(Z))},[T]);return reactExports.useLayoutEffect(()=>c.listen(A),[c,A]),reactExports.createElement(Router,{basename:i,children:l,location:k.location,navigationType:k.action,navigator:c})}var ABSOLUTE_URL_REGEX2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=reactExports.forwardRef(function({onClick:l,discover:x="render",prefetch:u="none",relative:c,reloadDocument:k,replace:T,state:A,target:Z,to:Y,preventScrollReset:te,viewTransition:Ye,...tt},it){let{basename:lt}=reactExports.useContext(NavigationContext),pt=typeof Y=="string"&&ABSOLUTE_URL_REGEX2.test(Y),xt,At=!1;if(typeof Y=="string"&&pt&&(xt=Y,isBrowser))try{let tn=new URL(window.location.href),_n=Y.startsWith("//")?new URL(tn.protocol+Y):new URL(Y),Tn=stripBasename(_n.pathname,lt);_n.origin===tn.origin&&Tn!=null?Y=Tn+_n.search+_n.hash:At=!0}catch{warning(!1,`<Link to="${Y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Tt=useHref(Y,{relative:c}),[Dt,Ut,Mt]=usePrefetchBehavior(u,tt),Vt=useLinkClickHandler(Y,{replace:T,state:A,target:Z,preventScrollReset:te,relative:c,viewTransition:Ye});function Zt(tn){l&&l(tn),tn.defaultPrevented||Vt(tn)}let an=reactExports.createElement("a",{...tt,...Mt,href:xt||Tt,onClick:At||k?l:Zt,ref:mergeRefs(it,Ut),target:Z,"data-discover":!pt&&x==="render"?"true":void 0});return Dt&&!pt?reactExports.createElement(reactExports.Fragment,null,an,reactExports.createElement(PrefetchPageLinks,{page:Tt})):an});Link.displayName="Link";var NavLink=reactExports.forwardRef(function({"aria-current":l="page",caseSensitive:x=!1,className:u="",end:c=!1,style:k,to:T,viewTransition:A,children:Z,...Y},te){let Ye=useResolvedPath(T,{relative:Y.relative}),tt=useLocation(),it=reactExports.useContext(DataRouterStateContext),{navigator:lt,basename:pt}=reactExports.useContext(NavigationContext),xt=it!=null&&useViewTransitionState(Ye)&&A===!0,At=lt.encodeLocation?lt.encodeLocation(Ye).pathname:Ye.pathname,Tt=tt.pathname,Dt=it&&it.navigation&&it.navigation.location?it.navigation.location.pathname:null;x||(Tt=Tt.toLowerCase(),Dt=Dt?Dt.toLowerCase():null,At=At.toLowerCase()),Dt&&pt&&(Dt=stripBasename(Dt,pt)||Dt);const Ut=At!=="/"&&At.endsWith("/")?At.length-1:At.length;let Mt=Tt===At||!c&&Tt.startsWith(At)&&Tt.charAt(Ut)==="/",Vt=Dt!=null&&(Dt===At||!c&&Dt.startsWith(At)&&Dt.charAt(At.length)==="/"),Zt={isActive:Mt,isPending:Vt,isTransitioning:xt},an=Mt?l:void 0,tn;typeof u=="function"?tn=u(Zt):tn=[u,Mt?"active":null,Vt?"pending":null,xt?"transitioning":null].filter(Boolean).join(" ");let _n=typeof k=="function"?k(Zt):k;return reactExports.createElement(Link,{...Y,"aria-current":an,className:tn,ref:te,style:_n,to:T,viewTransition:A},typeof Z=="function"?Z(Zt):Z)});NavLink.displayName="NavLink";var Form=reactExports.forwardRef(({discover:i="render",fetcherKey:l,navigate:x,reloadDocument:u,replace:c,state:k,method:T=defaultMethod,action:A,onSubmit:Z,relative:Y,preventScrollReset:te,viewTransition:Ye,...tt},it)=>{let lt=useSubmit(),pt=useFormAction(A,{relative:Y}),xt=T.toLowerCase()==="get"?"get":"post",At=typeof A=="string"&&ABSOLUTE_URL_REGEX2.test(A),Tt=Dt=>{if(Z&&Z(Dt),Dt.defaultPrevented)return;Dt.preventDefault();let Ut=Dt.nativeEvent.submitter,Mt=Ut?.getAttribute("formmethod")||T;lt(Ut||Dt.currentTarget,{fetcherKey:l,method:Mt,navigate:x,replace:c,state:k,relative:Y,preventScrollReset:te,viewTransition:Ye})};return reactExports.createElement("form",{ref:it,method:xt,action:pt,onSubmit:u?Z:Tt,...tt,"data-discover":!At&&i==="render"?"true":void 0})});Form.displayName="Form";function getDataRouterConsoleError2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function useDataRouterContext3(i){let l=reactExports.useContext(DataRouterContext);return invariant(l,getDataRouterConsoleError2(i)),l}function useLinkClickHandler(i,{target:l,replace:x,state:u,preventScrollReset:c,relative:k,viewTransition:T}={}){let A=useNavigate(),Z=useLocation(),Y=useResolvedPath(i,{relative:k});return reactExports.useCallback(te=>{if(shouldProcessLinkClick(te,l)){te.preventDefault();let Ye=x!==void 0?x:createPath(Z)===createPath(Y);A(i,{replace:Ye,state:u,preventScrollReset:c,relative:k,viewTransition:T})}},[Z,A,Y,x,u,l,i,c,k,T])}var fetcherId=0,getUniqueFetcherId=()=>`__${String(++fetcherId)}__`;function useSubmit(){let{router:i}=useDataRouterContext3("useSubmit"),{basename:l}=reactExports.useContext(NavigationContext),x=useRouteId();return reactExports.useCallback(async(u,c={})=>{let{action:k,method:T,encType:A,formData:Z,body:Y}=getFormSubmissionInfo(u,l);if(c.navigate===!1){let te=c.fetcherKey||getUniqueFetcherId();await i.fetch(te,x,c.action||k,{preventScrollReset:c.preventScrollReset,formData:Z,body:Y,formMethod:c.method||T,formEncType:c.encType||A,flushSync:c.flushSync})}else await i.navigate(c.action||k,{preventScrollReset:c.preventScrollReset,formData:Z,body:Y,formMethod:c.method||T,formEncType:c.encType||A,replace:c.replace,state:c.state,fromRouteId:x,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,l,x])}function useFormAction(i,{relative:l}={}){let{basename:x}=reactExports.useContext(NavigationContext),u=reactExports.useContext(RouteContext);invariant(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),k={...useResolvedPath(i||".",{relative:l})},T=useLocation();if(i==null){k.search=T.search;let A=new URLSearchParams(k.search),Z=A.getAll("index");if(Z.some(te=>te==="")){A.delete("index"),Z.filter(Ye=>Ye).forEach(Ye=>A.append("index",Ye));let te=A.toString();k.search=te?`?${te}`:""}}return(!i||i===".")&&c.route.index&&(k.search=k.search?k.search.replace(/^\?/,"?index&"):"?index"),x!=="/"&&(k.pathname=k.pathname==="/"?x:joinPaths([x,k.pathname])),createPath(k)}function useViewTransitionState(i,{relative:l}={}){let x=reactExports.useContext(ViewTransitionContext);invariant(x!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=useDataRouterContext3("useViewTransitionState"),c=useResolvedPath(i,{relative:l});if(!x.isTransitioning)return!1;let k=stripBasename(x.currentLocation.pathname,u)||x.currentLocation.pathname,T=stripBasename(x.nextLocation.pathname,u)||x.nextLocation.pathname;return matchPath(c.pathname,T)!=null||matchPath(c.pathname,k)!=null}const profile={name:"Nuo Jin",role:"AI Engineer & Agentic Product Builder",location:"Sweden / Remote",email:"jinnuonoel@gmail.com",headline:"I design playful, pixel-perfect interfaces while building pragmatic AI systems that automate operations for busy teams.",bio:`I spent the last few years building agentic workflows that keep cafe operations running while operators sleep.
Before that I led robotics research projects focused on safe motion planning and adaptive controls.`,heroTags:["React / Next.js","Node.js & Python","LLMs & RAG","AI Agents & MCP"],interests:["Agentic AI for service businesses","Retro-futuristic interfaces","Operational intelligence dashboards","Human-friendly automation"],skills:{languages:["TypeScript","Python","Go","SQL"],frameworks:["React","Next.js","Vite","FastAPI","Express"],ai:["OpenAI","Gemini","LangChain","LlamaIndex","RAG","MCP"],ops:["Vercel","Cloudflare","Azure","Docker","PostgreSQL"]},socials:{github:"https://github.com/technuo",linkedin:"https://www.linkedin.com/in/nuo-jin",twitter:"https://x.com/0xtechnuo",email:"mailto:jinnuonoel@gmail.com"},resumeUrl:"/docs/Nuo_Jin_CV_2025.pdf",avatar:"/images/me.png",logo:"/images/Retro_Pixel_Logo.png"},ScrollToHash=()=>{const{hash:i}=useLocation();return reactExports.useEffect(()=>{if(!i){window.scrollTo({top:0,behavior:"smooth"});return}const l=i.replace("#",""),x=document.getElementById(l);x&&x.scrollIntoView({behavior:"smooth",block:"start"})},[i]),null},navItems=[{label:"Portfolio",to:"/"},{label:"Projects",to:"/#projects"},{label:"Blog",to:"/blog"},{label:"Resume",to:profile.resumeUrl,external:!0},{label:"Contact",to:profile.socials.email,external:!0}],isExternal=i=>!!i.external,AppLayout=()=>jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(ScrollToHash,{}),jsxRuntimeExports.jsx("header",{className:"container",style:{paddingTop:"28px"},children:jsxRuntimeExports.jsxs("div",{className:"card",children:[jsxRuntimeExports.jsx("div",{className:"wow",style:{position:"absolute",right:"-8px",bottom:"-8px",background:"var(--wow)",border:"var(--outline) solid var(--ink)",borderRadius:"999px",padding:"12px",transform:"rotate(-8deg)",boxShadow:"4px 4px 0 0 var(--shadow)",fontWeight:800},children:"Hi!"}),jsxRuntimeExports.jsxs("div",{className:"navbar",children:[jsxRuntimeExports.jsx("a",{className:"logo-link",href:profile.socials.github,"aria-label":"Nuo Jin logo",children:jsxRuntimeExports.jsx("img",{src:profile.logo,alt:"Nuo Jin logo",className:"logo-img"})}),jsxRuntimeExports.jsx("nav",{className:"nav-links","aria-label":"Primary",children:navItems.map(i=>isExternal(i)?jsxRuntimeExports.jsx("a",{className:"nav-link",href:i.to,target:"_blank",rel:"noopener noreferrer",children:i.label},i.label):jsxRuntimeExports.jsx(NavLink,{to:i.to,className:({isActive:l})=>`nav-link${l?" active":""}`,end:i.to==="/",children:i.label},i.label))})]})]})}),jsxRuntimeExports.jsx("main",{children:jsxRuntimeExports.jsx(Outlet,{})}),jsxRuntimeExports.jsxs("footer",{className:"container",children:[jsxRuntimeExports.jsxs("div",{className:"subtle",children:["Copyright ",new Date().getFullYear()," ",profile.name,". Crafted with curiosity and plenty of pixel grids."]}),jsxRuntimeExports.jsx("div",{className:"footer-note",children:"Built with React, Vite, and a sprinkle of retro gradients."})]})]}),projects=[{name:"Kafe AI",tagline:"AI operations co-pilot for boutique coffee brands",description:"End-to-end agentic workflow that ingests POS data, predicts demand, automates purchase orders, and drives a chat interface for store managers.",year:"2025",links:[{label:"website",href:"https://www.kafeai.tech/"}],tags:["RAG","Multi-agent","Inventory"]},{name:"Cardify.tech",tagline:"Edge AI kiosk that builds loyalty in 3 taps",description:"Designed the retro UI, captured NFC loyalty flows, and orchestrated on-device inference that syncs to a serverless analytics layer.",year:"2024",links:[{label:"website",href:"https://www.cardify.tech/"}],tags:["Edge AI","Industrial Design","React Native"]}],timeline=[{title:"Founder",period:"2025 - Present",org:"Cardify.tech",description:"Built loyalty automation stack and on-device inference for card-based interaction experiences.",highlights:["Delivered kiosk UI in under 6 weeks with Vite + Tailwind + canvas shaders","Created demand forecasting models that cut wasted stock by 18%","Shipped CI/CD pipeline on Cloudflare Workers + Durable Objects"]},{title:"Founder",period:"2025 - Present",org:"Kafe AI",description:"Leading product, engineering, and deployment for an AI platform that keeps independent coffee chains profitable.",highlights:["Agents watch POS and IoT data to recommend daily production","Gemini-powered chat assistant answers staff questions in natural language","Edge-friendly UI designed with retro pixel cues for delight"]}],GEMINI_API_KEY="AIzaSyC0Z8GpH--qMEdJh6NU-kchViwuCZI7y0o".trim(),GEMINI_ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",ChatPanel=()=>{const[i,l]=reactExports.useState([]),[x,u]=reactExports.useState(!1),[c,k]=reactExports.useState(""),T=reactExports.useRef(null),A=reactExports.useRef(null);reactExports.useEffect(()=>{l([{id:crypto.randomUUID(),role:"assistant",text:`Hey, I am ${profile.name}. Ask me about AI agents, retro UI, or how I automate coffee shops.`}])},[]);const Z=reactExports.useMemo(()=>{const tt=`Name: ${profile.name}
Role: ${profile.role}
Location: ${profile.location}
Interests: ${profile.interests.join(", ")}
Skills: ${Object.values(profile.skills).flat().join(", ")}`,it=projects.map(pt=>`${pt.name}: ${pt.tagline}. ${pt.description}`).join(`
`),lt=timeline.map(pt=>`${pt.period} at ${pt.org} - ${pt.title}. ${pt.description}`).join(`
`);return`${tt}
Projects:
${it}
Experience:
${lt}`},[]);reactExports.useEffect(()=>{const tt=T.current;tt&&(tt.scrollTop=tt.scrollHeight)},[i,x]);const Y=tt=>{l(it=>[...it,tt])},te=tt=>{const it=tt.toLowerCase(),lt=[],pt=(xt,At)=>{At.length>0&&lt.push(`${xt}:
- ${At.join(`
- `)}`)};return/(skill|stack|tech|tool)/.test(it)&&pt("Core stack",Object.entries(profile.skills).map(([xt,At])=>`${xt}: ${At.join(", ")}`)),/(project|build|product|case study)/.test(it)&&pt("Recent projects",projects.slice(0,4).map(xt=>`${xt.name} - ${xt.tagline}`)),/(experience|work|career|background)/.test(it)&&pt("Experience",timeline.map(xt=>`${xt.period}: ${xt.org} (${xt.title})`)),/(contact|email|reach)/.test(it)&&pt("Contact",[`Email me at ${profile.email}`]),lt.length===0&&lt.push(`Here is a quick snapshot of my world:
${Z}`),lt.join(`

`)},Ye=async tt=>{tt.preventDefault();const it=c.trim();if(!it)return;const lt={id:crypto.randomUUID(),role:"user",text:it};if(Y(lt),k(""),!GEMINI_API_KEY){Y({id:crypto.randomUUID(),role:"assistant",text:te(it)}),Y({id:crypto.randomUUID(),role:"system",text:"Gemini API key is not configured; shared my local notes instead."});return}try{u(!0),Y({id:crypto.randomUUID(),role:"system",text:"Contacting Gemini..."});const pt={contents:[{role:"user",parts:[{text:`You are a friendly assistant that speaks about ${profile.name}.
Context:
${Z}`}]},{role:"user",parts:[{text:it}]}]},xt=await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(GEMINI_API_KEY)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pt)});if(!xt.ok){const Dt=await xt.text();throw new Error(`${xt.status} ${Dt}`)}const At=await xt.json(),Tt=At?.candidates?.[0]?.content?.parts?.map(Dt=>Dt.text).join("")??At?.candidates?.[0]?.content?.parts?.[0]?.text??"I could not find an answer, but the local profile has plenty to explore.";Y({id:crypto.randomUUID(),role:"assistant",text:Tt})}catch(pt){console.error(pt),Y({id:crypto.randomUUID(),role:"assistant",text:`I could not reach Gemini. Here is what I know:
${te(it)}`})}finally{u(!1)}};return jsxRuntimeExports.jsxs("section",{id:"chat",className:"card chat-panel stack","aria-labelledby":"chat-heading",children:[jsxRuntimeExports.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:jsxRuntimeExports.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[jsxRuntimeExports.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",border:"var(--outline) solid var(--ink)",background:"#c6f8ff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,boxShadow:"2px 2px 0 0 var(--shadow)"},children:"AI"}),jsxRuntimeExports.jsx("div",{style:{fontWeight:800},id:"chat-heading",children:"About Me, Ask Anything"})]})}),jsxRuntimeExports.jsx("div",{className:"caption",children:"Responses render in your browser. If an environment Gemini API key is missing, I fall back to local answers."}),jsxRuntimeExports.jsxs("div",{ref:T,className:"chat-feed","aria-live":"polite",children:[i.map(tt=>jsxRuntimeExports.jsx("div",{className:`chat-message${tt.role==="user"?" mine":""}`,children:tt.text},tt.id)),x&&jsxRuntimeExports.jsx("div",{className:"chat-meta",children:"Preparing response..."})]}),jsxRuntimeExports.jsx("form",{ref:A,className:"stack",onSubmit:Ye,style:{gap:"8px"},children:jsxRuntimeExports.jsxs("div",{className:"chat-input",children:[jsxRuntimeExports.jsx("textarea",{value:c,onChange:tt=>k(tt.target.value),placeholder:"Ask about my projects, stack, or experience. Press Enter to send, Shift+Enter for a new line.",onKeyDown:tt=>{tt.key==="Enter"&&!tt.shiftKey&&(tt.preventDefault(),A.current?.requestSubmit())}}),jsxRuntimeExports.jsx("button",{type:"submit",className:"button",disabled:x,children:"Send"})]})})]})},ExperienceSection=()=>jsxRuntimeExports.jsxs("section",{className:"card stack","aria-labelledby":"experience-heading",children:[jsxRuntimeExports.jsxs("div",{className:"section-heading",children:[jsxRuntimeExports.jsx("h2",{id:"experience-heading",className:"title",children:"Experience log"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"A quick timeline of how I grew from robotics researcher to AI product founder."})]}),jsxRuntimeExports.jsx("div",{className:"timeline",children:timeline.map(i=>jsxRuntimeExports.jsxs("article",{className:"timeline-item",children:[jsxRuntimeExports.jsx("h4",{children:i.title}),jsxRuntimeExports.jsxs("div",{className:"meta",children:[i.period," | ",i.org]}),jsxRuntimeExports.jsx("p",{children:i.description}),jsxRuntimeExports.jsx("ul",{children:i.highlights.map(l=>jsxRuntimeExports.jsx("li",{children:l},l))})]},i.title))})]}),HeroPanel=()=>{const i=projects.slice(0,4);return jsxRuntimeExports.jsxs("section",{className:"card stack","aria-labelledby":"home-intro",children:[jsxRuntimeExports.jsxs("div",{className:"hero",children:[jsxRuntimeExports.jsx("div",{className:"avatar","aria-hidden":"true",children:"NJ"}),jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx("p",{className:"subtle",style:{margin:0},children:"Hey, I am"}),jsxRuntimeExports.jsx("h1",{id:"home-intro",className:"title",style:{margin:"6px 0"},children:profile.name}),jsxRuntimeExports.jsx("p",{className:"subtle",style:{margin:0},children:profile.role}),jsxRuntimeExports.jsx("p",{style:{margin:"12px 0 0"},children:profile.headline})]})]}),jsxRuntimeExports.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:profile.heroTags.map(l=>jsxRuntimeExports.jsx("span",{className:"tag",children:l},l))}),jsxRuntimeExports.jsx("div",{className:"project-grid",id:"projects",children:i.map(l=>jsxRuntimeExports.jsx("a",{className:"logo-card",href:l.links[0]?.href??"/#",children:jsxRuntimeExports.jsx("span",{children:l.name})},l.name))}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx("a",{className:"button",href:"#chat",children:"Start a conversation"}),jsxRuntimeExports.jsx("a",{className:"button",href:profile.resumeUrl,target:"_blank",rel:"noopener noreferrer",children:"Download resume"})]})]})},SkillsSection=()=>jsxRuntimeExports.jsxs("section",{className:"card stack","aria-labelledby":"skills-heading",children:[jsxRuntimeExports.jsxs("div",{className:"section-heading",children:[jsxRuntimeExports.jsx("h2",{id:"skills-heading",className:"title",children:"Build toolkit"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"A few of the ingredients I reach for when shipping scrappy prototypes or production-grade systems."})]}),jsxRuntimeExports.jsx("div",{className:"grid-auto",children:Object.entries(profile.skills).map(([i,l])=>jsxRuntimeExports.jsxs("div",{className:"surface",style:{padding:"18px"},children:[jsxRuntimeExports.jsx("h3",{style:{margin:"0 0 8px",fontFamily:"Press Start 2P, monospace",fontSize:"14px"},children:i}),jsxRuntimeExports.jsx("ul",{style:{margin:0},children:l.map(x=>jsxRuntimeExports.jsx("li",{children:x},x))})]},i))})]}),__vite_glob_0_0=`## Koenigsegg
**DARK MATTER**
![[Pasted image 20250308220202.png]]

As a side note, the image above shows my favorite Koenigsegg's revolutionary motor—Dark Matter. This motor outputs 800 horsepower and 1250 Nm of torque, and is a patented Raxial Flux motor. Weighing less than 40 kg and utilizing 6-phase technology, it is one of the most powerful automotive-grade motors in the world. "Raxial Flux" refers to a design that combines radial and axial magnetic flux, aiming to optimize performance and efficiency. This motor was first used in Koenigsegg's Gemera supercar.
Back to the topic, electric vehicles are now very common, so how can we optimize motor control algorithms programmatically to reduce energy consumption and improve range? In this discussion, we will specifically talk about programmatic implementation methods. As the core driving component of electric vehicles, the operating efficiency of the motor directly affects the device's range and user experience. Therefore, adopting advanced Field-Oriented Control (FOC), Dynamic Voltage and Frequency Scaling (DVFS), low-power modes, adaptive motor control, and energy optimization solutions based on artificial intelligence (AI) and machine learning (ML) can significantly improve motor operating efficiency, reduce unnecessary power consumption, and enhance the overall system's intelligence level. The specific implementation methods are as follows.

### Field-Oriented Control (FOC)

Field-Oriented Control (FOC) is an advanced motor control method that allows for more precise and efficient motor control. Simply put, the core idea of FOC is to align the current direction with the magnetic field direction, thereby improving the motor's energy utilization and reducing losses. Traditional control methods (such as six-step commutation control) can sometimes lead to unstable motor operation or reduced efficiency, while FOC uses mathematical transformations to decompose the current into two components—one controlling the magnetic field and the other controlling the torque—ensuring the motor always operates in the best state.

If you are using VESC (an open-source BLDC controller), you can directly control the FOC mode with Python:
![[Pasted image 20250308220837.png]]
This code will automatically perform FOC calculations and optimize motor efficiency.

### Dynamic Voltage and Frequency Scaling (DVFS)

**Principle:**

In CPUs or MCUs, reducing the operating frequency decreases power consumption because power P≈V2×fP≈V2×f (where VV is voltage and ff is frequency). When the system load is low, the main frequency and voltage can be reduced to save energy.

**Implementation:**

**Python for Raspberry Pi:**
![[Pasted image 20250308220948.png]]
**Embedded MCU:**
![[Pasted image 20250308221021.png]]
**Optimization Points:**

- Reduce the main frequency when the processor is idle (low-power mode).
    
- Increase the main frequency when the processor needs to perform high-load tasks (such as climbing steep slopes).
    

### Low-Power Modes (Deep Sleep & Idle Modes)

Low-power modes in embedded systems mainly include:

- **Idle Mode:** The processor stops, but RAM remains active.
    
- **Deep Sleep Mode:** Most peripherals are turned off, retaining only necessary timers or wake-up sources.
    
- **Standby Mode:** Only minimal power is retained, such as for the RTC timer.
    

**STM32 Low-Power Mode:**
![[Pasted image 20250308221052.png]]
**Python for ESP32 Low-Power Mode:**
![[Pasted image 20250308221112.png]]
**Optimization Points:**

- Enter Deep Sleep mode when the electric vehicle is stopped to reduce power consumption.
    
- Use external interrupts (such as button presses or sensor signals) to wake the system.
    

### Intelligent Task Scheduling

**Principle:**

A task manager can prioritize efficient tasks, while low-priority tasks can be postponed to reduce CPU usage and power consumption.

**Implementation (RTOS Task Scheduling):**
![[Pasted image 20250308221134.png]]
**Optimization Points:**

- High-priority tasks (such as motor control) run continuously.
    
- Low-priority tasks reduce their running frequency to lower power consumption.
    

### Adaptive Motor Control

In addition to reducing processor power consumption, motor power can be dynamically adjusted to reduce motor current under low load.

**Method 1: Adaptive PWM Control**
![[Pasted image 20250308221156.png]]
**Method 2: Reduce No-Load Current**
![[Pasted image 20250308221217.png]]
**Optimization Points:**

- Reduce current during no-load conditions to minimize unnecessary energy loss.
    
- Use FOC (Field-Oriented Control) to optimize motor efficiency.
    

### AI/ML-Based Power-Aware Algorithms

AI can learn the user's driving patterns and automatically adjust power in different situations. For example:

- Increase power when climbing hills.
    
- Reduce power on flat roads.
    
- Enter energy recovery mode when going downhill.
    

**Python:**
![[Pasted image 20250308221239.png]]
**Optimization Points:**

- Use AI to learn driving habits and improve the intelligence of power management.
    
- Dynamically adjust motor output based on battery level to improve range.
    

### Conclusion

The purpose of this discussion is to explore how to achieve more precise and energy-efficient motor control systems from a programmatic perspective. While hardware improvements are equally important, programmatic optimization provides a flexible and efficient solution for reducing motor energy consumption, enhancing the intelligence level of motor control systems without changing the hardware structure.`,__vite_glob_0_1=`After optimizing motor control algorithms, we need to **monitor power consumption in real time** to verify the effectiveness of the optimization and further refine control strategies. Below are several **software-based** methods to detect motor power consumption reduction:

---

## **1. Real-Time Power Monitoring Using a Current Sensor**

Motor power consumption is mainly determined by **voltage (V) and current (I)**, calculated as:

P=V×IP = V \\times I

By integrating a **current sensor (such as INA219 or ACS712)** into the motor circuit, an MCU can continuously measure current data and compute power consumption.

### **Example: Monitoring Motor Power with INA219 (Raspberry Pi / ESP32)**

\`\`\`python
from ina219 import INA219

ina = INA219(shunt_ohms=0.1)  # Depends on the sensor's shunt resistor
ina.configure()

def get_power():
    voltage = ina.voltage()  # Read voltage
    current = ina.current()  # Read current (mA)
    power = voltage * (current / 1000)  # Convert to watts
    return power

while True:
    power_usage = get_power()
    print(f"Motor Power Consumption: {power_usage:.2f} W")
\`\`\`

🔹 **Optimization Points:**

- Record power consumption before and after optimization and compare the reduction.
- Check if software adjustments (e.g., lower PWM, reduced CPU frequency) effectively decrease power usage.

---

## **2. Retrieving Data from Motor Controllers (VESC / FOC Controllers)**

If using a VESC (open-source BLDC motor controller), power consumption data can be retrieved via UART or CAN bus.

### **Example: Monitoring Power with VESC**

\`\`\`python
from vesc_py import VESC

vesc = VESC(serial_port='/dev/ttyUSB0')

def get_motor_power():
    voltage = vesc.get_input_voltage()  # Get input voltage
    current = vesc.get_motor_current()  # Get motor current
    power = voltage * current  # Compute power
    return power

while True:
    print(f"Motor Power Consumption: {get_motor_power():.2f} W")
\`\`\`

🔹 **Optimization Points:**

- Record power variations at different PWM settings and loads.
- After optimization, check if power consumption decreases (e.g., reduced current, optimized torque control).

---

## **3. Measuring PWM and Current in MCU**

In embedded systems (e.g., STM32), direct measurement of PWM duty cycle and motor current enables power tracking.

### **Example: STM32 Monitoring PWM & Current**

\`\`\`c
float get_motor_power() {
    float voltage = read_motor_voltage(); // Read voltage
    float current = read_motor_current(); // Read current
    return voltage * current;  // Compute power
}

void log_power_data() {
    while (1) {
        float power = get_motor_power();
        printf("Motor Power: %.2f W\\n", power);
        HAL_Delay(1000);
    }
}
\`\`\`

🔹 **Optimization Points:**

- Verify that power consumption decreases when entering low-power modes (e.g., Deep Sleep).
- Check if reduced PWM duty cycle results in lower current draw, confirming software control effectiveness.

---

## **4. Monitoring CPU Load & Frequency Adjustment Impact**

While optimizing motor control, we may reduce MCU/CPU operating frequency (using DVFS technology). Monitoring CPU load and frequency ensures the optimization is applied correctly.

### **Example: Monitoring CPU Frequency on Raspberry Pi**

\`\`\`python
def get_cpu_freq():
    with open("/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq", "r") as f:
        return int(f.read()) / 1000  # Convert to MHz

print(f"Current CPU Frequency: {get_cpu_freq()} MHz")
\`\`\`

🔹 **Optimization Points:**

- Verify that CPU frequency automatically decreases under low motor load, reducing excess power consumption.

---

## **5. Data Logging & Analyzing Power Reduction Trends**

Power consumption data before and after optimization can be recorded and plotted for visual analysis.

### **Example: Plotting Power Consumption with Matplotlib**

\`\`\`python
import matplotlib.pyplot as plt
import time

power_data = []

def monitor_power():
    for _ in range(100):
        power = get_power()  # Collect motor power data
        power_data.append(power)
        time.sleep(0.5)

    plt.plot(power_data)
    plt.xlabel("Time (s)")
    plt.ylabel("Power (W)")
    plt.title("Motor Power Consumption Over Time")
    plt.show()

monitor_power()
\`\`\`

🔹 **Optimization Points:**

- Visually analyze power trends at different loads and PWM settings.
- Ensure the optimized power consumption curve is lower than the pre-optimized one.

---

## **Summary**

|**Method**|**Principle**|**Use Case**|
|---|---|---|
|**Measuring Power with Current Sensor**|Uses INA219 / ACS712 to measure voltage & current|Works with any motor, requires external sensor|
|**Retrieving Data from VESC**|Reads voltage & current via UART/CAN|Works with VESC-based systems|
|**Monitoring PWM & Current in MCU**|Reads PWM duty cycle and current to compute power|Works with MCU-controlled motors|
|**Monitoring CPU Load & Frequency**|Tracks CPU frequency to verify DVFS adjustments|Useful for embedded Linux systems|
|**Data Logging & Analysis**|Records power data and visualizes trends|Ideal for long-term testing and optimization|

🚀 **These methods help validate software-based power optimization strategies, ensuring energy savings are effectively achieved!**`,__vite_glob_0_2=`![[100 DAYS OF PYTHON-DAY0.png]]
1, Pledge to code for an hour a day for a 100 days. to keep yourself accountable.
2, log your progress using the #100DaysOfCode hashtag on X.
you can push your progress each day with the hashtag.

tips 1 another screen to watch the course, and use the laptop to practice coding at the same time.
tips 2 Python syntax cheat sheet
tips 3 Pomodoro is good tools to help you study.
tips 4 coding notes page
tips 5 celebrate right after you complete each day.

`,__vite_glob_0_3=`---
layout: post
title: "How to implement regenerative braking in a wheelchair"
date: 2025-03-28
tags: [embedded]
---


When a wheelchair transitions from **standing mode back to a seated position** or **travels downhill**, the motor enters **generator mode**. If this energy is not utilized, it is wasted and dissipates as heat. By using a **regenerative braking system**, this energy can be recovered and stored in a **battery or supercapacitor (SuperCap)**, thereby extending the wheelchair’s battery life.

---

## **1. The Physics of Energy Recovery During Descent**

When the wheelchair moves from a standing position back to a seated position, the motor (typically a **brushless DC motor (BLDC)** or **permanent magnet synchronous motor (PMSM)**) operates differently:

- **Normal Mode (Lifting)** → The motor acts as a **motor**, converting electrical energy into mechanical energy.
- **Descent Mode (Energy Recovery)** → The motor acts as a **generator**, driven by gravity, producing **reverse current (regenerative current)**.

If energy recovery is not implemented, the motor will dissipate this energy as **heat** through a braking resistor. To store this recovered energy, a **regenerative circuit** is needed to direct the captured energy into a **battery or supercapacitor**.

---

## **2. Hardware Architecture for Energy Recovery**

To implement regenerative braking, we need:

1. **H-Bridge Inverter (Motor Controller)** → Allows the motor to operate in generator mode.
2. **Bidirectional DC-DC Converter** → Controls energy flow to the battery or supercapacitor.
3. **Supercapacitor (SuperCap) + Battery Management System (BMS)** → Buffers and stores the recovered energy.

### **🔧 Hardware Architecture Diagram**

\`\`\`
Motor (BLDC)  
   ↓  
H-Bridge Inverter (FOC Control)  
   ↓  
Bidirectional DC-DC Converter  
   ├──> SuperCap (Short-term storage)  
   ├──> Battery (Long-term storage)  
\`\`\`

---

## **3. Software Control Strategy**

For effective energy recovery, an MCU (such as STM32, ESP32, or RP2040) is required to dynamically adjust energy flow. The control strategy includes:

- **Switching to regenerative braking mode when a descent is detected**.
- **Monitoring battery voltage to prevent overcharging**.
- **Using PWM to control the DC-DC converter and direct recovered energy into the supercapacitor or battery**.

### **(1) FOC Inverter Control**

In the Field-Oriented Control (FOC) algorithm, normally **Id (direct-axis current) controls magnetic flux, and Iq (quadrature-axis current) controls torque**. In regenerative braking mode:

- **Adjust Iq direction so the motor operates in generator mode**.
- **Monitor the bus voltage to ensure efficient energy transfer to the battery**.

\`\`\`c
void regenerative_braking(float speed, float battery_voltage) {
    if (speed < 0 && battery_voltage < MAX_VOLTAGE) {  // Descending and battery not full
        Iq_ref = -Iq_ref;  // Reverse current to enable generation
        adjust_DC_DC_converter();  // Adjust DC-DC converter
    }
}
\`\`\`

---

### **(2) Bidirectional DC-DC Converter**

The regenerative voltage from the motor may be **higher or lower** than the battery voltage, requiring a **bidirectional DC-DC converter** to regulate voltage for efficient charging. The control strategy is:

- **Buck Mode (Step-down)** → If motor voltage is higher than battery voltage (e.g., 48V → 24V), step-down conversion is used.
- **Boost Mode (Step-up)** → If motor voltage is lower than battery voltage (e.g., 12V → 24V), step-up conversion is used.

\`\`\`c
void adjust_DC_DC_converter() {
    if (motor_voltage > battery_voltage) {
        set_Buck_Mode();  // Step-down mode
    } else {
        set_Boost_Mode(); // Step-up mode
    }
}
\`\`\`

---

### **(3) Supercapacitor (SuperCap) Management**

The supercapacitor is used for **short-term energy storage**. When the battery cannot charge rapidly, energy is first stored in the supercapacitor and later transferred gradually to the battery to prevent overcharging or damage.

**Strategy:**

- **If the supercapacitor is not full**, energy is first stored in it.
- **If the supercapacitor is full**, energy is then transferred to the battery.

\`\`\`c
if (superCap_voltage < superCap_max) {
    charge_SuperCap();
} else {
    charge_Battery();
}
\`\`\`

---

## **4. Regenerative Braking Implementation Example (Python)**

For control using Raspberry Pi or ESP32, the following implementation demonstrates a basic energy recovery logic:

\`\`\`python
class WheelchairRegeneration:
    def __init__(self):
        self.battery_voltage = 24.0  # 24V battery
        self.motor_voltage = 30.0  # Voltage generated by the motor
        self.supercap_voltage = 12.0  # Initial voltage of the supercapacitor

    def regenerative_braking(self, speed):
        if speed < 0:  # Descending
            if self.motor_voltage > self.battery_voltage:
                self.buck_converter()  # Step-down to charge battery
            elif self.supercap_voltage < 15.0:
                self.charge_supercap()  # Charge supercapacitor
            else:
                self.dump_energy()  # Dump excess energy as heat

    def buck_converter(self):
        print("Activating Buck Converter: Charging battery...")

    def charge_supercap(self):
        print("Charging SuperCap...")

    def dump_energy(self):
        print("No storage available, dumping energy as heat.")

wheelchair = WheelchairRegeneration()
wheelchair.regenerative_braking(-1)  # Trigger energy recovery during descent
\`\`\`

---

## **5. Key Optimization Strategies**

- **Regenerative Current Optimization**: Prevents excessive current from damaging the battery by optimizing the charging strategy.
- **Temperature Monitoring**: Ensures battery temperature does not exceed safe levels.
- **AI-Based Energy Distribution Learning**: Uses AI to predict user behavior and optimize energy distribution between the battery and supercapacitor.

---

## **Summary**

|**Technology**|**Function**|**Implementation**|
|---|---|---|
|**FOC Inverter Control**|Switches the motor to generator mode|Adjusts Iq direction to enable regeneration|
|**Bidirectional DC-DC Converter**|Regulates voltage for efficient energy recovery|Uses Buck-Boost circuitry|
|**Supercapacitor (SuperCap)**|Short-term energy storage to reduce battery load|Stores energy in SuperCap first, then transfers to battery|
|**Battery Management System (BMS)**|Monitors battery status and prevents overcharging|MCU monitors battery voltage & temperature|

🚀 **Implementing this strategy in wheelchairs can effectively extend battery life, reduce energy waste, and make electric wheelchairs more intelligent and efficient!**`,__vite_glob_0_4=`---\r
layout: post\r
title:  "Welcome to Jekyll!"\r
date:   2025-03-26 14:31:05 +0100\r
categories: jekyll update\r
---\r
You’ll find this post in your \`_posts\` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run \`jekyll serve\`, which launches a web server and auto-regenerates your site when a file is updated.\r
\r
Jekyll requires blog post files to be named according to the following format:\r
\r
\`YEAR-MONTH-DAY-title.MARKUP\`\r
\r
Where \`YEAR\` is a four-digit number, \`MONTH\` and \`DAY\` are both two-digit numbers, and \`MARKUP\` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.\r
\r
Jekyll also offers powerful support for code snippets:\r
\r
{% highlight ruby %}\r
def print_hi(name)\r
  puts "Hi, #{name}"\r
end\r
print_hi('Tom')\r
#=> prints 'Hi, Tom' to STDOUT.\r
{% endhighlight %}\r
\r
Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].\r
\r
[jekyll-docs]: https://jekyllrb.com/docs/home\r
[jekyll-gh]:   https://github.com/jekyll/jekyll\r
[jekyll-talk]: https://talk.jekyllrb.com/\r
`,__vite_glob_0_5=`**Concept:**  
Smart soft start is a technique to optimize the motor startup process. Its primary goal is to **reduce the inrush current** during motor startup, minimizing stress on the battery, control circuits, and motor components. It also improves startup smoothness and reduces energy waste.

---

## **1. Why Use Soft Start?**

When a DC motor or brushless motor (BLDC) starts from **a standstill**, a sudden application of high current may cause:

- **Excessive inrush current** → Damages the battery, controller components, and shortens system lifespan.
- **Mechanical stress** → Sudden torque application may harm gears, bearings, and other mechanical parts.
- **System instability** → Sudden acceleration can cause control issues, especially in electric wheelchairs or vehicles.

**Solution:** By optimizing the startup process through software, the current and speed are gradually increased, achieving **a smooth and intelligent soft start**.

---

## **2. Implementation Methods for Smart Soft Start**

The core principle of smart soft start is **controlling the current or PWM duty cycle** to gradually increase motor power input for a smooth startup.

### **(1) Soft Start via Gradual PWM Duty Cycle Increase** (For PWM-Controlled Motors)

**Approach:**

- Gradually increase the PWM duty cycle at **fixed time intervals** (e.g., 5ms) until it reaches the target value.
- This smoothly increases the motor input voltage, preventing sudden torque jumps.

**Implementation (C Code for STM32 or Arduino):**
\`\`\`C
#define START_PWM 10      // Initial duty cycle (10%)
#define TARGET_PWM 80     // Target duty cycle (80%)
#define STEP 2            // Increment step
#define STEP_DELAY 5      // Step delay (ms)

void softStartMotor() {
    int pwm = START_PWM;
    while (pwm < TARGET_PWM) {
        setMotorPWM(pwm);  // Set PWM signal
        pwm += STEP;
        delay(STEP_DELAY);  // Wait for a short interval
    }
    setMotorPWM(TARGET_PWM); // Final target duty cycle
}
\`\`\`
**Advantages:**  
✅ Works with PWM-controlled motors (e.g., DC motors, BLDC motors).  
✅ Simple and easy to implement.  
✅ Adjustable \`STEP\` and \`STEP_DELAY\` parameters for different motor loads.

---

### **(2) Soft Start Using Closed-Loop Current Control** (For Systems with Current Sensors)

**Approach:**

- Use **a current sensor** (e.g., a Hall-effect current sensor) to monitor actual current.
- **Dynamically adjust PWM or voltage** to keep startup current below a defined limit.

**Implementation (Pseudocode):**
\`\`\`C
#define MAX_START_CURRENT 3.0  // Max startup current (3A)
#define CURRENT_SENSOR_PIN A0  // Current sensor ADC input pin
#define STEP_DELAY 5           // Control step interval (ms)

void softStartMotor() {
    int pwm = 10;  // Initial duty cycle
    setMotorPWM(pwm);
    
    while (pwm < 80) {  // Gradually increase duty cycle
        float current = readCurrent(CURRENT_SENSOR_PIN); // Read current value
        if (current < MAX_START_CURRENT) {
            pwm += 2; // Increase PWM if current is within limits
            setMotorPWM(pwm);
        }
        delay(STEP_DELAY);
    }
}

\`\`\`
**Advantages:**  
✅ **Real-time current control**, preventing overload on the motor and battery.  
✅ **Ideal for high-precision motor control**, especially for systems with strict current limitations.

---

### **(3) Soft Start Using Speed Feedback Control** (For Motors with Encoders)

**Approach:**

- Use a **speed sensor (such as an optical encoder)** to monitor real-time motor speed.
- Set an **acceleration limit (rpm/s)** to ensure smooth ramp-up.

**Implementation (Pseudocode):**
\`\`\`C
#define MAX_ACCELERATION 10  // Max acceleration (rpm/s)
#define TARGET_SPEED 100     // Target speed (rpm)
#define STEP_DELAY 10        // Control step interval (ms)

void softStartMotor() {
    int speed = 0;  // Initial speed
    while (speed < TARGET_SPEED) {
        speed += MAX_ACCELERATION * (STEP_DELAY / 1000.0); // Compute new speed
        setMotorSpeed(speed); // Set motor speed
        delay(STEP_DELAY);
    }
}

\`\`\`
**Advantages:**  
✅ **Ensures a smooth speed transition**, suitable for stability-critical applications (e.g., electric wheelchairs).  
✅ **More precise than PWM-based methods**, as it compensates for load variations.

---

## **3. Comparison of Different Methods**

|Method|Applicable Motors|Requires Sensors?|Smoothness|Implementation Complexity|Use Case|
|---|---|---|---|---|---|
|PWM Increment|DC, BLDC Motors|No|Moderate|Simple|General electric vehicles, wheelchairs|
|Current Feedback|DC, BLDC Motors|Yes (Current Sensor)|High|Medium|High-power motors, current-limited applications|
|Speed Feedback|DC, BLDC Motors|Yes (Encoder)|Very High|Complex|High-precision vehicles, robotics|

---

## **4. Advanced Optimizations**

Besides basic soft start techniques, additional optimizations can be implemented:  
✅ **Adaptive Soft Start** – Dynamically adjust soft start parameters based on load conditions (e.g., detecting if the vehicle is carrying a heavy load).  
✅ **Machine Learning-Based Optimization** – Learn user behavior and optimize startup curves based on historical data.  
✅ **Temperature Compensation** – Adjust startup strategy in low-temperature environments to account for reduced battery performance.

---

## **Summary**

Smart soft start is an essential **software-based optimization technique** that provides:  
✅ **Reduced inrush current, protecting batteries and motor components**  
✅ **Smoother system performance, preventing mechanical shock**  
✅ **Improved energy efficiency, enhancing battery life**

Depending on the application, one can choose from **PWM increment, current feedback, or speed feedback** methods to implement a reliable and efficient soft start strategy.`,__vite_glob_0_6=`![[Weixin Image_20250312144814.jpg]]
#### **1. Overview**

Using **NFC (Near Field Communication)** to recognize users or vehicles, the system automatically wakes up and activates the charging station when detecting a **valid NFC tag** (such as a smartphone, card, or in-car NFC device).

✅ **Low power consumption** – The MCU remains in low-power mode, and NFC triggers wake-up.  
✅ **Enhanced user experience** – No manual operation required; simply approaching the charger is enough.  
✅ **High security** – NFC authentication ensures only authorized users can activate the charging station.

---

#### **2. Hardware Selection**

- **NFC Reader:** PN532, RC522 (SPI/I2C interface, compatible with STM32, ESP32, Arduino)
- **MCU Controller:** STM32, ESP32, Arduino, etc.
- **Low-Power Management:** NFC acts as an external interrupt while the MCU remains in deep sleep mode until wake-up is triggered.

---

#### **3. Low-Power Wake-Up Process**

1. **System enters low-power mode** (MCU sleeps while NFC reader remains active).
2. **User approaches with an NFC card or smartphone** (e.g., an in-car NFC device).
3. **NFC reader detects the NFC signal** and reads the UID (Unique Identifier).
4. **NFC triggers an external interrupt**, waking up the MCU.
5. **MCU verifies the NFC UID** (if authorized, it starts the charging process).
6. **If no NFC signal is detected for a certain period, the MCU re-enters low-power mode.**

---

#### **4. Implementation Code (STM32 + PN532 NFC)**

\`\`\`c
#include "PN532.h"
#include "Wire.h"

#define NFC_IRQ_PIN GPIO_PIN_0  // NFC interrupt trigger pin
#define NFC_RST_PIN GPIO_PIN_1
#define LED_PIN GPIO_PIN_5  // Charging station status indicator

PN532 nfc(I2C);  // Using I2C interface for NFC reader

void enterLowPowerMode() {
    HAL_PWR_EnterSTOPMode(PWR_LOWPOWERREGULATOR_ON, PWR_STOPENTRY_WFI);
}

void wakeUpSystem() {
    HAL_GPIO_WritePin(GPIOB, LED_PIN, GPIO_PIN_SET);  // Activate charging station
}

void EXTI0_IRQHandler(void) {  // NFC external interrupt handler
    if (__HAL_GPIO_EXTI_GET_IT(NFC_IRQ_PIN) != RESET) {
        __HAL_GPIO_EXTI_CLEAR_IT(NFC_IRQ_PIN);
        wakeUpSystem();
    }
}

void setup() {
    pinMode(LED_PIN, OUTPUT);
    pinMode(NFC_IRQ_PIN, INPUT_PULLUP);
    attachInterrupt(NFC_IRQ_PIN, wakeUpSystem, FALLING);

    nfc.begin();
    nfc.SAMConfig();  // Enable NFC low-power mode

    enterLowPowerMode();  // Enter low-power mode
}

void loop() {
    uint8_t uid[] = {0, 0, 0, 0, 0, 0, 0};  // Store NFC UID
    uint8_t uidLength;

    if (nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength)) {
        if (isAuthorizedUser(uid, uidLength)) {
            wakeUpSystem();
        }
    }
}
\`\`\`

---

#### **5. Key Optimizations**

✅ **Low-Power Management** – The MCU enters deep sleep mode while only the NFC reader remains active.  
✅ **NFC External Interrupt** – The NFC reader detects a valid signal (NFC card or phone) and triggers an interrupt to wake up the system.  
✅ **Security Measures** – The \`isAuthorizedUser()\` function can be used to verify NFC UIDs and prevent unauthorized access.

---

#### **6. Applications**

- **Home Charging Stations** – The owner taps an NFC phone or card to start charging.
- **Shared Charging Stations** – Users activate charging via an NFC membership card.
- **Corporate Fleet Management** – Vehicles with registered NFC tags can access the charging station, preventing unauthorized use.

---

#### **7. Advanced Enhancements**

✅ **Cloud-Based Management** – Upload NFC authentication data to the cloud for remote monitoring and billing.  
✅ **Integration with Bluetooth (BLE) or Wi-Fi** – After NFC wake-up, users can control charging via a mobile app.  
✅ **Multi-User Access Control** – Support multiple registered UIDs, allowing different users to have different charging privileges (e.g., VIP fast charging).

---

### **Conclusion**

Using **NFC to wake up charging stations** enables **low-power standby, fast activation, and secure authentication**, making it an efficient, secure, and user-friendly smart charging optimization solution!`,__vite_glob_0_7=`In a charging station system, automatically recognizing **battery specifications** (such as battery type, capacity, and charging status) and applying the **best charging strategy** is crucial for improving charging efficiency, protecting the battery, and extending its lifespan. By utilizing **smart detection technology** and **algorithms**, the system can dynamically adjust charging parameters (such as voltage and current) based on the real-time battery state.

---

## **1. System Overview**

The charging station identifies the **battery specifications** through **charging gun insertion detection** and **battery information retrieval**, then applies the **optimal charging strategy**. The process includes:

- **Upon plugging in the charging gun**, the system detects the connected device (EV or battery type).
- Based on the device type and battery status, it selects the **appropriate charging mode** (e.g., constant current, constant voltage, pulse charging).
- It **monitors real-time battery parameters** (voltage, temperature, SOC – State of Charge) and adjusts charging strategies accordingly to ensure safe and efficient charging.

---

## **2. Key Technologies and Hardware**

### **(1) Charging Gun Insertion Detection**

- **Current/Voltage Sensors**: Detect whether the charging gun is inserted.
- **Contact Signal Detection**: Uses contact points or sensors to determine proper insertion.

### **(2) Battery Information Identification**

- **CAN Bus Protocol**: Many EVs and battery systems use CAN bus communication. The charging station retrieves **battery type, voltage, temperature, and SOC** via CAN.
- **Battery Management System (BMS) Communication**: BMS exchanges battery details with the charging station using communication protocols like I2C or SPI.

### **(3) Charging Strategy Matching**

Based on the detected battery information, different **charging strategies** are applied:

- **Constant Current Charging** – Used in the initial phase when the battery is at a low charge level.
- **Constant Voltage Charging** – Applied after the battery reaches a certain charge level to maintain a steady voltage.
- **Trickle Charging** – Used when the battery is nearly full to prevent overcharging.
- **Temperature-Controlled Charging** – Adjusts charging parameters based on battery temperature to prevent overheating.

---

## **3. Implementation Plan**

Using **STM32** and **CAN bus** to read battery information and select an appropriate charging strategy. The **Battery Management System (BMS)** communicates with the charging station.

### **(1) Charging Gun Insertion Detection**

Detects if the charging gun is inserted using **GPIO pins** (connected to a contact sensor).

\`\`\`c
#define CHARGER_INSERT_PIN GPIO_PIN_0  // Charging gun insertion signal

void detectChargerInsertion() {
    if (HAL_GPIO_ReadPin(GPIOA, CHARGER_INSERT_PIN) == GPIO_PIN_SET) {
        // Charging gun detected, proceed with battery information retrieval
        readBatteryInfo();
    }
}
\`\`\`

### **(2) Retrieving Battery Information**

Reads battery state via **CAN bus** communication. Assuming the CAN bus is configured to retrieve data from the **Battery Management System (BMS)**.

\`\`\`c
#include "can.h"  // Include CAN bus library

void readBatteryInfo() {
    // Retrieve battery voltage, temperature, and SOC (State of Charge)
    uint32_t batteryVoltage = readCanData(BMS_VOLTAGE_ID);
    uint32_t batteryTemperature = readCanData(BMS_TEMP_ID);
    uint32_t batterySOC = readCanData(BMS_SOC_ID);

    // Match charging strategy based on battery parameters
    selectChargingStrategy(batteryVoltage, batteryTemperature, batterySOC);
}
\`\`\`

### **(3) Selecting the Charging Strategy**

Based on battery voltage, temperature, and SOC, the system selects the optimal charging mode.

\`\`\`c
void selectChargingStrategy(uint32_t voltage, uint32_t temperature, uint32_t soc) {
    if (voltage < 3200) {
        // Low battery voltage – Use constant current charging
        setChargingMode(CURRENT_MODE);
    } else if (voltage >= 3200 && voltage < 4000) {
        // Medium voltage – Use constant voltage charging
        setChargingMode(VOLTAGE_MODE);
    } else if (voltage >= 4000) {
        // Nearly full – Switch to trickle charging
        setChargingMode(TRICKLE_MODE);
    }
    
    if (temperature > 45) {
        // High temperature detected – Enable temperature-controlled charging
        enableTemperatureControl();
    }

    if (soc >= 90) {
        // SOC above 90% – Use trickle charging
        setChargingMode(TRICKLE_MODE);
    }
}
\`\`\`

### **(4) Charging Mode Switching**

Adjusts the charging station’s output voltage and current based on the selected charging strategy to ensure safe and efficient charging.

\`\`\`c
void setChargingMode(uint8_t mode) {
    switch (mode) {
        case CURRENT_MODE:
            // Set to constant current mode (e.g., 10A)
            setChargingCurrent(10);
            break;
        case VOLTAGE_MODE:
            // Set to constant voltage mode (e.g., 4.2V)
            setChargingVoltage(4.2);
            break;
        case TRICKLE_MODE:
            // Set to trickle charging mode (e.g., 1A)
            setChargingCurrent(1);
            break;
        default:
            break;
    }
}

void setChargingCurrent(uint8_t current) {
    // Configure hardware to set charging current
}

void setChargingVoltage(float voltage) {
    // Configure hardware to set charging voltage
}
\`\`\`

---

## **4. Advanced Optimizations**

### **(1) Dynamic Charging Strategy Adjustment**

- Continuously monitors **voltage, temperature, and SOC** and dynamically adjusts the charging strategy. For example, if the battery **temperature increases**, the system **reduces charging power** to prevent overheating.

### **(2) Multi-Battery Type Support**

- **Battery Type Recognition**: The charging station supports multiple battery types (e.g., **lithium-ion, lead-acid, LiFePO4**) and adjusts charging parameters accordingly.

### **(3) AI-Based Optimization**

- Uses **machine learning algorithms** to optimize the charging process based on historical data, user habits, and environmental conditions.

---

## **5. Conclusion**

By utilizing a **software-controlled approach**, along with **Battery Management Systems (BMS)** and **intelligent charging station controls**, the system can **automatically recognize battery specifications** and **apply the optimal charging strategy** upon plugging in the charging gun. This solution improves charging efficiency while ensuring battery protection and longevity.

### **Key Advantages:**

- **Smart Automation** – Automatically selects the best charging strategy based on real-time battery data.
- **Efficiency** – Optimizes charging speed, reducing energy loss.
- **Safety** – Dynamically adjusts based on battery voltage, temperature, and SOC to prevent overheating and overcharging.

This system is ideal for **smart charging stations, public EV charging networks, and home charging systems**.`,__vite_glob_0_8=`---
layout: post
title: "LAB REPORT WEEK 14"
date: 2025-04-06
tags: [WEEKLY]
---

![[1.png]]
**Name:** [Nuo]  
**Week:** Week 14, 2025  
**Course:** Python 100 Days & Basic Machine Learning  
**Submitted on:** 2025-04-06

---

## 📍 **Objective (Goal)**

Continue progressing through the "Python 100 Days" challenge (Days 9–15), focusing on dictionaries, functions with outputs, debugging and finished some whole project. Complete the Basic Machine Learning course and got a Diplom .

---

## 🧠 **Activities Completed**

### Python 100 Days – Day 9–15:

- **Day 9: Secret Auction**
  - This project simulated a secret auction system where users can input their bids and decide whether to continue bidding. It helped me practice handling user input and storing information using dictionaries. It also reinforced my understanding of conditional statements, loops, and data structures like dictionaries.
- **Day 10: Calculator**
  - In this project, I built a simple calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division. The challenge was to structure the code so the calculator could keep running until the user chose to exit. This project helped me reinforce my understanding of functions, handling user inputs, and managing operators.
- **Day 11: Blackjack**
  - The Blackjack game simulated a card game where the program compares the player's and dealer's scores to determine the winner. It helped me become more familiar with Python's random number generation, loops, and how to design game logic. It was a fun and insightful challenge.
- **Day 12: Number Guessing**
  - This project involved creating a number guessing game where the computer randomly selects a number, and the player has to guess it. After each guess, the system provides feedback (whether the number is too high or too low). It allowed me to practice using conditional statements for logical decision-making and introduced me to random number generation and limiting the number of guesses.
- **Day 13: Debugging**
  - This was an incredibly useful exercise where I had to identify and fix errors in a given piece of code. It improved my debugging skills and helped me become more adept at reviewing and fixing code. It also enhanced my ability to understand code flow and detect logical errors more effectively.
- **Day14: Higher or Lower**
  - In this game, the computer randomly selects a number, and the player has to guess whether the next number will be higher or lower. This project helped me further understand how to design an interactive game and utilize control flow and conditional statements to implement game logic.
- **Day 15: The Coffee Machine Project**
  - This is a more complex project where I built a coffee machine system that allows users to choose from different types of coffee and pay for their choices. It involved managing inventory, handling financial calculations, and interacting with the user. It was a great exercise for practicing object-oriented programming and designing a more intricate system with multiple functionalities.

### Basic Machine Learning:

- Module 1: Fundamentals of AI
    
- Module 2: Fundamentals of ML
    
- Module 3: Introduction to Data
    
- Module 4: Mathematics
    
- Module 5: Statistics and Probability
    
- Module 6: Programming Language - Python
    
- Examination ->  Diploma
    
---

## 📊 **Results**

- Completed 7 days of Python challenges with a deeper grasp of syntax and data structures
    
- Learned the basic concepts of machine learning
    
- Increased confidence in debugging and reading error messages
    
- Got a basic machine learning diploma
    

---

## ✍️ **Reflection**

- **On Python:**
    
    - Repeated coding helps develop muscle memory
        
    - Repeated learning of basic functions such as while loop, for loop
        
- **On Machine Learning:**
    
    - The theory is abstract at first, maybe it will become clearer through code practice
        
    - The algorithm part is fascinating
        
- **Challenges:**
    
    - I need to master the use of basic functions of Python
        
    - The amount of code is getting bigger and bigger, and there is not enough time
        

---

## ✅ **Next Steps**

- Continue Python Days 16–22: Next week I will enter the intermediate level of Python
    
- Körkort online
    
- Completed a Python project report and updated it to my personal website
    

---
![[2-1.png]]`,__vite_glob_0_9=`---
layout: post
title: "100 DAYS OF PYTHON-DAY 20"
date: 2025-04-11
tags: [Python100]
---


![[100 DAYS OF PYTHON-DAY20.png]]
## Snake Game Part 1
main.py
\`\`\`Python

from turtle import Screen

from snake import Snake

import time

  

screen = Screen()

screen.setup(width=600, height=600)

screen.bgcolor("black")

screen.title("My Snake Game")

screen.tracer(0)

  

snake = Snake()

  
  

screen.listen()

screen.onkey(snake.up, "Up")

screen.onkey(snake.down, "Down")

screen.onkey(snake.left, "Left")

screen.onkey(snake.right, "Right")

  

game_is_on = True

while game_is_on:

    screen.update()

    time.sleep(0.1)

  

    snake.move()

  
  

screen.exitonclick()
\`\`\`
snake.py
\`\`\`Python
from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]

MOVE_DISTANCE = 20

UP = 90

DOWN = 270

LEFT = 180

RIGHT = 0

  
  

class Snake:

  

    def __init__(self):

        self.segments = []

        self.create_snake()

        self.head = self.segments[0]

  

    def create_snake(self):

        for position in STARTING_POSITIONS:

            new_segment = Turtle("square")

            new_segment.color("white")

            new_segment.penup()

            new_segment.goto(position)

            self.segments.append(new_segment)

  

    def move(self):

        for seg_num in range(len(self.segments) - 1, 0, -1):

            new_x = self.segments[seg_num - 1].xcor()

            new_y = self.segments[seg_num - 1].ycor()

            self.segments[seg_num].goto(new_x, new_y)

        self.head.forward(MOVE_DISTANCE)

  

    def up(self):

        if self.head.heading() != DOWN:

            self.head.setheading(UP)

  

    def down(self):

        if self.head.heading() != UP:

            self.head.setheading(DOWN)

  

    def left(self):

        if self.head.heading() != RIGHT:

            self.head.setheading(LEFT)

  

    def right(self):

        if self.head.heading() != LEFT:

            self.head.setheading(RIGHT)
\`\`\``,__vite_glob_0_10=`---
layout: post
title: "100 DAYS OF PYTHON-DAY 21"
date: 2025-04-12
tags: [Python100]
---


![[100 DAYS OF PYTHON-DAY21.png]]

## The Snake Game part 2
main.py
\`\`\`Python
from turtle import Screen

from snake import Snake

from food import Food

from scoreboard import Scoreboard

import time

  

screen = Screen()

screen.setup(width=600, height=600)

screen.bgcolor("black")

screen.title("My Snake Game")

screen.tracer(0)

  

snake = Snake()

food = Food()

scoreboard = Scoreboard()

  

screen.listen()

screen.onkey(snake.up, "Up")

screen.onkey(snake.down, "Down")

screen.onkey(snake.left, "Left")

screen.onkey(snake.right, "Right")

  

game_is_on = True

while game_is_on:

    screen.update()

    time.sleep(0.1)

    snake.move()

  

    # Detect collision with food

    if snake.head.distance(food) < 15:

        food.refresh()

        scoreboard.increase_score()

  

    # Detect collision with wall

    if snake.head.xcor() > 290 or snake.head.xcor() < -290 or snake.head.ycor() > 290 or snake.head.ycor() < -290:

        game_is_on = False

        scoreboard.game_over()

    # Detect collision with tail

    for segment in snake.segments[1:]:

        if snake.head.distance(segment) < 10:

            game_is_on = False

            scoreboard.game_over()

# End the game

  
  

screen.exitonclick()
\`\`\`

scoreboard.py
\`\`\`Python
from turtle import Turtle

ALIGNMENT = "center"

FONT = ("Courier", 24, "normal")

  
  

class Scoreboard(Turtle):

    def __init__(self):

        super().__init__()

        self.score = 0

        self.color("white")

        self.penup()

        self.hideturtle()

        self.goto(0, 260)

        self.update_scoreboard()

  

    def update_scoreboard(self):

        self.write(f"Score: {self.score}", align=ALIGNMENT, font=FONT)

  

    def game_over(self):

        self.goto(0, 0)

        self.write("Game Over", align=ALIGNMENT, font=FONT)

  

    def increase_score(self):

        self.score += 1

        self.clear()

        self.update_scoreboard()
\`\`\`

food.py
\`\`\`Python
from turtle import Turtle

import random

  

class Food(Turtle):

  

    def __init__(self):

        super().__init__()

        self.shape("circle")

        self.penup()

        self.shapesize(stretch_len=0.5, stretch_wid=0.5)

        self.color("blue")

        self.speed("fastest")

        self.refresh()

  

    def refresh(self):

        random_x = random.randint(-280, 280)

        random_y = random.randint(-280, 280)

        self.goto(random_x, random_y)
\`\`\`

snake.py
\`\`\`Python
from turtle import Turtle

STARTING_POSITIONS = [(0, 0), (-20, 0), (-40, 0)]

MOVE_DISTANCE = 20

UP = 90

DOWN = 270

LEFT = 180

RIGHT = 0

  
  

class Snake:

  

    def __init__(self):

        self.segments = []

        self.create_snake()

        self.head = self.segments[0]

  

    def create_snake(self):

        for position in STARTING_POSITIONS:

            new_segment = Turtle("square")

            new_segment.color("white")

            new_segment.penup()

            new_segment.goto(position)

            self.segments.append(new_segment)

  

    def move(self):

        for seg_num in range(len(self.segments) - 1, 0, -1):

            new_x = self.segments[seg_num - 1].xcor()

            new_y = self.segments[seg_num - 1].ycor()

            self.segments[seg_num].goto(new_x, new_y)

        self.head.forward(MOVE_DISTANCE)

  

    def up(self):

        if self.head.heading() != DOWN:

            self.head.setheading(UP)

  

    def down(self):

        if self.head.heading() != UP:

            self.head.setheading(DOWN)

  

    def left(self):

        if self.head.heading() != RIGHT:

            self.head.setheading(LEFT)

  

    def right(self):

        if self.head.heading() != LEFT:

            self.head.setheading(RIGHT)
\`\`\`
`,__vite_glob_0_11=`---
layout: post
title: "100 DAYS OF PYTHON-DAY 22"
date: 2025-04-13
tags: [Python100]
---


![[100 DAYS OF PYTHON-DAY22.png]]

## Pong Game Breakdown report

## 1. **Setup: Create the Game Screen**

- **Purpose**: Initialize the game window.
    
- **Steps**:
    
    - Use \`turtle.Screen()\` to create a window.
        
    - Set dimensions using \`.setup(width, height)\`.
        
    - Set title with \`.title()\`.
        
    - Change background color with \`.bgcolor()\`.
        
    - Disable animation updates temporarily using \`.tracer(0)\` for manual screen refreshing (helps smooth movement).
        

---

## 2. **Create the Left and Right Paddles**

- **Purpose**: Control objects to hit the ball.
    
- **Steps**:
    
    - Use \`turtle.Turtle()\` for each paddle.
        
    - Shape as a rectangle using \`.shapesize(stretch_wid, stretch_len)\` (e.g., \`stretch_wid=5\`, \`stretch_len=1\`).
        
    - Set color, speed (to \`0\` to stop animation delay), and starting positions (\`x = -350\` for left, \`x = 350\` for right).
        

---

## 3. **Move the Paddles**

- **Purpose**: Allow user to control paddles.
    
- **Steps**:
    
    - Define functions to move each paddle up and down (change y-coordinate).
        
    - Use \`.listen()\` and \`.onkeypress()\` to bind keys:
        
        - For example: \`'w'\`/\`'s'\` for left paddle, \`'Up'\`/\`'Down'\` for right paddle.
            

---

## 4. **Create the Ball**

- **Purpose**: The game object that moves and bounces.
    
- **Steps**:
    
    - Create another \`turtle.Turtle()\` object.
        
    - Use a round shape.
        
    - Set initial \`dx\` and \`dy\` values for ball movement direction and speed.
        

---

## 5. **Make the Ball Move**

- **Purpose**: Continuously move the ball in the game loop.
    
- **Steps**:
    
    - Inside the main game loop:
        
        - Update ball’s \`x\` and \`y\` using \`ball.setx(ball.xcor() + dx)\` and similar for \`y\`.
            

---

## 6. **Detect Collision with Wall and Bounce**

- **Purpose**: Reflect the ball when it hits the top or bottom.
    
- **Steps**:
    
    - Check if \`ball.ycor()\` exceeds top or bottom bounds (e.g., \`y > 290 or y < -290\`).
        
    - Reverse \`dy\` to make it bounce: \`ball.dy *= -1\`.
        

---

## 7. **Detect Collision with Paddle**

- **Purpose**: Ball should bounce when it hits a paddle.
    
- **Steps**:
    
    - Check if ball is near the paddle (\`x\` range and \`y\` overlap).
        
    - If collision occurs, reverse \`dx\`: \`ball.dx *= -1\`.
        

---

## 8. **Detect When Paddle Misses**

- **Purpose**: Reset ball and update score when it passes a paddle.
    
- **Steps**:
    
    - If \`ball.xcor()\` exceeds horizontal bounds (e.g., \`x > 390\` or \`x < -390\`), reset to center and reverse direction.
        
    - Track score change accordingly.
        

---

## 9. **Keep and Display Score**

- **Purpose**: Display and update each player's score.
    
- **Steps**:
    
    - Use a new \`turtle.Turtle()\` object for score display (hide it, \`penup()\` to avoid drawing).
        
    - Use \`.write()\` to display score.
        
    - Clear and re-write every time score changes.

---
Full Code
main.py
\`\`\`Python
from turtle import Screen, Turtle

from paddle import Paddle

from ball import Ball

from scoreboard import Scoreboard

import time

  
  

# screen setup

screen = Screen()

screen.title("Pong Game")

screen.bgcolor("black")

screen.setup(width=800, height=600)

screen.tracer(0) # turns off the screen updates

  

r_paddle = Paddle((350, 0)) # right paddle

l_paddle = Paddle((-350, 0)) # left paddle

  

# paddle A setup

#paddle_a = Turtle()

#paddle_a.shape("square")

#paddle_a.color("white")

# paddle_a.shapesize(stretch_wid=5, stretch_len=1) # paddle width 20, height 100

# paddle_a.penup()

# paddle_a.goto(-350, 0)

  

# paddle B setup

# paddle_b = Turtle()

# paddle_b.shape("square")

# paddle_b.color("white")

# paddle_b.shapesize(stretch_wid=5, stretch_len=1) # paddle width 20, height 100

# paddle_b.penup()

# paddle_b.goto(350, 0)

  

ball = Ball()

scoreboard = Scoreboard()

  

# keyboard bindings

screen.listen()

screen.onkey(l_paddle.go_up, "w")

screen.onkey(l_paddle.go_down, "s")

screen.onkey(r_paddle.go_up, "Up")

screen.onkey(r_paddle.go_down, "Down")

  
  

game_is_on = True

while game_is_on:

    time.sleep(ball.move_speed) # delay for ball movement speed

    screen.update() # update the screen

    # Add game logic here (e.g., ball movement, collision detection)

    ball.move()

    # detect collision with wall

    if ball.ycor() > 280 or ball.ycor() < -280:

        ball.bounce_y()

  

    # detect collision with paddle

    if ball.distance(r_paddle) < 50 and ball.xcor() > 320 or ball.distance(l_paddle) < 50 and ball.xcor() < -320:

        ball.bounce_x()

  

    # detect ball out of bounds

    if ball.xcor() > 380:

        ball.reset_position()

        scoreboard.l_point()

  

    if ball.xcor() < -380:

        ball.reset_position()

        scoreboard.r_point()


screen.exitonclick()
\`\`\`
paddle.py
\`\`\`Python
from turtle import Turtle

  

class Paddle(Turtle):

    def __init__(self, position):

        super().__init__()

        self.shape("square")

        self.color("white")

        self.shapesize(stretch_wid=5, stretch_len=1)

        self.penup()

        self.goto(position)

  

    def go_up(self):

        new_y = self.ycor() + 20

        self.goto(self.xcor(), new_y)

    def go_down(self):

        new_y = self.ycor() - 20

        self.goto(self.xcor(), new_y)
\`\`\`
ball.py
\`\`\`Python
from turtle import Turtle

  

# ball setup

class Ball(Turtle):

    def __init__(self):

        super().__init__()

        self.shape("circle")

        self.color("white")

        self.penup()

        self.x_move = 10

        self.y_move = 10

        self.speed("fastest")

        self.move_speed = 0.1

  

    def move(self):

        new_x = self.xcor() + self.x_move

        new_y = self.ycor() + self.y_move

        self.goto(new_x, new_y)

  

    def bounce_y(self):

        self.y_move *= -1

  

    def bounce_x(self):

        self.x_move *= -1

        self.move_speed *= 0.9

    def reset_position(self):

        self.goto(0, 0)

        self.move_speed = 0.1

        self.bounce_x()
\`\`\`
scoreboard.py
\`\`\`Python
from turtle import Turtle

  

class Scoreboard(Turtle):

  

    def __init__(self):

        super().__init__()

        self.color("white")

        self.penup()

        self.hideturtle()

        self.l_score = 0

        self.r_score = 0

        self.update_score()

    def update_score(self):

        self.clear()

        self.goto(-100, 200)

        self.write(self.l_score, align="center", font=("Courier", 80, "normal"))

        self.goto(100, 200)

        self.write(self.r_score, align="center", font=("Courier", 80, "normal"))

  
  
  

    def l_point(self):

        self.l_score += 1

        self.update_score()

    def r_point(self):

        self.r_score += 1

        self.update_score()
\`\`\`
`,__vite_glob_0_12=`---
layout: post
title: "LAB REPORT WEEK 15"
date: 2025-04-13
tags: [WEEKLY]
---


![[LAB report banner.png]]
**Name:** [Nuo]  
**Week:** Week 15, 2025  
**Course:** Python 100 Days
**Reading:** ANTHROPIC-RESEACH, ANNE-LAURE-TINY EXPERIMENTS
**Submitted on:** 2025-04-13

---

## 📍 **Objective (Goal)**

This week focused on continued progress in Python development, knowledge base building, and exploration in cognitive science and creative thinking through reading.

---

## 🧠 **Activities Completed**

I made steady progress on the **Python 100 Days** challenge, completing Days 16 through 22.

### 📘 Projects Completed:
- **Day 16–17**: *Quiz Game* – Implemented using OOP, with structured classes for question data, game loop, and scoring.
- **Day 18–19**: *Hirst Painting* – Explored the \`turtle\` graphics module and RGB color extraction to generate a dot-painting style artwork.
- **Day 20–21**: *Snake Game* – Split across two days, involving class-based design, keyboard interaction, collision detection, and scoring system.
- **Day 22**: *Pong Game* – A classic two-player paddle game built using the \`turtle\` module, including ball physics, boundary reflection, paddle movement, and a scoreboard.

### 🔧 Key Concepts & Tools:
\`class\` / \`inheritance\` / \`turtle.Screen()\` / \`onkey()\` / \`collision detection\` / \`game loop\` / \`object-oriented design\`

### 💡 Key Takeaways:
- Creating a **Breakdown Report** before coding has significantly improved my efficiency and reduced debugging time.
- I’m now more comfortable managing multiple objects, handling interactions like ball-to-paddle collisions and scoring resets.
- The Pong Game helped reinforce concepts like real-time updates, direction control, and interactive inputs.

---

## 🗂️ 2. Knowledge Management – Obsidian Library

- Created a dedicated **Python 100 Days Library** in Obsidian to document each project.
- Notes include: project goals, structure diagrams, core logic explanations, and post-project reflections.
- Using backlinks and tags to build a personal programming knowledge graph.

---

## 📖 3. Reading & Thinking

### 🧠 AI Research – Anthropic Paper  
**Title**: *Tracing the Thoughts of a Large Language Model*  

### 🌱 *Tiny Experiments* by Anne-Laure Le Cunff  

---
## ✅ **Thinking**

- “Start tiny. Stay consistent. Think clearly. Create freely.”

---
![[2-1.png]]`,__vite_glob_0_13=`---
layout: post
title: "100 DAYS OF PYTHON-DAY 23"
date: 2025-04-14
tags: [Python100]
---

![[100 DAYS OF PYTHON-DAY23.png]]

# 🐢 Turtle Crossing Game – Breakdown Report

## 🎮 Project Overview

The **Turtle Crossing Game** is a classic arcade-style game built using Python’s \`turtle\` module. The player controls a turtle attempting to cross a busy road filled with moving cars. The objective is to reach the top of the screen safely. With each successful crossing, the level increases, and car speed increases, making the game more challenging.

---

## 📁 File Structure and Responsibilities

### 1. **\`main.py\`** – Game Entry Point & Control Flow

**Purpose**:  
This is the central file that initializes the game, sets up the screen, and handles the game loop.

**Responsibilities**:

- Set up the screen size and background.
    
- Initialize the \`Player\`, \`CarManager\`, and \`Scoreboard\`.
    
- Detect key presses for player movement.
    
- Update the game loop:
    
    - Move cars.
        
    - Detect collisions.
        
    - Detect successful crossings.
        
    - Manage level progression.
        

**Example Components**:

- \`screen.listen()\`, \`screen.onkey()\`
    
- \`while game_is_on:\` game loop
    
- \`time.sleep()\` for pacing
    

---

### 2. **\`car_manager.py\`** – Car Management System

**Purpose**:  
Handles creation, movement, and removal of cars. As levels increase, car speed should also increase.

**Responsibilities**:

- Randomly generate new cars at intervals.
    
- Move all cars from right to left across the screen.
    
- Delete cars that move off screen.
    
- Adjust car speed based on current level.
    

**Key Elements**:

- Car list (e.g., \`self.all_cars\`)
    
- Car creation method
    
- Car movement logic
    
- Speed control with \`self.car_speed\`
    

---

### 3. **\`player.py\`** – Player (Turtle) Controller

**Purpose**:  
Defines the player's turtle character and its movement logic.

**Responsibilities**:

- Create a turtle at the starting position.
    
- Move turtle upward on key press.
    
- Reset turtle to starting position after reaching the goal.
    
- Optionally include methods to check goal crossing.
    

**Key Features**:

- Movement using \`setheading()\` and \`forward()\`
    
- Collision detection via coordinate comparison
    
- Starting position constant
    

---

### 4. **\`scoreboard.py\`** – Level Tracking and Display

**Purpose**:  
Displays and updates the level (score) as the player progresses.

**Responsibilities**:

- Display current level on screen.
    
- Increment level after a successful crossing.
    
- Clear and update the screen with new level.
    
- Show “Game Over” message if a collision occurs.
    

**Features**:

- Use \`turtle.Turtle()\` for drawing text
    
- \`self.level\` variable to track level
    
- \`update_scoreboard()\`, \`increase_level()\`, \`game_over()\` methods
    

---

## 🔁 Game Loop Flow Summary

1. **Initialize screen and objects**
    
2. **Begin game loop**:
    
    - Move cars.
        
    - Detect if new car should be added.
        
    - Check if player collides with any car.
        
    - If player reaches goal:
        
        - Increase level.
            
        - Reset player.
            
        - Increase car speed.
            
3. **Update screen and continue loop**

---

\`main.py\`

\`\`\`Python
import time

from turtle import Screen

from player import Player

from car_manager import CarManager

from scoreboard import Scoreboard

  

screen = Screen()

screen.setup(width=600, height=600)

screen.tracer(0)

  

player = Player()

car_manager = CarManager()

scoreboard = Scoreboard()

  

screen.listen()

screen.onkey(player.move_up, "Up")

  

game_is_on = True

while game_is_on:

    time.sleep(0.1)

    screen.update()

  

    car_manager.create_car()

    car_manager.move_cars()

  

    # Detect collision with a car

    for car in car_manager.all_cars:

        if player.distance(car) < 20:

            scoreboard.game_over()

            game_is_on = False

  

    # Detect if player reached the top

    if player.is_at_finish_line():

        player.go_to_start()

        car_manager.level_up()

        scoreboard.increase_level()

  
  

screen.exitonclick()
\`\`\`

\`player.py\`

\`\`\`Python
from turtle import Turtle

  
  

STARTING_POSITION = (0, -280)

MOVE_DISTANCE = 10

FINISH_LINE_Y = 280

  
  

class Player(Turtle):

    def __init__(self):

        super().__init__()

        self.shape("turtle")

        self.color("black")

        self.penup()

        self.setheading(90)

        self.go_to_start()

  

    def move_up(self):

        self.forward(MOVE_DISTANCE)

  

    def go_to_start(self):

        self.goto(STARTING_POSITION)

  

    def is_at_finish_line(self):

        return self.ycor() > FINISH_LINE_Y
\`\`\`

\`car_manager.py\`

\`\`\`Python
from turtle import Turtle

import random

  
  

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]

STARTING_MOVE_DISTANCE = 5

MOVE_INCREMENT = 10

  
  

class CarManager:

    def __init__(self):

        self.all_cars = []

        self.car_speed = STARTING_MOVE_DISTANCE

  

    def create_car(self):

        random_chance = random.randint(1, 6)

        if random_chance == 1:

            new_car = Turtle("square")

            new_car.color(random.choice(COLORS))

            new_car.penup()

            new_car.shapesize(stretch_wid=1, stretch_len=2)

            random_y = random.randint(-250, 250)

            new_car.goto(300, random_y)

            self.all_cars.append(new_car)

  

    def move_cars(self):

        for car in self.all_cars:

            car.backward(self.car_speed)

  

    def level_up(self):

        self.car_speed += MOVE_INCREMENT
\`\`\`

\`scoreboard.py\`

\`\`\`Python
from turtle import Turtle

  

FONT = ("Courier", 18, "normal")

ALIGNMENT = "left"

  

class Scoreboard(Turtle):

    def __init__(self):

        super().__init__()

        self.level = 1

        self.penup()

        self.hideturtle()

        self.goto(-280, 260)

        self.update_scoreboard()

  

    def update_scoreboard(self):

        self.clear()

        self.write(f"Level: {self.level}", align=ALIGNMENT, font=FONT)

  

    def increase_level(self):

        self.level += 1

        self.update_scoreboard()

  

    def game_over(self):

        self.goto(0, 0)

        self.write("GAME OVER", align="center", font=FONT)
\`\`\``,__vite_glob_0_14=`---\r
title: "The Birth of Kafe AI: From a Coffee Shop Owner's Struggles to an AI-Powered Management Platform"\r
date: "2025-07-03"\r
author: "KafeAI"\r
excerpt: "Kafe AI: Transforming Small Business Management with AI"\r
image: "/blog/images/notionbanner.png"\r
tags: ["launch", "AI", "coffee shop", "management"]\r
---\r
\r
# The Birth of Kafe AI: From a Coffee Shop Owner's Struggles to an AI-Powered Management Platform\r
\r
## It All Started with a Problem\r
\r
I've been running my own coffee shop for 7 years now. Throughout these years, I've had to handle massive amounts of sales data every month – daily revenue statistics, receipt organization, inventory management, customer order processing, and generating various reports. I constantly worry about how much milk to order, how many coffee beans to stock, and whether ingredients are about to expire. Sometimes I over-order and waste money; other times I under-order and run out of stock, leaving customers disappointed.\r
\r
This reality made me reflect: In an era where AI technology is advancing at breakneck speed, why are so many small businesses still managing their operations in the most primitive ways?\r
\r
## What Our Research Revealed\r
\r
Driven by this question, we visited dozens of coffee shops, small restaurants, and retail stores. The findings were shocking:\r
\r
- **95% of small merchants** still rely on manual records or simple Excel spreadsheets\r
- **Spend 2-3 hours daily** on data organization and analysis\r
- **Inventory waste rates of 10-15%**, especially for perishable goods\r
- **Lack scientific forecasting models**, frequently experiencing stockouts or overstock\r
\r
More importantly, we discovered that these merchants weren't unwilling to embrace technology – rather:\r
- Existing POS systems are overly complex and expensive\r
- There's a lack of intelligent analysis tools designed for small businesses\r
- They need solutions that are both simple and powerful\r
\r
## The Vision Behind Kafe AI\r
\r
Based on these insights, we established Kafe AI's core mission:\r
\r
### 🎯 **Making AI Accessible to Every Small Business**\r
\r
We believe that advanced AI technology shouldn't be a privilege reserved for large corporations. Every hardworking coffee shop owner and small restaurant proprietor deserves to benefit from AI-driven efficiency improvements.\r
\r
### 💡 **Simplifying Complexity, Focusing on Practicality**\r
\r
- **One-click recording**: Simple enough to complete daily data entry in seconds\r
- **Intelligent analysis**: AI automatically identifies business patterns and provides personalized recommendations\r
- **Practical forecasting**: Inventory predictions based on historical data and external factors (weather, holidays)\r
\r
### 🚀 **Immediate, Tangible Value**\r
\r
Our goal is for users to see results within their first month of using Kafe AI:\r
- **50% reduction in inventory waste**\r
- **70% time savings in daily management**\r
- **30-40% decrease in operational costs**\r
\r
## The Technology Innovation Behind It\r
\r
### AI-Powered Core Engine\r
\r
Kafe AI integrates cutting-edge AI technology:\r
- **Google Gemini API**: Provides intelligent business analysis\r
- **Machine learning algorithms**: Enables precise sales forecasting\r
- **Natural language processing**: Generates understandable business insights\r
\r
### Modular Design Philosophy\r
\r
We've adopted a modular architecture that allows users to:\r
1. **Start with core functions**: Daily income/expense tracking + AI analysis\r
2. **Gradually expand features**: Inventory management, customer analytics, smart marketing\r
3. **Customize development**: Industry-specific professional solutions\r
\r
## Looking to the Future\r
\r
Kafe AI's vision extends far beyond our current capabilities. We're developing:\r
\r
- **Multi-location chain management**: Scalable support for growing small businesses\r
- **AI marketing assistant**: Automatically generates promotional campaigns and customer communications\r
- **Supply chain optimization**: Intelligent supplier matching and procurement recommendations\r
- **Industry expansion**: Extending from coffee shops to various retail formats\r
\r
## Final Thoughts\r
\r
The birth of Kafe AI stems from our deep understanding of small merchants and unwavering belief in AI technology. We believe that technology's true value lies in making ordinary people's lives better.\r
\r
Every time we see a coffee shop owner save time, reduce waste, and increase profits through Kafe AI, we're deeply reminded: this is the future we want to create.\r
\r
**A future where AI truly serves every small business.**\r
\r
---\r
\r
*If you're also a small business owner or interested in digital transformation for small enterprises, we welcome you to follow Kafe AI's journey. Together, let's use the power of AI to help every small business thrive.*\r
\r
---\r
\r
*Have questions about KafeAI? [Contact me](mailto:jinnuonoel@gmail.com) - we'd love to hear from you!*\r
\r
**#AI #SmallBusiness #DigitalTransformation #CoffeeShopManagement #StartupStory #TechForGood**`,__vite_glob_0_15=`---\r
title: "From Zero to One How I Built Kafe AI's Technical Architecture"\r
date: "2025-07-13"\r
author: "KafeAI"\r
excerpt: "Discover the technical journey behind Kafe AI — from choosing Next.js and React for seamless user experience to integrating Google Gemini API for intelligent business insights. Learn how modern web technologies and AI engines combine to create a powerful yet simple management platform for coffee shops and small businesses."\r
image: "/blog/images/notionbanner.png"\r
tags: ["Next.js", "AI-Integration", "Small-Business", "Full-Stack-Development", "SaaS-Platform", "Tech-Stack", "Coffee-Shop-Management"]\r
---\r
\r
# From Zero to One: How I Built Kafe AI's Technical Architecture\r
\r
Last week I shared why I decided to build Kafe AI. Today, I want to talk about the technical side of the story — how an AI management platform tailored for small businesses transformed from an idea into reality.\r
\r
## The Philosophy Behind Tech Stack Selection\r
\r
Before writing the first line of code, I spent considerable time thinking about one crucial question: **How do we use the most suitable tech stack to build a product that's both powerful and simple?**\r
\r
### Frontend: Balancing Modernity with Usability\r
\r
For the frontend tech stack, I chose **Next.js 14 + React 18** as the core framework. This decision was based on several considerations:\r
\r
- **Development Efficiency**: Next.js's full-stack capabilities allow for rapid prototyping and iteration\r
- **User Experience**: Server-side rendering ensures fast page loads, crucial for small business owners who might have less-than-ideal network conditions\r
- **Maintainability**: TypeScript integration makes the codebase more robust and reduces potential bugs\r
\r
For styling, I chose **TailwindCSS**. For a project that needs to balance development speed with visual quality, Tailwind enables rapid construction of beautiful, responsive interfaces.\r
\r
\`\`\`javascript\r
// Example of clean component structure\r
const DashboardCard = ({ title, value, trend }) => (\r
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">\r
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>\r
    <p className="text-3xl font-bold text-green-600">{value}</p>\r
    <span className="text-sm text-gray-500">{trend}</span>\r
  </div>\r
);\r
\`\`\`\r
\r
### Data Visualization: Making Numbers Tell Stories\r
\r
For coffee shop owners, data visualization is crucial. I integrated multiple chart libraries:\r
\r
- **Chart.js + React-Chartjs-2**: For core sales trend charts\r
- **Recharts**: As an alternative option for more flexible chart customization\r
- **Framer Motion**: Adding smooth animations to charts and interfaces\r
\r
This multi-option approach ensures the best data presentation experience across different scenarios.\r
\r
## Backend Architecture: Stability Meets Scalability\r
\r
### Server-Side Choice\r
\r
For the backend, I chose **Express.js**, a time-tested Node.js framework. While there are many emerging frameworks, Express's stability and mature ecosystem are exactly what a commercial product like Kafe AI needs.\r
\r
\`\`\`javascript\r
// Modular route design\r
app.use('/api/sales', salesRoutes);\r
app.use('/api/ai', aiAnalysisRoutes);\r
app.use('/api/auth', authenticationRoutes);\r
\`\`\`\r
\r
### Data Storage Strategy\r
\r
For data storage, I adopted the **MongoDB + Mongoose** combination:\r
\r
- **Flexible Data Models**: Coffee shop business data structures may vary from store to store, and NoSQL flexibility perfectly fits this requirement\r
- **Rapid Prototype Development**: MongoDB allows quick data structure adjustments to adapt to evolving business needs\r
- **Cloud Deployment**: MongoDB Atlas provides reliable cloud database services\r
\r
## AI Integration: Making Intelligent Analysis Possible\r
\r
### Multi-AI Engine Strategy\r
\r
Kafe AI's core competitive advantage lies in its AI analysis capabilities. I chose a multi-engine strategy:\r
\r
- **Google Gemini API**: For generating detailed business analysis reports\r
- **Backup AI Engines**: Ensuring service stability and continuity\r
\r
\`\`\`javascript\r
// Core logic for AI analysis\r
const generateBusinessInsights = async (salesData) => {\r
  const prompt = \`\r
    As a professional coffee shop business consultant, please analyze the following data:\r
    \${JSON.stringify(salesData)}\r
    \r
    Please provide:\r
    1. Sales trend analysis\r
    2. Cost optimization recommendations\r
    3. Inventory management suggestions\r
  \`;\r
  \r
  return await callAIEngine(prompt);\r
};\r
\`\`\`\r
\r
### Progressive Implementation of Intelligence\r
\r
AI feature implementation follows the principle of "progressive enhancement":\r
\r
1. **Basic Analysis**: Sales trends, profit analysis\r
2. **Smart Predictions**: Demand forecasting based on historical data\r
3. **Personalized Recommendations**: Customized suggestions for different store characteristics\r
\r
## User Experience: Technology Serving Users\r
\r
### Responsive Design\r
\r
Considering that many coffee shop owners use the system on mobile devices, I ensured fully responsive design:\r
\r
\`\`\`css\r
/* Mobile-first design principle */\r
.dashboard-grid {\r
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;\r
}\r
\`\`\`\r
\r
### State Management\r
\r
Using **Zustand** for lightweight state management, avoiding complex Redux configuration:\r
\r
\`\`\`javascript\r
const useAuthStore = create((set) => ({\r
  user: null,\r
  isAuthenticated: false,\r
  login: (userData) => set({ user: userData, isAuthenticated: true }),\r
  logout: () => set({ user: null, isAuthenticated: false }),\r
}));\r
\`\`\`\r
\r
## Deployment & Operations: Stability First\r
\r
### Modern Deployment\r
\r
- **Frontend**: Vercel provides fast global CDN and automatic deployment\r
- **Database**: MongoDB Atlas cloud services ensure data security and availability\r
- **Monitoring**: Integrated error monitoring and performance analytics\r
\r
### Security Considerations\r
\r
- **JWT Authentication**: Cookie-based JWT tokens ensure secure user authentication\r
- **Data Isolation**: Each user's data is strictly isolated to prevent data leaks\r
- **CORS Protection**: Proper cross-origin request configuration to protect API security\r
\r
## Developer Experience: Efficiency Meets Quality\r
\r
### Development Toolchain\r
\r
\`\`\`json\r
{\r
  "Framework": "Next.js 14",\r
  "Type Checking": "TypeScript",\r
  "Code Standards": "ESLint + Prettier",\r
  "Version Control": "Git",\r
  "Package Management": "npm"\r
}\r
\`\`\`\r
\r
### Modular Architecture\r
\r
Adopted a highly modular architecture design where each functional module can be developed and tested independently:\r
\r
\`\`\`\r
src/\r
├── components/          # Reusable components\r
│   ├── DailySales/     # Sales recording module\r
│   ├── TrendChart/     # Chart module\r
│   └── AIAnalysis/     # AI analysis module\r
├── pages/              # Page components\r
└── lib/                # Utilities and APIs\r
\`\`\`\r
\r
## Continuous Optimization Philosophy\r
\r
### Performance Optimization\r
\r
- **Code Splitting**: Load components on demand, reducing initial bundle size\r
- **Image Optimization**: Next.js automatic image optimization\r
- **Caching Strategy**: Reasonable API caching and static resource caching\r
\r
### User Feedback-Driven\r
\r
Technical choices are always user-need oriented:\r
\r
- **Fast Loading**: Optimized first-screen loading time\r
- **Offline Support**: Progressive Web App features\r
- **Intuitive Operations**: Simplified user interface and interaction flows\r
\r
## Final Thoughts\r
\r
Building Kafe AI has taught me that technology is not the end goal, but a means to deliver user value. Behind every technical choice is deep consideration of user needs.\r
\r
From React's component-based development improving code reusability, to AI engines providing intelligent business insights, to cloud deployment ensuring service stability — every technical decision revolves around one core objective: **enabling small businesses to easily enjoy the efficiency improvements that advanced technology brings**.\r
\r
Moving forward, we will continue optimizing system performance, expanding AI analysis capabilities, and gradually opening up more practical features. Technological progress is endless, but our mission remains unchanged: using technology to help every small business operate better.\r
\r
---\r
\r
*Want to learn more about Kafe AI's technical details or have any suggestions? Feel free to contact us through our website, and let's work together to transform how small businesses operate with the power of AI.*\r
\r
**#TechSharing #AI #SmallBusiness #FullStackDevelopment #StartupTech**`,__vite_glob_0_16=`---\r
title: "Can Coffee Shops Use AI? How to Optimize Your Coffee Shop Operations with kafeAI"\r
date: "2025-07-15"\r
author: "KafeAI"\r
excerpt: "Tired of spending hours every night reconciling receipts and guessing tomorrow's inventory needs? Discover how kafeAI transforms coffee shop management from guesswork to data-driven decisions. Learn how AI can reduce pastry waste by 67%, cut milk waste by 78%, and save 90% of your daily management time—all through simple 3-minute daily check-ins that feel as easy as ordering your morning coffee."\r
image: "/blog/images/notionbanner.png"\r
tags: ["Coffee-Shop-Management", "Small-Business-AI", "AI-Analytics", "Inventory-Management", "kafeAI", "Operational-Efficiency"]\r
---\r
\r
# Can Coffee Shops Use AI? How to Optimize Your Coffee Shop Operations with kafeAI\r
\r
Remember that familiar scene? Every night at 10 PM, when the last customer leaves, you sit at your coffee shop's counter, facing a pile of receipts and bills, beginning the long "accounting time." How many cups of coffee did we sell today? How much pastry was wasted? How much milk should we order tomorrow? These seemingly simple questions give countless coffee shop owners daily headaches.\r
\r
But now, AI technology is quietly changing all of this. Today, I want to chat with you about the operational pain points that coffee shop owners care about most, and how kafeAI makes "accounting" simple and interesting.\r
\r
## 😰 Three Major Operational Pain Points for Coffee Shop Owners\r
\r
### Pain Point 1: Cost Control Like a "Black Hole"\r
\r
**Real Scenario:**\r
> "Every month's cost list is huge: rent, labor, utilities, raw materials... but which item costs the most? Where can we still save? I have no idea where to start."\r
\r
**Problems with Traditional Methods:**\r
- Manual recording, easy to miss items\r
- Only know total expenses, not expense structure\r
- Cost optimization relies purely on "feeling," lacks data support\r
\r
### Pain Point 2: Inventory Management Relies on "Guessing"\r
\r
**Real Scenario:**\r
> "Yesterday we had half the pastries left over again, throwing them away breaks my heart! But last Wednesday we ran out of milk and customers complained. How do you predict demand?"\r
\r
**Problems with Traditional Methods:**\r
- Order quantities based on experience, often inaccurate\r
- Pastries, milk, and other perishable goods have waste rates as high as 10-15%\r
- Stockouts affect customer experience, over-purchasing wastes costs\r
\r
### Pain Point 3: Sales Trends Are Unclear\r
\r
**Real Scenario:**\r
> "I feel like business isn't as good as it was a few months ago, but I can't pinpoint exactly what the problem is. Are there fewer customers? Or has the average transaction value decreased?"\r
\r
**Problems with Traditional Methods:**\r
- Only know daily total revenue, lack deep analysis\r
- Cannot identify sales patterns and trends\r
- Miss optimal marketing timing and product adjustment opportunities\r
\r
## 🤖 kafeAI: Making AI Your Business Consultant\r
\r
kafeAI's core philosophy is simple: **Make complex data analysis as simple as ordering a cup of coffee**.\r
\r
### How Does It Work?\r
\r
**Step 1: Simple Data Entry**\r
- Spend 2-3 minutes daily inputting sales, customer traffic, and main expenses\r
- Interface simpler than WeChat chat, requires no technical background\r
\r
**Step 2: AI Automatic Analysis**\r
- System automatically calculates profit, cost ratios, trend changes\r
- AI identifies sales patterns, discovers problems you might overlook\r
\r
**Step 3: Get Professional Advice**\r
- Receive targeted business advice in your language\r
- Like having a business-savvy friend giving you ideas\r
\r
## 🎯 kafeAI's Real-World Application Scenarios\r
\r
### Scenario 1: Smart Inventory Suggestions\r
\r
**Traditional Method:**\r
> "Let's order 20L of milk tomorrow, should be enough."\r
\r
**kafeAI Method:**\r
\`\`\`\r
🤖 AI Recommendation:\r
Tomorrow's suggested orders:\r
• Milk: 15L (based on historical data + tomorrow's weather forecast)\r
• Pastries: Reduce cake types by 20%, increase scones by 15%\r
• Coffee beans: Stock sufficient, no replenishment needed\r
\r
📊 Prediction Basis:\r
• Tomorrow is Wednesday, historical data shows 12% increase in traffic vs Tuesday\r
• Weather forecast shows rain, hot drink demand +25%, pastry demand -10%\r
• Last Wednesday's data: 15L milk was exactly consumed\r
\`\`\`\r
\r
### Scenario 2: Cost Optimization Alerts\r
\r
**Traditional Method:**\r
> "I feel like costs have been a bit high lately, but I don't know exactly where."\r
\r
**kafeAI Method:**\r
\`\`\`\r
⚠️ Cost Alert:\r
This week's labor cost ratio is 35%, exceeding target of 30%\r
\r
🎯 Optimization Suggestions:\r
• Tuesday 2:00-4:00 PM has less traffic, suggest 1-person shift\r
• Consider using this time for inventory organization and equipment cleaning\r
• Estimated weekly savings: ¥480 in labor costs\r
\r
📈 Potential Benefits:\r
• Monthly cost savings: ¥1,920\r
• Annual cost savings: ¥23,040\r
\`\`\`\r
\r
### Scenario 3: Sales Strategy Recommendations\r
\r
**Traditional Method:**\r
> "Should we run a promotion?"\r
\r
**kafeAI Method:**\r
\`\`\`\r
💡 Marketing Strategy Recommendation:\r
Based on data analysis, suggest launching the following promotion this Thursday:\r
\r
🎪 Campaign Plan:\r
• Time: Thursday 2:00-4:00 PM (off-peak hours)\r
• Content: Buy one pastry, get one free\r
• Goal: Increase off-peak revenue by 35%\r
\r
📊 Data Support:\r
• Historical traffic is lower during this time slot\r
• Pastry sales during this period are only 60% of average\r
• Similar promotions historically increase period revenue by 40%\r
\`\`\`\r
\r
## 🛠️ Why Choose kafeAI?\r
\r
### 1. **Zero Technical Barrier**\r
- Interface simpler than WeChat\r
- No complex training required\r
\r
### 2. **Professional Yet User-Friendly**\r
- AI algorithms specifically optimized for coffee shops\r
- Specific, actionable recommendations, not generic advice\r
- Real-time feedback, immediate adjustments\r
\r
### 3. **Cost-Effective**\r
- Cheaper than hiring an accountant\r
- Smarter than traditional POS systems\r
- Short ROI period (typically 2-3 months)\r
\r
### 4. **Continuous Learning**\r
- AI remembers your shop's characteristics\r
- Recommendations become increasingly accurate\r
- Effects improve with longer usage\r
\r
## 🚀 Start Your AI Coffee Shop Journey\r
\r
### Beginner's Guide: Three Steps to Smart Operations\r
\r
**Step 1: Basic Setup (5 minutes)**\r
- Input basic shop information (rent, labor costs, etc.)\r
- Set target parameters (desired profit margin, cost control goals)\r
\r
**Step 2: Daily Use (3 minutes per day)**\r
- Record daily sales data\r
- Review AI analysis reports\r
- Get tomorrow's business recommendations\r
\r
**Step 3: Continuous Optimization (Weekly Review)**\r
- Review weekly analysis\r
- Adjust business strategies\r
- Track improvement results\r
\r
### Suitable For:\r
\r
✅ **New shop owners just starting**: Build scientific management habits from the beginning\r
✅ **Experienced owners wanting improvement**: Use data to validate and optimize existing experience\r
✅ **Entrepreneurs preparing for a second shop**: Replicate successful experiences, avoid repeating mistakes\r
✅ **Efficiency-focused young owners**: Spend time on more valuable activities\r
\r
## 💭 Final Thoughts\r
\r
In this age of information explosion, the core of coffee shop management remains providing customers with wonderful experiences. But this doesn't mean we should reject technology's help. On the contrary, AI technology can free us from tedious data organization, allowing us to invest more energy in truly important things: grinding better coffee beans, designing warmer spaces, and building deeper connections with every customer.\r
\r
kafeAI's mission is simple: **Let every coffee shop owner easily enjoy the business wisdom that AI brings, making coffee shop operations no longer about "luck" but about "intelligence"**.\r
\r
Starting today, let AI become your most capable business partner. Not to replace your judgment, but to make every decision you make more informed.\r
\r
---\r
\r
**Want to experience how AI can transform your coffee shop operations?**\r
\r
🔗 **Visit kafeAI.tech to start your free trial**  \r
🎯 **Designed specifically for coffee shop owners**  \r
📱 **Works on mobile and desktop, manage your coffee shop anytime, anywhere**\r
\r
*Let's work together to use AI's power to make every cup of coffee warmer and every coffee shop smarter.*\r
\r
**#CoffeeShopManagement #AISmartManagement #kafeAI #SmallBusinessDigitization #CoffeeEntrepreneurship**`,__vite_glob_0_17=`---\r
title: "Smart Inventory Integration: How KafeAI Revolutionizes Coffee Shop Operations"\r
date: "2025-07-31"\r
author: "KafeAI"\r
excerpt: "KafeAI's Smart Inventory System (SIS) transforms coffee shop operations by seamlessly linking ingredient stocks to menu items in real time. This AI-driven solution automatically updates inventory levels with each sale, predicts replenishment needs, and reduces waste by 30%. By eliminating manual stock checks and miscommunication, SIS boosts efficiency—freeing staff to focus on crafting great coffee experiences. The system's intelligent alerts and supplier integration pave the way for fully automated inventory management, turning a traditional operational headache into a strategic advantage."\r
image: "/blog/images/notionbanner.png"\r
tags: ["InventoryAutomation", "CoffeeTech", "AI-Analytics", "Inventory-Management", "kafeAI", "Operational-Efficiency"]\r
---\r
\r
# Smart Inventory Integration: How KafeAI Revolutionizes Coffee Shop Operations\r
\r
## Introduction: From Inventory Chaos to Intelligent Management\r
\r
After five years of running a coffee shop, what frustrated me most wasn't quality control or staff management, but the seemingly simple task of inventory management. It wasn't until we implemented KafeAI's Smart Inventory System (SIS), particularly its intelligent ingredient-menu integration feature, that we truly solved this persistent pain point.\r
\r
## Core Functionality: The Invisible Intelligent Network\r
\r
### 1. Real-Time Dialogue Between Ingredients and Menu\r
Our system establishes an intelligent connection network - when ingredient stock is updated, all related menu items' available quantities are instantly recalculated.\r
\r
### 2. Sales-Driven Automatic Inventory Updates\r
With every completed order, the system precisely deducts used ingredients and updates all related data in real-time.\r
\r
## Business Value: Dual Enhancement of Efficiency and Experience\r
\r
### Operational Efficiency Improvements:\r
- Front-to-back-of-house communication time decreased by 70%\r
- Order cancellations due to ingredient shortages dropped to near zero\r
\r
### Waste Reduction:\r
- Approximately 30% reduction in ingredient waste\r
- More precise purchasing plans\r
\r
## Technical Philosophy\r
\r
1. **Real-Time Response Architecture**: Advanced data synchronization ensures instant reflection of any changes\r
2. **Intelligent Threshold Calculation**: Dynamically adjusts inventory alerts\r
3. **Predictive Analytics**: AI engine learns sales patterns to forecast demand\r
\r
## User Stories\r
\r
### Scenario 1: Busy Weekend Mornings\r
System displays real-time available quantities for each drink, allowing staff to immediately confirm order feasibility.\r
\r
### Scenario 2: Seasonal Menu Transitions\r
Automatically identifies new ingredient requirements when launching seasonal drinks.\r
\r
## Future Vision\r
\r
We're exploring:\r
- Deeper integration with supplier systems\r
- IoT applications for inventory monitoring\r
- Real-time data-driven dynamic menu optimization\r
\r
## Conclusion\r
\r
KafeAI's smart inventory system has liberated us from tedious inventory management, allowing focus on delivering exceptional coffee experiences. Intelligent inventory management is no longer a luxury but a competitive necessity.\r
---\r
\r
**Want to experience how AI can transform your coffee shop operations?**\r
\r
🔗 **Visit kafeAI.tech to start your free trial**  \r
🎯 **Designed specifically for coffee shop owners**  \r
📱 **Works on mobile and desktop, manage your coffee shop anytime, anywhere**\r
\r
*Let's work together to use AI's power to make every cup of coffee warmer and every coffee shop smarter.*\r
\r
**#CoffeeShopManagement #AISmartManagement #kafeAI #SmallBusinessDigitization #CoffeeEntrepreneurship**`;var buffer={},base64Js={},hasRequiredBase64Js;function requireBase64Js(){if(hasRequiredBase64Js)return base64Js;hasRequiredBase64Js=1,base64Js.byteLength=A,base64Js.toByteArray=Y,base64Js.fromByteArray=tt;for(var i=[],l=[],x=typeof Uint8Array<"u"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,k=u.length;c<k;++c)i[c]=u[c],l[u.charCodeAt(c)]=c;l[45]=62,l[95]=63;function T(it){var lt=it.length;if(lt%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var pt=it.indexOf("=");pt===-1&&(pt=lt);var xt=pt===lt?0:4-pt%4;return[pt,xt]}function A(it){var lt=T(it),pt=lt[0],xt=lt[1];return(pt+xt)*3/4-xt}function Z(it,lt,pt){return(lt+pt)*3/4-pt}function Y(it){var lt,pt=T(it),xt=pt[0],At=pt[1],Tt=new x(Z(it,xt,At)),Dt=0,Ut=At>0?xt-4:xt,Mt;for(Mt=0;Mt<Ut;Mt+=4)lt=l[it.charCodeAt(Mt)]<<18|l[it.charCodeAt(Mt+1)]<<12|l[it.charCodeAt(Mt+2)]<<6|l[it.charCodeAt(Mt+3)],Tt[Dt++]=lt>>16&255,Tt[Dt++]=lt>>8&255,Tt[Dt++]=lt&255;return At===2&&(lt=l[it.charCodeAt(Mt)]<<2|l[it.charCodeAt(Mt+1)]>>4,Tt[Dt++]=lt&255),At===1&&(lt=l[it.charCodeAt(Mt)]<<10|l[it.charCodeAt(Mt+1)]<<4|l[it.charCodeAt(Mt+2)]>>2,Tt[Dt++]=lt>>8&255,Tt[Dt++]=lt&255),Tt}function te(it){return i[it>>18&63]+i[it>>12&63]+i[it>>6&63]+i[it&63]}function Ye(it,lt,pt){for(var xt,At=[],Tt=lt;Tt<pt;Tt+=3)xt=(it[Tt]<<16&16711680)+(it[Tt+1]<<8&65280)+(it[Tt+2]&255),At.push(te(xt));return At.join("")}function tt(it){for(var lt,pt=it.length,xt=pt%3,At=[],Tt=16383,Dt=0,Ut=pt-xt;Dt<Ut;Dt+=Tt)At.push(Ye(it,Dt,Dt+Tt>Ut?Ut:Dt+Tt));return xt===1?(lt=it[pt-1],At.push(i[lt>>2]+i[lt<<4&63]+"==")):xt===2&&(lt=(it[pt-2]<<8)+it[pt-1],At.push(i[lt>>10]+i[lt>>4&63]+i[lt<<2&63]+"=")),At.join("")}return base64Js}var ieee754={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var hasRequiredIeee754;function requireIeee754(){return hasRequiredIeee754||(hasRequiredIeee754=1,ieee754.read=function(i,l,x,u,c){var k,T,A=c*8-u-1,Z=(1<<A)-1,Y=Z>>1,te=-7,Ye=x?c-1:0,tt=x?-1:1,it=i[l+Ye];for(Ye+=tt,k=it&(1<<-te)-1,it>>=-te,te+=A;te>0;k=k*256+i[l+Ye],Ye+=tt,te-=8);for(T=k&(1<<-te)-1,k>>=-te,te+=u;te>0;T=T*256+i[l+Ye],Ye+=tt,te-=8);if(k===0)k=1-Y;else{if(k===Z)return T?NaN:(it?-1:1)*(1/0);T=T+Math.pow(2,u),k=k-Y}return(it?-1:1)*T*Math.pow(2,k-u)},ieee754.write=function(i,l,x,u,c,k){var T,A,Z,Y=k*8-c-1,te=(1<<Y)-1,Ye=te>>1,tt=c===23?Math.pow(2,-24)-Math.pow(2,-77):0,it=u?0:k-1,lt=u?1:-1,pt=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(A=isNaN(l)?1:0,T=te):(T=Math.floor(Math.log(l)/Math.LN2),l*(Z=Math.pow(2,-T))<1&&(T--,Z*=2),T+Ye>=1?l+=tt/Z:l+=tt*Math.pow(2,1-Ye),l*Z>=2&&(T++,Z/=2),T+Ye>=te?(A=0,T=te):T+Ye>=1?(A=(l*Z-1)*Math.pow(2,c),T=T+Ye):(A=l*Math.pow(2,Ye-1)*Math.pow(2,c),T=0));c>=8;i[x+it]=A&255,it+=lt,A/=256,c-=8);for(T=T<<c|A,Y+=c;Y>0;i[x+it]=T&255,it+=lt,T/=256,Y-=8);i[x+it-lt]|=pt*128}),ieee754}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var hasRequiredBuffer;function requireBuffer(){return hasRequiredBuffer||(hasRequiredBuffer=1,(function(i){const l=requireBase64Js(),x=requireIeee754(),u=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.Buffer=A,i.SlowBuffer=Tt,i.INSPECT_MAX_BYTES=50;const c=2147483647;i.kMaxLength=c,A.TYPED_ARRAY_SUPPORT=k(),!A.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function k(){try{const ee=new Uint8Array(1),s={foo:function(){return 42}};return Object.setPrototypeOf(s,Uint8Array.prototype),Object.setPrototypeOf(ee,s),ee.foo()===42}catch{return!1}}Object.defineProperty(A.prototype,"parent",{enumerable:!0,get:function(){if(A.isBuffer(this))return this.buffer}}),Object.defineProperty(A.prototype,"offset",{enumerable:!0,get:function(){if(A.isBuffer(this))return this.byteOffset}});function T(ee){if(ee>c)throw new RangeError('The value "'+ee+'" is invalid for option "size"');const s=new Uint8Array(ee);return Object.setPrototypeOf(s,A.prototype),s}function A(ee,s,g){if(typeof ee=="number"){if(typeof s=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Ye(ee)}return Z(ee,s,g)}A.poolSize=8192;function Z(ee,s,g){if(typeof ee=="string")return tt(ee,s);if(ArrayBuffer.isView(ee))return lt(ee);if(ee==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee);if(zn(ee,ArrayBuffer)||ee&&zn(ee.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(zn(ee,SharedArrayBuffer)||ee&&zn(ee.buffer,SharedArrayBuffer)))return pt(ee,s,g);if(typeof ee=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const p=ee.valueOf&&ee.valueOf();if(p!=null&&p!==ee)return A.from(p,s,g);const me=xt(ee);if(me)return me;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof ee[Symbol.toPrimitive]=="function")return A.from(ee[Symbol.toPrimitive]("string"),s,g);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof ee)}A.from=function(ee,s,g){return Z(ee,s,g)},Object.setPrototypeOf(A.prototype,Uint8Array.prototype),Object.setPrototypeOf(A,Uint8Array);function Y(ee){if(typeof ee!="number")throw new TypeError('"size" argument must be of type number');if(ee<0)throw new RangeError('The value "'+ee+'" is invalid for option "size"')}function te(ee,s,g){return Y(ee),ee<=0?T(ee):s!==void 0?typeof g=="string"?T(ee).fill(s,g):T(ee).fill(s):T(ee)}A.alloc=function(ee,s,g){return te(ee,s,g)};function Ye(ee){return Y(ee),T(ee<0?0:At(ee)|0)}A.allocUnsafe=function(ee){return Ye(ee)},A.allocUnsafeSlow=function(ee){return Ye(ee)};function tt(ee,s){if((typeof s!="string"||s==="")&&(s="utf8"),!A.isEncoding(s))throw new TypeError("Unknown encoding: "+s);const g=Dt(ee,s)|0;let p=T(g);const me=p.write(ee,s);return me!==g&&(p=p.slice(0,me)),p}function it(ee){const s=ee.length<0?0:At(ee.length)|0,g=T(s);for(let p=0;p<s;p+=1)g[p]=ee[p]&255;return g}function lt(ee){if(zn(ee,Uint8Array)){const s=new Uint8Array(ee);return pt(s.buffer,s.byteOffset,s.byteLength)}return it(ee)}function pt(ee,s,g){if(s<0||ee.byteLength<s)throw new RangeError('"offset" is outside of buffer bounds');if(ee.byteLength<s+(g||0))throw new RangeError('"length" is outside of buffer bounds');let p;return s===void 0&&g===void 0?p=new Uint8Array(ee):g===void 0?p=new Uint8Array(ee,s):p=new Uint8Array(ee,s,g),Object.setPrototypeOf(p,A.prototype),p}function xt(ee){if(A.isBuffer(ee)){const s=At(ee.length)|0,g=T(s);return g.length===0||ee.copy(g,0,0,s),g}if(ee.length!==void 0)return typeof ee.length!="number"||Sr(ee.length)?T(0):it(ee);if(ee.type==="Buffer"&&Array.isArray(ee.data))return it(ee.data)}function At(ee){if(ee>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return ee|0}function Tt(ee){return+ee!=ee&&(ee=0),A.alloc(+ee)}A.isBuffer=function(s){return s!=null&&s._isBuffer===!0&&s!==A.prototype},A.compare=function(s,g){if(zn(s,Uint8Array)&&(s=A.from(s,s.offset,s.byteLength)),zn(g,Uint8Array)&&(g=A.from(g,g.offset,g.byteLength)),!A.isBuffer(s)||!A.isBuffer(g))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(s===g)return 0;let p=s.length,me=g.length;for(let Ve=0,rt=Math.min(p,me);Ve<rt;++Ve)if(s[Ve]!==g[Ve]){p=s[Ve],me=g[Ve];break}return p<me?-1:me<p?1:0},A.isEncoding=function(s){switch(String(s).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},A.concat=function(s,g){if(!Array.isArray(s))throw new TypeError('"list" argument must be an Array of Buffers');if(s.length===0)return A.alloc(0);let p;if(g===void 0)for(g=0,p=0;p<s.length;++p)g+=s[p].length;const me=A.allocUnsafe(g);let Ve=0;for(p=0;p<s.length;++p){let rt=s[p];if(zn(rt,Uint8Array))Ve+rt.length>me.length?(A.isBuffer(rt)||(rt=A.from(rt)),rt.copy(me,Ve)):Uint8Array.prototype.set.call(me,rt,Ve);else if(A.isBuffer(rt))rt.copy(me,Ve);else throw new TypeError('"list" argument must be an Array of Buffers');Ve+=rt.length}return me};function Dt(ee,s){if(A.isBuffer(ee))return ee.length;if(ArrayBuffer.isView(ee)||zn(ee,ArrayBuffer))return ee.byteLength;if(typeof ee!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof ee);const g=ee.length,p=arguments.length>2&&arguments[2]===!0;if(!p&&g===0)return 0;let me=!1;for(;;)switch(s){case"ascii":case"latin1":case"binary":return g;case"utf8":case"utf-8":return gn(ee).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return g*2;case"hex":return g>>>1;case"base64":return br(ee).length;default:if(me)return p?-1:gn(ee).length;s=(""+s).toLowerCase(),me=!0}}A.byteLength=Dt;function Ut(ee,s,g){let p=!1;if((s===void 0||s<0)&&(s=0),s>this.length||((g===void 0||g>this.length)&&(g=this.length),g<=0)||(g>>>=0,s>>>=0,g<=s))return"";for(ee||(ee="utf8");;)switch(ee){case"hex":return Jt(this,s,g);case"utf8":case"utf-8":return Wt(this,s,g);case"ascii":return yt(this,s,g);case"latin1":case"binary":return qt(this,s,g);case"base64":return Hn(this,s,g);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return nt(this,s,g);default:if(p)throw new TypeError("Unknown encoding: "+ee);ee=(ee+"").toLowerCase(),p=!0}}A.prototype._isBuffer=!0;function Mt(ee,s,g){const p=ee[s];ee[s]=ee[g],ee[g]=p}A.prototype.swap16=function(){const s=this.length;if(s%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<s;g+=2)Mt(this,g,g+1);return this},A.prototype.swap32=function(){const s=this.length;if(s%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<s;g+=4)Mt(this,g,g+3),Mt(this,g+1,g+2);return this},A.prototype.swap64=function(){const s=this.length;if(s%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<s;g+=8)Mt(this,g,g+7),Mt(this,g+1,g+6),Mt(this,g+2,g+5),Mt(this,g+3,g+4);return this},A.prototype.toString=function(){const s=this.length;return s===0?"":arguments.length===0?Wt(this,0,s):Ut.apply(this,arguments)},A.prototype.toLocaleString=A.prototype.toString,A.prototype.equals=function(s){if(!A.isBuffer(s))throw new TypeError("Argument must be a Buffer");return this===s?!0:A.compare(this,s)===0},A.prototype.inspect=function(){let s="";const g=i.INSPECT_MAX_BYTES;return s=this.toString("hex",0,g).replace(/(.{2})/g,"$1 ").trim(),this.length>g&&(s+=" ... "),"<Buffer "+s+">"},u&&(A.prototype[u]=A.prototype.inspect),A.prototype.compare=function(s,g,p,me,Ve){if(zn(s,Uint8Array)&&(s=A.from(s,s.offset,s.byteLength)),!A.isBuffer(s))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof s);if(g===void 0&&(g=0),p===void 0&&(p=s?s.length:0),me===void 0&&(me=0),Ve===void 0&&(Ve=this.length),g<0||p>s.length||me<0||Ve>this.length)throw new RangeError("out of range index");if(me>=Ve&&g>=p)return 0;if(me>=Ve)return-1;if(g>=p)return 1;if(g>>>=0,p>>>=0,me>>>=0,Ve>>>=0,this===s)return 0;let rt=Ve-me,mt=p-g;const dt=Math.min(rt,mt),_t=this.slice(me,Ve),gt=s.slice(g,p);for(let Ct=0;Ct<dt;++Ct)if(_t[Ct]!==gt[Ct]){rt=_t[Ct],mt=gt[Ct];break}return rt<mt?-1:mt<rt?1:0};function Vt(ee,s,g,p,me){if(ee.length===0)return-1;if(typeof g=="string"?(p=g,g=0):g>2147483647?g=2147483647:g<-2147483648&&(g=-2147483648),g=+g,Sr(g)&&(g=me?0:ee.length-1),g<0&&(g=ee.length+g),g>=ee.length){if(me)return-1;g=ee.length-1}else if(g<0)if(me)g=0;else return-1;if(typeof s=="string"&&(s=A.from(s,p)),A.isBuffer(s))return s.length===0?-1:Zt(ee,s,g,p,me);if(typeof s=="number")return s=s&255,typeof Uint8Array.prototype.indexOf=="function"?me?Uint8Array.prototype.indexOf.call(ee,s,g):Uint8Array.prototype.lastIndexOf.call(ee,s,g):Zt(ee,[s],g,p,me);throw new TypeError("val must be string, number or Buffer")}function Zt(ee,s,g,p,me){let Ve=1,rt=ee.length,mt=s.length;if(p!==void 0&&(p=String(p).toLowerCase(),p==="ucs2"||p==="ucs-2"||p==="utf16le"||p==="utf-16le")){if(ee.length<2||s.length<2)return-1;Ve=2,rt/=2,mt/=2,g/=2}function dt(gt,Ct){return Ve===1?gt[Ct]:gt.readUInt16BE(Ct*Ve)}let _t;if(me){let gt=-1;for(_t=g;_t<rt;_t++)if(dt(ee,_t)===dt(s,gt===-1?0:_t-gt)){if(gt===-1&&(gt=_t),_t-gt+1===mt)return gt*Ve}else gt!==-1&&(_t-=_t-gt),gt=-1}else for(g+mt>rt&&(g=rt-mt),_t=g;_t>=0;_t--){let gt=!0;for(let Ct=0;Ct<mt;Ct++)if(dt(ee,_t+Ct)!==dt(s,Ct)){gt=!1;break}if(gt)return _t}return-1}A.prototype.includes=function(s,g,p){return this.indexOf(s,g,p)!==-1},A.prototype.indexOf=function(s,g,p){return Vt(this,s,g,p,!0)},A.prototype.lastIndexOf=function(s,g,p){return Vt(this,s,g,p,!1)};function an(ee,s,g,p){g=Number(g)||0;const me=ee.length-g;p?(p=Number(p),p>me&&(p=me)):p=me;const Ve=s.length;p>Ve/2&&(p=Ve/2);let rt;for(rt=0;rt<p;++rt){const mt=parseInt(s.substr(rt*2,2),16);if(Sr(mt))return rt;ee[g+rt]=mt}return rt}function tn(ee,s,g,p){return Pn(gn(s,ee.length-g),ee,g,p)}function _n(ee,s,g,p){return Pn(Pr(s),ee,g,p)}function Tn(ee,s,g,p){return Pn(br(s),ee,g,p)}function pn(ee,s,g,p){return Pn(Tr(s,ee.length-g),ee,g,p)}A.prototype.write=function(s,g,p,me){if(g===void 0)me="utf8",p=this.length,g=0;else if(p===void 0&&typeof g=="string")me=g,p=this.length,g=0;else if(isFinite(g))g=g>>>0,isFinite(p)?(p=p>>>0,me===void 0&&(me="utf8")):(me=p,p=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const Ve=this.length-g;if((p===void 0||p>Ve)&&(p=Ve),s.length>0&&(p<0||g<0)||g>this.length)throw new RangeError("Attempt to write outside buffer bounds");me||(me="utf8");let rt=!1;for(;;)switch(me){case"hex":return an(this,s,g,p);case"utf8":case"utf-8":return tn(this,s,g,p);case"ascii":case"latin1":case"binary":return _n(this,s,g,p);case"base64":return Tn(this,s,g,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pn(this,s,g,p);default:if(rt)throw new TypeError("Unknown encoding: "+me);me=(""+me).toLowerCase(),rt=!0}},A.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Hn(ee,s,g){return s===0&&g===ee.length?l.fromByteArray(ee):l.fromByteArray(ee.slice(s,g))}function Wt(ee,s,g){g=Math.min(ee.length,g);const p=[];let me=s;for(;me<g;){const Ve=ee[me];let rt=null,mt=Ve>239?4:Ve>223?3:Ve>191?2:1;if(me+mt<=g){let dt,_t,gt,Ct;switch(mt){case 1:Ve<128&&(rt=Ve);break;case 2:dt=ee[me+1],(dt&192)===128&&(Ct=(Ve&31)<<6|dt&63,Ct>127&&(rt=Ct));break;case 3:dt=ee[me+1],_t=ee[me+2],(dt&192)===128&&(_t&192)===128&&(Ct=(Ve&15)<<12|(dt&63)<<6|_t&63,Ct>2047&&(Ct<55296||Ct>57343)&&(rt=Ct));break;case 4:dt=ee[me+1],_t=ee[me+2],gt=ee[me+3],(dt&192)===128&&(_t&192)===128&&(gt&192)===128&&(Ct=(Ve&15)<<18|(dt&63)<<12|(_t&63)<<6|gt&63,Ct>65535&&Ct<1114112&&(rt=Ct))}}rt===null?(rt=65533,mt=1):rt>65535&&(rt-=65536,p.push(rt>>>10&1023|55296),rt=56320|rt&1023),p.push(rt),me+=mt}return vt(p)}const mn=4096;function vt(ee){const s=ee.length;if(s<=mn)return String.fromCharCode.apply(String,ee);let g="",p=0;for(;p<s;)g+=String.fromCharCode.apply(String,ee.slice(p,p+=mn));return g}function yt(ee,s,g){let p="";g=Math.min(ee.length,g);for(let me=s;me<g;++me)p+=String.fromCharCode(ee[me]&127);return p}function qt(ee,s,g){let p="";g=Math.min(ee.length,g);for(let me=s;me<g;++me)p+=String.fromCharCode(ee[me]);return p}function Jt(ee,s,g){const p=ee.length;(!s||s<0)&&(s=0),(!g||g<0||g>p)&&(g=p);let me="";for(let Ve=s;Ve<g;++Ve)me+=f[ee[Ve]];return me}function nt(ee,s,g){const p=ee.slice(s,g);let me="";for(let Ve=0;Ve<p.length-1;Ve+=2)me+=String.fromCharCode(p[Ve]+p[Ve+1]*256);return me}A.prototype.slice=function(s,g){const p=this.length;s=~~s,g=g===void 0?p:~~g,s<0?(s+=p,s<0&&(s=0)):s>p&&(s=p),g<0?(g+=p,g<0&&(g=0)):g>p&&(g=p),g<s&&(g=s);const me=this.subarray(s,g);return Object.setPrototypeOf(me,A.prototype),me};function bt(ee,s,g){if(ee%1!==0||ee<0)throw new RangeError("offset is not uint");if(ee+s>g)throw new RangeError("Trying to access beyond buffer length")}A.prototype.readUintLE=A.prototype.readUIntLE=function(s,g,p){s=s>>>0,g=g>>>0,p||bt(s,g,this.length);let me=this[s],Ve=1,rt=0;for(;++rt<g&&(Ve*=256);)me+=this[s+rt]*Ve;return me},A.prototype.readUintBE=A.prototype.readUIntBE=function(s,g,p){s=s>>>0,g=g>>>0,p||bt(s,g,this.length);let me=this[s+--g],Ve=1;for(;g>0&&(Ve*=256);)me+=this[s+--g]*Ve;return me},A.prototype.readUint8=A.prototype.readUInt8=function(s,g){return s=s>>>0,g||bt(s,1,this.length),this[s]},A.prototype.readUint16LE=A.prototype.readUInt16LE=function(s,g){return s=s>>>0,g||bt(s,2,this.length),this[s]|this[s+1]<<8},A.prototype.readUint16BE=A.prototype.readUInt16BE=function(s,g){return s=s>>>0,g||bt(s,2,this.length),this[s]<<8|this[s+1]},A.prototype.readUint32LE=A.prototype.readUInt32LE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),(this[s]|this[s+1]<<8|this[s+2]<<16)+this[s+3]*16777216},A.prototype.readUint32BE=A.prototype.readUInt32BE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),this[s]*16777216+(this[s+1]<<16|this[s+2]<<8|this[s+3])},A.prototype.readBigUInt64LE=ct(function(s){s=s>>>0,Gn(s,"offset");const g=this[s],p=this[s+7];(g===void 0||p===void 0)&&Jn(s,this.length-8);const me=g+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24,Ve=this[++s]+this[++s]*2**8+this[++s]*2**16+p*2**24;return BigInt(me)+(BigInt(Ve)<<BigInt(32))}),A.prototype.readBigUInt64BE=ct(function(s){s=s>>>0,Gn(s,"offset");const g=this[s],p=this[s+7];(g===void 0||p===void 0)&&Jn(s,this.length-8);const me=g*2**24+this[++s]*2**16+this[++s]*2**8+this[++s],Ve=this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+p;return(BigInt(me)<<BigInt(32))+BigInt(Ve)}),A.prototype.readIntLE=function(s,g,p){s=s>>>0,g=g>>>0,p||bt(s,g,this.length);let me=this[s],Ve=1,rt=0;for(;++rt<g&&(Ve*=256);)me+=this[s+rt]*Ve;return Ve*=128,me>=Ve&&(me-=Math.pow(2,8*g)),me},A.prototype.readIntBE=function(s,g,p){s=s>>>0,g=g>>>0,p||bt(s,g,this.length);let me=g,Ve=1,rt=this[s+--me];for(;me>0&&(Ve*=256);)rt+=this[s+--me]*Ve;return Ve*=128,rt>=Ve&&(rt-=Math.pow(2,8*g)),rt},A.prototype.readInt8=function(s,g){return s=s>>>0,g||bt(s,1,this.length),this[s]&128?(255-this[s]+1)*-1:this[s]},A.prototype.readInt16LE=function(s,g){s=s>>>0,g||bt(s,2,this.length);const p=this[s]|this[s+1]<<8;return p&32768?p|4294901760:p},A.prototype.readInt16BE=function(s,g){s=s>>>0,g||bt(s,2,this.length);const p=this[s+1]|this[s]<<8;return p&32768?p|4294901760:p},A.prototype.readInt32LE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),this[s]|this[s+1]<<8|this[s+2]<<16|this[s+3]<<24},A.prototype.readInt32BE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),this[s]<<24|this[s+1]<<16|this[s+2]<<8|this[s+3]},A.prototype.readBigInt64LE=ct(function(s){s=s>>>0,Gn(s,"offset");const g=this[s],p=this[s+7];(g===void 0||p===void 0)&&Jn(s,this.length-8);const me=this[s+4]+this[s+5]*2**8+this[s+6]*2**16+(p<<24);return(BigInt(me)<<BigInt(32))+BigInt(g+this[++s]*2**8+this[++s]*2**16+this[++s]*2**24)}),A.prototype.readBigInt64BE=ct(function(s){s=s>>>0,Gn(s,"offset");const g=this[s],p=this[s+7];(g===void 0||p===void 0)&&Jn(s,this.length-8);const me=(g<<24)+this[++s]*2**16+this[++s]*2**8+this[++s];return(BigInt(me)<<BigInt(32))+BigInt(this[++s]*2**24+this[++s]*2**16+this[++s]*2**8+p)}),A.prototype.readFloatLE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),x.read(this,s,!0,23,4)},A.prototype.readFloatBE=function(s,g){return s=s>>>0,g||bt(s,4,this.length),x.read(this,s,!1,23,4)},A.prototype.readDoubleLE=function(s,g){return s=s>>>0,g||bt(s,8,this.length),x.read(this,s,!0,52,8)},A.prototype.readDoubleBE=function(s,g){return s=s>>>0,g||bt(s,8,this.length),x.read(this,s,!1,52,8)};function kt(ee,s,g,p,me,Ve){if(!A.isBuffer(ee))throw new TypeError('"buffer" argument must be a Buffer instance');if(s>me||s<Ve)throw new RangeError('"value" argument is out of bounds');if(g+p>ee.length)throw new RangeError("Index out of range")}A.prototype.writeUintLE=A.prototype.writeUIntLE=function(s,g,p,me){if(s=+s,g=g>>>0,p=p>>>0,!me){const mt=Math.pow(2,8*p)-1;kt(this,s,g,p,mt,0)}let Ve=1,rt=0;for(this[g]=s&255;++rt<p&&(Ve*=256);)this[g+rt]=s/Ve&255;return g+p},A.prototype.writeUintBE=A.prototype.writeUIntBE=function(s,g,p,me){if(s=+s,g=g>>>0,p=p>>>0,!me){const mt=Math.pow(2,8*p)-1;kt(this,s,g,p,mt,0)}let Ve=p-1,rt=1;for(this[g+Ve]=s&255;--Ve>=0&&(rt*=256);)this[g+Ve]=s/rt&255;return g+p},A.prototype.writeUint8=A.prototype.writeUInt8=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,1,255,0),this[g]=s&255,g+1},A.prototype.writeUint16LE=A.prototype.writeUInt16LE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,2,65535,0),this[g]=s&255,this[g+1]=s>>>8,g+2},A.prototype.writeUint16BE=A.prototype.writeUInt16BE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,2,65535,0),this[g]=s>>>8,this[g+1]=s&255,g+2},A.prototype.writeUint32LE=A.prototype.writeUInt32LE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,4,4294967295,0),this[g+3]=s>>>24,this[g+2]=s>>>16,this[g+1]=s>>>8,this[g]=s&255,g+4},A.prototype.writeUint32BE=A.prototype.writeUInt32BE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,4,4294967295,0),this[g]=s>>>24,this[g+1]=s>>>16,this[g+2]=s>>>8,this[g+3]=s&255,g+4};function Ot(ee,s,g,p,me){Yn(s,p,me,ee,g,7);let Ve=Number(s&BigInt(4294967295));ee[g++]=Ve,Ve=Ve>>8,ee[g++]=Ve,Ve=Ve>>8,ee[g++]=Ve,Ve=Ve>>8,ee[g++]=Ve;let rt=Number(s>>BigInt(32)&BigInt(4294967295));return ee[g++]=rt,rt=rt>>8,ee[g++]=rt,rt=rt>>8,ee[g++]=rt,rt=rt>>8,ee[g++]=rt,g}function Nt(ee,s,g,p,me){Yn(s,p,me,ee,g,7);let Ve=Number(s&BigInt(4294967295));ee[g+7]=Ve,Ve=Ve>>8,ee[g+6]=Ve,Ve=Ve>>8,ee[g+5]=Ve,Ve=Ve>>8,ee[g+4]=Ve;let rt=Number(s>>BigInt(32)&BigInt(4294967295));return ee[g+3]=rt,rt=rt>>8,ee[g+2]=rt,rt=rt>>8,ee[g+1]=rt,rt=rt>>8,ee[g]=rt,g+8}A.prototype.writeBigUInt64LE=ct(function(s,g=0){return Ot(this,s,g,BigInt(0),BigInt("0xffffffffffffffff"))}),A.prototype.writeBigUInt64BE=ct(function(s,g=0){return Nt(this,s,g,BigInt(0),BigInt("0xffffffffffffffff"))}),A.prototype.writeIntLE=function(s,g,p,me){if(s=+s,g=g>>>0,!me){const dt=Math.pow(2,8*p-1);kt(this,s,g,p,dt-1,-dt)}let Ve=0,rt=1,mt=0;for(this[g]=s&255;++Ve<p&&(rt*=256);)s<0&&mt===0&&this[g+Ve-1]!==0&&(mt=1),this[g+Ve]=(s/rt>>0)-mt&255;return g+p},A.prototype.writeIntBE=function(s,g,p,me){if(s=+s,g=g>>>0,!me){const dt=Math.pow(2,8*p-1);kt(this,s,g,p,dt-1,-dt)}let Ve=p-1,rt=1,mt=0;for(this[g+Ve]=s&255;--Ve>=0&&(rt*=256);)s<0&&mt===0&&this[g+Ve+1]!==0&&(mt=1),this[g+Ve]=(s/rt>>0)-mt&255;return g+p},A.prototype.writeInt8=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,1,127,-128),s<0&&(s=255+s+1),this[g]=s&255,g+1},A.prototype.writeInt16LE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,2,32767,-32768),this[g]=s&255,this[g+1]=s>>>8,g+2},A.prototype.writeInt16BE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,2,32767,-32768),this[g]=s>>>8,this[g+1]=s&255,g+2},A.prototype.writeInt32LE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,4,2147483647,-2147483648),this[g]=s&255,this[g+1]=s>>>8,this[g+2]=s>>>16,this[g+3]=s>>>24,g+4},A.prototype.writeInt32BE=function(s,g,p){return s=+s,g=g>>>0,p||kt(this,s,g,4,2147483647,-2147483648),s<0&&(s=4294967295+s+1),this[g]=s>>>24,this[g+1]=s>>>16,this[g+2]=s>>>8,this[g+3]=s&255,g+4},A.prototype.writeBigInt64LE=ct(function(s,g=0){return Ot(this,s,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),A.prototype.writeBigInt64BE=ct(function(s,g=0){return Nt(this,s,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Gt(ee,s,g,p,me,Ve){if(g+p>ee.length)throw new RangeError("Index out of range");if(g<0)throw new RangeError("Index out of range")}function zt(ee,s,g,p,me){return s=+s,g=g>>>0,me||Gt(ee,s,g,4),x.write(ee,s,g,p,23,4),g+4}A.prototype.writeFloatLE=function(s,g,p){return zt(this,s,g,!0,p)},A.prototype.writeFloatBE=function(s,g,p){return zt(this,s,g,!1,p)};function Sn(ee,s,g,p,me){return s=+s,g=g>>>0,me||Gt(ee,s,g,8),x.write(ee,s,g,p,52,8),g+8}A.prototype.writeDoubleLE=function(s,g,p){return Sn(this,s,g,!0,p)},A.prototype.writeDoubleBE=function(s,g,p){return Sn(this,s,g,!1,p)},A.prototype.copy=function(s,g,p,me){if(!A.isBuffer(s))throw new TypeError("argument should be a Buffer");if(p||(p=0),!me&&me!==0&&(me=this.length),g>=s.length&&(g=s.length),g||(g=0),me>0&&me<p&&(me=p),me===p||s.length===0||this.length===0)return 0;if(g<0)throw new RangeError("targetStart out of bounds");if(p<0||p>=this.length)throw new RangeError("Index out of range");if(me<0)throw new RangeError("sourceEnd out of bounds");me>this.length&&(me=this.length),s.length-g<me-p&&(me=s.length-g+p);const Ve=me-p;return this===s&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(g,p,me):Uint8Array.prototype.set.call(s,this.subarray(p,me),g),Ve},A.prototype.fill=function(s,g,p,me){if(typeof s=="string"){if(typeof g=="string"?(me=g,g=0,p=this.length):typeof p=="string"&&(me=p,p=this.length),me!==void 0&&typeof me!="string")throw new TypeError("encoding must be a string");if(typeof me=="string"&&!A.isEncoding(me))throw new TypeError("Unknown encoding: "+me);if(s.length===1){const rt=s.charCodeAt(0);(me==="utf8"&&rt<128||me==="latin1")&&(s=rt)}}else typeof s=="number"?s=s&255:typeof s=="boolean"&&(s=Number(s));if(g<0||this.length<g||this.length<p)throw new RangeError("Out of range index");if(p<=g)return this;g=g>>>0,p=p===void 0?this.length:p>>>0,s||(s=0);let Ve;if(typeof s=="number")for(Ve=g;Ve<p;++Ve)this[Ve]=s;else{const rt=A.isBuffer(s)?s:A.from(s,me),mt=rt.length;if(mt===0)throw new TypeError('The value "'+s+'" is invalid for argument "value"');for(Ve=0;Ve<p-g;++Ve)this[Ve+g]=rt[Ve%mt]}return this};const $t={};function Bn(ee,s,g){$t[ee]=class extends g{constructor(){super(),Object.defineProperty(this,"message",{value:s.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${ee}]`,this.stack,delete this.name}get code(){return ee}set code(me){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:me,writable:!0})}toString(){return`${this.name} [${ee}]: ${this.message}`}}}Bn("ERR_BUFFER_OUT_OF_BOUNDS",function(ee){return ee?`${ee} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Bn("ERR_INVALID_ARG_TYPE",function(ee,s){return`The "${ee}" argument must be of type number. Received type ${typeof s}`},TypeError),Bn("ERR_OUT_OF_RANGE",function(ee,s,g){let p=`The value of "${ee}" is out of range.`,me=g;return Number.isInteger(g)&&Math.abs(g)>2**32?me=mr(String(g)):typeof g=="bigint"&&(me=String(g),(g>BigInt(2)**BigInt(32)||g<-(BigInt(2)**BigInt(32)))&&(me=mr(me)),me+="n"),p+=` It must be ${s}. Received ${me}`,p},RangeError);function mr(ee){let s="",g=ee.length;const p=ee[0]==="-"?1:0;for(;g>=p+4;g-=3)s=`_${ee.slice(g-3,g)}${s}`;return`${ee.slice(0,g)}${s}`}function gr(ee,s,g){Gn(s,"offset"),(ee[s]===void 0||ee[s+g]===void 0)&&Jn(s,ee.length-(g+1))}function Yn(ee,s,g,p,me,Ve){if(ee>g||ee<s){const rt=typeof s=="bigint"?"n":"";let mt;throw s===0||s===BigInt(0)?mt=`>= 0${rt} and < 2${rt} ** ${(Ve+1)*8}${rt}`:mt=`>= -(2${rt} ** ${(Ve+1)*8-1}${rt}) and < 2 ** ${(Ve+1)*8-1}${rt}`,new $t.ERR_OUT_OF_RANGE("value",mt,ee)}gr(p,me,Ve)}function Gn(ee,s){if(typeof ee!="number")throw new $t.ERR_INVALID_ARG_TYPE(s,"number",ee)}function Jn(ee,s,g){throw Math.floor(ee)!==ee?(Gn(ee,g),new $t.ERR_OUT_OF_RANGE("offset","an integer",ee)):s<0?new $t.ERR_BUFFER_OUT_OF_BOUNDS:new $t.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${s}`,ee)}const Yr=/[^+/0-9A-Za-z-_]/g;function Gr(ee){if(ee=ee.split("=")[0],ee=ee.trim().replace(Yr,""),ee.length<2)return"";for(;ee.length%4!==0;)ee=ee+"=";return ee}function gn(ee,s){s=s||1/0;let g;const p=ee.length;let me=null;const Ve=[];for(let rt=0;rt<p;++rt){if(g=ee.charCodeAt(rt),g>55295&&g<57344){if(!me){if(g>56319){(s-=3)>-1&&Ve.push(239,191,189);continue}else if(rt+1===p){(s-=3)>-1&&Ve.push(239,191,189);continue}me=g;continue}if(g<56320){(s-=3)>-1&&Ve.push(239,191,189),me=g;continue}g=(me-55296<<10|g-56320)+65536}else me&&(s-=3)>-1&&Ve.push(239,191,189);if(me=null,g<128){if((s-=1)<0)break;Ve.push(g)}else if(g<2048){if((s-=2)<0)break;Ve.push(g>>6|192,g&63|128)}else if(g<65536){if((s-=3)<0)break;Ve.push(g>>12|224,g>>6&63|128,g&63|128)}else if(g<1114112){if((s-=4)<0)break;Ve.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}else throw new Error("Invalid code point")}return Ve}function Pr(ee){const s=[];for(let g=0;g<ee.length;++g)s.push(ee.charCodeAt(g)&255);return s}function Tr(ee,s){let g,p,me;const Ve=[];for(let rt=0;rt<ee.length&&!((s-=2)<0);++rt)g=ee.charCodeAt(rt),p=g>>8,me=g%256,Ve.push(me),Ve.push(p);return Ve}function br(ee){return l.toByteArray(Gr(ee))}function Pn(ee,s,g,p){let me;for(me=0;me<p&&!(me+g>=s.length||me>=ee.length);++me)s[me+g]=ee[me];return me}function zn(ee,s){return ee instanceof s||ee!=null&&ee.constructor!=null&&ee.constructor.name!=null&&ee.constructor.name===s.name}function Sr(ee){return ee!==ee}const f=(function(){const ee="0123456789abcdef",s=new Array(256);for(let g=0;g<16;++g){const p=g*16;for(let me=0;me<16;++me)s[p+me]=ee[g]+ee[me]}return s})();function ct(ee){return typeof BigInt>"u"?Et:ee}function Et(){throw new Error("BigInt not supported")}})(buffer)),buffer}var bufferExports=requireBuffer();const __viteBrowserExternal={},__viteBrowserExternal$1=Object.freeze(Object.defineProperty({__proto__:null,default:__viteBrowserExternal},Symbol.toStringTag,{value:"Module"})),require$$0=getAugmentedNamespace(__viteBrowserExternal$1);var kindOf,hasRequiredKindOf;function requireKindOf(){if(hasRequiredKindOf)return kindOf;hasRequiredKindOf=1;var i=Object.prototype.toString;kindOf=function(Ye){if(Ye===void 0)return"undefined";if(Ye===null)return"null";var tt=typeof Ye;if(tt==="boolean")return"boolean";if(tt==="string")return"string";if(tt==="number")return"number";if(tt==="symbol")return"symbol";if(tt==="function")return T(Ye)?"generatorfunction":"function";if(x(Ye))return"array";if(Y(Ye))return"buffer";if(Z(Ye))return"arguments";if(c(Ye))return"date";if(u(Ye))return"error";if(k(Ye))return"regexp";switch(l(Ye)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(A(Ye))return"generator";switch(tt=i.call(Ye),tt){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return tt.slice(8,-1).toLowerCase().replace(/\s/g,"")};function l(te){return typeof te.constructor=="function"?te.constructor.name:null}function x(te){return Array.isArray?Array.isArray(te):te instanceof Array}function u(te){return te instanceof Error||typeof te.message=="string"&&te.constructor&&typeof te.constructor.stackTraceLimit=="number"}function c(te){return te instanceof Date?!0:typeof te.toDateString=="function"&&typeof te.getDate=="function"&&typeof te.setDate=="function"}function k(te){return te instanceof RegExp?!0:typeof te.flags=="string"&&typeof te.ignoreCase=="boolean"&&typeof te.multiline=="boolean"&&typeof te.global=="boolean"}function T(te,Ye){return l(te)==="GeneratorFunction"}function A(te){return typeof te.throw=="function"&&typeof te.return=="function"&&typeof te.next=="function"}function Z(te){try{if(typeof te.length=="number"&&typeof te.callee=="function")return!0}catch(Ye){if(Ye.message.indexOf("callee")!==-1)return!0}return!1}function Y(te){return te.constructor&&typeof te.constructor.isBuffer=="function"?te.constructor.isBuffer(te):!1}return kindOf}/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var isExtendable,hasRequiredIsExtendable;function requireIsExtendable(){return hasRequiredIsExtendable||(hasRequiredIsExtendable=1,isExtendable=function(l){return typeof l<"u"&&l!==null&&(typeof l=="object"||typeof l=="function")}),isExtendable}var extendShallow,hasRequiredExtendShallow;function requireExtendShallow(){if(hasRequiredExtendShallow)return extendShallow;hasRequiredExtendShallow=1;var i=requireIsExtendable();extendShallow=function(c){i(c)||(c={});for(var k=arguments.length,T=1;T<k;T++){var A=arguments[T];i(A)&&l(c,A)}return c};function l(u,c){for(var k in c)x(c,k)&&(u[k]=c[k])}function x(u,c){return Object.prototype.hasOwnProperty.call(u,c)}return extendShallow}var sectionMatter,hasRequiredSectionMatter;function requireSectionMatter(){if(hasRequiredSectionMatter)return sectionMatter;hasRequiredSectionMatter=1;var i=requireKindOf(),l=requireExtendShallow();sectionMatter=function(Z,Y){typeof Y=="function"&&(Y={parse:Y});var te=u(Z),Ye={section_delimiter:"---",parse:T},tt=l({},Ye,Y),it=tt.section_delimiter,lt=te.content.split(/\r?\n/),pt=null,xt=k(),At=[],Tt=[];function Dt(tn){te.content=tn,pt=[],At=[]}function Ut(tn){Tt.length&&(xt.key=c(Tt[0],it),xt.content=tn,tt.parse(xt,pt),pt.push(xt),xt=k(),At=[],Tt=[])}for(var Mt=0;Mt<lt.length;Mt++){var Vt=lt[Mt],Zt=Tt.length,an=Vt.trim();if(x(an,it)){if(an.length===3&&Mt!==0){if(Zt===0||Zt===2){At.push(Vt);continue}Tt.push(an),xt.data=At.join(`
`),At=[];continue}pt===null&&Dt(At.join(`
`)),Zt===2&&Ut(At.join(`
`)),Tt.push(an);continue}At.push(Vt)}return pt===null?Dt(At.join(`
`)):Ut(At.join(`
`)),te.sections=pt,te};function x(Z,Y){return!(Z.slice(0,Y.length)!==Y||Z.charAt(Y.length+1)===Y.slice(-1))}function u(Z){if(i(Z)!=="object"&&(Z={content:Z}),typeof Z.content!="string"&&!A(Z.content))throw new TypeError("expected a buffer or string");return Z.content=Z.content.toString(),Z.sections=[],Z}function c(Z,Y){return Z?Z.slice(Y.length).trim():""}function k(){return{key:"",data:"",content:""}}function T(Z){return Z}function A(Z){return Z&&Z.constructor&&typeof Z.constructor.isBuffer=="function"?Z.constructor.isBuffer(Z):!1}return sectionMatter}var engines={exports:{}},jsYaml$1={},loader={},common={},hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common;hasRequiredCommon=1;function i(T){return typeof T>"u"||T===null}function l(T){return typeof T=="object"&&T!==null}function x(T){return Array.isArray(T)?T:i(T)?[]:[T]}function u(T,A){var Z,Y,te,Ye;if(A)for(Ye=Object.keys(A),Z=0,Y=Ye.length;Z<Y;Z+=1)te=Ye[Z],T[te]=A[te];return T}function c(T,A){var Z="",Y;for(Y=0;Y<A;Y+=1)Z+=T;return Z}function k(T){return T===0&&Number.NEGATIVE_INFINITY===1/T}return common.isNothing=i,common.isObject=l,common.toArray=x,common.repeat=c,common.isNegativeZero=k,common.extend=u,common}var exception,hasRequiredException;function requireException(){if(hasRequiredException)return exception;hasRequiredException=1;function i(l,x){Error.call(this),this.name="YAMLException",this.reason=l,this.mark=x,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i.prototype.toString=function(x){var u=this.name+": ";return u+=this.reason||"(unknown reason)",!x&&this.mark&&(u+=" "+this.mark.toString()),u},exception=i,exception}var mark,hasRequiredMark;function requireMark(){if(hasRequiredMark)return mark;hasRequiredMark=1;var i=requireCommon();function l(x,u,c,k,T){this.name=x,this.buffer=u,this.position=c,this.line=k,this.column=T}return l.prototype.getSnippet=function(u,c){var k,T,A,Z,Y;if(!this.buffer)return null;for(u=u||4,c=c||75,k="",T=this.position;T>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(T-1))===-1;)if(T-=1,this.position-T>c/2-1){k=" ... ",T+=5;break}for(A="",Z=this.position;Z<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(Z))===-1;)if(Z+=1,Z-this.position>c/2-1){A=" ... ",Z-=5;break}return Y=this.buffer.slice(T,Z),i.repeat(" ",u)+k+Y+A+`
`+i.repeat(" ",u+this.position-T+k.length)+"^"},l.prototype.toString=function(u){var c,k="";return this.name&&(k+='in "'+this.name+'" '),k+="at line "+(this.line+1)+", column "+(this.column+1),u||(c=this.getSnippet(),c&&(k+=`:
`+c)),k},mark=l,mark}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1;var i=requireException(),l=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],x=["scalar","sequence","mapping"];function u(k){var T={};return k!==null&&Object.keys(k).forEach(function(A){k[A].forEach(function(Z){T[String(Z)]=A})}),T}function c(k,T){if(T=T||{},Object.keys(T).forEach(function(A){if(l.indexOf(A)===-1)throw new i('Unknown option "'+A+'" is met in definition of "'+k+'" YAML type.')}),this.tag=k,this.kind=T.kind||null,this.resolve=T.resolve||function(){return!0},this.construct=T.construct||function(A){return A},this.instanceOf=T.instanceOf||null,this.predicate=T.predicate||null,this.represent=T.represent||null,this.defaultStyle=T.defaultStyle||null,this.styleAliases=u(T.styleAliases||null),x.indexOf(this.kind)===-1)throw new i('Unknown kind "'+this.kind+'" is specified for "'+k+'" YAML type.')}return type=c,type}var schema,hasRequiredSchema;function requireSchema(){if(hasRequiredSchema)return schema;hasRequiredSchema=1;var i=requireCommon(),l=requireException(),x=requireType();function u(T,A,Z){var Y=[];return T.include.forEach(function(te){Z=u(te,A,Z)}),T[A].forEach(function(te){Z.forEach(function(Ye,tt){Ye.tag===te.tag&&Ye.kind===te.kind&&Y.push(tt)}),Z.push(te)}),Z.filter(function(te,Ye){return Y.indexOf(Ye)===-1})}function c(){var T={scalar:{},sequence:{},mapping:{},fallback:{}},A,Z;function Y(te){T[te.kind][te.tag]=T.fallback[te.tag]=te}for(A=0,Z=arguments.length;A<Z;A+=1)arguments[A].forEach(Y);return T}function k(T){this.include=T.include||[],this.implicit=T.implicit||[],this.explicit=T.explicit||[],this.implicit.forEach(function(A){if(A.loadKind&&A.loadKind!=="scalar")throw new l("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=u(this,"implicit",[]),this.compiledExplicit=u(this,"explicit",[]),this.compiledTypeMap=c(this.compiledImplicit,this.compiledExplicit)}return k.DEFAULT=null,k.create=function(){var A,Z;switch(arguments.length){case 1:A=k.DEFAULT,Z=arguments[0];break;case 2:A=arguments[0],Z=arguments[1];break;default:throw new l("Wrong number of arguments for Schema.create function")}if(A=i.toArray(A),Z=i.toArray(Z),!A.every(function(Y){return Y instanceof k}))throw new l("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!Z.every(function(Y){return Y instanceof x}))throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new k({include:A,explicit:Z})},schema=k,schema}var str,hasRequiredStr;function requireStr(){if(hasRequiredStr)return str;hasRequiredStr=1;var i=requireType();return str=new i("tag:yaml.org,2002:str",{kind:"scalar",construct:function(l){return l!==null?l:""}}),str}var seq,hasRequiredSeq;function requireSeq(){if(hasRequiredSeq)return seq;hasRequiredSeq=1;var i=requireType();return seq=new i("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(l){return l!==null?l:[]}}),seq}var map,hasRequiredMap;function requireMap(){if(hasRequiredMap)return map;hasRequiredMap=1;var i=requireType();return map=new i("tag:yaml.org,2002:map",{kind:"mapping",construct:function(l){return l!==null?l:{}}}),map}var failsafe,hasRequiredFailsafe;function requireFailsafe(){if(hasRequiredFailsafe)return failsafe;hasRequiredFailsafe=1;var i=requireSchema();return failsafe=new i({explicit:[requireStr(),requireSeq(),requireMap()]}),failsafe}var _null,hasRequired_null;function require_null(){if(hasRequired_null)return _null;hasRequired_null=1;var i=requireType();function l(c){if(c===null)return!0;var k=c.length;return k===1&&c==="~"||k===4&&(c==="null"||c==="Null"||c==="NULL")}function x(){return null}function u(c){return c===null}return _null=new i("tag:yaml.org,2002:null",{kind:"scalar",resolve:l,construct:x,predicate:u,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),_null}var bool,hasRequiredBool;function requireBool(){if(hasRequiredBool)return bool;hasRequiredBool=1;var i=requireType();function l(c){if(c===null)return!1;var k=c.length;return k===4&&(c==="true"||c==="True"||c==="TRUE")||k===5&&(c==="false"||c==="False"||c==="FALSE")}function x(c){return c==="true"||c==="True"||c==="TRUE"}function u(c){return Object.prototype.toString.call(c)==="[object Boolean]"}return bool=new i("tag:yaml.org,2002:bool",{kind:"scalar",resolve:l,construct:x,predicate:u,represent:{lowercase:function(c){return c?"true":"false"},uppercase:function(c){return c?"TRUE":"FALSE"},camelcase:function(c){return c?"True":"False"}},defaultStyle:"lowercase"}),bool}var int,hasRequiredInt;function requireInt(){if(hasRequiredInt)return int;hasRequiredInt=1;var i=requireCommon(),l=requireType();function x(Z){return 48<=Z&&Z<=57||65<=Z&&Z<=70||97<=Z&&Z<=102}function u(Z){return 48<=Z&&Z<=55}function c(Z){return 48<=Z&&Z<=57}function k(Z){if(Z===null)return!1;var Y=Z.length,te=0,Ye=!1,tt;if(!Y)return!1;if(tt=Z[te],(tt==="-"||tt==="+")&&(tt=Z[++te]),tt==="0"){if(te+1===Y)return!0;if(tt=Z[++te],tt==="b"){for(te++;te<Y;te++)if(tt=Z[te],tt!=="_"){if(tt!=="0"&&tt!=="1")return!1;Ye=!0}return Ye&&tt!=="_"}if(tt==="x"){for(te++;te<Y;te++)if(tt=Z[te],tt!=="_"){if(!x(Z.charCodeAt(te)))return!1;Ye=!0}return Ye&&tt!=="_"}for(;te<Y;te++)if(tt=Z[te],tt!=="_"){if(!u(Z.charCodeAt(te)))return!1;Ye=!0}return Ye&&tt!=="_"}if(tt==="_")return!1;for(;te<Y;te++)if(tt=Z[te],tt!=="_"){if(tt===":")break;if(!c(Z.charCodeAt(te)))return!1;Ye=!0}return!Ye||tt==="_"?!1:tt!==":"?!0:/^(:[0-5]?[0-9])+$/.test(Z.slice(te))}function T(Z){var Y=Z,te=1,Ye,tt,it=[];return Y.indexOf("_")!==-1&&(Y=Y.replace(/_/g,"")),Ye=Y[0],(Ye==="-"||Ye==="+")&&(Ye==="-"&&(te=-1),Y=Y.slice(1),Ye=Y[0]),Y==="0"?0:Ye==="0"?Y[1]==="b"?te*parseInt(Y.slice(2),2):Y[1]==="x"?te*parseInt(Y,16):te*parseInt(Y,8):Y.indexOf(":")!==-1?(Y.split(":").forEach(function(lt){it.unshift(parseInt(lt,10))}),Y=0,tt=1,it.forEach(function(lt){Y+=lt*tt,tt*=60}),te*Y):te*parseInt(Y,10)}function A(Z){return Object.prototype.toString.call(Z)==="[object Number]"&&Z%1===0&&!i.isNegativeZero(Z)}return int=new l("tag:yaml.org,2002:int",{kind:"scalar",resolve:k,construct:T,predicate:A,represent:{binary:function(Z){return Z>=0?"0b"+Z.toString(2):"-0b"+Z.toString(2).slice(1)},octal:function(Z){return Z>=0?"0"+Z.toString(8):"-0"+Z.toString(8).slice(1)},decimal:function(Z){return Z.toString(10)},hexadecimal:function(Z){return Z>=0?"0x"+Z.toString(16).toUpperCase():"-0x"+Z.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),int}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1;var i=requireCommon(),l=requireType(),x=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function u(Z){return!(Z===null||!x.test(Z)||Z[Z.length-1]==="_")}function c(Z){var Y,te,Ye,tt;return Y=Z.replace(/_/g,"").toLowerCase(),te=Y[0]==="-"?-1:1,tt=[],"+-".indexOf(Y[0])>=0&&(Y=Y.slice(1)),Y===".inf"?te===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:Y===".nan"?NaN:Y.indexOf(":")>=0?(Y.split(":").forEach(function(it){tt.unshift(parseFloat(it,10))}),Y=0,Ye=1,tt.forEach(function(it){Y+=it*Ye,Ye*=60}),te*Y):te*parseFloat(Y,10)}var k=/^[-+]?[0-9]+e/;function T(Z,Y){var te;if(isNaN(Z))switch(Y){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===Z)switch(Y){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===Z)switch(Y){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(i.isNegativeZero(Z))return"-0.0";return te=Z.toString(10),k.test(te)?te.replace("e",".e"):te}function A(Z){return Object.prototype.toString.call(Z)==="[object Number]"&&(Z%1!==0||i.isNegativeZero(Z))}return float=new l("tag:yaml.org,2002:float",{kind:"scalar",resolve:u,construct:c,predicate:A,represent:T,defaultStyle:"lowercase"}),float}var json,hasRequiredJson;function requireJson(){if(hasRequiredJson)return json;hasRequiredJson=1;var i=requireSchema();return json=new i({include:[requireFailsafe()],implicit:[require_null(),requireBool(),requireInt(),requireFloat()]}),json}var core,hasRequiredCore;function requireCore(){if(hasRequiredCore)return core;hasRequiredCore=1;var i=requireSchema();return core=new i({include:[requireJson()]}),core}var timestamp,hasRequiredTimestamp;function requireTimestamp(){if(hasRequiredTimestamp)return timestamp;hasRequiredTimestamp=1;var i=requireType(),l=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),x=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u(T){return T===null?!1:l.exec(T)!==null||x.exec(T)!==null}function c(T){var A,Z,Y,te,Ye,tt,it,lt=0,pt=null,xt,At,Tt;if(A=l.exec(T),A===null&&(A=x.exec(T)),A===null)throw new Error("Date resolve error");if(Z=+A[1],Y=+A[2]-1,te=+A[3],!A[4])return new Date(Date.UTC(Z,Y,te));if(Ye=+A[4],tt=+A[5],it=+A[6],A[7]){for(lt=A[7].slice(0,3);lt.length<3;)lt+="0";lt=+lt}return A[9]&&(xt=+A[10],At=+(A[11]||0),pt=(xt*60+At)*6e4,A[9]==="-"&&(pt=-pt)),Tt=new Date(Date.UTC(Z,Y,te,Ye,tt,it,lt)),pt&&Tt.setTime(Tt.getTime()-pt),Tt}function k(T){return T.toISOString()}return timestamp=new i("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u,construct:c,instanceOf:Date,represent:k}),timestamp}var merge,hasRequiredMerge;function requireMerge(){if(hasRequiredMerge)return merge;hasRequiredMerge=1;var i=requireType();function l(x){return x==="<<"||x===null}return merge=new i("tag:yaml.org,2002:merge",{kind:"scalar",resolve:l}),merge}function commonjsRequire(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var binary,hasRequiredBinary;function requireBinary(){if(hasRequiredBinary)return binary;hasRequiredBinary=1;var i;try{var l=commonjsRequire;i=l("buffer").Buffer}catch{}var x=requireType(),u=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function c(Z){if(Z===null)return!1;var Y,te,Ye=0,tt=Z.length,it=u;for(te=0;te<tt;te++)if(Y=it.indexOf(Z.charAt(te)),!(Y>64)){if(Y<0)return!1;Ye+=6}return Ye%8===0}function k(Z){var Y,te,Ye=Z.replace(/[\r\n=]/g,""),tt=Ye.length,it=u,lt=0,pt=[];for(Y=0;Y<tt;Y++)Y%4===0&&Y&&(pt.push(lt>>16&255),pt.push(lt>>8&255),pt.push(lt&255)),lt=lt<<6|it.indexOf(Ye.charAt(Y));return te=tt%4*6,te===0?(pt.push(lt>>16&255),pt.push(lt>>8&255),pt.push(lt&255)):te===18?(pt.push(lt>>10&255),pt.push(lt>>2&255)):te===12&&pt.push(lt>>4&255),i?i.from?i.from(pt):new i(pt):pt}function T(Z){var Y="",te=0,Ye,tt,it=Z.length,lt=u;for(Ye=0;Ye<it;Ye++)Ye%3===0&&Ye&&(Y+=lt[te>>18&63],Y+=lt[te>>12&63],Y+=lt[te>>6&63],Y+=lt[te&63]),te=(te<<8)+Z[Ye];return tt=it%3,tt===0?(Y+=lt[te>>18&63],Y+=lt[te>>12&63],Y+=lt[te>>6&63],Y+=lt[te&63]):tt===2?(Y+=lt[te>>10&63],Y+=lt[te>>4&63],Y+=lt[te<<2&63],Y+=lt[64]):tt===1&&(Y+=lt[te>>2&63],Y+=lt[te<<4&63],Y+=lt[64],Y+=lt[64]),Y}function A(Z){return i&&i.isBuffer(Z)}return binary=new x("tag:yaml.org,2002:binary",{kind:"scalar",resolve:c,construct:k,predicate:A,represent:T}),binary}var omap,hasRequiredOmap;function requireOmap(){if(hasRequiredOmap)return omap;hasRequiredOmap=1;var i=requireType(),l=Object.prototype.hasOwnProperty,x=Object.prototype.toString;function u(k){if(k===null)return!0;var T=[],A,Z,Y,te,Ye,tt=k;for(A=0,Z=tt.length;A<Z;A+=1){if(Y=tt[A],Ye=!1,x.call(Y)!=="[object Object]")return!1;for(te in Y)if(l.call(Y,te))if(!Ye)Ye=!0;else return!1;if(!Ye)return!1;if(T.indexOf(te)===-1)T.push(te);else return!1}return!0}function c(k){return k!==null?k:[]}return omap=new i("tag:yaml.org,2002:omap",{kind:"sequence",resolve:u,construct:c}),omap}var pairs,hasRequiredPairs;function requirePairs(){if(hasRequiredPairs)return pairs;hasRequiredPairs=1;var i=requireType(),l=Object.prototype.toString;function x(c){if(c===null)return!0;var k,T,A,Z,Y,te=c;for(Y=new Array(te.length),k=0,T=te.length;k<T;k+=1){if(A=te[k],l.call(A)!=="[object Object]"||(Z=Object.keys(A),Z.length!==1))return!1;Y[k]=[Z[0],A[Z[0]]]}return!0}function u(c){if(c===null)return[];var k,T,A,Z,Y,te=c;for(Y=new Array(te.length),k=0,T=te.length;k<T;k+=1)A=te[k],Z=Object.keys(A),Y[k]=[Z[0],A[Z[0]]];return Y}return pairs=new i("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:x,construct:u}),pairs}var set,hasRequiredSet;function requireSet(){if(hasRequiredSet)return set;hasRequiredSet=1;var i=requireType(),l=Object.prototype.hasOwnProperty;function x(c){if(c===null)return!0;var k,T=c;for(k in T)if(l.call(T,k)&&T[k]!==null)return!1;return!0}function u(c){return c!==null?c:{}}return set=new i("tag:yaml.org,2002:set",{kind:"mapping",resolve:x,construct:u}),set}var default_safe,hasRequiredDefault_safe;function requireDefault_safe(){if(hasRequiredDefault_safe)return default_safe;hasRequiredDefault_safe=1;var i=requireSchema();return default_safe=new i({include:[requireCore()],implicit:[requireTimestamp(),requireMerge()],explicit:[requireBinary(),requireOmap(),requirePairs(),requireSet()]}),default_safe}var _undefined,hasRequired_undefined;function require_undefined(){if(hasRequired_undefined)return _undefined;hasRequired_undefined=1;var i=requireType();function l(){return!0}function x(){}function u(){return""}function c(k){return typeof k>"u"}return _undefined=new i("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:l,construct:x,predicate:c,represent:u}),_undefined}var regexp,hasRequiredRegexp;function requireRegexp(){if(hasRequiredRegexp)return regexp;hasRequiredRegexp=1;var i=requireType();function l(k){if(k===null||k.length===0)return!1;var T=k,A=/\/([gim]*)$/.exec(k),Z="";return!(T[0]==="/"&&(A&&(Z=A[1]),Z.length>3||T[T.length-Z.length-1]!=="/"))}function x(k){var T=k,A=/\/([gim]*)$/.exec(k),Z="";return T[0]==="/"&&(A&&(Z=A[1]),T=T.slice(1,T.length-Z.length-1)),new RegExp(T,Z)}function u(k){var T="/"+k.source+"/";return k.global&&(T+="g"),k.multiline&&(T+="m"),k.ignoreCase&&(T+="i"),T}function c(k){return Object.prototype.toString.call(k)==="[object RegExp]"}return regexp=new i("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:l,construct:x,predicate:c,represent:u}),regexp}var _function,hasRequired_function;function require_function(){if(hasRequired_function)return _function;hasRequired_function=1;var i;try{var l=commonjsRequire;i=l("esprima")}catch{typeof window<"u"&&(i=window.esprima)}var x=requireType();function u(A){if(A===null)return!1;try{var Z="("+A+")",Y=i.parse(Z,{range:!0});return!(Y.type!=="Program"||Y.body.length!==1||Y.body[0].type!=="ExpressionStatement"||Y.body[0].expression.type!=="ArrowFunctionExpression"&&Y.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function c(A){var Z="("+A+")",Y=i.parse(Z,{range:!0}),te=[],Ye;if(Y.type!=="Program"||Y.body.length!==1||Y.body[0].type!=="ExpressionStatement"||Y.body[0].expression.type!=="ArrowFunctionExpression"&&Y.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return Y.body[0].expression.params.forEach(function(tt){te.push(tt.name)}),Ye=Y.body[0].expression.body.range,Y.body[0].expression.body.type==="BlockStatement"?new Function(te,Z.slice(Ye[0]+1,Ye[1]-1)):new Function(te,"return "+Z.slice(Ye[0],Ye[1]))}function k(A){return A.toString()}function T(A){return Object.prototype.toString.call(A)==="[object Function]"}return _function=new x("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:u,construct:c,predicate:T,represent:k}),_function}var default_full,hasRequiredDefault_full;function requireDefault_full(){if(hasRequiredDefault_full)return default_full;hasRequiredDefault_full=1;var i=requireSchema();return default_full=i.DEFAULT=new i({include:[requireDefault_safe()],explicit:[require_undefined(),requireRegexp(),require_function()]}),default_full}var hasRequiredLoader;function requireLoader(){if(hasRequiredLoader)return loader;hasRequiredLoader=1;var i=requireCommon(),l=requireException(),x=requireMark(),u=requireDefault_safe(),c=requireDefault_full(),k=Object.prototype.hasOwnProperty,T=1,A=2,Z=3,Y=4,te=1,Ye=2,tt=3,it=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,lt=/[\x85\u2028\u2029]/,pt=/[,\[\]\{\}]/,xt=/^(?:!|!!|![a-z\-]+!)$/i,At=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Tt(f){return Object.prototype.toString.call(f)}function Dt(f){return f===10||f===13}function Ut(f){return f===9||f===32}function Mt(f){return f===9||f===32||f===10||f===13}function Vt(f){return f===44||f===91||f===93||f===123||f===125}function Zt(f){var ct;return 48<=f&&f<=57?f-48:(ct=f|32,97<=ct&&ct<=102?ct-97+10:-1)}function an(f){return f===120?2:f===117?4:f===85?8:0}function tn(f){return 48<=f&&f<=57?f-48:-1}function _n(f){return f===48?"\0":f===97?"\x07":f===98?"\b":f===116||f===9?"	":f===110?`
`:f===118?"\v":f===102?"\f":f===114?"\r":f===101?"\x1B":f===32?" ":f===34?'"':f===47?"/":f===92?"\\":f===78?"":f===95?" ":f===76?"\u2028":f===80?"\u2029":""}function Tn(f){return f<=65535?String.fromCharCode(f):String.fromCharCode((f-65536>>10)+55296,(f-65536&1023)+56320)}for(var pn=new Array(256),Hn=new Array(256),Wt=0;Wt<256;Wt++)pn[Wt]=_n(Wt)?1:0,Hn[Wt]=_n(Wt);function mn(f,ct){this.input=f,this.filename=ct.filename||null,this.schema=ct.schema||c,this.onWarning=ct.onWarning||null,this.legacy=ct.legacy||!1,this.json=ct.json||!1,this.listener=ct.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=f.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function vt(f,ct){return new l(ct,new x(f.filename,f.input,f.position,f.line,f.position-f.lineStart))}function yt(f,ct){throw vt(f,ct)}function qt(f,ct){f.onWarning&&f.onWarning.call(null,vt(f,ct))}var Jt={YAML:function(ct,Et,ee){var s,g,p;ct.version!==null&&yt(ct,"duplication of %YAML directive"),ee.length!==1&&yt(ct,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(ee[0]),s===null&&yt(ct,"ill-formed argument of the YAML directive"),g=parseInt(s[1],10),p=parseInt(s[2],10),g!==1&&yt(ct,"unacceptable YAML version of the document"),ct.version=ee[0],ct.checkLineBreaks=p<2,p!==1&&p!==2&&qt(ct,"unsupported YAML version of the document")},TAG:function(ct,Et,ee){var s,g;ee.length!==2&&yt(ct,"TAG directive accepts exactly two arguments"),s=ee[0],g=ee[1],xt.test(s)||yt(ct,"ill-formed tag handle (first argument) of the TAG directive"),k.call(ct.tagMap,s)&&yt(ct,'there is a previously declared suffix for "'+s+'" tag handle'),At.test(g)||yt(ct,"ill-formed tag prefix (second argument) of the TAG directive"),ct.tagMap[s]=g}};function nt(f,ct,Et,ee){var s,g,p,me;if(ct<Et){if(me=f.input.slice(ct,Et),ee)for(s=0,g=me.length;s<g;s+=1)p=me.charCodeAt(s),p===9||32<=p&&p<=1114111||yt(f,"expected valid JSON character");else it.test(me)&&yt(f,"the stream contains non-printable characters");f.result+=me}}function bt(f,ct,Et,ee){var s,g,p,me;for(i.isObject(Et)||yt(f,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(Et),p=0,me=s.length;p<me;p+=1)g=s[p],k.call(ct,g)||(ct[g]=Et[g],ee[g]=!0)}function kt(f,ct,Et,ee,s,g,p,me){var Ve,rt;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),Ve=0,rt=s.length;Ve<rt;Ve+=1)Array.isArray(s[Ve])&&yt(f,"nested arrays are not supported inside keys"),typeof s=="object"&&Tt(s[Ve])==="[object Object]"&&(s[Ve]="[object Object]");if(typeof s=="object"&&Tt(s)==="[object Object]"&&(s="[object Object]"),s=String(s),ct===null&&(ct={}),ee==="tag:yaml.org,2002:merge")if(Array.isArray(g))for(Ve=0,rt=g.length;Ve<rt;Ve+=1)bt(f,ct,g[Ve],Et);else bt(f,ct,g,Et);else!f.json&&!k.call(Et,s)&&k.call(ct,s)&&(f.line=p||f.line,f.position=me||f.position,yt(f,"duplicated mapping key")),ct[s]=g,delete Et[s];return ct}function Ot(f){var ct;ct=f.input.charCodeAt(f.position),ct===10?f.position++:ct===13?(f.position++,f.input.charCodeAt(f.position)===10&&f.position++):yt(f,"a line break is expected"),f.line+=1,f.lineStart=f.position}function Nt(f,ct,Et){for(var ee=0,s=f.input.charCodeAt(f.position);s!==0;){for(;Ut(s);)s=f.input.charCodeAt(++f.position);if(ct&&s===35)do s=f.input.charCodeAt(++f.position);while(s!==10&&s!==13&&s!==0);if(Dt(s))for(Ot(f),s=f.input.charCodeAt(f.position),ee++,f.lineIndent=0;s===32;)f.lineIndent++,s=f.input.charCodeAt(++f.position);else break}return Et!==-1&&ee!==0&&f.lineIndent<Et&&qt(f,"deficient indentation"),ee}function Gt(f){var ct=f.position,Et;return Et=f.input.charCodeAt(ct),!!((Et===45||Et===46)&&Et===f.input.charCodeAt(ct+1)&&Et===f.input.charCodeAt(ct+2)&&(ct+=3,Et=f.input.charCodeAt(ct),Et===0||Mt(Et)))}function zt(f,ct){ct===1?f.result+=" ":ct>1&&(f.result+=i.repeat(`
`,ct-1))}function Sn(f,ct,Et){var ee,s,g,p,me,Ve,rt,mt,dt=f.kind,_t=f.result,gt;if(gt=f.input.charCodeAt(f.position),Mt(gt)||Vt(gt)||gt===35||gt===38||gt===42||gt===33||gt===124||gt===62||gt===39||gt===34||gt===37||gt===64||gt===96||(gt===63||gt===45)&&(s=f.input.charCodeAt(f.position+1),Mt(s)||Et&&Vt(s)))return!1;for(f.kind="scalar",f.result="",g=p=f.position,me=!1;gt!==0;){if(gt===58){if(s=f.input.charCodeAt(f.position+1),Mt(s)||Et&&Vt(s))break}else if(gt===35){if(ee=f.input.charCodeAt(f.position-1),Mt(ee))break}else{if(f.position===f.lineStart&&Gt(f)||Et&&Vt(gt))break;if(Dt(gt))if(Ve=f.line,rt=f.lineStart,mt=f.lineIndent,Nt(f,!1,-1),f.lineIndent>=ct){me=!0,gt=f.input.charCodeAt(f.position);continue}else{f.position=p,f.line=Ve,f.lineStart=rt,f.lineIndent=mt;break}}me&&(nt(f,g,p,!1),zt(f,f.line-Ve),g=p=f.position,me=!1),Ut(gt)||(p=f.position+1),gt=f.input.charCodeAt(++f.position)}return nt(f,g,p,!1),f.result?!0:(f.kind=dt,f.result=_t,!1)}function $t(f,ct){var Et,ee,s;if(Et=f.input.charCodeAt(f.position),Et!==39)return!1;for(f.kind="scalar",f.result="",f.position++,ee=s=f.position;(Et=f.input.charCodeAt(f.position))!==0;)if(Et===39)if(nt(f,ee,f.position,!0),Et=f.input.charCodeAt(++f.position),Et===39)ee=f.position,f.position++,s=f.position;else return!0;else Dt(Et)?(nt(f,ee,s,!0),zt(f,Nt(f,!1,ct)),ee=s=f.position):f.position===f.lineStart&&Gt(f)?yt(f,"unexpected end of the document within a single quoted scalar"):(f.position++,s=f.position);yt(f,"unexpected end of the stream within a single quoted scalar")}function Bn(f,ct){var Et,ee,s,g,p,me;if(me=f.input.charCodeAt(f.position),me!==34)return!1;for(f.kind="scalar",f.result="",f.position++,Et=ee=f.position;(me=f.input.charCodeAt(f.position))!==0;){if(me===34)return nt(f,Et,f.position,!0),f.position++,!0;if(me===92){if(nt(f,Et,f.position,!0),me=f.input.charCodeAt(++f.position),Dt(me))Nt(f,!1,ct);else if(me<256&&pn[me])f.result+=Hn[me],f.position++;else if((p=an(me))>0){for(s=p,g=0;s>0;s--)me=f.input.charCodeAt(++f.position),(p=Zt(me))>=0?g=(g<<4)+p:yt(f,"expected hexadecimal character");f.result+=Tn(g),f.position++}else yt(f,"unknown escape sequence");Et=ee=f.position}else Dt(me)?(nt(f,Et,ee,!0),zt(f,Nt(f,!1,ct)),Et=ee=f.position):f.position===f.lineStart&&Gt(f)?yt(f,"unexpected end of the document within a double quoted scalar"):(f.position++,ee=f.position)}yt(f,"unexpected end of the stream within a double quoted scalar")}function mr(f,ct){var Et=!0,ee,s=f.tag,g,p=f.anchor,me,Ve,rt,mt,dt,_t={},gt,Ct,Ft,Ht;if(Ht=f.input.charCodeAt(f.position),Ht===91)Ve=93,dt=!1,g=[];else if(Ht===123)Ve=125,dt=!0,g={};else return!1;for(f.anchor!==null&&(f.anchorMap[f.anchor]=g),Ht=f.input.charCodeAt(++f.position);Ht!==0;){if(Nt(f,!0,ct),Ht=f.input.charCodeAt(f.position),Ht===Ve)return f.position++,f.tag=s,f.anchor=p,f.kind=dt?"mapping":"sequence",f.result=g,!0;Et||yt(f,"missed comma between flow collection entries"),Ct=gt=Ft=null,rt=mt=!1,Ht===63&&(me=f.input.charCodeAt(f.position+1),Mt(me)&&(rt=mt=!0,f.position++,Nt(f,!0,ct))),ee=f.line,gn(f,ct,T,!1,!0),Ct=f.tag,gt=f.result,Nt(f,!0,ct),Ht=f.input.charCodeAt(f.position),(mt||f.line===ee)&&Ht===58&&(rt=!0,Ht=f.input.charCodeAt(++f.position),Nt(f,!0,ct),gn(f,ct,T,!1,!0),Ft=f.result),dt?kt(f,g,_t,Ct,gt,Ft):rt?g.push(kt(f,null,_t,Ct,gt,Ft)):g.push(gt),Nt(f,!0,ct),Ht=f.input.charCodeAt(f.position),Ht===44?(Et=!0,Ht=f.input.charCodeAt(++f.position)):Et=!1}yt(f,"unexpected end of the stream within a flow collection")}function gr(f,ct){var Et,ee,s=te,g=!1,p=!1,me=ct,Ve=0,rt=!1,mt,dt;if(dt=f.input.charCodeAt(f.position),dt===124)ee=!1;else if(dt===62)ee=!0;else return!1;for(f.kind="scalar",f.result="";dt!==0;)if(dt=f.input.charCodeAt(++f.position),dt===43||dt===45)te===s?s=dt===43?tt:Ye:yt(f,"repeat of a chomping mode identifier");else if((mt=tn(dt))>=0)mt===0?yt(f,"bad explicit indentation width of a block scalar; it cannot be less than one"):p?yt(f,"repeat of an indentation width identifier"):(me=ct+mt-1,p=!0);else break;if(Ut(dt)){do dt=f.input.charCodeAt(++f.position);while(Ut(dt));if(dt===35)do dt=f.input.charCodeAt(++f.position);while(!Dt(dt)&&dt!==0)}for(;dt!==0;){for(Ot(f),f.lineIndent=0,dt=f.input.charCodeAt(f.position);(!p||f.lineIndent<me)&&dt===32;)f.lineIndent++,dt=f.input.charCodeAt(++f.position);if(!p&&f.lineIndent>me&&(me=f.lineIndent),Dt(dt)){Ve++;continue}if(f.lineIndent<me){s===tt?f.result+=i.repeat(`
`,g?1+Ve:Ve):s===te&&g&&(f.result+=`
`);break}for(ee?Ut(dt)?(rt=!0,f.result+=i.repeat(`
`,g?1+Ve:Ve)):rt?(rt=!1,f.result+=i.repeat(`
`,Ve+1)):Ve===0?g&&(f.result+=" "):f.result+=i.repeat(`
`,Ve):f.result+=i.repeat(`
`,g?1+Ve:Ve),g=!0,p=!0,Ve=0,Et=f.position;!Dt(dt)&&dt!==0;)dt=f.input.charCodeAt(++f.position);nt(f,Et,f.position,!1)}return!0}function Yn(f,ct){var Et,ee=f.tag,s=f.anchor,g=[],p,me=!1,Ve;for(f.anchor!==null&&(f.anchorMap[f.anchor]=g),Ve=f.input.charCodeAt(f.position);Ve!==0&&!(Ve!==45||(p=f.input.charCodeAt(f.position+1),!Mt(p)));){if(me=!0,f.position++,Nt(f,!0,-1)&&f.lineIndent<=ct){g.push(null),Ve=f.input.charCodeAt(f.position);continue}if(Et=f.line,gn(f,ct,Z,!1,!0),g.push(f.result),Nt(f,!0,-1),Ve=f.input.charCodeAt(f.position),(f.line===Et||f.lineIndent>ct)&&Ve!==0)yt(f,"bad indentation of a sequence entry");else if(f.lineIndent<ct)break}return me?(f.tag=ee,f.anchor=s,f.kind="sequence",f.result=g,!0):!1}function Gn(f,ct,Et){var ee,s,g,p,me=f.tag,Ve=f.anchor,rt={},mt={},dt=null,_t=null,gt=null,Ct=!1,Ft=!1,Ht;for(f.anchor!==null&&(f.anchorMap[f.anchor]=rt),Ht=f.input.charCodeAt(f.position);Ht!==0;){if(ee=f.input.charCodeAt(f.position+1),g=f.line,p=f.position,(Ht===63||Ht===58)&&Mt(ee))Ht===63?(Ct&&(kt(f,rt,mt,dt,_t,null),dt=_t=gt=null),Ft=!0,Ct=!0,s=!0):Ct?(Ct=!1,s=!0):yt(f,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),f.position+=1,Ht=ee;else if(gn(f,Et,A,!1,!0))if(f.line===g){for(Ht=f.input.charCodeAt(f.position);Ut(Ht);)Ht=f.input.charCodeAt(++f.position);if(Ht===58)Ht=f.input.charCodeAt(++f.position),Mt(Ht)||yt(f,"a whitespace character is expected after the key-value separator within a block mapping"),Ct&&(kt(f,rt,mt,dt,_t,null),dt=_t=gt=null),Ft=!0,Ct=!1,s=!1,dt=f.tag,_t=f.result;else if(Ft)yt(f,"can not read an implicit mapping pair; a colon is missed");else return f.tag=me,f.anchor=Ve,!0}else if(Ft)yt(f,"can not read a block mapping entry; a multiline key may not be an implicit key");else return f.tag=me,f.anchor=Ve,!0;else break;if((f.line===g||f.lineIndent>ct)&&(gn(f,ct,Y,!0,s)&&(Ct?_t=f.result:gt=f.result),Ct||(kt(f,rt,mt,dt,_t,gt,g,p),dt=_t=gt=null),Nt(f,!0,-1),Ht=f.input.charCodeAt(f.position)),f.lineIndent>ct&&Ht!==0)yt(f,"bad indentation of a mapping entry");else if(f.lineIndent<ct)break}return Ct&&kt(f,rt,mt,dt,_t,null),Ft&&(f.tag=me,f.anchor=Ve,f.kind="mapping",f.result=rt),Ft}function Jn(f){var ct,Et=!1,ee=!1,s,g,p;if(p=f.input.charCodeAt(f.position),p!==33)return!1;if(f.tag!==null&&yt(f,"duplication of a tag property"),p=f.input.charCodeAt(++f.position),p===60?(Et=!0,p=f.input.charCodeAt(++f.position)):p===33?(ee=!0,s="!!",p=f.input.charCodeAt(++f.position)):s="!",ct=f.position,Et){do p=f.input.charCodeAt(++f.position);while(p!==0&&p!==62);f.position<f.length?(g=f.input.slice(ct,f.position),p=f.input.charCodeAt(++f.position)):yt(f,"unexpected end of the stream within a verbatim tag")}else{for(;p!==0&&!Mt(p);)p===33&&(ee?yt(f,"tag suffix cannot contain exclamation marks"):(s=f.input.slice(ct-1,f.position+1),xt.test(s)||yt(f,"named tag handle cannot contain such characters"),ee=!0,ct=f.position+1)),p=f.input.charCodeAt(++f.position);g=f.input.slice(ct,f.position),pt.test(g)&&yt(f,"tag suffix cannot contain flow indicator characters")}return g&&!At.test(g)&&yt(f,"tag name cannot contain such characters: "+g),Et?f.tag=g:k.call(f.tagMap,s)?f.tag=f.tagMap[s]+g:s==="!"?f.tag="!"+g:s==="!!"?f.tag="tag:yaml.org,2002:"+g:yt(f,'undeclared tag handle "'+s+'"'),!0}function Yr(f){var ct,Et;if(Et=f.input.charCodeAt(f.position),Et!==38)return!1;for(f.anchor!==null&&yt(f,"duplication of an anchor property"),Et=f.input.charCodeAt(++f.position),ct=f.position;Et!==0&&!Mt(Et)&&!Vt(Et);)Et=f.input.charCodeAt(++f.position);return f.position===ct&&yt(f,"name of an anchor node must contain at least one character"),f.anchor=f.input.slice(ct,f.position),!0}function Gr(f){var ct,Et,ee;if(ee=f.input.charCodeAt(f.position),ee!==42)return!1;for(ee=f.input.charCodeAt(++f.position),ct=f.position;ee!==0&&!Mt(ee)&&!Vt(ee);)ee=f.input.charCodeAt(++f.position);return f.position===ct&&yt(f,"name of an alias node must contain at least one character"),Et=f.input.slice(ct,f.position),k.call(f.anchorMap,Et)||yt(f,'unidentified alias "'+Et+'"'),f.result=f.anchorMap[Et],Nt(f,!0,-1),!0}function gn(f,ct,Et,ee,s){var g,p,me,Ve=1,rt=!1,mt=!1,dt,_t,gt,Ct,Ft;if(f.listener!==null&&f.listener("open",f),f.tag=null,f.anchor=null,f.kind=null,f.result=null,g=p=me=Y===Et||Z===Et,ee&&Nt(f,!0,-1)&&(rt=!0,f.lineIndent>ct?Ve=1:f.lineIndent===ct?Ve=0:f.lineIndent<ct&&(Ve=-1)),Ve===1)for(;Jn(f)||Yr(f);)Nt(f,!0,-1)?(rt=!0,me=g,f.lineIndent>ct?Ve=1:f.lineIndent===ct?Ve=0:f.lineIndent<ct&&(Ve=-1)):me=!1;if(me&&(me=rt||s),(Ve===1||Y===Et)&&(T===Et||A===Et?Ct=ct:Ct=ct+1,Ft=f.position-f.lineStart,Ve===1?me&&(Yn(f,Ft)||Gn(f,Ft,Ct))||mr(f,Ct)?mt=!0:(p&&gr(f,Ct)||$t(f,Ct)||Bn(f,Ct)?mt=!0:Gr(f)?(mt=!0,(f.tag!==null||f.anchor!==null)&&yt(f,"alias node should not have any properties")):Sn(f,Ct,T===Et)&&(mt=!0,f.tag===null&&(f.tag="?")),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):Ve===0&&(mt=me&&Yn(f,Ft))),f.tag!==null&&f.tag!=="!")if(f.tag==="?"){for(f.result!==null&&f.kind!=="scalar"&&yt(f,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+f.kind+'"'),dt=0,_t=f.implicitTypes.length;dt<_t;dt+=1)if(gt=f.implicitTypes[dt],gt.resolve(f.result)){f.result=gt.construct(f.result),f.tag=gt.tag,f.anchor!==null&&(f.anchorMap[f.anchor]=f.result);break}}else k.call(f.typeMap[f.kind||"fallback"],f.tag)?(gt=f.typeMap[f.kind||"fallback"][f.tag],f.result!==null&&gt.kind!==f.kind&&yt(f,"unacceptable node kind for !<"+f.tag+'> tag; it should be "'+gt.kind+'", not "'+f.kind+'"'),gt.resolve(f.result)?(f.result=gt.construct(f.result),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):yt(f,"cannot resolve a node with !<"+f.tag+"> explicit tag")):yt(f,"unknown tag !<"+f.tag+">");return f.listener!==null&&f.listener("close",f),f.tag!==null||f.anchor!==null||mt}function Pr(f){var ct=f.position,Et,ee,s,g=!1,p;for(f.version=null,f.checkLineBreaks=f.legacy,f.tagMap={},f.anchorMap={};(p=f.input.charCodeAt(f.position))!==0&&(Nt(f,!0,-1),p=f.input.charCodeAt(f.position),!(f.lineIndent>0||p!==37));){for(g=!0,p=f.input.charCodeAt(++f.position),Et=f.position;p!==0&&!Mt(p);)p=f.input.charCodeAt(++f.position);for(ee=f.input.slice(Et,f.position),s=[],ee.length<1&&yt(f,"directive name must not be less than one character in length");p!==0;){for(;Ut(p);)p=f.input.charCodeAt(++f.position);if(p===35){do p=f.input.charCodeAt(++f.position);while(p!==0&&!Dt(p));break}if(Dt(p))break;for(Et=f.position;p!==0&&!Mt(p);)p=f.input.charCodeAt(++f.position);s.push(f.input.slice(Et,f.position))}p!==0&&Ot(f),k.call(Jt,ee)?Jt[ee](f,ee,s):qt(f,'unknown document directive "'+ee+'"')}if(Nt(f,!0,-1),f.lineIndent===0&&f.input.charCodeAt(f.position)===45&&f.input.charCodeAt(f.position+1)===45&&f.input.charCodeAt(f.position+2)===45?(f.position+=3,Nt(f,!0,-1)):g&&yt(f,"directives end mark is expected"),gn(f,f.lineIndent-1,Y,!1,!0),Nt(f,!0,-1),f.checkLineBreaks&&lt.test(f.input.slice(ct,f.position))&&qt(f,"non-ASCII line breaks are interpreted as content"),f.documents.push(f.result),f.position===f.lineStart&&Gt(f)){f.input.charCodeAt(f.position)===46&&(f.position+=3,Nt(f,!0,-1));return}if(f.position<f.length-1)yt(f,"end of the stream or a document separator is expected");else return}function Tr(f,ct){f=String(f),ct=ct||{},f.length!==0&&(f.charCodeAt(f.length-1)!==10&&f.charCodeAt(f.length-1)!==13&&(f+=`
`),f.charCodeAt(0)===65279&&(f=f.slice(1)));var Et=new mn(f,ct),ee=f.indexOf("\0");for(ee!==-1&&(Et.position=ee,yt(Et,"null byte is not allowed in input")),Et.input+="\0";Et.input.charCodeAt(Et.position)===32;)Et.lineIndent+=1,Et.position+=1;for(;Et.position<Et.length-1;)Pr(Et);return Et.documents}function br(f,ct,Et){ct!==null&&typeof ct=="object"&&typeof Et>"u"&&(Et=ct,ct=null);var ee=Tr(f,Et);if(typeof ct!="function")return ee;for(var s=0,g=ee.length;s<g;s+=1)ct(ee[s])}function Pn(f,ct){var Et=Tr(f,ct);if(Et.length!==0){if(Et.length===1)return Et[0];throw new l("expected a single document in the stream, but found more")}}function zn(f,ct,Et){return typeof ct=="object"&&ct!==null&&typeof Et>"u"&&(Et=ct,ct=null),br(f,ct,i.extend({schema:u},Et))}function Sr(f,ct){return Pn(f,i.extend({schema:u},ct))}return loader.loadAll=br,loader.load=Pn,loader.safeLoadAll=zn,loader.safeLoad=Sr,loader}var dumper={},hasRequiredDumper;function requireDumper(){if(hasRequiredDumper)return dumper;hasRequiredDumper=1;var i=requireCommon(),l=requireException(),x=requireDefault_full(),u=requireDefault_safe(),c=Object.prototype.toString,k=Object.prototype.hasOwnProperty,T=9,A=10,Z=13,Y=32,te=33,Ye=34,tt=35,it=37,lt=38,pt=39,xt=42,At=44,Tt=45,Dt=58,Ut=61,Mt=62,Vt=63,Zt=64,an=91,tn=93,_n=96,Tn=123,pn=124,Hn=125,Wt={};Wt[0]="\\0",Wt[7]="\\a",Wt[8]="\\b",Wt[9]="\\t",Wt[10]="\\n",Wt[11]="\\v",Wt[12]="\\f",Wt[13]="\\r",Wt[27]="\\e",Wt[34]='\\"',Wt[92]="\\\\",Wt[133]="\\N",Wt[160]="\\_",Wt[8232]="\\L",Wt[8233]="\\P";var mn=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function vt(p,me){var Ve,rt,mt,dt,_t,gt,Ct;if(me===null)return{};for(Ve={},rt=Object.keys(me),mt=0,dt=rt.length;mt<dt;mt+=1)_t=rt[mt],gt=String(me[_t]),_t.slice(0,2)==="!!"&&(_t="tag:yaml.org,2002:"+_t.slice(2)),Ct=p.compiledTypeMap.fallback[_t],Ct&&k.call(Ct.styleAliases,gt)&&(gt=Ct.styleAliases[gt]),Ve[_t]=gt;return Ve}function yt(p){var me,Ve,rt;if(me=p.toString(16).toUpperCase(),p<=255)Ve="x",rt=2;else if(p<=65535)Ve="u",rt=4;else if(p<=4294967295)Ve="U",rt=8;else throw new l("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+Ve+i.repeat("0",rt-me.length)+me}function qt(p){this.schema=p.schema||x,this.indent=Math.max(1,p.indent||2),this.noArrayIndent=p.noArrayIndent||!1,this.skipInvalid=p.skipInvalid||!1,this.flowLevel=i.isNothing(p.flowLevel)?-1:p.flowLevel,this.styleMap=vt(this.schema,p.styles||null),this.sortKeys=p.sortKeys||!1,this.lineWidth=p.lineWidth||80,this.noRefs=p.noRefs||!1,this.noCompatMode=p.noCompatMode||!1,this.condenseFlow=p.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Jt(p,me){for(var Ve=i.repeat(" ",me),rt=0,mt=-1,dt="",_t,gt=p.length;rt<gt;)mt=p.indexOf(`
`,rt),mt===-1?(_t=p.slice(rt),rt=gt):(_t=p.slice(rt,mt+1),rt=mt+1),_t.length&&_t!==`
`&&(dt+=Ve),dt+=_t;return dt}function nt(p,me){return`
`+i.repeat(" ",p.indent*me)}function bt(p,me){var Ve,rt,mt;for(Ve=0,rt=p.implicitTypes.length;Ve<rt;Ve+=1)if(mt=p.implicitTypes[Ve],mt.resolve(me))return!0;return!1}function kt(p){return p===Y||p===T}function Ot(p){return 32<=p&&p<=126||161<=p&&p<=55295&&p!==8232&&p!==8233||57344<=p&&p<=65533&&p!==65279||65536<=p&&p<=1114111}function Nt(p){return Ot(p)&&!kt(p)&&p!==65279&&p!==Z&&p!==A}function Gt(p,me){return Ot(p)&&p!==65279&&p!==At&&p!==an&&p!==tn&&p!==Tn&&p!==Hn&&p!==Dt&&(p!==tt||me&&Nt(me))}function zt(p){return Ot(p)&&p!==65279&&!kt(p)&&p!==Tt&&p!==Vt&&p!==Dt&&p!==At&&p!==an&&p!==tn&&p!==Tn&&p!==Hn&&p!==tt&&p!==lt&&p!==xt&&p!==te&&p!==pn&&p!==Ut&&p!==Mt&&p!==pt&&p!==Ye&&p!==it&&p!==Zt&&p!==_n}function Sn(p){var me=/^\n* /;return me.test(p)}var $t=1,Bn=2,mr=3,gr=4,Yn=5;function Gn(p,me,Ve,rt,mt){var dt,_t,gt,Ct=!1,Ft=!1,Ht=rt!==-1,Vn=-1,vn=zt(p.charCodeAt(0))&&!kt(p.charCodeAt(p.length-1));if(me)for(dt=0;dt<p.length;dt++){if(_t=p.charCodeAt(dt),!Ot(_t))return Yn;gt=dt>0?p.charCodeAt(dt-1):null,vn=vn&&Gt(_t,gt)}else{for(dt=0;dt<p.length;dt++){if(_t=p.charCodeAt(dt),_t===A)Ct=!0,Ht&&(Ft=Ft||dt-Vn-1>rt&&p[Vn+1]!==" ",Vn=dt);else if(!Ot(_t))return Yn;gt=dt>0?p.charCodeAt(dt-1):null,vn=vn&&Gt(_t,gt)}Ft=Ft||Ht&&dt-Vn-1>rt&&p[Vn+1]!==" "}return!Ct&&!Ft?vn&&!mt(p)?$t:Bn:Ve>9&&Sn(p)?Yn:Ft?gr:mr}function Jn(p,me,Ve,rt){p.dump=(function(){if(me.length===0)return"''";if(!p.noCompatMode&&mn.indexOf(me)!==-1)return"'"+me+"'";var mt=p.indent*Math.max(1,Ve),dt=p.lineWidth===-1?-1:Math.max(Math.min(p.lineWidth,40),p.lineWidth-mt),_t=rt||p.flowLevel>-1&&Ve>=p.flowLevel;function gt(Ct){return bt(p,Ct)}switch(Gn(me,_t,p.indent,dt,gt)){case $t:return me;case Bn:return"'"+me.replace(/'/g,"''")+"'";case mr:return"|"+Yr(me,p.indent)+Gr(Jt(me,mt));case gr:return">"+Yr(me,p.indent)+Gr(Jt(gn(me,dt),mt));case Yn:return'"'+Tr(me)+'"';default:throw new l("impossible error: invalid scalar style")}})()}function Yr(p,me){var Ve=Sn(p)?String(me):"",rt=p[p.length-1]===`
`,mt=rt&&(p[p.length-2]===`
`||p===`
`),dt=mt?"+":rt?"":"-";return Ve+dt+`
`}function Gr(p){return p[p.length-1]===`
`?p.slice(0,-1):p}function gn(p,me){for(var Ve=/(\n+)([^\n]*)/g,rt=(function(){var Ft=p.indexOf(`
`);return Ft=Ft!==-1?Ft:p.length,Ve.lastIndex=Ft,Pr(p.slice(0,Ft),me)})(),mt=p[0]===`
`||p[0]===" ",dt,_t;_t=Ve.exec(p);){var gt=_t[1],Ct=_t[2];dt=Ct[0]===" ",rt+=gt+(!mt&&!dt&&Ct!==""?`
`:"")+Pr(Ct,me),mt=dt}return rt}function Pr(p,me){if(p===""||p[0]===" ")return p;for(var Ve=/ [^ ]/g,rt,mt=0,dt,_t=0,gt=0,Ct="";rt=Ve.exec(p);)gt=rt.index,gt-mt>me&&(dt=_t>mt?_t:gt,Ct+=`
`+p.slice(mt,dt),mt=dt+1),_t=gt;return Ct+=`
`,p.length-mt>me&&_t>mt?Ct+=p.slice(mt,_t)+`
`+p.slice(_t+1):Ct+=p.slice(mt),Ct.slice(1)}function Tr(p){for(var me="",Ve,rt,mt,dt=0;dt<p.length;dt++){if(Ve=p.charCodeAt(dt),Ve>=55296&&Ve<=56319&&(rt=p.charCodeAt(dt+1),rt>=56320&&rt<=57343)){me+=yt((Ve-55296)*1024+rt-56320+65536),dt++;continue}mt=Wt[Ve],me+=!mt&&Ot(Ve)?p[dt]:mt||yt(Ve)}return me}function br(p,me,Ve){var rt="",mt=p.tag,dt,_t;for(dt=0,_t=Ve.length;dt<_t;dt+=1)ct(p,me,Ve[dt],!1,!1)&&(dt!==0&&(rt+=","+(p.condenseFlow?"":" ")),rt+=p.dump);p.tag=mt,p.dump="["+rt+"]"}function Pn(p,me,Ve,rt){var mt="",dt=p.tag,_t,gt;for(_t=0,gt=Ve.length;_t<gt;_t+=1)ct(p,me+1,Ve[_t],!0,!0)&&((!rt||_t!==0)&&(mt+=nt(p,me)),p.dump&&A===p.dump.charCodeAt(0)?mt+="-":mt+="- ",mt+=p.dump);p.tag=dt,p.dump=mt||"[]"}function zn(p,me,Ve){var rt="",mt=p.tag,dt=Object.keys(Ve),_t,gt,Ct,Ft,Ht;for(_t=0,gt=dt.length;_t<gt;_t+=1)Ht="",_t!==0&&(Ht+=", "),p.condenseFlow&&(Ht+='"'),Ct=dt[_t],Ft=Ve[Ct],ct(p,me,Ct,!1,!1)&&(p.dump.length>1024&&(Ht+="? "),Ht+=p.dump+(p.condenseFlow?'"':"")+":"+(p.condenseFlow?"":" "),ct(p,me,Ft,!1,!1)&&(Ht+=p.dump,rt+=Ht));p.tag=mt,p.dump="{"+rt+"}"}function Sr(p,me,Ve,rt){var mt="",dt=p.tag,_t=Object.keys(Ve),gt,Ct,Ft,Ht,Vn,vn;if(p.sortKeys===!0)_t.sort();else if(typeof p.sortKeys=="function")_t.sort(p.sortKeys);else if(p.sortKeys)throw new l("sortKeys must be a boolean or a function");for(gt=0,Ct=_t.length;gt<Ct;gt+=1)vn="",(!rt||gt!==0)&&(vn+=nt(p,me)),Ft=_t[gt],Ht=Ve[Ft],ct(p,me+1,Ft,!0,!0,!0)&&(Vn=p.tag!==null&&p.tag!=="?"||p.dump&&p.dump.length>1024,Vn&&(p.dump&&A===p.dump.charCodeAt(0)?vn+="?":vn+="? "),vn+=p.dump,Vn&&(vn+=nt(p,me)),ct(p,me+1,Ht,!0,Vn)&&(p.dump&&A===p.dump.charCodeAt(0)?vn+=":":vn+=": ",vn+=p.dump,mt+=vn));p.tag=dt,p.dump=mt||"{}"}function f(p,me,Ve){var rt,mt,dt,_t,gt,Ct;for(mt=Ve?p.explicitTypes:p.implicitTypes,dt=0,_t=mt.length;dt<_t;dt+=1)if(gt=mt[dt],(gt.instanceOf||gt.predicate)&&(!gt.instanceOf||typeof me=="object"&&me instanceof gt.instanceOf)&&(!gt.predicate||gt.predicate(me))){if(p.tag=Ve?gt.tag:"?",gt.represent){if(Ct=p.styleMap[gt.tag]||gt.defaultStyle,c.call(gt.represent)==="[object Function]")rt=gt.represent(me,Ct);else if(k.call(gt.represent,Ct))rt=gt.represent[Ct](me,Ct);else throw new l("!<"+gt.tag+'> tag resolver accepts not "'+Ct+'" style');p.dump=rt}return!0}return!1}function ct(p,me,Ve,rt,mt,dt){p.tag=null,p.dump=Ve,f(p,Ve,!1)||f(p,Ve,!0);var _t=c.call(p.dump);rt&&(rt=p.flowLevel<0||p.flowLevel>me);var gt=_t==="[object Object]"||_t==="[object Array]",Ct,Ft;if(gt&&(Ct=p.duplicates.indexOf(Ve),Ft=Ct!==-1),(p.tag!==null&&p.tag!=="?"||Ft||p.indent!==2&&me>0)&&(mt=!1),Ft&&p.usedDuplicates[Ct])p.dump="*ref_"+Ct;else{if(gt&&Ft&&!p.usedDuplicates[Ct]&&(p.usedDuplicates[Ct]=!0),_t==="[object Object]")rt&&Object.keys(p.dump).length!==0?(Sr(p,me,p.dump,mt),Ft&&(p.dump="&ref_"+Ct+p.dump)):(zn(p,me,p.dump),Ft&&(p.dump="&ref_"+Ct+" "+p.dump));else if(_t==="[object Array]"){var Ht=p.noArrayIndent&&me>0?me-1:me;rt&&p.dump.length!==0?(Pn(p,Ht,p.dump,mt),Ft&&(p.dump="&ref_"+Ct+p.dump)):(br(p,Ht,p.dump),Ft&&(p.dump="&ref_"+Ct+" "+p.dump))}else if(_t==="[object String]")p.tag!=="?"&&Jn(p,p.dump,me,dt);else{if(p.skipInvalid)return!1;throw new l("unacceptable kind of an object to dump "+_t)}p.tag!==null&&p.tag!=="?"&&(p.dump="!<"+p.tag+"> "+p.dump)}return!0}function Et(p,me){var Ve=[],rt=[],mt,dt;for(ee(p,Ve,rt),mt=0,dt=rt.length;mt<dt;mt+=1)me.duplicates.push(Ve[rt[mt]]);me.usedDuplicates=new Array(dt)}function ee(p,me,Ve){var rt,mt,dt;if(p!==null&&typeof p=="object")if(mt=me.indexOf(p),mt!==-1)Ve.indexOf(mt)===-1&&Ve.push(mt);else if(me.push(p),Array.isArray(p))for(mt=0,dt=p.length;mt<dt;mt+=1)ee(p[mt],me,Ve);else for(rt=Object.keys(p),mt=0,dt=rt.length;mt<dt;mt+=1)ee(p[rt[mt]],me,Ve)}function s(p,me){me=me||{};var Ve=new qt(me);return Ve.noRefs||Et(p,Ve),ct(Ve,0,p,!0,!0)?Ve.dump+`
`:""}function g(p,me){return s(p,i.extend({schema:u},me))}return dumper.dump=s,dumper.safeDump=g,dumper}var hasRequiredJsYaml$1;function requireJsYaml$1(){if(hasRequiredJsYaml$1)return jsYaml$1;hasRequiredJsYaml$1=1;var i=requireLoader(),l=requireDumper();function x(u){return function(){throw new Error("Function "+u+" is deprecated and cannot be used.")}}return jsYaml$1.Type=requireType(),jsYaml$1.Schema=requireSchema(),jsYaml$1.FAILSAFE_SCHEMA=requireFailsafe(),jsYaml$1.JSON_SCHEMA=requireJson(),jsYaml$1.CORE_SCHEMA=requireCore(),jsYaml$1.DEFAULT_SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_FULL_SCHEMA=requireDefault_full(),jsYaml$1.load=i.load,jsYaml$1.loadAll=i.loadAll,jsYaml$1.safeLoad=i.safeLoad,jsYaml$1.safeLoadAll=i.safeLoadAll,jsYaml$1.dump=l.dump,jsYaml$1.safeDump=l.safeDump,jsYaml$1.YAMLException=requireException(),jsYaml$1.MINIMAL_SCHEMA=requireFailsafe(),jsYaml$1.SAFE_SCHEMA=requireDefault_safe(),jsYaml$1.DEFAULT_SCHEMA=requireDefault_full(),jsYaml$1.scan=x("scan"),jsYaml$1.parse=x("parse"),jsYaml$1.compose=x("compose"),jsYaml$1.addConstructor=x("addConstructor"),jsYaml$1}var jsYaml,hasRequiredJsYaml;function requireJsYaml(){if(hasRequiredJsYaml)return jsYaml;hasRequiredJsYaml=1;var i=requireJsYaml$1();return jsYaml=i,jsYaml}var hasRequiredEngines;function requireEngines(){return hasRequiredEngines||(hasRequiredEngines=1,(function(module,exports){const yaml=requireJsYaml(),engines=module.exports;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)},engines.json={parse:JSON.parse.bind(JSON),stringify:function(i,l){const x=Object.assign({replacer:null,space:2},l);return JSON.stringify(i,x.replacer,x.space)}},engines.javascript={parse:function parse(str,options,wrap){try{return wrap!==!1&&(str=`(function() {
return `+str.trim()+`;
}());`),eval(str)||{}}catch(i){if(wrap!==!1&&/(unexpected|identifier)/i.test(i.message))return parse(str,options,!1);throw new SyntaxError(i)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}}})(engines)),engines.exports}var utils={};/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */var stripBomString,hasRequiredStripBomString;function requireStripBomString(){return hasRequiredStripBomString||(hasRequiredStripBomString=1,stripBomString=function(i){return typeof i=="string"&&i.charAt(0)==="\uFEFF"?i.slice(1):i}),stripBomString}var hasRequiredUtils;function requireUtils(){return hasRequiredUtils||(hasRequiredUtils=1,(function(i){const l=requireStripBomString(),x=requireKindOf();i.define=function(u,c,k){Reflect.defineProperty(u,c,{enumerable:!1,configurable:!0,writable:!0,value:k})},i.isBuffer=function(u){return x(u)==="buffer"},i.isObject=function(u){return x(u)==="object"},i.toBuffer=function(u){return typeof u=="string"?Buffer.from(u):u},i.toString=function(u){if(i.isBuffer(u))return l(String(u));if(typeof u!="string")throw new TypeError("expected input to be a string or buffer");return l(u)},i.arrayify=function(u){return u?Array.isArray(u)?u:[u]:[]},i.startsWith=function(u,c,k){return typeof k!="number"&&(k=c.length),u.slice(0,k)===c}})(utils)),utils}var defaults,hasRequiredDefaults;function requireDefaults(){if(hasRequiredDefaults)return defaults;hasRequiredDefaults=1;const i=requireEngines(),l=requireUtils();return defaults=function(x){const u=Object.assign({},x);return u.delimiters=l.arrayify(u.delims||u.delimiters||"---"),u.delimiters.length===1&&u.delimiters.push(u.delimiters[0]),u.language=(u.language||u.lang||"yaml").toLowerCase(),u.engines=Object.assign({},i,u.parsers,u.engines),u},defaults}var engine,hasRequiredEngine;function requireEngine(){if(hasRequiredEngine)return engine;hasRequiredEngine=1,engine=function(l,x){let u=x.engines[l]||x.engines[i(l)];if(typeof u>"u")throw new Error('gray-matter engine "'+l+'" is not registered');return typeof u=="function"&&(u={parse:u}),u};function i(l){switch(l.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return l}}return engine}var stringify,hasRequiredStringify;function requireStringify(){if(hasRequiredStringify)return stringify;hasRequiredStringify=1;const i=requireKindOf(),l=requireEngine(),x=requireDefaults();stringify=function(c,k,T){if(k==null&&T==null)switch(i(c)){case"object":k=c.data,T={};break;case"string":return c;default:throw new TypeError("expected file to be a string or object")}const A=c.content,Z=x(T);if(k==null){if(!Z.data)return c;k=Z.data}const Y=c.language||Z.language,te=l(Y,Z);if(typeof te.stringify!="function")throw new TypeError('expected "'+Y+'.stringify" to be a function');k=Object.assign({},c.data,k);const Ye=Z.delimiters[0],tt=Z.delimiters[1],it=te.stringify(k,T).trim();let lt="";return it!=="{}"&&(lt=u(Ye)+u(it)+u(tt)),typeof c.excerpt=="string"&&c.excerpt!==""&&A.indexOf(c.excerpt.trim())===-1&&(lt+=u(c.excerpt)+u(tt)),lt+u(A)};function u(c){return c.slice(-1)!==`
`?c+`
`:c}return stringify}var excerpt,hasRequiredExcerpt;function requireExcerpt(){if(hasRequiredExcerpt)return excerpt;hasRequiredExcerpt=1;const i=requireDefaults();return excerpt=function(l,x){const u=i(x);if(l.data==null&&(l.data={}),typeof u.excerpt=="function")return u.excerpt(l,u);const c=l.data.excerpt_separator||u.excerpt_separator;if(c==null&&(u.excerpt===!1||u.excerpt==null))return l;const k=typeof u.excerpt=="string"?u.excerpt:c||u.delimiters[0],T=l.content.indexOf(k);return T!==-1&&(l.excerpt=l.content.slice(0,T)),l},excerpt}var toFile,hasRequiredToFile;function requireToFile(){if(hasRequiredToFile)return toFile;hasRequiredToFile=1;const i=requireKindOf(),l=requireStringify(),x=requireUtils();return toFile=function(u){return i(u)!=="object"&&(u={content:u}),i(u.data)!=="object"&&(u.data={}),u.contents&&u.content==null&&(u.content=u.contents),x.define(u,"orig",x.toBuffer(u.content)),x.define(u,"language",u.language||""),x.define(u,"matter",u.matter||""),x.define(u,"stringify",function(c,k){return k&&k.language&&(u.language=k.language),l(u,c,k)}),u.content=x.toString(u.content),u.isEmpty=!1,u.excerpt="",u},toFile}var parse,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse;hasRequiredParse=1;const i=requireEngine(),l=requireDefaults();return parse=function(x,u,c){const k=l(c),T=i(x,k);if(typeof T.parse!="function")throw new TypeError('expected "'+x+'.parse" to be a function');return T.parse(u,k)},parse}var grayMatter,hasRequiredGrayMatter;function requireGrayMatter(){if(hasRequiredGrayMatter)return grayMatter;hasRequiredGrayMatter=1;const i=require$$0,l=requireSectionMatter(),x=requireDefaults(),u=requireStringify(),c=requireExcerpt(),k=requireEngines(),T=requireToFile(),A=requireParse(),Z=requireUtils();function Y(Ye,tt){if(Ye==="")return{data:{},content:Ye,excerpt:"",orig:Ye};let it=T(Ye);const lt=Y.cache[it.content];if(!tt){if(lt)return it=Object.assign({},lt),it.orig=lt.orig,it;Y.cache[it.content]=it}return te(it,tt)}function te(Ye,tt){const it=x(tt),lt=it.delimiters[0],pt=`
`+it.delimiters[1];let xt=Ye.content;it.language&&(Ye.language=it.language);const At=lt.length;if(!Z.startsWith(xt,lt,At))return c(Ye,it),Ye;if(xt.charAt(At)===lt.slice(-1))return Ye;xt=xt.slice(At);const Tt=xt.length,Dt=Y.language(xt,it);Dt.name&&(Ye.language=Dt.name,xt=xt.slice(Dt.raw.length));let Ut=xt.indexOf(pt);return Ut===-1&&(Ut=Tt),Ye.matter=xt.slice(0,Ut),Ye.matter.replace(/^\s*#[^\n]+/gm,"").trim()===""?(Ye.isEmpty=!0,Ye.empty=Ye.content,Ye.data={}):Ye.data=A(Ye.language,Ye.matter,it),Ut===Tt?Ye.content="":(Ye.content=xt.slice(Ut+pt.length),Ye.content[0]==="\r"&&(Ye.content=Ye.content.slice(1)),Ye.content[0]===`
`&&(Ye.content=Ye.content.slice(1))),c(Ye,it),(it.sections===!0||typeof it.section=="function")&&l(Ye,it.section),Ye}return Y.engines=k,Y.stringify=function(Ye,tt,it){return typeof Ye=="string"&&(Ye=Y(Ye,it)),u(Ye,tt,it)},Y.read=function(Ye,tt){const it=i.readFileSync(Ye,"utf8"),lt=Y(it,tt);return lt.path=Ye,lt},Y.test=function(Ye,tt){return Z.startsWith(Ye,x(tt).delimiters[0])},Y.language=function(Ye,tt){const lt=x(tt).delimiters[0];Y.test(Ye)&&(Ye=Ye.slice(lt.length));const pt=Ye.slice(0,Ye.search(/\r?\n/));return{raw:pt,name:pt?pt.trim():""}},Y.cache={},Y.clearCache=function(){Y.cache={}},grayMatter=Y,grayMatter}var grayMatterExports=requireGrayMatter();const matter=getDefaultExportFromCjs(grayMatterExports);function L(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var O=L();function G(i){O=i}var E={exec:()=>null};function h(i,l=""){let x=typeof i=="string"?i:i.source,u={replace:(c,k)=>{let T=typeof k=="string"?k:k.source;return T=T.replace(m.caret,"$1"),x=x.replace(c,T),u},getRegex:()=>new RegExp(x,l)};return u}var m={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:i=>new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}#`),htmlBeginRegex:i=>new RegExp(`^ {0,${Math.min(3,i-1)}}<(?:[a-z].*>|!--)`,"i")},xe=/^(?:[ \t]*(?:\n|$))+/,be=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Re=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,C=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Oe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,j=/(?:[*+-]|\d{1,9}[.)])/,se=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ie=h(se).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Te=h(se).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),F=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,we=/^[^\n]+/,Q=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ye=h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Q).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Pe=h(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,j).getRegex(),v="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",U=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Se=h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",U).replace("tag",v).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),oe=h(F).replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),$e=h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",oe).getRegex(),K={blockquote:$e,code:be,def:ye,fences:Re,heading:Oe,hr:C,html:Se,lheading:ie,list:Pe,newline:xe,paragraph:oe,table:E,text:we},re=h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex(),_e={...K,lheading:Te,table:re,paragraph:h(F).replace("hr",C).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",re).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",v).getRegex()},Le={...K,html:h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",U).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:h(F).replace("hr",C).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ie).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ze=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ae=/^( {2,}|\\)\n(?!\s*$)/,Ae=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,D=/[\p{P}\p{S}]/u,W=/[\s\p{P}\p{S}]/u,le=/[^\s\p{P}\p{S}]/u,Ee=h(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,W).getRegex(),ue=/(?!~)[\p{P}\p{S}]/u,Ce=/(?!~)[\s\p{P}\p{S}]/u,Ie=/(?:[^\s\p{P}\p{S}]|~)/u,Be=/\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,pe=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,qe=h(pe,"u").replace(/punct/g,D).getRegex(),ve=h(pe,"u").replace(/punct/g,ue).getRegex(),ce="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",De=h(ce,"gu").replace(/notPunctSpace/g,le).replace(/punctSpace/g,W).replace(/punct/g,D).getRegex(),He=h(ce,"gu").replace(/notPunctSpace/g,Ie).replace(/punctSpace/g,Ce).replace(/punct/g,ue).getRegex(),Ze=h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,le).replace(/punctSpace/g,W).replace(/punct/g,D).getRegex(),Ge=h(/\\(punct)/,"gu").replace(/punct/g,D).getRegex(),Ne=h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),je=h(U).replace("(?:-->|$)","-->").getRegex(),Fe=h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",je).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),q=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,Qe=h(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",q).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),he=h(/^!?\[(label)\]\[(ref)\]/).replace("label",q).replace("ref",Q).getRegex(),de=h(/^!?\[(ref)\](?:\[\])?/).replace("ref",Q).getRegex(),Ue=h("reflink|nolink(?!\\()","g").replace("reflink",he).replace("nolink",de).getRegex(),X={_backpedal:E,anyPunctuation:Ge,autolink:Ne,blockSkip:Be,br:ae,code:ze,del:E,emStrongLDelim:qe,emStrongRDelimAst:De,emStrongRDelimUnd:Ze,escape:Me,link:Qe,nolink:de,punctuation:Ee,reflink:he,reflinkSearch:Ue,tag:Fe,text:Ae,url:E},Ke={...X,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",q).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q).getRegex()},N={...X,emStrongRDelimAst:He,emStrongLDelim:ve,url:h(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},We={...N,br:h(ae).replace("{2,}","*").getRegex(),text:h(N.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},I={normal:K,gfm:_e,pedantic:Le},M={normal:X,gfm:N,breaks:We,pedantic:Ke},Xe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ke=i=>Xe[i];function w(i,l){if(l){if(m.escapeTest.test(i))return i.replace(m.escapeReplace,ke)}else if(m.escapeTestNoEncode.test(i))return i.replace(m.escapeReplaceNoEncode,ke);return i}function J(i){try{i=encodeURI(i).replace(m.percentDecode,"%")}catch{return null}return i}function V(i,l){let x=i.replace(m.findPipe,(k,T,A)=>{let Z=!1,Y=T;for(;--Y>=0&&A[Y]==="\\";)Z=!Z;return Z?"|":" |"}),u=x.split(m.splitPipe),c=0;if(u[0].trim()||u.shift(),u.length>0&&!u.at(-1)?.trim()&&u.pop(),l)if(u.length>l)u.splice(l);else for(;u.length<l;)u.push("");for(;c<u.length;c++)u[c]=u[c].trim().replace(m.slashPipe,"|");return u}function z(i,l,x){let u=i.length;if(u===0)return"";let c=0;for(;c<u&&i.charAt(u-c-1)===l;)c++;return i.slice(0,u-c)}function ge(i,l){if(i.indexOf(l[1])===-1)return-1;let x=0;for(let u=0;u<i.length;u++)if(i[u]==="\\")u++;else if(i[u]===l[0])x++;else if(i[u]===l[1]&&(x--,x<0))return u;return x>0?-2:-1}function fe(i,l,x,u,c){let k=l.href,T=l.title||null,A=i[1].replace(c.other.outputLinkReplace,"$1");u.state.inLink=!0;let Z={type:i[0].charAt(0)==="!"?"image":"link",raw:x,href:k,title:T,text:A,tokens:u.inlineTokens(A)};return u.state.inLink=!1,Z}function Je(i,l,x){let u=i.match(x.other.indentCodeCompensation);if(u===null)return l;let c=u[1];return l.split(`
`).map(k=>{let T=k.match(x.other.beginningSpace);if(T===null)return k;let[A]=T;return A.length>=c.length?k.slice(c.length):k}).join(`
`)}var y=class{options;rules;lexer;constructor(i){this.options=i||O}space(i){let l=this.rules.block.newline.exec(i);if(l&&l[0].length>0)return{type:"space",raw:l[0]}}code(i){let l=this.rules.block.code.exec(i);if(l){let x=l[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:l[0],codeBlockStyle:"indented",text:this.options.pedantic?x:z(x,`
`)}}}fences(i){let l=this.rules.block.fences.exec(i);if(l){let x=l[0],u=Je(x,l[3]||"",this.rules);return{type:"code",raw:x,lang:l[2]?l[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):l[2],text:u}}}heading(i){let l=this.rules.block.heading.exec(i);if(l){let x=l[2].trim();if(this.rules.other.endingHash.test(x)){let u=z(x,"#");(this.options.pedantic||!u||this.rules.other.endingSpaceChar.test(u))&&(x=u.trim())}return{type:"heading",raw:l[0],depth:l[1].length,text:x,tokens:this.lexer.inline(x)}}}hr(i){let l=this.rules.block.hr.exec(i);if(l)return{type:"hr",raw:z(l[0],`
`)}}blockquote(i){let l=this.rules.block.blockquote.exec(i);if(l){let x=z(l[0],`
`).split(`
`),u="",c="",k=[];for(;x.length>0;){let T=!1,A=[],Z;for(Z=0;Z<x.length;Z++)if(this.rules.other.blockquoteStart.test(x[Z]))A.push(x[Z]),T=!0;else if(!T)A.push(x[Z]);else break;x=x.slice(Z);let Y=A.join(`
`),te=Y.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");u=u?`${u}
${Y}`:Y,c=c?`${c}
${te}`:te;let Ye=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(te,k,!0),this.lexer.state.top=Ye,x.length===0)break;let tt=k.at(-1);if(tt?.type==="code")break;if(tt?.type==="blockquote"){let it=tt,lt=it.raw+`
`+x.join(`
`),pt=this.blockquote(lt);k[k.length-1]=pt,u=u.substring(0,u.length-it.raw.length)+pt.raw,c=c.substring(0,c.length-it.text.length)+pt.text;break}else if(tt?.type==="list"){let it=tt,lt=it.raw+`
`+x.join(`
`),pt=this.list(lt);k[k.length-1]=pt,u=u.substring(0,u.length-tt.raw.length)+pt.raw,c=c.substring(0,c.length-it.raw.length)+pt.raw,x=lt.substring(k.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:k,text:c}}}list(i){let l=this.rules.block.list.exec(i);if(l){let x=l[1].trim(),u=x.length>1,c={type:"list",raw:"",ordered:u,start:u?+x.slice(0,-1):"",loose:!1,items:[]};x=u?`\\d{1,9}\\${x.slice(-1)}`:`\\${x}`,this.options.pedantic&&(x=u?x:"[*+-]");let k=this.rules.other.listItemRegex(x),T=!1;for(;i;){let Z=!1,Y="",te="";if(!(l=k.exec(i))||this.rules.block.hr.test(i))break;Y=l[0],i=i.substring(Y.length);let Ye=l[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,At=>" ".repeat(3*At.length)),tt=i.split(`
`,1)[0],it=!Ye.trim(),lt=0;if(this.options.pedantic?(lt=2,te=Ye.trimStart()):it?lt=l[1].length+1:(lt=l[2].search(this.rules.other.nonSpaceChar),lt=lt>4?1:lt,te=Ye.slice(lt),lt+=l[1].length),it&&this.rules.other.blankLine.test(tt)&&(Y+=tt+`
`,i=i.substring(tt.length+1),Z=!0),!Z){let At=this.rules.other.nextBulletRegex(lt),Tt=this.rules.other.hrRegex(lt),Dt=this.rules.other.fencesBeginRegex(lt),Ut=this.rules.other.headingBeginRegex(lt),Mt=this.rules.other.htmlBeginRegex(lt);for(;i;){let Vt=i.split(`
`,1)[0],Zt;if(tt=Vt,this.options.pedantic?(tt=tt.replace(this.rules.other.listReplaceNesting,"  "),Zt=tt):Zt=tt.replace(this.rules.other.tabCharGlobal,"    "),Dt.test(tt)||Ut.test(tt)||Mt.test(tt)||At.test(tt)||Tt.test(tt))break;if(Zt.search(this.rules.other.nonSpaceChar)>=lt||!tt.trim())te+=`
`+Zt.slice(lt);else{if(it||Ye.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Dt.test(Ye)||Ut.test(Ye)||Tt.test(Ye))break;te+=`
`+tt}!it&&!tt.trim()&&(it=!0),Y+=Vt+`
`,i=i.substring(Vt.length+1),Ye=Zt.slice(lt)}}c.loose||(T?c.loose=!0:this.rules.other.doubleBlankLine.test(Y)&&(T=!0));let pt=null,xt;this.options.gfm&&(pt=this.rules.other.listIsTask.exec(te),pt&&(xt=pt[0]!=="[ ] ",te=te.replace(this.rules.other.listReplaceTask,""))),c.items.push({type:"list_item",raw:Y,task:!!pt,checked:xt,loose:!1,text:te,tokens:[]}),c.raw+=Y}let A=c.items.at(-1);if(A)A.raw=A.raw.trimEnd(),A.text=A.text.trimEnd();else return;c.raw=c.raw.trimEnd();for(let Z=0;Z<c.items.length;Z++)if(this.lexer.state.top=!1,c.items[Z].tokens=this.lexer.blockTokens(c.items[Z].text,[]),!c.loose){let Y=c.items[Z].tokens.filter(Ye=>Ye.type==="space"),te=Y.length>0&&Y.some(Ye=>this.rules.other.anyLine.test(Ye.raw));c.loose=te}if(c.loose)for(let Z=0;Z<c.items.length;Z++)c.items[Z].loose=!0;return c}}html(i){let l=this.rules.block.html.exec(i);if(l)return{type:"html",block:!0,raw:l[0],pre:l[1]==="pre"||l[1]==="script"||l[1]==="style",text:l[0]}}def(i){let l=this.rules.block.def.exec(i);if(l){let x=l[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),u=l[2]?l[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=l[3]?l[3].substring(1,l[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):l[3];return{type:"def",tag:x,raw:l[0],href:u,title:c}}}table(i){let l=this.rules.block.table.exec(i);if(!l||!this.rules.other.tableDelimiter.test(l[2]))return;let x=V(l[1]),u=l[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=l[3]?.trim()?l[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],k={type:"table",raw:l[0],header:[],align:[],rows:[]};if(x.length===u.length){for(let T of u)this.rules.other.tableAlignRight.test(T)?k.align.push("right"):this.rules.other.tableAlignCenter.test(T)?k.align.push("center"):this.rules.other.tableAlignLeft.test(T)?k.align.push("left"):k.align.push(null);for(let T=0;T<x.length;T++)k.header.push({text:x[T],tokens:this.lexer.inline(x[T]),header:!0,align:k.align[T]});for(let T of c)k.rows.push(V(T,k.header.length).map((A,Z)=>({text:A,tokens:this.lexer.inline(A),header:!1,align:k.align[Z]})));return k}}lheading(i){let l=this.rules.block.lheading.exec(i);if(l)return{type:"heading",raw:l[0],depth:l[2].charAt(0)==="="?1:2,text:l[1],tokens:this.lexer.inline(l[1])}}paragraph(i){let l=this.rules.block.paragraph.exec(i);if(l){let x=l[1].charAt(l[1].length-1)===`
`?l[1].slice(0,-1):l[1];return{type:"paragraph",raw:l[0],text:x,tokens:this.lexer.inline(x)}}}text(i){let l=this.rules.block.text.exec(i);if(l)return{type:"text",raw:l[0],text:l[0],tokens:this.lexer.inline(l[0])}}escape(i){let l=this.rules.inline.escape.exec(i);if(l)return{type:"escape",raw:l[0],text:l[1]}}tag(i){let l=this.rules.inline.tag.exec(i);if(l)return!this.lexer.state.inLink&&this.rules.other.startATag.test(l[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(l[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(l[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(l[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:l[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:l[0]}}link(i){let l=this.rules.inline.link.exec(i);if(l){let x=l[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(x)){if(!this.rules.other.endAngleBracket.test(x))return;let k=z(x.slice(0,-1),"\\");if((x.length-k.length)%2===0)return}else{let k=ge(l[2],"()");if(k===-2)return;if(k>-1){let T=(l[0].indexOf("!")===0?5:4)+l[1].length+k;l[2]=l[2].substring(0,k),l[0]=l[0].substring(0,T).trim(),l[3]=""}}let u=l[2],c="";if(this.options.pedantic){let k=this.rules.other.pedanticHrefTitle.exec(u);k&&(u=k[1],c=k[3])}else c=l[3]?l[3].slice(1,-1):"";return u=u.trim(),this.rules.other.startAngleBracket.test(u)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(x)?u=u.slice(1):u=u.slice(1,-1)),fe(l,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},l[0],this.lexer,this.rules)}}reflink(i,l){let x;if((x=this.rules.inline.reflink.exec(i))||(x=this.rules.inline.nolink.exec(i))){let u=(x[2]||x[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=l[u.toLowerCase()];if(!c){let k=x[0].charAt(0);return{type:"text",raw:k,text:k}}return fe(x,c,x[0],this.lexer,this.rules)}}emStrong(i,l,x=""){let u=this.rules.inline.emStrongLDelim.exec(i);if(!(!u||u[3]&&x.match(this.rules.other.unicodeAlphaNumeric))&&(!(u[1]||u[2])||!x||this.rules.inline.punctuation.exec(x))){let c=[...u[0]].length-1,k,T,A=c,Z=0,Y=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(Y.lastIndex=0,l=l.slice(-1*i.length+c);(u=Y.exec(l))!=null;){if(k=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!k)continue;if(T=[...k].length,u[3]||u[4]){A+=T;continue}else if((u[5]||u[6])&&c%3&&!((c+T)%3)){Z+=T;continue}if(A-=T,A>0)continue;T=Math.min(T,T+A+Z);let te=[...u[0]][0].length,Ye=i.slice(0,c+u.index+te+T);if(Math.min(c,T)%2){let it=Ye.slice(1,-1);return{type:"em",raw:Ye,text:it,tokens:this.lexer.inlineTokens(it)}}let tt=Ye.slice(2,-2);return{type:"strong",raw:Ye,text:tt,tokens:this.lexer.inlineTokens(tt)}}}}codespan(i){let l=this.rules.inline.code.exec(i);if(l){let x=l[2].replace(this.rules.other.newLineCharGlobal," "),u=this.rules.other.nonSpaceChar.test(x),c=this.rules.other.startingSpaceChar.test(x)&&this.rules.other.endingSpaceChar.test(x);return u&&c&&(x=x.substring(1,x.length-1)),{type:"codespan",raw:l[0],text:x}}}br(i){let l=this.rules.inline.br.exec(i);if(l)return{type:"br",raw:l[0]}}del(i){let l=this.rules.inline.del.exec(i);if(l)return{type:"del",raw:l[0],text:l[2],tokens:this.lexer.inlineTokens(l[2])}}autolink(i){let l=this.rules.inline.autolink.exec(i);if(l){let x,u;return l[2]==="@"?(x=l[1],u="mailto:"+x):(x=l[1],u=x),{type:"link",raw:l[0],text:x,href:u,tokens:[{type:"text",raw:x,text:x}]}}}url(i){let l;if(l=this.rules.inline.url.exec(i)){let x,u;if(l[2]==="@")x=l[0],u="mailto:"+x;else{let c;do c=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])?.[0]??"";while(c!==l[0]);x=l[0],l[1]==="www."?u="http://"+l[0]:u=l[0]}return{type:"link",raw:l[0],text:x,href:u,tokens:[{type:"text",raw:x,text:x}]}}}inlineText(i){let l=this.rules.inline.text.exec(i);if(l){let x=this.lexer.state.inRawBlock;return{type:"text",raw:l[0],text:l[0],escaped:x}}}},b=class Os{tokens;options;state;tokenizer;inlineQueue;constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||O,this.options.tokenizer=this.options.tokenizer||new y,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let x={other:m,block:I.normal,inline:M.normal};this.options.pedantic?(x.block=I.pedantic,x.inline=M.pedantic):this.options.gfm&&(x.block=I.gfm,this.options.breaks?x.inline=M.breaks:x.inline=M.gfm),this.tokenizer.rules=x}static get rules(){return{block:I,inline:M}}static lex(l,x){return new Os(x).lex(l)}static lexInline(l,x){return new Os(x).inlineTokens(l)}lex(l){l=l.replace(m.carriageReturn,`
`),this.blockTokens(l,this.tokens);for(let x=0;x<this.inlineQueue.length;x++){let u=this.inlineQueue[x];this.inlineTokens(u.src,u.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(l,x=[],u=!1){for(this.options.pedantic&&(l=l.replace(m.tabCharGlobal,"    ").replace(m.spaceLine,""));l;){let c;if(this.options.extensions?.block?.some(T=>(c=T.call({lexer:this},l,x))?(l=l.substring(c.raw.length),x.push(c),!0):!1))continue;if(c=this.tokenizer.space(l)){l=l.substring(c.raw.length);let T=x.at(-1);c.raw.length===1&&T!==void 0?T.raw+=`
`:x.push(c);continue}if(c=this.tokenizer.code(l)){l=l.substring(c.raw.length);let T=x.at(-1);T?.type==="paragraph"||T?.type==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+c.raw,T.text+=`
`+c.text,this.inlineQueue.at(-1).src=T.text):x.push(c);continue}if(c=this.tokenizer.fences(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.heading(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.hr(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.blockquote(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.list(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.html(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.def(l)){l=l.substring(c.raw.length);let T=x.at(-1);T?.type==="paragraph"||T?.type==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+c.raw,T.text+=`
`+c.raw,this.inlineQueue.at(-1).src=T.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},x.push(c));continue}if(c=this.tokenizer.table(l)){l=l.substring(c.raw.length),x.push(c);continue}if(c=this.tokenizer.lheading(l)){l=l.substring(c.raw.length),x.push(c);continue}let k=l;if(this.options.extensions?.startBlock){let T=1/0,A=l.slice(1),Z;this.options.extensions.startBlock.forEach(Y=>{Z=Y.call({lexer:this},A),typeof Z=="number"&&Z>=0&&(T=Math.min(T,Z))}),T<1/0&&T>=0&&(k=l.substring(0,T+1))}if(this.state.top&&(c=this.tokenizer.paragraph(k))){let T=x.at(-1);u&&T?.type==="paragraph"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+c.raw,T.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):x.push(c),u=k.length!==l.length,l=l.substring(c.raw.length);continue}if(c=this.tokenizer.text(l)){l=l.substring(c.raw.length);let T=x.at(-1);T?.type==="text"?(T.raw+=(T.raw.endsWith(`
`)?"":`
`)+c.raw,T.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=T.text):x.push(c);continue}if(l){let T="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return this.state.top=!0,x}inline(l,x=[]){return this.inlineQueue.push({src:l,tokens:x}),x}inlineTokens(l,x=[]){let u=l,c=null;if(this.tokens.links){let A=Object.keys(this.tokens.links);if(A.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(u))!=null;)A.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(u))!=null;)u=u.slice(0,c.index)+"++"+u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(c=this.tokenizer.rules.inline.blockSkip.exec(u))!=null;)u=u.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);u=this.options.hooks?.emStrongMask?.call({lexer:this},u)??u;let k=!1,T="";for(;l;){k||(T=""),k=!1;let A;if(this.options.extensions?.inline?.some(Y=>(A=Y.call({lexer:this},l,x))?(l=l.substring(A.raw.length),x.push(A),!0):!1))continue;if(A=this.tokenizer.escape(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.tag(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.link(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.reflink(l,this.tokens.links)){l=l.substring(A.raw.length);let Y=x.at(-1);A.type==="text"&&Y?.type==="text"?(Y.raw+=A.raw,Y.text+=A.text):x.push(A);continue}if(A=this.tokenizer.emStrong(l,u,T)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.codespan(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.br(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.del(l)){l=l.substring(A.raw.length),x.push(A);continue}if(A=this.tokenizer.autolink(l)){l=l.substring(A.raw.length),x.push(A);continue}if(!this.state.inLink&&(A=this.tokenizer.url(l))){l=l.substring(A.raw.length),x.push(A);continue}let Z=l;if(this.options.extensions?.startInline){let Y=1/0,te=l.slice(1),Ye;this.options.extensions.startInline.forEach(tt=>{Ye=tt.call({lexer:this},te),typeof Ye=="number"&&Ye>=0&&(Y=Math.min(Y,Ye))}),Y<1/0&&Y>=0&&(Z=l.substring(0,Y+1))}if(A=this.tokenizer.inlineText(Z)){l=l.substring(A.raw.length),A.raw.slice(-1)!=="_"&&(T=A.raw.slice(-1)),k=!0;let Y=x.at(-1);Y?.type==="text"?(Y.raw+=A.raw,Y.text+=A.text):x.push(A);continue}if(l){let Y="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(Y);break}else throw new Error(Y)}}return x}},P=class{options;parser;constructor(i){this.options=i||O}space(i){return""}code({text:i,lang:l,escaped:x}){let u=(l||"").match(m.notSpaceStart)?.[0],c=i.replace(m.endingNewline,"")+`
`;return u?'<pre><code class="language-'+w(u)+'">'+(x?c:w(c,!0))+`</code></pre>
`:"<pre><code>"+(x?c:w(c,!0))+`</code></pre>
`}blockquote({tokens:i}){return`<blockquote>
${this.parser.parse(i)}</blockquote>
`}html({text:i}){return i}def(i){return""}heading({tokens:i,depth:l}){return`<h${l}>${this.parser.parseInline(i)}</h${l}>
`}hr(i){return`<hr>
`}list(i){let l=i.ordered,x=i.start,u="";for(let T=0;T<i.items.length;T++){let A=i.items[T];u+=this.listitem(A)}let c=l?"ol":"ul",k=l&&x!==1?' start="'+x+'"':"";return"<"+c+k+`>
`+u+"</"+c+`>
`}listitem(i){let l="";if(i.task){let x=this.checkbox({checked:!!i.checked});i.loose?i.tokens[0]?.type==="paragraph"?(i.tokens[0].text=x+" "+i.tokens[0].text,i.tokens[0].tokens&&i.tokens[0].tokens.length>0&&i.tokens[0].tokens[0].type==="text"&&(i.tokens[0].tokens[0].text=x+" "+w(i.tokens[0].tokens[0].text),i.tokens[0].tokens[0].escaped=!0)):i.tokens.unshift({type:"text",raw:x+" ",text:x+" ",escaped:!0}):l+=x+" "}return l+=this.parser.parse(i.tokens,!!i.loose),`<li>${l}</li>
`}checkbox({checked:i}){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:i}){return`<p>${this.parser.parseInline(i)}</p>
`}table(i){let l="",x="";for(let c=0;c<i.header.length;c++)x+=this.tablecell(i.header[c]);l+=this.tablerow({text:x});let u="";for(let c=0;c<i.rows.length;c++){let k=i.rows[c];x="";for(let T=0;T<k.length;T++)x+=this.tablecell(k[T]);u+=this.tablerow({text:x})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+u+`</table>
`}tablerow({text:i}){return`<tr>
${i}</tr>
`}tablecell(i){let l=this.parser.parseInline(i.tokens),x=i.header?"th":"td";return(i.align?`<${x} align="${i.align}">`:`<${x}>`)+l+`</${x}>
`}strong({tokens:i}){return`<strong>${this.parser.parseInline(i)}</strong>`}em({tokens:i}){return`<em>${this.parser.parseInline(i)}</em>`}codespan({text:i}){return`<code>${w(i,!0)}</code>`}br(i){return"<br>"}del({tokens:i}){return`<del>${this.parser.parseInline(i)}</del>`}link({href:i,title:l,tokens:x}){let u=this.parser.parseInline(x),c=J(i);if(c===null)return u;i=c;let k='<a href="'+i+'"';return l&&(k+=' title="'+w(l)+'"'),k+=">"+u+"</a>",k}image({href:i,title:l,text:x,tokens:u}){u&&(x=this.parser.parseInline(u,this.parser.textRenderer));let c=J(i);if(c===null)return w(x);i=c;let k=`<img src="${i}" alt="${x}"`;return l&&(k+=` title="${w(l)}"`),k+=">",k}text(i){return"tokens"in i&&i.tokens?this.parser.parseInline(i.tokens):"escaped"in i&&i.escaped?i.text:w(i.text)}},$=class{strong({text:i}){return i}em({text:i}){return i}codespan({text:i}){return i}del({text:i}){return i}html({text:i}){return i}text({text:i}){return i}link({text:i}){return""+i}image({text:i}){return""+i}br(){return""}},R=class Ns{options;renderer;textRenderer;constructor(l){this.options=l||O,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new $}static parse(l,x){return new Ns(x).parse(l)}static parseInline(l,x){return new Ns(x).parseInline(l)}parse(l,x=!0){let u="";for(let c=0;c<l.length;c++){let k=l[c];if(this.options.extensions?.renderers?.[k.type]){let A=k,Z=this.options.extensions.renderers[A.type].call({parser:this},A);if(Z!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(A.type)){u+=Z||"";continue}}let T=k;switch(T.type){case"space":{u+=this.renderer.space(T);continue}case"hr":{u+=this.renderer.hr(T);continue}case"heading":{u+=this.renderer.heading(T);continue}case"code":{u+=this.renderer.code(T);continue}case"table":{u+=this.renderer.table(T);continue}case"blockquote":{u+=this.renderer.blockquote(T);continue}case"list":{u+=this.renderer.list(T);continue}case"html":{u+=this.renderer.html(T);continue}case"def":{u+=this.renderer.def(T);continue}case"paragraph":{u+=this.renderer.paragraph(T);continue}case"text":{let A=T,Z=this.renderer.text(A);for(;c+1<l.length&&l[c+1].type==="text";)A=l[++c],Z+=`
`+this.renderer.text(A);x?u+=this.renderer.paragraph({type:"paragraph",raw:Z,text:Z,tokens:[{type:"text",raw:Z,text:Z,escaped:!0}]}):u+=Z;continue}default:{let A='Token with "'+T.type+'" type was not found.';if(this.options.silent)return console.error(A),"";throw new Error(A)}}}return u}parseInline(l,x=this.renderer){let u="";for(let c=0;c<l.length;c++){let k=l[c];if(this.options.extensions?.renderers?.[k.type]){let A=this.options.extensions.renderers[k.type].call({parser:this},k);if(A!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(k.type)){u+=A||"";continue}}let T=k;switch(T.type){case"escape":{u+=x.text(T);break}case"html":{u+=x.html(T);break}case"link":{u+=x.link(T);break}case"image":{u+=x.image(T);break}case"strong":{u+=x.strong(T);break}case"em":{u+=x.em(T);break}case"codespan":{u+=x.codespan(T);break}case"br":{u+=x.br(T);break}case"del":{u+=x.del(T);break}case"text":{u+=x.text(T);break}default:{let A='Token with "'+T.type+'" type was not found.';if(this.options.silent)return console.error(A),"";throw new Error(A)}}}return u}},S=class{options;block;constructor(i){this.options=i||O}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(i){return i}postprocess(i){return i}processAllTokens(i){return i}emStrongMask(i){return i}provideLexer(){return this.block?b.lex:b.lexInline}provideParser(){return this.block?R.parse:R.parseInline}},B=class{defaults=L();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=R;Renderer=P;TextRenderer=$;Lexer=b;Tokenizer=y;Hooks=S;constructor(...i){this.use(...i)}walkTokens(i,l){let x=[];for(let u of i)switch(x=x.concat(l.call(this,u)),u.type){case"table":{let c=u;for(let k of c.header)x=x.concat(this.walkTokens(k.tokens,l));for(let k of c.rows)for(let T of k)x=x.concat(this.walkTokens(T.tokens,l));break}case"list":{let c=u;x=x.concat(this.walkTokens(c.items,l));break}default:{let c=u;this.defaults.extensions?.childTokens?.[c.type]?this.defaults.extensions.childTokens[c.type].forEach(k=>{let T=c[k].flat(1/0);x=x.concat(this.walkTokens(T,l))}):c.tokens&&(x=x.concat(this.walkTokens(c.tokens,l)))}}return x}use(...i){let l=this.defaults.extensions||{renderers:{},childTokens:{}};return i.forEach(x=>{let u={...x};if(u.async=this.defaults.async||u.async||!1,x.extensions&&(x.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let k=l.renderers[c.name];k?l.renderers[c.name]=function(...T){let A=c.renderer.apply(this,T);return A===!1&&(A=k.apply(this,T)),A}:l.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let k=l[c.level];k?k.unshift(c.tokenizer):l[c.level]=[c.tokenizer],c.start&&(c.level==="block"?l.startBlock?l.startBlock.push(c.start):l.startBlock=[c.start]:c.level==="inline"&&(l.startInline?l.startInline.push(c.start):l.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(l.childTokens[c.name]=c.childTokens)}),u.extensions=l),x.renderer){let c=this.defaults.renderer||new P(this.defaults);for(let k in x.renderer){if(!(k in c))throw new Error(`renderer '${k}' does not exist`);if(["options","parser"].includes(k))continue;let T=k,A=x.renderer[T],Z=c[T];c[T]=(...Y)=>{let te=A.apply(c,Y);return te===!1&&(te=Z.apply(c,Y)),te||""}}u.renderer=c}if(x.tokenizer){let c=this.defaults.tokenizer||new y(this.defaults);for(let k in x.tokenizer){if(!(k in c))throw new Error(`tokenizer '${k}' does not exist`);if(["options","rules","lexer"].includes(k))continue;let T=k,A=x.tokenizer[T],Z=c[T];c[T]=(...Y)=>{let te=A.apply(c,Y);return te===!1&&(te=Z.apply(c,Y)),te}}u.tokenizer=c}if(x.hooks){let c=this.defaults.hooks||new S;for(let k in x.hooks){if(!(k in c))throw new Error(`hook '${k}' does not exist`);if(["options","block"].includes(k))continue;let T=k,A=x.hooks[T],Z=c[T];S.passThroughHooks.has(k)?c[T]=Y=>{if(this.defaults.async&&S.passThroughHooksRespectAsync.has(k))return Promise.resolve(A.call(c,Y)).then(Ye=>Z.call(c,Ye));let te=A.call(c,Y);return Z.call(c,te)}:c[T]=(...Y)=>{let te=A.apply(c,Y);return te===!1&&(te=Z.apply(c,Y)),te}}u.hooks=c}if(x.walkTokens){let c=this.defaults.walkTokens,k=x.walkTokens;u.walkTokens=function(T){let A=[];return A.push(k.call(this,T)),c&&(A=A.concat(c.call(this,T))),A}}this.defaults={...this.defaults,...u}}),this}setOptions(i){return this.defaults={...this.defaults,...i},this}lexer(i,l){return b.lex(i,l??this.defaults)}parser(i,l){return R.parse(i,l??this.defaults)}parseMarkdown(i){return(l,x)=>{let u={...x},c={...this.defaults,...u},k=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&u.async===!1)return k(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof l>"u"||l===null)return k(new Error("marked(): input parameter is undefined or null"));if(typeof l!="string")return k(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(l)+", string expected"));c.hooks&&(c.hooks.options=c,c.hooks.block=i);let T=c.hooks?c.hooks.provideLexer():i?b.lex:b.lexInline,A=c.hooks?c.hooks.provideParser():i?R.parse:R.parseInline;if(c.async)return Promise.resolve(c.hooks?c.hooks.preprocess(l):l).then(Z=>T(Z,c)).then(Z=>c.hooks?c.hooks.processAllTokens(Z):Z).then(Z=>c.walkTokens?Promise.all(this.walkTokens(Z,c.walkTokens)).then(()=>Z):Z).then(Z=>A(Z,c)).then(Z=>c.hooks?c.hooks.postprocess(Z):Z).catch(k);try{c.hooks&&(l=c.hooks.preprocess(l));let Z=T(l,c);c.hooks&&(Z=c.hooks.processAllTokens(Z)),c.walkTokens&&this.walkTokens(Z,c.walkTokens);let Y=A(Z,c);return c.hooks&&(Y=c.hooks.postprocess(Y)),Y}catch(Z){return k(Z)}}}onError(i,l){return x=>{if(x.message+=`
Please report this to https://github.com/markedjs/marked.`,i){let u="<p>An error occurred:</p><pre>"+w(x.message+"",!0)+"</pre>";return l?Promise.resolve(u):u}if(l)return Promise.reject(x);throw x}}},_=new B;function d(i,l){return _.parse(i,l)}d.options=d.setOptions=function(i){return _.setOptions(i),d.defaults=_.defaults,G(d.defaults),d};d.getDefaults=L;d.defaults=O;d.use=function(...i){return _.use(...i),d.defaults=_.defaults,G(d.defaults),d};d.walkTokens=function(i,l){return _.walkTokens(i,l)};d.parseInline=_.parseInline;d.Parser=R;d.parser=R.parse;d.Renderer=P;d.TextRenderer=$;d.Lexer=b;d.lexer=b.lex;d.Tokenizer=y;d.Hooks=S;d.parse=d;d.options;d.setOptions;d.use;d.walkTokens;d.parseInline;R.parse;b.lex;const globalWithBuffer=globalThis;typeof globalWithBuffer.Buffer>"u"&&(globalWithBuffer.Buffer=bufferExports.Buffer);const modules=Object.assign({"./2025-03-08-Implementation-Methods-for-Reducing-Power-Consumption-Based-on-Programmatic-Motor-Control.md":__vite_glob_0_0,"./2025-03-09-How-to-Detect-Reduced-Motor-Power-Consumption-Through-Software.md":__vite_glob_0_1,"./2025-03-23-100-days-of-Python-day-0.md":__vite_glob_0_2,"./2025-03-26-How-to-Implement-Regenerative-Braking-in-a-Wheelchair.md":__vite_glob_0_3,"./2025-03-26-welcome-to-jekyll.markdown":__vite_glob_0_4,"./2025-03-27-Smart-soft-start.md":__vite_glob_0_5,"./2025-03-28-Implementing-Automatic-Charging-Station-Wake-Up-Using-NFC.md":__vite_glob_0_6,"./2025-03-29-Implementation-of-Automatic-Battery-Specification-Recognition-and-Optimal-Charging-Strategy-upon-Plugging-in-the-Charging-Gun.md":__vite_glob_0_7,"./2025-04-06-🧪-LAB-Report–Week-14.md":__vite_glob_0_8,"./2025-04-11-100-days-of-Python-day-20.md":__vite_glob_0_9,"./2025-04-12-100-days-of-Python-day-21.md":__vite_glob_0_10,"./2025-04-13-100-days-of-Python-day 22.md":__vite_glob_0_11,"./2025-04-13-🧪-LAB-Report–Week-15.md":__vite_glob_0_12,"./2025-04-14-100-days-of-Python-day 23.md":__vite_glob_0_13,"./2025-07-03-The-Birth-of-Kafe-AI.md":__vite_glob_0_14,"./2025-07-13-From-Zero-to-One-How-I-Built-Kafe-AI's-Technical-Architecture.md":__vite_glob_0_15,"./2025-07-15-Can-Coffee-Shops-Use-AI-How-to-Optimize-Your-Coffee-Shop-Operations-with-kafeAI.md":__vite_glob_0_16,"./2025-07-31-Smart-Inventory-Integration-How-KafeAI-Revolutionizes-Coffee-Shop-Operations.md":__vite_glob_0_17}),normalizeSlug=i=>(i.split("/").pop()??i).replace(/\.(md|markdown)$/i,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),ensureString=(i,l="")=>typeof i=="string"?i:l,ensureStringArray=i=>Array.isArray(i)?i.map(l=>typeof l=="string"?l:String(l)):[],toPost=(i,l)=>{const{data:x,content:u}=matter(l),c=normalizeSlug(i),k=ensureString(x.title,c),T=ensureString(x.date,"1970-01-01"),A=ensureString(x.author,profile.name),Z=ensureString(x.excerpt,u.trim().split(/\n\n+/)[0]??""),Y=Z.length>220?`${Z.slice(0,217)}...`:Z,te=ensureStringArray(x.tags),Ye=typeof x.image=="string"&&x.image.trim()?x.image.trim():void 0,tt=d.parse(u,{async:!1});return{slug:c,title:k,date:T,author:A,excerpt:Y,tags:te,image:Ye,content:u,html:tt}},posts=Object.entries(modules).map(([i,l])=>toPost(i,l)).sort((i,l)=>i.date<l.date?1:-1),findPostBySlug=i=>posts.find(l=>l.slug===i),formatDate=i=>{const l=new Date(i);return Number.isNaN(l.getTime())?i:l.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},BlogSpotlight=()=>{const i=posts.slice(0,4);return jsxRuntimeExports.jsxs("section",{className:"card stack","aria-labelledby":"blog-heading",children:[jsxRuntimeExports.jsxs("div",{className:"section-heading",children:[jsxRuntimeExports.jsx("h2",{id:"blog-heading",className:"title",children:"Latest writings"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"Deep dives on agentic systems, robotics insights, and the lessons I learn while shipping products."})]}),jsxRuntimeExports.jsx("div",{className:"blog-grid",children:i.map(l=>jsxRuntimeExports.jsxs("article",{className:"post-card",children:[jsxRuntimeExports.jsxs("div",{className:"post-meta",children:[jsxRuntimeExports.jsx("span",{children:formatDate(l.date)}),l.tags.map(x=>jsxRuntimeExports.jsx("span",{className:"badge",children:x},x))]}),jsxRuntimeExports.jsx("h3",{children:l.title}),jsxRuntimeExports.jsx("p",{className:"subtle",children:l.excerpt}),jsxRuntimeExports.jsx(Link,{className:"button",to:`/blog/${l.slug}`,children:"Read story"})]},l.slug))}),jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsx(Link,{className:"button",to:"/blog",children:"View the full archive"})})]})},HomePage=()=>jsxRuntimeExports.jsxs("div",{className:"container stack",style:{paddingTop:0,gap:"24px"},children:[jsxRuntimeExports.jsxs("div",{className:"two-column",style:{display:"grid",gap:"20px"},children:[jsxRuntimeExports.jsx(HeroPanel,{}),jsxRuntimeExports.jsx(ChatPanel,{})]}),jsxRuntimeExports.jsx(SkillsSection,{}),jsxRuntimeExports.jsx(ExperienceSection,{}),jsxRuntimeExports.jsx(BlogSpotlight,{})]}),BlogIndexPage=()=>jsxRuntimeExports.jsx("div",{className:"container stack",style:{paddingTop:0,gap:"24px"},children:jsxRuntimeExports.jsxs("section",{className:"card stack","aria-labelledby":"blog-archive",children:[jsxRuntimeExports.jsxs("div",{className:"section-heading",children:[jsxRuntimeExports.jsx("h1",{id:"blog-archive",className:"title",children:"Blog archive"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"Every experiment, teardown, and field note I have published. Filtered retro style, indexed for easy binge reading."})]}),jsxRuntimeExports.jsx("div",{className:"stack",style:{gap:"16px"},children:posts.map(i=>jsxRuntimeExports.jsxs("article",{className:"post-card",children:[jsxRuntimeExports.jsxs("div",{className:"post-meta",children:[jsxRuntimeExports.jsx("span",{children:formatDate(i.date)}),jsxRuntimeExports.jsxs("span",{children:["by ",i.author]}),i.tags.map(l=>jsxRuntimeExports.jsx("span",{className:"badge",children:l},l))]}),jsxRuntimeExports.jsx("h2",{style:{margin:0},children:i.title}),jsxRuntimeExports.jsx("p",{className:"subtle",children:i.excerpt}),jsxRuntimeExports.jsx(Link,{className:"button",to:`/blog/${i.slug}`,children:"Read article"})]},i.slug))})]})}),BlogPostPage=()=>{const{slug:i=""}=useParams(),l=findPostBySlug(i);return reactExports.useEffect(()=>{l&&(document.title=`${l.title} · Nuo Jin`)},[l]),l?jsxRuntimeExports.jsx("div",{className:"container stack",style:{paddingTop:0,gap:"24px"},children:jsxRuntimeExports.jsxs("article",{className:"card article",children:[jsxRuntimeExports.jsxs("header",{className:"stack",style:{gap:"12px"},children:[jsxRuntimeExports.jsx(Link,{className:"button",to:"/blog",children:"← Back to blog"}),jsxRuntimeExports.jsx("h1",{children:l.title}),jsxRuntimeExports.jsxs("div",{className:"post-meta",children:[jsxRuntimeExports.jsx("span",{children:formatDate(l.date)}),jsxRuntimeExports.jsxs("span",{children:["by ",l.author]}),l.tags.map(x=>jsxRuntimeExports.jsx("span",{className:"badge",children:x},x))]}),l.image&&jsxRuntimeExports.jsx("img",{src:l.image,alt:"Cover art"})]}),jsxRuntimeExports.jsx("div",{dangerouslySetInnerHTML:{__html:l.html}})]})}):jsxRuntimeExports.jsx("div",{className:"container stack",style:{paddingTop:0},children:jsxRuntimeExports.jsxs("section",{className:"card stack",children:[jsxRuntimeExports.jsx("h1",{className:"title",children:"404"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"I have not published that story yet."}),jsxRuntimeExports.jsx(Link,{className:"button",to:"/blog",children:"Back to blog"})]})})},NotFoundPage=()=>jsxRuntimeExports.jsx("div",{className:"container stack",style:{paddingTop:0,gap:"24px"},children:jsxRuntimeExports.jsxs("section",{className:"card stack",children:[jsxRuntimeExports.jsx("h1",{className:"title",children:"Lost in the grid"}),jsxRuntimeExports.jsx("p",{className:"subtle",children:"That page does not exist. Maybe the pixels have drifted into another timeline."}),jsxRuntimeExports.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[jsxRuntimeExports.jsx(Link,{className:"button",to:"/",children:"Go home"}),jsxRuntimeExports.jsx(Link,{className:"button",to:"/blog",children:"Browse blog"})]})]})}),App=()=>jsxRuntimeExports.jsx(BrowserRouter,{children:jsxRuntimeExports.jsx(Routes,{children:jsxRuntimeExports.jsxs(Route,{element:jsxRuntimeExports.jsx(AppLayout,{}),children:[jsxRuntimeExports.jsx(Route,{index:!0,element:jsxRuntimeExports.jsx(HomePage,{})}),jsxRuntimeExports.jsx(Route,{path:"blog",element:jsxRuntimeExports.jsx(BlogIndexPage,{})}),jsxRuntimeExports.jsx(Route,{path:"blog/:slug",element:jsxRuntimeExports.jsx(BlogPostPage,{})}),jsxRuntimeExports.jsx(Route,{path:"*",element:jsxRuntimeExports.jsx(NotFoundPage,{})})]})})});clientExports.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(reactExports.StrictMode,{children:jsxRuntimeExports.jsx(App,{})}));
