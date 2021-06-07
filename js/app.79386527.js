(function(e){function t(t){for(var n,o,u=t[0],c=t[1],s=t[2],p=0,l=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["Camera"===e.parseType?r("div",{staticClass:"page"},[r("video",{class:{video:!e.videoWidth&&!e.videoHeight},attrs:{id:"video",width:e.videoWidth,height:e.videoHeight,autoplay:""}})]):e._e(),"Image"===e.parseType&&"choose"===e.inputId&&e.showDefaultInput?r("input",{attrs:{type:"file",id:"choose",accept:"image/*"}}):e._e(),e._t("default",(function(){return["Camera"===e.parseType?r("div",{staticClass:"scanBox"},[r("div",{staticClass:"frame upperLeft"}),r("div",{staticClass:"frame upperRight"}),r("div",{staticClass:"frame lowerRight"}),r("div",{staticClass:"frame lowerLeft"}),e._m(0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}],staticClass:"tip"},[e._v(e._s(e.tipMsg))])]):e._e()]}))],2)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pointerBox"},[r("div",{staticClass:"pointer"})])}],o=r("1da1"),u=(r("96cf"),r("a9e3"),r("63b8"),r("2127")),c={name:"qr-code-search",props:{parseType:{type:String,default:"Camera",validator:function(e){var t=-1!==["Camera","Image"].indexOf(e);if(!t)throw new Error("parseType can only be 'Camera' or 'Image'");return!0}},inputId:{type:String,default:"choose"},showDefaultInput:{type:Boolean,default:!0},videoWidth:{typeof:Number,default:null},videoHeight:{typeof:Number,default:null},success:{type:Function,default:function(){}},fail:{type:Function,default:function(){}}},data:function(){return{codeReader:null,tipMsg:"正在尝试识别....",tipShow:!0,img:null,reader:null,inputDom:null}},created:function(){if("Camera"===this.parseType)this.openScan();else{var e=this;this.reader=new FileReader,this.reader.onload=function(t){if(!t.target.result)throw new Error("[FileReader]:Image parsing failed");e.parseStaticImg(t.target.result)}}},mounted:function(){var e=this;"Image"===this.parseType&&this.$nextTick((function(){e.inputDom=document.querySelector("#".concat(e.inputId)),e.inputDom&&e.inputDom.addEventListener("change",e.selectImg(e),!1)}))},methods:{openScan:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new u["BrowserMultiFormatReader"];case 2:e.codeReader=t.sent,e.codeReader.getVideoInputDevices().then((function(t){e.tipShow=!0,e.tipMsg="正在调用后置摄像头...",console.log("videoInputDevices",t);var r=t[0].deviceId,n=JSON.stringify(t[0].label);t.length>1&&(r=n.indexOf("back")>-1?t[0].deviceId:t[1].deviceId),e.decodeFromInputVideoFunc(r)})).catch((function(t){e.tipShow=!1,console.error(t)}));case 4:case"end":return t.stop()}}),t)})))()},decodeFromInputVideoFunc:function(e){var t=this;this.codeReader.reset(),this.codeReader.decodeFromInputVideoDeviceContinuously(e,"video",(function(e,r){t.tipMsg="正在尝试识别...",e&&e.text&&(t.tipShow=!0,alert(e.text),t.success(e.text)),r&&!r&&(t.tipMsg="识别失败",t.fail(r),console.error(r))}))},parseStaticImg:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,new u["BrowserMultiFormatReader"];case 2:return t.codeReader=r.sent,n=t.codeReader.decodeFromImage(void 0,e).then((function(e){return console.log(e.text),t.success(e.text),e.text})).catch((function(e){t.fail(e)})),r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})))()},selectImg:function(e){return function(){var t=this.files[0];if("image/jpeg"!==t.type&&"image/png"!==t.type&&"image/gif"!==t.type)return this.value="",this.outerHTML=this.outerHTML,void alert("不是有效的图片文件!");this.value="",e.reader.readAsDataURL(t)}}}},s=c,d=(r("034f"),r("2877")),p=Object(d["a"])(s,i,a,!1,null,null,null),l=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.79386527.js.map