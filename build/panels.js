(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,n=window.wp.i18n,a=window.wp.data,r=window.wp.components,s=window.wp.plugins,o=window.wp.editPost,i=window.moment;var l=e.n(i);const c=window.wp.apiFetch;var m=e.n(c);function u(){(0,a.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function d(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function p(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),a=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[a]=t}const g="YYYY-MM-DDTHH:mm:ss",v="YYYY-MM-DD HH:mm:ss",_=l().tz(f()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(g),E=l().tz(_,f()).add(2,"hours").format(g);function h(){return P(d("settings.dateFormat"))+" "+P(d("settings.timeFormat"))}function f(e=d("eventDetails.dateTime.timezone")){return l().tz.zone(e)?e:(0,n.__)("GMT","gatherpress")}function S(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function T(e,t=null){!function(e){const t=l().tz(d("eventDetails.dateTime.datetime_end"),f()).valueOf(),n=l().tz(e,f()).valueOf();n>=t&&b(l().tz(n,f()).add(2,"hours").format(g))}(e),p("eventDetails.dateTime.datetime_start",e),"function"==typeof t&&t(e),u()}function b(e,t=null){!function(e){const t=l().tz(d("eventDetails.dateTime.datetime_start"),f()).valueOf(),n=l().tz(e,f()).valueOf();n<=t&&T(l().tz(n,f()).subtract(2,"hours").format(g))}(e),p("eventDetails.dateTime.datetime_end",e),null!==t&&t(e),u()}function D(){const e=(0,a.select)("core/editor").isSavingPost(),t=(0,a.select)("core/editor").isAutosavingPost();C()&&e&&!t&&m()({path:d("urls.eventRestApi")+"/datetime",method:"POST",data:{post_id:d("eventDetails.postId"),datetime_start:l().tz(d("eventDetails.dateTime.datetime_start"),f()).format(v),datetime_end:l().tz(d("eventDetails.dateTime.datetime_end"),f()).format(v),timezone:d("eventDetails.dateTime.timezone"),_wpnonce:d("misc.nonce")}}).then((()=>{!function(){const e="gp_event_communcation",t=(0,a.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,a.select)("core/editor").getEditedPostAttribute("status")||y()||t.createNotice("success",(0,n.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{w({setOpen:!0})},label:(0,n.__)("Compose Message","gatherpress")}]})}()}))}function P(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map((e=>e in t?t[e]:e)).join("")}const w=(e,t="")=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:a});dispatchEvent(r)}},z=(e,t="")=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{a(e.detail)}),!1)}};function C(){return"gp_event"===(0,a.select)("core/editor").getCurrentPostType()}function y(){const e=l().tz(d("eventDetails.dateTime.datetime_end"),f());return l().tz(f()).valueOf()>e.valueOf()}function O(){const e="gp_event_past",t=(0,a.dispatch)("core/notices");t.removeNotice(e),y()&&t.createNotice("warning",(0,n.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}const k=window.wp.element,A=()=>{const{editPost:e,unlockPostSaving:s}=(0,a.useDispatch)("core/editor"),o=(0,a.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").enable_anonymous_rsvp),[]);o&&(i=d("settings.enableAnonymousRsvp"));const[l,c]=(0,k.useState)(i);return(0,t.createElement)(r.CheckboxControl,{label:(0,n.__)("Enable Anonymous RSVP","gatherpress"),checked:l,onChange:t=>{(t=>{const n={enable_anonymous_rsvp:Number(t)};c(t),e({meta:n}),s()})(t)}})},N=()=>(0,t.createElement)("section",null,(0,t.createElement)(A,null)),x=window.wp.date,M=e=>{const{dateTimeStart:t}=e;return l().tz(t,f()).format(h())},Y=e=>{const{dateTimeEnd:t}=e;return l().tz(t,f()).format(h())},F=e=>{const{dateTimeStart:n,setDateTimeStart:a}=e,s=(0,x.getSettings)(),o=/a(?!\\)/i.test(s.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>T(e,a),is12Hour:o})},j=e=>{const{dateTimeEnd:n,setDateTimeEnd:a}=e,s=(0,x.getSettings)(),o=/a(?!\\)/i.test(s.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>b(e,a),is12Hour:o})},R=e=>{const{dateTimeStart:a,setDateTimeStart:s}=e;return(0,k.useEffect)((()=>{s(l().tz(function(){let e=d("eventDetails.dateTime.datetime_start");return e=""!==e?l().tz(e,f()).format(g):_,p("eventDetails.dateTime.datetime_start",e),e}(),f()).format(g)),w({setDateTimeStart:a}),O()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gp-datetime-start"},(0,n.__)("Start","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gp-datetime-start",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(M,{dateTimeStart:a})),renderContent:()=>(0,t.createElement)(F,{dateTimeStart:a,setDateTimeStart:s})}))))},H=e=>{const{dateTimeEnd:a,setDateTimeEnd:s}=e;return(0,k.useEffect)((()=>{s(l().tz(function(){let e=d("eventDetails.dateTime.datetime_end");return e=""!==e?l().tz(e,f()).format(g):E,p("eventDetails.dateTime.datetime_end",e),e}(),f()).format(g)),w({setDateTimeEnd:a}),O()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gp-datetime-end"},(0,n.__)("End","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gp-datetime-end",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(Y,{dateTimeEnd:a})),renderContent:()=>(0,t.createElement)(j,{dateTimeEnd:a,setDateTimeEnd:s})}))))},I=e=>{const{timezone:a,setTimezone:s}=e,o=d("misc.timezoneChoices");return(0,k.useEffect)((()=>{s(d("eventDetails.dateTime.timezone"))}),[s]),(0,k.useEffect)((()=>{w({setTimezone:d("eventDetails.dateTime.timezone")})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Time Zone","gatherpress"),value:S(a),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const a=e.replace(t,"$2").padStart(2,"0");let r=e.replace(t,"$3");return""===r&&(r=":00"),r=r.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+a+r}return e}(e),s(e),p("eventDetails.dateTime.timezone",e),u()}},Object.keys(o).map((e=>(0,t.createElement)("optgroup",{key:e,label:e},Object.keys(o[e]).map((n=>(0,t.createElement)("option",{key:n,value:n},o[e][n]))))))))},L=()=>{const[e,r]=(0,k.useState)(),[s,o]=(0,k.useState)(),[i,l]=(0,k.useState)();return(0,a.subscribe)(D),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,(0,n.__)("Date & time","gatherpress")),(0,t.createElement)(R,{dateTimeStart:e,setDateTimeStart:r}),(0,t.createElement)(H,{dateTimeEnd:s,setDateTimeEnd:o}),(0,t.createElement)(I,{timezone:i,setTimezone:l}))},$=()=>(0,t.createElement)("section",null,(0,t.createElement)(L,null)),G=()=>"publish"===(0,a.select)("core/editor").getEditedPostAttribute("status")&&!y()&&(0,t.createElement)("section",null,(0,t.createElement)("h3",{style:{marginBottom:"0.5rem"}},(0,n.__)("Send an event update","gatherpress")),(0,t.createElement)(r.Button,{variant:"secondary",onClick:()=>w({setOpen:!0})},(0,n.__)("Compose Message","gatherpress"))),W=()=>{const{editPost:e,unlockPostSaving:s}=(0,a.useDispatch)("core/editor"),o=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta")._online_event_link)),[i,l]=(0,k.useState)(o);return z({setOnlineEventLink:l},d("eventDetails.postId")),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Online event link","gatherpress"),value:i,placeholder:(0,n.__)("Add link to online event","gatherpress"),onChange:t=>{(t=>{e({meta:{_online_event_link:t}}),l(t),w({setOnlineEventLink:t},d("eventDetails.postId")),s()})(t)}})},B=()=>(0,t.createElement)("section",null,(0,t.createElement)(W,null)),V=()=>{const[e,s]=(0,k.useState)(""),[o,i]=(0,k.useState)(""),[l,c]=(0,k.useState)(""),[m,u]=(0,k.useState)(""),[d,p]=(0,k.useState)(!1),[g,v]=(0,k.useState)(""),_=(0,a.useDispatch)("core/editor").editPost,{unlockPostSaving:E}=(0,a.useDispatch)("core/editor"),h=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("_gp_venue"))),f=(0,a.useSelect)((e=>e("core").getEntityRecord("taxonomy","_gp_venue",h))),S=f?.slug.replace(/^_/,""),[T,b]=(0,k.useState)(""),D=h+":"+T,P=(0,a.useSelect)((e=>e("core").getEntityRecords("postType","gp_venue",{per_page:1,slug:T})));(0,k.useEffect)((()=>{var e,t,a,r;let o={};if(T&&Array.isArray(P)){var l;const e=null!==(l=P[0]?.meta?._venue_information)&&void 0!==l?l:"{}";var m;e&&(o=JSON.parse(e),o.name=null!==(m=P[0]?.title.rendered)&&void 0!==m?m:"")}const d=null!==(e=o?.name)&&void 0!==e?e:(0,n.__)("No venue selected.","gatherpress"),p=null!==(t=o?.fullAddress)&&void 0!==t?t:"",g=null!==(a=o?.phoneNumber)&&void 0!==a?a:"",_=null!==(r=o?.website)&&void 0!==r?r:"";S&&b(S),v(D?String(D):""),s(d),i(p),c(g),u(_),w({setName:d,setFullAddress:p,setPhoneNumber:g,setWebsite:_,setIsOnlineEventTerm:"online-event"===T})}),[T,P,S,D]);let z=(0,a.useSelect)((e=>e("core").getEntityRecords("taxonomy","_gp_venue",{per_page:-1,context:"view"})),[]);return z?(z=z.map((e=>({label:e.name,value:e.id+":"+e.slug.replace(/^_/,"")}))),z.unshift({value:":",label:(0,n.__)("Choose a venue","gatherpress")})):z=[],(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Venue Selector","gatherpress"),value:g,onChange:e=>{(e=>{v(e);const t=""!==(e=e.split(":"))[0]?[e[0]]:[];_({_gp_venue:t}),b(e[1]),E()})(e)},options:z}))},J=()=>(0,t.createElement)("section",null,(0,t.createElement)(V,null));(0,s.registerPlugin)("gp-event-settings",{render:()=>C()&&(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"gp-event-settings",title:(0,n.__)("Event settings","gatherpress"),initialOpen:!0,className:"gp-event-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)($,null),(0,t.createElement)(J,null),(0,t.createElement)(B,null),(0,t.createElement)(N,null),(0,t.createElement)(G,null)))}),(0,a.dispatch)("core/edit-post").toggleEditorPanelOpened("gp-event-settings/gp-event-settings");const U=()=>{var e,s,o;const i=(0,a.useDispatch)("core/editor").editPost,l=(e,t)=>{const n=JSON.stringify({...c,[e]:t});i({meta:{_venue_information:n}})};let c=(0,a.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta")._venue_information));c=c?JSON.parse(c):{};const[m,u]=(0,k.useState)(null!==(e=c.fullAddress)&&void 0!==e?e:""),[d,p]=(0,k.useState)(null!==(s=c.phoneNumber)&&void 0!==s?s:""),[g,v]=(0,k.useState)(null!==(o=c.website)&&void 0!==o?o:"");return z({setFullAddress:u,setPhoneNumber:p,setWebsite:v}),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Full Address","gatherpress"),value:m,onChange:e=>{w({setFullAddress:e}),l("fullAddress",e)}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Phone Number","gatherpress"),value:d,onChange:e=>{w({setPhoneNumber:e}),l("phoneNumber",e)}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Website","gatherpress"),value:g,type:"url",onChange:e=>{w({setWebsite:e}),l("website",e)}}))},Z=()=>(0,t.createElement)("section",null,(0,t.createElement)(U,null));(0,s.registerPlugin)("gp-venue-settings",{render:()=>"gp_venue"===(0,a.select)("core/editor")?.getCurrentPostType()&&(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"gp-venue-settings",title:(0,n.__)("Venue settings","gatherpress"),initialOpen:!0,className:"gp-venue-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)(Z,null)))}),(0,a.dispatch)("core/edit-post").toggleEditorPanelOpened("gp-venue-settings/gp-venue-settings")})();