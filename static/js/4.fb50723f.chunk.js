(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{373:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3lDj_",dialogsItems:"Dialogs_dialogsItems__3KjlR",dialog:"Dialogs_dialog__20x9w",active:"Dialogs_active__1ivZs",messages:"Dialogs_messages__1C_hB",message:"Dialogs_message__1bzSo"}},379:function(e,s,a){"use strict";a.r(s);var t=a(0),i=a.n(t),n=a(154),c=a(373),o=a.n(c),d=a(34),r=a(2),l=function(e){return Object(r.jsx)("div",{className:"".concat(o.a.dialog," ").concat(o.a.active),children:Object(r.jsxs)(d.b,{to:"/dialogs/"+e.id,children:[e.img," ",e.name]})})},g=function(e){return Object(r.jsx)("div",{className:o.a.message,children:e.message})},j=a(136),m=a(177),u=a(52),b=a(103),O=Object(b.a)(50),h=Object(m.a)({form:"dialogAddMessageForm"})((function(e){return Object(r.jsx)("form",{onSubmit:e.handleSubmit,children:Object(r.jsxs)("div",{className:o.a.messages,children:[Object(r.jsx)(j.a,{component:u.b,name:"newMessageBody",placeholder:"Enter your message",validate:[b.b,O]}),Object(r.jsx)("button",{children:"Add message"})]})})})),p=function(e){var s=e.dialogPage,a=s.dialogsData.map((function(e){return Object(r.jsx)(l,{name:e.name,id:e.id,img:Object(r.jsx)("img",{alt:"avatar",src:e.img})},e.id)})),t=s.messageData.map((function(e){return Object(r.jsx)(g,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:o.a.dialogs,children:[Object(r.jsx)("div",{className:o.a.dialogsItems,children:a}),Object(r.jsxs)("div",{className:o.a.messages,children:[Object(r.jsxs)("div",{children:[" ",t]}),Object(r.jsx)(h,{onSubmit:function(s){e.addMessage(s.newMessageBody)}})]})]})},_=a(33),x=a(1),f=a(22),v=a(23),D=a(25),y=a(24),N=a(18),w=function(e){return{isAuth:e.auth.isAuth}},A=a(17);s.default=Object(A.d)(Object(_.b)((function(e){return{dialogPage:e.dialogPage}}),{addMessage:n.a}),(function(e){var s=function(s){Object(D.a)(t,s);var a=Object(y.a)(t);function t(){return Object(f.a)(this,t),a.apply(this,arguments)}return Object(v.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(x.a)({},this.props)):Object(r.jsx)(N.a,{to:"/login"})}}]),t}(i.a.Component);return Object(_.b)(w)(s)}))(p)}}]);
//# sourceMappingURL=4.fb50723f.chunk.js.map