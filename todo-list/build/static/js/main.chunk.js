(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=(a(12),a(1)),s=a(2),u=(a(13),a(14),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)(""),v=Object(s.a)(d,2),b=v[0],p=v[1],E=Object(n.useState)(""),f=Object(s.a)(E,2),g=f[0],k=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={title:r,description:i,status:b,priority:g};console.log(a),e.addNewTask(a)}},o.a.createElement("label",null,"title:",o.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}})),o.a.createElement("label",null,"description:",o.a.createElement("input",{type:"text",value:i,onChange:function(e){return m(e.target.value)}})),o.a.createElement("label",null,"status:",o.a.createElement("select",{value:b,onChange:function(e){return p(e.target.value)}},o.a.createElement("option",null," ------------ "),o.a.createElement("option",{value:"todo"}," to do "),o.a.createElement("option",{value:"inProgress"}," in progress "),o.a.createElement("option",{value:"done"}," done "))),o.a.createElement("label",null,"priority:",o.a.createElement("select",{value:g,onChange:function(e){return k(e.target.value)}},o.a.createElement("option",null," ------------ "),o.a.createElement("option",{value:"low"}," low "),o.a.createElement("option",{value:"medium"}," medium "),o.a.createElement("option",{value:"high"}," high "))),o.a.createElement("input",{type:"submit",value:"add new"})))}),i=function(e){return o.a.createElement(o.a.Fragment,null,e.tasks.map((function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("h2",null," ",t.title),o.a.createElement("p",null," ",t.description),o.a.createElement("h4",null," ",t.priority),o.a.createElement("button",{onClick:function(){return e.removeTask(t,a)}},"remove task"),"todo"===t.status?o.a.createElement("button",{onClick:function(){return e.moveTask("inProgress",t,a)}}," ","In Progress"," "):null,"inProgress"===t.status?o.a.createElement("button",{onClick:function(){return e.moveTask("done",t,a)}}," ","done"," "):null)})))};var m=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(s.a)(c,2),d=m[0],v=m[1],b=Object(n.useState)([]),p=Object(s.a)(b,2),E=p[0],f=p[1],g=function(e,t){switch(e.status){case"todo":var n=Object(l.a)(a);n.splice(t,1),r(n);break;case"inProgress":var o=Object(l.a)(d);o.splice(t,1),v(o);break;case"done":var c=Object(l.a)(E);c.splice(t,1),f(c)}},k=function(e,t,a){switch(e){case"todo":g(t,a),t.status="todo",r((function(e){return[].concat(Object(l.a)(e),[t])}));break;case"inProgress":g(t,a),t.status="inProgress",v((function(e){return[].concat(Object(l.a)(e),[t])}));break;case"done":g(t,a),t.status="done",f((function(e){return[].concat(Object(l.a)(e),[t])}))}};return o.a.createElement("div",{className:"App"},o.a.createElement(u,{addNewTask:function(e){switch(e.status){case"todo":r((function(t){return[].concat(Object(l.a)(t),[e])}));break;case"inProgress":v((function(t){return[].concat(Object(l.a)(t),[e])}));break;case"done":f((function(t){return[].concat(Object(l.a)(t),[e])}))}}}),o.a.createElement("h1",null,"to do"),o.a.createElement(i,{tasks:a,removeTask:g,moveTask:k}),o.a.createElement("h1",null,"in progress"),o.a.createElement(i,{tasks:d,removeTask:g,moveTask:k}),o.a.createElement("h1",null,"done"),o.a.createElement(i,{tasks:E,removeTask:g,moveTask:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.chunk.js.map