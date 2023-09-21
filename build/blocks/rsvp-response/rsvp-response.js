(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.domReady;var n=e.n(s);const a=window.wp.i18n,r=(e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}};function l(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const i=({item:e,activeItem:s=!1,count:n,onTitleClick:a,rsvpLimit:r})=>{const{title:i,value:o}=e,p=0===n&&"attending"!==o?"hidden":"active",c=s?"span":"a",m=l("post_id");return s&&((e,t=!1)=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+=t);const a=new CustomEvent(e,{detail:n});dispatchEvent(a)}})({setRsvpSeeAllLink:n>r?"active":"hidden"},m),(0,t.createElement)("div",{className:`gp-rsvp-response__navigation-item gp-rsvp-response__${p}`},(0,t.createElement)(c,{className:"gp-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${o}`,onClick:e=>a(e,o)},i),(0,t.createElement)("span",{className:"gp-rsvp-response__count"},"(",n,")"))},o=({items:e,activeValue:s,onTitleClick:n,rsvpLimit:a})=>{const o={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(l("responses")))o[e]=t.count;const[p,c]=(0,t.useState)(o);r({setRsvpCount:c},l("post_id"));const m=e.map(((e,r)=>{const l=e.value===s;return(0,t.createElement)(i,{key:r,item:e,count:p[e.value],activeItem:l,onTitleClick:n,rsvpLimit:a})}));return(0,t.createElement)("div",null,(0,t.createElement)("div",{className:"dashicons dashicons-groups"}),(0,t.createElement)("nav",{className:"gp-rsvp-response__navigation"},m))},p=({eventId:e,value:s,limit:n,responses:i=[],avatarOnly:o=!1})=>{const[p,c]=(0,t.useState)(i);r({setRsvpResponse:c},e);let m="";return"object"==typeof p&&void 0!==p[s]&&(i=[...p[s].responses],n&&(i=i.splice(0,n)),m=i.map(((e,s)=>{const{profile:n,name:a,photo:r,role:l}=e;let{guests:i}=e;return i=i?" +"+i+" guest(s)":"",(0,t.createElement)("div",{key:s,className:"gp-rsvp-response__item"},(0,t.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},(0,t.createElement)("a",{href:n},(0,t.createElement)("img",{alt:a,title:a,src:r}))),!1===o&&(0,t.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,t.createElement)("div",{className:"gp-rsvp-response__member-name"},(0,t.createElement)("a",{href:n},a)),(0,t.createElement)("div",{className:"gp-rsvp-response__member-role"},l),(0,t.createElement)("small",{className:"gp-rsvp-response__guests"},i)))}))),(0,t.createElement)(t.Fragment,null,"attending"===s&&0===m.length&&!1===o&&(0,t.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===l("has_event_past")?(0,a.__)("No one is attending this event yet.","gatherpress"):(0,a.__)("No one went to this event.","gatherpress")),m)},c=({items:e,activeValue:s,limit:n=!1})=>{const a=l("post_id"),r=l("responses"),i=e.map(((e,l)=>{const{value:i}=e,o=i===s?"active":"hidden";return(0,t.createElement)("div",{key:l,className:`gp-rsvp-response__items gp-rsvp-response__${o}`,id:`gp-rsvp-${i}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${i}-tab`},(0,t.createElement)(p,{eventId:a,value:i,limit:n,responses:r}))}));return(0,t.createElement)("div",{className:"gp-rsvp-response__content"},i)},m=()=>{let e="attending";const s=l("has_event_past"),n=l("current_user.status"),i=[{title:!1===s?(0,a.__)("Attending","gatherpress"):(0,a.__)("Went","gatherpress"),value:"attending"},{title:!1===s?(0,a.__)("Waiting List","gatherpress"):(0,a.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===s?(0,a.__)("Not Attending","gatherpress"):(0,a.__)("Didn't Go","gatherpress"),value:"not_attending"}];e=void 0!==n&&"attend"!==n&&""!==n?n:e;const[p,m]=(0,t.useState)(e),[v,_]=(0,t.useState)(8),[d,g]=(0,t.useState)("hidden");let u;return r({setRsvpStatus:m,setRsvpSeeAllLink:g},l("post_id")),u=!1===v?(0,a.__)("See fewer","gatherpress"):(0,a.__)("See all","gatherpress"),(0,t.createElement)("div",{className:"gp-rsvp-response"},(0,t.createElement)(o,{items:i,activeValue:p,onTitleClick:(e,t)=>{e.preventDefault(),m(t)},rsvpLimit:v}),(0,t.createElement)(c,{items:i,activeValue:p,limit:v}),(0,t.createElement)("div",{className:`gp-rsvp-response__see-all gp-rsvp-response__see-all--${d}`},(0,t.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),_(!1===v&&8)})(e)},u)))};n()((()=>{const e=document.querySelectorAll('[data-gp_block_name="rsvp-response"]');for(let s=0;s<e.length;s++)(0,t.createRoot)(e[s]).render((0,t.createElement)(m,null))}))})();