/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useCallback } from 'react';

import ComponentSkeleton from '../../services/skeleton'  
import PokemonCard from '../../components/cards'
import Pagination from '../../components/pagination'
import Navbar from '../../components/nav'
import {getPokemon, getAllPokemon} from '../../services/pokemon'
import Footer from '../../components/footer'

import './styles.css'



const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [nextPage, setNextPage] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [loading, setLoading] = useState(true)
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'


    const pokemonFunction = useCallback( async (param) => {
        let res = await getAllPokemon(param);
        setLoading(false)
        setNextPage(res.next)
        setPrevPage(res.previous)
        loadPokemon(res.results)
      }, [])


    const loadPokemon = (data) => {
        if(!data) { return }

        Promise.all(data.map(async pokemon => {
            // console.log(pokemon);
            return await getPokemon(pokemon)
        })).then(res => 
            setPokemons(res)
        ).catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        setLoading(true);

        (async () => {
            pokemonFunction(initialURL)
        })()
    
      }, [pokemonFunction])


    const gotoNextPage =  () => {
        pokemonFunction(nextPage)
    }

    const gotoPrevPage =  () => {
        pokemonFunction(prevPage)
    }


    if (loading) return <ComponentSkeleton/>


    return (
        <> 
            <Navbar/>
            {loadPokemon()}
            <Pagination 
                gotoNextPage={nextPage ? gotoNextPage : null}
                gotoPrevPage={prevPage ? gotoPrevPage : null}
            />
            <PokemonCard pokemons={pokemons}/>
             <Pagination 
                gotoNextPage={nextPage ? gotoNextPage : null}
                gotoPrevPage={prevPage ? gotoPrevPage : null}
            />
            <Footer/>
        </>
    )
}


export default Home;