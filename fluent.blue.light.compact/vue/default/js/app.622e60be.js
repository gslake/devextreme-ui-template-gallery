(function(){var e={16914:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});const n={email:"jheart@dx-email.com",name:"John",lastName:"Heart",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png"},r={_user:n,loggedIn(){return!!this._user},async logIn(e,t){try{return this._user={...n,email:e},{isOk:!0,data:this._user}}catch{return{isOk:!1,message:"Authentication failed"}}},async logOut(){},async getUser(){try{return{isOk:!0,data:this._user}}catch{return{isOk:!1}}},async resetPassword(e){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to reset password"}}},async changePassword(e,t){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to change password"}}},async createAccount(e,t){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to create account"}}}}},38450:function(e,t,a){"use strict";var n=a(49242);const r="app-info";var s=a(10199),o=a(73396),u=a(87139),i=a(44870),c=a(19647);const l={id:"root"},d={class:"content"};var m=(0,o.aZ)({__name:"App",setup(e){const t=(0,o.f3)(r),a=(0,o.Fl)((()=>["app"].concat(c.Br.value.cssClasses)));return document.title=t?.title||"",(e,n)=>{const r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",{class:(0,u.C_)((0,i.SU)(a))},[((0,o.wg)(),(0,o.j4)((0,o.LL)(e.$route.meta.layout),{title:(0,i.SU)(t)?.title,"is-x-small":(0,i.SU)(c.Br).isXSmall,"is-large":(0,i.SU)(c.Br).isLarge},{default:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(r)])])),_:1},8,["title","is-x-small","is-large"]))],2)])}}}),p=a(40089);const f=(0,p.Z)(m,[["__scopeId","data-v-74387d6e"]]);var h=f,v=a(23076);s.H.setAppTheme();const g=(0,n.ri)(h);g.use(v.N),g.provide(r,{title:"UI Template Gallery"}),g.mount("#app")},23076:function(e,t,a){"use strict";a.d(t,{N:function(){return x}});var n=a(22483),r=a(73396),s=a(44870),o=a(61538),u=a.n(o),i=a(18268),c=a(92668);const l={class:"side-nav-outer-toolbar"};var d=(0,r.aZ)({__name:"side-nav-outer-toolbar",props:{title:{default:""},isXSmall:{type:Boolean},isLarge:{type:Boolean}},setup(e){const t=e,a=(0,n.yj)(),o=(0,s.iH)(t.isLarge),d=(0,s.iH)(!1);function m(e){const t=e.event;t?.stopPropagation(),o.value&&(d.value=!1),o.value=!o.value}function p(){!1===o.value&&(d.value=!0),o.value=!0}(0,r.YP)((()=>t.isLarge),(()=>{d.value||(o.value=t.isLarge)})),(0,r.YP)((()=>a.path),(()=>{!d.value&&t.isLarge||(o.value=!1,d.value=!1)}));const f=(0,r.Fl)((()=>{const e=!t.isLarge;return{menuMode:t.isLarge?"shrink":"overlap",menuRevealMode:t.isXSmall?"slide":"expand",minMenuSize:t.isXSmall?0:48,maxMenuSize:t.isXSmall?250:void 0,closeOnOutsideClick:e,shaderEnabled:e}}));return(t,a)=>((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(i["default"],{class:"layout-header","menu-toggle-enabled":!0,"toggle-menu-func":m,title:e.title},null,8,["title"]),(0,r.Wm)((0,s.SU)(u()),{class:"layout-body",position:"before",template:"menuTemplate",opened:o.value,"onUpdate:opened":a[0]||(a[0]=e=>o.value=e),"opened-state-mode":(0,s.SU)(f).menuMode,"reveal-mode":(0,s.SU)(f).menuRevealMode,"min-size":(0,s.SU)(f).minMenuSize,"max-size":(0,s.SU)(f).maxMenuSize,shading:(0,s.SU)(f).shaderEnabled,"close-on-outside-click":(0,s.SU)(f).closeOnOutsideClick},{menuTemplate:(0,r.w5)((()=>[(0,r.Wm)(c["default"],{"compact-mode":!o.value,onClick:p},null,8,["compact-mode"])])),default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default")])),_:3},8,["opened","opened-state-mode","reveal-mode","min-size","max-size","shading","close-on-outside-click"])]))}}),m=a(40089);const p=(0,m.Z)(d,[["__scopeId","data-v-71ad44c5"]]);var f=p,h=a(45903),v=a.n(h),g=a(42398),b=(0,r.aZ)({__name:"single-card",setup(e){const t=(0,n.yj)(),a=(0,s.iH)(t.meta.title),o=(0,s.iH)(t.meta.description);return(0,r.YP)((()=>t.path),(()=>{a.value=t.meta.title,o.value=t.meta.description})),(e,t)=>((0,r.wg)(),(0,r.j4)((0,s.SU)(v()),{height:"100%",width:"100%",class:"view-wrapper-scroll single-card"},{default:(0,r.w5)((()=>[(0,r.Wm)(g["default"],{title:a.value,description:o.value},{default:(0,r.w5)((()=>[(0,r.WI)(e.$slots,"default")])),_:3},8,["title","description"])])),_:3}))}});const w=(0,m.Z)(b,[["__scopeId","data-v-93ea8e9e"]]);var y=w,_=a(16914);function k(e){return()=>a(53145)(`./${e}.vue`)}const x=(0,n.p7)({history:(0,n.r5)(),routes:[{path:"/",redirect:"/crm-contact-list"},{path:"/login",name:"login",meta:{requiresAuth:!1,layout:y,title:"Sign In"},props:{resetLink:"/reset-password",createAccountLink:"/create-account"},component:k("login-form")},{path:"/reset-password",name:"reset-password",props:{signInLink:"/login",buttonLink:"/login"},meta:{requiresAuth:!1,layout:y,title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email."},component:k("reset-password-form")},{path:"/create-account",name:"create-account",meta:{requiresAuth:!1,layout:y,title:"Sign Up"},props:{redirectLink:"/login",buttonLink:"/login"},component:k("create-account-form")},{path:"/change-password/:recoveryCode",name:"change-password",meta:{requiresAuth:!1,layout:y,title:"Change Password"},component:k("change-password-form")},...["crm-contact-list","crm-contact-details","planning-task-list","planning-task-details","planning-scheduler","analytics-dashboard","analytics-sales-report","analytics-geography","sign-in-form","sign-up-form","reset-password-form","user-profile"].map((e=>({path:`/${e}`,meta:{requiresAuth:!0,layout:f},component:()=>a(6473)(`./${e}.vue`)})))]});x.beforeEach(((e,t,a)=>{"login-form"===e.name&&_.Y.loggedIn()&&a({name:"home"}),e.matched.some((e=>e.meta.requiresAuth))?_.Y.loggedIn()?a():a({name:"login-form",query:{redirect:e.fullPath}}):a()}))},10199:function(e,t,a){"use strict";a.d(t,{H:function(){return c}});var n=a(82482),r=a(62907),s=a(44870);const o=["light","dark"];function u(e){return o[o.indexOf(e)+1]||o[0]}class i{constructor(){(0,n.Z)(this,"storageKey","app-theme"),(0,n.Z)(this,"themeMarker","theme-"),(0,n.Z)(this,"currentTheme",(0,s.iH)(this.getCurrentTheme()))}getCurrentTheme(){return window.localStorage[this.storageKey]||u()}getThemeStyleSheets(){return Array.from(document.styleSheets).filter((e=>e?.href?.includes(this.themeMarker)))}setAppTheme(e=this.currentTheme.value){this.getThemeStyleSheets().forEach((t=>{t.disabled=!t?.href?.includes(`${this.themeMarker}${e}.`)})),this.currentTheme.value=e,(0,r.qm)((0,r.qm)().replace(/\.[a-z]+\.compact$/,`.${e}.compact`)),(0,r.Rl)()}switchAppTheme(){const e=u(this.currentTheme.value);this.setAppTheme(e),window.localStorage[this.storageKey]=e}}const c=new i},19647:function(e,t,a){"use strict";a.d(t,{Br:function(){return p},J7:function(){return l},JW:function(){return m}});var n=a(44870);const r={XSmall:"(max-width: 575.99px)",Small:"(min-width: 576px) and (max-width: 991.98px)",Medium:"(min-width: 992px) and (max-width: 1199.98px)",Large:"(min-width: 1200px)"},s=window.matchMedia(r.XSmall),o=window.matchMedia(r.Small),u=window.matchMedia(r.Medium),i=window.matchMedia(r.Large),c=new Set;[s,o,u,i].forEach((e=>{e.addEventListener("change",(e=>{e.matches&&c.forEach((e=>e()))}))}));const l=()=>({"screen-x-small":s.matches,"screen-small":o.matches,"screen-medium":u.matches,"screen-large":i.matches});function d(){const e=l();return{isXSmall:e["screen-x-small"],isSmall:e["screen-small"],isMedium:e["screen-medium"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((t=>e[t]))}}function m(e){return e<=420?"xs":e<=992?"sm":e<1200?"md":"lg"}const p=(0,n.iH)(d()),f=e=>c.add(e);f((()=>{p.value=d()}))},64032:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(73396),r=a(87139);const s=e=>((0,n.dD)("data-v-60cd8c94"),e=e(),(0,n.Cn)(),e),o={class:"footer"},u=s((()=>(0,n._)("br",null,null,-1))),i=(0,n.Uk)(" Developer Express Inc. ");function c(e,t){return(0,n.wg)(),(0,n.iD)("footer",o,[(0,n.Uk)(" Copyright © "+(0,r.zw)((new Date).getFullYear())+" ",1),u,i])}var l=a(40089);const d={},m=(0,l.Z)(d,[["render",c],["__scopeId","data-v-60cd8c94"]]);var p=m},18268:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var n=a(73396),r=a(44870),s=a(87139),o=a(6224),u=a(68389),i=a(22483),c=a(16914),l=a(1127),d=a(19063);const m=e=>((0,n.dD)("data-v-d74cf746"),e=e(),(0,n.Cn)(),e),p={class:"messages"},f=m((()=>(0,n._)("div",{class:"dx-badge"}," 4 ",-1)));var h=(0,n.aZ)({__name:"app-header",props:{menuToggleEnabled:{type:Boolean},title:null,toggleMenuFunc:null},setup(e){const t=(0,i.tv)(),a=(0,i.yj)(),m=(0,r.iH)({});function h(){c.Y.logOut(),t.push({path:"/login",query:{redirect:a.path}})}c.Y.getUser().then((e=>{m.value=e.data}));const v=[{text:"Logout",icon:"runner",onClick:h}];return(t,a)=>((0,n.wg)(),(0,n.iD)("header",null,[(0,n.Wm)((0,r.SU)(u.DxToolbar),{class:"header-toolbar"},{menuUserItem:(0,n.w5)((()=>[(0,n.Wm)(d["default"],{user:m.value,"menu-items":v,"menu-mode":"list"},null,8,["user"])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(u.DxItem),{visible:e.menuToggleEnabled,location:"before","css-class":"menu-button"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(o.DxButton),{icon:"menu","styling-mode":"text",onClick:e.toggleMenuFunc},null,8,["onClick"])])),_:1},8,["visible"]),e.title?((0,n.wg)(),(0,n.j4)((0,r.SU)(u.DxItem),{key:0,location:"before","css-class":"header-title dx-toolbar-label"},{default:(0,n.w5)((()=>[(0,n._)("div",null,(0,s.zw)(e.title),1)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)((0,r.SU)(u.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxTextBox","css-class":"global-search-box",options:{stylingMode:"underlined",mode:"search",placeholder:"Search",width:180}}),(0,n.Wm)((0,r.SU)(u.DxItem),{location:"after","locate-in-menu":"never"},{default:(0,n.w5)((()=>[(0,n.Wm)(l["default"])])),_:1}),(0,n.Wm)((0,r.SU)(u.DxItem),{location:"after"},{default:(0,n.w5)((()=>[(0,n._)("div",p,[(0,n.Wm)((0,r.SU)(o.DxButton),{icon:"belloutline"}),f])])),_:1}),(0,n.Wm)((0,r.SU)(u.DxItem),{location:"after","locate-in-menu":"auto","menu-item-template":"menuUserItem"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)(d["default"],{user:m.value,"menu-items":v,"menu-mode":"context"},null,8,["user"])])])),_:1})])),_:1})]))}}),v=a(40089);const g=(0,v.Z)(h,[["__scopeId","data-v-d74cf746"]]);var b=g},42398:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(73396),r=a(87139);const s={class:"auth-card"},o={class:"dx-card content"},u={class:"header"},i={class:"title"},c={class:"description"};var l=(0,n.aZ)({__name:"card-auth",props:{title:null,description:null},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[(0,n._)("div",u,[(0,n._)("div",i,(0,r.zw)(t.title),1),(0,n._)("div",c,(0,r.zw)(t.description),1)]),(0,n.WI)(e.$slots,"default")])]))}}),d=a(40089);const m=(0,d.Z)(l,[["__scopeId","data-v-722f1f8a"]]);var p=m},92668:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(73396),r=a(44870),s=a(44657),o=a.n(s),u=a(19647),i=a(22483);const c=[{text:"CRM",icon:"user",path:"",items:[{text:"Contact List",path:"/crm-contact-list"},{text:"Contact Details",path:"/crm-contact-details"}]},{text:"Planning",icon:"event",path:"",items:[{text:"Task List",path:"/planning-task-list"},{text:"Task Details",path:"/planning-task-details"},{text:"Scheduler",path:"/planning-scheduler"}]},{text:"Analytics",icon:"chart",path:"",items:[{text:"Dashboard",path:"/analytics-dashboard"},{text:"Sales Report",path:"/analytics-sales-report"},{text:"Geography",path:"/analytics-geography"}]},{text:"Authentication",icon:"card",path:"",items:[{text:"Sign In Form",path:"/sign-in-form"},{text:"Sign Up Form",path:"/sign-up-form"},{text:"Reset Password Form",path:"/reset-password-form"}]},{text:"Common",icon:"box",path:"",items:[{text:"User Profile",path:"/user-profile"}]}];var l=a(64032);const d={class:"menu-container"};var m=(0,n.aZ)({__name:"side-navigation-menu",props:{compactMode:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const a=e,s=(0,i.yj)(),m=(0,i.tv)(),p=(0,u.J7)()["screen-large"],f=c.map((e=>(e.path&&!/^\//.test(e.path)&&(e.path=`/${e.path}`),{...e,expanded:p}))),h=(0,r.iH)(null);function v(...e){t("click",e)}function g(e){e.itemData.path&&!a.compactMode&&(m.push(e.itemData.path),e.event.stopPropagation())}function b(){h.value&&h.value.instance&&(h.value.instance.selectItem(s.path),h.value.instance.expandItem(s.path))}return(0,n.bv)((()=>{b(),a.compactMode&&h?.value?.instance.collapseAll()})),(0,n.YP)((()=>s.path),b),(0,n.YP)((()=>a.compactMode),(()=>{a.compactMode?h.value?.instance.collapseAll():b()})),(e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"dx-swatch-additional side-navigation-menu",onClick:v},[(0,n.WI)(e.$slots,"default"),(0,n._)("div",d,[(0,n.Wm)((0,r.SU)(o()),{ref_key:"treeViewRef",ref:h,items:(0,r.SU)(f),"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",onItemClick:g,width:"100%"},null,8,["items"])]),(0,n.Wm)(l["default"])]))}}),p=a(40089);const f=(0,p.Z)(m,[["__scopeId","data-v-5e7b6b28"]]);var h=f},1127:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(73396),r=a(44870),s=a(6224),o=a(10199),u=(0,n.aZ)({__name:"theme-switcher",setup(e){const{currentTheme:t}=o.H;function a(){o.H.switchAppTheme()}return(e,o)=>((0,n.wg)(),(0,n.j4)((0,r.SU)(s.DxButton),{class:"theme-button",icon:"dark"===(0,r.SU)(t)?"sun":"moon",onClick:a},null,8,["icon"]))}});const i=u;var c=i},57216:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(73396),r=a(87139),s=a(44870),o=a(4702),u=a.n(o);const i={class:"user-info"},c={key:0,class:"image-container"},l={class:"user-name"};var d=(0,n.aZ)({__name:"user-menu-section",props:{showAvatar:{type:Boolean,default:!1},menuItems:{default:[]},user:{default:{}}},setup(e,{expose:t}){const a=(0,s.iH)(null),o=({itemData:e})=>e.onClick();function d(){a.value.instance.focus()}return t({focusList:d}),(t,d)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",i,[e.showAvatar?((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{style:(0,r.j5)({backgroundImage:`url(${e.user?.avatarUrl})`}),class:"user-image"},null,4)])):(0,n.kq)("",!0),(0,n._)("div",l,(0,r.zw)(e.user?.name)+" "+(0,r.zw)(e.user?.lastName),1)]),(0,n.Wm)((0,s.SU)(u()),{ref_key:"userInfoListRef",ref:a,items:e.menuItems,onItemClick:o,"element-attr":{class:"user-info-list"}},null,8,["items"])],64))}}),m=a(40089);const p=(0,m.Z)(d,[["__scopeId","data-v-58446388"]]);var f=p},19063:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(73396),r=a(44870),s=a(67121),o=a(57216);const u={class:"user-panel"},i={key:1};var c=(0,n.aZ)({__name:"user-panel",props:{menuMode:{default:""},menuItems:{default:()=>[]},user:{default:()=>({})}},setup(e){const t=(0,r.iH)(null);function a({component:e}){e.registerKeyHandler("downArrow",(()=>{t.value?.focusList()}))}return(t,c)=>((0,n.wg)(),(0,n.iD)("div",u,["context"===e.menuMode?((0,n.wg)(),(0,n.j4)((0,r.SU)(s.MH),{key:0,"styling-mode":"text",icon:e.user?.avatarUrl,"show-arrow-icon":!1,"element-attr":{class:"user-button"},"drop-down-options":{width:"150"},"drop-down-content-template":"dropDownContentTemplate",onContentReady:a},{dropDownContentTemplate:(0,n.w5)((({})=>[(0,n.Wm)(o["default"],{"menu-items":e.menuItems,user:e.user,"show-avatar":!1,ref:"userMenuSection"},null,8,["menu-items","user"])])),_:1},8,["icon"])):(0,n.kq)("",!0),"list"===e.menuMode?((0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(o["default"],{"menu-items":e.menuItems,user:e.user,"show-avatar":!0},null,8,["menu-items","user"])])):(0,n.kq)("",!0)]))}}),l=a(40089);const d=(0,l.Z)(c,[["__scopeId","data-v-b7540ad2"]]);var m=d},53145:function(e,t,a){var n={"./app-footer.vue":[64032],"./app-header.vue":[18268],"./card-activities.vue":[45580,9782],"./card-analytics.vue":[7153,7204],"./card-auth.vue":[42398],"./card-menu.vue":[69147,9946],"./card-messages.vue":[88194,1908],"./card-notes.vue":[11925,9450,2919],"./card-opportunities.vue":[38447,9450,4745],"./card-tasks.vue":[13542,8249],"./change-password-form.vue":[85966,9569],"./change-profile-password-form.vue":[34217,2076],"./contact-form.vue":[84043,4043,9822],"./contact-new-form.vue":[39980,4440],"./contact-panel.vue":[51261,9450,1261,3520],"./create-account-form.vue":[42301,6868],"./login-form.vue":[14285,878],"./login-oauth.vue":[78804,4208],"./password-text-box.vue":[3211,4240],"./pictured-item-select-box.vue":[2450,6447],"./profile-card.vue":[69364,143],"./reset-password-form.vue":[62948,6075],"./side-navigation-menu.vue":[92668],"./status-indicator.vue":[10503,563],"./status-select-box.vue":[74158,1869],"./task-form.vue":[51054,1054,1991],"./task-kanban-card.vue":[52492,42],"./task-list-gantt.vue":[39603,1164,6751,2617],"./task-list-grid.vue":[6773,1164,6751,2792,8419,3045],"./task-list-kanban.vue":[5922,1164,8419,7970],"./theme-switcher.vue":[1127],"./ticker-card.vue":[4721,59],"./user-avatar.vue":[13950,4286],"./user-menu-section.vue":[57216],"./user-panel.vue":[19063]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=53145,e.exports=r},6473:function(e,t,a){var n={"./analytics-dashboard.vue":[27844,9450,8627],"./analytics-geography.vue":[26313,9450,4255],"./analytics-sales-report.vue":[43274,9450,5469],"./crm-contact-details.vue":[40949,9450,4043,9068],"./crm-contact-list.vue":[19711,9450,1164,6751,2792,1261,9222],"./planning-scheduler.vue":[3927,9450,7604],"./planning-task-details.vue":[99817,9450,1054,5303],"./planning-task-list.vue":[38244,9450,1164,6751,2792,8419,1054,3604],"./reset-password-form.vue":[83181,1682],"./sign-in-form.vue":[89075,8792],"./sign-up-form.vue":[83279,7362],"./user-profile.vue":[53355,9450,5071]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=6473,e.exports=r}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var u=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(u=!1,s<o&&(o=s));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);a.r(s);var o={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},a.d(s,o),s}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({42:"auth26",59:"auth31",143:"auth20",563:"auth23",878:"auth16",1682:"pages8",1869:"auth24",1908:"auth6",1991:"auth25",2076:"auth11",2617:"auth27",2919:"auth7",3045:"auth28",3520:"auth14",3604:"pages7",4208:"auth17",4240:"auth18",4255:"pages1",4286:"auth32",4440:"auth13",4745:"auth8",5071:"pages11",5303:"pages6",5469:"pages2",6075:"auth21",6447:"auth19",6868:"auth15",7204:"auth3",7362:"pages10",7604:"pages5",7970:"auth29",8249:"auth9",8627:"pages0",8792:"pages9",9068:"pages3",9222:"pages4",9569:"auth10",9782:"auth2",9822:"auth12",9946:"auth5"}[e]||e)+"."+{42:"b1b3551b",59:"c0ff7685",143:"6084e08c",563:"fcc154d8",878:"5a9f1d05",1054:"a56e5946",1164:"38670c23",1261:"6b750a5f",1682:"d43100b6",1869:"3a4fee24",1908:"24ed2bef",1991:"a74951d5",2076:"306338ca",2128:"f9e7f10d",2269:"6bde6216",2617:"7ef9fe6f",2792:"8ffc7b2b",2919:"dedb106f",3045:"feb2a678",3520:"7783ee72",3604:"f18b7f18",3617:"772b18d3",4043:"fd19ebec",4208:"4e10656d",4240:"a9e219ba",4255:"0732a6cd",4286:"e419e201",4440:"4898d341",4745:"605b0089",5071:"5391ab07",5303:"6026ba9d",5469:"9c545647",6075:"86e4ed95",6447:"583247c7",6751:"157b8122",6868:"f7301de0",7204:"7ef34766",7362:"6470bad8",7604:"43e20ce1",7970:"5eab9ceb",8249:"ed5fa287",8419:"ad1b0749",8627:"07545db3",8792:"223c02d2",9068:"c9d9f318",9222:"894ef84a",9450:"875a8bc1",9569:"573680cd",9782:"8d84167e",9822:"10d8506d",9946:"26987d95"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{42:"auth26",59:"auth31",143:"auth20",563:"auth23",878:"auth16",1682:"pages8",1869:"auth24",1908:"auth6",1991:"auth25",2076:"auth11",2919:"auth7",3045:"auth28",3520:"auth14",3604:"pages7",4208:"auth17",4255:"pages1",4286:"auth32",4440:"auth13",4745:"auth8",5071:"pages11",5303:"pages6",5469:"pages2",6075:"auth21",6447:"auth19",6868:"auth15",7204:"auth3",7362:"pages10",7604:"pages5",7970:"auth29",8249:"auth9",8627:"pages0",8792:"pages9",9068:"pages3",9222:"pages4",9782:"auth2",9822:"auth12",9946:"auth5"}[e]+"."+{42:"013da644",59:"ca4abe95",143:"2911a73b",563:"bea5a1e1",878:"4eb0b7e8",1682:"0dee9e0e",1869:"5f53583c",1908:"a4005619",1991:"c1f0de6c",2076:"b996f9dc",2919:"be54a1fb",3045:"3dc7ea98",3520:"c04425a4",3604:"52921ed4",4208:"a5e8b8bb",4255:"9afc5220",4286:"d0426890",4440:"2b6e2131",4745:"be424810",5071:"da575a98",5303:"d6d13367",5469:"eb22abbb",6075:"96ab4357",6447:"73606a5f",6868:"dfb00cf8",7204:"1d963440",7362:"9b27b7cb",7604:"f7a5a2da",7970:"fe8b78f5",8249:"256ea840",8627:"d1ec0d93",8792:"a4d755de",9068:"0bb1d947",9222:"13517b33",9782:"fa314e13",9822:"d3d6d677",9946:"9c23dac1"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-ui-teplate-gallery:";a.l=function(n,r,s,o){if(e[n])e[n].push(r);else{var u,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+s),u.src=n),e[n]=[r];var m=function(t,a){u.onerror=u.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e=function(e,t,a,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)a();else{var o=s&&("load"===s.type?"missing":s.type),u=s&&s.target&&s.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=o,i.request=u,r.parentNode.removeChild(r),n(i)}};return r.onerror=r.onload=s,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){r=o[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var o=a.miniCssF(n),u=a.p+o;if(t(o,u))return r();e(n,u,r,s)}))},r={2143:0};a.f.miniCss=function(e,t){var a={42:1,59:1,143:1,563:1,878:1,1682:1,1869:1,1908:1,1991:1,2076:1,2919:1,3045:1,3520:1,3604:1,4208:1,4255:1,4286:1,4440:1,4745:1,5071:1,5303:1,5469:1,6075:1,6447:1,6868:1,7204:1,7362:1,7604:1,7970:1,8249:1,8627:1,8792:1,9068:1,9222:1,9782:1,9822:1,9946:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={2143:0,8440:0,4762:0,532:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^((476|53|982)2|3520|8440)$/.test(t))e[t]=0;else{var s=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=s);var o=a.p+a.u(t),u=new Error,i=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,r[1](u)}};a.l(o,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],u=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(i)var l=i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},n=self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[8440,4762,532,4998],(function(){return a(38450)}));n=a.O(n)})();