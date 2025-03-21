/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const vt=BigInt(0),St=BigInt(1),we=BigInt(2);function it(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function mt(e){if(!it(e))throw new Error("Uint8Array expected")}function lt(e,n){if(typeof n!="boolean")throw new Error(e+" boolean expected, got "+n)}const pe=Array.from({length:256},(e,n)=>n.toString(16).padStart(2,"0"));function dt(e){mt(e);let n="";for(let t=0;t<e.length;t++)n+=pe[e[t]];return n}function ut(e){const n=e.toString(16);return n.length&1?"0"+n:n}function Mt(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?vt:BigInt("0x"+e)}const $={_0:48,_9:57,A:65,F:70,a:97,f:102};function Pt(e){if(e>=$._0&&e<=$._9)return e-$._0;if(e>=$.A&&e<=$.F)return e-($.A-10);if(e>=$.a&&e<=$.f)return e-($.a-10)}function ht(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const n=e.length,t=n/2;if(n%2)throw new Error("hex string expected, got unpadded hex of length "+n);const r=new Uint8Array(t);for(let o=0,i=0;o<t;o++,i+=2){const c=Pt(e.charCodeAt(i)),f=Pt(e.charCodeAt(i+1));if(c===void 0||f===void 0){const s=e[i]+e[i+1];throw new Error('hex string expected, got non-hex character "'+s+'" at index '+i)}r[o]=c*16+f}return r}function rt(e){return Mt(dt(e))}function jt(e){return mt(e),Mt(dt(Uint8Array.from(e).reverse()))}function gt(e,n){return ht(e.toString(16).padStart(n*2,"0"))}function Yt(e,n){return gt(e,n).reverse()}function ye(e){return ht(ut(e))}function K(e,n,t){let r;if(typeof n=="string")try{r=ht(n)}catch(i){throw new Error(e+" must be hex string or Uint8Array, cause: "+i)}else if(it(n))r=Uint8Array.from(n);else throw new Error(e+" must be hex string or Uint8Array");const o=r.length;if(typeof t=="number"&&o!==t)throw new Error(e+" of length "+t+" expected, got "+o);return r}function bt(...e){let n=0;for(let r=0;r<e.length;r++){const o=e[r];mt(o),n+=o.length}const t=new Uint8Array(n);for(let r=0,o=0;r<e.length;r++){const i=e[r];t.set(i,o),o+=i.length}return t}function be(e,n){if(e.length!==n.length)return!1;let t=0;for(let r=0;r<e.length;r++)t|=e[r]^n[r];return t===0}function me(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}const Ot=e=>typeof e=="bigint"&&vt<=e;function At(e,n,t){return Ot(e)&&Ot(n)&&Ot(t)&&n<=e&&e<t}function ot(e,n,t,r){if(!At(n,t,r))throw new Error("expected valid "+e+": "+t+" <= n < "+r+", got "+n)}function ne(e){let n;for(n=0;e>vt;e>>=St,n+=1);return n}function xe(e,n){return e>>BigInt(n)&St}function Ee(e,n,t){return e|(t?St:vt)<<BigInt(n)}const Ft=e=>(we<<BigInt(e-1))-St,Lt=e=>new Uint8Array(e),Gt=e=>Uint8Array.from(e);function re(e,n,t){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");let r=Lt(e),o=Lt(e),i=0;const c=()=>{r.fill(1),o.fill(0),i=0},f=(...h)=>t(o,r,...h),s=(h=Lt())=>{o=f(Gt([0]),h),r=f(),h.length!==0&&(o=f(Gt([1]),h),r=f())},u=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const l=[];for(;h<n;){r=f();const m=r.slice();l.push(m),h+=r.length}return bt(...l)};return(h,l)=>{c(),s(h);let m;for(;!(m=l(u()));)s();return c(),m}}const Be={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||it(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,n)=>n.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function xt(e,n,t={}){const r=(o,i,c)=>{const f=Be[i];if(typeof f!="function")throw new Error("invalid validator function");const s=e[o];if(!(c&&s===void 0)&&!f(s,e))throw new Error("param "+String(o)+" is invalid. Expected "+i+", got "+s)};for(const[o,i]of Object.entries(n))r(o,i,!1);for(const[o,i]of Object.entries(t))r(o,i,!0);return e}const ve=()=>{throw new Error("not implemented")};function zt(e){const n=new WeakMap;return(t,...r)=>{const o=n.get(t);if(o!==void 0)return o;const i=e(t,...r);return n.set(t,i),i}}const Se=Object.freeze(Object.defineProperty({__proto__:null,aInRange:ot,abool:lt,abytes:mt,bitGet:xe,bitLen:ne,bitMask:Ft,bitSet:Ee,bytesToHex:dt,bytesToNumberBE:rt,bytesToNumberLE:jt,concatBytes:bt,createHmacDrbg:re,ensureBytes:K,equalBytes:be,hexToBytes:ht,hexToNumber:Mt,inRange:At,isBytes:it,memoized:zt,notImplemented:ve,numberToBytesBE:gt,numberToBytesLE:Yt,numberToHexUnpadded:ut,numberToVarBytesBE:ye,utf8ToBytes:me,validateObject:xt},Symbol.toStringTag,{value:"Module"}));function $t(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function Ae(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function It(e,...n){if(!Ae(e))throw new Error("Uint8Array expected");if(n.length>0&&!n.includes(e.length))throw new Error("Uint8Array expected of length "+n+", got length="+e.length)}function Ie(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");$t(e.outputLen),$t(e.blockLen)}function Bt(e,n=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(n&&e.finished)throw new Error("Hash#digest() has already been called")}function Ne(e,n){It(e);const t=n.outputLen;if(e.length<t)throw new Error("digestInto() expects output buffer of length at least "+t)}const at=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ht(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function P(e,n){return e<<32-n|e>>>n}function qe(e){if(typeof e!="string")throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array(new TextEncoder().encode(e))}function Kt(e){return typeof e=="string"&&(e=qe(e)),It(e),e}function Oe(...e){let n=0;for(let r=0;r<e.length;r++){const o=e[r];It(o),n+=o.length}const t=new Uint8Array(n);for(let r=0,o=0;r<e.length;r++){const i=e[r];t.set(i,o),o+=i.length}return t}class oe{clone(){return this._cloneInto()}}function Le(e){const n=r=>e().update(Kt(r)).digest(),t=e();return n.outputLen=t.outputLen,n.blockLen=t.blockLen,n.create=()=>e(),n}function He(e=32){if(at&&typeof at.getRandomValues=="function")return at.getRandomValues(new Uint8Array(e));if(at&&typeof at.randomBytes=="function")return at.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}function Ue(e,n,t,r){if(typeof e.setBigUint64=="function")return e.setBigUint64(n,t,r);const o=BigInt(32),i=BigInt(4294967295),c=Number(t>>o&i),f=Number(t&i),s=r?4:0,u=r?0:4;e.setUint32(n+s,c,r),e.setUint32(n+u,f,r)}function Te(e,n,t){return e&n^~e&t}function _e(e,n,t){return e&n^e&t^n&t}class ke extends oe{constructor(n,t,r,o){super(),this.blockLen=n,this.outputLen=t,this.padOffset=r,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(n),this.view=Ht(this.buffer)}update(n){Bt(this);const{view:t,buffer:r,blockLen:o}=this;n=Kt(n);const i=n.length;for(let c=0;c<i;){const f=Math.min(o-this.pos,i-c);if(f===o){const s=Ht(n);for(;o<=i-c;c+=o)this.process(s,c);continue}r.set(n.subarray(c,c+f),this.pos),this.pos+=f,c+=f,this.pos===o&&(this.process(t,0),this.pos=0)}return this.length+=n.length,this.roundClean(),this}digestInto(n){Bt(this),Ne(n,this),this.finished=!0;const{buffer:t,view:r,blockLen:o,isLE:i}=this;let{pos:c}=this;t[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(r,0),c=0);for(let h=c;h<o;h++)t[h]=0;Ue(r,o-8,BigInt(this.length*8),i),this.process(r,0);const f=Ht(n),s=this.outputLen;if(s%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const u=s/4,b=this.get();if(u>b.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<u;h++)f.setUint32(4*h,b[h],i)}digest(){const{buffer:n,outputLen:t}=this;this.digestInto(n);const r=n.slice(0,t);return this.destroy(),r}_cloneInto(n){n||(n=new this.constructor),n.set(...this.get());const{blockLen:t,buffer:r,length:o,finished:i,destroyed:c,pos:f}=this;return n.length=o,n.pos=f,n.finished=i,n.destroyed=c,o%t&&n.buffer.set(r),n}}const ze=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Q=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),J=new Uint32Array(64);class Ce extends ke{constructor(){super(64,32,8,!1),this.A=Q[0]|0,this.B=Q[1]|0,this.C=Q[2]|0,this.D=Q[3]|0,this.E=Q[4]|0,this.F=Q[5]|0,this.G=Q[6]|0,this.H=Q[7]|0}get(){const{A:n,B:t,C:r,D:o,E:i,F:c,G:f,H:s}=this;return[n,t,r,o,i,c,f,s]}set(n,t,r,o,i,c,f,s){this.A=n|0,this.B=t|0,this.C=r|0,this.D=o|0,this.E=i|0,this.F=c|0,this.G=f|0,this.H=s|0}process(n,t){for(let h=0;h<16;h++,t+=4)J[h]=n.getUint32(t,!1);for(let h=16;h<64;h++){const l=J[h-15],m=J[h-2],N=P(l,7)^P(l,18)^l>>>3,y=P(m,17)^P(m,19)^m>>>10;J[h]=y+J[h-7]+N+J[h-16]|0}let{A:r,B:o,C:i,D:c,E:f,F:s,G:u,H:b}=this;for(let h=0;h<64;h++){const l=P(f,6)^P(f,11)^P(f,25),m=b+l+Te(f,s,u)+ze[h]+J[h]|0,y=(P(r,2)^P(r,13)^P(r,22))+_e(r,o,i)|0;b=u,u=s,s=f,f=c+m|0,c=i,i=o,o=r,r=m+y|0}r=r+this.A|0,o=o+this.B|0,i=i+this.C|0,c=c+this.D|0,f=f+this.E|0,s=s+this.F|0,u=u+this.G|0,b=b+this.H|0,this.set(r,o,i,c,f,s,u,b)}roundClean(){J.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Re=Le(()=>new Ce);class ie extends oe{constructor(n,t){super(),this.finished=!1,this.destroyed=!1,Ie(n);const r=Kt(t);if(this.iHash=n.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(r.length>o?n.create().update(r).digest():r);for(let c=0;c<i.length;c++)i[c]^=54;this.iHash.update(i),this.oHash=n.create();for(let c=0;c<i.length;c++)i[c]^=106;this.oHash.update(i),i.fill(0)}update(n){return Bt(this),this.iHash.update(n),this}digestInto(n){Bt(this),It(n,this.outputLen),this.finished=!0,this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){const n=new Uint8Array(this.oHash.outputLen);return this.digestInto(n),n}_cloneInto(n){n||(n=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:r,finished:o,destroyed:i,blockLen:c,outputLen:f}=this;return n=n,n.finished=o,n.destroyed=i,n.blockLen=c,n.outputLen=f,n.oHash=t._cloneInto(n.oHash),n.iHash=r._cloneInto(n.iHash),n}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const se=(e,n,t)=>new ie(e,n).update(t).digest();se.create=(e,n)=>new ie(e,n);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const z=BigInt(0),T=BigInt(1),nt=BigInt(2),Ze=BigInt(3),Ct=BigInt(4),Dt=BigInt(5),Wt=BigInt(8);function M(e,n){const t=e%n;return t>=z?t:n+t}function Ve(e,n,t){if(n<z)throw new Error("invalid exponent, negatives unsupported");if(t<=z)throw new Error("invalid modulus");if(t===T)return z;let r=T;for(;n>z;)n&T&&(r=r*e%t),e=e*e%t,n>>=T;return r}function Y(e,n,t){let r=e;for(;n-- >z;)r*=r,r%=t;return r}function Rt(e,n){if(e===z)throw new Error("invert: expected non-zero number");if(n<=z)throw new Error("invert: expected positive modulus, got "+n);let t=M(e,n),r=n,o=z,i=T;for(;t!==z;){const f=r/t,s=r%t,u=o-i*f;r=t,t=s,o=i,i=u}if(r!==T)throw new Error("invert: does not exist");return M(o,n)}function Me(e){const n=(e-T)/nt;let t,r,o;for(t=e-T,r=0;t%nt===z;t/=nt,r++);for(o=nt;o<e&&Ve(o,n,e)!==e-T;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(r===1){const c=(e+T)/Ct;return function(s,u){const b=s.pow(u,c);if(!s.eql(s.sqr(b),u))throw new Error("Cannot find square root");return b}}const i=(t+T)/nt;return function(f,s){if(f.pow(s,n)===f.neg(f.ONE))throw new Error("Cannot find square root");let u=r,b=f.pow(f.mul(f.ONE,o),t),h=f.pow(s,i),l=f.pow(s,t);for(;!f.eql(l,f.ONE);){if(f.eql(l,f.ZERO))return f.ZERO;let m=1;for(let y=f.sqr(l);m<u&&!f.eql(y,f.ONE);m++)y=f.sqr(y);const N=f.pow(b,T<<BigInt(u-m-1));b=f.sqr(N),h=f.mul(h,N),l=f.mul(l,b),u=m}return h}}function je(e){if(e%Ct===Ze){const n=(e+T)/Ct;return function(r,o){const i=r.pow(o,n);if(!r.eql(r.sqr(i),o))throw new Error("Cannot find square root");return i}}if(e%Wt===Dt){const n=(e-Dt)/Wt;return function(r,o){const i=r.mul(o,nt),c=r.pow(i,n),f=r.mul(o,c),s=r.mul(r.mul(f,nt),c),u=r.mul(f,r.sub(s,r.ONE));if(!r.eql(r.sqr(u),o))throw new Error("Cannot find square root");return u}}return Me(e)}const Ye=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Fe(e){const n={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},t=Ye.reduce((r,o)=>(r[o]="function",r),n);return xt(e,t)}function Ke(e,n,t){if(t<z)throw new Error("invalid exponent, negatives unsupported");if(t===z)return e.ONE;if(t===T)return n;let r=e.ONE,o=n;for(;t>z;)t&T&&(r=e.mul(r,o)),o=e.sqr(o),t>>=T;return r}function Pe(e,n){const t=new Array(n.length),r=n.reduce((i,c,f)=>e.is0(c)?i:(t[f]=i,e.mul(i,c)),e.ONE),o=e.inv(r);return n.reduceRight((i,c,f)=>e.is0(c)?i:(t[f]=e.mul(i,t[f]),e.mul(i,c)),o),t}function ce(e,n){const t=n!==void 0?n:e.toString(2).length,r=Math.ceil(t/8);return{nBitLength:t,nByteLength:r}}function fe(e,n,t=!1,r={}){if(e<=z)throw new Error("invalid field: expected ORDER > 0, got "+e);const{nBitLength:o,nByteLength:i}=ce(e,n);if(i>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let c;const f=Object.freeze({ORDER:e,isLE:t,BITS:o,BYTES:i,MASK:Ft(o),ZERO:z,ONE:T,create:s=>M(s,e),isValid:s=>{if(typeof s!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof s);return z<=s&&s<e},is0:s=>s===z,isOdd:s=>(s&T)===T,neg:s=>M(-s,e),eql:(s,u)=>s===u,sqr:s=>M(s*s,e),add:(s,u)=>M(s+u,e),sub:(s,u)=>M(s-u,e),mul:(s,u)=>M(s*u,e),pow:(s,u)=>Ke(f,s,u),div:(s,u)=>M(s*Rt(u,e),e),sqrN:s=>s*s,addN:(s,u)=>s+u,subN:(s,u)=>s-u,mulN:(s,u)=>s*u,inv:s=>Rt(s,e),sqrt:r.sqrt||(s=>(c||(c=je(e)),c(f,s))),invertBatch:s=>Pe(f,s),cmov:(s,u,b)=>b?u:s,toBytes:s=>t?Yt(s,i):gt(s,i),fromBytes:s=>{if(s.length!==i)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+s.length);return t?jt(s):rt(s)}});return Object.freeze(f)}function ae(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const n=e.toString(2).length;return Math.ceil(n/8)}function ue(e){const n=ae(e);return n+Math.ceil(n/2)}function Ge(e,n,t=!1){const r=e.length,o=ae(n),i=ue(n);if(r<16||r<i||r>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+r);const c=t?jt(e):rt(e),f=M(c,n-T)+T;return t?Yt(f,o):gt(f,o)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Xt=BigInt(0),Et=BigInt(1);function Ut(e,n){const t=n.negate();return e?t:n}function le(e,n){if(!Number.isSafeInteger(e)||e<=0||e>n)throw new Error("invalid window size, expected [1.."+n+"], got W="+e)}function Tt(e,n){le(e,n);const t=Math.ceil(n/e)+1,r=2**(e-1);return{windows:t,windowSize:r}}function $e(e,n){if(!Array.isArray(e))throw new Error("array expected");e.forEach((t,r)=>{if(!(t instanceof n))throw new Error("invalid point at index "+r)})}function De(e,n){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((t,r)=>{if(!n.isValid(t))throw new Error("invalid scalar at index "+r)})}const _t=new WeakMap,de=new WeakMap;function kt(e){return de.get(e)||1}function We(e,n){return{constTimeNegate:Ut,hasPrecomputes(t){return kt(t)!==1},unsafeLadder(t,r,o=e.ZERO){let i=t;for(;r>Xt;)r&Et&&(o=o.add(i)),i=i.double(),r>>=Et;return o},precomputeWindow(t,r){const{windows:o,windowSize:i}=Tt(r,n),c=[];let f=t,s=f;for(let u=0;u<o;u++){s=f,c.push(s);for(let b=1;b<i;b++)s=s.add(f),c.push(s);f=s.double()}return c},wNAF(t,r,o){const{windows:i,windowSize:c}=Tt(t,n);let f=e.ZERO,s=e.BASE;const u=BigInt(2**t-1),b=2**t,h=BigInt(t);for(let l=0;l<i;l++){const m=l*c;let N=Number(o&u);o>>=h,N>c&&(N-=b,o+=Et);const y=m,a=m+Math.abs(N)-1,g=l%2!==0,x=N<0;N===0?s=s.add(Ut(g,r[y])):f=f.add(Ut(x,r[a]))}return{p:f,f:s}},wNAFUnsafe(t,r,o,i=e.ZERO){const{windows:c,windowSize:f}=Tt(t,n),s=BigInt(2**t-1),u=2**t,b=BigInt(t);for(let h=0;h<c;h++){const l=h*f;if(o===Xt)break;let m=Number(o&s);if(o>>=b,m>f&&(m-=u,o+=Et),m===0)continue;let N=r[l+Math.abs(m)-1];m<0&&(N=N.negate()),i=i.add(N)}return i},getPrecomputes(t,r,o){let i=_t.get(r);return i||(i=this.precomputeWindow(r,t),t!==1&&_t.set(r,o(i))),i},wNAFCached(t,r,o){const i=kt(t);return this.wNAF(i,this.getPrecomputes(i,t,o),r)},wNAFCachedUnsafe(t,r,o,i){const c=kt(t);return c===1?this.unsafeLadder(t,r,i):this.wNAFUnsafe(c,this.getPrecomputes(c,t,o),r,i)},setWindowSize(t,r){le(r,n),de.set(t,r),_t.delete(t)}}}function Xe(e,n,t,r){if($e(t,e),De(r,n),t.length!==r.length)throw new Error("arrays of points and scalars must have equal length");const o=e.ZERO,i=ne(BigInt(t.length)),c=i>12?i-3:i>4?i-2:i?2:1,f=(1<<c)-1,s=new Array(f+1).fill(o),u=Math.floor((n.BITS-1)/c)*c;let b=o;for(let h=u;h>=0;h-=c){s.fill(o);for(let m=0;m<r.length;m++){const N=r[m],y=Number(N>>BigInt(h)&BigInt(f));s[y]=s[y].add(t[m])}let l=o;for(let m=s.length-1,N=o;m>0;m--)N=N.add(s[m]),l=l.add(N);if(b=b.add(l),h!==0)for(let m=0;m<c;m++)b=b.double()}return b}function he(e){return Fe(e.Fp),xt(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ce(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Qt(e){e.lowS!==void 0&&lt("lowS",e.lowS),e.prehash!==void 0&&lt("prehash",e.prehash)}function Qe(e){const n=he(e);xt(n,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:t,Fp:r,a:o}=n;if(t){if(!r.eql(o,r.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof t!="object"||typeof t.beta!="bigint"||typeof t.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...n})}const{bytesToNumberBE:Je,hexToBytes:tn}=Se;class en extends Error{constructor(n=""){super(n)}}const D={Err:en,_tlv:{encode:(e,n)=>{const{Err:t}=D;if(e<0||e>256)throw new t("tlv.encode: wrong tag");if(n.length&1)throw new t("tlv.encode: unpadded data");const r=n.length/2,o=ut(r);if(o.length/2&128)throw new t("tlv.encode: long form length too big");const i=r>127?ut(o.length/2|128):"";return ut(e)+i+o+n},decode(e,n){const{Err:t}=D;let r=0;if(e<0||e>256)throw new t("tlv.encode: wrong tag");if(n.length<2||n[r++]!==e)throw new t("tlv.decode: wrong tlv");const o=n[r++],i=!!(o&128);let c=0;if(!i)c=o;else{const s=o&127;if(!s)throw new t("tlv.decode(long): indefinite length not supported");if(s>4)throw new t("tlv.decode(long): byte length is too big");const u=n.subarray(r,r+s);if(u.length!==s)throw new t("tlv.decode: length bytes not complete");if(u[0]===0)throw new t("tlv.decode(long): zero leftmost byte");for(const b of u)c=c<<8|b;if(r+=s,c<128)throw new t("tlv.decode(long): not minimal encoding")}const f=n.subarray(r,r+c);if(f.length!==c)throw new t("tlv.decode: wrong value length");return{v:f,l:n.subarray(r+c)}}},_int:{encode(e){const{Err:n}=D;if(e<W)throw new n("integer: negative integers are not allowed");let t=ut(e);if(Number.parseInt(t[0],16)&8&&(t="00"+t),t.length&1)throw new n("unexpected DER parsing assertion: unpadded hex");return t},decode(e){const{Err:n}=D;if(e[0]&128)throw new n("invalid signature integer: negative");if(e[0]===0&&!(e[1]&128))throw new n("invalid signature integer: unnecessary leading zero");return Je(e)}},toSig(e){const{Err:n,_int:t,_tlv:r}=D,o=typeof e=="string"?tn(e):e;mt(o);const{v:i,l:c}=r.decode(48,o);if(c.length)throw new n("invalid signature: left bytes after parsing");const{v:f,l:s}=r.decode(2,i),{v:u,l:b}=r.decode(2,s);if(b.length)throw new n("invalid signature: left bytes after parsing");return{r:t.decode(f),s:t.decode(u)}},hexFromSig(e){const{_tlv:n,_int:t}=D,r=n.encode(2,t.encode(e.r)),o=n.encode(2,t.encode(e.s)),i=r+o;return n.encode(48,i)}},W=BigInt(0),k=BigInt(1);BigInt(2);const Jt=BigInt(3);BigInt(4);function nn(e){const n=Qe(e),{Fp:t}=n,r=fe(n.n,n.nBitLength),o=n.toBytes||((y,a,g)=>{const x=a.toAffine();return bt(Uint8Array.from([4]),t.toBytes(x.x),t.toBytes(x.y))}),i=n.fromBytes||(y=>{const a=y.subarray(1),g=t.fromBytes(a.subarray(0,t.BYTES)),x=t.fromBytes(a.subarray(t.BYTES,2*t.BYTES));return{x:g,y:x}});function c(y){const{a,b:g}=n,x=t.sqr(y),E=t.mul(x,y);return t.add(t.add(E,t.mul(y,a)),g)}if(!t.eql(t.sqr(n.Gy),c(n.Gx)))throw new Error("bad generator point: equation left != right");function f(y){return At(y,k,n.n)}function s(y){const{allowedPrivateKeyLengths:a,nByteLength:g,wrapPrivateKey:x,n:E}=n;if(a&&typeof y!="bigint"){if(it(y)&&(y=dt(y)),typeof y!="string"||!a.includes(y.length))throw new Error("invalid private key");y=y.padStart(g*2,"0")}let q;try{q=typeof y=="bigint"?y:rt(K("private key",y,g))}catch{throw new Error("invalid private key, expected hex or "+g+" bytes, got "+typeof y)}return x&&(q=M(q,E)),ot("private key",q,k,E),q}function u(y){if(!(y instanceof l))throw new Error("ProjectivePoint expected")}const b=zt((y,a)=>{const{px:g,py:x,pz:E}=y;if(t.eql(E,t.ONE))return{x:g,y:x};const q=y.is0();a==null&&(a=q?t.ONE:t.inv(E));const L=t.mul(g,a),I=t.mul(x,a),B=t.mul(E,a);if(q)return{x:t.ZERO,y:t.ZERO};if(!t.eql(B,t.ONE))throw new Error("invZ was invalid");return{x:L,y:I}}),h=zt(y=>{if(y.is0()){if(n.allowInfinityPoint&&!t.is0(y.py))return;throw new Error("bad point: ZERO")}const{x:a,y:g}=y.toAffine();if(!t.isValid(a)||!t.isValid(g))throw new Error("bad point: x or y not FE");const x=t.sqr(g),E=c(a);if(!t.eql(x,E))throw new Error("bad point: equation left != right");if(!y.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class l{constructor(a,g,x){if(this.px=a,this.py=g,this.pz=x,a==null||!t.isValid(a))throw new Error("x required");if(g==null||!t.isValid(g))throw new Error("y required");if(x==null||!t.isValid(x))throw new Error("z required");Object.freeze(this)}static fromAffine(a){const{x:g,y:x}=a||{};if(!a||!t.isValid(g)||!t.isValid(x))throw new Error("invalid affine point");if(a instanceof l)throw new Error("projective point not allowed");const E=q=>t.eql(q,t.ZERO);return E(g)&&E(x)?l.ZERO:new l(g,x,t.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(a){const g=t.invertBatch(a.map(x=>x.pz));return a.map((x,E)=>x.toAffine(g[E])).map(l.fromAffine)}static fromHex(a){const g=l.fromAffine(i(K("pointHex",a)));return g.assertValidity(),g}static fromPrivateKey(a){return l.BASE.multiply(s(a))}static msm(a,g){return Xe(l,r,a,g)}_setWindowSize(a){N.setWindowSize(this,a)}assertValidity(){h(this)}hasEvenY(){const{y:a}=this.toAffine();if(t.isOdd)return!t.isOdd(a);throw new Error("Field doesn't support isOdd")}equals(a){u(a);const{px:g,py:x,pz:E}=this,{px:q,py:L,pz:I}=a,B=t.eql(t.mul(g,I),t.mul(q,E)),A=t.eql(t.mul(x,I),t.mul(L,E));return B&&A}negate(){return new l(this.px,t.neg(this.py),this.pz)}double(){const{a,b:g}=n,x=t.mul(g,Jt),{px:E,py:q,pz:L}=this;let I=t.ZERO,B=t.ZERO,A=t.ZERO,v=t.mul(E,E),C=t.mul(q,q),U=t.mul(L,L),H=t.mul(E,q);return H=t.add(H,H),A=t.mul(E,L),A=t.add(A,A),I=t.mul(a,A),B=t.mul(x,U),B=t.add(I,B),I=t.sub(C,B),B=t.add(C,B),B=t.mul(I,B),I=t.mul(H,I),A=t.mul(x,A),U=t.mul(a,U),H=t.sub(v,U),H=t.mul(a,H),H=t.add(H,A),A=t.add(v,v),v=t.add(A,v),v=t.add(v,U),v=t.mul(v,H),B=t.add(B,v),U=t.mul(q,L),U=t.add(U,U),v=t.mul(U,H),I=t.sub(I,v),A=t.mul(U,C),A=t.add(A,A),A=t.add(A,A),new l(I,B,A)}add(a){u(a);const{px:g,py:x,pz:E}=this,{px:q,py:L,pz:I}=a;let B=t.ZERO,A=t.ZERO,v=t.ZERO;const C=n.a,U=t.mul(n.b,Jt);let H=t.mul(g,q),j=t.mul(x,L),d=t.mul(E,I),w=t.add(g,x),p=t.add(q,L);w=t.mul(w,p),p=t.add(H,j),w=t.sub(w,p),p=t.add(g,E);let S=t.add(q,I);return p=t.mul(p,S),S=t.add(H,d),p=t.sub(p,S),S=t.add(x,E),B=t.add(L,I),S=t.mul(S,B),B=t.add(j,d),S=t.sub(S,B),v=t.mul(C,p),B=t.mul(U,d),v=t.add(B,v),B=t.sub(j,v),v=t.add(j,v),A=t.mul(B,v),j=t.add(H,H),j=t.add(j,H),d=t.mul(C,d),p=t.mul(U,p),j=t.add(j,d),d=t.sub(H,d),d=t.mul(C,d),p=t.add(p,d),H=t.mul(j,p),A=t.add(A,H),H=t.mul(S,p),B=t.mul(w,B),B=t.sub(B,H),H=t.mul(w,j),v=t.mul(S,v),v=t.add(v,H),new l(B,A,v)}subtract(a){return this.add(a.negate())}is0(){return this.equals(l.ZERO)}wNAF(a){return N.wNAFCached(this,a,l.normalizeZ)}multiplyUnsafe(a){const{endo:g,n:x}=n;ot("scalar",a,W,x);const E=l.ZERO;if(a===W)return E;if(this.is0()||a===k)return this;if(!g||N.hasPrecomputes(this))return N.wNAFCachedUnsafe(this,a,l.normalizeZ);let{k1neg:q,k1:L,k2neg:I,k2:B}=g.splitScalar(a),A=E,v=E,C=this;for(;L>W||B>W;)L&k&&(A=A.add(C)),B&k&&(v=v.add(C)),C=C.double(),L>>=k,B>>=k;return q&&(A=A.negate()),I&&(v=v.negate()),v=new l(t.mul(v.px,g.beta),v.py,v.pz),A.add(v)}multiply(a){const{endo:g,n:x}=n;ot("scalar",a,k,x);let E,q;if(g){const{k1neg:L,k1:I,k2neg:B,k2:A}=g.splitScalar(a);let{p:v,f:C}=this.wNAF(I),{p:U,f:H}=this.wNAF(A);v=N.constTimeNegate(L,v),U=N.constTimeNegate(B,U),U=new l(t.mul(U.px,g.beta),U.py,U.pz),E=v.add(U),q=C.add(H)}else{const{p:L,f:I}=this.wNAF(a);E=L,q=I}return l.normalizeZ([E,q])[0]}multiplyAndAddUnsafe(a,g,x){const E=l.BASE,q=(I,B)=>B===W||B===k||!I.equals(E)?I.multiplyUnsafe(B):I.multiply(B),L=q(this,g).add(q(a,x));return L.is0()?void 0:L}toAffine(a){return b(this,a)}isTorsionFree(){const{h:a,isTorsionFree:g}=n;if(a===k)return!0;if(g)return g(l,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:a,clearCofactor:g}=n;return a===k?this:g?g(l,this):this.multiplyUnsafe(n.h)}toRawBytes(a=!0){return lt("isCompressed",a),this.assertValidity(),o(l,this,a)}toHex(a=!0){return lt("isCompressed",a),dt(this.toRawBytes(a))}}l.BASE=new l(n.Gx,n.Gy,t.ONE),l.ZERO=new l(t.ZERO,t.ONE,t.ZERO);const m=n.nBitLength,N=We(l,n.endo?Math.ceil(m/2):m);return{CURVE:n,ProjectivePoint:l,normPrivateKeyToScalar:s,weierstrassEquation:c,isWithinCurveOrder:f}}function rn(e){const n=he(e);return xt(n,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...n})}function on(e){const n=rn(e),{Fp:t,n:r}=n,o=t.BYTES+1,i=2*t.BYTES+1;function c(d){return M(d,r)}function f(d){return Rt(d,r)}const{ProjectivePoint:s,normPrivateKeyToScalar:u,weierstrassEquation:b,isWithinCurveOrder:h}=nn({...n,toBytes(d,w,p){const S=w.toAffine(),O=t.toBytes(S.x),_=bt;return lt("isCompressed",p),p?_(Uint8Array.from([w.hasEvenY()?2:3]),O):_(Uint8Array.from([4]),O,t.toBytes(S.y))},fromBytes(d){const w=d.length,p=d[0],S=d.subarray(1);if(w===o&&(p===2||p===3)){const O=rt(S);if(!At(O,k,t.ORDER))throw new Error("Point is not on curve");const _=b(O);let Z;try{Z=t.sqrt(_)}catch(F){const V=F instanceof Error?": "+F.message:"";throw new Error("Point is not on curve"+V)}const R=(Z&k)===k;return(p&1)===1!==R&&(Z=t.neg(Z)),{x:O,y:Z}}else if(w===i&&p===4){const O=t.fromBytes(S.subarray(0,t.BYTES)),_=t.fromBytes(S.subarray(t.BYTES,2*t.BYTES));return{x:O,y:_}}else{const O=o,_=i;throw new Error("invalid Point, expected length of "+O+", or uncompressed "+_+", got "+w)}}}),l=d=>dt(gt(d,n.nByteLength));function m(d){const w=r>>k;return d>w}function N(d){return m(d)?c(-d):d}const y=(d,w,p)=>rt(d.slice(w,p));class a{constructor(w,p,S){this.r=w,this.s=p,this.recovery=S,this.assertValidity()}static fromCompact(w){const p=n.nByteLength;return w=K("compactSignature",w,p*2),new a(y(w,0,p),y(w,p,2*p))}static fromDER(w){const{r:p,s:S}=D.toSig(K("DER",w));return new a(p,S)}assertValidity(){ot("r",this.r,k,r),ot("s",this.s,k,r)}addRecoveryBit(w){return new a(this.r,this.s,w)}recoverPublicKey(w){const{r:p,s:S,recovery:O}=this,_=I(K("msgHash",w));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const Z=O===2||O===3?p+n.n:p;if(Z>=t.ORDER)throw new Error("recovery id 2 or 3 invalid");const R=(O&1)===0?"02":"03",G=s.fromHex(R+l(Z)),F=f(Z),V=c(-_*F),st=c(S*F),X=s.BASE.multiplyAndAddUnsafe(G,V,st);if(!X)throw new Error("point at infinify");return X.assertValidity(),X}hasHighS(){return m(this.s)}normalizeS(){return this.hasHighS()?new a(this.r,c(-this.s),this.recovery):this}toDERRawBytes(){return ht(this.toDERHex())}toDERHex(){return D.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ht(this.toCompactHex())}toCompactHex(){return l(this.r)+l(this.s)}}const g={isValidPrivateKey(d){try{return u(d),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const d=ue(n.n);return Ge(n.randomBytes(d),n.n)},precompute(d=8,w=s.BASE){return w._setWindowSize(d),w.multiply(BigInt(3)),w}};function x(d,w=!0){return s.fromPrivateKey(d).toRawBytes(w)}function E(d){const w=it(d),p=typeof d=="string",S=(w||p)&&d.length;return w?S===o||S===i:p?S===2*o||S===2*i:d instanceof s}function q(d,w,p=!0){if(E(d))throw new Error("first arg must be private key");if(!E(w))throw new Error("second arg must be public key");return s.fromHex(w).multiply(u(d)).toRawBytes(p)}const L=n.bits2int||function(d){if(d.length>8192)throw new Error("input is too large");const w=rt(d),p=d.length*8-n.nBitLength;return p>0?w>>BigInt(p):w},I=n.bits2int_modN||function(d){return c(L(d))},B=Ft(n.nBitLength);function A(d){return ot("num < 2^"+n.nBitLength,d,W,B),gt(d,n.nByteLength)}function v(d,w,p=C){if(["recovered","canonical"].some(tt=>tt in p))throw new Error("sign() legacy options not supported");const{hash:S,randomBytes:O}=n;let{lowS:_,prehash:Z,extraEntropy:R}=p;_==null&&(_=!0),d=K("msgHash",d),Qt(p),Z&&(d=K("prehashed msgHash",S(d)));const G=I(d),F=u(w),V=[A(F),A(G)];if(R!=null&&R!==!1){const tt=R===!0?O(t.BYTES):R;V.push(K("extraEntropy",tt))}const st=bt(...V),X=G;function Nt(tt){const ct=L(tt);if(!h(ct))return;const qt=f(ct),wt=s.BASE.multiply(ct).toAffine(),et=c(wt.x);if(et===W)return;const pt=c(qt*c(X+et*F));if(pt===W)return;let yt=(wt.x===et?0:2)|Number(wt.y&k),ft=pt;return _&&m(pt)&&(ft=N(pt),yt^=1),new a(et,ft,yt)}return{seed:st,k2sig:Nt}}const C={lowS:n.lowS,prehash:!1},U={lowS:n.lowS,prehash:!1};function H(d,w,p=C){const{seed:S,k2sig:O}=v(d,w,p),_=n;return re(_.hash.outputLen,_.nByteLength,_.hmac)(S,O)}s.BASE._setWindowSize(8);function j(d,w,p,S=U){var yt;const O=d;w=K("msgHash",w),p=K("publicKey",p);const{lowS:_,prehash:Z,format:R}=S;if(Qt(S),"strict"in S)throw new Error("options.strict was renamed to lowS");if(R!==void 0&&R!=="compact"&&R!=="der")throw new Error("format must be compact or der");const G=typeof O=="string"||it(O),F=!G&&!R&&typeof O=="object"&&O!==null&&typeof O.r=="bigint"&&typeof O.s=="bigint";if(!G&&!F)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let V,st;try{if(F&&(V=new a(O.r,O.s)),G){try{R!=="compact"&&(V=a.fromDER(O))}catch(ft){if(!(ft instanceof D.Err))throw ft}!V&&R!=="der"&&(V=a.fromCompact(O))}st=s.fromHex(p)}catch{return!1}if(!V||_&&V.hasHighS())return!1;Z&&(w=n.hash(w));const{r:X,s:Nt}=V,tt=I(w),ct=f(Nt),qt=c(tt*ct),wt=c(X*ct),et=(yt=s.BASE.multiplyAndAddUnsafe(st,qt,wt))==null?void 0:yt.toAffine();return et?c(et.x)===X:!1}return{CURVE:n,getPublicKey:x,getSharedSecret:q,sign:H,verify:j,ProjectivePoint:s,Signature:a,utils:g}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function sn(e){return{hash:e,hmac:(n,...t)=>se(e,n,Oe(...t)),randomBytes:He}}function cn(e,n){const t=r=>on({...e,...sn(r)});return{...t(n),create:t}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ge=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),te=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),fn=BigInt(1),Zt=BigInt(2),ee=(e,n)=>(e+n/Zt)/n;function an(e){const n=ge,t=BigInt(3),r=BigInt(6),o=BigInt(11),i=BigInt(22),c=BigInt(23),f=BigInt(44),s=BigInt(88),u=e*e*e%n,b=u*u*e%n,h=Y(b,t,n)*b%n,l=Y(h,t,n)*b%n,m=Y(l,Zt,n)*u%n,N=Y(m,o,n)*m%n,y=Y(N,i,n)*N%n,a=Y(y,f,n)*y%n,g=Y(a,s,n)*a%n,x=Y(g,f,n)*y%n,E=Y(x,t,n)*b%n,q=Y(E,c,n)*N%n,L=Y(q,r,n)*u%n,I=Y(L,Zt,n);if(!Vt.eql(Vt.sqr(I),e))throw new Error("Cannot find square root");return I}const Vt=fe(ge,void 0,void 0,{sqrt:an}),un=cn({a:BigInt(0),b:BigInt(7),Fp:Vt,n:te,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const n=te,t=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),r=-fn*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=t,c=BigInt("0x100000000000000000000000000000000"),f=ee(i*e,n),s=ee(-r*e,n);let u=M(e-f*t-s*o,n),b=M(-f*r-s*i,n);const h=u>c,l=b>c;if(h&&(u=n-u),l&&(b=n-b),u>c||b>c)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:h,k1:u,k2neg:l,k2:b}}}},Re);BigInt(0);un.ProjectivePoint;export{un as secp256k1};
