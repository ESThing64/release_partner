(this.webpackJsonprelease_partner=this.webpackJsonprelease_partner||[]).push([[116],{1460:function(e,t,a){"use strict";var n=a(75),r=a(7),i=a(2),c=a(0),s=(a(10),a(8)),j=a(98),l=a(59),o=a(9),d=a(11),b=a(6),h=a(63),x=a(68);function O(e){return Object(h.a)("MuiCircularProgress",e)}Object(x.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m,u,v,p,g,f,y,k,w=a(1),C=["className","color","disableShrink","size","style","thickness","value","variant"],M=44,S=Object(l.c)(g||(g=m||(m=Object(n.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),L=Object(l.c)(f||(f=u||(u=Object(n.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),P=Object(b.a)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["color".concat(Object(o.a)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:a.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&Object(l.b)(y||(y=v||(v=Object(n.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),S)})),I=Object(b.a)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),V=Object(b.a)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var a=e.ownerState;return[t.circle,t["circle".concat(Object(o.a)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,a=e.theme;return Object(i.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.b)(k||(k=p||(p=Object(n.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),L)})),D=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCircularProgress"}),n=a.className,c=a.color,l=void 0===c?"primary":c,b=a.disableShrink,h=void 0!==b&&b,x=a.size,m=void 0===x?40:x,u=a.style,v=a.thickness,p=void 0===v?3.6:v,g=a.value,f=void 0===g?0:g,y=a.variant,k=void 0===y?"indeterminate":y,S=Object(r.a)(a,C),L=Object(i.a)({},a,{color:l,disableShrink:h,size:m,thickness:p,value:f,variant:k}),D=function(e){var t=e.classes,a=e.variant,n=e.color,r=e.disableShrink,i={root:["root",a,"color".concat(Object(o.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(o.a)(a)),r&&"circleDisableShrink"]};return Object(j.a)(i,O,t)}(L),R={},z={},N={};if("determinate"===k){var Z=2*Math.PI*((M-p)/2);R.strokeDasharray=Z.toFixed(3),N["aria-valuenow"]=Math.round(f),R.strokeDashoffset="".concat(((100-f)/100*Z).toFixed(3),"px"),z.transform="rotate(-90deg)"}return Object(w.jsx)(P,Object(i.a)({className:Object(s.default)(D.root,n),style:Object(i.a)({width:m,height:m},z,u),ownerState:L,ref:t,role:"progressbar"},N,S,{children:Object(w.jsx)(I,{className:D.svg,ownerState:L,viewBox:"".concat(22," ").concat(22," ").concat(M," ").concat(M),children:Object(w.jsx)(V,{className:D.circle,style:R,ownerState:L,cx:M,cy:M,r:(M-p)/2,fill:"none",strokeWidth:p})})}))}));t.a=D},1969:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(4),i=a(79),c=a(0),s=a(1994),j=a(29),l=a(155),o=a(1460),d=a(55),b=a(592),h=a(49),x=a(131),O=a(179),m=a(682),u=a(56),v=a(1),p=["value"],g=["value"];function f(e){var t=e.value,a=Object(i.a)(e,p);return Object(v.jsxs)(l.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(v.jsx)(o.a,Object(r.a)({variant:"determinate"},a)),Object(v.jsx)(l.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(v.jsx)(d.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(t),"%")})})]})}function y(e){var t=e.value,a=Object(i.a)(e,g);return Object(v.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(v.jsx)(l.a,{sx:{width:"100%",mr:1},children:Object(v.jsx)(b.a,Object(r.a)({variant:"determinate"},a))}),Object(v.jsx)(l.a,{sx:{minWidth:35},children:Object(v.jsx)(d.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(t),"%")})})]})}var k=Object(s.a)((function(){return{root:{height:10,borderRadius:5},bar:{borderRadius:5}}}))(b.a);t.default=function(){var e=Object(j.a)(),t=Object(c.useState)(0),a=Object(n.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(10),l=Object(n.a)(s,2),p=l[0],g=l[1],w=Object(c.useRef)((function(){}));return Object(c.useEffect)((function(){w.current=function(){if(r>100)i(0),g(10);else{var e=10*Math.random(),t=10*Math.random();i(r+e),g(r+e+t)}}})),Object(c.useEffect)((function(){var e=setInterval((function(){w.current()}),500);return function(){clearInterval(e)}}),[]),Object(v.jsx)(O.a,{title:"Progress",secondary:Object(v.jsx)(m.a,{link:"https://next.material-ui.com/components/progress/"}),children:Object(v.jsxs)(h.a,{container:!0,spacing:u.c,children:[Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(x.a,{title:"Circular Indeterminate",children:Object(v.jsxs)(h.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{color:"secondary"})})]})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(x.a,{title:"Circular Determinate",children:Object(v.jsxs)(h.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:25})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:50})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:75})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:100})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:50})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"determinate",value:r})})]})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(v.jsx)(x.a,{title:"Circular Label",children:Object(v.jsx)(h.a,{container:!0,spacing:2,justifyContent:"center",children:Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(f,{value:r})})})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Linear Indeterminate",children:Object(v.jsxs)(h.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{})}),Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{color:"secondary"})})]})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Linear Label",children:Object(v.jsx)(h.a,{container:!0,spacing:2,justifyContent:"center",children:Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(y,{value:r})})})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Linear Determinate",children:Object(v.jsx)(h.a,{container:!0,spacing:2,justifyContent:"center",children:Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{variant:"determinate",value:r})})})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Linear Buffer",children:Object(v.jsx)(h.a,{container:!0,spacing:2,justifyContent:"center",children:Object(v.jsx)(h.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{variant:"buffer",value:r,valueBuffer:p})})})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Color",children:Object(v.jsxs)(h.a,{container:!0,direction:"column",spacing:3,children:[Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,children:Object(v.jsx)(b.a,{variant:"determinate",color:"secondary",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:Object(v.jsx)(b.a,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:Object(v.jsx)(b.a,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:Object(v.jsx)(b.a,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:Object(v.jsx)(b.a,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})})]})})}),Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(x.a,{title:"Color With Height",children:Object(v.jsxs)(h.a,{container:!0,direction:"column",spacing:3,children:[Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,children:Object(v.jsx)(k,{variant:"determinate",color:"secondary",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.success.main},children:Object(v.jsx)(k,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.error.main},children:Object(v.jsx)(k,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.warning.main},children:Object(v.jsx)(k,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})}),Object(v.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(v.jsxs)(h.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(h.a,{item:!0,children:Object(v.jsx)(d.a,{variant:"caption",children:"Progress"})}),Object(v.jsx)(h.a,{item:!0,xs:!0,sx:{color:e.palette.info.main},children:Object(v.jsx)(k,{color:"inherit",variant:"determinate",value:r})}),Object(v.jsx)(h.a,{item:!0,children:Object(v.jsxs)(d.a,{variant:"h6",children:[Math.round(r),"%"]})})]})})]})})})]})})}},681:function(e,t,a){"use strict";var n=a(4),r=a(79),i=a(29),c=a(599),s=a(1),j=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,l=e.size,o=e.sx,d=Object(r.a)(e,j),b=Object(i.a)(),h=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},x=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},O={};switch(l){case"badge":O={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":O={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":O={width:b.spacing(5),height:b.spacing(5)};break;case"lg":O={width:b.spacing(9),height:b.spacing(9)};break;case"xl":O={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":O={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:O={}}return Object(s.jsx)(c.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},h),x),O),o)},d))}},682:function(e,t,a){"use strict";var n=a(29),r=a(602),i=a(386),c=a(683),s=a(681),j=a(1);t.a=function(e){var t=e.title,a=e.link,l=e.icon,o=Object(n.a)();return Object(j.jsx)(r.a,{title:t||"Reference",placement:"left",children:Object(j.jsxs)(i.a,{disableRipple:!0,children:[!l&&Object(j.jsx)(s.a,{component:c.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(j.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"clip0",children:Object(j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),l&&Object(j.jsx)(s.a,{component:c.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:l})]})})}}}]);
//# sourceMappingURL=116.7da8e420.chunk.js.map