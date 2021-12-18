/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ModalCollection from "components/molecules/ModalCollection";
import React, { useState } from "react";
import { relasePokemonAction } from "store/action";
import { useAppContext } from "store/store";
import Card from "../../components/atoms/Card";
import { flex, flexCenter, flexCol } from "../../styles/utilities";
import { GridContainer, GridItems } from "../PokemonHomePage/style";

function MyPokemonPage() {
  const [selectPokemon, setSelectPokemon] = useState({
    status: false,
    pokemon: {},
  });
  const { state, dispatch } = useAppContext();

  // close modal when click outside;
  let collectionModal = document.getElementById("modal-collection");
  window.onclick = function(event) {
    if (event.target === collectionModal) {
      setSelectPokemon({ ...selectPokemon, status: false })
     }
  }

  return (
    <div
      css={[
        flex,
        flexCenter,
        flexCol,
        css`
          max-height: 100vh;
          overflow-y: scroll;
          display: flex;
          position: relative;
          padding-top: 450px;

          @media (min-width: 480px){
            padding-top: 150px;
          }
        `,
      ]}
    >
      <ModalCollection
        onShow={selectPokemon?.status}
        onClose={() => setSelectPokemon({ ...selectPokemon, status: false })}
        onRelease={() => {
          relasePokemonAction(dispatch, selectPokemon?.pokemon?.nickname);
          setSelectPokemon({ ...selectPokemon, status: false });
        }}
        imgSource={selectPokemon?.pokemon?.sprites?.front_default}
        movements={selectPokemon?.pokemon?.moves}
      />
      {state?.collectedPokemon?.length > 0 ? (
        <div css={[GridContainer]}>
          {state?.collectedPokemon?.map((pokemonItem, key) => {
            return (
              <div css={GridItems} key={`pokemon-${key}`}>
                <Card
                  number={key + 1}
                  name={pokemonItem?.name}
                  imgSource={`${pokemonItem?.sprites?.front_default}`}
                  href={`/pokemon/${pokemonItem?.name}`}
                  owned={state.collectedPokemon.length}
                  nickname={pokemonItem?.nickname}
                  cardType="collection"
                  onClick={() =>
                    setSelectPokemon({ status: true, pokemon: pokemonItem })
                  }
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>There is no pokemon in your collection page...</div>
      )}
    </div>
  );
}

export default MyPokemonPage;
