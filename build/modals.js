(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.wp.element,n=window.wp.i18n,a=window.wp.domReady;var r=e.n(a);const l=window.wp.components,o=window.wp.apiFetch;var s=e.n(o);function c(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const i=()=>{const[a,r]=(0,t.useState)(!1),[o,i]=(0,t.useState)(!1),[d,u]=(0,t.useState)(!1),[m,h]=(0,t.useState)(!1),[p,g]=(0,t.useState)(!1),[w,b]=(0,t.useState)(!1),[_,E]=(0,t.useState)(!1),[C,f]=(0,t.useState)(""),y=()=>r(!1);return(0,t.useEffect)((()=>{d&&m&&p&&(i(!0),u(!1),h(!1),g(!1)),o?(b(!0),u(!1),h(!1),g(!1)):b(!1),E(!(o||d||m||p))}),[o,d,m,p]),((e,t=!1)=>{for(const[n,a]of Object.entries(e)){let e=n;t&&(e+=t),addEventListener(e,(e=>{a(e.detail)}),!1)}})({setOpen:r}),(0,t.createElement)(t.Fragment,null,a&&(0,t.createElement)(l.Modal,{title:(0,n.__)("Email members about this event","gatherpress"),onRequestClose:y,shouldCloseOnClickOutside:!1},(0,t.createElement)(l.TextareaControl,{label:(0,n.__)("Optional Message","gatherpress"),value:C,onChange:e=>f(e)}),(0,t.createElement)(l.Flex,{gap:"8"},(0,t.createElement)(l.FlexItem,null,(0,t.createElement)(l.CheckboxControl,{label:(0,n.__)("All","gatherpress"),checked:o,onChange:i})),(0,t.createElement)(l.FlexItem,null,(0,t.createElement)(l.CheckboxControl,{label:(0,n.__)("Attending","gatherpress"),checked:d,onChange:u,disabled:w})),(0,t.createElement)(l.FlexItem,null,(0,t.createElement)(l.CheckboxControl,{label:(0,n.__)("Waiting List","gatherpress"),checked:m,onChange:h,disabled:w})),(0,t.createElement)(l.FlexItem,null,(0,t.createElement)(l.CheckboxControl,{label:(0,n.__)("Not Attending","gatherpress"),checked:p,onChange:g,disabled:w}))),(0,t.createElement)("br",null),(0,t.createElement)(l.Button,{variant:"primary",onClick:()=>{e.g.confirm((0,n.__)("Confirm you are ready to send?","gatherpress"))&&s()({path:c("event_rest_api")+"/email/",method:"POST",data:{post_id:c("post_id"),message:C,send:{all:o,attending:d,waiting_list:m,not_attending:p},_wpnonce:c("nonce")}}).then((e=>{e.success&&(y(),f(""),i(!1),u(!1),h(!1),g(!1))}))},disabled:_},(0,n.__)("Send Email","gatherpress"))))};r()((()=>{(0,t.createRoot)(document.getElementById("gp-event-communication-modal")).render((0,t.createElement)(i,null))}))})();