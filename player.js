﻿function ckcpt(){var a="";return a+="select_a.swf,2,2,-200,-30,2,1|",a+="select_b.swf,1,1,-180,-100,3,0|",a+="Proportion.swf,2,2,-240,-36,2|",a+="downloadspeeds.swf,2,2,-370,-28,2|"}function ckstyle(){var a={cpath:"",language:"",flashvars:"{s:2,p:1}",setup:"1,1,1,1,1,2,0,1,2,0,0,1,200,0,2,1,0,1,1,1,0,10,3,0,1,2,3000,0,0,0,1,1,1,1,1,1,1,250,0",pm_bg:"0x000000,100,230,180",mylogo:"logo.swf",pm_mylogo:"1,1,-250,-190",logo:"cklogo.png",pm_logo:"2,0,-100,20",control_rel:",,0",control_pv:"Preview.swf,105,2000",pm_repc:"",pm_spac:"|",pm_fpac:"file->f",pm_advtime:"2,0,-110,10,0,300,0",pm_advstatus:"1,2,2,-200,-40",pm_advjp:"0,0,2,2,-100,-40",pm_padvc:"2,0,-10,-10",pm_advms:"2,2,50,50",pm_zip:"1,1,-20,-8,1,0,0",pm_advmarquee:"1,2,130,-23,130,0,0,0x000000,50,0,20,1,15,2000",advmarquee:escape('{a href="http://www.lhkjw.com"}{font color="#FFFFFF" size="12"}随时随地云播放由隆虎科技网(WWW.LHKJW.COM)提供技术支持，空间由京东商城提供，技术QQ:122475170，欢迎您的使用。{/font}{/a}'),myweb:escape("7daa475e39ceba0deaad5dbba4810918,网络同步电视播放器,http://tv.lhkjw.com,Version:3.9"),cpt_list:ckcpt()};return a}!function(){var a={_K_:function(a){return document.getElementById(a)},getVideo:function(a){var b,c,d="";if(a)for(b=0;b<a.length;b++)c=a[b].split("->"),c&&c[0]&&(d+='<source src="'+c[0]+'"'),2==c.length&&c[1]&&(d+=' type="'+c[1]+'"'),d+=">";return d},getVars:function(a,b){return a[b]?a[b]:void 0},getParams:function(a){var b="";return a&&(1==this.getVars(a,"p")&&1!=this.getVars(a,"m")&&(b+=' autoplay="autoplay"'),1==this.getVars(a,"e")&&(b+=' loop="loop"'),1==this.getVars(a,"m")&&(b+=' preload="meta"'),this.getVars(a,"i")&&(b+=' poster="'+this.getVars(a,"i")+'"')),b},browser:function(){var a=function(a){var b,c=new Object,d={msie:/msie/.test(a)&&!/opera/.test(a),opera:/opera/.test(a),safari:/webkit/.test(a)&&!/chrome/.test(a),firefox:/firefox/.test(a),chrome:/chrome/.test(a)},e="";for(b in d)if(d[b]){e="safari"==b?"version":b;break}return d.version=e&&RegExp("(?:"+e+")[\\/: ]([\\d.]+)").test(a)?RegExp.$1:"0",d.ie=d.msie,d.ie6=d.msie&&6==parseInt(d.version,10),d.ie7=d.msie&&7==parseInt(d.version,10),d.ie8=d.msie&&8==parseInt(d.version,10),c.B=e,c.V=d.version,c}(window.navigator.userAgent.toLowerCase());return a},Platform:function(){var a,b,c="",d=navigator.userAgent;navigator.appVersion,a={iPhone:d.indexOf("iPhone")>-1||d.indexOf("Mac")>-1,iPad:d.indexOf("iPad")>-1,ios:!!d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:d.indexOf("Android")>-1||d.indexOf("Linux")>-1,webKit:d.indexOf("AppleWebKit")>-1,gecko:d.indexOf("Gecko")>-1&&-1==d.indexOf("KHTML"),presto:d.indexOf("Presto")>-1,trident:d.indexOf("Trident")>-1,mobile:!!d.match(/AppleWebKit.*Mobile.*/)||!!d.match(/AppleWebKit/),webApp:-1==d.indexOf("Safari")};for(b in a)if(a[b]){c=b;break}return c},getpath:function(a){var b,c,d,e,f,g,h=unescape(window.location.href).replace("file:///",""),j=parseInt(document.location.port),k=document.location.protocol+"//"+document.location.hostname,l="",m="",n="",o=0,p=a.split("//");for(p.length>0&&(l=p[0]+"//"),b="http|https|ftp|rtsp|mms|ftp|rtmp",c=b.split("|"),80!=j&&j&&(k+=":"+j),i=0;i<c.length;i++)if(c[i]+"://"==l){o=1;break}if(0==o)if("/"==a.substr(0,1))n=k+a;else{for(m=h.substring(0,h.lastIndexOf("/")+1).replace("\\","/"),d=a.replace("../","./"),k=d.split("./"),e=k.length,p=d.replace("./",""),f=m.split("/"),g=f.length-e,i=0;g>i;i++)n+=f[i]+"/";n+=p}else n=a;return n},Flash:function(){var a,b,c,d,e=!1,f=0;if(document.all)try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=!0,b=a.GetVariable("$version"),f=parseInt(b.split(" ")[1].split(",")[0])}catch(g){}else if(navigator.plugins&&navigator.plugins.length>0&&(a=navigator.plugins["Shockwave Flash"]))for(e=!0,c=a.description.split(" "),d=0;d<c.length;++d)isNaN(parseInt(c[d]))||(f=parseInt(c[d]));return{f:e,v:f}},embedHTML5:function(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q="",r=this.browser().B;for(q=this.browser().V,h=q.split("."),i=h[0],j=r+q,k=r+i,l="",m=!1,n=this.Flash().f,o=!1,g||(g=["iPad","iPhone","ios"]),p=0;p<g.length;p++)if(l=g[p],l.indexOf("+")>-1?(l=l.split("+")[0],o=!0):o=!1,this.Platform()==l||j==l||k==l||r==l){if(!o){m=!0;break}if(!n){m=!0;break}}m&&(q='<video controls id="'+b+'" width="'+c+'" height="'+d+'"'+this.getParams(f)+">"+this.getVideo(e)+"</video>",this._K_(a).innerHTML=q,this._K_(a).style.width=c+"px",this._K_(a).style.height=d+"px",this._K_(a).style.backgroundColor="#000")},getflashvars:function(a){var b,c="",d=0;if(a)for(b in a)d>0&&(c+="&"),"f"==b&&a[b]&&!ckstyle().pm_repc&&(a[b]=this.getpath(a[b]),a[b].indexOf("&")>-1&&(a[b]=encodeURIComponent(a[b]))),"y"==b&&a[b]&&(a[b]=this.getpath(a[b])),c+=b+"="+a[b],d++;return c},getparam:function(a){var b,c,d="",e="",f={allowScriptAccess:"always",allowFullScreen:!0,quality:"high",bgcolor:"#000"};if(a)for(b in a)f[b]=a[b];for(c in f)d+=c+'="'+f[c]+'" ',e+='<param name="'+c+'" value="'+f[c]+'" />';return d=d.replace("movie=","src="),{w:d,v:e}},getObjectById:function(a){var b,c=null,d=this._K_(a),e="embed";return d&&"OBJECT"==d.nodeName&&("undefined"!=typeof d.SetVariable?c=d:(b=d.getElementsByTagName(e)[0],b&&(c=b))),c},embedSWF:function(a,b,c,d,e,f,g){c||(c="ckplayer_a1"),g||(g={});var h="undefined",i=document,j="http://www.macromedia.com/go/getflashplayer",k='<a href="'+j+'" target="_blank">请点击此处下载安装最新的flash插件</a>',l={w:"您的网页不符合w3c标准，无法显示播放器",f:"您没有安装flash插件，无法播放视频，"+k,v:"您的flash插件版本过低，无法播放视频，"+k},m=typeof i.getElementById!=h&&typeof i.getElementsByTagName!=h&&typeof i.createElement!=h,n='id="'+c+'" name="'+c+'" ',o="",p="";g.movie=a,g.flashvars=this.getflashvars(f),o+='<object  pluginspage="http://www.macromedia.com/go/getflashplayer" ',o+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ',o+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ',o+='width="'+d+'" ',o+='height="'+e+'" ',o+=n,o+='align="middle">',o+=this.getparam(g).v,o+="<embed ",o+=this.getparam(g).w,o+=' width="'+d+'" height="'+e+'" name="'+c+'" id="'+c+'" align="middle" '+n,o+='type="application/x-shockwave-flash" pluginspage="'+j+'" />',o+="</object>",p=m?this.Flash().f?this.Flash().v<10?l.f:o:l.f:l.w,p&&(this._K_(b).innerHTML=p,this._K_(b).style.color="#FFDD00")}};window.CKobject=a}();var swfobject=function(){function a(){var a,b,c;if(!R){try{a=K.getElementsByTagName("body")[0].appendChild(q("span")),a.parentNode.removeChild(a)}catch(d){return}for(R=!0,b=N.length,c=0;b>c;c++)N[c]()}}function b(a){R?a():N[N.length]=a}function c(a){if(typeof J.addEventListener!=C)J.addEventListener("load",a,!1);else if(typeof K.addEventListener!=C)K.addEventListener("load",a,!1);else if(typeof J.attachEvent!=C)r(J,"onload",a);else if("function"==typeof J.onload){var b=J.onload;J.onload=function(){b(),a()}}else J.onload=a}function d(){M?e():f()}function e(){var a,b,c=K.getElementsByTagName("body")[0],d=q(D);d.setAttribute("type",G),a=c.appendChild(d),a?(b=0,function(){if(typeof a.GetVariable!=C){var e=a.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),U.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>b)return b++,setTimeout(arguments.callee,10),void 0;c.removeChild(d),a=null,f()}()):f()}function f(){var a,b,c,d,e,f,k,l,m,n,o,q=O.length;if(q>0)for(a=0;q>a;a++)if(b=O[a].id,c=O[a].callbackFn,d={success:!1,id:b},U.pv[0]>0){if(e=p(b))if(!s(O[a].swfVersion)||U.wk&&U.wk<312)if(O[a].expressInstall&&h()){for(f={},f.data=O[a].expressInstall,f.width=e.getAttribute("width")||"0",f.height=e.getAttribute("height")||"0",e.getAttribute("class")&&(f.styleclass=e.getAttribute("class")),e.getAttribute("align")&&(f.align=e.getAttribute("align")),k={},l=e.getElementsByTagName("param"),m=l.length,n=0;m>n;n++)"movie"!=l[n].getAttribute("name").toLowerCase()&&(k[l[n].getAttribute("name")]=l[n].getAttribute("value"));i(f,k,b,c)}else j(e),c&&c(d);else u(b,!0),c&&(d.success=!0,d.ref=g(b),c(d))}else u(b,!0),c&&(o=g(b),o&&typeof o.SetVariable!=C&&(d.success=!0,d.ref=o),c(d))}function g(a){var b,c=null,d=p(a);return d&&"OBJECT"==d.nodeName&&(typeof d.SetVariable!=C?c=d:(b=d.getElementsByTagName(D)[0],b&&(c=b))),c}function h(){return!S&&s("6.0.65")&&(U.win||U.mac)&&!(U.wk&&U.wk<312)}function i(a,b,c,d){var e,f,g,h;S=!0,y=d||null,z={success:!1,id:c},e=p(c),e&&("OBJECT"==e.nodeName?(w=k(e),x=null):(w=e,x=c),a.id=H,(typeof a.width==C||!/%$/.test(a.width)&&parseInt(a.width,10)<310)&&(a.width="310"),(typeof a.height==C||!/%$/.test(a.height)&&parseInt(a.height,10)<137)&&(a.height="137"),K.title=K.title.slice(0,47)+" - Flash Player Installation",f=U.ie&&U.win?"ActiveX":"PlugIn",g="MMredirectURL="+J.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+K.title,typeof b.flashvars!=C?b.flashvars+="&"+g:b.flashvars=g,U.ie&&U.win&&4!=e.readyState&&(h=q("div"),c+="SWFObjectNew",h.setAttribute("id",c),e.parentNode.insertBefore(h,e),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()),l(a,b,c))}function j(a){if(U.ie&&U.win&&4!=a.readyState){var b=q("div");a.parentNode.insertBefore(b,a),b.parentNode.replaceChild(k(a),b),a.style.display="none",function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)}()}else a.parentNode.replaceChild(k(a),a)}function k(a){var b,c,d,e,f=q("div");if(U.win&&U.ie)f.innerHTML=a.innerHTML;else if(b=a.getElementsByTagName(D)[0],b&&(c=b.childNodes))for(d=c.length,e=0;d>e;e++)1==c[e].nodeType&&"PARAM"==c[e].nodeName||8==c[e].nodeType||f.appendChild(c[e].cloneNode(!0));return f}function l(a,b,c){var d,e,f,g,h,i,j,k,l=p(c);if(U.wk&&U.wk<312)return d;if(l)if(typeof a.id==C&&(a.id=c),U.ie&&U.win){e="";for(f in a)a[f]!=Object.prototype[f]&&("data"==f.toLowerCase()?b.movie=a[f]:"styleclass"==f.toLowerCase()?e+=' class="'+a[f]+'"':"classid"!=f.toLowerCase()&&(e+=" "+f+'="'+a[f]+'"'));g="";for(h in b)b[h]!=Object.prototype[h]&&(g+='<param name="'+h+'" value="'+b[h]+'" />');l.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+e+">"+g+"</object>",P[P.length]=a.id,d=p(a.id)}else{i=q(D),i.setAttribute("type",G);for(j in a)a[j]!=Object.prototype[j]&&("styleclass"==j.toLowerCase()?i.setAttribute("class",a[j]):"classid"!=j.toLowerCase()&&i.setAttribute(j,a[j]));for(k in b)b[k]!=Object.prototype[k]&&"movie"!=k.toLowerCase()&&m(i,k,b[k]);l.parentNode.replaceChild(i,l),d=i}return d}function m(a,b,c){var d=q("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function n(a){var b=p(a);b&&"OBJECT"==b.nodeName&&(U.ie&&U.win?(b.style.display="none",function(){4==b.readyState?o(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function o(a){var b,c=p(a);if(c){for(b in c)"function"==typeof c[b]&&(c[b]=null);c.parentNode.removeChild(c)}}function p(a){var b=null;try{b=K.getElementById(a)}catch(c){}return b}function q(a){return K.createElement(a)}function r(a,b,c){a.attachEvent(b,c),Q[Q.length]=[a,b,c]}function s(a){var b=U.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function t(a,b,c,d){var e,f,g;U.ie&&U.mac||(e=K.getElementsByTagName("head")[0],e&&(f=c&&"string"==typeof c?c:"screen",d&&(A=null,B=null),A&&B==f||(g=q("style"),g.setAttribute("type","text/css"),g.setAttribute("media",f),A=e.appendChild(g),U.ie&&U.win&&typeof K.styleSheets!=C&&K.styleSheets.length>0&&(A=K.styleSheets[K.styleSheets.length-1]),B=f),U.ie&&U.win?A&&typeof A.addRule==D&&A.addRule(a,b):A&&typeof K.createTextNode!=C&&A.appendChild(K.createTextNode(a+" {"+b+"}"))))}function u(a,b){if(T){var c=b?"visible":"hidden";R&&p(a)?p(a).style.visibility=c:t("#"+a,"visibility:"+c)}}function v(a){var b=/[\\\"<>\.;]/,c=null!=b.exec(a);return c&&typeof encodeURIComponent!=C?encodeURIComponent(a):a}var w,x,y,z,A,B,C="undefined",D="object",E="Shockwave Flash",F="ShockwaveFlash.ShockwaveFlash",G="application/x-shockwave-flash",H="SWFObjectExprInst",I="onreadystatechange",J=window,K=document,L=navigator,M=!1,N=[d],O=[],P=[],Q=[],R=!1,S=!1,T=!0,U=function(){var a,b=typeof K.getElementById!=C&&typeof K.getElementsByTagName!=C&&typeof K.createElement!=C,c=L.userAgent.toLowerCase(),d=L.platform.toLowerCase(),e=d?/win/.test(d):/win/.test(c),f=d?/mac/.test(d):/mac/.test(c),g=/webkit/.test(c)?parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,h=!1,i=[0,0,0],j=null;if(typeof L.plugins!=C&&typeof L.plugins[E]==D)j=L.plugins[E].description,!j||typeof L.mimeTypes!=C&&L.mimeTypes[G]&&!L.mimeTypes[G].enabledPlugin||(M=!0,h=!1,j=j.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),i[0]=parseInt(j.replace(/^(.*)\..*$/,"$1"),10),i[1]=parseInt(j.replace(/^.*\.(.*)\s.*$/,"$1"),10),i[2]=/[a-zA-Z]/.test(j)?parseInt(j.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof J.ActiveXObject!=C)try{a=new ActiveXObject(F),a&&(j=a.GetVariable("$version"),j&&(h=!0,j=j.split(" ")[1].split(","),i=[parseInt(j[0],10),parseInt(j[1],10),parseInt(j[2],10)]))}catch(k){}return{w3:b,pv:i,wk:g,ie:h,win:e,mac:f}}();return function(){U.w3&&((typeof K.readyState!=C&&"complete"==K.readyState||typeof K.readyState==C&&(K.getElementsByTagName("body")[0]||K.body))&&a(),R||(typeof K.addEventListener!=C&&K.addEventListener("DOMContentLoaded",a,!1),U.ie&&U.win&&(K.attachEvent(I,function(){"complete"==K.readyState&&(K.detachEvent(I,arguments.callee),a())}),J==top&&function(){if(!R){try{K.documentElement.doScroll("left")}catch(b){return setTimeout(arguments.callee,0),void 0}a()}}()),U.wk&&function(){return R?void 0:/loaded|complete/.test(K.readyState)?(a(),void 0):(setTimeout(arguments.callee,0),void 0)}(),c(a)))}(),function(){U.ie&&U.win&&window.attachEvent("onunload",function(){var a,b,c,d,e,f=Q.length;for(a=0;f>a;a++)Q[a][0].detachEvent(Q[a][1],Q[a][2]);for(b=P.length,c=0;b>c;c++)n(P[c]);for(d in U)U[d]=null;U=null;for(e in swfobject)swfobject[e]=null;swfobject=null})}(),{registerObject:function(a,b,c,d){if(U.w3&&a&&b){var e={};e.id=a,e.swfVersion=b,e.expressInstall=c,e.callbackFn=d,O[O.length]=e,u(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){return U.w3?g(a):void 0},embedSWF:function(a,c,d,e,f,g,j,k,m,n){var o={success:!1,id:c};U.w3&&!(U.wk&&U.wk<312)&&a&&c&&d&&e&&f?(u(c,!1),b(function(){var b,p,q,r,t,v;if(d+="",e+="",b={},m&&typeof m===D)for(p in m)b[p]=m[p];if(b.data=a,b.width=d,b.height=e,q={},k&&typeof k===D)for(r in k)q[r]=k[r];if(j&&typeof j===D)for(t in j)typeof q.flashvars!=C?q.flashvars+="&"+t+"="+j[t]:q.flashvars=t+"="+j[t];if(s(f))v=l(b,q,c),b.id==c&&u(c,!0),o.success=!0,o.ref=v;else{if(g&&h())return b.data=g,i(b,q,c,n),void 0;u(c,!0)}n&&n(o)})):n&&n(o)},switchOffAutoHideShow:function(){T=!1},ua:U,getFlashPlayerVersion:function(){return{major:U.pv[0],minor:U.pv[1],release:U.pv[2]}},hasFlashPlayerVersion:s,createSWF:function(a,b,c){return U.w3?l(a,b,c):void 0},showExpressInstall:function(a,b,c,d){U.w3&&h()&&i(a,b,c,d)},removeSWF:function(a){U.w3&&n(a)},createCSS:function(a,b,c,d){U.w3&&t(a,b,c,d)},addDomLoadEvent:b,addLoadEvent:c,getQueryParamValue:function(a){var b,c,d=K.location.search||K.location.hash;if(d){if(/\?/.test(d)&&(d=d.split("?")[1]),null==a)return v(d);for(b=d.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return v(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(S){var a=p(H);a&&w&&(a.parentNode.replaceChild(w,a),x&&(u(x,!0),U.ie&&U.win&&(w.style.display="block")),y&&y(z)),S=!1}}}}();