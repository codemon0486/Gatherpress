(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.wp.element,n=window.wp.i18n,a=window.wp.plugins,r=window.wp.editPost,s=window.moment;var i=e.n(s);function o(){return"gp_event"===wp.data.select("core/editor").getCurrentPostType()}function l(){wp.data.dispatch("core/editor").editPost({meta:{_non_existing_meta:!0}})}const d=window.wp.components,m=window.wp.data,c=window.wp.apiFetch;var u=e.n(c);const p=window.React,h=window.wp.date;function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;D(e),GatherPress.event_datetime.datetime_start=e,this.setState({dateTime:e}),null!==t&&t({dateTime:e}),l()}function g(){return GatherPress.event_datetime.datetime_start=this.state.dateTime,this.state.dateTime}class w extends p.Component{constructor(e){super(e),this.state={dateTime:GatherPress.event_datetime.datetime_start}}componentDidMount(){this.updateDateTimeStart=_,this.getDateTimeStart=g,_=_.bind(this),g=g.bind(this)}componentWillUnmount(){_=this.updateDateTimeStart,g=this.getDateTimeStart}render(){const e=(0,h.__experimentalGetSettings)();return(0,h.dateI18n)(`${e.formats.date} ${e.formats.time}`,this.state.dateTime)}}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;S(e),GatherPress.event_datetime.datetime_end=e,this.setState({dateTime:e}),null!==t&&t({dateTime:e}),l()}function f(){return GatherPress.event_datetime.datetime_end=this.state.dateTime,P(),this.state.dateTime}function P(){const e="gp_event_past",t=wp.data.dispatch("core/notices"),a=i()().valueOf()>i()(GatherPress.event_datetime.datetime_end).valueOf();t.removeNotice(e),a&&t.createNotice("warning",(0,n.__)("This event has already past.","gatherpress"),{id:e,isDismissible:!0})}class E extends p.Component{constructor(e){super(e),this.state={dateTime:GatherPress.event_datetime.datetime_end}}componentDidMount(){this.updateDateTimeEnd=v,this.getDateTimeEnd=f,v=v.bind(this),f=f.bind(this),P()}componentWillUnmount(){v=this.updateDateTimeEnd,f=this.getDateTimeEnd}componentDidUpdate(){P()}render(){const e=(0,h.__experimentalGetSettings)();return(0,h.dateI18n)(`${e.formats.date} ${e.formats.time}`,this.state.dateTime)}}const T="YYYY-MM-DDTHH:mm:ss";function D(e){const t=i()(GatherPress.event_datetime.datetime_end).valueOf(),n=i()(e).valueOf();n>=t&&v(i()(n).add(2,"hours").format(T)),P()}function S(e){const t=i()(GatherPress.event_datetime.datetime_start).valueOf(),n=i()(e).valueOf();n<=t&&_(i()(n).subtract(2,"hours").format(T)),P()}const b=window.wp.compose,G=(0,b.withState)()((e=>{let{setState:n}=e;const a=(0,h.__experimentalGetSettings)(),r=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(d.DateTimePicker,{currentDate:g(),onChange:e=>_(e,n),is12Hour:r})})),x=(0,b.withState)()((e=>{let{setState:n}=e;const a=(0,h.__experimentalGetSettings)(),r=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(d.DateTimePicker,{currentDate:f(),onChange:e=>v(e,n),is12Hour:r})})),C=i()().format(T);let O=GatherPress.event_datetime.datetime_start,Y=GatherPress.event_datetime.datetime_end;(0,m.subscribe)((function(){const e=wp.data.select("core/editor").isSavingPost(),t=wp.data.select("core/editor").isAutosavingPost();o()&&e&&!t&&u()({path:"/gatherpress/v1/event/datetime/",method:"POST",data:{post_id:GatherPress.post_id,datetime_start:i()(GatherPress.event_datetime.datetime_start).format("YYYY-MM-DD HH:mm:ss"),datetime_end:i()(GatherPress.event_datetime.datetime_end).format("YYYY-MM-DD HH:mm:ss"),_wpnonce:GatherPress.nonce}}).then((()=>{}))})),O=""!==O?i()(O).format(T):C,Y=""!==Y?i()(Y).format(T):i()(C).add(2,"hours").format(T),GatherPress.event_datetime.datetime_start=O,GatherPress.event_datetime.datetime_end=Y;const y=()=>(0,t.createElement)("section",null,(0,t.createElement)("h3",null,(0,n.__)("Date & time","gatherpress")),(0,t.createElement)(d.PanelRow,null,(0,t.createElement)("span",null,(0,n.__)("Start","gatherpress")),(0,t.createElement)(d.Dropdown,{position:"bottom left",renderToggle:e=>{let{isOpen:n,onToggle:a}=e;return(0,t.createElement)(d.Button,{onClick:a,"aria-expanded":n,isLink:!0},(0,t.createElement)(w,null))},renderContent:()=>(0,t.createElement)(G,null)})),(0,t.createElement)(d.PanelRow,null,(0,t.createElement)("span",null,(0,n.__)("End","gatherpress")),(0,t.createElement)(d.Dropdown,{position:"bottom left",renderToggle:e=>{let{isOpen:n,onToggle:a}=e;return(0,t.createElement)(d.Button,{onClick:a,"aria-expanded":n,isLink:!0},(0,t.createElement)(E,null))},renderContent:()=>(0,t.createElement)(x,null)}))),M=e=>{const{venue:a,setVenue:r}=e,s=(0,m.useDispatch)("core/editor").editPost,{unlockPostSaving:i}=(0,m.useDispatch)("core/editor"),o=(0,m.useSelect)((e=>e("core/editor").getEditedPostAttribute("_gp_venue")));(0,t.useEffect)((()=>{var e;r(null!==(e=String(o))&&void 0!==e?e:"")}),[]);let l=(0,m.useSelect)((e=>e("core").getEntityRecords("taxonomy","_gp_venue",{per_page:-1,context:"view"})),[a]);return l?(l=l.map((e=>({label:e.name,value:e.id}))),l.unshift({value:"",label:(0,n.__)("Choose a venue","gatherpress"),disabled:!0})):l=[],(0,t.createElement)(d.PanelRow,null,(0,t.createElement)(d.Flex,null,(0,t.createElement)(d.FlexItem,null,(0,n.__)("Venue","gatherpress")),(0,t.createElement)(d.FlexItem,null,(0,t.createElement)(d.SelectControl,{label:(0,n.__)("Venue","gatherpress"),hideLabelFromVision:"true",value:a,onChange:e=>{(e=>{r(e),s({_gp_venue:[e]}),i()})(e)},options:l,style:{width:"11rem"}}))))},{__:H}=wp.i18n;(0,a.registerPlugin)("gp-event-settings",{render:()=>{const[e,a]=(0,t.useState)("");return o()&&(0,t.createElement)(r.PluginDocumentSettingPanel,{name:"gp-event-settings",title:(0,n.__)("Event settings","gatherpress"),initialOpen:!0,className:"gp-event-settings"},(0,t.createElement)(y,null),(0,t.createElement)("hr",null),(0,t.createElement)(M,{venue:e,setVenue:a}))},icon:""})})();