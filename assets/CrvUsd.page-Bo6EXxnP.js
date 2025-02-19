import{d as B,r as A,c as y,e as V,o as L,w as b,b as l,u as s,f as r,i as D,O,g as P,a8 as ee,_ as U,W as R,a2 as M,V as F,j as K,Y as N,a as Q,X as se,a4 as te,a5 as ae,$ as oe}from"./index-jdaCXud5.js";import{_ as E}from"./Table-ra7hNSWB.js";import{_ as j}from"./AsyncValue-BdFX5jU8.js";import{_ as q}from"./TokenIcon-DpUkwOIa.js";import{_ as X}from"./InputText-CGD-N7Rv.js";import{d as Y,u as le,e as ne,f as re}from"./crvusd-CvVLVOIL.js";import{d as ie}from"./pools-CrOPsjyI.js";import{_ as de}from"./IconExpander-MFZ8G8cq.js";import{u as G,_ as H}from"./UseLegend-B-41_L8O.js";import{_ as ce}from"./ButtonToggle-a2tqUCmh.js";/* empty css                                                                         */import{c as ue,_ as pe}from"./ChartStylesApex-CXtOTKTS.js";import{r as z,u as W}from"./Number-DDdUpen7.js";import{u as J,b as I,c as Z,_ as me,a as _e}from"./UseLightweightChart-KX39hskA.js";/* empty css                                                                    */import"./api-Bfvlvlrj.js";import"./timestamp-C4C6eGnP.js";import"./useQuery-bzXZhUsG.js";import"./UseHost-DFKSSVaC.js";import"./Object-DOSYkgA0.js";function ve(k){return k!=null}const fe={class:"end"},ge={class:"end"},he={class:"end"},ye={class:"end"},be={class:"end"},we={class:"end"},Ce={class:"end"},ke={class:"end"},$e=B({__name:"TablePegkeepers",setup(k){const p=A(""),u=y(()=>h.value||C.value),m=y(()=>_.value.filter(n=>n.active).map(n=>{const f=$.value.find(a=>n.poolAddress===a.address);if(f)return{...f,...n,pool:f.address}}).filter(ve).orderBy(n=>n.tvlUsd,"desc")),i=y(()=>m.value.filter(n=>{const f=p.value.toLocaleLowerCase().split(" "),a=d=>f.some(c=>d.toLocaleLowerCase().includes(c));return a(n.name)||a(n.address)})),{isFetching:C,data:_}=Y(),e=n=>`${n.pair[1].symbol} / ${n.pair[0].symbol}`,t=y(()=>_.value.map(n=>n.poolAddress)),o=ie(A("ethereum"),t),h=y(()=>o.value.some(n=>n.isFetching)),$=y(()=>o.value.filter(n=>n.data).map(n=>n.data)),v=n=>n>=1e6?2:0,w=n=>n.pair.filter(f=>f.address.toLocaleLowerCase()!==ee)[0].address;return(n,f)=>{const a=X,d=q,c=j,S=E,T=P;return L(),V(T,{class:"pegkeepers-card",title:"Pegkeepers",loading:s(u)},{actions:b(()=>[l(a,{modelValue:s(p),"onUpdate:modelValue":f[0]||(f[0]=g=>O(p)?p.value=g:null),search:"",placeholder:"Search for.."},null,8,["modelValue"])]),default:b(()=>[l(S,{class:"pegkeepers-table",rows:s(i),columns:["","Name",{label:"Debt",align:"end"},{label:"TVL",align:"end"},{label:"Volume",align:"end"},{label:"Fees",align:"end"}]},{row:b(({item:g})=>[l(d,{chain:"ethereum",address:w(g)},null,8,["address"]),r("div",null,D(e(g)),1),r("div",fe,[l(c,{"show-zero":"",type:"dollar",value:g.totalDebt,precision:v},null,8,["value"])]),r("div",ge,[l(c,{"show-zero":"",type:"dollar",value:g.tvlUsd,precision:v},null,8,["value"])]),r("div",he,[l(c,{"show-zero":"",type:"dollar",value:g.tradingVolume24h,precision:v},null,8,["value"])]),r("div",ye,[l(c,{"show-zero":"",type:"dollar",value:g.totalProfit,precision:v},null,8,["value"])])]),"row-aggregation":b(()=>[f[1]||(f[1]=r("div",null,null,-1)),f[2]||(f[2]=r("div",null,null,-1)),r("div",be,[l(c,{"show-zero":"",type:"dollar",value:s(i).reduce((g,x)=>g+x.totalDebt,0),precision:v},null,8,["value"])]),r("div",we,[l(c,{"show-zero":"",type:"dollar",value:s(i).reduce((g,x)=>g+x.tvlUsd,0),precision:v},null,8,["value"])]),r("div",Ce,[l(c,{"show-zero":"",type:"dollar",value:s(i).reduce((g,x)=>g+x.tradingVolume24h,0),precision:v},null,8,["value"])]),r("div",ke,[l(c,{"show-zero":"",type:"dollar",value:s(i).reduce((g,x)=>g+x.totalProfit,0),precision:v},null,8,["value"])])]),_:1},8,["rows"])]),_:1},8,["loading"])}}}),Se=U($e,[["__scopeId","data-v-ec87a5b3"]]),Le={class:"end"},Te={class:"end"},Ve={class:"end"},xe={class:"end"},Be={class:"end"},Ue={class:"end"},De={class:"end"},Ae={class:"end"},Pe={class:"end"},Fe={class:"end"},Ie={class:"end"},Re=B({__name:"TableMarkets",emits:["select"],setup(k,{emit:p}){const u=p,m=A(""),i=y(()=>_.value.filter(t=>{const o=m.value.toLocaleLowerCase().split(" "),h=$=>o.some(v=>$.toLocaleLowerCase().includes(v));return h(t.name)||h(t.address)}).orderBy(t=>t.borrowed,"desc")),{isFetching:C,data:_}=le(),e=t=>t>=1e6?2:0;return(t,o)=>{const h=X,$=de,v=q,w=j,n=E,f=P;return L(),V(f,{class:"markets-card",title:"Markets",loading:s(C)},{actions:b(()=>[l(h,{modelValue:s(m),"onUpdate:modelValue":o[0]||(o[0]=a=>O(m)?m.value=a:null),search:"",placeholder:"Search for..."},null,8,["modelValue"])]),default:b(()=>[l(n,{class:"markets-table",rows:s(i),columns:["","","Name",{label:"Loans",align:"end"},{label:"Rate",align:"end"},{label:"Borrowed",align:"end"},{label:"Collateral",align:"end"},{label:"Fees Pending",align:"end"},{label:"Fees Collected",align:"end"}],onSelect:o[1]||(o[1]=a=>u("select",a))},{row:b(({item:a})=>[l($),l(v,{chain:"ethereum",address:a.tokenCollateral.address},null,8,["address"]),r("div",null,D(a.name),1),r("div",Le,D(a.loans),1),r("div",Te,[l(w,{type:"percentage",value:a.rate*100,precision:2},null,8,["value"])]),r("div",Ve,[l(w,{type:"dollar",value:a.borrowed,precision:e,"show-symbol":!1},null,8,["value"])]),r("div",xe,[l(w,{type:"dollar",value:a.collateralUsd,precision:e},null,8,["value"])]),r("div",Be,[l(w,{type:"dollar",value:a.fees.pending,precision:e},null,8,["value"])]),r("div",Ue,[l(w,{"show-zero":"",type:"dollar",value:a.fees.collected,precision:e},null,8,["value"])])]),"row-aggregation":b(()=>[o[2]||(o[2]=r("div",null,null,-1)),o[3]||(o[3]=r("div",null,null,-1)),o[4]||(o[4]=r("div",null,null,-1)),r("div",De,D(s(i).reduce((a,d)=>a+d.loans,0)),1),o[5]||(o[5]=r("div",null,null,-1)),r("div",Ae,[l(w,{type:"dollar",value:s(i).reduce((a,d)=>a+d.borrowed,0),precision:e,"show-symbol":!1},null,8,["value"])]),r("div",Pe,[l(w,{type:"dollar",value:s(i).reduce((a,d)=>a+d.collateralUsd,0),precision:e},null,8,["value"])]),r("div",Fe,[l(w,{type:"dollar",value:s(i).reduce((a,d)=>a+d.fees.pending,0),precision:e},null,8,["value"])]),r("div",Ie,[l(w,{"show-zero":"",type:"dollar",value:s(i).reduce((a,d)=>a+d.fees.collected,0),precision:e},null,8,["value"])])]),_:1},8,["rows"])]),_:1},8,["loading"])}}}),ze=U(Re,[["__scopeId","data-v-208ac962"]]),We={class:"chart-types button-group"},Me=B({__name:"ChartCrvUsdSupply",setup(k){const p=R(),u=A("line"),{items:m}=G(()=>[{id:"supply",label:"Supply",color:p.value.colorsArray[0]},{id:"borrowed",label:"Borrowed",color:p.value.colorsArray[1]}]),{isFetching:i,data:C}=ne(),_=e=>{u.value!==e&&(u.value=e)};return(e,t)=>{const o=ce,h=H,$=P;return L(),V($,{title:"crvUSD Supply",loading:s(i)},{actions:b(()=>[r("div",We,[l(o,{"model-value":s(u)==="line",onClick:t[0]||(t[0]=v=>_("line"))},{default:b(()=>t[2]||(t[2]=[K(" Line ")])),_:1},8,["model-value"]),l(o,{"model-value":s(u)==="breakdown",onClick:t[1]||(t[1]=v=>_("breakdown"))},{default:b(()=>t[3]||(t[3]=[K(" Breakdown ")])),_:1},8,["model-value"])])]),"actions-secondary":b(()=>[s(u)==="line"?(L(),V(h,{key:0,items:s(m)},null,8,["items"])):F("",!0)]),default:b(()=>[(L(),V(M,null,[s(u)==="line"?(L(),V(s(Ee),{key:0,data:s(C)},null,8,["data"])):F("",!0)],1024)),(L(),V(M,null,[s(u)==="breakdown"?(L(),V(s(Ne),{key:0,data:s(C)},null,8,["data"])):F("",!0)],1024))]),_:1},8,["loading"])}}}),Ke=U(Me,[["__scopeId","data-v-c0c5be0b"]]),Oe=B({__name:"ChartCrvUsdSupplyBreakdown",props:{data:{default:()=>[]}},setup(k){const p=y(()=>ue({chart:{type:"bar",stacked:!0,animations:{enabled:!1}},xaxis:{categories:u.value,labels:{formatter:C,rotate:0},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:_},min:0,max:i.value},plotOptions:{bar:{columnWidth:"75%",dataLabels:{position:"top",hideOverflowingLabels:!1}}},legend:{show:!1},dataLabels:{enabled:!1},tooltip:{followCursor:!1,enabled:!0}})),u=y(()=>k.data.orderBy(e=>e.timestamp.getTime(),"asc").groupBy(e=>e.timestamp.getTime()).entries().map(([e])=>new Date(parseInt(e,10)).toLocaleDateString(void 0,{day:"2-digit",month:"2-digit"})).map((e,t)=>t%8===0?e:"")),m=y(()=>k.data.groupBy(e=>e.market).entries().map(([e,t])=>({name:e,data:t.groupBy(o=>o.timestamp.getTime()).entries().map(([o,h])=>({x:new Date(parseInt(o,10)).toLocaleDateString(),y:h.reduce(($,v)=>$+v.supply,0)})).orderBy(o=>o.x,"asc")}))),i=y(()=>Math.max(...k.data.groupBy(e=>e.timestamp.getTime()).entries().map(([,e])=>e.reduce((t,o)=>t+o.supply,0)))*1.1),C=e=>e,_=e=>`${z(e,1,"dollar")}${W(e)}`;return(e,t)=>{const o=pe;return L(),V(o,{options:s(p),series:s(m)},null,8,["options","series"])}}}),Ne=U(Oe,[["__scopeId","data-v-e133d82c"]]),Qe={ref:"chartRef",class:"chart"},Ee=B({__name:"ChartCrvUsdSupplyLine",props:{data:{default:()=>[]}},setup(k){const p=R(),{chart:u,series:m}=J({createChartOptions:Z(),series:[{type:"Area",name:"supply",options:y(()=>({priceFormat:{type:"custom",formatter:C},lineWidth:2,lineType:I.WithSteps,lineColor:p.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))},{type:"Line",name:"debt",options:y(()=>({priceFormat:{type:"custom",formatter:C},lineWidth:2,lineType:I.WithSteps,color:p.value.colors.yellow,lastValueVisible:!1,priceLineVisible:!1}))}]});N(i);function i(){if(!u.value||!m.debt||!m.supply)return;const _=k.data.groupBy(t=>t.timestamp.getTime()).entries().map(([,t])=>{var o;return{time:t[0].timestamp.getUTCTimestamp(),value:t.reduce((h,$)=>h+$.supply,0),debt:((o=t.find(h=>h.market==="Keepers debt"))==null?void 0:o.supply)??0}}).uniqWith((t,o)=>t.time===o.time).orderBy(t=>t.time,"asc"),e=_.map(t=>({time:t.time,value:t.value-t.debt}));_.length>0&&m.supply.setData(_),e.length>0&&m.debt.setData(e),u.value.timeScale().fitContent()}function C(_){return`${z(_,0,"dollar")}${W(_)}`}return(_,e)=>(L(),Q("div",Qe,null,512))}}),je={style:{display:"flex"}},qe={ref:"chartRef",class:"chart"},Xe=B({__name:"ChartKeeperPrices",setup(k){const p=R(),u=["USDC","USDT"],{items:m,toggles:i,disabled:C}=G(()=>u.map((a,d)=>({id:a,label:a,color:p.value.colorsArray[d],togglable:!0}))),_=y(()=>e.value||h.value),{isFetching:e,data:t}=Y(),o=y(()=>t.value.filter(a=>a.pair.some(({symbol:d})=>u.map(c=>c.toLocaleLowerCase()).includes(d.toLocaleLowerCase())))),{isFetching:h,data:$}=re(o),v=se("card"),{chart:w,series:n}=J({createChartOptions:Z(),series:u.map((a,d)=>({type:"Line",name:a,options:y(()=>({priceFormat:{type:"custom",formatter:c=>`${z(c,3,"dollar")}${W(c)}`},lineWidth:2,lineType:I.WithSteps,color:p.value.colorsArray[d],lastValueVisible:!1,priceLineVisible:!1,autoscaleInfoProvider:c=>{const S=c();return S!==null&&(S.priceRange.minValue=Math.max(.98,S.priceRange.minValue),S.priceRange.maxValue=Math.min(1.02,S.priceRange.maxValue)),S}}))}))});N(f);function f(){var a,d;if(!(!w.value||Object.values(n).length<0)){for(const[,c]of u.entries()){(a=n[c])==null||a.applyOptions({visible:i[c].value});const S=$.value.map(T=>({time:T.timestamp,value:T[c]})).uniqWith((T,g)=>T.time===g.time).orderBy(T=>T.time,"asc");S.length>0&&((d=n[c])==null||d.setData(S))}w.value.timeScale().fitContent()}}return(a,d)=>{const c=H,S=P;return L(),V(S,{ref_key:"card",ref:v,title:"Pegkeepers Coin Prices",loading:s(_)},{actions:b(()=>[r("div",je,[l(s(me),{filename:"keeper_prices",series:s(n)},null,8,["series"]),l(s(_e),{chart:s(w),target:s(v)},null,8,["chart","target"])])]),"actions-secondary":b(()=>[l(c,{items:s(m),disabled:s(C),onToggle:d[0]||(d[0]=T=>s(i)[T].value=!s(i)[T].value)},null,8,["items","disabled"])]),default:b(()=>[r("div",qe,null,512)]),_:1},8,["loading"])}}}),Ye={class:"dashboard"},Ge={class:"col"},He={class:"col"},Je=B({__name:"CrvUsd.page",setup(k){const{crumbs:p}=te(ae());p.value=[{id:"crvusd",label:"crvUSD",pathName:"crvusd"},{id:"market",label:"Select market for details",hint:!0}];const u=oe(),m=async i=>{await u.push({name:"crvusdmarket",params:{tab:"",marketAddr:i.address}})};return(i,C)=>(L(),Q("div",Ye,[l(s(ze),{style:{"grid-column":"1 / -1"},onSelect:m}),r("div",Ge,[l(s(Se))]),r("div",He,[l(s(Ke)),l(s(Xe))])]))}}),ys=U(Je,[["__scopeId","data-v-ecfb0014"]]);export{ys as default};
