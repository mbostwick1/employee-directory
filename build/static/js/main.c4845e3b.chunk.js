(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),i=n.n(s),a=n(15),r=n.n(a),l=n(17),o=n(6),d=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"field",children:Object(c.jsx)("div",{className:"control",children:Object(c.jsx)("input",{className:"input is-danger",type:"text",name:"search",placeholder:"Search",onChange:e.onChange})})})})},h=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("img",{alt:"Employee Photo",src:e.picture.thumbnail})}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email})]})})},j=n(16),u=n.n(j),b=function(){return u.a.get("https://randomuser.me/api/?results=50&inc=login,name,phone,email,picture&nat=us")},m=(n(41),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),j=r[0],u=r[1];Object(s.useEffect)((function(){b().then((function(e){i(e.data.results)})).catch((function(e){return console.log(e)}))}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{className:"hero is-danger has-text-centered",id:"header",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"title",id:"headline",children:"Employee Directory"}),Object(c.jsx)("h2",{className:"subtitle",children:"Use the search field below to filter through employees and click name to sort alphabetically"}),Object(c.jsx)("div",{className:"container",id:"search",children:Object(c.jsx)(d,{onChange:function(e){var t=e.target.value;u(t)},value:j})})]})}),Object(c.jsx)("section",{className:"hero has-text-centered",id:"employee",children:Object(c.jsx)("div",{className:"table-container",children:Object(c.jsxs)("table",{class:"table is-fullwidth",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Photo"}),Object(c.jsx)("th",{onClick:function(){var e=Object(l.a)(n).sort((function(e,t){return e.name.last<t.name.last?"ascending"===n.direction?1:-1:e.name.last>t.name.last?"descending"===n.direction?-1:1:0}));i(e)},id:"nameSort",children:"Name"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"Email"})]})}),Object(c.jsx)("tbody",{children:n.filter((function(e){return e.name.first.toLowerCase().includes(j.toLowerCase())||e.name.last.toLowerCase().includes(j.toLowerCase())||e.phone.includes(j)||e.email.toLowerCase().includes(j.toLowerCase())})).map((function(e){return Object(c.jsx)(h,{name:e.name,phone:e.phone,email:e.email,picture:e.picture},e.login.uuid)}))})]})})})]})});var O=function(){return Object(c.jsx)(m,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.c4845e3b.chunk.js.map