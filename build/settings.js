!function(){"use strict";var e=window.wp.element,t=(window.React,window.lodash),n=window.wp.components,o=window.wp.i18n,r=window.wp.coreData,a=window.wp.data,l=l=>{var i,s;const{name:d,option:u,value:p,fieldOptions:c}=l.attrs,[m,g]=(0,e.useState)(null!==(i=JSON.parse(p))&&void 0!==i?i:"[]"),{contentList:v}=(0,a.useSelect)((e=>{const{getEntityRecords:t}=e(r.store);return{contentList:t("user"!==c.type?"postType":"root",c.type||"post",{per_page:-1,context:"view"})}}),[m]),w=null!==(s=null==v?void 0:v.reduce(((e,t)=>{var n;return{...e,[(null===(n=t.title)||void 0===n?void 0:n.rendered)||t.name]:t}}),{}))&&void 0!==s?s:{};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.FormTokenField,{key:u,label:c.label||(0,o.__)("Select Posts","gatherpress"),name:d,value:m&&m.map((e=>{var t;return{id:e.id,slug:e.slug,value:(null===(t=e.title)||void 0===t?void 0:t.rendered)||e.name||e.value}})),suggestions:Object.keys(w),onChange:e=>{if(e.some((e=>"string"==typeof e&&!w[e])))return;const n=e.map((e=>"string"==typeof e?w[e]:e));if((0,t.includes)(n,null))return!1;g(n)},maxSuggestions:c.max_suggestions||20,maxLength:c.limit||0}),(0,e.createElement)("input",{type:"hidden",id:u,name:d,value:m&&JSON.stringify(m.map((e=>{var t;return{id:e.id,slug:e.slug,value:(null===(t=e.title)||void 0===t?void 0:t.rendered)||e.name||e.value}})))}))};const i=document.querySelectorAll('[data-gp_component_name="autocomplete"]');for(let t=0;t<i.length;t++){const n=JSON.parse(i[t].dataset.gp_component_attrs);(0,e.render)((0,e.createElement)(l,{attrs:n}),i[t])}}();