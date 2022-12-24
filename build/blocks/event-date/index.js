(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,n=window.wp.element,r=window.moment;var a=e.n(r);const s=window.wp.blockEditor,o=window.wp.components,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"0.1.1","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"The block with event dates.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,t.registerBlockType)(i,{edit:()=>{const e=(0,s.useBlockProps)(),[t,r]=(0,n.useState)(GatherPress.event_datetime.datetime_start),[i,l]=(0,n.useState)(GatherPress.event_datetime.datetime_end);return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{r(e.detail)}),!1)}}({setDateTimeEnd:l,setDateTimeStart:r}),(0,n.createElement)("div",e,(0,n.createElement)(o.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,n.createElement)(o.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,n.createElement)(o.Icon,{icon:"clock"})),(0,n.createElement)(o.FlexItem,null,((e,t)=>{const n="dddd, MMMM D, YYYY",r="h:mm A",s=GatherPress.event_datetime.timezone,o=n+" "+r;let i=n+" "+r+" z";return a()(e).format(n)===a()(t).format(n)&&(i=r+" z"),a()(e).format(o)+" to "+a().tz(t,s).format(i)})(t,i))))},save:()=>null})})();