webpackJsonpjwplayer([7],{73:function(e,t){!function(){function e(e){if("string"!=typeof e)return!1;var t=o[e.toLowerCase()];return!!t&&e.toLowerCase()}function t(e){if("string"!=typeof e)return!1;var t=s[e.toLowerCase()];return!!t&&e.toLowerCase()}function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function r(r,o,s){var u=this,f=/MSIE\s8\.0/.test(navigator.userAgent),a={};f?u=document.createElement("custom"):a.enumerable=!0,u.hasBeenReset=!1;var c="",d=!1,h=r,l=o,p=s,g=null,w="",b=!0,y="auto",m="start",v=50,O="middle",j=50,P="middle";if(Object.defineProperty(u,"id",n({},a,{get:function(){return c},set:function(e){c=""+e}})),Object.defineProperty(u,"pauseOnExit",n({},a,{get:function(){return d},set:function(e){d=!!e}})),Object.defineProperty(u,"startTime",n({},a,{get:function(){return h},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");h=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"endTime",n({},a,{get:function(){return l},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");l=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"text",n({},a,{get:function(){return p},set:function(e){p=""+e,this.hasBeenReset=!0}})),Object.defineProperty(u,"region",n({},a,{get:function(){return g},set:function(e){g=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"vertical",n({},a,{get:function(){return w},set:function(t){var n=e(t);if(n===!1)throw new SyntaxError("An invalid or illegal string was specified.");w=n,this.hasBeenReset=!0}})),Object.defineProperty(u,"snapToLines",n({},a,{get:function(){return b},set:function(e){b=!!e,this.hasBeenReset=!0}})),Object.defineProperty(u,"line",n({},a,{get:function(){return y},set:function(e){if("number"!=typeof e&&e!==i)throw new SyntaxError("An invalid number or illegal string was specified.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"lineAlign",n({},a,{get:function(){return m},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");m=n,this.hasBeenReset=!0}})),Object.defineProperty(u,"position",n({},a,{get:function(){return v},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"positionAlign",n({},a,{get:function(){return O},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");O=n,this.hasBeenReset=!0}})),Object.defineProperty(u,"size",n({},a,{get:function(){return j},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");j=e,this.hasBeenReset=!0}})),Object.defineProperty(u,"align",n({},a,{get:function(){return P},set:function(e){var n=t(e);if(!n)throw new SyntaxError("An invalid or illegal string was specified.");P=n,this.hasBeenReset=!0}})),u.displayState=void 0,f)return u}var i="auto",o={"":!0,lr:!0,rl:!0},s={start:!0,middle:!0,end:!0,left:!0,right:!0};r.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)},window.VTTCue=r}(this)}});