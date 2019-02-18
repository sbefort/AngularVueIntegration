!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],s=0,u=[];s<a.length;s++)o=a[s],P[o]&&u.push(P[o][0]),P[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(T&&T(t);u.length;)u.shift()();return H.push.apply(H,c||[]),n()}function n(){for(var e,t=0;t<H.length;t++){for(var n=H[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==P[a]&&(r=!1)}r&&(H.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!D[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--b&&0===_&&R()}(e,t),r&&r(e,t)};var o,a=!0,i="fc0f223d535dbd1f4e49",c=1e4,s={},u=[],d=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:x,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function h(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var v,m,y,b=0,_=0,g={},w={},D={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},g={},D=e.c,y=e.h,h("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});for(var n in m={},P)j(n);return"prepare"===f&&0===_&&0===b&&R(),t});var t}function j(e){D[e]?(w[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function R(){h("ready");var e=v;if(v=null,e)if(a)Promise.resolve().then(function(){return x(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function x(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=I[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var u=a.parents[s],d=I[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(d.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),l(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],b={},_=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){var w;c=O(g);var E=!1,j=!1,R=!1,x="";switch((w=m[g]?d(c):{type:"disposed",moduleId:g}).chain&&(x="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+w.moduleId+x));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+x));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(E=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":t.onAccepted&&t.onAccepted(w),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),R=!0;break;default:throw new Error("Unexception type "+w.type)}if(E)return h("abort"),Promise.reject(E);if(j)for(c in b[c]=m[c],l(v,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,c)&&(p[c]||(p[c]=[]),l(p[c],w.outdatedDependencies[c]));R&&(l(v,[w.moduleId]),b[c]=_)}var H,A=[];for(r=0;r<v.length;r++)c=v[r],I[c]&&I[c].hot._selfAccepted&&A.push({module:c,errorHandler:I[c].hot._selfAccepted});h("dispose"),Object.keys(D).forEach(function(e){!1===D[e]&&function(e){delete P[e]}(e)});for(var U,S,T=v.slice();T.length>0;)if(c=T.pop(),a=I[c]){var M={},C=a.hot._disposeHandlers;for(o=0;o<C.length;o++)(n=C[o])(M);for(s[c]=M,a.hot.active=!1,delete I[c],delete p[c],o=0;o<a.children.length;o++){var F=I[a.children[o]];F&&((H=F.parents.indexOf(c))>=0&&F.parents.splice(H,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=I[c]))for(S=p[c],o=0;o<S.length;o++)U=S[o],(H=a.children.indexOf(U))>=0&&a.children.splice(H,1);for(c in h("apply"),i=y,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var Y=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=I[c])){S=p[c];var K=[];for(r=0;r<S.length;r++)if(U=S[r],n=a.hot._acceptedDependencies[U]){if(-1!==K.indexOf(n))continue;K.push(n)}for(r=0;r<K.length;r++){n=K[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:S[r],error:e}),t.ignoreErrored||Y||(Y=e)}}}for(r=0;r<A.length;r++){var V=A[r];c=V.module,u=[c];try{k(c)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||Y||(Y=n),Y||(Y=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||Y||(Y=e)}}return Y?(h("fail"),Promise.reject(Y)):(h("idle"),new Promise(function(e){e(v)}))}var I={},P={0:0},H=[];function k(t){if(I[t])return I[t].exports;var n=I[t]={i:t,l:!1,exports:{},hot:l(t),parents:(d=u,u=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=I[e];if(!t)return k;var n=function(n){return t.hot.active?(I[n]?-1===I[n].parents.indexOf(e)&&I[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var a in k)Object.prototype.hasOwnProperty.call(k,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&h("prepare"),_++,k.e(e).then(t,function(e){throw t(),e});function t(){_--,"prepare"===f&&(g[e]||j(e),0===_&&0===b&&R())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.m=e,k.c=I,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/",k.h=function(){return i};var A=window.webpackJsonp=window.webpackJsonp||[],U=A.push.bind(A);A.push=t,A=A.slice();for(var S=0;S<A.length;S++)t(A[S]);var T=U;H.push(["tjUo",2,1]),n()}({M45A:function(e,t,n){"use strict";var r=n("oCYn"),o=n("L2JU"),a=n("/Pmu");r.default.use(o.a),t.a=new o.a.Store({state:{results:[]},actions:{getResults:function(e,t){return new Promise(function(t,n){var r=[{id:1,name:"Result One",value:"We're all mad here. I'm mad. You're mad.",more:"What do you hear? Nothin' but the rain, sir. Grab your gun and bring the cat in."},{id:2,name:"Result Two",value:"Are you Alive? Yes. Prove it.",more:"Sometimes I've believed as many as six impossible things before breakfast."},{id:3,name:"Result Three",value:"Do you have any idea why a raven is like a writing desk?",more:"She’s right, Gaius. The end times are approaching. Humanity’s final chapters are about to be written. And you - you will be its author."}];setTimeout(function(){e.commit("setResults",r),t(r)},2e3)})},addResult:function(e,t){e.commit("addResult",t)}},mutations:{setResults:function(e,t){e.results=t},addResult:function(e,t){e.results=e.results.concat(t),a.a.$emit("result-added")}},getters:{resultsCount:function(e){return e.results.length}}})},Rbfy:function(e,t,n){},W6qm:function(e,t){e.exports=angular},YUnF:function(e,t,n){"use strict";var r=n("F3yY"),o={name:"SearchResults",data:function(){return{store:r.a.store}}},a=(n("gaph"),n("KHd+")),i={name:"VueAppContainer",components:{SearchResults:Object(a.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-SearchResults"},[e.store.searching?n("p",[e._v("Searching...")]):e._e(),e._v(" "),e.store.searchResults.length&&!e.store.searching?n("div",[n("p",[e._v(e._s(e.store.searchResults.length)+' results for: "'+e._s(e.store.searchParam)+'"')]),e._v(" "),n("ul",e._l(e.store.searchResults,function(t){return n("li",{key:t.id},[n("router-link",{attrs:{to:"/"+t.id}},[e._v(e._s(t.name)+" ("+e._s(t.id)+")")])],1)}),0)]):e._e()])},[],!1,null,null,null).exports}},c=(n("bBh8"),Object(a.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-VueAppContainer"},[t("nav",[t("search-results")],1),this._v(" "),t("main",[t("router-view")],1)])},[],!1,null,null,null));t.a=c.exports},aGE4:function(e,t,n){},abhn:function(e,t,n){"use strict";var r=n("oCYn"),o=n("jE9Z"),a=n("F3yY"),i={name:"Detail",components:{AngularComponent:n("jRmE").a},data:function(){return{currentDetail:null}},computed:{innerDetail:function(){return{template:'<inner-detail inner-data="$ctrl.innerData"></inner-detail>',$ctrl:{innerData:this.currentDetail.more}}}},methods:{getDetail:function(e){a.a.selectItem(Number(e)),this.currentDetail=a.a.store.currentDetail},addResult:function(){this.$store.dispatch("addResult",{id:4,name:"Result Four",value:'I\'m fuzzy on the whole good/bad thing. What do you mean, "bad"?',more:"Try to image all life as you know it stopping instantaneously and every molecule in your body exploding at the speed of light."})}},beforeRouteEnter:function(e,t,n){n(function(t){t.getDetail(e.params.itemId)})},beforeRouteUpdate:function(e,t,n){this.getDetail(e.params.itemId),n()}},c=(n("efUU"),n("KHd+")),s=Object(c.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.currentDetail?n("div",{staticClass:"app-Detail"},[n("button",{on:{click:e.addResult}},[e._v("Add result")]),e._v(" "),n("h1",[e._v("Detail")]),e._v(" "),n("dl",[n("dt",[e._v("Id:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.id))]),e._v(" "),n("dt",[e._v("Text:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.name))]),e._v(" "),n("dt",[e._v("Other Field:")]),e._v(" "),n("dd",[e._v(e._s(e.currentDetail.value))])]),e._v(" "),n("angular-component",{attrs:{component:e.innerDetail}})],1):e._e()},[],!1,null,null,null).exports;n.d(t,"a",function(){return u}),r.default.use(o.a);var u=new o.a({routes:[{path:"*",redirect:"/"},{path:"/:itemId?",name:"detail",component:s}]})},bBh8:function(e,t,n){"use strict";var r=n("kK8/");n.n(r).a},efUU:function(e,t,n){"use strict";var r=n("Rbfy");n.n(r).a},gaph:function(e,t,n){"use strict";var r=n("zAdU");n.n(r).a},"kK8/":function(e,t,n){},tjUo:function(e,t,n){"use strict";n.r(t);n("dE+T"),n("bHtr"),n("dRSK"),n("INYr"),n("HEwt"),n("Z2Ku"),n("yt8O"),n("6AQ9"),n("Vd3H"),n("0E+W"),n("yM4b"),n("IXt9"),n("f3/d"),n("9AAn"),n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("BJ/l"),n("eHKK"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),n("xfY5"),n("Ljet"),n("/KAi"),n("fN96"),n("7h0T"),n("sbF8"),n("h/M4"),n("knhD"),n("XfKG"),n("BP8U"),n("91GP"),n("RQRG"),n("/uf1"),n("/8Fb"),n("DW2E"),n("mYba"),n("jm62"),n("JduL"),n("5Pf0"),n("uaHG"),n("ZNX/"),n("mura"),n("25dN"),n("Zshi"),n("V/DX"),n("FlsD"),n("RW0V"),n("z2o2"),n("/SS/"),n("hhXQ"),n("VRzm"),n("CX2u"),n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),n("Oyvg"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("a1Th"),n("T39b"),n("ioFf"),n("rE2o"),n("hEkN"),n("nIY7"),n("+oPb"),n("SMB2"),n("oDIu"),n("rvZc"),n("0mN4"),n("bDcW"),n("nsiH"),n("VpUO"),n("L9s1"),n("0LDn"),n("XfO3"),n("tUrg"),n("9XZr"),n("7VC1"),n("eI33"),n("FLlr"),n("84bF"),n("9VmF"),n("FEjr"),n("Zz4T"),n("JCqj"),n("xm80"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("EK0E"),n("wCsR"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82"),n("aGE4"),n("F3yY")},zAdU:function(e,t,n){}});