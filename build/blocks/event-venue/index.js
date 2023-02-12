(()=>{"use strict";var e,t={7159:()=>{const e=window.wp.blocks,t=window.wp.element,l=window.wp.i18n,n=window.wp.blockEditor,a=window.wp.data,r=window.wp.components,s=e=>{const{location:l,zoom:n,type:a,height:r,className:s}=e,o={border:0,height:r,width:"100%"},i="https://maps.google.com/maps?"+new URLSearchParams({q:l,z:n||1,t:a,output:"embed"}).toString();return(0,t.createElement)("iframe",{src:i,style:o,className:s,title:l})},o=e=>{let{name:l,fullAddress:n,phoneNumber:a,website:s}=e;return(0,t.createElement)(t.Fragment,null,(l||n)&&(0,t.createElement)(r.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,t.createElement)(r.FlexItem,{display:"flex",className:"gp-venue__icon"},(0,t.createElement)(r.Icon,{icon:"location"})),(0,t.createElement)(r.FlexItem,null,l&&(0,t.createElement)("div",{className:"gp-venue_information__name has-medium-font-size"},(0,t.createElement)("strong",null,l)),n&&(0,t.createElement)("div",{className:"gp-venue__full-address"},n))),(a||s)&&(0,t.createElement)(r.Flex,{justify:"normal",gap:"8"},a&&(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(r.FlexItem,{display:"flex",className:"gp-venue__icon"},(0,t.createElement)(r.Icon,{icon:"phone"})),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("div",{className:"gp-venue__phone-number"},a)))),s&&(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Flex,{justify:"normal",gap:"4"},(0,t.createElement)(r.FlexItem,{display:"flex",className:"gp-venue__icon"},(0,t.createElement)(r.Icon,{icon:"admin-site-alt3"})),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("div",{className:"gp-venue__website"},(0,t.createElement)("a",{href:s,target:"_blank",rel:"noreferrer noopener"},s)))))))},i=e=>{let{attributes:i,setAttributes:m}=e;const{slug:p,mapHeight:c,mapShow:u,mapType:g,mapZoomLevel:d}=i,h=(0,n.useBlockProps)(),[v,f]=(0,t.useState)(p);!function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[l,n]of Object.entries(e)){let e=l;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}}({setVenueSlug:f});let E=(0,a.useSelect)((e=>e("core").getEntityRecords("postType","gp_venue",{per_page:1,slug:v})));return v||(E=null),(0,t.useEffect)((()=>{m({slug:null!=v?v:""})})),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Map Settings","gatherpress"),initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,l.__)("Show map on Event","gatherpress")),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:u?(0,l.__)("Display the map","gatherpress"):(0,l.__)("Hide the map","gatherpress"),checked:u,onChange:e=>m({mapShow:e})})),(0,t.createElement)(r.RangeControl,{label:(0,l.__)("Zoom Level","gatherpress"),beforeIcon:"search",value:d,onChange:e=>m({mapZoomLevel:e}),min:1,max:22}),(0,t.createElement)(r.RadioControl,{label:(0,l.__)("Map Type","gatherpress"),selected:g,options:[{label:(0,l.__)("Roadmap","gatherpress"),value:"m"},{label:(0,l.__)("Satellite","gatherpress"),value:"k"}],onChange:e=>{m({mapType:e})}}),(0,t.createElement)(r.RangeControl,{label:(0,l.__)("Map Height","gatherpress"),beforeIcon:"location",value:c,onChange:e=>m({mapHeight:e}),min:50,max:1e3}))),(0,t.createElement)("div",h,(0,t.createElement)((e=>{var n,a,r,i,m;let{venue:p}=e;p&&(p=p[0]);let h=null!==(n=p?.meta._venue_information)&&void 0!==n?n:"{}";h=""!==h?h:"{}";const v=JSON.parse(h),f=null!==(a=v?.fullAddress)&&void 0!==a?a:"",E=null!==(r=v?.phoneNumber)&&void 0!==r?r:"",_=null!==(i=v?.website)&&void 0!==i?i:"",b=null!==(m=p?.title.rendered)&&void 0!==m?m:(0,l.__)("No venue selected.","gatherpress");return(0,t.createElement)("div",{className:"gp-venue"},(0,t.createElement)(o,{name:b,fullAddress:f,phoneNumber:E,website:_}),f&&u&&(0,t.createElement)(s,{location:f,zoom:d,type:g,height:c}))}),{venue:E})))},m=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/event-venue","version":"1.0.0","title":"Event Venue","category":"gatherpress","icon":"location","example":{},"description":"The block used for displaying the event\'s venue.","attributes":{"slug":{"type":"string","default":null},"mapShow":{"type":"boolean","default":true},"mapZoomLevel":{"type":"number","default":10},"mapType":{"type":"string","default":"m"},"mapHeight":{"type":"number","default":300}},"supports":{"html":true,"align":["wide","full"]},"textdomain":"gatherpress","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./event-venue.js","render":"file:./render.php"}');(0,e.registerBlockType)(m,{edit:i,save:()=>null}),(0,e.registerBlockType)("gatherpress/venue",{title:"Event Date",category:"gatherpress",edit:i,save:()=>null})}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,a,r)=>{if(!l){var s=1/0;for(p=0;p<e.length;p++){for(var[l,a,r]=e[p],o=!0,i=0;i<l.length;i++)(!1&r||s>=r)&&Object.keys(n.O).every((e=>n.O[e](l[i])))?l.splice(i--,1):(o=!1,r<s&&(s=r));if(o){e.splice(p--,1);var m=a();void 0!==m&&(t=m)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[l,a,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={677:0,378:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,[s,o,i]=l,m=0;if(s.some((t=>0!==e[t]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(i)var p=i(n)}for(t&&t(l);m<s.length;m++)r=s[m],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(p)},l=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[378],(()=>n(7159)));a=n.O(a)})();