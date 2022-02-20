"use strict";(self.webpackChunkprimext_docs=self.webpackChunkprimext_docs||[]).push([[799],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},635:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},p="Introduction",u={unversionedId:"eng/intro",id:"eng/intro",title:"Introduction",description:"Header",source:"@site/docs/eng/intro.md",sourceDirName:"eng",slug:"/eng/intro",permalink:"/PrimeXT/docs/eng/intro",editUrl:"https://github.com/SNMetamorph/PrimeXT/tree/master/documentation/docs/eng/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0430\u043c\u0438",permalink:"/PrimeXT/docs/rus/working_with_textures"},next:{title:"env_dynlight",permalink:"/PrimeXT/docs/eng/entities/env_dynlight"}},s=[{value:"About project",id:"about-project",children:[],level:3},{value:"Current functionality",id:"current-functionality",children:[],level:3},{value:"Future plans",id:"future-plans",children:[],level:3},{value:"Developers and contributors",id:"developers-and-contributors",children:[],level:3}],m={toc:s};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Header",src:n(5891).Z})),(0,a.kt)("h3",{id:"about-project"},"About project"),(0,a.kt)("p",null,"A modern SDK for the Xash3D FWGS engine, to work on modern platforms with cross-platform support and improved graphics/physics, while retaining all the features and approaches to work inherent in GoldSrc and Xash3D.\nBased on XashXT, and therefore has all the functionality inherent in XashXT and Spirit Of Half-Life. Suitable for creating both singleplayer and multiplayer mods. "),(0,a.kt)("h3",{id:"current-functionality"},"Current functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compatibility with most of GoldSrc mods"),(0,a.kt)("li",{parentName:"ul"},"Absence of many limits inherent in GoldSrc and vanilla Xash3D"),(0,a.kt)("li",{parentName:"ul"},"Studiomodel rendering optimizations"),(0,a.kt)("li",{parentName:"ul"},"Inverse kinematics and jiggle bones for models"),(0,a.kt)("li",{parentName:"ul"},"Studiomodels weighting support"),(0,a.kt)("li",{parentName:"ul"},"Extended maximum map size limit (65535x65535x65535 units)"),(0,a.kt)("li",{parentName:"ul"},"Automatic exposure correction (eye adaptation effect)"),(0,a.kt)("li",{parentName:"ul"},"Support for decals on studiomodels"),(0,a.kt)("li",{parentName:"ul"},"Extended model limits (no more need to split into a bunch of ",(0,a.kt)("inlineCode",{parentName:"li"},".smd")," files)"),(0,a.kt)("li",{parentName:"ul"},"Dynamic lighting with shadows"),(0,a.kt)("li",{parentName:"ul"},"Rigid body physics (using PhysX engine)"),(0,a.kt)("li",{parentName:"ul"},"Normal mapping support"),(0,a.kt)("li",{parentName:"ul"},"Parallax mapping support"),(0,a.kt)("li",{parentName:"ul"},"Cubemap reflections"),(0,a.kt)("li",{parentName:"ul"},"HDR-rendering"),(0,a.kt)("li",{parentName:"ul"},"3D skybox"),(0,a.kt)("li",{parentName:"ul"},"Bloom"),(0,a.kt)("li",{parentName:"ul"},"Sun beams shader (sunshafts/godrays)"),(0,a.kt)("li",{parentName:"ul"},"Feature to make the map as background in the main menu"),(0,a.kt)("li",{parentName:"ul"},"Mirrors"),(0,a.kt)("li",{parentName:"ul"},"Monitors"),(0,a.kt)("li",{parentName:"ul"},"Portals, with the ability to move entities through them"),(0,a.kt)("li",{parentName:"ul"},"Own set of utilities for development (compilers of maps, models, model viewer) ")),(0,a.kt)("h3",{id:"future-plans"},"Future plans"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for physically based rendering (PBR)"),(0,a.kt)("li",{parentName:"ul"},"Real-time screen space reflections"),(0,a.kt)("li",{parentName:"ul"},"Major rendering optimizations"),(0,a.kt)("li",{parentName:"ul"},"Updating PhysX SDK to modern version"),(0,a.kt)("li",{parentName:"ul"},"Implement particle engine"),(0,a.kt)("li",{parentName:"ul"},"Implement ragdoll physics"),(0,a.kt)("li",{parentName:"ul"},"Implement vehicles"),(0,a.kt)("li",{parentName:"ul"},"Improvement of NPC's AI"),(0,a.kt)("li",{parentName:"ul"},"Adding support for OpenAL Soft / Steam Audio"),(0,a.kt)("li",{parentName:"ul"},"Porting to Android")),(0,a.kt)("h3",{id:"developers-and-contributors"},"Developers and contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SNMetamorph")," - Lead developer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Velaron")," - Help with porting to Linux"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0421ASPERX69X")," - Testing, documentation, logo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ncuxonaT")," - Help with renderer development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lev")," - Help with renderer development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"g-cont")," - Help with common development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Next Day")," - Testing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Aynekko")," - Testing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ThomasvonWinkler")," - Testing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KorteZZ")," - Testing")),(0,a.kt)("p",null,"If you wish, you can also take part in the development of PrimeXT: we need testers and programmers with knowledge of C++. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Footer",src:n(2229).Z})))}c.isMDXComponent=!0},2229:function(e,t,n){t.Z=n.p+"assets/images/footer-d780cb337a465e6bf733c79bb7120a34.png"},5891:function(e,t,n){t.Z=n.p+"assets/images/header-eb7705d5d2cc122209a1cc53790bdc18.png"}}]);