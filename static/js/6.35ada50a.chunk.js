(this["webpackJsonpefishery-app"]=this["webpackJsonpefishery-app"]||[]).push([[6],{186:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(4),l=t(0),r=t.n(l),i=t(180),o=t(83),c={Komoditas:{type:"text",required:!0,placeholder:"Nama komoditas"},Provinsi:{type:"select",required:!0,placeholder:"Choose provinsi",options:[{value:"1",label:"item 1"},{value:"2",label:"item 2"}]},Size:{type:"select",required:!0,options:[{value:"30",label:"30"},{value:"40",label:"40"},{value:"50",label:"50"},{value:"60",label:"60"},{value:"70",label:"70"},{value:"80",label:"80"},{value:"90",label:"90"},{value:"100",label:"100"},{value:"110",label:"110"},{value:"120",label:"120"},{value:"130",label:"130"},{value:"140",label:"140"},{value:"140",label:"150"}],placeholder:"choose size"},Price:{type:"number",placeholder:"Price"},Save:{type:"submit"}},u=t(40),s=t(41),v=t(7);function f(){var e=Object(l.useState)(!1),a=Object(n.a)(e,2),t=a[0],f=a[1],m=Object(l.useState)(null),p=Object(n.a)(m,2),d=p[0],b=p[1];Object(l.useEffect)((function(){y()}),[]);var h=function(e){var a=[{uuid:999*Math.random()+"hrs",komoditas:e.Komoditas,area_provinsi:e.Provinsi.value,area_kota:e.Provinsi.city,size:e.Size.value,price:e.Price,tgl_parsed:(new Date).toISOString(),timestamp:(new Date).getTime()}];fetch(u.a+s.a,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){return e.json()})).then((function(){f(!t)})).catch((function(e){t("Your data could not be posted\nError: "+e.message)}))},y=function(){fetch(u.a+s.b).then((function(e){return e.json()})).then((function(e){function a(e,a,t){e[t]=e[a],delete e[a]}e.forEach((function(e){return a(e,"province","label")})),e.forEach((function(e){return a(e,"city","value")}));var t=c,n=[];for(var l in e){var r={value:e[l].label,label:e[l].label,city:e[l].value};n.push(r)}t.Provinsi.options=n,b(t)}))};return r.a.createElement("div",null,r.a.createElement(o.f,null,r.a.createElement(v.b,{to:"/perikanan"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("em",{className:"fas fa-chevron-left pr-3"}),"Insert Data Komoditas")),r.a.createElement(o.c,{className:"my-4"},r.a.createElement(o.d,{className:"p-4"},r.a.createElement(o.g,null,r.a.createElement(o.e,{md:"12",xs:"12"},t?r.a.createElement(o.a,{color:"success"},"Your data has been successfully saved!"):r.a.createElement("div",null),function(){if(null!==d)return r.a.createElement(i.a,{model:d,onSubmit:h})}()))))))}},40:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n="https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4"},41:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return r}));var n="/list",l="/option_area",r="/option_size"}}]);
//# sourceMappingURL=6.35ada50a.chunk.js.map