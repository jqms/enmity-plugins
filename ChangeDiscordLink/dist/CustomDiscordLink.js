function i(o){window.enmity.plugins.registerPlugin(o)}function d(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const t=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var s="CustomDiscordLink",w="0.1.1",c="Port of that one powercord plugin lol",l=[{name:"rosie",id:"582594004479246343"}],a={name:s,version:w,description:c,authors:l};const e=d("ChangeDiscordLink"),u={...a,onStart(){const o="rosie";e.before(t,"sendMessage",(r,n,y)=>{const m=n[1].content;!m.includes("discord.com/channels")||(n[1].content=m.replace("discord.com/channels",o+".discord.com/channels"))})},onStop(){e.unpatchAll()}};i(u);
