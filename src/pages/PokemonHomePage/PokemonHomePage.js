/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import Loader from "components/atoms/Loader";
import { POKEMON_LIST } from "graphql/query";
import React, { useMemo } from "react";
import { useAppContext } from "store/store";
import Card from "../../components/atoms/Card";
import { flex, flexCenter, flexCol } from "../../styles/utilities";
import { GridContainer, GridItems } from "./style";

function PokemonHomePage() {
  const {state} = useAppContext();
  const { data: { pokemons } = {}, fetchMore, networkStatus } = useQuery(POKEMON_LIST, {
    variables: { limit: 10 },
    notifyOnNetworkStatusChange: true
  });

  const countPokemon = useMemo(() => (name) => {
    const currentPokemons = state.collectedPokemon;
    const count = currentPokemons.filter((pokemon) => {
      return pokemon?.name === name;
    });
    return count?.length || 0;
  }, [networkStatus])
  
  const handleScroll = ({ currentTarget }, onLoadMore) => {
    // when scrolling down is maximum content;
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
      ) {
        onLoadMore();
      }
  };
    
  const onLoadMore = () => {
    fetchMore({
      variables: {
        offset: pokemons.results.length
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return{
          pokemons : {
            next: fetchMoreResult.pokemons.next,
            results : [...prev?.pokemons?.results || [], ...fetchMoreResult?.pokemons?.results],
          }
        }
      }
    })
  }

  if (!pokemons || !pokemons.results) return <Loader />;

  return (
    <div
      onScroll={(e)=>{handleScroll(e,onLoadMore)
      }}
      css={[
        flex,
        flexCenter,
        flexCol,
        css`
          max-height: 100vh;
          overflow-y: scroll;
          display: flex;
          position: relative;
          padding-top: 250px;

          @media (min-width: 480px){
            padding-top: 150px;
          }
        `,
      ]}
      
    >
      <div css={css`
        max-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 2rem;

        @media (min-width: 480px){
          padding-top: 5rem;
        }
      `}>
        <div css={[GridContainer]}>
          { pokemons.results &&
            pokemons.results.map((pokemon, key) => {
            return (
              <div
                css={GridItems}
                key={`pokemon-${key}`}
              >
                <Card
                  number={key + 1}
                  name={pokemon?.name}
                  imgSource={`${pokemon.image}`}
                  href={`/pokemon/${pokemon?.name}`}
                  owned={countPokemon(pokemon?.name)}
                />
              </div>
            );
          })}
        </div>
        {networkStatus === 3 && <div css={css`padding: 4rem 0 4rem 0;`}>Loading the pokemons...</div>}
      </div>
    </div>
  );
}

export default PokemonHomePage;
