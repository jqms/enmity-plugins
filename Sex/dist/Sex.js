function g(o){window.enmity.plugins.registerPlugin(o)}function y(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function p(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const s=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var S="Sex",A="1.0.0",f="sex",h=[{name:"sex",id:"582594004479246343"}],v="#ff0069",E="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/AmongUs.js",_={name:S,version:A,description:f,authors:h,color:v,sourceUrl:E};function M(o){return window.enmity.settings.makeStore(o)}const i=p("Amongus"),m=y("_currentDispatchActionType","_subscriptions","_waitQueue"),d="https://assets-prd.ignimgs.com/2020/09/15/among-us-button-1600131255112.jpg",T={..._,onStart(){const o=M(this.name);m.dispatch({type:"LOAD_MESSAGES"}),o.set("test","test"),m.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let n=0,a=3;const r=()=>{try{n++,console.log(`Amongus delayed start attempt ${n}/${a}.`),s.open({content:`Amongus start attempt ${n}/${a}.`,source:{uri:d}});const u=m._actionHandlers._orderedActionHandlers.MESSAGE_CREATE.find(e=>e.name==="MessageStore"),l=m._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(e=>e.name==="MessageStore"),w=m._actionHandlers._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(e=>e.name==="MessageStore");i.before(u,"actionHandler",(e,t)=>{t[0].message.content="sex"}),i.before(l,"actionHandler",(e,t)=>{t[0].message.content="sex"}),i.before(w,"actionHandler",(e,t)=>{t[0].messages=t[0].messages.map(c=>(c.content="sex",c))}),console.log("Amongus delayed start successful."),s.open({content:"Amongus delayed start successful.",source:{uri:d}})}catch{n<a?(console.warn(`Amongus failed to start. Trying again in ${n}0s.`),s.open({content:`Amongus failed to start trying again in ${n}0s.`,source:{uri:d}}),setTimeout(r,n*1e4)):(console.error("Amongus failed to start. Giving up."),s.open({content:"Amongus failed to start. Giving up.",source:{uri:d}}))}};setTimeout(r,300)},onStop(){i.unpatchAll()},patches:[]};g(T);
