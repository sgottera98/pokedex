import React, {useEffect, useState} from 'react'

import Navbar from "../../components/nav"
import {getPokemon} from '../../services/pokemon'
import Color from '../../services/color'

import './details.css';

const Details = ({match}) => {
    
    // console.log(match.params.id);
    const [idNumber, SetIdNumber] = useState(match.params.id)


    const url = `https://pokeapi.co/api/v2/pokemon/${idNumber}/`

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        getPokemon({url})
        .then(res => setPokemon(res))
    }, [url])

    if (!pokemon) {
        return <></>
    }
    
    
    return (
        <div className="card-details">
            <Navbar/>
            <button className="button-prev" onClick={() => SetIdNumber(idNumber > 1 ? idNumber - 1 : idNumber)}>prev</button>
            <button className="button-next" onClick={() => SetIdNumber(idNumber < 1118 ? parseInt(idNumber) + 1 : idNumber)}>next</button>
            <h2>
                {pokemon.id}. {pokemon.name}
            </h2>
            <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon"></img>
            <ul>
                <li>Types: {pokemon.types.map(el => el.type.name).join(' | ')}</li>
                <li>Weight: {pokemon.weight / 10} kg</li>
                <li>Height: {pokemon.height / 10} m</li>
                <li>Abilities: {pokemon.abilities.map(el => el.ability.name).join(' | ')}</li>
            </ul>
        </div>
    )
}

export default Details