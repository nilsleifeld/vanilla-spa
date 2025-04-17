import { html, nothing } from 'lit-html';

/**
 * @param {import('./ctrl.js').PokemonsControllar} ctrl
 */
export function pokemonsView(ctrl) {
  const pokemons = ctrl.server.pokemons();
  return html`
    ${pokemonDialog(ctrl)}

    <h1>Pokemons</h1>

    ${pokemons
      ? html`
          <ul>
            ${pokemons.results.map(
              (item) => html`
                <li>
                  <button @click="${() => ctrl.openPokemon(item.name)}">${item.name}</button>
                </li>
              `
            )}
          </ul>
        `
      : nothing}
  `;
}

/**
 * @param {import('./ctrl.js').PokemonsControllar} ctrl
 */
export function pokemonDialog(ctrl) {
  const pokemon = ctrl.server.pokemon(ctrl.openPokemonName);
  return html`
    <dialog id="${ctrl.dialogId}" @close="${() => ctrl.pokemonClosed()}">
      ${pokemon
        ? html`
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.back_default}" />
            <button autofocus @click="${() => ctrl.dialog().close()}">Close</button>
          `
        : html`Loading ...`}
    </dialog>
  `;
}
