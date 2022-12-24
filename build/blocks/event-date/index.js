(()=>{"use strict";var e,t={6:(e,t,r)=>{const n=window.wp.blocks,a=window.wp.element,o=window.moment;var s=r.n(o);const i=window.wp.blockEditor,l=window.wp.components,c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"0.1.1","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"The block with event dates.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,n.registerBlockType)(c,{edit:()=>{const e=(0,i.useBlockProps)(),[t,r]=(0,a.useState)(GatherPress.event_datetime.datetime_start),[n,o]=(0,a.useState)(GatherPress.event_datetime.datetime_end);return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[r,n]of Object.entries(e)){let e=r;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}}({setDateTimeEnd:o,setDateTimeStart:r}),(0,a.createElement)("div",e,(0,a.createElement)(l.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,a.createElement)(l.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,a.createElement)(l.Icon,{icon:"clock"})),(0,a.createElement)(l.FlexItem,null,((e,t)=>{const r="dddd, MMMM D, YYYY",n="h:mm A",a=GatherPress.event_datetime.timezone,o=r+" "+n;let i=r+" "+n+" z";return s()(e).format(r)===s()(t).format(r)&&(i=n+" z"),s()(e).format(o)+" to "+s().tz(t,a).format(i)})(t,n))))},save:()=>null})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var s=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[s,i,l]=r,c=0;if(s.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var d=l(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[42],(()=>n(6)));a=n.O(a)})();