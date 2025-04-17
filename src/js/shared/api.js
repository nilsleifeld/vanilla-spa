/**
 * @returns {Promise<api.PokemonListResponse>}
 */
export async function getPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémons: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * @param {string} name
 * @returns {Promise<api.PokemonResponse>}
 */
export async function getPokemon(name) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon: ${response.statusText}`);
  }

  return await response.json();
}
