import{d as c,C as u,D as _,h as d,o as m,P as p,Q as r,w as i,R as g,g as f}from"./index-BYnNAfSP.js";const h=c({__name:"ButtonToggle",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:u(["change"],["update:modelValue"]),setup(a,{emit:s}){const o=_(a,"modelValue"),t=s,n=()=>{const e=!o.value;o.value=e,t("change",e)};return(e,v)=>{const l=p;return m(),d(l,{class:r({toggled:o.value}),onClick:n},{default:i(()=>[g(e.$slots,"default",{},void 0,!0)]),_:3},8,["class"])}}}),C=f(h,[["__scopeId","data-v-caa2b3a0"]]);export{C as _};
