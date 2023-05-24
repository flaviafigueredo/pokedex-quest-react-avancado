import React, { useEffect, useState, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { getPokemonList } from "../../services/pokedex-api"
import { Header } from "../header/header"
import { Section, PokemonInfo, Div, TypeUl, Li, AbilitiesUl, AbilitiesLi, MovesUl, ReturnButton, Container } from './styles'
import { ThemeContext } from "../../contexts/theme-context"

export const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext)

    const [pokemon, setPokemon] = useState({})
    const [types, setTypes] = useState([])
    const [moves, setMoves] = useState([])
    const [abilities, setAbilities] = useState([])

    const { id } = useParams()

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

    useEffect(() => {
        async function fetchData() {
            const pokemonData = await getPokemonList(pokemonUrl)

            const pokemon = {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default
            }

            const types = pokemonData.types.map(type => type.type.name)
            const moves = pokemonData.moves.map(move => move.move.name)

            const abilities = pokemonData.abilities.map(ability => ability.ability.url)

            const abilityDataPromises = await Promise.all(abilities.map(async abilityUrl => {
                const abilityData = await getPokemonList(abilityUrl)

                const filteredAbilityDescription = abilityData.effect_entries.filter(description => description.language.name === 'en')

                return {
                    name: abilityData.name,
                    description: filteredAbilityDescription[0].effect
                }
            }))

            setPokemon(pokemon)
            setTypes(types)
            setMoves(moves)
            setAbilities(abilityDataPromises)

        }
        fetchData()
    }, [id, pokemonUrl])

    return (
        <Container style={{ color: theme.color,  backgroundImage: theme.image }}>
            <Header />
            <Section>
                <Link to='/'>
                    <ReturnButton style={{ color: theme.color, backgroundColor: theme.background }}>X</ReturnButton>
                </Link>

                <PokemonInfo style={{ backgroundColor: theme.background }}>
                    <Div>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.image} alt={pokemon.name} />

                        <h3>type:</h3>
                        <TypeUl>
                            {types.map((type) => (<Li key={type}>{type}</Li>))}
                        </TypeUl>
                    </Div>

                    <h3>abilities:</h3>
                    <AbilitiesUl>
                        {abilities.map((ability, index) => (
                            <AbilitiesLi key={index}>
                                <h3>{ability.name}</h3>
                                <p>{ability.description}</p>
                            </AbilitiesLi>
                        ))}
                    </AbilitiesUl>

                    <h3>moves:</h3>
                    <MovesUl>
                        {moves.map(move => (<Li key={move}>{move}</Li>))}
                    </MovesUl>
                </PokemonInfo>
            </Section>
        </Container>
    )
}