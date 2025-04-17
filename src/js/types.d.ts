export {};

declare global {
  namespace api {
    export interface PokemonListResponse {
      results: PokemonListItem[];
    }

    export interface PokemonListItem {
      name: string;
      url: string;
    }

    export interface PokemonResponse {
      id: number;
      name: string;
      height: number;
      sprites: Sprites;
    }

    export interface Sprites {
      back_default: string;
    }
  }
}
