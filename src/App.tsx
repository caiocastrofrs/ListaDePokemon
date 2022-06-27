import './App.css';
import PokemonList from './components/PokemonList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
    <QueryClientProvider client={queryClient}>
    	<div className="App">
            <PokemonList />
        </div>
    </QueryClientProvider>
	);
}

export default App;
