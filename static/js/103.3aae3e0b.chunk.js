(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[103],{1978:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(267),o=n(179),i=n(682),c=n(778),l=n.n(c),s=n(1),u=Object(r.a)("iframe")((function(e){var t=e.theme;return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light}}));t.default=function(){return Object(s.jsx)(o.a,{title:"Tabler Icons",secondary:Object(s.jsx)(i.a,{icon:Object(s.jsx)(l.a,{fontSize:"small"}),link:"https://tablericons.com/"}),children:Object(s.jsx)(a.a,{sx:{overflow:"hidden"},children:Object(s.jsx)(u,{title:"Tabler Icons",width:"100%",src:"https://tablericons.com/"})})})}},681:function(e,t,n){"use strict";var r=n(4),a=n(79),o=n(29),i=n(599),c=n(1),l=["color","outline","size","sx"];t.a=function(e){var t=e.color,n=e.outline,s=e.size,u=e.sx,b=Object(a.a)(e,l),d=Object(o.a)(),p=t&&!n&&{color:d.palette.background.paper,bgcolor:"".concat(t,".main")},h=n&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:d.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},j={};switch(s){case"badge":j={width:d.spacing(3.5),height:d.spacing(3.5)};break;case"xs":j={width:d.spacing(4.25),height:d.spacing(4.25)};break;case"sm":j={width:d.spacing(5),height:d.spacing(5)};break;case"lg":j={width:d.spacing(9),height:d.spacing(9)};break;case"xl":j={width:d.spacing(10.25),height:d.spacing(10.25)};break;case"md":j={width:d.spacing(7.5),height:d.spacing(7.5)};break;default:j={}}return Object(c.jsx)(i.a,Object(r.a)({sx:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},p),h),j),u)},b))}},682:function(e,t,n){"use strict";var r=n(29),a=n(602),o=n(386),i=n(683),c=n(681),l=n(1);t.a=function(e){var t=e.title,n=e.link,s=e.icon,u=Object(r.a)();return Object(l.jsx)(a.a,{title:t||"Reference",placement:"left",children:Object(l.jsxs)(o.a,{disableRipple:!0,children:[!s&&Object(l.jsx)(c.a,{component:i.a,href:n,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:u.palette.primary[800]}),Object(l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:u.palette.primary.main}),Object(l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:u.palette.primary[800]}),Object(l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:u.palette.primary.main})]}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),s&&Object(l.jsx)(c.a,{component:i.a,href:n,target:"_blank",size:"badge",color:"primary",outline:!0,children:s})]})})}},683:function(e,t,n){"use strict";var r=n(13),a=n(5),o=n(7),i=n(2),c=n(0),l=(n(10),n(8)),s=n(98),u=n(15),b=n(78),d=n(9),p=n(6),h=n(11),j=n(132),m=n(22),f=n(55),O=n(63),g=n(68);function v(e){return Object(O.a)("MuiLink",e)}var x=Object(g.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},L=Object(p.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(d.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(u.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(b.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(x.focusVisible),{outline:"auto"}))})),V=c.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),a=n.className,u=n.color,b=void 0===u?"primary":u,p=n.component,f=void 0===p?"a":p,O=n.onBlur,g=n.onFocus,x=n.TypographyClasses,k=n.underline,V=void 0===k?"always":k,M=n.variant,z=void 0===M?"inherit":M,C=Object(o.a)(n,w),S=Object(j.a)(),R=S.isFocusVisibleRef,D=S.onBlur,B=S.onFocus,F=S.ref,H=c.useState(!1),T=Object(r.a)(H,2),Z=T[0],A=T[1],N=Object(m.a)(t,F),P=Object(i.a)({},n,{color:b,component:f,focusVisible:Z,underline:V,variant:z}),_=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(d.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(s.a)(o,v,t)}(P);return Object(y.jsx)(L,Object(i.a)({className:Object(l.default)(_.root,a),classes:x,color:b,component:f,onBlur:function(e){D(e),!1===R.current&&A(!1),O&&O(e)},onFocus:function(e){B(e),!0===R.current&&A(!0),g&&g(e)},ref:N,ownerState:P,variant:z},C))}));t.a=V},778:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");t.default=i}}]);
//# sourceMappingURL=103.3aae3e0b.chunk.js.map