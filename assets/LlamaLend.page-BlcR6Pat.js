import{_ as F}from"./KPI-DKNNQWeY.js";import{_ as U}from"./AsyncValue-BrxM0dB4.js";import{_ as O}from"./SelectChain-DkdlWUBp.js";import{_ as z}from"./InputText-PEq0sSRg.js";import{c as E,d as Q}from"./llamalend-CM0Oq6Q9.js";import{d as N,r as M,f as $,h as k,o as v,w as m,u as n,a as d,b as i,t as I,c as P,W as T,F as x,_ as K,e as D,a4 as W,a5 as j,$ as q,O as G}from"./index-5B2tI7Zc.js";import{_ as H}from"./NoData-M5chm4Nj.js";import{_ as J}from"./Table-Br42HHVv.js";import{_ as X}from"./TokenIcon-SHuc7s7h.js";import{_ as Y}from"./IconExpander-xZLtL_3V.js";import{a as Z,_ as ee}from"./TabItem.vue_vue_type_script_setup_true_lang-CCGJjABq.js";import{t as S}from"./util-M70Hx2OY.js";import{u as ae}from"./UseSort-DEAzAtGD.js";import{a as oe}from"./index-BuXzwwaP.js";import"./Number-Bqyeu7gj.js";import"./ChainIcon-DimsDjU6.js";import"./timestamp-Dfir0V72.js";import"./useQuery-Ds_Sub25.js";const te={class:"end"},ne={class:"end"},se={class:"end"},le={class:"end"},re={class:"end"},ie={class:"end"},ue=N({__name:"TableMarkets",props:{pairs:{},loading:{type:Boolean},chain:{}},emits:["select"],setup(A,{emit:w}){const _=w,h=["","","Name",{id:"borrow",label:"Borrow Rate",align:"end",sort:!0},{id:"lend",label:"Lend Rate",align:"end",sort:!0},{id:"tvl",label:"TVL",align:"end",sort:!0},{id:"loans",label:"Loans",align:"end",sort:!0}],{sorting:f,onSort:C}=ae("tvl"),c=M("long");function B(t){t===0?c.value="long":t===1?c.value="short":c.value="long"}const y=$(()=>A.pairs.map(({long:t,short:s})=>c.value==="long"?t:s).filter(t=>!!t).orderBy(t=>{switch(f.value.column){case"borrow":return t.apyBorrow;case"lend":return t.apyLend;case"tvl":return S(t);case"loans":return t.nLoans}},f.value.order));function R(t){return t.name.replace(/(-long|-short)/i,"")}const V=t=>c.value==="long"?t.collateralToken.address:t.borrowedToken.address;return(t,s)=>{const L=ee,l=Z,a=Y,r=X,u=U,o=J,p=H,g=K;return v(),k(g,{title:"Markets",loading:t.loading},{actions:m(()=>[i(l,{class:"types",onTab:s[0]||(s[0]=e=>B(e.index))},{default:m(()=>[i(L,{header:"Long"}),i(L,{header:"Short"})]),_:1})]),default:m(()=>[n(y).length>0?(v(),k(o,{key:0,class:"markets-table",rows:n(y),columns:h,sorting:n(f),onSortColumn:n(C),onSelect:s[1]||(s[1]=e=>_("select",e))},{row:m(({item:e})=>[e?(v(),P(x,{key:0},[i(a),i(r,{chain:t.chain,address:V(e)},null,8,["chain","address"]),d("div",null,I(R(e)),1),d("div",te,[e.apyBorrow?(v(),k(u,{key:0,type:"percentage",value:e.apyBorrow},null,8,["value"])):T("",!0)]),d("div",ne,[e.apyLend?(v(),k(u,{key:0,type:"percentage",value:e.apyLend},null,8,["value"])):T("",!0)]),d("div",se,[n(S)(e)?(v(),k(u,{key:0,type:"dollar",value:n(S)(e)},null,8,["value"])):T("",!0)]),d("div",le,I(e.nLoans),1)],64)):T("",!0)]),"row-aggregation":m(()=>[s[2]||(s[2]=d("div",null,null,-1)),s[3]||(s[3]=d("div",null,null,-1)),s[4]||(s[4]=d("div",null,null,-1)),s[5]||(s[5]=d("div",null,null,-1)),s[6]||(s[6]=d("div",null,null,-1)),d("div",re,[i(u,{type:"dollar",value:n(y).filter(e=>e).map(e=>e).reduce((e,b)=>e+n(S)(b),0)},null,8,["value"])]),d("div",ie,I(n(y).filter(e=>e).map(e=>e).reduce((e,b)=>e+b.nLoans,0)),1)]),_:1},8,["rows","sorting","onSortColumn"])):(v(),k(p,{key:1,message:`There are no ${n(c)} markets for ${t.chain}`},null,8,["message"]))]),_:1},8,["loading"])}}}),de=D(ue,[["__scopeId","data-v-6d0478f9"]]),ce={class:"dashboard"},pe={class:"toolbar"},me=N({__name:"LlamaLend.page",setup(A){const w=oe("chain"),_=$({get(){return w.value?w.value:"ethereum"},set(l){w.value=l}}),h=M(""),f=$(()=>C.value.filter(({long:l,short:a})=>{const r=h.value.toLocaleLowerCase().split(" ");return(o=>r.some(p=>o.toLocaleLowerCase().includes(p)))(`${(l==null?void 0:l.name)??""}${(a==null?void 0:a.name)??""}`)})),C=$(()=>{const l=["crvusd"],a=(B.value??[]).map(o=>({market:o,isLong:l.includes(o.borrowedToken.symbol.toLocaleLowerCase()),isShort:l.includes(o.collateralToken.symbol.toLocaleLowerCase())})).filter(({isLong:o,isShort:p})=>o||p),r=[],u=new Set;for(const{market:o,isLong:p,isShort:g}of a){if(u.has(o.controller))continue;u.add(o.controller);const e=a.find(b=>b.market.borrowedToken.address===o.collateralToken.address&&b.market.collateralToken.address===o.borrowedToken.address);e&&u.add(e.market.controller),r.push({long:p?o:e==null?void 0:e.market,short:g?o:e==null?void 0:e.market})}return r}),{isFetching:c,data:B}=E(_),{data:y}=Q(),{crumbs:R}=W(j());R.value=[{id:"llamalend",label:"Llama Lend",pathName:"llamalend",params:()=>({chain:_.value})},{id:"market",label:"Select market for details",hint:!0}];const V=q(),t=async l=>{l&&await V.push({name:"llamalendmarket",params:{tab:"",chain:_.value,marketAddr:l.controller}})},s=l=>f.value.map(a=>l==="long"?a.long:a.short).filter(a=>!!a).reduce((a,r)=>a+r.totalDebtUsd,0),L=l=>{const a=f.value.map(r=>l==="long"?r.long:r.short).filter(r=>!!r).reduce(({debt:r,assets:u},o)=>({debt:r+o.totalDebtUsd,assets:u+o.totalAssetsUsd}),{debt:0,assets:0});return a.assets===0?0:a.debt/a.assets*100};return(l,a)=>{const r=z,u=O,o=U,p=F;return v(),P("div",ce,[d("div",pe,[i(r,{modelValue:n(h),"onUpdate:modelValue":a[0]||(a[0]=g=>G(h)?h.value=g:null),search:"",placeholder:"Search for..."},null,8,["modelValue"]),i(u,{class:"chain-select",chain:n(_),chains:n(y),onSelectChain:a[1]||(a[1]=g=>_.value=g==="all"?"ethereum":g)},null,8,["chain","chains"])]),i(p,{style:{"grid-area":"kpi1"},label:"Open Interest (long)","has-value":!n(c)},{default:m(()=>[i(o,{type:"dollar",value:s("long")},null,8,["value"])]),_:1},8,["has-value"]),i(p,{style:{"grid-area":"kpi2"},label:"Open Interest (short)","has-value":!n(c)},{default:m(()=>[i(o,{type:"dollar",value:s("short")},null,8,["value"])]),_:1},8,["has-value"]),i(p,{style:{"grid-area":"kpi3"},"tooltip-type":"icon",label:"Average Utilization Rate (long)",tooltip:"Aggregate debt divided by aggregate assets","has-value":!n(c)},{default:m(()=>[i(o,{type:"percentage",value:L("long")},null,8,["value"])]),_:1},8,["has-value"]),i(p,{style:{"grid-area":"kpi4"},"tooltip-type":"icon",label:"Average Utilization Rate (short)",tooltip:"Aggregate debt divided by aggregate assets","has-value":!n(c)},{default:m(()=>[i(o,{type:"percentage",value:L("short")},null,8,["value"])]),_:1},8,["has-value"]),i(n(de),{style:{"grid-area":"markets"},pairs:n(f),loading:n(c),chain:n(_),onSelect:t},null,8,["pairs","loading","chain"])])}}}),Ae=D(me,[["__scopeId","data-v-9299ad95"]]);export{Ae as default};
