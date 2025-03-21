import{_ as R}from"./KPI-DKNNQWeY.js";import{_ as I}from"./AsyncValue-BrxM0dB4.js";import{_ as U}from"./SelectChain-DkdlWUBp.js";import{_ as x}from"./InputText-PEq0sSRg.js";import{u as N}from"./chains-CphmGk_h.js";import{u as z}from"./pools-BK3Jf1b9.js";import{d as L,f as S,h as k,o as b,w as d,b as a,u as o,a as _,c as $,F as A,l as q,t as E,_ as Q,e as B,r as D,a4 as K,a5 as O,$ as j,O as G}from"./index-5B2tI7Zc.js";import{_ as H}from"./Table-Br42HHVv.js";import{_ as J}from"./TokenIcon-SHuc7s7h.js";import{_ as M}from"./IconExpander-xZLtL_3V.js";import{u as W,_ as X}from"./UsePagination-Bav67_-y.js";import{u as Y}from"./UseSort-DEAzAtGD.js";import{a as Z}from"./index-BuXzwwaP.js";import"./Number-Bqyeu7gj.js";import"./ChainIcon-DimsDjU6.js";import"./timestamp-Dfir0V72.js";import"./useQuery-Ds_Sub25.js";import"./UseHost-Ca9zgvDG.js";const ee={class:"tokens"},oe={class:"end"},ae={class:"end"},te={class:"end"},F=20,se=L({__name:"TablePools",props:{chain:{},pools:{}},emits:["select"],setup(C,{emit:y}){const h=y,l=["","",{id:"name",label:"Name",sort:!0},{id:"volume",label:"Volume (24h)",sort:!0,align:"end"},{id:"tvl",label:"TVL",sort:!0,align:"end"},{id:"util",label:"Util",sort:!0,align:"end"}],{sorting:r,onSort:m}=Y("tvl"),p=S(()=>C.pools.orderBy(t=>{switch(r.value.column){case"name":return t.name;case"volume":return t.tradingVolume24h;case"tvl":return t.tvlUsd;case"util":return g(t)}},r.value.order)),{page:P,rowsPage:w,onPage:V}=W(p,F);function g(t){return t.tvlUsd!==0?100*t.tradingVolume24h/t.tvlUsd:0}return(t,f)=>{const s=X,n=M,v=J,u=I,i=H,c=Q;return b(),k(c,{title:"Pools"},{actions:d(()=>[a(s,{"items-count":t.pools.length,"items-per-page":F,page:o(P),onPage:o(V)},null,8,["items-count","page","onPage"])]),default:d(()=>[a(i,{class:"pools-table",rows:o(w),columns:l,sorting:o(r),onSortColumn:o(m),onSelect:f[0]||(f[0]=e=>h("select",e))},{row:d(({item:e})=>[a(n),_("div",ee,[(b(!0),$(A,null,q(e.coins,T=>(b(),k(v,{key:T.address,chain:t.chain,address:T.address},null,8,["chain","address"]))),128))]),_("div",null,E(e.name),1),_("div",oe,[a(u,{"show-zero":"",type:"dollar",value:e.tradingVolume24h,precision:2},null,8,["value"])]),_("div",ae,[a(u,{"show-zero":"",type:"dollar",value:e.tvlUsd,precision:2},null,8,["value"])]),_("div",te,[a(u,{"show-zero":"",type:"percentage",value:g(e),precision:2},null,8,["value"])])]),_:1},8,["rows","sorting","onSortColumn"])]),_:1})}}}),ne=B(se,[["__scopeId","data-v-fb7b5f9c"]]),le={class:"dashboard"},re={class:"toolbar"},ue=L({__name:"Pools.page",setup(C){const y=["ethereum","arbitrum"],h=Z("chain"),l=S({get(){return h.value?h.value:"ethereum"},set(s){h.value=s}}),r=D(""),{isFetching:m,data:p}=N(l),{isFetching:P,data:w}=z(l),V=S(()=>{var s;return(((s=w.value)==null?void 0:s.pools)??[]).filter(n=>{const v=r.value.toLocaleLowerCase().split(" "),u=i=>v.some(c=>i.toLocaleLowerCase().includes(c));return u(n.name)||u(n.address)})}),{crumbs:g}=K(O());g.value=[{id:"pools",label:"Pools",pathName:"pools"},{id:"pool",label:"Select pool for details",hint:!0}];const t=j(),f=async s=>{await t.push({name:"poolspool",params:{tab:"",chain:l.value,poolAddr:s.address}})};return(s,n)=>{const v=x,u=U,i=I,c=R;return b(),$("div",le,[_("div",re,[a(v,{modelValue:o(r),"onUpdate:modelValue":n[0]||(n[0]=e=>G(r)?r.value=e:null),search:"",placeholder:"Search for..."},null,8,["modelValue"]),a(u,{class:"chain-select",chain:o(l),chains:y,onSelectChain:n[1]||(n[1]=e=>l.value=e==="all"?"ethereum":e)},null,8,["chain"])]),a(c,{style:{"grid-area":"kpi1"},label:"TVL","has-value":!o(m)},{default:d(()=>{var e;return[a(i,{type:"dollar",value:((e=o(p))==null?void 0:e.total.tvl)??0},null,8,["value"])]}),_:1},8,["has-value"]),a(c,{style:{"grid-area":"kpi2"},label:"Volume (24h)","has-value":!o(m)},{default:d(()=>{var e;return[a(i,{type:"dollar",value:((e=o(p))==null?void 0:e.total.tradingVolume24h)??0},null,8,["value"])]}),_:1},8,["has-value"]),a(c,{style:{"grid-area":"kpi3"},label:"Fees Trading (24h)","has-value":!o(m)},{default:d(()=>{var e;return[a(i,{type:"dollar",value:((e=o(p))==null?void 0:e.total.tradingFee24h)??0},null,8,["value"])]}),_:1},8,["has-value"]),a(c,{style:{"grid-area":"kpi4"},label:"Fees Liquidity (24h)","has-value":!o(m)},{default:d(()=>{var e;return[a(i,{type:"dollar",value:((e=o(p))==null?void 0:e.total.liquidityFee24h)??0},null,8,["value"])]}),_:1},8,["has-value"]),a(ne,{style:{"grid-area":"pools"},chain:o(l),pools:o(V),loading:o(P),onSelect:f},null,8,["chain","pools","loading"])])}}}),ke=B(ue,[["__scopeId","data-v-de200a3b"]]);export{ke as default};
