(()=>{"use strict";var e,t={6269:()=>{const e=window.wp.blocks,t=window.wp.element,a=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.data,l=window.wp.components,r=e=>{const{location:a,zoom:n,type:s,height:l,className:r}=e,o={border:0,height:l,width:"100%"},i="https://maps.google.com/maps?"+new URLSearchParams({q:a,z:n||1,t:s,output:"embed"}).toString();return(0,t.createElement)("iframe",{src:i,style:o,className:r,title:a})},o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/venue","version":"0.2","title":"Event Venue","category":"gatherpress","icon":"location","example":{},"description":"The block used for displaying the event\'s venue.","attributes":{"venueAddress":{"type":"string"},"venueId":{"type":"integer","default":null},"venueName":{"type":"string"},"showEventMap":{"type":"boolean","default":true},"zoomEventMap":{"type":"number","default":10},"typeEventMap":{"type":"string","default":"m"},"deskHeight":{"type":"number","default":400},"tabHeight":{"type":"number","default":300},"mobileHeight":{"type":"number","default":250},"device":{"type":"string","default":"desktop"}},"supports":{"html":true,"align":["wide","full"]},"textdomain":"gatherpress","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');(0,e.registerBlockType)(o,{edit:e=>{let{attributes:o,setAttributes:i}=e;const{deskHeight:p,device:c,showEventMap:d,typeEventMap:m,venueAddress:h,zoomEventMap:u,tabHeight:g,mobileHeight:v}=o,b=(0,n.useBlockProps)(),[E,f]=(0,t.useState)("");return function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(const[a,n]of Object.entries(e)){let e=a;t&&(e+=t),addEventListener(e,(e=>{n(e.detail)}),!1)}}({setVenueId:f}),(0,t.useEffect)((()=>{i({venueId:null!=E?E:""})})),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,a.__)("Map Settings","gatherpress"),initialOpen:!0},(0,t.createElement)(l.PanelRow,null,(0,a.__)("Show map on Event","gatherpress")),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(l.ToggleControl,{label:d?(0,a.__)("Display the map","gatherpress"):(0,a.__)("Hide the map","gatherpress"),checked:d,onChange:e=>i({showEventMap:e})})),(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Zoom Level","gatherpress"),beforeIcon:"search",value:u,onChange:e=>i({zoomEventMap:e}),min:1,max:22}),(0,t.createElement)(l.RadioControl,{label:(0,a.__)("Map Type","gatherpress"),selected:m,options:[{label:(0,a.__)("Roadmap","gatherpress"),value:"m"},{label:(0,a.__)("Satellite","gatherpress"),value:"k"}],onChange:e=>{i({typeEventMap:e})}}),(0,t.createElement)(l.ButtonGroup,{style:{marginBottom:"10px",float:"right"}},(0,t.createElement)(l.Button,{label:(0,a.__)("Desktop view","gatherpress"),isSmall:!0,isPressed:"desktop"===c,onClick:()=>i({device:"desktop"})},(0,t.createElement)("span",{className:"dashicons dashicons-desktop"})),(0,t.createElement)(l.Button,{label:(0,a.__)("Tablet view","gatherpress"),isSmall:!0,isPressed:"tablet"===c,onClick:()=>i({device:"tablet"})},(0,t.createElement)("span",{className:"dashicons dashicons-tablet"})),(0,t.createElement)(l.Button,{label:(0,a.__)("Mobile view","gatherpress"),isSmall:!0,isPressed:"mobile"===c,onClick:()=>i({device:"mobile"})},(0,t.createElement)("span",{className:"dashicons dashicons-smartphone"}))),"desktop"===c&&(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Map Height","gatherpress"),beforeIcon:"desktop",value:p,onChange:e=>i({deskHeight:e}),min:1,max:2e3}),"tablet"===c&&(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Map Height","gatherpress"),beforeIcon:"tablet",value:g,onChange:e=>i({tabHeight:e}),min:1,max:2e3}),"mobile"===c&&(0,t.createElement)(l.RangeControl,{label:(0,a.__)("Map Height","gatherpress"),beforeIcon:"smartphone",value:v,onChange:e=>i({mobileHeight:e}),min:1,max:2e3}))),(0,t.createElement)("div",b,(0,t.createElement)((e=>{var n,l,r,o,p;let{id:c}=e;const d=(0,s.useSelect)((e=>e("core").getEntityRecord("postType","gp_venue",c)));let m=null!==(n=d?.meta._venue_information)&&void 0!==n?n:"{}";m=""!==m?m:"{}";const h=JSON.parse(m),u=null!==(l=h?.fullAddress)&&void 0!==l?l:"",g=null!==(r=h?.phoneNumber)&&void 0!==r?r:"",v=null!==(o=h?.website)&&void 0!==o?o:"",b=null!==(p=d?.title.rendered)&&void 0!==p?p:(0,a.__)("No venue selected.","gatherpress");return(0,t.useEffect)((()=>{i({venueName:b,venueAddress:u})})),(0,t.createElement)("div",null,(0,t.createElement)("p",{className:"address-name"},b),(0,t.createElement)("p",{className:"address-list"},u?(0,t.createElement)("span",{className:"dashicons dashicons-location"}):""," ",u," ",g?(0,t.createElement)("span",{className:"dashicons dashicons-phone"}):""," ",g," ",v?(0,t.createElement)("span",{className:"dashicons dashicons-admin-site-alt3"}):""," ",v))}),{id:E}),h&&d&&(0,t.createElement)(r,{location:h,zoom:u,type:m,height:p})))},save:()=>null})}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,a,s,l)=>{if(!a){var r=1/0;for(c=0;c<e.length;c++){for(var[a,s,l]=e[c],o=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(o=!1,l<r&&(r=l));if(o){e.splice(c--,1);var p=s();void 0!==p&&(t=p)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,s,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={654:0,857:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var s,l,[r,o,i]=a,p=0;if(r.some((t=>0!==e[t]))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(i)var c=i(n)}for(t&&t(a);p<r.length;p++)l=r[p],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=n.O(void 0,[857],(()=>n(6269)));s=n.O(s)})();