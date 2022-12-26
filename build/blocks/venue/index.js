(()=>{"use strict";var e,t={3203:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.data,s=window.wp.components,a=e=>{let{name:n,fullAddress:r,phoneNumber:l,website:a}=e;return(0,t.createElement)("div",{className:"gatherpress-venue"},(n||r)&&(0,t.createElement)(s.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,t.createElement)(s.FlexItem,{display:"flex",className:"gatherpress-venue__icon"},(0,t.createElement)(s.Icon,{icon:"location"})),(0,t.createElement)(s.FlexItem,null,n&&(0,t.createElement)("div",{className:"gp-venue_information__name has-medium-font-size"},(0,t.createElement)("strong",null,n)),r&&(0,t.createElement)("div",{className:"gatherpress-venue__full-address"},r))),(l||a)&&(0,t.createElement)(s.Flex,{justify:"normal",gap:"8"},l&&(0,t.createElement)(s.FlexItem,null,(0,t.createElement)(s.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(s.FlexItem,{display:"flex",className:"gatherpress-venue__icon"},(0,t.createElement)(s.Icon,{icon:"phone"})),(0,t.createElement)(s.FlexItem,null,(0,t.createElement)("div",{className:"gatherpress-venue__phone-number"},l)))),a&&(0,t.createElement)(s.FlexItem,null,(0,t.createElement)(s.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(s.FlexItem,{display:"flex",className:"gatherpress-venue__icon"},(0,t.createElement)(s.Icon,{icon:"admin-site-alt3"})),(0,t.createElement)(s.FlexItem,null,(0,t.createElement)("div",{className:"gatherpress-venue__website"},(0,t.createElement)("a",{href:a,target:"_blank",rel:"noreferrer noopener"},a)))))))},o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/venue","version":"0.2","title":"Venue","category":"gatherpress","icon":"location","example":{},"description":"The venue block.","attributes":{"blockId":{"type":"string"},"venueId":{"type":"integer","default":null}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,e.registerBlockType)(o,{edit:e=>{const{setAttributes:s}=e,o=(0,r.useBlockProps)(),[i,c]=(0,t.useState)("");return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{r(e.detail)}),!1)}}({setVenueId:c}),(0,t.useEffect)((()=>{s({venueId:null!=i?i:""})})),(0,t.createElement)("div",o,(0,t.createElement)((e=>{var r,s,o,i,c;let{id:m}=e;const u=(0,l.useSelect)((e=>e("core").getEntityRecord("postType","gp_venue",m)));let p=null!==(r=u?.meta._venue_information)&&void 0!==r?r:"{}";p=""!==p?p:"{}";const d=JSON.parse(p),v=null!==(s=d?.fullAddress)&&void 0!==s?s:"",f=null!==(o=d?.phoneNumber)&&void 0!==o?o:"",h=null!==(i=d?.website)&&void 0!==i?i:"",g=null!==(c=u?.title.rendered)&&void 0!==c?c:(0,n.__)("No venue selected.","gatherpress");return(0,t.createElement)(a,{name:g,fullAddress:v,phoneNumber:f,website:h})}),{id:i}))},save:()=>null})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,e=[],r.O=(t,n,l,s)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,l,s]=e[m],o=!0,i=0;i<n.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(o=!1,s<a&&(a=s));if(o){e.splice(m--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[n,l,s]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={654:0,857:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,s,[a,o,i]=n,c=0;if(a.some((t=>0!==e[t]))){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(i)var m=i(r)}for(t&&t(n);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[857],(()=>r(3203)));l=r.O(l)})();