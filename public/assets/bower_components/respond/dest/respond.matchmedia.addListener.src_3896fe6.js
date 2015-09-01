!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,i=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,a),t=42===r.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";if(e.matchMedia&&e.matchMedia("all").addListener)return!1;var t=e.matchMedia,n=t("only all").matches,a=!1,i=0,r=[],s=function(){e.clearTimeout(i),i=e.setTimeout(function(){for(var n=0,a=r.length;a>n;n++){var i=r[n].mql,s=r[n].listeners||[],o=t(i.media).matches;if(o!==i.matches){i.matches=o;for(var l=0,m=s.length;m>l;l++)s[l].call(e,i)}}},30)};e.matchMedia=function(i){var o=t(i),l=[],m=0;return o.addListener=function(t){n&&(a||(a=!0,e.addEventListener("resize",s,!0)),0===m&&(m=r.push({mql:o,listeners:l})),l.push(t))},o.removeListener=function(e){for(var t=0,n=l.length;n>t;t++)l[t]===e&&l.splice(t,1)},o}}(this),function(e){"use strict";function t(){E(!0)}var n={};e.respond=n,n.update=function(){};var a=[],i=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),r=function(e,t){var n=i();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))};if(n.ajax=r,n.queue=a,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s,o,l,m=e.document,d=m.documentElement,c=[],h=[],u=[],f={},p=30,y=m.getElementsByTagName("head")[0]||d,g=m.getElementsByTagName("base")[0],v=y.getElementsByTagName("link"),x=function(){var e,t=m.createElement("div"),n=m.body,a=d.style.fontSize,i=n&&n.style.fontSize,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=m.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),r&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,r?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,i&&(n.style.fontSize=i),e=l=parseFloat(e)},E=function(t){var n="clientWidth",a=d[n],i="CSS1Compat"===m.compatMode&&a||m.body[n]||a,r={},f=v[v.length-1],g=(new Date).getTime();if(t&&s&&p>g-s)return e.clearTimeout(o),void(o=e.setTimeout(E,p));s=g;for(var w in c)if(c.hasOwnProperty(w)){var S=c[w],T=S.minw,C=S.maxw,b=null===T,M=null===C,z="em";T&&(T=parseFloat(T)*(T.indexOf(z)>-1?l||x():1)),C&&(C=parseFloat(C)*(C.indexOf(z)>-1?l||x():1)),S.hasquery&&(b&&M||!(b||i>=T)||!(M||C>=i))||(r[S.media]||(r[S.media]=[]),r[S.media].push(h[S.rules]))}for(var $ in u)u.hasOwnProperty($)&&u[$]&&u[$].parentNode===y&&y.removeChild(u[$]);u.length=0;for(var L in r)if(r.hasOwnProperty(L)){var R=m.createElement("style"),q=r[L].join("\n");R.type="text/css",R.media=L,y.insertBefore(R,f.nextSibling),R.styleSheet?R.styleSheet.cssText=q:R.appendChild(m.createTextNode(q)),u.push(R)}},w=function(e,t,a){var i=e.replace(n.regex.keyframes,"").match(n.regex.media),r=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},o=!r&&a;t.length&&(t+="/"),o&&(r=1);for(var l=0;r>l;l++){var m,d,u,f;o?(m=a,h.push(s(e))):(m=i[l].match(n.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&s(RegExp.$2))),u=m.split(","),f=u.length;for(var p=0;f>p;p++)d=u[p],c.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}E()},S=function(){if(a.length){var t=a.shift();r(t.href,function(n){w(n,t.href,t.media),f[t.href]=!0,e.setTimeout(function(){S()},0)})}},T=function(){for(var t=0;t<v.length;t++){var n=v[t],i=n.href,r=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&s&&!f[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(w(n.styleSheet.rawCssText,i,r),f[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!g||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===i.substring(0,2)&&(i=e.location.protocol+i),a.push({href:i,media:r})))}S()};T(),n.update=T,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);