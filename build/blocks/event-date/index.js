(()=>{"use strict";var e,t={3539:(e,t,n)=>{const r=window.wp.blocks,a=window.wp.element,o=window.moment;var i=n.n(o);const l=window.wp.i18n,s=window.wp.blockEditor,c=window.wp.components,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t);const a=new CustomEvent(e,{detail:r});dispatchEvent(a)}},d=window.wp.date,u=window.wp.data;function p(){(0,u.dispatch)("core/editor").editPost({meta:{_non_existing_meta:!0}})}function f(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function v(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),r=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[r]=t}function E(){const e="gp_event_past",t=(0,u.dispatch)("core/notices");t.removeNotice(e),function(){const e=i()(f("event_datetime.datetime_end"));return i().tz(_()).valueOf()>e.tz(_()).valueOf()}()&&t.createNotice("warning",(0,l.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}window.wp.apiFetch;const g="YYYY-MM-DDTHH:mm:ss",h="MMMM D, YYYY h:mm a",_=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f("event_datetime.timezone");return i().tz.zone(e)?e:(0,l.__)("GMT","gatherpress")},T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t=/^(\+|-)(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e},w=i().tz(_()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(g),z=i().tz(w,_()).add(2,"hours").format(g),b=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;D(e),v("event_datetime.datetime_start",e),"function"==typeof t&&t(e),p()},S=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;y(e),v("event_datetime.datetime_end",e),null!==t&&t(e),p()};function D(e){const t=i().tz(f("event_datetime.datetime_end"),_()).valueOf(),n=i().tz(e,_()).valueOf();if(n>=t){const e=i().tz(n,_()).add(2,"hours").format(g);S(e)}}function y(e){const t=i().tz(f("event_datetime.datetime_start"),_()).valueOf(),n=i().tz(e,_()).valueOf();if(n<=t){const e=i().tz(n,_()).subtract(2,"hours").format(g);b(e)}}const O=e=>{const{dateTimeStart:t}=e;return i().tz(t,_()).format(h)},k=e=>{const{dateTimeEnd:t}=e;return i().tz(t,_()).format(h)},x=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e,r=(0,d.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>b(e,n),is12Hour:o})},C=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e,r=(0,d.getSettings)(),o=/a(?!\\)/i.test(r.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,a.createElement)(c.DateTimePicker,{currentDate:t,onChange:e=>S(e,n),is12Hour:o})},j=e=>{const{dateTimeStart:t,setDateTimeStart:n}=e;return(0,a.useEffect)((()=>{n(i().tz((()=>{let e=f("event_datetime.datetime_start");return e=""!==e?i().tz(e,_()).format(g):w,v("event_datetime.datetime_start",e),e})(),_()).format(g)),m({setDateTimeStart:t}),E()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,null,(0,a.createElement)(c.FlexItem,null,(0,l.__)("Start","gatherpress")),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{position:"bottom left",renderToggle:e=>{let{isOpen:n,onToggle:r}=e;return(0,a.createElement)(c.Button,{onClick:r,"aria-expanded":n,isLink:!0},(0,a.createElement)(O,{dateTimeStart:t}))},renderContent:()=>(0,a.createElement)(x,{dateTimeStart:t,setDateTimeStart:n})}))))},P=e=>{const{dateTimeEnd:t,setDateTimeEnd:n}=e;return(0,a.useEffect)((()=>{n(i().tz((()=>{let e=f("event_datetime.datetime_end");return e=""!==e?i().tz(e,_()).format(g):z,v("event_datetime.datetime_end",e),e})(),_()).format(g)),m({setDateTimeEnd:t}),E()})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.Flex,null,(0,a.createElement)(c.FlexItem,null,(0,l.__)("End","gatherpress")),(0,a.createElement)(c.FlexItem,null,(0,a.createElement)(c.Dropdown,{position:"bottom left",renderToggle:e=>{let{isOpen:n,onToggle:r}=e;return(0,a.createElement)(c.Button,{onClick:r,"aria-expanded":n,isLink:!0},(0,a.createElement)(k,{dateTimeEnd:t}))},renderContent:()=>(0,a.createElement)(C,{dateTimeEnd:t,setDateTimeEnd:n})}))))},M=e=>{const{timezone:t,setTimezone:n}=e,r=f("timezone_choices");return(0,a.useEffect)((()=>{n(f("event_datetime.timezone"))}),[]),(0,a.useEffect)((()=>{m({setTimezone:f("event_datetime.timezone")})})),(0,a.createElement)(c.PanelRow,null,(0,a.createElement)(c.SelectControl,{label:(0,l.__)("Time Zone"),value:T(t),onChange:e=>{e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t=/^UTC(\+|-)(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const r=e.replace(t,"$2").padStart(2,"0");let a=e.replace(t,"$3");return""===a&&(a=":00"),a=a.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+r+a}return e}(e),n(e),v("event_datetime.timezone",e),p()}},Object.keys(r).map((e=>(0,a.createElement)("optgroup",{key:e,label:e},Object.keys(r[e]).map((t=>(0,a.createElement)("option",{key:t,value:t},r[e][t]))))))))},Y=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-date","version":"0.2","title":"Event Date","category":"gatherpress","icon":"clock","example":{},"description":"Display and edit event dates.","attributes":{"eventEnd":{"type":"string"},"eventStart":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');(0,r.registerBlockType)(Y,{edit:e=>{let{attributes:t,setAttributes:n}=e;const r=(0,s.useBlockProps)(),{eventEnd:o,eventStart:m}=t,[d,u]=(0,a.useState)(w),[p,v]=(0,a.useState)(z),[E,g]=(0,a.useState)(_());return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[n,r]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{r(e.detail)}),!1)}}({setDateTimeEnd:v,setDateTimeStart:u,setTimezone:g}),(0,a.useEffect)((()=>{n({eventEnd:null!=p?p:"",eventStart:null!=d?d:""})})),(0,a.createElement)("div",r,(0,a.createElement)(c.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,a.createElement)(c.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,a.createElement)(c.Icon,{icon:"clock"})),(0,a.createElement)(c.FlexItem,null,((e,t,n)=>{const r="dddd, MMMM D, YYYY",a="h:mm A",o=r+" "+a,s=_(n);let c=r+" "+a+" z";return i().tz(e,s).format(r)===i().tz(t,s).format(r)&&(c=a+" z"),i().tz(e,s).format(o)+" to "+i().tz(t,s).format(c)+(e=>(e=_(e),(0,l.__)("GMT","gatherpress")!==e?"":function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(":","")}(f("event_datetime.timezone"))))(s)})(d,p,E)),JSON.stringify(t),(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(c.PanelBody,null,(0,a.createElement)("h3",null,(0,l.__)("Date & time","gatherpress")),(0,a.createElement)(j,{dateTimeStart:d,setDateTimeStart:u}),(0,a.createElement)(P,{dateTimeEnd:p,setDateTimeEnd:v}),(0,a.createElement)(M,{timezone:E,setTimezone:g})))))},save:()=>null})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],l=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={591:0,42:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(s)var m=s(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[42],(()=>r(3539)));a=r.O(a)})();