parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({9:[function(require,module,exports) {
"use strict";function e(e,r){return Math.floor(Math.random()*(r-e))+e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.random=e;
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ball=i;var t=require("./random");function i(t,i,s,e,h,o){this.x=t,this.y=i,this.velX=s,this.velY=e,this.color=h,this.size=o}i.prototype.draw=function(t){t.beginPath(),t.fillStyle=this.color,t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill()},i.prototype.update=function(t){this.x+this.size>=t.width&&(this.velX=-this.velX),this.x-this.size<=0&&(this.velX=-this.velX),this.y+this.size>=t.height&&(this.velY=-this.velY),this.y-this.size<=0&&(this.velY=-this.velY),this.x+=this.velX,this.y+=this.velY},i.prototype.collisionDetect=function(i){for(var s=0;s<i.length;s++)if(this!==i[s]){var e=this.x-i[s].x,h=this.y-i[s].y;Math.sqrt(e*e+h*h)<this.size+i[s].size&&(i[s].color=this.color="rgb("+(0,t.random)(0,255)+","+(0,t.random)(0,255)+","+(0,t.random)(0,255)+")")}};
},{"./random":9}],6:[function(require,module,exports) {
"use strict";var e=require("./modules/random"),n=require("./modules/ball"),i=document.querySelector("canvas"),r=i.getContext("2d"),t=i.width=window.innerWidth,d=i.height=window.innerHeight,o={width:t,height:d};window.addEventListener("resize",function(){t=i.width=o.width=window.innerWidth,d=i.height=o.height=window.innerHeight});var a=[];function h(){for(r.fillStyle="rgba(0,0,0,1)",r.fillRect(0,0,t,d);a.length<25;){var i=new n.Ball((0,e.random)(0,t),(0,e.random)(0,d),(0,e.random)(-7,7),(0,e.random)(-7,7),"rgb("+(0,e.random)(0,255)+","+(0,e.random)(0,255)+","+(0,e.random)(0,255)+")",(0,e.random)(10,20));a.push(i)}for(var l=0;l<a.length;l++)a[l].draw(r),a[l].update(o),a[l].collisionDetect(a);requestAnimationFrame(h)}h();
},{"./modules/random":9,"./modules/ball":10}]},{},[6], null)
//# sourceMappingURL=/main.e37a3633.map