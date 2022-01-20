import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Starships = () => {
    const [starships, setStarships] =useState(null)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(res => { //successful
                console.log(res.data)
                setStarships(res.data)
                
            })
            .catch(err => {
                setStarships(null)
                //not successful
            })
    }, [id])

    return (
        <div>
            {
                starships ?(
                    <div>
                        <h1> Starship Name: {starships.name}</h1>
                        <h3> Model: {starships.model}</h3>
                        <h3> Manufacturer: {starships.manufacturer}</h3>
                        <h3> Cost In Credits: {starships.cost_in_credits}</h3>
                        <h3> Length: {starships.length}</h3>
                        <h3> Max Atmosphering Speed: {starships.max_atmosphering_speed}</h3>
                        <h3> Crew: {starships.crew}</h3>
                        <h3> Passengers: {starships.passengers}</h3> 
                    </div>) :
                    <h1>Loading.....</h1>
            }
        </div>
    )
}

export default Starships