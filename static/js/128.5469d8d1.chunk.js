(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[128],{1961:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var c=a(13),i=a(0),r=a(29),n=a(786),s=a(767),l=a(604),j=a(598),o=a(155),h=a(784),b=a(785),d=a(860),p=a(787),x=a(179),g=a(131),O=a(682),u=a(999),m=a.n(u),f=a(1813),w=a.n(f),k=a(1);function y(e,t,a,c,i,r){return{name:e,calories:t,fat:a,carbs:c,protein:i,price:r,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}function L(e){var t,a=e.row,x=Object(r.a)(),O=Object(i.useState)(!1),u=Object(c.a)(O,2),f=u[0],y=u[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(n.a,{hover:!0,sx:{"& > *":{borderBottom:"unset"}},children:[Object(k.jsx)(s.a,{sx:{pl:3},children:Object(k.jsx)(l.a,{"aria-label":"expand row",size:"small",onClick:function(){return y(!f)},children:f?Object(k.jsx)(w.a,{}):Object(k.jsx)(m.a,{})})}),Object(k.jsx)(s.a,{component:"th",scope:"row",children:a.name}),Object(k.jsx)(s.a,{align:"right",children:a.calories}),Object(k.jsx)(s.a,{align:"right",children:a.fat}),Object(k.jsx)(s.a,{align:"right",children:a.carbs}),Object(k.jsx)(s.a,{align:"right",sx:{pr:3},children:a.protein})]}),Object(k.jsx)(n.a,{children:Object(k.jsx)(s.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(k.jsx)(j.a,{in:f,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(o.a,{sx:{margin:1},children:Object(k.jsx)(h.a,{children:Object(k.jsx)(g.a,{sx:{bgcolor:"dark"===x.palette.mode?"dark.800":"grey.50",mb:2},title:"History",content:!1,children:Object(k.jsxs)(b.a,{size:"small","aria-label":"purchases",children:[Object(k.jsx)(d.a,{children:Object(k.jsxs)(n.a,{children:[Object(k.jsx)(s.a,{children:"Date"}),Object(k.jsx)(s.a,{children:"Customer"}),Object(k.jsx)(s.a,{align:"right",children:"Amount"}),Object(k.jsx)(s.a,{align:"right",children:"Total price ($)"})]})}),Object(k.jsx)(p.a,{children:null===(t=a.history)||void 0===t?void 0:t.map((function(e){return Object(k.jsxs)(n.a,{hover:!0,children:[Object(k.jsx)(s.a,{component:"th",scope:"row",children:e.date}),Object(k.jsx)(s.a,{children:e.customerId}),Object(k.jsx)(s.a,{align:"right",children:e.amount}),Object(k.jsx)(s.a,{align:"right",children:Math.round(e.amount*a.price*100)/100})]},e.date)}))})]})})})})})})})]})}var v=[y("Frozen yoghurt",159,6,24,4,3.99),y("Ice cream sandwich",237,9,37,4.3,4.99),y("Eclair",262,16,24,6,3.79),y("Cupcake",305,3.7,67,4.3,2.5),y("Gingerbread",356,16,49,3.9,1.5)];function V(){return Object(k.jsx)(x.a,{content:!1,title:"Collapsible Table",secondary:Object(k.jsx)(O.a,{link:"https://next.material-ui.com/components/tables/"}),children:Object(k.jsx)(h.a,{children:Object(k.jsxs)(b.a,{"aria-label":"collapsible table",children:[Object(k.jsx)(d.a,{children:Object(k.jsxs)(n.a,{children:[Object(k.jsx)(s.a,{sx:{pl:3}}),Object(k.jsx)(s.a,{children:"Dessert (100g serving)"}),Object(k.jsx)(s.a,{align:"right",children:"Calories"}),Object(k.jsx)(s.a,{align:"right",children:"Fat\xa0(g)"}),Object(k.jsx)(s.a,{align:"right",children:"Carbs\xa0(g)"}),Object(k.jsx)(s.a,{sx:{pr:3},align:"right",children:"Protein\xa0(g)"})]})}),Object(k.jsx)(p.a,{children:v.map((function(e){return Object(k.jsx)(L,{row:e},e.name)}))})]})})})}},681:function(e,t,a){"use strict";var c=a(4),i=a(79),r=a(29),n=a(599),s=a(1),l=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,j=e.size,o=e.sx,h=Object(i.a)(e,l),b=Object(r.a)(),d=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},p=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},x={};switch(j){case"badge":x={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":x={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":x={width:b.spacing(5),height:b.spacing(5)};break;case"lg":x={width:b.spacing(9),height:b.spacing(9)};break;case"xl":x={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":x={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:x={}}return Object(s.jsx)(n.a,Object(c.a)({sx:Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},d),p),x),o)},h))}},682:function(e,t,a){"use strict";var c=a(29),i=a(602),r=a(386),n=a(683),s=a(681),l=a(1);t.a=function(e){var t=e.title,a=e.link,j=e.icon,o=Object(c.a)();return Object(l.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(r.a,{disableRipple:!0,children:[!j&&Object(l.jsx)(s.a,{component:n.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),j&&Object(l.jsx)(s.a,{component:n.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:j})]})})}}}]);
//# sourceMappingURL=128.5469d8d1.chunk.js.map