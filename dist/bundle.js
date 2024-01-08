(()=>{"use strict";var e,t,n,i,o,r,a,u={136:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=document.createElement("img");i.src="./images/background.png";var o=n.getX()<e.width?0:i.width-n.getX(),r=n.getY()<e.height?0:i.height-n.getY();return i.onload=function(){return t.drawImage(i,o,r,e.width,e.height,0,0,e.width,e.height)},i}},386:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=n(307),o=function(){function e(){var e=this;this.getX=function(){return e.x},this.getY=function(){return e.y},this.x=10,this.y=10,this.angle=i.default.right}return e.prototype.setLimits=function(e,t){this.limitX=e,this.limitY=t},e.prototype.moveUp=function(){this.rotate(i.default.up),this.y>0&&--this.y},e.prototype.moveDown=function(){this.rotate(i.default.down),this.y<this.limitY&&++this.y},e.prototype.moveLeft=function(){this.rotate(i.default.left),this.x>0&&--this.x},e.prototype.moveRight=function(){this.rotate(i.default.right),this.x<this.limitX&&++this.x},e.prototype.rotate=function(e){this.angle=e},e.prototype.applyRotation=function(e){e.translate(this.x,this.y),e.rotate(this.angle),e.translate(-this.x,-this.y)},e.prototype.paint=function(e){var t=this,n=document.createElement("img");n.src="./images/turtle.png",n.onload=function(){t.applyRotation(e),e.drawImage(n,t.x,t.y,n.width/4,n.height/4),e.resetTransform()}},e}();t.default=o},307:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n={up:0,right:Math.PI/2,down:Math.PI,left:Math.PI+Math.PI/2};t.default=n},417:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=n(691),o=n(244),r=n(525);t.default=function(e,t){(0,i.default)(e,t),(0,r.default)(e,t),(0,o.default)(e,t)}},691:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.addEventListener("keydown",(function(e){return function(e,t){["w","W","ArrowUp"].includes(e.key)&&t.moveUp(),["s","S","ArrowDown"].includes(e.key)&&t.moveDown(),["a","A","ArrowLeft"].includes(e.key)&&t.moveLeft(),["d","D","ArrowRight"].includes(e.key)&&t.moveRight()}(e,t)}))}},244:(e,t)=>{function n(e,t){var n,i;if(e.preventDefault(),e instanceof TouchEvent){var o=e.touches[0];n=o.pageX,i=o.pageY}else n=e.pageX,i=e.pageY;n<t.getX()&&t.moveLeft(),n>t.getX()&&t.moveRight(),i<t.getY()&&t.moveUp(),i>t.getY()&&t.moveDown()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){PointerEvent?(e.addEventListener("pointerdown",(function(e){return n(e,t)})),e.addEventListener("pointermove",(function(e){return n(e,t)}))):(e.addEventListener("touchstart",(function(e){return n(e,t)})),e.addEventListener("touchmove",(function(e){return n(e,t)})))}},525:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.addEventListener("wheel",(function(e){return function(e,t){e.preventDefault(),e.deltaX<0&&t.moveLeft(),e.deltaX>0&&t.moveRight(),e.deltaY<0&&t.moveUp(),e.deltaY>0&&t.moveDown()}(e,t)}))}},147:e=>{e.exports=JSON.parse('{"version":"0.0.4 Preview","devDependencies":{"concurrently":"^8.2.2","serve":"^14.2.1","ts-loader":"^9.5.1","typescript":"^5.3.3","webpack":"^5.89.0","webpack-cli":"^5.1.4"},"scripts":{"webpack":"npx webpack --watch","serve":"npx serve -l 5000","dev":"npx concurrently \\"npm run webpack\\" \\"npm run serve\\"","start":"npm run dev"}}')}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return u[e](n,n.exports,d),n.exports}e=d(386),t=d(147),n=d(417),i=d(136),o=document.getElementById("canvas"),r=o.getContext("2d"),a=new e.default,(0,n.default)(o,a),document.getElementById("version").innerText=t.version,o.focus(),function e(){var t=(0,i.default)(o,r,a);a.setLimits(t.width,t.height),a.paint(r),requestAnimationFrame(e)}()})();
//# sourceMappingURL=bundle.js.map