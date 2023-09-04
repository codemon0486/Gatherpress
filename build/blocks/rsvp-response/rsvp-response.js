(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,s=window.wp.domReady;var a=e.n(s);const n=window.wp.i18n,r=({item:e,additionalClasses:s,count:a,onTitleClick:n})=>{const{title:r,value:l}=e,o=0===a&&"attending"!==l?"hidden":"active";return(0,t.createElement)("div",{className:`gp-rsvp-response__navigation-item gp-rsvp-response__${o} ${s}`},(0,t.createElement)("a",{className:"gp-rsvp-response__anchor","data-item":l,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${l}`,onClick:e=>n(e,l)},r),(0,t.createElement)("span",{className:"gp-rsvp-response__count"},"(",a,")"))},l=(e,t=!1)=>{for(const[s,a]of Object.entries(e)){let e=s;t&&(e+=t),addEventListener(e,(e=>{a(e.detail)}),!1)}};function o(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const i=({items:e,activeValue:s,onTitleClick:a})=>{const n={all:0,attending:0,not_attending:0,waiting_list:0};for(const[e,t]of Object.entries(o("responses")))n[e]=t.count;const[i,p]=(0,t.useState)(n);l({setRsvpCount:p},o("post_id"));const c=e.map(((e,n)=>{const l=e.value===s?"gp-rsvp-response__current":"";return(0,t.createElement)(r,{key:n,item:e,count:i[e.value],additionalClasses:l,onTitleClick:a})}));return(0,t.createElement)("nav",{className:"gp-rsvp-response__navigation"},c)},p=({eventId:e,value:s,limit:a,responses:r=[],avatarOnly:i=!1})=>{const[p,c]=(0,t.useState)(r);l({setRsvpResponse:c},e);let m="";return"object"==typeof p&&void 0!==p[s]&&(r=[...p[s].responses],a&&(r=r.splice(0,a)),m=r.map(((e,s)=>{const{profile:a,name:n,photo:r,role:l}=e;let{guests:o}=e;return o=o?" +"+o+" guest(s)":"",(0,t.createElement)("div",{key:s,className:"gp-rsvp-response__item"},(0,t.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},(0,t.createElement)("a",{href:a},(0,t.createElement)("img",{alt:n,title:n,src:r}))),!1===i&&(0,t.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,t.createElement)("div",{className:"gp-rsvp-response__member-name"},(0,t.createElement)("a",{href:a},n)),(0,t.createElement)("div",{className:"gp-rsvp-response__member-role"},l),(0,t.createElement)("small",{className:"gp-rsvp-response__guests"},o)))}))),(0,t.createElement)(t.Fragment,null,"attending"===s&&0===m.length&&!1===i&&(0,t.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===o("has_event_past")?(0,n.__)("No one is attending this event yet.","gatherpress"):(0,n.__)("No one went to this event.","gatherpress")),m)},c=({items:e,activeValue:s,limit:a=!1})=>{const n=o("post_id"),r=o("responses"),l=e.map(((e,l)=>{const{value:o}=e,i=o===s?"active":"hidden";return(0,t.createElement)("div",{key:l,className:`gp-rsvp-response__items gp-rsvp-response__${i}`,id:`gp-rsvp-${o}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${o}-tab`},(0,t.createElement)(p,{eventId:n,value:o,limit:a,responses:r}))}));return(0,t.createElement)("div",{className:"gp-rsvp-response__content"},l)},m=()=>{let e="attending";const s=o("has_event_past"),a=o("current_user.status"),r=[{title:!1===s?(0,n.__)("Attending","gatherpress"):(0,n.__)("Went","gatherpress"),value:"attending"},{title:!1===s?(0,n.__)("Waiting List","gatherpress"):(0,n.__)("Wait Listed","gatherpress"),value:"waiting_list"},{title:!1===s?(0,n.__)("Not Attending","gatherpress"):(0,n.__)("Didn't Go","gatherpress"),value:"not_attending"}];e=void 0!==a&&"attend"!==a&&""!==a?a:e;const[p,m]=(0,t.useState)(e),[v,_]=(0,t.useState)(10);let d;return l({setRsvpStatus:m},o("post_id")),d=!1===v?(0,n.__)("See less","gatherpress"):(0,n.__)("See more","gatherpress"),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"gp-rsvp-response"},(0,t.createElement)(i,{items:r,activeValue:p,onTitleClick:(e,t)=>{e.preventDefault(),m(t)}}),(0,t.createElement)(c,{items:r,activeValue:p,limit:v})),(0,t.createElement)("div",{className:"has-text-align-right"},(0,t.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),_(!1===v&&10)})(e)},d)))};a()((()=>{const e=document.querySelectorAll('[data-gp_block_name="rsvp-response"]');for(let s=0;s<e.length;s++)(0,t.createRoot)(e[s]).render((0,t.createElement)(m,null))}))})();