import{cI as le}from"./vendor-79687a91.js";const ce=Symbol(),X=Object.getPrototypeOf,J=new WeakMap,de=e=>e&&(J.has(e)?J.get(e):X(e)===Object.prototype||X(e)===Array.prototype),ue=e=>de(e)&&e[ce]||null,Y=(e,t=!0)=>{J.set(e,t)},q=e=>typeof e=="object"&&e!==null,A=new WeakMap,x=new WeakSet,pe=(e=Object.is,t=(o,g)=>new Proxy(o,g),s=o=>q(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,g,I=r)=>{const b=l.get(o);if((b==null?void 0:b[0])===g)return b[1];const y=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return Y(y,!0),l.set(o,[g,y]),Reflect.ownKeys(o).forEach(P=>{if(Object.getOwnPropertyDescriptor(y,P))return;const O=Reflect.get(o,P),D={value:O,enumerable:!0,configurable:!0};if(x.has(O))Y(O,!1);else if(O instanceof Promise)delete D.value,D.get=()=>I(O);else if(A.has(O)){const[v,z]=A.get(O);D.value=c(v,z(),I)}Object.defineProperty(y,P,D)}),Object.preventExtensions(y)},m=new WeakMap,p=[1,1],W=o=>{if(!q(o))throw new Error("object required");const g=m.get(o);if(g)return g;let I=p[0];const b=new Set,y=(i,a=++p[0])=>{I!==a&&(I=a,b.forEach(n=>n(i,a)))};let P=p[1];const O=(i=++p[1])=>(P!==i&&!b.size&&(P=i,v.forEach(([a])=>{const n=a[1](i);n>I&&(I=n)})),I),D=i=>(a,n)=>{const h=[...a];h[1]=[i,...h[1]],y(h,n)},v=new Map,z=(i,a)=>{if(b.size){const n=a[3](D(i));v.set(i,[a,n])}else v.set(i,[a])},Q=i=>{var a;const n=v.get(i);n&&(v.delete(i),(a=n[1])==null||a.call(n))},ae=i=>(b.add(i),b.size===1&&v.forEach(([n,h],R)=>{const k=n[3](D(R));v.set(R,[n,k])}),()=>{b.delete(i),b.size===0&&v.forEach(([n,h],R)=>{h&&(h(),v.set(R,[n]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(H,{deleteProperty(i,a){const n=Reflect.get(i,a);Q(a);const h=Reflect.deleteProperty(i,a);return h&&y(["delete",[a],n]),h},set(i,a,n,h){const R=Reflect.has(i,a),k=Reflect.get(i,a,h);if(R&&(e(k,n)||m.has(n)&&e(k,m.get(n))))return!0;Q(a),q(n)&&(n=ue(n)||n);let $=n;if(n instanceof Promise)n.then(C=>{n.status="fulfilled",n.value=C,y(["resolve",[a],C])}).catch(C=>{n.status="rejected",n.reason=C,y(["reject",[a],C])});else{!A.has(n)&&s(n)&&($=W(n));const C=!x.has($)&&A.get($);C&&z(a,C)}return Reflect.set(i,a,$,h),y(["set",[a],n,k]),!0}});m.set(o,V);const ie=[H,O,c,ae];return A.set(V,ie),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(V[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(H,i,a)}),V})=>[W,A,x,e,t,s,r,l,c,m,p],[fe]=pe();function S(e={}){return fe(e)}function j(e,t,s){const r=A.get(e);let l;const c=[],m=r[3];let p=!1;const o=m(g=>{if(c.push(g),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,p&&t(c.splice(0))}))});return p=!0,()=>{p=!1,o()}}function me(e,t){const s=A.get(e),[r,l,c]=s;return c(r,l(),t)}const d=S({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),re={state:d,subscribe(e){return j(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},f={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return f.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return f.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(f.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!f.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(f.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(f.WCM_VERSION,"2.6.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=re.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},he=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=S({enabled:he,userSessionId:"",events:[],connectedWalletId:void 0}),ge={state:u,subscribe(e){return j(u.events,()=>e(me(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},E=S({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:E,subscribe(e){return j(E,()=>e(E))},setChains(e){E.chains=e},setWalletConnectUri(e){E.walletConnectUri=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setIsAuth(e){E.isAuth=e}},B=S({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),N={state:B,subscribe(e){return j(B,()=>e(B))},setConfig(e){var t,s;ge.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),f.setModalVersionInStorage(),Object.assign(B,e)}},G="https://explorer-api.walletconnect.com";async function K(e,t){const s=new URL(e,G);return s.searchParams.append("projectId",N.state.projectId),Object.entries(t).forEach(([r,l])=>{l&&s.searchParams.append(r,String(l))}),(await fetch(s)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${N.state.projectId}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${N.state.projectId}`}};var be=Object.defineProperty,Z=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ee=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,we=(e,t)=>{for(var s in t||(t={}))ye.call(t,s)&&ee(e,s,t[s]);if(Z)for(var s of Z(t))ve.call(t,s)&&ee(e,s,t[s]);return e};const te=f.isMobile(),L=S({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),De={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=N.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(f.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await M.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const p=e.indexOf(c.id),W=e.indexOf(m.id);return p-W}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=f.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:f.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:p}=te?await M.getMobileListings(m):await M.getDesktopListings(m);L.recomendedWallets=Object.values(p)}return L.recomendedWallets},async getWallets(e){const t=we({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=N.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):f.isArray(s)&&(t.excludedIds=s.join(",")),f.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:p,total:W}=te?await M.getMobileListings(t):await M.getDesktopListings(t),o=Object.values(p),g=m?"search":"wallets";return L[g]={listings:[...L[g].listings,...o],total:W,page:c??1},{listings:o,total:W}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},_=S({open:!1}),F={state:_,subscribe(e){return j(_,()=>e(_))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),re.reset("ConnectWallet"),s&&r)_.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),_.open=!0,t())},200)}})},close(){_.open=!1}};var Ie=Object.defineProperty,se=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,oe=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Oe=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&oe(e,s,t[s]);if(se)for(var s of se(t))Le.call(t,s)&&oe(e,s,t[s]);return e};function We(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=S({themeMode:We()?"dark":"light"}),ne={state:T,subscribe(e){return j(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=Oe({},s))}},U=S({open:!1,message:"",variant:"success"}),Me={state:U,subscribe(e){return j(U,()=>e(U))},openToast(e,t){U.open=!0,U.message=e,U.variant=t},closeToast(){U.open=!1}};class Ce{constructor(t){this.openModal=F.open,this.closeModal=F.close,this.subscribeModal=F.subscribe,this.setTheme=ne.setThemeConfig,ne.setThemeConfig(t),N.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await le(()=>import("./index-6da003eb.js"),["assets/index-6da003eb.js","assets/dijkstra-f906a09e.js","assets/vendor-79687a91.js"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Ce},Symbol.toStringTag,{value:"Module"}));export{F,ne as G,re as N,Me as Q,ge as T,Ue as a,w as d,N as f,f as i,De as q};
