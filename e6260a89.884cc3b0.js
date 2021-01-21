(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(125)),o={id:"private-keys",title:"Private Keys",sidebar_label:"Private Keys"},c={unversionedId:"eos-learn/private-keys",id:"eos-learn/private-keys",isDocsHomePage:!1,title:"Private Keys",description:"Private Keys Management",source:"@site/docs/eos-learn/private-keys.md",slug:"/eos-learn/private-keys",permalink:"/docs/eos-learn/private-keys",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/private-keys.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1611260289,sidebar_label:"Private Keys",sidebar:"docs",previous:{title:"Important Functions in EOSIO",permalink:"/docs/eos-learn/important-functions"},next:{title:"Dapp Development",permalink:"/docs/eos-learn/dapp-development"}},l=[{value:"Private Keys Management",id:"private-keys-management",children:[{value:"Create an account in the public blockchain",id:"create-an-account-in-the-public-blockchain",children:[]},{value:"Generate and manage the keys",id:"generate-and-manage-the-keys",children:[]},{value:"Manage the wallet",id:"manage-the-wallet",children:[]},{value:"External Authenticators (Wallets)",id:"external-authenticators-wallets",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"private-keys-management"},"Private Keys Management"),Object(i.a)("h3",{id:"create-an-account-in-the-public-blockchain"},"Create an account in the public blockchain"),Object(i.a)("p",null,"In most wallets you can generate new eosio keys, for this guide we will create keys in the terminal. let's execute the command ",Object(i.a)("inlineCode",{parentName:"p"},"cleos")," to generate the cryptographic keys required to create an account."),Object(i.a)("h3",{id:"generate-and-manage-the-keys"},"Generate and manage the keys"),Object(i.a)("p",null,"To generate keys, the requirement to create an account in a blockchain, let's run the command ",Object(i.a)("inlineCode",{parentName:"p"},"cleos create key")," in the terminal. This command is going to generate private and public keys \u2014 we can create the number of keys we want. The cleos accounts, by default, come in pairs: one ",Object(i.a)("inlineCode",{parentName:"p"},"active key")," and one ",Object(i.a)("inlineCode",{parentName:"p"},"owner key")," (to recover the account in case of active key lost)."),Object(i.a)("p",null,"The name of the account must comply with certain requirements: characters from A to Z in lowercase, numbers from 1 to 5 and must have 12 characters length. For this example, let's create the account: ",Object(i.a)("inlineCode",{parentName:"p"},"hellocontract"),"."),Object(i.a)("p",null,"Then, we introduce the public keys of ",Object(i.a)("inlineCode",{parentName:"p"},"owner")," and ",Object(i.a)("inlineCode",{parentName:"p"},"active")," to execute the contract. This should be any of the ones generated with the ",Object(i.a)("inlineCode",{parentName:"p"},"cleos create key")," command above. Is recommendable not to share the private keys."),Object(i.a)("h3",{id:"manage-the-wallet"},"Manage the wallet"),Object(i.a)("p",null,"Once the account is created, we must generate the wallet and identify it with the name of the account, which in this example is ",Object(i.a)("inlineCode",{parentName:"p"},"hellocontract"),", with the command ",Object(i.a)("inlineCode",{parentName:"p"},"cleos wallet create -n hellocontract --to-console"),"."),Object(i.a)("p",null,"At this moment, the keys are stored uniquely on the console, for which is necessary to create the wallet that will contain the keys. In this manner, we could access these keys with a unique password. We must import the keys in the wallet once at the time, writing the command ",Object(i.a)("inlineCode",{parentName:"p"},"cleos wallet import")," and adding the name of the account."),Object(i.a)("h3",{id:"external-authenticators-wallets"},"External Authenticators (Wallets)"),Object(i.a)("p",null,"The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications."))}p.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(o,".").concat(m)]||h[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);