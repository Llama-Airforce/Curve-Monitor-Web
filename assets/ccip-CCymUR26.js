import{A as b,i as E,c as O,B as x}from"./getAction-yclJLzjk.js";import{L as h,b4 as m,B as p,bH as w,aU as g,bI as y,s as M}from"./index-jdaCXud5.js";import"./Number-DDdUpen7.js";function R(r,t){if(!h(r,{strict:!1}))throw new m({address:r});if(!h(t,{strict:!1}))throw new m({address:t});return r.toLowerCase()===t.toLowerCase()}class S extends p{constructor({callbackSelector:t,cause:a,data:n,extraData:i,sender:d,urls:s}){var c;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(c=a.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",s&&["  Gateway URL(s):",...s.map(f=>`    ${w(f)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${t}`,`  Extra data: ${i}`].flat(),name:"OffchainLookupError"})}}class $ extends p{constructor({result:t,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${g(t)}`],name:"OffchainLookupResponseMalformedError"})}}class A extends p{constructor({sender:t,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${t}`],name:"OffchainLookupSenderMismatchError"})}}const P="0x556f1830",C={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function U(r,{blockNumber:t,blockTag:a,data:n,to:i}){const{args:d}=b({data:n,abi:[C]}),[s,c,f,u,o]=d,{ccipRead:e}=r,k=e&&typeof(e==null?void 0:e.request)=="function"?e.request:T;try{if(!R(i,s))throw new A({sender:s,to:i});const l=await k({data:f,sender:s,urls:c}),{data:L}=await E(r,{blockNumber:t,blockTag:a,data:O([u,x([{type:"bytes"},{type:"bytes"}],[l,o])]),to:i});return L}catch(l){throw new S({callbackSelector:u,cause:l,data:n,extraData:o,sender:s,urls:c})}}async function T({data:r,sender:t,urls:a}){var i;let n=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const s=a[d],c=s.includes("{data}")?"GET":"POST",f=c==="POST"?{data:r,sender:t}:void 0,u=c==="POST"?{"Content-Type":"application/json"}:{};try{const o=await fetch(s.replace("{sender}",t).replace("{data}",r),{body:JSON.stringify(f),headers:u,method:c});let e;if((i=o.headers.get("Content-Type"))!=null&&i.startsWith("application/json")?e=(await o.json()).data:e=await o.text(),!o.ok){n=new y({body:f,details:e!=null&&e.error?g(e.error):o.statusText,headers:o.headers,status:o.status,url:s});continue}if(!M(e)){n=new $({result:e,url:s});continue}return e}catch(o){n=new y({body:f,details:o.message,url:s})}}throw n}export{T as ccipRequest,U as offchainLookup,C as offchainLookupAbiItem,P as offchainLookupSignature};
