import{u as T}from"./useQuery-Dp48GBZO.js";import{t as V,g as S,f as k}from"./timestamp-C4C6eGnP.js";import{c as f,a8 as N,d as C,r as Q,e as g,o as y,g as $,w as m,u as p,f as d,b as h,j as F,_ as U,W as B,Y as M,V as se,i as w,Q as j,X as oe,K as X,N as Y,h as K}from"./index-CuzgYi1R.js";import{_ as G}from"./ButtonToggle-BXyzKNoq.js";import{u as W,a as D,c as A}from"./UseLightweightChart-CyEKzc7f.js";import{c as z,_ as E}from"./ChartStylesApex-CI9Vx1cO.js";import{u as J,_ as Z}from"./UseLegend-Bb88Bgbe.js";import{_ as I,a as ie}from"./Table-C0dQYGmy.js";import{_ as x}from"./AsyncValue-2hmqhovt.js";import{r as L,u as P}from"./Number-BMEOBY8c.js";import{_ as ne,a as le}from"./BtnChartLWFullscreen.vue_vue_type_script_setup_true_lang-CK-K_mkq.js";import{a as ee,_ as te}from"./UsePagination-BOsUuWYT.js";import{u as ae}from"./UseRelativeTime-C8QD789p.js";import{_ as re}from"./TokenIcon-E7RlDqFE.js";const ce=e=>({provider:e.provider,deposit:e.deposit?{amount:e.deposit.amount,n1:e.deposit.n1,n2:e.deposit.n2}:null,withdrawal:e.withdrawal?{amountBorrowed:e.withdrawal.amount_borrowed,amountCollateral:e.withdrawal.amount_collateral}:null,blockNumber:e.block_number,timestamp:V(e.timestamp),txHash:e.transaction_hash}),ue=e=>({idSold:e.sold_id,idBought:e.bought_id,tokenSold:{symbol:e.token_sold.symbol,address:e.token_sold.address},tokenBought:{symbol:e.token_bought.symbol,address:e.token_bought.address},amountSold:e.amount_sold,amountBought:e.amount_bought,price:e.price,buyer:e.buyer,feeX:e.fee_x,feeY:e.fee_y,blockNumber:e.block_number,timestamp:V(e.timestamp),txHash:e.transaction_hash}),de=e=>({time:V(e.time),open:e.open,close:e.close,high:e.high,low:e.low,priceBase:e.base_price,priceOracle:e.oracle_price,volume:e.volume});async function me(e,o,a,t,n){const r=S(n),i=await k(`${r}/v1/${e}/llamma_events/${o}/${a}?page=${t}&per_page=10`);return{events:i.data.map(ce),count:i.count}}async function pe(e,o,a,t,n){const r=S(n),i=await k(`${r}/v1/${e}/llamma_trades/${o}/${a}?page=${t}&per_page=10`);return{trades:i.data.map(ue),count:i.count}}async function _e(e,o,a,t){const n=S(t),r=Math.floor(new Date().getTime()/1e3),i=r-10*24*60*60;return(await k(`${n}/v1/${e}/llamma_ohlc/${o}/${a}?agg_number=1&agg_units=hour&start=${i}&end=${r}`)).data.map(de)}function St(e,o,a,t){return T({queryKey:["llamma-market-events",o,t],queryFn:({queryKey:[,n,r]})=>me(e.value,a.value,n,r),placeholderData:N,enabled:f(()=>!!o.value&&!!a.value)})}function kt(e,o,a,t){return T({queryKey:["llamma-market-trades",o,t],queryFn:({queryKey:[,n,r]})=>pe(e.value,a.value,n,r),placeholderData:N,enabled:f(()=>!!o.value&&!!a.value)})}function Dt(e,o,a){return T({queryKey:["llamma-market-ohlc",o],queryFn:({queryKey:[,t]})=>_e(e.value,a.value,t),enabled:f(()=>!!o.value&&!!a.value)})}const he=e=>({timestamp:V(e.timestamp),proportion:e.proportion/100}),ve=e=>({timestamp:V(e.dt),user:e.user,liquidator:e.liquidator,self:e.self,collateralReceived:e.collateral_received,collateralReceivedUsd:e.collateral_received_usd,stablecoinReceived:e.stablecoin_received,priceOracle:e.oracle_price,debt:e.debt,n1:e.n1,n2:e.n2,tx:e.tx,block:e.block}),fe=e=>({timestamp:V(e.timestamp),selfCount:e.self_count,hardCount:e.hard_count,selfValue:e.self_value,hardValue:e.hard_value,price:e.price}),be=e=>({softLiqUsers:e.soft_liquidation_users,liqablePositions:e.liquidatable_positions,liqableDebtUsd:e.liquidatable_pos_debt_usd,liqableCollatUsd:e.liquidatable_collateral_usd,liqableBorrowedUsd:e.liquidatable_borrowed_usd,medianHealth:e.median_health,avgHealth:e.average_health,collatRatio:e.collat_ratio}),ge=e=>({timestamp:V(e.timestamp),pctLossAverage:e.avg_pct_loss,pctLossMedian:e.median_pct_loss,absoluteLossAverage:e.avg_abs_loss,absoluteLossMedian:e.median_abs_loss,numTotalUsers:e.total_users,numUsersWithLosses:e.users_with_losses,ratio:e.ratio}),ye=e=>({decile:e.health_decile,collateralUsdValue:e.collateral,debt:e.debt,stablecoin:e.stablecoin});async function qe(e,o,a,t){const n=S(t);return(await k(`${n}/v1/${e}/liquidations/${o}/${a}/soft_liquidation_ratio`)).data.map(he)}async function Ce(e,o,a,t){const n=S(t);return(await k(`${n}/v1/${e}/liquidations/${o}/${a}/history/detailed`)).data.map(ve)}async function we(e,o,a,t){const n=S(t);return(await k(`${n}/v1/${e}/liquidations/${o}/${a}/history/aggregated`)).data.map(fe)}async function $e(e,o,a,t){const n=S(t),r=await k(`${n}/v1/${e}/liquidations/${o}/${a}/overview?fetch_on_chain=true`);return be(r)}async function Le(e,o,a,t){const n=S(t);return(await k(`${n}/v1/${e}/liquidations/${o}/${a}/losses/history`)).data.map(ge)}async function Te(e,o,a,t){const n=S(t);return(await k(`${n}/v1/${e}/liquidations/${o}/${a}/health/distribution`)).data.map(ye)}function H(){return{initialData:[],initialDataUpdatedAt:0}}function R(e,o){return{enabled:f(()=>!!e.value&&(o?!!o.value:!0))}}function Vt(e,o,a){return T({queryKey:["liqs-soft-liqs",a],queryFn:({queryKey:[,t]})=>qe(e.value,o.value,t),...R(a,o),...H()})}function Ut(e,o,a){return T({queryKey:["liqs-detailed",a],queryFn:({queryKey:[,t]})=>Ce(e.value,o.value,t),...R(a,o),...H()})}function Ot(e,o,a){return T({queryKey:["liqs-aggregate",a],queryFn:({queryKey:[,t]})=>we(e.value,o.value,t),...R(a,o),...H()})}function Bt(e,o,a){return T({queryKey:["liqs-overview",a],queryFn:({queryKey:[,t]})=>$e(e.value,o.value,t),...R(a,o)})}function Mt(e,o,a){return T({queryKey:["liqs-losses",a],queryFn:({queryKey:[,t]})=>Le(e.value,o.value,t),...R(a,o),...H()})}function Wt(e,o,a){return T({queryKey:["liqs-health-deciles",a],queryFn:({queryKey:[,t]})=>Te(e.value,o.value,t),...R(a,o),...H()})}const Se={class:"button-group"},At=C({__name:"ChartLiqs",props:{liqs:{default:()=>[]}},setup(e){const o=Q("count"),a=t=>{o.value!==t&&(o.value=t)};return(t,n)=>{const r=G,i=$;return y(),g(i,{title:"Self & Hard Liquidations"},{actions:m(()=>[d("div",Se,[h(r,{"model-value":p(o)==="count",onClick:n[0]||(n[0]=s=>a("count"))},{default:m(()=>n[2]||(n[2]=[F(" Count ")])),_:1},8,["model-value"]),h(r,{"model-value":p(o)==="value",onClick:n[1]||(n[1]=s=>a("value"))},{default:m(()=>n[3]||(n[3]=[F(" Value ")])),_:1},8,["model-value"])])]),default:m(()=>[p(o)==="count"?(y(),g(p(De),{key:0,liqs:t.liqs},null,8,["liqs"])):(y(),g(p(Ue),{key:1,liqs:t.liqs},null,8,["liqs"]))]),_:1})}}}),ke=C({__name:"ChartLiqsCount",props:{liqs:{default:()=>[]}},setup(e){const o=f(()=>z({chart:{type:"bar",stacked:!0,animations:{enabled:!1}},xaxis:{categories:a.value,labels:{formatter:r,rotate:0},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:i},min:0,max:n.value},plotOptions:{bar:{columnWidth:"75%",dataLabels:{position:"top",hideOverflowingLabels:!1}}},legend:{show:!0},dataLabels:{enabled:!1},tooltip:{followCursor:!1,enabled:!0}})),a=f(()=>e.liqs.orderBy(s=>s.timestamp.getTime(),"asc").groupBy(s=>s.timestamp.getTime()).entries().map(([s])=>new Date(parseInt(s,10)).toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"})).map((s,c)=>c%8===0?s:"")),t=f(()=>[{name:"Self liquidations",data:Object.values(e.liqs).map(s=>({x:s.timestamp.toLocaleDateString(),y:s.selfCount}))},{name:"Hard liquidations",data:Object.values(e.liqs).map(s=>({x:s.timestamp.toLocaleDateString(),y:s.hardCount}))}]),n=f(()=>Math.max(...e.liqs.groupBy(s=>s.timestamp.getTime()).entries().map(([,s])=>s.reduce((c,l)=>c+l.selfCount+l.hardCount,0)))*1.1),r=s=>s,i=s=>`${L(s,1,"dollar")}${P(s)}`;return(s,c)=>{const l=E;return y(),g(l,{options:p(o),series:p(t)},null,8,["options","series"])}}}),De=U(ke,[["__scopeId","data-v-adb74d23"]]),Ve=C({__name:"ChartLiqsValue",props:{liqs:{default:()=>[]}},setup(e){const o=f(()=>z({chart:{type:"bar",stacked:!0,animations:{enabled:!1}},xaxis:{categories:a.value,labels:{formatter:r,rotate:0},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:i},min:0,max:n.value},plotOptions:{bar:{columnWidth:"75%",dataLabels:{position:"top",hideOverflowingLabels:!1}}},legend:{show:!0},dataLabels:{enabled:!1},tooltip:{followCursor:!1,enabled:!0}})),a=f(()=>e.liqs.orderBy(s=>s.timestamp.getTime(),"asc").groupBy(s=>s.timestamp.getTime()).entries().map(([s])=>new Date(parseInt(s,10)).toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"})).map((s,c)=>c%8===0?s:"")),t=f(()=>[{name:"Self liquidations",data:Object.values(e.liqs).map(s=>({x:s.timestamp.toLocaleDateString(),y:s.selfValue}))},{name:"Hard liquidations",data:Object.values(e.liqs).map(s=>({x:s.timestamp.toLocaleDateString(),y:s.hardValue}))}]),n=f(()=>Math.max(...e.liqs.groupBy(s=>s.timestamp.getTime()).entries().map(([,s])=>s.reduce((c,l)=>c+l.selfValue+l.hardValue,0)))*1.1),r=s=>s,i=s=>`${L(s,1,"dollar")}${P(s)}`;return(s,c)=>{const l=E;return y(),g(l,{options:p(o),series:p(t)},null,8,["options","series"])}}}),Ue=U(Ve,[["__scopeId","data-v-994f5e6a"]]),Oe={ref:"chartRef",class:"chart"},Rt=C({__name:"ChartLiqsMedianLoss",props:{losses:{}},setup(e){const o=B(),{chart:a,series:t}=W({createChartOptions:A(),series:{type:"Area",name:"losses",options:f(()=>({priceFormat:{type:"custom",formatter:r=>`${L(r,0,"percentage")}%`,minMove:.1},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});M(n);function n(){if(!a.value||!t.losses)return;const r=e.losses.map(i=>({time:i.timestamp.getUTCTimestamp(),value:i.pctLossMedian})).uniqWith((i,s)=>i.time===s.time).orderBy(i=>i.time,"asc");r.length>0&&t.losses.setData(r),a.value.timeScale().fitContent()}return(r,i)=>{const s=$;return y(),g(s,{title:"Median Loss % Among Loans with Losses"},{default:m(()=>[d("div",Oe,null,512)]),_:1})}}}),Be={ref:"chartRef",class:"chart"},Ft=C({__name:"ChartLiqsLosersProportion",props:{losses:{}},setup(e){const o=B(),{chart:a,series:t}=W({createChartOptions:A(),series:{type:"Area",name:"losses",options:f(()=>({priceFormat:{type:"custom",formatter:r=>`${L(r,0,"percentage")}%`,minMove:.1},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});M(n);function n(){if(!a.value||!t.losses)return;const r=e.losses.map(i=>({time:i.timestamp.getUTCTimestamp(),value:i.numTotalUsers>0?100*i.numUsersWithLosses/i.numTotalUsers:0})).uniqWith((i,s)=>i.time===s.time).orderBy(i=>i.time,"asc");r.length>0&&t.losses.setData(r),a.value.timeScale().fitContent()}return(r,i)=>{const s=$;return y(),g(s,{title:"Proportion of Loans with Losses"},{default:m(()=>[d("div",Be,null,512)]),_:1})}}}),Pt=C({__name:"ChartLiqsHealthDeciles",props:{deciles:{}},setup(e){const o=f(()=>z({chart:{type:"bar",animations:{enabled:!1},toolbar:{show:!1}},xaxis:{categories:a.value,labels:{formatter:n,rotate:-60},tickPlacement:"on"},yaxis:{labels:{formatter:r}},plotOptions:{bar:{columnWidth:"50%"}},legend:{show:!0},dataLabels:{enabled:!1},tooltip:{followCursor:!1,enabled:!0,intersect:!0,custom:i=>{const s=i.series[0][i.dataPointIndex],c=i.series[1][i.dataPointIndex],l=i.series[2][i.dataPointIndex];return[`<div><b>Collat. (USD)</b>: ${r(c)}</div>`,`<div><b>Debt</b>: ${r(s)}</div>`,`<div><b>Stablecoin</b>: ${r(l)}</div>`].join("")}}})),a=f(()=>e.deciles.map(i=>i.decile)),t=f(()=>[{name:"Debt",data:Object.values(e.deciles).map(i=>i.debt)},{name:"Collateral",data:Object.values(e.deciles).map(i=>i.collateralUsdValue)},{name:"Stablecoin",data:Object.values(e.deciles).map(i=>i.stablecoin)}]),n=i=>i,r=i=>`$${L(i,0,"dollar")}${P(i)}`;return(i,s)=>{const c=E,l=$;return y(),g(l,{title:"Debt & Assets per Health Deciles"},{default:m(()=>[h(c,{options:p(o),series:p(t)},null,8,["options","series"])]),_:1})}}}),Me={ref:"chartRef",class:"chart"},Ht=C({__name:"ChartLiqsSoftLiqRatio",props:{ratios:{},pricesOracle:{}},setup(e){const o=B(),{items:a}=J(()=>[{id:"percentage",label:"% of loans in soft liquidation",color:o.value.colorsArray[0]},{id:"collateral-price",label:"Collateral price ($)",color:o.value.colorsArray[1]}]),{chart:t,series:n}=W({createChartOptions:A({leftPriceScale:{visible:!0}}),series:[{type:"Area",name:"price",options:f(()=>({priceFormat:{type:"custom",formatter:i=>`$${L(i,2,"dollar")}${P(i)}`},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.yellow,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))},{type:"Area",name:"ratio",options:f(()=>({priceFormat:{type:"custom",formatter:i=>`${L(i,0,"percentage")}%`},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.blue,priceScaleId:"left",topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}]});M(r);function r(){if(!t.value||!n.price||!n.ratio)return;const i=e.ratios.map(l=>({time:l.timestamp.getUTCTimestamp(),value:l.proportion})).uniqWith((l,u)=>l.time===u.time).orderBy(l=>l.time,"asc"),s=i.length>0?i[0].time:0,c=e.pricesOracle.filter(l=>l.timestamp.getUTCTimestamp()>=s).map(l=>({time:l.timestamp.getUTCTimestamp(),value:l.priceOracle})).uniqWith((l,u)=>l.time===u.time).orderBy(l=>l.time,"asc");c.length>0&&n.price.setData(c),i.length>0&&n.ratio.setData(i),t.value.timeScale().fitContent()}return(i,s)=>{const c=Z,l=$;return y(),g(l,{title:"Soft Liquidations Ratio"},{"actions-secondary":m(()=>[h(c,{items:p(a)},null,8,["items"])]),default:m(()=>[d("div",Me,null,512)]),_:1})}}}),We={ref:"chartRef",class:"chart"},Kt=C({__name:"ChartLiquidatorRevenue",props:{discounts:{},liqs:{}},setup(e){const o=B(),{items:a}=J(()=>[{id:"revenue",label:"Liquidator Revenue",color:o.value.colorsArray[0]},{id:"discount",label:"Discount",color:o.value.colorsArray[1]}]),{chart:t,series:n}=W({createChartOptions:A({leftPriceScale:{visible:!0}}),series:[{type:"Area",name:"revenue",options:f(()=>({priceFormat:{type:"price",precision:0,minMove:1},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))},{type:"Area",name:"discount",options:f(()=>({priceFormat:{type:"percent",precision:6,minMove:1e-6},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.yellow,priceScaleId:"left",topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}]});M(r);function r(){if(!t.value||!n.discount||!n.revenue)return;const i=e.liqs.map(l=>({time:l.timestamp.getUTCTimestamp(),value:l.debt})).uniqWith((l,u)=>l.time===u.time).orderBy(l=>l.time,"asc").reduce((l,u)=>{const _=l.length>0?l[l.length-1].value:0;return l.push({time:u.time,value:u.value+_}),l},[]),s=i.length>0?i[0].time:0,c=e.discounts.filter(l=>l.timestamp.getUTCTimestamp()>=s).map(l=>({time:l.timestamp.getUTCTimestamp(),value:l.discount*100})).uniqWith((l,u)=>l.time===u.time).orderBy(l=>l.time,"asc");i.length>0&&n.revenue.setData(i),c.length>0&&n.discount.setData(c),t.value.timeScale().fitContent()}return(i,s)=>{const c=Z,l=$;return y(),g(l,{title:"Liquidator Revenue"},{"actions-secondary":m(()=>[h(c,{items:p(a)},null,8,["items"])]),default:m(()=>[d("div",We,null,512)]),_:1})}}}),Ae={class:"end"},Re={class:"end"},Fe={class:"end"},Pe={class:"end"},He={class:"end"},Ke={class:"collateral end"},Ie={class:"end"},Qe=C({__name:"TableLiqOverview",props:{overview:{}},setup(e){const o=f(()=>{if(!e.overview)return 0;const a=e.overview.liqableDebtUsd,t=e.overview.liqableCollatUsd+e.overview.liqableBorrowedUsd,n=a-t;return n<=0?0:n});return(a,t)=>{const n=ie,r=x,i=I,s=$;return y(),g(s,{title:"General Health Metrics"},{default:m(()=>[h(i,{class:"liq-overview-table"},{default:m(()=>[h(n,null,{default:m(()=>{var c;return[t[0]||(t[0]=d("div",null,"Users in soft liquidation",-1)),d("div",Ae,w(((c=a.overview)==null?void 0:c.softLiqUsers)??0),1)]}),_:1}),h(n,null,{default:m(()=>{var c;return[t[1]||(t[1]=d("div",null,"Median health",-1)),d("div",Re,[h(r,{"show-zero":"",type:"percentage",value:((c=a.overview)==null?void 0:c.medianHealth)??0},null,8,["value"])])]}),_:1}),h(n,null,{default:m(()=>{var c;return[t[2]||(t[2]=d("div",null,"Collaterization ratio",-1)),d("div",Fe,[h(r,{"show-zero":"",type:"percentage",value:((c=a.overview)==null?void 0:c.collatRatio)??0},null,8,["value"])])]}),_:1}),h(n,null,{default:m(()=>{var c;return[t[3]||(t[3]=d("div",null,"Liquidatable positions",-1)),d("div",Pe,w(((c=a.overview)==null?void 0:c.liqablePositions)??0),1)]}),_:1}),h(n,null,{default:m(()=>{var c;return[t[4]||(t[4]=d("div",null,"Liquidatable positions' debt",-1)),d("div",He,[h(r,{"show-zero":"",type:"dollar",value:((c=a.overview)==null?void 0:c.liqableDebtUsd)??0},null,8,["value"])])]}),_:1}),h(n,null,{default:m(()=>{var c,l;return[t[6]||(t[6]=d("div",null,"Liquidatable collateral (token / crvUSD)",-1)),d("div",Ke,[h(r,{"show-zero":"",type:"dollar",value:((c=a.overview)==null?void 0:c.liqableCollatUsd)??0},null,8,["value"]),t[5]||(t[5]=F(" / ")),h(r,{"show-zero":"",type:"dollar",value:((l=a.overview)==null?void 0:l.liqableBorrowedUsd)??0},null,8,["value"])])]}),_:1}),p(o)>0?(y(),g(n,{key:0},{default:m(()=>[t[7]||(t[7]=d("div",null,"Bad debt",-1)),d("div",Ie,[h(r,{"show-zero":"",class:"red",type:"dollar",value:p(o)},null,8,["value"])])]),_:1})):se("",!0)]),_:1})]),_:1})}}}),It=U(Qe,[["__scopeId","data-v-10f3b1b2"]]),je={class:"address"},ze=["href"],Ee={class:"end"},Ne={class:"end"},Xe=C({__name:"TableTopLiquidators",props:{liqs:{}},setup(e){const o=f(()=>e.liqs.groupBy(a=>a.liquidator).entries().map(([a,t])=>({liquidator:a,count:t.length,value:t.reduce((n,r)=>n+r.collateralReceivedUsd,0)})).orderBy(a=>a.value,"desc").take(5));return(a,t)=>{const n=x,r=I,i=$;return y(),g(i,{title:"Top Liquidators"},{default:m(()=>[h(r,{class:"liquidators-table",rows:p(o),columns:["Address",{label:"Count",align:"end"},{label:"Value",align:"end"}]},{row:m(({item:s})=>[d("div",je,[d("a",{target:"_blank",href:`https://etherscan.io/address/${s.liquidator}`},w(("addressShort"in a?a.addressShort:p(j))(s.liquidator,8)),9,ze)]),d("div",Ee,[h(n,{"show-zero":"",value:s.count,precision:0},null,8,["value"])]),d("div",Ne,[h(n,{type:"dollar",value:s.value,precision:1},null,8,["value"])])]),_:1},8,["rows"])]),_:1})}}}),Qt=U(Xe,[["__scopeId","data-v-0b1ff19b"]]),Ye={style:{display:"flex"}},Ge={ref:"chartRef",class:"chart"},jt=C({__name:"ChartCollateralRatio",props:{ratios:{}},setup(e){const o=B(),a=oe("card"),{chart:t,series:n}=W({createChartOptions:A(),series:{type:"Area",name:"ratios",options:f(()=>({priceFormat:{type:"custom",formatter:i=>`${L(i,0,"percentage")}%`,minMove:.1},lineWidth:2,lineType:D.WithSteps,lineColor:o.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});M(r);function r(){if(!t.value||!n.ratios)return;const i=e.ratios.map(s=>({time:s.timestamp.getUTCTimestamp(),value:s.ratio*100})).uniqWith((s,c)=>s.time===c.time).orderBy(s=>s.time,"asc");i.length>0&&n.ratios.setData(i),t.value.timeScale().fitContent()}return(i,s)=>{const c=$;return y(),g(c,{ref_key:"card",ref:a,title:"Collateral Ratio"},{actions:m(()=>[d("div",Ye,[h(p(ne),{filename:"collateral_ratio",series:p(n)},null,8,["series"]),h(p(le),{chart:p(t),target:p(a)},null,8,["chart","target"])])]),default:m(()=>[d("div",Ge,null,512)]),_:1},512)}}}),Je={class:"controls"},Ze={ref:"chartRef",class:"chart"},xe=C({__name:"ChartOHLC",props:{ohlc:{}},setup(e){const o=B(),a=Q(!1),t=Q(!1);let n=1,r=0;const{chart:i,series:s}=W({createChartOptions:A({localization:{priceFormatter:u=>l(u)}}),series:[{type:"Candlestick",name:"ohlc",options:f(()=>{const{colors:u}=o.value;return{priceFormat:{type:"price",precision:6,minMove:1e-6},upColor:u.green,borderUpColor:u.green,wickUpColor:u.green,downColor:u.red,borderDownColor:u.red,wickDownColor:u.red}})},{type:"Line",name:"oracle",options:f(()=>({priceFormat:{type:"price",precision:6,minMove:1e-6},lineWidth:2,lineType:D.WithSteps,color:o.value.colors.blue,lastValueVisible:!1,priceLineVisible:!1}))}]});M(c);function c(){if(!i.value||!s.ohlc||!s.oracle)return;const u=a.value?-1:1,_=e.ohlc.map(v=>({time:v.time.getUTCTimestamp(),open:Math.pow(v.open,u),high:Math.pow(v.high,u),low:Math.pow(v.low,u),close:Math.pow(v.close,u)})).uniqWith((v,b)=>v.time===b.time).orderBy(v=>v.time,"asc");_.length>0&&(s.ohlc.setData(_),r=Math.min(..._.map(v=>v.low)),n=Math.max(..._.map(v=>v.high)));const q=e.ohlc.map(v=>({time:v.time.getUTCTimestamp(),value:Math.pow(v.priceOracle,u)})).uniqWith((v,b)=>v.time===b.time).orderBy(v=>v.time,"asc");q.length>0&&s.oracle.setData(q),s.oracle.applyOptions({visible:t.value}),i.value.timeScale().fitContent()}function l(u){const _=n-r,q=_>1?_-Math.floor(_):_,v=-Math.floor(Math.log10(q)+1)+2;return`${L(u,v,"dollar")}${P(u)}`}return(u,_)=>{const q=G,v=$;return y(),g(v,{title:"Price"},{actions:m(()=>[d("div",Je,[h(q,{"model-value":p(t),onClick:_[0]||(_[0]=b=>t.value=!p(t))},{default:m(()=>_[2]||(_[2]=[F(" Oracle Price ")])),_:1},8,["model-value"]),h(q,{"model-value":p(a),onClick:_[1]||(_[1]=b=>a.value=!p(a))},{default:m(()=>_[3]||(_[3]=[F(" Invert ")])),_:1},8,["model-value"])])]),default:m(()=>[d("div",Ze,null,512)]),_:1})}}}),zt=U(xe,[["__scopeId","data-v-8c9d17b0"]]),et={class:"end"},tt=["href"],at={class:"end"},st=["href"],ot=C({__name:"TableEvents",props:{events:{},count:{}},emits:["page"],setup(e,{emit:o}){const a=o,{page:t,onPage:n}=ee(),r=X(t,200);Y(r,u=>{a("page",u)});const{relativeTime:i}=ae(),s=u=>u<1?u.toFixed(4):u>1e3?u.toFixed(0):u.toFixed(2),c=u=>{var _,q;return s(((_=u.deposit)==null?void 0:_.amount)??((q=u.withdrawal)==null?void 0:q.amountCollateral)??0)},l=u=>u.deposit?"Deposit":u.withdrawal?"Withdrawal":"Unknown";return(u,_)=>{const q=te,v=I,b=$;return y(),g(b,{title:"Events"},{actions:m(()=>[h(q,{"items-count":u.count,"items-per-page":10,page:p(t),onPage:p(n)},null,8,["items-count","page","onPage"])]),default:m(()=>[h(v,{class:"events-table",rows:u.events,columns:["Type",{label:"Amount",align:"end"},"","Provider",{label:"Time",align:"end"}]},{row:m(({item:O})=>[d("div",null,w(l(O)),1),d("div",et,w(c(O)),1),_[2]||(_[2]=d("div",null,null,-1)),d("div",null,[d("a",{target:"_blank",href:`https://etherscan.io/address/${O.provider}`,onClick:_[0]||(_[0]=K(()=>{},["stop"]))},w(("addressShort"in u?u.addressShort:p(j))(O.provider)),9,tt)]),d("div",at,[d("a",{target:"_blank",href:`https://etherscan.io/tx/${O.txHash}`,onClick:_[1]||(_[1]=K(()=>{},["stop"]))},w(p(i)(O.timestamp.getUTCTimestamp())),9,st)])]),_:1},8,["rows"])]),_:1})}}}),Et=U(ot,[["__scopeId","data-v-86dac774"]]),it={class:"end"},nt=["href"],lt={class:"end"},rt=["href"],ct=["href"],ut={class:"end"},dt=["href"],mt=C({__name:"TableTrades",props:{trades:{},count:{},chain:{}},emits:["page"],setup(e,{emit:o}){const a=o,{page:t,onPage:n}=ee(),r=X(t,200);Y(r,c=>{a("page",c)});const{relativeTime:i}=ae(),s=c=>c<1?c.toFixed(4):c>1e3?c.toFixed(0):c.toFixed(2);return(c,l)=>{const u=te,_=re,q=I,v=$;return y(),g(v,{title:"Trades"},{actions:m(()=>[h(u,{"items-count":c.count,"items-per-page":10,page:p(t),onPage:p(n)},null,8,["items-count","page","onPage"])]),default:m(()=>[h(q,{class:"trades-table",rows:c.trades,columns:[{label:"Bought",align:"end"},"","",{label:"Sold",align:"end"},"","","Market Maker",{label:"Time",align:"end"}]},{row:m(({item:b})=>[d("div",it,w(s(b.amountBought)),1),h(_,{chain:c.chain,address:b.tokenBought.address},null,8,["chain","address"]),d("div",null,[d("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${b.tokenBought.address}`},w(b.tokenBought.symbol),9,nt)]),d("div",lt,w(s(b.amountSold)),1),h(_,{chain:c.chain,address:b.tokenSold.address},null,8,["chain","address"]),d("div",null,[d("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${b.tokenSold.address}`},w(b.tokenSold.symbol),9,rt)]),d("div",null,[d("a",{target:"_blank",href:`https://etherscan.io/address/${b.buyer}`,onClick:l[0]||(l[0]=K(()=>{},["stop"]))},w(("addressShort"in c?c.addressShort:p(j))(b.buyer)),9,ct)]),d("div",ut,[d("a",{target:"_blank",href:`https://etherscan.io/tx/${b.txHash}`,onClick:l[1]||(l[1]=K(()=>{},["stop"]))},w(p(i)(b.timestamp.getUTCTimestamp())),9,dt)])]),_:1},8,["rows"])]),_:1})}}}),Nt=U(mt,[["__scopeId","data-v-fcd717c5"]]);export{zt as C,It as T,Ht as _,Bt as a,Vt as b,Ot as c,Ut as d,Wt as e,Mt as f,Rt as g,Ft as h,Pt as i,jt as j,At as k,Qt as l,Kt as m,kt as n,St as o,Nt as p,Et as q,Dt as u};
