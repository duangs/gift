!function(e,t){"use strict";function n(){}function o(e,t){if(e){"object"==typeof e&&(e=[].slice.call(e));for(var n=0,o=e.length;o>n;n++)t.call(e,e[n],n)}}function a(e,n){var o=Object.prototype.toString.call(n).slice(8,-1);return n!==t&&null!==n&&o===e}function r(e){return a("Function",e)}function u(e){return a("Array",e)}function c(e){var t=e.split("/"),n=t[t.length-1],o=n.indexOf("?");return-1!==o?n.substring(0,o):n}function l(e){e=e||n,e._done||(e(),e._done=1)}function i(e,t,o,a){var r="object"==typeof e?e:{test:e,success:t?u(t)?t:[t]:!1,failure:o?u(o)?o:[o]:!1,callback:a||n},c=!!r.test;return c&&r.success?(r.success.push(r.callback),_.load.apply(null,r.success)):c||!r.failure?a():(r.failure.push(r.callback),_.load.apply(null,r.failure)),_}function s(e){var t,n,o={};if("object"==typeof e)for(t in e)!e[t]||(o={name:t,url:e[t]});else o={name:c(e),url:e};return n=k[o.name],n&&n.url===o.url?n:(k[o.name]=o,o)}function d(e){e=e||k;for(var t in e)if(e.hasOwnProperty(t)&&e[t].state!==D)return!1;return!0}function f(e){e.state=B,o(e.onpreload,function(e){e.call()})}function m(e){e.state===t&&(e.state=x,e.onpreload=[],g({url:e.url,type:"cache"},function(){f(e)}))}function p(){var e=arguments,t=e[e.length-1],n=[].slice.call(e,1),a=n[0];return r(t)||(t=null),u(e[0])?(e[0].push(t),_.load.apply(null,e[0]),_):(a?(o(n,function(e){r(e)||!e||m(s(e))}),h(s(e[0]),r(a)?a:function(){_.load.apply(null,n)})):h(s(e[0])),_)}function y(){var e=arguments,t=e[e.length-1],n={};return r(t)||(t=null),u(e[0])?(e[0].push(t),_.load.apply(null,e[0]),_):(o(e,function(e){e!==t&&(e=s(e),n[e.name]=e)}),o(e,function(e){e!==t&&(e=s(e),h(e,function(){d(n)&&l(t)}))}),_)}function h(e,t){return t=t||n,e.state===D?void t():e.state===R?void _.ready(e.name,t):e.state===x?void e.onpreload.push(function(){h(e,t)}):(e.state=R,void g(e,function(){e.state=D,t(),o(O[e.name],function(e){l(e)}),S&&d()&&o(O.ALL,function(e){l(e)})}))}function v(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function g(t,o){function a(t){t=t||e.event,c.onload=c.onreadystatechange=c.onerror=null,o()}function r(n){n=n||e.event,("load"===n.type||/loaded|complete/.test(c.readyState)&&(!A.documentMode||A.documentMode<9))&&(e.clearTimeout(t.errorTimeout),e.clearTimeout(t.cssTimeout),c.onload=c.onreadystatechange=c.onerror=null,o())}function u(){if(t.state!==D&&t.cssRetries<=20){for(var n=0,o=A.styleSheets.length;o>n;n++)if(A.styleSheets[n].href===c.href)return void r({type:"load"});t.cssRetries++,t.cssTimeout=e.setTimeout(u,250)}}var c,l,i;o=o||n,l=v(t.url),"css"===l?(c=A.createElement("link"),c.type="text/"+(t.type||"css"),c.rel="stylesheet",c.href=t.url,t.cssRetries=0,t.cssTimeout=e.setTimeout(u,500)):(c=A.createElement("script"),c.type="text/"+(t.type||"javascript"),c.src=t.url),c.onload=c.onreadystatechange=r,c.onerror=a,c.async=!1,c.defer=!1,t.errorTimeout=e.setTimeout(function(){a({type:"timeout"})},7e3),i=A.head||A.getElementsByTagName("head")[0],i.insertBefore(c,i.lastChild)}function T(){for(var e,t=A.getElementsByTagName("script"),n=0,o=t.length;o>n;n++)if(e=t[n].getAttribute("data-headjs-load"),!!e)return void _.load(e)}function E(e,t){var n,a,c;return e===A?(S?l(t):M.push(t),_):(r(e)&&(t=e,e="ALL"),u(e)?(n={},o(e,function(e){n[e]=k[e],_.ready(e,function(){d(n)&&l(t)})}),_):"string"==typeof e&&r(t)?(a=k[e],a&&a.state===D||"ALL"===e&&d()&&S?(l(t),_):(c=O[e],c?c.push(t):c=O[e]=[t],_)):_)}function L(){return A.body?void(S||(S=!0,T(),o(M,function(e){l(e)}))):(e.clearTimeout(_.readyTimeout),void(_.readyTimeout=e.setTimeout(L,50)))}function b(){A.addEventListener?(A.removeEventListener("DOMContentLoaded",b,!1),L()):"complete"===A.readyState&&(A.detachEvent("onreadystatechange",b),L())}var S,j,A=e.document,M=[],O={},k={},w="async"in A.createElement("script")||"MozAppearance"in A.documentElement.style||e.opera,C=e.head_conf&&e.head_conf.head||"head",_=e[C]=e[C]||function(){_.ready.apply(null,arguments)},x=1,B=2,R=3,D=4;if("complete"===A.readyState)L();else if(A.addEventListener)A.addEventListener("DOMContentLoaded",b,!1),e.addEventListener("load",L,!1);else{A.attachEvent("onreadystatechange",b),e.attachEvent("onload",L),j=!1;try{j=!e.frameElement&&A.documentElement}catch(N){}j&&j.doScroll&&function z(){if(!S){try{j.doScroll("left")}catch(t){return e.clearTimeout(_.readyTimeout),void(_.readyTimeout=e.setTimeout(z,50))}L()}}()}_.load=_.js=w?y:p,_.test=i,_.ready=E,_.ready(A,function(){d()&&o(O.ALL,function(e){l(e)}),_.feature&&_.feature("domloaded",!0)})}(window);