/*! For license information please see component---src-pages-tags-tsx-fe26aebc9e102fe57211.js.LICENSE.txt */
(self.webpackChunkyrnana_github_io=self.webpackChunkyrnana_github_io||[]).push([[190],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&t.push(s);else t.push(n.toString())}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},7980:function(t,e,n){"use strict";n.d(e,{Ey:function(){return a},m9:function(){return s},bR:function(){return l}});var r=n(5900),i=n.n(r),o=n(5893),a=function(t){var e=t.width,n=void 0===e?5:e,r=t.height,a=void 0===r?5:r,s=t.className;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:i()("w-"+n,"h-"+a,s),viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})},s=function(t){var e=t.width,n=void 0===e?5:e,r=t.height,a=void 0===r?5:r,s=t.className;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:i()("w-"+n,"h-"+a,s),viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})},l=function(t){var e=t.width,n=void 0===e?6:e,r=t.height,a=void 0===r?6:r,s=t.className;return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:i()("w-"+n,"h-"+a,s),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}},156:function(t,e,n){"use strict";var r=n(7980),i=n(5893);e.Z=function(){return(0,i.jsxs)("div",{className:"text-center py-20",children:[(0,i.jsx)("div",{className:"flex items-center justify-center text-gray-300",children:(0,i.jsx)(r.bR,{})}),(0,i.jsx)("div",{className:"mt-4 text-gray-300",children:"No Data"})]})}},3133:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(643),i=n(6373),o=n(7294),a=n(156),s=n(9882),l=n(5893),u=function(t){var e=t.tags,n=(0,o.useMemo)((function(){return function(t){var e=t.reduce((function(t,e){return t+e.totalCount}),0)/t.length,n=t.reduce((function(t,n){return t+Math.pow(n.totalCount-e,2)}),0)/t.length,r=Math.pow(n,.5);return{m:e,"σ":r}}(e)}),[e]),r=n.m,i=n.σ;return 0===e.length?(0,l.jsx)(a.Z,{}):(0,l.jsx)("div",{className:"flex flex-col space-y-4 items-start",children:e.map((function(t){return(0,l.jsx)(s.Z,{name:t.fieldValue,count:t.totalCount,color:c(t.totalCount,r,i)},t.fieldValue)}))})};function c(t,e,n){var r=(t-e)/n;return r<-.84?"yellow":r>=-.84&&r<-.25?"green":r>=-.25&&r<.25?"purple":r>=.25&&r<.84?"blue":"pink"}var d=function(t){var e=t.data;return(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(r.Z,{title:"tags",noindex:!0}),(0,l.jsx)(u,{tags:e.allMdx.group})]})}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-fe26aebc9e102fe57211.js.map