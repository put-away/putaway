var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function s(e){return document.createElement(e)}function u(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function f(e){return document.createTextNode(e)}function d(){return f(" ")}function p(){return f("")}function m(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){e.value=null==t?"":t}function $(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let y;function v(e){y=e}function b(e){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(e)}const k=[],w=[],x=[],S=[],_=Promise.resolve();let M=!1;function C(e){x.push(e)}let z=!1;const E=new Set;function q(){if(!z){z=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];v(t),L(t.$$)}for(v(null),k.length=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];E.has(t)||(E.add(t),t())}x.length=0}while(k.length);for(;S.length;)S.pop()();M=!1,z=!1,E.clear()}}function L(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const O=new Set;let N;function P(){N={r:0,c:[],p:N}}function A(){N.r||o(N.c),N=N.p}function D(e,t){e&&e.i&&(O.delete(e),e.i(t))}function I(e,t,n,o){if(e&&e.o){if(O.has(e))return;O.add(e),N.c.push(()=>{O.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function H(e,t){I(e,1,1,()=>{t.delete(e.key)})}function T(e){e&&e.c()}function j(e,n,i,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=e.$$;a&&a.m(n,i),c||C(()=>{const n=l.map(t).filter(r);s?s.push(...n):o(n),e.$$.on_mount=[]}),u.forEach(C)}function U(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function V(e,t){-1===e.$$.dirty[0]&&(k.push(e),M||(M=!0,_.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(t,r,i,c,a,s,u=[-1]){const f=y;v(t);const d=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(d.ctx=i?i(t,r.props||{},(e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&V(t,e)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);d.fragment&&d.fragment.l(e),e.forEach(l)}else d.fragment&&d.fragment.c();r.intro&&D(t.$$.fragment),j(t,r.target,r.anchor,r.customElement),q()}v(f)}class B{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(e){let t;return{c(){t=s("div"),t.textContent="✓",h(t,"class","save svelte-g7ewbd")},m(e,n){a(e,t,n)},d(e){e&&l(t)}}}function F(t){let n,o,r,i,u,p,g,y,v=t[0].title+"",b=t[1]&&G();return{c(){n=s("div"),b&&b.c(),o=d(),r=f(v),u=d(),p=s("hr"),h(n,"class","popup-collection-tile pointer svelte-g7ewbd"),h(n,"title",i=t[0].title),$(p,"border","1px solid rgb(240, 240, 240)"),$(p,"margin","0"),$(p,"margin-left","5px"),$(p,"margin-right","5px")},m(e,i){a(e,n,i),b&&b.m(n,null),c(n,o),c(n,r),a(e,u,i),a(e,p,i),g||(y=m(n,"click",t[2]),g=!0)},p(e,[t]){e[1]?b||(b=G(),b.c(),b.m(n,o)):b&&(b.d(1),b=null),1&t&&v!==(v=e[0].title+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(r,v),1&t&&i!==(i=e[0].title)&&h(n,"title",i)},i:e,o:e,d(e){e&&l(n),b&&b.d(),e&&l(u),e&&l(p),g=!1,y()}}}function W(e,t,n){let o,{collection:r}=t,{tab:i}=t,{alreadySaved:c}=t,a=!1;c&&(a=c);return e.$$set=e=>{"collection"in e&&n(0,r=e.collection),"tab"in e&&n(3,i=e.tab),"alreadySaved"in e&&n(4,c=e.alreadySaved)},[r,a,()=>{n(1,a=!a),a?function(e){chrome.bookmarks.create({parentId:r.id,url:e.url,title:e.title+":::::"+e.favIconUrl},(function(e){o=e}))}(i):o?chrome.bookmarks.remove(o.id):chrome.bookmarks.search({url:i.url},(function(e){e.forEach(e=>{chrome.bookmarks.remove(e.id)})}))},i,c]}class X extends B{constructor(e){super(),Y(this,e,W,F,i,{collection:0,tab:3,alreadySaved:4})}}function R(e){let t,n;return{c(){t=u("path"),h(t,"d",n=e[1].icon[4]),h(t,"fill",e[2])},m(e,n){a(e,t,n)},p(e,o){2&o&&n!==(n=e[1].icon[4])&&h(t,"d",n),4&o&&h(t,"fill",e[2])},d(e){e&&l(t)}}}function J(e){let t,n,o,r,i;return{c(){t=u("path"),r=u("path"),h(t,"d",n=e[1].icon[4][0]),h(t,"fill",e[2]),h(t,"style",o=`opacity: ${e[4]}`),h(r,"d",i=e[1].icon[4][1]),h(r,"fill",e[3])},m(e,n){a(e,t,n),a(e,r,n)},p(e,c){2&c&&n!==(n=e[1].icon[4][0])&&h(t,"d",n),4&c&&h(t,"fill",e[2]),16&c&&o!==(o=`opacity: ${e[4]}`)&&h(t,"style",o),2&c&&i!==(i=e[1].icon[4][1])&&h(r,"d",i),8&c&&h(r,"fill",e[3])},d(e){e&&l(t),e&&l(r)}}}function K(t){let n,o,r,i;function c(e,t){return(null==o||2&t)&&(o=!!Array.isArray(e[1].icon[4])),o?J:R}let s=c(t,-1),f=s(t);return{c(){n=u("svg"),f.c(),h(n,"xmlns","http://www.w3.org/2000/svg"),h(n,"viewBox",r=`0 0 ${t[1].icon[0]} ${t[1].icon[1]}`),h(n,"height",t[6]),h(n,"aria-hidden","true"),h(n,"role","img"),h(n,"style",i=`transform: rotate(${t[0]}turn) scaleX(${t[7]}) scaleY(${t[8]}); ${t[5]}`)},m(e,t){a(e,n,t),f.m(n,null)},p(e,[t]){s===(s=c(e,t))&&f?f.p(e,t):(f.d(1),f=s(e),f&&(f.c(),f.m(n,null))),2&t&&r!==(r=`0 0 ${e[1].icon[0]} ${e[1].icon[1]}`)&&h(n,"viewBox",r),64&t&&h(n,"height",e[6]),417&t&&i!==(i=`transform: rotate(${e[0]}turn) scaleX(${e[7]}) scaleY(${e[8]}); ${e[5]}`)&&h(n,"style",i)},i:e,o:e,d(e){e&&l(n),f.d()}}}function Q(e,t,n){let{icon:o}=t,{color:r="#000000"}=t,{secondaryColor:i=r}=t,{secondaryOpacity:c="0.5"}=t,{size:a="xs"}=t,{flip:l="none"}=t,{rotate:s="0"}=t,{style:u=""}=t,f=a,d="1",p="1";return e.$$set=e=>{"icon"in e&&n(1,o=e.icon),"color"in e&&n(2,r=e.color),"secondaryColor"in e&&n(3,i=e.secondaryColor),"secondaryOpacity"in e&&n(4,c=e.secondaryOpacity),"size"in e&&n(9,a=e.size),"flip"in e&&n(10,l=e.flip),"rotate"in e&&n(0,s=e.rotate),"style"in e&&n(5,u=e.style)},e.$$.update=()=>{if(1537&e.$$.dirty){switch(a){case"xs":n(6,f="0.75em");break;case"sm":n(6,f="0.875em");break;case"lg":n(6,f="1.33em");break;case"2x":n(6,f="2em");break;case"3x":n(6,f="3em");break;case"4x":n(6,f="4em");break;case"5x":n(6,f="5em");break;case"6x":n(6,f="6em");break;case"7x":n(6,f="7em");break;case"8x":n(6,f="8em");break;case"9x":n(6,f="9em");break;case"10x":n(6,f="10em")}switch(n(0,s/=360),l){case"h":n(7,d=-1);break;case"v":n(8,p=-1);break;case"hv":n(7,d=-1),n(8,p=-1);break;default:n(7,d=1),n(8,p=1)}}},[s,o,r,i,c,u,f,d,p,a,l]}class Z extends B{constructor(e){super(),Y(this,e,Q,K,i,{icon:1,color:2,secondaryColor:3,secondaryOpacity:4,size:9,flip:10,rotate:0,style:5})}}function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function te(e,t){return e(t={exports:{}},t.exports),t.exports}var ne=te((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=[],o="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z";t.definition={prefix:"far",iconName:"save",icon:[448,512,n,"f0c7",o]},t.faSave=t.definition,t.prefix="far",t.iconName="save",t.width=448,t.height=512,t.ligatures=n,t.unicode="f0c7",t.svgPathData=o}));ee(ne);ne.definition;var oe=ne.faSave,re=(ne.prefix,ne.iconName,ne.width,ne.height,ne.ligatures,ne.unicode,ne.svgPathData,te((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=[],o="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z";t.definition={prefix:"fas",iconName:"search",icon:[512,512,n,"f002",o]},t.faSearch=t.definition,t.prefix="fas",t.iconName="search",t.width=512,t.height=512,t.ligatures=n,t.unicode="f002",t.svgPathData=o})));ee(re);re.definition;var ie=re.faSearch;re.prefix,re.iconName,re.width,re.height,re.ligatures,re.unicode,re.svgPathData;function ce(e,t,n){const o=e.slice();return o[10]=t[n],o[12]=n,o}function ae(t){let n,o,r,i,u,f,p,g,$;return{c(){n=s("div"),o=s("img"),i=d(),u=s("div"),u.textContent="Open PutAway",f=d(),p=s("div"),p.innerHTML="This is an Empty Tab.\n        <br/>\n        You cannot add this to a collection.",h(o,"alt","logo"),o.src!==(r="images/logo128.png")&&h(o,"src","images/logo128.png"),h(u,"id","newtab-open-putaway"),h(u,"class","pointer svelte-yp1uqn"),h(n,"id","newtab-popup"),h(n,"class","svelte-yp1uqn")},m(e,r){a(e,n,r),c(n,o),c(n,i),c(n,u),c(n,f),c(n,p),g||($=m(u,"click",t[7]),g=!0)},p:e,i:e,o:e,d(e){e&&l(n),g=!1,$()}}}function le(e){let t,n,r,i,u,f,p,y,v,b,k,w,x,S,_,M,C,z,E,q=[],L=new Map;f=new Z({props:{icon:ie,size:"2x"}});let O=e[1];const N=e=>e[10].id;for(let t=0;t<O.length;t+=1){let n=ce(e,O,t),o=N(n);L.set(o,q[t]=ue(o,n))}const V=[de,fe],Y=[];function B(e,t){return e[5]?0:1}return _=B(e),M=Y[_]=V[_](e),{c(){t=s("div"),n=s("div"),r=s("input"),i=d(),u=s("div"),T(f.$$.fragment),p=d(),y=s("div"),y.innerHTML="Open\n          <br/>\n          PutAway",v=d(),b=s("div");for(let e=0;e<q.length;e+=1)q[e].c();k=d(),w=s("div"),x=d(),S=s("div"),M.c(),r.autofocus=!0,h(r,"type","text"),h(r,"placeholder","Search"),h(r,"class","svelte-yp1uqn"),h(u,"id","search-logo"),h(u,"class","svelte-yp1uqn"),h(y,"id","open-putaway"),h(y,"class","pointer svelte-yp1uqn"),h(n,"id","top"),h(n,"class","svelte-yp1uqn"),$(w,"height","60px"),h(b,"id","list"),h(b,"class","svelte-yp1uqn"),h(t,"id","main"),h(t,"class","svelte-yp1uqn"),h(S,"id","save-session"),h(S,"class","pointer svelte-yp1uqn")},m(o,l){a(o,t,l),c(t,n),c(n,r),g(r,e[0]),c(n,i),c(n,u),j(f,u,null),c(n,p),c(n,y),c(t,v),c(t,b);for(let e=0;e<q.length;e+=1)q[e].m(b,null);c(b,k),c(b,w),a(o,x,l),a(o,S,l),Y[_].m(S,null),C=!0,r.focus(),z||(E=[m(r,"input",e[8]),m(y,"click",e[7]),m(S,"click",e[6])],z=!0)},p(e,t){1&t&&r.value!==e[0]&&g(r,e[0]),15&t&&(O=e[1],P(),q=function(e,t,n,o,r,i,c,a,l,s,u,f){let d=e.length,p=i.length,m=d;const h={};for(;m--;)h[e[m].key]=m;const g=[],$=new Map,y=new Map;for(m=p;m--;){const e=f(r,i,m),a=n(e);let l=c.get(a);l?o&&l.p(e,t):(l=s(a,e),l.c()),$.set(a,g[m]=l),a in h&&y.set(a,Math.abs(m-h[a]))}const v=new Set,b=new Set;function k(e){D(e,1),e.m(a,u),c.set(e.key,e),u=e.first,p--}for(;d&&p;){const t=g[p-1],n=e[d-1],o=t.key,r=n.key;t===n?(u=t.first,d--,p--):$.has(r)?!c.has(o)||v.has(o)?k(t):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),k(t)):(v.add(r),d--):(l(n,c),d--)}for(;d--;){const t=e[d];$.has(t.key)||l(t,c)}for(;p;)k(g[p-1]);return g}(q,t,N,1,e,O,L,b,H,ue,k,ce),A());let n=_;_=B(e),_===n?Y[_].p(e,t):(P(),I(Y[n],1,1,()=>{Y[n]=null}),A(),M=Y[_],M?M.p(e,t):(M=Y[_]=V[_](e),M.c()),D(M,1),M.m(S,null))},i(e){if(!C){D(f.$$.fragment,e);for(let e=0;e<O.length;e+=1)D(q[e]);D(M),C=!0}},o(e){I(f.$$.fragment,e);for(let e=0;e<q.length;e+=1)I(q[e]);I(M),C=!1},d(e){e&&l(t),U(f);for(let e=0;e<q.length;e+=1)q[e].d();e&&l(x),e&&l(S),Y[_].d(),z=!1,o(E)}}}function se(e){let t,n;return t=new X({props:{collection:e[10],tab:e[3],alreadySaved:e[2][e[10].id]}}),{c(){T(t.$$.fragment)},m(e,o){j(t,e,o),n=!0},p(e,n){const o={};2&n&&(o.collection=e[10]),8&n&&(o.tab=e[3]),6&n&&(o.alreadySaved=e[2][e[10].id]),t.$set(o)},i(e){n||(D(t.$$.fragment,e),n=!0)},o(e){I(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ue(e,t){let n,o,r,i=t[10].title.toLowerCase().includes(t[0].toLowerCase()),c=i&&se(t);return{key:e,first:null,c(){n=p(),c&&c.c(),o=p(),this.first=n},m(e,t){a(e,n,t),c&&c.m(e,t),a(e,o,t),r=!0},p(e,n){t=e,3&n&&(i=t[10].title.toLowerCase().includes(t[0].toLowerCase())),i?c?(c.p(t,n),3&n&&D(c,1)):(c=se(t),c.c(),D(c,1),c.m(o.parentNode,o)):c&&(P(),I(c,1,1,()=>{c=null}),A())},i(e){r||(D(c),r=!0)},o(e){I(c),r=!1},d(e){e&&l(n),c&&c.d(e),e&&l(o)}}}function fe(t){let n,o,r;return n=new Z({props:{icon:oe,size:"sm",style:"position:relative; top:3px; opacity: 0.7;"}}),{c(){T(n.$$.fragment),o=f("\n        Save Session")},m(e,t){j(n,e,t),a(e,o,t),r=!0},p:e,i(e){r||(D(n.$$.fragment,e),r=!0)},o(e){I(n.$$.fragment,e),r=!1},d(e){U(n,e),e&&l(o)}}}function de(t){let n;return{c(){n=f("✓Saved (click to undo)")},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&l(n)}}}function pe(e){let t,n,o,r;const i=[le,ae],c=[];function u(e,t){return e[4]?1:0}return n=u(e),o=c[n]=i[n](e),{c(){t=s("div"),o.c(),h(t,"id","popup"),h(t,"class","svelte-yp1uqn")},m(e,o){a(e,t,o),c[n].m(t,null),r=!0},p(e,[r]){let a=n;n=u(e),n===a?c[n].p(e,r):(P(),I(c[a],1,1,()=>{c[a]=null}),A(),o=c[n],o?o.p(e,r):(o=c[n]=i[n](e),o.c()),D(o,1),o.m(t,null))},i(e){r||(D(o),r=!0)},o(e){I(o),r=!1},d(e){e&&l(t),c[n].d()}}}function me(e,t,n){let o,r,i="",c=[],a={},l=!1,s=!1;b(()=>{chrome.tabs.query({active:!0,currentWindow:!0},(function(e){n(3,o=e[0]),"chrome://newtab/"!=o.url?(chrome.bookmarks.search({url:o.url},(function(e){e.forEach(e=>{n(2,a[e.parentId]=!0,a)})})),chrome.storage.local.get("pid",(function(e){chrome.bookmarks.getChildren(e.pid,(function(e){n(1,c=e.filter(e=>null==e.url))}))}))):n(4,l=!0)}))});return[i,c,a,o,l,s,()=>{if(s)chrome.bookmarks.removeTree(r),n(5,s=!1);else{var e=new Date;let t=`Session ${e.getDate()}-${(e.getMonth()+1).toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}-${e.getFullYear()}, ${e.getHours()}:${e.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}:${e.getSeconds().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})}`;chrome.storage.local.get("pid",(function(e){chrome.bookmarks.create({parentId:e.pid,title:t,index:0},(function(e){chrome.tabs.query({currentWindow:!0},t=>{let o=t.filter((function(e){return"chrome://newtab/"!=e.url}));var i=o.length;o.forEach(t=>{chrome.bookmarks.create({parentId:e.id,url:t.url,title:t.title+":::::"+t.favIconUrl},(function(t){0==--i&&(r=e.id,n(5,s=!0))}))})})}))}))}},()=>{chrome.tabs.create({url:chrome.extension.getURL("newtab.html")})},function(){i=this.value,n(0,i)}]}return new class extends B{constructor(e){super(),Y(this,e,me,pe,i,{})}}({target:document.body})}();
//# sourceMappingURL=popup.bundle.js.map
