(()=>{"use strict";var e,t={3484:(e,t,n)=>{const r=window.wp.blocks,a=window.React,o=window.moment;var i=n.n(o);const s=window.wp.i18n,l=window.wp.blockEditor,c=window.wp.components,m=window.wp.element,d=(e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const a=new CustomEvent(e,{detail:r});dispatchEvent(a)}},p=window.wp.data,u=window.wp.apiFetch;var f=n.n(u);function v(){(0,p.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function g(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function _(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),r=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[r]=t}function h(){const e=i().tz(g("event_datetime.datetime_end"),D());return i().tz(D()).valueOf()>e.valueOf()}function E(){const e="gp_event_past",t=(0,p.dispatch)("core/notices");t.removeNotice(e),h()&&t.createNotice("warning",(0,s.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}const T="YYYY-MM-DDTHH:mm:ss",w="YYYY-MM-DD HH:mm:ss",z=i().tz(D()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(T),b=i().tz(z,D()).add(2,"hours").format(T);function S(){return x(g("settings.date_format"))+" "+x(g("settings.time_format"))}function D(e=g("event_datetime.timezone")){return i().tz.zone(e)?e:(0,s.__)("GMT","gatherpress")}function y(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function O(e,t=null){!function(e){const t=i().tz(g("event_datetime.datetime_end"),D()).valueOf(),n=i().tz(e,D()).valueOf();n>=t&&k(i().tz(n,D()).add(2,"hours").format(T))}(e),_("event_datetime.datetime_start",e),"function"==typeof t&&t(e),v()}function k(e,t=null){!function(e){const t=i().tz(g("event_datetime.datetime_start"),D()).valueOf(),n=i().tz(e,D()).valueOf();n<=t&&O(i().tz(n,D()).subtract(2,"hours").format(T))}(e),_("event_datetime.datetime_end",e),null!==t&&t(e),v()}function P(){const e=(0,p.select)("core/editor").isSavingPost(),t=(0,p.select)("core/editor").isAutosavingPost();"gp_event"===(0,p.select)("core/editor").getCurrentPostType()&&e&&!t&&f()({path:"/gatherpress/v1/event/datetime/",method:"POST",data:{post_id:g("post_id"),datetime_start:i().tz(g("event_datetime.datetime_start"),D()).format(w),datetime_end:i().tz(g("event_datetime.datetime_end"),D()).format(w),timezone:g("event_datetime.timezone"),_wpnonce:g("nonce")}}).then((()=>{!function(){const e="gp_event_communcation",t=(0,p.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,p.select)("core/editor").getEditedPostAttribute("status")||h()||t.createNotice("success",(0,s.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{d({setOpen:!0})},label:(0,s.__)("Compose Message","gatherpress")}]})}()}))}function x(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map((e=>e in t?t[e]:e)).join("")}const C=e=>{const{isSelected:t}=e,n=t?"none":"block";return(0,a.createElement)("div",{style:{position:"relative"}},e.children,(0,a.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},M=window.wp.date,Y=e=>{const{dateTimeStart:t}=e;return i().tz(t,D()).format(S())},j=e=>{const{dateTimeEnd:t}=e;return i().tz(t,D()).format(S())},F=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,r=(0,M.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>O(e,n),is12Hour:o})},$=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,r=(0,M.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>k(e,n),is12Hour:o})},H=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,m.useEffect)((()=>{n(i().tz(function(){let e=g("event_datetime.datetime_start");return e=""!==e?i().tz(e,D()).format(T):z,_("event_datetime.datetime_start",e),e}(),D()).format(T)),d({setDateTimeStart:t}),E()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,{direction:"column",gap:"0"},(0,a.createElement)(c.FlexItem,null,(0,a.createElement)("label",{htmlFor:"gp-datetime-start"},(0,s.__)("Start","gatherpress"))),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(c.Button,{id:"gp-datetime-start",onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(Y,{dateTimeStart:t})),renderContent:()=>(0,a.createElement)(F,{dateTimeStart:t,setDateTimeStart:n})}))))},I=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,m.useEffect)((()=>{n(i().tz(function(){let e=g("event_datetime.datetime_end");return e=""!==e?i().tz(e,D()).format(T):b,_("event_datetime.datetime_end",e),e}(),D()).format(T)),d({setDateTimeEnd:t}),E()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,{direction:"column",gap:"0"},(0,a.createElement)(c.FlexItem,null,(0,a.createElement)("label",{htmlFor:"gp-datetime-end"},(0,s.__)("End","gatherpress"))),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,a.createElement)(c.Button,{id:"gp-datetime-end",onClick:n,"aria-expanded":e,isLink:!0},(0,a.createElement)(j,{dateTimeEnd:t})),renderContent:()=>(0,a.createElement)($,{dateTimeEnd:t,setDateTimeEnd:n})}))))},G=e=>{const{timezone:t,setTimezone:n}=e,r=g("timezone_choices");return(0,m.useEffect)((()=>{n(g("event_datetime.timezone"))}),[n]),(0,m.useEffect)((()=>{d({setTimezone:g("event_datetime.timezone")})})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.SelectControl,{label:(0,s.__)("Time Zone","gatherpress"),value:y(t),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const r=e.replace(t,"$2").padStart(2,"0");let a=e.replace(t,"$3");return""===a&&(a=":00"),a=a.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+r+a}return e}(e),n(e),_("event_datetime.timezone",e),v()}},Object.keys(r).map((e=>(0,a.createElement)("optgroup",{key:e,label:e},Object.keys(r[e]).map((t=>(0,a.createElement)("option",{key:t,value:t},r[e][t]))))))))},N=()=>{const[e,t]=(0,m.useState)(),[n,r]=(0,m.useState)(),[o,i]=(0,m.useState)();return(0,p.subscribe)(P),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("h3",null,(0,s.__)("Date & time","gatherpress")),(0,a.createElement)(H,{dateTimeStart:e,setDateTimeStart:t}),(0,a.createElement)(I,{dateTimeEnd:n,setDateTimeEnd:r}),(0,a.createElement)(G,{timezone:o,setTimezone:i}))},B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"1.0.0","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Displays the date and time for an event.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,r.registerBlockType)(B,{edit:()=>{const e=(0,l.useBlockProps)(),[t,n]=(0,m.useState)(z),[r,o]=(0,m.useState)(b),[d,p]=(0,m.useState)(D());return((e,t="")=>{for(const[n,r]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{r(e.detail)}),!1)}})({setDateTimeEnd:o,setDateTimeStart:n,setTimezone:p}),(0,a.createElement)("div",{...e},(0,a.createElement)(C,null,(0,a.createElement)(c.Flex,{justify:"normal",align:"center",gap:"4"},(0,a.createElement)(c.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,a.createElement)(c.Icon,{icon:"clock"})),(0,a.createElement)(c.FlexItem,null,((e,t,n)=>{const r=x(g("settings.date_format")),a=x(g("settings.time_format")),o=g("settings.show_timezone")?"z":"",l=r+" "+a,c=D(n);let m=r+" "+a+" "+o;return i().tz(e,c).format(r)===i().tz(t,c).format(r)&&(m=a+" "+o),(0,s.sprintf)(/* translators: %1$s: datetime start, %2$s: datetime end, %3$s timezone. */
(0,s.__)("%1$s to %2$s %3$s"),i().tz(e,c).format(l),i().tz(t,c).format(m),(d=D(d=c),(0,s.__)("GMT","gatherpress")!==d?"":function(e=""){return e.replace(":","")}(g("event_datetime.timezone"))));var d})(t,r,d)),(0,a.createElement)(l.InspectorControls,null,(0,a.createElement)(c.PanelBody,null,(0,a.createElement)(N,null))))))},save:()=>null})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],s=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var m=l(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[42],(()=>r(3484)));a=r.O(a)})();