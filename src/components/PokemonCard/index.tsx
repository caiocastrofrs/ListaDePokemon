import './index.css';
import { Pokemon } from '../../interfaces/IPokemon';

interface Props {
    pokemon: Pokemon;
    key: number;
}

const PokemonCard = ({pokemon}: Props): JSX.Element => {
    return(
        <div className="pokemon-card">
            <p>{pokemon?.name}</p>
        </div>
    );
}

export default PokemonCard;
