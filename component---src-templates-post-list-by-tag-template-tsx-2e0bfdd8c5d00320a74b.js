/*! For license information please see component---src-templates-post-list-by-tag-template-tsx-2e0bfdd8c5d00320a74b.js.LICENSE.txt */
(self.webpackChunkyrnana_github_io=self.webpackChunkyrnana_github_io||[]).push([[227],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=s.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},2255:function(e,t,n){"use strict";n.d(t,{Ey:function(){return a},m9:function(){return l},bR:function(){return o}});var r=n(5900),s=n.n(r),i=n(5893),a=function(e){var t=e.width,n=void 0===t?5:t,r=e.height,a=void 0===r?5:r,l=e.className;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s()("w-"+n,"h-"+a,l),viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})},l=function(e){var t=e.width,n=void 0===t?5:t,r=e.height,a=void 0===r?5:r,l=e.className;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s()("w-"+n,"h-"+a,l),viewBox:"0 0 20 20",fill:"currentColor",children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})},o=function(e){var t=e.width,n=void 0===t?6:t,r=e.height,a=void 0===r?6:r,l=e.className;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:s()("w-"+n,"h-"+a,l),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}},7124:function(e,t,n){"use strict";var r=n(2255),s=n(5893);t.Z=function(){return(0,s.jsxs)("div",{className:"text-center py-20",children:[(0,s.jsx)("div",{className:"flex items-center justify-center text-gray-300",children:(0,s.jsx)(r.bR,{})}),(0,s.jsx)("div",{className:"mt-4 text-gray-300",children:"No Data"})]})}},7724:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7124),s=n(5444),i=n(8698),a=n(7525),l=n(5893),o=function(e){var t=e.slug,n=e.excerptAst,r=e.frontmatter,o=r.date,c=r.title,u=r.tags,d=r.excerptAst;return(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Link,{to:t,className:"hover:text-purple-500",children:(0,l.jsx)("h2",{className:"text-xl font-medium",children:c})}),(0,l.jsx)("div",{className:"text-gray-500 mt-2",children:(0,a.p)(o)}),(0,l.jsx)("div",{className:"mt-2 markdown excerpt-markdown",children:(0,a.i)(d||n,!0)}),u&&(0,l.jsx)("div",{className:"flex flex-row flex-wrap space-x-3 mt-3",children:u.map((function(e){return(0,l.jsx)(i.Z,{name:e,color:"purple"},e)}))})]})},c=function(e){var t=e.posts;return 0===t.length?(0,l.jsx)(r.Z,{}):(0,l.jsx)("div",{className:"flex flex-col space-y-12",children:t.map((function(e){return(0,l.jsx)(o,Object.assign({},e),e.slug)}))})}},1315:function(e,t,n){"use strict";n.r(t);var r=n(5827),s=n(2721),i=n(7724),a=n(5893);t.default=function(e){var t=e.data,n=e.pageContext;return(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{title:n.tag,noindex:!0}),(0,a.jsx)("h2",{className:"text-center mb-10",children:(0,a.jsx)("div",{className:"select-none inline-block rounded-full px-6 py-4 text-2xl leading-4 font-semibold text-indigo-500 bg-indigo-100",children:n.tag})}),(0,a.jsx)(i.Z,{posts:t.allMarkdownRemark.nodes})]})}}}]);
//# sourceMappingURL=component---src-templates-post-list-by-tag-template-tsx-2e0bfdd8c5d00320a74b.js.map