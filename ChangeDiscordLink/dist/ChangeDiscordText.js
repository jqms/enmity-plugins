function d(o){window.enmity.plugins.registerPlugin(o)}function t(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const s=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var w="ChangeDiscordText",c="0.0.2",l="Port of that one powercord plugin lol",a=[{name:"rosie",id:"582594004479246343"}],u={name:w,version:c,description:l,authors:a};const i=t("ChangeDiscordLink");let r="you-are-sus";const y={...u,onStart(){i.before(s,"sendMessage",(o,n,g)=>{let m=n[1].content,e;m.includes("discord.com/channels/")&&e==m.replace("discord.com/channels/",r+".discord.com/channels/"),n[1].content=e})},onStop(){i.unpatchAll()}};d(y);
