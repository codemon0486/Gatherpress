(()=>{"use strict";var e,t={203:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.data,a=window.wp.components,o=e=>{let{name:n,fullAddress:l,phoneNumber:r,website:o}=e;return(0,t.createElement)("div",{className:"gp-venue-information"},(n||l)&&(0,t.createElement)(a.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,t.createElement)(a.FlexItem,{display:"flex",className:"gp-venue-information__icon"},(0,t.createElement)(a.Icon,{icon:"location"})),(0,t.createElement)(a.FlexItem,null,n&&(0,t.createElement)("div",{className:"gp-venue_information__name has-medium-font-size"},(0,t.createElement)("strong",null,n)),l&&(0,t.createElement)("div",{className:"gp-venue-information__full-address"},l))),(r||o)&&(0,t.createElement)(a.Flex,{justify:"normal",gap:"8"},r&&(0,t.createElement)(a.FlexItem,null,(0,t.createElement)(a.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(a.FlexItem,{display:"flex",className:"gp-venue-information__icon"},(0,t.createElement)(a.Icon,{icon:"phone"})),(0,t.createElement)(a.FlexItem,null,(0,t.createElement)("div",{className:"gp-venue-information__phone-number"},r)))),o&&(0,t.createElement)(a.FlexItem,null,(0,t.createElement)(a.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(a.FlexItem,{display:"flex",className:"gp-venue-information__icon"},(0,t.createElement)(a.Icon,{icon:"admin-site-alt3"})),(0,t.createElement)(a.FlexItem,null,(0,t.createElement)("div",{className:"gp-venue-information__website"},(0,t.createElement)("a",{href:o,target:"_blank",rel:"noreferrer noopener"},o)))))))},i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/venue","version":"0.1.1","title":"Venue","category":"gatherpress","icon":"location","example":{},"description":"The venue block.","attributes":{"blockId":{"type":"string"},"venueId":{"type":"integer","default":null}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,e.registerBlockType)(i,{edit:e=>{const{setAttributes:a}=e,i=(0,l.useBlockProps)(),[s,c]=(0,t.useState)("");return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,l]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{l(e.detail)}),!1)}}({setVenueId:c}),(0,t.useEffect)((()=>{a({venueId:null!=s?s:""})})),(0,t.createElement)("div",i,(0,t.createElement)((e=>{var l,a,i,s,c;let{id:m}=e;const u=(0,r.useSelect)((e=>e("core").getEntityRecord("postType","gp_venue",m)));let p=null!==(l=u?.meta._venue_information)&&void 0!==l?l:"{}";p=""!==p?p:"{}";const d=JSON.parse(p),v=null!==(a=d?.fullAddress)&&void 0!==a?a:"",f=null!==(i=d?.phoneNumber)&&void 0!==i?i:"",g=null!==(s=d?.website)&&void 0!==s?s:"",h=null!==(c=u?.title.rendered)&&void 0!==c?c:(0,n.__)("No venue selected.","gatherpress");return(0,t.createElement)(o,{name:h,fullAddress:v,phoneNumber:f,website:g})}),{id:s}))},save:()=>null})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,n,r,a)=>{if(!n){var o=1/0;for(m=0;m<e.length;m++){for(var[n,r,a]=e[m],i=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](n[s])))?n.splice(s--,1):(i=!1,a<o&&(o=a));if(i){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={654:0,857:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[o,i,s]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(s)var m=s(l)}for(t&&t(n);c<o.length;c++)a=o[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[857],(()=>l(203)));r=l.O(r)})();