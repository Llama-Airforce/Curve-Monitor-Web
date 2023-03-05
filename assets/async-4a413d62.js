import{aN as u,aO as d,aP as l,aQ as h,aR as f,aS as v}from"./index-52cb6942-302b6965.js";var p=function(s){u(i,s);function i(t,r){return s.call(this)||this}return i.prototype.schedule=function(t,r){return this},i}(d),c={setInterval:function(s,i){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var e=c.delegate;return e!=null&&e.setInterval?e.setInterval.apply(e,l([s,i],h(t))):setInterval.apply(void 0,l([s,i],h(t)))},clearInterval:function(s){var i=c.delegate;return((i==null?void 0:i.clearInterval)||clearInterval)(s)},delegate:void 0},y=function(s){u(i,s);function i(t,r){var e=s.call(this,t,r)||this;return e.scheduler=t,e.work=r,e.pending=!1,e}return i.prototype.schedule=function(t,r){var e;if(r===void 0&&(r=0),this.closed)return this;this.state=t;var n=this.id,a=this.scheduler;return n!=null&&(this.id=this.recycleAsyncId(a,n,r)),this.pending=!0,this.delay=r,this.id=(e=this.id)!==null&&e!==void 0?e:this.requestAsyncId(a,this.id,r),this},i.prototype.requestAsyncId=function(t,r,e){return e===void 0&&(e=0),c.setInterval(t.flush.bind(t,this),e)},i.prototype.recycleAsyncId=function(t,r,e){if(e===void 0&&(e=0),e!=null&&this.delay===e&&this.pending===!1)return r;r!=null&&c.clearInterval(r)},i.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(t,r);if(e)return e;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},i.prototype._execute=function(t,r){var e=!1,n;try{this.work(t)}catch(a){e=!0,n=a||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),n},i.prototype.unsubscribe=function(){if(!this.closed){var t=this,r=t.id,e=t.scheduler,n=e.actions;this.work=this.state=this.scheduler=null,this.pending=!1,f(n,this),r!=null&&(this.id=this.recycleAsyncId(e,r,null)),this.delay=null,s.prototype.unsubscribe.call(this)}},i}(p),o=function(){function s(i,t){t===void 0&&(t=s.now),this.schedulerActionCtor=i,this.now=t}return s.prototype.schedule=function(i,t,r){return t===void 0&&(t=0),new this.schedulerActionCtor(this,i).schedule(r,t)},s.now=v.now,s}(),A=function(s){u(i,s);function i(t,r){r===void 0&&(r=o.now);var e=s.call(this,t,r)||this;return e.actions=[],e._active=!1,e}return i.prototype.flush=function(t){var r=this.actions;if(this._active){r.push(t);return}var e;this._active=!0;do if(e=t.execute(t.state,t.delay))break;while(t=r.shift());if(this._active=!1,e){for(;t=r.shift();)t.unsubscribe();throw e}},i}(o),g=new A(y),b=g;export{y as A,o as S,b as a,g as b,A as c};
