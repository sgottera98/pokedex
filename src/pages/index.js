import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()

    useEffect(() => {
        fetch(currentPage)
            .then((res) => res.json())
            .then((pokemons) => {
                if (pokemons) {
                    fetchPokemonInfo(pokemons.results);
                    setNextPage(pokemons.next);
                    setPrevPage(pokemons.previous)
                }
            })
            .catch((err) => console.log(err));
    }, [currentPage]);

    const fetchPokemonInfo = (pokemons) => {
        pokemons.forEach((pokemon) => {
            fetch(pokemon.url)
                .then((res) => res.json())
                .then((pokeData) => {
                    setData((value) => [...value, pokeData]);
                })
                .catch((err) => console.log(err));
        });
    };

    const HandlePokeData = (pokemons) => {
        if (!pokemons) {
            return;
        }

        let rows = [];
        //console.log(pokemons);
        pokemons.forEach((item) => {
            //console.log(item);
            rows.push(
                <>
                    <div key={item.id}>
                        <span>
                            <h2>{item.name}</h2>
                            <img src={HandleImage(item)}></img>
                            <br></br>  	
                            <p>
                            &#8250; Height: {item.height / 10} m <br></br>
                            &#8250; Weight: {item.weight / 10} kg <br></br>
                            {HandleAtributes(item.abilities)}
                            </p>
                            
                        </span>
                    </div>
                </>
            );
        });
        return rows;
    };

    const HandleAtributes = (pokemons) => {
        let rows = [];

        pokemons.forEach((item, id) => {
            // console.log(item.ability.name);
            rows.push(
                <>
                    &#8250; Ability: {item.ability.name}
                    <br></br>
                </>
            );
        });

        return rows;
    };

    const HandleImage = (item) => {
        //console.log(item.sprites.back_default);
        return item.sprites.front_default;
    };

    return (
        <>
            <h1><img src='https://fontmeme.com/permalink/210201/84f1943cbd05e36bb90d12663346a34b.png'></img></h1>
            <div className="App">{HandlePokeData(data)}</div>

            <button onClick= {() => setCurrentPage(prevPage)}><img src="https://fontmeme.com/permalink/210201/f1ae6f0ea814851b8b0f8c4d167eb0dc.png" ></img></button>
            <button onClick= {() => setCurrentPage(nextPage)}><img src="https://fontmeme.com/permalink/210201/3368484e2192641404b8f23668e1ed43.png" ></img></button>
        </>
    );
};

export default Home;
