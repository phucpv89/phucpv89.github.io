(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),s=n.n(o),c=(n(75),n(27)),u=n(20),i=n(62),p=n.n(i),l=n(10),d=n(63),f=n(7),m={location:null};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return Object(f.a)({},e,{location:t.payload});default:return e}}var v=n(12),g=n(13),b=n(16),j=n(14),O=n(15),y=n(317),k=n(316),w=n(19),I=n.n(w),E=n(17),A=I()({loader:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,312))},loading:E.a}),P=I()({loader:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,313))},loading:E.a}),z=n(8),T=n.n(z),D=n(11),x=n(65),C=n.n(x),U=n(38),M=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.ZaloPay.setProperty({navigation:{hidden:!1}},function(){}),this.props.actions.getAppInfo();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.isReady&&this.props.history.replace("./introduce")}},{key:"render",value:function(){return console.log("render",this.props.tasks),r.a.createElement("div",null,r.a.createElement(C.a,{htmlAttributes:{class:"white-body"},bodyAttributes:{class:"white-body"}}))}}]),t}(a.Component),_=Object(c.b)(function(e){return{isReady:!!e.app.tasks,tasks:e.app.tasks,toastMsg:e.app.toastMsg,toastDuration:e.app.toastDuration}},function(e){return{dispatch:e,actions:{getAppInfo:function(){return e(U.default.getAppInfo)}}}})(M),R=I()({loader:function(){return Promise.all([n.e(6),n.e(4)]).then(n.bind(null,314))},loading:E.a}),N=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){document.documentElement.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()},!1);var e=0;document.documentElement.addEventListener("touchend",function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n},!1),window.ZaloPay.setProperty({navigation:{backgroundColor:"#c7c7cc",titleColor:"#000000",pullToRefresh:!1}},function(){})}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(k.a,{exact:!0,path:"/",component:_}),r.a.createElement(k.a,{exact:!0,path:"/home",component:P}),r.a.createElement(k.a,{exact:!0,path:"/introduce",component:A}),r.a.createElement(k.a,{exact:!0,path:"/guide",component:R}))}}]),t}(r.a.Component),S=p()(),L=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=[d.a,Object(u.c)(a)],o=[l.a.apply(void 0,r)],s=l.d,c=Object(l.e)(Object(l.c)(Object(f.a)({route:h,app:n(38).reducer},e)),t,s.apply(void 0,o));return c.injectedReducers={},c}({},S),F=document.getElementById("root");s.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(u.a,{history:S},r.a.createElement(N,null))),F)},17:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(12),r=n(13),o=n(16),s=n(14),c=n(15),u=n(0),i=n.n(u),p=(n(66),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Loading"))}}]),t}(i.a.PureComponent))},38:function(e,t,n){"use strict";n.r(t);var a,r=n(8),o=n.n(r),s=n(11),c=n(9),u=n(7),i=n(39),p=n(64),l=n.n(p),d="/topaz/api/v1/pig",f="/topaz/api/v1/smashpig",m="/topaz/api/v1/getvouchers",h="/topaz/api/v1/configs",v="/topaz/api/v1/createpig",g=2,b=3,j=5,O=(a={},Object(c.a)(a,j,"https://devzpm.zalopay.com.vn/"),Object(c.a)(a,g,"https://stgzpm.zalopay.com.vn/"),Object(c.a)(a,b,"https://zpm.zalopay.com.vn/"),1),y=l.a.create({timeout:5e3,headers:{"Content-Type":"application/json;charset=utf-8"}});y.interceptors.response.use(function(e){return console.log("response: ",e),e.data&&e.data.returncode===O?e.data.data:(console.log("response: ",e.data.returnmessage),Promise.reject(new Error(e.data.returnmessage)))},function(e){return console.log("error: ",e.response),e.response?Promise.reject(new Error(e.response.data.message)):e.request?Promise.reject(new Error("No response was received")):Promise.reject(new Error(e.message))});var k,w=y,I={},E=function(e){console.log("setAuthorization",e);var t=e.muid,n=e.maccess_token,a=e.appVersion;I.muid=t,I.maccesstoken=n,I.appversion=a,console.log("setAuthorization",I)},A=function(){var e=Object(s.a)(o.a.mark(function e(){var t,n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ZaloPay.appInfo.appVersion,e.next=3,P(362);case 3:n=e.sent,a=n.data,E(Object(u.a)({appVersion:t},a));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),P=function(e){return new Promise(function(e){e({data:{maccess_token:"OtsF219x3j6QdMALSQkf2a2fkEuTN_2kDUg6y8k3G7mWJ66ngWOM1Wv34MGs_dE7",muid:"JM6hpCchhat7-2Rq7TaLYJqg-ZNCUuK0qfHCsBvF9C0",appVersion:"3.17"}})})},z=function(e,t){return w.get(e,{params:Object(u.a)({},I,t)})},T={getPigInfo:function(){return z(d)},smashPig:function(){return z(f)},getVouchers:function(){return z(m)},getAppInfo:function(){return z(h)},createPig:function(){return e=v,w.post(e,{params:Object(u.a)({},I,t)});var e,t},getUserInfo:P,getAuthorization:A,setAuthorization:E};n.d(t,"AppTypes",function(){return U}),n.d(t,"INITIAL_STATE",function(){return M}),n.d(t,"reducer",function(){return _});var D=Object(i.createActions)({updateUserInfo:["userInfo"],showToast:["toastMsg","toastDuration"],updateAppInfo:["tasks","items","levels"]}),x=D.Types,C=D.Creators,U=x,M=(t.default=C,{userInfo:null,toastMsg:"",toastDuration:0,fullScreenImageUrl:"",tasks:void 0,items:void 0,levels:void 0}),_=Object(i.createReducer)(M,(k={},Object(c.a)(k,x.UPDATE_USER_INFO,function(e,t){var n=t.userInfo;return Object(u.a)({},e,{userInfo:n})}),Object(c.a)(k,x.SHOW_TOAST,function(e,t){var n=t.toastMsg,a=t.toastDuration;return Object(u.a)({},e,{toastMsg:n,toastDuration:n?a||3e3:0})}),Object(c.a)(k,x.UPDATE_APP_INFO,function(e,t){var n=t.tasks,a=t.items,r=t.levels;return Object(u.a)({},e,{tasks:n,items:a,levels:r})}),k));C.getAppInfo=function(){var e=Object(s.a)(o.a.mark(function e(t){var n,a,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Creators.getAppInfo"),e.prev=1,e.next=4,T.getAuthorization();case 4:return e.next=6,T.getAppInfo();case 6:n=e.sent,console.log("appInfo",n),a=n.tasks,r=n.items,s=n.levels,t(C.updateAppInfo(a,r,s)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t(C.updateAppInfo(null));case 15:case"end":return e.stop()}},e,this,[[1,12]])}));return function(t){return e.apply(this,arguments)}}(),C.startUp=function(){return function(){var e=Object(s.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Creators.startUp");try{a=(n={userid:"",accesstoken:"",phonenumber:"",displayname:"",avatar:""}).userid,r=n.accesstoken,y.defaults.headers.userID=a,y.defaults.headers.accessToken=r,t(C.updateUserInfo(n))}catch(o){t(C.updateUserInfo(null))}case 2:case"end":return e.stop()}var a,r},e,this)}));return function(t){return e.apply(this,arguments)}}()}},66:function(e,t,n){},70:function(e,t,n){e.exports=n(165)},75:function(e,t,n){}},[[70,7,5]]]);
//# sourceMappingURL=main.c6ce2740.chunk.js.map