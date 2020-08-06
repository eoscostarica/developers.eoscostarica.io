(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(o),p=n,h=u["".concat(s,".").concat(p)]||u[p]||b[p]||a;return o?r.a.createElement(h,c(c({ref:t},l),{},{components:o})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=o[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},81:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return d}));var n=o(2),r=o(6),a=(o(0),o(104)),s={id:"consensus-mechanism",title:"Consensus Mechanism",sidebar_label:"Consensus Mechanism"},c={unversionedId:"eos-learn/consensus-mechanism",id:"eos-learn/consensus-mechanism",isDocsHomePage:!1,title:"Consensus Mechanism",description:"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.",source:"@site/docs/eos-learn/consensus-mechanism.md",permalink:"/docs/eos-learn/consensus-mechanism",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/website/docs/eos-learn/consensus-mechanism.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1596730886,sidebar_label:"Consensus Mechanism",sidebar:"docs",previous:{title:"EOSIO Protocol",permalink:"/docs/eos-learn/eosio-protocol"},next:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"}},i=[{value:"What is a block producer",id:"what-is-a-block-producer",children:[{value:"Explaining the role of an EOS block producer.",id:"explaining-the-role-of-an-eos-block-producer",children:[]},{value:"Active Blocks Producers",id:"active-blocks-producers",children:[]},{value:"Block producer schedule",id:"block-producer-schedule",children:[]},{value:"Byzantine Fault Tolerance",id:"byzantine-fault-tolerance",children:[]},{value:"Node Fault Tolerance",id:"node-fault-tolerance",children:[]},{value:"Stand-By Block Producers",id:"stand-by-block-producers",children:[]}]},{value:"Delegated Proof of Stake (DPoS)",id:"delegated-proof-of-stake-dpos",children:[]}],l={rightToc:i};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network."),Object(a.b)("p",null,"EOSIO will delegate the the authority to validate and write new blocks to a group of nodes that we call ",Object(a.b)("strong",{parentName:"p"},"Block Producers"),"."),Object(a.b)("h2",{id:"what-is-a-block-producer"},"What is a block producer"),Object(a.b)("p",null,"Block producers provide the infrastructure required to process transactions. Some block producers operate on their own physical equipment, while others provide services using third-party cloud services."),Object(a.b)("h3",{id:"explaining-the-role-of-an-eos-block-producer"},"Explaining the role of an EOS block producer."),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YLt5uexD9gg",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("h3",{id:"active-blocks-producers"},"Active Blocks Producers"),Object(a.b)("p",null,"The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network."),Object(a.b)("p",null,"They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts."),Object(a.b)("p",null,"An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"EOSIO allows up to 125 active block producers, specified by ",Object(a.b)("inlineCode",{parentName:"p"},"max_producers")," in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106"}),"config.hpp"))),Object(a.b)("h3",{id:"block-producer-schedule"},"Block producer schedule"),Object(a.b)("p",null,"In EOSIO networks, active block producers are listed on a list, called ",Object(a.b)("strong",{parentName:"p"},"schedule"),"."),Object(a.b)("p",null,"The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks."),Object(a.b)("p",null,"Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on."),Object(a.b)("p",null,"If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing."),Object(a.b)("h3",{id:"byzantine-fault-tolerance"},"Byzantine Fault Tolerance"),Object(a.b)("p",null,"New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Example: A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.")),Object(a.b)("h3",{id:"node-fault-tolerance"},"Node Fault Tolerance"),Object(a.b)("p",null,"Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as ",Object(a.b)("strong",{parentName:"p"},"Last Irreversible Block")," or ",Object(a.b)("strong",{parentName:"p"},"LIB"),", would not increase and the blockchain will stop."),Object(a.b)("p",null,"Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks."),Object(a.b)("p",null,"With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network."),Object(a.b)("p",null,"It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever."),Object(a.b)("h3",{id:"stand-by-block-producers"},"Stand-By Block Producers"),Object(a.b)("p",null,"EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers."),Object(a.b)("h2",{id:"delegated-proof-of-stake-dpos"},"Delegated Proof of Stake (DPoS)"),Object(a.b)("figure",{class:"video_container"},Object(a.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OVKAOwzAwHI",frameborder:"0",allowfullscreen:"true"}," ")),Object(a.b)("p",null,"A consensus algorithm is a process in Computer Science used to achieve agreement on a single data value between processes or distributed systems."),Object(a.b)("p",null,"Blockchain technology depends on Consensus Algorithms to achieve an agreement between the nodes. A blokchain can be thought of as a decentralized database that is managed by computers distributed in a point-to-point (P2P) network. Each point maintains a copy of the network state to prevent a single point of failure (SPOF). Updates and validations are reflected on all copies simultaneously."),Object(a.b)("p",null,"EOSIO software uses the only known proven decentralized consensus algorithm capable of meeting the performance requirements of blockchain applications, ",Object(a.b)("strong",{parentName:"p"},"Delegated Proof of Stake -(DPoS)"),". Under this algorithm, those who hold tokens on the blockchain by adopting EOSIO software can select block producers through a continuous approval system. Anyone who chooses to participate in block production will have a chance to produce them, provided they can persuade token holders to vote for them."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper"}),"DPoS Consensus algorithm")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://bitshares.org/technology/delegated-proof-of-stake-consensus/"}),"BitShares DPoS"))))}d.isMDXComponent=!0}}]);