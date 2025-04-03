import{_ as le,a as se}from"./TabItem.vue_vue_type_script_setup_true_lang-Dc4_KzbI.js";import{d as D,h as T,o as k,a3 as Z,w as b,a as C,t as H,e as M,T as P,f as V,r as K,g as E,U as x,V as W,_ as F,u as t,b as h,c as N,a6 as G,j as q,F as ne,l as ie,a4 as re,a5 as ce,N as ue,W as U,R as me,a2 as Y}from"./index-VA-IkcV_.js";import{a as de,b as pe,c as ve}from"./pools-CrcPmL_J.js";import{u as z,_ as ee}from"./UseLegend-CaF2pqsv.js";import{u as I,b as Q,c as R,a as j,_ as te}from"./UseLightweightChart-BS8D5Knx.js";import{u as _e}from"./queries-B1JCJppO.js";import{r as O,u as B}from"./Number-DdxvjkFu.js";import{_ as he}from"./AsyncValue-DZj9Bxdz.js";import{a as fe,_ as ge}from"./KPI-DENPUeKz.js";import{_ as be}from"./TokenIcon-oyUNg5F3.js";import{g as ye}from"./api-DFkSxUea.js";import{u as Ce}from"./useQuery-jfAWU074.js";import{_ as ae}from"./ButtonToggle-CsA565iT.js";import{a as J}from"./index-DrVc10qv.js";import{u as $e}from"./UseTabNavigation-BO-EhJC-.js";import"./timestamp-Dfir0V72.js";import"./UseHost-CO6DCBpt.js";import"./Object-DOSYkgA0.js";import"./Helper-BzW-fPbV.js";const ke={class:"option"},Se={class:"label"},Ve=D({__name:"SelectDuration",props:{duration:{default:()=>({value:1,unit:"month"})}},emits:["select"],setup(p,{emit:d}){const c=d,n=[{value:1,unit:"hour"},{value:1,unit:"day"},{value:1,unit:"week"},{value:1,unit:"month"},{value:1,unit:"year"}],v=y=>{c("select",y)};return(y,l)=>{const u=Z;return k(),T(u,{options:n.map(m=>m),selected:y.duration,onSelect:v},{option:b(({option:m})=>[C("div",ke,[C("div",Se,H(m.value)+" "+H(m.unit),1)])]),_:1},8,["options","selected"])}}}),X=M(Ve,[["__scopeId","data-v-0bc945d9"]]),we={style:{display:"flex"}},Te={style:{display:"flex","flex-wrap":"wrap",gap:"2rem"}},Ae={class:"time"},De={class:"time"},Le={ref:"chartRef",class:"chart"},Oe=D({__name:"ChartMEV",props:{pool:{}},setup(p){function d(e,a){var g;const s=(g=e.replace("#","").match(/.{2}/g))==null?void 0:g.map($=>parseInt($,16));return s?`#${s.map($=>Math.max(0,Math.floor($*(1-a)))).map($=>$.toString(16).padStart(2,"0")).join("")}`:e}const c=P(),n=V(()=>({volume:c.value.colors.red,bars:[c.value.colorsArray[1],d(c.value.colorsArray[1],.33),c.value.colorsArray[0],d(c.value.colorsArray[0],.33)]})),{items:v,toggles:y,disabled:l}=z(()=>[{id:"atomic",label:"Atomic",color:n.value.bars[0],togglable:!0},{id:"cexdex",label:"Cexdex",color:n.value.bars[1],togglable:!0},{id:"within",label:"Within",color:n.value.bars[2],togglable:!0},{id:"outside",label:"Outside",color:n.value.bars[3],togglable:!0},{id:"total",label:"Volume (Total)",color:n.value.volume,togglable:!0}]),u=K({value:1,unit:"month"}),m=K({value:1,unit:"day"}),{isFetching:_,data:f}=_e(E(()=>p.pool),u,m),r=x("card"),{chart:w,series:o}=I({createChartOptions:R(),series:[{type:"StackedBars",name:"data",options:V(()=>({priceFormat:{type:"custom",formatter:e=>`$${O(e,1,"dollar")}${B(e)}`},colors:v.value.map((e,a)=>({item:e,i:a})).filter(({item:e})=>!l.value.includes(e.id)).map(({i:e})=>e).map(e=>n.value.bars[e]),lastValueVisible:!1,priceLineVisible:!1}))},{type:"Line",name:"volume",options:V(()=>({priceFormat:{type:"custom",formatter:e=>`${O(e,1,"dollar")}${B(e)}`},lineWidth:2,lineType:Q.Curved,color:n.value.volume,lastValueVisible:!1,priceLineVisible:!1}))}]});W(L);function L(){if(!w.value||!o.volume||!o.data)return;const e=l.value.includes("total")?[]:f.value.map(s=>({time:s.interval_start_unixtime,value:s.full_volume})).uniqWith((s,i)=>s.time===i.time).orderBy(s=>s.time,"asc");e.length>1?(o.volume.setData(e),o.volume.applyOptions({visible:!0})):o.volume.applyOptions({visible:!1});const a=f.value.map(s=>({time:s.interval_start_unixtime,values:[...l.value.includes("atomic")?[]:[s.atomicArbVolume],...l.value.includes("cexdex")?[]:[s.cexDexArbVolume],...l.value.includes("within")?[]:[s.sandwichVolume_LossWithin],...l.value.includes("outside")?[]:[s.sandwichVolume_LossOutside]]})).uniqWith((s,i)=>s.time===i.time).orderBy(s=>s.time,"asc");a.length>0&&o.data.setData(a),w.value.timeScale().fitContent()}return(e,a)=>{const s=ee,i=F;return k(),T(i,{ref_key:"card",ref:r,title:"MEV",loading:t(_)},{actions:b(()=>[C("div",we,[h(t(j),{chart:t(w),target:t(r)},null,8,["chart","target"])])]),"actions-secondary":b(()=>[C("div",Te,[h(s,{items:t(v),disabled:t(l),onToggle:a[0]||(a[0]=g=>t(y)[g].value=!t(y)[g].value)},null,8,["items","disabled"]),C("div",Ae,[a[3]||(a[3]=C("span",null,"Duration:",-1)),h(X,{duration:t(u),onSelect:a[1]||(a[1]=g=>u.value=g)},null,8,["duration"])]),C("div",De,[a[4]||(a[4]=C("span",null,"Interval:",-1)),h(X,{duration:t(m),onSelect:a[2]||(a[2]=g=>m.value=g)},null,8,["duration"])])])]),default:b(()=>[C("div",Le,null,512)]),_:1},8,["loading"])}}}),Be=M(Oe,[["__scopeId","data-v-25927a4e"]]),Me={class:"dashboard-grid"},Pe=D({__name:"MEV",props:{pool:{}},setup(p){const d=V(()=>p.pool.address);return(c,n)=>(k(),N("div",Me,[h(Be,{style:{"grid-area":"chart"},pool:t(d)},null,8,["pool"])]))}}),We=M(Pe,[["__scopeId","data-v-a5261ecc"]]);function Fe(p,d,c,n){return Ce({queryKey:["curve-token-price",d,c,n],queryFn:({queryKey:[,v,y,l]})=>ye(p.value,v,y,l),enabled:V(()=>!!p.value&&!!d.value&&!!c.value&&!!n.value),initialData:[],initialDataUpdatedAt:0})}const Ie={style:{display:"flex"}},Re={ref:"chartRef",class:"chart"},Ue="chart_pool_balances_dollars",Ee="chart_pool_balances_type",qe=D({__name:"ChartBalances",props:{balances:{}},setup(p){const d=P(),{items:c,toggles:n,disabled:v}=z(()=>p.balances.map(({symbol:e},a)=>({id:e,label:e,color:d.value.colorsArray[a],togglable:!0}))),y=x("card"),l=G(Ue,!1),u=["unstacked","stacked","100%"],m=[{id:"unstacked",label:"Unstacked"},{id:"stacked",label:"Stacked"},{id:"100%",label:"Stacked (100%)"}],_=G(Ee,u[0]),{chart:f,series:r}=I({createChartOptions:R(),series:[...p.balances.map(({symbol:e},a)=>({type:"Line",name:e,options:V(()=>({priceFormat:{type:"custom",formatter:s=>`${O(s,1,"dollar")}${B(s)}`},lineWidth:2,lineType:Q.WithSteps,color:d.value.colorsArray[a],lastValueVisible:!1,priceLineVisible:!1}))})),{type:"StackedArea",name:"stacked",options:V(()=>({priceFormat:{type:"custom",formatter:e=>`${O(e,1,"dollar")}${B(e)}`},colors:c.value.map((e,a)=>({item:e,i:a})).filter(({item:e})=>!v.value.includes(e.id)).map(({i:e})=>e).map(e=>d.value.colorsArray[e]).map(e=>({line:e,area:e+"15"})),lineWidth:2,lastValueVisible:!1,priceLineVisible:!1}))}]});W(w);function w(){if(!(!f.value||Object.values(r).length<0)){for(const e of Object.values(r))e==null||e.setData([]);_.value==="unstacked"?o():L(_.value==="100%"),f.value.timeScale().fitContent()}}function o(){var e,a;for(const{symbol:s,balances:i}of p.balances.values()){if(!n[s].value){(e=r[s])==null||e.setData([]);continue}const g=l.value,$=i.map(A=>({time:A.timestamp.getUTCTimestamp(),value:g?A.balance*A.tokenPrice:A.balance})).uniqWith((A,S)=>A.time===S.time).orderBy(A=>A.time,"asc");$.length>0&&((a=r[s])==null||a.setData($))}}function L(e){if(!r.stacked)return;const a=l.value,s=[...p.balances.values()].filter(({symbol:i,balances:g})=>n[i].value&&g.length>0).flatMap(({symbol:i,balances:g})=>g.map($=>({symbol:i,timestamp:$.timestamp,balance:a?$.balance*$.tokenPrice:$.balance}))).groupBy(i=>i.timestamp.getTime()).entries().map(([i,g])=>{const $=e?g.reduce((S,oe)=>S+oe.balance,0):1,A=g.map(S=>e?S.balance/$*100:S.balance);return{time:Number(i)/1e3,values:A}}).uniqWith((i,g)=>i.time===g.time).orderBy(i=>i.time,"asc");s.length>0&&r.stacked.setData(s)}return(e,a)=>{const s=Z,i=ae,g=fe,$=ee,A=F;return k(),T(A,{ref_key:"card",ref:y,class:"stack-actions",title:"Balances"},{actions:b(()=>[C("div",Ie,[h(s,{options:m,selected:m.find(S=>S.id===t(_))??m[0],onSelect:a[0]||(a[0]=S=>_.value=S.id)},{option:b(({option:S})=>[q(H(S.label),1)]),_:1},8,["selected"]),h(g,null,{trigger:b(()=>[h(i,{style:{"margin-right":"1rem"},"model-value":t(l),onClick:a[1]||(a[1]=S=>l.value=!t(l))},{default:b(()=>a[3]||(a[3]=[q(" $ ")])),_:1},8,["model-value"])]),default:b(()=>[a[4]||(a[4]=q(" Show token balances in USD. "))]),_:1}),h(t(j),{chart:t(f),target:t(y)},null,8,["chart","target"])])]),"actions-secondary":b(()=>[h($,{items:t(c),disabled:t(v),onToggle:a[2]||(a[2]=S=>t(n)[S].value=!t(n)[S].value)},null,8,["items","disabled"])]),default:b(()=>[C("div",Re,null,512)]),_:1},512)}}}),Ne=M(qe,[["__scopeId","data-v-0802f990"]]),xe={class:"controls"},Qe={ref:"chartRef",class:"chart"},je=D({__name:"ChartPrice",props:{ohlc:{}},setup(p){const d=P(),c=K(!1);let n=1,v=0;const{chart:y,series:l}=I({createChartOptions:R(),series:{type:"Candlestick",name:"ohlc",options:V(()=>{const{colors:_}=d.value;return{priceFormat:{type:"custom",formatter:m},upColor:_.green,borderUpColor:_.green,wickUpColor:_.green,downColor:_.red,borderDownColor:_.red,wickDownColor:_.red}})}});W(u);function u(){if(!y.value||!l.ohlc)return;const _=c.value?-1:1,f=p.ohlc.map(r=>({time:r.time.getUTCTimestamp(),open:Math.pow(r.open,_),high:Math.pow(r.high,_),low:Math.pow(r.low,_),close:Math.pow(r.close,_)})).uniqWith((r,w)=>r.time===w.time).orderBy(r=>r.time,"asc");f.length>0&&(l.ohlc.setData(f),v=Math.min(...f.map(r=>r.low)),n=Math.max(...f.map(r=>r.high))),y.value.timeScale().fitContent()}function m(_){const f=n-v,r=f>1?f-Math.floor(f):f,w=-Math.floor(Math.log10(r)+1)+2;return`${O(_,w,"dollar")}${B(_)}`}return(_,f)=>{const r=ae,w=F;return k(),T(w,{title:"Price"},{actions:b(()=>[C("div",xe,[h(r,{"model-value":t(c),onClick:f[0]||(f[0]=o=>c.value=!t(c))},{default:b(()=>f[1]||(f[1]=[q(" Invert ")])),_:1},8,["model-value"])])]),default:b(()=>[C("div",Qe,null,512)]),_:1})}}}),He=M(je,[["__scopeId","data-v-33c41817"]]),Ke={style:{display:"flex"}},Ge={ref:"chartRef",class:"chart"},Ye=D({__name:"ChartTvl",props:{tvl:{}},setup(p){const d=P(),c=x("card"),{chart:n,series:v}=I({createChartOptions:R(),series:{type:"Area",name:"tvl",options:V(()=>({priceFormat:{type:"custom",formatter:l=>`$${O(l,1,"dollar")}${B(l)}`},lineWidth:2,lineType:Q.WithSteps,lineColor:d.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});W(y);function y(){if(!n.value||!v.tvl)return;const l=p.tvl.map(u=>({time:u.timestamp.getUTCTimestamp(),value:u.tvl})).uniqWith((u,m)=>u.time===m.time).orderBy(u=>u.time,"asc");l.length>0&&v.tvl.setData(l),n.value.timeScale().fitContent()}return(l,u)=>{const m=F;return k(),T(m,{ref_key:"card",ref:c,title:"TVL"},{actions:b(()=>[C("div",Ke,[h(t(te),{filename:"tvl",series:t(v)},null,8,["series"]),h(t(j),{chart:t(n),target:t(c)},null,8,["chart","target"])])]),default:b(()=>[C("div",Ge,null,512)]),_:1},512)}}}),Je={style:{display:"flex"}},Xe={ref:"chartRef",class:"chart"},Ze=D({__name:"ChartVolume",props:{volume:{}},setup(p){const d=P(),c=x("card"),{chart:n,series:v}=I({createChartOptions:R(),series:{type:"Area",name:"volume",options:V(()=>({priceFormat:{type:"custom",formatter:l=>`$${O(l,1,"dollar")}${B(l)}`},lineWidth:2,lineType:Q.WithSteps,lineColor:d.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});W(y);function y(){if(!n.value||!v.volume)return;const l=p.volume.map(u=>({time:u.timestamp.getUTCTimestamp(),value:u.volume})).uniqWith((u,m)=>u.time===m.time).orderBy(u=>u.time,"asc");l.length>0&&v.volume.setData(l),n.value.timeScale().fitContent()}return(l,u)=>{const m=F;return k(),T(m,{ref_key:"card",ref:c,title:"Volume"},{actions:b(()=>[C("div",Je,[h(t(te),{filename:"volume",series:t(v)},null,8,["series"]),h(t(j),{chart:t(n),target:t(c)},null,8,["chart","target"])])]),default:b(()=>[C("div",Xe,null,512)]),_:1},512)}}}),ze={class:"dashboard-grid"},et={class:"tokens"},tt=D({__name:"PoolOverview",props:{pool:{},chain:{}},setup(p){const d=V(()=>{var o;return(o=p.pool)==null?void 0:o.address}),c=V(()=>{var o;return(o=p.pool)==null?void 0:o.coins[0].address}),n=V(()=>{var o;return(o=p.pool)==null?void 0:o.coins[1].address}),{isFetching:v,data:y}=Fe(E(()=>p.chain),d,c,n),{isFetching:l,data:u}=de(E(()=>p.chain),d),{isFetching:m,data:_}=pe(E(()=>p.chain),d),f=V(()=>u.value.map(o=>({timestamp:o.timestamp,volume:o.volume}))),r=V(()=>_.value.map(o=>({timestamp:o.timestamp,tvl:o.tvlUSD}))),w=V(()=>p.pool?p.pool.coins.map(o=>({symbol:o.symbol,balances:_.value.map(L=>({timestamp:L.timestamp,balance:L.balances[o.poolIndex],tokenPrice:L.tokenPrices[o.poolIndex]}))})):[]);return(o,L)=>{const e=be,a=ge,s=he;return k(),N("div",ze,[h(a,{style:{"grid-area":"kpi1"},label:"Tokens","has-value":!!o.pool},{default:b(()=>{var i;return[C("div",et,[(k(!0),N(ne,null,ie(((i=o.pool)==null?void 0:i.coins)??[],g=>(k(),T(e,{key:g.address,clickable:"",chain:o.chain,address:g.address},null,8,["chain","address"]))),128))])]}),_:1},8,["has-value"]),h(a,{style:{"grid-area":"kpi2"},label:"TVL","has-value":!!o.pool},{default:b(()=>{var i;return[h(s,{type:"dollar",value:((i=o.pool)==null?void 0:i.tvlUsd)??0},null,8,["value"])]}),_:1},8,["has-value"]),h(a,{style:{"grid-area":"kpi3"},label:"Volume (24h)","has-value":!!o.pool},{default:b(()=>{var i;return[h(s,{type:"dollar",value:((i=o.pool)==null?void 0:i.tradingVolume24h)??0},null,8,["value"])]}),_:1},8,["has-value"]),h(a,{style:{"grid-area":"kpi4"},label:"Fees (24h)","has-value":!!o.pool},{default:b(()=>{var i;return[h(s,{type:"dollar",value:((i=o.pool)==null?void 0:i.tradingFee24h)??0},null,8,["value"])]}),_:1},8,["has-value"]),h(He,{style:{"grid-area":"price"},ohlc:t(y),loading:t(v)},null,8,["ohlc","loading"]),h(Ze,{style:{"grid-area":"volume"},volume:t(f),loading:t(l)},null,8,["volume","loading"]),h(Ye,{style:{"grid-area":"tvl"},tvl:t(r),loading:t(m)},null,8,["tvl","loading"]),h(Ne,{style:{"grid-area":"balances"},balances:t(w),loading:t(m)},null,8,["balances","loading"])])}}}),at=M(tt,[["__scopeId","data-v-9bb8a429"]]),ot={class:"dashboard"},lt=D({__name:"Pool.page",setup(p){const d=J("chain"),c=J("poolAddr"),{isFetching:n,data:v}=ve(d,c.value),{crumbs:y}=re(ce());ue(v,m=>{y.value=[{id:"pools",label:"Pools",pathName:"pools",params:()=>({chain:d.value})},{id:"pool",label:`Pool: ${(m==null?void 0:m.name)??"?"}`}]},{immediate:!0});const{tabActive:l,tabActiveIndex:u}=$e(["overview","mev"],"poolspool",()=>({chain:d.value,poolAddr:c.value}));return(m,_)=>{const f=me,r=le,w=se;return k(),N("div",ot,[h(f,{loading:t(n)},null,8,["loading"]),!t(n)&&t(v)?(k(),T(w,{key:0,active:t(u),onTab:_[0]||(_[0]=o=>u.value=o.index)},{default:b(()=>[h(r,{header:"Overview"},{default:b(()=>[(k(),T(Y,null,[t(l)==="overview"?(k(),T(at,{key:0,pool:t(v),chain:t(d)},null,8,["pool","chain"])):U("",!0)],1024))]),_:1}),t(d)==="ethereum"&&t(v)?(k(),T(r,{key:0,header:"MEV"},{default:b(()=>[(k(),T(Y,null,[t(l)==="mev"?(k(),T(We,{key:0,pool:t(v)},null,8,["pool"])):U("",!0)],1024))]),_:1})):U("",!0)]),_:1},8,["active"])):U("",!0)])}}}),St=M(lt,[["__scopeId","data-v-e7d124fd"]]);export{St as default};
