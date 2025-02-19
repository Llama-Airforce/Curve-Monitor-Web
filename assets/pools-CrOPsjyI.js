var V=e=>{throw TypeError(e)};var k=(e,t,s)=>t.has(e)||V("Cannot "+s);var n=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),c=(e,t,s,r)=>(k(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),y=(e,t,s)=>(k(e,t,"access private method"),s);import{Q as j,u as M}from"./useQuery-bzXZhUsG.js";import{a9 as B,aa as S,ab as G,ac as X,c as b,u as Y,ad as Z,ae as x,N as H,af as ee,ag as te}from"./index-jdaCXud5.js";import{t as I,f as P,g as C}from"./timestamp-C4C6eGnP.js";import{u as se}from"./UseHost-DFKSSVaC.js";function z(e,t){return e.filter(s=>!t.includes(s))}function re(e,t,s){const r=e.slice(0);return r[t]=s,r}var g,h,q,_,p,m,R,w,$,l,E,F,K,T,U,A,ie=(A=class extends B{constructor(t,s,r){super();d(this,l);d(this,g);d(this,h);d(this,q);d(this,_);d(this,p);d(this,m);d(this,R);d(this,w);d(this,$,[]);c(this,g,t),c(this,_,r),c(this,q,[]),c(this,p,[]),c(this,h,[]),this.setQueries(s)}onSubscribe(){this.listeners.size===1&&n(this,p).forEach(t=>{t.subscribe(s=>{y(this,l,T).call(this,t,s)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,n(this,p).forEach(t=>{t.destroy()})}setQueries(t,s,r){c(this,q,t),c(this,_,s),S.batch(()=>{const a=n(this,p),i=y(this,l,K).call(this,n(this,q));c(this,$,i),i.forEach(o=>o.observer.setOptions(o.defaultedQueryOptions,r));const u=i.map(o=>o.observer),f=u.map(o=>o.getCurrentResult()),O=u.some((o,v)=>o!==a[v]);a.length===u.length&&!O||(c(this,p,u),c(this,h,f),this.hasListeners()&&(z(a,u).forEach(o=>{o.destroy()}),z(u,a).forEach(o=>{o.subscribe(v=>{y(this,l,T).call(this,o,v)})}),y(this,l,U).call(this)))})}getCurrentResult(){return n(this,h)}getQueries(){return n(this,p).map(t=>t.getCurrentQuery())}getObservers(){return n(this,p)}getOptimisticResult(t,s){const r=y(this,l,K).call(this,t),a=r.map(i=>i.observer.getOptimisticResult(i.defaultedQueryOptions));return[a,i=>y(this,l,F).call(this,i??a,s),()=>y(this,l,E).call(this,a,r)]}},g=new WeakMap,h=new WeakMap,q=new WeakMap,_=new WeakMap,p=new WeakMap,m=new WeakMap,R=new WeakMap,w=new WeakMap,$=new WeakMap,l=new WeakSet,E=function(t,s){return s.map((r,a)=>{const i=t[a];return r.defaultedQueryOptions.notifyOnChangeProps?i:r.observer.trackResult(i,u=>{s.forEach(f=>{f.observer.trackProp(u)})})})},F=function(t,s){return s?((!n(this,m)||n(this,h)!==n(this,w)||s!==n(this,R))&&(c(this,R,s),c(this,w,n(this,h)),c(this,m,G(n(this,m),s(t)))),n(this,m)):t},K=function(t){const s=new Map(n(this,p).map(a=>[a.options.queryHash,a])),r=[];return t.forEach(a=>{const i=n(this,g).defaultQueryOptions(a),u=s.get(i.queryHash);u?r.push({defaultedQueryOptions:i,observer:u}):r.push({defaultedQueryOptions:i,observer:new j(n(this,g),i)})}),r},T=function(t,s){const r=n(this,p).indexOf(t);r!==-1&&(c(this,h,re(n(this,h),r,s)),y(this,l,U).call(this))},U=function(){var t;if(this.hasListeners()){const s=n(this,m),r=y(this,l,E).call(this,n(this,h),n(this,$)),a=y(this,l,F).call(this,r,(t=n(this,_))==null?void 0:t.combine);s!==a&&S.batch(()=>{this.listeners.forEach(i=>{i(n(this,h))})})}},A);function ae({queries:e,...t},s){const r=X(),a=b(()=>Y(e).map(v=>{const Q=Z(v);typeof Q.enabled=="function"&&(Q.enabled=v.enabled());const D=r.defaultQueryOptions(Q);return D._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",D})),i=new ie(r,a.value,t),u=()=>{const[o,v]=i.getOptimisticResult(a.value,t.combine);return v(o.map((Q,D)=>({...Q,refetch:async(...N)=>{const[{[D]:W}]=i.getOptimisticResult(a.value,t.combine);return W.refetch(...N)}})))},f=x(u());let O=()=>{};return H(r.isRestoring,o=>{o||(O(),O=i.subscribe(()=>{f.value=u()}),f.value=u())},{immediate:!0}),H(a,o=>{i.setQueries(o,t),f.value=u()}),ee(()=>{O()}),f}const ne=e=>({tvl:e.total_tvl,tradingVolume24h:e.trading_volume_24h,tradingFee24h:e.trading_fee_24h,liquidityVolume24h:e.liquidity_volume_24h,liquidityFee24h:e.liquidity_fee_24h}),L=e=>{var t,s;return{name:e.name,address:e.address,numCoins:e.n_coins,tvlUsd:e.tvl_usd,tradingVolume24h:e.trading_volume_24h,tradingFee24h:e.trading_fee_24h,liquidityVolume24h:e.liquidity_volume_24h,liquidityFee24h:e.liquidity_fee_24h,coins:((t=e.coins)==null?void 0:t.map(r=>({poolIndex:r.pool_index,symbol:r.symbol,address:r.address})))??[],baseDailyApr:e.base_daily_apr,baseWeeklyApr:e.base_weekly_apr,virtualPrice:e.virtual_price,poolMethods:((s=e.pool_methods)==null?void 0:s.map(r=>r))??[]}},ue=e=>({timestamp:I(e.timestamp),volume:e.volume,fees:e.fees}),oe=e=>({timestamp:I(e.timestamp),tvlUSD:e.tvl_usd??0,balances:[...e.balances],tokenPrices:[...e.token_prices]});async function le(e,t=1,s=9999,r){const a=C(r),i=await P(`${a}/v1/chains/${e}?page=${t}&per_page=${s}`);return{chain:i.chain,totals:ne(i.total),pools:i.data.map(L)}}async function J(e,t,s){const r=C(s),a=await P(`${r}/v1/pools/${e}/${t}`);return L(a)}async function ce(e,t,s){const r=C(s),a=120*60*1e3,i=Math.floor(new Date().getTime()/1e3),u=Math.floor(i-a);return(await P(`${r}/v1/volume/usd/${e}/${t}?interval=day&start=${u}&end=${i}`)).data.map(ue)}async function he(e,t,s){const r=C(s),a=120*60*1e3,i=Math.floor(new Date().getTime()/1e3),u=Math.floor(i-a);return(await P(`${r}/v1/snapshots/${e}/${t}/tvl?interval=day&start=${u}&end=${i}`)).data.map(oe)}function me(e){return M({queryKey:["curve-pools",e],queryFn:async({queryKey:[,t]})=>{const s=await se();return le(t,1,9999,{host:s})},placeholderData:te,enabled:b(()=>!!e.value)})}function be(e,t){return M({queryKey:["curve-pool",t],queryFn:async({queryKey:[,s]})=>J(e.value,s),enabled:b(()=>!!e.value)})}function ge(e,t){const s=b(()=>t.value.map(r=>({queryKey:["curve-pool",r],queryFn:()=>J(e.value,r),enabled:b(()=>!!e.value)})));return ae({queries:s})}function qe(e,t){return M({queryKey:["curve-pool-volume",t],queryFn:async({queryKey:[,s]})=>ce(e.value,s),enabled:b(()=>!!e.value&&!!t.value),initialData:[],initialDataUpdatedAt:0})}function _e(e,t){return M({queryKey:["curve-pool-tvl",t],queryFn:async({queryKey:[,s]})=>he(e.value,s),enabled:b(()=>!!e.value&&!!t.value),initialData:[],initialDataUpdatedAt:0})}export{qe as a,_e as b,be as c,ge as d,me as u};
