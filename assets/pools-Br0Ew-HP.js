var T=e=>{throw TypeError(e)};var E=(e,t,s)=>t.has(e)||T("Cannot "+s);var n=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),d=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),l=(e,t,s,r)=>(E(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),y=(e,t,s)=>(E(e,t,"access private method"),s);import{t as I,f as P,g as C,a as L}from"./timestamp-Dfir0V72.js";import{Q as B,u as k}from"./useQuery-B6SWxrK9.js";import{aa as G,ab as S,ac as X,ad as Y,f as b,u as Z,ae as x,af as ee,N as H,ag as te,a8 as se}from"./index-CB0lbOkp.js";import{u as re}from"./UseHost-BAy6Z9V0.js";function z(e,t){return e.filter(s=>!t.includes(s))}function ie(e,t,s){const r=e.slice(0);return r[t]=s,r}var g,h,q,_,p,m,O,Q,w,o,F,K,M,U,V,A,ae=(A=class extends G{constructor(t,s,r){super();d(this,o);d(this,g);d(this,h);d(this,q);d(this,_);d(this,p);d(this,m);d(this,O);d(this,Q);d(this,w,[]);l(this,g,t),l(this,_,r),l(this,q,[]),l(this,p,[]),l(this,h,[]),this.setQueries(s)}onSubscribe(){this.listeners.size===1&&n(this,p).forEach(t=>{t.subscribe(s=>{y(this,o,U).call(this,t,s)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,n(this,p).forEach(t=>{t.destroy()})}setQueries(t,s){l(this,q,t),l(this,_,s),S.batch(()=>{const r=n(this,p),a=y(this,o,M).call(this,n(this,q));l(this,w,a),a.forEach(u=>u.observer.setOptions(u.defaultedQueryOptions));const i=a.map(u=>u.observer),c=i.map(u=>u.getCurrentResult()),f=i.some((u,v)=>u!==r[v]);r.length===i.length&&!f||(l(this,p,i),l(this,h,c),this.hasListeners()&&(z(r,i).forEach(u=>{u.destroy()}),z(i,r).forEach(u=>{u.subscribe(v=>{y(this,o,U).call(this,u,v)})}),y(this,o,V).call(this)))})}getCurrentResult(){return n(this,h)}getQueries(){return n(this,p).map(t=>t.getCurrentQuery())}getObservers(){return n(this,p)}getOptimisticResult(t,s){const r=y(this,o,M).call(this,t),a=r.map(i=>i.observer.getOptimisticResult(i.defaultedQueryOptions));return[a,i=>y(this,o,K).call(this,i??a,s),()=>y(this,o,F).call(this,a,r)]}},g=new WeakMap,h=new WeakMap,q=new WeakMap,_=new WeakMap,p=new WeakMap,m=new WeakMap,O=new WeakMap,Q=new WeakMap,w=new WeakMap,o=new WeakSet,F=function(t,s){return s.map((r,a)=>{const i=t[a];return r.defaultedQueryOptions.notifyOnChangeProps?i:r.observer.trackResult(i,c=>{s.forEach(f=>{f.observer.trackProp(c)})})})},K=function(t,s){return s?((!n(this,m)||n(this,h)!==n(this,Q)||s!==n(this,O))&&(l(this,O,s),l(this,Q,n(this,h)),l(this,m,X(n(this,m),s(t)))),n(this,m)):t},M=function(t){const s=new Map(n(this,p).map(a=>[a.options.queryHash,a])),r=[];return t.forEach(a=>{const i=n(this,g).defaultQueryOptions(a),c=s.get(i.queryHash);c?r.push({defaultedQueryOptions:i,observer:c}):r.push({defaultedQueryOptions:i,observer:new B(n(this,g),i)})}),r},U=function(t,s){const r=n(this,p).indexOf(t);r!==-1&&(l(this,h,ie(n(this,h),r,s)),y(this,o,V).call(this))},V=function(){var t;if(this.hasListeners()){const s=n(this,m),r=y(this,o,F).call(this,n(this,h),n(this,w)),a=y(this,o,K).call(this,r,(t=n(this,_))==null?void 0:t.combine);s!==a&&S.batch(()=>{this.listeners.forEach(i=>{i(n(this,h))})})}},A);function ne({queries:e,...t},s){const r=Y(),a=b(()=>Z(e).map($=>{const R=x($);typeof R.enabled=="function"&&(R.enabled=$.enabled());const D=r.defaultQueryOptions(R);return D._optimisticResults=r.isRestoring.value?"isRestoring":"optimistic",D})),i=new ae(r,a.value,t),c=()=>{const[v,$]=i.getOptimisticResult(a.value,t.combine);return $(v.map((R,D)=>({...R,refetch:async(...W)=>{const[{[D]:j}]=i.getOptimisticResult(a.value,t.combine);return j.refetch(...W)}})))},f=ee(c());let u=()=>{};return H(r.isRestoring,v=>{v||(u(),u=i.subscribe(()=>{f.value=c()}),f.value=c())},{immediate:!0}),H(a,v=>{i.setQueries(v,t),f.value=c()}),te(()=>{u()}),f}const ue=e=>({tvl:e.total_tvl,tradingVolume24h:e.trading_volume_24h,tradingFee24h:e.trading_fee_24h,liquidityVolume24h:e.liquidity_volume_24h,liquidityFee24h:e.liquidity_fee_24h}),J=e=>{var t,s;return{name:e.name,address:e.address,numCoins:e.n_coins,tvlUsd:e.tvl_usd,tradingVolume24h:e.trading_volume_24h,tradingFee24h:e.trading_fee_24h,liquidityVolume24h:e.liquidity_volume_24h,liquidityFee24h:e.liquidity_fee_24h,coins:((t=e.coins)==null?void 0:t.map(r=>({poolIndex:r.pool_index,symbol:r.symbol,address:r.address})))??[],baseDailyApr:e.base_daily_apr,baseWeeklyApr:e.base_weekly_apr,virtualPrice:e.virtual_price,poolMethods:((s=e.pool_methods)==null?void 0:s.map(r=>r))??[]}},oe=e=>({timestamp:I(e.timestamp),volume:e.volume,fees:e.fees}),le=e=>({timestamp:I(e.timestamp),tvlUSD:e.tvl_usd??0,balances:[...e.balances],tokenPrices:[...e.token_prices]});async function ce(e,t=1,s=9999,r){const a=C(r),i=await P(`${a}/v1/chains/${e}?page=${t}&per_page=${s}`);return{chain:i.chain,totals:ue(i.total),pools:i.data.map(J)}}async function N(e,t,s){const r=C(s),a=await P(`${r}/v1/pools/${e}/${t}`);return J(a)}async function he(e,t,s){const r=C(s),{start:a,end:i}=L({daysRange:90});return(await P(`${r}/v1/volume/usd/${e}/${t}?interval=day&start=${a}&end=${i}`)).data.map(oe)}async function pe(e,t,s){const r=C(s),{start:a,end:i}=L({daysRange:90});return(await P(`${r}/v1/snapshots/${e}/${t}/tvl?interval=day&start=${a}&end=${i}`)).data.map(le)}function be(e){return k({queryKey:["curve-pools",e],queryFn:async({queryKey:[,t]})=>{const s=await re();return ce(t,1,9999,{host:s})},placeholderData:se,enabled:b(()=>!!e.value)})}function ge(e,t){return k({queryKey:["curve-pool",t],queryFn:async({queryKey:[,s]})=>N(e.value,s),enabled:b(()=>!!e.value)})}function qe(e,t){const s=b(()=>t.value.map(r=>({queryKey:["curve-pool",r],queryFn:()=>N(e.value,r),enabled:b(()=>!!e.value)})));return ne({queries:s})}function _e(e,t){return k({queryKey:["curve-pool-volume",t],queryFn:async({queryKey:[,s]})=>he(e.value,s),enabled:b(()=>!!e.value&&!!t.value),initialData:[],initialDataUpdatedAt:0})}function Re(e,t){return k({queryKey:["curve-pool-tvl",t],queryFn:async({queryKey:[,s]})=>pe(e.value,s),enabled:b(()=>!!e.value&&!!t.value),initialData:[],initialDataUpdatedAt:0})}export{_e as a,Re as b,ge as c,qe as d,be as u};
