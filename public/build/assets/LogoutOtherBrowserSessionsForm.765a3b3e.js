import{_ as k,a6 as x,a7 as b,a8 as j,ab as B,ac as C,ad as S,af as L,o as n,c as M,w as e,b as a,F as O,r as V,d as J,a as o,e as i,az as z,a3 as F,f as s,g as c,t as d}from"./app.640fc03a.js";/* empty css            */const I={props:["sessions"],components:{JetActionMessage:x,JetActionSection:b,JetButton:j,JetDialogModal:B,JetInput:C,JetInputError:S,JetSecondaryButton:L},data(){return{confirmingLogout:!1,form:this.$inertia.form({password:""})}},methods:{confirmLogout(){this.confirmingLogout=!0,setTimeout(()=>this.$refs.password.focus(),250)},logoutOtherBrowserSessions(){this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>this.closeModal(),onError:()=>this.$refs.password.focus(),onFinish:()=>this.form.reset()})},closeModal(){this.confirmingLogout=!1,this.form.reset()}}},N=s(" Browser Sessions "),D=s(" Manage and log out your active sessions on other browsers and devices. "),E=o("div",{class:"max-w-xl text-sm text-gray-600"}," If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. ",-1),K={key:0,class:"mt-5 space-y-6"},T={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},A=o("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),H=[A],P={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},U=o("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),q=o("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),G=o("path",{d:"M11 5h2M12 17v.01"},null,-1),Q=[U,q,G],R={class:"ml-3"},W={class:"text-sm text-gray-600"},X={class:"text-xs text-gray-500"},Y={key:0,class:"text-green-500 font-semibold"},Z={key:1},$={class:"flex items-center mt-5"},oo=s(" Log Out Other Browser Sessions "),eo=s(" Done. "),so=s(" Log Out Other Browser Sessions "),to=s(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),no={class:"mt-4"},ro=s(" Cancel "),ao=s(" Log Out Other Browser Sessions ");function io(co,_,u,lo,r,l){const h=c("jet-button"),m=c("jet-action-message"),f=c("jet-input"),p=c("jet-input-error"),g=c("jet-secondary-button"),w=c("jet-dialog-modal"),y=c("jet-action-section");return n(),M(y,null,{title:e(()=>[N]),description:e(()=>[D]),content:e(()=>[E,u.sessions.length>0?(n(),a("div",K,[(n(!0),a(O,null,V(u.sessions,(t,v)=>(n(),a("div",{class:"flex items-center",key:v},[o("div",null,[t.agent.is_desktop?(n(),a("svg",T,H)):(n(),a("svg",P,Q))]),o("div",R,[o("div",W,d(t.agent.platform)+" - "+d(t.agent.browser),1),o("div",null,[o("div",X,[s(d(t.ip_address)+", ",1),t.is_current_device?(n(),a("span",Y,"This device")):(n(),a("span",Z,"Last active "+d(t.last_active),1))])])])]))),128))])):J("",!0),o("div",$,[i(h,{onClick:l.confirmLogout},{default:e(()=>[oo]),_:1},8,["onClick"]),i(m,{on:r.form.recentlySuccessful,class:"ml-3"},{default:e(()=>[eo]),_:1},8,["on"])]),i(w,{show:r.confirmingLogout,onClose:l.closeModal},{title:e(()=>[so]),content:e(()=>[to,o("div",no,[i(f,{type:"password",class:"mt-1 block w-3/4",placeholder:"Password",ref:"password",modelValue:r.form.password,"onUpdate:modelValue":_[0]||(_[0]=t=>r.form.password=t),onKeyup:z(l.logoutOtherBrowserSessions,["enter"])},null,8,["modelValue","onKeyup"]),i(p,{message:r.form.errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[i(g,{onClick:l.closeModal},{default:e(()=>[ro]),_:1},8,["onClick"]),i(h,{class:F(["ml-2",{"opacity-25":r.form.processing}]),onClick:l.logoutOtherBrowserSessions,disabled:r.form.processing},{default:e(()=>[ao]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show","onClose"])]),_:1})}var ho=k(I,[["render",io]]);export{ho as default};