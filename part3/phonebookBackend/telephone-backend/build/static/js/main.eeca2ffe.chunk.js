(window.webpackJsonptelephone=window.webpackJsonptelephone||[]).push([[0],{15:function(e,n,t){e.exports=t(42)},20:function(e,n,t){},21:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(20),t(14)),l=t(2),i=(t(21),function(e){var n=e.filterName,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{value:n,onChange:t}))}),m=function(e){var n=e.handleSubmit,t=e.newName,a=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{name:"personName",value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:c,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},f=function(e){var n=e.getFilterName,t=e.handleDelete;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))})))},d=t(3),s=t.n(d),h="/api/persons",b={getAll:function(){return s.a.get(h).then((function(e){return e.data}))},create:function(e){return s.a.post(h,e).then((function(e){return e.data}))},update:function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}},p=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{className:"notification-".concat(n.type)},n.message)},v=t(39);var g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),s=d[0],h=d[1],g=Object(a.useState)(""),E=Object(l.a)(g,2),w=E[0],N=E[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),C=j[0],y=j[1],S=Object(a.useState)({}),k=Object(l.a)(S,2),D=k[0],F=k[1];Object(a.useEffect)((function(){b.getAll().then((function(e){c(e)})).catch((function(e){console.log(e,"error")}))}),[]);var A=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(C.toLowerCase())})),T=t.find((function(e){return e.name===s}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{notification:D}),r.a.createElement(i,{filterName:C,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{handleSubmit:function(e){if(e.preventDefault(),T){window.confirm("".concat(s," is already  added to phonebook, replace the old number with a new one?"))&&b.update(T.id,{name:s,number:w}).then((function(e){var n=t.filter((function(n){return n.id!==e.id}));n=[].concat(Object(u.a)(n),[e]),c(n),F({type:"success",message:"Updated ".concat(T.name)}),setTimeout((function(){F(null)}),3e3),h(""),N("")})).catch((function(){F({type:"error",message:"".concat(T.name," has already removed from server")}),setTimeout((function(){F(null)}),3e3)}))}else{var n={name:s,number:w,id:v()};b.create(n).then((function(e){c(t.concat(e)),F({type:"success",message:"Added ".concat(e.name)}),setTimeout((function(){F(null)}),3e3),h(""),N("")})).catch((function(e){console.log(e,"error")}))}},newName:s,handleNameChange:function(e){h(e.target.value)},newNumber:w,handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{getFilterName:A,handleDelete:function(e,n){window.confirm("Delete ".concat(n," ?"))&&b.remove(e).then((function(){c(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log(e,"error")}))}}))};o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eeca2ffe.chunk.js.map