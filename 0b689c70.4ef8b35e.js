(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,O=s["".concat(l,".").concat(d)]||s[d]||m[d]||c;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(125)),l={id:"markdown-guide",title:"Markdown Guide",sidebar_label:"Markdown Guide"},o={unversionedId:"tutorials/markdown-guide",id:"tutorials/markdown-guide",isDocsHomePage:!1,title:"Markdown Guide",description:"What is Markdown?",source:"@site/docs/tutorials/markdown-guide.md",slug:"/tutorials/markdown-guide",permalink:"/docs/tutorials/markdown-guide",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/markdown-guide.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1611606372,sidebar_label:"Markdown Guide",sidebar:"docs",previous:{title:"Git workflow Tutorial",permalink:"/docs/tutorials/git-workflow-tutorial"},next:{title:"GitHub Keys",permalink:"/docs/tutorials/github-keys"}},i=[{value:"What is Markdown?",id:"what-is-markdown",children:[]},{value:"Main components",id:"main-components",children:[]},{value:"Structure Syntax",id:"structure-syntax",children:[{value:"<strong>Unordered List</strong>",id:"unordered-list",children:[]},{value:"<strong>Ordered List</strong>",id:"ordered-list",children:[]},{value:"<strong>Table</strong>",id:"table",children:[]},{value:"<strong>Check List</strong>",id:"check-list",children:[]},{value:"<strong>Line Break</strong>",id:"line-break",children:[]},{value:"<strong>Comments </strong>",id:"comments",children:[]}]},{value:"Another Syntaxes",id:"another-syntaxes",children:[{value:"<strong>Links</strong>",id:"links",children:[]},{value:"<strong>Images</strong>",id:"images",children:[]},{value:"<strong>Block Citation</strong>",id:"block-citation",children:[]},{value:"<strong>Horizontal Rule</strong>",id:"horizontal-rule",children:[]}]}],b={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.a)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"what-is-markdown"},"What is Markdown?"),Object(c.a)("p",null,"Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world\u2019s most popular markup languages. ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/getting-started/"}),"More About Markdown")),Object(c.a)("h2",{id:"main-components"},"Main components"),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Component"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Markdown Syntax"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#headings"}),"Heading")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"# H1   ",Object(c.a)("br",null)," ## H2 ",Object(c.a)("br",null),"  ### H3")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#bold"}),"Bold")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"**Text**")," or ",Object(c.a)("inlineCode",{parentName:"td"},"__text__"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#italic"}),"Italic")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"*text*")," or  ",Object(c.a)("inlineCode",{parentName:"td"},"_text_"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#blockquotes-1"}),"Blockquote")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"> blockquote")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#ordered-list"}),"Ordered List")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"1. Item ",Object(c.a)("br",null)," 2. Item ",Object(c.a)("br",null)," 3. Item")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#unordered-list"}),"Unordered List")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"- Item ",Object(c.a)("br",null)," - Item ",Object(c.a)("br",null)," - Item")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#horizontal-rule"}),"Horizontal Rule")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"---")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#links"}),"Link")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"[title](https://www.example.com)"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#images-1"}),"Image")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"![text](image.jpg)"))),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#line-break"}),"Line Break")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"text + double space")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("a",Object(n.a)({parentName:"td"},{href:"#comments"}),"Comments")),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.a)("inlineCode",{parentName:"td"},"\x3c!---Comment---\x3e"))))),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"Can get up to 6 different headings depending on the number of ",Object(c.a)("inlineCode",{parentName:"p"},"#"))),Object(c.a)("hr",null),Object(c.a)("h2",{id:"structure-syntax"},"Structure Syntax"),Object(c.a)("h3",{id:"unordered-list"},Object(c.a)("strong",{parentName:"h3"},"Unordered List")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"    - First Item\n        - Sub Item\n    - Second Item\n    - Third Item  \n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},"First Item",Object(c.a)("ul",{parentName:"li"},Object(c.a)("li",{parentName:"ul"},"Sub Item"))),Object(c.a)("li",{parentName:"ul"},"Second Item"),Object(c.a)("li",{parentName:"ul"},"Third Item")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#unordered-lists"}),"More Information"),"  ")),Object(c.a)("h3",{id:"ordered-list"},Object(c.a)("strong",{parentName:"h3"},"Ordered List")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"    1. First Item\n        1. Sub Item\n    2. Second Item\n    3. Third Item\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"First Item",Object(c.a)("ol",{parentName:"li"},Object(c.a)("li",{parentName:"ol"},"Sub Item"))),Object(c.a)("li",{parentName:"ol"},"Second Item"),Object(c.a)("li",{parentName:"ol"},"Third Item")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"}),"More Information"))),Object(c.a)("h3",{id:"table"},Object(c.a)("strong",{parentName:"h3"},"Table")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:"),"  "),Object(c.a)("table",null,Object(c.a)("thead",{parentName:"table"},Object(c.a)("tr",{parentName:"thead"},Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Syntax"),Object(c.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.a)("tbody",{parentName:"table"},Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Header"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Title")),Object(c.a)("tr",{parentName:"tbody"},Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Paragraph"),Object(c.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text")))),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/extended-syntax/#tables"}),"More Information"))),Object(c.a)("h3",{id:"check-list"},Object(c.a)("strong",{parentName:"h3"},"Check List")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"    - [x] First option\n    - [ ] Second option\n    - [ ] Third option\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("ul",{className:"contains-task-list"},Object(c.a)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.a)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","First option"),Object(c.a)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.a)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Second option"),Object(c.a)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.a)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Third option")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/extended-syntax/#task-lists"}),"More Information"))),Object(c.a)("h3",{id:"line-break"},Object(c.a)("strong",{parentName:"h3"},"Line Break")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"    Text  \x3c!---Space Space---\x3e\n    another Text\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("p",null,"Text",Object(c.a)("br",{parentName:"p"}),"\n","Another Text"),Object(c.a)("h3",{id:"comments"},Object(c.a)("strong",{parentName:"h3"},"Comments ")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"    [comment]: <> (This is a comment, it will not be included)\n\n    [//]: <> (This is also a comment.)\n\n    [//]: # (This may be the most platform independent comment)`\n")),Object(c.a)("hr",null),Object(c.a)("h2",{id:"another-syntaxes"},"Another Syntaxes"),Object(c.a)("h3",{id:"links"},Object(c.a)("strong",{parentName:"h3"},"Links")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"[Eos Costa Rica](https://es.eoscostarica.io)\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:"),"\n",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://es.eoscostarica.io"}),"Eos Costa Rica")),Object(c.a)("h3",{id:"images"},Object(c.a)("strong",{parentName:"h3"},"Images")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:"),Object(c.a)("br",{parentName:"p"}),"\n",Object(c.a)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png",alt:null}))),Object(c.a)("h3",{id:"block-citation"},Object(c.a)("strong",{parentName:"h3"},"Block Citation")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"> Main Text\n>> Text\n>>\n> * Item\n> * Item\n> Text \n> Final Text\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},"Main Text"),Object(c.a)("blockquote",{parentName:"blockquote"},Object(c.a)("p",{parentName:"blockquote"},"Text"),Object(c.a)("ul",{parentName:"blockquote"},Object(c.a)("li",{parentName:"ul"},"Item"),Object(c.a)("li",{parentName:"ul"},"Item\nTexto\nFinal Text")))),Object(c.a)("h3",{id:"horizontal-rule"},Object(c.a)("strong",{parentName:"h3"},"Horizontal Rule")),Object(c.a)("pre",null,Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Syntax"',title:'"Syntax"'}),"---\n***\n- - - -\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Example:")),Object(c.a)("hr",null),Object(c.a)("hr",null),Object(c.a)("blockquote",null,Object(c.a)("p",{parentName:"blockquote"},Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#horizontal-rules"}),"More Information"))),Object(c.a)("hr",null),Object(c.a)("p",null,"For more information about Markdown Syntax visit ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/cheat-sheet/"}),"this page")))}p.isMDXComponent=!0}}]);