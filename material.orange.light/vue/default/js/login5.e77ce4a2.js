(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login5"],{"33dd":function(e,t,o){},"4f34":function(e,t,o){"use strict";
/*!
 * devextreme-vue
 * Version: 21.1.4
 * Build date: Mon Jun 21 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxLoadIndicator=void 0;var i=n(o("9f9b")),a=o("27da"),s=a.createComponent({props:{elementAttr:{},height:[Function,Number,String],hint:String,indicatorSrc:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:elementAttr":null,"update:height":null,"update:hint":null,"update:indicatorSrc":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:rtlEnabled":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=i.default}});t.DxLoadIndicator=s,t.default=s},cbd3:function(e,t,o){"use strict";var n=o("5b62"),i=o("3fab"),a=o("75e9"),s=o("b9af"),r=o("bf95"),l=o("45f8"),c=o("5274"),d=o("c4f4"),u=o("16b4"),p=o("6bc7"),m=o("8fe2"),h=o("8f22"),b=o("085e"),f=o("8031"),O=o("2111"),v=Object(l["d"])(),j=u["a"].add,g="dx-toast",w=g+"-",x=w+"wrapper",C=w+"content",y=w+"message",_=w+"icon",k="dxToast",T=["info","warning","error","success"],D=[],B=8e3,S=null,V={top:{my:"top",at:"top",of:null,offset:"0 0"},bottom:{my:"bottom",at:"bottom",of:null,offset:"0 -20"},center:{my:"center",at:"center",of:null,offset:"0 0"},right:{my:"center right",at:"center right",of:null,offset:"0 0"},left:{my:"center left",at:"center left",of:null,offset:"0 0"}};j((function(){d["a"].subscribeGlobal(c["default"].getDocument(),h["a"].down,(function(e){for(var t=D.length-1;t>=0;t--)if(!D[t]._proxiedDocumentDownHandler(e))return}))}));var N=f["a"].inherit({_getDefaultOptions:function(){return Object(s["a"])(this.callBase(),{message:"",type:"info",displayTime:2e3,position:"bottom center",animation:{show:{type:"fade",duration:400,from:0,to:1},hide:{type:"fade",duration:400,to:0}},shading:!1,height:"auto",hideTopOverlayHandler:null,closeOnSwipe:!0,closeOnClick:!1,resizeEnabled:!1})},_defaultOptionsRules:function(){return this.callBase().concat([{device:{platform:"android"},options:{closeOnOutsideClick:!0,width:"auto",position:{at:"bottom left",my:"bottom left",offset:"20 -20"},animation:{show:{type:"slide",duration:200,from:{position:{my:"top",at:"bottom",of:v}}},hide:{type:"slide",duration:200,to:{position:{my:"top",at:"bottom",of:v}}}}}},{device:function(e){var t="phone"===e.deviceType,o="android"===e.platform;return t&&o},options:{width:function(){var e;return(null===v||void 0===v||null===(e=v.visualViewport)||void 0===e?void 0:e.width)||Object(n["a"])(v).width()},position:{at:"bottom center",my:"bottom center",offset:"0 0"}}},{device:function(e){return"phone"===e.deviceType},options:{width:function(){var e;return(null===v||void 0===v||null===(e=v.visualViewport)||void 0===e?void 0:e.width)||Object(n["a"])(v).width()}}},{device:function(){return Object(O["c"])()},options:{minWidth:344,maxWidth:568,displayTime:4e3}}])},_init:function(){this.callBase(),this._posStringToObject()},_renderContentImpl:function(){this.option("message")&&(this._message=Object(n["a"])("<div>").addClass(y).text(this.option("message")).appendTo(this.$content())),this.setAria("role","alert",this._message),Object(m["c"])(this.option("type").toLowerCase(),T)>-1&&this.$content().prepend(Object(n["a"])("<div>").addClass(_)),this.callBase()},_render:function(){this.callBase(),this.$element().addClass(g),this.$wrapper().addClass(x),this.$content().addClass(w+String(this.option("type")).toLowerCase()),this.$content().addClass(C),this._toggleCloseEvents("Swipe"),this._toggleCloseEvents("Click")},_renderScrollTerminator:p["n"],_toggleCloseEvents:function(e){var t="dx"+e.toLowerCase();d["a"].off(this.$content(),t),this.option("closeOn"+e)&&d["a"].on(this.$content(),t,this.hide.bind(this))},_posStringToObject:function(){if(Object(r["o"])(this.option("position"))){var e=this.option("position").split(" ")[0],t=this.option("position").split(" ")[1];switch(this.option("position",Object(s["a"])({},V[e])),t){case"center":case"left":case"right":this.option("position").at+=" "+t,this.option("position").my+=" "+t}}},_show:function(){return S&&S!==this&&(clearTimeout(S._hideTimeout),S.hide()),S=this,this.callBase.apply(this,arguments).done(function(){clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout(this.hide.bind(this),this.option("displayTime"))}.bind(this))},_hide:function(){return S=null,this.callBase.apply(this,arguments)},_overlayStack:function(){return D},_zIndexInitValue:function(){return this.callBase()+B},_dispose:function(){clearTimeout(this._hideTimeout),S=null,this.callBase()},_optionChanged:function(e){switch(e.name){case"type":this.$content().removeClass(w+e.previousValue),this.$content().addClass(w+String(e.value).toLowerCase());break;case"message":this._message&&this._message.text(e.value);break;case"closeOnSwipe":this._toggleCloseEvents("Swipe");break;case"closeOnClick":this._toggleCloseEvents("Click");break;case"displayTime":case"position":break;default:this.callBase(e)}}});Object(b["a"])(k,N);var E=N,I=null,R=function(e,t,o){var l=Object(r["k"])(e)?e:{message:e},c=l.onHidden;Object(s["a"])(l,{type:t,displayTime:o,onHidden:function(e){Object(n["a"])(e.element).remove(),new i["a"](c,{context:e.model}).execute(arguments)}}),I=Object(n["a"])("<div>").appendTo(Object(a["c"])()),new E(I,l).show()};t["a"]=R},db37:function(e,t,o){"use strict";o("33dd")},dc00:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),i={class:"login-link"},a=Object(n["createTextVNode"])(" Return to "),s=Object(n["createTextVNode"])("Sign In"),r={class:"dx-button-text"},l={key:1};function c(e,t,o,c,d,u){var p=Object(n["resolveComponent"])("dx-required-rule"),m=Object(n["resolveComponent"])("dx-email-rule"),h=Object(n["resolveComponent"])("dx-label"),b=Object(n["resolveComponent"])("dx-item"),f=Object(n["resolveComponent"])("dx-button-options"),O=Object(n["resolveComponent"])("dx-button-item"),v=Object(n["resolveComponent"])("router-link"),j=Object(n["resolveComponent"])("dx-load-indicator"),g=Object(n["resolveComponent"])("dx-form");return Object(n["openBlock"])(),Object(n["createBlock"])("form",{class:"reset-password-form",onSubmit:t[1]||(t[1]=Object(n["withModifiers"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(n["createVNode"])(g,{"form-data":c.formData,disabled:c.loading},{resetTemplate:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",null,[Object(n["createVNode"])("span",r,[c.loading?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0,width:"24px",height:"24px",visible:!0})):Object(n["createCommentVNode"])("",!0),c.loading?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("span",l,"Reset my password"))])])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{"data-field":"email","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Email",mode:"email"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p,{message:"Email is required"}),Object(n["createVNode"])(m,{message:"Email is invalid"}),Object(n["createVNode"])(h,{visible:!1})]})),_:1}),Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{"element-attr":{class:"submit-button"},width:"100%",type:"default",template:"resetTemplate","use-submit-behavior":!0})]})),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])("div",i,[a,Object(n["createVNode"])(v,{to:"/login-form"},{default:Object(n["withCtx"])((function(){return[s]})),_:1})])]})),_:1})]})),_:1},8,["form-data","disabled"])],32)}var d=o("1da1"),u=(o("96cf"),o("66dc")),p=o.n(u),m=o("4f34"),h=o.n(m),b=o("cbd3"),f=o("6c02"),O=o("1ab6"),v="We've sent a link to reset your password. Check your inbox.",j={components:{DxForm:p.a,DxItem:u["DxItem"],DxLabel:u["DxLabel"],DxButtonItem:u["DxButtonItem"],DxButtonOptions:u["DxButtonOptions"],DxRequiredRule:u["DxRequiredRule"],DxEmailRule:u["DxEmailRule"],DxLoadIndicator:h.a},setup:function(){var e=Object(f["d"])(),t=Object(n["ref"])(!1),o=Object(n["reactive"])({email:""});function i(){return a.apply(this,arguments)}function a(){return a=Object(d["a"])(regeneratorRuntime.mark((function n(){var i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=o.email,t.value=!0,n.next=4,O["a"].resetPassword(i);case 4:a=n.sent,t.value=!1,a.isOk?(e.push("/login-form"),Object(b["a"])(v,"success",2500)):Object(b["a"])(a.message,"error",2e3);case 7:case"end":return n.stop()}}),n)}))),a.apply(this,arguments)}return{loading:t,formData:o,onSubmit:i}}};o("db37");j.render=c;t["default"]=j}}]);