import{i as Se,g as be,d as we,a as ee,s as Ie,r as te,b as G,c as Re,m as K}from"./mobile-197951e1.js";import{B as ke,p as Ee,s as ve,a as Oe,d as Te,c as q}from"./index-0099995b.js";import{c2 as Me,b_ as A,cE as qe,cF as V}from"./vendor-a307b7f6.js";const Ce=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],ne=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign","wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"];var Ae=$;$.strict=re;$.loose=se;var Ue=Object.prototype.toString,je={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function $(t){return re(t)||se(t)}function re(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function se(t){return je[Ue.call(t)]}var Ne=Ae.strict,Le=function(e){if(Ne(e)){var n=A.Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return A.Buffer.from(e)};const xe=Me(Le),ie="hex",oe="utf8",j="0";function v(t){return new Uint8Array(t)}function ce(t,e=!1){const n=t.toString(ie);return e?O(n):n}function Pe(t){return t.toString(oe)}function N(t){return xe(t)}function k(t,e=!1){return ce(N(t),e)}function Fe(t){return Pe(N(t))}function He(t){return A.Buffer.from(w(t),ie)}function E(t){return v(He(t))}function J(t){return A.Buffer.from(t,oe)}function Be(t){return v(J(t))}function $e(t,e=!1){return ce(J(t),e)}function Je(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ae(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function We(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function De(t,e=8,n=j){return Qe(t,We(t.length,e),n)}function Qe(t,e,n=j){return Ke(t,e,!0,n)}function w(t){return t.replace(/^0x/,"")}function O(t){return t.startsWith("0x")?t:`0x${t}`}function he(t){return t=w(t),t=De(t,2),t&&(t=O(t)),t}function Ge(t){const e=t.startsWith("0x");return t=w(t),t=t.startsWith(j)?t.substring(1):t,e?O(t):t}function Ke(t,e,n,r=j){const i=e-t.length;let h=t;if(i>0){const l=r.repeat(i);h=n?l+t:t+l}return h}function H(t){return N(new Uint8Array(t))}function Ve(t,e){return k(new Uint8Array(t),!e)}function Ye(t){return v(t).buffer}function Ze(t){return J(t)}function ze(t,e){return $e(t,!e)}function Xe(t){return E(t).buffer}function ue(t,e){const n=w(he(new ke(t).toString(16)));return e?n:O(n)}function C(t){return he(t)}function et(t){return Ge(O(t))}const tt=Ee;function x(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function nt(t){return t===""||typeof t=="string"&&t.trim()===""}function rt(t){return!(t&&t.length)}function de(t,e){return Je(t,e)}function st(t){return typeof t.method<"u"}function M(t){return typeof t.result<"u"}function U(t){return typeof t.error<"u"}function Y(t){return typeof t.event<"u"}function it(t){return Ce.includes(t)||t.startsWith("wc_")}function ot(t){return t.method.startsWith("wc_")?!0:!ne.includes(t.method)}function ct(t){t=w(t.toLowerCase());const e=w(qe.keccak_256(Ze(t)));let n="";for(let r=0;r<t.length;r++)parseInt(e[r],16)>7?n+=t[r].toUpperCase():n+=t[r];return O(n)}const at=t=>t?t.toLowerCase().substring(0,2)!=="0x"?!1:/^(0x)?[0-9a-f]{40}$/i.test(t)?/^(0x)?[0-9a-f]{40}$/.test(t)||/^(0x)?[0-9A-F]{40}$/.test(t)?!0:t===ct(t):!1:!1;function Z(t){return!rt(t)&&!de(t[0])&&(t[0]=ze(t[0])),t}function P(t){if(typeof t.type<"u"&&t.type!=="0")return t;if(typeof t.from>"u"||!at(t.from))throw new Error("Transaction object must include a valid 'from' value.");function e(i){let h=i;return(typeof i=="number"||typeof i=="string"&&!nt(i))&&(de(i)?typeof i=="string"&&(h=C(i)):h=ue(i)),typeof h=="string"&&(h=et(h)),h}const n={from:C(t.from),to:typeof t.to>"u"?void 0:C(t.to),gasPrice:typeof t.gasPrice>"u"?"":e(t.gasPrice),gas:typeof t.gas>"u"?typeof t.gasLimit>"u"?"":e(t.gasLimit):e(t.gas),value:typeof t.value>"u"?"":e(t.value),nonce:typeof t.nonce>"u"?"":e(t.nonce),data:typeof t.data>"u"?"":C(t.data)||"0x"},r=["gasPrice","gas","value","nonce"];return Object.keys(n).forEach(i=>{(typeof n[i]>"u"||typeof n[i]=="string"&&!n[i].trim().length)&&r.includes(i)&&delete n[i]}),n}function ht(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}var W={};(function(t){const e=Oe,n=Te,r=ve,i=s=>s==null;function h(s){switch(s.arrayFormat){case"index":return o=>(a,c)=>{const u=a.length;return c===void 0||s.skipNull&&c===null||s.skipEmptyString&&c===""?a:c===null?[...a,[f(o,s),"[",u,"]"].join("")]:[...a,[f(o,s),"[",f(u,s),"]=",f(c,s)].join("")]};case"bracket":return o=>(a,c)=>c===void 0||s.skipNull&&c===null||s.skipEmptyString&&c===""?a:c===null?[...a,[f(o,s),"[]"].join("")]:[...a,[f(o,s),"[]=",f(c,s)].join("")];case"comma":case"separator":return o=>(a,c)=>c==null||c.length===0?a:a.length===0?[[f(o,s),"=",f(c,s)].join("")]:[[a,f(c,s)].join(s.arrayFormatSeparator)];default:return o=>(a,c)=>c===void 0||s.skipNull&&c===null||s.skipEmptyString&&c===""?a:c===null?[...a,f(o,s)]:[...a,[f(o,s),"=",f(c,s)].join("")]}}function l(s){let o;switch(s.arrayFormat){case"index":return(a,c,u)=>{if(o=/\[(\d*)\]$/.exec(a),a=a.replace(/\[\d*\]$/,""),!o){u[a]=c;return}u[a]===void 0&&(u[a]={}),u[a][o[1]]=c};case"bracket":return(a,c,u)=>{if(o=/(\[\])$/.exec(a),a=a.replace(/\[\]$/,""),!o){u[a]=c;return}if(u[a]===void 0){u[a]=[c];return}u[a]=[].concat(u[a],c)};case"comma":case"separator":return(a,c,u)=>{const d=typeof c=="string"&&c.split("").indexOf(s.arrayFormatSeparator)>-1?c.split(s.arrayFormatSeparator).map(y=>g(y,s)):c===null?c:g(c,s);u[a]=d};default:return(a,c,u)=>{if(u[a]===void 0){u[a]=c;return}u[a]=[].concat(u[a],c)}}}function p(s){if(typeof s!="string"||s.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function f(s,o){return o.encode?o.strict?e(s):encodeURIComponent(s):s}function g(s,o){return o.decode?n(s):s}function T(s){return Array.isArray(s)?s.sort():typeof s=="object"?T(Object.keys(s)).sort((o,a)=>Number(o)-Number(a)).map(o=>s[o]):s}function m(s){const o=s.indexOf("#");return o!==-1&&(s=s.slice(0,o)),s}function S(s){let o="";const a=s.indexOf("#");return a!==-1&&(o=s.slice(a)),o}function b(s){s=m(s);const o=s.indexOf("?");return o===-1?"":s.slice(o+1)}function L(s,o){return o.parseNumbers&&!Number.isNaN(Number(s))&&typeof s=="string"&&s.trim()!==""?s=Number(s):o.parseBooleans&&s!==null&&(s.toLowerCase()==="true"||s.toLowerCase()==="false")&&(s=s.toLowerCase()==="true"),s}function Q(s,o){o=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},o),p(o.arrayFormatSeparator);const a=l(o),c=Object.create(null);if(typeof s!="string"||(s=s.trim().replace(/^[?#&]/,""),!s))return c;for(const u of s.split("&")){let[_,d]=r(o.decode?u.replace(/\+/g," "):u,"=");d=d===void 0?null:["comma","separator"].includes(o.arrayFormat)?d:g(d,o),a(g(_,o),d,c)}for(const u of Object.keys(c)){const _=c[u];if(typeof _=="object"&&_!==null)for(const d of Object.keys(_))_[d]=L(_[d],o);else c[u]=L(_,o)}return o.sort===!1?c:(o.sort===!0?Object.keys(c).sort():Object.keys(c).sort(o.sort)).reduce((u,_)=>{const d=c[_];return d&&typeof d=="object"&&!Array.isArray(d)?u[_]=T(d):u[_]=d,u},Object.create(null))}t.extract=b,t.parse=Q,t.stringify=(s,o)=>{if(!s)return"";o=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},o),p(o.arrayFormatSeparator);const a=d=>o.skipNull&&i(s[d])||o.skipEmptyString&&s[d]==="",c=h(o),u={};for(const d of Object.keys(s))a(d)||(u[d]=s[d]);const _=Object.keys(u);return o.sort!==!1&&_.sort(o.sort),_.map(d=>{const y=s[d];return y===void 0?"":y===null?f(d,o):Array.isArray(y)?y.reduce(c(d),[]).join("&"):f(d,o)+"="+f(y,o)}).filter(d=>d.length>0).join("&")},t.parseUrl=(s,o)=>{o=Object.assign({decode:!0},o);const[a,c]=r(s,"#");return Object.assign({url:a.split("?")[0]||"",query:Q(b(s),o)},o&&o.parseFragmentIdentifier&&c?{fragmentIdentifier:g(c,o)}:{})},t.stringifyUrl=(s,o)=>{o=Object.assign({encode:!0,strict:!0},o);const a=m(s.url).split("?")[0]||"",c=t.extract(s.url),u=t.parse(c,{sort:!1}),_=Object.assign(u,s.query);let d=t.stringify(_,o);d&&(d=`?${d}`);let y=S(s.url);return s.fragmentIdentifier&&(y=`#${f(s.fragmentIdentifier,o)}`),`${a}${d}${y}`}})(W);function ut(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function dt(t,e){let n=fe(t);return n=Object.assign(Object.assign({},n),e),t=ft(n),t}function fe(t){return W.parse(t)}function ft(t){return W.stringify(t)}function lt(t){return typeof t.bridge<"u"}function _t(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),i=t.substring(e+1,n);function h(m){const S="@",b=m.split(S);return{handshakeTopic:b[0],version:parseInt(b[1],10)}}const l=h(i),p=typeof n<"u"?t.substr(n):"";function f(m){const S=fe(m);return{key:S.key||"",bridge:S.bridge||""}}const g=f(p);return Object.assign(Object.assign({protocol:r},l),g)}class pt{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const gt=typeof V.WebSocket<"u"?V.WebSocket:require("ws");class yt{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new pt,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=mt(this._url,this._protocol,this._version);if(this._nextSocket=new gt(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(i=>i.event==="message");r&&r.length&&r.forEach(i=>i.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function mt(t,e,n){var r,i;const l=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),p=Se()?{protocol:e,version:n,env:"browser",host:((r=be())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((i=we())===null||i===void 0?void 0:i.name)||""},f=dt(ut(l[1]||""),p);return l[0]+"?"+f}const F="Session currently connected",R="Session currently disconnected",St="Session Rejected",bt="Missing JSON RPC response",wt='JSON-RPC success response must include "result" field',It='JSON-RPC error response must include "error" field',Rt='JSON RPC request must have valid "method" value',kt='JSON RPC request must have valid "id" value',Et="Missing one of the required parameters: bridge / uri / session",z="JSON RPC response format is invalid",vt="URI format is invalid",Ot="QRCode Modal not provided",X="User close QRCode Modal";class Tt{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;st(e)?r=e.method:M(e)||U(e)?r=`response:${e.id}`:Y(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(i=>i.event===r)),(!n||!n.length)&&!it(r)&&!Y(r)&&(n=this._eventEmitters.filter(i=>i.event==="call_request")),n.forEach(i=>{if(U(e)){const h=new Error(e.error.message);i.callback(h,null)}else i.callback(null,e)})}}class Mt{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=ee(this.storageId);return n&&lt(n)&&(e=n),e}setSession(e){return Ie(this.storageId,e),e}removeSession(){te(this.storageId)}}const qt="walletconnect.org",Ct="abcdefghijklmnopqrstuvwxyz0123456789",le=Ct.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function At(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function Ut(t){return At(t).split(".").slice(-2).join(".")}function jt(){return Math.floor(Math.random()*le.length)}function Nt(){return le[jt()]}function Lt(t){return Ut(t)===qt}function xt(t){return Lt(t)?Nt():t}class Pt{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new Tt,this._clientMeta=G()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Mt(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...ne,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(Et);e.connectorOpts.bridge&&(this.bridge=xt(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new yt({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Xe(e);this._key=n}get key(){return this._key?Ve(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=x()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=G()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:i}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=i}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=x(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(X)});const r=()=>{this.killSession()};try{const i=await this._sendCallRequest(n);return i&&r(),i}catch(i){throw r(),i}}async connect(e){if(!this._qrcodeModal)throw new Error(Ot);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(X))),this.on("connect",(i,h)=>{if(i)return r(i);n(h.params[0])})}))}async createSession(e){if(this._connected)throw new Error(F);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=x(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(F);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(F);const n=e&&e.message?e.message:St,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(R);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},i=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(i),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(R);const n=P(e),r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(R);const n=P(e),r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(R);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(R);e=Z(e);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(R);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,i)=>{this._subscribeToResponse(e.id,(h,l)=>{if(h){i(h);return}if(!l)throw new Error(bt);r(l)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(R);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return ue(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params&&(e.params[0]=P(e.params[0]));break;case"personal_sign":e.params&&(e.params=Z(e.params));break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(M(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(wt)}rejectRequest(e){if(U(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(It)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),i=await this._encrypt(r),h=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,l=JSON.stringify(i),p=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:ot(r);this._transport.send(l,h,p)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,i=JSON.stringify(n),h=!0;this._transport.send(i,r,h)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(Rt);return{id:typeof e.id>"u"?tt():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(kt);const n={id:e.id,jsonrpc:"2.0"};if(U(e)){const r=ht(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(M(e))return Object.assign(Object.assign({},n),e);throw new Error(z)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),te(K)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const i=await this._decrypt(r);i&&this._eventManager.trigger(i)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,i)=>{if(r){this._handleSessionResponse(r.message);return}M(i)?this._handleSessionResponse(n,i.result):i.error&&i.error.message?this._handleSessionResponse(i.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(i,h)=>{if(i){r(i);return}M(h)?n(h.result):h.error&&h.error.message?r(h.error):r(new Error(z))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Re()&&this._signingMethods.includes(r.method)){const i=ee(K);i&&(window.location.href=i.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,i=encodeURIComponent(this.bridge),h=this.key;return`${e}:${n}@${r}?bridge=${i}&key=${h}`}_parseUri(e){const n=_t(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const i=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const h=n.key;return{handshakeTopic:r,bridge:i,key:h}}else throw new Error(vt)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,i)=>{if(r)throw r;if(e.peerMeta){const h=i.params[0].peerMeta.name;n.peerName=h}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function Ft(t){return q.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const _e=256,pe=_e,Ht=_e,I="AES-CBC",Bt=`SHA-${pe}`,B="HMAC",$t="encrypt",Jt="decrypt",Wt="sign",Dt="verify";function Qt(t){return t===I?{length:pe,name:I}:{hash:{name:Bt},name:B}}function Gt(t){return t===I?[$t,Jt]:[Wt,Dt]}async function D(t,e=I){return q.getSubtleCrypto().importKey("raw",t,Qt(e),!0,Gt(e))}async function Kt(t,e,n){const r=q.getSubtleCrypto(),i=await D(e,I),h=await r.encrypt({iv:t,name:I},i,n);return new Uint8Array(h)}async function Vt(t,e,n){const r=q.getSubtleCrypto(),i=await D(e,I),h=await r.decrypt({iv:t,name:I},i,n);return new Uint8Array(h)}async function Yt(t,e){const n=q.getSubtleCrypto(),r=await D(t,B),i=await n.sign({length:Ht,name:B},r,e);return new Uint8Array(i)}function Zt(t,e,n){return Kt(t,e,n)}function zt(t,e,n){return Vt(t,e,n)}async function ge(t,e){return await Yt(t,e)}async function ye(t){const e=(t||256)/8,n=Ft(e);return Ye(N(n))}async function me(t,e){const n=E(t.data),r=E(t.iv),i=E(t.hmac),h=k(i,!1),l=ae(n,r),p=await ge(e,l),f=k(p,!1);return w(h)===w(f)}async function Xt(t,e,n){const r=v(H(e)),i=n||await ye(128),h=v(H(i)),l=k(h,!1),p=JSON.stringify(t),f=Be(p),g=await Zt(h,r,f),T=k(g,!1),m=ae(g,h),S=await ge(r,m),b=k(S,!1);return{data:T,hmac:b,iv:l}}async function en(t,e){const n=v(H(e));if(!n)throw new Error("Missing key: required for decryption");if(!await me(t,n))return null;const i=E(t.data),h=E(t.iv),l=await zt(h,n,i),p=Fe(l);let f;try{f=JSON.parse(p)}catch{return null}return f}const tn=Object.freeze(Object.defineProperty({__proto__:null,decrypt:en,encrypt:Xt,generateKey:ye,verifyHmac:me},Symbol.toStringTag,{value:"Module"}));class on extends Pt{constructor(e,n){super({cryptoLib:tn,connectorOpts:e,pushServerOpts:n})}}export{on as default};
