import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"

const HeaderForm = () => {
    const [category, setCategory] = useState("people")
    const [id, setId] = useState("")
    const history = useHistory()

    const submitHandler =(e) =>{
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                    Search: 
                    <select onChange={e=>setCategory(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Starships</option>

                    </select>
                    ID: 
                    <input type="number" onChange={e=>setId(e.target.value)}/>
                    <button className='btn btn-primary'> Search </button>
                </p>
            </form>
        </div>
    )
}

export default HeaderForm