(()=>{"use strict";var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=window.wp.domReady;var o=e.n(r);const t=window.wp.blocks;o()((()=>{Object.keys(GatherPress.unregister_blocks).forEach((e=>{const r=GatherPress.unregister_blocks[e];r&&"undefined"!==(0,t.getBlockType)(r)&&(0,t.unregisterBlockType)(r)}))}))})();