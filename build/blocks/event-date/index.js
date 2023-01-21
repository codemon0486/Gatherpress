(()=>{"use strict";var e,t={9136:(e,t,r)=>{const n=window.wp.blocks,s=window.wp.element,o=window.moment;var a=r.n(o);const i=window.wp.blockEditor,l=window.wp.components;window.wp.data,window.wp.apiFetch,window.wp.i18n;const d=(()=>{const e=GatherPress.event_datetime.timezone;return a().tz.zone(e)?e:"UTC"})(),c=(()=>{if("UTC"!==d)return"";const e=/(\+|-)([0-9]{1,2}):([0-9]{2})/.exec(GatherPress.event_datetime.timezone);return e&&4===e.length?String(e[1]+(parseInt(e[2],10)+parseInt(e[3],10)/60)):""})();a().tz(d).add(1,"day").set("hour",18).set("minute",0).set("second",0).format("YYYY-MM-DDTHH:mm:ss");const p=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"0.2","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"The block with event dates.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,n.registerBlockType)(p,{edit:()=>{const e=(0,i.useBlockProps)(),[t,r]=(0,s.useState)(GatherPress.event_datetime.datetime_start),[n,o]=(0,s.useState)(GatherPress.event_datetime.datetime_end);return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[r,n]of Object.entries(e)){let e=r;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}}({setDateTimeEnd:o,setDateTimeStart:r}),(0,s.createElement)("div",e,(0,s.createElement)(l.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,s.createElement)(l.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,s.createElement)(l.Icon,{icon:"clock"})),(0,s.createElement)(l.FlexItem,null,((e,t)=>{const r="dddd, MMMM D, YYYY",n="h:mm A",s=r+" "+n;let o=r+" "+n+" z";return a().tz(e,d).format(r)===a().tz(t,d).format(r)&&(o=n+" z"),a().tz(e,d).format(s)+" to "+a().tz(t,d).format(o)+c})(t,n))))},save:()=>null})}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,s,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,s,o]=e[c],i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,s,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var s,o,[a,i,l]=r,d=0;if(a.some((t=>0!==e[t]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var c=l(n)}for(t&&t(r);d<a.length;d++)o=a[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=n.O(void 0,[42],(()=>n(9136)));s=n.O(s)})();