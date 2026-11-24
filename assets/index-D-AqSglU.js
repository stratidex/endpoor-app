import{c as m,r as h,e as x,a as d,i as w,b as a,O as c,d as b,E as g,h as v,f as C,W as _,R as $}from"./appkit-CU3FpDP5.js";import{r as R}from"./index-DMshiOD3.js";import"./index-DbvIb6ec.js";const T="https://reown.com",O=m`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:n})=>n.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var P=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends w{render(){return a`
      <a
        data-testid="ux-branding-reown"
        href=${T}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};f.styles=[h,x,O];f=P([d("wui-ux-by-reown")],f);const W=m`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:n})=>n[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:n})=>n.core.textAccentPrimary};
    font-weight: 500;
  }
`;var y=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let u=class extends w{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(c.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,o=c.state.features?.legalCheckbox;return!e&&!r||o?a`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:a`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?a`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:a`<wui-ux-by-reown></wui-ux-by-reown>`:null}};u.styles=[W];y([R()],u.prototype,"remoteFeatures",void 0);u=y([d("w3m-legal-footer")],u);const U=b``;var B=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends w{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return!e&&!r?null:a`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return a` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){g.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:v(C.state.activeChain)===_.ACCOUNT_TYPES.SMART_ACCOUNT}}),$.push("WhatIsABuy")}};p.styles=[U];p=B([d("w3m-onramp-providers-footer")],p);
//# sourceMappingURL=index-D-AqSglU.js.map
