(this.webpackJsonprelease_partner=this.webpackJsonprelease_partner||[]).push([[80],{1249:function(e,t,a){"use strict";var r=a(13),n=a(0),c=a(6),i=a(29),o=a(670),s=a(267),l=a(49),d=a(604),u=a(380),b=a(724),j=a(55),p=a(662),f=a(681),O=a(56),v=a(708),h=a.n(v),m=a(733),g=a.n(m),x=a(740),y=a.n(x),k=a(768),M=a.n(k),w=a(1),C=a(698),z=Object(c.a)(o.a)({padding:8,background:"rgba(66, 103, 178, 0.2)","& svg":{color:"#4267B2"},"&:hover":{background:"#4267B2","& svg":{color:"#fff"}}}),P=Object(c.a)(o.a)({padding:8,background:"rgba(29, 161, 242, 0.2)","& svg":{color:"#1DA1F2"},"&:hover":{background:"#1DA1F2","& svg":{color:"#fff"}}}),_=Object(c.a)(o.a)({padding:8,background:"rgba(14, 118, 168, 0.12)","& svg":{color:"#0E76A8"},"&:hover":{background:"#0E76A8","& svg":{color:"#fff"}}});t.a=function(e){var t=e.avatar,a=e.name,c=e.status,o=Object(i.a)(),v=t&&C("./".concat(t)).default,m=Object(n.useState)(null),x=Object(r.a)(m,2),k=x[0],S=x[1],W=function(){S(null)};return Object(w.jsx)(s.a,{sx:{p:2,background:"dark"===o.palette.mode?o.palette.dark.main:o.palette.grey[50],border:"1px solid",borderColor:"dark"===o.palette.mode?"transparent":o.palette.grey[100],"&:hover":{border:"1px solid".concat(o.palette.primary.main)}},children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:12,children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(w.jsx)(f.a,{alt:a,src:v,sx:{width:72,height:72}})}),Object(w.jsxs)(l.a,{item:!0,children:[Object(w.jsx)(d.a,{size:"small",sx:{mt:-.75,mr:-.75},children:Object(w.jsx)(h.a,{fontSize:"small",color:"inherit","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6},onClick:function(e){S(e.currentTarget)}})}),Object(w.jsxs)(u.a,{id:"menu-simple-card",anchorEl:k,keepMounted:!0,open:Boolean(k),onClose:W,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(w.jsx)(b.a,{onClick:W,children:"Edit"}),Object(w.jsx)(b.a,{onClick:W,children:"Delete"})]})]})]})}),Object(w.jsx)(l.a,{item:!0,xs:12,alignItems:"center",children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(w.jsx)(j.a,{variant:"h4",children:a})}),Object(w.jsx)(l.a,{item:!0,children:"Active"===c?Object(w.jsx)(p.a,{label:"Active",size:"small",sx:{bgcolor:"dark"===o.palette.mode?o.palette.dark.dark:"success.light",color:"success.dark"}}):Object(w.jsx)(p.a,{label:"Rejected",size:"small",sx:{bgcolor:"dark"===o.palette.mode?o.palette.dark.dark:"error.light",color:"error.dark"}})})]})}),Object(w.jsx)(l.a,{item:!0,xs:12,children:Object(w.jsxs)(l.a,{container:!0,spacing:2,children:[Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(z,{fullWidth:!0,children:Object(w.jsx)(g.a,{fontSize:"small"})})}),Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(P,{fullWidth:!0,children:Object(w.jsx)(y.a,{fontSize:"small"})})}),Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(_,{fullWidth:!0,children:Object(w.jsx)(M.a,{fontSize:"small"})})})]})})]})})}},1937:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(64),c=a.n(n),i=a(99),o=a(13),s=a(0),l=a(29),d=a(49),u=a(55),b=a(665),j=a(666),p=a(2016),f=a(670),O=a(380),v=a(724),h=a(1249),m=a(179),g=a(269),x=a(56),y=a(14),k=a(864),M=a.n(k),w=a(1);t.default=function(){var e=Object(l.a)(),t=Object(s.useState)([]),a=Object(o.a)(t,2),n=a[0],k=a[1],C=function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/simple-card/list");case 2:t=e.sent,k(t.data.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=Object(s.useState)(null),P=Object(o.a)(z,2),_=P[0],S=P[1],W=function(){S(null)};Object(s.useEffect)((function(){C()}),[]);var I=Object(s.useState)(""),V=Object(o.a)(I,2),D=V[0],R=V[1],B=function(){var e=Object(i.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===t||void 0===t?void 0:t.target.value,R(a),!a){e.next=7;break}return e.next=5,g.a.post("/api/simple-card/filter",{key:a}).then((function(e){k(e.data.results)}));case 5:e.next=8;break;case 7:C();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(w.jsx)(w.Fragment,{});return n&&(A=n.map((function(e,t){return Object(w.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(w.jsx)(h.a,Object(r.a)({},e))},t)}))),Object(w.jsx)(m.a,{title:Object(w.jsxs)(d.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:x.c,children:[Object(w.jsx)(d.a,{item:!0,children:Object(w.jsx)(u.a,{variant:"h3",children:"Cards"})}),Object(w.jsx)(d.a,{item:!0,children:Object(w.jsx)(b.a,{id:"input-search-card-style2",placeholder:"Search",value:D,onChange:B,startAdornment:Object(w.jsx)(j.a,{position:"start",children:Object(w.jsx)(y.lb,{stroke:1.5,size:"1rem"})}),size:"small"})})]}),children:Object(w.jsxs)(d.a,{container:!0,direction:"row",spacing:x.c,children:[A,Object(w.jsx)(d.a,{item:!0,xs:12,children:Object(w.jsxs)(d.a,{container:!0,justifyContent:"space-between",spacing:x.c,children:[Object(w.jsx)(d.a,{item:!0,children:Object(w.jsx)(p.a,{count:10,color:"primary"})}),Object(w.jsxs)(d.a,{item:!0,children:[Object(w.jsx)(f.a,{variant:"text",size:"large",sx:{color:e.palette.grey[900]},color:"secondary",endIcon:Object(w.jsx)(M.a,{}),onClick:function(e){S(e.currentTarget)},children:"10 Rows"}),Object(w.jsxs)(O.a,{id:"menu-user-card-style2",anchorEl:_,keepMounted:!0,open:Boolean(_),onClose:W,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[Object(w.jsx)(v.a,{onClick:W,children:" 10 Rows"}),Object(w.jsx)(v.a,{onClick:W,children:" 20 Rows"}),Object(w.jsx)(v.a,{onClick:W,children:" 30 Rows "})]})]})]})})]})})}},708:function(e,t,a){"use strict";var r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(111)),c=a(1),i=(0,n.default)((0,c.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHorizOutlined");t.default=i},724:function(e,t,a){"use strict";var r=a(5),n=a(7),c=a(2),i=a(0),o=(a(10),a(8)),s=a(98),l=a(78),d=a(6),u=a(11),b=a(51),j=a(386),p=a(70),f=a(22),O=a(372),v=a(376),h=a(214),m=a(63),g=a(68);function x(e){return Object(m.a)("MuiMenuItem",e)}var y=Object(g.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),k=a(1),M=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=Object(d.a)(j.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return Object(c.a)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat(a.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:a.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(r.a)(t,"&.".concat(y.selected),Object(r.a)({backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(r.a)(t,"&.".concat(y.selected,":hover"),{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),Object(r.a)(t,"&.".concat(y.focusVisible),{backgroundColor:a.palette.action.focus}),Object(r.a)(t,"&.".concat(y.disabled),{opacity:a.palette.action.disabledOpacity}),Object(r.a)(t,"& + .".concat(O.a.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),Object(r.a)(t,"& + .".concat(O.a.inset),{marginLeft:52}),Object(r.a)(t,"& .".concat(h.a.root),{marginTop:0,marginBottom:0}),Object(r.a)(t,"& .".concat(h.a.inset),{paddingLeft:36}),Object(r.a)(t,"& .".concat(v.a.root),{minWidth:36}),t),!n.dense&&Object(r.a)({},a.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&Object(c.a)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,Object(r.a)({},"& .".concat(v.a.root," svg"),{fontSize:"1.25rem"})))})),C=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiMenuItem"}),r=a.autoFocus,l=void 0!==r&&r,d=a.component,j=void 0===d?"li":d,O=a.dense,v=void 0!==O&&O,h=a.divider,m=void 0!==h&&h,g=a.disableGutters,y=void 0!==g&&g,C=a.focusVisibleClassName,z=a.role,P=void 0===z?"menuitem":z,_=a.tabIndex,S=Object(n.a)(a,M),W=i.useContext(b.a),I={dense:v||W.dense||!1,disableGutters:y},V=i.useRef(null);Object(p.a)((function(){l&&V.current&&V.current.focus()}),[l]);var D,R=Object(c.a)({},a,{dense:I.dense,divider:m,disableGutters:y}),B=function(e){var t=e.disabled,a=e.dense,r=e.divider,n=e.disableGutters,i=e.selected,o=e.classes,l={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",r&&"divider",i&&"selected"]},d=Object(s.a)(l,x,o);return Object(c.a)({},o,d)}(a),A=Object(f.a)(V,t);return a.disabled||(D=void 0!==_?_:-1),Object(k.jsx)(b.a.Provider,{value:I,children:Object(k.jsx)(w,Object(c.a)({ref:A,role:P,tabIndex:D,component:j,focusVisibleClassName:Object(o.default)(B.focusVisible,C)},S,{ownerState:R,classes:B}))})}));t.a=C},733:function(e,t,a){"use strict";var r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=n?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}r.default=e,a&&a.set(e,r)}(a(0));var n=r(a(111)),c=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,n.default)((0,c.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.default=o},740:function(e,t,a){"use strict";var r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=n?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}r.default=e,a&&a.set(e,r)}(a(0));var n=r(a(111)),c=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,n.default)((0,c.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=o},768:function(e,t,a){"use strict";var r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=n?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(r,c,o):r[c]=e[c]}r.default=e,a&&a.set(e,r)}(a(0));var n=r(a(111)),c=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,n.default)((0,c.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=o},864:function(e,t,a){"use strict";var r=a(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(111)),c=a(1),i=(0,n.default)((0,c.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"}),"ExpandMoreRounded");t.default=i}}]);
//# sourceMappingURL=80.29e58cbe.chunk.js.map