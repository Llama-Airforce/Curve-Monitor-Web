import{d as V,r as f,e as C,o as _,w as $,f as u,i as N,u as e,a3 as F,_ as k,K as w,c as g,a as y,b as o,O as L,V as E,F as R,l as K,T as O,R as Q}from"./index-jdaCXud5.js";import{a as U,_ as j}from"./UsePagination-Dt-JkOaD.js";import{_ as q}from"./InputText-CGD-N7Rv.js";import{_ as G,a as H}from"./TabItem.vue_vue_type_script_setup_true_lang-CA7alEk7.js";import{c as J}from"./proposal-CUg3_dbr.js";import{P as M}from"./Proposal-BMa4-fLs.js";import{c as W}from"./String-TwmdtJxb.js";import"./getAction-yclJLzjk.js";import"./Number-DDdUpen7.js";import"./useQuery-bzXZhUsG.js";import"./timestamp-C4C6eGnP.js";import"./KPI-CO-PoAwb.js";import"./link-D1jE5XEQ.js";import"./AsyncValue-BdFX5jU8.js";import"./writeContract-r7gNYqN3.js";const X=["all","ownership","parameter","other"],Y={class:"option"},Z={class:"label"},ee=V({__name:"ProposalTypeSelect",emits:["select"],setup(B,{emit:d}){const c=d,m=[...X].filter(s=>s!=="other"),p=f("all"),a=s=>{p.value=s,c("select",p.value)};return(s,h)=>{const v=F;return _(),C(v,{options:e(m).map(r=>r),selected:e(p),onSelect:a},{option:$(({option:r})=>[u("div",Y,[u("div",Z,N(("capitalize"in s?s.capitalize:e(W))(r)),1)])]),_:1},8,["options","selected"])}}}),oe=k(ee,[["__scopeId","data-v-40150856"]]),se={class:"dashboard"},te={class:"filters"},ae={style:{display:"flex",gap:"1rem","flex-wrap":"wrap"}},ne={class:"proposals-content"},le={key:0},ce=V({__name:"Proposals.page",setup(B){const d=f(0),{page:c,onPage:m}=U(),p=w(c,200),a=f(""),s=w(a,300),h=f("all"),v=g(()=>{switch(d.value){case 0:return"all";case 1:return"active";case 2:return"passed";case 3:return"denied";case 4:return"executed";default:return"all"}}),r=g(()=>s.value.toLocaleLowerCase()),P=g(()=>{var t;return((t=T.value)==null?void 0:t.count)??0}),S=g(()=>{var t;return(((t=T.value)==null?void 0:t.proposals)??[]).orderBy(n=>n.start,"desc")}),{isFetching:b,data:T}=J(p,h,v,r),D=t=>{h.value=t};return(t,n)=>{const i=G,z=H,A=q,x=j,I=Q;return _(),y("div",se,[o(z,{onTab:n[0]||(n[0]=l=>d.value=l.index)},{default:$(()=>[o(i,{header:"All"}),o(i,{header:"Active"}),o(i,{header:"Passed"}),o(i,{header:"Denied"}),o(i,{header:"Executed"})]),_:1}),u("div",te,[o(A,{modelValue:e(a),"onUpdate:modelValue":n[1]||(n[1]=l=>L(a)?a.value=l:null),search:"",placeholder:"Search for Curve proposals"},null,8,["modelValue"]),u("div",ae,[o(oe,{style:{"flex-grow":"1"},onSelect:D}),o(x,{class:"pagination","items-count":e(P),"items-per-page":10,page:e(c),onPage:e(m)},null,8,["items-count","page","onPage"])])]),u("div",ne,[(_(!0),y(R,null,K(e(S),l=>(_(),C(M,{key:l.id,class:O(["loading-backdrop",{loading:e(b)}]),proposal:l},null,8,["proposal","class"]))),128)),o(x,{class:"pagination","items-count":e(P),"items-per-page":10,page:e(c),onPage:e(m)},null,8,["items-count","page","onPage"]),e(S).length===0?(_(),y("div",le,"No proposals could be found.")):E("",!0),o(I,{loading:e(b)},null,8,["loading"])])])}}}),Te=k(ce,[["__scopeId","data-v-a5702901"]]);export{Te as default};
