(()=>{var e={3967:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,l(o)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.domReady;var n=o.n(t);const r=window.wp.element,l=Math.min,i=Math.max,c=Math.round,s=Math.floor,a=e=>({x:e,y:e}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function f(e,t,o){return i(e,l(t,o))}function p(e,t){return"function"==typeof e?e(t):e}function m(e){return e.split("-")[0]}function v(e){return e.split("-")[1]}function y(e){return"x"===e?"y":"x"}function h(e){return"y"===e?"height":"width"}function w(e){return["top","bottom"].includes(m(e))?"y":"x"}function g(e){return y(w(e))}function b(e){return e.replace(/start|end/g,(e=>d[e]))}function x(e){return e.replace(/left|right|bottom|top/g,(e=>u[e]))}function E(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function _(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function S(e,t,o){let{reference:n,floating:r}=e;const l=w(t),i=g(t),c=h(i),s=m(t),a="y"===l,u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,f=n[c]/2-r[c]/2;let p;switch(s){case"top":p={x:u,y:n.y-r.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-r.width,y:d};break;default:p={x:n.x,y:n.y}}switch(v(t)){case"start":p[i]-=f*(o&&a?-1:1);break;case"end":p[i]+=f*(o&&a?-1:1)}return p}async function A(e,t){var o;void 0===t&&(t={});const{x:n,y:r,platform:l,rects:i,elements:c,strategy:s}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=p(t,e),v=E(m),y=c[f?"floating"===d?"reference":"floating":d],h=_(await l.getClippingRect({element:null==(o=await(null==l.isElement?void 0:l.isElement(y)))||o?y:y.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),w="floating"===d?{...i.floating,x:n,y:r}:i.reference,g=await(null==l.getOffsetParent?void 0:l.getOffsetParent(c.floating)),b=await(null==l.isElement?void 0:l.isElement(g))&&await(null==l.getScale?void 0:l.getScale(g))||{x:1,y:1},x=_(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:g,strategy:s}):w);return{top:(h.top-x.top+v.top)/b.y,bottom:(x.bottom-h.bottom+v.bottom)/b.y,left:(h.left-x.left+v.left)/b.x,right:(x.right-h.right+v.right)/b.x}}const R=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o,n;const{placement:r,middlewareData:l,rects:i,initialPlacement:c,platform:s,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:E=!0,..._}=p(e,t);if(null!=(o=l.arrow)&&o.alignmentOffset)return{};const S=m(r),R=m(c)===c,T=await(null==s.isRTL?void 0:s.isRTL(a.floating)),k=f||(R||!E?[x(c)]:function(e){const t=x(e);return[b(e),t,b(t)]}(c));f||"none"===w||k.push(...function(e,t,o,n){const r=v(e);let l=function(e,t,o){const n=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:n:t?n:r;case"left":case"right":return t?l:i;default:return[]}}(m(e),"start"===o,n);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(b)))),l}(c,E,w,T));const O=[c,...k],L=await A(t,_),C=[];let N=(null==(n=l.flip)?void 0:n.overflows)||[];if(u&&C.push(L[S]),d){const e=function(e,t,o){void 0===o&&(o=!1);const n=v(e),r=g(e),l=h(r);let i="x"===r?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=x(i)),[i,x(i)]}(r,i,T);C.push(L[e[0]],L[e[1]])}if(N=[...N,{placement:r,overflows:C}],!C.every((e=>e<=0))){var D,j;const e=((null==(D=l.flip)?void 0:D.index)||0)+1,t=O[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let o=null==(j=N.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:j.placement;if(!o)switch(y){case"bestFit":{var $;const e=null==($=N.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:$[0];e&&(o=e);break}case"initialPlacement":o=c}if(r!==o)return{reset:{placement:o}}}return{}}}},T=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,r=await async function(e,t){const{placement:o,platform:n,elements:r}=e,l=await(null==n.isRTL?void 0:n.isRTL(r.floating)),i=m(o),c=v(o),s="y"===w(o),a=["left","top"].includes(i)?-1:1,u=l&&s?-1:1,d=p(t,e);let{mainAxis:f,crossAxis:y,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&"number"==typeof h&&(y="end"===c?-1*h:h),s?{x:y*u,y:f*a}:{x:f*a,y:y*u}}(t,e);return{x:o+r.x,y:n+r.y,data:r}}}},k=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...s}=p(e,t),a={x:o,y:n},u=await A(t,s),d=w(m(r)),v=y(d);let h=a[v],g=a[d];if(l){const e="y"===v?"bottom":"right";h=f(h+u["y"===v?"top":"left"],h,h-u[e])}if(i){const e="y"===d?"bottom":"right";g=f(g+u["y"===d?"top":"left"],g,g-u[e])}const b=c.fn({...t,[v]:h,[d]:g});return{...b,data:{x:b.x-o,y:b.y-n}}}}};function O(e){return N(e)?(e.nodeName||"").toLowerCase():"#document"}function L(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function C(e){var t;return null==(t=(N(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function N(e){return e instanceof Node||e instanceof L(e).Node}function D(e){return e instanceof Element||e instanceof L(e).Element}function j(e){return e instanceof HTMLElement||e instanceof L(e).HTMLElement}function $(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof L(e).ShadowRoot)}function P(e){const{overflow:t,overflowX:o,overflowY:n,display:r}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(r)}function B(e){return["table","td","th"].includes(O(e))}function I(e){const t=F(),o=W(e);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function F(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function H(e){return["html","body","#document"].includes(O(e))}function W(e){return L(e).getComputedStyle(e)}function z(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function M(e){if("html"===O(e))return e;const t=e.assignedSlot||e.parentNode||$(e)&&e.host||C(e);return $(t)?t.host:t}function q(e){const t=M(e);return H(t)?e.ownerDocument?e.ownerDocument.body:e.body:j(t)&&P(t)?t:q(t)}function V(e,t,o){var n;void 0===t&&(t=[]),void 0===o&&(o=!0);const r=q(e),l=r===(null==(n=e.ownerDocument)?void 0:n.body),i=L(r);return l?t.concat(i,i.visualViewport||[],P(r)?r:[],i.frameElement&&o?V(i.frameElement):[]):t.concat(r,V(r,[],o))}function K(e){const t=W(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=j(e),l=r?e.offsetWidth:o,i=r?e.offsetHeight:n,s=c(o)!==l||c(n)!==i;return s&&(o=l,n=i),{width:o,height:n,$:s}}function X(e){return D(e)?e:e.contextElement}function G(e){const t=X(e);if(!j(t))return a(1);const o=t.getBoundingClientRect(),{width:n,height:r,$:l}=K(t);let i=(l?c(o.width):o.width)/n,s=(l?c(o.height):o.height)/r;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}const Y=a(0);function Z(e){const t=L(e);return F()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Y}function J(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const r=e.getBoundingClientRect(),l=X(e);let i=a(1);t&&(n?D(n)&&(i=G(n)):i=G(e));const c=function(e,t,o){return void 0===t&&(t=!1),!(!o||t&&o!==L(e))&&t}(l,o,n)?Z(l):a(0);let s=(r.left+c.x)/i.x,u=(r.top+c.y)/i.y,d=r.width/i.x,f=r.height/i.y;if(l){const e=L(l),t=n&&D(n)?L(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=G(o),t=o.getBoundingClientRect(),n=W(o),r=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,l=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;s*=e.x,u*=e.y,d*=e.x,f*=e.y,s+=r,u+=l,o=L(o).frameElement}}return _({width:d,height:f,x:s,y:u})}function U(e){return J(C(e)).left+z(e).scrollLeft}function Q(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=L(e),n=C(e),r=o.visualViewport;let l=n.clientWidth,i=n.clientHeight,c=0,s=0;if(r){l=r.width,i=r.height;const e=F();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,s=r.offsetTop)}return{width:l,height:i,x:c,y:s}}(e,o);else if("document"===t)n=function(e){const t=C(e),o=z(e),n=e.ownerDocument.body,r=i(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),l=i(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let c=-o.scrollLeft+U(e);const s=-o.scrollTop;return"rtl"===W(n).direction&&(c+=i(t.clientWidth,n.clientWidth)-r),{width:r,height:l,x:c,y:s}}(C(e));else if(D(t))n=function(e,t){const o=J(e,!0,"fixed"===t),n=o.top+e.clientTop,r=o.left+e.clientLeft,l=j(e)?G(e):a(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:n*l.y}}(t,o);else{const o=Z(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return _(n)}function ee(e,t){const o=M(e);return!(o===t||!D(o)||H(o))&&("fixed"===W(o).position||ee(o,t))}function te(e,t,o){const n=j(t),r=C(t),l="fixed"===o,i=J(e,!0,l,t);let c={scrollLeft:0,scrollTop:0};const s=a(0);if(n||!n&&!l)if(("body"!==O(t)||P(r))&&(c=z(t)),n){const e=J(t,!0,l,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else r&&(s.x=U(r));return{x:i.left+c.scrollLeft-s.x,y:i.top+c.scrollTop-s.y,width:i.width,height:i.height}}function oe(e,t){return j(e)&&"fixed"!==W(e).position?t?t(e):e.offsetParent:null}function ne(e,t){const o=L(e);if(!j(e))return o;let n=oe(e,t);for(;n&&B(n)&&"static"===W(n).position;)n=oe(n,t);return n&&("html"===O(n)||"body"===O(n)&&"static"===W(n).position&&!I(n))?o:n||function(e){let t=M(e);for(;j(t)&&!H(t);){if(I(t))return t;t=M(t)}return null}(e)||o}const re={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const r=j(o),l=C(o);if(o===l)return t;let i={scrollLeft:0,scrollTop:0},c=a(1);const s=a(0);if((r||!r&&"fixed"!==n)&&(("body"!==O(o)||P(l))&&(i=z(o)),j(o))){const e=J(o);c=G(o),s.x=e.x+o.clientLeft,s.y=e.y+o.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-i.scrollLeft*c.x+s.x,y:t.y*c.y-i.scrollTop*c.y+s.y}},getDocumentElement:C,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:r}=e;const c=[..."clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=V(e,[],!1).filter((e=>D(e)&&"body"!==O(e))),r=null;const l="fixed"===W(e).position;let i=l?M(e):e;for(;D(i)&&!H(i);){const t=W(i),o=I(i);o||"fixed"!==t.position||(r=null),(l?!o&&!r:!o&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||P(i)&&!o&&ee(e,i))?n=n.filter((e=>e!==i)):r=t,i=M(i)}return t.set(e,n),n}(t,this._c):[].concat(o),n],s=c[0],a=c.reduce(((e,o)=>{const n=Q(t,o,r);return e.top=i(n.top,e.top),e.right=l(n.right,e.right),e.bottom=l(n.bottom,e.bottom),e.left=i(n.left,e.left),e}),Q(t,s,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ne,getElementRects:async function(e){let{reference:t,floating:o,strategy:n}=e;const r=this.getOffsetParent||ne,l=this.getDimensions;return{reference:te(t,await r(o),n),floating:{x:0,y:0,...await l(o)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return K(e)},getScale:G,isElement:D,isRTL:function(e){return"rtl"===W(e).direction}};const le=(e,t,o)=>{const n=new Map,r={platform:re,...o},l={...r.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:l=[],platform:i}=o,c=l.filter(Boolean),s=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=S(a,n,s),f=n,p={},m=0;for(let o=0;o<c.length;o++){const{name:l,fn:v}=c[o],{x:y,y:h,data:w,reset:g}=await v({x:u,y:d,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=h?h:d,p={...p,[l]:{...p[l],...w}},g&&m<=50&&(m++,"object"==typeof g&&(g.placement&&(f=g.placement),g.rects&&(a=!0===g.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):g.rects),({x:u,y:d}=S(a,f,s))),o=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var ie=o(3967);const ce={core:!1,base:!1};function se({css:e,id:t="react-tooltip-base-styles",type:o="base",ref:n}){var r,l;if(!e||"undefined"==typeof document||ce[o])return;if("core"===o&&"undefined"!=typeof process&&(null===(r=null===process||void 0===process?void 0:process.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==o&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:process.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===o&&(t="react-tooltip-core-styles"),n||(n={});const{insertAt:i}=n;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),ce[o]=!0}const ae=(e,t,o)=>{let n=null;return function(...r){const l=()=>{n=null,o||e.apply(this,r)};o&&!n&&(e.apply(this,r),n=setTimeout(l,t)),o||(n&&clearTimeout(n),n=setTimeout(l,t))}},ue={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},de=(0,e.createContext)({getTooltipData:()=>ue});function fe(t="DEFAULT_TOOLTIP_ID"){return(0,e.useContext)(de).getTooltipData(t)}const pe="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,me=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const o=t.getPropertyValue(e);return"auto"===o||"scroll"===o}))},ve=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(me(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},ye=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:o=null,place:n="top",offset:r=10,strategy:i="absolute",middlewares:c=[T(Number(r)),R({fallbackAxisSideDirection:"start"}),k({padding:5})],border:s})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const a=c;return o?(a.push({name:"arrow",options:u={element:o,padding:5},async fn(e){const{x:t,y:o,placement:n,rects:r,platform:i,elements:c,middlewareData:s}=e,{element:a,padding:d=0}=p(u,e)||{};if(null==a)return{};const m=E(d),y={x:t,y:o},w=g(n),b=h(w),x=await i.getDimensions(a),_="y"===w,S=_?"top":"left",A=_?"bottom":"right",R=_?"clientHeight":"clientWidth",T=r.reference[b]+r.reference[w]-y[w]-r.floating[b],k=y[w]-r.reference[w],O=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a));let L=O?O[R]:0;L&&await(null==i.isElement?void 0:i.isElement(O))||(L=c.floating[R]||r.floating[b]);const C=T/2-k/2,N=L/2-x[b]/2-1,D=l(m[S],N),j=l(m[A],N),$=D,P=L-x[b]-j,B=L/2-x[b]/2+C,I=f($,B,P),F=!s.arrow&&null!=v(n)&&B!=I&&r.reference[b]/2-(B<$?D:j)-x[b]/2<0,H=F?B<$?B-$:B-P:0;return{[w]:y[w]+H,data:{[w]:I,centerOffset:B-I-H,...F&&{alignmentOffset:H}},reset:F}}}),le(e,t,{placement:n,strategy:i,middleware:a}).then((({x:e,y:t,placement:o,middlewareData:n})=>{var r,l;const i={left:`${e}px`,top:`${t}px`,border:s},{x:c,y:a}=null!==(r=n.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(l={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]])&&void 0!==l?l:"bottom",d=s&&{borderBottom:s,borderRight:s};let f=0;if(s){const e=`${s}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+f}px`},place:o}}))):le(e,t,{placement:"bottom",strategy:i,middleware:a}).then((({x:e,y:t,placement:o})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:o})));var u};var he={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},we={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const ge=({forwardRef:t,id:o,className:n,classNameArrow:r,variant:c="dark",anchorId:a,anchorSelect:u,place:d="top",offset:f=10,events:p=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:y,wrapper:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:x=!1,noArrow:E=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:R=!1,openEvents:T,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:L,style:N,position:D,afterShow:j,afterHide:$,content:P,contentWrapperRef:B,isOpen:I,setIsOpen:F,activeAnchor:H,setActiveAnchor:W,border:z,opacity:M,arrowColor:q,role:K="tooltip"})=>{var G;const Y=(0,e.useRef)(null),Z=(0,e.useRef)(null),U=(0,e.useRef)(null),Q=(0,e.useRef)(null),ee=(0,e.useRef)(null),[te,oe]=(0,e.useState)(d),[ne,re]=(0,e.useState)({}),[le,ce]=(0,e.useState)({}),[se,ue]=(0,e.useState)(!1),[de,me]=(0,e.useState)(!1),[ge,be]=(0,e.useState)(null),xe=(0,e.useRef)(!1),Ee=(0,e.useRef)(null),{anchorRefs:_e,setActiveAnchor:Se}=fe(o),Ae=(0,e.useRef)(!1),[Re,Te]=(0,e.useState)([]),ke=(0,e.useRef)(!1),Oe=m||p.includes("click"),Le=Oe||(null==T?void 0:T.click)||(null==T?void 0:T.dblclick)||(null==T?void 0:T.mousedown),Ce=T?{...T}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!T&&Oe&&Object.assign(Ce,{mouseenter:!1,focus:!1,click:!0});const Ne=k?{...k}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!k&&Oe&&Object.assign(Ne,{mouseleave:!1,blur:!1});const De=O?{...O}:{escape:S||!1,scroll:A||!1,resize:R||!1,clickOutsideAnchor:Le||!1};L&&(Object.assign(Ce,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Ne,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(De,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),pe((()=>(ke.current=!0,()=>{ke.current=!1})),[]);const je=e=>{ke.current&&(e&&me(!0),setTimeout((()=>{ke.current&&(null==F||F(e),void 0===I&&ue(e))}),10))};(0,e.useEffect)((()=>{if(void 0===I)return()=>null;I&&me(!0);const e=setTimeout((()=>{ue(I)}),10);return()=>{clearTimeout(e)}}),[I]),(0,e.useEffect)((()=>{if(se!==xe.current)if(ee.current&&clearTimeout(ee.current),xe.current=se,se)null==j||j();else{const e=(e=>{const t=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(m?s?)$/);if(!t)return 0;const[,o,n]=t;return"s"!==n&&"ms"!==n?0:Number(o)*("ms"===n?1:1e3)})();ee.current=setTimeout((()=>{me(!1),be(null),null==$||$()}),e+25)}}),[se]);const $e=(e=w)=>{U.current&&clearTimeout(U.current),U.current=setTimeout((()=>{je(!0)}),e)},Pe=(e=g)=>{Q.current&&clearTimeout(Q.current),Q.current=setTimeout((()=>{Ae.current||je(!1)}),e)},Be=e=>{var t;if(!e)return;const o=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==o?void 0:o.isConnected))return W(null),void Se({current:null});w?$e():je(!0),W(o),Se({current:o}),Q.current&&clearTimeout(Q.current)},Ie=()=>{_?Pe(g||100):g?Pe():je(!1),U.current&&clearTimeout(U.current)},Fe=({x:e,y:t})=>{var o;const n={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};ye({place:null!==(o=null==ge?void 0:ge.place)&&void 0!==o?o:d,offset:f,elementReference:n,tooltipReference:Y.current,tooltipArrowReference:Z.current,strategy:v,middlewares:y,border:z}).then((e=>{Object.keys(e.tooltipStyles).length&&re(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ce(e.tooltipArrowStyles),oe(e.place)}))},He=e=>{if(!e)return;const t=e,o={x:t.clientX,y:t.clientY};Fe(o),Ee.current=o},We=e=>{var t;if(!se)return;const o=e.target;(null===(t=Y.current)||void 0===t?void 0:t.contains(o))||[document.querySelector(`[id='${a}']`),...Re].some((e=>null==e?void 0:e.contains(o)))||(je(!1),U.current&&clearTimeout(U.current))},ze=ae(Be,50,!0),Me=ae(Ie,50,!0),qe=(0,e.useCallback)((()=>{var e,t;const o=null!==(e=null==ge?void 0:ge.position)&&void 0!==e?e:D;o?Fe(o):b?Ee.current&&Fe(Ee.current):(null==H?void 0:H.isConnected)&&ye({place:null!==(t=null==ge?void 0:ge.place)&&void 0!==t?t:d,offset:f,elementReference:H,tooltipReference:Y.current,tooltipArrowReference:Z.current,strategy:v,middlewares:y,border:z}).then((e=>{ke.current&&(Object.keys(e.tooltipStyles).length&&re(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ce(e.tooltipArrowStyles),oe(e.place))}))}),[se,H,P,N,d,null==ge?void 0:ge.place,f,v,D,null==ge?void 0:ge.position,b]);(0,e.useEffect)((()=>{var e,t;const o=new Set(_e);Re.forEach((e=>{o.add({current:e})}));const n=document.querySelector(`[id='${a}']`);n&&o.add({current:n});const r=()=>{je(!1)},c=ve(H),u=ve(Y.current);De.scroll&&(window.addEventListener("scroll",r),null==c||c.addEventListener("scroll",r),null==u||u.addEventListener("scroll",r));let d=null;De.resize?window.addEventListener("resize",r):H&&Y.current&&(d=function(e,t,o,n){void 0===n&&(n={});const{ancestorScroll:r=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,f=X(e),p=r||c?[...f?V(f):[],...V(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",o,{passive:!0}),c&&e.addEventListener("resize",o)}));const m=f&&u?function(e,t){let o,n=null;const r=C(e);function c(){clearTimeout(o),n&&n.disconnect(),n=null}return function a(u,d){void 0===u&&(u=!1),void 0===d&&(d=1),c();const{left:f,top:p,width:m,height:v}=e.getBoundingClientRect();if(u||t(),!m||!v)return;const y={rootMargin:-s(p)+"px "+-s(r.clientWidth-(f+m))+"px "+-s(r.clientHeight-(p+v))+"px "+-s(f)+"px",threshold:i(0,l(1,d))||1};let h=!0;function w(e){const t=e[0].intersectionRatio;if(t!==d){if(!h)return a();t?a(!1,t):o=setTimeout((()=>{a(!1,1e-7)}),100)}h=!1}try{n=new IntersectionObserver(w,{...y,root:r.ownerDocument})}catch(e){n=new IntersectionObserver(w,y)}n.observe(e)}(!0),c}(f,o):null;let v,y=-1,h=null;a&&(h=new ResizeObserver((e=>{let[n]=e;n&&n.target===f&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{h&&h.observe(t)}))),o()})),f&&!d&&h.observe(f),h.observe(t));let w=d?J(e):null;return d&&function t(){const n=J(e);!w||n.x===w.x&&n.y===w.y&&n.width===w.width&&n.height===w.height||o(),w=n,v=requestAnimationFrame(t)}(),o(),()=>{p.forEach((e=>{r&&e.removeEventListener("scroll",o),c&&e.removeEventListener("resize",o)})),m&&m(),h&&h.disconnect(),h=null,d&&cancelAnimationFrame(v)}}(H,Y.current,qe,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const f=e=>{"Escape"===e.key&&je(!1)};De.escape&&window.addEventListener("keydown",f),De.clickOutsideAnchor&&window.addEventListener("click",We);const p=[],m=e=>{se&&(null==e?void 0:e.target)===H||Be(e)},v=e=>{se&&(null==e?void 0:e.target)===H&&Ie()},y=["mouseenter","mouseleave","focus","blur"],h=["click","dblclick","mousedown","mouseup"];Object.entries(Ce).forEach((([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:ze}):h.includes(e)&&p.push({event:e,listener:m}))})),Object.entries(Ne).forEach((([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:Me}):h.includes(e)&&p.push({event:e,listener:v}))})),b&&p.push({event:"mousemove",listener:He});const w=()=>{Ae.current=!0},g=()=>{Ae.current=!1,Ie()};return _&&!Le&&(null===(e=Y.current)||void 0===e||e.addEventListener("mouseenter",w),null===(t=Y.current)||void 0===t||t.addEventListener("mouseleave",g)),p.forEach((({event:e,listener:t})=>{o.forEach((o=>{var n;null===(n=o.current)||void 0===n||n.addEventListener(e,t)}))})),()=>{var e,t;De.scroll&&(window.removeEventListener("scroll",r),null==c||c.removeEventListener("scroll",r),null==u||u.removeEventListener("scroll",r)),De.resize?window.removeEventListener("resize",r):null==d||d(),De.clickOutsideAnchor&&window.removeEventListener("click",We),De.escape&&window.removeEventListener("keydown",f),_&&!Le&&(null===(e=Y.current)||void 0===e||e.removeEventListener("mouseenter",w),null===(t=Y.current)||void 0===t||t.removeEventListener("mouseleave",g)),p.forEach((({event:e,listener:t})=>{o.forEach((o=>{var n;null===(n=o.current)||void 0===n||n.removeEventListener(e,t)}))}))}}),[H,qe,de,_e,Re,T,k,O,Oe]),(0,e.useEffect)((()=>{var e,t;let n=null!==(t=null!==(e=null==ge?void 0:ge.anchorSelect)&&void 0!==e?e:u)&&void 0!==t?t:"";!n&&o&&(n=`[data-tooltip-id='${o}']`);const r=new MutationObserver((e=>{const t=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&e.target.getAttribute("data-tooltip-id")===o&&t.push(e.target),"childList"===e.type){if(H){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{r.push(...t.filter((e=>e.matches(n)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,H))&&(me(!1),je(!1),W(null),U.current&&clearTimeout(U.current),Q.current&&clearTimeout(Q.current),!0)}))}if(n)try{const o=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...o.filter((e=>e.matches(n)))),t.push(...o.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(t.length||r.length)&&Te((e=>[...e.filter((e=>!r.includes(e))),...t]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{r.disconnect()}}),[o,u,null==ge?void 0:ge.anchorSelect,H]),(0,e.useEffect)((()=>{qe()}),[qe]),(0,e.useEffect)((()=>{if(!(null==B?void 0:B.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>qe()))}));return e.observe(B.current),()=>{e.disconnect()}}),[P,null==B?void 0:B.current]),(0,e.useEffect)((()=>{var e;const t=document.querySelector(`[id='${a}']`),o=[...Re,t];H&&o.includes(H)||W(null!==(e=Re[0])&&void 0!==e?e:t)}),[a,Re,H]),(0,e.useEffect)((()=>()=>{U.current&&clearTimeout(U.current),Q.current&&clearTimeout(Q.current)}),[]),(0,e.useEffect)((()=>{var e;let t=null!==(e=null==ge?void 0:ge.anchorSelect)&&void 0!==e?e:u;if(!t&&o&&(t=`[data-tooltip-id='${o}']`),t)try{const e=Array.from(document.querySelectorAll(t));Te(e)}catch(e){Te([])}}),[o,u,null==ge?void 0:ge.anchorSelect]);const Ve=null!==(G=null==ge?void 0:ge.content)&&void 0!==G?G:P,Ke=se&&Object.keys(ne).length>0;return(0,e.useImperativeHandle)(t,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}be(null!=e?e:null),(null==e?void 0:e.delay)?$e(e.delay):je(!0)},close:e=>{(null==e?void 0:e.delay)?Pe(e.delay):je(!1)},activeAnchor:H,place:te,isOpen:Boolean(de&&!x&&Ve&&Ke)}))),de&&!x&&Ve?e.createElement(h,{id:o,role:K,className:ie("react-tooltip",he.tooltip,we.tooltip,we[c],n,`react-tooltip__place-${te}`,he[Ke?"show":"closing"],Ke?"react-tooltip__show":"react-tooltip__closing","fixed"===v&&he.fixed,_&&he.clickable),onTransitionEnd:e=>{ee.current&&clearTimeout(ee.current),se||"opacity"!==e.propertyName||(me(!1),be(null),null==$||$())},style:{...N,...ne,opacity:void 0!==M&&Ke?M:void 0},ref:Y},Ve,e.createElement(h,{className:ie("react-tooltip-arrow",he.arrow,we.arrow,r,E&&he.noArrow),style:{...le,background:q?`linear-gradient(to right bottom, transparent 50%, ${q} 50%)`:void 0},ref:Z})):null},be=({content:t})=>e.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),xe=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),Ee=e.forwardRef((({id:t,anchorId:o,anchorSelect:n,content:r,html:l,render:i,className:c,classNameArrow:s,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:h,delayShow:w=0,delayHide:g=0,float:b=!1,hidden:x=!1,noArrow:E=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:A=!1,closeOnResize:R=!1,openEvents:T,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:L=!1,style:C,position:N,isOpen:D,disableStyleInjection:j=!1,border:$,opacity:P,arrowColor:B,setIsOpen:I,afterShow:F,afterHide:H,role:W="tooltip"},z)=>{const[M,q]=(0,e.useState)(r),[V,K]=(0,e.useState)(l),[X,G]=(0,e.useState)(u),[Y,Z]=(0,e.useState)(a),[J,U]=(0,e.useState)(d),[Q,ee]=(0,e.useState)(w),[te,oe]=(0,e.useState)(g),[ne,re]=(0,e.useState)(b),[le,ce]=(0,e.useState)(x),[se,ae]=(0,e.useState)(f),[ue,de]=(0,e.useState)(m),[pe,me]=(0,e.useState)(y),[ve,ye]=(0,e.useState)(null),[he,we]=(0,e.useState)(null),Ee=(0,e.useRef)(j),{anchorRefs:_e,activeAnchor:Se}=fe(t),Ae=e=>null==e?void 0:e.getAttributeNames().reduce(((t,o)=>{var n;return o.startsWith("data-tooltip-")&&(t[o.replace(/^data-tooltip-/,"")]=null!==(n=null==e?void 0:e.getAttribute(o))&&void 0!==n?n:null),t}),{}),Re=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:u)},content:e=>{q(null!=e?e:r)},html:e=>{K(null!=e?e:l)},variant:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:a)},offset:e=>{U(null===e?d:Number(e))},wrapper:e=>{var t;ae(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");de(null!=t?t:m)},"position-strategy":e=>{var t;me(null!==(t=e)&&void 0!==t?t:y)},"delay-show":e=>{ee(null===e?w:Number(e))},"delay-hide":e=>{oe(null===e?g:Number(e))},float:e=>{re(null===e?b:"true"===e)},hidden:e=>{ce(null===e?x:"true"===e)},"class-name":e=>{ye(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,o])=>{var n;null===(n=t[e])||void 0===n||n.call(t,o)}))};(0,e.useEffect)((()=>{q(r)}),[r]),(0,e.useEffect)((()=>{K(l)}),[l]),(0,e.useEffect)((()=>{G(u)}),[u]),(0,e.useEffect)((()=>{Z(a)}),[a]),(0,e.useEffect)((()=>{U(d)}),[d]),(0,e.useEffect)((()=>{ee(w)}),[w]),(0,e.useEffect)((()=>{oe(g)}),[g]),(0,e.useEffect)((()=>{re(b)}),[b]),(0,e.useEffect)((()=>{ce(x)}),[x]),(0,e.useEffect)((()=>{me(y)}),[y]),(0,e.useEffect)((()=>{Ee.current!==j&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[j]),(0,e.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===j,disableBase:j}}))}),[]),(0,e.useEffect)((()=>{var e;const r=new Set(_e);let l=n;if(!l&&t&&(l=`[data-tooltip-id='${t}']`),l)try{document.querySelectorAll(l).forEach((e=>{r.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${o}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const c=null!==(e=null!=he?he:i)&&void 0!==e?e:Se.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const o=Ae(c);Re(o)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=Ae(c);Re(e),s.observe(c,a)}return()=>{s.disconnect()}}),[_e,Se,he,o,n]),(0,e.useEffect)((()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),$&&!xe("border",`${$}`)&&console.warn(`[react-tooltip] "${$}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),P&&!xe("opacity",`${P}`)&&console.warn(`[react-tooltip] "${P}" is not a valid \`opacity\`.`)}),[]);let Te=p;const ke=(0,e.useRef)(null);if(i){const t=i({content:null!=M?M:null,activeAnchor:he});Te=t?e.createElement("div",{ref:ke,className:"react-tooltip-content-wrapper"},t):null}else M&&(Te=M);V&&(Te=e.createElement(be,{content:V}));const Oe={forwardRef:z,id:t,anchorId:o,anchorSelect:n,className:ie(c,ve),classNameArrow:s,content:Te,contentWrapperRef:ke,place:X,variant:Y,offset:J,wrapper:se,events:ue,openOnClick:v,positionStrategy:pe,middlewares:h,delayShow:Q,delayHide:te,float:ne,hidden:le,noArrow:E,clickable:_,closeOnEsc:S,closeOnScroll:A,closeOnResize:R,openEvents:T,closeEvents:k,globalCloseEvents:O,imperativeModeOnly:L,style:C,position:N,isOpen:D,border:$,opacity:P,arrowColor:B,setIsOpen:I,afterShow:F,afterHide:H,activeAnchor:he,setActiveAnchor:e=>we(e),role:W};return e.createElement(ge,{...Oe})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||se({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||se({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));const _e=window.wp.i18n,Se=window.wp.components;window.wp.data;const Ae=({onlineEventLinkDefault:t=""})=>{const o=(0,_e.__)("Online event","gatherpress"),[n,l]=(0,r.useState)(t);return((e,t="")=>{for(const[o,n]of Object.entries(e)){let e=o;t&&(e+="_"+String(t)),addEventListener(e,(e=>{n(e.detail)}),!1)}})({setOnlineEventLink:l},function(e){if("object"==typeof GatherPress)return"post_id".split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}()),(0,e.createElement)(Se.Flex,{justify:"normal",gap:"3"},(0,e.createElement)(Se.FlexItem,{display:"flex"},(0,e.createElement)(Se.Icon,{icon:"video-alt2"})),(0,e.createElement)(Se.FlexItem,null,!n&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{tabIndex:"0",className:"gp-tooltip","data-tooltip-id":"gp-online-event-tooltip","data-tooltip-content":(0,_e.__)("Link active for attendees during event.","gatherpress")},o),(0,e.createElement)(Ee,{id:"gp-online-event-tooltip"})),n&&(0,e.createElement)("a",{href:n,rel:"noreferrer",target:"_blank"},o)))};n()((()=>{const t=document.querySelectorAll('[data-gp_block_name="online-event"]');for(let n=0;n<t.length;n++){var o;const l=JSON.parse(t[n].dataset.gp_block_attrs);(0,r.createRoot)(t[n]).render((0,e.createElement)(Ae,{onlineEventLinkDefault:null!==(o=l.onlineEventLink)&&void 0!==o?o:""}))}}))})()})();