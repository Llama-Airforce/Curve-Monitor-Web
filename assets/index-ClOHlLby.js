function j(n,e){for(var s=0;s<e.length;s++){const t=e[s];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in n)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}},d=typeof Reflect=="object"?Reflect:null,L=d&&typeof d.apply=="function"?d.apply:function(e,s,t){return Function.prototype.apply.call(e,s,t)},v;d&&typeof d.ownKeys=="function"?v=d.ownKeys:Object.getOwnPropertySymbols?v=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:v=function(e){return Object.getOwnPropertyNames(e)};function N(n){console&&console.warn&&console.warn(n)}var b=Number.isNaN||function(e){return e!==e};function a(){a.init.call(this)}_.exports=a;_.exports.once=B;a.EventEmitter=a;a.prototype._events=void 0;a.prototype._eventsCount=0;a.prototype._maxListeners=void 0;var w=10;function g(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return w},set:function(n){if(typeof n!="number"||n<0||b(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");w=n}});a.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};a.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||b(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function x(n){return n._maxListeners===void 0?a.defaultMaxListeners:n._maxListeners}a.prototype.getMaxListeners=function(){return x(this)};a.prototype.emit=function(e){for(var s=[],t=1;t<arguments.length;t++)s.push(arguments[t]);var r=e==="error",o=this._events;if(o!==void 0)r=r&&o.error===void 0;else if(!r)return!1;if(r){var i;if(s.length>0&&(i=s[0]),i instanceof Error)throw i;var f=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw f.context=i,f}var u=o[e];if(u===void 0)return!1;if(typeof u=="function")L(u,this,s);else for(var c=u.length,h=T(u,c),t=0;t<c;++t)L(h[t],this,s);return!0};function O(n,e,s,t){var r,o,i;if(g(s),o=n._events,o===void 0?(o=n._events=Object.create(null),n._eventsCount=0):(o.newListener!==void 0&&(n.emit("newListener",e,s.listener?s.listener:s),o=n._events),i=o[e]),i===void 0)i=o[e]=s,++n._eventsCount;else if(typeof i=="function"?i=o[e]=t?[s,i]:[i,s]:t?i.unshift(s):i.push(s),r=x(n),r>0&&i.length>r&&!i.warned){i.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=n,f.type=e,f.count=i.length,N(f)}return n}a.prototype.addListener=function(e,s){return O(this,e,s,!1)};a.prototype.on=a.prototype.addListener;a.prototype.prependListener=function(e,s){return O(this,e,s,!0)};function S(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function k(n,e,s){var t={fired:!1,wrapFn:void 0,target:n,type:e,listener:s},r=S.bind(t);return r.listener=s,t.wrapFn=r,r}a.prototype.once=function(e,s){return g(s),this.on(e,k(this,e,s)),this};a.prototype.prependOnceListener=function(e,s){return g(s),this.prependListener(e,k(this,e,s)),this};a.prototype.removeListener=function(e,s){var t,r,o,i,f;if(g(s),r=this._events,r===void 0)return this;if(t=r[e],t===void 0)return this;if(t===s||t.listener===s)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,t.listener||s));else if(typeof t!="function"){for(o=-1,i=t.length-1;i>=0;i--)if(t[i]===s||t[i].listener===s){f=t[i].listener,o=i;break}if(o<0)return this;o===0?t.shift():M(t,o),t.length===1&&(r[e]=t[0]),r.removeListener!==void 0&&this.emit("removeListener",e,f||s)}return this};a.prototype.off=a.prototype.removeListener;a.prototype.removeAllListeners=function(e){var s,t,r;if(t=this._events,t===void 0)return this;if(t.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):t[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete t[e]),this;if(arguments.length===0){var o=Object.keys(t),i;for(r=0;r<o.length;++r)i=o[r],i!=="removeListener"&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(s=t[e],typeof s=="function")this.removeListener(e,s);else if(s!==void 0)for(r=s.length-1;r>=0;r--)this.removeListener(e,s[r]);return this};function C(n,e,s){var t=n._events;if(t===void 0)return[];var r=t[e];return r===void 0?[]:typeof r=="function"?s?[r.listener||r]:[r]:s?H(r):T(r,r.length)}a.prototype.listeners=function(e){return C(this,e,!0)};a.prototype.rawListeners=function(e){return C(this,e,!1)};a.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):E.call(n,e)};a.prototype.listenerCount=E;function E(n){var e=this._events;if(e!==void 0){var s=e[n];if(typeof s=="function")return 1;if(s!==void 0)return s.length}return 0}a.prototype.eventNames=function(){return this._eventsCount>0?v(this._events):[]};function T(n,e){for(var s=new Array(e),t=0;t<e;++t)s[t]=n[t];return s}function M(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function H(n){for(var e=new Array(n.length),s=0;s<e.length;++s)e[s]=n[s].listener||n[s];return e}function B(n,e){return new Promise(function(s,t){function r(i){n.removeListener(e,o),t(i)}function o(){typeof n.removeListener=="function"&&n.removeListener("error",r),s([].slice.call(arguments))}P(n,e,o,{once:!0}),e!=="error"&&R(n,r,{once:!0})})}function R(n,e,s){typeof n.on=="function"&&P(n,"error",e,s)}function P(n,e,s,t){if(typeof n.on=="function")t.once?n.once(e,s):n.on(e,s);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(o){t.once&&n.removeEventListener(e,r),s(o)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var I=_.exports,A={},m={},y={};Object.defineProperty(y,"__esModule",{value:!0});y.getLowerCase=void 0;function W(n){return n&&n.toLowerCase()}y.getLowerCase=W;Object.defineProperty(m,"__esModule",{value:!0});m.SafeAppProvider=void 0;const D=I,p=y;class F extends D.EventEmitter{constructor(e,s){super(),this.submittedTxs=new Map,this.safe=e,this.sdk=s}async connect(){this.emit("connect",{chainId:this.chainId})}async disconnect(){}get chainId(){return this.safe.chainId}async request(e){const{method:s,params:t=[]}=e;switch(s){case"eth_accounts":return[this.safe.safeAddress];case"net_version":case"eth_chainId":return`0x${this.chainId.toString(16)}`;case"personal_sign":{const[u,c]=t;if(this.safe.safeAddress.toLowerCase()!==c.toLowerCase())throw new Error("The address or message hash is invalid");const h=await this.sdk.txs.signMessage(u);return("signature"in h?h.signature:void 0)||"0x"}case"eth_sign":{const[u,c]=t;if(this.safe.safeAddress.toLowerCase()!==u.toLowerCase()||!c.startsWith("0x"))throw new Error("The address or message hash is invalid");const h=await this.sdk.txs.signMessage(c);return("signature"in h?h.signature:void 0)||"0x"}case"eth_signTypedData":case"eth_signTypedData_v4":{const[u,c]=t,h=typeof c=="string"?JSON.parse(c):c;if(this.safe.safeAddress.toLowerCase()!==u.toLowerCase())throw new Error("The address is invalid");const l=await this.sdk.txs.signTypedMessage(h);return("signature"in l?l.signature:void 0)||"0x"}case"eth_sendTransaction":const r={...t[0],value:t[0].value||"0",data:t[0].data||"0x"};typeof r.gas=="string"&&r.gas.startsWith("0x")&&(r.gas=parseInt(r.gas,16));const o=await this.sdk.txs.send({txs:[r],params:{safeTxGas:r.gas}});return this.submittedTxs.set(o.safeTxHash,{from:this.safe.safeAddress,hash:o.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:r.data,value:r.value,to:r.to,blockHash:null,blockNumber:null,transactionIndex:null}),o.safeTxHash;case"eth_blockNumber":return(await this.sdk.eth.getBlockByNumber(["latest"])).number;case"eth_getBalance":return this.sdk.eth.getBalance([(0,p.getLowerCase)(t[0]),t[1]]);case"eth_getCode":return this.sdk.eth.getCode([(0,p.getLowerCase)(t[0]),t[1]]);case"eth_getTransactionCount":return this.sdk.eth.getTransactionCount([(0,p.getLowerCase)(t[0]),t[1]]);case"eth_getStorageAt":return this.sdk.eth.getStorageAt([(0,p.getLowerCase)(t[0]),t[1],t[2]]);case"eth_getBlockByNumber":return this.sdk.eth.getBlockByNumber([t[0],t[1]]);case"eth_getBlockByHash":return this.sdk.eth.getBlockByHash([t[0],t[1]]);case"eth_getTransactionByHash":let f=t[0];try{f=(await this.sdk.txs.getBySafeTxHash(f)).txHash||f}catch{}return this.submittedTxs.has(f)?this.submittedTxs.get(f):this.sdk.eth.getTransactionByHash([f]).then(u=>(u&&(u.hash=t[0]),u));case"eth_getTransactionReceipt":{let u=t[0];try{u=(await this.sdk.txs.getBySafeTxHash(u)).txHash||u}catch{}return this.sdk.eth.getTransactionReceipt([u]).then(c=>(c&&(c.transactionHash=t[0]),c))}case"eth_estimateGas":return this.sdk.eth.getEstimateGas(t[0]);case"eth_call":return this.sdk.eth.call([t[0],t[1]]);case"eth_getLogs":return this.sdk.eth.getPastLogs([t[0]]);case"eth_gasPrice":return this.sdk.eth.getGasPrice();case"wallet_getPermissions":return this.sdk.wallet.getPermissions();case"wallet_requestPermissions":return this.sdk.wallet.requestPermissions(t[0]);case"safe_setSettings":return this.sdk.eth.setSafeSettings([t[0]]);default:throw Error(`"${e.method}" not implemented`)}}send(e,s){e||s("Undefined request"),this.request(e).then(t=>s(null,{jsonrpc:"2.0",id:e.id,result:t})).catch(t=>s(t,null))}}m.SafeAppProvider=F;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SafeAppProvider=void 0;var e=m;Object.defineProperty(n,"SafeAppProvider",{enumerable:!0,get:function(){return e.SafeAppProvider}})})(A);const G=j({__proto__:null},[A]);export{G as i};
