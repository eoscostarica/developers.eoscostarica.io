(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(O,i(i({ref:t},s),{},{components:n})):o.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(126)),c={id:"eosio-protocol",title:"EOSIO Protocol",sidebar_label:"EOSIO Protocol"},i={unversionedId:"eos-learn/eosio-protocol",id:"eos-learn/eosio-protocol",isDocsHomePage:!1,title:"EOSIO Protocol",description:'EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by Block One. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following EOSIO network list. There are also multiple private networks currently using EOSIO.',source:"@site/docs/eos-learn/eosio-protocol.md",slug:"/eos-learn/eosio-protocol",permalink:"/docs/eos-learn/eosio-protocol",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/eosio-protocol.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1612304758,sidebar_label:"EOSIO Protocol",sidebar:"docs",previous:{title:"Readme file template",permalink:"/docs/readme-file-template"},next:{title:"Consensus Mechanism",permalink:"/docs/eos-learn/consensus-mechanism"}},l=[{value:"System contracts",id:"system-contracts",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. EOSIO was created in 2018 and is maintained by ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://block.one/"}),"Block One"),'. The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/community-resources/eosio-networks"}),"EOSIO network list"),". There are also multiple private networks currently using EOSIO."),Object(a.b)("p",null,"Some innovative features of EOSIO include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Free transactions")," with consumption limits."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Low latency")," confirming new blocks (0.5 seconds)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"*Byzantine Fault Tolerance")),Object(a.b)("li",{parentName:"ul"},"Human Readable Account Names (",Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"e.g. :"))," ",Object(a.b)("inlineCode",{parentName:"li"},"eosioaccount")," )"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ACL Permissions")," based on hierarchical roles"),Object(a.b)("li",{parentName:"ul"},"Updatable contracts ",Object(a.b)("strong",{parentName:"li"},"written in C++"),"."),Object(a.b)("li",{parentName:"ul"},"Support for keys protected by ",Object(a.b)("strong",{parentName:"li"},"biometric hardware")," (e.g. : Apple Secure Enclave)"),Object(a.b)("li",{parentName:"ul"},"Designed for ",Object(a.b)("strong",{parentName:"li"},"Inter-Blockchain communication")),Object(a.b)("li",{parentName:"ul"},"Designed for Sparse Header Light Client Validation."),Object(a.b)("li",{parentName:"ul"},"Scheduled Recurring Transactions."),Object(a.b)("li",{parentName:"ul"},"Time Delay Security."),Object(a.b)("li",{parentName:"ul"},"Designed for Parallel Execution of Context Free Validation Logic.")),Object(a.b)("p",null,"Another important feature of EOSIO based blockchain networks is it's flexible architecture, because many of the network's \"rules of engagement\" are defined through system contracts."),Object(a.b)("p",null,"This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the ",Object(a.b)("strong",{parentName:"p"},"system contracts"),"."),Object(a.b)("h2",{id:"system-contracts"},"System contracts"),Object(a.b)("p",null,"System contracts allow EOSIO networks to :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Easily configure the network governance through smart contracts."),Object(a.b)("li",{parentName:"ul"},"To have transparent rules for the operation of the system."),Object(a.b)("li",{parentName:"ul"},"Synchronize the changes in system contracts in a instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates."),Object(a.b)("li",{parentName:"ul"},"Maintain total compatibility with other EOSIO blockchains.")))}u.isMDXComponent=!0}}]);