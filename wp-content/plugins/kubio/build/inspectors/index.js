(()=>{"use strict";var e={5251:(e,o,t)=>{var l=t(9196),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,t){var l,c={},d=null,p=null;for(l in void 0!==t&&(d=""+t),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(p=o.ref),o)n.call(o,l)&&!i.hasOwnProperty(l)&&(c[l]=o[l]);if(e&&e.defaultProps)for(l in o=e.defaultProps)void 0===c[l]&&(c[l]=o[l]);return{$$typeof:r,type:e,key:d,ref:p,props:c,_owner:s.current}}o.Fragment=c,o.jsx=d,o.jsxs=d},5893:(e,o,t)=>{e.exports=t(5251)},9196:e=>{e.exports=window.React}},o={};function t(l){var r=o[l];if(void 0!==r)return r.exports;var c=o[l]={exports:{}};return e[l](c,c.exports,t),c.exports}t.d=(e,o)=>{for(var l in o)t.o(o,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};(()=>{t.r(l),t.d(l,{AdvancedInspectorControls:()=>u,AdvancedStyleBlockInspector:()=>S,BlockInspectorTopControls:()=>g,ContentBlockInspector:()=>y,ContentInspectorControls:()=>w,DataHelperContextFromClientId:()=>x,StyleBlockInspector:()=>E,StyleInspectorControls:()=>O,useCurrentInspectorTab:()=>F});const e=window.kubio.editorData,o=window.wp.i18n,r=window.wp.blocks,c=window.wp.data,n=window.wp.compose,s=window.wp.components,i=window.wp.blockEditor;var d=t(5893);const{Fill:p,Slot:a}=(0,s.createSlotFill)("AdvancedInspectorControls"),k=(0,n.createHigherOrderComponent)((e=>o=>{const t=(0,i.useBlockEditContext)(),{isSelected:l}=t;return l?(0,d.jsx)(e,{...o}):null}),"ifBlockEditSelectedAdvancedInspectorControls"),u=(0,n.compose)([k])(p);u.Slot=a;const b=(0,n.compose)([(0,c.withSelect)((e=>{const{getSelectedBlockClientId:o,getSelectedBlockCount:t,getBlockName:l}=e("core/block-editor"),{getBlockStyles:c}=e("core/blocks"),n=o(),s=n&&l(n),i=n&&(0,r.getBlockType)(s),d=n&&c(s);return{count:t(),hasBlockStyles:d&&d.length>0,selectedBlockName:s,selectedBlockClientId:n,blockType:i}}))])((({blockType:e,selectedBlockClientId:t,selectedBlockName:l,showNoBlockSelectedMessage:c=!0})=>{const n=l===(0,r.getUnregisteredTypeHandlerName)();return e&&t&&!n?(0,d.jsx)("div",{className:"block-editor-block-inspector kubio-inspector",children:(0,d.jsx)(u.Slot,{bubblesVirtually:!0})}):c?(0,d.jsx)("span",{className:"block-editor-block-inspector__no-blocks",children:(0,o.__)("No block selected.","kubio")}):null})),S=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(b,{})}),w=e=>{const o=(0,i.useBlockEditContext)(),{isSelected:t}=o;return t&&(0,d.jsx)(s.__experimentalStyleProvider,{document,children:(0,d.jsx)(i.InspectorControls,{className:"kubio-inspector",...e})})},y=()=>(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.BlockInspector,{})}),m=window.kubio.core,x=(0,n.compose)([(0,m.withObserveOtherBlocks)(((e,{clientId:o})=>o)),m.withKubioBlockContext])((({children:e})=>e)),{Fill:B,Slot:C}=(0,s.createSlotFill)("StyleInspectorControlsTop"),h=(0,n.createHigherOrderComponent)((e=>o=>{const t=(0,i.useBlockEditContext)(),{isSelected:l}=t;return l?(0,d.jsx)(e,{...o}):null}),"ifBlockEditSelectedStyleInspectorControls"),g=(0,n.compose)([h])(B);g.Slot=C;const j=window.kubio.controls,_=window.wp.hooks,I="StyleInspectorControls",{Fill:f,Slot:v}=(0,s.createSlotFill)(I),N=(0,n.createHigherOrderComponent)((e=>o=>{const t=(0,i.useBlockEditContext)(),{isSelected:l}=t;return l?(0,d.jsx)(s.__experimentalStyleProvider,{document,children:(0,d.jsx)(e,{...o})}):null}),"ifBlockEditSelectedStyleInspectorControls"),O=(0,n.compose)([N])(f);O.Slot=e=>!(0,m.useSlotHasFills)(I)&&window.isKubioBlockEditor?(0,d.jsx)("div",{className:"kubio-editing-header",children:(0,d.jsx)(j.ControlNotice,{content:(0,o.__)("Current block does not support styling","kubio")})}):(0,d.jsx)(v,{...e});const E=(0,n.compose)([(0,c.withSelect)((e=>{const{getSelectedBlockClientId:o,getSelectedBlockCount:t,getBlockName:l}=e("core/block-editor"),{getBlockStyles:c}=e("core/blocks"),n=o(),s=n&&l(n),i=n&&(0,r.getBlockType)(s),d=n&&c(s);return{count:t(),hasBlockStyles:d&&d.length>0,selectedBlockName:s,selectedBlockClientId:n,blockType:i}}))])((({blockType:e,selectedBlockClientId:t,selectedBlockName:l,showNoBlockSelectedMessage:c=!0})=>{const n=l===(0,r.getUnregisteredTypeHandlerName)();return e&&t&&!n?(0,d.jsx)("div",{className:"block-editor-block-inspector kubio-inspector",children:(0,d.jsx)(O.Slot,{bubblesVirtually:!0})}):c?(0,d.jsx)("span",{className:"block-editor-block-inspector__no-blocks",children:(0,o.__)("No block selected.","kubio")}):null})),T=(0,n.createHigherOrderComponent)((e=>o=>(0,d.jsxs)(d.Fragment,{children:[!window.isKubioBlockEditor&&(0,d.jsx)(i.InspectorControls,{children:(0,d.jsx)(j.LinkedNotice,{...o})}),(0,d.jsx)(e,{...o}),!window.isKubioBlockEditor&&(0,d.jsx)(i.InspectorControls,{children:(0,d.jsx)(E,{})})]})),"withKubioStyleInspectorOutsideKubioEditor");(0,_.addFilter)("editor.BlockEdit","kubio.third-party-controls",T);const F=()=>{const[o,t]=(0,e.useGlobalSessionProp)("displayed-block-panel","content");return[o,t]}})(),(window.kubio=window.kubio||{}).inspectors=l})();