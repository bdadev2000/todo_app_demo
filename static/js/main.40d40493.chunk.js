(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),o=n.n(r),a=n(43),i=n(36),s=n(89),l=n(92),j=n(97),u=n(93),d=n(95),m=n(98),b=n(94),f=n(11),x=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)((function(){var e=JSON.parse(localStorage.getItem("jobs"));return null!==e&&void 0!==e?e:[]})),x=Object(i.a)(o,2),O=x[0],h=x[1];return Object(f.jsxs)(s.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(l.a,{}),Object(f.jsxs)(j.a,{sx:{marginTop:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(f.jsx)(u.a,{component:"h1",variant:"h5",children:"To Do List"}),Object(f.jsxs)(j.a,{component:"form",noValidate:!0,sx:{mt:1},children:[Object(f.jsx)(d.a,{margin:"normal",required:!0,fullWidth:!0,label:"Add to do",value:n,onChange:function(e){return r(e.target.value)}}),Object(f.jsx)(m.a,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"secondary",onClick:function(){h((function(e){var t=[].concat(Object(a.a)(e),[n]),c=JSON.stringify(t);return localStorage.setItem("jobs",c),t})),r("")},children:"Add"})]}),Object(f.jsx)(j.a,{component:"form",noValidate:!0,sx:{mt:4},children:Object(f.jsx)("ul",{style:{listStyle:"none"},children:O.map((function(e,t){return Object(f.jsxs)(b.a,{container:!0,direction:"row",justifyContent:"space-between",children:[Object(f.jsx)("li",{children:e},t),Object(f.jsx)("button",{style:{margin:4},onClick:function(){return e=t,void h((function(t){var n=t.filter((function(n){return n!==t[e]}));return localStorage.setItem("jobs",JSON.stringify(n)),n}));var e},children:" X "})]})}))})})]})]})};o.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.40d40493.chunk.js.map