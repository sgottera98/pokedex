import axios from 'axios'

export function getPokemon ({url}) {
    // console.log(url);
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                if(res) {
                    resolve(res.data)
                }
            }).catch(err => reject(err))
    })
}
export function getAllPokemon (url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                if(res) {
                    resolve(res.data)
                }
            }).catch(err => reject(err))
    })
}