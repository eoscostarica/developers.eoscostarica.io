(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=o,O=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return a?n.a.createElement(O,c(c({ref:t},b),{},{components:a})):n.a.createElement(O,c({ref:t},b))}));function O(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<r;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},132:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var o=a(22),n=a(134);function r(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,c=void 0!==i&&i,s=r.absolute,b=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+l:l}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},134:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(129)),i=a(132),c={id:"open-source-projects",title:"Open Source Projects",sidebar_label:"Open Source Projects"},s={unversionedId:"open-source-projects",id:"open-source-projects",isDocsHomePage:!1,title:"Open Source Projects",description:"EOS Rate",source:"@site/docs/open-source-projects.md",slug:"/open-source-projects",permalink:"/docs/open-source-projects",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/open-source-projects.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612582451,sidebar_label:"Open Source Projects",sidebar:"docs",previous:{title:"Our Favorite Tools",permalink:"/docs/developer-tools"},next:{title:"Project Boilerplate",permalink:"/docs/boilerplate"}},b=[{value:"EOS Rate",id:"eos-rate",children:[]},{value:"LatamLink Testnet",id:"latamlink-testnet",children:[]},{value:"EOSIO DASHBOARD",id:"eosio-dashboard",children:[]},{value:"EOS Foundation",id:"eos-foundation",children:[]},{value:"Digital Notary Smart Contract",id:"digital-notary-smart-contract",children:[]},{value:"Evodex",id:"evodex",children:[]},{value:"EOSIO Hackathons",id:"eosio-hackathons",children:[{value:"LifeBank",id:"lifebank",children:[]}]},{value:"React Components for EOSIO",id:"react-components-for-eosio",children:[]},{value:"NPM Packages",id:"npm-packages",children:[]}],l={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"eos-rate"},"EOS Rate"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosrate/eosrate--horizontal-solid-transparent-overlight.png",style:{width:"30%"}}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://eosrate.io"},"EOS Rate")," is an open-source dApp that allows EOS token holders to rate Block Producers (BPs) in just a few clicks. Users can access a rating system and voting portal, making it easier for token holders to make an informed decision."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://eosrate.io"},"https://eosrate.io"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-rate"},"https://github.com/eoscostarica/eos-rate")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate.PNG",alt:"EOS Rate"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate_2.PNG",alt:"EOS Rate"})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"latamlink-testnet"},"LatamLink Testnet"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/LatamLink/latamlink.io/master/static/images/latamlink_logo-h-full-color-overwhite.png",style:{width:"30%"}}),Object(r.b)("p",null,"The purpose of LatamLink is to offer an EOSIO-based testnet to highlight the benefits of this platform. LACChain is an initiative of BID Labs (part of the Inter-American Development Bank) whose purpose is to accompany and accelerate the development of the blockchain ecosystem in Latin America. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://latamlink.io"},"https://latamlink.io"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LatamLink/latamlink.io"},"https://github.com/LatamLink/latamlink.io")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/Latam_Link.PNG",alt:"Latam Link"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/Latam_Link_monitor.PNG",alt:"Latam Link"})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"eosio-dashboard"},"EOSIO DASHBOARD"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/eosio-dashboard-logo.png",style:{width:"30%"}}),Object(r.b)("p",null,"An EOSIO Infrastructure monitor and node dashboard."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Website")," : ",Object(r.b)("a",{parentName:"li",href:"https://mainnet.eosio.cr"},"https://mainnet.eosio.cr")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"GitHub")," : ",Object(r.b)("a",{parentName:"li",href:"https://github.com/eoscostarica/eosio-dashboard"},"https://github.com/eoscostarica/eosio-dashboard"))),Object(r.b)("img",{alt:"EOSIO network dashboard",src:Object(i.a)("img/OSS_screnshots/EOSIO_Network_monitor.PNG")}),Object(r.b)("img",{alt:"EOSIO network dashboard",src:Object(i.a)("img/OSS_screnshots/EOSIO_Network_monitor_2.PNG")}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"eos-foundation"},"EOS Foundation"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/eos-foundation/master/visual-guide/eos-foundation-logo.png",style:{width:"30%"}}),Object(r.b)("p",null,"We view the EOS Foundation as a container for facilitating code, capital, and connections in ways which haven\u2019t been available so far for the EOS Mainnet community."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://eos-foundation.eosio.cr"},"https://eos-foundation.eosio.cr"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-foundation"},"https://github.com/eoscostarica/eos-foundation")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation.PNG",alt:"EOS Foundation"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation_2.PNG",alt:"EOS Foundation"})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"digital-notary-smart-contract"},"Digital Notary Smart Contract"),Object(r.b)("p",null,"This smart contract serves as a tool for any user who wishes to register the existence of digital documents (texts / images) at a certain moment in time."),Object(r.b)("p",null,"It also allows anyone who owns the document to validate the record on the blockchain."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://notarize.eosio.cr/dashboard/notary"},"https://notarize.eosio.cr/dashboard/notary"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/notarioeoscr"},"https://github.com/eoscostarica/notarioeoscr")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"evodex"},"Evodex"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/evodex/master/public/evodex-logo.png",style:{width:"30%"}}),Object(r.b)("p",null,"Evolution DEX is a Protocol created by EOS Argentina that allows anyone to create and launch their own trading pairs in a decentralized exchange and gain trading fees by adding liquidity to the token\u2019s pool."),Object(r.b)("p",null,"EOS Costa Rica is working with EOS Argentina creating a web interface that will provide access to liquidity amongst all exchanges that connect to Evolution DEX."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://evodex.io"},"https://evodex.io"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/evodex"},"https://github.com/eoscostarica/evodex")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),Object(r.b)("h3",{id:"lifebank"},"LifeBank"),Object(r.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/lifebank/master/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg",style:{width:"50%"}}),Object(r.b)("p",null,"Lifebank is an EOSIO-based dapp that helps local communities create a virtuous circle of value exchange between three parties \u2014 eligible life donors, community donation centers, and participating local businesses (sponsors)."),Object(r.b)("p",null,"Lifebank is an initiative of EOS Costa Rica, a company that develops blockchain-based solutions to solve real-world problems. Lifebank is our entry to the Coding for Change challenge organized by leading blockchain company, Block.one."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://lifebank.io/"},"https://lifebank.io/"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/lifebank"},"https://github.com/eoscostarica/lifebank")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/LifeBank.PNG",alt:"LifeBank"})),Object(r.b)("h2",{id:"react-components-for-eosio"},"React Components for EOSIO"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Website")," : ",Object(r.b)("a",{parentName:"p",href:"https://components.eosio.cr"},"https://components.eosio.cr"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"GitHub")," : ",Object(r.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"https://github.com/eoscostarica/eoscr-components")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"npm-packages"},"NPM Packages"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},Object(r.b)("strong",{parentName:"a"},"EOS Costa Rica components")),": A collection of React Components for EOSIO. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},Object(r.b)("strong",{parentName:"a"},"EOS Costa Rica standard theme")),": EOS Costa Rica standard theme will allow us a faster developments of our web apps and at the same time it's availabe for anyone who will want to use it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},Object(r.b)("strong",{parentName:"a"},"EOS API module ( in CamelCase \ud83d\udc2b)")),": This project wraps the official eosio/eosjs-api to provide camelcase output. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/fastify-eos"},Object(r.b)("strong",{parentName:"a"},"Fastify EOS")),": A plugin that decorates Fastify with an EOS.js instance.")))}p.isMDXComponent=!0}}]);