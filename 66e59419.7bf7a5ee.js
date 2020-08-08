(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?n.a.createElement(b,c(c({ref:t},u),{},{components:r})):n.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var o=r(2),n=r(6),i=(r(0),r(104)),a={id:"git-workflow-tutorial",title:"Git workflow Tutorial",sidebar_label:"Git workflow Tutorial"},c={unversionedId:"tutorials/git-workflow-tutorial",id:"tutorials/git-workflow-tutorial",isDocsHomePage:!1,title:"Git workflow Tutorial",description:"Git workflow Tutorial",source:"@site/docs/tutorials/workflow-tutorial.md",permalink:"/docs/tutorials/git-workflow-tutorial",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/website/docs/tutorials/workflow-tutorial.md",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1596919583,sidebar_label:"Git workflow Tutorial",sidebar:"docs",previous:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"},next:{title:"Block Explorers",permalink:"/docs/tools/block-explorers"}},l=[{value:"Git workflow Tutorial",id:"git-workflow-tutorial",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"git-workflow-tutorial"},"Git workflow Tutorial"),Object(i.b)("p",null,"In this tutorial, we explain step by step how to program an open source project using the ",Object(i.b)("strong",{parentName:"p"},"GitHub")," platform. This is a repository with access to various functions and tools for project development and administration."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"GitHub")," contains a function called ",Object(i.b)("inlineCode",{parentName:"p"},"forking"),", which allows you to copy a repository from another account and request access to modify it in the user's account. In case the user decides to make sharing changes, he can send a notification to the original owner of the repository called ",Object(i.b)("inlineCode",{parentName:"p"},"pull request"),". In this way, you can unify the changes with the original repository, this is called ",Object(i.b)("inlineCode",{parentName:"p"},"merge"),"."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/K33cFzHWBt0",frameborder:"0",allowfullscreen:"true"}))}s.isMDXComponent=!0}}]);