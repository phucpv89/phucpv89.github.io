(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{117:function(e,t,a){},120:function(e,t,a){},218:function(e,t,a){e.exports=a.p+"static/media/bghome.e3a2b187.jpg"},220:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),i=a(14),o=a(13),c=a(15),l=a(1),s=a.n(l),d=(a(117),a(91)),u=(a(93),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.placeholder,n=Object(d.a)(e,["className","placeholder"]);return s.a.createElement("div",{className:"text-input ".concat(t)},s.a.createElement("input",Object.assign({className:"input",required:!0},n)),s.a.createElement("span",{className:"floating-label"},a))}}]),t}(l.Component));u.defaultProps={className:"",placeholder:"Enter text"};var h=u,p=a(18),m=a(9),b=a.n(m),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).emitChange=a.emitChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.value||(b.a.findDOMNode(this._input).innerHTML=""),e.value!==b.a.findDOMNode(this._input).textContent}},{key:"emitChange",value:function(){var e=b.a.findDOMNode(this._input).textContent;this.props.onChange&&e!==this.lastHtml&&this.props.onChange({target:{value:e}}),this.lastHtml=e}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.placeholder,r=t.value,i=t.disabled,o=Object(d.a)(t,["className","placeholder","value","disabled"]);return s.a.createElement("div",{className:"text-input ".concat(a)},s.a.createElement("div",Object.assign({ref:function(t){return e._input=t},className:"input input--auto-expand",onInput:this.emitChange,onBlur:this.emitChange,contentEditable:!i,dangerouslySetInnerHTML:{__html:r}},o,{required:!0})),s.a.createElement("span",{className:"floating-label"},n))}}]),t}(l.Component);g.defaultProps={className:"",value:"",placeholder:"Enter text",disabled:!1};var f=g,v=function(e){var t=e.autoExpand,a=Object(d.a)(e,["autoExpand"]);return t?s.a.createElement(f,a):s.a.createElement(h,a)};v.defaultProps={autoExpand:!1};var y=v,O=(a(120),function(e){var t=e.disabled?"full-width-btn full-width-btn--disabled":"full-width-btn";return s.a.createElement("button",{disabled:e.disabled,className:t,onClick:e.onClick},s.a.createElement("span",null,e.text))});O.defaultProps={text:"",onClick:function(){},disabled:!1};var w=O,E=a(122),C=a.n(E),j=a(129),k=a.n(j),x=a(219),N=(a(216),window.ZaloPay),T="https://devbus.zalopay.com.vn/api/v1/create_order",_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.createOrder=function(){N.showLoading();var e=a.state,t=e.indentifier,n=e.amount;console.log("createOrder",t,n);var r={client_id:1,app_id:1,amount:n,token:t,zalo_pay_id:"ducdt"};console.log("QueryString.stringify(body)",C.a.stringify(r)),fetch(T,{method:"POST",headers:{},body:JSON.stringify(r)}).then(function(e){return e.json()}).then(function(e){console.log("createOrder",e),N.hideLoading();var t=e.code,n=e.order;if(1!==t)return Promise.reject(e);N.payOrder(n,a.cb)}).catch(function(e){N.hideLoading(),N.showDialog({title:"Giao d\u1ecbch kh\xf4ng th\xe0nh c\xf4ng",message:e.message,button:"\u0110\xf3ng"}),console.log("createOrder error",e)})},a.cb=function(e){"object"===typeof e&&(1===e.error?alert("Thanh to\xe1n \u0111\u01a1n h\xe0ng th\xe0nh c\xf4ng"):4===e.error?alert("Ng\u01b0\u1eddi d\xf9ng hu\u1ef7 vi\u1ec7c thanh to\xe1n \u0111\u01a1n h\xe0ng"):alert("Thanh to\xe1n \u0111\u01a1n h\xe0ng th\u1ea5t b\u1ea1i v\u1edbi m\xe3 l\u1ed7i "+e.errorCode))},a.handleIdentifierChange=function(e){a.setState({indentifier:e.target.value})},a.handleAmountChange=function(e){a.setState({amount:e.target.value})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOnSubmitForm",value:function(){N.showLoading()}},{key:"componentDidMount",value:function(){var e=this;fetch("".concat("https://devbus.zalopay.com.vn").concat("/api/v1/get_balance"),{body:JSON.stringify({client_id:1,app_id:1,amount:1e4,token:11111,zalo_pay_id:"ducdt"}),method:"POST"}).then(function(e){return e.json()}).then(function(t){console.log("createOrder",t),N.hideLoading();var a=t.code,n=t.order;if(1!==a)return Promise.reject(t);N.payOrder(n,e.cb)}).catch(function(e){N.hideLoading(),N.showDialog({title:"Giao d\u1ecbch kh\xf4ng th\xe0nh c\xf4ng",message:e.message,button:"\u0110\xf3ng"}),console.log("createOrder error",e)})}},{key:"renderContent",value:function(e){return s.a.createElement("div",{style:{backgroundColor:"white",height:1e3,textAlign:"center"}},s.a.createElement("div",{style:{paddingTop:60}},"Clicked \u201c",e,"\u201d tab\uff0c show \u201c",e,"\u201d information"))}},{key:"render",value:function(){var e=this,t=this.state,n=t.indentifier,r=t.amount;return s.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},s.a.createElement(x.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden,style:{display:"flex",flexDirection:"column"}},s.a.createElement(x.a.Item,{title:"QR",key:"qr",selected:"blueTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"blueTab"})},"data-seed":"logId",icon:s.a.createElement(P,{url:"https://upload.wikimedia.org/wikipedia/commons/3/31/QR_icon.svg"}),selectedIcon:s.a.createElement(P,{url:"https://upload.wikimedia.org/wikipedia/commons/3/31/QR_icon.svg"})},s.a.createElement("div",{className:"tab-qr"},s.a.createElement("div",{className:"tab-qr-qrcode"},s.a.createElement(k.a,{value:"http://facebook.github.io/react/",size:280})))),s.a.createElement(x.a.Item,{icon:s.a.createElement(P,{url:"https://www.svgrepo.com/show/125026/debit-card.svg"}),selectedIcon:s.a.createElement(P,{url:"https://www.svgrepo.com/show/125026/debit-card.svg"}),title:"Thanh To\xe1n",key:"pay",selected:"redTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"redTab"})},"data-seed":"logId1"},s.a.createElement("img",{src:a(218),width:"100%",alt:"banner"}),s.a.createElement("div",{className:"text-input-wrapper"},s.a.createElement(y,{placeholder:"Ch\u1ee9ng minh nh\xe2n d\xe2n",className:"cmnd-text-input",onChange:this.handleIdentifierChange}),s.a.createElement(y,{placeholder:"S\u1ed1 ti\u1ec1n",onChange:this.handleAmountChange,type:"number"})),s.a.createElement("div",{className:"pay-button-wrapper"},s.a.createElement(w,{text:"Thanh to\xe1n",onClick:this.createOrder,disabled:!n||!r})))))}}]),t}(l.PureComponent),P=function(e){var t=e.url;return s.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(".concat(t,") center center /  21px 21px no-repeat")}})};t.default=_},93:function(e,t,a){}}]);
//# sourceMappingURL=1.3bca780b.chunk.js.map