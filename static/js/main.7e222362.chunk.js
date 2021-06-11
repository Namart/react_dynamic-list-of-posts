(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),o=n(1),l=(n(15),n(16),n(7)),u=n.n(l),m=(n(17),"https://mate-api.herokuapp.com"),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(m+e,t).then((function(e){return e.json()})).then((function(e){return e.data}))};function p(e){return i("/posts/".concat(e))}var d=function(e){var t=e.selectedUser,n=e.postEdited,r=e.selectedPost,s=Object(a.useState)([]),l=Object(o.a)(s,2),m=l[0],p=l[1];Object(a.useEffect)((function(){var e;t?(e=t,i("/posts?userId=".concat(e))).then(p):i("/posts").then(p)}),[t]);return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),c.a.createElement("button",{type:"button",className:u()("PostsList__button button",{active:e.id===r}),onClick:function(){return t=e.id,void n(t===r?null:t);var t}},r===e.id?"Close":"Open"))}))))},f=n(4),b=n.n(f),E=n(8),v=n(9),_=(n(19),function(e){var t=e.postId,n=e.onAdd,r=Object(a.useState)(""),s=Object(o.a)(r,2),l=s[0],u=s[1],m=Object(a.useState)(""),i=Object(o.a)(m,2),p=i[0],d=i[1],f=Object(a.useState)(""),b=Object(o.a)(f,2),E=b[0],v=b[1],_=function(){v(""),u(""),d("")};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n({name:l,body:E,email:p,postId:t}),_()}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:l,onChange:function(e){var t=e.target;return u(t.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){var t=e.target;return d(t.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){var t=e.target;return v(t.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),h=function(e){return i("/comments?postId=".concat(e))},N=function(e){return i("/comments/".concat(e),{method:"DELETE"})},O=function(e){return function(e,t){return i(e,{method:"POST",body:JSON.stringify(t)})}("/comments",e)},j=(n(20),function(e){var t=e.postId,n=Object(a.useState)(null),r=Object(o.a)(n,2),s=r[0],l=r[1],u=Object(a.useState)([]),m=Object(o.a)(u,2),i=m[0],d=m[1],f=Object(a.useState)(!0),j=Object(o.a)(f,2),y=j[0],P=j[1];Object(a.useEffect)((function(){t?Promise.all([p(t),h(t)]).then((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];l(n),d(a)})):l(null)}),[t]);var S=function(){var e=Object(E.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(n).then((function(){return h(t)})).then(d);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"PostDetails"},s?c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s.body)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return P((function(e){return!e}))}},y?"Hide ".concat(i.length," comments"):"Show  ".concat(i.length," comments")),c.a.createElement("ul",{className:"PostDetails__list"},y&&i.map((function(e){var t=e.id,n=e.body;return c.a.createElement("li",{key:t,className:"PostDetails__list-item"},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return S(t)}},"X"),c.a.createElement("p",null,n))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(_,{postId:t,onAdd:function(e){O(e).then((function(e){return d((function(t){return[].concat(Object(v.a)(t),[e])}))}))}})))):c.a.createElement("h2",null,"Select a post"))}),y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),l=Object(o.a)(s,2),u=l[0],m=l[1],p=Object(a.useState)(0),f=Object(o.a)(p,2),b=f[0],E=f[1];return Object(a.useEffect)((function(){i("/users").then(r)}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){return m(e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),n.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(d,{selectedUser:u,postEdited:E,selectedPost:b})),c.a.createElement("div",{className:"App__content"},c.a.createElement(j,{postId:b}))))};s.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7e222362.chunk.js.map