import{r as c,M as g}from"./index-df50d7fc.js";import{u as m}from"./index-a7dcd9b1.js";import"./iframe-2d1ac6ba.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-c879cb99.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=c,b=Symbol.for("react.element"),h=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,y=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,s){var o,r={},a=null,d=null;s!==void 0&&(a=""+s),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(d=t.ref);for(o in t)u.call(t,o)&&!v.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:b,type:e,key:a,ref:d,props:r,_owner:y.current}}n.Fragment=h;n.jsx=x;n.jsxs=x;l.exports=n;var i=l.exports;function p(e){const t=Object.assign({h1:"h1",p:"p"},m(),e.components);return i.jsxs(i.Fragment,{children:[i.jsx(g,{title:"ioUI Component Library"}),`
`,i.jsx("div",{className:"sb-container",children:i.jsxs("div",{className:"sb-section-title",children:[i.jsx(t.h1,{id:"ioui-component-library",children:"ioUI Component Library"}),i.jsx(t.p,{children:`Material.io supports this design kit with documentation and guidance for how to use the components and styles.
Our specifications have been updated for Material You to provide for additional guidance for modern styling, adaptive guidance, and color.`})]})}),`
`,i.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    color: #da5e47;
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function F(e={}){const{wrapper:t}=Object.assign({},m(),e.components);return t?i.jsx(t,Object.assign({},e,{children:i.jsx(p,e)})):p(e)}export{F as default};
//# sourceMappingURL=Configure-825e5c39.js.map
