"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8792,878,4208],{14285:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(73396),o=a(49242),i=a(44870),l=a(15255),s=a.n(l),r=a(94969),d=a.n(r),u=a(6224),m=a.n(u),c=a(53898),p=a(22483),f=a(16914),g=a(78804),v=a(10199);const w=["onSubmit"],_={class:"dx-button-text"},x={key:1},h={class:"reset-link"},S=(0,n.Uk)(" Forgot password? ");var k=(0,n.aZ)({__name:"login-form",props:{resetLink:null,createAccountLink:null},setup(e){const t=e,{currentTheme:a}=v.H,l=(0,n.Fl)((()=>"dark"===a.value?"outlined":"contained")),u=(0,p.tv)(),k=(0,i.qj)({email:"",password:""}),b=(0,i.iH)(!1);function U(){u.push(t.createAccountLink)}async function W(){const{email:e,password:t}=k;b.value=!0;const a=await f.Y.logIn(e,t);a.isOk?u.push("/"):(b.value=!1,(0,c.Z)(a.message,"error",2e3))}return(e,a)=>{const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("form",{class:"login-form",onSubmit:(0,o.iM)(W,["prevent"])},[(0,n.Wm)((0,i.SU)(d()),{"form-data":k,disabled:b.value},{signInTemplate:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("span",_,[b.value?((0,n.wg)(),(0,n.j4)((0,i.SU)(s()),{key:0,width:"24px",height:"24px",visible:!0})):(0,n.kq)("",!0),b.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",x,"Sign In"))])])])),default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxItem),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@corp.com"}},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxRequiredRule),{message:"Email is required"}),(0,n.Wm)((0,i.SU)(r.DxEmailRule),{message:"Email is invalid"}),(0,n.Wm)((0,i.SU)(r.DxLabel),{visible:!1})])),_:1},8,["editor-options"]),(0,n.Wm)((0,i.SU)(r.DxItem),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password",value:"password"}},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxRequiredRule),{message:"Password is required"}),(0,n.Wm)((0,i.SU)(r.DxLabel),{visible:!1})])),_:1}),(0,n.Wm)((0,i.SU)(r.DxItem),{"data-field":"rememberMe","editor-type":"dxCheckBox","editor-options":{text:"Remember me",elementAttr:{class:"form-text"}}},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxLabel),{visible:!1})])),_:1}),(0,n.Wm)((0,i.SU)(r.DxButtonItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(r.DxButtonOptions),{width:"100%",type:"default",template:"signInTemplate","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,n._)("div",h,[(0,n.Wm)(u,{to:t.resetLink},{default:(0,n.w5)((()=>[S])),_:1},8,["to"])]),(0,n.Wm)((0,i.SU)(m()),{text:"Create an account",width:"100%",onClick:U,"styling-mode":(0,i.SU)(l)},null,8,["styling-mode"]),(0,n.Wm)(g["default"])],40,w)}}}),b=a(40089);const U=(0,b.Z)(k,[["__scopeId","data-v-2d045c67"]]);var W=U},78804:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(73396),o=a(44870),i=a(6224),l=a.n(i),s=a(10199);const r=e=>((0,n.dD)("data-v-1e6aac99"),e=e(),(0,n.Cn)(),e),d={class:"oauth-button-container"},u=r((()=>(0,n._)("p",null,"or",-1)));var m=(0,n.aZ)({__name:"login-oauth",setup(e){const{currentTheme:t}=s.H,a=(0,n.Fl)((()=>"dark"===t.value?"outlined":"contained"));return(e,t)=>((0,n.wg)(),(0,n.iD)("div",d,[u,(0,n.Wm)((0,o.SU)(l()),{width:"100%",icon:"icons/google-logo.svg",text:"Login with Google","styling-mode":(0,o.SU)(a)},null,8,["styling-mode"]),(0,n.Wm)((0,o.SU)(l()),{width:"100%",icon:"icons/microsoft-logo.svg",text:"Login with Microsoft","styling-mode":(0,o.SU)(a)},null,8,["styling-mode"])]))}}),c=a(40089);const p=(0,c.Z)(m,[["__scopeId","data-v-1e6aac99"]]);var f=p},89075:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(73396),o=a(42398),i=a(14285),l=(0,n.aZ)({__name:"sign-in-form",setup(e){return(e,t)=>((0,n.wg)(),(0,n.j4)(o["default"],{title:"Sign In"},{default:(0,n.w5)((()=>[(0,n.Wm)(i["default"],{"reset-link":"/reset-password-form","create-account-link":"/sign-up-form"})])),_:1}))}}),s=a(40089);const r=(0,s.Z)(l,[["__scopeId","data-v-56bbf80d"]]);var d=r}}]);