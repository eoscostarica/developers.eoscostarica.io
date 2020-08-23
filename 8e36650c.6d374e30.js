(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(105)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Before you begin",source:"@site/docs/tutorials/getting-started.md",permalink:"/docs/tutorials/getting-started",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/getting-started.md",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1597705584,sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Ricardian contracts",permalink:"/docs/eos-learn/ricardian-contracts"},next:{title:"EOSIO Node Installation",permalink:"/docs/tutorials/node-installation"}},s=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Get your private keys",id:"get-your-private-keys",children:[]},{value:"Agile accounts creator",id:"agile-accounts-creator",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("p",null,"At first, is recommendable have installed the software EOSIO developed by Block.one to create actions with the EOS protocol following the command brew tap eosio/eosio y brew install eosio. This software it's made up of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos"),": is the command line tool that connects with the API exposed by nodeos and functions to manage the wallet, account, keys, transactions and Smart Contracts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos"),": functions as the central daemon that manages EOSIO's net and could be configured as node to produce blocks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"eosd"),": functions as wallet to manage the keys for EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/diagrams/cleos.png",alt:"Diagrama"}))),Object(o.b)("p",null,"Additionally, we recommend install Contract Development Toolkit (CDT) beforehand, that can be installed using ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," command and followed by ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," to access to the resources created by the contracts."),Object(o.b)("h2",{id:"get-your-private-keys"},"Get your private keys"),Object(o.b)("p",null,"More information ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"}),"about private keys")),Object(o.b)("h2",{id:"agile-accounts-creator"},"Agile accounts creator"),Object(o.b)("p",null,"Portal to create accounts and public keys with just one click."))}u.isMDXComponent=!0}}]);