(function(e){function t(t){for(var n,o,s=t[0],d=t[1],l=t[2],i=0,b=[];i<s.length;i++)o=s[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,s=1;s<a.length;s++){var d=a[s];0!==r[d]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"093c":function(e,t,a){"use strict";a("61c7")},"0ffe":function(e,t,a){"use strict";a("85e1")},"61c7":function(e,t,a){},"85e1":function(e,t,a){},9278:function(e,t,a){"use strict";a("eeb1")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=(a("ac1f"),a("841c"),a("466d"),a("5502")),c=a("d4ec"),o=a("bee2"),s=(a("d81d"),a("5319"),a("498a"),a("99af"),Object(r["a"])({state:{address:{legalAddress:"서울 중구 서소문동 37",adminAddress:"서울 중구 소공동 37",roadAddress:"서울 중구 덕수궁길 15 서울시청 서소문별관",zipCode:"04515",legalCode:"1114016600",adminCode:"1114052000",roadCode:"111404103076",coords:{x:"126.975653509532",y:"37.5643639030785"}},error:null},mutations:{setAddress:function(e,t){e.address=t},setError:function(e,t){e.error=t}}})),d=function(){function e(){Object(c["a"])(this,e),this.geocoder=new window.kakao.maps.services.Geocoder}return Object(o["a"])(e,[{key:"updateStateByAddress",value:function(e){var t=this;this.geocoder.addressSearch(e,(function(e,a){if(a===window.kakao.maps.services.Status.OK){var n=e[0];s.commit("setAddress",t.map(n))}else s.commit("setError","주소 검색 실패: ".concat(a))}))}},{key:"updateStateByCoords",value:function(e,t){var a=this;this.geocoder.coord2Address(e,t,(function(n,r){if(r===window.kakao.maps.services.Status.OK){var c=n[0],o=a.map(c,e,t);a.updateStateByAddress(o.legalAddress)}else s.commit("setError","좌표 검색 실패: ".concat(r))}))}},{key:"map",value:function(e,t,a){var n,r,c={legalAddress:e.address.address_name,legalCode:e.address.b_code,adminCode:e.address.h_code,coords:{x:null!==(n=e.x)&&void 0!==n?n:t,y:null!==(r=e.y)&&void 0!==r?r:a}};return e.address.region_3depth_h_name&&(c.adminAddress=e.address.address_name.replace(e.address.region_3depth_name,e.address.region_3depth_h_name)),e.road_address&&(e.road_address.address_name&&(c.roadAddress="".concat(e.road_address.address_name," ").concat(e.road_address.building_name).trim()),e.road_address.zone_no&&(c.zipCode=e.road_address.zone_no)),c}}]),e}(),l=(a("1276"),["id","value"]),u=Object(n["k"])({props:{id:null,modelValue:null},setup:function(e){return function(t,a){return Object(n["o"])(),Object(n["g"])("input",{type:"text",class:"form-control",id:e.id,value:e.modelValue,onChange:a[0]||(a[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,40,l)}}});const i=u;var b=i,j={class:"input-group"},O=Object(n["h"])("span",{class:"input-group-btn"},[Object(n["h"])("button",{type:"button",class:"btn","data-clipboard-target":"#url"},[Object(n["h"])("span",{class:"glyphicon glyphicon-copy"})])],-1),p=Object(n["k"])({props:{id:null,modelValue:null},setup:function(e){new window.Clipboard(".btn");return function(t,a){return Object(n["o"])(),Object(n["g"])("div",j,[Object(n["j"])(b,{id:e.id,modelValue:e.modelValue},null,8,["id","modelValue"]),O])}}});const f=p;var m=f,v={class:"form-horizontal"},h={class:"form-group col-md-4"},g={class:"form-group col-md-4"},y={class:"form-group col-md-4"},w=Object(n["k"])({setup:function(e){var t=Object(r["b"])(),a=Object(n["s"])(t.state.address.legalAddress),c=Object(n["s"])("".concat(t.state.address.coords.x,",").concat(t.state.address.coords.y)),o=new d;t.watch((function(e){return e.address}),(function(e){a.value=e.legalAddress,c.value="".concat(e.coords.x,",").concat(e.coords.y)}));var s=function(){o.updateStateByAddress(a.value)},l=function(){var e=c.value.split(",");o.updateStateByCoords(e[0],e[1])},u=Object(n["c"])((function(){var e=document.createElement("a");e.href=window.location.href;var a=e.port.length>0?":"+e.port:"";return"".concat(e.protocol,"//").concat(e.hostname).concat(a,"?x=").concat(t.state.address.coords.x,"&y=").concat(t.state.address.coords.y)}));return function(e,t){return Object(n["o"])(),Object(n["g"])("form",v,[Object(n["h"])("div",h,[Object(n["j"])(b,{id:"inputAddress",modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.value=e}),onKeyup:Object(n["y"])(s,["enter"])},null,8,["modelValue","onKeyup"])]),Object(n["h"])("div",g,[Object(n["j"])(b,{id:"coordsStr",modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.value=e}),onKeyup:Object(n["y"])(l,["enter"])},null,8,["modelValue","onKeyup"])]),Object(n["h"])("div",y,[Object(n["j"])(Object(n["u"])(m),{id:"url",modelValue:Object(n["u"])(u),"onUpdate:modelValue":t[2]||(t[2]=function(e){return Object(n["m"])(u)?u.value=e:null})},null,8,["modelValue"])])])}}});const k=w;var _=k,C=function(e){return Object(n["q"])("data-v-323274f9"),e=e(),Object(n["p"])(),e},A={key:0},x=C((function(){return Object(n["h"])("span",{class:"label label-primary"},"법정주소",-1)})),S={key:1},V=C((function(){return Object(n["h"])("span",{class:"label label-primary"},"행정주소",-1)})),L={key:2},z=C((function(){return Object(n["h"])("span",{class:"label label-primary"},"도로명주소",-1)})),P={style:{"font-size":"0.8em"}},B={key:0},E=C((function(){return Object(n["h"])("span",{class:"label label-default"},"우편번호",-1)})),K={key:1},M=C((function(){return Object(n["h"])("span",{class:"label label-default"},"법정코드",-1)})),q={key:2},I=C((function(){return Object(n["h"])("span",{class:"label label-default"},"행정코드",-1)})),T={key:3},U=C((function(){return Object(n["h"])("span",{class:"label label-default"},"도로명코드",-1)})),J=Object(n["k"])({setup:function(e){var t=Object(r["b"])();return function(e,a){return Object(n["o"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("p",null,[Object(n["u"])(t).state.address.legalAddress?(Object(n["o"])(),Object(n["g"])("span",A,[x,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.legalAddress),1)])):Object(n["f"])("",!0),Object(n["u"])(t).state.address.adminAddress?(Object(n["o"])(),Object(n["g"])("span",S,[V,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.adminAddress),1)])):Object(n["f"])("",!0),Object(n["u"])(t).state.address.roadAddress?(Object(n["o"])(),Object(n["g"])("span",L,[z,Object(n["i"])(Object(n["t"])(Object(n["u"])(t).state.address.roadAddress),1)])):Object(n["f"])("",!0)]),Object(n["h"])("p",P,[Object(n["u"])(t).state.address.zipCode?(Object(n["o"])(),Object(n["g"])("span",B,[E,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.zipCode),1)])):Object(n["f"])("",!0),Object(n["u"])(t).state.address.legalCode?(Object(n["o"])(),Object(n["g"])("span",K,[M,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.legalCode),1)])):Object(n["f"])("",!0),Object(n["u"])(t).state.address.adminCode?(Object(n["o"])(),Object(n["g"])("span",q,[I,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.adminCode),1)])):Object(n["f"])("",!0),Object(n["u"])(t).state.address.roadCode?(Object(n["o"])(),Object(n["g"])("span",T,[U,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.address.roadCode),1)])):Object(n["f"])("",!0)])],64)}}}),G=(a("e50e"),a("6b0d")),$=a.n(G);const D=$()(J,[["__scopeId","data-v-323274f9"]]);var F=D,H=function(e){return Object(n["q"])("data-v-5a90f3c5"),e=e(),Object(n["p"])(),e},N={class:"panel panel-default"},Q=H((function(){return Object(n["h"])("div",{class:"map-wrapper pannel-body"},[Object(n["h"])("div",{id:"map"})],-1)})),R=[Q],W=Object(n["k"])({setup:function(e){var t=Object(r["b"])(),a=new d,c=null,o=null,s=null,l=null;return t.watch((function(e){return e.address}),(function(e){o=new window.kakao.maps.LatLng(e.coords.y,e.coords.x),s.setCenter(o),l.setPosition(o)}),{deep:!0}),Object(n["n"])((function(){c=document.querySelector("div#map"),o=new window.kakao.maps.LatLng(t.state.address.coords.y,t.state.address.coords.x),s=new window.kakao.maps.Map(c,{center:o,level:4}),l=new window.kakao.maps.Marker({map:s,position:o,dgrggable:!0}),window.window.kakao.maps.event.addListener(s,"click",(function(e){a.updateStateByCoords(e.latLng.getLng(),e.latLng.getLat())}))})),function(e,t){return Object(n["o"])(),Object(n["g"])("div",N,R)}}});a("9278");const X=$()(W,[["__scopeId","data-v-5a90f3c5"]]);var Y=X,Z=function(e){return Object(n["q"])("data-v-dd8d4ec8"),e=e(),Object(n["p"])(),e},ee={class:"alert alert-danger alert-dismissible",role:"alert"},te=Z((function(){return Object(n["h"])("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")],-1)})),ae=Z((function(){return Object(n["h"])("strong",null,"Error!",-1)})),ne=Object(n["k"])({setup:function(e){var t=Object(r["b"])();t.watch((function(e){return e.error}),(function(e){e&&setTimeout((function(){t.commit("setError",null)}),3e3)}));return function(e,a){return Object(n["x"])((Object(n["o"])(),Object(n["g"])("div",ee,[te,ae,Object(n["i"])(" "+Object(n["t"])(Object(n["u"])(t).state.error),1)],512)),[[n["v"],Object(n["u"])(t).state.error]])}}});a("0ffe");const re=$()(ne,[["__scopeId","data-v-dd8d4ec8"]]);var ce=re,oe=Object(n["h"])("div",{class:"row"},[Object(n["h"])("h2",{class:"page-header"},"주소/좌표로 위치 확인하기"),Object(n["h"])("ul",{class:"help-block"},[Object(n["h"])("li",null,[Object(n["h"])("small",null,"입력창에 주소 또는 좌표를 입력하고 엔터를 눌러 지도상의 위치를 확인할 수 있습니다.")]),Object(n["h"])("li",null,[Object(n["h"])("small",null,"반대로 마우스로 지도상의 위치를 클릭하여 주소, 좌표, 행정구역코드를 확인할 수 있습니다.")]),Object(n["h"])("li",null,[Object(n["h"])("small",null,"건물이 있는 위치를 선택했을때만 도로명이 출력됩니다.")])])],-1),se={class:"row"},de={class:"row"},le={class:"row"},ue=Object(n["k"])({setup:function(e){var t=Object(r["b"])();return Object(n["n"])((function(){var e=window.location.search.substring(1);if(0!==e.length){var a=e.match(/x=([0-9]+\.[0-9]+)&y=([0-9]+\.[0-9]+)/);if(null===a||a.length<3)t.commit("setError","url에 포함된 x, y 형식이 틀립니다: ".concat(e));else{var n=new d;n.updateStateByCoords(a[1],a[2])}}})),function(e,t){return Object(n["o"])(),Object(n["g"])(n["a"],null,[oe,Object(n["h"])("div",se,[Object(n["j"])(_)]),Object(n["h"])("div",de,[Object(n["j"])(F)]),Object(n["h"])("div",le,[Object(n["j"])(Y)]),(Object(n["o"])(),Object(n["e"])(n["b"],{to:"#alert"},[Object(n["j"])(ce)]))],64)}}});a("093c");const ie=ue;var be=ie;Object(n["d"])(be).use(s).mount("#app")},e50e:function(e,t,a){"use strict";a("fcd8")},eeb1:function(e,t,a){},fcd8:function(e,t,a){}});
//# sourceMappingURL=app.c3b06638.js.map