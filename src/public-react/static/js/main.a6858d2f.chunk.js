(this["webpackJsonpproject-promo-n-module-3-team-6"]=this["webpackJsonpproject-promo-n-module-3-team-6"]||[]).push([[0],{10:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var l=t(1),c=t(11),s=t.n(c),r=t(2),i=t(3),n=(t(18),t.p+"static/media/photo.e9247c40.jpg"),o=t.p+"static/media/tarjetas-molonas.b70594a4.svg",d=(t(19),t(0)),j=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("header",{className:"form__header",children:Object(d.jsx)("a",{href:"./index.html",alt:"home",title:"Home",children:Object(d.jsx)("img",{className:"form__header--image",src:o,alt:"Awesome cards"})})})})},h=(t(21),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("section",{className:"photo__container",children:[Object(d.jsx)("div",{className:"photo__reset--container",onClick:e.handleReset,children:Object(d.jsxs)("ul",{className:"photo__reset--menu",children:[Object(d.jsx)("li",{className:"photo__reset--text",children:Object(d.jsx)("i",{className:"far fa-trash-alt"})}),Object(d.jsx)("li",{className:"photo__reset--text",children:"Reset"})]})}),Object(d.jsxs)("div",{className:"photo__card--container js-photo palette-".concat(e.paletePreview),children:[Object(d.jsx)("div",{className:"photo__card--rectangle"}),Object(d.jsx)("p",{className:"photo__card--name",children:""===e.dataPreview.name?"Nombre Completo":e.dataPreview.name}),Object(d.jsx)("p",{className:"photo__card--frontend",children:""===e.dataPreview.job?"Front-end developer":e.dataPreview.job}),Object(d.jsx)("img",{className:"photo__card--photo",id:"photo",src:e.image,alt:"user",title:"user",style:{backgroundImage:"url(".concat(e.image,")")}}),Object(d.jsxs)("div",{className:"photo__card--rrss",children:[Object(d.jsx)("a",{href:""===e.dataPreview.phone?"":"tel:".concat(e.dataPreview.phone),id:"telLink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fas fa-mobile-alt photo__card--rrss-icon"})}),Object(d.jsx)("a",{href:""===e.dataPreview.email?"":"mailto:".concat(e.dataPreview.email),id:"emailLink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"far fa-envelope photo__card--rrss-icon"})}),Object(d.jsx)("a",{href:" "===e.dataPreview.linkedin?"":"https://www.linkedin.com/".concat(e.dataPreview.linkedin),id:"linkedinLink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in photo__card--rrss-icon"})}),Object(d.jsx)("a",{href:" "===e.dataPreview.github?"":"https://www.github.com/".concat(e.dataPreview.github),id:"githubLink",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("i",{className:"fab fa-github-alt photo__card--rrss-icon"})})]})]})]})})}),b=(t(10),t(22),function(e){var a=Object(l.useState)("NO"),t=Object(i.a)(a,2),c=t[0],s=t[1],r=Object(l.useState)("ERROR"),n=Object(i.a)(r,2),o=n[0],j=n[1],h=Object(l.useState)(""),b=Object(i.a)(h,2),m=b[0],u=b[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("legend",{className:"share",children:[Object(d.jsxs)("div",{className:"form__parameters",id:"share",onClick:e.handleCollapsable,children:[Object(d.jsxs)("h2",{className:"form__title",children:[Object(d.jsx)("i",{className:"fas fa-share-alt form__icon"}),"Comparte"]}),Object(d.jsx)("i",{className:"fas fa-chevron-down share__arrow form__arrow js__collapsable ".concat(e.arrowShare)})]}),Object(d.jsxs)("fieldset",{className:" dropdown js__fieldset ".concat(e.collapsableShare),children:[Object(d.jsxs)("button",{className:"dropdown__button--create",onClick:function(){fetch("http://localhost:4000/card",{method:"POST",body:JSON.stringify(e.data),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){if(s("YES"),!0===a.success)u(""),j(a.cardURL);else{j(null);var t=[];""===e.data.phone&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar completo tu m\xf3vil"),""===e.data.name&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu nombre"),""===e.data.job&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu profesi\xf3n"),""===e.data.photo&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu foto"),""===e.data.email&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu email"),""===e.data.linkedin&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu linkedin"),""===e.data.github&&t.push("Ups\u2755 \ud83d\ude13, debes rellenar tu github"),1===t.length?u(t[0]):u("Ups\u2755 \ud83d\ude13, revisa todos los campos")}}))},children:[Object(d.jsx)("i",{className:"far fa-address-card"})," Crear tarjeta"]}),Object(d.jsx)("div",{className:"share__section--done  ".concat("NO"===c?"hidden":""),children:null!==o?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"share__section--done__text js_undone",children:"La tarjeta ha sido creada:"}),Object(d.jsx)("a",{className:"share__section--done__link js_url",href:o,target:"_blank",rel:"noreferrer",children:o}),Object(d.jsx)("button",{className:"share__section--done__button js_undone2",children:Object(d.jsxs)("a",{className:"share__section--done__button--link js_twitter_link",href:"https://twitter.com/intent/tweet?url=".concat(o," "),target:"_blank",rel:"noreferrer",children:[Object(d.jsx)("i",{className:"icon3 fab fa-twitter"})," \xa0 Compartir en twitter"]})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"share__section--done__text js_undone",children:"No se ha podido crear la tarjeta"}),Object(d.jsx)("p",{children:m})]})})]}),Object(d.jsx)("hr",{className:"form__line"})]})})}),m=function(e){var a=Object(l.useRef)(),t=new FileReader;return t.addEventListener("load",(function(){e.handleImage(t.result)})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"fill__form--label",htmlFor:"photo photo__square",children:"Imagen de perfil"}),Object(d.jsxs)("label",{htmlFor:"imgselector",className:"fill__form--input photo",children:["A\xf1adir imagen",Object(d.jsx)("input",{ref:a,type:"file",id:"imgselector",name:"imgselector",className:"hide--input js__input fill__form--input photo",required:!0,onChange:function(){var e=a.current.files[0];e&&(console.log(e),t.readAsDataURL(e))}})]}),Object(d.jsx)("div",{className:"fill__form--input photo__square",style:{backgroundImage:"url(".concat(e.image,")")}})]})},u=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",action:"",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsxs)("legend",{className:"design__legend",children:[Object(d.jsxs)("div",{className:"form__parameters",id:"design",onClick:e.handleCollapsable,children:[Object(d.jsxs)("h2",{className:"form__title",children:[Object(d.jsx)("i",{className:"far fa-object-ungroup form__icon"}),"Dise\xf1a"]}),Object(d.jsx)("i",{className:"fas fa-chevron-down design__arrow form__arrow js__collapsable ".concat(e.arrowDesign)})]}),Object(d.jsxs)("fieldset",{className:"design__check js__fieldset ".concat(e.collapsableDesign),children:[Object(d.jsx)("label",{className:"design__check--colors",htmlFor:"color",children:"colores"}),Object(d.jsxs)("section",{className:"design__check--section",children:[Object(d.jsx)("input",{onChange:e.handleChangeColor,className:"palette",type:"radio",id:"palette1",name:"color",value:"1",checked:1===e.data.palette}),Object(d.jsxs)("section",{className:"design__check--section__box",children:[Object(d.jsx)("div",{className:"box box__1"}),Object(d.jsx)("div",{className:"box box__2"}),Object(d.jsx)("div",{className:"box box__3"})]})]}),Object(d.jsxs)("section",{className:"design__check--section",children:[Object(d.jsx)("input",{onChange:e.handleChangeColor,className:"palette",type:"radio",id:"palette2",name:"color",value:"2",checked:2===e.data.palette}),Object(d.jsxs)("section",{className:"design__check--section__box",children:[Object(d.jsx)("div",{className:"box box__4"}),Object(d.jsx)("div",{className:"box box__5"}),Object(d.jsx)("div",{className:"box box__6"})]})]}),Object(d.jsxs)("section",{className:"design__check--section",children:[Object(d.jsx)("input",{onChange:e.handleChangeColor,className:"palette",type:"radio",id:"palette3",name:"color",value:"3",checked:3===e.data.palette}),Object(d.jsxs)("section",{className:"design__check--section__box",children:[Object(d.jsx)("div",{className:"box box__7"}),Object(d.jsx)("div",{className:"box box__8"}),Object(d.jsx)("div",{className:"box box__9"})]})]}),Object(d.jsx)("hr",{})]}),Object(d.jsx)("hr",{className:"form__line"})]}),Object(d.jsxs)("legend",{className:"fill",children:[Object(d.jsxs)("div",{className:"form__parameters",id:"fill",onClick:e.handleCollapsable,children:[Object(d.jsxs)("h2",{className:"form__title",children:[Object(d.jsx)("i",{className:"far fa-keyboard form__icon"}),"Rellena"]}),Object(d.jsx)("i",{className:"fas fa-chevron-down fill__arrow form__arrow js__collapsable ".concat(e.arrowFill)})]}),Object(d.jsxs)("fieldset",{className:"fill__form js__fieldset ".concat(e.collapsableFill),children:[Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"name",children:[" ","Nombre Completo"]}),Object(d.jsx)("input",{className:"fill__form--input name",id:"fullName",type:"text",placeholder:" Ej: Sally Jill",onChange:e.handleInput,value:e.data.name,required:!0}),Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"job",children:[" ","Puesto"]}),Object(d.jsx)("input",{className:"fill__form--input job",id:"job",type:"text",placeholder:" Ej: Front-end unicorn",onChange:e.handleInput,value:e.data.job,required:!0}),Object(d.jsx)(m,{handleImage:e.handleImage,image:e.image}),Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"email",children:[" ","Email"]}),Object(d.jsx)("input",{className:"fill__form--input email",id:"emailFill",type:"email",placeholder:" Ej: sally-hill@gmail.com",onChange:e.handleInput,value:e.data.email,required:!0}),Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"phone",children:[" ","Tel\xe9fono"]}),Object(d.jsx)("input",{className:"fill__form--input tel",id:"telFill",type:"tel",placeholder:" Ej: 555-55-55-55",onChange:e.handleInput,value:e.data.phone,required:!0}),Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"linkedin",children:[" ","Linkedin"]}),Object(d.jsx)("input",{className:"fill__form--input linkedin",id:"linkedinFill",type:"text",placeholder:" Ej: sally.hill",onChange:e.handleInput,value:e.data.linkedin,required:!0}),Object(d.jsxs)("label",{className:"fill__form--label",htmlFor:"github",children:[" ","Github"]}),Object(d.jsx)("input",{className:"fill__form--input github",id:"githubFill",type:"text",placeholder:" Ej: sally-hill",onChange:e.handleInput,value:e.data.github,required:!0})]}),Object(d.jsx)("hr",{className:"form__line"})]}),Object(d.jsx)(b,{data:e.data})]})})},p=(t(23),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("h6",{className:"footer__copyright",children:"ochoPinocho for awesome profile-cards @2021"}),Object(d.jsx)("img",{className:"footer__image",src:"data:image/png;base64,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",alt:"logo Adalab",title:"Logo de Adalab"})]})})});var f=function(){var e=Object(l.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)(n),o=Object(i.a)(s,2),b=o[0],m=o[1],f=Object(l.useState)({palette:1,name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:{defaultImage:n}}),O=Object(i.a)(f,2),_=O[0],x=O[1],g=Object(l.useState)(""),N=Object(i.a)(g,2),w=N[0],v=N[1],I=Object(l.useState)(""),k=Object(i.a)(I,2),C=k[0],A=k[1],q=Object(l.useState)("hidden"),F=Object(i.a)(q,2),S=F[0],E=F[1],R=Object(l.useState)(""),U=Object(i.a)(R,2),T=U[0],B=U[1],Q=Object(l.useState)("hidden"),Y=Object(i.a)(Q,2),H=Y[0],y=Y[1],D=Object(l.useState)(""),G=Object(i.a)(D,2),M=G[0],K=G[1],L=Object(l.useState)("hidden"),V=Object(i.a)(L,2),z=V[0],P=V[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(j,{}),Object(d.jsxs)("main",{className:"card",children:[Object(d.jsx)(h,{dataPreview:_,paletePreview:t,handleReset:function(){x({palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:{defaultImage:n}}),c(1),m(n)},image:b}),Object(d.jsx)(u,{data:_,handleCollapsable:function(e){var a=e.currentTarget.id;"design"===a?(v(""),A(""),E("hidden"),B("form__arrow--rotate"),y("hidden"),K("form__arrow--rotate")):"fill"===a?(E(""),B(""),y("hidden"),K("form__arrow--rotate"),v("hidden"),A("form__arrow--rotate")):"share"===a&&(y(""),K(""),v("hidden"),A("form__arrow--rotate"),E("hidden"),B("form__arrow--rotate"))},arrowDesign:C,collapsableDesign:w,handleChangeColor:function(e){c(e.target.value),x(Object(r.a)(Object(r.a)({},_),{},{palette:parseInt(e.target.value)}))},arrowFill:T,collapsableFill:S,handleImage:function(e){x(Object(r.a)(Object(r.a)({},_),{},{photo:e})),m(e)},image:b,handleInput:function(e){switch(e.currentTarget.id){case"fullName":x(Object(r.a)(Object(r.a)({},_),{},{name:e.currentTarget.value}));break;case"job":x(Object(r.a)(Object(r.a)({},_),{},{job:e.currentTarget.value}));break;case"telFill":x(Object(r.a)(Object(r.a)({},_),{},{phone:e.currentTarget.value}));break;case"emailFill":x(Object(r.a)(Object(r.a)({},_),{},{email:e.currentTarget.value}));break;case"linkedinFill":x(Object(r.a)(Object(r.a)({},_),{},{linkedin:e.currentTarget.value}));break;case"githubFill":x(Object(r.a)(Object(r.a)({},_),{},{github:e.currentTarget.value}));break;default:console.error("opcionNoValida")}},arrowShare:M,collapsableShare:H,collapsableShareLink:z,handleCollapsableShareLink:function(e){P(""),e.preventDefault()}})]}),Object(d.jsx)(p,{})]})})},O=t(8);s.a.render(Object(d.jsx)(O.a,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a6858d2f.chunk.js.map