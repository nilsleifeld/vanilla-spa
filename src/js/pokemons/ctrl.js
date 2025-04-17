export class PokemonsControllar {
  dialogId = 'pokemon-dialog';

  /** @type{string | null} **/
  openPokemonName = null;

  /**
   * @param {() => void} redraw
   * @param {import('../shared/server.js').Server} server
   */
  constructor(redraw, server) {
    this.redraw = redraw;
    this.server = server;
  }

  /**
   *  @param {string} name
   */
  openPokemon(name) {
    if (this.openPokemonName === name) {
      return;
    }
    this.openPokemonName = name;
    this.dialog().showModal();
    this.redraw();
  }

  dialog() {
    const element = /** @type {HTMLDialogElement | null}*/ (document.getElementById(this.dialogId));
    if (!element) {
      throw new Error('Dialog not found');
    }
    return element;
  }

  pokemonClosed() {
    this.openPokemonName = null;
    this.redraw();
  }
}
