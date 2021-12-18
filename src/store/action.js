import { showNotif } from "utils/showNotif";
import { ADOPT_POKEMON, CATCH_POKEMON, CHANGE_USERNAME, RELEASE_POKEMON } from "./types";

// POKEMON TYPE
export const adoptPokemonType = (pokemon) => ({
  type: ADOPT_POKEMON,
  payload: pokemon,
});

export const getPokemonType = (isCatched) => ({
  type: CATCH_POKEMON,
  payload: isCatched,
});

export const releasePokemonType = (pokemon) => ({
  type: RELEASE_POKEMON,
  payload: pokemon,
});

// USER TYPE
export const changeUserNameType = (name) => ({
  type: CHANGE_USERNAME,
  payload: name
})

// POKEMON ACTION
export const adoptPokemonAction = (dispatch, dataPokemon) => {
  const currentPokemons = JSON.parse(
    localStorage.getItem("pokemon-collection")
  );
  const addedPokemon = [...currentPokemons, dataPokemon];
  dispatch(adoptPokemonType(addedPokemon));
  const message = "Success adopt a pokemon!";
  showNotif({ message, type: "success" });
};

export const getPokemonAction = (dispatch, isCatched) => {
  dispatch(getPokemonType(isCatched));
  const message = isCatched
    ? "Success catch a pokemon!"
    : "Failed catch a pokemon!";
  showNotif({ message, type: isCatched });
};

export const relasePokemonAction = (dispatch, nickname) => {
  const currentPokemons = JSON.parse(
    localStorage.getItem("pokemon-collection")
  );
  const removedPokemon = currentPokemons.filter((currentPokemon) => {
    return currentPokemon.nickname !== nickname;
  });
  dispatch(releasePokemonType(removedPokemon));
  // localStorage.setItem("pokemon-collection", JSON.stringify(removedPokemon));
  const message = "Success release a pokemon!";
  showNotif({ message, type: "success" });
};

// USER ACTION

export const changeUserNameAction = (dispatch, name) => {
  dispatch(changeUserNameType(name));
  showNotif({message: "Success change your name", type: "success"});
}
