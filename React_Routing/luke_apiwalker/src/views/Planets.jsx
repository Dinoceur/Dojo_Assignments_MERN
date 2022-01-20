import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Planets = () => {
    const [planets, setPlanets] =useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setPlanets(res.data)

            })
            .catch(err => {
                setPlanets(null)
                //not successful
            })
    }, [id])

    return (
        <div>
            {
                planets ?(
                    <div>
                        <h1> Planet Name: {planets.name}</h1>
                        <h3> Rotation Period: {planets.rotation_period} days</h3>
                        <h3> Orbital Period: {planets.orbital_period} days</h3> 
                        <h3> Diameter: {planets.diameter} km</h3> 
                        <h3> Climate: {planets.climate}</h3> 
                        <h3> Gravity: {planets.gravity}</h3> 
                        <h3> Terrain: {planets.terrain}</h3> 
                        <h3> Surface Water: {planets.surface_water}</h3> 
                        <h3> Population: {planets.population}</h3> 
                    </div>) :
                    <h1>Loading.....</h1>
            }
        </div>
    )
}

export default Planets