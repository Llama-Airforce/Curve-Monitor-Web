import{_ as H}from"./KPI-DSm4wSN4.js";import{_ as F}from"./AsyncValue-bJbRvNiS.js";import{a as W,b as K,c as P}from"./dao-V4kJBKDN.js";import{d as w,r as I,c as y,W as M,X as O,Y as q,e as N,o as S,w as c,f as p,b as s,u as e,j as k,g as B,_ as D,i as R,T as X,$ as Y,h as G,a as J}from"./index-D-zH55uQ.js";import{u as Z,_ as ee}from"./UseLegend-CHyZqdDy.js";import{_ as A}from"./ButtonToggle-CU_dJAoq.js";import{u as U,c as E}from"./UseLightweightChart-aZ1rwpBW.js";import{_ as Q,a as j}from"./BtnChartLWFullscreen.vue_vue_type_script_setup_true_lang-j2q3w0Jg.js";import{r as V,u as L}from"./Number-dIoHFtFk.js";import{_ as x}from"./Table-Cq7d-cLh.js";import{u as z}from"./UseSort-Dx-e8QHH.js";import{_ as te}from"./IconExpander-Df3JG6bZ.js";import"./timestamp-Dfir0V72.js";import"./useQuery-COnkORT4.js";import"./Object-DOSYkgA0.js";const oe={style:{display:"flex"}},ae={class:"actions-secondary"},se={class:"button-group"},le={ref:"chartRef",class:"chart"},ne=w({__name:"ChartSupply",setup(T){const r=I("1m"),C=y(()=>{switch(r.value){case"1m":return 30;case"3m":return 90;case"6m":return 180;case"1y":return 365;default:return 30}}),{isFetching:f,data:_}=W(C),g=M(),{items:b,toggles:a,disabled:d}=Z(()=>{const{blue:n,yellow:o,purple:v}=g.value.colors;return[{id:"crv",label:"CRV",color:n,togglable:!0},{id:"circ",label:"Circulating",color:o,togglable:!0},{id:"vecrv",label:"veCRV",color:v,togglable:!0}]});a.circ.value=!1,a.crv.value=!1;const m=O("card"),{chart:i,series:t}=U({createChartOptions:E(),series:[{type:"Line",name:"crv",options:y(()=>({priceFormat:{type:"custom",formatter:n=>`${V(n,2,"dollar")}${L(n)}`,minMove:.01},lineWidth:2,color:g.value.colors.blue,lastValueVisible:!1,priceLineVisible:!1}))},{type:"Line",name:"circ",options:y(()=>({priceFormat:{type:"custom",formatter:n=>`${V(n,2,"dollar")}${L(n)}`,minMove:.01},lineWidth:2,color:g.value.colors.yellow,lastValueVisible:!1,priceLineVisible:!1}))},{type:"Line",name:"vecrv",options:y(()=>({priceFormat:{type:"custom",formatter:n=>`${V(n,2,"dollar")}${L(n)}`,minMove:.01},lineWidth:2,color:g.value.colors.purple,lastValueVisible:!1,priceLineVisible:!1}))}]});q(u);function u(){if(!i.value||!t.crv||!t.circ||!t.vecrv)return;const n=_.value.map(l=>({time:l.timestamp.getUTCTimestamp(),value:Number(l.crvSupply)/10**18})).uniqWith((l,h)=>l.time===h.time).orderBy(l=>l.time,"asc"),o=_.value.map(l=>({time:l.timestamp.getUTCTimestamp(),value:Number(l.circulatingSupply)/10**18})).uniqWith((l,h)=>l.time===h.time).orderBy(l=>l.time,"asc"),v=_.value.map(l=>({time:l.timestamp.getUTCTimestamp(),value:Number(l.veCrvTotal)/10**18})).uniqWith((l,h)=>l.time===h.time).orderBy(l=>l.time,"asc");t.crv.setData(n),t.circ.setData(o),t.vecrv.setData(v),t.crv.applyOptions({visible:a.crv.value}),t.circ.applyOptions({visible:a.circ.value}),t.vecrv.applyOptions({visible:a.vecrv.value}),i.value.timeScale().fitContent()}return(n,o)=>{const v=A,l=ee,h=B;return S(),N(h,{ref_key:"card",ref:m,title:"Token Supply",class:"stack-actions",loading:e(f)},{actions:c(()=>[p("div",oe,[s(e(Q),{filename:"token_supply",series:e(t)},null,8,["series"]),s(e(j),{chart:e(i),target:e(m)},null,8,["chart","target"])])]),"actions-secondary":c(()=>[p("div",ae,[p("div",se,[s(v,{"model-value":e(r)==="1m",onClick:o[0]||(o[0]=$=>r.value="1m")},{default:c(()=>o[5]||(o[5]=[k(" 1m ")])),_:1},8,["model-value"]),s(v,{"model-value":e(r)==="3m",onClick:o[1]||(o[1]=$=>r.value="3m")},{default:c(()=>o[6]||(o[6]=[k(" 3m ")])),_:1},8,["model-value"]),s(v,{"model-value":e(r)==="6m",onClick:o[2]||(o[2]=$=>r.value="6m")},{default:c(()=>o[7]||(o[7]=[k(" 6m ")])),_:1},8,["model-value"]),s(v,{"model-value":e(r)==="1y",onClick:o[3]||(o[3]=$=>r.value="1y")},{default:c(()=>o[8]||(o[8]=[k(" 1y ")])),_:1},8,["model-value"])]),s(l,{items:e(b),disabled:e(d),onToggle:o[4]||(o[4]=$=>e(a)[$].value=!e(a)[$].value)},null,8,["items","disabled"])])]),default:c(()=>[p("div",le,null,512)]),_:1},8,["loading"])}}}),re=D(ne,[["__scopeId","data-v-121f4e17"]]),ie={style:{display:"flex"}},ue={class:"button-group"},ce={ref:"chartRef",class:"chart"},me=w({__name:"ChartSupplyDelta",setup(T){const r=I("1m"),C=y(()=>{switch(r.value){case"1m":return 30;case"3m":return 90;case"6m":return 180;case"1y":return 365;default:return 30}}),{isFetching:f,data:_}=W(C),g=M(),b=O("card"),{chart:a,series:d}=U({createChartOptions:E(),series:{type:"Histogram",name:"deltas",options:y(()=>({priceFormat:{type:"custom",formatter:i=>`${V(i,0,"dollar")}${L(i)}`,minMove:.01},color:g.value.colors.blue,lastValueVisible:!1,priceLineVisible:!1}))}});q(m);function m(){if(!a.value||!d.deltas)return;const{colors:i}=g.value,t=_.value.map(u=>({time:u.timestamp.getUTCTimestamp(),value:u.veCrvTotal})).uniqWith((u,n)=>u.time===n.time).orderBy(u=>u.time,"asc").reduce((u,n,o,v)=>{if(o===0)return u;const l=n.value-v[o-1].value,h=l<0?i.red:i.green;return u.push({time:n.time,value:Number(l)/10**18,color:h}),u},[]);t.length>0&&(d.deltas.setData(t),a.value.timeScale().fitContent())}return(i,t)=>{const u=A,n=B;return S(),N(n,{ref_key:"card",ref:b,title:"veCRV Change",loading:e(f)},{actions:c(()=>[p("div",ie,[s(e(Q),{filename:"distributions_delta",series:e(d)},null,8,["series"]),s(e(j),{chart:e(a),target:e(b)},null,8,["chart","target"])])]),"actions-secondary":c(()=>[p("div",ue,[s(u,{"model-value":e(r)==="1m",onClick:t[0]||(t[0]=o=>r.value="1m")},{default:c(()=>t[4]||(t[4]=[k(" 1m ")])),_:1},8,["model-value"]),s(u,{"model-value":e(r)==="3m",onClick:t[1]||(t[1]=o=>r.value="3m")},{default:c(()=>t[5]||(t[5]=[k(" 3m ")])),_:1},8,["model-value"]),s(u,{"model-value":e(r)==="6m",onClick:t[2]||(t[2]=o=>r.value="6m")},{default:c(()=>t[6]||(t[6]=[k(" 6m ")])),_:1},8,["model-value"]),s(u,{"model-value":e(r)==="1y",onClick:t[3]||(t[3]=o=>r.value="1y")},{default:c(()=>t[7]||(t[7]=[k(" 1y ")])),_:1},8,["model-value"])])]),default:c(()=>[p("div",ce,null,512)]),_:1},8,["loading"])}}}),pe=w({__name:"TableLocks",setup(T){const{isFetching:r,data:C}=K(),f=[{id:"day",label:"Day",sort:!0},{id:"amount",label:"Amount",sort:!0,align:"end"}],{sorting:_,onSort:g}=z("day"),b=y(()=>C.value.orderBy(d=>{switch(_.value.column){case"day":return d.day.getTime();case"amount":return Number(d.amount)}},_.value.order));function a(d){return Math.round(Number(d.amount)/10**18)}return(d,m)=>{const i=F,t=x,u=B;return S(),N(u,{title:"Daily Lock Change",loading:e(r)},{default:c(()=>[s(t,{rows:e(b),columns:f,sorting:e(_),onSortColumn:e(g)},{row:c(({item:n})=>[p("div",null,R(n.day.toLocaleDateString()),1),p("div",{class:X(["end",{positive:a(n)>0,negative:a(n)<0}])},[s(i,{value:a(n),precision:2},null,8,["value"])],2)]),_:1},8,["rows","sorting","onSortColumn"])]),_:1},8,["loading"])}}}),de=D(pe,[["__scopeId","data-v-3ae158f5"]]),ve=["href"],_e={class:"end"},ge={class:"end"},ye={class:"end"},fe=w({__name:"TableLockers",setup(T){const{isFetching:r,data:C}=P(),f=[{id:"locker",label:"Locker",sort:!1},{id:"weight",label:"Weight",sort:!0,align:"end"},{id:"ratio",label:"Ratio",sort:!0,align:"end"},{id:"unlock",label:"Unlock Date",sort:!0,align:"end"}],{sorting:_,onSort:g}=z("weight"),b=y(()=>C.value.orderBy(m=>{var i;switch(_.value.column){case"weight":return Number(m.weight);case"ratio":return m.weightRatio;case"unlock":return((i=m.unlockTime)==null?void 0:i.getTime())??0}},_.value.order)),a=Y();async function d(m){await a.push({name:"profile",params:{tab:"governance"},query:{user:m.user}})}return(m,i)=>{const t=F,u=te,n=x,o=B;return S(),N(o,{title:"Top Lockers",loading:e(r)},{default:c(()=>[s(n,{rows:e(b),columns:f,sorting:e(_),onSortColumn:e(g),onSelect:d},{row:c(({item:v})=>{var l;return[p("div",null,[p("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${v.user}`,onClick:i[0]||(i[0]=G(()=>{},["stop"]))},R(v.user),9,ve)]),p("div",_e,[s(t,{value:Number(v.weight)/10**18},null,8,["value"])]),p("div",ge,[s(t,{type:"percentage",value:v.weightRatio,precision:2},null,8,["value"])]),p("div",ye,R(((l=v.unlockTime)==null?void 0:l.toLocaleDateString())??"?"),1),s(u)]}),_:1},8,["rows","sorting","onSortColumn"])]),_:1},8,["loading"])}}}),be=D(fe,[["__scopeId","data-v-16d8eb1a"]]),Ce={class:"dashboard"},he={class:"two-sides"},ke={style:{display:"flex",gap:"0.5ch"}},$e=w({__name:"Locks.page",setup(T){const{isFetching:r,data:C}=W(),f=y(()=>C.value.orderBy(a=>a.timestamp.getTime(),"desc")[0]??void 0),_=y(()=>{var a;return Number(((a=f.value)==null?void 0:a.veCrvTotal)??0)/10**18}),g=y(()=>{var a;return Number(((a=f.value)==null?void 0:a.crvSupply)??0)/10**18}),b=y(()=>{var a;return Number(((a=f.value)==null?void 0:a.circulatingSupply)??0)/10**18});return(a,d)=>{const m=F,i=H;return S(),J("div",Ce,[s(i,{style:{"grid-area":"kpi1"},label:"veCRV Supply","has-value":!e(r)},{default:c(()=>[s(m,{type:"dollar",value:e(_),precision:2,"show-symbol":!1},null,8,["value"])]),_:1},8,["has-value"]),s(i,{style:{"grid-area":"kpi2"},label:"CRV Supply / Circulating","has-value":!e(r)},{default:c(()=>[p("div",he,[p("div",ke,[s(m,{type:"dollar",value:e(g),precision:2,"show-symbol":!1},null,8,["value"]),d[0]||(d[0]=p("span",{style:{color:"var(--c-lvl5)"}},"/",-1)),s(m,{type:"dollar",value:e(b),precision:2,"show-symbol":!1},null,8,["value"])]),s(m,{type:"percentage",value:100*e(b)/e(g),precision:2},null,8,["value"])])]),_:1},8,["has-value"]),s(re,{style:{"grid-area":"supply"}}),s(me,{style:{"grid-area":"supply-delta"}}),s(de,{style:{"grid-area":"locks"}}),s(be,{style:{"grid-area":"lockers"}})])}}}),Ae=D($e,[["__scopeId","data-v-60485839"]]);export{Ae as default};
