(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{150:function(t,e,n){"use strict";var l={name:"Footer",data:function(){return{scrollBtn:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.scrollY>70?this.scrollBtn=!0:window.scrollY<70&&(this.scrollBtn=!1)},scrollTop:function(){window.scrollTo(0,0)}}},o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"main-footer"},[n("div",{staticClass:"auto-container"},[n("div",{staticClass:"widgets-section"},[n("div",{staticClass:"row clearfix"},[n("div",{staticClass:"column col-xl-3 col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"footer-widget logo-widget"},[n("div",{staticClass:"widget-content"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{attrs:{id:"fLogo",src:"/images/logoo.png",width:"100",height:"auto",alt:""}})])],1),t._v(" "),t._m(0)])])]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)]),t._v(" "),n("a",{staticClass:"scroll-to-target scroll-to-top",style:"display: "+(t.scrollBtn?"inline":"none"),attrs:{href:"#"},on:{click:t.scrollTop}},[n("i",{staticClass:"fa fa-angle-up"})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"social-links clearfix"},[e("li",[e("a",{attrs:{href:"#"}},[e("span",{staticClass:"fab fa-facebook-square"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("span",{staticClass:"fab fa-twitter"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("span",{staticClass:"fab fa-instagram"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("span",{staticClass:"fab fa-pinterest-p"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column col-xl-3 col-lg-6 col-md-6 col-sm-12",staticStyle:{"margin-left":"20%"}},[n("div",{staticClass:"footer-widget info-widget"},[n("div",{staticClass:"widget-content"},[n("h6",[t._v("Contact")]),t._v(" "),n("ul",{staticClass:"contact-info"},[n("li",{staticClass:"address"},[n("span",{staticClass:"icon flaticon-pin-1"}),t._v(" Узбекситан, 210100, г. Навои, Ислам Каримов 74 A.")]),t._v(" "),n("li",[n("span",{staticClass:"icon flaticon-call"}),n("a",{attrs:{href:"tel:+998 (91) 339 99 99"}},[t._v("+998 (91) 339 99 99 ")])]),t._v(" "),n("li",[n("span",{staticClass:"icon flaticon-call"}),n("a",{attrs:{href:"tel:+998 (98) 576 99 99"}},[t._v("+998 (98) 576 99 99 ")])]),t._v(" "),n("li",[n("span",{staticClass:"icon flaticon-call"}),n("a",{attrs:{href:"tel:+998 (79) 210 99 99"}},[t._v("+998 (79) 210 99 99 ")])]),t._v(" "),n("li",[n("span",{staticClass:"icon flaticon-email-2"}),n("a",{attrs:{href:"mailto:needhelp@linoor.com"}},[t._v("info@navoi-hd.uz")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-bottom"},[e("div",{staticClass:"auto-container"},[e("div",{staticClass:"inner clearfix"},[e("div",{staticClass:"copyright"},[this._v("© copyright 2021 by NAVOIY-HD.uz")])])])])}],!1,null,"11f97e5a",null);e.a=component.exports},151:function(t,e,n){"use strict";var l={name:"Nav",data:function(){return{sticky:!1,mobileToggle:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll);for(var t=document.querySelector(".mobile-nav__container").querySelectorAll(".dropdown"),i=0;i<t.length;i++)t[i].addEventListener("click",(function(){this.classList.toggle("open"),this.classList.toggle("current")}))},methods:{handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}}},o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:"main-header header-style-one "+(t.sticky?"fixed-header":"")},[n("div",{staticClass:"header-upper"},[n("div",{staticClass:"inner-container clearfix"},[t._m(0),t._v(" "),n("div",{staticClass:"nav-outer clearfix"},[n("div",{staticClass:"mobile-nav-toggler"},[n("span",{staticClass:"icon flaticon-menu-2",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}}),n("span",{staticClass:"txt"},[t._v("Menu")])]),t._v(" "),n("nav",{staticClass:"main-menu navbar-expand-md navbar-light"},[n("div",{staticClass:"collapse navbar-collapse show clearfix"},[n("ul",{staticClass:"navigation clearfix"},[t._m(1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("О Компании")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"/portfolio"}},[t._v("Портфолио")]),t._v(" "),n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/portfolio"}},[t._v("Портфолио")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio-single"}},[t._v("Акустика")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio-single-2"}},[t._v("Подиум")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Контакты")])],1)])])])]),t._v(" "),t._m(2)])]),t._v(" "),n("nav",{staticClass:"mobile-nav__container"},[n("div",{class:"collapse navbar-collapse "+(t.mobileToggle?"show":"")+" clearfix"},[n("ul",{staticClass:"navigation clearfix"},[n("li",{staticClass:"dropdown"},[t._m(3),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home Style 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index-2"}},[t._v("Home Style 02")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/index-3"}},[t._v("Home Style 03")])],1)])]),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("li",{staticClass:"dropdown"},[t._m(4),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/team"}},[t._v("Our Team")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/testimonials"}},[t._v("Testimonials")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/faqs"}},[t._v("FAQs")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/not-found"}},[t._v("404 Page")])],1)])]),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Services"),n("div",{staticClass:"dropdown-btn"},[n("span",{staticClass:"fa fa-angle-right"})])]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/services"}},[t._v("All Services")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/web-development"}},[t._v("Website Development")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/graphic-designing"}},[t._v("Graphic Designing")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/digital-marketing"}},[t._v("Digital Marketing")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/seo"}},[t._v("SEO & Content Writting")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/app-development"}},[t._v("App Development")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/ui-designing"}},[t._v("UI/UX Designing")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Portfolio"),n("div",{staticClass:"dropdown-btn"},[n("span",{staticClass:"fa fa-angle-right"})])]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio-single"}},[t._v("Portfolio Single 01")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/portfolio-single-2"}},[t._v("Portfolio Single 02")])],1)])],1),t._v(" "),n("li",{staticClass:"dropdown"},[n("nuxt-link",{attrs:{to:"#"}},[t._v("Blog"),n("div",{staticClass:"dropdown-btn"},[n("span",{staticClass:"fa fa-angle-right"})])]),t._v(" "),n("ul",{staticClass:"sub-menu"},[n("li",[n("nuxt-link",{attrs:{to:"/blog"}},[t._v("Blog Sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog-grid"}},[t._v("Blog Grid View")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blog-single"}},[t._v("Blog Single")])],1)])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-box"},[e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/",title:"Linoor - Digital Agency Template"}},[e("img",{attrs:{src:"/images/logoo.png",id:"thm-logo",alt:"Linoor - DIgital Agency HTML Template",title:"Linoor - DIgital Agency Template"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"current dropdown"},[e("a",{attrs:{href:"/"}},[this._v("Главная")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"other-links clearfix"},[e("div",{staticClass:"link-box"},[e("div",{staticClass:"call-us"},[e("a",{staticClass:"link",attrs:{href:"tel:6668880000"}},[e("span",{staticClass:"icon"}),this._v(" "),e("span",{staticClass:"sub-text span"},[this._v("Call-centre")]),this._v(" "),e("span",{staticClass:"number"},[this._v("+998(91) 339 99 99")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[this._v("Home"),e("div",{staticClass:"dropdown-btn"},[e("span",{staticClass:"fa fa-angle-right"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"#"}},[this._v("Pages"),e("div",{staticClass:"dropdown-btn"},[e("span",{staticClass:"fa fa-angle-right"})])])}],!1,null,"5d308e2d",null);e.a=component.exports},152:function(t,e,n){"use strict";var l={name:"PageHeader",props:{title:{type:String}}},o=n(19),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-banner"},[n("div",{staticClass:"image-layer",staticStyle:{"background-image":"url(/images/background/image-7.jpg)"}}),t._v(" "),n("div",{staticClass:"shape-1"}),t._v(" "),n("div",{staticClass:"shape-2"}),t._v(" "),n("div",{staticClass:"banner-inner"},[n("div",{staticClass:"auto-container"},[n("div",{staticClass:"inner-container clearfix"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"page-nav",staticStyle:{display:"none"}},[n("ul",{staticClass:"bread-crumb clearfix"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",{staticClass:"active"},[t._v(t._s(t.title))])])])])])])])}),[],!1,null,"042cde50",null);e.a=component.exports},153:function(t,e,n){"use strict";var l={name:"CallToActionThree"},o=n(19),component=Object(o.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"call-to-section-two alternate"},[e("div",{staticClass:"auto-container"},[e("div",{staticClass:"inner clearfix"},[e("h3",[this._v("Развивайте свой сервис и продажи вместе с нами!")]),this._v(" "),e("div",{staticClass:"link-box"},[e("a",{staticClass:"theme-btn btn-style-two",attrs:{href:"about.html"}},[e("i",{staticClass:"btn-curve"}),this._v(" "),e("span",{staticClass:"btn-title"},[this._v("Связаться с нами")])])])])])])}],!1,null,"7215bf62",null);e.a=component.exports},187:function(t,e,n){"use strict";n.r(e);var l=n(151),o=n(152),r=n(150),c=n(153),v={name:"ServiceDetails4"},d=n(19),_={components:{ServiceDetails:Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-page-container"},[n("div",{staticClass:"auto-container"},[n("div",{staticClass:"row clearfix"},[t._m(0),t._v(" "),n("div",{staticClass:"sidebar-side col-lg-4 col-md-12 col-sm-12"},[n("aside",{staticClass:"sidebar blog-sidebar"},[n("div",{staticClass:"sidebar-widget services"},[n("div",{staticClass:"widget-inner"},[t._m(1),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/БЕГУЩАЯ СТРОКА"}},[t._v("БЕГУЩАЯ СТРОКА")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/аренда экрана"}},[t._v("АРЕНДА LED ЭКРАНА")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/Видео стена"}},[t._v("ВИДЕО БУКВЫ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/МЕДИА ФАСАД"}},[t._v("МЕДИА ФАСАД")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/Видео стена"}},[t._v("ВИДЕО СТЕНА")])],1)])])]),t._v(" "),t._m(3)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-side col-lg-8 col-md-12 col-sm-12"},[n("div",{staticClass:"service-details"},[n("div",{staticClass:"main-image image"},[n("img",{attrs:{src:"/images/gallery/mediafasad.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"text-content"},[n("h3",[t._v("Видео Стена")]),t._v(" "),n("p",[t._v("Need something changed or is there something not quite working the way you envisaged?\n              Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy\n              text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n              standard dummy text ever since the 1500s, when an unknown printer took a galley of\n              type and scrambled it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining essentially\n              unchanged.")]),t._v(" "),n("div",{staticClass:"featured"},[n("div",{staticClass:"row clearfix"},[n("div",{staticClass:"image-col col-md-6 col-sm-12"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:"/images/gallery/mediafasad2.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"text-col col-md-6 col-sm-12"},[n("div",{staticClass:"inner"},[n("h4",[t._v("planning & strategy")]),t._v(" "),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting\n                      industry.")]),t._v(" "),n("ul",[n("li",[t._v("Research beyond the business plan")]),t._v(" "),n("li",[t._v("Marketing options and rates")]),t._v(" "),n("li",[t._v("The ability to turnaround consulting")]),t._v(" "),n("li",[t._v("Customer engagement matters")])])])])])]),t._v(" "),n("p",[t._v("Need something changed or is there something not quite working the way you envisaged?\n              Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy\n              text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n              standard dummy text ever since the 1500s, when an unknown printer took a galley of\n              type and scrambled it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining essentially\n              unchanged.")]),t._v(" "),n("p",{staticClass:"last"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting\n              industry. Lorem Ipsum has been the industry's standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled it to make a type\n              specimen book. It has survived not only five centuries, but also the leap into\n              electronic typesetting, remaining essentially unchanged.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-title"},[e("h4",[this._v("ВСЕ УСЛУГИ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"active"},[e("a",{attrs:{to:"/web-development"}},[this._v("ПРОДАЖА "),e("span",{staticStyle:{"font-size":"26px"}},[this._v("LED")]),this._v(" ЭКРАНЫ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-widget call-up"},[e("div",{staticClass:"widget-inner"},[e("div",{staticClass:"sidebar-title"},[e("h4",[this._v("need Linoor help?")])]),this._v(" "),e("div",{staticClass:"text"},[this._v("Prefer speaking with a human to filling out a form? call corporate\n                office and we will connect you with a team member who can help.")]),this._v(" "),e("div",{staticClass:"phone"},[e("a",{attrs:{href:"tel:666888000"}},[e("span",{staticClass:"icon flaticon-call"}),this._v("666 888 000")])])])])}],!1,null,"08436b22",null).exports,CallToActionThree:c.a,Footer:r.a,PageHeader:o.a,Nav:l.a},head:function(){return{title:"Видео | Стена"}}},h=Object(d.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nav"),this._v(" "),e("PageHeader",{attrs:{title:"Видео | Стена"}}),this._v(" "),e("ServiceDetails"),this._v(" "),e("CallToActionThree"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=h.exports}}]);