(window.webpackJsonp=window.webpackJsonp||[]).push([[36,9,10],{116:function(e,t,a){"use strict";var o=a(2),r=a(6),n=a(0),i=a.n(n),c=a(106),s=a(109),l=a(105),m=a(110),d=a(48),u=a.n(d);function h(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,l=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),d=Object(m.a)(t),u=Object(m.a)(a,{forcePrependBaseUrl:!0});return i.a.createElement(s.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:d},l),n)}var g=function(e){var t=e.url,a=e.alt;return i.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,o=a||{},r=o.copyright,n=o.links,s=void 0===n?[]:n,d=o.logo,f=void 0===d?{}:d,E=Object(m.a)(f.src);return a?i.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===a.style})},i.a.createElement("div",{className:"container"},s&&s.length>0&&i.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return i.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?i.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?i.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?i.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):i.a.createElement("li",{key:e.href||e.to,className:"footer__item"},i.a.createElement(h,e))}))):null)}))),(f||r)&&i.a.createElement("div",{className:"text--center"},f&&f.src&&i.a.createElement("div",{className:"margin-bottom--sm"},f.href?i.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},i.a.createElement(g,{alt:f.alt,url:E})):i.a.createElement(g,{alt:f.alt,url:E})),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},93:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),n=(a(109),a(105)),i=(a(110),a(113)),c=a(115),s=a(209),l=a(214),m=a(215),d=a(203),u=a(208),h=a(206),g=a(210),f=a(207),E=(a(94),Object(d.a)({heroButton:{width:131,height:50,fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto",backgroundColor:"#3EBBD3"},card:{backgroundColor:"#FFFFFF"},cardmedia:{height:194},imgcard:{display:"block",width:150,margin:"auto"},overline:{fontFamily:"PT Sans",fontSize:12.7},title:{fontFamily:"PT Sans",fontSize:21.1,fontWeight:"bold"},body:{fontFamily:"Open Sans",fontSize:13.8},button:{fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto"},media:{objectFit:"cover",objectPosition:"bottom",height:140}})),b=Object(d.a)({card:{backgroundColor:"#242526"},cardmedia:{height:194},imgcard:{display:"block",width:150,margin:"auto",filter:"brightness(0) invert(1)"},overline:{fontFamily:"PT Sans",fontSize:12.7,color:"#E9E9E9"},title:{fontFamily:"PT Sans",fontSize:21.1,fontWeight:"bold",color:"#E9E9E9"},body:{fontFamily:"Open Sans",fontSize:13.8,color:"#E9E9E9"},button:{fontFamily:"PT Sans",fontSize:14.8,border:"none",lineHeight:1.8,letterSpacing:1.25,margin:"auto",color:"#E9E9E9"},media:{height:140}}),p=function(){var e=["https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/cards-icons/heroe.png"],t=e[Math.floor(Math.random()*e.length)],a=Object(c.a)(),o=a.isDarkTheme,n=(a.setLightTheme,a.setDarkTheme,null);return n=o?b():E(),r.a.createElement("div",{className:" hero-header"},r.a.createElement("img",{className:"hero-img",src:t}),r.a.createElement("div",{className:"hero-content"},r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"EOS-Costa-Rica-Devel text-style-1 "},"EOS Costa Rica"),r.a.createElement("h1",{className:"EOS-Costa-Rica-Devel"},"Developers Guide")),r.a.createElement("div",{className:"intro-container"},r.a.createElement("p",{className:"intro-text"},"We\u2019d like to welcome you to our collaborative effort and induct you on to awesome blockchain technology and all the paradigms that make it possible.")),r.a.createElement("div",{className:"buttons-intro-container"},r.a.createElement(l.a,{className:n.heroButton,href:"/docs/engineering-culture"},"GET STARTED"))))},y=function(e){var t,a=Object(c.a)(),o=a.isDarkTheme,n=(a.setLightTheme,a.setDarkTheme,null);return n=o?b():E(),r.a.createElement(m.a,((t={className:"cardroot"}).className=n.card,t.variant="outlined",t),r.a.createElement("div",{className:"card-img-container"},r.a.createElement("img",{src:e.img,className:n.imgcard})),r.a.createElement(h.a,null,r.a.createElement(f.a,{className:n.overline,gutterBottom:!0},"SECTION"),r.a.createElement(f.a,{className:n.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(f.a,{className:n.body,variant:"body2",component:"p"},e.body)),r.a.createElement(u.a,null,r.a.createElement(l.a,{className:n.button,href:e.href},"Read More")))},v=function(){return r.a.createElement("div",{className:"container section-container"},r.a.createElement("h1",{className:"section-tittle"},"Follow to our sections"),r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Developer Guidelines",body:"Guides for developers on how to program in open source.",href:"/docs/open-source-guidelines",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/cards-icons/guidelines.svg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Learn EOSIO",body:"Set of information necessary to learn about the EOSIO protocol.",href:"/docs/eos-learn/eosio-protocol",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/f6549f9c5d054282dcbbf640c159ed03e9018b76/website/static/img/icons-eosio.svg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Tutorials",body:"Support information needed to perform the installation and execution of processes.",href:"docs/tutorials/getting-started",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/cards-icons/tutorials.svg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Tools",body:"Set of useful tools during the learning process.",href:"docs/tools/glossary",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/cards-icons/tools.svg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Community",body:"Links to EOS community sites of interest.",href:"docs/community-resources/telegram-channels",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/cards-icons/community.svg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(y,{title:"Open source projects",body:"List of open source projects that we carry out.",href:"docs/open-source-projects",img:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/f6549f9c5d054282dcbbf640c159ed03e9018b76/website/static/img/icons-opensource.svg"}))))},N=function(e){var t,a=Object(c.a)(),o=a.isDarkTheme,n=(a.setLightTheme,a.setDarkTheme,null);return n=o?b():E(),r.a.createElement(m.a,((t={className:"cardroot"}).className=n.card,t.variant="outlined",t),r.a.createElement(g.a,{className:n.media,image:e.img}),r.a.createElement(h.a,null,r.a.createElement(f.a,{className:n.overline,gutterBottom:!0},"ARTICLES"),r.a.createElement(f.a,{className:n.title,gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(f.a,{className:n.body,variant:"body2",component:"p"},e.body)),r.a.createElement(u.a,null,r.a.createElement(l.a,{className:n.button,href:e.href},"Read More")))},w=function(){return r.a.createElement("div",{className:"container section-container"},r.a.createElement("h1",{className:"section-tittle"},"Read our Medium articles"),r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(N,{title:"Get to Know EOS Costa Rica",body:"Learn more about our history, team and projects we carry out.",href:"https://medium.com/@eoscostarica/get-to-know-eos-costa-rica-f91f5b0bb7c4",img:"https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(N,{title:"You Should Participate in an Open-Source Project",body:"We show some important aspects for which it should be dealt with in open source projects.",href:"https://medium.com/@eoscostarica/you-should-participate-in-an-open-source-project-c259f8759d41",img:"https://miro.medium.com/max/875/1*_eTme4t7HJfE7aeeyd3kxQ.jpeg"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:4},r.a.createElement(N,{title:"What Is Blockchain?",body:"We explain, with examples, what a blockchain is and how it works.",href:"https://medium.com/@eoscostarica/what-is-blockchain-an-introduction-9535ed3e6005",img:"https://miro.medium.com/max/875/1*ohmD1qq4dAUOu4G-gXtaqA.jpeg"}))))};t.default=function(){var e=Object(n.a)().siteConfig;return r.a.createElement(i.a,{permalink:"/",title:e.title,description:e.tagline},r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(w,null))}}}]);