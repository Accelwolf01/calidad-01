
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/norms"
  },
  {
    "renderMode": 2,
    "route": "/models"
  },
  {
    "renderMode": 2,
    "route": "/standards"
  },
  {
    "renderMode": 2,
    "route": "/code"
  },
  {
    "renderMode": 2,
    "route": "/tests"
  },
  {
    "renderMode": 2,
    "route": "/conclusions"
  },
  {
    "renderMode": 2,
    "route": "/recommendations"
  },
  {
    "renderMode": 2,
    "route": "/quiz"
  },
  {
    "renderMode": 2,
    "route": "/evaluate"
  },
  {
    "renderMode": 2,
    "route": "/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5171, hash: 'f1188e8e6c2d3b5bf8afa56435e574d358d2455721eb16825adf6fd08a41e5c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1006, hash: '45a678a94f53aba1327515cd378d14dec9fb974ea35bf3318832acee2f0933bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'norms/index.html': {size: 25414, hash: '811d7ebf2cb2f6e639da68355f26a18108602225c7f2e65854dab6f3ae9d4292', text: () => import('./assets-chunks/norms_index_html.mjs').then(m => m.default)},
    'models/index.html': {size: 23277, hash: 'e928a913f7bafeac08b4783c4daa9259aa6b045104626a68ddaaf8f5809c829e', text: () => import('./assets-chunks/models_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23600, hash: 'cb5c6c03cd886cab2fbd99eb528ac3a4ea10eec3e75ff6b7c51596f5e3dbd9da', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'standards/index.html': {size: 24003, hash: '00ebf3e8a68aa195b5ca4adc2db798bb69167ce67b9f730b9ff87588b3ca392f', text: () => import('./assets-chunks/standards_index_html.mjs').then(m => m.default)},
    'code/index.html': {size: 25890, hash: '85b798ecca116f08af39b68652c225bce12825ee6f3d8d42c0a3ca00a3b12c34', text: () => import('./assets-chunks/code_index_html.mjs').then(m => m.default)},
    'conclusions/index.html': {size: 26473, hash: '5b9620feaaa1e1ba51bb5b5b0853db36b220afd567baa0cc7cc120c7143cae58', text: () => import('./assets-chunks/conclusions_index_html.mjs').then(m => m.default)},
    'tests/index.html': {size: 26734, hash: '346341072fc6c0ec981bb1ef70e4e213066c13789601c9a8c35ee705cb123dea', text: () => import('./assets-chunks/tests_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 26187, hash: 'da7748fc51a50ac03b484c2d82bc2636d09fce2e0db708f41d63c4d61541ba11', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'recommendations/index.html': {size: 32953, hash: '26cca53c274700cf98f8f1061cce899db7728e2cd4b3e3032badf3cd7fa07524', text: () => import('./assets-chunks/recommendations_index_html.mjs').then(m => m.default)},
    'evaluate/index.html': {size: 28040, hash: '0575283245e2cccb784ec8b491cdc8fe35d13d41a1a433ca99d7cad24093c2b0', text: () => import('./assets-chunks/evaluate_index_html.mjs').then(m => m.default)},
    'quiz/index.html': {size: 31886, hash: '5b9a85dd85aa479e6b15e4a40ad8272b42809529dd942918583a80176075f134', text: () => import('./assets-chunks/quiz_index_html.mjs').then(m => m.default)},
    'styles-CC6Q5CAT.css': {size: 233607, hash: 'O3R5hfpVKNI', text: () => import('./assets-chunks/styles-CC6Q5CAT_css.mjs').then(m => m.default)}
  },
};
