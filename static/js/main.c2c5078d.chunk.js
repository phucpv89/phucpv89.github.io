(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){e.exports=n(281)},112:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(6),r=n(7),c=n(9),o=n(8),s=n(10),u=n(0),i=n.n(u),l=(n(41),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",null,"Loading"))}}]),t}(i.a.PureComponent))},195:function(e,t,n){},279:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n.n(c),s=(n(112),n(97)),u=n(23),i=n(100),l=n.n(i),d=n(17),p=n(101),m=n(24),f={location:null};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return Object(m.a)({},e,{location:t.payload});default:return e}}var b=n(6),v=n(7),j=n(9),g=n(8),O=n(10),y=n(308),E=n(307),k=n(22),w=n.n(k),C=n(16),N=w()({loader:function(){return n.e(1).then(n.bind(null,303))},loading:C.a}),P=w()({loader:function(){return n.e(2).then(n.bind(null,304))},loading:C.a}),S=n(25),I=n.n(S),T=n(49),D=n(68),_=function(e){function t(){return Object(b.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){window.ZaloPay.setProperty({navigation:{hidden:!1}},function(){}),this.getUserInfo()}},{key:"getUserInfo",value:function(){var e=Object(T.a)(I.a.mark(function e(){return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.history.push("./introduce"),e.abrupt("return");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(D.b,null)}}]),t}(a.Component),U=w()({loader:function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,305))},loading:C.a}),x=function(e){function t(){return Object(b.a)(this,t),Object(j.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){document.documentElement.addEventListener("touchstart",function(e){e.touches.length>1&&e.preventDefault()},!1);var e=0;document.documentElement.addEventListener("touchend",function(t){var n=(new Date).getTime();n-e<=300&&t.preventDefault(),e=n},!1),window.ZaloPay.setProperty({navigation:{backgroundColor:"#c7c7cc",titleColor:"#000000",pullToRefresh:!1}},function(){})}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:_}),r.a.createElement(E.a,{exact:!0,path:"/home",component:P}),r.a.createElement(E.a,{exact:!0,path:"/introduce",component:N}),r.a.createElement(E.a,{exact:!0,path:"/guide",component:U}))}}]),t}(r.a.Component),z=l()(),M=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,r=[p.a,Object(u.c)(a)],c=[d.a.apply(void 0,r)],o=d.d,s=Object(d.e)(Object(d.c)(Object(m.a)({route:h,app:n(282).reducer},e)),t,o.apply(void 0,c));return s.injectedReducers={},s}({},z),A=document.getElementById("root");o.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(u.a,{history:z},r.a.createElement(x,null))),A)},282:function(e,t,n){"use strict";n.r(t);var a,r=n(25),c=n.n(r),o=n(49),s=n(15),u=n(24),i=n(65),l=n(102),d=n.n(l),p=2,m=3,f=5,h=(a={},Object(s.a)(a,f,"https://devzpm.zalopay.com.vn/"),Object(s.a)(a,p,"https://stgzpm.zalopay.com.vn/"),Object(s.a)(a,m,"https://zpm.zalopay.com.vn/"),a),b=1,v=d.a.create({baseURL:h[f],timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});v.interceptors.response.use(function(e){return e.data&&e.data.returncode===b?e.data.data:Promise.reject(new Error(e.data.returnmessage))},function(e){return e.response?Promise.reject(new Error(e.response.data.message)):e.request?Promise.reject(new Error("No response was received")):Promise.reject(new Error(e.message))});var j;n.d(t,"AppTypes",function(){return E}),n.d(t,"INITIAL_STATE",function(){return k}),n.d(t,"reducer",function(){return w});var g=Object(i.createActions)({updateUserInfo:["userInfo"],showToast:["toastMsg","toastDuration"]}),O=g.Types,y=g.Creators,E=O,k=(t.default=y,{userInfo:null,toastMsg:"",toastDuration:0,fullScreenImageUrl:""}),w=Object(i.createReducer)(k,(j={},Object(s.a)(j,O.UPDATE_USER_INFO,function(e,t){var n=t.userInfo;return Object(u.a)({},e,{userInfo:n})}),Object(s.a)(j,O.SHOW_TOAST,function(e,t){var n=t.toastMsg,a=t.toastDuration;return Object(u.a)({},e,{toastMsg:n,toastDuration:n?a||3e3:0})}),j));y.startUp=function(){return function(){var e=Object(o.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{a=(n={userid:"",accesstoken:"",phonenumber:"",displayname:"",avatar:""}).userid,r=n.accesstoken,v.defaults.headers.userID=a,v.defaults.headers.accessToken=r,t(y.updateUserInfo(n))}catch(c){t(y.updateUserInfo(null))}case 1:case"end":return e.stop()}var a,r},e,this)}));return function(t){return e.apply(this,arguments)}}()}},41:function(e,t,n){},68:function(e,t,n){"use strict";var a=n(16),r=n(6),c=n(7),o=n(9),s=n(8),u=n(10),i=(n(195),n(0)),l=n.n(i);(function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={isVisible:!0},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isVisible:!1},function(){setTimeout(e.props.requestClose,500)})},this.props.duration+500)}},{key:"render",value:function(){var e=this.state.isVisible?"toast":"toast none";return l.a.createElement("div",{className:e},l.a.createElement("div",{className:"toast__toast-content"},l.a.createElement("span",{className:"icon-general_check"}),l.a.createElement("span",{className:"toast__toast-content__toast-msg"},this.props.message)))}}]),t}(l.a.PureComponent)).defaultProps={message:"",duration:3e3,requestClose:function(){}};n(197),l.a.PureComponent,n(41);var d=function(e){return l.a.createElement("div",{className:"box-wrapper ".concat(e.className)},e.children)},p=n(103),m=n(84),f=n.n(m),h=function(e){var t=e.className,n=e.titleClassName,a=Object(p.a)(e,["className","titleClassName"]);return l.a.createElement(f.a,Object.assign({variant:"contained",color:"secondary",size:"small"},a,{className:"zp-button ".concat(t)}),l.a.createElement("span",{className:"title ".concat(n)},a.title))},b=n(34),v=(n(279),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e){n.setState({selectedSegment:e}),n.props.onChangeSegment(e)},n.renderSegments=function(){return n.props.segments.map(function(e,t){return t===n.state.selectedSegment?l.a.createElement("li",{key:t,className:"".concat(n.props.variant," selected")},e.name):e.disabled?l.a.createElement("li",{key:t,className:"".concat(n.props.variant),"aria-disabled":"true"},e.name):l.a.createElement("li",{key:t,className:"".concat(n.props.variant),onClick:function(){return n.onChange(t)}},e.name)})},n.state={selectedSegment:0},n.renderSegments=n.renderSegments.bind(Object(b.a)(Object(b.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.selected;this.props.segments.map(function(e){return e.disabled}).indexOf(!0)==e&&delete this.props.segments[e].disabled,this.setState({selectedSegment:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"r-segmented-control"},l.a.createElement("ul",null,this.renderSegments()))}}]),t}(i.Component));v.defaultProps={onChangeSegment:function(e){return e},variant:"base",selected:0};var j=function(e){return l.a.createElement("button",Object.assign({},e,{className:"circle-button-wrapper ".concat(e.className)}),l.a.createElement("div",{className:"button"}))},g=function(e){return function(t){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(t=Object(o.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(c)))).handleCloseButtonPress=function(){t.props.history.goBack()},t.handleRightButtonPress=function(){var e=t.props.history;alert(e.length)},t}return Object(u.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(e,this.props),l.a.createElement(j,{className:"left-header-button",onClick:this.handleCloseButtonPress}),l.a.createElement(j,{className:"right-header-button",onClick:this.handleRightButtonPress}))}}]),n}(l.a.Component)};n.d(t,"b",function(){return a.a}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return h}),n.d(t,"c",function(){return v}),n.d(t,"e",function(){return g})}},[[107,6,4]]]);
//# sourceMappingURL=main.c2c5078d.chunk.js.map