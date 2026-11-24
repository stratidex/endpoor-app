import{c as I,a as P,i as A,f as v,Z as r,N as p,b as c,z as W,_ as V,E as j,R as $,j as z,M as F,h as M,W as Q,r as N,e as q,$ as L}from"./appkit-CU3FpDP5.js";import{r as a,n as m}from"./index-DMshiOD3.js";import"./index-DxgfdFKe.js";import"./index-BLNgwHso.js";import"./index-B2tRUqyR.js";import"./index-CpcJF_IT.js";import"./index-DUad-UdF.js";import"./index-CJXIiueK.js";import"./index-DW62OugI.js";import"./wagmi-B0SisOvF.js";import"./viem-BbHIMyKI.js";import"./index-BcDzNqdO.js";import"./ref-CJCLFqai.js";const K=I`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[2]};
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} + ${({borderRadius:e})=>e[1]}
    );
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:e})=>e[2]};
  }
`;var x=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};const H=W.CONVERT_SLIPPAGE_TOLERANCE;let g=class extends A{constructor(){super(),this.unsubscribe=[],this.networkName=v.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=r.state.sourceToken,this.toToken=r.state.toToken,this.toTokenAmount=r.state.toTokenAmount,this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=r.state.toTokenPriceInUSD,this.priceImpact=r.state.priceImpact,this.maxSlippage=r.state.maxSlippage,this.networkTokenSymbol=r.state.networkTokenSymbol,this.inputError=r.state.inputError,this.unsubscribe.push(r.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){const t=this.toTokenAmount&&this.maxSlippage?p.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${p.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${p.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?c`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?c` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${p.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?c`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${p.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${p.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${H}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};g.styles=[K];x([a()],g.prototype,"networkName",void 0);x([m()],g.prototype,"detailsOpen",void 0);x([a()],g.prototype,"sourceToken",void 0);x([a()],g.prototype,"toToken",void 0);x([a()],g.prototype,"toTokenAmount",void 0);x([a()],g.prototype,"sourceTokenPriceInUSD",void 0);x([a()],g.prototype,"toTokenPriceInUSD",void 0);x([a()],g.prototype,"priceImpact",void 0);x([a()],g.prototype,"maxSlippage",void 0);x([a()],g.prototype,"networkTokenSymbol",void 0);x([a()],g.prototype,"inputError",void 0);g=x([P("w3m-swap-details")],g);const G=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:e})=>e.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var R=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let U=class extends A{constructor(){super(...arguments),this.target="sourceToken"}render(){return c`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};U.styles=[G];R([m()],U.prototype,"target",void 0);U=R([P("w3m-swap-input-skeleton")],U);const Y=I`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var T=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};const Z=5e-5;let k=class extends A{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null,this.autoFocus=!1}firstUpdated(){this.autoFocus&&requestAnimationFrame(()=>{this.shadowRoot?.querySelector("input")?.focus()})}render(){const t=this.marketValue||"0",o=p.bigNumber(t).gt("0");return c`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${o?`$${p.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return V.numericInputKeyDown(t,this.value,o=>this.onSetAmount?.(this.target,o))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const o=t.target.value.replace(/[^0-9.]/gu,"");o===","||o==="."?this.onSetAmount(this.target,"0."):o.endsWith(",")?this.onSetAmount(this.target,o.replace(",",".")):this.onSetAmount(this.target,o)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:c` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=p.multiply(this.balance,this.price),o=t?t?.gt(Z):!1;return c`
      ${o?c`<wui-text variant="sm-regular" color="secondary">
            ${p.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(t){return t?c` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`:c` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){j.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),$.push("SwapSelectToken",{target:this.target})}onBuyToken(){$.push("OnRampProviders")}};k.styles=[Y];T([m()],k.prototype,"focused",void 0);T([m()],k.prototype,"balance",void 0);T([m()],k.prototype,"value",void 0);T([m()],k.prototype,"price",void 0);T([m()],k.prototype,"marketValue",void 0);T([m()],k.prototype,"disabled",void 0);T([m()],k.prototype,"target",void 0);T([m()],k.prototype,"token",void 0);T([m()],k.prototype,"onSetAmount",void 0);T([m()],k.prototype,"onSetMaxValue",void 0);T([m({type:Boolean})],k.prototype,"autoFocus",void 0);k=T([P("w3m-swap-input")],k);const J=I`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: ${({spacing:e})=>e[2]};
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var w=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends A{subscribe({resetSwapState:t,initializeSwapState:o}){return()=>{v.subscribeKey("activeCaipNetwork",i=>this.onCaipNetworkChange({newCaipNetwork:i,resetSwapState:t,initializeSwapState:o})),v.subscribeChainProp("accountState",i=>{this.onCaipAddressChange({newCaipAddress:i?.caipAddress,resetSwapState:t,initializeSwapState:o})})}}constructor(){super(),this.unsubscribe=[],this.initialParams=$.state.data?.swap,this.detailsOpen=!1,this.caipAddress=v.getAccountData()?.caipAddress,this.caipNetworkId=v.state.activeCaipNetwork?.caipNetworkId,this.initialized=r.state.initialized,this.loadingQuote=r.state.loadingQuote,this.loadingPrices=r.state.loadingPrices,this.loadingTransaction=r.state.loadingTransaction,this.sourceToken=r.state.sourceToken,this.sourceTokenAmount=r.state.sourceTokenAmount,this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD,this.toToken=r.state.toToken,this.toTokenAmount=r.state.toTokenAmount,this.toTokenPriceInUSD=r.state.toTokenPriceInUSD,this.inputError=r.state.inputError,this.fetchError=r.state.fetchError,this.lastTokenPriceUpdate=0,this.minTokenPriceUpdateInterval=1e4,this.visibilityChangeHandler=()=>{document?.hidden?(clearInterval(this.interval),this.interval=void 0):this.startTokenPriceInterval()},this.startTokenPriceInterval=()=>{this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval||(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval&&this.fetchTokensAndValues(),clearInterval(this.interval),this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval))},this.watchTokensAndValues=()=>{!this.sourceToken||!this.toToken||(this.subscribeToVisibilityChange(),this.startTokenPriceInterval())},this.onDebouncedGetSwapCalldata=z.debounce(async()=>{await r.swapTokens()},200),this.subscribe({resetSwapState:!0,initializeSwapState:!1})(),this.unsubscribe.push(this.subscribe({resetSwapState:!1,initializeSwapState:!0}),F.subscribeKey("open",t=>{t||r.resetState()}),$.subscribeKey("view",t=>{t.includes("Swap")||r.resetValues()}),r.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.fetchError=t.fetchError,t.sourceToken&&t.toToken&&this.watchTokensAndValues()}))}async firstUpdated(){r.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval),document?.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document?.removeEventListener("visibilitychange",this.visibilityChangeHandler),document?.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){r.getNetworkTokenPrice(),r.getMyTokensWithBalance(),r.swapTokens(),this.lastTokenPriceUpdate=Date.now()}templateSwap(){return c`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){const t=!this.sourceTokenAmount||this.sourceTokenAmount==="0";return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":t?"Enter amount":this.inputError?this.inputError:"Review swap"}templateReplaceTokensButton(){return c`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return c`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,o){const i=r.state.myTokensWithBalance?.find(u=>u?.address===o?.address),s=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,l=p.parseLocalStringToNumber(s)*n;return c`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${o}
      .balance=${i?.quantity?.numeric}
      .price=${i?.price}
      .marketValue=${l}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
      ?autoFocus=${t==="sourceToken"}
    ></w3m-swap-input>`}onSetMaxValue(t,o){const i=p.bigNumber(o||"0");if(!i.gt(0)){this.handleChangeAmount(t,"0");return}const s=t==="sourceToken"?this.sourceToken:this.toToken,n=s?.decimals??18,{networkAddress:l}=r.getParams(),u=r.state.gasFee;if(t==="sourceToken"&&s?.address===l&&u&&u!=="0"){const O=150000n*BigInt(u),B=p.bigNumber(O.toString()).div(p.bigNumber(10).pow(n)),_=i.minus(B);this.handleChangeAmount(t,_.gt(0)?_.toFixed(n,0):"0")}else this.handleChangeAmount(t,i.toFixed(n,0))}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,o){r.clearError(),t==="sourceToken"?r.setSourceTokenAmount(o):r.setToTokenAmount(o),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,o=!this.sourceTokenAmount||this.sourceTokenAmount==="0",i=this.loadingQuote||this.loadingPrices||this.loadingTransaction,s=i||t||o||this.inputError;return c` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${!!i}
        ?disabled=${!!s}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}async onSwitchTokens(){await r.switchTokens()}async onSwapPreview(){this.fetchError&&await r.swapTokens(),j.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:M(v.state.activeChain)===Q.ACCOUNT_TYPES.SMART_ACCOUNT}}),$.push("SwapPreview")}async handleSwapParameters(){this.initialParams&&(r.state.initialized||await new Promise(o=>{const i=r.subscribeKey("initialized",s=>{s&&(i?.(),o())})}),await this.setSwapParameters(this.initialParams))}async setSwapParameters({amount:t,fromToken:o,toToken:i}){(!r.state.tokens||!r.state.myTokensWithBalance)&&await new Promise(l=>{const u=r.subscribeKey("myTokensWithBalance",D=>{D&&D.length>0&&(u?.(),l())});setTimeout(()=>{u?.(),l()},5e3)});const s=[...r.state.tokens||[],...r.state.myTokensWithBalance||[]];if(o){const n=s.find(l=>l.symbol.toLowerCase()===o.toLowerCase());n&&r.setSourceToken(n)}if(i){const n=s.find(l=>l.symbol.toLowerCase()===i.toLowerCase());n&&r.setToToken(n)}t&&!isNaN(Number(t))&&r.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:o,initializeSwapState:i}){this.caipAddress!==t&&(this.caipAddress=t,o&&r.resetState(),i&&r.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:o,initializeSwapState:i}){this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,o&&r.resetState(),i&&r.initializeState())}};d.styles=J;w([m({type:Object})],d.prototype,"initialParams",void 0);w([a()],d.prototype,"interval",void 0);w([a()],d.prototype,"detailsOpen",void 0);w([a()],d.prototype,"caipAddress",void 0);w([a()],d.prototype,"caipNetworkId",void 0);w([a()],d.prototype,"initialized",void 0);w([a()],d.prototype,"loadingQuote",void 0);w([a()],d.prototype,"loadingPrices",void 0);w([a()],d.prototype,"loadingTransaction",void 0);w([a()],d.prototype,"sourceToken",void 0);w([a()],d.prototype,"sourceTokenAmount",void 0);w([a()],d.prototype,"sourceTokenPriceInUSD",void 0);w([a()],d.prototype,"toToken",void 0);w([a()],d.prototype,"toTokenAmount",void 0);w([a()],d.prototype,"toTokenPriceInUSD",void 0);w([a()],d.prototype,"inputError",void 0);w([a()],d.prototype,"fetchError",void 0);w([a()],d.prototype,"lastTokenPriceUpdate",void 0);d=w([P("w3m-swap-view")],d);const X=I`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:e})=>e.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:e})=>e[2]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:e})=>e[4]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var f=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let h=class extends A{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=r.state.approvalTransaction,this.swapTransaction=r.state.swapTransaction,this.sourceToken=r.state.sourceToken,this.sourceTokenAmount=r.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD,this.balanceSymbol=v.getAccountData()?.balanceSymbol,this.toToken=r.state.toToken,this.toTokenAmount=r.state.toTokenAmount??"",this.toTokenPriceInUSD=r.state.toTokenPriceInUSD,this.caipNetwork=v.state.activeCaipNetwork,this.inputError=r.state.inputError,this.loadingQuote=r.state.loadingQuote,this.loadingApprovalTransaction=r.state.loadingApprovalTransaction,this.loadingBuildTransaction=r.state.loadingBuildTransaction,this.loadingTransaction=r.state.loadingTransaction,this.unsubscribe.push(v.subscribeChainProp("accountState",t=>{t?.balanceSymbol!==this.balanceSymbol&&$.goBack()}),v.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),r.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&$.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){r.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{r.getApprovalLoadingState()||r.getTransaction()},1e4)}templateSwap(){const t=`${p.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,o=`${p.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,n=p.formatNumberToLocalString(i),l=p.formatNumberToLocalString(s),u=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${l}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${u}
            ?disabled=${u}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){$.goBack()}onSendTransaction(){this.approvalTransaction?r.sendTransactionForApproval(this.approvalTransaction):r.sendTransactionForSwap(this.swapTransaction)}};h.styles=X;f([a()],h.prototype,"interval",void 0);f([a()],h.prototype,"detailsOpen",void 0);f([a()],h.prototype,"approvalTransaction",void 0);f([a()],h.prototype,"swapTransaction",void 0);f([a()],h.prototype,"sourceToken",void 0);f([a()],h.prototype,"sourceTokenAmount",void 0);f([a()],h.prototype,"sourceTokenPriceInUSD",void 0);f([a()],h.prototype,"balanceSymbol",void 0);f([a()],h.prototype,"toToken",void 0);f([a()],h.prototype,"toTokenAmount",void 0);f([a()],h.prototype,"toTokenPriceInUSD",void 0);f([a()],h.prototype,"caipNetwork",void 0);f([a()],h.prototype,"inputError",void 0);f([a()],h.prototype,"loadingQuote",void 0);f([a()],h.prototype,"loadingApprovalTransaction",void 0);f([a()],h.prototype,"loadingBuildTransaction",void 0);f([a()],h.prototype,"loadingTransaction",void 0);h=f([P("w3m-swap-preview-view")],h);const ee=I`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.foregroundSecondary};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:e})=>e.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var C=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let S=class extends A{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const t=this.amount&&this.price?p.multiply(this.price,this.amount)?.toFixed(3):null;return c`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${t?c`
                  <wui-text variant="md-medium" color="primary">
                    $${p.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?c`<wui-text variant="sm-regular" color="secondary">
                  ${p.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?c`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?c`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};S.styles=[N,q,ee];C([m()],S.prototype,"imageSrc",void 0);C([m()],S.prototype,"name",void 0);C([m()],S.prototype,"symbol",void 0);C([m()],S.prototype,"price",void 0);C([m()],S.prototype,"amount",void 0);C([a()],S.prototype,"visible",void 0);C([a()],S.prototype,"imageError",void 0);S=C([P("wui-token-list-item")],S);const te=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var oe=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let E=class extends A{render(){return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};E.styles=[N,te];E=oe([P("wui-token-list-item-loader")],E);const ie=I`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:e})=>e.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    align-items: center;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var y=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(s<3?l(n):s>3?l(t,o,n):l(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};let b=class extends A{constructor(){super(),this.unsubscribe=[],this.targetToken=$.state.data?.target,this.sourceToken=r.state.sourceToken,this.sourceTokenAmount=r.state.sourceTokenAmount,this.toToken=r.state.toToken,this.myTokensWithBalance=r.state.myTokensWithBalance,this.popularTokens=r.state.popularTokens,this.suggestedTokens=r.state.suggestedTokens,this.tokensLoading=r.state.tokensLoading,this.searchValue="",this.unsubscribe.push(r.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance,this.popularTokens=t.popularTokens,this.suggestedTokens=t.suggestedTokens,this.tokensLoading=t.tokensLoading}))}async firstUpdated(){await r.getTokenList()}updated(){this.renderRoot?.querySelector(".suggested-tokens-container")?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),this.renderRoot?.querySelector(".tokens")?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const t=this.renderRoot?.querySelector(".suggested-tokens-container"),o=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),o?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?r.setSourceToken(t):(r.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&r.swapTokens()),$.goBack()}templateSearchInput(){return c`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],o=this.filterTokensWithText(t,this.searchValue);return o?.length>0?c`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${o.map(i=>{const s=i.symbol===this.sourceToken?.symbol||i.symbol===this.toToken?.symbol;return c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              ?disabled=${s}
              symbol=${i.symbol}
              price=${i?.price}
              amount=${i?.quantity?.numeric}
              imageSrc=${i.logoUri}
              @click=${()=>{s||this.onSelectToken(i)}}
            >
            </wui-token-list-item>
          `})}`:null}templateAllTokens(){const t=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue);return this.tokensLoading?c`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `:o?.length>0?c`
        ${o.map(i=>c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              symbol=${i.symbol}
              imageSrc=${i.logoUri}
              @click=${()=>this.onSelectToken(i)}
            >
            </wui-token-list-item>
          `)}
      `:null}templateTokens(){return c`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;return this.tokensLoading?c`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `:t?c`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${t.map(o=>c`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){const t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",L.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",L.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){const t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",L.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",L.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,o){return t.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(o.toLowerCase())).sort((i,s)=>{const n=`${i.symbol} ${i.name} ${i.address}`.toLowerCase(),l=`${s.symbol} ${s.name} ${s.address}`.toLowerCase(),u=n.indexOf(o.toLowerCase()),D=l.indexOf(o.toLowerCase());return u-D})}};b.styles=ie;y([a()],b.prototype,"interval",void 0);y([a()],b.prototype,"targetToken",void 0);y([a()],b.prototype,"sourceToken",void 0);y([a()],b.prototype,"sourceTokenAmount",void 0);y([a()],b.prototype,"toToken",void 0);y([a()],b.prototype,"myTokensWithBalance",void 0);y([a()],b.prototype,"popularTokens",void 0);y([a()],b.prototype,"suggestedTokens",void 0);y([a()],b.prototype,"tokensLoading",void 0);y([a()],b.prototype,"searchValue",void 0);b=y([P("w3m-swap-select-token-view")],b);export{h as W3mSwapPreviewView,b as W3mSwapSelectTokenView,d as W3mSwapView};
//# sourceMappingURL=swaps-Ce5t06rw.js.map
