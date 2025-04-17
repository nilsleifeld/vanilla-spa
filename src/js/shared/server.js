import { getPokemon, getPokemons } from './api.js';

export class Server {
  /**
   * @param {import('./query.js').QueryClient} cache
   */
  constructor(cache) {
    this.cache = cache;
  }

  /**
   *  @param {string?} name
   */
  pokemon(name) {
    return this.cache.get({
      queryKey: ['pokemons', name],
      enabled: !!name,
      queryFn: () => getPokemon(name ?? '')
    });
  }

  pokemons() {
    return this.cache.get({
      queryKey: ['pokemons'],
      queryFn: () => getPokemons()
    });
  }
}
