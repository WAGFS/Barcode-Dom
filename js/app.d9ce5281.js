(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Barcode-Dom/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e41":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("zxing")},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("header",(function(){return[n("header",[e.showToggleBtnCopy?n("div",{staticClass:"refresh",on:{click:function(t){return e.decodeOnceFromConstraintsFunc(e.switchPerspective)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-shuaxin"}})])]):e._e(),e.showToggleBtnCopy?n("div",{staticClass:"toggle",on:{click:e.toggle}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-iconqiehuanjingtou"}})])]):e._e()])]})),"Camera"===e.parseType?n("div",{staticClass:"page"},[n("video",{class:{video:!e.videoWidth&&!e.videoHeight},attrs:{id:"video",width:e.videoWidth,height:e.videoHeight,autoplay:""}})]):e._e(),"Image"===e.parseType&&"choose"===e.inputId&&e.showDefaultInput?n("input",{attrs:{type:"file",id:"choose",accept:"image/*"}}):e._e(),e._t("default",(function(){return["Camera"===e.parseType&&e.showScanBoxCopy?n("div",{staticClass:"scanBox",style:{width:e.scanBoxWidth,height:e.scanHeight}},[n("div",{staticClass:"frame upperLeft"}),n("div",{staticClass:"frame upperRight"}),n("div",{staticClass:"frame lowerRight"}),n("div",{staticClass:"frame lowerLeft"}),e._m(0),n("div",{directives:[{name:"show",rawName:"v-show",value:e.tipShow,expression:"tipShow"}],staticClass:"tip"},[e._v(e._s(e.tipMsg))])]):e._e()]})),e._t("other")],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pointerBox"},[n("div",{staticClass:"pointer"})])}],s=n("1da1"),u=(n("96cf"),n("a9e3"),n("b1bc"),n("2127")),l={name:"parser-code",props:{parseType:{type:String,default:"Camera",validator:function(e){var t=-1!==["Camera","Image"].indexOf(e);if(!t)throw new Error("parseType can only be 'Camera' or 'Image'");return!0}},inputId:{type:String,default:"choose"},showDefaultInput:{type:Boolean,default:!0},showScanBox:{type:Boolean,default:!1},showToggleBtn:{type:Boolean,default:!1},videoWidth:{typeof:Number,default:null},videoHeight:{typeof:Number,default:null},scanBoxWidth:{typeof:Number,default:null},scanHeight:{typeof:Number,default:null},success:{type:Function,default:function(){return null}},fail:{type:Function,default:function(){return null}},getVideoFail:{type:Function,default:function(){return null}}},data:function(){return{codeReader:null,tipMsg:"扫描装备条码",tipShow:!0,video:null,img:null,reader:null,back:!0,showScanBoxCopy:this.showScanBox,showToggleBtnCopy:this.showToggleBtn,inputDom:null}},computed:{switchPerspective:function(){return this.back?{video:{facingMode:{exact:"environment"}}}:{video:{facingMode:"user"}}}},created:function(){if("Camera"===this.parseType)this.openScan();else{this.reader=new FileReader;var e=this;this.reader.onload=function(t){if(!t.target.result)throw new Error("[FileReader]:Image parsing failed");e.parseStaticImg(t.target.result)}}},mounted:function(){var e=this;"Image"===this.parseType&&this.$nextTick((function(){e.inputDom=document.querySelector("#".concat(e.inputId)),e.inputDom&&e.inputDom.addEventListener("change",e.selectImg(e),!1)}))},methods:{openScan:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new u["BrowserMultiFormatReader"];case 2:e.codeReader=t.sent,e.codeReader.getVideoInputDevices().then((function(t){if(!(t.length>1))return alert("请允许获取摄像头权限后再进行二维码扫描");e.showScanBoxCopy=!0,e.tipShow=!0,e.showToggleBtnCopy=!0,e.tipMsg="扫描装备条码",e.decodeOnceFromConstraintsFunc(e.switchPerspective)})).catch((function(t){e.showScanBoxCopy=!1,e.tipShow=!1,e.getVideoFail(t)||alert("调取用户摄像头失败")}));case 4:case"end":return t.stop()}}),t)})))()},toggle:function(){this.back=!this.back,this.decodeOnceFromConstraintsFunc(this.switchPerspective)},decodeOnceFromConstraintsFunc:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,navigator.mediaDevices.getUserMedia(e);case 2:return r=n.sent,t.codeReader.reset(),n.next=6,t.attachStreamToVideo(r,videoSource);case 6:return t.video=n.sent,n.next=9,t.decoding(video);case 9:case"end":return n.stop()}}),n)})))()},decoding:function(e){var t=this;this.codeReader.decodeOnce(e).then((function(e){t.tipShow=!0,t.tipMsg="正在尝试识别...",e&&e.text&&(t.success(e.text)||alert(e.text),t.tipMsg="扫描装备条码",t.decoding(t.video))}),(function(e){e&&(t.tipMsg="识别失败",t.fail(e)||alert(e),setTimeout((function(){t.tipShow=!1}),2e3))}))},parseStaticImg:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new u["BrowserMultiFormatReader"];case 2:return t.codeReader=n.sent,r=t.codeReader.decodeFromImage(void 0,e).then((function(e){return t.success(e.text)||alert(e.text),e.text})).catch((function(e){t.fail(e)||alert(e)})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},selectImg:function(e){return function(){var t=this.files[0];if("image/jpeg"!==t.type&&"image/png"!==t.type&&"image/gif"!==t.type)return this.value="",this.outerHTML=this.outerHTML,void alert("不是有效的图片文件!");this.value="",e.reader.readAsDataURL(t)}}}},d=l,p=(n("ebec"),n("2877")),h=Object(p["a"])(d,o,c,!1,null,null,null),f=h.exports,g={components:{zxing:f}},m=g,v=Object(p["a"])(m,a,i,!1,null,"7207a8bb",null),y=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},b1bc:function(e,t){!function(e){var t,n,r,a,i,o,c='<svg><symbol id="icon-shuaxin" viewBox="0 0 1024 1024"><path d="M508.66015625 821.90234375c-41.66015625 0-82.00195313-8.17382813-120.05859375-24.2578125-36.73828125-15.55664063-69.69726563-37.79296875-97.99804688-66.09375s-50.53710938-61.25976563-66.09374999-97.99804688c-16.08398438-38.05664063-24.2578125-78.3984375-24.2578125-120.05859374s8.17382813-82.00195313 24.2578125-120.05859375c15.55664063-36.73828125 37.79296875-69.69726563 66.09375-97.99804688s61.25976563-50.53710938 97.99804687-66.09375c38.05664063-16.08398438 78.3984375-24.2578125 120.05859375-24.2578125 66.18164063 0 129.28710938 20.65429688 182.4609375 59.765625 4.39453125 3.25195313 8.87695313 6.6796875 13.09570313 10.1953125 10.10742188 8.34960938 11.6015625 23.29101563 3.25195312 33.3984375s-23.29101563 11.6015625-33.3984375 3.25195313c-3.60351563-2.98828125-7.3828125-5.88867188-11.07421875-8.61328125-45-33.046875-98.34960938-50.53710938-154.3359375-50.53710938-143.87695313 0-260.94726563 117.0703125-260.94726563 260.94726563s117.0703125 260.94726563 260.94726563 260.94726562 260.94726563-117.0703125 260.94726563-260.94726563c0-13.09570313 10.63476563-23.73046875 23.73046874-23.73046874s23.73046875 10.63476563 23.73046875 23.73046875c0 41.66015625-8.17382813 82.00195313-24.2578125 120.05859374-15.55664063 36.73828125-37.79296875 69.69726563-66.09374999 97.99804688s-61.25976563 50.53710938-97.99804688 66.09375c-37.96875 16.08398438-78.3984375 24.2578125-120.05859375 24.2578125z"  ></path><path d="M581.609375 348.875c-10.72265625 0-20.390625-7.29492188-23.02734375-18.19335938-3.07617188-12.74414063 4.74609375-25.57617188 17.49023438-28.65234374l92.63671874-22.32421876-11.42578125-102.56835937c-1.49414063-13.0078125 7.91015625-24.78515625 20.91796875-26.19140625 13.0078125-1.49414063 24.78515625 7.91015625 26.19140625 20.91796875l13.7109375 123.3984375c1.31835938 11.86523438-6.41601563 22.93945313-18.01757812 25.6640625l-113.02734375 27.24609375c-1.7578125 0.43945313-3.60351563 0.703125-5.44921875 0.703125z"  ></path></symbol><symbol id="icon-iconqiehuanjingtou" viewBox="0 0 1024 1024"><path d="M824.106667 821.333333H199.893333L160 779.946667V382.506667a53.973333 53.973333 0 0 1 46.933333-54.4l113.066667-38.826667 30.72-58.026667a52.906667 52.906667 0 0 1 45.866667-28.586666h230.826666a52.693333 52.693333 0 0 1 46.72 28.8l29.866667 57.813333 112.213333 38.826667a53.973333 53.973333 0 0 1 46.933334 54.4v397.44z m-615.04-21.333333h605.866666l27.733334-28.8V382.506667a33.066667 33.066667 0 0 0-29.013334-33.28h-2.346666l-121.386667-42.666667-34.56-65.493333a31.786667 31.786667 0 0 0-27.946667-17.28H396.586667a31.786667 31.786667 0 0 0-27.946667 17.28l-34.56 65.493333-123.733333 42.666667a33.066667 33.066667 0 0 0-29.013334 33.28v388.693333z"  ></path><path d="M618.666667 507.733333a108.16 108.16 0 0 0-207.146667 0l-34.346667-10.24a144 144 0 0 1 276.053334 0zM514.773333 682.666667a143.146667 143.146667 0 0 1-138.026666-102.826667l34.346666-10.24a108.16 108.16 0 0 0 207.146667 0l34.56 10.24A143.146667 143.146667 0 0 1 514.773333 682.666667z"  ></path><path d="M638.08 531.626667l-52.053333-14.08 9.173333-34.773334 34.773333 9.386667 10.026667-34.773333 34.773333 9.386666-14.08 52.053334a17.92 17.92 0 0 1-22.613333 12.8z"  ></path><path d="M656.64 462.08m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M590.506667 500.266667m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M393.173333 534.613333l52.266667 14.08-9.386667 34.773334-34.773333-9.386667-9.386667 34.773333-34.773333-9.173333 14.08-52.266667a17.92 17.92 0 0 1 21.973333-12.8z"  ></path><path d="M374.613333 604.16m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path><path d="M440.746667 565.973333m-17.92 0a17.92 17.92 0 1 0 35.84 0 17.92 17.92 0 1 0-35.84 0Z"  ></path></symbol></svg>',s=(s=document.getElementsByTagName("script"))[s.length-1].getAttribute("data-injectcss");if(s&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}function u(){i||(i=!0,r())}t=function(){var e,t,n;(n=document.createElement("div")).innerHTML=c,c=null,(t=n.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(n=document.body).firstChild?(t=n.firstChild).parentNode.insertBefore(e,t):n.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(r=t,a=e.document,i=!1,(o=function(){try{a.documentElement.doScroll("left")}catch(e){return void setTimeout(o,50)}u()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,u())})}(window)},ebec:function(e,t,n){"use strict";n("4e41")}});
//# sourceMappingURL=app.d9ce5281.js.map