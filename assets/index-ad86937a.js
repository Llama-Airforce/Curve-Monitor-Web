import{b0 as C,b1 as g,b2 as y,b3 as d,b4 as h,b5 as x,b6 as E,b7 as S,b8 as D,b9 as j,ba as L,bb as P,bc as B,bd as k,be as H,bf as Q,an as w,ar as G,bg as K,bh as J,bi as O,bj as Y,ap as X,at as W,am as N}from"./index-a3b30fe6.js";import{a5 as Re,br as Ue,bl as De,bn as Pe,bo as Be,bs as He,bm as Qe,as as Ge,bt as Ke,bB as Je,bA as Ye,bC as Xe,bD as Ze,a6 as $e,bE as _e,bu as et,bq as tt,bv as at,bw as nt,bF as rt,bG as it,bH as st,ao as ut,bI as ot,bk as ct,bx as lt,bp as ft,bJ as mt,bK as dt,bz as ht,bL as vt,k as pt,j as bt,bM as gt,bN as At,bO as yt,bP as wt,by as Ft,bQ as It}from"./index-a3b30fe6.js";import{A as Z,a as $,c as _,n as ee}from"./zipWith-e516b603.js";import{d as Et,C as qt,e as Tt,N as kt,b as St,S as Ot,T as Wt,g as Mt,h as Ct,j as jt,k as Lt,l as Nt,m as Vt,p as zt,q as Rt,s as Ut,f as Dt,u as Pt,v as Bt,w as Ht,x as Qt,y as Gt,B as Kt,D as Jt,E as Yt,F as Xt,G as Zt,H as $t,I as _t,J as ea,K as ta,L as aa,M as na,O as ra,P as ia,Q as sa,R as ua,U as oa,V as ca,$ as la,W as fa,i as ma,X as da,Y as ha,Z as va,_ as pa,a0 as ba,a1 as ga,a2 as Aa,a3 as ya,a4 as wa,o as Fa,a5 as Ia,a6 as xa,a7 as Ea,a8 as qa,a9 as Ta,aa as ka,r as Sa,ab as Oa,ac as Wa,ag as Ma,ad as Ca,ae as ja,af as La,ah as Na,ai as Va,aj as za,ak as Ra,al as Ua,am as Da,an as Pa,ao as Ba,ap as Ha,aq as Qa,ar as Ga,as as Ka,at as Ja,au as Ya,av as Xa,t as Za,aw as $a,ax as _a,ay as en,az as tn,aA as an,aB as nn,aC as rn,aD as sn,aE as un,aF as on,aG as cn,z as ln,aH as fn,aI as mn}from"./zipWith-e516b603.js";import{m as hn}from"./merge-8496e31e.js";import{d as pn,s as bn}from"./skip-3a0fc3fc.js";var V={now:function(){return(V.delegate||performance).now()},delegate:void 0},p={schedule:function(n){var a=requestAnimationFrame,e=cancelAnimationFrame,r=p.delegate;r&&(a=r.requestAnimationFrame,e=r.cancelAnimationFrame);var t=a(function(i){e=void 0,n(i)});return new C(function(){return e==null?void 0:e(t)})},requestAnimationFrame:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=p.delegate;return((e==null?void 0:e.requestAnimationFrame)||requestAnimationFrame).apply(void 0,g([],y(n)))},cancelAnimationFrame:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=p.delegate;return((e==null?void 0:e.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,g([],y(n)))},delegate:void 0};function Ae(n){return n?z(n):te}function z(n){return new d(function(a){var e=n||V,r=e.now(),t=0,i=function(){a.closed||(t=p.requestAnimationFrame(function(s){t=0;var u=e.now();a.next({timestamp:n?u:s,elapsed:u-r}),i()}))};return i(),function(){t&&p.cancelAnimationFrame(t)}})}var te=z(),ae=1,q,T={};function M(n){return n in T?(delete T[n],!0):!1}var R={setImmediate:function(n){var a=ae++;return T[a]=!0,q||(q=Promise.resolve()),q.then(function(){return M(a)&&n()}),a},clearImmediate:function(n){M(n)}},ne=R.setImmediate,re=R.clearImmediate,F={setImmediate:function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=F.delegate;return((e==null?void 0:e.setImmediate)||ne).apply(void 0,g([],y(n)))},clearImmediate:function(n){var a=F.delegate;return((a==null?void 0:a.clearImmediate)||re)(n)},delegate:void 0},ie=function(n){h(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!==null&&t>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.actions.push(this),e._scheduled||(e._scheduled=F.setImmediate(e.flush.bind(e,void 0))))},a.prototype.recycleAsyncId=function(e,r,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,t);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(F.clearImmediate(r),e._scheduled=void 0)},a}(x),se=function(n){h(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===r&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===r&&t.shift();)e.unsubscribe();throw i}},a}(E),ue=new se(ie),ye=ue,oe=function(n){h(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.schedule=function(e,r){return r===void 0&&(r=0),r>0?n.prototype.schedule.call(this,e,r):(this.delay=r,this.state=e,this.scheduler.flush(this),this)},a.prototype.execute=function(e,r){return r>0||this.closed?n.prototype.execute.call(this,e,r):this._execute(e,r)},a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!=null&&t>0||t==null&&this.delay>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.flush(this),0)},a}(x),ce=function(n){h(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a}(E),le=new ce(oe),we=le,fe=function(n){h(a,n);function a(e,r){var t=n.call(this,e,r)||this;return t.scheduler=e,t.work=r,t}return a.prototype.requestAsyncId=function(e,r,t){return t===void 0&&(t=0),t!==null&&t>0?n.prototype.requestAsyncId.call(this,e,r,t):(e.actions.push(this),e._scheduled||(e._scheduled=p.requestAnimationFrame(function(){return e.flush(void 0)})))},a.prototype.recycleAsyncId=function(e,r,t){var i;if(t===void 0&&(t=0),t!=null?t>0:this.delay>0)return n.prototype.recycleAsyncId.call(this,e,r,t);var s=e.actions;r!=null&&((i=s[s.length-1])===null||i===void 0?void 0:i.id)!==r&&(p.cancelAnimationFrame(r),e._scheduled=void 0)},a}(x),me=function(n){h(a,n);function a(){return n!==null&&n.apply(this,arguments)||this}return a.prototype.flush=function(e){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var t=this.actions,i;e=e||t.shift();do if(i=e.execute(e.state,e.delay))break;while((e=t[0])&&e.id===r&&t.shift());if(this._active=!1,i){for(;(e=t[0])&&e.id===r&&t.shift();)e.unsubscribe();throw i}},a}(E),de=new me(fe),Fe=de,Ie=function(n){h(a,n);function a(e,r){e===void 0&&(e=he),r===void 0&&(r=1/0);var t=n.call(this,e,function(){return t.frame})||this;return t.maxFrames=r,t.frame=0,t.index=-1,t}return a.prototype.flush=function(){for(var e=this,r=e.actions,t=e.maxFrames,i,s;(s=r[0])&&s.delay<=t&&(r.shift(),this.frame=s.delay,!(i=s.execute(s.state,s.delay))););if(i){for(;s=r.shift();)s.unsubscribe();throw i}},a.frameTimeFactor=10,a}(E),he=function(n){h(a,n);function a(e,r,t){t===void 0&&(t=e.index+=1);var i=n.call(this,e,r)||this;return i.scheduler=e,i.work=r,i.index=t,i.active=!0,i.index=e.index=t,i}return a.prototype.schedule=function(e,r){if(r===void 0&&(r=0),Number.isFinite(r)){if(!this.id)return n.prototype.schedule.call(this,e,r);this.active=!1;var t=new a(this.scheduler,this.work);return this.add(t),t.schedule(e,r)}else return C.EMPTY},a.prototype.requestAsyncId=function(e,r,t){t===void 0&&(t=0),this.delay=e.frame+t;var i=e.actions;return i.push(this),i.sort(a.sortActions),1},a.prototype.recycleAsyncId=function(e,r,t){},a.prototype._execute=function(e,r){if(this.active===!0)return n.prototype._execute.call(this,e,r)},a.sortActions=function(e,r){return e.delay===r.delay?e.index===r.index?0:e.index>r.index?1:-1:e.delay>r.delay?1:-1},a}(x);function xe(n){return!!n&&(n instanceof d||S(n.lift)&&S(n.subscribe))}function Ee(n,a){var e=typeof a=="object";return new Promise(function(r,t){var i=!1,s;n.subscribe({next:function(u){s=u,i=!0},error:t,complete:function(){i?r(s):e?r(a.defaultValue):t(new D)}})})}function I(n,a,e,r){if(e)if(j(e))r=e;else return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return I(n,a,r).apply(this,t).pipe(L(e))};return r?function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return I(n,a).apply(this,t).pipe(P(r),B(r))}:function(){for(var t=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var u=new Z,o=!0;return new d(function(m){var c=u.subscribe(m);if(o){o=!1;var l=!1,A=!1;a.apply(t,g(g([],y(i)),[function(){for(var f=[],v=0;v<arguments.length;v++)f[v]=arguments[v];if(n){var b=f.shift();if(b!=null){u.error(b);return}}u.next(1<f.length?f:f[0]),A=!0,l&&u.complete()}])),A&&u.complete(),l=!0}return c})}}function qe(n,a,e){return I(!1,n,a,e)}function Te(n,a,e){return I(!0,n,a,e)}var ve={connector:function(){return new H},resetOnDisconnect:!0};function ke(n,a){a===void 0&&(a=ve);var e=null,r=a.connector,t=a.resetOnDisconnect,i=t===void 0?!0:t,s=r(),u=new d(function(o){return s.subscribe(o)});return u.connect=function(){return(!e||e.closed)&&(e=k(function(){return n}).subscribe(s),i&&e.add(function(){return s=r()})),e},u}function Se(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];var e=Q(n),r=$(n),t=r.args,i=r.keys,s=new d(function(u){var o=t.length;if(!o){u.complete();return}for(var m=new Array(o),c=o,l=o,A=function(v){var b=!1;w(t[v]).subscribe(G(u,function(U){b||(b=!0,l--),m[v]=U},function(){return c--},void 0,function(){(!c||!b)&&(l||u.next(i?_(i,m):m),u.complete())}))},f=0;f<o;f++)A(f)});return e?s.pipe(L(e)):s}function Oe(n,a,e,r,t){var i,s,u,o;arguments.length===1?(i=n,o=i.initialState,a=i.condition,e=i.iterate,s=i.resultSelector,u=s===void 0?O:s,t=i.scheduler):(o=n,!r||j(r)?(u=O,t=r):u=r);function m(){var c;return J(this,function(l){switch(l.label){case 0:c=o,l.label=1;case 1:return!a||a(c)?[4,u(c)]:[3,4];case 2:l.sent(),l.label=3;case 3:return c=e(c),[3,1];case 4:return[2]}})}return k(t?function(){return K(m(),t)}:m)}function We(n,a,e){return k(function(){return n()?a:e})}var pe=new d(Y);function Me(){return pe}function Ce(n,a){return X(Object.entries(n),a)}function je(n,a,e){return[W(a,e)(w(n)),W(ee(a,e))(w(n))]}function Le(n,a,e){if(a==null&&(a=n,n=0),a<=0)return N;var r=a+n;return new d(e?function(t){var i=n;return e.schedule(function(){i<r?(t.next(i++),this.schedule()):t.complete()})}:function(t){for(var i=n;i<r&&!t.closed;)t.next(i++);t.complete()})}function Ne(n,a){return new d(function(e){var r=n(),t=a(r),i=t?w(t):N;return i.subscribe(e),function(){r&&r.unsubscribe()}})}export{Et as ArgumentOutOfRangeError,Z as AsyncSubject,Re as BehaviorSubject,qt as ConnectableObservable,N as EMPTY,D as EmptyError,pe as NEVER,Tt as NotFoundError,kt as Notification,St as NotificationKind,Ue as ObjectUnsubscribedError,d as Observable,De as ReplaySubject,Pe as Scheduler,Ot as SequenceError,H as Subject,Be as Subscriber,C as Subscription,Wt as TimeoutError,He as UnsubscriptionError,he as VirtualAction,Ie as VirtualTimeScheduler,Fe as animationFrame,de as animationFrameScheduler,Ae as animationFrames,ye as asap,ue as asapScheduler,Qe as async,Ge as asyncScheduler,Mt as audit,Ct as auditTime,qe as bindCallback,Te as bindNodeCallback,jt as buffer,Lt as bufferCount,Nt as bufferTime,Vt as bufferToggle,zt as bufferWhen,Rt as catchError,Ut as combineAll,Dt as combineLatest,Pt as combineLatestAll,Bt as combineLatestWith,Ke as concat,Je as concatAll,Ht as concatMap,Qt as concatMapTo,Gt as concatWith,Ye as config,Kt as connect,ke as connectable,Jt as count,Yt as debounce,pn as debounceTime,Xt as defaultIfEmpty,k as defer,Xe as delay,Ze as delayWhen,Zt as dematerialize,$t as distinct,$e as distinctUntilChanged,_e as distinctUntilKeyChanged,_t as elementAt,et as empty,ea as endWith,ta as every,aa as exhaust,na as exhaustAll,ra as exhaustMap,ia as expand,W as filter,sa as finalize,ua as find,oa as findIndex,ca as first,tt as firstValueFrom,la as flatMap,Se as forkJoin,X as from,at as fromEvent,nt as fromEventPattern,Oe as generate,fa as groupBy,O as identity,rt as ignoreElements,We as iif,ma as interval,da as isEmpty,xe as isObservable,ha as last,Ee as lastValueFrom,it as map,st as mapTo,va as materialize,pa as max,hn as merge,ut as mergeAll,ot as mergeMap,ba as mergeMapTo,ga as mergeScan,Aa as mergeWith,ya as min,wa as multicast,Me as never,Y as noop,ct as observable,B as observeOn,lt as of,Fa as onErrorResumeNext,Ia as onErrorResumeNextWith,Ce as pairs,xa as pairwise,je as partition,ft as pipe,mt as pluck,Ea as publish,qa as publishBehavior,Ta as publishLast,ka as publishReplay,we as queue,le as queueScheduler,Sa as race,Oa as raceWith,Le as range,Wa as reduce,Ma as refCount,dt as repeat,Ca as repeatWhen,ja as retry,La as retryWhen,Na as sample,Va as sampleTime,za as scan,ht as scheduled,Ra as sequenceEqual,vt as share,pt as shareReplay,Ua as single,bn as skip,Da as skipLast,Pa as skipUntil,Ba as skipWhile,bt as startWith,P as subscribeOn,Ha as switchAll,gt as switchMap,Qa as switchMapTo,Ga as switchScan,At as take,Ka as takeLast,yt as takeUntil,Ja as takeWhile,wt as tap,Ya as throttle,Xa as throttleTime,Za as throwError,$a as throwIfEmpty,_a as timeInterval,en as timeout,tn as timeoutWith,Ft as timer,an as timestamp,nn as toArray,Ne as using,rn as window,sn as windowCount,un as windowTime,on as windowToggle,cn as windowWhen,It as withLatestFrom,ln as zip,fn as zipAll,mn as zipWith};
