(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),c=(a(0),a(141)),o={sidebar_label:"Introduction Index",title:"Wechaty Introduction"},i={unversionedId:"introduction/README",id:"introduction/README",isDocsHomePage:!1,title:"Wechaty Introduction",description:"Wechaty is a Conversational SDK for Chatbot Makers",source:"@site/docs/introduction/README.md",permalink:"/docs/introduction/README",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/README.md",lastUpdatedBy:"Jiang Shanshan",lastUpdatedAt:1598275849,sidebar_label:"Introduction Index",sidebar:"docs",next:{title:"Multi-language Support",permalink:"/docs/introduction/multi-language"}},b=[{value:"Table of Contents",id:"table-of-contents",children:[{value:"Basic",id:"basic",children:[]},{value:"Advanced",id:"advanced",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/wechaty-logo.svg",alt:"Wechaty is a Conversational SDK for Chatbot Makers"}))),Object(c.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(c.b)("h3",{id:"basic"},"Basic"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"What is Wechaty"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Who uses Wechaty"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"How to Wechaty"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/concepts"}),"Concepts"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/motivations"}),"Motivations"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/alternatives"}),"Alternatives"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/multi-language"}),"Multi Languages"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"[Instance Messages]"," Conversational Protocols](/docs/introduction/puppet)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Examples"),"\n'examples',\n'examples2',"))),Object(c.b)("h3",{id:"advanced"},"Advanced"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"What is Wechaty"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#11-i-can-not-login-with-my-wechat-account"}),"Cannot login")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#a"}),"What wechaty cannot do on wechat")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Who uses Wechaty"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"How to Wechaty"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?"))))))}p.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return a?r.a.createElement(O,i(i({ref:t},l),{},{components:a})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);