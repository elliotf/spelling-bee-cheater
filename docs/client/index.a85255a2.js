function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e){if(t){const o=u(t,n,e);return t[0](o)}}function u(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function i(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function w(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):p(n)}function _(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return h(n)}function v(t){return _(t," ")}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}function k(t,n){(null!=n||t.value)&&(t.value=n)}let C;function A(t){C=t}function N(){if(!C)throw new Error("Function called outside component initialization");return C}function S(t){N().$$.on_mount.push(t)}function j(t,n){N().$$.context.set(t,n)}const L=[],T=[],H=[],M=[],O=Promise.resolve();let q=!1;function z(t){H.push(t)}function B(){const t=new Set;do{for(;L.length;){const t=L.shift();A(t),F(t.$$)}for(;T.length;)T.pop()();for(let n=0;n<H.length;n+=1){const e=H[n];t.has(e)||(e(),t.add(e))}H.length=0}while(L.length);for(;M.length;)M.pop()();q=!1}function F(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(z))}const D=new Set;let G;function I(){G={r:0,c:[],p:G}}function P(){G.r||r(G.c),G=G.p}function J(t,n){t&&t.i&&(D.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(D.has(t))return;D.add(t),G.c.push(()=>{D.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const Q="undefined"!=typeof window?window:global;function R(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=n[c];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function U(t){return"object"==typeof t&&null!==t?t:{}}function V(t,n,o){const{fragment:s,on_mount:a,on_destroy:u,after_update:i}=t.$$;s.m(n,o),z(()=>{const n=a.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(z)}function W(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function X(t,n){t.$$.dirty||(L.push(t),q||(q=!0,O.then(B)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function Y(n,e,c,s,a,u){const i=C;A(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e,o=e)=>(l.ctx&&a(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),d&&X(n,t)),e)):f,l.update(),d=!0,r(l.before_update),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l(x(e.target)):l.fragment.c(),e.intro&&J(n.$$.fragment),V(n,e.target,e.anchor),B()),A(i)}let Z;"undefined"!=typeof HTMLElement&&(Z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}});class tt{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{j as A,I as B,P as C,S as D,y as E,k as F,$ as G,r as H,Q as I,tt as S,w as a,x as b,a as c,d,p as e,b as f,l as g,i as h,Y as i,u as j,K as k,h as l,_ as m,t as n,f as o,E as p,m as q,g as r,s,J as t,v as u,n as v,V as w,R as x,U as y,W as z};
