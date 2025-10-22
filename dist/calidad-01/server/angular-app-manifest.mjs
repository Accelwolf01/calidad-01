
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/calidad-01/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/calidad-01/home",
    "route": "/calidad-01"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/home"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/norms"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/models"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/standards"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/code"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/tests"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/conclusions"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/recommendations"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/quiz"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/evaluate"
  },
  {
    "renderMode": 2,
    "route": "/calidad-01/results"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5182, hash: '1f109eb9dbda3166df24e51dfbe46511859381a13213666118f00df020b856a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: '3178e1f61a566541222c821e4fdb660d8dd407049f114ab00bcefaac439b2dda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'norms/index.html': {size: 25546, hash: 'e22f7506746a331906166d422c6bcfb0c88b0fb180157ed18d001df1356f30a6', text: () => import('./assets-chunks/norms_index_html.mjs').then(m => m.default)},
    'models/index.html': {size: 23409, hash: '309caab022ba2ae6ce284247b6a80f9cc7f358067aa31b2e823e40aed99d870d', text: () => import('./assets-chunks/models_index_html.mjs').then(m => m.default)},
    'standards/index.html': {size: 24135, hash: '05ad20f7b17b856e80d31b0855e46387e9d6c585fdc34c19f610936fc95d23da', text: () => import('./assets-chunks/standards_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 23743, hash: '9cf175cc64e7db5054c2cf63fb5a4fad31ce20341105dd979edcc2f9ade8b5ef', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'conclusions/index.html': {size: 26605, hash: 'e9d3df7e0bb3c74500ddc9573178b92c12655d30faf3c7f83448afa22184165e', text: () => import('./assets-chunks/conclusions_index_html.mjs').then(m => m.default)},
    'code/index.html': {size: 26022, hash: '56e6e69ce65a16a4b3fcbb9466777813173f008f210ca7895c5baff8ff656d6f', text: () => import('./assets-chunks/code_index_html.mjs').then(m => m.default)},
    'tests/index.html': {size: 26866, hash: 'c7fd82d78ed1da0ab979637d93d694ccaef3be75ad736e68c42c420cbd4a3337', text: () => import('./assets-chunks/tests_index_html.mjs').then(m => m.default)},
    'recommendations/index.html': {size: 33085, hash: '180374c7623f99c2cc035146b170325a0ef88c5f94717efa37d082b2b04d0882', text: () => import('./assets-chunks/recommendations_index_html.mjs').then(m => m.default)},
    'results/index.html': {size: 26319, hash: 'eb9dbc6982a5c0f5bc57495e846286cdd466a0fc036c00faaa573c94883fa474', text: () => import('./assets-chunks/results_index_html.mjs').then(m => m.default)},
    'evaluate/index.html': {size: 28172, hash: 'be1ac5cc408fee72082ee8e547b35fd324776b7694c8adb7e4946ba178e8787c', text: () => import('./assets-chunks/evaluate_index_html.mjs').then(m => m.default)},
    'quiz/index.html': {size: 32018, hash: '820231be87abb94ac88c9c602b4027e503481a9ed9f3110062eea66c599dca72', text: () => import('./assets-chunks/quiz_index_html.mjs').then(m => m.default)},
    'styles-CC6Q5CAT.css': {size: 233607, hash: 'O3R5hfpVKNI', text: () => import('./assets-chunks/styles-CC6Q5CAT_css.mjs').then(m => m.default)}
  },
};
