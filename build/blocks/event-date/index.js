(()=>{"use strict";var e,t={618:(e,t,n)=>{const r=window.wp.blocks,a=window.wp.element,o=window.moment;var s=n.n(o);const i=window.wp.blockEditor,l=window.wp.components,c=(e,t=!1)=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t);const a=new CustomEvent(e,{detail:r});dispatchEvent(a)}},m=window.wp.data,d=window.wp.apiFetch;var p=n.n(d);const u=window.wp.i18n;function f(){(0,m.dispatch)("core/editor").editPost({meta:{_non_existing_meta:!0}})}function v(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function E(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),r=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[r]=t}function _(){const e=s()(v("event_datetime.datetime_end"));return s().tz(z()).valueOf()>e.tz(z()).valueOf()}function g(){const e="gp_event_past",t=(0,m.dispatch)("core/notices");t.removeNotice(e),_()&&t.createNotice("warning",(0,u.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}const h="YYYY-MM-DDTHH:mm:ss",T="YYYY-MM-DD HH:mm:ss",w="MMMM D, YYYY h:mm a",z=(e=v("event_datetime.timezone"))=>s().tz.zone(e)?e:(0,u.__)("GMT","gatherpress"),b=(e="")=>{const t=/^(\+|-)(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e},S=s().tz(z()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(h),D=s().tz(S,z()).add(2,"hours").format(h),y=(e,t=null)=>{!function(e){const t=s().tz(v("event_datetime.datetime_end"),z()).valueOf(),n=s().tz(e,z()).valueOf();if(n>=t){const e=s().tz(n,z()).add(2,"hours").format(h);O(e)}}(e),E("event_datetime.datetime_start",e),"function"==typeof t&&t(e),f()},O=(e,t=null)=>{!function(e){const t=s().tz(v("event_datetime.datetime_start"),z()).valueOf(),n=s().tz(e,z()).valueOf();if(n<=t){const e=s().tz(n,z()).subtract(2,"hours").format(h);y(e)}}(e),E("event_datetime.datetime_end",e),null!==t&&t(e),f()};function k(){const e=(0,m.select)("core/editor").isSavingPost(),t=(0,m.select)("core/editor").isAutosavingPost();"gp_event"===(0,m.select)("core/editor").getCurrentPostType()&&e&&!t&&p()({path:"/gatherpress/v1/event/datetime/",method:"POST",data:{post_id:v("post_id"),datetime_start:s().tz(v("event_datetime.datetime_start"),z()).format(T),datetime_end:s().tz(v("event_datetime.datetime_end"),z()).format(T),timezone:v("event_datetime.timezone"),_wpnonce:v("nonce")}}).then((()=>{!function(){const e="gp_event_communcation",t=(0,m.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,m.select)("core/editor").getEditedPostAttribute("status")||_()||t.createNotice("success",(0,u.__)("Update members about this event via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{c({setOpen:!0})},label:(0,u.__)("Create Message","gatherpress")}]})}()}))}const x=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,a.createElement)("div",{style:{position:"relative"}},e.children,(0,a.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},C=window.wp.date,P=e=>{const{dateTimeStart:t}=e;return s().tz(t,z()).format(w)},M=e=>{const{dateTimeEnd:t}=e;return s().tz(t,z()).format(w)},Y=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,r=(0,C.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(l.DateTimePicker,{currentDate:t,onChange:e=>y(e,n),is12Hour:o})},j=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,r=(0,C.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(l.DateTimePicker,{currentDate:t,onChange:e=>O(e,n),is12Hour:o})},F=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,a.useEffect)((()=>{n(s().tz((()=>{let e=v("event_datetime.datetime_start");return e=""!==e?s().tz(e,z()).format(h):S,E("event_datetime.datetime_start",e),e})(),z()).format(h)),c({setDateTimeStart:t}),g()})),(0,a.createElement)(l.PanelRow,null,(0,a.createElement)(l.Flex,null,(0,a.createElement)(l.FlexItem,null,(0,u.__)("Start","gatherpress")),(0,a.createElement)(l.FlexItem,null,(0,a.createElement)(l.Dropdown,{position:"bottom left",renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(l.Button,{onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(P,{dateTimeStart:t})),renderContent:()=>(0,a.createElement)(Y,{dateTimeStart:t,setDateTimeStart:n})}))))},I=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,a.useEffect)((()=>{n(s().tz((()=>{let e=v("event_datetime.datetime_end");return e=""!==e?s().tz(e,z()).format(h):D,E("event_datetime.datetime_end",e),e})(),z()).format(h)),c({setDateTimeEnd:t}),g()})),(0,a.createElement)(l.PanelRow,null,(0,a.createElement)(l.Flex,null,(0,a.createElement)(l.FlexItem,null,(0,u.__)("End","gatherpress")),(0,a.createElement)(l.FlexItem,null,(0,a.createElement)(l.Dropdown,{position:"bottom left",renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(l.Button,{onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(M,{dateTimeEnd:t})),renderContent:()=>(0,a.createElement)(j,{dateTimeEnd:t,setDateTimeEnd:n})}))))},$=e=>{const{timezone:t,setTimezone:n}=e,r=v("timezone_choices");return(0,a.useEffect)((()=>{n(v("event_datetime.timezone"))}),[n]),(0,a.useEffect)((()=>{c({setTimezone:v("event_datetime.timezone")})})),(0,a.createElement)(l.PanelRow,null,(0,a.createElement)(l.SelectControl,{label:(0,u.__)("Time Zone","gatherpress"),value:b(t),onChange:e=>{e=((e="")=>{const t=/^UTC(\+|-)(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const r=e.replace(t,"$2").padStart(2,"0");let a=e.replace(t,"$3");return""===a&&(a=":00"),a=a.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+r+a}return e})(e),n(e),E("event_datetime.timezone",e),f()}},Object.keys(r).map((e=>(0,a.createElement)("optgroup",{key:e,label:e},Object.keys(r[e]).map((t=>(0,a.createElement)("option",{key:t,value:t},r[e][t]))))))))},G=()=>{const[e,t]=(0,a.useState)(),[n,r]=(0,a.useState)(),[o,s]=(0,a.useState)();return(0,m.subscribe)(k),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("section",null,(0,a.createElement)("h3",null,(0,u.__)("Date & time","gatherpress")),(0,a.createElement)(F,{dateTimeStart:e,setDateTimeStart:t}),(0,a.createElement)(I,{dateTimeEnd:n,setDateTimeEnd:r})),(0,a.createElement)("section",null,(0,a.createElement)($,{timezone:o,setTimezone:s})))},H=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"1.0.0","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Display and edit event dates.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,r.registerBlockType)(H,{edit:()=>{const e=(0,i.useBlockProps)(),[t,n]=(0,a.useState)(S),[r,o]=(0,a.useState)(D),[c,m]=(0,a.useState)(z());return((e,t=!1)=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{r(e.detail)}),!1)}})({setDateTimeEnd:o,setDateTimeStart:n,setTimezone:m}),(0,a.createElement)("div",e,(0,a.createElement)(x,null,(0,a.createElement)(l.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,a.createElement)(l.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,a.createElement)(l.Icon,{icon:"clock"})),(0,a.createElement)(l.FlexItem,null,((e,t,n)=>{const r="dddd, MMMM D, YYYY",a="h:mm A",o=r+" "+a,i=z(n);let l=r+" "+a+" z";return s().tz(e,i).format(r)===s().tz(t,i).format(r)&&(l=a+" z"),s().tz(e,i).format(o)+" to "+s().tz(t,i).format(l)+(e=>(e=z(e),(0,u.__)("GMT","gatherpress")!==e?"":((e="")=>e.replace(":",""))(v("event_datetime.timezone"))))(i)})(t,r,c)),(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(l.PanelBody,null,(0,a.createElement)(G,null))))))},save:()=>null})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var s=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[s,i,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var m=l(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[42],(()=>r(618)));a=r.O(a)})();