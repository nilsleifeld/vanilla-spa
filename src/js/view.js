import { html, nothing } from 'lit-html';
import { pokemonsView } from './pokemons/view.js';

/**
 * @param {import('./ctrl.js').Controllar} ctrl
 */
export function view(ctrl) {
  return html`
    <nav>
      <button @click="${() => ctrl.go('/')}">Todos</button>
      <button @click="${() => ctrl.go('/pokemons')}">Pokemons</button>
    </nav>
    <hr />
    ${outlet(ctrl)}
  `;
}

/**
 * @param {import('./ctrl.js').Controllar} ctrl
 */
export function outlet(ctrl) {
  switch (ctrl.route) {
    case '/': {
      return home();
    }
    case '/pokemons': {
      return html` ${pokemonsView(ctrl.pokemonsCtrl)} `;
    }
  }
  console.error('Route not found');
  return nothing;
}

export function home() {
  return html` <h1>Home</h1>`;
}
