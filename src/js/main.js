import { render as litRender } from 'lit-html';

import { Controllar } from './ctrl.js';
import { view } from './view.js';

const root = document.querySelector('#root');
if (!root) {
  throw Error('Root not found');
}

const ctrl = new Controllar(render);

function render() {
  // @ts-ignore - root is not null
  litRender(view(ctrl), root);
}

render();
