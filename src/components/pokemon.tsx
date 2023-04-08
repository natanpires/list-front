'use client';

import { useGetPokemonByNameQuery } from '@/redux/services/pokemon';
import Image from 'next/image';

const Pokemon = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <Image
            loader={({ src }) => src}
            src={data.sprites.front_shiny}
            alt={data.species.name}
            width={250}
            height={250}
          />
        </>
      ) : null}
    </div>
  );
};

export default Pokemon;
