import React from 'react';
import VirtualizedSelect from 'react-virtualized-select'
import pokemon from '../../lib/pokemon';

import './index.css';
import Pokemon from './Pokemon';
import allAvailable from './allAvailablePokemon';
import { routes } from './routeData';

const pokemonAsOptions = Array.from(pokemon.all(), (_, index) => ({
    label: _,
    value: index
}));
const options = pokemonAsOptions.filter(p => allAvailable.includes(p.label));

const routeOptions = routes.map((r, i) => ({
    label: r.name,
    value: i,
    pokemon: pokemonAsOptions.filter(p => r.pokemon.includes(p.label))
}));

class Finder extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selected: [],
            selectedRoute: []
        };
    }

    componentDidMount = () => {
        const ls = JSON.parse(localStorage.getItem('selectedPokemon'));
        const rs = JSON.parse(localStorage.getItem('selectedRoute'));
        this.setState({ selected: ls || [], selectedRoute: rs || [] });
    }

    select = selected => {
        this.setState({ selected });
        localStorage.setItem('selectedPokemon', JSON.stringify(selected));
    }

    selectRoute = selectedRoute => {
        this.setState({ selectedRoute });
        localStorage.setItem('selectedRoute', JSON.stringify(selectedRoute));
    }

    render() {
        return (
            <div className='finder'>
                <h1>let's find some pokemon</h1>
                <br />
                <VirtualizedSelect
                    multi={true}
                    value={this.state.selected}
                    options={options}
                    onChange={this.select}
                />
                {
                    this.state.selected.map(p => {
                        return <Pokemon key={p.value} data={p} />
                    })
                }
                <hr />
                <h1>or, let's look at some routes</h1>
                <VirtualizedSelect
                    multi={true}
                    value={this.state.selectedRoute}
                    options={routeOptions}
                    onChange={this.selectRoute}
                />
                {
                    this.state.selectedRoute.map(r => {
                        return r.pokemon.map(p => {
                            return <Pokemon key={p.value} data={p} />
                        });
                    })
                }
            </div>
        );
    }
}

export default Finder;
