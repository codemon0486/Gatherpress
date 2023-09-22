(()=>{"use strict";var e,t={6184:(e,t,s)=>{const n=window.wp.blocks,r=window.wp.element,a=window.wp.blockEditor,i=window.wp.i18n,l=(e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}};function o(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const p=({item:e,activeItem:t=!1,count:s,onTitleClick:n,defaultLimit:a})=>{const{title:i,value:l}=e,p=!(0===s&&"attending"!==l),c=t?"span":"a",m=o("post_id"),v=s>a;return(0,r.useEffect)((()=>{t&&((e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t);const r=new CustomEvent(e,{detail:n});dispatchEvent(r)}})({setRsvpSeeAllLink:v},m)})),p?(0,r.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,r.createElement)(c,{className:"gp-rsvp-response__anchor","data-item":l,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${l}`,onClick:e=>n(e,l)},i),(0,r.createElement)("span",{className:"gp-rsvp-response__count"},"(",s,")")):""},c=({items:e,activeValue:t,onTitleClick:n,defaultLimit:a})=>{const i={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(o("responses")))i[e]=t.count;const[c,m]=(0,r.useState)(i),[v,u]=(0,r.useState)(!1),[d,g]=(0,r.useState)(!0),_=d?"span":"a";l({setRsvpCount:m},o("post_id"));let h=0;const f=e.map(((e,s)=>{const i=e.value===t;return i&&(h=s),(0,r.createElement)(p,{key:s,item:e,count:c[e.value],activeItem:i,onTitleClick:n,defaultLimit:a})}));return(0,r.useEffect)((()=>{s.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||u(!1)})),s.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&u(!1)}))})),(0,r.useEffect)((()=>{0===c.not_attending&&0===c.waiting_list?g(!0):g(!1)}),[c]),(0,r.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,r.createElement)("div",null,(0,r.createElement)(_,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),u(!v)})(e)},e[h].title)," ",(0,r.createElement)("span",null,"(",c[t],")")),!d&&v&&(0,r.createElement)("nav",{className:"gp-rsvp-response__navigation"},f))},m=({items:e,activeValue:t,onTitleClick:s,rsvpLimit:n,setRsvpLimit:a,defaultLimit:p})=>{let m;m=!1===n?(0,i.__)("See fewer","gatherpress"):(0,i.__)("See all","gatherpress");const[v,u]=(0,r.useState)(o("responses")[t].count>p);return l({setRsvpSeeAllLink:u},o("post_id")),(0,r.createElement)("div",{className:"gp-rsvp-response__header"},(0,r.createElement)("div",{className:"dashicons dashicons-groups"}),(0,r.createElement)(c,{items:e,activeValue:t,onTitleClick:s,defaultLimit:p}),v&&(0,r.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,r.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),a(!1===n&&p)})(e)},m)))},v=({eventId:e,value:t,limit:s,responses:n=[]})=>{const[a,p]=(0,r.useState)(n);l({setRsvpResponse:p},e);let c="";return"object"==typeof a&&void 0!==a[t]&&(n=[...a[t].responses],s&&(n=n.splice(0,s)),c=n.map(((e,t)=>{const{profile:s,name:n,photo:a,role:i}=e;let{guests:l}=e;return l=l?" +"+l+" guest(s)":"",(0,r.createElement)("div",{key:t,className:"gp-rsvp-response__item"},(0,r.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},(0,r.createElement)("a",{href:s},(0,r.createElement)("img",{alt:n,title:n,src:a}))),(0,r.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,r.createElement)("div",{className:"gp-rsvp-response__member-name"},(0,r.createElement)("a",{href:s},n)),(0,r.createElement)("div",{className:"gp-rsvp-response__member-role"},i),(0,r.createElement)("small",{className:"gp-rsvp-response__guests"},l)))}))),(0,r.createElement)(r.Fragment,null,"attending"===t&&0===c.length&&(0,r.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===o("has_event_past")?(0,i.__)("No one is attending this event yet.","gatherpress"):(0,i.__)("No one went to this event.","gatherpress")),c)},u=({items:e,activeValue:t,limit:s=!1})=>{const n=o("post_id"),a=o("responses"),i=e.map(((e,i)=>{const{value:l}=e,o=l===t;return o?(0,r.createElement)("div",{key:i,className:`gp-rsvp-response__items gp-rsvp-response__${o}`,id:`gp-rsvp-${l}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${l}-tab`},(0,r.createElement)(v,{eventId:n,value:l,limit:s,responses:a})):""}));return(0,r.createElement)("div",{className:"gp-rsvp-response__content"},i)},d=()=>{const e=o("has_event_past"),t=[{title:!1===e?(0,i.__)("Attending","gatherpress"):(0,i.__)("Went","gatherpress"),value:"attending"},{title:!1===e?(0,i.__)("Waiting List","gatherpress"):(0,i.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===e?(0,i.__)("Not Attending","gatherpress"):(0,i.__)("Didn't Go","gatherpress"),value:"not_attending"}],[s,n]=(0,r.useState)("attending"),[a,p]=(0,r.useState)(8);return l({setRsvpStatus:n},o("post_id")),(0,r.createElement)("div",{className:"gp-rsvp-response"},(0,r.createElement)(m,{items:t,activeValue:s,onTitleClick:(e,t)=>{e.preventDefault(),n(t)},rsvpLimit:a,setRsvpLimit:p,defaultLimit:8}),(0,r.createElement)(u,{items:t,activeValue:s,limit:a}))},g=e=>{const{isSelected:t}=e,s=t?"none":"block";return(0,r.createElement)("div",{style:{position:"relative"}},e.children,(0,r.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:s}}))},_=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/rsvp-response","version":"1.0.0","title":"RSVP Response","category":"gatherpress","icon":"groups","example":{},"description":"The block with RSVP response.","attributes":{"blockId":{"type":"string"},"content":{"type":"string"},"color":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./rsvp-response.js","render":"file:./render.php"}');(0,n.registerBlockType)(_,{edit:()=>{const e=(0,a.useBlockProps)();return(0,r.createElement)("div",e,(0,r.createElement)(g,null,(0,r.createElement)(d,null)))},save:()=>null})}},s={};function n(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,s,r,a)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,r,a]=e[c],l=!0,o=0;o<s.length;o++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](s[o])))?s.splice(o--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var p=r();void 0!==p&&(t=p)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[s,r,a]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={304:0,952:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var r,a,[i,l,o]=s,p=0;if(i.some((t=>0!==e[t]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(o)var c=o(n)}for(t&&t(s);p<i.length;p++)a=i[p],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},s=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var r=n.O(void 0,[952],(()=>n(6184)));r=n.O(r)})();