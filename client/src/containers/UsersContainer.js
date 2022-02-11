import React from 'react'
import {Routes, Route} from "react-router-dom"
import TrainerCard from '../components/TrainerCard'
export default function UsersContainer({user, caughtPokemon}) {
    return (
        <div>
            <Routes>
                <Route path=":id" element={<TrainerCard user={user} caughtPokemon={caughtPokemon}/>}/>
            </Routes>
        </div>
    )
}