(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(e,n,a){"use strict";a.d(n,"a",function(){return i});var t=a(0),o=a.n(t),r=a(234),s=a.n(r),i=function(e){var n=e.typeComponent,a=e.cols,t=e.input,r=e.label,i=e.rows,l=e.type,m=e.meta,c=m.error,u=m.warning,d=m.touched;return o.a.createElement("div",{className:s.a.formComponentWrapper},o.a.createElement("label",{className:s.a.formComponentLabel},r),o.a.createElement("div",{className:s.a.formComponent},"textarea"===n?o.a.createElement("textarea",Object.assign({className:s.a.formComponentField+" "+(d&&c?s.a.errorField:""),cols:a,rows:i},t,{placeholder:r})):o.a.createElement("input",Object.assign({className:s.a.formComponentField+" "+(d&&c?s.a.errorField:"")},t,{placeholder:r,size:"25",type:l})),d&&(c&&o.a.createElement("span",{className:s.a.formComponentError},c)||u&&o.a.createElement("span",{className:s.a.formComponentWarning},u))))}},234:function(e,n,a){e.exports={formComponentLabel:"ComponentValidators_formComponentLabel__1h2v-",formComponent:"ComponentValidators_formComponent__369Yx",formComponentField:"ComponentValidators_formComponentField__3BGIz",errorField:"ComponentValidators_errorField__obMYi",formComponentError:"ComponentValidators_formComponentError__1yiVS"}},235:function(e,n,a){"use strict";a.d(n,"a",function(){return t}),a.d(n,"b",function(){return o}),a.d(n,"c",function(){return r});var t=function(e){if(!(e&&e.length>=1))return"Required field"},o=function(e){return function(n){if(n&&n.length>e)return"Max ".concat(e," symbols")}},r=function(e){return function(n){if(n&&n.length<e)return"Minimum ".concat(e," symbols")}}},248:function(e,n,a){"use strict";a.d(n,"a",function(){return p});var t=a(24),o=a(25),r=a(28),s=a(26),i=a(29),l=a(0),m=a.n(l),c=a(27),u=a(22),d=function(e){return{loadLogin:e.auth.loadLogin}},p=function(e){var n=function(n){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,n),Object(o.a)(a,[{key:"render",value:function(){return this.props.loadLogin?m.a.createElement(e,this.props):m.a.createElement(u.a,{to:"/login"})}}]),a}(m.a.Component);return Object(c.b)(d)(n)}},263:function(e,n,a){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__2xYQT",newDialogForm:"Dialogs_newDialogForm__Nk8WQ",newDialogText:"Dialogs_newDialogText__19625",newDialogBtn:"Dialogs_newDialogBtn__7dAoq",Btn:"Dialogs_Btn__22qeh",dialogs:"Dialogs_dialogs__3lr3H",user:"Dialogs_user__1X8pj",messages:"Dialogs_messages__1Z0PU",answers:"Dialogs_answers__icATP",newDialogMinimum:"Dialogs_newDialogMinimum__F7mey",userItem:"Dialogs_userItem__2b_Yi"}},311:function(e,n,a){"use strict";a.r(n);var t=a(24),o=a(25),r=a(28),s=a(26),i=a(29),l=a(0),m=a.n(l),c=a(263),u=a.n(c),d=a(117),p=a(118),f=a(235),g=a(233),_=Object(f.c)(3),b=Object(p.a)({form:"newDialogText"})(function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit(e.onSubmit)},m.a.createElement("div",{className:u.a.newDialogForm},m.a.createElement(d.a,{className:u.a.newDialogText,label:"Minimum 3 symbols every 5 seconds",component:g.a,readonly:!0,cols:"40",rows:"5",name:"newTextDialog",type:"text",typeComponent:"textarea",validate:[_]}),m.a.createElement("div",{className:u.a.newDialogBtn},m.a.createElement("button",{className:u.a.Btn,disabled:e.pristine||e.submitting},"Send message"))))}),w=function(e){return m.a.createElement("div",{className:u.a.dialogsWrapper},m.a.createElement("div",{className:u.a.dialogs},m.a.createElement("div",{className:u.a.user},m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user"),m.a.createElement("div",{className:u.a.userItem},"user")),m.a.createElement("div",{className:u.a.messages},m.a.createElement(b,{onSubmit:function(n){n.newTextDialog&&e.addNewPost(n.newTextDialog);var a;return(a=5e3,new Promise(function(e){return setTimeout(e,a)})).then(function(){return!0})},postSend:e.postSend}),m.a.createElement("div",null,e.myPost.map(function(e){return m.a.createElement("div",{key:e.id},e.post)}))),m.a.createElement("div",{className:u.a.answers},m.a.createElement("h3",null,"Answers"),e.userAnswers.map(function(e,n){return m.a.createElement("div",{key:n},e.answered)}))))},E=a(27),v=a(80),D=a(16),C=a(248),N=function(e){function n(){return Object(t.a)(this,n),Object(r.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return m.a.createElement(w,this.props)}}]),n}(m.a.Component);n.default=Object(D.d)(C.a,Object(E.b)(function(e){return{userAnswers:e.dialogsPage.userAnswers,myPost:e.dialogsPage.myPost,postSend:e.dialogsPage.postSend}},{addNewPost:v.a}))(N)}}]);
//# sourceMappingURL=7.175dbd41.chunk.js.map