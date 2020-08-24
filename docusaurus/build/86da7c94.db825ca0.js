(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),l=d(n),h=i,m=l["".concat(c,".").concat(h)]||l[h]||s[h]||r;return n?a.a.createElement(m,p(p({ref:t},o),{},{components:n})):a.a.createElement(m,p({ref:t},o))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=h;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var o=2;o<r;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),r=(n(0),n(141)),c={title:"Friendship"},p={unversionedId:"api/friendship",id:"api/friendship",isDocsHomePage:!1,title:"Friendship",description:"Send, receive friend request, and friend confirmation events.",source:"@site/docs/api/friendship.md",permalink:"/docs/api/friendship",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/friendship.md",lastUpdatedBy:"Jiang Shanshan",lastUpdatedAt:1598275849,sidebar:"docs",previous:{title:"RoomInvitation",permalink:"/docs/api/room-invitation"},next:{title:"Wechaty FAQ",permalink:"/docs/faq/README"}},b=[{value:"Friendship",id:"friendship",children:[{value:"friendship.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaccept-\u21d2-promise-void",children:[]},{value:"friendship.hello() \u21d2 <code>string</code>",id:"friendshiphello-\u21d2-string",children:[]},{value:"friendship.contact() \u21d2 <code>Contact</code>",id:"friendshipcontact-\u21d2-contact",children:[]},{value:"friendship.type() \u21d2 <code>FriendshipType</code>",id:"friendshiptype-\u21d2-friendshiptype",children:[]},{value:"<del>Friendship.send()</del>",id:"friendshipsend",children:[]},{value:"Friendship.add(contact, hello) \u21d2 <code>Promise &lt;void&gt;</code>",id:"friendshipaddcontact-hello-\u21d2-promise-void",children:[]}]}],o={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Send, receive friend request, and friend confirmation events."),Object(r.b)("h2",{id:"friendship"},"Friendship"),Object(r.b)("p",null,"Send, receive friend request, and friend confirmation events."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"send request"),Object(r.b)("li",{parentName:"ol"},"receive request","(","in friend event",")"),Object(r.b)("li",{parentName:"ol"},"confirmation friendship","(","friend event",")")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/friend-bot.ts"}),"Examples/Friend-Bot")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship"}),"Friendship"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"instance"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship+accept"}),".accept","(",")")," \u21d2 ",Object(r.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship+hello"}),".hello","(",")")," \u21d2 ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship+contact"}),".contact","(",")")," \u21d2 ",Object(r.b)("inlineCode",{parentName:"li"},"Contact")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship+type"}),".type","(",")")," \u21d2 ",Object(r.b)("inlineCode",{parentName:"li"},"FriendshipType")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"static"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship.send"}),Object(r.b)("del",{parentName:"a"},".send","(",")"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/api/friendship#Friendship.add"}),".add","(","contact, hello",")")," \u21d2 ",Object(r.b)("inlineCode",{parentName:"li"},"Promise <void>"))))))),Object(r.b)("h3",{id:"friendshipaccept-\u21d2-promise-void"},"friendship.accept","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(r.b)("p",null,"Accept Friend Request"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship")),"  "),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event.`)\n    switch (friendship.type()) {\n\n    // 1. New Friend Request\n\n    case bot.Friendship.Type.Receive:\n      await friendship.accept()\n      break\n\n    // 2. Friend Ship Confirmed\n\n    case bot.Friendship.Type.Confirm:\n      console.log(`friend ship confirmed`)\n      break\n    }\n  } catch (e) {\n    console.error(e)\n  }\n})\n.start()\n")),Object(r.b)("h3",{id:"friendshiphello-\u21d2-string"},"friendship.hello","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"string")),Object(r.b)("p",null,"Get verify message from"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship")),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Example")," ",Object(r.b)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    console.log(`received friend event from ${friendship.contact().name()}`)\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),Object(r.b)("h3",{id:"friendshipcontact-\u21d2-contact"},"friendship.contact","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Contact")),Object(r.b)("p",null,"Get the contact from friendship"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship")),"  "),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('friendship', friendship => {\n  const contact = friendship.contact()\n  const name = contact.name()\n  console.log(`received friend event from ${name}`)\n}\n.start()\n")),Object(r.b)("h3",{id:"friendshiptype-\u21d2-friendshiptype"},"friendship.type","(",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"FriendshipType")),Object(r.b)("p",null,"Return the Friendship Type"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Tips: FriendshipType is enum here. ","<","/br",">"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"FriendshipType.Unknown"),Object(r.b)("li",{parentName:"ul"},"FriendshipType.Confirm"),Object(r.b)("li",{parentName:"ul"},"FriendshipType.Receive"),Object(r.b)("li",{parentName:"ul"},"FriendshipType.Verify"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship")),Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("strong",{parentName:"p"},"Example")," ",Object(r.b)("em",{parentName:"p"},"(","If request content is ","`","ding","`",", then accept the friendship",")")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('friendship', async friendship => {\n  try {\n    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {\n      await friendship.accept()\n    }\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),Object(r.b)("h3",{id:"friendshipsend"},Object(r.b)("del",{parentName:"h3"},"Friendship.send","(",")")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Deprecated"))),Object(r.b)("p",null,"use ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#friendship-add-contact-hello-promise"}),"Friendship","#","add")," instead"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship"))),Object(r.b)("h3",{id:"friendshipaddcontact-hello-\u21d2-promise-void"},"Friendship.add","(","contact, hello",")"," \u21d2 ",Object(r.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(r.b)("p",null,"Send a Friend Request to a ",Object(r.b)("inlineCode",{parentName:"p"},"contact")," with message ",Object(r.b)("inlineCode",{parentName:"p"},"hello"),"."),Object(r.b)("p",null,"The best practice is to send friend request once per minute. Remeber not to do this too frequently, or your account may be blocked."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kind"),": static method of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/friendship#Friendship"}),Object(r.b)("inlineCode",{parentName:"a"},"Friendship"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"contact"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"Contact")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"Send friend request to contact")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"hello"),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:"left"}),"The friend request content")))),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),"const memberList = await room.memberList()\nfor (let i = 0; i < memberList.length; i++) {\n  await bot.Friendship.add(member, 'Nice to meet you! I am wechaty bot!')\n}\n")))}d.isMDXComponent=!0}}]);