import { PokemonsControllar } from './pokemons/ctrl.js';
import { Server } from './shared/server.js';
import { QueryClient } from './shared/query.js';

export class Controllar {
  route = '/';

  /**
   * @param {() => void} redraw
   */
  constructor(redraw) {
    this.redraw = redraw;
    this.cache = new QueryClient(redraw);
    this.server = new Server(this.cache);
    this.pokemonsCtrl = new PokemonsControllar(redraw, this.server);
  }

  /**
   * @param {string} route
   */
  go(route) {
    if (this.route === route) {
      return;
    }
    this.route = route;
    this.redraw();
  }
}
