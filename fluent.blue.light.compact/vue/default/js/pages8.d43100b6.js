"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[1682,6075],{62948:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=s(73396),i=s(49242),n=s(44870),l=s(94969),o=s.n(l),r=s(15255),u=s.n(r),d=s(53898),m=s(22483),p=s(16914);const c=["onSubmit"],f={class:"dx-button-text"},w={key:1},v={class:"login-link"},k=(0,a.Uk)(" Return to "),_=(0,a.Uk)(" Sign In ");var b=(0,a.aZ)({__name:"reset-password-form",props:{signInLink:null,buttonLink:null},setup(e){const t=e,s="We've sent a link to reset your password. Check your inbox.",r=(0,m.tv)(),b=(0,n.iH)(!1),g=(0,n.qj)({email:""});async function h(){const{email:e}=g;b.value=!0;const a=await p.Y.resetPassword(e);b.value=!1,a.isOk?(r.push(t.buttonLink),(0,d.Z)(s,"success",2500)):(0,d.Z)(a.message,"error",2e3)}return(e,s)=>{const r=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("form",{class:"reset-password-form",onSubmit:(0,i.iM)(h,["prevent"])},[(0,a.Wm)((0,n.SU)(o()),{"form-data":g,disabled:b.value},{resetTemplate:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("span",f,[b.value?((0,a.wg)(),(0,a.j4)((0,n.SU)(u()),{key:0,width:"24px",height:"24px",visible:!0})):(0,a.kq)("",!0),b.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",w,"Reset my password"))])])])),default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(l.DxItem),{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email",value:"jheart@corp.com"}},{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(l.DxRequiredRule),{message:"Email is required"}),(0,a.Wm)((0,n.SU)(l.DxEmailRule),{message:"Email is invalid"}),(0,a.Wm)((0,n.SU)(l.DxLabel),{visible:!1})])),_:1},8,["editor-options"]),(0,a.Wm)((0,n.SU)(l.DxButtonItem),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,n.SU)(l.DxButtonOptions),{"element-attr":{class:"submit-button"},width:"100%",type:"default",template:"resetTemplate","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"]),(0,a._)("div",v,[k,(0,a.Wm)(r,{to:t.signInLink},{default:(0,a.w5)((()=>[_])),_:1},8,["to"])])],40,c)}}}),g=s(40089);const h=(0,g.Z)(b,[["__scopeId","data-v-90e896ba"]]);var x=h},83181:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(73396),i=s(42398),n=s(62948),l=(0,a.aZ)({__name:"reset-password-form",setup(e){const t="Please enter the email address that you used to register, and we will send you a link to reset your password via Email.";return(e,s)=>((0,a.wg)(),(0,a.j4)(i["default"],{title:"Reset Password",description:t},{default:(0,a.w5)((()=>[(0,a.Wm)(n["default"],{"sign-in-link":"/sign-in-form","button-link":"/reset-password-form"})])),_:1}))}}),o=s(40089);const r=(0,o.Z)(l,[["__scopeId","data-v-61064ebe"]]);var u=r}}]);