import React from 'react'
import {Link} from 'react-router-dom'

import Color from '../../services/color'

const PokemonCard = ({pokemons}) => {
    // console.log(pokemons)
    return (
        <>
            <div className="container-cards">
                {
                    pokemons?.map((el, id) => (
                        <Link to={`/details/${el.id}`} key={id}>
                            <div className="cards" key={id}>

                                <h2>{el.id}. {el.name}</h2>
                                <img src={el.sprites.front_default} alt="Avatar padrão do pokemon." 
                                    style={{background:`${Color()?.[el.types[0].type.name]}`}}></img>
                                 <p>{el.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default PokemonCard