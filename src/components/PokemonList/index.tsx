import './index.css';
import PokemonCard from '../PokemonCard';
import { Pokemon } from '../../interfaces/IPokemon';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const PokemonList = () => {
    const [currentPage, setPage] = useState<number>(0);

    const url: string = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`;

    const getPokemons = () => {
        return axios.get(url); 
    }

    const query = useQuery(['getPokemons',currentPage], getPokemons);
                           
    const { isLoading , isError , data } = query;
    const pokemons: Pokemon[] = data?.data.results;
    
    const goToNextPage = (): void => {
        setPage(prevState => Math.min(prevState + 20, data?.data.count)); 
    }

    const goToPreviousPage = (): void => {
        setPage(prevState => Math.max(prevState - 20, 0));
    }

    if(isLoading) {
        return <span>Carregando...</span>
    }
    if(isError) {
        return <span>Deu erro.</span>
    }

    return(
        <>
        <div className="pokemon-list">
            <h1>Lista de Pokémon</h1>
            {pokemons &&
                pokemons.map((pokemon: Pokemon, index: number) => {
                return <PokemonCard key={index} pokemon={pokemon} />
                })
            }
        </div>
        <div className="btn-div">
            <button onClick={goToPreviousPage}>Anterior</button>
            <button onClick={goToNextPage}>Próximo</button>
        </div>
        </>
    );
}

export default PokemonList;
