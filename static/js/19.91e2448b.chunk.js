(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[19],{1020:function(e,t,n){"use strict";var r=n(4),a=n(64),c=n.n(a),i=n(99),o=n(13),s=n(0),l=n(46),d=n(32),u=n(29),b=n(642),j=n(49),m=n(670),h=n(155),x=n(264),p=n(55),O=n(600),f=n(268),v=n(674),g=n(665),y=n(676),w=n(666),k=n(604),C=n(156),S=n(701),z=n(693),M=n(694),I=n(134),R=n(697),V=n(779),B=n(181),P=n(780),E=n(720),W=n.n(E),D=n(728),A=n.n(D),F=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(u.a)(),a=Object(R.a)(),E=Object(b.a)(n.breakpoints.down("md")),D=Object(d.d)((function(e){return e.customization})),H=Object(s.useState)(!1),L=Object(o.a)(H,2),N=L[0],_=L[1],G=Object(s.useState)(!0),q=Object(o.a)(G,2),T=q[0],J=q[1],U=Object(s.useState)(0),Z=Object(o.a)(U,2),$=Z[0],K=Z[1],Q=Object(s.useState)(),X=Object(o.a)(Q,2),Y=X[0],ee=X[1],te=Object(I.a)(),ne=te.firebaseRegister,re=te.firebaseGoogleSignIn,ae=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){_(!N)},ie=function(e){e.preventDefault()},oe=function(e){var t=Object(P.b)(e);K(t),ee(Object(P.a)(t))};return Object(s.useEffect)((function(){oe("123456")}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(j.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(F.jsx)(j.a,{item:!0,xs:12,children:Object(F.jsx)(B.a,{children:Object(F.jsxs)(m.a,{variant:"outlined",fullWidth:!0,onClick:ae,size:"large",sx:{color:"grey.700",backgroundColor:"dark"===n.palette.mode?n.palette.dark.main:n.palette.grey[50],borderColor:"dark"===n.palette.mode?n.palette.dark.light+20:n.palette.grey[100]},children:[Object(F.jsx)(h.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(F.jsx)("img",{src:V.a,alt:"google",width:16,height:16,style:{marginRight:E?8:16}})}),"Sign up with Google"]})})}),Object(F.jsx)(j.a,{item:!0,xs:12,children:Object(F.jsxs)(h.a,{sx:{alignItems:"center",display:"flex"},children:[Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(F.jsx)(m.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"dark"===n.palette.mode?"".concat(n.palette.dark.light+20," !important"):"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(D.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(F.jsx)(x.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(F.jsx)(j.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(F.jsx)(h.a,{sx:{mb:2},children:Object(F.jsx)(p.a,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),Object(F.jsx)(M.b,{initialValues:{email:"",password:"",submit:null},validationSchema:z.d().shape({email:z.f().email("Must be a valid email").max(255).required("Email is required"),password:z.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,i=n.setStatus,o=n.setSubmitting,e.prev=1,e.next=4,ne(t.email,t.password).then((function(){}),(function(e){a.current&&(i({success:!1}),r({submit:e.message}),o(!1))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),a.current&&(i({success:!1}),r({submit:e.t0.message}),o(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,c=e.handleBlur,i=e.handleChange,o=e.handleSubmit,s=e.isSubmitting,d=e.touched,u=e.values;return Object(F.jsxs)("form",Object(r.a)(Object(r.a)({noValidate:!0,onSubmit:o},t),{},{children:[Object(F.jsxs)(j.a,{container:!0,spacing:E?0:2,children:[Object(F.jsx)(j.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(O.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:Object(r.a)({},n.typography.customInput)})}),Object(F.jsx)(j.a,{item:!0,xs:12,sm:6,children:Object(F.jsx)(O.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:Object(r.a)({},n.typography.customInput)})})]}),Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.email&&a.email),sx:Object(r.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(F.jsx)(g.a,{id:"outlined-adornment-email-register",type:"email",value:u.email,name:"email",onBlur:c,onChange:i,inputProps:{}}),d.email&&a.email&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text--register",children:a.email})]}),Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.password&&a.password),sx:Object(r.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(F.jsx)(g.a,{id:"outlined-adornment-password-register",type:N?"text":"password",value:u.password,name:"password",label:"Password",onBlur:c,onChange:function(e){i(e),oe(e.target.value)},endAdornment:Object(F.jsx)(w.a,{position:"end",children:Object(F.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:ce,onMouseDown:ie,edge:"end",size:"large",children:N?Object(F.jsx)(W.a,{}):Object(F.jsx)(A.a,{})})}),inputProps:{}}),d.password&&a.password&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-register",children:a.password})]}),0!==$&&Object(F.jsx)(f.a,{fullWidth:!0,children:Object(F.jsx)(h.a,{sx:{mb:2},children:Object(F.jsxs)(j.a,{container:!0,spacing:2,alignItems:"center",children:[Object(F.jsx)(j.a,{item:!0,children:Object(F.jsx)(h.a,{style:{backgroundColor:null===Y||void 0===Y?void 0:Y.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(F.jsx)(j.a,{item:!0,children:Object(F.jsx)(p.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===Y||void 0===Y?void 0:Y.label})})]})})}),Object(F.jsx)(j.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(F.jsx)(j.a,{item:!0,children:Object(F.jsx)(C.a,{control:Object(F.jsx)(S.a,{checked:T,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:Object(F.jsxs)(p.a,{variant:"subtitle1",children:["Agree with \xa0",Object(F.jsx)(p.a,{variant:"subtitle1",component:l.b,to:"#",children:"Terms & Condition."})]})})})}),a.submit&&Object(F.jsx)(h.a,{sx:{mt:3},children:Object(F.jsx)(y.a,{error:!0,children:a.submit})}),Object(F.jsx)(h.a,{sx:{mt:2},children:Object(F.jsx)(B.a,{children:Object(F.jsx)(m.a,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})]})}},1982:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n(29),c=n(642),i=n(49),o=n(591),s=n(55),l=n(264),d=n(703),u=n(690),b=n(270),j=n(1020),m=n(704),h=n(134),x=n(1);t.default=function(){var e=Object(a.a)(),t=Object(h.a)().isLoggedIn,n=Object(c.a)(e.breakpoints.down("md"));return Object(x.jsx)(d.a,{children:Object(x.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(i.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(x.jsx)(i.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(x.jsx)(u.a,{children:Object(x.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(x.jsx)(i.a,{item:!0,sx:{mb:3},children:Object(x.jsx)(r.b,{to:"#",children:Object(x.jsx)(b.a,{})})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(i.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(x.jsx)(i.a,{item:!0,children:Object(x.jsxs)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(x.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Sign up"}),Object(x.jsx)(s.a,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(j.a,{})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(l.a,{})}),Object(x.jsx)(i.a,{item:!0,xs:12,children:Object(x.jsx)(i.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(x.jsx)(s.a,{component:r.b,to:t?"/pages/login/login3":"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),Object(x.jsx)(i.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(x.jsx)(m.a,{})})]})})}},683:function(e,t,n){"use strict";var r=n(13),a=n(5),c=n(7),i=n(2),o=n(0),s=(n(10),n(8)),l=n(98),d=n(15),u=n(78),b=n(9),j=n(6),m=n(11),h=n(132),x=n(22),p=n(55),O=n(63),f=n(68);function v(e){return Object(O.a)("MuiLink",e)}var g=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=Object(j.a)(p.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(d.b)(t,"palette.".concat(function(e){return k[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(u.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(a.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),S=o.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),a=n.className,d=n.color,u=void 0===d?"primary":d,j=n.component,p=void 0===j?"a":j,O=n.onBlur,f=n.onFocus,g=n.TypographyClasses,k=n.underline,S=void 0===k?"always":k,z=n.variant,M=void 0===z?"inherit":z,I=Object(c.a)(n,w),R=Object(h.a)(),V=R.isFocusVisibleRef,B=R.onBlur,P=R.onFocus,E=R.ref,W=o.useState(!1),D=Object(r.a)(W,2),A=D[0],F=D[1],H=Object(x.a)(t,E),L=Object(i.a)({},n,{color:u,component:p,focusVisible:A,underline:S,variant:M}),N=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,c={root:["root","underline".concat(Object(b.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(l.a)(c,v,t)}(L);return Object(y.jsx)(C,Object(i.a)({className:Object(s.default)(N.root,a),classes:g,color:u,component:p,onBlur:function(e){B(e),!1===V.current&&F(!1),O&&O(e)},onFocus:function(e){P(e),!0===V.current&&F(!0),f&&f(e)},ref:H,ownerState:L,variant:M},I))}));t.a=S},690:function(e,t,n){"use strict";var r=n(4),a=n(79),c=n(155),i=n(179),o=n(1),s=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,s);return Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(o.jsx)(c.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},697:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},701:function(e,t,n){"use strict";var r=n(5),a=n(7),c=n(2),i=n(0),o=(n(10),n(98)),s=n(78),l=n(182),d=n(31),u=n(1),b=Object(d.a)(Object(u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(d.a)(Object(u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(9),x=n(11),p=n(6),O=n(63),f=n(68);function v(e){return Object(O.a)("MuiCheckbox",e)}var g=Object(f.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],w=Object(p.a)(l.a,{shouldForwardProp:function(e){return Object(p.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(h.a)(n.color))]]}})((function(e){var t,n=e.theme,a=e.ownerState;return Object(c.a)({color:n.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:Object(s.a)("default"===a.color?n.palette.action.active:n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},Object(r.a)(t,"&.".concat(g.checked,", &.").concat(g.indeterminate),{color:n.palette[a.color].main}),Object(r.a)(t,"&.".concat(g.disabled),{color:n.palette.action.disabled}),t))})),k=Object(u.jsx)(j,{}),C=Object(u.jsx)(b,{}),S=Object(u.jsx)(m,{}),z=i.forwardRef((function(e,t){var n,r,s=Object(x.a)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,d=void 0===l?k:l,b=s.color,j=void 0===b?"primary":b,m=s.icon,p=void 0===m?C:m,O=s.indeterminate,f=void 0!==O&&O,g=s.indeterminateIcon,z=void 0===g?S:g,M=s.inputProps,I=s.size,R=void 0===I?"medium":I,V=Object(a.a)(s,y),B=f?z:p,P=f?z:d,E=Object(c.a)({},s,{color:j,indeterminate:f,size:R}),W=function(e){var t=e.classes,n=e.indeterminate,r=e.color,a={root:["root",n&&"indeterminate","color".concat(Object(h.a)(r))]},i=Object(o.a)(a,v,t);return Object(c.a)({},t,i)}(E);return Object(u.jsx)(w,Object(c.a)({type:"checkbox",inputProps:Object(c.a)({"data-indeterminate":f},M),icon:i.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:R}),checkedIcon:i.cloneElement(P,{fontSize:null!=(r=P.props.fontSize)?r:R}),ownerState:E,ref:t},V,{classes:W}))}));t.a=z},703:function(e,t,n){"use strict";var r=n(6),a=Object(r.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},704:function(e,t,n){"use strict";var r=n(591),a=n(55),c=n(683),i=n(1);t.a=function(){return Object(i.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(i.jsx)(a.a,{variant:"subtitle2",component:c.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(i.jsx)(a.a,{variant:"subtitle2",component:c.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},720:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),c=n(1),i=(0,a.default)((0,c.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},728:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),c=n(1),i=(0,a.default)((0,c.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},779:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(33),a=n.n(r),c=function(e){return e<2?{label:"Poor",color:a.a.errorMain}:e<3?{label:"Weak",color:a.a.warningDark}:e<4?{label:"Normal",color:a.a.orangeMain}:e<5?{label:"Good",color:a.a.successMain}:e<6?{label:"Strong",color:a.a.successDark}:{label:"Poor",color:a.a.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}}}]);
//# sourceMappingURL=19.91e2448b.chunk.js.map