(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,t,n){},144:function(e,t,n){},199:function(e,t,n){},255:function(e,t,n){e.exports=n.p+"static/media/bghome.e3a2b187.jpg"},257:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(10),o=n(11),c=n(13),i=n(12),l=n(14),s=n(1),u=n.n(s),d=n(22),h=n(0),m=n.n(h),p=n(17),b=n.n(p),f=n(2),g=n.n(f),v=n(117),O=n.n(v),j=n(61),y=n.n(j),E=n(137),C=n.n(E),N=n(138),w=n.n(N),k=n(70),x=n.n(k);function S(e){var t={dispatch:y.a,subscribe:y.a,getState:y.a,replaceReducer:y.a,injectedReducers:x.a};g()(w()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var H=n(19);function _(e){return S(e),{injectReducer:function(e,t){return function(n,a){t||S(e),g()(C()(n)&&!O()(n)&&y()(a),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer(Object(H.a)(e.injectedReducers)))}}(e,!0)}}n(144);var T,R=n(20),P=n(146),M=Object(P.createActions)({setTestHome:["testHome"],saveHome:[],asyncFunc:function(){return function(e,t){return e({type:I.SET_TEST_HOME,testHome:!t().home.testHome}),Promise.resolve()}}}),I=M.Types,L=M.Creators,A=L,D=function(e){try{var t=window.localStorage.getItem(e);return t?JSON.parse(function(){var e,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/.{1,4}/g)||[],n="";for(e=0;e<t.length;e++)n+=String.fromCharCode(parseInt(t[e],16));return n}(t)):null}catch(n){return null}}("home")||{testHome:!1},J=Object(P.createReducer)(D,(T={},Object(R.a)(T,I.SET_TEST_HOME,function(e,t){var n=t.testHome;return Object(a.a)({},e,{testHome:n})}),Object(R.a)(T,I.SAVE_HOME,function(e){return function(e){var t=e.key,n=e.object,a=void 0===n?{}:n;try{window.localStorage.setItem(t,function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n="";for(e=0;e<t.length;e++)n+=("000"+t.charCodeAt(e).toString(16)).slice(-4);return n}(JSON.stringify(a)))}catch(r){}}({key:"home",object:e}),e}),T)),q=n(84),z=(n(105),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.placeholder,a=Object(q.a)(e,["className","placeholder"]);return u.a.createElement("div",{className:"text-input ".concat(t)},u.a.createElement("input",Object.assign({className:"input",required:!0},a)),u.a.createElement("span",{className:"floating-label"},n))}}]),t}(s.Component));z.defaultProps={className:"",placeholder:"Enter text"};var F=z,B=n(21),G=n(9),Q=n.n(G),U=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).emitChange=n.emitChange.bind(Object(B.a)(Object(B.a)(n))),n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.value||(Q.a.findDOMNode(this._input).innerHTML=""),e.value!==Q.a.findDOMNode(this._input).textContent}},{key:"emitChange",value:function(){var e=Q.a.findDOMNode(this._input).textContent;this.props.onChange&&e!==this.lastHtml&&this.props.onChange({target:{value:e}}),this.lastHtml=e}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.placeholder,r=t.value,o=t.disabled,c=Object(q.a)(t,["className","placeholder","value","disabled"]);return u.a.createElement("div",{className:"text-input ".concat(n)},u.a.createElement("div",Object.assign({ref:function(t){return e._input=t},className:"input input--auto-expand",onInput:this.emitChange,onBlur:this.emitChange,contentEditable:!o,dangerouslySetInnerHTML:{__html:r}},c,{required:!0})),u.a.createElement("span",{className:"floating-label"},a))}}]),t}(s.Component);U.defaultProps={className:"",value:"",placeholder:"Enter text",disabled:!1};var V=U,Z=function(e){var t=e.autoExpand,n=Object(q.a)(e,["autoExpand"]);return t?u.a.createElement(V,n):u.a.createElement(F,n)};Z.defaultProps={autoExpand:!1};var K=Z,W=(n(199),function(e){var t=e.disabled?"full-width-btn full-width-btn--disabled":"full-width-btn";return u.a.createElement("button",{disabled:e.disabled,className:t,onClick:e.onClick},u.a.createElement("span",null,e.text))});W.defaultProps={text:"",onClick:function(){},disabled:!1};var X=W,Y=n(201),$=n.n(Y),ee=n(208),te=n.n(ee),ne=n(256),ae=window.ZaloPay,re="https://devbus.zalopay.com.vn/api/v1/create_order",oe=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},n.createOrder=function(){ae.showLoading();var e=n.state,t=e.indentifier,a=e.amount;console.log("createOrder",t,a);var r={client_id:1,app_id:1,amount:1e4,token:11111,zalo_pay_id:"ducdt"};console.log("QueryString.stringify(body)",$.a.stringify(r)),fetch(re,{method:"POST",headers:{},body:JSON.stringify(r)}).then(function(e){return e.json()}).then(function(e){console.log("createOrder",e),ae.hideLoading();var t=e.code,a=e.order;if(1!==t)return Promise.reject(e);ae.payOrder(a,n.cb)}).catch(function(e){ae.hideLoading(),ae.showDialog({title:"Giao d\u1ecbch kh\xf4ng th\xe0nh c\xf4ng",message:e.message,button:"\u0110\xf3ng"}),console.log("createOrder error",e)})},n.cb=function(e){"object"===typeof e&&(1===e.error?alert("Thanh to\xe1n \u0111\u01a1n h\xe0ng th\xe0nh c\xf4ng"):4===e.error?alert("Ng\u01b0\u1eddi d\xf9ng hu\u1ef7 vi\u1ec7c thanh to\xe1n \u0111\u01a1n h\xe0ng"):alert("Thanh to\xe1n \u0111\u01a1n h\xe0ng th\u1ea5t b\u1ea1i v\u1edbi m\xe3 l\u1ed7i "+e.errorCode))},n.handleIdentifierChange=function(e){n.setState({indentifier:e.target.value})},n.handleAmountChange=function(e){n.setState({amount:e.target.value})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"handleOnSubmitForm",value:function(){ae.showLoading()}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://devbus.zalopay.com.vn").concat("/api/v1/get_balance"),{body:JSON.stringify({client_id:1,app_id:1,amount:1e4,token:11111,zalo_pay_id:"ducdt"}),method:"POST"}).then(function(e){return e.json()}).then(function(t){console.log("createOrder",t),ae.hideLoading();var n=t.code,a=t.order;if(1!==n)return Promise.reject(t);ae.payOrder(a,e.cb)}).catch(function(e){ae.hideLoading(),ae.showDialog({title:"Giao d\u1ecbch kh\xf4ng th\xe0nh c\xf4ng",message:e.message,button:"\u0110\xf3ng"}),console.log("createOrder error",e)})}},{key:"render",value:function(){return u.a.createElement("div",{className:"home-page"},u.a.createElement(ne.c,{style:{width:"100%",flexDirection:"row"},panelClassName:"md-bottom-navigation-offset",colored:!0,mobile:!0},u.a.createElement(ne.b,{tabId:"simple-tab",mobile:!0},u.a.createElement(ne.a,{label:"Thanh to\xe1n",className:"tab-label"},u.a.createElement("div",null,u.a.createElement("img",{src:n(255),width:"100%",alt:"banner"}),u.a.createElement("div",{className:"text-input-wrapper"},u.a.createElement(K,{placeholder:"Ch\u1ee9ng minh nh\xe2n d\xe2n",className:"cmnd-text-input",onChange:this.handleIdentifierChange}),u.a.createElement(K,{placeholder:"S\u1ed1 ti\u1ec1n",onChange:this.handleAmountChange,type:"number"})),u.a.createElement("div",{className:"pay-button-wrapper"},u.a.createElement(X,{text:"Thanh to\xe1n",onClick:this.createOrder})))),u.a.createElement(ne.a,{label:"M\xe3 QR",className:"tab-label"},u.a.createElement("div",{className:"tab-qr"},u.a.createElement("div",{className:"tab-qr-qrcode"},u.a.createElement(te.a,{value:"http://facebook.github.io/react/",size:280})))))))}}]),t}(s.PureComponent),ce=(Object(d.b)(function(e){return{testHome:e.home.testHome}},{setTestHome:A.setTestHome,asyncFunc:A.asyncFunc,saveHome:A.saveHome}),function(e){var t=e.key,n=e.reducer}({key:"home",reducer:J}),{padding:"10px 0",borderBottom:"3px solid transparent",display:"inline-block",cursor:"pointer",backgroundColor:"#1c90ec",width:"33.3%",color:"rgba(255, 255, 255, .7)",textAlign:"center"});Object(a.a)({},ce,{color:"white",borderBottom:"3px solid #d71356"}),t.default=oe}}]);
//# sourceMappingURL=1.b684e559.chunk.js.map