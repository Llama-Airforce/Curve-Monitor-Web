import{_ as oe}from"./KPI-B53x3jTq.js";import{_ as le}from"./AsyncValue-C0jBgRNU.js";import{_ as re}from"./SelectChain-iP9HnLzn.js";import{a as ce,b as ie}from"./chains-B_eQCstz.js";import{d as D,T as W,U as M,f as l,V as O,h as V,o as U,w as T,a as A,b as r,u as e,_ as F,e as q,r as ue,t as pe,a3 as de,c as me}from"./index-CB0lbOkp.js";import{u as N,b as Q,c as X,_ as Y,a as K}from"./UseLightweightChart-D45Z5owe.js";import{r as z,u as I}from"./Number-BucUTk9j.js";import{c as j,_ as G}from"./ChartStylesApex-4IMOjS1O.js";import{u as H,_ as J}from"./UseLegend-BjWtFUgd.js";import{c as Z}from"./String-TwmdtJxb.js";import{a as E}from"./index-Cu8Dsk6r.js";import"./ChainIcon-ty_DaCeQ.js";import"./timestamp-Dfir0V72.js";import"./useQuery-B6SWxrK9.js";import"./Object-DOSYkgA0.js";const _e=["crvusd","lending","pools","router","dao"],ve={style:{display:"flex"}},he={ref:"chartRef",class:"chart"},fe=D({__name:"ChartTxs",props:{txs:{}},setup(g){const b=W(),c=M("card"),{chart:x,series:n}=N({createChartOptions:X(),series:{type:"Area",name:"txs",options:l(()=>({priceFormat:{type:"custom",formatter:i=>`${z(i,0,"dollar")}${I(i)}`,minMove:.01},lineWidth:2,lineType:Q.WithSteps,lineColor:b.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});O(y);function y(){if(!x.value||!n.txs)return;const i=g.txs.map(a=>({time:a.timestamp,value:a.count})).uniqWith((a,d)=>a.time===d.time).orderBy(a=>a.time,"asc");n.txs.setData(i),x.value.timeScale().fitContent()}return(i,a)=>{const d=Y,v=K,m=F;return U(),V(m,{ref_key:"card",ref:c,title:"Transactions"},{actions:T(()=>[A("div",ve,[r(d,{filename:"txs",series:e(n)},null,8,["series"]),r(v,{chart:e(x),target:e(c)},null,8,["chart","target"])])]),default:T(()=>[A("div",he,null,512)]),_:1},512)}}}),ye={style:{display:"flex"}},ge={ref:"chartRef",class:"chart"},be=D({__name:"ChartUsers",props:{users:{}},setup(g){const b=W(),c=M("card"),{chart:x,series:n}=N({createChartOptions:X(),series:{type:"Area",name:"users",options:l(()=>({priceFormat:{type:"custom",formatter:i=>`${z(i,0,"dollar")}${I(i)}`,minMove:.01},lineWidth:2,lineType:Q.WithSteps,lineColor:b.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});O(y);function y(){if(!x.value||!n.users)return;const i=g.users.map(a=>({time:a.timestamp,value:a.count})).uniqWith((a,d)=>a.time===d.time).orderBy(a=>a.time,"asc");n.users.setData(i),x.value.timeScale().fitContent()}return(i,a)=>{const d=Y,v=K,m=F;return U(),V(m,{ref_key:"card",ref:c,title:"Users"},{actions:T(()=>[A("div",ye,[r(d,{filename:"users",series:e(n)},null,8,["series"]),r(v,{chart:e(x),target:e(c)},null,8,["chart","target"])])]),default:T(()=>[A("div",ge,null,512)]),_:1},512)}}}),xe=D({__name:"ChartRankingChains",props:{type:{},txs:{},users:{}},setup(g){const b=W(),c=l(()=>`Top Chains (${g.type==="all"?"All Types":Z(g.type)})`),{items:x,toggles:n,disabled:y}=H(()=>{const{blue:t,yellow:o}=b.value.colors;return[{id:"txs",label:"Transactions",color:t,togglable:!0},{id:"users",label:"Users",color:o,togglable:!0}]});function i(t){return t.groupBy(o=>o.chain).entries().map(([o,h])=>{const u=h.reduce((f,C)=>f+C.value,0);return{chain:o,count:u}}).orderBy(o=>o.count,"desc")}const a=l(()=>{const{colors:t}=b.value;return j({chart:{type:"bar",animations:{enabled:!1}},colors:[t.blue,t.yellow],xaxis:{categories:m.value,labels:{formatter:S}},yaxis:{labels:{formatter:B}},legend:{show:!1},dataLabels:{enabled:!1},tooltip:{enabled:!1}})}),d=l(()=>n.txs.value?i(g.txs):[]),v=l(()=>n.users.value?i(g.users):[]),m=l(()=>d.value.concat(v.value).orderBy(t=>t.count,"desc").map(t=>t.chain).uniq()),k=l(()=>{const t=m.value.map(h=>{const u=d.value.find(f=>f.chain===h);return u?u.count:0}),o=m.value.map(h=>{const u=v.value.find(f=>f.chain===h);return u?u.count:0});return[{data:n.txs.value?t:[]},{data:n.users.value?o:[]}]}),S=t=>t,B=t=>`${z(t,0,"dollar")}${I(t)}`;return(t,o)=>{const h=J,u=G,f=F;return U(),V(f,{title:e(c)},{"actions-secondary":T(()=>[r(h,{items:e(x),disabled:e(y),onToggle:o[0]||(o[0]=C=>e(n)[C].value=!e(n)[C].value)},null,8,["items","disabled"])]),default:T(()=>[r(u,{options:e(a),series:e(k)},null,8,["options","series"])]),_:1},8,["title"])}}}),Ce=q(xe,[["__scopeId","data-v-ce4cf7e7"]]),Te=D({__name:"ChartRankingTypes",props:{chain:{},txs:{},users:{}},setup(g){const b=W(),c=l(()=>`Top Types (${g.chain==="all"?"All Chains":Z(g.chain)})`),{items:x,toggles:n,disabled:y}=H(()=>{const{blue:t,yellow:o}=b.value.colors;return[{id:"txs",label:"Transactions",color:t,togglable:!0},{id:"users",label:"Users",color:o,togglable:!0}]});function i(t){return t.groupBy(o=>o.type).entries().map(([o,h])=>{const u=h.reduce((f,C)=>f+C.value,0);return{type:o,count:u}}).orderBy(o=>o.count,"desc")}const a=l(()=>{const{colors:t}=b.value;return j({chart:{type:"bar",animations:{enabled:!1}},colors:[t.blue,t.yellow],xaxis:{categories:m.value,labels:{formatter:S}},yaxis:{labels:{formatter:B}},legend:{show:!1},dataLabels:{enabled:!1},tooltip:{enabled:!1}})}),d=l(()=>n.txs.value?i(g.txs):[]),v=l(()=>n.users.value?i(g.users):[]),m=l(()=>d.value.concat(v.value).orderBy(t=>t.count,"desc").map(t=>t.type).uniq()),k=l(()=>{const t=m.value.map(h=>{const u=d.value.find(f=>f.type===h);return u?u.count:0}),o=m.value.map(h=>{const u=v.value.find(f=>f.type===h);return u?u.count:0});return[{data:n.txs.value?t:[]},{data:n.users.value?o:[]}]}),S=t=>t,B=t=>`${z(t,0,"dollar")}${I(t)}`;return(t,o)=>{const h=J,u=G,f=F;return U(),V(f,{title:e(c)},{"actions-secondary":T(()=>[r(h,{items:e(x),disabled:e(y),onToggle:o[0]||(o[0]=C=>e(n)[C].value=!e(n)[C].value)},null,8,["items","disabled"])]),default:T(()=>[r(u,{options:e(a),series:e(k)},null,8,["options","series"])]),_:1},8,["title"])}}}),we=q(Te,[["__scopeId","data-v-27837759"]]),$e={class:"option"},Se={class:"label"},Be=D({__name:"ActivityTypeSelect",emits:["select"],setup(g,{emit:b}){const c=b,x=["all",..._e],n=ue("all");function y(a){switch(a){case"all":return"All Types";case"crvusd":return"crvUSD";case"lending":return"Lending";case"pools":return"Pools";case"router":return"Router";case"dao":return"DAO"}}function i(a){n.value=a,c("select",n.value)}return(a,d)=>{const v=de;return U(),V(v,{options:x,selected:e(n),onSelect:i},{option:T(({option:m})=>[A("div",$e,[A("div",Se,pe(y(m)),1)])]),_:1},8,["selected"])}}}),Ae=q(Be,[["__scopeId","data-v-5448f8e1"]]),ke={class:"dashboard"},De={class:"toolbar"},Ue=D({__name:"Chains.page",setup(g){const b=E("chain"),c=l({get(){return b.value?b.value:"all"},set(s){b.value=s}}),x=l(()=>{const s=d.value.map(_=>_.chain).concat(m.value.map(_=>_.chain)).concat(c.value!=="all"?[c.value]:[]).uniq().orderBy(_=>_,"asc"),w=["ethereum"],$=s.difference(w).orderBy(_=>_,"asc");return["all",...w,...$]}),n=E("type"),y=l({get(){return n.value?n.value:"all"},set(s){n.value=s}}),i=s=>{y.value=s},{isFetching:a,data:d}=ce(),{isFetching:v,data:m}=ie();function k(s,w,$,_){return s.filter(p=>w==="all"?!0:p.chain===w).filter(p=>$==="all"?!0:p.type===$).groupBy(p=>p.timestamp.getTime()).entries().map(([p,L])=>{const R=L.reduce((P,ne)=>P+_(ne),0);return{timestamp:Number(p)/1e3,count:R}})}const S=l(()=>k(d.value,c.value,y.value,s=>s.transactions)),B=l(()=>k(m.value,c.value,y.value,s=>s.users));function t(s){const _=Math.floor(Date.now()/1e3)-7*24*60*60,L=s.filter(R=>R.timestamp>=_).reduce((R,P)=>R+P.count,0);return Math.round(L/7)}const o=l(()=>{var s;return((s=S.value.at(-1))==null?void 0:s.count)??0}),h=l(()=>t(S.value)),u=l(()=>{var s;return((s=B.value.at(-1))==null?void 0:s.count)??0}),f=l(()=>t(B.value));function C(s,w,$,_){return s.filter(p=>w==="all"?!0:p.chain===w).filter(p=>$==="all"?!0:p.type===$).map(p=>({chain:p.chain,type:p.type,value:_(p)}))}const ee=l(()=>C(d.value,"all",y.value,s=>s.transactions)),te=l(()=>C(m.value,"all",y.value,s=>s.users)),se=l(()=>C(d.value,c.value,"all",s=>s.transactions)),ae=l(()=>C(m.value,c.value,"all",s=>s.users));return(s,w)=>{const $=re,_=le,p=oe;return U(),me("div",ke,[A("div",De,[r(e(Ae),{style:{"grid-area":"type"},onSelect:i}),r($,{all:"",style:{"grid-area":"chain"},class:"chain-select",chain:e(c),chains:e(x),onSelectChain:w[0]||(w[0]=L=>c.value=L)},null,8,["chain","chains"])]),r(p,{style:{"grid-area":"kpi1"},label:"Transactions Today","has-value":!!e(a)},{default:T(()=>[r(_,{"show-zero":"",type:"dollar",value:e(o),"show-symbol":!1},null,8,["value"])]),_:1},8,["has-value"]),r(p,{style:{"grid-area":"kpi2"},label:"Avg Transactions / 7 Days","has-value":!!e(a)},{default:T(()=>[r(_,{"show-zero":"",type:"dollar",value:e(h),"show-symbol":!1},null,8,["value"])]),_:1},8,["has-value"]),r(p,{style:{"grid-area":"kpi3"},label:"Avg Users / 7 Days","has-value":!!e(v)},{default:T(()=>[r(_,{"show-zero":"",type:"dollar",value:e(u),"show-symbol":!1},null,8,["value"])]),_:1},8,["has-value"]),r(p,{style:{"grid-area":"kpi4"},label:"Users Today","has-value":!!e(v)},{default:T(()=>[r(_,{"show-zero":"",type:"dollar",value:e(f),"show-symbol":!1},null,8,["value"])]),_:1},8,["has-value"]),r(e(fe),{style:{"grid-area":"txs"},txs:e(S),loading:e(a)},null,8,["txs","loading"]),r(e(be),{style:{"grid-area":"users"},users:e(B),loading:e(v)},null,8,["users","loading"]),r(e(Ce),{style:{"grid-area":"top-chains"},type:e(y),txs:e(ee),users:e(te),loading:e(a)||e(v)},null,8,["type","txs","users","loading"]),r(e(we),{style:{"grid-area":"top-types"},chain:e(c),txs:e(se),users:e(ae),loading:e(a)||e(v)},null,8,["chain","txs","users","loading"])])}}}),Ye=q(Ue,[["__scopeId","data-v-be882189"]]);export{Ye as default};
