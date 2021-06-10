(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Barcode-Dom/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e41":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("zxing")},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("header",(function(){return[n("header",[e.showToggleBtnCopy?n("div",{staticClass:"toggle",on:{click:e.toggle}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-iconqiehuanjingtou"}})])]):e._e()])]})),"Camera"===e.parseType?n("div",{staticClass:"page"},[n("video",{class:{video:!e.videoWidth&&!e.videoHeight},attrs:{id:"video",width:e.videoWidth,height:e.videoHeight,autoplay:""}})]):e._e(),"Image"===e.parseType&&"choose"===e.inputId&&e.showDefaultInput?n("input",{attrs:{type:"file",id:"choose",accept:"image/*"}}):e._e(),e._t("default",(function(){return["Camera"===e.parseType&&e.showScanBoxCopy?n("div",{staticClass:"scanBox",style:{width:e.scanBoxWidth,height:e.scanHeight}},[n("div",{staticClass:"frame upperLeft"}),n("div",{staticClass:"frame upperRight"}),n("div",{staticClass:"frame lowerRight"}),n("div",{staticClass:"frame lowerLeft"}),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}],staticClass:"tip"},[e._v(e._s(e.tipMsg))])]):e._e()]})),e._t("other")],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pointerBox"},[n("div",{staticClass:"pointer"})])}],s=n("1da1"),u=(n("96cf"),n("a9e3"),n("b1bc"),n("2127")),l={name:"parser-code",props:{parseType:{type:String,default:"Camera",validator:function(e){var t=-1!==["Camera","Image"].indexOf(e);if(!t)throw new Error("parseType can only be 'Camera' or 'Image'");return!0}},inputId:{type:String,default:"choose"},showDefaultInput:{type:Boolean,default:!0},showScanBox:{type:Boolean,default:!1},showToggleBtn:{type:Boolean,default:!1},videoWidth:{typeof:Number,default:null},videoHeight:{typeof:Number,default:null},scanBoxWidth:{typeof:Number,default:null},scanHeight:{typeof:Number,default:null},success:{type:Function,default:function(e){alert(e)}},fail:{type:Function,default:function(e){alert(e)}},getVideoFail:{type:Function,default:function(e){alert(e)}}},data:function(){return{codeReader:null,tipMsg:"扫描装备条码",tipShow:!0,img:null,reader:null,back:!0,showScanBoxCopy:this.showScanBox,showToggleBtnCopy:this.showToggleBtn,inputDom:null}},computed:{switchPerspective:function(){return this.back?{video:{facingMode:{exact:"environment"}}}:{video:{facingMode:"user"}}}},created:function(){if("Camera"===this.parseType)this.openScan();else{this.reader=new FileReader;var e=this;this.reader.onload=function(t){if(!t.target.result)throw new Error("[FileReader]:Image parsing failed");e.parseStaticImg(t.target.result)}}},mounted:function(){var e=this;"Image"===this.parseType&&this.$nextTick((function(){e.inputDom=document.querySelector("#".concat(e.inputId)),e.inputDom&&e.inputDom.addEventListener("change",e.selectImg(e),!1)}))},methods:{openScan:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new u["BrowserMultiFormatReader"];case 2:e.codeReader=t.sent,e.codeReader.getVideoInputDevices().then((function(t){if(!(t.length>1))return alert("请允许获取摄像头权限后再进行二维码扫描");e.showScanBoxCopy=!0,e.tipShow=!0,e.showToggleBtnCopy=!0,e.tipMsg="扫描装备条码",e.decodeOnceFromConstraintsFunc(e.switchPerspective)})).catch((function(t){e.showScanBoxCopy=!1,e.tipShow=!1,e.getVideoFail(t)}));case 4:case"end":return t.stop()}}),t)})))()},toggle:function(){this.back=!this.back,this.decodeOnceFromConstraintsFunc(this.switchPerspective)},decodeOnceFromConstraintsFunc:function(e){var t=this;this.codeReader.reset(),this.codeReader.decodeOnceFromConstraints(e,"video",(function(e,n){t.tipMsg="正在尝试识别...",e&&e.text&&(t.tipShow=!0,t.success(e.text)),n&&!n&&(t.tipMsg="识别失败",t.fail(n))}))},parseStaticImg:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new u["BrowserMultiFormatReader"];case 2:return t.codeReader=n.sent,a=t.codeReader.decodeFromImage(void 0,e).then((function(e){return t.success(e.text),e.text})).catch((function(e){t.fail(e)})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},selectImg:function(e){return function(){var t=this.files[0];if("image/jpeg"!==t.type&&"image/png"!==t.type&&"image/gif"!==t.type)return this.value="",this.outerHTML=this.outerHTML,void alert("不是有效的图片文件!");this.value="",e.reader.readAsDataURL(t)}}}},d=l,p=(n("ebec"),n("2877")),h=Object(p["a"])(d,i,c,!1,null,null,null),f=h.exports,g={components:{zxing:f}},m=g,v=Object(p["a"])(m,o,r,!1,null,"7207a8bb",null),y=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(y)}}).$mount("#app")},b1bc:function(e,t){!function(e){var t,n,a,o,r,i,c='<svg><symbol id="icon-iconqiehuanjingtou" viewBox="0 0 1024 1024"><path d="M824.106667 821.333333H199.893333L160 779.946667V382.506667a53.973333 53.973333 0 0 1 46.933333-54.4l113.066667-38.826667 30.72-58.026667a52.906667 52.906667 0 0 1 45.866667-28.586666h230.826666a52.693333 52.693333 0 0 1 46.72 28.8l29.866667 57.813333 112.213333 38.826667a53.973333 53.973333 0 0 1 46.933334 54.4v397.44z m-615.04-21.333333h605.866666l27.733334-28.8V382.506667a33.066667 33.066667 0 0 0-29.013334-33.28h-2.346666l-121.386667-42.666667-34.56-65.493333a31.786667 31.786667 0 0 0-27.946667-17.28H396.586667a31.786667 31.786667 0 0 0-27.946667 17.28l-34.56 65.493333-123.733333 42.666667a33.066667 33.066667 0 0 0-29.013334 33.28v388.693333z"  ></path><path d="M618.666667 507.733333a108.16 108.16 0 0 0-207.146667 0l-34.346667-10.24a144 144 0 0 1 276.053334 0zM514.773333 682.666667a143.146667 143.146667 0 0 1-138.026666-102.826667l34.346666-10.24a108.16 108.16 0 0 0 207.146667 0l34.56 10.24A143.146667 143.146667 0 0 1 514.773333 682.666667z"  ></path><path d="M638.08 531.626667l-52.053333-14.08 9.173333-34.773334 34.773333 9.386667 10.026667-34.773333 34.773333 9.386666-14.08 52.053334a17.92 17.92 0 0 1-22.613333 12.8z"  ></path><path d="M656.64 462.08m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M590.506667 500.266667m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M393.173333 534.613333l52.266667 14.08-9.386667 34.773334-34.773333-9.386667-9.386667 34.773333-34.773333-9.173333 14.08-52.266667a17.92 17.92 0 0 1 21.973333-12.8z"  ></path><path d="M374.613333 604.16m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M440.746667 565.973333m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path></symbol></svg>',s=(s=document.getElementsByTagName("script"))[s.length-1].getAttribute("data-injectcss");if(s&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}function u(){r||(r=!0,a())}t=function(){var e,t,n;(n=document.createElement("div")).innerHTML=c,c=null,(t=n.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(n=document.body).firstChild?(t=n.firstChild).parentNode.insertBefore(e,t):n.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(a=t,o=e.document,r=!1,(i=function(){try{o.documentElement.doScroll("left")}catch(e){return void setTimeout(i,50)}u()})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,u())})}(window)},ebec:function(e,t,n){"use strict";n("4e41")}});
//# sourceMappingURL=app.11f6f0e6.js.map