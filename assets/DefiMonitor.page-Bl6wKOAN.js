var ke=Object.defineProperty;var we=(n,e,s)=>e in n?ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var W=(n,e,s)=>we(n,typeof e!="symbol"?e+"":e,s);import{_ as ge,a as ye}from"./TabItem.vue_vue_type_script_setup_true_lang-Dc4_KzbI.js";import{q as $e,ad as te,f as A,N as U,aB as Se,bw as ne,d as I,r as C,c as B,o as y,a as t,b as v,bx as Ae,w as $,F as Te,l as xe,h as x,j as P,t as k,u as _,_ as q,e as L,I as Ce,J as Ie,X as Le,Y as Ve,a3 as oe,i as H,O as E,by as G,W as F,k as Be,S as ae,Q as se,a2 as j}from"./index-VA-IkcV_.js";import{_ as De}from"./AsyncValue-DZj9Bxdz.js";import{_ as re,S as Ue,a as Fe,o as Ne,u as Pe,c as le}from"./Helper-BzW-fPbV.js";import{u as Ee}from"./useQuery-jfAWU074.js";import{u as K}from"./UseRelativeTime-DR6oip5w.js";import{_ as M}from"./Table-DbqnzNGF.js";import{_ as O}from"./TokenIcon-oyUNg5F3.js";import{_ as ce}from"./InputNumber-BHfdT1Sk.js";import{u as ie,_ as de}from"./UsePagination-DEb_mPWO.js";import{_ as ee}from"./InputText-BuhcI20P.js";import{L as Me}from"./link-DXtKrWBq.js";import{u as Qe}from"./UseTabNavigation-BO-EhJC-.js";import"./Number-DdxvjkFu.js";import"./index-DrVc10qv.js";/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=$e("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function Re(n,e,s,l,d){return new qe(n,e,s,l,d)}var qe=function(n){re(e,n);function e(s,l,d,a,u,f){var o=n.call(this,s)||this;return o.onFinalize=u,o.shouldUnsubscribe=f,o._next=l?function(i){try{l(i)}catch(p){s.error(p)}}:n.prototype._next,o._error=a?function(i){try{a(i)}catch(p){s.error(p)}finally{this.unsubscribe()}}:n.prototype._error,o._complete=d?function(){try{d()}catch(i){s.error(i)}finally{this.unsubscribe()}}:n.prototype._complete,o}return e.prototype.unsubscribe=function(){var s;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var l=this.closed;n.prototype.unsubscribe.call(this),!l&&((s=this.onFinalize)===null||s===void 0||s.call(this))}},e}(Ue),He=function(n){re(e,n);function e(s){var l=n.call(this)||this;return l._value=s,l}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(s){var l=n.prototype._subscribe.call(this,s);return!l.closed&&s.next(this._value),l},e.prototype.getValue=function(){var s=this,l=s.hasError,d=s.thrownError,a=s._value;if(l)throw d;return this._throwIfClosed(),a},e.prototype.next=function(s){n.prototype.next.call(this,this._value=s)},e}(Fe);function z(n,e){return Ne(function(s,l){var d=0;s.subscribe(Re(l,function(a){return n.call(e,a,d++)&&l.next(a)}))})}let J;function ue(){return J||(J=Pe({url:"wss://api.defimonitor.com/main"})),J}class Oe{constructor(e,s){W(this,"transfers$");this.socket=e,s!=null&&s.transfers$?this.transfers$=s.transfers$:this.transfers$=le(e,"NewTransfersForToken")}sub(e){Array.isArray(e)?e.length>0&&this.socket.emit("connectToGeneralErc20ArrayLivestream",e):this.socket.emit("connectToGeneralErc20Livestream",e)}unsub(e){const s=Array.isArray(e)?e:[e];for(const l of s)this.socket.emit("disconnectFromGeneralErc20Livestream",l)}}const X={};function We(n="$llama$"){X[n]||(X[n]=0);const e=++X[n];return n==="$llama$"?`${e}`:`${n}${e}`}const N=new Map,_e=new He(void 0),R=n=>JSON.stringify(n);function pe({queryKey:n,queryFn:e,enabled:s,observable:l,setQueryData:d,keepData:a}){const u=te(),f=A(()=>s.value&&!!l.value),o=Ee({queryKey:n,queryFn:()=>new Promise((i,p)=>{u.setQueryData(n.value,void 0);const m=R(n.value);let h=N.get(m);const c=h==null?void 0:h.subscription;c==null||c.unsubscribe(),h={subscription:l.value.subscribe({next:r=>{const w=u.getQueryData(n),T=d(w,r);u.setQueryData(n.value,T),i(T)},error:r=>{p(r instanceof Error?r:new Error(String(r)))}}),users:new Set},N.set(m,h),_e.next({queryKeyString:m,record:h}),e()}),enabled:f,staleTime:1/0});return je({queryKey:n,enabled:f,keepData:a,observable:l}),o}function je({queryKey:n,enabled:e,observable:s,keepData:l}){const d=te(),a=We(),u=_e.pipe(z(()=>e.value),z(i=>i!==void 0),z(i=>i.queryKeyString===R(n.value))).subscribe(i=>{i.record.users.add(a)});U(e,async i=>{if(!i)await f(n.value);else{const p=R(n.value),m=N.get(p);m&&m.users.add(a)}}),U(n,async(i,p)=>{await f(p)}),U(s,async(i,p)=>{p&&i!==p&&await o(n.value)}),Se(async()=>{await f(n.value),u.unsubscribe()});async function f(i){const p=R(i),m=N.get(p);m&&(m.users.delete(a),m.users.size===0&&(m.subscription.unsubscribe(),N.delete(p),await o(i)))}async function o(i){await d.cancelQueries({queryKey:i}),await d.invalidateQueries({queryKey:i}),d.setQueryData(i,void 0)}return f}function me(n){const e=A(()=>Array.isArray(n.value)?n.value:[n.value]),{socket:s,isConnected:l,url:d}=ue(),a=A(()=>s.value?new Oe(s.value):null),u=A(()=>["defimonitor-transfers",d.value,...e.value]);return ne(e,(o,i,p,m)=>{var h;(h=a.value)==null||h.unsub(m)},{deep:!0}),pe({queryKey:u,queryFn:()=>{var o;return(o=a.value)==null?void 0:o.sub(n.value)},enabled:l,observable:A(()=>{var o;return(o=a.value)==null?void 0:o.transfers$}),setQueryData:(o,i)=>[...o??[],...i.transfers.flat()].takeRight(200),keepData:!1})}const ze={class:"dashboard-grid"},Je={class:"transfers"},Xe={class:"card-transfer"},Ye={class:"block"},Ze=["href"],Ke={class:"time"},es={class:"numbers"},ss={class:"value"},ts={class:"value"},ns=I({__name:"CrvUsd",setup(n){const{data:e}=me(C("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")),{relativeTime:s}=K(),l=A(()=>(e.value??[]).groupBy(d=>d.blockNumber).entries().map(([,d])=>({blockNumber:d[0].blockNumber,blockUnixTime:d[0].blockUnixtime,amount:d.reduce((a,u)=>a+u.parsedAmount,0),count:d.length})).orderBy(d=>d.blockNumber,"desc").take(5));return(d,a)=>{const u=De,f=q;return y(),B("div",ze,[t("div",Je,[a[3]||(a[3]=t("div",{class:"title"},"Latest crvUSD transactions",-1)),v(Ae,{name:"transfers",tag:"div",class:"transfer-list"},{default:$(()=>[(y(!0),B(Te,null,xe(_(l),o=>(y(),x(f,{key:o.blockNumber},{default:$(()=>[t("div",Xe,[t("div",Ye,[a[0]||(a[0]=P(" Block ")),t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/block/${o.blockNumber}`},k(o.blockNumber),9,Ze)]),t("div",Ke,k(_(s)(o.blockUnixTime)),1),t("div",es,[t("div",ss,[v(u,{type:"dollar",value:o.amount},null,8,["value"])]),a[1]||(a[1]=t("div",{class:"label"},"crvUSD transfered",-1)),t("div",ts,k(o.count),1),a[2]||(a[2]=t("div",{class:"label"},"crvUSD transactions",-1))])])]),_:2},1024))),128))]),_:1})])])}}}),os=L(ns,[["__scopeId","data-v-f9c4dbf0"]]);class as{constructor(e,s){W(this,"swaps$");this.socket=e,this.swaps$=(s==null?void 0:s.swaps$)??le(e,"NewSwapDataForAddress")}sub(e){Array.isArray(e)?e.length>0&&this.socket.emit("connectToGeneralErc20SwapArrayLivestream",e):this.socket.emit("connectToGeneralErc20SwapLivestream",e)}unsub(e){const s=Array.isArray(e)?e:[e];for(const l of s)this.socket.emit("disconnectFromGeneralErc20SwapLivestream",l)}}function rs(n){const e=A(()=>Array.isArray(n.value)?n.value:[n.value]),{socket:s,isConnected:l,url:d}=ue(),a=A(()=>s.value?new as(s.value):null),u=A(()=>["defimonitor-swaps",d.value,e.value]);return ne(e,(o,i,p,m)=>{var h;(h=a.value)==null||h.unsub(m)},{deep:!0}),pe({queryKey:u,queryFn:()=>{var o;return(o=a.value)==null?void 0:o.sub(n.value)},enabled:l,observable:A(()=>{var o;return(o=a.value)==null?void 0:o.swaps$}),setQueryData:(o,i)=>[...o??[],...i.swaps.flat()].takeRight(200),keepData:!1})}const ls={class:"checkbox"},cs=["checked"],is=["aria-checked"],ds={class:"checkmark-label"},us=I({__name:"Checkbox",props:{modelValue:{type:Boolean,required:!0},modelModifiers:{}},emits:Ce(["change"],["update:modelValue"]),setup(n,{emit:e}){const s=Ie(n,"modelValue"),l=e,d=a=>{const u=a.target.checked;s.value=u,l("change",u)};return(a,u)=>(y(),B("label",ls,[t("input",{type:"checkbox",checked:s.value,onChange:d},null,40,cs),t("span",{class:Le(["checkmark",{checked:s.value}]),role:"checkbox","aria-checked":s.value},u[0]||(u[0]=[t("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M20 6L9 17L4 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),10,is),t("span",ds,[Ve(a.$slots,"default",{},void 0,!0)])]))}}),fe=L(us,[["__scopeId","data-v-39008b36"]]);function ve(){return[{name:"Stables",type:"token",items:[{address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",symbol:"USDT"},{address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",symbol:"USDC"}]},{name:"Sky",type:"token",items:[{address:"0x6b175474e89094c44da98b954eedeac495271d0f",symbol:"DAI"}]}]}function _s(){return{name:"1inch",type:"swapper",items:[{address:"0x111111125421ca6dc452d289314280a0f8842a65",name:"1inch V6"},{address:"0x1111111254eeb25477b68fb85ed929f73a960582",name:"1inch V5"}]}}const ps={class:"watchlist"},ms={class:"option"},fs=I({__name:"WatchlistSwappers",emits:["swappers"],setup(n,{emit:e}){const s=e,l=[_s()],d=C(l[0]),a=A(()=>d.value.items),u=C(new Set(a.value.map(o=>o.address))),f=o=>{u.value.has(o)?u.value.delete(o):u.value.add(o)};return U(u,o=>{s("swappers",a.value.filter(i=>o.has(i.address)))},{immediate:!0,deep:!0}),U(d,()=>{u.value=new Set(a.value.map(o=>o.address))}),(o,i)=>{const p=oe,m=fe,h=M;return y(),B("div",ps,[v(p,{options:l,selected:_(d),onSelect:i[0]||(i[0]=c=>d.value=c)},{option:$(({option:{name:c}})=>[t("div",ms,k(c),1)]),_:1},8,["selected"]),v(h,{rows:_(a),onSelect:i[2]||(i[2]=c=>f(c.address))},{row:$(({item:{address:c,name:r}})=>[t("div",null,k(r??"?"),1),t("div",{class:"center",onClick:i[1]||(i[1]=H(()=>{},["stop"]))},[v(m,{"model-value":_(u).has(c),"onUpdate:modelValue":w=>f(c)},null,8,["model-value","onUpdate:modelValue"])])]),_:1},8,["rows"])])}}}),vs=L(fs,[["__scopeId","data-v-1d00dc8f"]]),hs={style:{display:"flex",gap:"1rem"}},bs={class:"swaps-card-body"},ks={class:"swaps-options"},ws={class:"option"},gs={class:"option"},ys={class:"center-vert"},$s=["href"],Ss=["href"],As=["href"],Ts=["href"],xs={class:"center-vert"},Cs=["href"],Is={class:"center-vert"},Ls=["href"],Vs={class:"end"},Bs=["href"],Y=10,Ds=I({__name:"TableSwaps",setup(n){const e=C([]),s=C(0),l=A(()=>{const c=s.value;return typeof c=="string"?parseFloat(c)||0:c||0}),{data:d,isFetching:a}=rs(A(()=>e.value.map(c=>c.address))),{relativeTime:u}=K(),f=C(""),o=A(()=>(d.value??[]).filter(c=>{const r=f.value.toLocaleLowerCase().split(" "),w=V=>r.some(S=>V.toLocaleLowerCase().includes(S)),T=c.parsedBeforeAmount>=l.value||c.parsedAfterAmount>=l.value;return(w(c.coinAfterAddress)||w(c.coinAfterSymbol)||w(c.coinBeforeAddress)||w(c.coinBeforeSymbol))&&T}).orderBy([c=>c.blockUnixtime,c=>c.positionInBlock],"desc")),{page:i,rowsPage:p,onPage:m}=ie(o,Y),h=c=>c<1?c.toFixed(4):c>1e3?c.toFixed(0):c.toFixed(2);return(c,r)=>{const w=ee,T=de,V=ce,S=O,D=M,Q=q;return y(),x(Q,{class:"swaps-card",title:"Swaps",loading:_(a)},{actions:$(()=>[t("div",hs,[v(w,{modelValue:_(f),"onUpdate:modelValue":r[0]||(r[0]=b=>E(f)?f.value=b:null),search:"",placeholder:"Search for..."},null,8,["modelValue"]),_(o).length>Y?(y(),x(T,{key:0,"items-count":_(o).length,"items-per-page":Y,page:_(i),onPage:_(m)},null,8,["items-count","page","onPage"])):F("",!0)])]),default:$(()=>[t("div",bs,[t("div",ks,[t("div",ws,[r[4]||(r[4]=t("div",{class:"label"},"Watchlist",-1)),v(vs,{onSwappers:r[1]||(r[1]=b=>e.value=b)})]),t("div",gs,[r[5]||(r[5]=t("div",{class:"label"},"Min Amount",-1)),v(V,{modelValue:_(s),"onUpdate:modelValue":r[2]||(r[2]=b=>E(s)?s.value=b:null),min:0,max:1/0},null,8,["modelValue"])])]),v(D,{class:"swaps-table",rows:_(p),columns:["Hash","Block","Gas","From","To","In","Out",{label:"Age",align:"end"}]},{row:$(({item:b})=>[t("div",ys,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/tx/${b.txHash}`},k(("addressLeft"in c?c.addressLeft:_(G))(b.txHash,10)),9,$s)]),t("div",null,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/block/${b.blockNumber}`},k(b.blockNumber),9,Ss)]),t("div",null,k(b.gasInGwei),1),t("div",null,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${b.senderAddress}`},k(("addressLeft"in c?c.addressLeft:_(G))(b.senderAddress,5)),9,As)]),t("div",null,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${b.receiverAddress}`},k(("addressLeft"in c?c.addressLeft:_(G))(b.receiverAddress,5)),9,Ts)]),t("div",xs,[v(S,{chain:"ethereum",address:b.coinBeforeAddress},null,8,["address"]),P(" "+k(h(b.parsedBeforeAmount))+" ",1),t("a",{target:"_blank",href:`https://etherscan.io/address/${b.coinBeforeAddress}`},k(b.coinBeforeSymbol),9,Cs)]),t("div",Is,[v(S,{chain:"ethereum",address:b.coinAfterAddress},null,8,["address"]),P(" "+k(h(b.parsedAfterAmount))+" ",1),t("a",{target:"_blank",href:`https://etherscan.io/address/${b.coinAfterAddress}`},k(b.coinAfterSymbol),9,Ls)]),t("div",Vs,[t("a",{target:"_blank",href:`https://etherscan.io/tx/${b.txHash}`,onClick:r[3]||(r[3]=H(()=>{},["stop"]))},k(_(u)(b.blockUnixtime)),9,Bs)])]),_:1},8,["rows"])])]),_:1},8,["loading"])}}}),Us=L(Ds,[["__scopeId","data-v-1f0547c6"]]),Fs={class:"dashboard-grid"},Ns=I({__name:"Swaps",setup(n){return(e,s)=>(y(),B("div",Fs,[v(Us,{style:{"grid-area":"swaps"}})]))}}),Ps=L(Ns,[["__scopeId","data-v-c8f8205a"]]),Es={class:"add-token"},Ms=I({__name:"ModalAddToken",emits:["close","token"],setup(n,{emit:e}){const s=e,l=C(""),d=ve().flatMap(a=>a.items);return(a,u)=>{const f=ee,o=O,i=M,p=q,m=Be;return y(),x(m,{onClose:u[2]||(u[2]=h=>s("close"))},{default:$(()=>[v(p,{title:"Add token"},{default:$(()=>[t("div",Es,[v(f,{modelValue:_(l),"onUpdate:modelValue":u[0]||(u[0]=h=>E(l)?l.value=h:null),search:"",placeholder:"Search for tokens"},null,8,["modelValue"]),v(i,{rows:_(d),onSelect:u[1]||(u[1]=h=>s("token",h))},{row:$(({item:{address:h,symbol:c}})=>[v(o,{address:h},null,8,["address"]),t("div",null,k(c??"?"),1)]),_:1},8,["rows"])])]),_:1})]),_:1})}}}),Qs=L(Ms,[["__scopeId","data-v-d297ef48"]]),Gs={class:"watchlist"},Rs={class:"option"},qs={class:"toolbar"},Hs=I({__name:"WatchlistTokens",emits:["tokens"],setup(n,{emit:e}){const s=e,l=C(!1),d=ve(),a=C(d[0]),u=A(()=>a.value.items),f=C(new Set(u.value.map(p=>p.address))),o=p=>{f.value.has(p)?f.value.delete(p):f.value.add(p)};U(f,p=>{s("tokens",u.value.filter(m=>p.has(m.address)))},{immediate:!0,deep:!0}),U(a,()=>{f.value=new Set(u.value.map(p=>p.address))});function i(p){a.value.items.some(h=>h.address===p.address)||a.value.items.push(p),l.value=!1}return(p,m)=>{const h=Ge,c=oe,r=ae,w=O,T=fe,V=M;return y(),B("div",Gs,[v(c,{class:"menu",chevrons:!1,options:_(d),selected:_(a),onSelect:m[0]||(m[0]=S=>a.value=S)},{option:$(({option:{name:S},isSelected:D})=>[t("div",Rs,[P(k(S)+" ",1),D?(y(),x(h,{key:0})):F("",!0)])]),_:1},8,["options","selected"]),t("div",qs,[v(r,{onClick:m[1]||(m[1]=S=>l.value=!0)},{default:$(()=>m[5]||(m[5]=[P("+")])),_:1}),v(Qs,{show:_(l),onClose:m[2]||(m[2]=S=>l.value=!1),onToken:i},null,8,["show"])]),v(V,{rows:_(u),onSelect:m[4]||(m[4]=S=>o(S.address))},{row:$(({item:{address:S,symbol:D}})=>[v(w,{address:S},null,8,["address"]),t("div",null,k(D??"?"),1),t("div",{class:"center",onClick:m[3]||(m[3]=H(()=>{},["stop"]))},[v(T,{"model-value":_(f).has(S),"onUpdate:modelValue":Q=>o(S)},null,8,["model-value","onUpdate:modelValue"])])]),_:1},8,["rows"])])}}}),Os=L(Hs,[["__scopeId","data-v-4412429f"]]),Ws={style:{display:"flex",gap:"1rem"}},js={class:"transfers-card-body"},zs={class:"transfers-options"},Js={class:"option"},Xs={class:"option"},Ys={class:"center-vert"},Zs=["href"],Ks=["href"],et={class:"no-ellipsis"},st=["href"],tt={class:"no-ellipsis"},nt=["href"],ot={class:"center-vert"},at=["href"],rt={class:"end"},lt=["href"],Z=10,ct=I({__name:"TableTransfers",setup(n){const e=C([]),s=C(0),l=A(()=>{const r=s.value;return typeof r=="string"?parseFloat(r)||0:r||0}),{data:d,isFetching:a}=me(A(()=>e.value.map(r=>r.address))),{relativeTime:u}=K(),f=C(""),o=A(()=>(d.value??[]).filter(r=>{const w=f.value.toLocaleLowerCase().split(" "),T=V=>w.some(S=>V.toLocaleLowerCase().includes(S));return(T(r.transferFrom)||T(r.transferTo))&&r.parsedAmount>=l.value}).orderBy([r=>r.blockUnixtime,r=>r.positionInBlock],"desc")),{page:i,rowsPage:p,onPage:m}=ie(o,Z),h=r=>r<1?r.toFixed(4):r>1e3?r.toFixed(0):r.toFixed(2),c=async r=>{await navigator.clipboard.writeText(r)};return(r,w)=>{const T=ee,V=de,S=ce,D=Me,Q=ae,b=O,he=M,be=q;return y(),x(be,{class:"transfers-card",title:"Transfers"},{actions:$(()=>[t("div",Ws,[v(T,{modelValue:_(f),"onUpdate:modelValue":w[0]||(w[0]=g=>E(f)?f.value=g:null),search:"",placeholder:"Search for..."},null,8,["modelValue"]),_(o).length>Z?(y(),x(V,{key:0,"items-count":_(o).length,"items-per-page":Z,page:_(i),onPage:_(m)},null,8,["items-count","page","onPage"])):F("",!0)])]),default:$(()=>[t("div",js,[t("div",zs,[t("div",Js,[v(Os,{onTokens:w[1]||(w[1]=g=>e.value=g)})]),t("div",Xs,[w[4]||(w[4]=t("div",{class:"label"},"Min Amount",-1)),v(S,{modelValue:_(s),"onUpdate:modelValue":w[2]||(w[2]=g=>E(s)?s.value=g:null),min:0,max:1/0},null,8,["modelValue"])])]),v(he,{class:"transfers-table",rows:_(p),columns:["Hash","Block","Gas","From","To","Amount","Token",{label:"Age",align:"end"}],loading:_(a)},{row:$(({item:g})=>[t("div",Ys,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/tx/${g.txHash}`},k(("addressLeft"in r?r.addressLeft:_(G))(g.txHash,10)),9,Zs),v(Q,{onClick:ft=>c(g.txHash)},{default:$(()=>[v(D)]),_:2},1032,["onClick"])]),t("div",null,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/block/${g.blockNumber}`},k(g.blockNumber),9,Ks)]),t("div",null,k(g.gasInGwei),1),t("div",et,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/address/${g.transferFrom}`},k(("addressShort"in r?r.addressShort:_(se))(g.transferFrom,10)),9,st)]),t("div",tt,[t("a",{class:"font-mono",target:"_blank",href:`https://etherscan.io/addr ess/${g.transferTo}`},k(("addressShort"in r?r.addressShort:_(se))(g.transferTo,10)),9,nt)]),t("div",null,k(h(g.parsedAmount)),1),t("div",ot,[v(b,{class:"token",chain:"ethereum",address:g.coinAddress},null,8,["address"]),t("a",{target:"_blank",href:`https://etherscan.io/address/${g.coinAddress}`},k(g.coinSymbol),9,at)]),t("div",rt,[t("a",{target:"_blank",href:`https://etherscan.io/tx/${g.txHash}`,onClick:w[3]||(w[3]=H(()=>{},["stop"]))},k(_(u)(g.blockUnixtime)),9,lt)])]),_:1},8,["rows","loading"])])]),_:1})}}}),it=L(ct,[["__scopeId","data-v-6b982f70"]]),dt={class:"dashboard-grid"},ut=I({__name:"Transfers",setup(n){return(e,s)=>(y(),B("div",dt,[v(it,{style:{"grid-area":"transfers"}})]))}}),_t=L(ut,[["__scopeId","data-v-d9448d17"]]),pt={class:"dashboard"},mt=I({__name:"DefiMonitor.page",setup(n){const{tabActive:e,tabActiveIndex:s}=Qe(["transfers","swaps","crvusd"],"defimonitor");return(l,d)=>{const a=ge,u=ye;return y(),B("div",pt,[v(u,{active:_(s),onTab:d[0]||(d[0]=f=>s.value=f.index)},{default:$(()=>[v(a,{header:"Transfers"},{default:$(()=>[(y(),x(j,null,[_(e)==="transfers"?(y(),x(_t,{key:0})):F("",!0)],1024))]),_:1}),v(a,{header:"Swaps"},{default:$(()=>[(y(),x(j,null,[_(e)==="swaps"?(y(),x(Ps,{key:0})):F("",!0)],1024))]),_:1}),v(a,{header:"crvUSD"},{default:$(()=>[(y(),x(j,null,[_(e)==="crvusd"?(y(),x(os,{key:0})):F("",!0)],1024))]),_:1})]),_:1},8,["active"])])}}}),Bt=L(mt,[["__scopeId","data-v-66bd0b1d"]]);export{Bt as default};
