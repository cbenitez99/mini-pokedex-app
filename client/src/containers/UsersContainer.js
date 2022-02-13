import React from 'react'
import {Routes, Route} from "react-router-dom"
import TrainerProfile from '../components/TrainerProfile'
const UsersContainer = ({user, pokemonData, pokemonType, handleSubmit, handleChange, handleClick}) => {
    return (
        <div>
            <Routes>
                <Route path=":id" element={<TrainerProfile pokemonData={pokemonData} 
            pokemonType={pokemonType} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleClick={handleClick} user={user}/>}/>
            </Routes>
        </div>
    )
}

export default UsersContainer;