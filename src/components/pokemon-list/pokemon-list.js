import React, { useState, useEffect, useContext } from "react"
import { getPokemonList } from "../../services/pokedex-api"
import { Button } from "../buttons/load-button/button"
import { Link } from "react-router-dom"
import { Section, Ul, Li } from './styles'
import { ThemeContext } from "../../contexts/theme-context"

let offset = 0;

export const PokemonList = () => {
    const { theme } = useContext(ThemeContext) 

    const [pokemonCard, setPokemonCard] = useState({
        pokemons: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokemonList = await getPokemonList("https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0")

            const promises = pokemonList.results.map(async item => {
                const pokemonUrl = item.url
                const pokemonResponse = await fetch(pokemonUrl)
                const pokemonData = await pokemonResponse.json()
                return pokemonData
            })
            const pokemonsData = await Promise.all(promises)

            setPokemonCard({
                pokemons: pokemonsData
            })
        }

        fetchData()
    }, [])

    const addMorePokemons = async () => {
        offset += 10

        const pokemonListResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`)
        const pokemonListData = await pokemonListResponse.json()

        const promises = pokemonListData.results.map(async item => {
            const pokemonUrl = item.url
            const pokemonResponse = await fetch(pokemonUrl)
            const pokemonData = await pokemonResponse.json()
            return pokemonData
        })
        const newPokemonsData = await Promise.all(promises)

        setPokemonCard({
            pokemons: [...pokemonCard.pokemons, ...newPokemonsData]
        })
    }

    return (
        <Section>
            <Ul>
                {
                    pokemonCard.pokemons.map((pokemon, index) => {
                        return (
                            <Li key={index} style={{ backgroundColor: theme.background }}>
                                <Link to={`/details/${pokemon.id}`}>
                                    <h1 style={{ color: theme.color }}>{pokemon.name}</h1>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                </Link>
                            </Li>
                        )
                    })
                }
            </Ul>

            <Button onClick={addMorePokemons} style={{ color: theme.color, backgroundColor: theme.background }}>Load more</Button>
        </Section>
    )
}