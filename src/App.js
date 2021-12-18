import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

// internal
import Loader from "./components/atoms/Loader";
import client from "graphql/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "store/store";
import Layout from "Layout";

// dynamic import
const PokemonDetailsPage = React.lazy(() =>
  import("./pages/PokemonDetailsPage/PokemonDetailsPage")
);
const PokemonHomePage = React.lazy(() =>
  import("./pages/PokemonHomePage/PokemonHomePage")
);
const MyPokemonPage = React.lazy(() =>
  import("./pages/MyPokemonPage/MyPokemonPage")
);

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
          <Layout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route exact path="/" element={<PokemonHomePage />} />
                <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
                <Route path="/mypokemon" element={<MyPokemonPage />} />
              </Routes>
            </Suspense>
            <ToastContainer />
          </Layout>
        </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
