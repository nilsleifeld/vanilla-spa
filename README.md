# Vanilla SPA

This Project demonstrates how to build a Single Page Application (SPA) with minimal dependencies and without frameworks like React, Angular, or Vue. The only external library used is `lit-html` for efficient HTML rendering.

## Dev Workflow

1. **Install dependencies**  
   Make sure Node.js is installed. Install the dependencies with:

   ```sh
   npm install
   ```

2. **Start development server**  
   Start the development server with:

   ```sh
   npm run dev
   ```

   The server will be available at [http://localhost:8080](http://localhost:8080) by default.

3. **Check the code**  
   To check the code for type errors, run:

   ```sh
   npm run check
   ```

4. **Format the code**  
   To format the code using Prettier, run:

   ```sh
   npm run format
   ```

5. **Build for production**  
   To build the application for production, run:

   ```sh
   npm run build
   ```

   The build will be created in the `dist` folder.

---

## Code Structure

The code is organized into the following main areas:

- **`src/js/ctrl.js`**: Contains the main controller of the application, which manages navigation and interaction between different modules.
- **`src/js/view.js`**: Defines the main view of the application and renders content based on the current route.
- **shared**: Contains reusable modules such as API interactions (`api.js`), a query client (`query.js`), and a server wrapper (`server.js`).
- **pokemons**: Contains the specific logic and view for the Pokémon module.

---

## Interaction Between View and Controller (Using the Pokémon Module as an Example)

The Pokémon module demonstrates how the controller and view work together to create a dynamic user interface.

### Controller: ctrl.js

The controller `PokemonsController` manages the logic for the Pokémon module. It:

- Stores the state, e.g., which Pokémon dialog is open.
- Interacts with the server to load data.
- Controls the display of the dialog and handles closing it.

Example:

```js
export class PokemonsController {
  openPokemon(name) {
    this.openPokemonName = name;
    this.dialog().showModal();
    this.redraw();
  }
}
```

### View: view.js

The view `pokemonsView` renders the user interface based on the data and state from the controller. It:

- Displays a list of Pokémon.
- Opens a dialog with details about a Pokémon when the user clicks on it.

Example:

```js
export function pokemonsView(ctrl) {
  const pokemons = ctrl.server.pokemons();
  return html`
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
```

### Interaction

1. The controller `PokemonsController` loads Pokémon data via the server and stores the state.
2. The view `pokemonsView` retrieves the data from the controller and renders the Pokémon list.
3. When a user clicks on a Pokémon, the view calls the `openPokemon` method of the controller to open the dialog.
4. The dialog is also rendered by the view and displays the details of the selected Pokémon.
