import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  username: JSON.parse(localStorage.getItem("username")) || "",
  collectedPokemon: JSON.parse(localStorage.getItem("pokemon-collection")) || [],
  isCatched: false,
};

const store = createContext(initialState);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // set item to localstorage when state has changed
  useEffect(() => {
    localStorage.setItem("pokemon-collection",JSON.stringify(state?.collectedPokemon));
  }, [state?.collectedPokemon]);

  useEffect(() => {
    localStorage.setItem("username",JSON.stringify(state?.username));
  }, [state?.username]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useAppContext = () => {
  const context = useContext(store);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export { useAppContext, StoreProvider };
