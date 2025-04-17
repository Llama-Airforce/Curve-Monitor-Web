import{_ as ue,a as de}from"./TabItem.vue_vue_type_script_setup_true_lang-BTIO3Ac2.js";import{q as me,d as U,r as K,f as $,h as C,o as f,w as c,b as o,u as n,a as r,t as F,O as pe,_ as A,e as D,c as q,T as J,U as X,V as te,g as _e,j as z,S as ve,X as se,W as I,i as fe,Q as he,a2 as O}from"./index-CB0lbOkp.js";import{_ as R}from"./Table-NQndpLny.js";import{_ as x}from"./AsyncValue-C0jBgRNU.js";import{_ as ge}from"./InputText-CXpNFmeS.js";import{_ as ye}from"./SelectChain-iP9HnLzn.js";import{c as be}from"./chains-B_eQCstz.js";import{t as Q,g as L,f as V}from"./timestamp-Dfir0V72.js";import{u as P}from"./useQuery-B6SWxrK9.js";import{u as E}from"./UseHost-BAy6Z9V0.js";import{_ as ne}from"./KPI-B53x3jTq.js";import{u as oe,c as ae,_ as re,a as le,M as we,d as Ce}from"./UseLightweightChart-D45Z5owe.js";import{r as Y,u as Z}from"./Number-BucUTk9j.js";import{u as N}from"./UseSort-Dqih-eKL.js";import{_ as G}from"./TokenIcon-Cqe8ofer.js";import{c as ke,_ as $e}from"./ChartStylesApex-4IMOjS1O.js";import{u as Se,_ as Te}from"./UseLegend-BjWtFUgd.js";import{_ as Fe}from"./IconExpander-D1g4JwOL.js";import{u as Ue,_ as Be}from"./UsePagination-BGn7VvEt.js";import{L as De}from"./link-B2qRQvGX.js";import{u as Ae}from"./UseExpansion-CkxxO6oy.js";import{u as Ie}from"./UseRelativeTime-Dw2NdyiO.js";import{u as Le}from"./UseTabNavigation-CDHT1-ln.js";import"./ChainIcon-ty_DaCeQ.js";import"./Object-DOSYkgA0.js";import"./index-Cu8Dsk6r.js";/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=me("trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);async function ie(e,t=0,s=1e3){const i=await e(t,s),m=await(i.length>=s?ie(e,t+1,s):Promise.resolve([]));return i.concat(m)}const Pe=e=>({timestamp:Q(e.timestamp),controller:e.controller,collateral:e.collateral,feesUsd:e.fees_usd}),qe=e=>({timestamp:Q(e.timestamp),chain:e.chain,feesUsd:e.fees_usd}),Re=e=>({pool:e.pool,name:e.name,adminFees:e.admin_fees,usdValue:e.usd_value}),xe=e=>({timestamp:Q(e.timestamp),feesUsd:e.fees_usd}),We=e=>({timestamp:Q(e.dt),coin:{lpToken:e.coin.lp_token,symbol:e.coin.symbol,address:e.coin.address,precision:e.coin.precision},amount:BigInt(e.amount),amountFee:BigInt(e.fee_amount),amountReceived:e.amount_received,routerReceived:e.router_received,epoch:e.epoch,txHash:e.tx_hash,blockNumber:e.block_number}),He=e=>({coin:{lpToken:e.coin.lp_token,symbol:e.coin.symbol,address:e.coin.address,decimals:e.coin.precision},amount:parseFloat(e.amount),amountUsd:parseFloat(e.usd_amount)}),Me=e=>({coin:{lpToken:e.coin.lp_token,symbol:e.coin.symbol,address:e.coin.address,decimals:e.coin.precision},amount:parseFloat(e.amount),amountUsd:parseFloat(e.usd_amount)});async function Oe(e){const t=L(e);return(await V(`${t}/v1/dao/fees/crvusd/weekly`)).fees.map(Pe)}async function Ke(e){const t=L(e);return(await V(`${t}/v1/dao/fees/pools/weekly`)).fees.map(qe)}async function Qe(e,t){const s=L(t);return(await V(`${s}/v1/dao/fees/${e}/pending`)).data.map(Re)}async function Ee(e){const t=L(e);return await ie(i=>V(`${t}/v1/dao/fees/distributions?page=${i}&per_page=100`).then(m=>m.distributions.map(xe)),1,100)}async function Ne(e,t){const s=L(t);return(await V(`${s}/v1/dao/fees/settlements`)).data.map(We)}async function je(e){const t=L(e);return(await V(`${t}/v1/dao/fees/collected`)).data.map(He)}async function ze(e){const t=L(e);return(await V(`${t}/v1/dao/fees/staged`)).data.map(Me)}function W(){return{initialData:[],initialDataUpdatedAt:0}}function Je(e){return P({queryKey:["curve-cushions",e],queryFn:({queryKey:[,t]})=>Qe(t).then(s=>s.sort((i,m)=>m.usdValue-i.usdValue)),...W()})}function Xe(){return P({queryKey:["curve-revenue-distributions"],queryFn:()=>Ee(),initialData:[],initialDataUpdatedAt:0})}function Ye(){return P({queryKey:["curve-revenue-cow-settlements"],queryFn:()=>Ne(),...W()})}function Ze(){return P({queryKey:["curve-revenue-crvusd-weekly"],queryFn:async()=>{const e=await E();return Oe({host:e})},...W()})}function Ge(){return P({queryKey:["curve-revenue-pools-weekly"],queryFn:async()=>{const e=await E();return Ke({host:e})},...W()})}function et(){return P({queryKey:["curve-revenue-fees-collected"],queryFn:async()=>{const e=await E();return je({host:e})},...W()})}function tt(){return P({queryKey:["curve-revenue-fees-staged"],queryFn:async()=>{const e=await E();return ze({host:e})},...W()})}const st=["href"],nt={class:"end"},ot={class:"end"},at=U({__name:"TableCushions",setup(e){const t=K(""),s=$(()=>_.value||u.value),i=K("ethereum"),{data:m,isFetching:_}=be(),a=$(()=>h.value.filter(g=>g.usdValue>100).filter(g=>{const l=t.value.toLocaleLowerCase().split(" "),v=B=>l.some(p=>B.toLocaleLowerCase().includes(p));return v(g.pool)||v(g.name)})),{data:h,isFetching:u}=Je(i),d=g=>`https://etherscan.io/address/${g}`;return(g,l)=>{const v=ye,B=ge,p=x,y=R,b=A;return f(),C(b,{class:"cushions-card",title:"Cushions",loading:n(s)},{actions:c(()=>[o(v,{class:"chain-select",chain:n(i),chains:n(m),onSelectChain:l[0]||(l[0]=k=>i.value=k==="all"?"ethereum":k)},null,8,["chain","chains"]),o(B,{modelValue:n(t),"onUpdate:modelValue":l[1]||(l[1]=k=>pe(t)?t.value=k:null),search:"",placeholder:"Search for..."},null,8,["modelValue"])]),default:c(()=>[o(y,{class:"cushions-table",rows:n(a),columns:["Name","Address",{label:"Fees ($)",align:"end"}]},{row:c(({item:k})=>[r("div",null,F(k.name),1),r("div",null,[r("a",{class:"font-mono",target:"_blank",href:d(k.pool)},F(k.pool),9,st)]),r("div",nt,[o(p,{type:"dollar",value:k.usdValue,precision:2},null,8,["value"])])]),"row-aggregation":c(()=>[l[2]||(l[2]=r("div",null,null,-1)),l[3]||(l[3]=r("div",null,null,-1)),r("div",ot,[o(p,{type:"dollar",value:n(a).reduce((k,S)=>k+S.usdValue,0),precision:2},null,8,["value"])])]),_:1},8,["rows"])]),_:1},8,["loading"])}}}),rt=D(at,[["__scopeId","data-v-e4c52ecf"]]),lt={class:"cushions"},it=U({__name:"Cushions",setup(e){return(t,s)=>(f(),q("div",lt,[o(rt)]))}}),ct=D(it,[["__scopeId","data-v-73379d5e"]]),ut={style:{display:"flex"}},dt={ref:"chartRef",class:"chart"},mt=U({__name:"ChartDistributions",props:{distributions:{}},setup(e){const t=J(),s=X("card"),{chart:i,series:m}=oe({createChartOptions:ae(),series:{type:"Histogram",name:"distributions",options:$(()=>({priceFormat:{type:"custom",formatter:a=>`$${Y(a,0,"dollar")}${Z(a)}`,minMove:.01},color:t.value.colors.blue,lastValueVisible:!1,priceLineVisible:!1}))}});te(_);function _(){if(!i.value||!m.distributions)return;const a=e.distributions.map(h=>({time:h.timestamp.getUTCTimestamp(),value:h.feesUsd})).uniqWith((h,u)=>h.time===u.time).orderBy(h=>h.time,"asc").takeRight(52);a.length>0&&(m.distributions.setData(a),i.value.timeScale().fitContent())}return(a,h)=>{const u=re,d=le,g=A;return f(),C(g,{ref_key:"card",ref:s,title:"Distributions (1y)"},{actions:c(()=>[r("div",ut,[o(u,{filename:"distributions",series:n(m)},null,8,["series"]),o(d,{chart:n(i),target:n(s)},null,8,["chart","target"])])]),default:c(()=>[r("div",dt,null,512)]),_:1},512)}}}),pt={style:{display:"flex"}},_t={ref:"chartRef",class:"chart"},vt=U({__name:"ChartDistributionsDelta",props:{distributions:{}},setup(e){const t=J(),s=X("card"),{chart:i,series:m}=oe({createChartOptions:ae(),series:{type:"Histogram",name:"deltas",options:$(()=>({priceFormat:{type:"custom",formatter:a=>`$${Y(a,0,"dollar")}${Z(a)}`,minMove:.01},color:t.value.colors.blue,lastValueVisible:!1,priceLineVisible:!1}))}});te(_);function _(){if(!i.value||!m.deltas)return;const{colors:a}=t.value,h=e.distributions.map(u=>({time:u.timestamp.getUTCTimestamp(),value:u.feesUsd})).uniqWith((u,d)=>u.time===d.time).orderBy(u=>u.time,"asc").takeRight(53).reduce((u,d,g,l)=>{if(g===0)return u;const v=d.value-l[g-1].value,B=v<0?a.red:a.green;return u.push({time:d.time,value:v,color:B}),u},[]);h.length>0&&(m.deltas.setData(h),i.value.timeScale().fitContent())}return(a,h)=>{const u=re,d=le,g=A;return f(),C(g,{ref_key:"card",ref:s,title:"Distributions Change (1y)"},{actions:c(()=>[r("div",pt,[o(u,{filename:"distributions_delta",series:n(m)},null,8,["series"]),o(d,{chart:n(i),target:n(s)},null,8,["chart","target"])])]),default:c(()=>[r("div",_t,null,512)]),_:1},512)}}}),ft={class:"end"},ht=U({__name:"TableDistributions",props:{distributions:{}},setup(e){const t=[{id:"timestamp",label:"Date",sort:!0},{id:"fees",label:"Fees",sort:!0,align:"end"}],{sorting:s,onSort:i}=N("timestamp"),m=$(()=>e.distributions.orderBy(a=>{switch(s.value.column){case"timestamp":return a.timestamp.getTime();case"fees":return a.feesUsd}},s.value.order));function _(a){return a.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}return(a,h)=>{const u=x,d=R,g=A;return f(),C(g,{title:"Distributions"},{default:c(()=>[o(d,{class:"distributions-table",rows:n(m),columns:t,sorting:n(s),onSortColumn:n(i)},{row:c(({item:{timestamp:l,feesUsd:v}})=>[r("div",null,F(_(l)),1),r("div",ft,[o(u,{type:"dollar",value:v,precision:2},null,8,["value"])])]),_:1},8,["rows","sorting","onSortColumn"])]),_:1})}}}),gt=D(ht,[["__scopeId","data-v-71c558b9"]]),yt={class:"dashboard-grid"},bt=U({__name:"Distributions",setup(e){const{isFetching:t,data:s}=Xe(),i=$(()=>s.value.sumBy(a=>a.feesUsd)),m=$(()=>s.value.orderBy(a=>a.timestamp.getTime(),"desc").take(52).meanBy(a=>a.feesUsd)),_=$(()=>{const a=s.value.orderBy(d=>d.timestamp.getTime(),"desc").take(52).map(d=>d.feesUsd),h=a.meanBy(d=>d),u=a.map(d=>Math.pow(d-h,2));return Math.sqrt(u.sumBy(d=>d)/(a.length-1))});return(a,h)=>{const u=x,d=ne;return f(),q("div",yt,[o(d,{style:{"grid-area":"kpi1"},label:"Total","has-value":n(s).length>0},{default:c(()=>[o(u,{type:"dollar",value:n(i)},null,8,["value"])]),_:1},8,["has-value"]),o(d,{style:{"grid-area":"kpi2"},label:"Average (1y)","has-value":n(s).length>0},{default:c(()=>[o(u,{type:"dollar",value:n(m)},null,8,["value"])]),_:1},8,["has-value"]),o(d,{style:{"grid-area":"kpi3"},label:"Standard Deviation (1y)","has-value":n(s).length>0},{default:c(()=>[o(u,{type:"dollar",value:n(_)},null,8,["value"])]),_:1},8,["has-value"]),o(mt,{style:{"grid-area":"chart"},distributions:n(s),loading:n(t)},null,8,["distributions","loading"]),o(vt,{style:{"grid-area":"delta"},distributions:n(s),loading:n(t)},null,8,["distributions","loading"]),o(gt,{style:{"grid-area":"table"},distributions:n(s),loading:n(t)},null,8,["distributions","loading"])])}}}),wt=D(bt,[["__scopeId","data-v-e21ae2fe"]]),Ct=["href"],kt={class:"end"},$t={class:"end"},St={class:"end"},Tt=U({__name:"TableFeesCollected",props:{fees:{}},setup(e){const t=[{id:"token",label:"",sort:!1},{id:"symbol",label:"Token",sort:!0},{id:"amount",label:"Amount",align:"end",sort:!0},{id:"amountUsd",label:"Amount ($)",align:"end",sort:!0}],{sorting:s,onSort:i}=N("amountUsd"),m=$(()=>e.fees.orderBy(_=>{switch(s.value.column){case"symbol":return _.coin.symbol;case"amount":return _.amount;case"amountUsd":default:return _.amountUsd}},s.value.order));return(_,a)=>{const h=G,u=x,d=R,g=A;return f(),C(g,{title:"Fees Collected"},{default:c(()=>[o(d,{rows:n(m),columns:t,sorting:n(s),onSortColumn:n(i)},{row:c(({item:l})=>[o(h,{address:l.coin.address},null,8,["address"]),r("div",null,[r("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${l.coin.address}`},F(l.coin.symbol),9,Ct)]),r("div",kt,[o(u,{"show-zero":"",type:"dollar",value:l.amount,precision:2,"show-symbol":!1},null,8,["value"])]),r("div",$t,[o(u,{"show-zero":"",type:"dollar",value:l.amountUsd,precision:2},null,8,["value"])])]),"row-aggregation":c(()=>[a[0]||(a[0]=r("div",null,null,-1)),a[1]||(a[1]=r("div",null,null,-1)),a[2]||(a[2]=r("div",null,null,-1)),r("div",St,[o(u,{type:"dollar",value:n(m).reduce((l,v)=>l+v.amountUsd,0),precision:2},null,8,["value"])])]),_:1},8,["rows","sorting","onSortColumn"])]),_:1})}}}),Ft=D(Tt,[["__scopeId","data-v-50c103c7"]]),Ut=["href"],Bt={class:"end"},Dt={class:"end"},At={class:"end"},It=U({__name:"TableFeesStaged",props:{fees:{}},setup(e){const t=[{id:"token",label:"",sort:!1},{id:"symbol",label:"Token",sort:!0},{id:"amount",label:"Amount",align:"end",sort:!0},{id:"amountUsd",label:"Amount ($)",align:"end",sort:!0}],{sorting:s,onSort:i}=N("amountUsd"),m=$(()=>e.fees.orderBy(_=>{switch(s.value.column){case"symbol":return _.coin.symbol;case"amount":return _.amount;case"amountUsd":default:return _.amountUsd}},s.value.order));return(_,a)=>{const h=G,u=x,d=R,g=A;return f(),C(g,{title:"Fees Staged"},{default:c(()=>[o(d,{rows:n(m),columns:t,sorting:n(s),onSortColumn:n(i)},{row:c(({item:l})=>[o(h,{address:l.coin.address},null,8,["address"]),r("div",null,[r("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${l.coin.address}`},F(l.coin.symbol),9,Ut)]),r("div",Bt,[o(u,{"show-zero":"",type:"dollar",value:l.amount,precision:2,"show-symbol":!1},null,8,["value"])]),r("div",Dt,[o(u,{"show-zero":"",type:"dollar",value:l.amountUsd,precision:2},null,8,["value"])])]),"row-aggregation":c(()=>[a[0]||(a[0]=r("div",null,null,-1)),a[1]||(a[1]=r("div",null,null,-1)),a[2]||(a[2]=r("div",null,null,-1)),r("div",At,[o(u,{type:"dollar",value:n(m).reduce((l,v)=>l+v.amountUsd,0),precision:2},null,8,["value"])])]),_:1},8,["rows","sorting","onSortColumn"])]),_:1})}}}),Lt=D(It,[["__scopeId","data-v-e8ff3feb"]]),Vt={class:"dashboard-grid"},Pt=U({__name:"Harvesting",setup(e){const{isFetching:t,data:s}=et(),{isFetching:i,data:m}=tt();return(_,a)=>(f(),q("div",Vt,[o(Ft,{style:{"grid-area":"collected"},fees:n(s),loading:n(t)},null,8,["fees","loading"]),o(Lt,{style:{"grid-area":"staged"},fees:n(m),loading:n(i)},null,8,["fees","loading"])]))}}),qt=D(Pt,[["__scopeId","data-v-8c81face"]]),Rt=U({__name:"ChartBreakdown",setup(e){const t=J(),{items:s}=Se(()=>[{id:"crvusd",label:"crvUSD",color:t.value.colorsArray[0]},{id:"pools",label:"Pools",color:t.value.colorsArray[1]}]),{isFetching:i,data:m}=Ze(),{isFetching:_,data:a}=Ge(),h=$(()=>i.value||_.value),u=$(()=>{const{colors:p,colorsArray:y}={colors:t.value.colors,colorsArray:[t.value.colorsArray[0],t.value.colorsArray[1]]};return ke({chart:{type:"bar",stacked:!0,animations:{enabled:!1}},xaxis:{categories:v.value,labels:{formatter:b=>b,rotate:0},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:b=>`$${Y(b,0,"dollar")}${Z(b)}`},min:0},plotOptions:{bar:{columnWidth:"75%",dataLabels:{position:"top",hideOverflowingLabels:!1}}},legend:{show:!1},dataLabels:{enabled:!1},tooltip:{followCursor:!1,enabled:!0}},K({colors:p,colorsArray:y}))});function d(p){return p.groupBy(y=>y.timestamp.getTime()).entries().map(([y,b])=>{const k=b.reduce((S,H)=>S+H.feesUsd,0);return{timestamp:Number(y)/1e3,feesUsd:k}}).orderBy(y=>y.timestamp,"asc")}const g=$(()=>{const p=d(m.value),y=d(a.value);return p.concat(y).groupBy(b=>b.timestamp).entries().map(([,b])=>({timestamp:b[0].timestamp,numLabels:b.length})).orderBy(b=>b.timestamp,"asc").dropWhile(b=>b.numLabels<2).map(b=>b.timestamp)});function l(p){return new Date(p*1e3).toLocaleDateString(void 0,{day:"2-digit",month:"short"})}const v=$(()=>g.value.map(p=>l(p))),B=$(()=>{function p(k){return d(k).map(S=>({x:l(S.timestamp),y:S.feesUsd}))}const y={name:"crvusd",data:p(m.value)},b={name:"pools",data:p(a.value)};return[y,b]});return(p,y)=>{const b=Te,k=$e,S=A;return f(),C(S,{title:"Revenue breakdown by source",loading:n(h)},{"actions-secondary":c(()=>[o(b,{items:n(s)},null,8,["items"])]),default:c(()=>[o(k,{options:n(u),series:n(B)},null,8,["options","series"])]),_:1},8,["loading"])}}}),xt=D(Rt,[["__scopeId","data-v-8f289c29"]]),Wt={class:"dashboard-grid"},Ht=U({__name:"Overview",setup(e){return(t,s)=>(f(),q("div",Wt,[o(xt,{style:{"grid-area":"breakdown"},class:"breakdown"})]))}}),Mt=D(Ht,[["__scopeId","data-v-b341dd1c"]]),Ot=e=>({auctionStartBlock:e.auctionStartBlock,orders:e.auction.orders.map(t=>t),prices:Object.fromEntries(Object.entries(e.auction.prices).map(([t,s])=>[t,BigInt(s)])),solutions:e.solutions.map(t=>({solver:t.solver,solverAddress:t.solverAddress,score:BigInt(t.score),ranking:t.ranking,clearingPrices:Object.fromEntries(Object.entries(t.clearingPrices).map(([s,i])=>[s,BigInt(i)])),orders:t.orders.map(s=>({id:s.id,sellAmount:BigInt(s.sellAmount),buyAmount:BigInt(s.buyAmount)}))}))});async function Kt(e,t){const s=L(t),i=await V(`${s}/mainnet/api/v1/solver_competition/by_tx_hash/${e}`);return Ot(i)}const Qt="https://api.cow.fi";function Et(e){return P({queryKey:["solver-competition",e],queryFn:({queryKey:[,t]})=>Kt(t,{host:Qt})})}const Nt={class:"settlement-details-body"},jt={class:"info col"},zt={class:"buttons"},Jt={class:"font-mono json"},Xt={key:1},Yt=["href"],Zt=U({__name:"SettlementDetails",props:{settlement:{}},setup(e){const{data:t,isPending:s}=Et(_e(()=>e.settlement.txHash)),i=$(()=>t.value?JSON.stringify(t.value,(l,v)=>typeof v=="bigint"?v.toString():v,2):"no data"),m=$(()=>t.value?t.value.solutions.orderBy(l=>l.ranking,"asc"):[]);function _(l){return`https://etherscan.io/address/${l}`}async function a(l){await navigator.clipboard.writeText(l)}async function h(){await navigator.clipboard.writeText(i.value)}function u(l){switch(l){case 1:return"gold";case 2:return"silver";case 3:return"bronze";default:return""}}const d=K(!1),g=X("cardJson");return(l,v)=>{const B=ne,p=De,y=ve,b=we,k=Ce,S=A,H=Ve,j=R;return f(),C(S,{class:"settlement-details"},{default:c(()=>[r("div",Nt,[r("div",jt,[o(B,{label:"Auction Start Block","has-value":!n(s)},{default:c(()=>{var T;return[z(F(((T=n(t))==null?void 0:T.auctionStartBlock)??0),1)]}),_:1},8,["has-value"]),o(B,{label:"Solvers","has-value":!n(s)},{default:c(()=>{var T,w;return[z(F(((w=(T=n(t))==null?void 0:T.solutions)==null?void 0:w.length)??0),1)]}),_:1},8,["has-value"]),o(B,{label:"Orders","has-value":!n(s)},{default:c(()=>{var T,w;return[z(F(((w=(T=n(t))==null?void 0:T.orders)==null?void 0:w.length)??0),1)]}),_:1},8,["has-value"]),o(S,{ref_key:"cardJson",ref:g,class:"card-json col",title:"Json"},{actions:c(()=>[r("div",zt,[o(y,{onClick:v[0]||(v[0]=T=>h())},{default:c(()=>[o(p)]),_:1}),o(y,{onClick:v[2]||(v[2]=T=>d.value=!n(d))},{default:c(()=>{var T;return[o(b),o(k,{target:(T=n(g))==null?void 0:T.$el,show:n(d),onClose:v[1]||(v[1]=w=>d.value=!1)},null,8,["target","show"])]}),_:1})])]),default:c(()=>[r("div",Jt,F(n(i)),1)]),_:1},512)]),o(S,{class:"col",title:"Solvers"},{default:c(()=>[o(j,{class:"solvers-table col",rows:n(m)},{row:c(({item:{solver:T,solverAddress:w,ranking:M,score:ce}})=>[r("div",{class:se(["trophy",u(M)])},[M<=3?(f(),C(H,{key:0})):(f(),q("span",Xt,F(M),1))],2),r("div",null,[r("a",{class:"font-mono",target:"_blank",href:_(w)},F(T),9,Yt)]),r("div",null,F(ce),1),r("div",null,[o(y,{onClick:hs=>a(w)},{default:c(()=>[o(p)]),_:2},1032,["onClick"])])]),_:1},8,["rows"])]),_:1})])]),_:1})}}}),Gt=D(Zt,[["__scopeId","data-v-ac9fc03e"]]),es={class:"header-content"},ts={class:"token"},ss=["href"],ns={class:"end"},os={class:"end"},as={class:"end"},rs={class:"end profit"},ls={class:"end"},is=["href"],cs={class:"end"},ee=15,us=U({__name:"TableSettlements",props:{settlements:{}},setup(e){const t=[{id:"token",label:"Token",sort:!1},{id:"amount",label:"Amount",sort:!0,align:"end"},{id:"quote",label:"Quote",sort:!0,align:"end"},{id:"profit",label:"Profit",sort:!0,align:"end"},{id:"profitPct",label:"(%)",sort:!0,align:"end"},{id:"tx",label:"Transaction",sort:!1,align:"end"},{id:"timestamp",label:"Time",sort:!0,align:"end"}],{sorting:s,onSort:i}=N("timestamp"),m=$(()=>e.settlements.orderBy(p=>{switch(s.value.column){case"amount":return p.amountReceived;case"quote":return p.routerReceived;case"profit":return l(p);case"profitPct":return v(p);case"timestamp":return p.timestamp.getTime()}},s.value.order)),{page:_,rowsPage:a,onPage:h}=Ue(m,ee),{expanded:u,toggleExpansion:d}=Ae(),{relativeTime:g}=Ie();function l(p){return p.amountReceived-p.routerReceived}function v(p){return 100*p.amountReceived/p.routerReceived-100}function B(p){const y=p.coin.symbol;return y.includes(":")?y.split(":")[1]:y}return(p,y)=>{const b=Be,k=G,S=x,H=Fe,j=R,T=A;return f(),C(T,{title:"CowSwap Settlements"},{actions:c(()=>[r("div",es,[o(b,{"items-count":n(m).length,"items-per-page":ee,page:n(_),onPage:n(h)},null,8,["items-count","page","onPage"])])]),default:c(()=>[o(j,{class:"settlements-table",rows:n(a),columns:t,sorting:n(s),expanded:n(u),onSortColumn:n(i),onSelect:n(d)},{row:c(({item:w,expanded:M})=>[r("div",ts,[o(k,{address:w.coin.address},null,8,["address"]),r("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${w.coin.address}`},F(B(w)),9,ss)]),r("div",ns,[o(S,{type:"dollar",value:w.amountReceived,precision:2},null,8,["value"])]),r("div",os,[o(S,{type:"dollar",value:w.routerReceived,precision:2},null,8,["value"])]),r("div",as,[w.routerReceived>1?(f(),C(S,{key:0,type:"dollar",value:l(w),precision:2},null,8,["value"])):I("",!0)]),r("div",rs,[w.routerReceived>1?(f(),C(S,{key:0,class:se(["pct",{green:v(w)>0}]),type:"percentage",value:v(w),precision:2},null,8,["value","class"])):I("",!0)]),r("div",ls,[r("a",{class:"font-mono",target:"_blank",href:`https://explorer.cow.fi/tx/${w.txHash}`,onClick:y[0]||(y[0]=fe(()=>{},["stop"]))},F(("addressShort"in p?p.addressShort:n(he))(w.txHash)),9,is)]),r("div",cs,F(n(g)(w.timestamp.getUTCTimestamp())),1),o(H,{expanded:M},null,8,["expanded"])]),"row-details":c(({item:w})=>[y[1]||(y[1]=r("div",{class:"empty"},null,-1)),n(u).includes(w)?(f(),C(Gt,{key:0,settlement:w},null,8,["settlement"])):I("",!0)]),_:1},8,["rows","sorting","expanded","onSortColumn","onSelect"])]),_:1})}}}),ds=D(us,[["__scopeId","data-v-9335f69c"]]),ms={class:"dashboard-grid"},ps=U({__name:"Settlements",setup(e){const{isFetching:t,data:s}=Ye();return(i,m)=>(f(),q("div",ms,[o(ds,{style:{"grid-area":"table"},settlements:n(s),loading:n(t)},null,8,["settlements","loading"])]))}}),_s=D(ps,[["__scopeId","data-v-b0b08e65"]]),vs={class:"dashboard"},fs=U({__name:"Revenue.page",setup(e){const{tabActive:t,tabActiveIndex:s}=Le(["overview","distributions","cushions","settlements","harvesting"],"revenue");return(i,m)=>{const _=ue,a=de;return f(),q("div",vs,[o(a,{active:n(s),onTab:m[0]||(m[0]=h=>s.value=h.index)},{default:c(()=>[o(_,{header:"Revenue"},{default:c(()=>[(f(),C(O,null,[n(t)==="overview"?(f(),C(Mt,{key:0})):I("",!0)],1024))]),_:1}),o(_,{header:"Distributions"},{default:c(()=>[(f(),C(O,null,[n(t)==="distributions"?(f(),C(wt,{key:0})):I("",!0)],1024))]),_:1}),o(_,{header:"Cushions"},{default:c(()=>[(f(),C(O,null,[n(t)==="cushions"?(f(),C(ct,{key:0})):I("",!0)],1024))]),_:1}),o(_,{header:"Settlements"},{default:c(()=>[(f(),C(O,null,[n(t)==="settlements"?(f(),C(_s,{key:0})):I("",!0)],1024))]),_:1}),o(_,{header:"Harvesting"},{default:c(()=>[(f(),C(O,null,[n(t)==="harvesting"?(f(),C(qt,{key:0})):I("",!0)],1024))]),_:1})]),_:1},8,["active"])])}}}),Qs=D(fs,[["__scopeId","data-v-2184303d"]]);export{Qs as default};
