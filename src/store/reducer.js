import {
  ADOPT_POKEMON,
  CATCH_POKEMON,
  CHANGE_USERNAME,
  RELEASE_POKEMON,
} from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADOPT_POKEMON:
      return {
        ...state,
        collectedPokemon: action.payload,
      };
    case RELEASE_POKEMON:
      return {
        ...state,
        collectedPokemon: action.payload,
      };
    case CATCH_POKEMON:
      return {
        ...state,
        isCatched: action.payload,
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return {
        ...state
      }
  }
};
