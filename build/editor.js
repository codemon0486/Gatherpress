(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var n=e.n(t);const o=window.wp.data,s=window.moment;var r=e.n(s);const i=window.wp.i18n;function a(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.apiFetch;const d="YYYY-MM-DDTHH:mm:ss",c=(e=a("event_datetime.timezone"))=>r().tz.zone(e)?e:(0,i.__)("GMT","gatherpress"),p=r().tz(c()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(d);r().tz(p,c()).add(2,"hours").format(d),n()((()=>{const e=(0,o.select)("core/edit-post");if(!e)return;const t=(0,o.dispatch)("core/edit-post");e.isEditorSidebarOpened()?(t.openGeneralSidebar("edit-post/document"),t.toggleEditorPanelOpened("gp-event-settings/gp-event-settings")):(t.openGeneralSidebar(),t.toggleEditorPanelOpened("gp-event-settings/gp-event-settings")),function(){const e="gp_event_past",t=(0,o.dispatch)("core/notices");t.removeNotice(e),function(){const e=r().tz(a("event_datetime.datetime_end"),c());return r().tz(c()).valueOf()>e.valueOf()}()&&t.createNotice("warning",(0,i.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!1})}()}))})();