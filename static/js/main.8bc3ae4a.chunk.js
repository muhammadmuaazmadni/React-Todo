(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n(7),a=n(1),o=n.n(a),r=n(5),i=n.n(r),l=(n(13),n(14),n(0));function u(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1];o.a.useEffect((function(){var t=localStorage.getItem("Data");t&&r(JSON.parse(t))}),[]),o.a.useEffect((function(){localStorage.setItem("Data",JSON.stringify(n))}));return Object(l.jsxs)("div",{className:"todoList",children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=document.getElementById("TodoText").value;""===e&&alert("some text "),r((function(t){return t.concat(e)}))},className:"form",children:[Object(l.jsx)("h1",{children:Object(l.jsx)("i",{children:"ToDo List App"})}),Object(l.jsx)("input",{type:"text",id:"TodoText",placeholder:"Some Type"}),Object(l.jsx)("button",{class:"btn btn-success",children:"add"})]}),n.map((function(t,e){return Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsx)("p",{className:"listText",children:t}),Object(l.jsx)("button",{type:"button",class:"btn btn-danger",onClick:function(){return function(t){var e=Object(c.a)(n);e.splice(t,1),r(e)}(e)},children:"Clear"})]},e)}))]})}i.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.8bc3ae4a.chunk.js.map