(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[64],{1022:function(e,t,n){"use strict";var r=n(4),a=n(64),s=n.n(a),i=n(99),c=n(13),o=n(0),l=n(29),d=n(268),u=n(674),j=n(665),b=n(666),h=n(604),m=n(676),p=n(155),f=n(49),x=n(55),O=n(670),g=n(693),w=n(694),v=n(697),y=n(181),k=n(780),P=n(720),C=n.n(P),S=n(728),E=n.n(S),M=n(1);t.a=function(e){var t=Object.assign({},e),n=Object(l.a)(),a=Object(v.a)(),P=Object(o.useState)(!1),S=Object(c.a)(P,2),z=S[0],I=S[1],R=Object(o.useState)(0),B=Object(c.a)(R,2),W=B[0],D=B[1],_=Object(o.useState)(),A=Object(c.a)(_,2),V=A[0],H=A[1],q=function(){I(!z)},F=function(e){e.preventDefault()},G=function(e){var t=Object(k.b)(e);D(t),H(Object(k.a)(t))};return Object(o.useEffect)((function(){G("123456")}),[]),Object(M.jsx)(w.b,{initialValues:{email:"info@codedthemes.com",password:"123456",confirmPassword:"123456",submit:null},validationSchema:g.d().shape({password:g.f().max(255).required("Password is required"),confirmPassword:g.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:g.f().oneOf([g.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.setErrors,i=n.setStatus,c=n.setSubmitting;try{a.current&&(i({success:!0}),c(!1))}catch(t){console.error(t),a.current&&(i({success:!1}),r({submit:t.message}),c(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,s=e.handleBlur,i=e.handleChange,c=e.handleSubmit,o=e.isSubmitting,l=e.touched,g=e.values;return Object(M.jsxs)("form",Object(r.a)(Object(r.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(M.jsxs)(d.a,{fullWidth:!0,error:Boolean(l.password&&a.password),sx:Object(r.a)({},n.typography.customInput),children:[Object(M.jsx)(u.a,{htmlFor:"outlined-adornment-password-reset",children:"Password"}),Object(M.jsx)(j.a,{id:"outlined-adornment-password-reset",type:z?"text":"password",value:g.password,name:"password",onBlur:s,onChange:function(e){i(e),G(e.target.value)},endAdornment:Object(M.jsx)(b.a,{position:"end",children:Object(M.jsx)(h.a,{"aria-label":"toggle password visibility",onClick:q,onMouseDown:F,edge:"end",size:"large",children:z?Object(M.jsx)(C.a,{}):Object(M.jsx)(E.a,{})})}),inputProps:{}})]}),l.password&&a.password&&Object(M.jsx)(d.a,{fullWidth:!0,children:Object(M.jsx)(m.a,{error:!0,id:"standard-weight-helper-text-reset",children:a.password})}),0!==W&&Object(M.jsx)(d.a,{fullWidth:!0,children:Object(M.jsx)(p.a,{sx:{mb:2},children:Object(M.jsxs)(f.a,{container:!0,spacing:2,alignItems:"center",children:[Object(M.jsx)(f.a,{item:!0,children:Object(M.jsx)(p.a,{style:{backgroundColor:null===V||void 0===V?void 0:V.color},sx:{width:85,height:8,borderRadius:"7px"}})}),Object(M.jsx)(f.a,{item:!0,children:Object(M.jsx)(x.a,{variant:"subtitle1",fontSize:"0.75rem",children:null===V||void 0===V?void 0:V.label})})]})})}),Object(M.jsxs)(d.a,{fullWidth:!0,error:Boolean(l.confirmPassword&&a.confirmPassword),sx:Object(r.a)({},n.typography.customInput),children:[Object(M.jsx)(u.a,{htmlFor:"outlined-adornment-confirm-password",children:"Confirm Password"}),Object(M.jsx)(j.a,{id:"outlined-adornment-confirm-password",type:"password",value:g.confirmPassword,name:"confirmPassword",label:"Confirm Password",onBlur:s,onChange:i,inputProps:{}})]}),l.confirmPassword&&a.confirmPassword&&Object(M.jsx)(d.a,{fullWidth:!0,children:Object(M.jsxs)(m.a,{error:!0,id:"standard-weight-helper-text-confirm-password",children:[" ",a.confirmPassword," "]})}),a.submit&&Object(M.jsx)(p.a,{sx:{mt:3},children:Object(M.jsx)(m.a,{error:!0,children:a.submit})}),Object(M.jsx)(p.a,{sx:{mt:1},children:Object(M.jsx)(y.a,{children:Object(M.jsx)(O.a,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})}},2041:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(46),s=n(6),i=n(29),c=n(642),o=n(49),l=n(591),d=n(55),u=n(703),j=n(690),b=n(270),h=n(1022),m=n(782),p=n(705),f=n.p+"static/media/auth-reset-error-card.c3149310.svg",x=n.p+"static/media/auth-reset-purple-card.1c70d7ae.svg",O=n(1),g=Object(s.a)("span")((function(e){var t=e.theme;return{"&:after":Object(r.a)({content:'""',position:"absolute",top:"35%",left:"35%",width:400,height:400,backgroundImage:"url(".concat(x,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite"},t.breakpoints.down("xl"),{left:"25%",top:"35%"}),"&:before":Object(r.a)({content:'""',position:"absolute",top:"12%",left:"25%",width:400,height:270,backgroundImage:"url(".concat(f,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",animation:"15s wings ease-in-out infinite",animationDelay:"1s"},t.breakpoints.down("xl"),{top:"10%",left:"15%"})}})),w=[{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"},{title:"Configurable Elements, East to Setup",description:"Powerful and easy to use multipurpose theme"}];t.default=function(){var e=Object(i.a)(),t=Object(c.a)(e.breakpoints.down("md"));return Object(O.jsx)(u.a,{children:Object(O.jsxs)(o.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh"},children:[Object(O.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,sx:{my:3},children:Object(O.jsx)(j.a,{children:Object(O.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsxs)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:t?"center":"inherit",justifyContent:t?"center":"space-between",children:[Object(O.jsx)(o.a,{item:!0,children:Object(O.jsxs)(l.a,{justifyContent:t?"center":"flex-start",textAlign:t?"center":"inherit",children:[Object(O.jsx)(d.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset Password"}),Object(O.jsx)(d.a,{color:"textPrimary",gutterBottom:!0,variant:"h4",children:"Please choose new password."})]})}),Object(O.jsx)(o.a,{item:!0,sx:{mb:{xs:3,sm:0}},children:Object(O.jsx)(a.b,{to:"#",children:Object(O.jsx)(b.a,{})})})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsx)(h.a,{})})]})})}),Object(O.jsx)(o.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(O.jsx)(m.a,{children:Object(O.jsxs)(o.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:[Object(O.jsxs)(o.a,{item:!0,xs:12,children:[Object(O.jsx)("span",{}),Object(O.jsx)(g,{})]}),Object(O.jsx)(o.a,{item:!0,xs:12,children:Object(O.jsx)(o.a,{item:!0,container:!0,justifyContent:"center",sx:{pb:8},children:Object(O.jsx)(o.a,{item:!0,xs:10,lg:8,sx:{"& .slick-list":{pb:2}},children:Object(O.jsx)(p.a,{items:w})})})})]})})})]})})}},690:function(e,t,n){"use strict";var r=n(4),a=n(79),s=n(155),i=n(179),c=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(s.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},697:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},703:function(e,t,n){"use strict";var r=n(6),a=Object(r.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},705:function(e,t,n){"use strict";var r=n(4),a=n(49),s=n(55),i=n(729),c=n.n(i),o=n(1);t.a=function(e){var t=e.items;return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:t.map((function(e,t){return Object(o.jsxs)(a.a,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:[Object(o.jsx)(a.a,{item:!0,children:Object(o.jsx)(s.a,{variant:"h1",children:e.title})}),Object(o.jsx)(a.a,{item:!0,children:Object(o.jsx)(s.a,{variant:"subtitle2",children:e.description})})]},t)}))}))}},720:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),s=n(1),i=(0,a.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},728:function(e,t,n){"use strict";var r=n(91);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(111)),s=n(1),i=(0,a.default)((0,s.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i},780:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n(33),a=n.n(r),s=function(e){return e<2?{label:"Poor",color:a.a.errorMain}:e<3?{label:"Weak",color:a.a.warningDark}:e<4?{label:"Normal",color:a.a.orangeMain}:e<5?{label:"Good",color:a.a.successMain}:e<6?{label:"Strong",color:a.a.successDark}:{label:"Poor",color:a.a.errorMain}},i=function(e){var t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(t+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(t+=1),t}},782:function(e,t,n){"use strict";var r=n(29),a=n(155),s=n.p+"static/media/auth-pattern.d80b0e94.svg",i=n.p+"static/media/auth-pattern-dark.df61463d.svg",c=n(1);t.a=function(e){var t=e.children,n=Object(r.a)();return Object(c.jsx)(a.a,{component:"span",sx:{display:"flex",minHeight:"100vh",bgcolor:"dark"===n.palette.mode?n.palette.dark.dark:"#fff",backgroundImage:"dark"===n.palette.mode?"url(".concat(i,")"):"url(".concat(s,")"),position:"absolute",backgroundPosition:"0 0",overflow:"hidden",m:"0 0 0 auto",top:0,left:0,right:0,bottom:0,opacity:"dark"===n.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=64.774eeeb7.chunk.js.map