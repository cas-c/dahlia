import React from 'react';
import VirtualizedSelect from 'react-virtualized-select'
import pokemon from '../../lib/pokemon';

import './index.css';
import Pokemon from './Pokemon';
import allAvailable from './allAvailablePokemon';

const options = Array.from(pokemon.all(), (_, index) => ({
  label: _,
  value: index
})).filter(p => allAvailable.includes(p.label));


class Finder extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selected: []
        };
    }

    componentDidMount = () => {
        this.setState({ selected: JSON.parse(localStorage.getItem('selectedPokemon')) });
    }

    select = selected => {
        this.setState({ selected });
        localStorage.setItem('selectedPokemon', JSON.stringify(selected));
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
            </div>
        );
    }
}

export default Finder;
