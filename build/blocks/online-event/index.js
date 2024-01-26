(()=>{var e,t={3850:(e,t,n)=>{"use strict";const o=window.wp.blocks,r=window.React,l=window.wp.blockEditor,i=window.wp.components,s=window.wp.data,c=Math.min,a=Math.max,u=Math.round,d=Math.floor,f=e=>({x:e,y:e}),p={left:"right",right:"left",bottom:"top",top:"bottom"},m={start:"end",end:"start"};function v(e,t,n){return a(e,c(t,n))}function y(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function g(e){return e.split("-")[1]}function w(e){return"x"===e?"y":"x"}function b(e){return"y"===e?"height":"width"}function x(e){return["top","bottom"].includes(h(e))?"y":"x"}function E(e){return w(x(e))}function _(e){return e.replace(/start|end/g,(e=>m[e]))}function S(e){return e.replace(/left|right|bottom|top/g,(e=>p[e]))}function k(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function O(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function T(e,t,n){let{reference:o,floating:r}=e;const l=x(t),i=E(t),s=b(i),c=h(t),a="y"===l,u=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2;let p;switch(c){case"top":p={x:u,y:o.y-r.height};break;case"bottom":p={x:u,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}switch(g(t)){case"start":p[i]-=f*(n&&a?-1:1);break;case"end":p[i]+=f*(n&&a?-1:1)}return p}async function A(e,t){var n;void 0===t&&(t={});const{x:o,y:r,platform:l,rects:i,elements:s,strategy:c}=e,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=y(t,e),m=k(p),v=s[f?"floating"===d?"reference":"floating":d],h=O(await l.getClippingRect({element:null==(n=await(null==l.isElement?void 0:l.isElement(v)))||n?v:v.contextElement||await(null==l.getDocumentElement?void 0:l.getDocumentElement(s.floating)),boundary:a,rootBoundary:u,strategy:c})),g="floating"===d?{...i.floating,x:o,y:r}:i.reference,w=await(null==l.getOffsetParent?void 0:l.getOffsetParent(s.floating)),b=await(null==l.isElement?void 0:l.isElement(w))&&await(null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},x=O(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:w,strategy:c}):g);return{top:(h.top-x.top+m.top)/b.y,bottom:(x.bottom-h.bottom+m.bottom)/b.y,left:(h.left-x.left+m.left)/b.x,right:(x.right-h.right+m.right)/b.x}}const R=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:r,middlewareData:l,rects:i,initialPlacement:s,platform:c,elements:a}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...w}=y(e,t);if(null!=(n=l.arrow)&&n.alignmentOffset)return{};const x=h(r),k=h(s)===s,O=await(null==c.isRTL?void 0:c.isRTL(a.floating)),T=f||(k||!v?[S(s)]:function(e){const t=S(e);return[_(e),t,_(t)]}(s));f||"none"===m||T.push(...function(e,t,n,o){const r=g(e);let l=function(e,t,n){const o=["left","right"],r=["right","left"],l=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?l:i;default:return[]}}(h(e),"start"===n,o);return r&&(l=l.map((e=>e+"-"+r)),t&&(l=l.concat(l.map(_)))),l}(s,v,m,O));const R=[s,...T],L=await A(t,w),C=[];let N=(null==(o=l.flip)?void 0:o.overflows)||[];if(u&&C.push(L[x]),d){const e=function(e,t,n){void 0===n&&(n=!1);const o=g(e),r=E(e),l=b(r);let i="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[l]>t.floating[l]&&(i=S(i)),[i,S(i)]}(r,i,O);C.push(L[e[0]],L[e[1]])}if(N=[...N,{placement:r,overflows:C}],!C.every((e=>e<=0))){var D,j;const e=((null==(D=l.flip)?void 0:D.index)||0)+1,t=R[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let n=null==(j=N.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:j.placement;if(!n)switch(p){case"bestFit":{var P;const e=null==(P=N.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:P[0];e&&(n=e);break}case"initialPlacement":n=s}if(r!==n)return{reset:{placement:n}}}return{}}}},L=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await async function(e,t){const{placement:n,platform:o,elements:r}=e,l=await(null==o.isRTL?void 0:o.isRTL(r.floating)),i=h(n),s=g(n),c="y"===x(n),a=["left","top"].includes(i)?-1:1,u=l&&c?-1:1,d=y(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof m&&(p="end"===s?-1*m:m),c?{x:p*u,y:f*a}:{x:f*a,y:p*u}}(t,e);return{x:n+r.x,y:o+r.y,data:r}}}},C=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=y(e,t),a={x:n,y:o},u=await A(t,c),d=x(h(r)),f=w(d);let p=a[f],m=a[d];if(l){const e="y"===f?"bottom":"right";p=v(p+u["y"===f?"top":"left"],p,p-u[e])}if(i){const e="y"===d?"bottom":"right";m=v(m+u["y"===d?"top":"left"],m,m-u[e])}const g=s.fn({...t,[f]:p,[d]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function N(e){return P(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function j(e){var t;return null==(t=(P(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function P(e){return e instanceof Node||e instanceof D(e).Node}function $(e){return e instanceof Element||e instanceof D(e).Element}function B(e){return e instanceof HTMLElement||e instanceof D(e).HTMLElement}function I(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof D(e).ShadowRoot)}function F(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function H(e){return["table","td","th"].includes(N(e))}function z(e){const t=W(),n=q(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function W(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function M(e){return["html","body","#document"].includes(N(e))}function q(e){return D(e).getComputedStyle(e)}function V(e){return $(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function K(e){if("html"===N(e))return e;const t=e.assignedSlot||e.parentNode||I(e)&&e.host||j(e);return I(t)?t.host:t}function X(e){const t=K(e);return M(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&F(t)?t:X(t)}function G(e,t,n){var o;void 0===t&&(t=[]),void 0===n&&(n=!0);const r=X(e),l=r===(null==(o=e.ownerDocument)?void 0:o.body),i=D(r);return l?t.concat(i,i.visualViewport||[],F(r)?r:[],i.frameElement&&n?G(i.frameElement):[]):t.concat(r,G(r,[],n))}function Y(e){const t=q(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=B(e),l=r?e.offsetWidth:n,i=r?e.offsetHeight:o,s=u(n)!==l||u(o)!==i;return s&&(n=l,o=i),{width:n,height:o,$:s}}function U(e){return $(e)?e:e.contextElement}function Z(e){const t=U(e);if(!B(t))return f(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:l}=Y(t);let i=(l?u(n.width):n.width)/o,s=(l?u(n.height):n.height)/r;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}const J=f(0);function Q(e){const t=D(e);return W()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:J}function ee(e,t,n,o){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=e.getBoundingClientRect(),l=U(e);let i=f(1);t&&(o?$(o)&&(i=Z(o)):i=Z(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==D(e))&&t}(l,n,o)?Q(l):f(0);let c=(r.left+s.x)/i.x,a=(r.top+s.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(l){const e=D(l),t=o&&$(o)?D(o):o;let n=e.frameElement;for(;n&&o&&t!==e;){const e=Z(n),t=n.getBoundingClientRect(),o=q(n),r=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,l=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;c*=e.x,a*=e.y,u*=e.x,d*=e.y,c+=r,a+=l,n=D(n).frameElement}}return O({width:u,height:d,x:c,y:a})}function te(e){return ee(j(e)).left+V(e).scrollLeft}function ne(e,t,n){let o;if("viewport"===t)o=function(e,t){const n=D(e),o=j(e),r=n.visualViewport;let l=o.clientWidth,i=o.clientHeight,s=0,c=0;if(r){l=r.width,i=r.height;const e=W();(!e||e&&"fixed"===t)&&(s=r.offsetLeft,c=r.offsetTop)}return{width:l,height:i,x:s,y:c}}(e,n);else if("document"===t)o=function(e){const t=j(e),n=V(e),o=e.ownerDocument.body,r=a(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),l=a(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+te(e);const s=-n.scrollTop;return"rtl"===q(o).direction&&(i+=a(t.clientWidth,o.clientWidth)-r),{width:r,height:l,x:i,y:s}}(j(e));else if($(t))o=function(e,t){const n=ee(e,!0,"fixed"===t),o=n.top+e.clientTop,r=n.left+e.clientLeft,l=B(e)?Z(e):f(1);return{width:e.clientWidth*l.x,height:e.clientHeight*l.y,x:r*l.x,y:o*l.y}}(t,n);else{const n=Q(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return O(o)}function oe(e,t){const n=K(e);return!(n===t||!$(n)||M(n))&&("fixed"===q(n).position||oe(n,t))}function re(e,t,n){const o=B(t),r=j(t),l="fixed"===n,i=ee(e,!0,l,t);let s={scrollLeft:0,scrollTop:0};const c=f(0);if(o||!o&&!l)if(("body"!==N(t)||F(r))&&(s=V(t)),o){const e=ee(t,!0,l,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else r&&(c.x=te(r));return{x:i.left+s.scrollLeft-c.x,y:i.top+s.scrollTop-c.y,width:i.width,height:i.height}}function le(e,t){return B(e)&&"fixed"!==q(e).position?t?t(e):e.offsetParent:null}function ie(e,t){const n=D(e);if(!B(e))return n;let o=le(e,t);for(;o&&H(o)&&"static"===q(o).position;)o=le(o,t);return o&&("html"===N(o)||"body"===N(o)&&"static"===q(o).position&&!z(o))?n:o||function(e){let t=K(e);for(;B(t)&&!M(t);){if(z(t))return t;t=K(t)}return null}(e)||n}const se={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=B(n),l=j(n);if(n===l)return t;let i={scrollLeft:0,scrollTop:0},s=f(1);const c=f(0);if((r||!r&&"fixed"!==o)&&(("body"!==N(n)||F(l))&&(i=V(n)),B(n))){const e=ee(n);s=Z(n),c.x=e.x+n.clientLeft,c.y=e.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-i.scrollLeft*s.x+c.x,y:t.y*s.y-i.scrollTop*s.y+c.y}},getDocumentElement:j,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const l=[..."clippingAncestors"===n?function(e,t){const n=t.get(e);if(n)return n;let o=G(e,[],!1).filter((e=>$(e)&&"body"!==N(e))),r=null;const l="fixed"===q(e).position;let i=l?K(e):e;for(;$(i)&&!M(i);){const t=q(i),n=z(i);n||"fixed"!==t.position||(r=null),(l?!n&&!r:!n&&"static"===t.position&&r&&["absolute","fixed"].includes(r.position)||F(i)&&!n&&oe(e,i))?o=o.filter((e=>e!==i)):r=t,i=K(i)}return t.set(e,o),o}(t,this._c):[].concat(n),o],i=l[0],s=l.reduce(((e,n)=>{const o=ne(t,n,r);return e.top=a(o.top,e.top),e.right=c(o.right,e.right),e.bottom=c(o.bottom,e.bottom),e.left=a(o.left,e.left),e}),ne(t,i,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:ie,getElementRects:async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||ie,l=this.getDimensions;return{reference:re(t,await r(n),o),floating:{x:0,y:0,...await l(n)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return Y(e)},getScale:Z,isElement:$,isRTL:function(e){return"rtl"===q(e).direction}};const ce=(e,t,n)=>{const o=new Map,r={platform:se,...n},l={...r.platform,_c:o};return(async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:i}=n,s=l.filter(Boolean),c=await(null==i.isRTL?void 0:i.isRTL(t));let a=await i.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:d}=T(a,o,c),f=o,p={},m=0;for(let n=0;n<s.length;n++){const{name:l,fn:v}=s[n],{x:y,y:h,data:g,reset:w}=await v({x:u,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:p,rects:a,platform:i,elements:{reference:e,floating:t}});u=null!=y?y:u,d=null!=h?h:d,p={...p,[l]:{...p[l],...g}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(f=w.placement),w.rects&&(a=!0===w.rects?await i.getElementRects({reference:e,floating:t,strategy:r}):w.rects),({x:u,y:d}=T(a,f,c))),n=-1)}return{x:u,y:d,placement:f,strategy:r,middlewareData:p}})(e,t,{...r,platform:l})};var ae=n(3967);const ue={core:!1,base:!1};function de({css:e,id:t="react-tooltip-base-styles",type:n="base",ref:o}){var r,l;if(!e||"undefined"==typeof document||ue[n])return;if("core"===n&&"undefined"!=typeof process&&(null===(r=null===process||void 0===process?void 0:process.env)||void 0===r?void 0:r.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==n&&"undefined"!=typeof process&&(null===(l=null===process||void 0===process?void 0:process.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===n&&(t="react-tooltip-core-styles"),o||(o={});const{insertAt:i}=o;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=t,c.type="text/css","top"===i&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=e:c.appendChild(document.createTextNode(e)),ue[n]=!0}const fe=(e,t,n)=>{let o=null;return function(...r){const l=()=>{o=null,n||e.apply(this,r)};n&&!o&&(e.apply(this,r),o=setTimeout(l,t)),n||(o&&clearTimeout(o),o=setTimeout(l,t))}},pe={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},me=(0,r.createContext)({getTooltipData:()=>pe});function ve(e="DEFAULT_TOOLTIP_ID"){return(0,r.useContext)(me).getTooltipData(e)}const ye="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,he=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const n=t.getPropertyValue(e);return"auto"===n||"scroll"===n}))},ge=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(he(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},we=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:o="top",offset:r=10,strategy:l="absolute",middlewares:i=[L(Number(r)),R({fallbackAxisSideDirection:"start"}),C({padding:5})],border:s})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const a=i;return n?(a.push({name:"arrow",options:u={element:n,padding:5},async fn(e){const{x:t,y:n,placement:o,rects:r,platform:l,elements:i,middlewareData:s}=e,{element:a,padding:d=0}=y(u,e)||{};if(null==a)return{};const f=k(d),p={x:t,y:n},m=E(o),h=b(m),w=await l.getDimensions(a),x="y"===m,_=x?"top":"left",S=x?"bottom":"right",O=x?"clientHeight":"clientWidth",T=r.reference[h]+r.reference[m]-p[m]-r.floating[h],A=p[m]-r.reference[m],R=await(null==l.getOffsetParent?void 0:l.getOffsetParent(a));let L=R?R[O]:0;L&&await(null==l.isElement?void 0:l.isElement(R))||(L=i.floating[O]||r.floating[h]);const C=T/2-A/2,N=L/2-w[h]/2-1,D=c(f[_],N),j=c(f[S],N),P=D,$=L-w[h]-j,B=L/2-w[h]/2+C,I=v(P,B,$),F=!s.arrow&&null!=g(o)&&B!=I&&r.reference[h]/2-(B<P?D:j)-w[h]/2<0,H=F?B<P?B-P:B-$:0;return{[m]:p[m]+H,data:{[m]:I,centerOffset:B-I-H,...F&&{alignmentOffset:H}},reset:F}}}),ce(e,t,{placement:o,strategy:l,middleware:a}).then((({x:e,y:t,placement:n,middlewareData:o})=>{var r,l;const i={left:`${e}px`,top:`${t}px`,border:s},{x:c,y:a}=null!==(r=o.arrow)&&void 0!==r?r:{x:0,y:0},u=null!==(l={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]])&&void 0!==l?l:"bottom",d=s&&{borderBottom:s,borderRight:s};let f=0;if(s){const e=`${s}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+f}px`},place:n}}))):ce(e,t,{placement:"bottom",strategy:l,middleware:a}).then((({x:e,y:t,placement:n})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:n})));var u};var be={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},xe={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Ee=({forwardRef:e,id:t,className:n,classNameArrow:o,variant:l="dark",anchorId:i,anchorSelect:s,place:u="top",offset:f=10,events:p=["hover"],openOnClick:m=!1,positionStrategy:v="absolute",middlewares:y,wrapper:h,delayShow:g=0,delayHide:w=0,float:b=!1,hidden:x=!1,noArrow:E=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:k=!1,closeOnResize:O=!1,openEvents:T,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:L,style:C,position:N,afterShow:D,afterHide:P,content:$,contentWrapperRef:B,isOpen:I,setIsOpen:F,activeAnchor:H,setActiveAnchor:z,border:W,opacity:M,arrowColor:q,role:V="tooltip"})=>{var K;const X=(0,r.useRef)(null),Y=(0,r.useRef)(null),Z=(0,r.useRef)(null),J=(0,r.useRef)(null),Q=(0,r.useRef)(null),[te,ne]=(0,r.useState)(u),[oe,re]=(0,r.useState)({}),[le,ie]=(0,r.useState)({}),[se,ce]=(0,r.useState)(!1),[ue,de]=(0,r.useState)(!1),[pe,me]=(0,r.useState)(null),he=(0,r.useRef)(!1),Ee=(0,r.useRef)(null),{anchorRefs:_e,setActiveAnchor:Se}=ve(t),ke=(0,r.useRef)(!1),[Oe,Te]=(0,r.useState)([]),Ae=(0,r.useRef)(!1),Re=m||p.includes("click"),Le=Re||(null==T?void 0:T.click)||(null==T?void 0:T.dblclick)||(null==T?void 0:T.mousedown),Ce=T?{...T}:{mouseenter:!0,focus:!0,click:!1,dblclick:!1,mousedown:!1};!T&&Re&&Object.assign(Ce,{mouseenter:!1,focus:!1,click:!0});const Ne=A?{...A}:{mouseleave:!0,blur:!0,click:!1,dblclick:!1,mouseup:!1};!A&&Re&&Object.assign(Ne,{mouseleave:!1,blur:!1});const De=R?{...R}:{escape:S||!1,scroll:k||!1,resize:O||!1,clickOutsideAnchor:Le||!1};L&&(Object.assign(Ce,{mouseenter:!1,focus:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(Ne,{mouseleave:!1,blur:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(De,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),ye((()=>(Ae.current=!0,()=>{Ae.current=!1})),[]);const je=e=>{Ae.current&&(e&&de(!0),setTimeout((()=>{Ae.current&&(null==F||F(e),void 0===I&&ce(e))}),10))};(0,r.useEffect)((()=>{if(void 0===I)return()=>null;I&&de(!0);const e=setTimeout((()=>{ce(I)}),10);return()=>{clearTimeout(e)}}),[I]),(0,r.useEffect)((()=>{if(se!==he.current)if(Q.current&&clearTimeout(Q.current),he.current=se,se)null==D||D();else{const e=(e=>{const t=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(m?s?)$/);if(!t)return 0;const[,n,o]=t;return"s"!==o&&"ms"!==o?0:Number(n)*("ms"===o?1:1e3)})();Q.current=setTimeout((()=>{de(!1),me(null),null==P||P()}),e+25)}}),[se]);const Pe=(e=g)=>{Z.current&&clearTimeout(Z.current),Z.current=setTimeout((()=>{je(!0)}),e)},$e=(e=w)=>{J.current&&clearTimeout(J.current),J.current=setTimeout((()=>{ke.current||je(!1)}),e)},Be=e=>{var t;if(!e)return;const n=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==n?void 0:n.isConnected))return z(null),void Se({current:null});g?Pe():je(!0),z(n),Se({current:n}),J.current&&clearTimeout(J.current)},Ie=()=>{_?$e(w||100):w?$e():je(!1),Z.current&&clearTimeout(Z.current)},Fe=({x:e,y:t})=>{var n;const o={getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})};we({place:null!==(n=null==pe?void 0:pe.place)&&void 0!==n?n:u,offset:f,elementReference:o,tooltipReference:X.current,tooltipArrowReference:Y.current,strategy:v,middlewares:y,border:W}).then((e=>{Object.keys(e.tooltipStyles).length&&re(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ie(e.tooltipArrowStyles),ne(e.place)}))},He=e=>{if(!e)return;const t=e,n={x:t.clientX,y:t.clientY};Fe(n),Ee.current=n},ze=e=>{var t;if(!se)return;const n=e.target;(null===(t=X.current)||void 0===t?void 0:t.contains(n))||[document.querySelector(`[id='${i}']`),...Oe].some((e=>null==e?void 0:e.contains(n)))||(je(!1),Z.current&&clearTimeout(Z.current))},We=fe(Be,50,!0),Me=fe(Ie,50,!0),qe=(0,r.useCallback)((()=>{var e,t;const n=null!==(e=null==pe?void 0:pe.position)&&void 0!==e?e:N;n?Fe(n):b?Ee.current&&Fe(Ee.current):(null==H?void 0:H.isConnected)&&we({place:null!==(t=null==pe?void 0:pe.place)&&void 0!==t?t:u,offset:f,elementReference:H,tooltipReference:X.current,tooltipArrowReference:Y.current,strategy:v,middlewares:y,border:W}).then((e=>{Ae.current&&(Object.keys(e.tooltipStyles).length&&re(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ie(e.tooltipArrowStyles),ne(e.place))}))}),[se,H,$,C,u,null==pe?void 0:pe.place,f,v,N,null==pe?void 0:pe.position,b]);(0,r.useEffect)((()=>{var e,t;const n=new Set(_e);Oe.forEach((e=>{n.add({current:e})}));const o=document.querySelector(`[id='${i}']`);o&&n.add({current:o});const r=()=>{je(!1)},l=ge(H),s=ge(X.current);De.scroll&&(window.addEventListener("scroll",r),null==l||l.addEventListener("scroll",r),null==s||s.addEventListener("scroll",r));let u=null;De.resize?window.addEventListener("resize",r):H&&X.current&&(u=function(e,t,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:l=!0,elementResize:i="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=o,f=U(e),p=r||l?[...f?G(f):[],...G(t)]:[];p.forEach((e=>{r&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)}));const m=f&&s?function(e,t){let n,o=null;const r=j(e);function l(){clearTimeout(n),o&&o.disconnect(),o=null}return function i(s,u){void 0===s&&(s=!1),void 0===u&&(u=1),l();const{left:f,top:p,width:m,height:v}=e.getBoundingClientRect();if(s||t(),!m||!v)return;const y={rootMargin:-d(p)+"px "+-d(r.clientWidth-(f+m))+"px "+-d(r.clientHeight-(p+v))+"px "+-d(f)+"px",threshold:a(0,c(1,u))||1};let h=!0;function g(e){const t=e[0].intersectionRatio;if(t!==u){if(!h)return i();t?i(!1,t):n=setTimeout((()=>{i(!1,1e-7)}),100)}h=!1}try{o=new IntersectionObserver(g,{...y,root:r.ownerDocument})}catch(e){o=new IntersectionObserver(g,y)}o.observe(e)}(!0),l}(f,n):null;let v,y=-1,h=null;i&&(h=new ResizeObserver((e=>{let[o]=e;o&&o.target===f&&h&&(h.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{h&&h.observe(t)}))),n()})),f&&!u&&h.observe(f),h.observe(t));let g=u?ee(e):null;return u&&function t(){const o=ee(e);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,v=requestAnimationFrame(t)}(),n(),()=>{p.forEach((e=>{r&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)})),m&&m(),h&&h.disconnect(),h=null,u&&cancelAnimationFrame(v)}}(H,X.current,qe,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const f=e=>{"Escape"===e.key&&je(!1)};De.escape&&window.addEventListener("keydown",f),De.clickOutsideAnchor&&window.addEventListener("click",ze);const p=[],m=e=>{se&&(null==e?void 0:e.target)===H||Be(e)},v=e=>{se&&(null==e?void 0:e.target)===H&&Ie()},y=["mouseenter","mouseleave","focus","blur"],h=["click","dblclick","mousedown","mouseup"];Object.entries(Ce).forEach((([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:We}):h.includes(e)&&p.push({event:e,listener:m}))})),Object.entries(Ne).forEach((([e,t])=>{t&&(y.includes(e)?p.push({event:e,listener:Me}):h.includes(e)&&p.push({event:e,listener:v}))})),b&&p.push({event:"mousemove",listener:He});const g=()=>{ke.current=!0},w=()=>{ke.current=!1,Ie()};return _&&!Le&&(null===(e=X.current)||void 0===e||e.addEventListener("mouseenter",g),null===(t=X.current)||void 0===t||t.addEventListener("mouseleave",w)),p.forEach((({event:e,listener:t})=>{n.forEach((n=>{var o;null===(o=n.current)||void 0===o||o.addEventListener(e,t)}))})),()=>{var e,t;De.scroll&&(window.removeEventListener("scroll",r),null==l||l.removeEventListener("scroll",r),null==s||s.removeEventListener("scroll",r)),De.resize?window.removeEventListener("resize",r):null==u||u(),De.clickOutsideAnchor&&window.removeEventListener("click",ze),De.escape&&window.removeEventListener("keydown",f),_&&!Le&&(null===(e=X.current)||void 0===e||e.removeEventListener("mouseenter",g),null===(t=X.current)||void 0===t||t.removeEventListener("mouseleave",w)),p.forEach((({event:e,listener:t})=>{n.forEach((n=>{var o;null===(o=n.current)||void 0===o||o.removeEventListener(e,t)}))}))}}),[H,qe,ue,_e,Oe,T,A,R,Re]),(0,r.useEffect)((()=>{var e,n;let o=null!==(n=null!==(e=null==pe?void 0:pe.anchorSelect)&&void 0!==e?e:s)&&void 0!==n?n:"";!o&&t&&(o=`[data-tooltip-id='${t}']`);const r=new MutationObserver((e=>{const n=[],r=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&e.target.getAttribute("data-tooltip-id")===t&&n.push(e.target),"childList"===e.type){if(H){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(o)try{r.push(...t.filter((e=>e.matches(o)))),r.push(...t.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,H))&&(de(!1),je(!1),z(null),Z.current&&clearTimeout(Z.current),J.current&&clearTimeout(J.current),!0)}))}if(o)try{const t=[...e.addedNodes].filter((e=>1===e.nodeType));n.push(...t.filter((e=>e.matches(o)))),n.push(...t.flatMap((e=>[...e.querySelectorAll(o)])))}catch(e){}}})),(n.length||r.length)&&Te((e=>[...e.filter((e=>!r.includes(e))),...n]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{r.disconnect()}}),[t,s,null==pe?void 0:pe.anchorSelect,H]),(0,r.useEffect)((()=>{qe()}),[qe]),(0,r.useEffect)((()=>{if(!(null==B?void 0:B.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>qe()))}));return e.observe(B.current),()=>{e.disconnect()}}),[$,null==B?void 0:B.current]),(0,r.useEffect)((()=>{var e;const t=document.querySelector(`[id='${i}']`),n=[...Oe,t];H&&n.includes(H)||z(null!==(e=Oe[0])&&void 0!==e?e:t)}),[i,Oe,H]),(0,r.useEffect)((()=>()=>{Z.current&&clearTimeout(Z.current),J.current&&clearTimeout(J.current)}),[]),(0,r.useEffect)((()=>{var e;let n=null!==(e=null==pe?void 0:pe.anchorSelect)&&void 0!==e?e:s;if(!n&&t&&(n=`[data-tooltip-id='${t}']`),n)try{const e=Array.from(document.querySelectorAll(n));Te(e)}catch(e){Te([])}}),[t,s,null==pe?void 0:pe.anchorSelect]);const Ve=null!==(K=null==pe?void 0:pe.content)&&void 0!==K?K:$,Ke=se&&Object.keys(oe).length>0;return(0,r.useImperativeHandle)(e,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(t){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}me(null!=e?e:null),(null==e?void 0:e.delay)?Pe(e.delay):je(!0)},close:e=>{(null==e?void 0:e.delay)?$e(e.delay):je(!1)},activeAnchor:H,place:te,isOpen:Boolean(ue&&!x&&Ve&&Ke)}))),ue&&!x&&Ve?r.createElement(h,{id:t,role:V,className:ae("react-tooltip",be.tooltip,xe.tooltip,xe[l],n,`react-tooltip__place-${te}`,be[Ke?"show":"closing"],Ke?"react-tooltip__show":"react-tooltip__closing","fixed"===v&&be.fixed,_&&be.clickable),onTransitionEnd:e=>{Q.current&&clearTimeout(Q.current),se||"opacity"!==e.propertyName||(de(!1),me(null),null==P||P())},style:{...C,...oe,opacity:void 0!==M&&Ke?M:void 0},ref:X},Ve,r.createElement(h,{className:ae("react-tooltip-arrow",be.arrow,xe.arrow,o,E&&be.noArrow),style:{...le,background:q?`linear-gradient(to right bottom, transparent 50%, ${q} 50%)`:void 0},ref:Y})):null},_e=({content:e})=>r.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),Se=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),ke=r.forwardRef((({id:e,anchorId:t,anchorSelect:n,content:o,html:l,render:i,className:s,classNameArrow:c,variant:a="dark",place:u="top",offset:d=10,wrapper:f="div",children:p=null,events:m=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:h,delayShow:g=0,delayHide:w=0,float:b=!1,hidden:x=!1,noArrow:E=!1,clickable:_=!1,closeOnEsc:S=!1,closeOnScroll:k=!1,closeOnResize:O=!1,openEvents:T,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:L=!1,style:C,position:N,isOpen:D,disableStyleInjection:j=!1,border:P,opacity:$,arrowColor:B,setIsOpen:I,afterShow:F,afterHide:H,role:z="tooltip"},W)=>{const[M,q]=(0,r.useState)(o),[V,K]=(0,r.useState)(l),[X,G]=(0,r.useState)(u),[Y,U]=(0,r.useState)(a),[Z,J]=(0,r.useState)(d),[Q,ee]=(0,r.useState)(g),[te,ne]=(0,r.useState)(w),[oe,re]=(0,r.useState)(b),[le,ie]=(0,r.useState)(x),[se,ce]=(0,r.useState)(f),[ue,de]=(0,r.useState)(m),[fe,pe]=(0,r.useState)(y),[me,ye]=(0,r.useState)(null),[he,ge]=(0,r.useState)(null),we=(0,r.useRef)(j),{anchorRefs:be,activeAnchor:xe}=ve(e),ke=e=>null==e?void 0:e.getAttributeNames().reduce(((t,n)=>{var o;return n.startsWith("data-tooltip-")&&(t[n.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(n))&&void 0!==o?o:null),t}),{}),Oe=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:u)},content:e=>{q(null!=e?e:o)},html:e=>{K(null!=e?e:l)},variant:e=>{var t;U(null!==(t=e)&&void 0!==t?t:a)},offset:e=>{J(null===e?d:Number(e))},wrapper:e=>{var t;ce(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");de(null!=t?t:m)},"position-strategy":e=>{var t;pe(null!==(t=e)&&void 0!==t?t:y)},"delay-show":e=>{ee(null===e?g:Number(e))},"delay-hide":e=>{ne(null===e?w:Number(e))},float:e=>{re(null===e?b:"true"===e)},hidden:e=>{ie(null===e?x:"true"===e)},"class-name":e=>{ye(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,n])=>{var o;null===(o=t[e])||void 0===o||o.call(t,n)}))};(0,r.useEffect)((()=>{q(o)}),[o]),(0,r.useEffect)((()=>{K(l)}),[l]),(0,r.useEffect)((()=>{G(u)}),[u]),(0,r.useEffect)((()=>{U(a)}),[a]),(0,r.useEffect)((()=>{J(d)}),[d]),(0,r.useEffect)((()=>{ee(g)}),[g]),(0,r.useEffect)((()=>{ne(w)}),[w]),(0,r.useEffect)((()=>{re(b)}),[b]),(0,r.useEffect)((()=>{ie(x)}),[x]),(0,r.useEffect)((()=>{pe(y)}),[y]),(0,r.useEffect)((()=>{we.current!==j&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[j]),(0,r.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===j,disableBase:j}}))}),[]),(0,r.useEffect)((()=>{var o;const r=new Set(be);let l=n;if(!l&&e&&(l=`[data-tooltip-id='${e}']`),l)try{document.querySelectorAll(l).forEach((e=>{r.add({current:e})}))}catch(o){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${t}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const s=null!==(o=null!=he?he:i)&&void 0!==o?o:xe.current,c=new MutationObserver((e=>{e.forEach((e=>{var t;if(!s||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const n=ke(s);Oe(n)}))})),a={attributes:!0,childList:!1,subtree:!1};if(s){const e=ke(s);Oe(e),c.observe(s,a)}return()=>{c.disconnect()}}),[be,xe,he,t,n]),(0,r.useEffect)((()=>{(null==C?void 0:C.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),P&&!Se("border",`${P}`)&&console.warn(`[react-tooltip] "${P}" is not a valid \`border\`.`),(null==C?void 0:C.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),$&&!Se("opacity",`${$}`)&&console.warn(`[react-tooltip] "${$}" is not a valid \`opacity\`.`)}),[]);let Te=p;const Ae=(0,r.useRef)(null);if(i){const e=i({content:null!=M?M:null,activeAnchor:he});Te=e?r.createElement("div",{ref:Ae,className:"react-tooltip-content-wrapper"},e):null}else M&&(Te=M);V&&(Te=r.createElement(_e,{content:V}));const Re={forwardRef:W,id:e,anchorId:t,anchorSelect:n,className:ae(s,me),classNameArrow:c,content:Te,contentWrapperRef:Ae,place:X,variant:Y,offset:Z,wrapper:se,events:ue,openOnClick:v,positionStrategy:fe,middlewares:h,delayShow:Q,delayHide:te,float:oe,hidden:le,noArrow:E,clickable:_,closeOnEsc:S,closeOnScroll:k,closeOnResize:O,openEvents:T,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:L,style:C,position:N,isOpen:D,border:P,opacity:$,arrowColor:B,setIsOpen:I,afterShow:F,afterHide:H,activeAnchor:he,setActiveAnchor:e=>ge(e),role:z};return r.createElement(Ee,{...Re})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||de({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||de({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));const Oe=window.wp.i18n,Te=window.wp.element,Ae=(e,t="")=>{for(const[n,o]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{o(e.detail)}),!1)}};function Re(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const Le=({onlineEventLinkDefault:e=""})=>{const t=(0,Oe.__)("Online event","gatherpress"),[n,o]=(0,Te.useState)(e);return Ae({setOnlineEventLink:o},Re("post_id")),(0,r.createElement)(i.Flex,{justify:"normal",gap:"3"},(0,r.createElement)(i.FlexItem,{display:"flex"},(0,r.createElement)(i.Icon,{icon:"video-alt2"})),(0,r.createElement)(i.FlexItem,null,!n&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("span",{tabIndex:"0",className:"gp-tooltip","data-tooltip-id":"gp-online-event-tooltip","data-tooltip-content":(0,Oe.__)("Link active for attendees during event.","gatherpress")},t),(0,r.createElement)(ke,{id:"gp-online-event-tooltip"})),n&&(0,r.createElement)("a",{href:n,rel:"noreferrer",target:"_blank"},t)))},Ce=()=>{const{editPost:e,unlockPostSaving:t}=(0,s.useDispatch)("core/editor"),n=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta")._online_event_link)),[o,l]=(0,Te.useState)(n);return Ae({setOnlineEventLink:l},Re("post_id")),(0,r.createElement)(i.TextControl,{label:(0,Oe.__)("Online event link","gatherpress"),value:o,placeholder:(0,Oe.__)("Add link to online event","gatherpress"),onChange:n=>{(n=>{e({meta:{_online_event_link:n}}),l(n),((e,t="")=>{for(const[n,o]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:o});dispatchEvent(r)}})({setOnlineEventLink:n},Re("post_id")),t()})(n)}})},Ne=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,r.createElement)("div",{style:{position:"relative"}},e.children,(0,r.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},De=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/online-event","version":"1.0.0","title":"Online Event","category":"gatherpress","icon":"video-alt2","example":{},"description":"Utilized for virtual events, offering the capability to share a direct link to an event.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./online-event.js","render":"file:./render.php"}');(0,o.registerBlockType)(De,{edit:({isSelected:e})=>{const t=(0,l.useBlockProps)(),n=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta")._online_event_link));return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.InspectorControls,null,(0,r.createElement)(i.PanelBody,null,(0,r.createElement)(i.PanelRow,null,(0,r.createElement)(Ce,null)))),(0,r.createElement)("div",{...t},(0,r.createElement)(Ne,{isSelected:e},(0,r.createElement)(Le,{onlineEventLinkDefault:n}))))},save:()=>null})},3967:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,l(n)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,n,r,l)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,r,l]=e[u],s=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(s=!1,l<i&&(i=l));if(s){e.splice(u--,1);var a=r();void 0!==a&&(t=a)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,139:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[i,s,c]=n,a=0;if(i.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o)}for(t&&t(n);a<i.length;a++)l=i[a],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[139],(()=>o(3850)));r=o.O(r)})();