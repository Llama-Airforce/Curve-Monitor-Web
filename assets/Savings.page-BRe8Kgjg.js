import{_ as N}from"./KPI-DENPUeKz.js";import{_ as P}from"./AsyncValue-DZj9Bxdz.js";import{t as b,g as $,f as C,a as Y}from"./timestamp-Dfir0V72.js";import{u as T}from"./useQuery-jfAWU074.js";import{a8 as O,d as h,T as V,U as D,f as q,V as A,h as w,o as y,w as _,a as u,b as i,u as t,_ as k,K as Q,X as H,t as v,i as S,e as B,c as z}from"./index-VA-IkcV_.js";import{u as E,b as F,c as j,_ as R,a as U}from"./UseLightweightChart-BS8D5Knx.js";import{r as K,u as J}from"./Number-DdxvjkFu.js";import{_ as M}from"./Table-DbqnzNGF.js";import{a as X,_ as G}from"./UsePagination-DEb_mPWO.js";import{u as Z}from"./UseRelativeTime-DR6oip5w.js";import"./Object-DOSYkgA0.js";const x=e=>({type:e.action_type,sender:e.sender,owner:e.owner,receiver:e.receiver?e.receiver:void 0,assets:BigInt(e.assets),supply:BigInt(e.shares),blockNumber:e.block_number,timestamp:b(e.timestamp),txHash:e.transaction_hash}),ee=e=>({timestamp:b(e.timestamp),assets:e.assets,supply:e.supply,apyProjected:Number(e.proj_apy)}),te=e=>({lastUpdated:b(e.last_updated),lastUpdatedBlock:e.last_updated_block,aprProjected:e.proj_apr,supply:e.supply});async function ae(e){const a=$(e),l=await C(`${a}/v1/crvusd/savings/statistics`);return te(l)}async function se(e,a){const l=$(a),p=await C(`${l}/v1/crvusd/savings/events?page=${e}&per_page=10`);return{count:p.count,events:p.events.map(x)}}async function ne(e=1,a="hour",l,p,c){const o=$(c),{start:n,end:g}=Y({daysRange:10});return(await C(`${o}/v1/crvusd/savings/yield?agg_number=${e}&agg_units=${a}&start=${n}&end=${g}`)).data.map(ee)}function re(){return{initialData:[],initialDataUpdatedAt:0}}function oe(){return T({queryKey:["scrvusd-stats"],queryFn:()=>ae()})}function ie(e){return T({queryKey:["scrvusd-events",e],queryFn:({queryKey:[,a]})=>se(a),placeholderData:O})}function W(){return T({queryKey:["scrvusd-yield"],queryFn:()=>ne(),...re()})}const ce={style:{display:"flex"}},le={ref:"chartRef",class:"chart"},pe=h({__name:"ChartTVL",setup(e){const{isFetching:a,data:l}=W(),p=V(),c=D("card"),{chart:o,series:n}=E({createChartOptions:j(),series:{type:"Area",name:"tvl",options:q(()=>({priceFormat:{type:"custom",formatter:s=>`$${K(s,1,"dollar")}${J(s)}`},lineWidth:2,lineType:F.WithSteps,lineColor:p.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});A(g);function g(){if(!o.value||!n.tvl)return;const s=l.value.map(r=>({time:r.timestamp.getUTCTimestamp(),value:r.assets})).uniqWith((r,d)=>r.time===d.time).orderBy(r=>r.time,"asc");s.length>0&&n.tvl.setData(s),o.value.timeScale().fitContent()}return(s,r)=>{const d=k;return y(),w(d,{ref_key:"card",ref:c,title:"TVL",loading:t(a)},{actions:_(()=>[u("div",ce,[i(t(R),{filename:"rates",series:t(n)},null,8,["series"]),i(t(U),{chart:t(o),target:t(c)},null,8,["chart","target"])])]),default:_(()=>[u("div",le,null,512)]),_:1},8,["loading"])}}}),ue={style:{display:"flex"}},de={ref:"chartRef",class:"chart"},_e=h({__name:"ChartYield",setup(e){const{isFetching:a,data:l}=W(),p=V(),c=D("card"),{chart:o,series:n}=E({createChartOptions:j(),series:{type:"Area",name:"apy",options:q(()=>({priceFormat:{type:"custom",formatter:s=>`${K(s,0,"percentage")}%`},lineWidth:2,lineType:F.WithSteps,lineColor:p.value.colors.blue,topColor:"rgb(32, 129, 240, 0.2)",bottomColor:"rgba(32, 129, 240, 0)",lastValueVisible:!1,priceLineVisible:!1}))}});A(g);function g(){if(!o.value||!n.apy)return;const s=l.value.map(r=>({time:r.timestamp.getUTCTimestamp(),value:r.apyProjected})).uniqWith((r,d)=>r.time===d.time).orderBy(r=>r.time,"asc");s.length>0&&n.apy.setData(s),o.value.timeScale().fitContent()}return(s,r)=>{const d=k;return y(),w(d,{ref_key:"card",ref:c,title:"Yield",loading:t(a)},{actions:_(()=>[u("div",ue,[i(t(R),{filename:"rates",series:t(n)},null,8,["series"]),i(t(U),{chart:t(o),target:t(c)},null,8,["chart","target"])])]),default:_(()=>[u("div",de,null,512)]),_:1},8,["loading"])}}}),me={class:"end"},ge=["href"],fe={class:"end"},he=["href"],ye=h({__name:"TableEvents",setup(e){const{page:a,onPage:l}=X(),p=Q(a,200),{isFetching:c,data:o}=ie(p),{relativeTime:n}=Z();return(g,s)=>{const r=G,d=P,I=M,L=k;return y(),w(L,{title:"Events",loading:t(c)},{actions:_(()=>{var f;return[i(r,{"items-count":((f=t(o))==null?void 0:f.count)??0,"items-per-page":10,page:t(a),onPage:t(l)},null,8,["items-count","page","onPage"])]}),default:_(()=>{var f;return[i(I,{loading:t(c),rows:((f=t(o))==null?void 0:f.events)??[],columns:["Type",{label:"Amount",align:"end"},"Owner",{label:"Time",align:"end"}]},{row:_(({item:m})=>[u("div",{class:H(["type",{green:m.type==="deposit",red:m.type==="withdraw"}])},v(m.type),3),u("div",me,[i(d,{value:Number(m.assets)/10**18,precision:0},null,8,["value"])]),u("div",null,[u("a",{target:"_blank",href:`https://etherscan.io/address/${m.owner}`,onClick:s[0]||(s[0]=S(()=>{},["stop"]))},v(m.owner),9,ge)]),u("div",fe,[u("a",{target:"_blank",href:`https://etherscan.io/tx/${m.txHash}`,onClick:s[1]||(s[1]=S(()=>{},["stop"]))},v(t(n)(m.timestamp.getUTCTimestamp())),9,he)])]),_:1},8,["loading","rows"])]}),_:1},8,["loading"])}}}),ve=B(ye,[["__scopeId","data-v-9b4d465d"]]),be={class:"dashboard"},$e=h({__name:"Savings.page",setup(e){const{data:a}=oe();return(l,p)=>{const c=P,o=N;return y(),z("div",be,[i(o,{style:{"grid-area":"kpi1"},label:"APR (Projected)","has-value":!!t(a)},{default:_(()=>{var n;return[i(c,{type:"percentage",value:(n=t(a))==null?void 0:n.aprProjected},null,8,["value"])]}),_:1},8,["has-value"]),i(o,{style:{"grid-area":"kpi2"},label:"Shares","has-value":!!t(a)},{default:_(()=>{var n;return[i(c,{value:(n=t(a))==null?void 0:n.supply},null,8,["value"])]}),_:1},8,["has-value"]),i(ve,{style:{"grid-area":"events"}}),i(_e,{style:{"grid-area":"yield"}}),i(pe,{style:{"grid-area":"tvl"}})])}}}),Ee=B($e,[["__scopeId","data-v-d3c76d88"]]);export{Ee as default};
