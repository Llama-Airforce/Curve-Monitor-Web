import{g as v}from"./api-DFkSxUea.js";import{t as d,f as i,g as c,b as _}from"./timestamp-Dfir0V72.js";import{u as n}from"./useQuery-COnkORT4.js";import{c as l}from"./index-D-zH55uQ.js";const y=e=>({name:e.collateral_token.symbol,address:e.address,factoryAddress:e.factory_address,llamma:e.llamma,rate:e.rate,borrowed:e.total_debt,borrowable:e.borrowable,collateralAmount:e.collateral_amount,collateralAmountUsd:e.collateral_amount_usd,debtCeiling:e.debt_ceiling,loans:e.n_loans,collateralToken:{symbol:e.collateral_token.symbol,address:e.collateral_token.address},stablecoinToken:{symbol:e.stablecoin_token.symbol,address:e.stablecoin_token.address},fees:{pending:e.pending_fees,collected:e.collected_fees}}),b=e=>({timestamp:d(e.dt),rate:e.rate,nLoans:e.n_loans,minted:e.minted,redeemed:e.redeemed,totalCollateral:e.total_collateral,totalCollateralUsd:e.total_collateral_usd,totalStablecoin:e.total_stablecoin,totalDebt:e.total_debt,priceAMM:e.amm_price,priceOracle:e.price_oracle,borrowable:e.borrowable,discountLiquidation:e.liquidation_discount,discountLoan:e.loan_discount}),h=e=>({address:e.address,pool:e.pool,poolAddress:e.pool_address,pair:e.pair.map(t=>({symbol:t.symbol,address:t.address})),active:e.active,totalDebt:e.total_debt,totalProfit:e.total_profit}),f=e=>({timestamp:d(e.timestamp),market:e.market,supply:e.supply,borrowable:e.borrowable}),g=e=>e.markets.map(t=>({collateral:t.collateral,controller:t.controller,snapshotFirst:d(t.first_snapshot),snapshotLast:d(t.last_snapshot)})),q=e=>({health:e.health,healthFull:e.health_full,n:e.n,n1:e.n1,n2:e.n2,debt:e.debt,collateral:e.collateral,collateralUp:e.collateral_up,stablecoin:e.stablecoin,softLiquidation:e.soft_liquidation,totalDeposited:e.total_deposited,loss:e.loss,lossPct:e.loss_pct,oraclePrice:e.oracle_price,blockNumber:e.block_number,timestamp:d(e.timestamp)}),k=e=>e.data.map(q),U=e=>({controller:e.controller,user:e.user,totalDeposit:e.total_deposit,totalDepositPrecise:e.total_deposit_precise,totalDepositUsd:e.total_deposit_usd_value,totalBorrowed:e.total_borrowed,totalBorrowedPrecise:e.total_borrowed_precise,events:e.data.map(t=>({timestamp:d(t.dt),txHash:t.transaction_hash,type:t.type,user:t.user,collateralChange:t.collateral_change,collateralChangeUsd:t.collateral_change_usd??void 0,loanChange:t.loan_change,loanChangeUsd:t.loan_change_usd??void 0,liquidation:t.liquidation===null?void 0:{user:t.liquidation.user,liquidator:t.liquidation.liquidator,collateralReceived:t.liquidation.collateral_received,collateralReceivedUsd:t.liquidation.collateral_received_usd,stablecoinReceived:t.liquidation.stablecoin_received,debt:t.liquidation.debt},n1:t.n1,n2:t.n2,oraclePrice:t.oracle_price}))});async function w(e,t={fetch_on_chain:!0},a){const s=c(a);return(await i(`${s}/v1/crvusd/markets/${e}${_(t)}`)).data.map(y)}async function $(e,t,a={fetch_on_chain:!0,agg:"day"},s){const r=c(s);return(await i(`${r}/v1/crvusd/markets/${e}/${t}/snapshots${_(a)}`)).data.map(b)}async function K(e,t){const a=c(t);return(await i(`${a}/v1/crvusd/markets/${e}/supply`)).data.map(f)}async function M(e,t){const a=c(t);return(await i(`${a}/v1/crvusd/pegkeepers/${e}`)).keepers.map(h)}async function S(e,t,a){const s=c(a),r=await i(`${s}/v1/crvusd/users/${t}/${e}?page=1&per_page=100`);return g(r)}async function C(e,t,a,s){const r=c(s),o=await i(`${r}/v1/crvusd/users/${t}/${e}/${a}/snapshots?page=1&per_page=100`);return k(o)}async function D(e,t,a,s){const r=c(s),o=await i(`${r}/v1/crvusd/collateral_events/${t}/${a}/${e}`);return U(o)}function p(){return{initialData:[],initialDataUpdatedAt:0}}function E(){return n({queryKey:["crvusd-supply"],queryFn:()=>K("ethereum"),...p()})}function R(e){return n({queryKey:["crvusd-market-snapshots",l(()=>{var t;return(t=e.value)==null?void 0:t.address})],queryFn:({queryKey:[,t]})=>$("ethereum",t),enabled:l(()=>!!e.value),...p()})}function B(e){return n({queryKey:["crvusd-keepers-prices",l(()=>[...new Set(e.value.map(t=>t.poolAddress))])],queryFn:async()=>{const t=e.value.map(async r=>{const o=r.pair.find(u=>u.symbol!=="crvUSD"),m=r.pair.find(u=>u.symbol==="crvUSD");return!o||!m?[]:(await v("ethereum",r.poolAddress,o.address,m.address)).map(u=>({time:u.time,price:(u.high+u.low)/2,coin:o.symbol}))}),s=(await Promise.all(t)).flat().groupBy(r=>r.time.getTime()).entries().map(([r,o])=>({timestamp:Number(r)/1e3,...Object.fromEntries(o.map(m=>[m.coin,m.price]))}));return s.length>0?s:[{timestamp:0}]},initialData:[{timestamp:0}],initialDataUpdatedAt:0})}function H(){return n({queryKey:["crvusd-markets"],queryFn:()=>w("ethereum",{page:1}),...p()})}function O(){return n({queryKey:["crvusd-keepers"],queryFn:()=>M("ethereum"),...p()})}function T(e,t){return n({queryKey:["crvusd-user-markets",l(()=>e.value),l(()=>t.value)],queryFn:({queryKey:[,a,s]})=>S(a,s),enabled:l(()=>!!e.value&&!!t.value),...p()})}function N(e,t,a){return n({queryKey:["crvusd-user-market-snapshots",l(()=>e.value),l(()=>t.value),l(()=>a.value)],queryFn:({queryKey:[,s,r,o]})=>C(s,r,o),enabled:l(()=>!!e.value&&!!t.value&&!!a.value),...p()})}function j(e,t,a){return n({queryKey:["crvusd-user-market-events",l(()=>e.value),l(()=>t.value),l(()=>a.value)],queryFn:({queryKey:[,s,r,o]})=>D(s,r,o),enabled:l(()=>!!e.value&&!!t.value&&!!a.value)})}export{j as a,N as b,T as c,E as d,R as e,O as f,B as g,H as u};
