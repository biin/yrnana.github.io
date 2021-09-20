"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{748:function(e,t,r){r.d(t,{Ey:function(){return s},m9:function(){return o},bR:function(){return i}});var n=r(4184),a=r.n(n),c=r(5893),s=function(e){var t=e.width,r=void 0===t?5:t,n=e.height,s=void 0===n?5:n,o=e.className;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:a()("w-".concat(r),"h-".concat(s),o),viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})},o=function(e){var t=e.width,r=void 0===t?5:t,n=e.height,s=void 0===n?5:n,o=e.className;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:a()("w-".concat(r),"h-".concat(s),o),viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})},i=function(e){var t=e.width,r=void 0===t?6:t,n=e.height,s=void 0===n?6:n,o=e.className;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:a()("w-".concat(r),"h-".concat(s),o),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}},2112:function(e,t,r){var n=r(748),a=r(5893);t.Z=function(){return(0,a.jsxs)("div",{className:"text-center py-20",children:[(0,a.jsx)("div",{className:"flex items-center justify-center text-gray-300",children:(0,a.jsx)(n.bR,{})}),(0,a.jsx)("div",{className:"mt-4 text-gray-300",children:"No Data"})]})}},688:function(e,t,r){var n=r(9008),a=r(2218),c=r(5893);t.Z=function(e){var t=e.title,r=e.description,s=e.path,o=e.image,i=e.isBlogTitleDisabled?t||a.yU:"".concat(a.yU).concat(t?" | ".concat(t):"");return(0,c.jsxs)(n.default,{children:[(0,c.jsx)("title",{children:i}),r&&(0,c.jsx)("meta",{name:"description",content:r}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),s&&(0,c.jsx)("meta",{property:"og:url",content:"".concat(a.Ql).concat(s)}),(0,c.jsx)("meta",{property:"og:title",content:i}),r&&(0,c.jsx)("meta",{property:"og:description",content:r}),o&&(0,c.jsx)("meta",{property:"og:image",content:o})]})}},9946:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(2218),a=r(1664),c=r(1163),s=r(4184),o=r.n(s);r(809);var i=r(5893),l=function(e){var t,r=e.children,n=e.href,a=(0,c.useRouter)(),s=(null===(t=null===a||void 0===a?void 0:a.asPath)||void 0===t?void 0:t.split(/[?#]/)[0])===n;return(0,i.jsx)("a",{href:n,onClick:function(e){e.preventDefault(),a.push(n)},className:o()("hover:text-purple-500",{"text-purple-500":s}),children:r})},u=function(){return(0,i.jsxs)("header",{className:"flex flex-row items-center my-4 sm:my-6",children:[(0,i.jsx)("div",{className:"mr-auto",children:(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"text-2xl font-semibold font-mono hover:text-purple-500",children:n.yU})})}),(0,i.jsxs)("nav",{className:"flex flex-row items-center space-x-4",children:[(0,i.jsx)(l,{href:"/about",children:"About"}),(0,i.jsx)(l,{href:"/archive",children:"Archive"}),(0,i.jsx)(l,{href:"/tags",children:"Tags"})]})]})},f=function(e){var t=e.children;return(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsx)(u,{}),(0,i.jsx)("main",{className:"my-10",children:t}),(0,i.jsxs)("footer",{className:"my-4 sm:my-6 text-center text-gray-700",children:["Copyright \xa9 2021 ",n.x1]})]})}},3627:function(e,t,r){var n=r(1664),a=r(5893);t.Z=function(e){var t=e.name,r=e.color,c=e.count;return(0,a.jsx)(n.default,{href:{pathname:"/tag/[tag]",query:{tag:encodeURIComponent(t)}},prefetch:!1,children:(0,a.jsxs)("a",{className:"inline-flex items-center text-sm leading-4 rounded-full px-4 py-1.5 text-".concat(r,"-500 bg-").concat(r,"-100 hover:bg-").concat(r,"-200 hover:text-").concat(r,"-700"),children:[(0,a.jsx)("span",{children:t}),c&&(0,a.jsxs)("span",{className:"ml-1",children:["(",c,")"]})]})})}},2218:function(e,t,r){r.d(t,{Ql:function(){return n},yU:function(){return a},x1:function(){return c},TH:function(){return s}});var n="https://yrnana.github.io",a="nana.log",c="nana",s="yrnana/yrnana.github.io-comment"},9817:function(e,t,r){r.d(t,{Z:function(){return D}});var n=r(2809);function a(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=r(9946),s=r(7294),o=r(1664),i=r(4184),l=r.n(i),u=r(748),f=r(5893);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d="w-10 py-2 text-center",x="flex justify-center",h=function(e){var t=e.first,r=e.last,a=e.page,c=e.totalPages,i=(0,s.useMemo)((function(){return function(e,t){if(e<=7)return Array.from({length:e},(function(e,r){return{isPage:!0,isCurrentPage:r+1===t,page:r+1}}));var r;r=t<=4?[1,2,3,4,5,"\u2026",e]:t>=e-3?[1,"\u2026",e-4,e-3,e-2,e-1,e]:[1,"\u2026",t-1,t,t+1,"\u2026",e];return r.map((function(e){return{isPage:"number"===typeof e,isCurrentPage:e===t,page:e}}))}(c,a)}),[c,a]);return(0,f.jsxs)("div",{className:"flex flex-row flex-nowrap items-center justify-center mt-8",children:[t?(0,f.jsx)("div",{className:l()("text-gray-300",d,x),children:(0,f.jsx)(u.Ey,{})}):(0,f.jsx)(o.default,{href:{pathname:"/page/[page]",query:{page:a-1}},children:(0,f.jsx)("a",{className:l()(d,x),children:(0,f.jsx)(u.Ey,{})})}),i.map((function(e,t){return(0,f.jsx)(j,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),"".concat(e.page,"_").concat(t))})),r?(0,f.jsx)("div",{className:l()("text-gray-300",d,x),children:(0,f.jsx)(u.m9,{})}):(0,f.jsx)(o.default,{href:{pathname:"/page/[page]",query:{page:a+1}},children:(0,f.jsx)("a",{className:l()(d,x),children:(0,f.jsx)(u.m9,{})})})]})},j=function(e){var t=e.isPage,r=e.isCurrentPage,n=e.page;return t&&!r?(0,f.jsx)(o.default,{href:{pathname:"/page/[page]",query:{page:n}},children:(0,f.jsx)("a",{className:d,children:n})}):(0,f.jsx)("div",{className:l()(d,"cursor-default",{"text-purple-500":r}),children:n})};var m=r(2112),g=r(1384),v=r(3627),y=function(e){var t=e.date,r=e.slug,n=e.title,a=e.excerpt,c=e.tags;return(0,f.jsxs)("div",{children:[(0,f.jsx)(o.default,{href:{pathname:"/post/[slug]",query:{slug:r}},children:(0,f.jsx)("a",{className:"hover:text-purple-500",children:(0,f.jsx)("h2",{className:"text-xl font-medium",children:n})})}),(0,f.jsx)("div",{className:"text-gray-500 mt-2",children:(0,g.Z)(new Date(t),"PP")}),a&&(0,f.jsx)("div",{className:"mt-2",children:a}),c&&(0,f.jsx)("div",{className:"flex flex-row flex-wrap space-x-3 mt-3",children:c.map((function(e){return(0,f.jsx)(v.Z,{name:e,color:"purple"},e)}))})]})};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=function(e){var t=e.posts;return 0===t.length?(0,f.jsx)(m.Z,{}):(0,f.jsx)("div",{className:"flex flex-col space-y-12",children:t.map((function(e){return(0,f.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.slug)}))})},w=["data"];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.postList,r=e.hasPagination,n=e.tag,s=t.data,o=a(t,w);return(0,f.jsxs)(c.Z,{children:[n&&(0,f.jsx)("h2",{className:"text-center mb-10",children:(0,f.jsx)("div",{className:"inline-block rounded-full px-6 py-4 text-2xl leading-4 font-semibold text-indigo-500 bg-indigo-100",children:n})}),(0,f.jsx)(O,{posts:s}),r&&(0,f.jsx)(h,P({},o))]})}}}]);