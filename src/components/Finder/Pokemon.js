import React from 'react';
import { routes } from './routeData';
import RouteName from './RouteName';

const Pokemon = ({ data }) => (
    <div className='pokemon-container'>
        <div className='pokeball'>
            <div className='pokemon-label'>
                <b>{data.label}</b>
            </div>
            <div>
                <img className='pokemon-image' alt='' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${`${data.value + 1}`.padStart(3, '0')}.png`} />
            </div>
            <div className='pokemon-text'>
                {
                    routes.map(r => {
                        if (r.pokemon.includes(data.label)) return <RouteName key={`${r.name + data.label}`} route={r} pokemon={data} />;
                        return null;
                    })
                }
            </div>
        </div>
    </div>
);

export default Pokemon;