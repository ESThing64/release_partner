(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[56],{1022:function(e,t,n){"use strict";var r=n(4),a=n(64),o=n.n(a),i=n(99),s=n(13),c=n(0),l=n(29),d=n(268),u=n(674),b=n(665),j=n(666),m=n(604),p=n(676),h=n(155),f=n(49),x=n(55),O=n(670),g=n(693),v=n(694),w=n(697),y=n(181),k=n(780),C=n(720),P=n.n(C),S=n(728),M=n.n(S),z=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(l.a)(),a=Object(w.a)(),C=Object(c.useState)(!1),S=Object(s.a)(C,2),E=S[0],R=S[1],B=Object(c.useState)(0),I=Object(s.a)(B,2),W=I[0],D=I[1],V=Object(c.useState)(),A=Object(s.a)(V,2),F=A[0],H=A[1],_=function(){R(!E)},L=function(e){e.preventDefault()},N=function(e){var t=Object(k.b)(e);D(t),H(Object(k.a)(t))};return Object(c.useEffect)((function(){N("123456")}),[]),Object(z.jsx)(v.b,{initialValues:{email:"info@codedthemes.com",password:"123456",confirmPassword:"123456",submit:null},validationSchema:g.d().shape({password:g.f().max(255).required("Password is required"),confirmPassword:g.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:g.f().oneOf([g.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,i=n.setStatus,s=n.setSubmitting;try{a.current&&(i({success:!0}),s(!1))}catch(t){console.error(t),a.current&&(i({success:!1}),r({submit:t.message}),s(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,o=e.handleBlur,i=e.handleChange,s=e.handleSubmit,c=e.isSubmitting,l=e.touched,g=e.values;return Object(z.jsxs)("form",Object(r.a)(Object(r.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(z.jsxs)(d.a,{fullWidth:!0,error:Boolean(l.password&&a.password),sx:Object(r.a)({},n.typography.customInput),children:[Object(z.jsx)(u.a,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),Object(z.jsx)(b.a,{id:"outlined-adornment-password-reset",type:E?"text":"password",value:g.password,name:"password",onBlur:o,onChange:function(e){i(e),N(e.target.value)},endAdornment:Object(z.jsx)(j.a,{position:"end",children:Object(z.jsx)(m.a,{"aria-label":"toggle password visibility",onClick:_,onMouseDown:L,edge:"end",size:"large",children:E?Object(z.jsx)(P.a,{}):Object(z.jsx)(M.a,{})})}),inputProps:{}})]}),l.password&&a.password&&Object(z.jsx)(d.a,{fullWidth:!0,children:Object(z.jsx)(p.a,{error:!0,id:"standard-weight-helper-text-reset",children:a.password})}),0!==W&&Object(z.jsx)(d.a,{fullWidth:!0,children:Object(z.jsx)(h.a,{sx:{mb:2},children:Object(z.jsxs)(f.a,{container:!0,spacing:2,alignItems:"center",children:[Object(z.jsx)(f.a,{item:!0,children:Object(z.jsx)(h.a,{style:{backgroundColor:null===F||void 0===F?void 0:F.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(z.jsx)(f.a,{item:!0,children:Object(z.jsx)(x.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===F||void 0===F?void 0:F.label})})]})})}),Object(z.jsxs)(d.a,{fullWidth:!0,error:Boolean(l.confirmPassword&&a.confirmPassword),sx:Object(r.a)({},n.typography.customInput),children:[Object(z.jsx)(u.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(z.jsx)(b.a,{id:"outlined-adornment-confirm-password",type:"password",value:g.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:o,onChange:i,inputProps:{}})]}),l.confirmPassword&&a.confirmPassword&&Object(z.jsx)(d.a,{fullWidth:!0,children:Object(z.jsxs)(p.a,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",a.confirmPassword," "]})}),a.submit&&Object(z.jsx)(h.a,{sx:{mt:3},children:Object(z.jsx)(p.a,{error:!0,children:a.submit})}),Object(z.jsx)(h.a,{sx:{mt:1},children:Object(z.jsx)(y.a,{children:Object(z.jsx)(O.a,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})}},2061:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n(29),o=n(642),i=n(49),s=n(591),c=n(155),l=n(55),d=n(781),u=n(690),b=n(270),j=n(1022),m=n(783),p=n(704),h=n(705),f=n.p+"static/media/img-a2-resetpass.67b5c20b.svg",x=n(1),O=[{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(a.a)(),t=Object(o.a)(e.breakpoints.down("md")),n=Object(o.a)(e.breakpoints.down("lg"));return Object(x.jsx)(d.a,{children:Object(x.jsxs)(i.a,{container:!0,justifyContent:t?"center":"space-between",alignItems:"center",children:[Object(x.jsx)(i.a,{item:!0,md:6,lg:7,xs:12,sx:{minHeight:"100vh"},children:Object(x.jsxs)(i.a,{sx:{minHeight:"100vh"},container:!0,alignItems:t?"center":"flex-start",justifyContent:t?"center":"space-between",children:[Object(x.jsx)(i.a,{item:!0,sx:{display:{xs:"none",md:"block"},m:3},children:Object(x.jsx)(r.b,{to:"#",children:Object(x.jsx)(b.a,{})})}),Object(x.jsx)(i.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 68px)",md:"calc(100vh - 152px)"}},children:Object(x.jsxs)(s.a,{justifyContent:"center",alignItems:"center",spacing:5,m:2,children:[Object(x.jsx)(c.a,{component:r.b,to:"#",sx:{display:{xs:"block",md:"none"}},children:Object(x.jsx)(b.a,{})}),Object(x.jsx)(u.a,{border:n,children:Object(x.jsxs)(i.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsxs)(s.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(x.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),Object(x.jsx)(l.a,{variant:"caption",fontSize:"16px",textAlign:"center",children:"Please choose your new password"})]})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(j.a,{})})]})})]})}),Object(x.jsx)(i.a,{item:!0,xs:12,sx:{m:3},children:Object(x.jsx)(p.a,{})})]})}),Object(x.jsx)(i.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(x.jsx)(m.a,{children:Object(x.jsxs)(i.a,{item:!0,container:!0,justifyContent:"center",children:[Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(i.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(x.jsx)(i.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(x.jsx)(h.a,{items:O})})})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)("img",{alt:"Auth method",src:f,style:{maxWidth:"100%",margin:"0 auto",display:"block",width:300}})})]})})})]})})}},683:function(e,t,n){"use strict";var r=n(13),a=n(5),o=n(7),i=n(2),s=n(0),c=(n(10),n(8)),l=n(98),d=n(15),u=n(78),b=n(9),j=n(6),m=n(11),p=n(132),h=n(22),f=n(55),x=n(63),O=n(68);function g(e){return Object(x.a)("MuiLink",e)}var v=Object(O.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(1),y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(f.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(d.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(u.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),P=s.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),a=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,f=void 0===j?"a":j,x=n.onBlur,O=n.onFocus,v=n.TypographyClasses,k=n.underline,P=void 0===k?"always":k,S=n.variant,M=void 0===S?"inherit":S,z=Object(o.a)(n,y),E=Object(p.a)(),R=E.isFocusVisibleRef,B=E.onBlur,I=E.onFocus,W=E.ref,D=s.useState(!1),V=Object(r.a)(D,2),A=V[0],F=V[1],H=Object(h.a)(t,W),_=Object(i.a)({},n,{color:u,component:f,focusVisible:A,underline:P,variant:M}),L=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(b.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(o,g,t)}(_);return Object(w.jsx)(C,Object(i.a)({className:Object(c.default)(L.root,a),classes:v,color:u,component:f,onBlur:function(e){B(e),!1===R.current&&F(!1),x&&x(e)},onFocus:function(e){I(e),!0===R.current&&F(!0),O&&O(e)},ref:H,ownerState:_,variant:M},z))}));t.a=P},690:function(e,t,n){"use strict";var r=n(4),a=n(79),o=n(155),i=n(179),s=n(1),c=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,c);return Object(s.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(o.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},697:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},704:function(e,t,n){"use strict";var r=n(591),a=n(55),o=n(683),i=n(1);t.a=function(){return Object(i.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(i.jsx)(a.a,{variant:"subtitle2",component:o.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(i.jsx)(a.a,{variant:"subtitle2",component:o.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},705:function(e,t,n){"use strict";var r=n(4),a=n(49),o=n(55),i=n(729),s=n.n(i),c=n(1);t.a=function(e){var t=e.items;return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(c.jsxs)(a.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(c.jsx)(a.a,{item:!0,children:Object(c.jsx)(o.a,{variant:"h1",children:e.title})}),Object(c.jsx)(a.a,{item:!0,children:Object(c.jsx)(o.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},720:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},728:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),o=n(1),i=(0,a.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(33),a=n.n(r),o=function(e){return e<2?{label:"Poor",color:a.a.errorMain}:e<3?{label:"Weak",color:a.a.warningDark}:e<4?{label:"Normal",color:a.a.orangeMain}:e<5?{label:"Good",color:a.a.successMain}:e<6?{label:"Strong",color:a.a.successDark}:{label:"Poor",color:a.a.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},781:function(e,t,n){"use strict";var r=n(5),a=n(6),o=Object(a.a)("div")((function(e){var t=e.theme;return Object(r.a)({backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.background.paper,minHeight:"100vh"},t.breakpoints.down("lg"),{backgroundColor:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light})}));t.a=o},783:function(e,t,n){"use strict";var r=n(29),a=n(155),o=n.p+"static/media/img-a2-grid.51f4cf81.svg",i=n.p+"static/media/img-a2-grid-dark.ee5f31a9.svg",s=n(1);t.a=function(e){var t=e.children,n=Object(r.a)();return Object(s.jsx)(a.a,{component:"span",sx:{display:"flex",minHeight:"100%",height:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(o,")"),position:"absolute",backgroundPosition:"bottom left",backgroundRepeat:"no-repeat",overflow:"hidden",m:"0 0 0 auto",p:"100px 0",top:0,left:0,right:0,bottom:0,"& > *":{position:"relative",zIndex:5},"&:after":{content:'""',position:"absolute",top:0,left:0,right:0,zIndex:1,bottom:0,bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:n.palette.primary.light,opacity:"dark"===n.palette.mode?.85:.9}},children:t})}}}]);
//# sourceMappingURL=56.31894c38.chunk.js.map