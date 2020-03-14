(this["webpackJsonpcovid-19-mask-map"]=this["webpackJsonpcovid-19-mask-map"]||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=(a(89),a(6)),s=Object(n.createContext)({mapObj:null,setMapObj:function(){},maskStores:{},setMaskStores:function(){},centerCoord:null,setCenterCoord:function(){},markerFilter:{plenty:!0,some:!0,few:!0,empty:!1},setMarkerFilter:function(){}});function i(e){var t=e.children,a=Object(n.useState)(null),c=Object(l.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)([]),m=Object(l.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(null),b=Object(l.a)(p,2),h=b[0],v=b[1],E=Object(n.useState)({plenty:!0,some:!0,few:!0,empty:!1}),g=Object(l.a)(E,2),k=g[0],w=g[1];return r.a.createElement(s.Provider,{value:{mapObj:o,setMapObj:i,maskStores:d,setMaskStores:f,centerCoord:h,setCenterCoord:v,markerFilter:k,setMarkerFilter:w}},t)}function u(){var e=Object(n.useContext)(s);if(void 0===e)throw new Error("useMaskData must be used within a MaskDataContextProvider");return e}var m=a(13),d=a(19),f=a(76),p=a(21),b=a(132),h=a(133),v=a(130),E=a(68),g=a.n(E);var k=function(){var e=Object(m.b)(),t=e.t,a=e.i18n;return r.a.createElement(b.a,{bg:"light",expand:"lg",className:"mb-3 navbar-mobile-thin"},r.a.createElement(b.a.Brand,{href:"/"},r.a.createElement("img",{src:g.a,width:"24px",alt:"\uacf5\uc801 \ub9c8\uc2a4\ud06c \uc9c0\ub3c4 \ub85c\uace0",className:"mr-2"}),t("appName")),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"ml-auto"},r.a.createElement(v.a,{title:"\ud83c\udf10 Language"},r.a.createElement(v.a.Item,{onClick:function(){return a.changeLanguage("ko")}},"\ud55c\uad6d\uc5b4"),r.a.createElement(v.a.Item,{onClick:function(){return a.changeLanguage("en")}},"English")),r.a.createElement(h.a.Link,{href:"https://livecorona.co.kr"},r.a.createElement(d.a,{icon:p.a,size:"lg"})," ",t("covid19Dashboard")),r.a.createElement(h.a.Link,{href:"https://github.com/LiveCoronaDetector/"},r.a.createElement(d.a,{icon:f.a,size:"lg"})," ",t("github")))))},w=a(9),j=a.n(w),O=a(33),y=a(125),S=a(75),C=a(77),x=a(47),M=a.n(x),F=a(131),L=a(126),N=a(79),_=a(78),I=a.n(_);var z=function(){var e=Object(C.a)(),t=Object(n.useState)(null),a=Object(l.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),f=i[0],b=i[1],h=u(),v=(h.centerCoord,h.setCenterCoord),E=Object(m.b)().t,g=Object(n.useState)(""),k=Object(l.a)(g,2),w=k[0],x=k[1],_=function(){var e=Object(O.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat("https://api.livecorona.co.kr","/?address=").concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("Failed to retrieve geocoding for: "+t);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x(localStorage.getItem("lastSearchedAddress"))}),[]),Object(n.useEffect)((function(){if(e){try{navigator.permissions.query({name:"geolocation"}).then((function(e){o(e.state)}))}catch(a){console.error(a),o("unknown")}if(f&&(null!=e.accuracy||null!=e.latitude||null!=e.longitude)){var t={lat:e.latitude,lng:e.longitude};v(t),console.log(t)}}}),[e,f,v]);var z=function(){var e=Object(O.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(w.length<1)){e.next=3;break}return alert("\uc8fc\uc18c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694."),e.abrupt("return");case 3:return localStorage.setItem("lastSearchedAddress",w),e.prev=4,e.next=7,_(w);case 7:t=e.sent,e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error(e.t0),alert("\uc8fc\uc18c\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc2ed\uc2dc\uc624."),e.abrupt("return");case 15:if(console.log(t.data),t.data.meta.totalCount){e.next=19;break}return alert("\uc8fc\uc18c\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc2ed\uc2dc\uc624."),e.abrupt("return");case 19:a={lat:t.data.addresses[0].y,lng:t.data.addresses[0].x},v(a);case 21:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(L.a,null,r.a.createElement(N.a,null,r.a.createElement("div",{className:"text-center mb-5"},r.a.createElement("img",{src:I.a,alt:"\uacf5\uc801 \ub9c8\uc2a4\ud06c \ud310\ub9e4\ucc98",width:"100vw",className:"mb-3"}),r.a.createElement("h1",null,E("searchMaskStores"))))),r.a.createElement(L.a,{className:"justify-content-center mb-3 text-center"},r.a.createElement(N.a,{sm:12,md:6,lg:5},r.a.createElement(F.a,{onSubmit:function(e){e.preventDefault(),z()}},r.a.createElement(F.a.Group,{controlId:"formBasicEmail"},r.a.createElement(F.a.Label,null,E("addressInputLabel")),r.a.createElement(F.a.Control,{type:"text",placeholder:"",value:w,onChange:function(e){return x(e.target.value)}}),r.a.createElement(F.a.Text,{className:"text-muted"},E("addressInputExample"))),r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(S.a,{variant:"primary",className:"mb-2",onClick:z},r.a.createElement(d.a,{icon:p.d})," ",E("searchByAddress")),r.a.createElement(S.a,{variant:"outline-primary",onClick:function(){"granted"!==c&&alert("\uc704\uce58 \uad8c\ud55c\uc744 \ube0c\ub77c\uc6b0\uc800 \uc124\uc815\uc5d0\uc11c \ud5c8\uc6a9\ud574\uc57c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),b(!0)}},r.a.createElement(d.a,{icon:p.c})," ",E("searchByGeoloc"))))))))},D=a(48),B=a(80),A=a(134),T=a(129),G=a(83),P=a(53),W=a.n(P),H=a(127);var J=function(e){var t,a,n=e.remainingStockStr,c=Object(m.b)().t;switch(n){case"plenty":t="success",a=c("badge.plenty");break;case"some":t="warning",a=c("badge.some");break;case"few":t="danger",a=c("badge.few");break;case"empty":t="light",a=c("badge.empty");break;case"break":t="secondary",a=c("badge.break");break;default:t="light",a="?"}return r.a.createElement(H.a,{variant:t},a)},Z=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(l.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)([]),f=Object(l.a)(d,2),p=f[0],b=f[1],h=Object(n.useState)([]),v=Object(l.a)(h,2),E=v[0],g=v[1],k=Object(n.useState)([]),w=Object(l.a)(k,2),j=w[0],O=w[1],y=Object(n.useState)([]),S=Object(l.a)(y,2),C=S[0],x=S[1],M=u().markerFilter,F=Object(n.useCallback)((function(e,t){if(window.naver||window.naver.maps){var a=[],n=[],c=[],o=[],l=[];t.forEach((function(t){var s;if(void 0!==t.remain_stat&&null!==t.remain_stat&&"empty"!==t.remain_stat&&"break"!==t.remain_stat){switch(t.remain_stat){case"plenty":s="green_circle.png";break;case"some":s="yellow_circle.png";break;case"few":s="red_circle.png";break;case"empty":case"break":s="gray_circle.png";break;default:s="gray_circle.png"}var i=new window.naver.maps.Marker({map:e,position:{lat:t.lat,lng:t.lng},icon:{url:"./".concat(s),size:new window.naver.maps.Size(10,10)}}),u='\n            <div style="font-size: 0.85rem; padding: 5px; width: 200px !important;">\n                <h5 style="font-size: 1rem">'.concat(t.name,'</h5>\n                <p className="mb-0 pb-0">').concat(t.addr,"<br />\n                \ub0a8\uc740 \uc218\ub7c9: ").concat(W.a.renderToString(r.a.createElement(J,{remainingStockStr:t.remain_stat})),' | <a href="https://map.naver.com/v5/search/').concat(t.name,'" target="_blank" rel="noopener noreferrer"\n                >\uae38\ucc3e\uae30</a> </p>\n            </div>'),m=new window.naver.maps.InfoWindow({content:u});switch(window.naver.maps.Event.addListener(i,"mouseover",(function(t){m.open(e,i)})),window.naver.maps.Event.addListener(i,"click",(function(t){m.open(e,i)})),t.remain_stat){case"plenty":a.push(i);break;case"some":n.push(i);break;case"few":c.push(i);break;case"empty":o.push(i);break;case"break":l.push(i);break;default:o.push(i)}}})),L(),m(a),b(n),g(c),O(c),x(c)}}),[M]),L=Object(n.useCallback)((function(){a.forEach((function(e){e.setMap(null)})),i.forEach((function(e){e.setMap(null)})),E.forEach((function(e){e.setMap(null)})),p.forEach((function(e){e.setMap(null)})),j.forEach((function(e){e.setMap(null)})),C.forEach((function(e){e.setMap(null)})),c([])}),[a,i,E,p,j,C]);return{addMarker:function(e,t){if(window.naver||window.naver.maps){var a=new window.naver.maps.Marker({map:e,position:{lat:t.lat,lng:t.lng}}),n='\n            <div style="font-size: 0.1rem; padding: 15px;">\n                <h5 style="font-size: 13px">'.concat(t.name,"</h5>\n                <p>").concat(t.addr,"<br />\n                \ub0a8\uc740 \uc218\ub7c9: ").concat(W.a.renderToString(r.a.createElement(J,{remainingStockStr:t.remain_stat})),"</p>\n            </div>"),o=new window.naver.maps.InfoWindow({content:n});window.naver.maps.Event.addListener(a,"mouseover",(function(t){o.open(e,a)})),window.naver.maps.Event.addListener(a,"click",(function(t){o.open(e,a)})),c((function(e){return[].concat(Object(G.a)(e),[a])}))}},addColorIndicatorMarkers:F,resetMarker:L}},q=function(){return Object(n.useCallback)((function(e,t){if(t={center:{lat:36.377165,lng:127.533382},zoom:1,zoomControl:!0,disableDoubleClickZoom:!0},window.naver&&e.current)return new window.naver.maps.Map(e.current,t)}),[])};var R=function(){var e=u().setMapObj,t=Object(n.useRef)(),a=q();return Object(n.useEffect)((function(){e(a(t))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"map",ref:t,style:{minHeight:"45vh",height:"45vh",maxHeight:"65vh"}}))},V=(a(122),a(128));var $=function(){var e=Object(m.b)().t,t=u().maskStores;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,e("storeData.name")),r.a.createElement("th",null,e("storeData.stockCount")),r.a.createElement("th",null,e("storeData.address")))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement(J,{remainingStockStr:e.remain_stat})),r.a.createElement("td",null,e.addr))})))))};var K=function(){var e=Object(m.b)(),t=e.t,a=e.i18n;Object(n.useEffect)((function(){a.changeLanguage("ko")}),[]);var c=u(),o=c.mapObj,s=c.maskStores,i=c.setMaskStores,f=c.centerCoord,b=c.setCenterCoord,h=Z(),v=(h.addMarker,h.addColorIndicatorMarkers),E=h.resetMarker,g=Object(n.useState)(!1),k=Object(l.a)(g,2),w=k[0],C=k[1],x=Object(n.useState)(!1),F=Object(l.a)(x,2),_=F[0],I=F[1],z=Object(n.useState)(!0),G=Object(l.a)(z,2),P=G[0],W=G[1],H=Object(n.useState)({plenty:!0,some:!0,few:!0,empty:!1}),q=Object(l.a)(H,2),V=q[0],K=q[1],Q=Object(n.useCallback)((function(e){var t=["plenty","some","few","empty","break",null,void 0];e.sort((function(e,a){return t.indexOf(e.remain_stat)-t.indexOf(a.remain_stat)})),i(e)}),[i]),U=function(e){var t=e.target;console.log(t),K((function(e){return Object(B.a)({},e,Object(D.a)({},t.name,t.checked))}))};return Object(n.useEffect)((function(){console.log(V)}),[V]),Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(j.a.mark((function e(t,a){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(t.lat,"&lng=").concat(t.lng,"&m=").concat(a),e.prev=1,C(!0),e.next=5,M()(n);case 5:r=e.sent,C(!1),e.next=15;break;case 9:throw e.prev=9,e.t0=e.catch(1),console.error("An error occurred in fetchStoresByGeo:",e.t0),I(!0),C(!1),Error("Failed");case 15:return e.abrupt("return",r.data.stores);case 16:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}();(function(){var t=Object(O.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(),console.log("Fetching store data..."),t.prev=2,t.next=5,e(f,5e3);case 5:a=t.sent,console.log("New store data fetched"),console.log(a),E(),Q(a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.error("Failed to fetch data");case 15:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(){return t.apply(this,arguments)}})()()}),[f,Q]),Object(n.useEffect)((function(){o&&(o.setCenter(f),o.setZoom(14))}),[o,f]),Object(n.useEffect)((function(){o&&v(o,s)}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement(y.a,{id:"mainContainer"},r.a.createElement(L.a,null,r.a.createElement(N.a,{sm:12},P&&r.a.createElement(A.a,{variant:"warning",onClose:function(){return W(!1)},dismissible:!0},r.a.createElement(d.a,{icon:p.b})," ",t("notice.apiIsInBeta")))),r.a.createElement(L.a,null,r.a.createElement(N.a,{md:6},r.a.createElement(R,null),r.a.createElement(S.a,{variant:"outline-primary",className:"mt-1 mb-1",block:!0,onClick:function(){var e=o.getCenter();b({lat:e.y,lng:e.x})}},r.a.createElement(d.a,{icon:p.c})," ",t("refreshMapStores"))),r.a.createElement(N.a,{md:6},_&&r.a.createElement(A.a,{variant:"danger",className:"mt-1"},r.a.createElement(d.a,{icon:p.b})," ",t("error.failedToLoadData")),r.a.createElement("div",{className:"border p-1 mb-1 d-flex flex-row justify-content-between"},r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",disabled:!0,class:"form-check-input",id:"showPlentyStores",name:"plenty",defaultChecked:V.plenty,value:V.plenty,onChange:U}),r.a.createElement("label",{class:"form-check-label",for:"showPlentyStores"},r.a.createElement(J,{remainingStockStr:"plenty"})," ","100\uac1c +")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",disabled:!0,class:"form-check-input",id:"showSomeStores",name:"some",defaultChecked:V.some,value:V.some,onChange:U}),r.a.createElement("label",{class:"form-check-label",for:"showSomeStores"},r.a.createElement(J,{remainingStockStr:"some"})," ","30-100")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",disabled:!0,class:"form-check-input",id:"showFewStores",name:"few",defaultChecked:V.few,value:V.few,onChange:U}),r.a.createElement("label",{class:"form-check-label",for:"showFewStores"},r.a.createElement(J,{remainingStockStr:"few"})," ","2-30")),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",disabled:!0,class:"form-check-input",id:"showEmptyStores",name:"empty",defaultChecked:V.empty,value:V.empty,onChange:U}),r.a.createElement("label",{class:"form-check-label",for:"showEmptyStores"},r.a.createElement(J,{remainingStockStr:"empty"})," ","0\uac1c"))),w?r.a.createElement(T.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):s&&s.length?r.a.createElement(r.a.Fragment,null,r.a.createElement($,{style:{overflow:"auto",maxHeight:"100px"}})):r.a.createElement(A.a,{variant:"danger"},"\uc8fc\ubcc0\uc5d0 \ub9c8\uc2a4\ud06c \ud310\ub9e4\ucc98\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc9c0\ub3c4\ub97c \uc774\ub3d9\ud55c \ud6c4 \uc9c0\ub3c4 \uc544\ub798\uc758 \uc7ac\uac80\uc0c9 \ubc84\ud2bc\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694."))))))};var Q=function(){var e=u(),t=e.centerCoord;return e.setCenterCoord,r.a.createElement(r.a.Fragment,null,t?r.a.createElement(K,null):r.a.createElement(z,null))};var U=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(i,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(k,null)),r.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(54),Y=a(81),ee=a(82);X.a.use(Y.a).use(ee.a).use(m.a).init({fallbackLng:"ko",debug:!1,interpolation:{escapeValue:!1}});X.a;o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/MaskMapLogo.b988c109.svg"},78:function(e,t,a){e.exports=a.p+"static/media/MaskMapIntro.146663f2.svg"},84:function(e,t,a){e.exports=a(123)},89:function(e,t,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.f2a43802.chunk.js.map