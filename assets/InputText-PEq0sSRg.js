import{q as M,d as q,I as d,J as p,f as w,c as f,o as a,X as m,a as h,h as v,W as r,Y as y,i as S,u as k,w as C,j as F,t as L,bW as N,e as $}from"./index-5B2tI7Zc.js";/**
 * @license lucide-vue-next v0.483.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=M("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),T={class:"input-form"},W={key:0,class:"icon"},b=["type","value","placeholder"],z=q({__name:"InputText",props:d({placeholder:{default:""},options:{default:()=>[]},search:{type:Boolean,default:!1},filter:{type:Function,default:()=>!0},sort:{type:Function,default:null},direction:{default:"down"}},{modelValue:{required:!0},modelModifiers:{},open:{type:Boolean,default:!1},openModifiers:{}}),emits:d(["input","select"],["update:modelValue","update:open"]),setup(t,{emit:I}){const l=p(t,"modelValue"),n=p(t,"open"),u=I,c=w(()=>{const e=[...t.options].filter(i=>t.filter(l.value,i));return t.sort?e.sort(t.sort):e});function V(e){const o=e.target.value;l.value=o,n.value=!!o,u("input",o)}function g(e){n.value=!1,u("select",e)}return(e,o)=>{const i=j,B=N;return a(),f("div",{class:m(["input-text",{search:e.search}])},[h("div",T,[e.search||e.$slots.icon?(a(),f("span",W,[y(e.$slots,"icon",{},()=>[e.search?(a(),v(i,{key:0})):r("",!0)],!0)])):r("",!0),h("input",{class:m([{open:n.value},e.direction]),type:e.search?"search":"text",value:l.value,placeholder:e.placeholder,onInput:S(V,["stop"]),onSelect:o[0]||(o[0]=S(()=>{},["stop"]))},null,42,b)]),k(c).length>0?(a(),v(B,{key:0,open:n.value,"onUpdate:open":o[1]||(o[1]=s=>n.value=s),direction:e.direction,options:k(c),onSelect:g},{option:C(({option:s,idx:_})=>[y(e.$slots,"option",{option:s,idx:_},()=>[F(L(s),1)],!0)]),_:3},8,["open","direction","options"])):r("",!0)],2)}}}),E=$(z,[["__scopeId","data-v-798ed46a"]]);export{j as S,E as _};
