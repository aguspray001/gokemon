/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
// external
import { css } from "@emotion/react";
// internal
import bgField from "assets/images/bg-field.jpg";
import ModalForm from "components/molecules/ModalForm";
import { POKEMON_DETAIL } from "graphql/query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { adoptPokemonAction, getPokemonAction } from "store/action";
import { useAppContext } from "store/store";
import Button from "../../components/atoms/Button";
import Loader from "../../components/atoms/Loader";
import PokemonInfo from "../../components/molecules/PokemonInfo";
import { blinkEffect, field, fieldContainer, pokemonStyle } from "./style";



function PokemonDetailsPage() {
  const [isCatched, setIsCatched] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [pokemonNickname, setPokemonNickname] = useState("");
  const params = useParams();
  const {dispatch} = useAppContext()

  // fetch pokemon
  const { loading, data: { pokemon } = {} } = useQuery(POKEMON_DETAIL, {
    variables: { pokemonName: params.name },
  });

  // catch pokemon using button
  const catchPokemon = () => {
    setBlinking(true);
    setTimeout(()=>{
      const isRandomCatch = Math.random() > 0.5
      setIsCatched(isRandomCatch)
      setBlinking(false);
      getPokemonAction(dispatch, isRandomCatch);
    }, 3000);
  }

  // confirm to adopt a pokemon
  const adoptPokemon = (pokemon) => {
    const data = {
      ...pokemon,
      nickname : pokemonNickname
    };
    adoptPokemonAction(dispatch, data);
    setIsCatched(false);
  }
  
  // confirm to release a pokemon
  const releasePokemon = () => {
    setIsCatched(false);
  }

  if (loading) return <Loader />;
  
  return (
    <div css={[field, css`background-image: url(${bgField});`,]}>
      <ModalForm 
        onShow={isCatched} 
        onRelease={releasePokemon} 
        onCatch={()=>adoptPokemon(pokemon)}
        onChangeName={(e)=>setPokemonNickname(e.target.value)}
      />
      <div css={[fieldContainer, blinking && blinkEffect]}>
        {pokemon?.sprites?.front_default && (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <img
              css={pokemonStyle(isCatched)}
              width={250}
              src={pokemon?.sprites?.front_default}
              alt="pokemon"
            />
            <Button title={isCatched?"You got me!":"Catch Me Now!"} onClick={()=>catchPokemon(pokemon)}/>
          </div>
        )}
        <PokemonInfo imgSource={pokemon?.sprites?.front_default} movements={pokemon?.moves} type={pokemon?.types}/>
      </div>
    </div>
  );
}

export default PokemonDetailsPage;
